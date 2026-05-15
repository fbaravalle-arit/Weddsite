import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { FaqAccordion } from '@/sections/faq/FaqAccordion';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Domande frequenti sulle nostre celebrazioni. Preguntas frecuentes sobre nuestras celebraciones.',
};

export default function FaqPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-section-gap px-gutter pb-section-gap pt-space-8">
      <PageHeader
        eyebrowIt="Domande frequenti"
        eyebrowEs="Preguntas frecuentes"
        titleIt="FAQ"
      />
      <Reveal>
        <FaqAccordion />
      </Reveal>
    </div>
  );
}
