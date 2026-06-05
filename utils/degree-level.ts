import { TFunction } from "i18next";
import { DegreeLevel } from "./enums";

export const getDegreeLevelLabel = (
  degreeLevel: DegreeLevel,
  t: TFunction
) => t(`team.degreeLevel.${degreeLevel}`);