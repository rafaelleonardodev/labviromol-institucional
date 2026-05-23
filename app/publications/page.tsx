import { Container } from "@/components/common/container/container";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import { Library } from "lucide-react";
import { researchService } from "@/services/research-service";
import PublicationsList from "@/components/features/research/publications-list";
import { Publication } from "@/utils/types";

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
    <>
      {/* Hero */}
      <Section variant="primary" size="lg">
        <Container className="flex flex-col gap-4">
          <Typography variant="h1" as="h1">
            Publicações Científicas
          </Typography>
          <Typography variant="p" as="p" className="max-w-2xl">
            Acesse nossa produção científica publicada em periódicos nacionais e internacionais de
            alto impacto
          </Typography>
        </Container>
      </Section>

      {/* Publications list */}
      <Section size="md">
        <Container className="flex flex-col gap-6">
          {/* Count */}
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Library className="h-4 w-4" />
            {publications.length} publicações indexadas
          </div>

          <PublicationsList publications={publications} />
        </Container>
      </Section>
    </>
  );
}