import { researchService } from "@/services/research-service";
import { Publication } from "@/utils/types";
import PublicationContent from "@/components/features/publication/publication-content";

export default async function PublicationsPage() {
  let publications: Publication[] = [];
  let error = null;

  try {
    publications = await researchService.getAllPublication();
  } catch (err) {
    error = err instanceof Error ? err.message : "Erro ao buscar publicações";
    console.error("Erro ao buscar publicações:", err);
  }

  return (
    <PublicationContent publications={publications} />
  );
}