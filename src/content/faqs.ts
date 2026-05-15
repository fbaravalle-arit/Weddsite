export type FaqGroup = {
  title: string;
  items: ReadonlyArray<{
    questionIt: string;
    questionEs: string;
    answerIt: string;
    accent?: boolean;
  }>;
};

export const FAQ_GROUPS: readonly FaqGroup[] = [
  {
    title: 'Dress code',
    items: [
      {
        questionIt: 'Cosa indosso a Bologna?',
        questionEs: '¿Qué me pongo en Bolonia?',
        answerIt:
          'Formale ma rilassato — abito o completo per gli uomini, abito da cocktail o tailleur elegante per le donne. Maggio a Bologna è mite ma variabile; uno scialle leggero può servire dentro la Sala Rossa.',
      },
      {
        questionIt: 'E in Argentina?',
        questionEs: '¿Y en Argentina?',
        answerIt:
          "Elegante ma comoda. La festa è all'aperto in stile estancia: tessuti leggeri, abiti da sole, scarpe basse o zeppe (occhio all'erba). Maggio è autunno a Buenos Aires — portate qualcosa per la sera.",
      },
    ],
  },
  {
    title: 'Accompagnatori · Acompañantes',
    items: [
      {
        questionIt: 'Posso portare un accompagnatore?',
        questionEs: '¿Puedo llevar un acompañante?',
        answerIt:
          "Le nostre celebrazioni sono intime. Se sull'invito appare il tuo nome con «e accompagnatore / y acompañante», sì. Altrimenti chiediamo gentilmente che a partecipare siano solo le persone nominate.",
      },
      {
        questionIt: 'I bambini sono invitati?',
        questionEs: '¿Están invitados los niños?',
        answerIt:
          "I bambini sono benvenuti se nominati nella busta dell'invito. Per dubbi, scriveteci direttamente.",
      },
    ],
  },
  {
    title: 'RSVP',
    items: [
      {
        questionIt: 'Quando devo confermare?',
        questionEs: '¿Cuándo es la fecha límite?',
        answerIt:
          'Vi chiediamo di confermare entro il <strong>15 marzo 2026</strong> dalla pagina RSVP.',
        accent: true,
      },
    ],
  },
] as const;
