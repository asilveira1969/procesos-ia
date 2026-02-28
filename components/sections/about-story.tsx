import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/types";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SectionShell } from "@/components/ui/section-shell";

export function AboutStory({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <SectionShell
      title={dict.aboutPage.title}
      description={dict.home.aboutBody}
      eyebrow={dict.home.eyebrow}
      className="py-16"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          {dict.aboutPage.intro.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-muted">
              {paragraph}
            </p>
          ))}
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
        </div>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="card-surface rounded-[2rem] p-7">
          <h2 className="font-serif text-4xl text-brand">{dict.aboutPage.principlesTitle}</h2>
          <div className="mt-5 space-y-4">
            {dict.aboutPage.principles.map((item) => (
              <div key={item} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                <p className="text-sm leading-7 text-muted">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card-surface rounded-[2rem] p-7">
          <h2 className="font-serif text-4xl text-brand">{dict.aboutPage.credentialsTitle}</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {dict.home.credentials.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-white px-3 py-2 text-xs font-semibold text-brand"
              >
                {item}
              </span>
            ))}
          </div>
          <Link
            href={`/${locale}/contact`}
            className="mt-6 inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(16,35,63,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#17335c]"
          >
            {dict.aboutPage.cta}
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
