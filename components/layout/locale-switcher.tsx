"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SUPPORTED_LOCALES, type Locale } from "@/types";
import { cn } from "@/lib/utils/classnames";

function buildHref(pathname: string, targetLocale: Locale) {
  const segments = pathname.split("/").filter(Boolean);
  const [, ...rest] = segments;
  const suffix = rest.length > 0 ? `/${rest.join("/")}` : "";
  return `/${targetLocale}${suffix}`;
}

export function LocaleSwitcher() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/").filter(Boolean)[0] as Locale | undefined;

  return (
    <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.24em] text-muted">
      {SUPPORTED_LOCALES.map((locale, index) => (
        <span key={locale} className="flex items-center gap-2">
          {index > 0 ? <span>|</span> : null}
          <Link
            href={buildHref(pathname, locale)}
            className={cn(
              "transition duration-300 hover:text-brand",
              currentLocale === locale && "text-brand",
            )}
          >
            {locale.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
