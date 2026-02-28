import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContentBySlug, getContentList } from "@/lib/content";
import { isLocale } from "@/lib/i18n/locales";
import { articleJsonLd, buildArticleMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils/format";
import { JsonLd } from "@/components/ui/json-ld";
import { RichText } from "@/components/ui/rich-text";
import { SectionShell } from "@/components/ui/section-shell";

export async function generateStaticParams() {
  const all = await Promise.all([
    getContentList("cases", "es"),
    getContentList("cases", "en"),
    getContentList("cases", "pt"),
  ]);

  return all.flatMap((items) =>
    items.map((item) => ({ locale: item.locale, slug: item.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const entry = await getContentBySlug("cases", locale, slug);
  if (!entry) {
    return {};
  }

  return buildArticleMetadata(entry, `/cases/${slug}`);
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const entry = await getContentBySlug("cases", locale, slug);

  if (!entry) {
    notFound();
  }

  return (
    <SectionShell title={entry.title} description={entry.description} className="py-16">
      <JsonLd data={articleJsonLd(entry)} />
      <div className="mb-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
        <span>{formatDate(entry.date, entry.locale)}</span>
        <span>{entry.author}</span>
      </div>
      <RichText html={entry.contentHtml} />
    </SectionShell>
  );
}
