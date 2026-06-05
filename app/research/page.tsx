import { researchService } from "@/services/research-service";
import { Partner, Project } from "@/utils/types";
import ResearchContent from "@/components/features/research/research-content";

export default async function ResearchPage() {
  let projects: Project[] = [];
  let partners: Partner[] = [];
  let error = null;

  try {
    projects = await researchService.getAllProjects();
    partners = await researchService.getAllPartners();
  } catch (err) {
    error = err instanceof Error ? err.message : "Erro ao buscar projetos";
    console.error("Erro ao buscar projetos:", err);
  }

  return (
    <ResearchContent projects={projects} partners={partners} />
  );
}