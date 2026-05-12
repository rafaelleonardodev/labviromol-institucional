import { Container } from "@/components/common/container/container";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import Link from "next/link";
import { assetsService } from "@/services/assets-service";
import EquipmentsList from "@/components/features/equipment/equipment-list";
import { Equipment } from "@/utils/types";

const requirements = [
  "Treinamento específico para operação do equipamento",
  "Agendamento prévio através do sistema online",
  "Aprovação do professor orientador (para estudantes)",
  "Aceite do Termo de Responsabilidade",
  "Compromisso de manutenção e limpeza após uso",
];

export default async function EquipmentsPage() {
  let equipments: Equipment[] = [];
  let error = null;

  try {
    equipments = await assetsService.getAll();
  } catch (err) {
    error = err instanceof Error ? err.message : "Erro ao buscar equipamentos";
    console.error("Erro ao buscar equipamentos:", err);
  }


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
          <EquipmentsList equipments={equipments}/>

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