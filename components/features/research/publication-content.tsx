"use client";

import { Library } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Container } from "@/components/common/container/container";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import PublicationsList from "@/components/features/research/publications-list";
import { PagedResponse, Publication } from "@/utils/types";

type Props = {
  publicationsResponse: PagedResponse<Publication>;
};

export default function PublicationContent({ publicationsResponse }: Props) {
  const { t } = useTranslation();

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
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Library className="h-4 w-4" />
            {t("publication.indexedCount", { count: publicationsResponse.totalCount })}
          </div>

          <PublicationsList initialResponse={publicationsResponse} />
        </Container>
      </Section>
    </>
  );
}