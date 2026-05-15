import { SITE } from '@/content/site';

export function Footer() {
  return (
    <footer className="mt-auto flex w-full flex-col items-center justify-center border-t border-border/30 bg-surface-container-low py-space-8 text-center">
      <p className="mb-space-4 font-handwritten text-handwritten text-gold-dark">
        {SITE.couple}
      </p>
      <p className="font-caption text-caption uppercase tracking-wider text-text-muted">
        {SITE.tagline.it} · {SITE.tagline.es}
      </p>
      <p className="mt-space-2 font-caption text-caption uppercase tracking-wider text-secondary">
        {SITE.years}
      </p>
    </footer>
  );
}
