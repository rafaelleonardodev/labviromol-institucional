"use client"

import Image from "next/image";
import { Tag, Barcode, FlaskConical, Info, ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Section } from "@/components/common/section/section";
import { Container } from "@/components/common/container/container";
import { Typography } from "@/components/common/typography/typography";
import { Equipment } from "@/utils/types";
import { useTranslation } from "react-i18next";

type Props = {
  equipment: Equipment;
}

export default function EquipmentDetail({equipment}: Props) {
  const {t} = useTranslation();

  const details = [
    {
      label: t("equipment.details.model"),
      value: equipment.model,
      icon: <FlaskConical className="w-4 h-4" />
    },
    {
      label: t("equipment.details.brand"),
      value: equipment.brand,
      icon: <Tag className="w-4 h-4" />
    },
    {
      label: t("equipment.details.code"),
      value: equipment.code,
      icon: <Barcode className="w-4 h-4" />
    },
  ];

  return (
    <>
      {/* HERO */}
      <Section variant="primary" size="sm">
        <Container>
          <Link
            href="/equipments"
            className="inline-flex items-center gap-1.5 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("equipment.back")}
          </Link>
          <Typography variant="hero" as="h1">
            {equipment.name}
          </Typography>
        </Container>
      </Section>

      {/* CONTENT */}
      <Section size="md">
        <Container className="flex flex-col lg:flex-row gap-12">

          {/* IMAGE */}
          <div className="w-full lg:w-1/2 shrink-0">
            <div className="
              relative aspect-square w-full
              rounded-xl overflow-hidden
              bg-muted border border-border
            ">
              {equipment.imageUrl ? (
                <Image
                  src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${equipment.imageUrl}`}
                  alt={t("common.image.alt", {
                    name: equipment.name,
                    object: t("common.equipment")
                  })}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="
                  absolute inset-0 flex flex-col items-center justify-center gap-3
                  text-muted-foreground
                ">
                  <FlaskConical className="w-16 h-16 opacity-20" />
                  <span className="text-sm opacity-40">
                    {t("common.image.unavailable")}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* DATA */}
          <div className="flex flex-col gap-8 flex-1">

            {/* DETAILS GRID */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-primary" />
                <Typography variant="h3" as="h2">
                  {t("equipment.details.title")}
                </Typography>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {details.map(({ label, value, icon }) => (
                  <div
                    key={label}
                    className="
                      flex flex-col gap-1
                      p-4 rounded-lg
                      bg-card border border-border
                    "
                  >
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      {icon}
                      <span className="text-xs font-medium uppercase tracking-wide">
                        {label}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* DESCRIPTION */}
            {equipment.description && (
              <div className="flex flex-col gap-3">
                <Typography variant="h3" as="h2">
                  {t("equipment.details.description")}
                </Typography>
                <Typography variant="body" as="p" className="text-muted-foreground leading-relaxed">
                  {equipment.description}
                </Typography>
              </div>
            )}
          </div>

        </Container>
      </Section>
    </>
  );
}