import { MemberCard } from "@/components/features/cards/member-card";
import { Container } from "@/components/common/container/container";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const members = [
  {
    name: "Dra. Maria Fernanda Silva",
    role: "Coordenadora do Laboratório",
    degree: "Doutorado em Microbiologia",
    lattesUrl: "#",
  },
  {
    name: "Dr. João Pedro Santos",
    role: "Pesquisador Senior",
    degree: "Doutorado em Biologia Molecular",
    lattesUrl: "#",
  },
  {
    name: "Dra. Ana Carolina Oliveira",
    role: "Pesquisadora Associada",
    degree: "Doutorado em Virologia",
    lattesUrl: "#",
  },
  {
    name: "Dr. Carlos Eduardo Mendes",
    role: "Pesquisador Colaborador",
    degree: "Doutorado em Bioquímica",
    lattesUrl: "#",
  },
  {
    name: "Me. Juliana Costa",
    role: "Doutoranda",
    degree: "Mestrado em Ciências Biológicas",
    lattesUrl: "#",
  },
  {
    name: "Me. Rafael Almeida",
    role: "Doutorando",
    degree: "Mestrado em Biotecnologia",
    lattesUrl: "#",
  },
  {
    name: "Biól. Fernanda Rodrigues",
    role: "Mestranda",
    degree: "Graduação em Ciências Biológicas",
    lattesUrl: "#",
  },
  {
    name: "Biól. Lucas Ferreira",
    role: "Técnico de Laboratório",
    degree: "Graduação em Biomedicina",
    lattesUrl: "#",
  },
  {
    name: "Biól. Mariana Souza",
    role: "Iniciação Científica",
    degree: "Graduanda em Ciências Biológicas",
    lattesUrl: "#",
  },
];

const opportunities = [
  "Iniciação Científica (alunos de graduação)",
  "Mestrado e Doutorado (via processo seletivo do programa de pós-graduação)",
  "Pós-Doutorado (com bolsa ou colaboração)",
  "Estágios técnicos",
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="primary" size="lg">
        <Container className="flex flex-col gap-4">
          <Typography variant="h1" as="h1">
            Nossa Equipe
          </Typography>
          <Typography variant="p" as="p" className="max-w-2xl">
            Conheça os pesquisadores, estudantes e profissionais dedicados à excelência científica
            em virologia molecular
          </Typography>
        </Container>
      </Section>

      {/* Members Grid */}
      <Section size="md">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {members.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Join CTA */}
      <Section size="md">
        <Container>
          <div className="rounded-xl border border-border bg-card p-8 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted text-foreground">
                <Users className="h-5 w-5" />
              </div>
              <Typography variant="h3" as="h3">
                Junte-se à Nossa Equipe
              </Typography>
            </div>

            <Typography variant="body" as="p" className="max-w-2xl text-muted-foreground">
              Estamos sempre em busca de pesquisadores talentosos e estudantes motivados para integrar
              nossa equipe. Se você tem interesse em virologia molecular e deseja fazer parte de um
              ambiente científico dinâmico e colaborativo, entre em contato conosco.
            </Typography>

            <div className="flex flex-col gap-2">
              <Typography variant="body" as="p" className="font-semibold">
                Oportunidades disponíveis:
              </Typography>
              <ul className="flex flex-col gap-1.5 list-disc list-inside">
                {opportunities.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <Button variant="secondary" size="default">
                Entre em Contato
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}