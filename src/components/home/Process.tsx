import { processSteps } from '../../data/site';
import { SectionHead } from '../ui/SectionHead';
import { Reveal } from '../ui/Reveal';

export function Process() {
  return (
    <section className="section" id="process" aria-labelledby="process-title">
      <div className="container">
        <Reveal>
          <SectionHead
            id="process-title"
            eyebrow="فرآیند همکاری"
            title={
              <>
                از ایده تا اجرا، <span className="grad-text">کنار شما هستیم.</span>
              </>
            }
            lead="یک مسیر روشن و قابل پیش‌بینی؛ در هر مرحله می‌دانید پروژه کجاست و قدم بعدی چیست."
          />
        </Reveal>

        <div className="process-track">
          {processSteps.map((step, index) => (
            <Reveal key={step.num} delay={index * 90}>
              <div className="step">
                <div className="step-num" aria-hidden="true">
                  {step.num}
                </div>
                <div className="step-card">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-text">{step.text}</p>
                  <span className="chip step-tag">{step.tag}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
