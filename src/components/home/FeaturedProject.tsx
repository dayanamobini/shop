import { getFeaturedProject } from '../../data/projects';
import { ButtonLink } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { ProjectCover } from '../portfolio/ProjectCover';

const highlights = ['طراحی UI/UX', 'توسعه', 'ریسپانسیو', 'بهینه‌سازی'];

export function FeaturedProject() {
  const project = getFeaturedProject();

  return (
    <section className="section" aria-labelledby="featured-title">
      <div className="container">
        <Reveal>
          <div className="featured-panel glass glass--edge">
            <div className="featured-media">
              <ProjectCover project={project} />
            </div>
            <div className="featured-content">
              <span className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                پروژه ویژه
              </span>
              <h2 className="featured-title" id="featured-title">
                یک تجربه دیجیتال متفاوت
              </h2>
              <p className="lead" style={{ fontSize: '0.98rem' }}>
                {project.description}
              </p>
              <div className="featured-list">
                {highlights.map((item) => (
                  <span className="chip chip--accent" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <div>
                <ButtonLink to={`/portfolio/${project.slug}`} icon="arrow-left">
                  مشاهده پروژه
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
