import { SimpleCard } from "@/components/common/cards/simple-card";
import { Typography } from "@/components/common/typography/typography";
import { assetsService } from "@/services/assets-service";
import { Equipment } from "@/utils/types";

type Props = {
  equipments: Equipment[];
}

export default function EquipmentsList({equipments}: Props): React.ReactNode {
  const cards = equipments.map(equipment => {
    return (
      <SimpleCard
        key={equipment.id}
        title={equipment.name}
        href={`/equipments/${equipment.id}`}
        cta={"Ver detalhes"}
        className="h-full"
      >
        <Typography variant="small" as="p">
          {equipment.brand} | {equipment.model}
        </Typography>
        <Typography variant="muted" as="p">
          {equipment.description}
        </Typography>
      </SimpleCard>
    )
  })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cards}
    </div>
  );
}