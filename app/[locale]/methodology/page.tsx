import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/locales";
import { buildPageMetadata } from "@/lib/seo";
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
    title: dict.methodology.title,
    description: dict.methodology.description,
    path: "/methodology",
  });
}

export default async function MethodologyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const cards = {
    es: [
      "Diagnostico estrategico",
      "Arquitectura de decision",
      "Cadencia de ejecucion",
    ],
    en: [
      "Strategic diagnosis",
      "Decision architecture",
      "Execution cadence",
    ],
    pt: [
      "Diagnostico estrategico",
      "Arquitetura de decisao",
      "Cadencia de execucao",
    ],
  }[locale];

  return (
    <SectionShell
      title={dict.methodology.title}
      description={dict.methodology.description}
      eyebrow={dict.home.eyebrow}
      className="py-16"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((item) => (
          <div key={item} className="card-surface rounded-[2rem] p-6">
            <h3 className="font-serif text-3xl text-brand">{item}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              {locale === "es" &&
                "Cada intervencion mantiene foco ejecutivo, alcance acotado y una secuencia clara para sostener resultados."}
              {locale === "en" &&
                "Each engagement stays narrow enough to create traction and structured enough to sustain the result."}
              {locale === "pt" &&
                "Cada intervencao preserva foco executivo, escopo controlado e uma sequencia clara para sustentar o resultado."}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
