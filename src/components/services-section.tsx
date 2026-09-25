import { services } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  return (
    <section id="services" className="border-b border-ink">
      <header className="border-b border-ink px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <p className="font-mono text-section font-medium uppercase tracking-widest text-muted">
          04 — Services
        </p>
        <h2 className="mt-2 font-display text-display tracking-display">How a brief becomes a build</h2>
      </header>
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((step, index) => (
          <li
            key={step.index}
            className={cn(
              "flex flex-col px-4 py-7 sm:px-6 sm:py-8",
              index > 0 && "border-t border-ink sm:border-t-0",
              index > 1 && "sm:border-t lg:border-t-0",
              index % 2 === 1 && "sm:border-l",
              index > 0 && "lg:border-l lg:border-t-0",
            )}
          >
            <span className="font-mono text-sm tabular-nums tracking-widest text-signal">{step.index}</span>
            <h3 className="mt-5 font-display text-2xl tracking-tight sm:mt-6">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
