import { PHOTO } from '../../data/images'
import { ButtonLink } from '../ui/Button'
import { Img } from '../ui/Img'
import { Reveal } from '../ui/Reveal'

export function EditorialSection() {
  return (
    <section className="editorial" aria-labelledby="editorial-title">
      <div className="container editorial__inner">
        <Reveal className="editorial__copy">
          <p className="eyebrow">لوک‌بوک · شماره ۰۴</p>
          <h2 className="editorial__title" id="editorial-title">
            سبکی فراتر
            <br />
            از <em>واقعیت</em>
          </h2>
          <p className="editorial__text">
            مجموعه‌ای از دکوراسیون‌های خاص که هنر، احساس و کاربرد را در کنار هم قرار می‌دهند. اتاق‌هایی
            که مثل صفحه‌ی یک مجله چیده می‌شوند — آهسته و با احساس.
          </p>
          <ButtonLink href="/inspiration" size="lg" icon="arrow-right">
            مشاهده کالکشن
          </ButtonLink>

          <dl className="editorial__stats">
            <div>
              <dt>هنرمندان</dt>
              <dd>۱۲۰+</dd>
            </div>
            <div>
              <dt>کشورها</dt>
              <dd>۲۴</dd>
            </div>
            <div>
              <dt>میانگین امتیاز</dt>
              <dd>۴٫۹</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="editorial__visual" delay={0.1}>
          <span className="editorial__blob" aria-hidden="true" />
          <figure className="editorial__arch">
            <Img
              photo={PHOTO.editorial}
              alt="اتاق نشیمن ادیتوریال با طاق‌های منحنی، صندلی مجسمه‌وار و نور گرم بعدازظهر"
              sizes="(max-width: 767px) 92vw, (max-width: 1199px) 48vw, 560px"
              ratio={[4, 5]}
            />
          </figure>
          <figure className="editorial__mini">
            <Img
              photo={PHOTO.editorialFloat}
              alt="گلدان سرامیکی مواج با یک شاخه‌ی خشک"
              sizes="150px"
              ratio={[1, 1]}
              widths={[240, 360]}
            />
            <figcaption>
              <span className="eyebrow">شیء شماره ۱۲</span>
              گلدان طاق عاج
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
