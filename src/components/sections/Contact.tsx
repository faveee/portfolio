"use client";

import { type FormEvent, useState } from "react";

import { ArrowUpRight, SocialIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { inquiryTypes, site, socialLinks } from "@/lib/site";

export function Contact() {
  const [status, setStatus] = useState("");
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
    <section id="contact" className="scroll-mt-24 border-t border-line py-12">
      <SectionHeading
        kicker="Get in touch"
        title="Let’s build something that holds up in production."
      />

      <p className="mb-10 max-w-2xl text-[22px] leading-relaxed text-mut">
        Have a product, internal tool, or storefront in mind? Send a short note
        and I will get back to you.
      </p>

      <form onSubmit={onSubmit} className="mb-12 grid max-w-2xl gap-5">
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

      <div>
        <p className="mb-4 font-mono text-[15px] tracking-wider text-mut uppercase">
          Or connect directly
        </p>
        {links.length > 0 ? (
          <div className="flex flex-wrap gap-5 font-mono text-[17px]">
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
            Email · GitHub · LinkedIn. Send the URLs and I’ll wire them in.
          </p>
        )}
      </div>
    </section>
  );
}
