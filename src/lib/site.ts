export type SiteLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Favour Abatan",
  monogram: "FA",
  portrait: "/portrait.jpg",
  role: "Fullstack Software Engineer",
  specialties:
    "Workflow Automation · Enterprise Systems · Full Stack Web Applications",
  location: "Lagos, Nigeria",
  availability:
    "Open to full-time & freelance work.",
  headline: "I build the web apps that businesses actually depend on.",
  summary:
    "2+ years of experience shipping frontend products, with about 6+ months of hands on full-stack product development. Currently mentoring two women through the Tech4Dev Mentorship Community.",
  email: "favourabatan@gmail.com",
  github: "https://github.com/faveee",
  linkedin: "https://www.linkedin.com/in/favourabatan",
  resume:
    "https://drive.google.com/file/d/1qSTDRJZlVeqqOGVx85mnIVkZiP4WL6Ca/view?usp=sharing",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
] as const;

export const webDevelopment = {
  index: "01",
  title: "Web Development",
  body: "End-to-end web development, from Figma mockup to a live, production-ready website.",
  feeLabel: "Fee",
  fee: "Project-based quote",
  quoteCta: "Request project quote",
  workCta: "View past projects",
} as const;

export const alsoOffer = [
  {
    index: "02",
    title: "Enterprise Systems",
    body: "Authentication, session security, RBAC, dashboards, and admin portals for teams that already run on the software.",
  },
  {
    index: "03",
    title: "Workflow Automation",
    body: "Request tracking, approvals, file handling, and role-based restrictions that keep operational work moving.",
  },
] as const;

export const work = [
  {
    title: "D’Dynamic Accessories",
    context: "Freelance",
    period: "Jun 2026 - Present",
    live: true,
    url: "https://www.shopddynamic.com/",
    urlLabel: "shopddynamic.com",
    images: [
      "/work/01-home.png",
      "/work/02-shop.png",
      "/work/03-best-sellers.png",
      "/work/04-engagement.png",
      "/work/05-education.png",
      "/work/06-product-size.png",
      "/work/07-checkout.png",
    ],
    summary:
      "Production e-commerce for a retail accessories brand: catalog, cart, checkout, delivery, payments, and order processing. Live in production.",
    points: [
      "Sanity CMS for products, categories, inventory, reviews, and content, so the client can run the storefront independently.",
      "Paystack payments through serverless APIs: verification, webhooks, cart validation, and automatic inventory updates after successful charges.",
      "Private profit analytics with cost-versus-revenue tracking, category breakdowns, charts, and Excel/PDF exports.",
    ],
  },
] as const;

export const experience = [
  {
    title: "Freelance Software Engineer",
    org: "Independent",
    location: "Lagos, Nigeria",
    period: "June 2026 - Present",
    summary:
      "Owning production web products end-to-end: architecture, UI, payments, CMS, and what happens after launch.",
    points: [
      "Designed and shipped D’Dynamic Accessories, a live e-commerce platform covering product catalog, cart, checkout, delivery, payments, and order processing.",
      "Integrated Sanity CMS so the client can manage products, categories, inventory, reviews, and storefront content without engineering help.",
      "Implemented Paystack with serverless APIs, including payment verification, webhooks, cart validation, and automatic inventory updates after successful payments.",
      "Built a private profit analytics dashboard with cost-versus-revenue tracking, category analytics, charts, and Excel/PDF exports.",
      "Set delivery, transactional email, and order-notification flows so the store can run as a real retail operation, not a demo.",
    ],
  },
  {
    title: "Software Engineer",
    org: "Sterling Bank",
    location: "Lagos, Nigeria",
    period: "November 2024 - June 2026",
    summary:
      "Frontend on 6+ production banking and enterprise web applications, with a focus on security, workflow, and maintainable architecture.",
    points: [
      "Shipped features across Wheels of Reward, Sterling Remote Hub, BYOD, ESG, Onbuddy Admin, and the Staff Exit Portal.",
      "Implemented authentication and session management: protected routes, login validation, idle timeout, and single-session enforcement.",
      "Integrated REST APIs for authentication, user management, dashboard analytics, request processing, workflow approvals, and role-based access control.",
      "Built enterprise workflow capabilities including request tracking, file upload and download, approval and rejection flows, and role-based restrictions.",
      "Refactored legacy frontend components and tightened application architecture, reducing duplication and making later changes safer.",
      "Worked with QA, DevOps, backend engineers, and product stakeholders to deliver production-ready features and close defects.",
    ],
  },
  {
    title: "Software Engineer Intern",
    org: "Sterling Bank",
    location: "Lagos, Nigeria",
    period: "July 2023 - March 2024",
    summary:
      "Merchant loyalty and admin platforms, from gift-card flows to legacy redevelopment.",
    points: [
      "Collaborated with software engineers, QA, and DevOps to build BONDLoyalty, a merchant platform for loyalty point aggregation and management.",
      "Developed the gift card module on the Bond Merchant Platform, covering purchase, management, and tracking workflows.",
      "Contributed to the redevelopment of Bond Merchant and Admin, improving usability, maintainability, and performance on legacy implementations.",
      "Supported frontend implementation, debugging, API integration, and quality assurance through development and release cycles.",
    ],
  },
] as const;

