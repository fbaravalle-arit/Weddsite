import { SITE } from '@/content/site';

export function Logistics() {
  return (
    <aside>
      <div className="sticky top-32">
        <div className="relative overflow-hidden rounded-lg border border-border bg-bg-card p-space-8 shadow-sm">
          <span className="absolute left-0 top-0 m-2 h-8 w-8 border-l border-t border-gold/40" />
          <span className="absolute right-0 top-0 m-2 h-8 w-8 border-r border-t border-gold/40" />
          <span className="absolute bottom-0 left-0 m-2 h-8 w-8 border-b border-l border-gold/40" />
          <span className="absolute bottom-0 right-0 m-2 h-8 w-8 border-b border-r border-gold/40" />
          <h2 className="mb-space-4 border-b border-border/50 pb-space-2 text-center font-subheading-h3 text-subheading-h3 text-primary">
            Logistica · Logística
          </h2>

          <div className="space-y-space-4">
            <div>
              <div className="mb-1 flex items-center gap-2 text-terracotta-dark">
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  location_on
                </span>
                <span className="font-bilingual-it text-sm uppercase tracking-wider">
                  Indirizzo · Dirección
                </span>
              </div>
              <p className="pl-7 font-body-base text-body-base text-text-secondary">
                {SITE.ceremony.venue}
                <br />
                {SITE.ceremony.address}
              </p>
            </div>

            <div>
              <div className="mb-1 flex items-center gap-2 text-terracotta-dark">
                <span
                  className="material-symbols-outlined text-[20px]"
                  aria-hidden="true"
                >
                  directions_walk
                </span>
                <span className="font-bilingual-it text-sm uppercase tracking-wider">
                  Trasporto · Transporte
                </span>
              </div>
              <p className="pl-7 font-body-base text-body-base text-text-secondary">
                Centro storico, ZTL. Consigliamo di muoversi a piedi dal centro o
                dall'hotel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
