import type { Metadata } from "next";
import type { ContentEntry, Locale } from "@/types";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { buildAbsoluteUrl, localizePath } from "@/lib/utils/site";

const defaultOgImage = "/images/og/site-default.svg";

export function buildAlternates(locale: Locale, path: string) {
  return {
    canonical: localizePath(locale, path),
    languages: {
      es: localizePath("es", path),
      en: localizePath("en", path),
      pt: localizePath("pt", path),
    },
  };
}

export function buildPageMetadata({
  locale,
  title,
  description,
  path = "",
  image = defaultOgImage,
}: {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const localizedPath = localizePath(locale, path);
  const url = buildAbsoluteUrl(localizedPath);
  const imageUrl = buildAbsoluteUrl(image);

  return {
    title,
    description,
    alternates: buildAlternates(locale, path),
    openGraph: {
      title,
      description,
      url,
      siteName: "Silveira Consultora",
      type: "website",
      locale,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function buildArticleMetadata(
  entry: ContentEntry,
  path: string,
): Metadata {
  return buildPageMetadata({
    locale: entry.locale,
    title: entry.title,
    description: entry.description,
    path,
    image: entry.coverImage || defaultOgImage,
  });
}

export function organizationJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: dictionaries[locale].siteTitle,
    url: buildAbsoluteUrl(localizePath(locale)),
    sameAs: process.env.NEXT_PUBLIC_LINKEDIN_URL
      ? [process.env.NEXT_PUBLIC_LINKEDIN_URL]
      : [],
    description: dictionaries[locale].home.description,
  };
}

export function personJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Founder, Silveira Consultora",
    jobTitle: dictionaries[locale].siteSubtitle,
    image: buildAbsoluteUrl("/images/founder/founder-placeholder.svg"),
    worksFor: {
      "@type": "Organization",
      name: dictionaries[locale].siteTitle,
    },
    description: dictionaries[locale].home.founderIntro,
  };
}

export function articleJsonLd(entry: ContentEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.title,
    description: entry.description,
    datePublished: entry.date,
    author: {
      "@type": "Person",
      name: entry.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Silveira Consultora",
    },
    url: buildAbsoluteUrl(
      localizePath(entry.locale, `/${entry.collection}/${entry.slug}`),
    ),
    image: buildAbsoluteUrl(entry.coverImage || defaultOgImage),
  };
}
