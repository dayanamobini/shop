import { faqItems } from '../../data/faq';
import { SectionHead } from '../ui/SectionHead';
import { Reveal } from '../ui/Reveal';
import { Accordion } from '../ui/Accordion';
import { ButtonLink } from '../ui/Button';

export function Faq() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container faq-grid">
        <Reveal>
          <div>
            <SectionHead
              id="faq-title"
              eyebrow="سؤالات متداول"
              title={
                <>
                  سؤالاتی که احتمالاً <span className="grad-text">برای شما هم پیش آمده</span>
                </>
              }
              lead="اگر پاسخ سوالتان اینجا نبود، در فرم تماس بپرسید؛ در اولین فرصت جواب می‌دهیم."
            />
            <ButtonLink to="/contact" variant="ghost">
              پرسیدن یک سؤال دیگر
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Accordion items={faqItems} />
        </Reveal>
      </div>
    </section>
  );
}
