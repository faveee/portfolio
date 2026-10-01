import { TechIcon, type TechId } from "@/components/ui/TechIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aiWorkflow } from "@/lib/site";

export function AiWorkflow() {
  return (
    <section id="ai-workflow" className="scroll-mt-24 py-12">
      <SectionHeading kicker={aiWorkflow.kicker} title={aiWorkflow.title} />

      <p className="mb-6 max-w-4xl text-[22px] leading-relaxed text-mut">
        {aiWorkflow.overview}
      </p>

      <ul className="mb-8 flex flex-wrap gap-2">
        {aiWorkflow.tools.map((tool) => (
          <li
            key={tool.name}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-bg2 px-3 py-2"
          >
            <span className="text-acc">
              <TechIcon id={tool.icon as TechId} />
            </span>
            <span className="font-mono text-[13px] tracking-wide uppercase">
              {tool.name}
            </span>
          </li>
        ))}
      </ul>

      <div className="grid gap-3 md:grid-cols-2">
        {aiWorkflow.steps.map((step) => (
          <article
            key={step.index}
            className="rounded-xl border border-line bg-bg2 p-5"
          >
            <p className="mb-3 font-mono text-base tracking-widest text-acc">
              {step.index}
            </p>
            <h3 className="mb-2 font-serif text-[28px] leading-snug">
              {step.title}
            </h3>
            <p className="text-[20px] leading-relaxed text-mut">{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
