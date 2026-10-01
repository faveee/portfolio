import { TechIcon, type TechId } from "@/components/ui/TechIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stack, stackTools } from "@/lib/site";

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 py-12">
      <SectionHeading kicker="Stack" title="Tools I use to ship" />

      <ul className="mb-10 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {stackTools.map((tool) => (
          <li
            key={tool.name}
            className="flex items-center gap-2.5 rounded-xl border border-line bg-bg2 px-3 py-3"
          >
            <span className="text-acc">
              <TechIcon id={tool.icon as TechId} />
            </span>
            <span className="font-mono text-[13px] tracking-wide">{tool.name}</span>
          </li>
        ))}
      </ul>

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
