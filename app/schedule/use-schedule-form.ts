"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { scheduleFormSchema, type ScheduleFormValues } from "./schedule.schema";

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
        start: new Date(
          `${values.scheduling.date}T${values.scheduling.start}`
        ).toISOString(),
        end: new Date(
          `${values.scheduling.date}T${values.scheduling.end}`
        ).toISOString(),
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
        throw new Error(data.error || "Erro ao criar agendamento");
      }

      console.log("✅ Agendamento criado com sucesso:", data);
      setSubmitted(true);
      form.reset();
    } catch (err) {
      const message = 
        err instanceof Error ? err.message : "Erro ao criar agendamento";
      setError(message);
      console.error("❌ Erro:", err);
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