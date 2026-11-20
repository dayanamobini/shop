import { ButtonLink } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

export function FinalCta() {
  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="container">
        <Reveal>
          <div className="cta-panel">
            <div className="cta-orbs" aria-hidden="true">
              <span className="cta-orb cta-orb--1" />
              <span className="cta-orb cta-orb--2" />
            </div>
            <div className="cta-inner">
              <span className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                بیایید شروع کنیم
              </span>
              <h2 className="cta-title" id="cta-title">
                آماده‌ای متفاوت دیده شوی؟
              </h2>
              <p className="cta-lead">
                بیایید یک تجربه دیجیتال بسازیم که واقعاً ارزش دیده شدن داشته باشد.
              </p>
              <div className="cta-actions">
                <ButtonLink to="/contact" icon="arrow-left">
                  شروع پروژه با Webeko
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
