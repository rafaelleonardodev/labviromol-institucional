import { IconCard } from "@/components/common/cards/icon-card";
import { SimpleCard } from "@/components/common/cards/simple-card";
import { Container } from "@/components/common/container/container";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import useGetActivityAreas from "@/hook/use-get-activity-areas";
import { BookOpen, Shield, Target } from "lucide-react";

export default function AboutPage() {
  const activities = useGetActivityAreas();

  return (
    <>
      <Section size="lg" variant="primary">
        <Container 
          className="
           flex
           flex-col
           gap-2
          "
        >
          <Typography variant="h1" as="h1">
            Sobre o Laboratório
          </Typography>
          <Typography variant="p" as="p">
            Conheça nossa história, missão e áreas de atuação no campo da virologia molecular
          </Typography>
        </Container>
      </Section>
      <Section>
        <Container
          className="
           flex
           flex-col
           gap-8
          "
        >
          <div 
            className="
              grid md:grid-cols-2 
              gap-4
            "
          >
            <IconCard 
              icon={<Target />} 
              title={"Missão"}
            >
              <Typography variant="muted" as="p">
                Desenvolver pesquisa científica de excelência na área de virologia molecular, contribuindo para o avanço do conhecimento, formação de recursos humanos qualificados e desenvolvimento de soluções inovadoras para diagnóstico e controle de doenças virais.          
              </Typography>
            </IconCard>
            <IconCard 
              icon={<BookOpen />}
              title="Visão"
            >
              <Typography variant="muted" as="p">
                Ser referência nacional e internacional em pesquisa virológica molecular, reconhecido pela qualidade científica, inovação tecnológica e contribuição para a saúde pública.
              </Typography>
            </IconCard>
          </div>
          <SimpleCard 
            title="Histórico"
          >
            <div className="flex flex-col gap-2">
              <Typography variant="muted">
                Fundado em 2010, o Laboratório de Virologia Molecular surgiu da necessidade de estabelecer um centro de referência em pesquisa virológica na região.
                Desde sua criação, o laboratório tem se destacado pela produção científica de qualidade e pela formação de profissionais altamente capacitados.
              </Typography>
              <Typography variant="muted">
                Ao longo dos anos, consolidamos parcerias com instituições nacionais e internacionais, expandimos nossa infraestrutura laboratorial e ampliamos nossas
                linhas de pesquisa. Hoje, contamos com equipamentos de última geração e uma equipe multidisciplinar dedicada ao estudo de vírus de importância
                médica e veterinária.
              </Typography>
              <Typography variant="muted">
                Nossa contribuição inclui a publicação de mais de 100 artigos científicos em periódicos de alto impacto, formação de dezenas de mestres e doutores, e
                desenvolvimento de metodologias diagnósticas implementadas em serviços de saúde.
              </Typography>
            </div>
          </SimpleCard>
          <div
            className="
             flex
             flex-col
             gap-4
            "
          >
            <Typography variant="h3">
              Áreas de Atuação
            </Typography>

            <div
              className="
               grid
               grid-cols-3
               gap-4
              "
            >
              {activities.map((act, index) => {
                return (
                  <SimpleCard
                    key={index}
                    title={act.area}
                  >
                    <Typography variant="muted">
                      {act.description}
                    </Typography>
                  </SimpleCard>
                )
              })}
            </div>
          </div>
          <IconCard
            icon={<Shield/>}
            title="Biossegurança e Níveis de Contenção"
          >
            <div
              className="
               flex
               flex-col
               gap-4
              "
            >
              <Typography variant="muted" as="p">
                O laboratório opera sob rigorosos padrões de biossegurança, seguindo as diretrizes nacionais e internacionais. Possuímos áreas classificadas como NB2 (Nível de Biossegurança 2), adequadas para manipulação de agentes de risco moderado.
              </Typography>
              <div className="bg-muted p-4 rounded flex flex-col gap-2">
                <Typography as="p">
                  Normas de Segurança Implementadas:
                </Typography>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <Typography variant="muted" as="p">
                      Uso obrigatório de EPIs (jaleco, luvas, máscaras, óculos de proteção)
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="muted" as="p">
                      Cabines de segurança biológica Classe II para manipulação de material infectado
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="muted" as="p">
                      Autoclavagem de todo material biológico antes do descarte
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="muted" as="p">
                      Treinamento periódico da equipe em procedimentos de biossegurança
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="muted" as="p">
                      Plano de contingência para acidentes biológicos
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="muted" as="p">
                      Controle de acesso restrito a pessoal autorizado
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="muted" as="p">
                      Registros detalhados de todas as atividades laboratoriais
                    </Typography>
                  </li>
                </ul>
              </div>
              <Typography variant="muted" as="p">
                Todos os membros da equipe recebem treinamento específico em biossegurança antes de iniciar suas atividades no laboratório. O cumprimento das normas é constantemente monitorado pela Comissão Interna de Biossegurança.
              </Typography>
            </div>
          </IconCard>
        </Container>
      </Section>
    </>
  )
}