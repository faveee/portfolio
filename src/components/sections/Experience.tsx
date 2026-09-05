import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/lib/site";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-line py-12">
      <SectionHeading kicker="Experience" title="Where I have shipped" />

      <div className="divide-y divide-line border-y border-line">
        {experience.map((role) => (
          <article
            key={`${role.title}-${role.org}`}
            className="grid gap-4 py-7 md:grid-cols-[240px_1fr] md:gap-10"
          >
            <div>
              <p className="font-mono text-[15px] tracking-wider text-mut uppercase">
                {role.period}
              </p>
              <p className="mt-2 font-mono text-[15px] tracking-wider text-acc uppercase">
                {role.location}
              </p>
            </div>
            <div>
              <h3 className="font-serif text-4xl leading-snug">{role.title}</h3>
              <p className="mt-1 text-[22px] text-mut">{role.org}</p>
              <p className="mt-4 max-w-3xl text-[20px] leading-relaxed text-mut">
                {role.summary}
              </p>
              <ul className="mt-5 max-w-3xl space-y-3 text-[22px] leading-relaxed">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-acc" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
