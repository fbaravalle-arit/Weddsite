'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { NAV_ITEMS } from '@/content/nav';
import { SITE } from '@/content/site';
import { cn } from '@/lib/cn';

export function MobileDrawer() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    // Wire any [data-drawer-toggle="mobile-drawer"] trigger in the page tree.
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const trigger = target.closest('[data-drawer-toggle="mobile-drawer"]');
      if (!trigger) return;
      e.preventDefault();
      setOpen((v) => !v);
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && open) close();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, close]);

  useEffect(() => {
    // Sync aria-expanded on the external trigger button.
    const trigger = document.querySelector<HTMLElement>(
      '[data-drawer-toggle="mobile-drawer"]',
    );
    trigger?.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) drawerRef.current?.querySelector<HTMLElement>('a, button')?.focus();
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    // Close drawer on route change.
    close();
  }, [pathname, close]);

  return (
    <nav
      id="mobile-drawer"
      ref={drawerRef}
      aria-label="Menu mobile"
      className={cn(
        'fixed inset-0 z-50 flex-col items-center justify-center bg-bg-dark text-text-inverse md:hidden',
        open ? 'flex animate-fade-in' : 'hidden',
      )}
    >
      <button
        type="button"
        className="absolute right-gutter top-space-4 p-2 text-text-inverse"
        aria-label="Chiudi · Cerrar"
        onClick={close}
      >
        <span className="material-symbols-outlined text-3xl" aria-hidden="true">
          close
        </span>
      </button>

      <div className="mb-space-8 text-center">
        <p className="mb-2 font-hero-names text-4xl tracking-widest" role="presentation">
          {SITE.couple}
        </p>
        <p className="font-caption text-caption uppercase tracking-widest text-gold-light">
          {SITE.tagline.it} · {SITE.tagline.es}
        </p>
      </div>

      <ul className="flex flex-col items-center gap-6 font-body-md text-body-md">
        {NAV_ITEMS.map((item) => {
          const active =
            item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          return (
            <li key={item.slug}>
              <Link
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'flex items-center gap-space-4 transition-colors duration-200',
                  active
                    ? 'font-medium text-terracotta-light'
                    : 'text-text-inverse/80 hover:text-gold-light',
                )}
                onClick={close}
              >
                <span className="material-symbols-outlined" aria-hidden="true">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
