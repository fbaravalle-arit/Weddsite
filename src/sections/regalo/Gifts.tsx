import { CopyButton } from '@/components/CopyButton';

const IBAN = 'IT76M0301503200000006100193';
const ALIAS = 'ZARCO.CORONA.INCA';

export function Gifts() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-space-4 md:grid-cols-2">
        <BankCard
          icon="account_balance"
          titleIt="Bonifico"
          subtitleIt="FINECO"
          subtitleEs="BIC SEPA FEBIITM1"
          codeLabel="IBAN"
          code={IBAN}
          formatted={IBAN}
          copyAriaLabel="Copiare IBAN"
        />

        <BankCard
          icon="account_balance_wallet"
          titleIt="Transferencia"
          subtitleIt="Banco Santander"
          subtitleEs="CBU 0720195688000003180440"
          codeLabel="ALIAS"
          code={ALIAS}
          formatted={ALIAS}
          copyAriaLabel="Copiar alias"
        />
      </div>
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
