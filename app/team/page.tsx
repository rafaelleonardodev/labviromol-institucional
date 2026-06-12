import { researchService } from "@/services/research-service";
import { Member } from "@/utils/types";
import TeamContent from "@/components/features/team/team-content";
import { getLocale } from "@/lib/locale";

export default async function TeamPage() {
  const language = await getLocale();
  let members: Member[] = [];

  try {
    const response = await researchService.getAllMembers(language);
    members = response.data;
  } catch (err) {
    console.error("Erro ao buscar membros:", err);
  }

  return <TeamContent members={members} />;
}