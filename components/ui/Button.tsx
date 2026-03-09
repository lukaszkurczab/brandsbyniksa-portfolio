import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonSize = "md" | "lg";

const variantMap: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-foreground text-background hover:bg-terracotta hover:text-white",
  secondary:
    "border border-line bg-white/70 text-foreground hover:border-foreground/25 hover:bg-white",
  ghost: "border border-transparent text-muted hover:text-foreground",
};

const sizeMap: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm md:text-base",
};

export function buttonStyles(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300",
    variantMap[variant],
    sizeMap[size],
    className,
  );
}
