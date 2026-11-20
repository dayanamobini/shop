import { useEffect, useRef, useState } from 'react';
import { categories, projects, type Project, type ProjectCategory } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectCover } from './ProjectCover';
import { ProjectSkeletons } from '../ui/Skeleton';
import { Modal } from '../ui/Modal';
import { ButtonLink } from '../ui/Button';
import { Icon } from '../ui/Icon';

export function ProjectGrid({ showCount = true }: { showCount?: boolean }) {
  const [active, setActive] = useState<ProjectCategory | 'all'>('all');
  const [loading, setLoading] = useState(false);
  const [quickView, setQuickView] = useState<Project | null>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const filtered = active === 'all' ? projects : projects.filter((project) => project.category === active);

  const selectCategory = (key: ProjectCategory | 'all') => {
    if (key === active) return;
    setActive(key);
    setLoading(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setLoading(false), 240);
  };

  return (
    <div>
      <div className="portfolio-toolbar">
        <div className="filter-bar" role="group" aria-label="فیلتر نمونه‌کارها">
          {categories.map((category) => (
            <button
              key={category.key}
              type="button"
              className="filter-btn"
              aria-pressed={active === category.key}
              onClick={() => selectCategory(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>
        {showCount ? (
          <span className="portfolio-count" aria-live="polite">
            {filtered.length} پروژه
          </span>
        ) : null}
      </div>

      {loading ? (
        <ProjectSkeletons count={4} />
      ) : filtered.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon" aria-hidden="true">
            <Icon name="sparkles" size={22} />
          </span>
          <h3>در حال آماده‌سازی پروژه‌های جدید هستیم.</h3>
          <p>به‌زودی نمونه‌کارهای بیشتری در این دسته منتشر می‌کنیم.</p>
        </div>
      ) : (
        <div className="portfolio-grid">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} onQuickView={setQuickView} />
          ))}
        </div>
      )}

      <Modal
        open={quickView !== null}
        onClose={() => setQuickView(null)}
        label={quickView ? `نمای سریع پروژه ${quickView.title}` : 'نمای سریع پروژه'}
      >
        {quickView ? (
          <div className="quick-view">
            <div className="quick-cover">
              <ProjectCover project={quickView} />
            </div>
            <div className="quick-body">
              <div className="quick-meta">
                <span className="chip chip--accent">{quickView.categoryLabel}</span>
                <span className="chip">{quickView.year}</span>
              </div>
              <h3 className="quick-title">{quickView.title}</h3>
              <p className="quick-text">{quickView.description}</p>
              <div className="project-tags">
                {quickView.tech.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <ButtonLink to={`/portfolio/${quickView.slug}`} onClick={() => setQuickView(null)} icon="arrow-left">
                مشاهده پروژه کامل
              </ButtonLink>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
