import type { Metadata } from 'next';
import { RsvpForm } from '@/sections/rsvp/RsvpForm';

export const metadata: Metadata = {
  title: 'RSVP',
  description: 'Conferma la tua presenza. Confirmá tu presencia.',
};

export default function RsvpPage() {
  return (
    <div className="mx-auto flex w-full max-w-[640px] items-center justify-center px-gutter pb-section-gap pt-space-8">
      <div className="relative w-full border border-gold-light bg-bg-card p-space-8 shadow-sm md:p-space-16">
        <span className="absolute left-0 top-0 h-8 w-8 border-l border-t border-gold-light opacity-60" />
        <span className="absolute right-0 top-0 h-8 w-8 border-r border-t border-gold-light opacity-60" />
        <span className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-gold-light opacity-60" />
        <span className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-gold-light opacity-60" />

        <header className="mb-space-8 flex flex-col items-center text-center">
          <span className="mb-space-4 h-px w-12 bg-gold" />
          <p className="font-bilingual-it text-bilingual-it uppercase tracking-wider text-terracotta-dark">
            Rispondi
          </p>
          <p lang="es" className="font-bilingual-es text-bilingual-es italic uppercase tracking-wider text-terracotta-dark">
            Responde
          </p>
          <h1 className="mt-space-2 font-section-h2 text-section-h2 italic text-primary">RSVP</h1>
        </header>

        <RsvpForm />
      </div>
    </div>
  );
}
