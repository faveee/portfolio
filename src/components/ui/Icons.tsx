export function ArrowUpRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
      className="h-3.5 w-3.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

export function SocialIcon({
  kind,
}: {
  kind: "github" | "linkedin" | "mail" | "resume";
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (kind) {
    case "github":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-4 w-4"
          {...common}
        >
          <circle cx="12" cy="12" r="8.5" />
          <path d="M9.5 15.5c-1.2-.2-2.2-1.1-2.2-2.8 0-1.2.6-2.3 1.8-2.9-.2-.5-.3-1.1-.1-1.8.4-.2 1.1-.1 1.7.2.5-.3 1.2-.5 2.1-.5.9 0 1.6.2 2.1.5.6-.3 1.3-.4 1.7-.2.2.7.1 1.3-.1 1.8 1.2.6 1.8 1.7 1.8 2.9 0 1.7-1 2.6-2.2 2.8" />
          <path d="M10.5 14.5h3" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-4 w-4"
          {...common}
        >
          <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
          <path d="M8 10.5v6.5M8 7.5v.1M11.5 17v-4.2c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V17" />
        </svg>
      );
    case "mail":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
          <path d="m5 7 7 6 7-6" />
        </svg>
      );
    case "resume":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-4 w-4"
          {...common}
        >
          <path d="M7.5 3.5h7l4 4v11.5A2 2 0 0 1 16.5 21h-9A2 2 0 0 1 5.5 19V5.5A2 2 0 0 1 7.5 3.5Z" />
          <path d="M14.5 3.5v4h4" />
          <path d="M8.5 12h7M8.5 15.5h7" />
        </svg>
      );
    default:
      return null;
  }
}

export function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}
