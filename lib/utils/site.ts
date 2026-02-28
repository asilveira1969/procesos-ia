import type { Locale } from "@/types";

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

export function buildAbsoluteUrl(pathname: string): string {
  return new URL(pathname, getSiteUrl()).toString();
}

export function localizePath(locale: Locale, path = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const suffix = normalized === "/" ? "" : normalized;
  return `/${locale}${suffix}`;
}
