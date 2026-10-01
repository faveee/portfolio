import { ArrowUpRight, SocialIcon } from "@/components/ui/Icons";
import { site, socialLinks } from "@/lib/site";

export function Hero() {
  const links = socialLinks();

  const iconFor = (label: string) => {
    switch (label) {
      case "Email":
        return "mail";
      case "GitHub":
        return "github";
      case "LinkedIn":
        return "linkedin";
      case "Resume":
        return "resume";
      default:
        return "resume";
    }
  };

  return (
    <section className="animate-rise py-12 sm:py-14">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-line bg-bg2 font-serif text-2xl text-acc sm:h-24 sm:w-24 sm:text-3xl">
        {site.monogram}
      </div>

      <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-acc px-3.5 py-1.5 font-mono text-[15px] tracking-wide text-acc uppercase">
        <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-acc" />
        {site.availability}
      </div>

      <p className="mb-5 font-mono text-base tracking-widest text-mut uppercase">
        {site.role} · {site.location}
      </p>

      <h1 className="mb-4 max-w-[56rem] font-serif text-[clamp(56px,8.5vw,100px)] leading-[1.06] font-normal text-pretty">
        {site.headline}
      </h1>

      <p className="mb-6 max-w-2xl font-mono text-[15px] tracking-wider text-acc uppercase">
        {site.specialties}
      </p>

      <p className="mb-9 max-w-[46rem] text-[24px] leading-relaxed text-mut">
        {site.summary}
      </p>

      {links.length > 0 ? (
        <div className="flex flex-wrap items-center gap-5 font-mono text-[17px]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={
                link.label === "Email"
                  ? "inline-flex items-center gap-2 border-b border-acc pb-0.5 text-acc"
                  : "inline-flex items-center gap-2 text-mut hover:text-acc"
              }
            >
              <SocialIcon kind={iconFor(link.label)} />
              <span>{link.label}</span>
              {link.href.startsWith("http") ? <ArrowUpRight /> : null}
            </a>
          ))}
        </div>
      ) : (
        <p className="font-mono text-[17px] text-mut">
          Email, GitHub, and LinkedIn links go here when you send them.
        </p>
      )}
    </section>
  );
}
