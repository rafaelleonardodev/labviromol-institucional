import { researchService } from "@/services/research-service";
import { Partner, Project } from "@/utils/types";
import ResearchContent from "@/components/features/research/research-content";
import { getLocale } from "@/lib/locale";

export default async function ResearchPage() {
  const language = await getLocale();
  let projects: Project[] = [];
  let partners: Partner[] = [];

  try {
    const [projectsRes, partnersRes] = await Promise.all([
      researchService.getAllProjects(language),
      researchService.getAllPartners(language),
    ]);
    projects = projectsRes.data;
    partners = partnersRes.data;
  } catch (err) {
    console.error("Erro ao buscar projetos:", err);
  }

  return <ResearchContent projects={projects} partners={partners} />;
}