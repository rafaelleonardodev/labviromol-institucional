import { Member, Partner, Project, Publication, PagedRequest, PagedResponse } from "@/utils/types";
import { api } from "./api/client";

const researchBaseUrl = "research/public"

export const researchService = {
  getAllProjects: (language?: string, paged?: PagedRequest) =>
    api.get<PagedResponse<Project>>(researchBaseUrl + "/projects", {
      tags: ["projects"],
      revalidate: 0,
      params: { language, ...paged },
    }),

  getAllPublication: (language?: string, paged?: PagedRequest) =>
    api.get<PagedResponse<Publication>>(researchBaseUrl + "/publications", {
      tags: ["publications"],
      revalidate: 3600,
      params: { language, ...paged },
    }),

  getAllMembers: (language?: string, paged?: PagedRequest) =>
    api.get<PagedResponse<Member>>(researchBaseUrl + "/researchers", {
      tags: ["researchers"],
      revalidate: 3600,
      params: { language, ...paged },
    }),

  getAllPartners: (language?: string, paged?: PagedRequest) =>
    api.get<PagedResponse<Partner>>(researchBaseUrl + "/partners", {
      tags: ["partners"],
      revalidate: 3600,
      params: { language, ...paged },
    }),
};