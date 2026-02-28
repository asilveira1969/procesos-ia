import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContentList } from "@/lib/content";
import { getTemplatesForLocale } from "@/lib/content/templates";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/locales";
import { buildPageMetadata, personJsonLd } from "@/lib/seo";
import { AboutPreview } from "@/components/sections/about-preview";
import { ClosingCta } from "@/components/sections/closing-cta";
import { FeaturedInsights } from "@/components/sections/featured-insights";
import { HeroFounder } from "@/components/sections/hero-founder";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ProblemsSolvedSection } from "@/components/sections/problems-solved-section";
import { TemplatesPreview } from "@/components/sections/templates-preview";
import { TrustReasonsSection } from "@/components/sections/trust-reasons-section";
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
    title: dict.siteTitle,
    description: dict.home.description,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const [insights, templates] = await Promise.all([
    getContentList("insights", locale),
    Promise.resolve(getTemplatesForLocale(locale)),
  ]);

  return (
    <>
      <JsonLd data={personJsonLd(locale)} />
      <HeroFounder locale={locale} />
      <AboutPreview locale={locale} />
      <ProcessSteps locale={locale} />
      <ProblemsSolvedSection locale={locale} />
      <TrustReasonsSection locale={locale} />
      <FeaturedInsights locale={locale} items={insights.slice(0, 3)} />
      <TemplatesPreview locale={locale} items={templates.slice(0, 3)} />
      <ClosingCta locale={locale} />
    </>
  );
}
