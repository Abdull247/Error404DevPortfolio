import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

function useClock(timeZone: string) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (!now) return "--:--:--";

  return new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(now);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const clock = useClock(profile.timezone);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-ink bg-paper sm:top-3">
      <div className="flex h-14 items-stretch">
        <a
          href="#top"
          className="flex w-14 shrink-0 items-center justify-center bg-ink font-display text-sm font-bold tracking-wide text-sheet focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-sheet"
        >
          {profile.short}
        </a>
        <div className="flex min-w-0 flex-1 items-center border-l border-ink px-3">
          <div className="min-w-0 leading-tight">
            <p className="truncate font-display text-sm font-bold tracking-wide uppercase">
              {profile.name}
            </p>
            <p className="truncate text-section uppercase tracking-widest text-muted">
              {profile.role}
            </p>
          </div>
        </div>

        <nav className="hidden items-stretch lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex items-center border-l border-ink px-4 text-section font-medium uppercase tracking-widest text-ink hover:bg-hatch focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center border-l border-ink px-4 text-section font-medium uppercase tracking-widest text-ink md:flex">
          {profile.location}
          <span className="mx-2 text-muted">/</span>
          <span className="tabular-nums">{clock}</span>
        </div>

        <button
          type="button"
          className={cn(
            "flex w-14 shrink-0 items-center justify-center border-l border-ink text-ink transition-colors duration-150 lg:hidden",
            open ? "bg-ink text-sheet" : "bg-paper hover:bg-hatch",
          )}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-4" strokeWidth={1.75} /> : <Menu className="size-4" strokeWidth={1.75} />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn("border-t border-ink bg-paper lg:hidden", open ? "block" : "hidden")}
      >
        <nav className="flex flex-col" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex h-14 items-center border-b border-ink px-4 font-display text-lg font-bold uppercase tracking-wide last:border-b-0 hover:bg-hatch focus-visible:outline-2 focus-visible:outline-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
