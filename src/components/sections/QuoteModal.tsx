"use client";

import { type FormEvent, useEffect, useId, useRef, useState } from "react";

import { CloseIcon } from "@/components/ui/Icons";
import { site } from "@/lib/site";

type QuoteModalProps = {
  open: boolean;
  onClose: () => void;
};

export function QuoteModal({ open, onClose }: QuoteModalProps) {
  const titleId = useId();
  const nameRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!open) {
      return;
    }

    setStatus("");
    nameRef.current?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!site.email) {
      setStatus("Add your email in the site details and this form will send.");
      return;
    }

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const timeline = String(form.get("timeline") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const subject = encodeURIComponent("Project quote - Web Development");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTimeline: ${timeline || "Not specified"}\n\n${message}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email client…");
  }

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Close quote form"
        className="absolute inset-0 cursor-pointer bg-black/55"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-2xl border border-line bg-bg px-6 py-8 sm:max-w-lg sm:rounded-2xl sm:px-8"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 font-mono text-[13px] tracking-widest text-acc uppercase">
              Web Development
            </p>
            <h3
              id={titleId}
              className="font-serif text-[32px] leading-tight"
            >
              Request a project quote
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line text-fg hover:border-acc hover:text-acc"
          >
            <CloseIcon />
          </button>
        </div>

        <p className="mb-8 text-[18px] leading-relaxed text-mut">
          Tell me what you want to ship. I will come back with scope, timeline,
          and a project-based quote.
        </p>

        <form onSubmit={onSubmit} className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block font-mono text-[13px] tracking-wider text-mut uppercase">
                Your name
              </span>
              <input
                ref={nameRef}
                name="name"
                required
                autoComplete="name"
                className="w-full rounded-lg border border-line bg-bg2 px-3.5 py-3 text-[18px] outline-none focus:border-acc"
              />
            </label>
            <label className="block">
              <span className="mb-2 block font-mono text-[13px] tracking-wider text-mut uppercase">
                Your email
              </span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-lg border border-line bg-bg2 px-3.5 py-3 text-[18px] outline-none focus:border-acc"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block font-mono text-[13px] tracking-wider text-mut uppercase">
              Timeline
            </span>
            <input
              name="timeline"
              placeholder="e.g. 8 weeks, or a launch date"
              className="w-full rounded-lg border border-line bg-bg2 px-3.5 py-3 text-[18px] outline-none placeholder:text-mut/60 focus:border-acc"
            />
          </label>

          <label className="block">
            <span className="mb-2 block font-mono text-[13px] tracking-wider text-mut uppercase">
              What are we building?
            </span>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Product, users, and anything already designed or built."
              className="w-full resize-y rounded-lg border border-line bg-bg2 px-3.5 py-3 text-[18px] outline-none placeholder:text-mut/60 focus:border-acc"
            />
          </label>

          <button
            type="submit"
            className="w-fit cursor-pointer rounded-full border border-acc bg-acc-soft px-5 py-3 font-mono text-sm tracking-wider text-acc uppercase transition-colors hover:bg-acc hover:text-bg"
          >
            Send quote request
          </button>

          {status ? (
            <p className="font-mono text-[15px] text-mut" role="status">
              {status}
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
}
