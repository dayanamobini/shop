import { useRef, useState } from 'react';
import { testimonials } from '../../data/testimonials';
import { SectionHead } from '../ui/SectionHead';
import { Reveal } from '../ui/Reveal';
import { Icon } from '../ui/Icon';

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const cardStep = () => {
    const card = trackRef.current?.querySelector<HTMLElement>('.tst-card');
    return card ? card.getBoundingClientRect().width + 20 : 340;
  };

  const move = (direction: 'next' | 'prev') => {
    const distance = cardStep() * (direction === 'next' ? -1 : 1);
    trackRef.current?.scrollBy({ left: distance, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const progress = max > 0 ? Math.abs(track.scrollLeft) / max : 0;
    setActive(Math.round(progress * (testimonials.length - 1)));
  };

  return (
    <section className="section" aria-labelledby="testimonials-title">
      <div className="container">
        <Reveal>
          <div className="tst-head">
            <SectionHead
              id="testimonials-title"
              eyebrow="نظر مشتریان"
              title={
                <>
                  اعتماد، چیزی نیست که فقط <span className="grad-text">درباره‌اش حرف بزنیم.</span>
                </>
              }
            />
            <div className="tst-nav">
              <button type="button" className="tst-btn" aria-label="نظر قبلی" onClick={() => move('prev')}>
                <Icon name="arrow-right" size={18} />
              </button>
              <button type="button" className="tst-btn" aria-label="نظر بعدی" onClick={() => move('next')}>
                <Icon name="arrow-left" size={18} />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="tst-track" ref={trackRef} onScroll={handleScroll} tabIndex={0} aria-label="نظرات مشتریان">
          {testimonials.map((item) => (
            <figure className="tst-card" key={item.name}>
              <div className="tst-stars" aria-label={`${item.rating} از ۵`}>
                {Array.from({ length: 5 }, (_, index) => (
                  <Icon
                    key={index}
                    name="star"
                    size={14}
                    className={index < item.rating ? undefined : 'tst-star-off'}
                  />
                ))}
              </div>
              <blockquote className="tst-quote">{item.text}</blockquote>
              <figcaption className="tst-person">
                <span className="tst-avatar" aria-hidden="true">
                  {item.initials}
                </span>
                <span>
                  <span className="tst-name">{item.name}</span>
                  <br />
                  <span className="tst-role">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="tst-dots" aria-hidden="true">
          {testimonials.map((item, index) => (
            <span className="tst-dot" data-active={active === index} key={item.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
