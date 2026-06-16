"use client";

import { Controller } from "react-hook-form";
import {
  CalendarDays,
  Clock,
  FileText,
  FlaskConical,
  GraduationCap,
  Plus,
  Trash2,
  User,
} from "lucide-react";

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

import { LabTimePicker } from "../../common/inputs/lab-time-picker";
import { useScheduleForm } from "./use-schedule-form";
import { Equipment } from "@/utils/types";
import { TFunction } from "i18next";

/** Returns today as "YYYY-MM-DD" in local time */
function getTodayString() {
  const d  = new Date();
  const yy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yy}-${mm}-${dd}`;
}

function FormSection({
  icon,
  label,
  description,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-foreground">{label}</h3>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

type ScheduleFormProps = {
  equipmentsOptions: Equipment[];
  t: TFunction;
};

export function ScheduleForm({ equipmentsOptions, t }: ScheduleFormProps) {
  const { form, fields, append, remove, submitted, onSubmit, resetForm } =
    useScheduleForm();

  const acceptTerm = form.watch("acceptTerm");
  const todayStr = getTodayString();

  if (submitted) {
    return (
      <Card className="p-10 flex flex-col items-center gap-4 text-center">
        <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center">
          <CalendarDays className="h-7 w-7 text-secondary" />
        </div>
        <h3 className="text-2xl font-semibold">{t("schedule.success.title")}</h3>
        <p className="text-muted-foreground max-w-md">
          {t("schedule.success.description")}
        </p>
        <Button variant="outline" onClick={resetForm}>
          {t("schedule.success.newSchedule")}
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* ============ CARD 1: EQUIPAMENTOS E HORÁRIO ============ */}
      <Card className="p-8 lg:p-10">
        <form id="schedule-form-equipment" className="space-y-6">
          <FormSection
            icon={<FlaskConical className="h-5 w-5 text-primary" />}
            label={t("schedule.sections.equipment.title")}
            description={t("schedule.sections.equipment.description")}
          >
            {/* ── Equipamentos ─────────────────────────────────── */}
            <FieldSet className="space-y-3">
              <div className="space-y-2">
                <FieldLegend variant="label" className="text-sm font-medium">
                  {t("schedule.sections.equipment.requestedEquipments")}
                </FieldLegend>
                <FieldDescription className="text-xs">
                  {t("schedule.sections.equipment.requestedEquipmentsDescription")}
                </FieldDescription>
              </div>

              <FieldGroup className="space-y-3 pl-3 border-l-2 border-primary/20">
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
                            <SelectTrigger
                              id={`equipment-${index}`}
                              aria-invalid={fieldState.invalid}
                              className="flex-1 border-primary/20 border-2"
                            >
                              <SelectValue
                                placeholder={t("schedule.sections.equipment.selectEquipment")}
                              />
                            </SelectTrigger>
                            <SelectContent className="bg-card border border-primary/20 shadow-md z-50">
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
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
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
                {t("schedule.sections.equipment.addEquipment")}
              </Button>
            </FieldSet>

            {/* ── Data e horário ───────────────────────────────── */}
            <div className="pt-4 border-t border-border">
              <p className="text-sm font-medium text-foreground mb-4">
                {t("schedule.sections.equipment.sessionTime")}
              </p>

              <FieldGroup className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                {/* DATA */}
                <Controller
                  name="scheduling.date"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="scheduling-date" className="flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {t("schedule.sections.equipment.date")}
                      </FieldLabel>
                      <Input
                        {...field}
                        id="scheduling-date"
                        type="date"
                        min={todayStr}
                        aria-invalid={fieldState.invalid}
                        className="border-primary/20 border-2"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                {/* INÍCIO */}
                <Controller
                  name="scheduling.start"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="scheduling-start" className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {t("schedule.sections.equipment.start")}
                      </FieldLabel>
                      <LabTimePicker
                        id="scheduling-start"
                        value={field.value}
                        onChange={field.onChange}
                        placeholder={t("schedule.sections.equipment.start")}
                        aria-invalid={fieldState.invalid}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                {/* TÉRMINO */}
                <Controller
                  name="scheduling.end"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="scheduling-end" className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {t("schedule.sections.equipment.end")}
                      </FieldLabel>
                      <LabTimePicker
                        id="scheduling-end"
                        value={field.value}
                        onChange={field.onChange}
                        placeholder={t("schedule.sections.equipment.end")}
                        aria-invalid={fieldState.invalid}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
            </div>
          </FormSection>
        </form>
      </Card>

      {/* ============ CARD 2: DADOS DO SOLICITANTE ============ */}
      <Card className="p-8 lg:p-10">
        <FormSection
          icon={<User className="h-5 w-5 text-primary" />}
          label={t("schedule.sections.requester.title")}
          description={t("schedule.sections.requester.description")}
        >
          <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <Controller
              name="scheduler.name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="scheduler-name">
                    {t("schedule.sections.requester.fullName")}
                  </FieldLabel>
                  <Input
                    {...field}
                    id="scheduler-name"
                    placeholder={t("schedule.sections.requester.fullNamePlaceholder")}
                    aria-invalid={fieldState.invalid}
                    className="border-primary/20 border-2"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Controller
              name="scheduler.email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="scheduler-email">
                    {t("schedule.sections.requester.email")}
                  </FieldLabel>
                  <Input
                    {...field}
                    id="scheduler-email"
                    type="email"
                    placeholder={t("schedule.sections.requester.emailPlaceholder")}
                    aria-invalid={fieldState.invalid}
                    className="border-primary/20 border-2"
                  />
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
                <FieldLabel htmlFor="scheduler-course">
                  {t("schedule.sections.requester.institution")}
                </FieldLabel>
                <Input
                  {...field}
                  id="scheduler-course"
                  placeholder={t("schedule.sections.requester.institutionPlaceholder")}
                  aria-invalid={fieldState.invalid}
                  className="border-primary/20 border-2"
                />
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
                  <GraduationCap className="h-3.5 w-3.5" />
                  {t("schedule.sections.requester.advisor")}
                </FieldLabel>
                <Input
                  {...field}
                  id="advisor-professor"
                  placeholder={t("schedule.sections.requester.advisorPlaceholder")}
                  aria-invalid={fieldState.invalid}
                  className="border-primary/20 border-2"
                />
                <FieldDescription>
                  {t("schedule.sections.requester.advisorDescription")}
                </FieldDescription>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </FormSection>
      </Card>

      {/* ============ CARD 3: INFORMAÇÕES DO PROJETO ============ */}
      <Card className="p-8 lg:p-10">
        <FormSection
          icon={<FileText className="h-5 w-5 text-primary" />}
          label={t("schedule.sections.project.title")}
          description={t("schedule.sections.project.description")}
        >
          <Controller
            name="projectTitle"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="project-title">
                  {t("schedule.sections.project.projectTitle")}
                </FieldLabel>
                <Input
                  {...field}
                  id="project-title"
                  placeholder={t("schedule.sections.project.projectTitlePlaceholder")}
                  aria-invalid={fieldState.invalid}
                  className="border-primary/20 border-2"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="description"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="description">
                  {t("schedule.sections.project.purpose")}
                </FieldLabel>
                <Textarea
                  {...field}
                  id="description"
                  rows={4}
                  placeholder={t("schedule.sections.project.purposePlaceholder")}
                  className="resize-none border-primary/20 border-2"
                  aria-invalid={fieldState.invalid}
                />
                <FieldDescription>
                  {t("schedule.sections.project.purposeDescription")}
                </FieldDescription>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </FormSection>
      </Card>

      {/* ============ CARD 4: TERMOS E SUBMISSÃO ============ */}
      <Card className="p-8 lg:p-10 border-primary/30">
        <form id="schedule-form-final" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
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
                    onCheckedChange={(checked) =>
                      field.onChange(checked ? true : undefined)
                    }
                    className="mt-1 border-primary"
                  />
                  <div className="flex flex-col gap-2">
                    <FieldLabel htmlFor="accept-term" className="cursor-pointer font-medium">
                      {t("schedule.terms.accept")}
                    </FieldLabel>
                    <FieldDescription className="text-xs">
                      {t("schedule.terms.description")}
                    </FieldDescription>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </div>
                </Field>
              )}
            />
            {!acceptTerm && (
              <p className="text-sm text-muted-foreground">
                É necessário aceitar o termo para enviar a solicitação.
              </p>
            )}
          </div>

          <Button
            type="submit"
            variant="secondary"
            size="lg"
            className="w-full"
            loading={form.formState.isSubmitting}
            disabled={!acceptTerm || form.formState.isSubmitting}
          >
            {t("schedule.terms.submit")}
          </Button>
        </form>
      </Card>
    </div>
  );
}