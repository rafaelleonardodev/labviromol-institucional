"use client";

import { useState } from "react";
import { Container } from "@/components/common/container/container";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Info,
  CalendarDays,
  Clock,
  User,
  GraduationCap,
  AlertCircle,
} from "lucide-react";

const equipmentOptions = [
  "Termociclador em Tempo Real",
  "Sequenciador de Nova Geração",
  "Centrífuga Refrigerada",
  "Cabine de Segurança Biológica",
  "Espectrofotômetro NanoDrop",
  "Microscópio de Fluorescência",
];

const timeSlots = [
  "08:00 – 09:00",
  "09:00 – 10:00",
  "10:00 – 11:00",
  "11:00 – 12:00",
  "13:00 – 14:00",
  "14:00 – 15:00",
  "15:00 – 16:00",
  "16:00 – 17:00",
  "17:00 – 18:00",
];

const importantInfo = [
  "O agendamento deve ser feito com pelo menos 48 horas de antecedência",
  "É obrigatório ter realizado o treinamento específico para o equipamento solicitado",
  "Em caso de falta sem justificativa, o usuário ficará suspenso por 30 dias",
  "O tempo de uso será limitado conforme disponibilidade e demanda",
  "Materiais e reagentes são de responsabilidade do usuário, salvo combinação prévia",
  "Qualquer dano causado ao equipamento será de responsabilidade do usuário",
];

const inputClass =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 transition-shadow";

const selectClass =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 transition-shadow appearance-none";

const labelClass = "block text-sm font-medium mb-1.5";

export default function SchedulePage() {
  const [accepted, setAccepted] = useState(false);

  return (
    <>
      {/* Hero */}
      <Section variant="primary" size="lg">
        <Container className="flex flex-col gap-4">
          <Typography variant="h1" as="h1">
            Agendamento de Equipamentos
          </Typography>
          <Typography variant="p" as="p" className="max-w-2xl">
            Agende o uso de equipamentos do laboratório preenchendo o formulário abaixo
          </Typography>
        </Container>
      </Section>

      <Section size="md">
        <Container className="flex flex-col gap-6">

          {/* Notice */}
          <div className="flex items-start gap-2.5 rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
            <Info className="h-4 w-4 mt-0.5 shrink-0" />
            <p>
              O agendamento está sujeito à disponibilidade e aprovação. Você receberá uma
              confirmação por e-mail em até 24 horas úteis.
            </p>
          </div>

          {/* Form card */}
          <Card className="p-8 flex flex-col gap-8">
            <Typography variant="h3" as="h3">
              Formulário de Agendamento
            </Typography>

            {/* Equipment + Date + Time */}
            <div className="flex flex-col gap-5">
              {/* Equipment */}
              <div>
                <label className={labelClass}>
                  <span className="flex items-center gap-1.5 mb-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    Equipamento Desejado
                  </span>
                </label>
                <div className="relative">
                  <select className={selectClass} defaultValue="">
                    <option value="" disabled>Selecione o equipamento</option>
                    {equipmentOptions.map((eq) => (
                      <option key={eq} value={eq}>{eq}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date + Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Data</label>
                  <input type="date" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>
                    <span className="flex items-center gap-1.5 mb-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      Horário
                    </span>
                  </label>
                  <div className="relative">
                    <select className={selectClass} defaultValue="">
                      <option value="" disabled>Selecione o horário</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Requester data */}
            <div className="flex flex-col gap-5">
              <p className="flex items-center gap-1.5 text-sm font-semibold">
                <User className="h-4 w-4" />
                Dados do Solicitante
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Nome Completo</label>
                  <input type="text" placeholder="Seu nome" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>E-mail</label>
                  <input type="email" placeholder="seu@email.com" className={inputClass} />
                </div>
              </div>

              <div>
                <label className={labelClass}>Instituição/Curso</label>
                <input
                  type="text"
                  placeholder="Ex: Mestrado em Microbiologia - UFXX"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>
                  <span className="flex items-center gap-1.5 mb-1.5">
                    <GraduationCap className="h-3.5 w-3.5" />
                    Professor Orientador *
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Nome completo do orientador"
                  className={inputClass}
                />
                <p className="mt-1.5 text-xs text-muted-foreground">
                  Campo obrigatório para estudantes
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Project info */}
            <div className="flex flex-col gap-5">
              <p className="text-sm font-semibold">Informações do Projeto</p>

              <div>
                <label className={labelClass}>Título do Projeto/Pesquisa</label>
                <input
                  type="text"
                  placeholder="Título do seu projeto"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Finalidade do Uso</label>
                <textarea
                  rows={4}
                  placeholder="Descreva brevemente o objetivo do uso do equipamento..."
                  className={inputClass + " resize-none"}
                />
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Terms */}
            <div className="flex flex-col gap-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-border accent-primary"
                />
                <span className="text-sm font-medium">
                  Li e aceito o Termo de Responsabilidade de Uso do Laboratório *
                </span>
              </label>
              <p className="text-sm text-muted-foreground pl-7">
                Declaro estar ciente das normas de biossegurança, responsabilizando-me pelo uso
                adequado dos equipamentos e materiais, bem como pelo cumprimento dos protocolos
                estabelecidos pelo laboratório.
              </p>
              <button className="pl-7 text-sm font-medium underline underline-offset-4 text-foreground w-fit hover:opacity-70 transition-opacity">
                Ler Termo Completo
              </button>
            </div>

            {/* Submit */}
            <Button variant="primary" size="lg" className="w-full" disabled={!accepted}>
              Solicitar Agendamento
            </Button>
          </Card>

          {/* Important info */}
          <Card className="p-8 flex flex-col gap-4">
            <Typography variant="h3" as="h3">
              Informações Importantes
            </Typography>
            <ul className="flex flex-col gap-2">
              {importantInfo.map((info) => (
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