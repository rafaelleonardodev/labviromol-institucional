"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";

import { Container } from "@/components/common/container/container";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import EquipmentsList from "@/components/features/equipment/equipment-list";
import { Equipment, PagedResponse } from "@/utils/types";

const requirements = [
  "equipment.access.requirements.training",
  "equipment.access.requirements.schedule",
  "equipment.access.requirements.advisor",
  "equipment.access.requirements.agreement",
  "equipment.access.requirements.maintenance",
];

type Props = {
  equipmentsResponse: PagedResponse<Equipment>;
};

export default function EquipmentContent({ equipmentsResponse }: Props) {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <Section variant="primary" size="lg">
        <Container className="flex flex-col gap-4">
          <Typography variant="h1" as="h1">
            {t("equipment.title")}
          </Typography>
          <Typography variant="p" as="p" className="max-w-2xl">
            {t("equipment.description")}
          </Typography>
        </Container>
      </Section>

      {/* Equipment grid */}
      <Section size="md">
        <Container className="flex flex-col gap-8">
          <EquipmentsList initialResponse={equipmentsResponse} />

          {/* Access block */}
          <div className="rounded-xl border border-border bg-card p-8 flex flex-col gap-4">
            <Typography variant="h3" as="h3">
              {t("equipment.access.title")}
            </Typography>
            <Typography variant="p" as="p" className="text-muted-foreground">
              {t("equipment.access.description")}
            </Typography>
            <div className="rounded-lg bg-muted p-4 flex flex-col gap-3">
              <p className="text-sm font-semibold">
                {t("equipment.access.requirementsTitle")}
              </p>
              <ul className="flex flex-col gap-1.5 list-disc list-inside">
                {requirements.map((req) => (
                  <li key={req} className="text-sm text-muted-foreground">
                    {t(req)}
                  </li>
                ))}
              </ul>
            </div>
            <Typography variant="p" as="p" className="text-muted-foreground text-sm">
              {t("equipment.access.scheduleText")}{" "}
              <Link
                href="/schedule"
                className="text-foreground font-medium underline underline-offset-4"
              >
                {t("equipment.access.scheduleLink")}
              </Link>
              .
            </Typography>
          </div>
        </Container>
      </Section>
    </>
  );
}