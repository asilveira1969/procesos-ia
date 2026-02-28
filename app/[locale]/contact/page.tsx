import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/locales";
import { buildPageMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/forms/contact-form";
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
    title: dict.contact.title,
    description: dict.contact.description,
    path: "/contact",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const notes = {
    es: {
      privacy:
        "Privacy: los datos de contacto se usan solo para responder consultas y gestionar materiales solicitados.",
      legal:
        "Legal: cada acompanamiento se define manualmente y se activa solo despues de una revision humana.",
    },
    en: {
      privacy:
        "Privacy: contact data is used only to respond to inquiries and manage requested materials.",
      legal:
        "Legal: each advisory engagement is scoped manually and activated only after human review.",
    },
    pt: {
      privacy:
        "Privacy: os dados de contato sao usados apenas para responder solicitacoes e entregar materiais pedidos.",
      legal:
        "Legal: cada acompanhamento e definido manualmente e ativado somente apos revisao humana.",
    },
  }[locale];

  return (
    <SectionShell
      title={dict.contact.title}
      description={dict.contact.description}
      className="py-16"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6 text-sm leading-7 text-muted">
          <p id="privacy">{notes.privacy}</p>
          <p id="legal">{notes.legal}</p>
        </div>
        <ContactForm
          locale={locale}
          labels={{
            name: dict.forms.name,
            email: dict.forms.email,
            message: dict.forms.message,
            submit: dict.forms.submit,
            sending: dict.forms.sending,
            success: dict.forms.success,
            error: dict.forms.error,
          }}
        />
      </div>
    </SectionShell>
  );
}
