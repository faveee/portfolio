import type { ReactNode } from "react";

export type TechId =
  | "react"
  | "nextjs"
  | "typescript"
  | "javascript"
  | "html"
  | "css"
  | "tailwind"
  | "node"
  | "python"
  | "git"
  | "github"
  | "docker"
  | "vite"
  | "sanity"
  | "paystack"
  | "resend"
  | "firebase"
  | "vercel"
  | "cursor"
  | "claude";

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
      fill="currentColor"
    >
      {children}
    </svg>
  );
}

export function TechIcon({ id }: { id: TechId }) {
  switch (id) {
    case "react":
      return (
        <svg
          viewBox="-11.5 -10.23174 23 20.46348"
          aria-hidden="true"
          className="h-5 w-5 shrink-0"
        >
          <circle r="2.05" fill="currentColor" />
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "nextjs":
      return (
        <Svg>
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.2 14.6h-1.7L9.4 9.7v6.9H7.8V7.4h1.8l5 6.8V7.4h1.6Z" />
        </Svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
          <path d="M7.2 10.2h5.2M9.8 10.2V17" />
          <path d="M16.4 10.6c-.6-.4-1.4-.4-1.8.1-.4.5 0 1 .8 1.3l.7.3c1.4.6 1.9 1.5 1.4 2.4-.6 1.2-2.2 1.4-3.4.6" />
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
          <path d="M9 10.2v5.2c0 1.3-.7 1.8-1.6 1.8" />
          <path d="M13 17.2c1.6 0 2.6-.7 2.6-2.2 0-1.4-.8-1.9-2.2-2.4-1-.4-1.4-.8-1.4-1.4 0-.7.6-1.2 1.6-1.2.8 0 1.4.3 1.8.9" />
        </svg>
      );
    case "html":
      return (
        <Svg>
          <path d="M4.1 3h15.8l-1.4 16.1L12 21.2l-6.5-2.1Zm2.2 2.5 5.7 12.3 5.7-12.3H16l-2.8 7.1h-.4L10 5.5Z" />
        </Svg>
      );
    case "css":
      return (
        <Svg>
          <path d="M4.1 3h15.8l-1.4 16.1L12 21.2l-6.5-2.1Zm3.3 5.2h9.1l-.3 2.6H11l.2 2h4.7l-.5 4.4L12 18.4l-3.3-1.1-.2-2.2h2.1l.1.9 1.3.4 1.4-.4.2-1.6H8.7Z" />
        </Svg>
      );
    case "tailwind":
      return (
        <Svg>
          <path d="M12 6.5c-2.3 0-3.7 1.1-4.2 3.4.8-1.1 1.8-1.5 2.9-1.2.6.2 1.1.7 1.6 1.3C13.1 11.3 14 12.5 16.2 12.5c2.3 0 3.7-1.1 4.2-3.4-.8 1.1-1.8 1.5-2.9 1.2-.6-.2-1.1-.7-1.6-1.3C15.1 7.7 14.2 6.5 12 6.5Zm-4.2 5.1C5.5 11.6 4.1 12.8 3.6 15c.8-1.1 1.8-1.5 2.9-1.2.6.2 1.1.7 1.6 1.3 1 1.3 1.9 2.5 4.1 2.5 2.3 0 3.7-1.1 4.2-3.4-.8 1.1-1.8 1.5-2.9 1.2-.6-.2-1.1-.7-1.6-1.3-1-1.3-1.9-2.5-4.1-2.5Z" />
        </Svg>
      );
    case "node":
      return (
        <Svg>
          <path d="M12 2.2 20.4 7v10L12 21.8 3.6 17V7Zm0 2.3L5.8 7.8v8.4L12 19.5l6.2-3.3V7.8Z" />
        </Svg>
      );
    case "python":
      return (
        <Svg>
          <path d="M12.2 3c-2.4 0-2.3 1-2.3 1v1.8h4.6V6.6c0-1.6-1-1.6-2.3-3.6ZM8.2 6.2v2.7c0 1.4 1.2 2.6 2.6 2.6h2.4c.7 0 1.3.6 1.3 1.3v2.4H16.7c1.4 0 1.4-1.4 1.4-3.2 0-1.8.1-3.2-1.4-3.2H8.2Zm2.1 1.2a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Zm5.5 5.5H11c-.7 0-1.3.6-1.3 1.3v2.4c0 1.6 1 1.6 2.3 3.6 2.4 0 2.3-1 2.3-1v-1.8H9.7v-.8c0-1.4 1.2-2.6 2.6-2.6h3.5ZM13.6 15.9a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Z" />
        </Svg>
      );
    case "git":
      return (
        <Svg>
          <path d="m21 11-8-8a1.4 1.4 0 0 0-2 0L9.3 4.7l2.5 2.5a1.7 1.7 0 0 1 2.1 2.1l2.4 2.4a1.7 1.7 0 1 1-.8.8l-2.4-2.4v6.3a1.7 1.7 0 1 1-1.4 0V10.5a1.7 1.7 0 0 1-.9-2.2L8.3 5.7 3 11a1.4 1.4 0 0 0 0 2l8 8a1.4 1.4 0 0 0 2 0l8-8a1.4 1.4 0 0 0 0-2Z" />
        </Svg>
      );
    case "github":
      return (
        <Svg>
          <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
        </Svg>
      );
    case "docker":
      return (
        <Svg>
          <path d="M4.2 11.1h2.1V9H4.2Zm2.5 0h2.1V9H6.7Zm2.5 0h2.1V9H9.2Zm0-2.5h2.1V6.5H9.2Zm2.5 2.5h2.1V9h-2.1Zm0-2.5h2.1V6.5h-2.1Zm0-2.5h2.1V4H11.7Zm2.4 5h2.2V9h-2.2ZM3.4 12.4c0 3.3 2.6 5.6 7.1 5.6 5.4 0 8.4-2.5 10.1-6.3-1.3.9-2.8 1.4-4.7 1.4H3.5c-.1.4-.1.8-.1 1.3Z" />
        </Svg>
      );
    case "vite":
      return (
        <Svg>
          <path d="M19.6 3 12 19.7 4.4 3 12 6.2Zm-7.6 2.4L6.7 4.2 12 16.2 17.3 4.2Z" />
        </Svg>
      );
    case "sanity":
      return (
        <Svg>
          <path d="M12.8 3C8.4 3 6 5.6 6 8.5c0 4 3.7 5.2 6.4 6.1 2 .7 3 .1 3-1.1 0-1.2-1-1.8-3.3-2.7C8.7 9.4 5.6 7.8 5.6 4.4 5.6 2 7.6 0 11.2 0c2.2 0 4.3.6 5.7 1.6L15.4 5C14.3 4 13.3 3.4 12.8 3ZM11.2 21c4.4 0 6.8-2.6 6.8-5.5 0-4-3.7-5.2-6.4-6.1-2-.7-3-.1-3 1.1 0 1.2 1 1.8 3.3 2.7 3.4 1.4 6.5 3 6.5 6.4 0 2.4-2 4.4-5.6 4.4-2.2 0-4.3-.6-5.7-1.6L8.6 19c1.1 1 2.1 1.6 2.6 2Z" />
        </Svg>
      );
    case "paystack":
      return (
        <Svg>
          <path d="M4 6.5 12 3l8 3.5v7.2c0 3.6-2.4 6.4-8 8.8-5.6-2.4-8-5.2-8-8.8Zm3.2 1.3v6c0 1.8 1.3 3.3 4.8 4.7 3.5-1.4 4.8-2.9 4.8-4.7v-6L12 5.9Z" />
        </Svg>
      );
    case "resend":
      return (
        <Svg>
          <path d="M4 6h16v12H4Zm2 2.2V16h12V8.2l-6 4.4Z" />
        </Svg>
      );
    case "firebase":
      return (
        <Svg>
          <path d="m5 17.2 2.4-14 4.3 8.1 2.5-4.5L19 17.2 12.2 21Zm2.4-1.1 4.8-9.1 1.4 2.7-3.8 6.8H12l2.7-4.8 2.3 4.8Z" />
        </Svg>
      );
    case "vercel":
      return (
        <Svg>
          <path d="m12 4 10 16H2Z" />
        </Svg>
      );
    case "cursor":
      return (
        <Svg>
          <path d="M5 3.5 19 12l-6.2 1.4L10.5 21Z" />
        </Svg>
      );
    case "claude":
      return (
        <Svg>
          <path d="M12 2.5 13.7 9.4 21 8.2 15.6 12.5 21 16.8 13.7 15.6 12 22.5 10.3 15.6 3 16.8 8.4 12.5 3 8.2 10.3 9.4Z" />
        </Svg>
      );
    default:
      return null;
  }
}
