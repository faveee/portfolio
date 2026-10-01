import type { ReactNode } from "react";

export function PageShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main className={`mx-auto max-w-[72rem] px-6 sm:px-10 ${className}`}>
      {children}
    </main>
  );
}
