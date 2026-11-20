import { Link } from '../lib/router';
import { useDocumentMeta } from '../lib/hooks';
import { services } from '../data/services';
import { Icon } from '../components/ui/Icon';
import { Reveal } from '../components/ui/Reveal';
import { FinalCta } from '../components/home/FinalCta';

export function ServicesPage() {
  useDocumentMeta(
    'خدمات | Webeko',
    'طراحی سایت، فروشگاه اینترنتی، طراحی UI/UX و توسعه و پشتیبانی وب‌سایت — همه در یک تیم.',
  );

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" aria-hidden="true">
          <div className="glow" />
        </div>
        <div className="container page-hero-inner">
          <nav className="breadcrumb" aria-label="مسیر صفحه">
            <Link to="/">خانه</Link>
            <span className="breadcrumb-sep" aria-hidden="true">
              /
            </span>
            <span aria-current="page">خدمات</span>
          </nav>
          <h1 className="page-title">
            خدماتی که یک برند را <span className="grad-text">از ایده تا اجرا</span> می‌برد.
          </h1>
          <p className="lead">
            چهار مسیر اصلی برای ساختن حضور دیجیتال شما. می‌توانید یکی را انتخاب کنید یا ترکیبی از همه را با هم پیش ببریم.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="service-rows">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 70}>
                <Link to={`/services/${service.slug}`} className="service-row">
                  <span className="service-row-icon" aria-hidden="true">
                    <Icon name={service.icon} size={24} />
                  </span>
                  <span>
                    <span className="service-row-title">{service.title}</span>
                    <span className="service-row-text">{service.short}</span>
                  </span>
                  <span className="service-row-arrow" aria-hidden="true">
                    <Icon name="arrow-left" size={18} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
