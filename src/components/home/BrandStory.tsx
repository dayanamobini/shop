import { PHOTO } from '../../data/images'
import { ButtonLink } from '../ui/Button'
import { Img } from '../ui/Img'
import { Reveal } from '../ui/Reveal'

export function BrandStory() {
  return (
    <section className="section story" aria-labelledby="story-title">
      <div className="container story__inner">
        <Reveal className="story__visual">
          <figure className="story__arch">
            <Img
              photo={PHOTO.story}
              alt="استودیوی یک هنرمند با قطعات سرامیکی دست‌ساز روی میز کار چوبی"
              sizes="(max-width: 767px) 92vw, 46vw"
              ratio={[4, 5]}
            />
          </figure>
          <figure className="story__mini">
            <Img
              photo={PHOTO.storyFloat}
              alt="یک شیء مجسمه‌وار کوچک در دو دست"
              sizes="160px"
              ratio={[1, 1]}
              widths={[240, 360]}
            />
          </figure>
          <span className="story__stamp" aria-hidden="true">
            <span>از سال</span>
            <span>۱۳۹۳</span>
          </span>
        </Reveal>

        <Reveal className="story__copy" delay={0.08}>
          <p className="eyebrow">درباره دریم‌دکور</p>
          <h2 className="story__title" id="story-title">
            اشیایی با یک <em>داستان</em>
          </h2>
          <p className="story__lead">
            در دریم‌دکور، هر قطعه با دقت انتخاب می‌شود تا میان زیبایی، کاربرد و احساسی که به خانه
            می‌بخشد، تعادل ایجاد کند.
          </p>
          <p className="story__text">
            ما مستقیم با ۱۲۰ هنرمند در ۲۴ کشور کار می‌کنیم — سفالگران، بافندگان، سنگ‌تراشان و
            استودیوهای نورپردازی — و برای کار آهسته‌ای که انجام می‌دهند، منصفانه می‌پردازیم.
            هیچ‌چیز اینجا تولید انبوه نیست. همه‌چیز انتخاب شده تا با آن زندگی شود و سپس به دیگری
            برسد.
          </p>
          <ButtonLink href="/about" size="lg" variant="outline" icon="arrow-right">
            داستان ما را بخوانید
          </ButtonLink>
          <div className="story__signature">
            <span className="story__line" aria-hidden="true" />
            <p>
              النا دوآرته
              <span>بنیان‌گذار و مدیر خلاقیت</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
