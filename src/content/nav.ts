export type NavItem = {
  slug: string;
  href: string;
  label: string;
  icon: string;
};

export const NAV_ITEMS: readonly NavItem[] = [
  { slug: 'home',      href: '/',          label: 'Bienvenidos / Benvenuti', icon: 'home' },
  { slug: 'argentina', href: '/argentina', label: 'Argentina',     icon: 'public' },
  // { slug: 'faq',       href: '/faq',       label: 'Preguntas / Domande',           icon: 'help' },
  // { slug: 'rsvp',      href: '/rsvp',      label: 'RSVP',          icon: 'mail' },
  { slug: 'regalo',    href: '/regalo',    label: 'Lista',        icon: 'featured_seasonal_and_gifts' },
] as const;
