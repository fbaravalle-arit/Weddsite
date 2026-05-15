import type { Metadata } from 'next';
import { HeroCollage } from '@/components/HeroCollage';
import { Reveal } from '@/components/Reveal';
import { Invitation } from '@/sections/home/Invitation';
import { CeremonyCard } from '@/sections/home/CeremonyCard';
import { SITE } from '@/content/site';

export const metadata: Metadata = {
  title: {
    absolute: 'Elena & Federico — Matrimonio Bologna 2026 · Boda Argentina 2027',
  },
  description:
    "Benvenuti al matrimonio di Elena e Federico. Tre celebrazioni: cerimonia civile a Bologna il 29 maggio 2026, festa in Argentina nel 2027, anniversario in Italia nel 2028. Programma, RSVP e informazioni pratiche.",
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-section-gap px-gutter pb-section-gap pt-space-8">
      <h1 className="sr-only">
        {SITE.couple} — {SITE.tagline.it} · {SITE.tagline.es}
      </h1>

      <Reveal>
        <HeroCollage />
      </Reveal>

      <Reveal className="mx-auto max-w-[600px]">
        <Invitation />
      </Reveal>

      <Reveal className="mx-auto w-full max-w-4xl" delayMs={80}>
        <CeremonyCard />
      </Reveal>
    </div>
  );
}
