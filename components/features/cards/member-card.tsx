"use client";

import Link from "next/link";
import { GraduationCap, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

type MemberCardProps = {
  name: string;
  role: string;
  degree: string;
  lattesUrl?: string;
  className?: string;
};

export function MemberCard({
  name,
  role,
  degree,
  lattesUrl = "#",
  className,
}: MemberCardProps) {
  return (
    <Card
      className={cn(
        "p-6 flex flex-col gap-4 hover:shadow-md transition-all relative",
        className
      )}
    >
      {/* External link icon top right */}
      <Link
        href={lattesUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        aria-label={`Currículo Lattes de ${name}`}
      >
        <ExternalLink className="h-4 w-4" />
      </Link>

      {/* Avatar / Icon */}
      <div className="
        w-10 h-10
        flex items-center justify-center
        rounded-lg
        bg-muted
        text-foreground
      ">
        <GraduationCap className="h-5 w-5" />
      </div>

      {/* Info */}
      <div className="space-y-1">
        <h3 className="font-heading text-base font-semibold leading-snug pr-6">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground">{role}</p>
        <p className="text-sm text-muted-foreground">{degree}</p>
      </div>

      {/* Lattes CTA */}
      <Link
        href={lattesUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto flex items-center gap-1.5 text-sm font-medium text-foreground hover:underline"
      >
        Ver Currículo Lattes
        <ExternalLink className="h-3.5 w-3.5" />
      </Link>
    </Card>
  );
}