import type { ContentListItem, Locale } from "@/types";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { ContentCard } from "@/components/ui/content-card";
import { SectionShell } from "@/components/ui/section-shell";

export function FeaturedInsights({
  locale,
  items,
}: {
  locale: Locale;
  items: ContentListItem[];
}) {
  const dict = getDictionary(locale);

  return (
    <SectionShell title={dict.home.featuredInsights} className="pt-0">
      <div className="grid gap-5 lg:grid-cols-3">
        {items.map((item) => (
          <ContentCard key={item.slug} item={item} />
        ))}
      </div>
    </SectionShell>
  );
}
