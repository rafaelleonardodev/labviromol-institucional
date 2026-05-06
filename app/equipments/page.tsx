import { IconCard } from "@/components/common/cards/icon-card";
import { Container } from "@/components/common/container/container";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import Link from "next/link";
import {
  ActivitySquare,
  AlignJustify,
  Zap,
  FlaskConical,
  Droplets,
  Microscope,
  Calendar,
} from "lucide-react";

const equipment = [
  {
    icon: <ActivitySquare />,
    title: "Termociclador em Tempo Real",
    description: "Sistema de PCR quantitativo para análises moleculares",
    href: "#",
    cta: "Ver Detalhes",
  },
  {
    icon: <AlignJustify />,
    title: "Sequenciador de Nova Geração",
    description: "Plataforma de sequenciamento massivo paralelo",
    href: "#",
    cta: "Ver Detalhes",
  },
  {
    icon: <Zap />,
    title: "Centrífuga Refrigerada",
    description: "Centrífuga de alta velocidade com controle de temperatura",
    href: "#",
    cta: "Ver Detalhes",
  },
  {
    icon: <FlaskConical />,
    title: "Cabine de Segurança Biológica",
    description: "Cabine de fluxo laminar Classe II tipo A2",
    href: "#",
    cta: "Ver Detalhes",
  },
  {
    icon: <Droplets />,
    title: "Espectrofotômetro NanoDrop",
    description: "Espectrofotômetro de microvolume",
    href: "#",
    cta: "Ver Detalhes",
  },
  {
    icon: <Microscope />,
    title: "Microscópio de Fluorescência",
    description: "Microscópio invertido com sistema de epifluorescência",
    href: "#",
    cta: "Ver Detalhes",
  },
];

const requirements = [
  "Treinamento específico para operação do equipamento",
  "Agendamento prévio através do sistema online",
  "Aprovação do professor orientador (para estudantes)",
  "Aceite do Termo de Responsabilidade",
  "Compromisso de manutenção e limpeza após uso",
];

export default function EquipmentsPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="primary" size="lg">
        <Container className="flex flex-col gap-4">
          <Typography variant="h1" as="h1">
            Equipamentos
          </Typography>
          <Typography variant="p" as="p" className="max-w-2xl">
            Infraestrutura moderna e equipamentos de ponta para pesquisa em virologia molecular
          </Typography>
        </Container>
      </Section>

      {/* Equipment grid */}
      <Section size="md">
        <Container className="flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {equipment.map((item) => (
              <IconCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                href={item.href}
                cta={item.cta}
                className="h-full"
              >
                <Typography variant="muted" as="p">
                  {item.description}
                </Typography>
              </IconCard>
            ))}
          </div>

          {/* Access block */}
          <div className="rounded-xl border border-border bg-card p-8 flex flex-col gap-4">
            <Typography variant="h3" as="h3">
              Acesso aos Equipamentos
            </Typography>

            <Typography variant="p" as="p" className="text-muted-foreground">
              Os equipamentos do laboratório estão disponíveis para uso por pesquisadores
              credenciados, alunos de pós-graduação e colaboradores externos mediante aprovação.
            </Typography>

            <div className="rounded-lg bg-muted p-4 flex flex-col gap-3">
              <p className="text-sm font-semibold">Requisitos para Utilização:</p>
              <ul className="flex flex-col gap-1.5 list-disc list-inside">
                {requirements.map((req) => (
                  <li key={req} className="text-sm text-muted-foreground">
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <Typography variant="p" as="p" className="text-muted-foreground text-sm">
              Para agendar o uso de equipamentos, acesse nossa{" "}
              <Link href="/schedule" className="text-foreground font-medium underline underline-offset-4">
                página de agendamentos
              </Link>
              .
            </Typography>
          </div>
        </Container>
      </Section>
    </>
  );
}