import { Link } from '../lib/router';
import { useDocumentMeta } from '../lib/hooks';
import { Reveal } from '../components/ui/Reveal';
import { ProjectGrid } from '../components/portfolio/ProjectGrid';
import { FinalCta } from '../components/home/FinalCta';

export function PortfolioPage() {
  useDocumentMeta(
    'نمونه‌کارها | Webeko',
    'پروژه‌هایی که برای برندها و کسب‌وکارهای مختلف طراحی کرده‌ایم؛ از فروشگاه اینترنتی تا داشبورد محصول.',
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
            <span aria-current="page">نمونه‌کارها</span>
          </nav>
          <h1 className="page-title">
            پروژه‌هایی که <span className="grad-text">حرف می‌زنند.</span>
          </h1>
          <p className="lead">
            هر پروژه یک مسئله واقعی داشته است. این‌ها بخشی از تجربه‌هایی است که برای برندها و کسب‌وکارهای مختلف طراحی
            کرده‌ایم.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <ProjectGrid />
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
