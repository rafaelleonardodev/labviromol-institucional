"use client"

import { AlertCircle, Info } from "lucide-react";

import { Container } from "@/components/common/container/container";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import { Card } from "@/components/ui/card";
import { ScheduleForm } from "./schedule-form";

import { IMPORTANT_INFO } from "./schedule.constants";
import { Equipment } from "@/utils/types";
import { useTranslation } from "react-i18next";

type Props = {
  equipmentsOptions: Equipment[];
}

export default function ScheduleContent({equipmentsOptions}: Props) {
  const {t} = useTranslation();
  return (
    <>
      {/* Hero */}
      <Section variant="primary" size="lg">
        <Container className="flex flex-col gap-4">
          <Typography variant="h1" as="h1">{t("schedule.title")}</Typography>
            <Typography variant="p" as="p" className="max-w-2xl">
              {t("schedule.description")}
            </Typography>
        </Container>
      </Section>

      <Section size="md" variant="muted">
        <Container className="flex flex-col gap-6">
          {/* Aviso */}
          <div className="flex items-start gap-2.5 rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
            <Info className="h-4 w-4 mt-0.5 shrink-0" />
            <p>
              {t("schedule.notice")}
            </p>
          </div>
          <ScheduleForm equipmentsOptions={equipmentsOptions} t={t}/>
          {/* Informações Importantes */}
          <Card className="p-8 flex flex-col gap-4">
            <Typography variant="h3" as="h3">{t("schedule.importantInfo.title")}</Typography>
            <ul className="flex flex-col gap-2">
              {IMPORTANT_INFO.map((key) => (
                <li
                  key={key}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <AlertCircle className="h-4 w-4 mt-0.5 shrink-0 text-foreground" />
                  {t(`schedule.importantInfo.${key}`)}
                </li>
              ))}
            </ul>
          </Card>
        </Container>
      </Section>
    </>
  );
}