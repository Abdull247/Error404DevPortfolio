import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

const FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-3 bg-hatch px-6 text-center text-ink">
      <div className="border border-ink bg-paper px-8 py-10">
        <span className="inline-flex text-ink" aria-hidden="true">
          <TriangleAlert className="size-8" strokeWidth={1.75} />
        </span>
        <h1 className="mt-3 font-display text-2xl tracking-tight">Something went wrong</h1>
        <p className="mt-2 max-w-md text-sm break-words text-muted">{errorMessage(error)}</p>
      </div>
    </main>
  );
}
