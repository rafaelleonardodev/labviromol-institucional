import { cn } from "@/lib/utils";
import { Container } from "../container/container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;

  // controla largura
  container?: boolean;

  // variações visuais
  variant?: "default" | "muted" | "primary";

  // espaçamento
  size?: "sm" | "md" | "lg";
};

export function Section({
  children,
  className,
  container = true,
  variant = "default",
  size = "md",
}: SectionProps) {
  const sizes = {
    sm: "py-10",
    md: "py-16",
    lg: "py-24",
  };

  const variants = {
    default: "",
    muted: "bg-muted",
    primary: "bg-primary text-primary-foreground",
  };

  const content = container ? (
    <Container>{children}</Container>
  ) : (
    children
  );

  return (
    <section
      className={cn(
        sizes[size],
        variants[variant],
        className
      )}
    >
      {content}
    </section>
  );
}