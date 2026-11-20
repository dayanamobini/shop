import { SectionHead } from '../ui/SectionHead';
import { Reveal } from '../ui/Reveal';
import { ProjectGrid } from '../portfolio/ProjectGrid';

export function PortfolioSection() {
  return (
    <section className="section" id="portfolio" aria-labelledby="portfolio-title">
      <div className="container">
        <Reveal>
          <SectionHead
            id="portfolio-title"
            eyebrow="نمونه‌کارها"
            title={
              <>
                پروژه‌هایی که <span className="grad-text">حرف می‌زنند.</span>
              </>
            }
            lead="بخشی از تجربه‌هایی که برای برندها و کسب‌وکارهای مختلف طراحی کرده‌ایم."
          />
        </Reveal>
        <ProjectGrid />
      </div>
    </section>
  );
}
