import { SectionHeading } from "@/components/ui/SectionHeading";
import { aiWorkflow } from "@/lib/site";

export function AiWorkflow() {
  return (
    <section id="ai-workflow" className="scroll-mt-24 border-t border-line py-12">
      <SectionHeading kicker={aiWorkflow.kicker} title={aiWorkflow.title} />

      <p className="mb-8 max-w-4xl text-[22px] leading-relaxed text-mut">
        {aiWorkflow.overview}
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {aiWorkflow.steps.map((step) => (
          <article
            key={step.index}
            className="rounded-2xl border border-line bg-bg2 p-6"
          >
            <p className="mb-4 font-mono text-base tracking-widest text-acc">
              {step.index}
            </p>
            <h3 className="mb-3 font-serif text-3xl leading-snug">
              {step.title}
            </h3>
            <p className="text-[20px] leading-relaxed text-mut">{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
