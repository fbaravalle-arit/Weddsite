import Image from 'next/image';

/**
 * Editorial 7-image asymmetric collage.
 *
 * Grid (desktop, 12 cols × 3 rows):
 *   - 'a'  large portrait left, cols 1–6, rows 1–2
 *   - 'b'  top right,           cols 7–9, row 1
 *   - 'c'  top far right,       cols 10–12, row 1
 *   - 'd'  middle right (wide), cols 7–12, row 2
 *   - 'e'  bottom 1,            cols 1–3, row 3
 *   - 'f'  bottom 2,            cols 4–6, row 3
 *   - 'g'  bottom 3 (wide),     cols 7–12, row 3
 *
 * Mobile stacks all tiles vertically.
 */
const TILES: ReadonlyArray<{
  src: string;
  alt: string;
  area: string;
  priority?: boolean;
  caption?: { text: string; corner: 'tl' | 'tr' | 'bl' | 'br' };
}> = [
  {
    src: '/images/11.jpg',
    alt: 'Isola Bella.',
    area: 'a',
    priority: true,
    //caption: { text: 'Isola Bella', corner: 'bl' },
  },
  { src: '/images/7.jpg',  alt: 'El Calafate',          area: 'b', priority: true },
  { src: '/images/4.jpg', alt: 'Riga', area: 'c', priority: true },
  {
    src: '/images/13.jpg',
    alt: 'Singapore',
    area: 'd',
    //caption: { text: 'Singapore', corner: 'br' },
  },
  { src: '/images/10.jpg', alt: 'Scala', area: 'e' },
  { src: '/images/1.jpg', alt: 'Empanaditas',  area: 'f' },
  { src: '/images/28.jpg', alt: 'Trekking', area: 'g' },
];

const cornerClass: Record<'tl' | 'tr' | 'bl' | 'br', string> = {
  tl: 'top-space-4 left-space-4 text-left',
  tr: 'top-space-4 right-space-4 text-right',
  bl: 'bottom-space-4 left-space-4 text-left',
  br: 'bottom-space-4 right-space-4 text-right',
};

export function HeroCollage() {
  return (
    <div
      className="grid w-full gap-space-4 md:grid-cols-12 md:[grid-template-areas:'a_a_a_a_a_a_b_b_b_c_c_c''a_a_a_a_a_a_d_d_d_d_d_d''e_e_e_e_f_f_f_f_g_g_g_g'] md:[grid-template-rows:repeat(3,minmax(180px,28vw))]"
    >
      {TILES.map((t, i) => (
        <figure
          key={t.src}
          className="group relative overflow-hidden rounded shadow-sm md:[grid-area:var(--area)]"
          style={{ ['--area' as string]: t.area }}
        >
          <Image
            src={t.src}
            alt={t.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            quality={70}
            priority={t.priority}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black/30 transition-all duration-300 group-hover:to-black/40"
            aria-hidden="true"
          />
          {t.caption && (
            <figcaption
              className={`absolute z-10 ${cornerClass[t.caption.corner]} font-caption text-caption uppercase tracking-wider text-white`}
            >
              {t.caption.text}
            </figcaption>
          )}
          {/* fallback height on mobile when grid-area is not active */}
          <span className="block aspect-[4/3] md:hidden" aria-hidden="true" />
          {i === 0 && <div className="hero-vignette absolute inset-0" aria-hidden="true" />}
        </figure>
      ))}
    </div>
  );
}
