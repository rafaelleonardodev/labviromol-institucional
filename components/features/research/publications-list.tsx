"use client";

import List from "@/components/common/list/list";
import { PublicationCard } from "@/components/features/cards/publication-card";
import { PagedResponse, Publication } from "@/utils/types";
import { fetchPublicationsPage } from "@/actions/research-actions";

const MIN_VISIBLE = 6;

type Props = {
  initialResponse: PagedResponse<Publication>;
};

export default function PublicationsList({ initialResponse }: Props): React.ReactNode {
  return (
    <List
      initialItems={initialResponse.data}
      hasNextPage={initialResponse.hasNextPage}
      currentPage={initialResponse.currentPage}
      minVisible={MIN_VISIBLE}
      fetchMore={fetchPublicationsPage}
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