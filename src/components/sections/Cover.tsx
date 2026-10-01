import Image from "next/image";
import Link from "next/link";

import { site } from "@/lib/site";

export function Cover() {
  return (
    <section className="flex min-h-[calc(100dvh-4.75rem)] flex-col justify-center py-10">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-20">
        <div className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80 lg:mx-0 lg:h-[22rem] lg:w-[22rem]">
          <div
            aria-hidden="true"
            className="absolute -right-3 -bottom-4 h-[92%] w-[92%] rounded-full bg-acc"
          />
          <div className="relative h-full w-full overflow-hidden rounded-full border border-line bg-bg2">
            <Image
              src={site.portrait}
              alt={site.name}
              fill
              sizes="352px"
              className="object-cover object-[center_18%]"
              priority
            />
          </div>
        </div>

        <div>
          <p className="mb-6 flex items-center gap-3 font-mono text-[15px] tracking-[0.28em] text-acc uppercase">
            <span className="inline-block h-2.5 w-2.5 bg-acc" />
            {site.role}
          </p>

          <h1 className="font-serif text-[clamp(64px,13vw,148px)] leading-[0.82] tracking-tight">
            Portfolio
          </h1>

          <p className="mt-8 max-w-xl text-[22px] leading-relaxed text-mut">
            {site.headline}
          </p>
          <p className="mt-3 font-mono text-[15px] tracking-wider text-mut uppercase">
            {site.name} · {site.location}
          </p>

          <Link
            href="/about"
            className="mt-10 inline-flex rounded-full border border-acc bg-acc-soft px-6 py-3 font-mono text-sm tracking-[0.22em] text-acc uppercase transition-colors hover:bg-acc hover:text-bg"
          >
            About me
          </Link>
        </div>
      </div>
    </section>
  );
}
