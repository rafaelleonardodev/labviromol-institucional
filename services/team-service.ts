import { Member } from "@/utils/types";
import { api } from "./api/client";

export const teamService = {
  getAll: () =>
    api.get<Member[]>("team/members", { tags: ["members"], revalidate: 0 }),
  getById: (id: string) =>
    api.get<Member>(`team/members/${id}`, { tags: [`member-${id}`], revalidate: 0 }),
};