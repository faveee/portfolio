"use client";

import Image from "next/image";
import { type FormEvent, useState } from "react";

import { SocialLinks } from "@/components/ui/SocialLinks";
import { inquiryTypes, site } from "@/lib/site";

export function Contact() {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!site.email) {
      setStatus("Add your email in the site details and this form will send.");
      return;
    }

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const inquiry = String(form.get("inquiry") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Portfolio inquiry - ${inquiry}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInquiry: ${inquiry}\n\n${message}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email client…");
  }

  return (
    <section id="contact" className="py-10">
      <div className="grid min-h-[calc(100dvh-12rem)] items-center gap-12 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
        <div className="mx-auto w-full max-w-xs text-center lg:mx-0 lg:text-left">
          <div className="relative mx-auto mb-6 h-52 w-52 lg:mx-0 lg:h-60 lg:w-60">
            <div
              aria-hidden="true"
              className="absolute -right-2 -bottom-3 h-[90%] w-[90%] rounded-full bg-acc"
            />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-line bg-bg2">
              <Image
                src={site.portrait}
                alt={site.name}
                fill
                sizes="240px"
                className="object-cover object-[center_18%]"
                priority
              />
            </div>
          </div>
          <p className="mb-2 font-serif text-3xl">{site.name}</p>
          <p className="mb-6 font-mono text-[13px] tracking-wider text-mut uppercase">
            {site.location}
          </p>
          <SocialLinks className="justify-center lg:justify-start" />
        </div>

        <div>
          <h1 className="font-serif text-[clamp(52px,9vw,108px)] leading-[0.86] tracking-tight">
            Get in touch
          </h1>
          <p className="mt-4 font-serif text-[clamp(32px,4vw,48px)] leading-tight">
            Thank you.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-block font-mono text-[18px] tracking-wide text-acc underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
          <p className="mt-8 max-w-xl text-[21px] leading-relaxed text-mut">
            Have a product, internal tool, or storefront in mind? Send a short
            note and I will get back to you.
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="mt-6 mb-8 grid max-w-2xl gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block font-mono text-[15px] tracking-wider text-mut uppercase">
              Your name
            </span>
            <input
              name="name"
              required
              autoComplete="name"
              className="w-full rounded-lg border border-line bg-bg2 px-3.5 py-3 text-[20px] outline-none focus:border-acc"
            />
          </label>
          <label className="block">
            <span className="mb-2 block font-mono text-[15px] tracking-wider text-mut uppercase">
              Your email
            </span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-lg border border-line bg-bg2 px-3.5 py-3 text-[20px] outline-none focus:border-acc"
            />
          </label>
        </div>

        <label className="block">
          <span className="mb-2 block font-mono text-[15px] tracking-wider text-mut uppercase">
            What do you need?
          </span>
          <select
            name="inquiry"
            required
            defaultValue=""
            className="w-full rounded-lg border border-line bg-bg2 px-3.5 py-3 text-[20px] outline-none focus:border-acc"
          >
            <option value="" disabled>
              Select one
            </option>
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block font-mono text-[15px] tracking-wider text-mut uppercase">
            Project overview
          </span>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full resize-y rounded-lg border border-line bg-bg2 px-3.5 py-3 text-[20px] outline-none focus:border-acc"
          />
        </label>

        <button
          type="submit"
          className="w-fit cursor-pointer rounded-full border border-acc bg-acc-soft px-5 py-3 font-mono text-base tracking-wider text-acc uppercase transition-colors hover:bg-acc hover:text-bg"
        >
          Send inquiry
        </button>

        {status ? (
          <p className="font-mono text-[17px] text-mut" role="status">
            {status}
          </p>
        ) : null}
      </form>
    </section>
  );
}
