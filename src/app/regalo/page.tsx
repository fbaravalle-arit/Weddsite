import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { Gifts } from '@/sections/regalo/Gifts';
import { SITE } from '@/content/site';

export const metadata: Metadata = {
  title: 'Regalo',
  description:
    'Le opzioni per un regalo se desideri farci uno. Las opciones para un regalo si querés hacernos uno.',
};

export default function RegaloPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-section-gap px-gutter pb-section-gap pt-space-8">
      <Reveal className="flex w-full max-w-2xl flex-col items-center text-center">
        <span
          className="material-symbols-outlined mb-space-4 text-4xl text-gold-dark opacity-60"
          aria-hidden="true"
        >
          favorite
        </span>
        <h1 className="mb-space-4 font-section-h2 text-section-h2 italic leading-tight text-primary">
          La vostra presenza è il regalo più grande
        </h1>
        <p lang="es" className="mb-space-8 font-subheading-h3 text-subheading-h3 italic text-text-muted">
          Su presencia es el regalo más grande
        </p>
        <p className="font-body-base text-body-base text-text-secondary">
          Se desiderate contribuire al nostro futuro insieme, abbiamo preparato alcune
          opzioni qui sotto. Grazie di cuore.
          <br />
          <span lang="es" className="italic">
            Si quieren contribuir a nuestro futuro juntos, dejamos algunas opciones abajo.
            Gracias de corazón.
          </span>
        </p>
        <p className="mt-space-4 font-handwritten text-handwritten text-3xl text-gold-dark">
          {SITE.couple}
        </p>
      </Reveal>

      <Reveal className="w-full">
        <Gifts />
      </Reveal>
    </div>
  );
}
