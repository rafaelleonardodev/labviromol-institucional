"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { User, Building2 } from "lucide-react";
import { ProjectStatus } from "@/utils/enums";
import { getProjectStatusLabel } from "@/utils/projects-status";
import { useTranslation } from "react-i18next";

type ResearchCardProps = {
  title: string;
  description: string;
  responsible: string;
  partner: string;
  status: ProjectStatus;
  className?: string;
};

export function ResearchCard({
  title,
  description,
  responsible,
  partner,
  status,
  className,
}: ResearchCardProps) {
  const isOngoing = status === ProjectStatus.Completed;
  const {t} = useTranslation();
  return (
    <Card className={cn("p-6 flex flex-col gap-4", className)}>
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-heading text-base font-semibold">{title}</h3>
        <span
          className={cn(
            "shrink-0 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
            isOngoing
              ? "bg-secondary/20 text-secondary"
              : "bg-muted text-muted-foreground"
          )}
        >
          {getProjectStatusLabel(status, t)}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Meta */}
      <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-sm">
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <User className="h-3.5 w-3.5 shrink-0" />
          <span>
            <strong className="text-foreground font-medium">{t("research.responsible")}:</strong>{" "}
            {responsible}
          </span>
        </span>
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <Building2 className="h-3.5 w-3.5 shrink-0" />
          <span>
            <strong className="text-foreground font-medium">{t("research.promotion")}:</strong>{" "}
            {partner}
          </span>
        </span>
      </div>
    </Card>
  );
}