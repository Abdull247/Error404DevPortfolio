import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as ArrowUpRight, i as Check, o as ArrowDownRight, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay, i as DialogDescription, l as Slot, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BoNQ5PFH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var profile = {
	name: "Rowan Hale",
	short: "RH",
	role: "Interface Engineer",
	location: "Lisbon",
	timezone: "Europe/Lisbon",
	email: "hello@rowanhale.dev",
	availability: "Select work · Q4 2026",
	tagline: "Interfaces, systems, and the space between.",
	summary: "I design and build product interfaces — the kind that have to work at 2am and still look like someone cared. Staff-shaped, independent, and happiest at the seam between design and engineering."
};
var nav = [
	{
		href: "#work",
		label: "Work"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#stack",
		label: "Stack"
	},
	{
		href: "#process",
		label: "Process"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
var stats = [
	{
		value: "08",
		label: "Years shipping"
	},
	{
		value: "24",
		label: "Products launched"
	},
	{
		value: "04",
		label: "Teams led"
	},
	{
		value: "01",
		label: "Studio"
	}
];
var ticker = [
	"Product interfaces",
	"Design systems",
	"Type-safe platforms",
	"Design-engineering",
	"Accessibility",
	"Motion with restraint",
	"Internal tools",
	"Design ops"
];
var projects = [
	{
		id: "ledger",
		index: "01",
		title: "Ledger",
		year: "2025",
		type: "Fintech console",
		role: "Lead engineer",
		summary: "A real-time treasury surface for operators who live in the numbers.",
		detail: "Rebuilt the treasury desk as a single sharp workspace: live positions, exception queues, and a keyboard-first table that holds up under pressure. Cut time-to-decision on large transfers from minutes to a glance.",
		stack: [
			"TypeScript",
			"React",
			"TanStack Table",
			"WebSocket"
		],
		image: "/projects/ledger.jpg"
	},
	{
		id: "atlas",
		index: "02",
		title: "Atlas",
		year: "2024",
		type: "Design system",
		role: "Staff engineer",
		summary: "A component registry and token pipeline used across four product teams.",
		detail: "Named every surface, shipped a documented primitive set, and wired tokens so product UI and marketing stopped drifting. Adoption went from a Figma file to the actual production tree.",
		stack: [
			"React",
			"Tailwind",
			"Tokens",
			"Storybook"
		],
		image: "/projects/atlas.jpg"
	},
	{
		id: "signal",
		index: "03",
		title: "Signal",
		year: "2025",
		type: "Observability",
		role: "Product engineer",
		summary: "Job traces and failure patterns, drawn as a readable timeline.",
		detail: "Turned a wall of logs into a structured trace view with filters that match how on-call actually thinks. The first screen answers “is it us?” before anyone opens a dashboard.",
		stack: [
			"TypeScript",
			"React",
			"Recharts",
			"Postgres"
		],
		image: "/projects/signal.jpg"
	},
	{
		id: "halo",
		index: "04",
		title: "Halo",
		year: "2023",
		type: "Scheduling",
		role: "Frontend lead",
		summary: "Clinic scheduling that treats the calendar as a serious interface.",
		detail: "Designed the week view, drag rules, and conflict states for a clinic network. Staff stopped keeping a paper backup. The UI is quiet on a good day and loud only when a slot is about to break.",
		stack: [
			"TypeScript",
			"React",
			"DnD",
			"Accessibility"
		],
		image: "/projects/halo.jpg"
	}
];
var stackGroups = [
	{
		heading: "Interface",
		items: [
			"React",
			"TypeScript",
			"TanStack",
			"Tailwind",
			"Radix"
		]
	},
	{
		heading: "Systems",
		items: [
			"Node",
			"Postgres",
			"Redis",
			"GraphQL",
			"Vite"
		]
	},
	{
		heading: "Craft",
		items: [
			"Design systems",
			"A11y",
			"Motion",
			"Docs",
			"Code review"
		]
	},
	{
		heading: "Shape",
		items: [
			"IA",
			"Prototyping",
			"Design-eng",
			"Hiring",
			"Mentorship"
		]
	}
];
var processSteps = [
	{
		index: "01",
		title: "Discover",
		body: "Constraints, users, and the actual problem — not the requested feature."
	},
	{
		index: "02",
		title: "Frame",
		body: "Information architecture, interface contracts, and the tokens that hold them."
	},
	{
		index: "03",
		title: "Build",
		body: "Type-safe UI, measured performance, and states for empty, error, and load."
	},
	{
		index: "04",
		title: "Ship",
		body: "Reviews, instrumentation, and the last ten percent that makes it feel finished."
	}
];
var experience = [
	{
		period: "2024 — Now",
		title: "Independent engineer",
		org: "Studio",
		body: "Product interfaces for seed and series-A teams. Staff-shaped, embedded, finite."
	},
	{
		period: "2022 — 2024",
		title: "Staff engineer",
		org: "Atelier North",
		body: "Design system and web platform. Four products, one language."
	},
	{
		period: "2020 — 2022",
		title: "Product engineer",
		org: "Fieldline",
		body: "Editor, collab, and the surface researchers actually lived in."
	},
	{
		period: "2018 — 2020",
		title: "Frontend engineer",
		org: "Northwind",
		body: "Merchant dashboard, money movement, and the unforgiving empty states."
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function AboutSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "border-b border-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "border-b border-ink px-4 py-6 sm:px-6 sm:py-8 lg:border-r lg:border-b-0 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-section font-medium uppercase tracking-widest text-muted",
						children: "01 — About"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-display font-bold tracking-tight uppercase",
						children: "Built at the seam"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-4 py-6 sm:px-6 sm:py-8 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xl text-base leading-relaxed",
						children: profile.summary
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 border-t border-ink sm:grid-cols-4",
				children: stats.map((stat, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("px-4 py-5 sm:px-5 sm:py-6", index % 2 === 1 && "border-l border-ink", index > 1 && "border-t border-ink sm:border-t-0", index > 0 && "sm:border-l"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl font-bold tracking-tight tabular-nums sm:text-5xl",
						children: stat.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-section uppercase tracking-widest text-muted",
						children: stat.label
					})]
				}, stat.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b border-ink px-4 py-3 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-section font-medium uppercase tracking-widest text-muted",
						children: "Experience"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: experience.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-1 border-b border-ink px-4 py-4 last:border-b-0 sm:grid-cols-[9.5rem_1fr] sm:gap-8 sm:px-6 sm:py-5 lg:grid-cols-[11rem_14rem_1fr]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-section uppercase tracking-widest text-muted",
							children: item.period
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-base font-bold uppercase tracking-wide sm:text-lg",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: item.org
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed sm:col-span-2 lg:col-span-1",
							children: item.body
						})
					]
				}, item.period)) })]
			})
		]
	});
}
var buttonVariants = cva("relative inline-flex min-w-0 items-center justify-center gap-2 overflow-hidden font-sans text-sm font-medium tracking-wide uppercase select-none touch-manipulation focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:pointer-events-none disabled:opacity-40 transition-[transform,color,background-color] duration-150 ease-out-sharp active:not-disabled:scale-[0.98]", {
	variants: {
		variant: {
			solid: "border border-ink bg-ink text-sheet hover:bg-paper hover:text-ink",
			outline: "btn-wipe border border-ink bg-paper text-ink hover:text-sheet",
			ghost: "border border-transparent bg-transparent text-ink hover:bg-hatch",
			bar: "border-0 bg-ink text-sheet hover:bg-paper hover:text-ink",
			"bar-outline": "btn-wipe border-0 bg-paper text-ink hover:text-sheet"
		},
		size: {
			default: "h-11 min-h-11 px-5",
			lg: "h-12 min-h-12 px-5",
			sm: "h-10 min-h-10 px-4 text-xs",
			icon: "size-11",
			bar: "h-12 min-h-12 w-full px-4 text-xs tracking-widest sm:px-5 sm:text-sm"
		}
	},
	defaultVariants: {
		variant: "solid",
		size: "default"
	}
});
function Button({ className, variant = "solid", size, asChild = false, children, ...props }) {
	const Comp = asChild ? Slot : "button";
	if (asChild) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative z-10 inline-flex items-center gap-2",
			children
		})
	});
}
function ActionLink({ href, variant = "bar", className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: cn(buttonVariants({
			variant,
			size: "bar"
		}), className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-flex items-center gap-2",
			children
		})
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("h-10 w-full border-0 bg-transparent px-0 font-sans text-base text-ink placeholder:text-muted", "focus-visible:outline-none", "disabled:opacity-40", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-section font-medium uppercase tracking-[0.16em] text-muted", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-28 w-full resize-y border-0 bg-transparent px-0 py-0 font-sans text-base leading-relaxed text-ink placeholder:text-muted", "focus-visible:outline-none", "disabled:opacity-40", className),
		...props
	});
}
var briefSchema = object({
	name: string().trim().min(2, "Name is too short."),
	email: string().trim().email("Enter a valid email."),
	message: string().trim().min(12, "Tell me a little more about the work.")
});
function ContactSection() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [errors, setErrors] = (0, import_react.useState)({});
	function onSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		const payload = new FormData(form);
		const data = {
			name: String(payload.get("name") ?? ""),
			email: String(payload.get("email") ?? ""),
			message: String(payload.get("message") ?? "")
		};
		const parsed = briefSchema.safeParse(data);
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0];
				if (key === "name" || key === "email" || key === "message") next[key] = issue.message;
			}
			setErrors(next);
			return;
		}
		setErrors({});
		try {
			window.localStorage.setItem("rowan-hale-brief", JSON.stringify({
				...parsed.data,
				at: (/* @__PURE__ */ new Date()).toISOString()
			}));
		} catch {}
		setStatus("sent");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "border-b border-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col justify-between gap-6 border-b border-ink px-4 py-6 sm:px-6 sm:py-8 lg:border-r lg:border-b-0 lg:px-8 lg:py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-section font-medium uppercase tracking-widest text-muted",
						children: "05 — Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-display font-bold tracking-tight uppercase",
						children: "Send a brief"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-sm text-base leading-relaxed",
						children: "New product, a design system in trouble, or a surface that needs to grow up. I take a small number of engagements per quarter."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `mailto:${profile.email}`,
					className: "inline-flex w-fit items-center gap-2 border border-ink bg-paper px-3 py-2.5 font-display text-sm font-bold uppercase tracking-wide hover:bg-ink hover:text-sheet focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:text-base",
					children: [profile.email, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						className: "size-4",
						strokeWidth: 1.75
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:min-h-full",
				children: status === "sent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full min-h-56 flex-col justify-center bg-sheet px-4 py-8 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "size-7",
							strokeWidth: 1.75
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-2xl font-bold uppercase tracking-wide",
							children: "Brief received"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 max-w-sm text-sm leading-relaxed text-muted",
							children: [
								"I’ll reply within two working days. If it’s urgent, write directly to ",
								profile.email,
								"."
							]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "flex h-full flex-col",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								htmlFor: "name",
								error: errors.name,
								className: "border-b border-ink sm:border-r",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									name: "name",
									autoComplete: "name",
									placeholder: "Your name"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								htmlFor: "email",
								error: errors.email,
								className: "border-b border-ink",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									name: "email",
									type: "email",
									autoComplete: "email",
									placeholder: "you@studio.com"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "The work",
							htmlFor: "message",
							error: errors.message,
							className: "border-b border-ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "message",
								name: "message",
								placeholder: "What are you building, and what do you need from an interface engineer?"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "bar",
							size: "bar",
							className: "mt-auto",
							children: "Send brief"
						})
					]
				})
			})]
		})
	});
}
function Field({ label, htmlFor, error, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col gap-1.5 px-4 py-3 sm:px-5 sm:py-4", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor,
				children: label
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-ink",
				role: "alert",
				children: error
			}) : null
		]
	});
}
var cells = 24;
var filled = /* @__PURE__ */ new Set([
	0,
	3,
	7,
	8,
	11,
	14,
	18,
	20,
	22
]);
var meta = [
	{
		label: "Role",
		value: profile.role
	},
	{
		label: "Based",
		value: profile.location
	},
	{
		label: "Focus",
		value: "Product UI"
	},
	{
		label: "Status",
		value: "Booking Q4"
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border-b border-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.75fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col justify-center gap-6 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stagger-in flex flex-col gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-section font-medium uppercase tracking-widest text-muted",
								children: profile.availability
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-hero leading-hero font-extrabold tracking-tight uppercase",
								children: [
									"Rowan",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Hale"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "max-w-md text-base leading-relaxed text-ink",
								children: [
									profile.tagline,
									" ",
									profile.role,
									" in ",
									profile.location,
									", working with teams who treat the interface as a product."
								]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "hidden border-l border-ink lg:flex lg:flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-ink px-5 py-3 text-section font-medium uppercase tracking-widest text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Index" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-ink",
								children: "00 / Hero"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-6 border-b border-ink",
							children: Array.from({ length: cells }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("aspect-square border-r border-b border-ink", index % 6 === 5 && "border-r-0", filled.has(index) ? "bg-ink" : "bg-paper") }, index))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-auto",
							children: meta.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-4 border-t border-ink px-5 py-3 first:border-t-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-section uppercase tracking-widest text-muted",
									children: row.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-right text-sm font-medium",
									children: row.value
								})]
							}, row.label))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "grid grid-cols-2 border-t border-ink lg:hidden",
				children: meta.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("flex min-w-0 flex-col gap-1 px-4 py-3", index % 2 === 1 && "border-l border-ink", index > 1 && "border-t border-ink"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-section uppercase tracking-widest text-muted",
						children: row.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "truncate text-sm font-medium",
						children: row.value
					})]
				}, row.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 border-t border-ink sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionLink, {
					href: "#work",
					variant: "bar",
					className: "border-b border-ink sm:border-r sm:border-b-0",
					children: ["View work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {
						className: "size-4",
						strokeWidth: 1.75
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionLink, {
					href: "#contact",
					variant: "bar-outline",
					children: ["Start a brief", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						className: "size-4",
						strokeWidth: 1.75
					})]
				})]
			})
		]
	});
}
function ProcessSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "process",
		className: "border-b border-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "border-b border-ink px-4 py-6 sm:px-6 sm:py-8 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-section font-medium uppercase tracking-widest text-muted",
				children: "04 — Process"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-display font-bold tracking-tight uppercase",
				children: "How a brief becomes a surface"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
			children: processSteps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: cn("flex flex-col px-4 py-6 sm:px-5 sm:py-7", index > 0 && "border-t border-ink sm:border-t-0", index > 1 && "sm:border-t lg:border-t-0", index % 2 === 1 && "sm:border-l", index > 0 && "lg:border-l lg:border-t-0"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-3xl font-bold tabular-nums tracking-tight text-hatch sm:text-4xl",
						children: step.index
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-xl font-bold uppercase tracking-wide sm:mt-6 sm:text-2xl",
						children: step.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: step.body
					})
				]
			}, step.index))
		})]
	});
}
function SelectedWork() {
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "work",
		className: "border-b border-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex flex-col gap-2 border-b border-ink px-4 py-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8 sm:px-6 sm:py-8 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-section font-medium uppercase tracking-widest text-muted",
				children: "02 — Selected work"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-display font-bold tracking-tight uppercase",
				children: "Four recent surfaces"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-sm text-sm leading-relaxed text-muted",
				children: "Open a cell for the brief, the stack, and what changed after it shipped."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
			open: active !== null,
			onOpenChange: (open) => {
				if (!open) setActive(null);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2",
				children: projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setActive(project),
					className: cn("group flex flex-col border-ink text-left focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink", index > 0 && "border-t sm:border-t-0", index > 1 && "sm:border-t", index % 2 === 1 && "sm:border-l"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden border-b border-ink bg-hatch",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: project.image,
							alt: "",
							width: 1792,
							height: 1008,
							className: "aspect-video w-full object-cover outline outline-1 -outline-offset-1 outline-ink/15 transition-transform duration-200 ease-out-sharp group-hover:scale-105 group-active:scale-105",
							loading: index === 0 ? "eager" : "lazy",
							decoding: "async"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-0 left-0 border-r border-b border-ink bg-paper px-2 py-1 font-display text-xs font-bold tabular-nums",
							children: project.index
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col gap-2 bg-paper px-4 py-4 transition-colors duration-150 group-hover:bg-ink group-hover:text-sheet group-active:bg-ink group-active:text-sheet sm:px-5 sm:py-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3 text-section uppercase tracking-widest text-muted group-hover:text-hatch group-active:text-hatch",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.type }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: project.year
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-end justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-bold tracking-tight uppercase sm:text-3xl",
									children: project.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "mb-0.5 size-4 shrink-0 opacity-40 transition-opacity duration-150 group-hover:opacity-100 sm:size-5",
									strokeWidth: 1.75
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-muted group-hover:text-hatch group-active:text-hatch",
								children: project.summary
							})
						]
					})]
				}, project.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-ink/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
				className: "fixed inset-0 z-50 flex flex-col overflow-hidden border-0 bg-paper focus:outline-none sm:inset-auto sm:top-1/2 sm:left-1/2 sm:h-auto sm:max-h-[min(40rem,calc(100dvh-2rem))] sm:w-[min(42rem,calc(100vw-2rem))] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:border sm:border-ink",
				children: active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative shrink-0 border-b border-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: active.image,
						alt: "",
						className: "aspect-video max-h-44 w-full object-cover sm:max-h-64"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
						className: "absolute top-0 right-0 flex size-11 items-center justify-center bg-ink text-sheet hover:bg-paper hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-sheet",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "size-4",
							strokeWidth: 1.75
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Close project"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-section uppercase tracking-widest text-muted",
							children: [
								active.index,
								" — ",
								active.type,
								" · ",
								active.year
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "mt-2 font-display text-3xl font-bold tracking-tight uppercase",
							children: active.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "mt-3 text-base leading-relaxed",
							children: active.detail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-muted",
							children: ["Role · ", active.role]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 flex flex-wrap",
							children: active.stack.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "-mr-px -mb-px border border-ink bg-sheet px-3 py-1.5 text-section font-medium uppercase tracking-widest",
								children: item
							}, item))
						})
					]
				})] }) : null
			})] })]
		})]
	});
}
function SiteFooter() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "grid grid-cols-1 sm:grid-cols-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "border-b border-ink px-4 py-3 text-section uppercase tracking-widest text-muted sm:border-b-0 sm:border-r sm:px-6 sm:py-4",
				children: [
					"© ",
					year,
					" ",
					profile.name
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "border-b border-ink px-4 py-3 text-section uppercase tracking-widest text-muted sm:border-b-0 sm:border-r sm:px-6 sm:py-4",
				children: [profile.location, " · Sharp edges, quiet interfaces"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#top",
				className: "px-4 py-3 text-section font-medium uppercase tracking-widest text-ink hover:bg-hatch focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink sm:px-6 sm:py-4",
				children: "Back to top"
			})
		]
	});
}
function useClock(timeZone) {
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const tick = () => setNow(/* @__PURE__ */ new Date());
		tick();
		const id = window.setInterval(tick, 1e3);
		return () => window.clearInterval(id);
	}, []);
	if (!now) return "--:--:--";
	return new Intl.DateTimeFormat("en-GB", {
		timeZone,
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false
	}).format(now);
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const clock = useClock(profile.timezone);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-ink bg-paper sm:top-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-14 items-stretch",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "flex w-14 shrink-0 items-center justify-center bg-ink font-display text-sm font-bold tracking-wide text-sheet focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-sheet",
					children: profile.short
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex min-w-0 flex-1 items-center border-l border-ink px-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-display text-sm font-bold tracking-wide uppercase",
							children: profile.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-section uppercase tracking-widest text-muted",
							children: profile.role
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-stretch lg:flex",
					"aria-label": "Primary",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "inline-flex items-center border-l border-ink px-4 text-section font-medium uppercase tracking-widest text-ink hover:bg-hatch focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center border-l border-ink px-4 text-section font-medium uppercase tracking-widest text-ink md:flex",
					children: [
						profile.location,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-2 text-muted",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: clock
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: cn("flex w-14 shrink-0 items-center justify-center border-l border-ink text-ink transition-colors duration-150 lg:hidden", open ? "bg-ink text-sheet" : "bg-paper hover:bg-hatch"),
					"aria-expanded": open,
					"aria-controls": "mobile-nav",
					onClick: () => setOpen((value) => !value),
					children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "size-4",
						strokeWidth: 1.75
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
						className: "size-4",
						strokeWidth: 1.75
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: open ? "Close menu" : "Open menu"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-nav",
			className: cn("border-t border-ink bg-paper lg:hidden", open ? "block" : "hidden"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col",
				"aria-label": "Mobile",
				children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					onClick: () => setOpen(false),
					className: "flex h-14 items-center border-b border-ink px-4 font-display text-lg font-bold uppercase tracking-wide last:border-b-0 hover:bg-hatch focus-visible:outline-2 focus-visible:outline-ink",
					children: item.label
				}, item.href))
			})
		})]
	});
}
function StackSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "stack",
		className: "border-b border-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "border-b border-ink px-4 py-6 sm:px-6 sm:py-8 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-section font-medium uppercase tracking-widest text-muted",
				children: "03 — Stack"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-display font-bold tracking-tight uppercase",
				children: "Tools I keep sharp"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 lg:grid-cols-4",
			children: stackGroups.map((group, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("px-4 py-5 sm:px-5 sm:py-6", index % 2 === 1 && "border-l border-ink", index > 1 && "border-t border-ink lg:border-t-0", index > 0 && "lg:border-l"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-section font-medium uppercase tracking-widest text-muted",
					children: group.heading
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-1.5",
					children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "font-display text-lg font-bold uppercase tracking-wide sm:text-xl",
						children: item
					}, item))
				})]
			}, group.heading))
		})]
	});
}
function Ticker() {
	const loop = [...ticker, ...ticker];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Practice areas",
		className: "overflow-x-clip border-b border-ink bg-ink text-sheet",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track flex w-max items-center",
			children: loop.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center px-4 py-2.5 font-display text-xs font-bold uppercase tracking-widest sm:px-5 sm:py-3 sm:text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "mr-4 text-hatch",
					children: "/"
				}), item]
			}, `${item}-${index}`))
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-dvh overflow-x-hidden bg-hatch sm:p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#work",
			className: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:border focus:border-ink focus:bg-paper focus:px-3 focus:py-2",
			children: "Skip to work"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-dvh overflow-x-hidden border-ink bg-paper sm:min-h-[calc(100dvh-1.5rem)] sm:border",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectedWork, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		})]
	});
}
//#endregion
export { Home as component };
