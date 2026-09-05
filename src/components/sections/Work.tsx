import { ProjectSlideshow } from "@/components/sections/ProjectSlideshow";
import { ArrowUpRight } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { work } from "@/lib/site";

export function Work() {
  const project = work[0];

  return (
    <section id="work" className="scroll-mt-24 border-t border-line py-12">
      <SectionHeading kicker="Work" title="Selected projects" />

      <article className="grid items-start gap-5 lg:grid-cols-2 lg:gap-7">
        <ProjectSlideshow
          images={project.images}
          alt={`${project.title} website screenshots`}
        />

        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2.5">
            {project.live ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-live bg-live-soft px-3 py-1 font-mono text-[13px] tracking-wider text-live uppercase">
                <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-live" />
                Live
              </span>
            ) : null}
            <p className="font-mono text-[15px] tracking-wider text-mut uppercase">
              {project.context} · {project.period}
            </p>
          </div>

          <h3 className="mb-2 font-serif text-[clamp(32px,4vw,46px)] leading-tight">
            {project.title}
          </h3>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 inline-flex items-center gap-1.5 font-mono text-[17px] text-acc hover:underline"
          >
            {project.urlLabel}
            <ArrowUpRight />
          </a>

          <p className="mb-4 text-[20px] leading-relaxed text-mut">
            {project.summary}
          </p>
          <ul className="space-y-2.5 text-[20px] leading-relaxed text-fg">
            {project.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-acc" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}
