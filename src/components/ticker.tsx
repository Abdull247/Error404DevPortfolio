import { ticker } from "@/lib/portfolio";

export function Ticker() {
  const loop = [...ticker, ...ticker];

  return (
    <section
      aria-label="Practice areas"
      className="overflow-x-clip border-b border-ink bg-ink text-sheet"
    >
      <div className="marquee-track flex w-max items-center">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center px-4 py-2.5 font-mono text-xs font-medium uppercase tracking-widest sm:px-5 sm:py-3"
          >
            <span aria-hidden="true" className="mr-4 text-signal">
              /
            </span>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
