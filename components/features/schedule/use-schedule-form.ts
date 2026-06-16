"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { scheduleFormSchema, type ScheduleFormValues } from "./schedule.schema";
import { notify } from "@/lib/notifications";

export function useScheduleForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ScheduleFormValues>({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: {
      scheduler: { name: "", course: "", email: "" },
      scheduling: { date: "", start: "", end: "" },
      advisorProfessor: "",
      projectTitle: "",
      description: "",
      equipments: [{ equipmentId: "", name: "" }],
      acceptTerm: undefined,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "equipments",
  });

  async function onSubmit(values: ScheduleFormValues) {
    if (!values.acceptTerm) {
      form.setError("acceptTerm", {
        message: "Você deve aceitar o Termo de Responsabilidade",
      });

      return;
    }

    setLoading(true);
    setError(null);

    const payload = {
      scheduler: {
        name: values.scheduler.name,
        course: values.scheduler.course,
        email: values.scheduler.email,
      },
      scheduling: {
        date: values.scheduling.date,
        start: `${values.scheduling.date}T${values.scheduling.start}:00-03:00`,
        end: `${values.scheduling.date}T${values.scheduling.end}:00-03:00`,
      },
      acceptTerm: values.acceptTerm,
      advisorProfessor: values.advisorProfessor,
      projectTitle: values.projectTitle,
      description: values.description,
      equipments: values.equipments,
    };

    try {
      const response = await fetch("/api/schedules", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {

      switch (response.status) {
        case 400:
          throw new Error("Dados inválidos.");

        case 409:
          throw new Error(
            "Já existe um agendamento para este horário."
          );

        case 422:
          throw new Error(
            "Horário indisponível para reserva."
          );

        case 500:
          throw new Error(
            "Erro interno do servidor."
          );

        default:
          throw new Error(
            data.error || "Erro ao criar agendamento"
          );
      }
    }

      notify.success("Agendamento realizado com sucesso.");
      setSubmitted(true);
      form.reset();
    } catch (err) {
      const message = 
        err instanceof Error ? err.message : "Erro ao criar agendamento";
      setError(message);
      notify.error(message);
    } finally {
      setLoading(false);
    }
  }

  function resetForm() {
    form.reset();
    setSubmitted(false);
    setError(null);
  }

  return {
    form,
    fields,
    append,
    remove,
    submitted,
    loading,
    error,
    onSubmit,
    resetForm,
  };
}