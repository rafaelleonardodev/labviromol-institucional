"use client";

import { Controller } from "react-hook-form";
import { CalendarDays, Clock, FileText, FlaskConical, GraduationCap, Plus, Trash2, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useScheduleForm } from "./use-schedule-form";
import { Equipment } from "@/utils/types";

function SectionDivider({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 pt-2">
      <div className="flex items-center gap-2 text-muted-foreground">
        {icon}
        <span className="text-sm font-semibold text-foreground">{label}</span>
      </div>
      <div className="flex-1 border-t border-border" />
    </div>
  );
}

type ScheduleFormProps = {
  equipmentsOptions: Equipment[];
};

export function ScheduleForm({ 
  equipmentsOptions
}: ScheduleFormProps) {
  const {
    form,
    fields,
    append,
    remove,
    submitted,
    onSubmit,
    resetForm,
  } = useScheduleForm();

  if (submitted) {
    return (
      <Card className="p-10 flex flex-col items-center gap-4 text-center">
        <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center">
          <CalendarDays className="h-7 w-7 text-secondary" />
        </div>

        <h3 className="text-2xl font-semibold">
          Solicitação enviada!
        </h3>

        <p className="text-muted-foreground max-w-md">
          Sua solicitação foi recebida.
          Você receberá uma confirmação por e-mail em até 24 horas úteis.
        </p>

        <Button
          variant="outline"
          onClick={resetForm}
        >
          Novo agendamento
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-8">
      <form id="schedule-form" onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <SectionDivider icon={<FlaskConical className="h-4 w-4" />} label="Equipamentos e Horário" />
        <FieldSet className="gap-4">
          <FieldLegend variant="label">Equipamentos solicitados</FieldLegend>
          <FieldDescription>
            Adicione todos os equipamentos que serão utilizados na sessão.
          </FieldDescription>
          <FieldGroup className="gap-3">
            {fields.map((field, index) => (
              <Controller
                key={field.id}
                name={`equipments.${index}.equipmentId`}
                control={form.control}
                render={({ field: f, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className="flex items-center gap-2">
                      <Select
                        name={f.name}
                        value={f.value}
                        onValueChange={(val) => {
                          f.onChange(val);
                          const eq = equipmentsOptions.find((e) => e.id === val);
                          if (eq) form.setValue(`equipments.${index}.name`, eq.name);
                        }}
                      >
                        <SelectTrigger id={`equipment-${index}`} aria-invalid={fieldState.invalid} className="flex-1">
                          <SelectValue
                            placeholder={
                              "Selecione o equipamento"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-card border border-border shadow-md z-50">
                          {equipmentsOptions.map((eq) => (
                            <SelectItem key={eq.id} value={eq.id}>
                              {eq.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {fields.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground hover:text-destructive shrink-0"
                          onClick={() => remove(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
            ))}
          </FieldGroup>
          {form.formState.errors.equipments?.root && (
            <p className="text-sm text-destructive">
              {form.formState.errors.equipments.root.message}
            </p>
          )}
          <Button
            type="button"
            variant="primary"
            size="sm"
            className="w-fit"
            onClick={() => append({ equipmentId: "", name: "" })}
          >
            <Plus className="h-4 w-4" />
            Adicionar equipamento
          </Button>
        </FieldSet>
        <FieldGroup className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Controller
            name="scheduling.date"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="scheduling-date" className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" /> Data
                </FieldLabel>
                <Input {...field} id="scheduling-date" type="date" aria-invalid={fieldState.invalid} />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="scheduling.start"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="scheduling-start" className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> Início
                </FieldLabel>
                <Input {...field} id="scheduling-start" type="time" aria-invalid={fieldState.invalid} />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="scheduling.end"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="scheduling-end" className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> Término
                </FieldLabel>
                <Input {...field} id="scheduling-end" type="time" aria-invalid={fieldState.invalid} />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </FieldGroup>
        <SectionDivider icon={<User className="h-4 w-4" />} label="Dados do Solicitante" />
        <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Controller
            name="scheduler.name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="scheduler-name">Nome Completo</FieldLabel>
                <Input {...field} id="scheduler-name" placeholder="Seu nome completo" aria-invalid={fieldState.invalid} />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="scheduler.email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="scheduler-email">E-mail</FieldLabel>
                <Input {...field} id="scheduler-email" type="email" placeholder="seu@email.com" aria-invalid={fieldState.invalid} />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </FieldGroup>
        <Controller
          name="scheduler.course"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="scheduler-course">Instituição / Curso</FieldLabel>
              <Input {...field} id="scheduler-course" placeholder="Ex: Mestrado em Microbiologia – UFXX" aria-invalid={fieldState.invalid} />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="advisorProfessor"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="advisor-professor" className="flex items-center gap-1.5">
                <GraduationCap className="h-3.5 w-3.5" /> Professor Orientador
              </FieldLabel>
              <Input {...field} id="advisor-professor" placeholder="Nome completo do orientador" aria-invalid={fieldState.invalid} />
              <FieldDescription>Campo obrigatório para estudantes</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <SectionDivider icon={<FileText className="h-4 w-4" />} label="Informações do Projeto" />
        <Controller
          name="projectTitle"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="project-title">Título do Projeto / Pesquisa</FieldLabel>
              <Input {...field} id="project-title" placeholder="Título do seu projeto" aria-invalid={fieldState.invalid} />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="description"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="description">Finalidade do Uso</FieldLabel>
              <Textarea
                {...field}
                id="description"
                rows={4}
                placeholder="Descreva brevemente o objetivo do uso do equipamento..."
                className="resize-none"
                aria-invalid={fieldState.invalid}
              />
              <FieldDescription>Mínimo de 20 caracteres</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <div className="border-t border-border pt-4 flex flex-col gap-8">
          <Controller
            name="acceptTerm"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field orientation="horizontal" data-invalid={fieldState.invalid}>
                <Checkbox
                  id="accept-term"
                  name={field.name}
                  aria-invalid={fieldState.invalid}
                  checked={field.value === true}
                  onCheckedChange={(checked) => field.onChange(checked ? true : undefined)}
                  className="mt-0.5"
                />
                <div className="flex flex-col gap-1.5">
                  <FieldLabel htmlFor="accept-term" className="cursor-pointer">
                    Li e aceito o Termo de Responsabilidade de Uso do Laboratório *
                  </FieldLabel>
                  <FieldDescription>
                    Declaro estar ciente das normas de biossegurança, responsabilizando-me pelo uso
                    adequado dos equipamentos e materiais, bem como pelo cumprimento dos protocolos
                    estabelecidos pelo laboratório.
                  </FieldDescription>
                  <button
                    type="button"
                    className="text-sm font-medium underline underline-offset-4 text-foreground w-fit hover:opacity-70 transition-opacity"
                  >
                    Ler Termo Completo
                  </button>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </div>
              </Field>
            )}
          />
          <Button
            type="submit"
            variant="secondary"
            size="lg"
            className="w-full"
            loading={form.formState.isSubmitting}
          >
            Solicitar Agendamento
          </Button>
        </div>
      </form>
    </Card>
  );
}