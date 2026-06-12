import { researchService } from "@/services/research-service";
import { Member, PagedResponse } from "@/utils/types";
import TeamContent from "@/components/features/research/team-content";
import { getLocale } from "@/lib/locale";

const PAGE_SIZE = 9;

export default async function TeamPage() {
  const language = await getLocale();

  let membersResponse: PagedResponse<Member> = {
    data: [],
    currentPage: 1,
    pageSize: PAGE_SIZE,
    totalCount: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  };

  try {
    membersResponse = await researchService.getAllMembers(language, {
      pageNumber: 1,
      pageSize: PAGE_SIZE,
    });
  } catch (err) {
    console.error("Erro ao buscar membros:", err);
  }

  return <TeamContent membersResponse={membersResponse} />;
}