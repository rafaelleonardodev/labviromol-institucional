import { assetsService } from "@/services/assets-service";
import { Equipment, PagedResponse } from "@/utils/types";
import EquipmentContent from "@/components/features/equipment/equipment-content";
import { getLocale } from "@/lib/locale";

const PAGE_SIZE = 6;

export default async function EquipmentsPage() {
  const language = await getLocale();

  let equipmentsResponse: PagedResponse<Equipment> = {
    data: [],
    currentPage: 1,
    pageSize: PAGE_SIZE,
    totalCount: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  };

  try {
    equipmentsResponse = await assetsService.getAll(language, {
      pageNumber: 1,
      pageSize: PAGE_SIZE,
    });
  } catch (err) {
    console.error("Erro ao buscar equipamentos:", err);
  }

  return <EquipmentContent equipmentsResponse={equipmentsResponse} />;
}