import type { ReactNode } from "react";
import { cn } from "@/lib/utils/classnames";

export function SectionShell({
  title,
  description,
  eyebrow,
  className,
  children,
}: {
  title: string;
  description?: string;
  eyebrow?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section className={cn("mx-auto w-full max-w-6xl px-6 py-10 md:px-10", className)}>
      {(eyebrow || title || description) && (
        <div className="mb-8 max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-serif text-4xl leading-tight text-brand md:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-8 text-muted md:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      )}
      {children}
    </section>
  );
}
