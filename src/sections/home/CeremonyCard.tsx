// import Link from 'next/link';
// import { SITE } from '@/content/site';

export function CeremonyCard() {
  return (
    <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center space-y-space-4 overflow-hidden rounded border border-gold-light bg-bg-card p-space-4 text-center shadow-sm md:p-space-8">
      <span className="absolute left-4 top-4 h-8 w-8 border-l border-t border-gold-light opacity-60" />
      <span className="absolute right-4 top-4 h-8 w-8 border-r border-t border-gold-light opacity-60" />
      <span className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-gold-light opacity-60" />
      <span className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-gold-light opacity-60" />

      <div className="space-y-space-2">
        <h2 className="font-section-h2 text-section-h2 italic text-text-primary">
          La Fiesta
        </h2>
      </div>

      <div className="space-y-space-4">
        <p className="font-body-md text-body-md text-text-primary">
          December 2027
          <br />
          Argentina
        </p>
      </div>

      {/* <Link
        href="/rsvp"
        className="inline-block rounded bg-forest-dark px-space-8 py-space-4 font-caption text-caption uppercase tracking-wider text-white transition-colors duration-200 hover:bg-forest-light hover:text-forest-dark"
      >
        RSVP — Conferma · Confirmá
      </Link> */}

      <p className="mx-auto max-w-sm border-t border-border pt-space-4 font-caption text-caption italic text-text-muted">
        Dettagli per la festa in Argentina seguiranno.
        <br />
        <span lang="es">
          Detalles para la fiesta en Argentina a la brevedad.
        </span>
      </p>
    </div>
  );
}
