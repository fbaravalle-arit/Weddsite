import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { Timeline } from '@/sections/programma/Timeline';
import { Logistics } from '@/sections/programma/Logistics';

export const metadata: Metadata = {
  title: 'Programma · Programa',
  description:
    'Il programma del 29 maggio 2026 a Bologna. El programa del 29 de mayo de 2026 en Bolonia.',
};

export default function ProgrammaPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-section-gap px-gutter pb-section-gap pt-space-8">
      <PageHeader
        titleIt="Programma"
        titleEs="Programa · 29 maggio · mayo 2026"
      />

      <div className="grid grid-cols-1 items-start gap-gutter lg:grid-cols-12">
        <Reveal className="order-2 lg:order-1 lg:col-span-7 xl:col-span-8">
          <Timeline />
        </Reveal>
        <Reveal className="order-1 lg:order-2 lg:col-span-5 xl:col-span-4">
          <Logistics />
        </Reveal>
      </div>
    </div>
  );
}
