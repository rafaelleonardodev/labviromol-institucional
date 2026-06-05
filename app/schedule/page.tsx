import { AlertCircle, Info } from "lucide-react";

import { Container } from "@/components/common/container/container";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import { Card } from "@/components/ui/card";

import { IMPORTANT_INFO } from "./schedule.constants";
import { ScheduleForm } from "./schedule-form";
import { assetsService } from "@/services/assets-service";
import { Equipment } from "@/utils/types";

export default async function SchedulePage() {
  let equipmentsOptions: Equipment[] = [];
  let error = null;

  try {
    equipmentsOptions = await assetsService.getAll();
  } catch (err) {
    error = err instanceof Error ? err.message : "Erro ao buscar equipamentos";
    console.error("Erro ao buscar equipamentos:", err);
  }

  return (
    <>
      {/* Hero */}
      <Section variant="primary" size="lg">
        <Container className="flex flex-col gap-4">
          <Typography variant="h1" as="h1">Agendamento de Equipamentos</Typography>
            <Typography variant="p" as="p" className="max-w-2xl">
              Agende o uso de equipamentos do laboratório preenchendo o formulário abaixo
            </Typography>
        </Container>
      </Section>

      <Section size="md" variant="muted">
        <Container className="flex flex-col gap-6">
          {/* Aviso */}
          <div className="flex items-start gap-2.5 rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
            <Info className="h-4 w-4 mt-0.5 shrink-0" />
            <p>
              O agendamento está sujeito à disponibilidade e aprovação. Você receberá uma
              confirmação por e-mail em até 24 horas úteis.
            </p>
          </div>
          <ScheduleForm equipmentsOptions={equipmentsOptions} />
          {/* Informações Importantes */}
          <Card className="p-8 flex flex-col gap-4">
            <Typography variant="h3" as="h3">Informações Importantes</Typography>
            <ul className="flex flex-col gap-2">
              {IMPORTANT_INFO.map((info) => (
                <li key={info} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <AlertCircle className="h-4 w-4 mt-0.5 shrink-0 text-foreground" />
                  {info}
                </li>
              ))}
            </ul>
          </Card>

        </Container>
      </Section>
    </>
  );
}