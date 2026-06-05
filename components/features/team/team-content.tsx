"use client";

import { Member } from "@/utils/types";
import { useTranslation } from "react-i18next";
import { Container } from "@/components/common/container/container";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import TeamList from "@/components/features/team/team-list";
import Link from "next/link";

type Props = {
  members: Member[]
}

const opportunities = [
  "team.joinTeam.opportunities.undergraduateResearch",
  "team.joinTeam.opportunities.mastersPhd",
  "team.joinTeam.opportunities.postdoctoral",
  "team.joinTeam.opportunities.technicalInternship"
];

export default function TeamContent({members} : Props) {

  const {t} = useTranslation(); 
  
  return (
    <>
      {/* Hero */}
      <Section variant="primary" size="lg">
        <Container className="flex flex-col gap-4">
          <Typography variant="h1" as="h1">
            {t("team.hero.title")}
          </Typography>

          <Typography
            variant="p"
            as="p"
            className="max-w-2xl"
          >
            {t("team.hero.subtitle")}
          </Typography>
        </Container>
      </Section>

      {/* Members Grid */}
      <Section size="md">
        <Container>
          <TeamList members={members} />
        </Container>
      </Section>

      {/* Join CTA */}
      <Section size="md">
        <Container>
          <div className="rounded-xl border border-border bg-card p-8 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted text-foreground">
                <Users className="h-5 w-5" />
              </div>
              <Typography variant="h3" as="h3">
                {t("team.joinTeam.title")}
              </Typography>
            </div>

            <Typography
              variant="body"
              as="p"
              className="max-w-2xl text-muted-foreground"
            >
              {t("team.joinTeam.description")}
            </Typography>

            <div className="flex flex-col gap-2">
              <Typography
                variant="body"
                as="p"
                className="font-semibold"
              >
                {t("team.joinTeam.opportunitiesTitle")}
              </Typography>

              <ul className="flex flex-col gap-1.5 list-disc list-inside">
                {opportunities.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground"
                  >
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <Button asChild variant="secondary" size="default">
                <Link href="/contact" className="flex gap-2">
                  {t("team.joinTeam.contact")}
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}