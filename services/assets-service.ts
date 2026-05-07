import { Equipment } from "@/utils/types";
import { api } from "./api/client";

export const assetsService = {
  getAll: () => 
    api.get<Equipment[]>("assets/equipments", {tags: ["equipments"], revalidate: 0}),
  getById: (id: string) =>
    api.get<Equipment>(`assets/equipments/${id}`, {tags: [`equipment-${id}`], revalidate: 0})
}