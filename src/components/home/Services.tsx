import { services } from '../../data/services';
import { SectionHead } from '../ui/SectionHead';
import { Reveal } from '../ui/Reveal';
import { ServiceCard } from './ServiceCard';

export function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="container">
        <Reveal>
          <SectionHead
            id="services-title"
            eyebrow="خدمات Webeko"
            title={
              <>
                همه‌چیز برای ساختن یک <span className="grad-text">حضور دیجیتال قدرتمند</span>
              </>
            }
            lead="از ایده اولیه تا اجرای نهایی، Webeko تمام مسیر ساخت تجربه دیجیتال برند شما را طراحی و اجرا می‌کند."
          />
        </Reveal>

        <div className="service-grid">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
