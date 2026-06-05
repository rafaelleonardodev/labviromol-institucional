import { assetsService } from "@/services/assets-service";
import { Equipment } from "@/utils/types";
import ScheduleContent from "@/components/features/schedule/schedule-content";

export default async function SchedulePage() {
  let equipmentsOptions: Equipment[] = [];
  let error = null;

  try {
    equipmentsOptions = await assetsService.getAll();
  } catch (err) {
    error = err instanceof Error ? err.message : "Erro ao buscar equipamentos";
    console.error("Erro ao buscar equipamentos:", err);
  }

  return (
    <ScheduleContent equipmentsOptions={equipmentsOptions} />
  );
}