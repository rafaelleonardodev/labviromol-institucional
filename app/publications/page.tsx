import { researchService } from "@/services/research-service";
import { PagedResponse, Publication } from "@/utils/types";
import PublicationContent from "@/components/features/research/publication-content";
import { getLocale } from "@/lib/locale";

const PAGE_SIZE = 6;

export default async function PublicationsPage() {
  const language = await getLocale();

  let publicationsResponse: PagedResponse<Publication> = {
    data: [],
    currentPage: 1,
    pageSize: PAGE_SIZE,
    totalCount: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  };

  try {
    publicationsResponse = await researchService.getAllPublication(language, {
      pageNumber: 1,
      pageSize: PAGE_SIZE,
    });
  } catch (err) {
    console.error("Erro ao buscar publicações:", err);
  }

  return <PublicationContent publicationsResponse={publicationsResponse} />;
}