import { researchService } from "@/services/research-service";
import { PagedResponse, Partner, Project } from "@/utils/types";
import ProjectsContent from "@/components/features/research/projects-content";
import { getLocale } from "@/lib/locale";

const PAGE_SIZE = 6;

export default async function ResearchPage() {
  const language = await getLocale();

  let projectsResponse: PagedResponse<Project> = {
    data: [],
    currentPage: 1,
    pageSize: PAGE_SIZE,
    totalCount: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  };
  let partners: Partner[] = [];

  try {
    const [projectsRes, partnersRes] = await Promise.all([
      researchService.getAllProjects(language, { pageNumber: 1, pageSize: PAGE_SIZE }),
      researchService.getAllPartners(language),
    ]);
    projectsResponse = projectsRes;
    partners = partnersRes.data;
  } catch (err) {
    console.error("Erro ao buscar projetos:", err);
  }

  return <ProjectsContent projectsResponse={projectsResponse} partners={partners} />;
}