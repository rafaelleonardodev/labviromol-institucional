import { CreateSchedule } from "@/utils/types";
import { api } from "./api/client";

export const scheduleService = {
    create: (schedule: CreateSchedule) =>
        api.post("scheduling/schedules", schedule)
}