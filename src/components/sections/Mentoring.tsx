import { SectionHeading } from "@/components/ui/SectionHeading";
import { mentoring } from "@/lib/site";

export function Mentoring() {
  return (
    <section id="community" className="scroll-mt-24 py-12">
      <SectionHeading kicker={mentoring.kicker} title={mentoring.title} />

      <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-12">
        <div>
          <p className="font-serif text-6xl leading-none text-acc">
            {mentoring.stat}
          </p>
          <p className="mt-3 font-mono text-[15px] tracking-wider text-acc uppercase">
            {mentoring.statLabel}
          </p>
          <p className="mt-6 font-mono text-[15px] tracking-wider text-mut uppercase">
            {mentoring.context}
          </p>
        </div>

        <div>
          <p className="mb-6 max-w-3xl text-[22px] leading-relaxed text-mut">
            {mentoring.closing}
          </p>
          <p className="max-w-3xl text-[22px] leading-relaxed text-fg">
            {mentoring.lead}
          </p>
        </div>
      </div>
    </section>
  );
}
