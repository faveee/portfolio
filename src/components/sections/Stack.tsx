import { SectionHeading } from "@/components/ui/SectionHeading";
import { stack } from "@/lib/site";

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 border-t border-line py-12">
      <SectionHeading kicker="Stack" title="Tools I use to ship" />

      <div className="grid gap-10 sm:grid-cols-2">
        {stack.map((group) => (
          <div key={group.label}>
            <h3 className="mb-4 font-mono text-base tracking-widest text-acc uppercase">
              {group.label}
            </h3>
            <p className="text-[22px] leading-relaxed text-mut">
              {group.items.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
