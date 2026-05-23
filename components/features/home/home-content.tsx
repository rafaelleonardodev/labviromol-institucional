"use client";

import { useTranslation } from "react-i18next";
import { ArrowRight, BookOpen, Calendar, FlaskConical, Microscope, Users } from "lucide-react";
import Link from "next/link";

import { IconCard } from "@/components/common/cards/icon-card";
import { Container } from "@/components/common/container/container";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import { Button } from "@/components/ui/button";

export function HomeContent() {
  const { t } = useTranslation();

  return (
    <>
      <Section
        bgImage="/images/hero.jpg"
        size="xl"
        className="text-primary-foreground"
      >
        <Container className="flex flex-col gap-4">
          <Typography variant="hero" as="h1">
            {t("home.hero.title")}
          </Typography>
          <Typography variant="h3" as="h3" className="max-w-3xl text-justify sm:">
            {t("home.hero.subtitle")}
          </Typography>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button asChild variant="secondary">
              <Link href="/schedule" className="flex gap-2">
                <Calendar />
                {t("home.cta.schedule")}
              </Link>
            </Button>
            <Button asChild variant="primary-soft">
              <Link href="/about" className="flex gap-2">
                {t("home.cta.about")}
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          <div className="h-full">
            <IconCard
              title={t("home.cards.team.title")}
              cta={t("home.cards.team.cta")}
              icon={<Users />}
              href="/team"
              className="h-full"
            >
              <Typography variant="muted" as="p">
                {t("home.cards.team.description")}
              </Typography>
            </IconCard>
          </div>

          <div className="h-full">
            <IconCard
              icon={<FlaskConical />}
              title={t("home.cards.research.title")}
              cta={t("home.cards.research.cta")}
              href="/research"
              className="h-full"
            >
              <Typography variant="muted" as="p">
                {t("home.cards.research.description")}
              </Typography>
            </IconCard>
          </div>

          <div className="h-full">
            <IconCard
              icon={<BookOpen />}
              title={t("home.cards.publications.title")}
              cta={t("home.cards.publications.cta")}
              href="/publications"
              className="h-full"
            >
              <Typography variant="muted" as="p">
                {t("home.cards.publications.description")}
              </Typography>
            </IconCard>
          </div>
        </Container>
      </Section>

      <Section className="bg-primary-foreground">
        <Container className="flex flex-col align-center items-center gap-4 text-justify sm:text-center">
          <div
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary"
            style={{ color: "oklch(0.98 0.01 170)" }}
          >
            <Microscope />
          </div>
          <Typography variant="h2" as="h2">
            {t("home.mission.title")}
          </Typography>
          <Typography variant="body" className="max-w-3xl" as="p">
            {t("home.mission.description")}
          </Typography>
        </Container>
      </Section>
    </>
  );
}