import { notFound } from "next/navigation";
import { assetsService } from "@/services/assets-service";
import EquipmentDetail from "@/components/features/equipment/equipment-detail";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EquipmentDetailPage({ params }: Props) {
  const { id } = await params;
  const equipment = await assetsService.getById(id);
  
  if (!equipment) notFound();

  return (
    <EquipmentDetail equipment={equipment}/>
  );
}