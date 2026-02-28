import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTemplatesForLocale } from "@/lib/content/templates";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/locales";
import { buildPageMetadata } from "@/lib/seo";
import { TemplateDownloadForm } from "@/components/forms/template-download-form";
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
    title: dict.templates.title,
    description: dict.templates.description,
    path: "/templates",
  });
}

export default async function TemplatesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const items = getTemplatesForLocale(locale);

  return (
    <SectionShell
      title={dict.templates.title}
      description={dict.templates.description}
      className="py-16"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className="card-surface rounded-[2rem] p-6">
            <h3 className="font-serif text-3xl text-brand">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
            <TemplateDownloadForm
              locale={locale}
              template={item}
              labels={{
                email: dict.forms.email,
                submit: dict.forms.submit,
                sending: dict.forms.sending,
                success: dict.forms.templateSuccess,
                error: dict.forms.error,
              }}
            />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
