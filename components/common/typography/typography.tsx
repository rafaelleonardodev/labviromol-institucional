import { cn } from "@/lib/utils";

type TypographyProps = {
  children: React.ReactNode;
  className?: string;

  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "p"
    | "body"
    | "muted"
    | "hero"
    | "small";

  as?: React.ElementType;
};

const styles = {
  h1: "font-heading text-3xl md:text-4xl font-semibold",
  h2: "font-heading text-2xl md:text-3xl font-semibold",
  h3: "font-heading text-xl font-semibold",
  p: "text-base",
  body: "text-base text-foreground",
  muted: "text-sm text-muted-foreground",
  hero: "font-heading text-4xl md:text-4xl font-bold",
  small: "text-xs text-muted-foreground",
};

export function Typography({
  children,
  className,
  variant = "body",
  as,
}: TypographyProps) {
  const Component = as || "p";

  return (
    <Component className={cn(styles[variant], className)}>
      {children}
    </Component>
  );
}