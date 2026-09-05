import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications, education } from "@/lib/site";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-t border-line py-12">
      <SectionHeading kicker="Background" title="Education & certifications" />

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-6 font-mono text-base tracking-widest text-acc uppercase">
            Education
          </h3>
          <ul className="space-y-6">
            {education.map((item) => (
              <li key={item.title}>
                <p className="font-serif text-3xl">{item.title}</p>
                <p className="mt-1 text-[22px] text-mut">{item.org}</p>
                <p className="mt-1 font-mono text-[15px] tracking-wider text-mut uppercase">
                  {item.period}
                </p>
                {"note" in item && item.note ? (
                  <p className="mt-2 max-w-md text-[18px] leading-relaxed text-acc">
                    {item.note}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 font-mono text-base tracking-widest text-acc uppercase">
            Certifications
          </h3>
          <ul className="space-y-3 text-[22px] leading-relaxed text-mut">
            {certifications.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-acc" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
