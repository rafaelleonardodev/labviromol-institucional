"use client";

import List from "@/components/common/list/list";
import { MemberCard } from "@/components/features/cards/member-card";
import { Member } from "@/utils/types";

type Props = {
  members: Member[];
};

export default function  TeamList({ members }: Props): React.ReactNode {
  return (
    <List
      list={members}
      showLimit={9}
      buttonText="Ver mais"
      listingStyle="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      renderItem={(member) => (
        <MemberCard
          key={member.id}
          name={member.displayName}
          role={member.position}
          degree={member.degreeLevel}
          lattesUrl={member.lattesUrl}
        />
      )}
    />
  );
}