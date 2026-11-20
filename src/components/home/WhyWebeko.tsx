import { whyFeatures } from '../../data/site';
import { SectionHead } from '../ui/SectionHead';
import { Reveal } from '../ui/Reveal';
import { Icon } from '../ui/Icon';

export function WhyWebeko() {
  return (
    <section className="section" id="why" aria-labelledby="why-title">
      <div className="container why-grid">
        <Reveal>
          <div className="why-copy">
            <SectionHead
              id="why-title"
              eyebrow="چرا Webeko"
              title={
                <>
                  فقط یک سایت نمی‌سازیم؛ <span className="grad-text">یک تجربه می‌سازیم.</span>
                </>
              }
              lead="هر پروژه در Webeko با شناخت کسب‌وکار شما شروع می‌شود، نه با انتخاب قالب. نتیجه، تجربه‌ای است که هم دیده می‌شود و هم نتیجه می‌دهد."
            />
            <div className="why-note">
              <Icon name="sparkles" size={18} />
              <span>
                تمرکز ما روی چیزی است که کاربر در سه ثانیه اول حس می‌کند: اعتماد، سرعت و وضوح.
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="why-features">
            {whyFeatures.map((feature) => (
              <div className="why-item" key={feature.label}>
                <span className="why-icon" aria-hidden="true">
                  <Icon name={feature.icon} size={18} />
                </span>
                <span className="why-label">{feature.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
