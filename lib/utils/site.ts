import type { Locale } from "@/types";

const DEFAULT_SITE_URL = "http://localhost:3000";

export function getSiteUrl(): string {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    return DEFAULT_SITE_URL;
  }

  const candidate = /^https?:\/\//i.test(configuredUrl)
    ? configuredUrl
    : `https://${configuredUrl}`;

  try {
    return new URL(candidate).toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function buildAbsoluteUrl(pathname: string): string {
  return new URL(pathname, getSiteUrl()).toString();
}

export function localizePath(locale: Locale, path = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const suffix = normalized === "/" ? "" : normalized;
  return `/${locale}${suffix}`;
}
