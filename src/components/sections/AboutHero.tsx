import Image from "next/image";

import { TechIcon, type TechId } from "@/components/ui/TechIcons";
import { education, experience, site, stackTools } from "@/lib/site";

export function AboutHero() {
  return (
    <section className="flex min-h-[calc(100dvh-4.75rem)] flex-col justify-center py-10">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
        <div className="mx-auto w-full max-w-sm text-center lg:mx-0 lg:text-left">
          <p className="mb-3 font-mono text-[15px] tracking-[0.28em] text-acc uppercase">
            Hello, I am
          </p>
          <h1 className="mb-8 font-serif text-[clamp(40px,6vw,64px)] leading-[0.95]">
            {site.name}
          </h1>
          <div className="relative mx-auto h-64 w-64 sm:h-72 sm:w-72 lg:mx-0 lg:h-80 lg:w-80">
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -left-3 h-[90%] w-[90%] rounded-full bg-acc"
            />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-line bg-bg2">
              <Image
                src={site.portrait}
                alt={site.name}
                fill
                sizes="320px"
                className="object-cover object-[center_18%]"
                priority
              />
            </div>
          </div>
        </div>

        <div>
          <p className="mb-3 font-mono text-[15px] tracking-[0.28em] text-acc uppercase">
            About me
          </p>
          <p className="mb-4 font-mono text-base tracking-widest text-mut uppercase">
            {site.role} · {site.location}
          </p>
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-acc px-3.5 py-1.5 font-mono text-[15px] tracking-wide text-acc uppercase">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-acc" />
            {site.availability}
          </div>
          <p className="mb-8 max-w-2xl text-[21px] leading-relaxed text-mut">
            {site.summary}
          </p>

          <p className="mb-3 font-mono text-[13px] tracking-[0.28em] text-acc uppercase">
            Skills
          </p>
          <ul className="mb-10 flex flex-wrap gap-2.5">
            {stackTools.map((tool) => (
              <li
                key={tool.name}
                title={tool.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg2 text-acc"
              >
                <TechIcon id={tool.icon as TechId} />
                <span className="sr-only">{tool.name}</span>
              </li>
            ))}
          </ul>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="mb-4 font-mono text-[13px] tracking-[0.28em] text-acc uppercase">
                Education
              </p>
              <ul className="space-y-4">
                {education.map((item) => (
                  <li key={item.title}>
                    <p className="font-serif text-2xl leading-snug">{item.title}</p>
                    <p className="mt-1 text-[17px] text-mut">{item.org}</p>
                    <p className="mt-1 font-mono text-[13px] tracking-wider text-mut uppercase">
                      {item.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 font-mono text-[13px] tracking-[0.28em] text-acc uppercase">
                Experience
              </p>
              <ul className="space-y-4">
                {experience.map((role) => (
                  <li key={`${role.title}-${role.org}`}>
                    <p className="font-serif text-2xl leading-snug">{role.title}</p>
                    <p className="mt-1 text-[17px] text-mut">{role.org}</p>
                    <p className="mt-1 font-mono text-[13px] tracking-wider text-mut uppercase">
                      {role.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
