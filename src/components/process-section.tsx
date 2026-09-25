import { processSteps } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  return (
    <section id="process" className="border-b border-ink">
      <header className="border-b border-ink px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="text-section font-medium uppercase tracking-widest text-muted">04 — Process</p>
        <h2 className="mt-2 font-display text-display font-bold tracking-tight uppercase">
          How a brief becomes a surface
        </h2>
      </header>
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <li
            key={step.index}
            className={cn(
              "flex flex-col px-4 py-6 sm:px-5 sm:py-7",
              index > 0 && "border-t border-ink sm:border-t-0",
              index > 1 && "sm:border-t lg:border-t-0",
              index % 2 === 1 && "sm:border-l",
              index > 0 && "lg:border-l lg:border-t-0",
            )}
          >
            <span className="font-display text-3xl font-bold tabular-nums tracking-tight text-hatch sm:text-4xl">
              {step.index}
            </span>
            <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-wide sm:mt-6 sm:text-2xl">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
