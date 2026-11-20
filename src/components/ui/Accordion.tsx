import { useId, useState } from 'react';
import { Icon } from './Icon';

type AccordionItem = { q: string; a: string };

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-q-${index}`;
        const panelId = `${baseId}-a-${index}`;

        return (
          <div className="faq-item" data-open={isOpen} key={item.q}>
            <h3 className="faq-heading">
              <button
                id={buttonId}
                type="button"
                className="faq-q"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.q}</span>
                <span className="faq-icon" aria-hidden="true">
                  <Icon name="chevron-down" size={15} />
                </span>
              </button>
            </h3>
            <div className="faq-a" id={panelId} role="region" aria-labelledby={buttonId} aria-hidden={!isOpen}>
              <div className="faq-a-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
