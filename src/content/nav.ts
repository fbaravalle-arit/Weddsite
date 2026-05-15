export type NavItem = {
  slug: string;
  href: string;
  label: string;
  icon: string;
};

export const NAV_ITEMS: readonly NavItem[] = [
  { slug: 'home',      href: '/',          label: 'Home · Inicio', icon: 'home' },
  { slug: 'argentina', href: '/argentina', label: 'Argentina',     icon: 'public' },
  { slug: 'faq',       href: '/faq',       label: 'FAQ',           icon: 'help' },
  { slug: 'rsvp',      href: '/rsvp',      label: 'RSVP',          icon: 'mail' },
  { slug: 'regalo',    href: '/regalo',    label: 'Regalo',        icon: 'featured_seasonal_and_gifts' },
] as const;
