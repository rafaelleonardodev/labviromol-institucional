import { Container } from "@/components/common/container/container";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import { teamService } from "@/services/team-service";
import TeamList from "@/components/features/team/team-list";
import { Member } from "@/utils/types";
import Link from "next/link";

const opportunities = [
  "Iniciação Científica (alunos de graduação)",
  "Mestrado e Doutorado (via processo seletivo do programa de pós-graduação)",
  "Pós-Doutorado (com bolsa ou colaboração)",
  "Estágios técnicos",
];

export default async function TeamPage() {
  let members: Member[] = [];
  let error = null;

  try {
    members = await teamService.getAll();
  } catch (err) {
    error = err instanceof Error ? err.message : "Erro ao buscar membros";
    console.error("Erro ao buscar membros:", err);
  }

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
          <TeamList members={members} />
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
              <Button asChild variant="secondary" size="default">
                <Link href="/contact" className="flex gap-2">
                  Entre em contato
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}