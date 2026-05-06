type Activity = {
  area: string;
  description: string;
}

const useGetActivityAreas = (): Activity[] => {
  const activites: Activity[] = [
    {
      area: "Diagnóstico Molecular",
      description: "Desenvolvimento e aplicação de técnicas moleculares avançadas para detecção e caracterização de vírus em amostras clínicas e ambientais."
    },
    {
      area: "Epidemiologia Viral",
      description: "Investigação da distribuição, dinâmica de transmissão e fatores de risco associados a infecções virais em populações humanas e animais."
    },
    {
      area: "Biologia Molecular de Vírus",
      description: "Estudo dos mecanismos moleculares de replicação, patogênese e evolução viral, incluindo análise de genomas completos e variabilidade genética."
    },
    {
      area: "Inovação Tecnológica",
      description: "Desenvolvimento de novas ferramentas diagnósticas, kits moleculares e métodos de triagem para aplicação em saúde pública e pesquisa."
    },
    {
      area: "Formação Acadêmica",
      description: "Capacitação de alunos de graduação e pós-graduação em técnicas de virologia molecular e metodologia científica."
    },
    {
      area: "Colaborações Científicas",
      description: "Parcerias com instituições nacionais e internacionais para desenvolvimento de projetos colaborativos e intercâmbio científico."
    }
  ];

  return activites;
}

export default useGetActivityAreas;