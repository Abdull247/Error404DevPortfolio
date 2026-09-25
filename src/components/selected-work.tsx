import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, X } from "lucide-react";
import { projects, type Project } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function SelectedWork() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="border-b border-ink">
      <header className="flex flex-col gap-3 border-b border-ink px-4 py-8 sm:flex-row sm:items-end sm:justify-between sm:gap-10 sm:px-6 sm:py-10 lg:px-10">
        <div>
          <p className="font-mono text-section font-medium uppercase tracking-widest text-muted">
            01 — Selected work
          </p>
          <h2 className="mt-2 font-display text-display tracking-display">Four recent builds</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Mobile products, APIs, and automations. Open a cell for the brief and the stack.
        </p>
      </header>

      <Dialog.Root
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <div className="grid sm:grid-cols-2">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setActive(project)}
              className={cn(
                "group flex flex-col border-ink text-left focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink",
                index > 0 && "border-t sm:border-t-0",
                index > 1 && "sm:border-t",
                index % 2 === 1 && "sm:border-l",
              )}
            >
              <div className="relative overflow-hidden border-b border-ink bg-hatch">
                <img
                  src={project.image}
                  alt=""
                  width={1792}
                  height={1008}
                  className="aspect-video w-full object-cover outline outline-1 -outline-offset-1 outline-ink/15 transition-transform duration-200 ease-out-sharp group-hover:scale-[1.03] group-active:scale-[1.03]"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
                <span className="absolute top-0 left-0 border-r border-b border-ink bg-paper px-2 py-1 font-mono text-xs tabular-nums">
                  {project.index}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 bg-paper px-4 py-5 transition-colors duration-150 group-hover:bg-ink group-hover:text-sheet group-active:bg-ink group-active:text-sheet sm:px-6 sm:py-6">
                <div className="flex items-center justify-between gap-3 font-mono text-section uppercase tracking-widest text-muted group-hover:text-hatch group-active:text-hatch">
                  <span>{project.type}</span>
                  <span className="tabular-nums">{project.year}</span>
                </div>
                <div className="flex items-end justify-between gap-3">
                  <h3 className="font-display text-3xl tracking-tight sm:text-4xl">{project.title}</h3>
                  <ArrowUpRight
                    className="mb-1 size-4 shrink-0 opacity-40 transition-opacity duration-150 group-hover:opacity-100 sm:size-5"
                    strokeWidth={1.75}
                  />
                </div>
                <p className="text-sm leading-relaxed text-muted group-hover:text-hatch group-active:text-hatch">
                  {project.summary}
                </p>
              </div>
            </button>
          ))}
        </div>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/45" />
          <Dialog.Content className="fixed inset-0 z-50 flex flex-col overflow-hidden border-0 bg-paper focus:outline-none sm:inset-auto sm:top-1/2 sm:left-1/2 sm:h-auto sm:max-h-[min(40rem,calc(100dvh-2rem))] sm:w-[min(42rem,calc(100vw-2rem))] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:border sm:border-ink">
            {active ? (
              <>
                <div className="relative shrink-0 border-b border-ink">
                  <img
                    src={active.image}
                    alt=""
                    className="aspect-video max-h-44 w-full object-cover sm:max-h-64"
                  />
                  <Dialog.Close className="absolute top-0 right-0 flex size-11 items-center justify-center bg-ink text-sheet hover:bg-paper hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-sheet">
                    <X className="size-4" strokeWidth={1.75} />
                    <span className="sr-only">Close project</span>
                  </Dialog.Close>
                </div>
                <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6">
                  <p className="font-mono text-section uppercase tracking-widest text-muted">
                    {active.index} — {active.type} · {active.year}
                  </p>
                  <Dialog.Title className="mt-2 font-display text-4xl tracking-tight">
                    {active.title}
                  </Dialog.Title>
                  <Dialog.Description className="mt-3 text-base leading-relaxed">
                    {active.detail}
                  </Dialog.Description>
                  <p className="mt-4 text-sm text-muted">Role · {active.role}</p>
                  <ul className="mt-5 flex flex-wrap">
                    {active.stack.map((item) => (
                      <li
                        key={item}
                        className="-mr-px -mb-px border border-ink bg-sheet px-3 py-1.5 font-mono text-section font-medium uppercase tracking-widest"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : null}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
