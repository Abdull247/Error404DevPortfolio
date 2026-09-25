export const profile = {
  name: "Error404",
  short: "404",
  role: "Mobile engineer",
  location: "Remote",
  timezone: "Africa/Lagos",
  email: "hello@error404.dev",
  github: "https://github.com/error404",
  linkedin: "https://www.linkedin.com/in/error404",
  availability: "Open for select work",
  tagline: "Native mobile, reliable backends, and automations that stay out of the way.",
  summary:
    "I ship Android products in Kotlin and Jetpack Compose — and still speak fluent Java and XML when a codebase needs it. Around that I build Fastify and Express services, React surfaces, and n8n plus Python automations so the app, the API, and the ops layer feel like one system.",
};

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
] as const;

export const stats = [
  { value: "06", label: "Years shipping" },
  { value: "18", label: "Apps released" },
  { value: "12", label: "APIs in production" },
  { value: "40+", label: "Automations live" },
] as const;

export const ticker = [
  "Jetpack Compose",
  "Kotlin",
  "Java & XML",
  "Fastify",
  "Express",
  "React",
  "Python",
  "n8n",
  "AI automation",
  "Android",
];

export type Project = {
  id: string;
  index: string;
  title: string;
  year: string;
  type: string;
  role: string;
  summary: string;
  detail: string;
  stack: string[];
  image: string;
};

export const projects: Project[] = [
  {
    id: "northline",
    index: "01",
    title: "Northline",
    year: "2025",
    type: "Android · Compose",
    role: "Lead mobile engineer",
    summary: "A Compose transit app that treats live arrivals as a product, not a list.",
    detail:
      "Designed and shipped the Android client in Kotlin and Jetpack Compose: offline-first routes, a glanceable arrivals surface, and motion that stays quiet until a connection is about to drop. Cut time-to-first-useful-screen and made the network layer recoverable instead of optimistic.",
    stack: ["Kotlin", "Jetpack Compose", "Coroutines", "Room"],
    image: "/projects/ledger.jpg",
  },
  {
    id: "switchboard",
    index: "02",
    title: "Switchboard",
    year: "2025",
    type: "Automation · API",
    role: "Backend & automation",
    summary: "Fastify plus n8n — ops that used to live in Slack threads, now a system.",
    detail:
      "Wired a Fastify service to an n8n layer so support, billing, and on-call stop copy-pasting between tools. Python jobs handle the messy transforms. The first screen answers what failed, who owns it, and whether a human still needs to touch it.",
    stack: ["Node.js", "Fastify", "n8n", "Python"],
    image: "/projects/signal.jpg",
  },
  {
    id: "fieldkit",
    index: "03",
    title: "Fieldkit",
    year: "2024",
    type: "Android · Java / XML",
    role: "Mobile engineer",
    summary: "A field-ops Android app modernized without throwing the XML away.",
    detail:
      "Inherited a Java and XML codebase that crews actually used offline. Stabilized the forms, introduced Kotlin where it paid off, and kept the XML layouts that already worked. Sync stopped being a nightly ritual. Staff stopped carrying paper backups.",
    stack: ["Java", "XML", "Kotlin", "SQLite"],
    image: "/projects/halo.jpg",
  },
  {
    id: "harbor",
    index: "04",
    title: "Harbor",
    year: "2024",
    type: "Web · React",
    role: "Full-stack engineer",
    summary: "A React console on Express for operators who live in exceptions.",
    detail:
      "Built the web surface and the Express API as one contract: queues, status, and the few actions that matter. CSS is deliberate, not decorative. The UI is quiet on a good day and only loud when a job is about to break.",
    stack: ["React", "CSS", "Express", "Node.js"],
    image: "/projects/atlas.jpg",
  },
];

export const stackGroups = [
  {
    heading: "Mobile",
    items: ["Kotlin", "Jetpack Compose", "Java", "XML", "Coroutines"],
  },
  {
    heading: "Backend",
    items: ["Node.js", "Fastify", "Express", "REST", "Postgres"],
  },
  {
    heading: "Web",
    items: ["React", "CSS", "TypeScript", "Vite", "TanStack"],
  },
  {
    heading: "Automation",
    items: ["n8n", "Python", "AI workflows", "Webhooks", "Cron"],
  },
] as const;

export const services = [
  {
    index: "01",
    title: "Native Android",
    body: "Compose-first products, or Java and XML codebases that still have to ship. Offline, sync, and UI that holds up in the field.",
  },
  {
    index: "02",
    title: "APIs that last",
    body: "Fastify and Express services with clear contracts, boring reliability, and the logs operators actually read.",
  },
  {
    index: "03",
    title: "Web consoles",
    body: "React and CSS for the people who run the product — tables, queues, and states for empty, error, and load.",
  },
  {
    index: "04",
    title: "AI automation",
    body: "n8n and Python workflows that connect the app to the rest of the business, with a human still in the loop.",
  },
] as const;

export const experience = [
  {
    period: "2023 — Now",
    title: "Independent engineer",
    org: "Error404",
    body: "Android products, Node services, and automation for teams that need one person who can close the loop.",
  },
  {
    period: "2021 — 2023",
    title: "Android engineer",
    org: "Fieldline",
    body: "Kotlin, Compose, and the XML that was already in production. Shipping was the point.",
  },
  {
    period: "2019 — 2021",
    title: "Mobile engineer",
    org: "Northwind",
    body: "Java Android, payment surfaces, and the unforgiving empty states of money movement.",
  },
] as const;
