import type { Locale } from "@/types";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SectionShell } from "@/components/ui/section-shell";

export function TrustReasonsSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <SectionShell
      title={dict.home.trustTitle}
      description={dict.home.trustIntro}
      className="pt-0"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {dict.home.trustBullets.map((item) => (
          <div key={item} className="card-surface rounded-[1.75rem] p-5">
            <div className="flex gap-3">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
              <p className="text-sm leading-7 text-muted">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
