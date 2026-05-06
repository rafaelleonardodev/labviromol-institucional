import { PublicationCard } from "@/components/features/cards/publication-card";
import { Container } from "@/components/common/container/container";
import { Section } from "@/components/common/section/section";
import { Typography } from "@/components/common/typography/typography";
import { Library } from "lucide-react";

const publications = [
  {
    title:
      "Molecular characterization of emerging viral strains in South America: implications for public health surveillance",
    authors: "Silva MF, Santos JP, Oliveira AC, Mendes CE",
    journal: "Journal of Virology",
    year: 2024,
    doi: "10.1128/JVI.00123-24",
  },
  {
    title:
      "Development and validation of a rapid RT-PCR assay for detection of multiple respiratory viruses",
    authors: "Santos JP, Silva MF, Costa J, Almeida R",
    journal: "Diagnostic Microbiology and Infectious Disease",
    year: 2024,
    doi: "10.1016/j.diagmicrobio.2024.115789",
  },
  {
    title:
      "Epidemiological patterns of arbovirus circulation in urban settings: a five-year surveillance study",
    authors: "Oliveira AC, Silva MF, Ferreira L, Rodrigues F",
    journal: "Emerging Infectious Diseases",
    year: 2023,
    doi: "10.3201/eid2912.231456",
  },
  {
    title: "Genetic diversity and antiviral resistance profiles in chronic viral infections",
    authors: "Mendes CE, Santos JP, Silva MF",
    journal: "Antiviral Research",
    year: 2023,
    doi: "10.1016/j.antiviral.2023.105567",
  },
  {
    title:
      "Viral etiology of acute respiratory infections in pediatric patients: a comprehensive molecular analysis",
    authors: "Oliveira AC, Costa J, Silva MF, Santos JP",
    journal: "Pediatric Infectious Disease Journal",
    year: 2023,
    doi: "10.1097/INF.0000000000003890",
  },
  {
    title:
      "Novel bioinformatics pipeline for automated viral genome assembly and phylogenetic analysis",
    authors: "Santos JP, Almeida R, Mendes CE, Silva MF",
    journal: "BMC Bioinformatics",
    year: 2022,
    doi: "10.1186/s12859-022-04678-9",
  },
  {
    title: "Co-circulation of multiple dengue serotypes and implications for disease severity",
    authors: "Silva MF, Oliveira AC, Santos JP",
    journal: "PLOS Neglected Tropical Diseases",
    year: 2022,
    doi: "10.1371/journal.pntd.0010234",
  },
  {
    title:
      "Molecular epidemiology of influenza virus in tropical regions: challenges and perspectives",
    authors: "Santos JP, Silva MF, Oliveira AC, Mendes CE",
    journal: "Reviews in Medical Virology",
    year: 2022,
    doi: "10.1002/rmv.2345",
  },
];

export default function PublicationsPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="primary" size="lg">
        <Container className="flex flex-col gap-4">
          <Typography variant="h1" as="h1">
            Publicações Científicas
          </Typography>
          <Typography variant="p" as="p" className="max-w-2xl">
            Acesse nossa produção científica publicada em periódicos nacionais e internacionais de
            alto impacto
          </Typography>
        </Container>
      </Section>

      {/* Publications list */}
      <Section size="md">
        <Container className="flex flex-col gap-6">
          {/* Count */}
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Library className="h-4 w-4" />
            {publications.length} publicações indexadas
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            {publications.map((pub) => (
              <PublicationCard key={pub.doi} {...pub} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}