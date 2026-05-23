"use client";

import List from "@/components/common/list/list";
import { ResearchCard } from "@/components/features/cards/research-card";
import { Project } from "@/utils/types";

type Props = {
  projects: Project[];
};

export default function ProjectsList({ projects }: Props): React.ReactNode {
  return (
    <List
      list={projects}
      showLimit={6}
      buttonText="Ver mais"
      listingStyle="flex flex-col gap-4"
      renderItem={(project) => (
        <ResearchCard
          key={project.id}
          title={project.title}
          description={project.description}
          responsible={project.researchLead}
          funding={project.funding}
          status={project.status}
        />
      )}
    />
  );
}