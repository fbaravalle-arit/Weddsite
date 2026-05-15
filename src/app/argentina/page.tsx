import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Argentina · 2027',
  description:
    'Festa in Argentina, 2027 — viaggio, alloggio e cosa vedere. Fiesta en Argentina, 2027 — viaje, alojamiento y qué ver.',
};

export default function ArgentinaPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-section-gap px-gutter pb-section-gap pt-space-8">
      <PageHeader
        eyebrowIt="Viaggio in Argentina"
        eyebrowEs="Viaje a Argentina"
        titleIt="Buenos Aires · 2027"
      />

      <Reveal className="grid grid-cols-1 gap-space-4 md:grid-cols-12">
        <div className="rounded border border-border bg-bg-card p-space-8 shadow-sm md:col-span-8">
          <h2 className="mb-space-4 font-subheading-h3 text-subheading-h3 text-terracotta-dark">
            Italia &rarr; Argentina
          </h2>
          <div className="mb-space-4 flex flex-col items-start gap-space-4 border-b border-border/50 pb-space-4 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-secondary" aria-hidden="true">
                flight_takeoff
              </span>
              <div>
                <p className="font-bilingual-it text-bilingual-it">Milano (MXP) · Roma (FCO)</p>
                <p className="font-caption text-caption text-text-muted">
                  Partenze principali · Salidas principales
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined hidden text-border-strong md:inline-block" aria-hidden="true">
              arrow_right_alt
            </span>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-secondary" aria-hidden="true">
                flight_land
              </span>
              <div>
                <p className="font-bilingual-it text-bilingual-it">Buenos Aires (EZE)</p>
                <p className="font-caption text-caption text-text-muted">
                  Aeropuerto Int. Ezeiza
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-space-4 sm:grid-cols-2">
            <div>
              <p className="mb-space-2 font-body-base font-medium">
                Voli diretti · Vuelos directos
              </p>
              <ul className="space-y-1 font-body-base text-text-secondary">
                <FlightLine>ITA Airways (da Roma)</FlightLine>
                <FlightLine>Aerolíneas Argentinas</FlightLine>
              </ul>
              <p className="mt-1 font-caption text-caption text-text-muted">
                Durata · Duración: ~14h
              </p>
            </div>
            <div>
              <p className="mb-space-2 font-body-base font-medium">
                Con scalo · Con escala
              </p>
              <ul className="space-y-1 font-body-base text-text-secondary">
                <FlightLine>Iberia (via Madrid)</FlightLine>
                <FlightLine>Lufthansa (via Francoforte)</FlightLine>
              </ul>
              <p className="mt-1 font-caption text-caption text-text-muted">
                Durata · Duración: ~17–20h
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded border-l-[3px] border-terracotta-dark bg-bg-card p-space-8 shadow-sm md:col-span-4">
          <span className="material-symbols-outlined mb-space-2 text-terracotta-dark" aria-hidden="true">
            lightbulb
          </span>
          <h2 className="mb-space-2 font-bilingual-it text-bilingual-it">
            Consiglio · Consejo
          </h2>
          <p className="font-body-base text-text-secondary">
            Prenotate i voli con 4–6 mesi di anticipo per le tariffe migliori.
            <br />
            <span lang="es" className="italic">
              Reserven los vuelos con 4–6 meses de anticipación para mejores tarifas.
            </span>
          </p>
        </div>
      </Reveal>

      <Reveal>
        <header className="mb-space-8 text-center">
          <h2 className="font-section-h2 text-section-h2 italic text-primary">Dove dormire</h2>
          <p lang="es" className="font-bilingual-es text-bilingual-es italic text-text-secondary">
            Dónde dormir
          </p>
        </header>
        <div className="grid grid-cols-1 gap-space-8 md:grid-cols-2">
          <NeighborhoodCard
            image="/images/17.jpg"
            title="Palermo"
            descriptionIt="Quartiere vivace, ristoranti e vita notturna. Ottimo per camminare."
            descriptionEs="Barrio vibrante, restaurantes y vida nocturna. Ideal para caminar."
          />
          <NeighborhoodCard
            image="/images/20.jpeg"
            title="Recoleta"
            descriptionIt="Eleganza classica porteña, architettura europea, vicino al centro."
            descriptionEs="Elegancia clásica porteña, arquitectura europea, cerca del centro."
          />
        </div>
      </Reveal>

      <Reveal className="relative overflow-hidden rounded border-[1.5px] border-terracotta-light/30 bg-bg-card p-space-8 text-center">
        <h2 className="mb-space-2 font-subheading-h3 text-subheading-h3 text-terracotta-dark">
          I nostri preferiti · Nuestros favoritos
        </h2>
        <p className="mx-auto max-w-3xl font-body-md text-body-md italic text-text-secondary">
          «Non perdetevi un caffè al Café Tortoni e una passeggiata al tramonto a Puerto
          Madero. Per la carne, vi consigliamo Don Julio a Palermo.»
        </p>
      </Reveal>
    </div>
  );
}

function FlightLine({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2">
      <span className="material-symbols-outlined text-sm text-gold" aria-hidden="true">
        check_circle
      </span>
      {children}
    </li>
  );
}

function NeighborhoodCard({
  image,
  title,
  descriptionIt,
  descriptionEs,
}: {
  image: string;
  title: string;
  descriptionIt: string;
  descriptionEs: string;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded border border-border bg-bg-card shadow-sm">
      <div className="relative h-48">
        <Image
          src={image}
          alt={`Vista di ${title}.`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-grow flex-col p-space-4">
        <h3 className="mb-1 font-subheading-h3 text-subheading-h3 text-text-primary">{title}</h3>
        <p className="flex-grow font-body-base text-body-base text-text-secondary">
          {descriptionIt}
          <br />
          <span lang="es" className="italic">
            {descriptionEs}
          </span>
        </p>
      </div>
    </article>
  );
}
