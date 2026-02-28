import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContentList } from "@/lib/content";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/locales";
import { buildPageMetadata } from "@/lib/seo";
import { ContentCard } from "@/components/ui/content-card";
import { SectionShell } from "@/components/ui/section-shell";

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
    title: dict.insights.title,
    description: dict.insights.description,
    path: "/insights",
  });
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const items = await getContentList("insights", locale);

  return (
    <SectionShell
      title={dict.insights.title}
      description={dict.insights.description}
      className="py-16"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {items.map((item) => (
          <ContentCard key={item.slug} item={item} />
        ))}
      </div>
    </SectionShell>
  );
}
