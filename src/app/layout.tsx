import type { Metadata, Viewport } from 'next';
import { DM_Sans, EB_Garamond, Playfair_Display, Caveat } from 'next/font/google';
import { SiteNav } from '@/components/SiteNav';
import { MobileDrawer } from '@/components/MobileDrawer';
import { Footer } from '@/components/Footer';
import { SITE } from '@/content/site';
import './globals.css';

const sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});
const serif = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});
const display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});
const handwritten = Caveat({
  subsets: ['latin'],
  variable: '--font-handwritten',
  display: 'swap',
});

const DEFAULT_DESCRIPTION =
  'Sito ufficiale del matrimonio di Elena e Federico: invito alle nostre tre celebrazioni a Bologna (2026), in Argentina (2027) e in Italia (2028). RSVP, programma e dettagli pratici.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `Elena & Federico`,
    template: `%s — ${SITE.couple}`,
  },
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    alternateLocale: ['es_AR'],
    title: `Elena & Federico`,
    description: DEFAULT_DESCRIPTION,
    url: SITE.url,
    siteName: SITE.couple,
    images: [
      {
        url: SITE.ogImage,
        width: 1600,
        height: 1067,
        alt: `${SITE.couple} — ${SITE.tagline.it} · ${SITE.tagline.es}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Elena & Federico`,
    description: DEFAULT_DESCRIPTION,
    images: [SITE.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: '#F5F1E8',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="it"
      className={`${sans.variable} ${serif.variable} ${display.variable} ${handwritten.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-terracotta-light selection:text-white">
        <a className="skip-link" href="#main">
          Vai al contenuto · Ir al contenido
        </a>
        <SiteNav />
        <MobileDrawer />
        <main id="main" className="flex-grow w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
