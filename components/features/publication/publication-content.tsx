"use client"

import { Container } from "@/components/common/container/container";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import { Library } from "lucide-react";
import PublicationsList from "@/components/features/research/publications-list";
import { Publication } from "@/utils/types";
import { useTranslation } from "react-i18next";

type Props = {
  publications: Publication[];
}

export default function PublicationContent({publications}: Props) {
  const {t} = useTranslation();
  return (
    <>
      {/* Hero */}
      <Section variant="primary" size="lg">
        <Container className="flex flex-col gap-4">
          <Typography variant="h1" as="h1">
            {t("publication.title")}
          </Typography>
          <Typography variant="p" as="p" className="max-w-2xl">
            {t("publication.description")}
          </Typography>
        </Container>
      </Section>

      {/* Publications list */}
      <Section size="md">
        <Container className="flex flex-col gap-6">
          {/* Count */}
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Library className="h-4 w-4" />
            {t("publication.indexedCount", { count: publications.length })}
          </div>

          <PublicationsList publications={publications} />
        </Container>
      </Section>
    </>
  );
}