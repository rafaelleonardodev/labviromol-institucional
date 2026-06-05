import { assetsService } from "@/services/assets-service";
import { Equipment } from "@/utils/types";
import EquipmentContent from "@/components/features/equipment/equipment-content";

export default async function EquipmentsPage() {
  let equipments: Equipment[] = [];
  let error = null;

  try {
    equipments = await assetsService.getAll();
  } catch (err) {
    error = err instanceof Error ? err.message : "Erro ao buscar equipamentos";
    console.error("Erro ao buscar equipamentos:", err);
  }

  return (
    <EquipmentContent equipments={equipments} />
  );
}