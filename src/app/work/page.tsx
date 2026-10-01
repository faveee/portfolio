import type { Metadata } from "next";

import { PageShell } from "@/components/layout/PageShell";
import { Work } from "@/components/sections/Work";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <PageShell className="pb-16">
      <Work />
    </PageShell>
  );
}
