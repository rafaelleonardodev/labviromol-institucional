export type Equipment = {
  id: string;
  name: string;
  model: string;
  brand: string;
  code: string;
  description: string;
  imageUrl: string;
}

export type ScheduleEquipment = {
  equipmentId: string;
  name: string;
}

export type Scheduler = {
  name: string;
  course: string;
  email: string;
}

export type Scheduling = {
  date: string,
  start: string;
  end: string;
}

export type CreateSchedule = {
  scheduler: Scheduler;
  scheduling: Scheduling;
  acceptTerm: boolean;
  advisorProfessor: string;
  projectTitle: string;
  description: string;
  equipments: ScheduleEquipment[];
}