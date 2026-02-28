import type { Locale } from "@/types";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SectionShell } from "@/components/ui/section-shell";

const steps: Record<Locale, Array<{ title: string; body: string }>> = {
  es: [
    {
      title: "1. Diagnostico de procesos existentes",
      body: "Revisamos el flujo actual, los puntos de control y los cuellos de botella con criterio ejecutivo.",
    },
    {
      title: "2. Oportunidades reales para IA",
      body: "Identificamos donde la IA puede generar mejora concreta sin introducir complejidad innecesaria.",
    },
    {
      title: "3. Integracion con control y gobernanza",
      body: "Definimos reglas, responsables y criterios de uso para que la adopcion sea estable y auditable.",
    },
    {
      title: "4. Medicion y mejora continua",
      body: "Ajustamos en base a indicadores y aprendizaje real, no sobre expectativas teoricas.",
    },
  ],
  en: [
    {
      title: "1. Diagnose existing processes",
      body: "We review the current flow, control points, and bottlenecks through an executive lens.",
    },
    {
      title: "2. Identify real AI opportunities",
      body: "We isolate where AI can create practical value without adding operational noise.",
    },
    {
      title: "3. Integrate with control and governance",
      body: "We define the rules, ownership, and safeguards needed for a stable rollout.",
    },
    {
      title: "4. Measure and improve",
      body: "The model is refined through real metrics and observed performance, not assumptions.",
    },
  ],
  pt: [
    {
      title: "1. Diagnostico dos processos atuais",
      body: "Analisamos o fluxo atual, os pontos de controle e os gargalos com visao executiva.",
    },
    {
      title: "2. Oportunidades reais para IA",
      body: "Identificamos onde a IA pode gerar ganho concreto sem criar complexidade adicional.",
    },
    {
      title: "3. Integracao com controle e governanca",
      body: "Definimos regras, responsabilidades e criterios para uma adocao estavel e auditavel.",
    },
    {
      title: "4. Medicao e melhoria continua",
      body: "Ajustamos com base em metricas e aprendizado real, sem depender de promessas abstratas.",
    },
  ],
};

export function ProcessSteps({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <SectionShell
      title={dict.home.processTitle}
      description={dict.home.processIntro}
      className="pt-0"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {steps[locale].map((step) => (
          <div key={step.title} className="card-surface rounded-[2rem] p-6">
            <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-sm font-semibold text-brand">
              {step.title.split(".")[0]}
            </span>
            <h3 className="font-serif text-3xl text-brand">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{step.body}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
