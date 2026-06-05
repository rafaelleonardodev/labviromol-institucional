"use client";

import List from "@/components/common/list/list";
import { SimpleCard } from "@/components/common/cards/simple-card";
import { Typography } from "@/components/common/typography/typography";
import { Equipment } from "@/utils/types";
import { useTranslation } from "react-i18next";

type Props = {
  equipments: Equipment[];
};

export default function EquipmentsList({
  equipments,
}: Props): React.ReactNode {
  const {t} = useTranslation();
  return (
    <List
      list={equipments}
      showLimit={6}
      renderItem={(equipment) => (
        <SimpleCard
          key={equipment.id}
          title={equipment.name}
          href={`/equipments/${equipment.id}`}
          cta={t("common.viewDetails")}
          className="h-full"
        >
          <Typography variant="small" as="p">
            {equipment.brand} | {equipment.model}
          </Typography>

          <Typography variant="muted" as="p">
            {equipment.description}
          </Typography>
        </SimpleCard>
      )}
    />
  );
}