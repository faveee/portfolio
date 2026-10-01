"use client";

import Link from "next/link";
import { useState } from "react";

import { QuoteModal } from "@/components/sections/QuoteModal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { alsoOffer, webDevelopment } from "@/lib/site";

export function Focus() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <section id="services" className="scroll-mt-24 py-12">
      <SectionHeading kicker="Services" title="What I can do for you" />

      <article className="rounded-2xl border border-line bg-bg2 px-6 py-7 sm:px-8 sm:py-8">
        <p className="mb-3 font-mono text-sm tracking-widest text-acc">
          {webDevelopment.index}
        </p>
        <h3 className="mb-3 font-serif text-3xl leading-snug">
          {webDevelopment.title}
        </h3>
        <p className="mb-5 max-w-3xl text-[20px] leading-relaxed text-mut">
          {webDevelopment.body}
        </p>

        <div className="mb-6 border-t border-line pt-4">
          <p className="font-mono text-[13px] tracking-widest text-mut uppercase">
            {webDevelopment.feeLabel}
          </p>
          <p className="mt-1 font-serif text-2xl">{webDevelopment.fee}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <button
            type="button"
            onClick={() => setQuoteOpen(true)}
            className="cursor-pointer rounded-full border border-acc bg-acc-soft px-5 py-3 font-mono text-sm tracking-wider text-acc uppercase transition-colors hover:bg-acc hover:text-bg"
          >
            {webDevelopment.quoteCta}
          </button>
          <Link
            href="/work"
            className="font-mono text-[15px] tracking-wider text-mut uppercase underline-offset-4 transition-colors hover:text-acc hover:underline"
          >
            or {webDevelopment.workCta.toLowerCase()}
          </Link>
        </div>
      </article>

      <div className="mt-px grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:mt-8 md:grid-cols-2 md:rounded-2xl">
        {alsoOffer.map((item) => (
          <article key={item.index} className="bg-bg px-6 py-8 sm:px-8">
            <p className="mb-5 font-mono text-base tracking-widest text-acc">
              {item.index}
            </p>
            <h3 className="mb-3 font-serif text-3xl leading-snug">{item.title}</h3>
            <p className="text-[20px] leading-relaxed text-mut">{item.body}</p>
          </article>
        ))}
      </div>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </section>
  );
}
