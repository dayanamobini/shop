import { Link } from '../../lib/router';
import type { Project } from '../../data/projects';
import { ProjectCover } from './ProjectCover';
import { Icon } from '../ui/Icon';

type ProjectCardProps = {
  project: Project;
  onQuickView?: (project: Project) => void;
};

export function ProjectCard({ project, onQuickView }: ProjectCardProps) {
  const href = `/portfolio/${project.slug}`;

  return (
    <article className="project-card">
      <div className="project-cover">
        <Link to={href} className="project-cover-inner" aria-label={`مشاهده پروژه ${project.title}`} tabIndex={-1}>
          <ProjectCover project={project} />
        </Link>
        <span className="project-cat">{project.categoryLabel}</span>
        {onQuickView ? (
          <button
            type="button"
            className="project-quick"
            aria-label={`نمای سریع پروژه ${project.title}`}
            onClick={() => onQuickView(project)}
          >
            <Icon name="eye" size={17} />
          </button>
        ) : null}
      </div>

      <div className="project-body">
        <div className="project-head">
          <h3 className="project-title">
            <Link to={href}>{project.title}</Link>
          </h3>
          <Link to={href} className="project-arrow" aria-hidden="true" tabIndex={-1}>
            <Icon name="arrow-left" size={17} />
          </Link>
        </div>
        <p className="project-desc">{project.summary}</p>
        <div className="project-tags">
          {project.tech.map((tech) => (
            <span className="chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
