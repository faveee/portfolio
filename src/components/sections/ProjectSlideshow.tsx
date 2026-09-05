"use client";

import { useEffect, useState } from "react";

type ProjectSlideshowProps = {
  images: readonly string[];
  alt: string;
};

export function ProjectSlideshow({ images, alt }: ProjectSlideshowProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (images.length < 2 || paused) {
      return;
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      return;
    }

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 4000);

    return () => window.clearInterval(id);
  }, [images.length, paused]);

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-line bg-bg2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[16/10]">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={i === index ? alt : ""}
            className={`absolute inset-0 h-full w-full object-contain object-top transition-opacity duration-700 ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Show screenshot ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 cursor-pointer rounded-full transition-all ${
              i === index ? "w-5 bg-acc" : "w-1.5 bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
