"use client";

import { useState } from "react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/lib/site";

export function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section id="experience" className="scroll-mt-24 py-12">
      <SectionHeading kicker="Experience" title="Where I have shipped" />

      <div className="grid gap-4">
        {experience.map((role, index) => {
          const isSelected = selectedIndex === index;
          const panelId = `experience-panel-${index}`;

          return (
            <div
              key={`${role.title}-${role.org}`}
              className={[
                "overflow-hidden rounded-2xl border",
                isSelected ? "border-acc bg-acc-soft" : "border-line bg-bg2",
              ].join(" ")}
            >
              <button
                type="button"
                aria-expanded={isSelected}
                aria-controls={panelId}
                onClick={() => setSelectedIndex(index)}
                className="w-full cursor-pointer p-5 text-left transition-colors hover:bg-acc-soft/60"
              >
                <p className="mb-3 font-mono text-[13px] tracking-wider text-mut uppercase">
                  {role.period}
                </p>
                <h3 className="font-serif text-3xl leading-snug">{role.title}</h3>
                <p className="mt-2 text-[18px] text-mut">{role.org}</p>
              </button>

              {isSelected ? (
                <article id={panelId} className="border-t border-line px-5 py-6 sm:px-6">
                  <p className="mb-4 font-mono text-[15px] tracking-wider text-acc uppercase">
                    {role.location}
                  </p>
                  <p className="mb-6 max-w-3xl text-[20px] leading-relaxed text-mut">
                    {role.summary}
                  </p>
                  <ul className="space-y-3 text-[20px] leading-relaxed text-mut">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acc" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
