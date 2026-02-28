import type { Locale, TemplateItem } from "@/types";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { TemplateDownloadForm } from "@/components/forms/template-download-form";
import { SectionShell } from "@/components/ui/section-shell";

export function TemplatesPreview({
  locale,
  items,
}: {
  locale: Locale;
  items: TemplateItem[];
}) {
  const dict = getDictionary(locale);

  return (
    <SectionShell title={dict.home.templatesTitle} className="pt-0">
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
