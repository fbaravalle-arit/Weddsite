'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function RsvpForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const endpoint = process.env.NEXT_PUBLIC_RSVP_ENDPOINT;
    if (!endpoint) {
      // No backend wired yet — show success locally so guests aren't blocked.
      setStatus('success');
      return;
    }
    setStatus('submitting');
    try {
      const data = new FormData(e.currentTarget);
      const res = await fetch(endpoint, { method: 'POST', body: data });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center">
        <p className="mb-space-4 font-handwritten text-handwritten text-gold-dark">
          Grazie · ¡Gracias!
        </p>
        <p className="font-body-base text-body-base text-text-secondary">
          Risposta ricevuta. Vi scriveremo a breve.
          <br />
          <span lang="es" className="italic">
            Respuesta recibida. Nos pondremos en contacto pronto.
          </span>
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-space-4" onSubmit={onSubmit} noValidate>
      <Field id="name" required label={['Nome e cognome', 'Nombre y apellido']} autoComplete="name" />
      <Field
        id="partner"
        label={['Accompagnatore (se applicabile)', 'Acompañante (si aplica)']}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 gap-space-4 md:grid-cols-2">
        <Field
          id="email"
          type="email"
          required
          label={['Email', 'Correo']}
          autoComplete="email"
          inputMode="email"
          spellCheck={false}
        />
        <Field
          id="whatsapp"
          type="tel"
          label={['WhatsApp', 'WhatsApp']}
          autoComplete="tel"
          inputMode="tel"
        />
      </div>

      <fieldset className="pt-space-4">
        <legend className="mb-space-4 flex flex-col gap-1">
          <span className="font-bilingual-it text-bilingual-it text-text-primary">
            A quali eventi parteciperai?
          </span>
          <span lang="es" className="font-bilingual-es text-bilingual-es italic text-text-secondary">
            ¿A qué eventos asistirás?
          </span>
        </legend>
        <div className="space-y-2">
          {[
            ['event_bologna', 'Bologna · 2026'],
            ['event_argentina', 'Argentina · 2027'],
            ['event_italia', 'Italia · 2028'],
          ].map(([name, label]) => (
            <label key={name} className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                name={name}
                className="form-checkbox h-5 w-5 rounded border-border bg-bg-card text-forest-dark"
              />
              <span className="font-body-base text-text-primary">{label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <Field
        id="dietary"
        label={['Restrizioni alimentari', 'Restricciones alimentarias']}
        placeholder="…"
        autoComplete="off"
      />
      <Field
        id="song"
        label={['Richiesta musicale', 'Pedido musical']}
        placeholder="…"
        autoComplete="off"
      />

      <div className="flex flex-col">
        <label htmlFor="message" className="mb-2 flex flex-col gap-1">
          <span className="font-bilingual-it text-bilingual-it text-text-primary">
            Messaggio per gli sposi
          </span>
          <span lang="es" className="font-bilingual-es text-bilingual-es italic text-text-secondary">
            Mensaje para los novios
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          autoComplete="off"
          className="w-full rounded border border-border bg-bg-card px-3 py-3 focus:border-forest-dark focus:ring-forest-light"
        />
      </div>

      <div className="pt-space-8 text-center">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="rounded bg-forest-dark px-space-8 py-space-4 font-body-base uppercase tracking-widest text-white transition-colors duration-200 hover:bg-forest-light hover:text-forest-dark disabled:opacity-60"
        >
          {status === 'submitting' ? 'Invio… · Enviando…' : 'Invia · Enviar'}
        </button>
        {status === 'error' && (
          <p className="mt-space-4 text-sm text-red-deep">
            Qualcosa è andato storto. Riprova o scrivici direttamente.
          </p>
        )}
      </div>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: [string, string];
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  spellCheck?: boolean;
};

function Field({
  id,
  label,
  type = 'text',
  required,
  placeholder,
  autoComplete,
  inputMode,
  spellCheck,
}: FieldProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-2 flex flex-col gap-1">
        <span className="font-bilingual-it text-bilingual-it text-text-primary">{label[0]}</span>
        <span
          lang="es"
          className="font-bilingual-es text-bilingual-es italic text-text-secondary"
        >
          {label[1]}
        </span>
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        spellCheck={spellCheck}
        className="w-full rounded border border-border bg-bg-card px-3 py-3 focus:border-forest-dark focus:ring-forest-light"
      />
    </div>
  );
}
