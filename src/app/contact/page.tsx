import type { Metadata } from "next";

import { PageShell } from "@/components/layout/PageShell";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <PageShell className="pb-16">
      <Contact />
    </PageShell>
  );
}
