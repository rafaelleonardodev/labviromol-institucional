import { assetsService } from "@/services/assets-service";
import { Equipment } from "@/utils/types";
import EquipmentContent from "@/components/features/equipment/equipment-content";
import { getLocale } from "@/lib/locale";

export default async function EquipmentsPage() {
  const language = await getLocale();
  let equipments: Equipment[] = [];

  try {
    const response = await assetsService.getAll(language);
    equipments = response.data;
  } catch (err) {
    console.error("Erro ao buscar equipamentos:", err);
  }

  return <EquipmentContent equipments={equipments} />;
}