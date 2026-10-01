import { ProjectSlideshow } from "@/components/sections/ProjectSlideshow";
import { ArrowUpRight } from "@/components/ui/Icons";
import { work } from "@/lib/site";

export function Work() {
  const project = work[0];

  return (
    <section id="work" className="py-10">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 font-mono text-[15px] tracking-[0.28em] text-acc uppercase">
            Recap
          </p>
          <h1 className="font-serif text-[clamp(44px,7vw,76px)] leading-[0.9]">
            Selected work
          </h1>
        </div>
        <p className="font-mono text-[15px] tracking-wider text-mut uppercase">
          {project.context} · {project.period}
        </p>
      </div>

      <div className="mb-10">
        <ProjectSlideshow
          images={project.images}
          alt={`${project.title} website screenshots`}
        />
      </div>

      <article>
        <div className="mb-3 flex flex-wrap items-center gap-2.5">
          {project.live ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-live bg-live-soft px-3 py-1 font-mono text-[13px] tracking-wider text-live uppercase">
              <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-live" />
              Live
            </span>
          ) : null}
        </div>
        <h2 className="mb-2 font-serif text-[clamp(32px,4vw,48px)] leading-tight">
          {project.title}
        </h2>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-5 inline-flex items-center gap-1.5 font-mono text-[17px] text-acc hover:underline"
        >
          {project.urlLabel}
          <ArrowUpRight />
        </a>
        <p className="mb-6 max-w-3xl text-[20px] leading-relaxed text-mut">
          {project.summary}
        </p>
        <ul className="max-w-3xl space-y-3 text-[18px] leading-relaxed text-fg">
          {project.points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-acc" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
