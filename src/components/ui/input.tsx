import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "h-10 w-full border-0 bg-transparent px-0 font-sans text-base text-ink placeholder:text-muted",
        "focus-visible:outline-none",
        "disabled:opacity-40",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
