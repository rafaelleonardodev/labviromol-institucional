import { assetsService } from "@/services/assets-service";
import { Equipment } from "@/utils/types";
import ScheduleContent from "@/components/features/schedule/schedule-content";
import { getLocale } from "@/lib/locale";

export default async function SchedulePage() {
  const language = await getLocale();
  let equipmentsOptions: Equipment[] = [];

  try {
    const response = await assetsService.getAll(language);
    equipmentsOptions = response.data;
  } catch (err) {
    console.error("Erro ao buscar equipamentos:", err);
  }

  return <ScheduleContent equipmentsOptions={equipmentsOptions} />;
}