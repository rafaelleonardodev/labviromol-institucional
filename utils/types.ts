export type Equipment = {
  id: string;
  name: string;
  model: string;
  brand: string;
  code: string;
  description: string;
  imageUrl: string;
}

export type Member = {
  id: string;
  displayName: string;
  position: string;
  degreeLevel: string;
  lattesUrl?: string;
}

export type Publication = {
  id: string;
  title: string;
  authors: Author[];
  publishedOn: string;
  publicationDate: number;
  doi: string;
}

export type Author = {
  name: string;
  order: string;
}

export type Project = {
  id: string;
  title: string;
  status: string;
  description: string;
  researchLead: string;
  partner: string;
  createdAt: string;
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