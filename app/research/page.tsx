import { Container } from "@/components/common/container/container";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import { FlaskConical, ClipboardCheck } from "lucide-react";
import { researchService } from "@/services/research-service";
import ProjectsList from "@/components/features/research/projects-list";
import { Project } from "@/utils/types";

const partners = [
  "Universidade de São Paulo (USP)",
  "Fundação Oswaldo Cruz (Fiocruz)",
  "Instituto Adolfo Lutz",
  "Centers for Disease Control and Prevention (CDC – EUA)",
  "University of Oxford (Reino Unido)",
  "Instituto Pasteur (França)",
];

export default async function ResearchPage() {
  let projects: Project[] = [];
  let error = null;

  try {
    projects = await researchService.getAllProjects();
  } catch (err) {
    error = err instanceof Error ? err.message : "Erro ao buscar projetos";
    console.error("Erro ao buscar projetos:", err);
  }

  const ongoing = projects.filter((p) => p.status === "Em andamento");
  const concluded = projects.filter((p) => p.status === "Concluído");

  return (
    <>
      {/* Hero */}
      <Section variant="primary" size="lg">
        <Container className="flex flex-col gap-4">
          <Typography variant="h1" as="h1">
            Pesquisa & Projetos
          </Typography>
          <Typography variant="p" as="p" className="max-w-2xl">
            Conheça os projetos de pesquisa desenvolvidos em nosso laboratório e suas
            contribuições para o avanço científico
          </Typography>
        </Container>
      </Section>

      {/* Projects */}
      <Section size="md">
        <Container className="flex flex-col gap-6">
          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <FlaskConical className="h-4 w-4" />
              {ongoing.length} projetos em andamento
            </span>
            <span className="flex items-center gap-1.5">
              <ClipboardCheck className="h-4 w-4" />
              {concluded.length} projetos concluídos
            </span>
          </div>

          {/* All projects */}
          <ProjectsList projects={projects} />

          {/* Collaborations */}
          <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4 mt-2">
            <Typography variant="h3" as="h3">
              Colaborações e Parcerias
            </Typography>
            <Typography variant="body" as="p" className="text-muted-foreground">
              Nossos projetos de pesquisa são desenvolvidos em colaboração com instituições nacionais
              e internacionais, incluindo:
            </Typography>
            <ul className="flex flex-col gap-1.5 list-disc list-inside">
              {partners.map((partner) => (
                <li key={partner} className="text-sm text-muted-foreground">
                  {partner}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}