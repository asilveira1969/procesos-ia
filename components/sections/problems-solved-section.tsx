import type { Locale } from "@/types";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SectionShell } from "@/components/ui/section-shell";

export function ProblemsSolvedSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <SectionShell
      title={dict.home.problemsTitle}
      description={dict.home.problemsIntro}
      className="pt-0"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {dict.home.problems.map((item) => (
          <div key={item} className="card-surface rounded-[1.75rem] p-5">
            <div className="flex gap-3">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
              <p className="text-sm font-medium leading-7 text-brand">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
