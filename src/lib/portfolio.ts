export const profile = {
  name: "Rowan Hale",
  short: "RH",
  role: "Interface Engineer",
  location: "Lisbon",
  timezone: "Europe/Lisbon",
  email: "hello@rowanhale.dev",
  availability: "Select work · Q4 2026",
  tagline: "Interfaces, systems, and the space between.",
  summary:
    "I design and build product interfaces — the kind that have to work at 2am and still look like someone cared. Staff-shaped, independent, and happiest at the seam between design and engineering.",
};

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
] as const;

export const stats = [
  { value: "08", label: "Years shipping" },
  { value: "24", label: "Products launched" },
  { value: "04", label: "Teams led" },
  { value: "01", label: "Studio" },
] as const;

export const ticker = [
  "Product interfaces",
  "Design systems",
  "Type-safe platforms",
  "Design-engineering",
  "Accessibility",
  "Motion with restraint",
  "Internal tools",
  "Design ops",
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
    id: "ledger",
    index: "01",
    title: "Ledger",
    year: "2025",
    type: "Fintech console",
    role: "Lead engineer",
    summary: "A real-time treasury surface for operators who live in the numbers.",
    detail:
      "Rebuilt the treasury desk as a single sharp workspace: live positions, exception queues, and a keyboard-first table that holds up under pressure. Cut time-to-decision on large transfers from minutes to a glance.",
    stack: ["TypeScript", "React", "TanStack Table", "WebSocket"],
    image: "/projects/ledger.jpg",
  },
  {
    id: "atlas",
    index: "02",
    title: "Atlas",
    year: "2024",
    type: "Design system",
    role: "Staff engineer",
    summary: "A component registry and token pipeline used across four product teams.",
    detail:
      "Named every surface, shipped a documented primitive set, and wired tokens so product UI and marketing stopped drifting. Adoption went from a Figma file to the actual production tree.",
    stack: ["React", "Tailwind", "Tokens", "Storybook"],
    image: "/projects/atlas.jpg",
  },
  {
    id: "signal",
    index: "03",
    title: "Signal",
    year: "2025",
    type: "Observability",
    role: "Product engineer",
    summary: "Job traces and failure patterns, drawn as a readable timeline.",
    detail:
      "Turned a wall of logs into a structured trace view with filters that match how on-call actually thinks. The first screen answers “is it us?” before anyone opens a dashboard.",
    stack: ["TypeScript", "React", "Recharts", "Postgres"],
    image: "/projects/signal.jpg",
  },
  {
    id: "halo",
    index: "04",
    title: "Halo",
    year: "2023",
    type: "Scheduling",
    role: "Frontend lead",
    summary: "Clinic scheduling that treats the calendar as a serious interface.",
    detail:
      "Designed the week view, drag rules, and conflict states for a clinic network. Staff stopped keeping a paper backup. The UI is quiet on a good day and loud only when a slot is about to break.",
    stack: ["TypeScript", "React", "DnD", "Accessibility"],
    image: "/projects/halo.jpg",
  },
];

export const stackGroups = [
  {
    heading: "Interface",
    items: ["React", "TypeScript", "TanStack", "Tailwind", "Radix"],
  },
  {
    heading: "Systems",
    items: ["Node", "Postgres", "Redis", "GraphQL", "Vite"],
  },
  {
    heading: "Craft",
    items: ["Design systems", "A11y", "Motion", "Docs", "Code review"],
  },
  {
    heading: "Shape",
    items: ["IA", "Prototyping", "Design-eng", "Hiring", "Mentorship"],
  },
] as const;

export const processSteps = [
  {
    index: "01",
    title: "Discover",
    body: "Constraints, users, and the actual problem — not the requested feature.",
  },
  {
    index: "02",
    title: "Frame",
    body: "Information architecture, interface contracts, and the tokens that hold them.",
  },
  {
    index: "03",
    title: "Build",
    body: "Type-safe UI, measured performance, and states for empty, error, and load.",
  },
  {
    index: "04",
    title: "Ship",
    body: "Reviews, instrumentation, and the last ten percent that makes it feel finished.",
  },
] as const;

export const experience = [
  {
    period: "2024 — Now",
    title: "Independent engineer",
    org: "Studio",
    body: "Product interfaces for seed and series-A teams. Staff-shaped, embedded, finite.",
  },
  {
    period: "2022 — 2024",
    title: "Staff engineer",
    org: "Atelier North",
    body: "Design system and web platform. Four products, one language.",
  },
  {
    period: "2020 — 2022",
    title: "Product engineer",
    org: "Fieldline",
    body: "Editor, collab, and the surface researchers actually lived in.",
  },
  {
    period: "2018 — 2020",
    title: "Frontend engineer",
    org: "Northwind",
    body: "Merchant dashboard, money movement, and the unforgiving empty states.",
  },
] as const;
