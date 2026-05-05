"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { Card } from "./card";
import { cn } from "@/lib/utils";

type IconCardProps = {
  icon: ReactNode;
  title: string;
  description?: string;
  href?: string;
  cta?: string;
  className?: string;
};

export function IconCard({
  icon,
  title,
  description,
  href,
  cta = "Ver equipe",
  className,
}: IconCardProps) {
  const content = (
    <Card
      interactive
      className={cn(
        "p-6 flex flex-col gap-4 hover:shadow-md transition-all",
        className
      )}
    >
      {/* ICON */}
      <div className="
        w-12 h-12 
        flex items-center justify-center 
        rounded-lg 
        bg-muted
        text-foreground
      ">
        {icon}
      </div>

      {/* TEXT */}
      <div className="space-y-1">
        <h3 className="font-heading text-base font-semibold">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
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