import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/types";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SectionShell } from "@/components/ui/section-shell";

export function AboutPreview({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <SectionShell
      title={dict.home.aboutTitle}
      description={dict.home.aboutBody}
      className="pt-2"
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="card-surface rounded-[2rem] p-7">
          <div className="space-y-4">
            {dict.home.aboutPoints.map((point) => (
              <div key={point} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                <p className="text-sm leading-7 text-muted">{point}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card-surface rounded-[2rem] p-6">
          <div className="overflow-hidden rounded-[1.75rem] bg-brand-soft">
            <Image
              src="/images/founder/founder-placeholder.svg"
              alt="Founder placeholder portrait"
              width={720}
              height={860}
              className="h-auto w-full"
            />
          </div>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {dict.home.founderCardTitle}
          </p>
          <p className="mt-3 text-sm leading-7 text-muted">{dict.home.founderBio}</p>
          <Link
            href={`/${locale}/about`}
            className="mt-5 inline-flex items-center rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold text-brand transition duration-300 hover:border-brand hover:bg-brand-soft"
          >
            {dict.home.founderButton}
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
