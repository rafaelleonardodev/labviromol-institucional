// app/api/schedules/route.ts
import { scheduleService } from "@/services/schedule-service";
import { NextRequest, NextResponse } from "next/server";

// app/api/schedules/route.ts
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    await scheduleService.create(body);

    return NextResponse.json(
      { success: true, message: "Agendamento criado com sucesso" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 500 }
    );
  }
}