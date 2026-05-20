import { SITE } from '@/content/site';

export function Invitation() {
  return (
    <div className="flex flex-col items-center space-y-space-8 text-center">
      <span className="block h-px w-16 bg-gold-dark" aria-hidden="true" />
      <div className="grid gap-space-8 md:grid-cols-2 md:gap-x-32 lg:gap-x-48">
        <p className="text-justify hyphens-auto font-bilingual-it text-bilingual-it text-text-primary">
          Non vediamo l'ora di vedervi e di celebrare insieme. Sarà un’occasione
          per intrecciare persone, storie e culture: per farvi conoscere meglio noi,
          le nostre radici e le persone che ci hanno accompagnato fin qui.
        </p>
        <p
          lang="es"
          className="text-justify hyphens-auto font-bilingual-it text-bilingual-it text-text-primary"
        >
          No vemos la hora de verlos y celebrar juntos. Va a ser una oportunidad para
          unir personas, historias y culturas: para que nos conozcan más, para mostrar nuestras raíces
          y a las personas que nos acompañaron hasta acá.
        </p>
      </div>
      <p className="font-handwritten text-handwritten text-terracotta-dark">
        {SITE.couple}
      </p>
      <span className="block h-px w-16 bg-gold-dark" aria-hidden="true" />
    </div>
  );
}
