import * as React from "react";
import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn(
        "font-mono text-section font-medium uppercase tracking-widest text-muted",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
