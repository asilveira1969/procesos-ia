import type { Locale } from "@/types";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { LinkedInLink } from "@/components/layout/linkedin-link";

export function SiteFooter({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <footer className="border-t border-line/80 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.8fr] md:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            {dict.footer.newsletterTitle}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
            {dict.footer.newsletterBody}
          </p>
        </div>
        <NewsletterForm
          locale={locale}
          labels={{
            name: dict.forms.name,
            email: dict.forms.email,
            submit: dict.forms.submit,
            sending: dict.forms.sending,
            success: dict.forms.success,
            error: dict.forms.error,
          }}
        />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 border-t border-line/70 px-6 py-6 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-center gap-4">
          <a href={`/${locale}/contact#privacy`}>{dict.footer.privacy}</a>
          <a href={`/${locale}/contact#legal`}>{dict.footer.legal}</a>
          <LinkedInLink subtle />
        </div>
        <p>
          {new Date().getFullYear()} Silveira Consultora. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
