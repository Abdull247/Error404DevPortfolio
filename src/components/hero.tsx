import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { ActionLink } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

const cells = 24;
const filled = new Set([0, 3, 7, 8, 11, 14, 18, 20, 22]);

const meta = [
  { label: "Role", value: profile.role },
  { label: "Based", value: profile.location },
  { label: "Focus", value: "Product UI" },
  { label: "Status", value: "Booking Q4" },
] as const;

export function Hero() {
  return (
    <section className="border-b border-ink">
      <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.75fr)]">
        <div className="flex flex-col justify-center gap-6 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="stagger-in flex flex-col gap-5">
            <p className="text-section font-medium uppercase tracking-widest text-muted">
              {profile.availability}
            </p>
            <h1 className="font-display text-hero leading-hero font-extrabold tracking-tight uppercase">
              Rowan
              <br />
              Hale
            </h1>
            <p className="max-w-md text-base leading-relaxed text-ink">
              {profile.tagline} {profile.role} in {profile.location}, working with teams who treat the interface as a product.
            </p>
          </div>
        </div>

        <aside className="hidden border-l border-ink lg:flex lg:flex-col">
          <div className="flex items-center justify-between border-b border-ink px-5 py-3 text-section font-medium uppercase tracking-widest text-muted">
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
          <dl className="mt-auto">
            {meta.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-4 border-t border-ink px-5 py-3 first:border-t-0"
              >
                <dt className="text-section uppercase tracking-widest text-muted">{row.label}</dt>
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
            <dt className="text-section uppercase tracking-widest text-muted">{row.label}</dt>
            <dd className="truncate text-sm font-medium">{row.value}</dd>
          </div>
        ))}
      </dl>

      <div className="grid grid-cols-1 border-t border-ink sm:grid-cols-2">
        <ActionLink href="#work" variant="bar" className="border-b border-ink sm:border-r sm:border-b-0">
          View work
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
