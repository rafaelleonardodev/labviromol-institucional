"use client";

import List from "@/components/common/list/list";
import { ResearchCard } from "@/components/features/cards/research-card";
import { PagedResponse, Project } from "@/utils/types";
import { fetchProjectsPage } from "@/actions/research-actions";

const MIN_VISIBLE = 6;

type Props = {
  initialResponse: PagedResponse<Project>;
};

export default function ProjectsList({ initialResponse }: Props): React.ReactNode {
  return (
    <List
      initialItems={initialResponse.data}
      hasNextPage={initialResponse.hasNextPage}
      currentPage={initialResponse.currentPage}
      minVisible={MIN_VISIBLE}
      fetchMore={fetchProjectsPage}
      listingStyle="flex flex-col gap-4"
      renderItem={(project) => (
        <ResearchCard
          key={project.id}
          title={project.title}
          description={project.description}
          responsible={project.researchLead}
          partner={project.partner}
          status={project.status}
        />
      )}
    />
  );
}