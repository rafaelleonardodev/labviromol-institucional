"use client"

import { Container } from "@/components/common/container/container";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import { FlaskConical, ClipboardCheck } from "lucide-react";
import ProjectsList from "@/components/features/research/projects-list";
import { Partner, Project } from "@/utils/types";
import { useTranslation } from "react-i18next";
import { ProjectStatus } from "@/utils/enums";

type Props = {
  projects: Project[];
  partners: Partner[];
}

export default function ResearchContent({projects, partners}: Props) {
  const {t} = useTranslation();
  const ongoing = projects.filter((p) => p.status === ProjectStatus.InProgress);
  const concluded = projects.filter((p) => p.status === ProjectStatus.Completed);

  return (
    <>
      <Section variant="primary" size="lg">
        <Container className="flex flex-col gap-4">
          <Typography variant="h1" as="h1">
            {t("research.hero.title")}
          </Typography>

          <Typography variant="p" as="p" className="max-w-2xl">
            {t("research.hero.description")}
          </Typography>
        </Container>
      </Section>

      <Section size="md">
        <Container className="flex flex-col gap-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <FlaskConical className="h-4 w-4" />
              {t("research.stats.ongoing", { count: ongoing.length })}
            </span>

            <span className="flex items-center gap-1.5">
              <ClipboardCheck className="h-4 w-4" />
              {t("research.stats.concluded", { count: concluded.length })}
            </span>
          </div>

          <ProjectsList projects={projects} />

          <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4 mt-2">
            <Typography variant="h3" as="h3">
              {t("research.collaborations.title")}
            </Typography>

            <Typography
              variant="body"
              as="p"
              className="text-muted-foreground"
            >
              {t("research.collaborations.description")}
            </Typography>
            <ul className="flex flex-col gap-1.5 list-disc list-inside">
              {partners.map((partner) => (
                <li key={partner.id} className="text-sm text-muted-foreground">
                  {partner.name}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}