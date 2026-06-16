import { Equipment, EquipmentSchedule, PagedRequest, PagedResponse } from "@/utils/types";
import { api } from "./api/client";

const assetsBaseUrl = "assets/public"

export const assetsService = {
  getAll: (language?: string, paged?: PagedRequest) =>
    api.get<PagedResponse<Equipment>>(assetsBaseUrl + "/equipments", {
      tags: ["equipments"],
      revalidate: 3600,
      params: { language, ...paged },
    }),

  getById: (id: string, language?: string) =>
    api.get<Equipment>(assetsBaseUrl + `/equipments/${id}`, {
      tags: [`equipment-${id}`],
      revalidate: 3600,
      params: { language },
    }),

  getSchedulableEquipments: (language?: string) =>
    api.get<EquipmentSchedule[]>(assetsBaseUrl + "/equipments/schedulable", {
      tags: ["equipments-schedulable"],
      revalidate: 0,
      params: { language },
    })
};