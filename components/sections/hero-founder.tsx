"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Locale } from "@/types";
import { getDictionary } from "@/lib/i18n/dictionaries";

export function HeroFounder({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 md:grid-cols-[1.08fr_0.92fr] md:px-10 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="flex flex-col justify-center"
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-accent">
          {dict.home.eyebrow}
        </p>
        <h1 className="max-w-2xl font-serif text-5xl leading-[1.02] text-brand md:text-7xl">
          {dict.home.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
          {dict.home.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {dict.home.credentials.map((item) => (
            <span
              key={item}
              className="rounded-full border border-line bg-white px-3 py-2 text-xs font-semibold text-brand"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(16,35,63,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#17335c]"
          >
            {dict.home.primaryCta}
          </Link>
          <Link
            href={`/${locale}/methodology`}
            className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-brand transition duration-300 hover:border-brand hover:bg-brand-soft"
          >
            {dict.home.secondaryCta}
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
        className="card-surface rounded-[2.5rem] p-6 md:p-8"
      >
        <div className="overflow-hidden rounded-[2rem] bg-brand-soft">
          <Image
            src="/images/founder/founder-placeholder.svg"
            alt="Founder placeholder portrait"
            width={900}
            height={1100}
            priority
            className="h-auto w-full"
          />
        </div>
        <p className="mt-6 max-w-md text-sm leading-7 text-muted">
          {dict.home.founderIntro}
        </p>
      </motion.div>
    </section>
  );
}
