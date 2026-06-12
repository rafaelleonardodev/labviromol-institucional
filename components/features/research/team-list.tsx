"use client";

import List from "@/components/common/list/list";
import { MemberCard } from "@/components/features/cards/member-card";
import { Member, PagedResponse } from "@/utils/types";
import { fetchMembersPage } from "@/actions/research-actions";

const MIN_VISIBLE = 9;

type Props = {
  initialResponse: PagedResponse<Member>;
};

export default function TeamList({ initialResponse }: Props): React.ReactNode {
  return (
    <List
      initialItems={initialResponse.data}
      hasNextPage={initialResponse.hasNextPage}
      currentPage={initialResponse.currentPage}
      minVisible={MIN_VISIBLE}
      fetchMore={fetchMembersPage}
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