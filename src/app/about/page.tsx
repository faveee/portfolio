import type { Metadata } from "next";

import { AboutHero } from "@/components/sections/AboutHero";
import { AiWorkflow } from "@/components/sections/AiWorkflow";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Focus } from "@/components/sections/Focus";
import { Mentoring } from "@/components/sections/Mentoring";
import { Stack } from "@/components/sections/Stack";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutHero />
      <div className="divide-y divide-line border-t border-line pb-12">
        <Focus />
        <Experience />
        <Mentoring />
        <Stack />
        <AiWorkflow />
        <Education />
      </div>
    </PageShell>
  );
}
