import Link from 'next/link';
import { SITE } from '@/content/site';

export function CeremonyCard() {
  return (
    <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center space-y-space-8 overflow-hidden rounded border border-gold-light bg-bg-card p-space-8 text-center shadow-sm md:p-space-16">
      <span className="absolute left-4 top-4 h-8 w-8 border-l border-t border-gold-light opacity-60" />
      <span className="absolute right-4 top-4 h-8 w-8 border-r border-t border-gold-light opacity-60" />
      <span className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-gold-light opacity-60" />
      <span className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-gold-light opacity-60" />

      <div className="space-y-space-2">
        <h2 className="font-section-h2 text-section-h2 italic text-text-primary">
          La Cerimonia
        </h2>
        <p lang="es" className="font-subheading-h3 text-subheading-h3 italic text-terracotta-dark">
          La Ceremonia
        </p>
      </div>

      <div className="space-y-space-4">
        <p className="font-body-md text-body-md text-text-primary">
          {SITE.ceremony.dateIt}
          <br />
          <span lang="es" className="italic">
            {SITE.ceremony.dateEs}
          </span>
          <br />
          <span className="tnum">{SITE.ceremony.time}</span>
        </p>
        <p className="font-body-base text-body-base text-text-secondary">
          {SITE.ceremony.venue}
          <br />
          {SITE.ceremony.address}
        </p>
      </div>

      <Link
        href="/rsvp"
        className="inline-block rounded bg-forest-dark px-space-8 py-space-4 font-caption text-caption uppercase tracking-wider text-white transition-colors duration-200 hover:bg-forest-light hover:text-forest-dark"
      >
        RSVP — Conferma · Confirmá
      </Link>

      <p className="mx-auto max-w-sm border-t border-border pt-space-4 font-caption text-caption italic text-text-muted">
        Dettagli per le feste in Argentina (2027) e l'anniversario in Italia (2028)
        seguiranno.
        <br />
        <span lang="es">
          Detalles para las fiestas en Argentina (2027) y el aniversario en Italia (2028)
          seguirán.
        </span>
      </p>
    </div>
  );
}
