import type { CSSProperties } from 'react';
import type { Project } from '../../data/projects';

/** A generated, code-drawn cover for a project — keeps the showcase consistent and fast. */
export function ProjectCover({ project }: { project: Project }) {
  const style = {
    '--c1': project.accent[0],
    '--c2': project.accent[1],
  } as CSSProperties;

  const isDashboard = project.cover === 'dashboard';
  const isUi = project.cover === 'uiux' || isDashboard;

  return (
    <div className={`cover cover--${project.cover}`} style={style} aria-hidden="true">
      <div className="cover-frame">
        <div className="cover-bar">
          <i className="cover-dot" />
          <i className="cover-dot" />
          <i className="cover-dot" />
        </div>

        {isUi ? (
          <div className="cover-body">
            <div className="cover-side" />
            <div className="cover-main">
              <div className="cover-hero" />
              {isDashboard ? (
                <div className="cover-chart">
                  <span style={{ height: '40%' }} />
                  <span style={{ height: '68%' }} />
                  <span style={{ height: '52%' }} />
                  <span style={{ height: '88%' }} />
                  <span style={{ height: '62%' }} />
                  <span style={{ height: '100%' }} />
                </div>
              ) : (
                <div className="cover-chip-row">
                  <span />
                  <span />
                  <span />
                </div>
              )}
              <div className="cover-lines">
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        ) : (
          <div className="cover-body">
            <div className="cover-hero" />
            <div className="cover-lines">
              <i />
              <i />
              <i />
            </div>
            {project.cover === 'landing' ? (
              <div className="cover-cta" />
            ) : (
              <div className="cover-grid">
                <div />
                <div />
                <div />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
