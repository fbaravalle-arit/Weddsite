import { HeroCollage } from '@/components/HeroCollage';
import { Reveal } from '@/components/Reveal';
import { Invitation } from '@/sections/home/Invitation';
import { CeremonyCard } from '@/sections/home/CeremonyCard';

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-section-gap px-gutter pb-section-gap pt-space-8">
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
