import Link from "next/link";
import type { Locale } from "@/types";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SectionShell } from "@/components/ui/section-shell";

export function ClosingCta({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <SectionShell title={dict.home.closingTitle} description={dict.home.closingBody}>
      <Link
        href={`/${locale}/contact`}
        className="inline-flex items-center rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-brand transition duration-300 hover:border-brand hover:bg-brand-soft"
      >
        {dict.home.closingCta}
      </Link>
    </SectionShell>
  );
}
