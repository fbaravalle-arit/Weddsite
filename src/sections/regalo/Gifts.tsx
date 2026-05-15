import { CopyButton } from '@/components/CopyButton';

const IBAN = 'IT99X0000000000000000000';
const ALIAS = 'elena.fede.boda';

export function Gifts() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-space-4 md:grid-cols-3">
        <article className="relative flex flex-col items-center rounded border border-gold-light bg-bg-card p-space-8 text-center shadow-sm">
          <span className="material-symbols-outlined mb-space-4 text-4xl text-forest-dark" aria-hidden="true">
            credit_card
          </span>
          <h2 className="mb-1 font-subheading-h3 text-subheading-h3 text-primary">Online</h2>
          <p className="font-bilingual-it text-bilingual-it text-text-secondary">Carta di credito</p>
          <p lang="es" className="mb-space-8 font-bilingual-es text-bilingual-es italic text-text-muted">
            Tarjeta de crédito
          </p>
          <a
            href="#"
            role="button"
            className="mt-auto rounded bg-forest-dark px-6 py-3 font-body-base uppercase tracking-wider text-white transition-colors duration-200 hover:bg-forest-light hover:text-forest-dark"
          >
            Contribuisci · Contribuí
          </a>
        </article>

        <BankCard
          icon="account_balance"
          titleIt="Bonifico"
          subtitleIt="Banca italiana"
          subtitleEs="Banco italiano"
          codeLabel="IBAN"
          code={IBAN}
          formatted="IT99 X000 0000 0000 0000 0000"
          copyAriaLabel="Copia · Copiar IBAN"
        />

        <BankCard
          icon="account_balance_wallet"
          titleIt="Transferencia"
          subtitleIt="Banca argentina"
          subtitleEs="Banco argentino"
          codeLabel="CBU · ALIAS"
          code={ALIAS}
          formatted={ALIAS}
          copyAriaLabel="Copia · Copiar alias"
        />
      </div>

      <p
        lang="es"
        className="mt-space-8 text-center font-bilingual-es text-bilingual-es italic text-terracotta-dark"
      >
        Sin monto mínimo · Senza minimo · ogni gesto è ricevuto con amore.
      </p>
    </section>
  );
}

type BankCardProps = {
  icon: string;
  titleIt: string;
  subtitleIt: string;
  subtitleEs: string;
  codeLabel: string;
  code: string;
  formatted: string;
  copyAriaLabel: string;
};

function BankCard(p: BankCardProps) {
  return (
    <article className="relative flex flex-col items-center rounded border border-gold-light bg-bg-card p-space-8 text-center shadow-sm">
      <span className="material-symbols-outlined mb-space-4 text-4xl text-forest-dark" aria-hidden="true">
        {p.icon}
      </span>
      <h2 className="mb-1 font-subheading-h3 text-subheading-h3 text-primary">{p.titleIt}</h2>
      <p className="font-bilingual-it text-bilingual-it text-text-secondary">{p.subtitleIt}</p>
      <p
        lang="es"
        className="mb-space-8 font-bilingual-es text-bilingual-es italic text-text-muted"
      >
        {p.subtitleEs}
      </p>
      <div className="mt-auto flex w-full items-center justify-between rounded border border-border/50 bg-surface-container p-3">
        <div className="overflow-hidden text-left">
          <p className="font-caption text-caption uppercase text-text-muted">{p.codeLabel}</p>
          <p className="tnum truncate font-body-md text-body-md text-text-primary">
            {p.formatted}
          </p>
        </div>
        <CopyButton value={p.code} label={p.copyAriaLabel} />
      </div>
    </article>
  );
}
