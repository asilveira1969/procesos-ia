import Link from "next/link";
import type { Locale } from "@/types";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { LinkedInLink } from "@/components/layout/linkedin-link";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";

export function SiteHeader({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  const navItems = [
    { key: "about", href: `/${locale}/about` },
    { key: "methodology", href: `/${locale}/methodology` },
    { key: "insights", href: `/${locale}/insights` },
    { key: "cases", href: `/${locale}/cases` },
    { key: "templates", href: `/${locale}/templates` },
    { key: "contact", href: `/${locale}/contact` },
    { key: "media", href: `/${locale}/media` },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-5 md:px-10">
        <Link href={`/${locale}`} className="flex shrink-0 flex-col">
          <span className="font-serif text-3xl leading-none text-brand">
            {dict.siteTitle}
          </span>
          <span className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted">
            {dict.siteSubtitle}
          </span>
        </Link>
        <nav className="hidden flex-wrap items-center gap-5 text-sm font-medium text-muted lg:flex">
          {navItems.map((item) => (
            <Link key={item.key} href={item.href} className="transition duration-300 hover:text-brand">
              {dict.nav[item.key]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LocaleSwitcher />
          <LinkedInLink />
        </div>
      </div>
    </header>
  );
}
