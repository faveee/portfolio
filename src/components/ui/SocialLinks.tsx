import { ArrowUpRight, SocialIcon } from "@/components/ui/Icons";
import { socialLinks } from "@/lib/site";

function iconFor(href: string, label: string) {
  if (href.startsWith("mailto:")) {
    return "mail" as const;
  }

  switch (label) {
    case "GitHub":
      return "github" as const;
    case "LinkedIn":
      return "linkedin" as const;
    default:
      return "resume" as const;
  }
}

export function SocialLinks({ className = "" }: { className?: string }) {
  const links = socialLinks();

  if (links.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-wrap items-center gap-5 font-mono text-[17px] ${className}`}>
      {links.map((link) => {
        const isMail = link.href.startsWith("mailto:");

        return (
          <a
            key={link.label}
            href={link.href}
            {...(link.href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className={
              isMail
                ? "inline-flex items-center gap-2 border-b border-acc pb-0.5 text-acc lowercase"
                : "inline-flex items-center gap-2 text-mut transition-colors hover:text-acc"
            }
          >
            <SocialIcon kind={iconFor(link.href, link.label)} />
            <span>{link.label}</span>
            {link.href.startsWith("http") ? <ArrowUpRight /> : null}
          </a>
        );
      })}
    </div>
  );
}
