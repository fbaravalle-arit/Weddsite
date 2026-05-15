import { PROGRAMME } from '@/content/programme';

export function Timeline() {
  return (
    <section className="relative">
      <span
        className="absolute bottom-4 left-[19px] top-4 w-px bg-border/50 md:left-[27px]"
        aria-hidden="true"
      />
      <ol className="relative z-10 list-none space-y-space-8">
        {PROGRAMME.map((entry) => (
          <li key={entry.time} className="group flex items-start gap-space-4">
            <div className="flex w-10 flex-shrink-0 flex-col items-center md:w-14">
              <span
                className="mt-2 h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_10px_rgba(201,168,76,0.3)] transition-transform duration-300 group-hover:scale-125"
                aria-hidden="true"
              />
            </div>
            <div className="flex-grow pt-0.5">
              <div className="tnum mb-1 font-caption text-caption uppercase tracking-widest text-terracotta-dark">
                {entry.time}
              </div>
              <h3 className="mb-1 font-subheading-h3 text-subheading-h3 text-primary">
                {entry.titleIt}
              </h3>
              <p
                lang="es"
                className="mb-3 font-bilingual-es text-bilingual-es italic text-text-secondary"
              >
                {entry.titleEs}
              </p>
              <p className="max-w-md font-body-base text-body-base text-text-secondary">
                {entry.descriptionIt}
              </p>
            </div>
            <span
              className="material-symbols-outlined hidden flex-shrink-0 pt-1 text-[32px] text-terracotta-light/40 sm:inline-block"
              aria-hidden="true"
            >
              {entry.icon}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
