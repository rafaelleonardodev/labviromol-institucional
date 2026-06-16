import { notFound } from "next/navigation";
import { assetsService } from "@/services/assets-service";
import EquipmentDetail from "@/components/features/equipment/equipment-detail";
import { getLocale } from "@/lib/locale";

type Props = { params: Promise<{ id: string }> };

export default async function EquipmentDetailPage({ params }: Props) {
  const { id } = await params;
  const language = await getLocale();
  const equipment = await assetsService.getById(id, language);

  if (!equipment) notFound();
  return <EquipmentDetail key={language} equipment={equipment} />;
}