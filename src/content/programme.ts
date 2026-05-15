export type ProgrammeEntry = {
  time: string;
  titleIt: string;
  titleEs: string;
  descriptionIt: string;
  icon: string;
};

export const PROGRAMME: readonly ProgrammeEntry[] = [
  {
    time: '10:30',
    titleIt: 'Arrivo ospiti',
    titleEs: 'Llegada de invitados',
    descriptionIt: 'Caffè di benvenuto in Piazza Maggiore prima della cerimonia.',
    icon: 'local_cafe',
  },
  {
    time: '11:30',
    titleIt: 'Cerimonia',
    titleEs: 'Ceremonia',
    descriptionIt: "Sala Rossa, Palazzo d'Accursio. Cerimonia civile, circa 30 minuti.",
    icon: 'favorite',
  },
  {
    time: '12:30',
    titleIt: 'Foto & aperitivo',
    titleEs: 'Fotos & aperitivo',
    descriptionIt: 'Brindisi e ritratti in piazza, poi spostamento verso il ristorante.',
    icon: 'photo_camera',
  },
  {
    time: '13:30',
    titleIt: 'Pranzo',
    titleEs: 'Almuerzo',
    descriptionIt: "Pranzo lungo all'italiana, fatto di brindisi, racconti e tortellini.",
    icon: 'restaurant',
  },
] as const;
