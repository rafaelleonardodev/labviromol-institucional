"use client";

import { useTranslation } from "react-i18next";

import List from "@/components/common/list/list";
import { SimpleCard } from "@/components/common/cards/simple-card";
import { Typography } from "@/components/common/typography/typography";
import { Equipment, PagedResponse } from "@/utils/types";
import { fetchEquipmentsPage } from "@/actions/assets-actions";

const MIN_VISIBLE = 6;

type Props = {
  initialResponse: PagedResponse<Equipment>;
};

export default function EquipmentsList({ initialResponse }: Props): React.ReactNode {
  const { t } = useTranslation();

  return (
    <List
      initialItems={initialResponse.data}
      hasNextPage={initialResponse.hasNextPage}
      currentPage={initialResponse.currentPage}
      minVisible={MIN_VISIBLE}
      fetchMore={fetchEquipmentsPage}
      listingStyle="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
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