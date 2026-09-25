import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full resize-y border-0 bg-transparent px-0 py-0 font-sans text-base leading-relaxed text-ink placeholder:text-muted",
        "focus-visible:outline-none",
        "disabled:opacity-40",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
