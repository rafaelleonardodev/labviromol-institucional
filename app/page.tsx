import { IconCard } from "@/components/common/cards/icon-card";
import { Container } from "@/components/common/container/container";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Calendar, FlaskConical, Microscope, Users } from "lucide-react";

export default function Home() {
  return (
    <>  
      <Section
        bgImage="/images/hero.jpg"
        size="xl"
        className="text-primary-foreground"
      >
        <Container
          className="
           flex flex-col gap-4
          "
        >
          <Typography 
            variant="hero"
            as="h1"
          >
            Laboratório de Virologia Molecular
          </Typography>
          <Typography 
            variant="h3"
            as="h3"
            className="max-w-3xl"
          >
            Centro de excelência em pesquisa virológica molecular, comprometido com a inovação científica, diagnóstico avançado e desenvolvimento tecnológico.
          </Typography>
          <div className="flex gap-2">
            <Button variant={"secondary"}>
              <Calendar />
              Agendar uso de equipamento
            </Button>
            <Button variant={"primary-soft"}>
              Conheça nosso trabalho
              <ArrowRight />
            </Button>
          </div>
        </Container>
      </Section>
      
      <Section
        className="
         bg-card
        "
      >
        <Container
          className="flex gap-4 items-center align-center"
        >
          <IconCard
            title="Nossa Equipe"
            cta="Ver equipe" 
            icon={<Users />}
            href="/team"   
          >
            <Typography variant="muted" as="p">
              Conheça os pesquisadores e profissionais dedicados à excelência científica.
            </Typography>
          </IconCard>
          <IconCard
            icon={<FlaskConical />}
            title="Pesquisas em Andamento"
            cta="Ver pesquisas"
            href="/research"
          >
            <Typography variant="muted" as="p">
              Explore nossos projetos de pesquisa e suas contribuições científicas.
            </Typography>
          </IconCard>
          <IconCard
            icon={<BookOpen />}
            title="Publicações Científicas"
            cta="Ver publicações"
            href="/publish"
          >
            <Typography variant="muted" as="p">
              Acesse nossas publicações em periódicos científicos de alto impacto.
            </Typography>
          </IconCard>
        </Container>
      </Section>
      <Section>
        <Container
          className="
           flex
           flex-col
           align-center
           items-center
           text-center
           gap-4
          "
        >
          <div className="
            w-12 h-12 
            flex items-center justify-center 
            rounded-lg 
            bg-primary
          "
          style={{color: "oklch(0.98 0.01 170)"}}
          >
            <Microscope/>
          </div>
          <Typography variant="h2" as="h2">
            Nossa Missão
          </Typography>
          <Typography variant="body" className="max-w-3xl" as="p">
            Desenvolver pesquisa científica de excelência na área de virologia molecular, contribuindo para o avanço do conhecimento, formação de recursos humanos qualificados e desenvolvimento de soluções inovadoras para diagnóstico e controle de doenças virais.
          </Typography>
        </Container>
      </Section>
    </>
  );
}
