"use client"
import { IconCard } from "@/components/common/cards/icon-card";
import { SimpleCard } from "@/components/common/cards/simple-card";
import { Container } from "@/components/common/container/container";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import useGetActivityAreas from "@/hook/use-get-activity-areas";
import { BookOpen, Shield, Target } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutContent() {
  const activities = useGetActivityAreas();
  const { t } = useTranslation();

  return (
    <>
      <Section size="lg" variant="primary">
        <Container 
          className="
           flex
           flex-col
           gap-2
          "
        >
          <Typography variant="h1" as="h1">
            {t("about.hero.title")}
          </Typography>

          <Typography variant="p" as="p">
            {t("about.hero.subtitle")}
          </Typography>
        </Container>
      </Section>
      <Section>
        <Container
          className="
           flex
           flex-col
           gap-8
          "
        >
          <div 
            className="
              grid md:grid-cols-2 
              gap-4
            "
          >
            <IconCard
              icon={<Target />}
              title={t("about.mission.title")}
            >
              <Typography variant="muted" as="p">
                {t("about.mission.description")}
              </Typography>
            </IconCard>
            <IconCard
              icon={<BookOpen />}
              title={t("about.vision.title")}
            >
              <Typography variant="muted" as="p">
                {t("about.vision.description")}
              </Typography>
            </IconCard>
          </div>
          <SimpleCard title={t("about.history.title")}>
            <div className="flex flex-col gap-2">
              <Typography variant="muted">
                {t("about.history.paragraph1")}
              </Typography>

              <Typography variant="muted">
                {t("about.history.paragraph2")}
              </Typography>

              <Typography variant="muted">
                {t("about.history.paragraph3")}
              </Typography>
            </div>
          </SimpleCard>
          <div
            className="
             flex
             flex-col
             gap-4
            "
          >
            <Typography variant="h3">
              {t("about.activityAreas.title")}
            </Typography>

            <div
              className="
               grid
               gap-4
               grid-cols-1 
               sm:grid-cols-2 
               md:grid-cols-3
              "
            >
              {activities.map((act, index) => {
                return (
                  <SimpleCard
                    key={index}
                    title={t(act.areaKey)}
                  >
                    <Typography variant="muted">
                      {t(act.descriptionKey)}
                    </Typography>
                  </SimpleCard>
                );
              })}
            </div>
          </div>
          <IconCard
            icon={<Shield />}
            title={t("about.biosafety.title")}
          >
            <div
              className="
                flex
                flex-col
                gap-4
              "
            >
              <Typography variant="muted" as="p">
                {t("about.biosafety.description")}
              </Typography>

              <div className="bg-muted p-4 rounded flex flex-col gap-2">
                <Typography as="p">
                  {t("about.biosafety.safetyRulesTitle")}
                </Typography>

                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <Typography variant="muted" as="p">
                      {t("about.biosafety.rules.ppe")}
                    </Typography>
                  </li>

                  <li>
                    <Typography variant="muted" as="p">
                      {t("about.biosafety.rules.cabinet")}
                    </Typography>
                  </li>

                  <li>
                    <Typography variant="muted" as="p">
                      {t("about.biosafety.rules.autoclave")}
                    </Typography>
                  </li>

                  <li>
                    <Typography variant="muted" as="p">
                      {t("about.biosafety.rules.training")}
                    </Typography>
                  </li>

                  <li>
                    <Typography variant="muted" as="p">
                      {t("about.biosafety.rules.contingency")}
                    </Typography>
                  </li>

                  <li>
                    <Typography variant="muted" as="p">
                      {t("about.biosafety.rules.access")}
                    </Typography>
                  </li>

                  <li>
                    <Typography variant="muted" as="p">
                      {t("about.biosafety.rules.records")}
                    </Typography>
                  </li>
                </ul>
              </div>

              <Typography variant="muted" as="p">
                {t("about.biosafety.footer")}
              </Typography>
            </div>
          </IconCard>
        </Container>
      </Section>
    </>
  )
}