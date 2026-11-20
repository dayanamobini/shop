import type { ReactNode } from 'react';

type SectionHeadProps = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'start' | 'center';
  id?: string;
};

export function SectionHead({ eyebrow, title, lead, align = 'start', id }: SectionHeadProps) {
  return (
    <div className={`section-head ${align === 'center' ? 'section-head--center' : ''}`}>
      {eyebrow ? (
        <span className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="h2" id={id}>
        {title}
      </h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </div>
  );
}
