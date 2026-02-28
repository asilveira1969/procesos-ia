import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/locales";
import { buildPageMetadata, personJsonLd } from "@/lib/seo";
import { AboutStory } from "@/components/sections/about-story";
import { JsonLd } from "@/components/ui/json-ld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dict = getDictionary(locale);

  return buildPageMetadata({
    locale,
    title: dict.nav.about,
    description: dict.home.aboutBody,
    path: "/about",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <JsonLd data={personJsonLd(locale)} />
      <AboutStory locale={locale} />
    </>
  );
}
