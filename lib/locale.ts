import { cookies } from "next/headers";

export async function getLocale(): Promise<string> {
  const cookieStore = await cookies();
  const lang = cookieStore.get("i18next")?.value;
  // normaliza "pt-BR" → "pt", aceita só "pt" ou "en"
  const normalized = lang?.slice(0, 2);
  return normalized === "en" ? "en" : "pt";
}