"use client";

import { useState } from "react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/lib/site";

export function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeRole = experience[selectedIndex];

  return (
    <section id="experience" className="scroll-mt-24 border-t border-line py-12">
      <SectionHeading kicker="Experience" title="Where I have shipped" />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1.9fr]">
        <div className="grid gap-4">
          {experience.map((role, index) => {
            const isSelected = selectedIndex === index;

            return (
              <button
                key={`${role.title}-${role.org}`}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={[
                  "cursor-pointer rounded-2xl border p-5 text-left transition-colors",
                  isSelected
                    ? "border-acc bg-acc-soft"
                    : "border-line bg-bg2 hover:border-acc/80",
                ].join(" ")}
              >
                <p className="mb-3 font-mono text-[13px] tracking-wider text-mut uppercase">
                  {role.period}
                </p>
                <h3 className="font-serif text-3xl leading-snug">{role.title}</h3>
                <p className="mt-2 text-[18px] text-mut">{role.org}</p>
              </button>
            );
          })}
        </div>

        <article className="rounded-2xl border border-line bg-bg2 p-6 sm:p-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-mono text-[15px] tracking-wider text-acc uppercase">
                {activeRole.location}
              </p>
              <h3 className="mt-3 font-serif text-[clamp(30px,3vw,42px)] leading-snug">
                {activeRole.title}
              </h3>
              <p className="mt-2 text-[22px] text-mut">{activeRole.org}</p>
            </div>
            <p className="font-mono text-[15px] tracking-wider text-mut uppercase">
              {activeRole.period}
            </p>
          </div>

          <p className="mb-6 max-w-3xl text-[20px] leading-relaxed text-mut">
            {activeRole.summary}
          </p>

          <ul className="space-y-3 text-[20px] leading-relaxed text-mut">
            {activeRole.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acc" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
