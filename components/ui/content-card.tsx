import Link from "next/link";
import type { ContentListItem } from "@/types";
import { formatDate } from "@/lib/utils/format";

export function ContentCard({ item }: { item: ContentListItem }) {
  const href = `/${item.locale}/${item.collection}/${item.slug}`;

  return (
    <Link
      href={href}
      className="card-surface block rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1"
    >
      <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-accent">
        <span>{formatDate(item.date, item.locale)}</span>
        <span className="h-1 w-1 rounded-full bg-accent" />
        <span>{item.author}</span>
      </div>
      <h3 className="font-serif text-3xl leading-tight text-brand">{item.title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
