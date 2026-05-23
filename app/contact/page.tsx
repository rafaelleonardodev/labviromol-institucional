import { IconCard } from "@/components/common/cards/icon-card";
import { Container } from "@/components/common/container/container";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="primary" size="lg">
        <Container className="flex flex-col gap-4">
          <Typography variant="h1" as="h1">
            Contato
          </Typography>
          <Typography variant="p" as="p" className="max-w-2xl">
            Entre em contato conosco para dúvidas, colaborações ou informações sobre o laboratório
          </Typography>
        </Container>
      </Section>

      {/* Cards */}
      <Section size="md">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 [&>*]:h-full">

            {/* Telefone */}
            <IconCard title="Telefone" icon={<Phone />}>
              <p className="text-sm text-muted-foreground">(+55) 41 3360-7950</p>
              <p className="text-sm text-muted-foreground">Seg-Sex: 9h às 16h</p>
            </IconCard>

            {/* Endereço */}
            <IconCard title="Endereço" icon={<MapPin />}>
              <p className="text-sm text-muted-foreground">
                Av. Agostinho Leão Junior, 108 - Alto da Glória<br />
                Curitiba - PR<br />
                CEP 80030-110
              </p>
            </IconCard>

            {/* E-mail */}
            <IconCard title="E-mail" icon={<Mail />}>
              <p className="text-sm text-muted-foreground">labpesquisahcufpr@gmail.com</p>
              <p className="text-sm text-muted-foreground">Resposta em até 48 horas úteis</p>
            </IconCard>

            {/* Horário */}
            <IconCard title="Horário de Funcionamento" icon={<Clock />}>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground font-medium">Segunda a Sexta:</strong> 9h às 16h
              </p>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground font-medium">Finais de semana e Feriados:</strong> Fechado
              </p>
            </IconCard>

          </div>
        </Container>
      </Section>
    </>
  );
}