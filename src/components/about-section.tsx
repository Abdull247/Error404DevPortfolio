import { experience, profile, stats } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function AboutSection() {
  return (
    <section id="about" className="border-b border-ink">
      <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <header className="border-b border-ink px-4 py-6 sm:px-6 sm:py-8 lg:border-r lg:border-b-0 lg:px-8">
          <p className="text-section font-medium uppercase tracking-widest text-muted">01 — About</p>
          <h2 className="mt-3 font-display text-display font-bold tracking-tight uppercase">
            Built at the seam
          </h2>
        </header>
        <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <p className="max-w-xl text-base leading-relaxed">{profile.summary}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 border-t border-ink sm:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={cn(
              "px-4 py-5 sm:px-5 sm:py-6",
              index % 2 === 1 && "border-l border-ink",
              index > 1 && "border-t border-ink sm:border-t-0",
              index > 0 && "sm:border-l",
            )}
          >
            <p className="font-display text-3xl font-bold tracking-tight tabular-nums sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-1 text-section uppercase tracking-widest text-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-ink">
        <div className="border-b border-ink px-4 py-3 sm:px-6">
          <h3 className="text-section font-medium uppercase tracking-widest text-muted">Experience</h3>
        </div>
        <ul>
          {experience.map((item) => (
            <li
              key={item.period}
              className="grid gap-1 border-b border-ink px-4 py-4 last:border-b-0 sm:grid-cols-[9.5rem_1fr] sm:gap-8 sm:px-6 sm:py-5 lg:grid-cols-[11rem_14rem_1fr]"
            >
              <p className="text-section uppercase tracking-widest text-muted">{item.period}</p>
              <div>
                <p className="font-display text-base font-bold uppercase tracking-wide sm:text-lg">{item.title}</p>
                <p className="text-sm text-muted">{item.org}</p>
              </div>
              <p className="text-sm leading-relaxed sm:col-span-2 lg:col-span-1">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
