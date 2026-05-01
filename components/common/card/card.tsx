import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Card as BaseCard } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const cardVariants = cva("", {
  variants: {
    variant: {
      default: "",
      outline: "bg-transparent shadow-none",
      ghost: "border-transparent bg-transparent shadow-none",
    },
    interactive: {
      true: "hover:shadow-md transition cursor-pointer",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    interactive: false,
  },
});

type CardProps = React.ComponentProps<typeof BaseCard> &
  VariantProps<typeof cardVariants>;

export function Card({
  className,
  variant,
  interactive,
  ...props
}: CardProps) {
  return (
    <BaseCard
      className={cn(cardVariants({ variant, interactive }), className)}
      {...props}
    />
  );
}