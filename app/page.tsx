import { Card, CardContent, CardHeader } from "@/components/common/card";
import { IconCard } from "@/components/common/card/icon-card";
import Meyer from "@/public/icons/meyer";
import OpenBook from "@/public/icons/open-book";
import People from "@/public/icons/people";
import Image from "next/image";

export default function Home() {
  return (
    <>  
      <h1>aaaaaaaaaaaaaa</h1>
      <div>
        Teste
      </div>
      <section 
        className="
          flex
          gap-4
        "
      >
        <IconCard
          title="Nossa Equipe"
          description="Conheça os pesquisadores e profissionais dedicados à excelência científica."
          cta="Ver equipe" 
          icon={<People/>}
          href="/team"    
        />
        <IconCard
          icon={<Meyer/>}
          title="Pesquisas em Andamento"
          description="Explore nossos projetos de pesquisa e suas contribuições científicas."
          cta="Ver pesquisas"
          href="/research"
        />
        <IconCard
          icon={<OpenBook/>}
          title="Publicações Científicas"
          description="Acesse nossas publicações em periódicos científicos de alto impacto."
          cta="Ver publicações"
          href="/publish"
        />
      </section>
    </>
  );
}
