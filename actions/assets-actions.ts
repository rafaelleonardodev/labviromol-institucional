"use server";

import { assetsService } from "@/services/assets-service";
import { getLocale } from "@/lib/locale";
import { Equipment, PagedResponse } from "@/utils/types";

const PAGE_SIZE = {
  equipments: 6,
} as const;

export async function fetchEquipmentsPage(page: number): Promise<PagedResponse<Equipment>> {
  const language = await getLocale();
  return assetsService.getAll(language, {
    pageNumber: page,
    pageSize: PAGE_SIZE.equipments,
  });
}