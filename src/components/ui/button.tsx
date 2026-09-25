import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex min-w-0 items-center justify-center gap-2 overflow-hidden font-mono text-sm font-medium tracking-widest uppercase select-none touch-manipulation focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:pointer-events-none disabled:opacity-40 transition-[transform,color,background-color] duration-150 ease-out-sharp active:not-disabled:scale-[0.98]",
  {
    variants: {
      variant: {
        solid: "border border-ink bg-ink text-sheet hover:bg-paper hover:text-ink",
        outline: "btn-wipe border border-ink bg-paper text-ink hover:text-sheet",
        ghost: "border border-transparent bg-transparent text-ink hover:bg-hatch",
        bar: "border-0 bg-ink text-sheet hover:bg-paper hover:text-ink",
        "bar-outline": "btn-wipe border-0 bg-paper text-ink hover:text-sheet",
      },
      size: {
        default: "h-11 min-h-11 px-5",
        lg: "h-12 min-h-12 px-5",
        sm: "h-10 min-h-10 px-4 text-xs",
        icon: "size-11",
        bar: "h-12 min-h-12 w-full px-4 text-xs tracking-widest sm:px-5 sm:text-sm",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant = "solid", size, asChild = false, children, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  if (asChild) {
    return (
      <Comp className={cn(buttonVariants({ variant, size }), className)} {...props}>
        {children}
      </Comp>
    );
  }

  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props}>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </Comp>
  );
}

function ActionLink({
  href,
  variant = "bar",
  className,
  children,
}: {
  href: string;
  variant?: "bar" | "bar-outline";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={cn(buttonVariants({ variant, size: "bar" }), className)}>
      <span className="inline-flex items-center gap-2">{children}</span>
    </a>
  );
}

export { Button, ActionLink, buttonVariants };
