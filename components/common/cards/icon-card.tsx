"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

type IconCardProps = {
  icon: ReactNode;
  title: string;
  children: React.ReactNode;
  href?: string;
  cta?: string;
  className?: string;
  iconColor?: "primary" | "default" | "primary-foreground";
  iconBg?: "primary";
};

export function IconCard({
  icon,
  title,
  children,
  href,
  cta = "Ver equipe",
  className,
  iconColor = "primary-foreground",
  iconBg = "primary"
}: IconCardProps) {
  const colors = {
    default: "oklch(0.18 0.02 170)",
    primary: "oklch(0.45 0.12 200)",
    "primary-foreground": "oklch(0.98 0.01 170)"
  }

  const iconBgs = {
    primary: "bg-primary"
  }

  const content = (
    <Card
      interactive
      className={cn(
        "p-6 flex flex-col gap-4 hover:shadow-md transition-all",
        className
      )}
    >
      {/* ICON */}
      <div className={cn(
        "w-12 h-12 flex items-center justify-center rounded-lg",
        iconBgs[iconBg]
      )}
      style={
        {color: colors[iconColor]}
      }>
        {icon}
      </div>

      {/* TEXT */}
      <div className="space-y-1">
        <h3 className="font-heading text-base font-semibold">
          {title}
        </h3>

        {children && (
          children
        )}
      </div>

      {/* CTA */}
      {href && (
        <div className="mt-2 flex items-center text-sm font-medium text-foreground">
          {cta}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      )}
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className="group">
        {content}
      </Link>
    );
  }

  return content;
}