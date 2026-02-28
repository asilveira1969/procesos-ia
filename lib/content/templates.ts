import type { Locale, TemplateItem } from "@/types";

const templates: TemplateItem[] = [
  {
    id: "operational-diagnostic",
    title: "Operational Diagnostic Brief",
    description:
      "A concise checklist to surface friction points, ownership gaps, and near-term priorities.",
    locale: "all",
    filePath: "/files/templates/operational-diagnostic.txt",
    ctaLabel: "Download template",
  },
  {
    id: "mapa-prioridades",
    title: "Mapa de Prioridades Operativas",
    description:
      "Una plantilla breve para ordenar decisiones, responsables y secuencia de accion.",
    locale: "es",
    filePath: "/files/templates/mapa-prioridades.txt",
    ctaLabel: "Descargar template",
  },
  {
    id: "roteiro-decisao",
    title: "Roteiro de Decisao com IA",
    description:
      "Um roteiro simples para validar onde a IA gera ganho sem aumentar a complexidade.",
    locale: "pt",
    filePath: "/files/templates/roteiro-decisao.txt",
    ctaLabel: "Baixar template",
  },
];

export function getTemplatesForLocale(locale: Locale) {
  return templates.filter(
    (item) => item.locale === "all" || item.locale === locale,
  );
}

export function getTemplateById(templateId: string) {
  return templates.find((item) => item.id === templateId) ?? null;
}
