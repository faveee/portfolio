# Favour Abatan

Personal portfolio of a fullstack software engineer based in Lagos, Nigeria. Single-page site covering services, selected work, experience, Tech4Dev mentoring, stack, and contact.

**Live work:** [shopddynamic.com](https://www.shopddynamic.com/)

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router) and React 19
- TypeScript
- Tailwind CSS v4

Type: **Newsreader** (headings), **Instrument Sans** (body), **JetBrains Mono** (labels).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Content

Almost all copy, links, and project screenshots are edited in one file:

```
src/lib/site.ts
```

That includes name, role, email, GitHub, LinkedIn, resume, services, work, experience, mentoring, stack, and education.

Work screenshots live in `public/work/`. Theme tokens (dark gold and light) live in `src/app/globals.css`. Light/dark preference is stored as `fa-theme` in localStorage.

## Layout

```
src/app/page.tsx          Homepage section order
src/components/layout/    Header, footer
src/components/sections/  Hero through contact
src/lib/site.ts           Content
src/lib/fonts.ts          next/font setup
```
