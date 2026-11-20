import { solutions } from '../../data/site';
import { SectionHead } from '../ui/SectionHead';
import { Reveal } from '../ui/Reveal';
import { Icon } from '../ui/Icon';

export function Solutions() {
  return (
    <section className="section" aria-labelledby="solutions-title">
      <div className="container">
        <Reveal>
          <SectionHead
            id="solutions-title"
            eyebrow="راهکارها"
            title={
              <>
                برای هر کسب‌وکار، <span className="grad-text">یک راهکار متفاوت.</span>
              </>
            }
            lead="یک قالب برای همه کار نمی‌کند. راهکار هر پروژه بر اساس مخاطب، هدف و مرحله رشد آن کسب‌وکار طراحی می‌شود."
          />
        </Reveal>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <Reveal key={solution.title} delay={index * 70}>
              <article className="solution-card">
                <div className="solution-visual" aria-hidden="true">
                  <Icon name={solution.icon} size={26} />
                </div>
                <h3 className="solution-title">{solution.title}</h3>
                <p className="solution-text">{solution.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
