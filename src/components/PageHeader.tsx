type Props = {
  eyebrowIt?: string;
  eyebrowEs?: string;
  titleIt: string;
  titleEs?: string;
  className?: string;
};

export function PageHeader({ eyebrowIt, eyebrowEs, titleIt, titleEs, className }: Props) {
  return (
    <header className={`mx-auto max-w-3xl space-y-space-2 text-center ${className ?? ''}`}>
      {eyebrowIt && (
        <p className="font-bilingual-it text-bilingual-it uppercase tracking-widest text-text-secondary">
          {eyebrowIt}
        </p>
      )}
      {eyebrowEs && (
        <p
          lang="es"
          className="font-bilingual-es text-bilingual-es italic text-terracotta-dark"
        >
          {eyebrowEs}
        </p>
      )}
      <h1 className="font-section-h2 text-section-h2 italic text-primary">{titleIt}</h1>
      {titleEs && (
        <p
          lang="es"
          className="font-bilingual-es text-bilingual-es italic text-text-secondary"
        >
          {titleEs}
        </p>
      )}
    </header>
  );
}
