import type { ReactNode } from 'react';
import { ButtonLink } from '../ui/Button';
import { Icon } from '../ui/Icon';

const performanceRows = [
  { label: 'سرعت', value: 98 },
  { label: 'بهینه‌سازی', value: 96 },
  { label: 'تجربه کاربری', value: 94 },
];

function FloatCard({ variant, label, children }: { variant: string; label: string; children: ReactNode }) {
  return (
    <div className={`float-card float-card--${variant}`} role="group" aria-label={label}>
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <div className="grid-lines" />
        <div className="glow hero-glow-a" />
        <div className="glow hero-glow-b" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            طراحی وب‌سایت و راهکارهای دیجیتال
          </span>

          <h1 className="hero-title" id="hero-title">
            وب‌سایتی که برندت را <span className="grad-text">یک قدم جلوتر</span> می‌برد.
          </h1>

          <p className="hero-lead">
            ما برای کسب‌وکارهایی که معمولی فکر نمی‌کنند، تجربه‌های دیجیتال سریع، حرفه‌ای و متمایز طراحی می‌کنیم.
          </p>

          <div className="hero-actions">
            <ButtonLink to="/contact" icon="arrow-left">
              شروع پروژه
            </ButtonLink>
            <ButtonLink to="/portfolio" variant="ghost">
              مشاهده نمونه‌کارها
            </ButtonLink>
          </div>

          <div className="hero-trust">
            <div className="avatar-stack" aria-hidden="true">
              <span className="avatar">ن</span>
              <span className="avatar">م</span>
              <span className="avatar">س</span>
              <span className="avatar">+</span>
            </div>
            <p>
              مورد اعتماد <strong>+30</strong> برند ایرانی
            </p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-ring" aria-hidden="true" />
          <div className="portrait">
            <img
              src="/hero-portrait.jpg"
              alt="پرتره حرفه‌ای یک متخصص خلاق با نورپردازی بنفش و آبی"
              fetchPriority="high"
            />
            <div className="portrait-sheen" aria-hidden="true" />
          </div>

          <FloatCard variant="perf" label="عملکرد سایت">
            <div className="fc-head">
              <span className="fc-title">عملکرد سایت</span>
              <span className="fc-badge" aria-hidden="true">
                <Icon name="gauge" size={14} />
              </span>
            </div>
            <div className="fc-value">98%</div>
            <div className="fc-rows">
              {performanceRows.map((row) => (
                <div className="fc-row" key={row.label}>
                  <span>{row.label}</span>
                  <span>{row.value}</span>
                  <span className="fc-bar">
                    <span style={{ width: `${row.value}%` }} />
                  </span>
                </div>
              ))}
            </div>
          </FloatCard>

          <FloatCard variant="ai" label="Webeko AI">
            <div className="fc-head">
              <span className="fc-title">Webeko AI</span>
              <span className="fc-badge" aria-hidden="true">
                <Icon name="sparkles" size={14} />
              </span>
            </div>
            <div className="fc-strong">هوشمندسازی تجربه دیجیتال</div>
            <p className="fc-ai-text">تحلیل رفتار کاربر و پیشنهاد محتوا، به‌صورت خودکار.</p>
            <div className="fc-shimmer" aria-hidden="true" />
          </FloatCard>

          <FloatCard variant="project" label="پروژه جدید">
            <div className="fc-head">
              <span className="fc-title">پروژه جدید</span>
              <span className="fc-badge" aria-hidden="true">
                <Icon name="layers" size={14} />
              </span>
            </div>
            <div className="fc-strong">طراحی سایت فروشگاهی</div>
            <div className="fc-meta">زرین گالری</div>
            <div style={{ marginTop: 10 }}>
              <span className="fc-status">
                <span className="fc-dot" aria-hidden="true" />
                در حال اجرا
              </span>
            </div>
          </FloatCard>

          <FloatCard variant="rating" label="رضایت مشتری">
            <div className="fc-head">
              <span className="fc-title">رضایت مشتری</span>
              <span className="fc-badge" aria-hidden="true">
                <Icon name="star" size={13} />
              </span>
            </div>
            <div className="fc-value">98%</div>
            <div className="fc-meta">پروژه‌های موفق</div>
          </FloatCard>
        </div>
      </div>
    </section>
  );
}
