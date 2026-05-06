import { cn } from "@/lib/utils";
import { Container } from "../container/container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "primary";
  size?: "sm" | "md" | "lg" | "xl";
};

export function Section({
  children,
  className,
  variant = "default",
  size = "md",
}: SectionProps) {
  const sizes = {
    sm: "py-16",
    md: "py-24",
    lg: "py-32",
    xl: "py-40",
  };

  const variants = {
    default: "",
    muted: "bg-muted",
    primary: "bg-primary text-primary-foreground",
  };

  return (
    <section
      className={cn(
        sizes[size],
        variants[variant],
        className
      )}
    >
      {children}
    </section>
  );
}