import { researchService } from "@/services/research-service";
import { Publication } from "@/utils/types";
import PublicationContent from "@/components/features/publication/publication-content";
import { getLocale } from "@/lib/locale";

export default async function PublicationsPage() {
  const language = await getLocale();
  let publications: Publication[] = [];

  try {
    const response = await researchService.getAllPublication(language);
    publications = response.data;
  } catch (err) {
    console.error("Erro ao buscar publicações:", err);
  }

  return <PublicationContent publications={publications} />;
}