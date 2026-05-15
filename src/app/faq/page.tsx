import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { FaqAccordion } from '@/sections/faq/FaqAccordion';

export const metadata: Metadata = {
  title: 'FAQ — Dress code, accompagnatori, RSVP e dettagli pratici',
  description:
    "Risposte alle domande più frequenti dei nostri ospiti: cosa indossare a Bologna e in Argentina, se è possibile portare un accompagnatore, se i bambini sono invitati e quando confermare l'RSVP. Preguntas frecuentes sobre nuestras celebraciones.",
  alternates: { canonical: '/faq' },
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