export const stackTools = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "HTML5", icon: "html" },
  { name: "CSS3", icon: "css" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Node.js", icon: "node" },
  { name: "Python", icon: "python" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Docker", icon: "docker" },
  { name: "Vite", icon: "vite" },
  { name: "Sanity", icon: "sanity" },
  { name: "Paystack", icon: "paystack" },
  { name: "Resend", icon: "resend" },
  { name: "Firebase", icon: "firebase" },
  { name: "Vercel", icon: "vercel" },
  { name: "Cursor", icon: "cursor" },
] as const;

export const stack = [
  {
    label: "Engineering",
    items: [
      "REST API integration",
      "Authentication & authorization",
      "Session management",
      "RBAC",
      "CRUD applications",
      "Dashboards",
      "Forms & validation",
      "File upload & download",
      "Performance optimization",
      "Responsive design",
      "Component architecture",
    ],
  },
  {
    label: "Backend & integrations",
    items: [
      "Serverless APIs",
      "Payment integration",
      "Webhooks",
      "Transactional email",
      "CMS integration",
      "API design",
    ],
  },
] as const;

export const aiWorkflow = {
  kicker: "AI workflow",
  title: "Hands-on use of AI coding agents",
  overview:
    "I use AI coding agents daily on production systems, but as a force multiplier, not an authority. The pattern is always the same: give it a documented spec, verify its output against reality, and push back when the done report does not match live testing.",
  tools: [
    { name: "Cursor", icon: "cursor" },
    { name: "Claude", icon: "claude" },
  ] as const,
  steps: [
    {
      index: "01",
      title: "Large-codebase navigation, debugging & refactoring",
      body: "I use agents to trace the real source of bugs across bigger codebases, isolate the root cause, and refactor confidently without losing runtime correctness.",
    },
    {
      index: "02",
      title: "Technical writing, documentation & walkthroughs",
      body: "I rely on AI for research, competitor review, clear documentation, and shaping the implementation plan before writing production code.",
    },
    {
      index: "03",
      title: "Remote, async collaboration",
      body: "I pair AI with structured specs, approval checkpoints, and live testing so work stays aligned across remote or asynchronous product delivery flows.",
    },
    {
      index: "04",
      title: "Workflow & tooling literacy + critique",
      body: "I verify the actual codebase rather than trusting a summary, and I push back when an agent defaults to a preferred stack or claims a fix without matching the live result.",
    },
  ],
} as const;

export const mentoring = {
  kicker: "Community",
  title: "The Opportunity That Keeps Giving",
  context: "2026 Tech4Dev Mentorship Programme",
  stat: "02",
  statLabel: "Mentees",
  lead: "Mentoring two aspiring software developers through a structured three month programme focused on helping them become stronger developers and better prepared for real software engineering opportunities.",
  closing:
    "Selected as a Tech4Dev Mentor for the 2026 Tech4Dev Mentorship Programme.",
} as const;

export const education = [
  {
    title: "Software Development, Front-end Track",
    org: "Tech4Dev",
    period: "August 2022 - March 2023",
    note: "Selected as a Tech4Dev Mentor for the 2026 Tech4Dev Mentorship Programme.",
  },
  {
    title: "Geography Education",
    org: "Adekunle Ajasin University",
    period: "January 2017 - November 2021",
  },
] as const;

export const certifications = [
  "freeCodeCamp - Responsive Design",
  "Udemy - Modern JavaScript",
  "edX - Data Structures and Algorithms",
  "React Testing Library and Jest",
] as const;

export const inquiryTypes = [
  "Web Development",
  "Enterprise web application",
  "Workflow automation",
  "E-commerce / full stack",
  "Other",
] as const;

export function socialLinks(): SiteLink[] {
  const links: SiteLink[] = [];

  if (site.email) {
    links.push({ label: site.email, href: `mailto:${site.email}` });
  }
  if (site.github) {
    links.push({ label: "GitHub", href: site.github });
  }
  if (site.linkedin) {
    links.push({ label: "LinkedIn", href: site.linkedin });
  }
  if (site.resume) {
    links.push({ label: "Resume", href: site.resume });
  }

  return links;
}
