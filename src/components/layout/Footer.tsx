import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[68rem] flex-col gap-2 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p className="font-mono text-base tracking-wide text-mut">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono text-base tracking-wide text-mut">
          {site.location}
        </p>
      </div>
    </footer>
  );
}
