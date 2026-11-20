import { Link } from '../lib/router';
import { useDocumentMeta } from '../lib/hooks';
import { getService } from '../data/services';
import { getProject, type Project } from '../data/projects';
import { ServiceVisual } from '../components/home/ServiceVisual';
import { Accordion } from '../components/ui/Accordion';
import { ButtonLink } from '../components/ui/Button';
import { Icon } from '../components/ui/Icon';
import { Reveal } from '../components/ui/Reveal';
import { SectionHead } from '../components/ui/SectionHead';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { FinalCta } from '../components/home/FinalCta';
import { NotFoundPage } from './NotFoundPage';

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = getService(slug);

  useDocumentMeta(
    service ? `${service.title} | Webeko` : 'صفحه پیدا نشد | Webeko',
    service?.intro ?? 'این صفحه در Webeko وجود ندارد.',
  );

  if (!service) return <NotFoundPage />;

  const related = service.projects
    .map((projectSlug) => getProject(projectSlug))
    .filter((project): project is Project => Boolean(project));

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" aria-hidden="true">
          <div className="glow" />
        </div>
        <div className="container">
          <nav className="breadcrumb" aria-label="مسیر صفحه">
            <Link to="/">خانه</Link>
            <span className="breadcrumb-sep" aria-hidden="true">
              /
            </span>
            <Link to="/services">خدمات</Link>
            <span className="breadcrumb-sep" aria-hidden="true">
              /
            </span>
            <span aria-current="page">{service.title}</span>
          </nav>

          <div className="service-hero-grid" style={{ marginTop: 28 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start' }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                سرویس Webeko
              </span>
              <h1 className="page-title">{service.title}</h1>
              <p className="lead">{service.intro}</p>
              <div className="hero-actions">
                <ButtonLink to="/contact" icon="arrow-left">
                  شروع این پروژه
                </ButtonLink>
                <ButtonLink to="/portfolio" variant="ghost">
                  نمونه‌کارهای مرتبط
                </ButtonLink>
              </div>
            </div>
            <div className="service-hero-visual">
              <ServiceVisual variant={service.visual} />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="مزایا"
              title={
                <>
                  چه چیزی دریافت می‌کنید، <span className="grad-text">دقیق و بدون ابهام.</span>
                </>
              }
              lead="هر بخش از این سرویس با هدف مشخصی طراحی شده است؛ نه برای پر کردن صفحه."
            />
          </Reveal>
          <div className="feature-cards">
            {service.features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 60}>
                <article className="feature-card">
                  <span className="feature-card-icon" aria-hidden="true">
                    <Icon name="check" size={20} />
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="فرآیند"
              title={
                <>
                  مسیر پروژه، <span className="grad-text">از اولین جلسه تا تحویل.</span>
                </>
              }
            />
          </Reveal>
          <div className="process-track">
            {service.process.map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <div className="step">
                  <div className="step-num" aria-hidden="true">
                    {`0${index + 1}`}
                  </div>
                  <div className="step-card">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-text">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container why-grid">
          <Reveal>
            <SectionHead
              eyebrow="خروجی پروژه"
              title={
                <>
                  در پایان، <span className="grad-text">چه چیزی تحویل می‌گیرید؟</span>
                </>
              }
              lead="فهرست تحویل‌دادنی‌ها از ابتدای پروژه مشخص است؛ هیچ بخشی مبهم باقی نمی‌ماند."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="deliverables">
              {service.deliverables.map((item) => (
                <div className="deliverable" key={item}>
                  <Icon name="check" size={16} />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <Reveal>
              <SectionHead
                eyebrow="نمونه‌کار"
                title={
                  <>
                    این سرویس، <span className="grad-text">در عمل.</span>
                  </>
                }
              />
            </Reveal>
            <div className="portfolio-grid">
              {related.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container faq-grid">
          <Reveal>
            <SectionHead
              eyebrow="سؤالات متداول"
              title={
                <>
                  سؤال‌های رایج درباره <span className="grad-text">{service.title}</span>
                </>
              }
            />
          </Reveal>
          <Reveal delay={80}>
            <Accordion items={service.faq} />
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
