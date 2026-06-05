"use client";

import List from "@/components/common/list/list";
import { PublicationCard } from "@/components/features/cards/publication-card";
import { Publication } from "@/utils/types";
import { useTranslation } from "react-i18next";

type Props = {
  publications: Publication[];
};

export default function PublicationsList({ publications }: Props): React.ReactNode {
  const {t} = useTranslation();
  return (
    <List
      list={publications}
      showLimit={6}
      listingStyle="flex flex-col gap-4"
      renderItem={(publication) => (
        <PublicationCard
          key={publication.id}
          title={publication.title}
          authors={publication.authors}
          journal={publication.publishedOn}
          year={publication.publicationDate}
          doi={publication.doi}
        />
      )}
    />
  );
}