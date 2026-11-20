import { technologies } from '../../data/tech';
import { SectionHead } from '../ui/SectionHead';
import { Reveal } from '../ui/Reveal';

export function TechStack() {
  return (
    <section className="section" aria-labelledby="tech-title">
      <div className="container">
        <Reveal>
          <SectionHead
            id="tech-title"
            eyebrow="تکنولوژی"
            title={
              <>
                با تکنولوژی درست، <span className="grad-text">بهتر بساز.</span>
              </>
            }
            lead="ابزار را بر اساس نیاز پروژه انتخاب می‌کنیم، نه بر اساس عادت. نتیجه، محصولی است که سال‌ها قابل نگهداری و توسعه باقی می‌ماند."
          />
        </Reveal>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <Reveal key={tech.name} delay={index * 45}>
              <div className="tech-item">
                <span className="tech-glyph" aria-hidden="true">
                  {tech.glyph}
                </span>
                <span className="tech-name">{tech.name}</span>
                <span className="tech-hint">{tech.hint}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
