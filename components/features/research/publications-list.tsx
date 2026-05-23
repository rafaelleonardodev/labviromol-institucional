"use client";

import List from "@/components/common/list/list";
import { PublicationCard } from "@/components/features/cards/publication-card";
import { Publication } from "@/utils/types";

type Props = {
  publications: Publication[];
};

export default function PublicationsList({ publications }: Props): React.ReactNode {
  return (
    <List
      list={publications}
      showLimit={6}
      buttonText="Ver mais"
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