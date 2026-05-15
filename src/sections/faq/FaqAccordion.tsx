import { FAQ_GROUPS } from '@/content/faqs';
import { cn } from '@/lib/cn';

export function FaqAccordion() {
  return (
    <div className="flex flex-col gap-section-gap">
      {FAQ_GROUPS.map((group) => (
        <section key={group.title} className="flex flex-col gap-space-4">
          <h2 className="border-b border-border pb-2 font-subheading-h3 text-subheading-h3 uppercase tracking-widest text-primary">
            {group.title}
          </h2>
          <div className="flex flex-col gap-space-2">
            {group.items.map((item) => (
              <details
                key={item.questionIt}
                className={cn(
                  'group rounded border border-border bg-bg-card p-space-4 shadow-sm',
                  item.accent && 'border-l-4 border-l-terracotta-dark',
                )}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-body-md text-body-md [&::-webkit-details-marker]:hidden">
                  <span>
                    <span className="block font-medium text-terracotta-dark">
                      {item.questionIt}
                    </span>
                    <span lang="es" className="text-sm italic text-text-muted">
                      {item.questionEs}
                    </span>
                  </span>
                  <span
                    className="material-symbols-outlined text-terracotta-light transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    add
                  </span>
                </summary>
                <div
                  className="mt-space-4 border-t border-border/50 pt-space-4 font-body-base text-body-base text-text-secondary"
                  dangerouslySetInnerHTML={{ __html: item.answerIt }}
                />
              </details>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
