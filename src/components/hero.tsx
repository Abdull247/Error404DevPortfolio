import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { ActionLink } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

const cells = 24;
const filled = new Set([0, 3, 4, 8, 11, 14, 15, 19, 22, 23]);

const meta = [
  { label: "Role", value: profile.role },
  { label: "Based", value: profile.location },
  { label: "Focus", value: "Android / APIs" },
  { label: "Status", value: "Available" },
] as const;

export function Hero() {
  return (
    <section className="border-b border-ink">
      <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.7fr)]">
        <div className="flex flex-col justify-center gap-6 px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-20">
          <div className="stagger-in flex flex-col gap-6">
            <p className="flex items-center gap-3 font-mono text-section uppercase tracking-widest text-muted">
              <span className="inline-block size-1.5 bg-signal" aria-hidden="true" />
              {profile.availability}
            </p>
            <h1 className="font-display text-hero leading-hero tracking-display text-ink">
              Error
              <span className="text-signal">404</span>
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-ink sm:text-lg">
              {profile.tagline}
            </p>
          </div>
        </div>

        <aside className="hidden border-l border-ink lg:flex lg:flex-col">
          <div className="flex items-center justify-between border-b border-ink px-5 py-3 font-mono text-section uppercase tracking-widest text-muted">
            <span>Index</span>
            <span className="text-ink">00 / Hero</span>
          </div>
          <div className="grid grid-cols-6 border-b border-ink">
            {Array.from({ length: cells }, (_, index) => (
              <div
                key={index}
                className={cn(
                  "aspect-square border-r border-b border-ink",
                  index % 6 === 5 && "border-r-0",
                  filled.has(index) ? "bg-ink" : "bg-paper",
                )}
              />
            ))}
          </div>
          <p className="border-b border-ink px-5 py-4 font-mono text-section leading-relaxed uppercase tracking-widest text-muted">
            Kotlin · Compose · Node · n8n
          </p>
          <dl className="mt-auto">
            {meta.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-4 border-t border-ink px-5 py-3 first:border-t-0"
              >
                <dt className="font-mono text-section uppercase tracking-widest text-muted">
                  {row.label}
                </dt>
                <dd className="text-right text-sm font-medium">{row.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <dl className="grid grid-cols-2 border-t border-ink lg:hidden">
        {meta.map((row, index) => (
          <div
            key={row.label}
            className={cn(
              "flex min-w-0 flex-col gap-1 px-4 py-3",
              index % 2 === 1 && "border-l border-ink",
              index > 1 && "border-t border-ink",
            )}
          >
            <dt className="font-mono text-section uppercase tracking-widest text-muted">
              {row.label}
            </dt>
            <dd className="truncate text-sm font-medium">{row.value}</dd>
          </div>
        ))}
      </dl>

      <div className="grid grid-cols-1 border-t border-ink sm:grid-cols-2">
        <ActionLink href="#work" variant="bar" className="border-b border-ink sm:border-r sm:border-b-0">
          Selected work
          <ArrowDownRight className="size-4" strokeWidth={1.75} />
        </ActionLink>
        <ActionLink href="#contact" variant="bar-outline">
          Start a brief
          <ArrowUpRight className="size-4" strokeWidth={1.75} />
        </ActionLink>
      </div>
    </section>
  );
}
