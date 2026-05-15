export const SITE = {
  couple: 'Elena & Federico',
  tagline: {
    it: 'Un amore, tre feste',
    es: 'Un amor, tres fiestas',
  },
  years: '2026 · 2027 · 2028',
  ceremony: {
    dateIt: '29 maggio 2026',
    dateEs: '29 de mayo de 2026',
    time: '11:30',
    venue: "Sala Rossa, Palazzo d'Accursio",
    address: 'Piazza Maggiore 6, 40124 Bologna, Italia',
  },
  rsvpDeadline: '2026-03-15',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://weddsite.vercel.app',
  ogImage: '/images/11.jpg',
} as const;
