import type { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Argentina · Buenos Aires 2027 — guida pratica per gli ospiti',
  description:
    "Festa di matrimonio in Argentina nel 2027: come arrivare a Buenos Aires da Roma o Milano, dove dormire tra Palermo e Recoleta, e i nostri consigli per scoprire la città. Fiesta de casamiento en Argentina 2027 — guía para los invitados.",
  alternates: { canonical: '/argentina' },
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
        <div className="flex min-h-[420px] flex-col rounded border border-border bg-bg-card p-space-8 shadow-sm md:col-span-8">
          <div
            data-skyscanner-widget="SearchWidget"
            data-locale="it-IT"
            data-market="IT"
            data-currency="EUR"
            data-colour="FFFFFFFF"
            className="min-h-[360px] w-full flex-1"
          ></div>
          <Script
            src="https://widgets.skyscanner.net/widget-server/js/loader.js"
            async
            strategy="afterInteractive"
          />
        </div>

        <div className="flex flex-col rounded border-l-[3px] border-terracotta-dark bg-bg-card p-space-8 shadow-sm md:col-span-4">
          <span className="material-symbols-outlined mb-space-2 text-terracotta-dark" aria-hidden="true">
            lightbulb
          </span>
          <h2 className="mb-space-2 font-bilingual-it text-bilingual-it">
            Consiglio
          </h2>
          <p className="font-body-base text-text-secondary">
            Prenotate i voli con 6–8 mesi di anticipo per le tariffe migliori.
            <br />
          </p>
        </div>
      </Reveal>

      <Reveal>
        <header className="mb-space-8 text-center">
          <h2 className="font-section-h2 text-section-h2 italic text-primary">Dove dormire</h2>
  
        </header>
        <div className="grid grid-cols-1 gap-space-8 md:grid-cols-1">
          <NeighborhoodCard
            image="/images/20.jpeg"
            title=" Palermo y Recoleta"
            descriptionIt=" Palermo: Quartiere vivace, ristoranti e vita notturna. Ottimo per camminare. Recoleta: Eleganza classica porteña, architettura europea, vicino al centro." descriptionEs={''}          />
        </div>
      </Reveal>

      <Reveal className="relative overflow-hidden rounded border-[1.5px] border-terracotta-light/30 bg-bg-card p-space-8 text-center">
        <h2 className="mb-space-2 font-subheading-h3 text-subheading-h3 text-terracotta-dark">
          I nostri posti preferiti 
        </h2>
        <p className="mx-auto max-w-3xl font-body-md text-body-md italic text-text-secondary">
          «Dettagli seguiranno»
        </p>
      </Reveal>
    </div>
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
          quality={70}
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
