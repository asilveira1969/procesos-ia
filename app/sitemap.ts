import type { MetadataRoute } from "next";
import { getContentList } from "@/lib/content";
import { SUPPORTED_LOCALES } from "@/lib/i18n/locales";
import { buildAbsoluteUrl, localizePath } from "@/lib/utils/site";

const staticPaths = [
  "",
  "/about",
  "/methodology",
  "/insights",
  "/cases",
  "/templates",
  "/contact",
  "/media",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const contentByLocale = await Promise.all(
    SUPPORTED_LOCALES.map(async (locale) => ({
      locale,
      insights: await getContentList("insights", locale),
      cases: await getContentList("cases", locale),
    })),
  );

  const staticEntries = SUPPORTED_LOCALES.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: buildAbsoluteUrl(localizePath(locale, path)),
      lastModified: new Date(),
    })),
  );

  const dynamicEntries = contentByLocale.flatMap((group) => [
    ...group.insights.map((item) => ({
      url: buildAbsoluteUrl(localizePath(group.locale, `/insights/${item.slug}`)),
      lastModified: new Date(item.date),
    })),
    ...group.cases.map((item) => ({
      url: buildAbsoluteUrl(localizePath(group.locale, `/cases/${item.slug}`)),
      lastModified: new Date(item.date),
    })),
  ]);

  return [...staticEntries, ...dynamicEntries];
}
