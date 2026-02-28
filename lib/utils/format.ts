import type { Locale } from "@/types";

const localeMap: Record<Locale, string> = {
  es: "es-ES",
  en: "en-US",
  pt: "pt-BR",
};

export function formatDate(date: string, locale: Locale): string {
  return new Intl.DateTimeFormat(localeMap[locale], {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
