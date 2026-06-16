"use client"

import { IconCard } from "@/components/common/cards/icon-card";
import { Container } from "@/components/common/container/container";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ContactContent() {
  const {t} = useTranslation();

  return (
    <>
      <Section variant="primary" size="lg">
        <Container className="flex flex-col gap-4">
          <Typography variant="h1" as="h1">
            {t("contact.title")}
          </Typography>
          <Typography variant="p" as="p" className="max-w-2xl">
            {t("contact.description")}
          </Typography>
        </Container>
      </Section>
      <Section size="md">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 [&>*]:h-full">
            <IconCard title={t("contact.phone.title")} icon={<Phone />}>
              <p className="text-sm text-muted-foreground">
                (+55) 41 3360-7950
              </p>
              <p className="text-sm text-muted-foreground">
                {t("contact.phone.schedule")}
              </p>
            </IconCard>
            <IconCard title={t("contact.address.title")} icon={<MapPin />}>
              <p className="text-sm text-muted-foreground">
                {t("contact.address.street")}
                <br />
                {t("contact.address.city")}
                <br />
                {t("contact.address.zipCode")}
              </p>
            </IconCard>
            <IconCard title={t("contact.email.title")} icon={<Mail />}>
              <p className="text-sm text-muted-foreground">
                labpesquisahcufpr@gmail.com
              </p>
              <p className="text-sm text-muted-foreground">
                {t("contact.email.responseTime")}
              </p>
            </IconCard>
            <IconCard title={t("contact.hours.title")} icon={<Clock />}>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground font-medium">
                  {t("contact.hours.weekdaysLabel")}
                </strong>{" "}
                {t("contact.hours.weekdaysValue")}
              </p>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground font-medium">
                  {t("contact.hours.weekendsLabel")}
                </strong>{" "}
                {t("contact.hours.weekendsValue")}
              </p>
            </IconCard>
          </div>
        </Container>
      </Section>
      <Section size="md" className="py-0">
        <Container>
          <div className="overflow-hidden rounded-xl border border-border">
            <iframe
              title={t("contact.map.title")}
              src="https://www.google.com/maps?q=108%20Agostinho%20Le%C3%A3o%20Junior%20Avenue,%20Curitiba,%20Paran%C3%A1,%2080030-110&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
      </Container>
      </Section>
    </>
  );
}