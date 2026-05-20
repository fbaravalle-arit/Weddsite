import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { Gifts } from '@/sections/regalo/Gifts';

export const metadata: Metadata = {
  title: 'Regalo · Regalo de boda — IBAN, alias bancario e contributo online',
  description:
    "La vostra presenza è il regalo più grande, ma se desiderate farci un dono trovate qui le opzioni — bonifico bancario italiano, transferencia argentina con CBU/alias, o contributo online con carta di credito. Su presencia es el regalo más grande.",
  alternates: { canonical: '/regalo' },
};

export default function RegaloPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-section-gap px-gutter pb-section-gap pt-space-8">
      <Reveal className="flex w-full max-w-5xl flex-col items-center text-center">
        <span
          className="material-symbols-outlined mb-space-4 text-4xl text-gold-dark opacity-60"
          aria-hidden="true"
        >
          favorite
        </span>
        <h1 className="mb-space-4 font-section-h2 text-section-h2 italic leading-tight text-primary">
          La vostra presenza è il regalo più grande
        </h1>
        <p lang="es" className="mb-space-8 font-section-h2 text-section-h2 italic leading-tight text-primary">
          Su presencia es el regalo más grande
        </p>
        <span className="mb-space-8 block h-px w-16 bg-gold-dark" aria-hidden="true" />
        <div className="grid gap-space-8 md:grid-cols-2 md:gap-x-32 lg:gap-x-48">
          <p className="text-justify hyphens-auto font-bilingual-it text-bilingual-it text-text-primary">
            Se desiderate contribuire al nostro viaggio di nozze, abbiamo preparato alcune
            opzioni qui sotto. Grazie di cuore.
          </p>
          <p
            lang="es"
            className="text-justify hyphens-auto font-bilingual-it text-bilingual-it text-text-primary"
          >
            Si quieren contribuir a nuestro viaje de bodas juntos, dejamos algunas opciones abajo.
            Gracias de corazón.
          </p>
        </div>
        <span className="mt-space-8 block h-px w-16 bg-gold-dark" aria-hidden="true" />
      </Reveal>

      <Reveal className="w-full">
        <Gifts />
      </Reveal>
    </div>
  );
}
