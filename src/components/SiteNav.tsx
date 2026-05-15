'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/content/nav';
import { SITE } from '@/content/site';
import { cn } from '@/lib/cn';

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNav() {
  const pathname = usePathname();
  return (
    <>
      <header className="sticky top-0 z-40 hidden w-full flex-col items-center justify-center bg-background/90 px-gutter py-space-4 backdrop-blur-md md:flex">
        <p
          className="mb-space-4 text-center font-hero-names text-hero-names tracking-widest text-text-primary"
          role="presentation"
        >
          {SITE.couple}
        </p>
        <nav aria-label="Principale · Principal">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-body-base">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.slug}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'transition-colors duration-200',
                      active
                        ? 'border-b-2 border-terracotta-dark pb-1 text-terracotta-dark'
                        : 'text-text-secondary hover:text-terracotta-dark',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <div className="sticky top-0 z-40 flex w-full items-center justify-between bg-background/90 px-gutter py-space-4 backdrop-blur-md md:hidden">
        <p className="font-hero-names text-2xl tracking-widest" role="presentation">
          E &amp; F
        </p>
        <button
          type="button"
          className="p-2 text-text-primary"
          aria-label="Apri menu · Abrir menú"
          data-drawer-toggle="mobile-drawer"
          aria-controls="mobile-drawer"
          aria-expanded="false"
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            menu
          </span>
        </button>
      </div>
    </>
  );
}
