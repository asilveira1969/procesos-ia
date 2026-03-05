param(
    [string]$UserName = $env:USERNAME
)

$ErrorActionPreference = "Stop"

function Assert-Admin {
    $current = [Security.Principal.WindowsIdentity]::GetCurrent()
    $principal = New-Object Security.Principal.WindowsPrincipal($current)
    if (-not $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
        throw "Run this script from an elevated PowerShell (Run as Administrator)."
    }
}

function Backup-ProfileList {
    $stamp = Get-Date -Format "yyyyMMdd-HHmmss"
    $outDir = "C:\Temp"
    if (-not (Test-Path $outDir)) { New-Item -Path $outDir -ItemType Directory | Out-Null }
    $backupFile = Join-Path $outDir "ProfileList-backup-$stamp.reg"
    reg export "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList" $backupFile /y | Out-Null
    Write-Host "Registry backup: $backupFile"
}

function Repair-ProfileListForUser {
    param([string]$TargetUser)

    $baseKey = "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList"
    $targetPath = "C:\Users\$TargetUser"
    $keys = Get-ChildItem $baseKey

    $matches = foreach ($k in $keys) {
        $p = Get-ItemProperty $k.PSPath -ErrorAction SilentlyContinue
        if ($p.ProfileImagePath -eq $targetPath) {
            [PSCustomObject]@{
                KeyName = $k.PSChildName
                KeyPath = $k.PSPath
                IsBak = $k.PSChildName.EndsWith(".bak")
            }
        }
    }

    if (-not $matches) {
        Write-Host "No ProfileList entries found for $targetPath."
        return
    }

    $bak = $matches | Where-Object { $_.IsBak } | Select-Object -First 1
    $normal = $matches | Where-Object { -not $_.IsBak } | Select-Object -First 1

    if ($bak -and $normal) {
        $tempOld = "$($normal.KeyName).old"
        Rename-Item -Path "$baseKey\$($normal.KeyName)" -NewName $tempOld -Force
        Rename-Item -Path "$baseKey\$($bak.KeyName)" -NewName $normal.KeyName -Force
        Remove-Item -Path "$baseKey\$tempOld" -Recurse -Force
        Write-Host "Replaced active SID key with .bak entry for $TargetUser."
    } elseif ($bak -and -not $normal) {
        $newName = $bak.KeyName.Substring(0, $bak.KeyName.Length - 4)
        Rename-Item -Path "$baseKey\$($bak.KeyName)" -NewName $newName -Force
        Write-Host "Promoted .bak key to active key for $TargetUser."
    } else {
        Write-Host "No .bak key detected for $TargetUser."
    }

    # Force healthy defaults used by User Profile Service.
    Get-ChildItem $baseKey | ForEach-Object {
        $p = Get-ItemProperty $_.PSPath -ErrorAction SilentlyContinue
        if ($p.ProfileImagePath -eq $targetPath) {
            New-ItemProperty -Path $_.PSPath -Name "RefCount" -Value 0 -PropertyType DWord -Force | Out-Null
            New-ItemProperty -Path $_.PSPath -Name "State" -Value 0 -PropertyType DWord -Force | Out-Null
            Write-Host "Set RefCount=0 and State=0 on $($_.PSChildName)"
        }
    }
}

function Run-SystemRepair {
    Write-Host "Running DISM..."
    DISM /Online /Cleanup-Image /RestoreHealth
    Write-Host "Running SFC..."
    sfc /scannow
}

function Show-RecentProfileEvents {
    Write-Host "Recent User Profile Service events (last 3 days):"
    Get-WinEvent -FilterHashtable @{
        LogName = "Application"
        ProviderName = "Microsoft-Windows-User Profiles Service"
        StartTime = (Get-Date).AddDays(-3)
    } -ErrorAction SilentlyContinue |
    Select-Object TimeCreated, Id, LevelDisplayName, Message |
    Sort-Object TimeCreated -Descending |
    Select-Object -First 12 |
    Format-Table -AutoSize
}

Assert-Admin
Backup-ProfileList
Repair-ProfileListForUser -TargetUser $UserName
Run-SystemRepair
Show-RecentProfileEvents
Write-Host "Completed. Restart Windows and verify profile load."
