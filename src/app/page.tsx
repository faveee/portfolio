import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Focus } from "@/components/sections/Focus";
import { Hero } from "@/components/sections/Hero";
import { Mentoring } from "@/components/sections/Mentoring";
import { Stack } from "@/components/sections/Stack";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <main className="mx-auto max-w-[68rem] px-6 sm:px-10">
      <Hero />
      <Focus />
      <Work />
      <Experience />
      <Mentoring />
      <Stack />
      <Education />
      <Contact />
    </main>
  );
}
