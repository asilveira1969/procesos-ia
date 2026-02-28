import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { isLocale } from "@/lib/i18n/locales";
import { organizationJsonLd } from "@/lib/seo";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { TrackingScripts } from "@/components/layout/tracking-scripts";
import { JsonLd } from "@/components/ui/json-ld";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div className="page-shell min-h-screen">
      <TrackingScripts />
      <JsonLd data={organizationJsonLd(locale)} />
      <SiteHeader locale={locale} />
      <main>{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
