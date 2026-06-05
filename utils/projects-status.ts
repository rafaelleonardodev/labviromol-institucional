import { TFunction } from "i18next";
import { ProjectStatus } from "./enums";

export const getProjectStatusLabel = (
  projectStatus: ProjectStatus,
  t: TFunction
) => t(`research.projectStatus.${projectStatus}`);