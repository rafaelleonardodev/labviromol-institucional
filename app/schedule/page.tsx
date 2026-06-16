import { assetsService } from "@/services/assets-service";
import { EquipmentSchedule } from "@/utils/types";
import ScheduleContent from "@/components/features/schedule/schedule-content";
import { getLocale } from "@/lib/locale";

export default async function SchedulePage() {
  const language = await getLocale();
  let equipmentsOptions: EquipmentSchedule[] = [];

  try {
    const response = await assetsService.getSchedulableEquipments(language);
    equipmentsOptions = response;
  } catch (err) {
    console.error("Erro ao buscar equipamentos:", err);
  }

  return <ScheduleContent key={language} equipmentsOptions={equipmentsOptions} />;
}