type Activity = {
  areaKey: string;
  descriptionKey: string;
}

const useGetActivityAreas = (): Activity[] => {
  return [
    {
      areaKey: "about.activityAreas.items.molecularDiagnosis.title",
      descriptionKey: "about.activityAreas.items.molecularDiagnosis.description"
    },
    {
      areaKey: "about.activityAreas.items.viralEpidemiology.title",
      descriptionKey: "about.activityAreas.items.viralEpidemiology.description"
    },
    {
      areaKey: "about.activityAreas.items.molecularBiology.title",
      descriptionKey: "about.activityAreas.items.molecularBiology.description"
    },
    {
      areaKey: "about.activityAreas.items.technologicalInnovation.title",
      descriptionKey: "about.activityAreas.items.technologicalInnovation.description"
    },
    {
      areaKey: "about.activityAreas.items.academicTraining.title",
      descriptionKey: "about.activityAreas.items.academicTraining.description"
    },
    {
      areaKey: "about.activityAreas.items.scientificCollaborations.title",
      descriptionKey: "about.activityAreas.items.scientificCollaborations.description"
    }
  ];
};

export default useGetActivityAreas;