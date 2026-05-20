import type { Metadata } from 'next';
import { HeroCollage } from '@/components/HeroCollage';
import { Reveal } from '@/components/Reveal';
import { Invitation } from '@/sections/home/Invitation';
import { CeremonyCard } from '@/sections/home/CeremonyCard';
import { SITE } from '@/content/site';

export const metadata: Metadata = {
  title: { absolute: 'Elena & Federico' },
  description:
    "Benvenuti al matrimonio di Elena e Federico.",
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <h1 className="sr-only">
        {SITE.couple} — {SITE.tagline.it} · {SITE.tagline.es}
      </h1>
      <div className="mx-auto w-full max-w-7xl px-gutter pb-section-gap pt-space-2">
        <Reveal>
          <HeroCollage />
        </Reveal>

        <Reveal className="mx-auto mt-space-8 max-w-5xl">
          <Invitation />
        </Reveal>

        <Reveal className="mx-auto mt-space-8 w-full max-w-4xl" delayMs={80}>
          <CeremonyCard />
        </Reveal>
      </div>
    </>
  );
}
