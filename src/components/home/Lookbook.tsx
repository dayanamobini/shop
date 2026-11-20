import { PHOTO } from '../../data/images'
import { useParallax } from '../../lib/hooks'
import { ButtonLink } from '../ui/Button'
import { Img } from '../ui/Img'

export function Lookbook() {
  const ref = useParallax<HTMLDivElement>(60)

  return (
    <section className="lookbook" id="lookbook" aria-labelledby="lookbook-title">
      <div className="lookbook__media" ref={ref}>
        <Img
          photo={PHOTO.lookbook}
          alt="صحنه‌ای سینمایی از یک فضای داخلی با نور گرم غروب، مبل منحنی و اشیاء مجسمه‌وار"
          sizes="100vw"
          ratio={[16, 9]}
          widths={[768, 1024, 1440, 1920, 2400]}
        />
      </div>
      <span className="lookbook__shade" aria-hidden="true" />
      <div className="lookbook__inner container">
        <p className="eyebrow eyebrow--light">فیلم دریم‌دکور</p>
        <h2 className="lookbook__title" id="lookbook-title">
          زیبایی را <em>زندگی کن</em>
        </h2>
        <p className="lookbook__copy">
          ما اتاق‌ها را برای عکاسی نچیده‌ایم؛ برای ساعتی چیده‌ایم که نور کهربایی می‌شود و روز
          بالاخره آهسته می‌گیرد.
        </p>
        <ButtonLink href="/inspiration" variant="light" size="lg" icon="arrow-right">
          مشاهده مجله دکور
        </ButtonLink>
      </div>
      <div className="lookbook__chapters container">
        <span>۰۱ · سکون</span>
        <span>۰۲ · نور</span>
        <span>۰۳ · ساخته‌شده با دست</span>
      </div>
    </section>
  )
}
