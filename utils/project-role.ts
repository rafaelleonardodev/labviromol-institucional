import { TFunction } from "i18next";
import { ProjectRole } from "./enums";

export const getProjectRoleLabel = (
  projectRole: ProjectRole,
  t: TFunction
) => t(`team.projectRole.${projectRole}`);