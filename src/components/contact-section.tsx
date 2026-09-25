import { useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

const briefSchema = z.object({
  name: z.string().trim().min(2, "Name is too short."),
  email: z.string().trim().email("Enter a valid email."),
  message: z.string().trim().min(12, "Tell me a little more about the work."),
});

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = new FormData(form);
    const data = {
      name: String(payload.get("name") ?? ""),
      email: String(payload.get("email") ?? ""),
      message: String(payload.get("message") ?? ""),
    };
    const parsed = briefSchema.safeParse(data);
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (key === "name" || key === "email" || key === "message") {
          next[key] = issue.message;
        }
      }
      setErrors(next);
      return;
    }
    setErrors({});
    try {
      window.localStorage.setItem(
        "error404-brief",
        JSON.stringify({ ...parsed.data, at: new Date().toISOString() }),
      );
    } catch {
      /* demo only */
    }
    setStatus("sent");
  }

  return (
    <section id="contact" className="border-b border-ink">
      <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <header className="flex flex-col justify-between gap-8 border-b border-ink px-4 py-8 sm:px-6 sm:py-10 lg:border-r lg:border-b-0 lg:px-10 lg:py-12">
          <div>
            <p className="font-mono text-section font-medium uppercase tracking-widest text-muted">
              05 — Contact
            </p>
            <h2 className="mt-2 font-display text-display tracking-display">Send a brief</h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed">
              A new Android product, a Java codebase that needs to grow up, an API, or an
              automation that should stop living in a spreadsheet. I take a small number of
              engagements at a time.
            </p>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex w-fit items-center gap-2 border border-ink bg-paper px-3 py-2.5 font-mono text-sm uppercase tracking-widest hover:bg-ink hover:text-sheet focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            {profile.email}
            <ArrowUpRight className="size-4" strokeWidth={1.75} />
          </a>
        </header>

        <div className="lg:min-h-full">
          {status === "sent" ? (
            <div className="flex h-full min-h-56 flex-col justify-center bg-sheet px-4 py-10 sm:px-6">
              <Check className="size-6" strokeWidth={1.75} />
              <p className="mt-4 font-display text-3xl tracking-tight">Brief received</p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                I’ll reply within two working days. If it’s urgent, write directly to {profile.email}.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex h-full flex-col" noValidate>
              <div className="grid sm:grid-cols-2">
                <Field
                  label="Name"
                  htmlFor="name"
                  error={errors.name}
                  className="border-b border-ink sm:border-r"
                >
                  <Input id="name" name="name" autoComplete="name" placeholder="Your name" />
                </Field>
                <Field label="Email" htmlFor="email" error={errors.email} className="border-b border-ink">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@studio.com"
                  />
                </Field>
              </div>
              <Field
                label="The work"
                htmlFor="message"
                error={errors.message}
                className="border-b border-ink"
              >
                <Textarea
                  id="message"
                  name="message"
                  placeholder="What are you building — an Android app, an API, or an automation?"
                />
              </Field>
              <Button type="submit" variant="bar" size="bar" className="mt-auto">
                Send brief
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5 px-4 py-3 sm:px-5 sm:py-4", className)}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error ? (
        <p className="text-xs text-ink" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
