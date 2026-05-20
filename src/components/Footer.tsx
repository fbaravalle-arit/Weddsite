import { SITE } from '@/content/site';

export function Footer() {
  return (
    <footer className="mt-auto flex w-full items-center justify-center border-t border-border/30 bg-surface-container-low py-space-2 text-center">
      <p className="font-handwritten text-handwritten text-gold-dark">
        {SITE.couple}
      </p>
    </footer>
  );
}
