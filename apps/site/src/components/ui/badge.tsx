import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

// Ajustes do Toda Voz: texto de ~15px (em vez de 12px), borda sempre visível
// e variantes de situação (sucesso, atenção, descartado) com contraste ≥ 4,5:1.
const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full border px-3 py-0.5 text-sm font-semibold whitespace-nowrap focus-visible:ring-[3px] focus-visible:ring-ring [&>svg]:pointer-events-none [&>svg]:size-4",
  {
    variants: {
      variant: {
        default: "border-primary bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/80",
        outline: "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        accent: "border-transparent bg-accent text-accent-foreground",
        success: "border-success/40 bg-success-surface text-success",
        warning: "border-warning/40 bg-warning-surface text-warning",
        destructive: "border-destructive/40 bg-destructive-surface text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
