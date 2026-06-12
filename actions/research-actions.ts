"use server";

import { researchService } from "@/services/research-service";
import { getLocale } from "@/lib/locale";
import { Member, PagedResponse, Partner, Project, Publication } from "@/utils/types";

const PAGE_SIZE = {
  members: 9,
  publications: 6,
  projects: 6,
} as const;

export async function fetchMembersPage(page: number): Promise<PagedResponse<Member>> {
  const language = await getLocale();
  return researchService.getAllMembers(language, {
    pageNumber: page,
    pageSize: PAGE_SIZE.members,
  });
}

export async function fetchPublicationsPage(page: number): Promise<PagedResponse<Publication>> {
  const language = await getLocale();
  return researchService.getAllPublication(language, {
    pageNumber: page,
    pageSize: PAGE_SIZE.publications,
  });
}

export async function fetchProjectsPage(page: number): Promise<PagedResponse<Project>> {
  const language = await getLocale();
  return researchService.getAllProjects(language, {
    pageNumber: page,
    pageSize: PAGE_SIZE.projects,
  });
}