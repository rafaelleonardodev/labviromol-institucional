import { z } from "zod";

export const scheduleFormSchema = z
  .object({
    scheduler: z.object({
      name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
      course: z.string().min(2, "Informe a instituição/curso"),
      email: z.string().email("E-mail inválido"),
    }),
    scheduling: z.object({
      date: z.string().min(1, "Selecione uma data"),
      start: z.string().min(1, "Informe o horário de início"),
      end: z.string().min(1, "Informe o horário de término"),
    }),
    advisorProfessor: z.string().min(3, "Informe o nome do orientador"),
    projectTitle: z.string().min(3, "Informe o título do projeto"),
    description: z.string().min(20, "Descreva o objetivo com pelo menos 20 caracteres"),
    equipments: z
      .array(
        z.object({
          equipmentId: z.string().min(1, "Selecione um equipamento"),
          name: z.string(),
        })
      )
      .min(1, "Selecione pelo menos um equipamento"),
    acceptTerm: z.literal(true, {
      message: "Você deve aceitar o Termo de Responsabilidade",
    }),
  })
  .refine(
    (d) =>
      !d.scheduling.start ||
      !d.scheduling.end ||
      d.scheduling.start < d.scheduling.end,
    {
      message: "O horário de término deve ser após o início",
      path: ["scheduling", "end"],
    }
  );

export type ScheduleFormValues = z.infer<typeof scheduleFormSchema>;