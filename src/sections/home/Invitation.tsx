import { SITE } from '@/content/site';

export function Invitation() {
  return (
    <div className="flex flex-col items-center space-y-space-8 text-center">
      <span className="block h-px w-16 bg-gold-dark" aria-hidden="true" />
      <div className="space-y-space-4">
        <p className="font-bilingual-it text-bilingual-it text-text-primary">
          Siamo felicissimi di invitarvi a celebrare con noi. Non sarà un matrimonio
          convenzionale, ma una serie di momenti da condividere con le persone che amiamo,
          nei luoghi che chiamiamo casa.
        </p>
        <p
          lang="es"
          className="font-bilingual-es text-bilingual-es italic text-text-secondary"
        >
          Estamos muy felices de invitarlos a celebrar con nosotros. No será una boda
          convencional, sino una serie de momentos para compartir con las personas que
          amamos, en los lugares que llamamos hogar.
        </p>
      </div>
      <p className="pt-space-4 font-handwritten text-handwritten text-terracotta-dark">
        {SITE.couple}
      </p>
    </div>
  );
}
