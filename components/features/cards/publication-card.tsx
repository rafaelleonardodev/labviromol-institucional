"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { BookOpen, Calendar, ExternalLink } from "lucide-react";

type PublicationCardProps = {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  className?: string;
};

export function PublicationCard({
  title,
  authors,
  journal,
  year,
  doi,
  className,
}: PublicationCardProps) {
  const doiUrl = `https://doi.org/${doi}`;

  return (
    <Card className={cn("p-6 flex flex-col gap-3", className)}>
      {/* Title */}
      <h3 className="font-heading text-base font-semibold leading-snug">
        {title}
      </h3>

      {/* Authors */}
      <p className="text-sm text-muted-foreground">{authors}</p>

      {/* Journal + Year */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <BookOpen className="h-3.5 w-3.5 shrink-0" />
          <em>{journal}</em>
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5 shrink-0" />
          {year}
        </span>
      </div>

      {/* DOI */}
      <Link
        href={doiUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-sm text-foreground hover:underline w-fit"
      >
        DOI: {doi}
        <ExternalLink className="h-3.5 w-3.5 shrink-0" />
      </Link>
    </Card>
  );
}