import { Card, CardContent, CardHeader } from "@/components/common/card";
import { IconCard } from "@/components/common/card/icon-card";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import { Button } from "@/components/ui/button";
import Meyer from "@/public/icons/meyer";
import OpenBook from "@/public/icons/open-book";
import People from "@/public/icons/people";

export default function Home() {
  return (
    <>  
      <Section className="flex flex-col gap-4 items-start align-center" size="lg" container={false}>
        <Typography 
          variant="hero"
        >
          Laboratório de Virologia Molecular
        </Typography>
        <Typography 
          variant="h3"
        >
          Centro de excelência em pesquisa virológica molecular, comprometido com a inovação científica, diagnóstico avançado e desenvolvimento tecnológico.
        </Typography>
        <div className="flex gap-2">
          <Button>Agendar uso de equipamento</Button>
          <Button variant={"secondary"}>Conheça nosso trabalho</Button>
        </div>
      </Section>
      
      <section 
        className="
          flex
          gap-4
        "
      >
        <IconCard
          title="Nossa Equipe"
          description="Conheça os pesquisadores e profissionais dedicados à excelência científica."
          cta="Ver equipe" 
          icon={<People/>}
          href="/team"    
        />
        <IconCard
          icon={<Meyer/>}
          title="Pesquisas em Andamento"
          description="Explore nossos projetos de pesquisa e suas contribuições científicas."
          cta="Ver pesquisas"
          href="/research"
        />
        <IconCard
          icon={<OpenBook/>}
          title="Publicações Científicas"
          description="Acesse nossas publicações em periódicos científicos de alto impacto."
          cta="Ver publicações"
          href="/publish"
        />
      </section>
      <Section>
        <h3>Nossa missao</h3>
      </Section>
    </>
  );
}
