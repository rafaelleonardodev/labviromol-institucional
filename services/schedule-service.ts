import { CreateSchedule } from "@/utils/types";
import { api } from "./api/client";

const scheduleBaseUrl = "scheduling/public"

export const scheduleService = {
    create: (schedule: CreateSchedule) =>
        api.post(scheduleBaseUrl+"/schedules", schedule)
}