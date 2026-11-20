import type { MouseEvent } from 'react';
import { Link } from '../../lib/router';
import type { Service } from '../../data/services';
import { Icon } from '../ui/Icon';
import { ServiceVisual } from './ServiceVisual';

function handleGlow(event: MouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`);
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card glass glass--edge" onMouseMove={handleGlow}>
      <div className="service-visual">
        <ServiceVisual variant={service.visual} />
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-text">{service.short}</p>
      <Link to={`/services/${service.slug}`} className="service-link">
        جزئیات سرویس
        <Icon name="arrow-left" size={16} />
      </Link>
    </article>
  );
}
