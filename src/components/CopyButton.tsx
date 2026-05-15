'use client';

import { useState } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  value: string;
  label: string;
};

export function CopyButton({ value, label }: Props) {
  const [flashed, setFlashed] = useState(false);

  async function copy() {
    if (!navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(value);
      setFlashed(true);
      setTimeout(() => setFlashed(false), 800);
    } catch {
      // No permission / insecure context — fail silently.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={label}
      className={cn(
        'ml-2 flex-shrink-0 text-terracotta-dark transition-colors hover:text-terracotta-light',
        flashed && 'copied-flash',
      )}
    >
      <span className="material-symbols-outlined" aria-hidden="true">
        {flashed ? 'check' : 'content_copy'}
      </span>
    </button>
  );
}
