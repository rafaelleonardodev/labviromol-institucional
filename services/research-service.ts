import { Member, Partner, Project, Publication } from "@/utils/types";
import { api } from "./api/client";

export const researchService = {
  getAllProjects: () =>
    api.get<Project[]>("research/projects", { tags: ["projects"], revalidate: 0 }),
  getAllPublication: () =>
    api.get<Publication[]>("research/publications", { tags: ["publications"], revalidate: 0 }),
  getAllMembers: () =>
    api.get<Member[]>("research/researchers", { tags: ["researchers"], revalidate: 0 }),
  getById: (id: string) =>
    api.get<Project>(`research/projects/${id}`, { tags: [`project-${id}`], revalidate: 0 }),
  getAllPartners: () =>
    api.get<Partner[]>("research/partners", { tags: ["partners"], revalidate: 0}),
};