import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "primary";
  size?: "sm" | "md" | "lg" | "xl";
  bgImage?: string;
  bgOverlay?: boolean;
  bgOverlayColor?:
    | "primary"
    | "black"
    | "muted"
    | "background"
    | "none";
  overlayOpacity?: number;
};

export function Section({
  children,
  className,
  variant = "default",
  size = "md",
  bgImage,
  bgOverlay = true,
  bgOverlayColor = "primary",
  overlayOpacity = 0.7
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

  const overlayColors = {
    primary: "bg-primary",
    black: "bg-black",
    muted: "bg-muted",
    background: "bg-background",
    none: "",
  };

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        sizes[size],
        !bgImage && variants[variant],
        className
      )}
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
    >
      {bgImage && bgOverlay && (
        <div
          className={cn(
            "absolute inset-0 opacity-70",
            overlayColors[bgOverlayColor],
          )}
          style={{ opacity: overlayOpacity }}
        />
      )}

      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}