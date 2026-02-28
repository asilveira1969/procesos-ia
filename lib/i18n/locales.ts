import { SUPPORTED_LOCALES, type Locale } from "@/types";

export { SUPPORTED_LOCALES };
export type { Locale };

const configuredLocale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE;

export const DEFAULT_LOCALE: Locale =
  configuredLocale && SUPPORTED_LOCALES.includes(configuredLocale as Locale)
    ? (configuredLocale as Locale)
    : "es";

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function normalizeLocale(value?: string | null): Locale {
  if (value && isLocale(value)) {
    return value;
  }

  return DEFAULT_LOCALE;
}

export function detectLocaleFromHeader(headerValue?: string | null): Locale {
  if (!headerValue) {
    return DEFAULT_LOCALE;
  }

  const ordered = headerValue
    .split(",")
    .map((item) => item.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean);

  for (const item of ordered) {
    if (!item) {
      continue;
    }

    if (item.startsWith("es")) {
      return "es";
    }

    if (item.startsWith("en")) {
      return "en";
    }

    if (item.startsWith("pt")) {
      return "pt";
    }
  }

  return DEFAULT_LOCALE;
}
