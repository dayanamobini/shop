import { Link } from '../lib/router';
import { useDocumentMeta } from '../lib/hooks';
import { getProject } from '../data/projects';
import { ProjectCover } from '../components/portfolio/ProjectCover';
import { ButtonLink } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { SectionHead } from '../components/ui/SectionHead';
import { NotFoundPage } from './NotFoundPage';

export function ProjectDetailPage({ slug }: { slug: string }) {
  const project = getProject(slug);

  useDocumentMeta(
    project ? `${project.title} | نمونه‌کارهای Webeko` : 'صفحه پیدا نشد | Webeko',
    project?.summary ?? 'این پروژه در Webeko وجود ندارد.',
  );

  if (!project) return <NotFoundPage />;

  const meta = [
    { label: 'کارفرما', value: project.client },
    { label: 'دسته‌بندی', value: project.categoryLabel },
    { label: 'سال اجرا', value: project.year },
    { label: 'خدمات', value: project.services[0] },
  ];

  const cases = [
    { index: '۰۱', title: 'چالش پروژه', text: project.challenge },
    { index: '۰۲', title: 'راه‌حل ما', text: project.solution },
    { index: '۰۳', title: 'نتیجه', text: project.result },
  ];

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
            <Link to="/portfolio">نمونه‌کارها</Link>
            <span className="breadcrumb-sep" aria-hidden="true">
              /
            </span>
            <span aria-current="page">{project.title}</span>
          </nav>

          <div className="page-hero-inner" style={{ marginTop: 22 }}>
            <span className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              {project.categoryLabel}
            </span>
            <h1 className="page-title">
              {project.title} — <span className="grad-text">{project.tagline}</span>
            </h1>
            <p className="lead">{project.description}</p>
            <div className="hero-actions">
              <ButtonLink to="/contact" icon="arrow-left">
                پروژه خودت را شروع کن
              </ButtonLink>
              <ButtonLink to="/portfolio" variant="ghost">
                بازگشت به نمونه‌کارها
              </ButtonLink>
            </div>
          </div>

          <div className="project-hero-media">
            <ProjectCover project={project} />
          </div>

          <div className="project-meta-grid">
            {meta.map((item) => (
              <div className="project-meta-item" key={item.label}>
                <div className="project-meta-label">{item.label}</div>
                <div className="project-meta-value">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="مطالعه موردی"
              title={
                <>
                  چه مسئله‌ای حل شد و <span className="grad-text">چطور.</span>
                </>
              }
            />
          </Reveal>
          <div className="case-grid">
            {cases.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="case-block">
                  <div className="case-index">{item.index}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="project-tags" style={{ marginTop: 28 }}>
            {project.services.map((service) => (
              <span className="chip chip--accent" key={service}>
                {service}
              </span>
            ))}
            {project.tech.map((tech) => (
              <span className="chip" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="پیش‌نمایش"
              title={
                <>
                  همان تجربه، <span className="grad-text">در هر اندازه صفحه.</span>
                </>
              }
              lead="طراحی روی دسکتاپ تمام نمی‌شود؛ هر اندازه صفحه نسخه اختصاصی خودش را دارد."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="devices">
              <div className="device device--desktop">
                <ProjectCover project={project} />
              </div>
              <div className="device device--tablet">
                <ProjectCover project={project} />
              </div>
              <div className="device device--phone">
                <ProjectCover project={project} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="cta-panel">
              <div className="cta-inner">
                <h2 className="cta-title">پروژه خودت را شروع کن</h2>
                <p className="cta-lead">
                  اگر این پروژه به کار شما شبیه است، بیایید درباره نسخه خودتان صحبت کنیم.
                </p>
                <div className="cta-actions">
                  <ButtonLink to="/contact" icon="arrow-left">
                    گفتگو با Webeko
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
