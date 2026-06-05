import { researchService } from "@/services/research-service";
import { Member } from "@/utils/types";
import TeamContent from "@/components/features/team/team-content";

export default async function TeamPage() {
  let members: Member[] = [];
  let error = null;

  try {
    members = await researchService.getAllMembers();
  } catch (err) {
    error = err instanceof Error ? err.message : "Erro ao buscar membros";
    console.error("Erro ao buscar membros:", err);
  }

  return (
    <TeamContent members={members} />
  );
}