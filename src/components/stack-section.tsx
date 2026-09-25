import { stackGroups } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function StackSection() {
  return (
    <section id="stack" className="border-b border-ink">
      <header className="border-b border-ink px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="text-section font-medium uppercase tracking-widest text-muted">03 — Stack</p>
        <h2 className="mt-2 font-display text-display font-bold tracking-tight uppercase">
          Tools I keep sharp
        </h2>
      </header>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {stackGroups.map((group, index) => (
          <div
            key={group.heading}
            className={cn(
              "px-4 py-5 sm:px-5 sm:py-6",
              index % 2 === 1 && "border-l border-ink",
              index > 1 && "border-t border-ink lg:border-t-0",
              index > 0 && "lg:border-l",
            )}
          >
            <h3 className="text-section font-medium uppercase tracking-widest text-muted">
              {group.heading}
            </h3>
            <ul className="mt-3 space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="font-display text-lg font-bold uppercase tracking-wide sm:text-xl">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
