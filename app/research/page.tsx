import { ResearchCard } from "@/components/features/cards/research-card";
import { Container } from "@/components/common/container/container";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import { FlaskConical, ClipboardCheck } from "lucide-react";

const projects = [
  {
    title: "Caracterização Molecular de Vírus Emergentes",
    description:
      "Estudo aprofundado da estrutura genética e mecanismos de transmissão de vírus emergentes, com foco em epidemias regionais. Utilização de sequenciamento de nova geração e análises filogenéticas para compreender a evolução e dispersão viral.",
    responsible: "Dra. Maria Fernanda Silva",
    funding: "CNPq",
    status: "Em andamento" as const,
  },
  {
    title: "Desenvolvimento de Métodos Diagnósticos Rápidos",
    description:
      "Criação de kits de diagnóstico molecular com alta sensibilidade e especificidade para detecção viral em amostras clínicas. Implementação de técnicas de RT-PCR em tempo real e LAMP para triagem rápida.",
    responsible: "Dr. João Pedro Santos",
    funding: "FAPESP",
    status: "Em andamento" as const,
  },
  {
    title: "Epidemiologia Molecular de Arbovírus",
    description:
      "Vigilância epidemiológica de arbovírus circulantes na região, incluindo Dengue, Zika e Chikungunya. Análise da dinâmica de transmissão e identificação de fatores de risco associados a surtos epidêmicos.",
    responsible: "Dra. Ana Carolina Oliveira",
    funding: "Ministério da Saúde",
    status: "Em andamento" as const,
  },
  {
    title: "Resistência Viral a Antivirais",
    description:
      "Investigação de mecanismos moleculares de resistência a drogas antivirais e identificação de mutações associadas à falha terapêutica em pacientes com infecções virais crônicas.",
    responsible: "Dr. Carlos Eduardo Mendes",
    funding: "CAPES",
    status: "Em andamento" as const,
  },
  {
    title: "Vírus Respiratórios em Pediatria",
    description:
      "Estudo da etiologia viral de infecções respiratórias agudas em crianças, com caracterização molecular dos patógenos identificados e análise de coinfecções virais.",
    responsible: "Dra. Ana Carolina Oliveira",
    funding: "FAPESP",
    status: "Concluído" as const,
  },
  {
    title: "Desenvolvimento de Plataforma de Bioinformática",
    description:
      "Criação de pipeline computacional integrado para análise de dados de sequenciamento viral, incluindo montagem de genomas, anotação e análise filogenética automatizada.",
    responsible: "Dr. João Pedro Santos",
    funding: "CNPq",
    status: "Concluído" as const,
  },
];

const partners = [
  "Universidade de São Paulo (USP)",
  "Fundação Oswaldo Cruz (Fiocruz)",
  "Instituto Adolfo Lutz",
  "Centers for Disease Control and Prevention (CDC – EUA)",
  "University of Oxford (Reino Unido)",
  "Instituto Pasteur (França)",
];

const ongoing = projects.filter((p) => p.status === "Em andamento");
const concluded = projects.filter((p) => p.status === "Concluído");

export default function ResearchPage() {
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
          <div className="flex flex-col gap-4">
            {projects.map((project) => (
              <ResearchCard key={project.title} {...project} />
            ))}
          </div>

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