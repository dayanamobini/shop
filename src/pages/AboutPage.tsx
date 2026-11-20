import { PHOTO } from '../data/images'
import { ButtonLink } from '../components/ui/Button'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Icon } from '../components/ui/Icon'
import { Img } from '../components/ui/Img'
import { Reveal } from '../components/ui/Reveal'

const VALUES = [
  {
    title: 'ساخته‌شده با دست',
    copy: 'هر قطعه از دست‌های یک هنرمند می‌گذرد — چرخ‌کاری، تراش، بافت یا پرداخت، یکی‌یکی.',
    icon: 'sparkle' as const,
  },
  {
    title: 'آهسته انتخاب‌شده',
    copy: 'هر فصل چند قطعه اضافه می‌کنیم، و تنها وقتی که جای خود را در یک اتاق به دست آورند.',
    icon: 'eye' as const,
  },
  {
    title: 'ساخته‌شده برای ماندن',
    copy: 'مواد طبیعی، ساختار قابل تعمیر و بسته‌بندی‌ای که چیزی از خود باقی نمی‌گذارد.',
    icon: 'shield' as const,
  },
]

const ARTISANS = [
  {
    name: 'مارتا و ژوآئو',
    craft: 'سرامیک · لیسبون',
    photo: 'photo-1493106641515-6b5631de4bb9',
    quote: 'کجیِ فرم همان‌جایی است که دست دیده می‌شود. ما نگهش می‌داریم.',
  },
  {
    name: 'استودیو آلبا',
    craft: 'نورپردازی · کپنهاگ',
    photo: 'photo-1540932239986-30128078f3c5',
    quote: 'نور باید مثل هوا باشد، نه مثل یک وسیله.',
  },
  {
    name: 'یاسمین ب.',
    craft: 'منسوجات · مراکش',
    photo: 'photo-1611489704434-2612dc89c992',
    quote: 'دارِ بافندگی صبور است. ما هم یاد گرفتیم صبور باشیم.',
  },
]

const FAQS = [
  {
    q: 'ارسال چقدر طول می‌کشد؟',
    a: 'ارسال استاندارد در ۲ تا ۴ روز کاری می‌رسد و برای سفارش‌های بالای ۲ میلیون تومان رایگان است. ارسال فوری روز کاری بعد، پیش از ظهر تحویل می‌شود.',
  },
  {
    q: 'شرایط بازگشت کالا چیست؟',
    a: 'تا ۳۰ روز می‌توانید هر کالایی را در وضعیت اولیه بازگردانید و مبلغ کامل را دریافت کنید. هزینه‌ی بازگشت کالاهای آسیب‌دیده یا اشتباه با ماست.',
  },
  {
    q: 'آیا قطعات واقعاً دست‌ساز هستند؟',
    a: 'بله. تفاوت‌های کوچک در لعاب، رگه‌ی چوب و فرم، بخشی از فرآیند است و هرگز نقص محسوب نمی‌شود.',
  },
  {
    q: 'به خارج از کشور ارسال می‌کنید؟',
    a: 'به ۲۴ کشور ارسال داریم. عوارض و مالیات در مرحله‌ی پرداخت محاسبه می‌شود تا در تحویل غافلگیر نشوید.',
  },
]

export function AboutPage() {
  return (
    <div className="about">
      <div className="container">
        <Breadcrumbs items={[{ label: 'درباره ما' }]} />
      </div>

      <section className="about-hero">
        <div className="container about-hero__inner">
          <Reveal className="about-hero__media">
            <Img
              photo={PHOTO.aboutBanner}
              alt="استودیوی دریم‌دکور با اشیائی که روی میزی بلند چیده شده‌اند"
              sizes="(max-width: 767px) 92vw, 50vw"
              ratio={[4, 5]}
              eager
            />
            <span className="about-hero__stamp" aria-hidden="true">
              <span>دریم‌دکور</span>
              <span>لیسبون · ۱۳۹۳</span>
            </span>
          </Reveal>
          <Reveal className="about-hero__copy" delay={0.08}>
            <p className="eyebrow">درباره دریم‌دکور</p>
            <h1 className="page-title">
              اشیایی با یک <em>داستان</em>
            </h1>
            <p className="page-sub">
              ما قطعاتی هنری، کاربردی و سرشار از احساس را برای خانه‌های مدرن انتخاب می‌کنیم —
              ساخته‌شده به دست کسانی که می‌شناسیم، در جاهایی که بوده‌ایم.
            </p>
            <p className="about-hero__text">
              دریم‌دکور در آپارتمانی کوچک در لیسبون و با یک قاعده شروع شد: فقط چیزی را نگه دار که
              اگر نبود، جایش را حس می‌کردی. ده سال بعد، همان قاعده هنوز همه‌چیز را تعیین می‌کند.
            </p>
            <ButtonLink href="#artisans" variant="outline" icon="arrow-right">
              آشنایی با هنرمندان
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="section section--cream" id="values" aria-labelledby="values-title">
        <div className="container">
          <Reveal className="section-head">
            <div className="section-head__text">
              <p className="eyebrow">آنچه باور داریم</p>
              <h2 className="section-head__title" id="values-title">
                آهسته، اندیشیده، <em>انسانی</em>
              </h2>
            </div>
          </Reveal>
          <div className="values">
            {VALUES.map((value) => (
              <div className="value" key={value.title}>
                <span className="value__icon">
                  <Icon name={value.icon} size={22} />
                </span>
                <h3 className="value__title">{value.title}</h3>
                <p>{value.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="artisans" aria-labelledby="artisans-title">
        <div className="container">
          <Reveal className="section-head">
            <div className="section-head__text">
              <p className="eyebrow">سازندگان</p>
              <h2 className="section-head__title" id="artisans-title">
                دست‌های پشت <em>اشیاء</em>
              </h2>
            </div>
          </Reveal>
          <div className="artisans">
            {ARTISANS.map((artisan) => (
              <article className="artisan" key={artisan.name}>
                <div className="artisan__media">
                  <Img
                    photo={artisan.photo}
                    alt={`${artisan.name} — ${artisan.craft}`}
                    sizes="(max-width: 767px) 92vw, 30vw"
                    ratio={[4, 5]}
                  />
                </div>
                <p className="artisan__craft">{artisan.craft}</p>
                <h3 className="artisan__name">{artisan.name}</h3>
                <p className="artisan__quote">«{artisan.quote}»</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream" id="shipping" aria-labelledby="faq-title">
        <span id="faq" aria-hidden="true" />
        <div className="container about__faq">
          <Reveal className="about__faq-copy">
            <p className="eyebrow">راهنما و اطلاعات</p>
            <h2 className="section-head__title" id="faq-title">
              خوب است <em>بدانی</em>
            </h2>
            <p className="page-sub">
              ارسال، بازگشت و جزئیات کوچک. هر پرسش دیگری — به hello@dreamdecor.studio ایمیل بزن.
            </p>
          </Reveal>
          <div className="acc-list">
            {FAQS.map((faq) => (
              <details className="acc" key={faq.q}>
                <summary>
                  {faq.q} <Icon name="plus" size={16} />
                </summary>
                <div className="acc__body">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section about__contact" id="contact" aria-labelledby="contact-title">
        <div className="container about__contact-inner">
          <Reveal>
            <p className="eyebrow">سلام بگو</p>
            <h2 className="section-head__title" id="contact-title">
              دوست داریم از تو <em>بشنویم</em>
            </h2>
            <p className="page-sub">
              بازدید از استودیو با هماهنگی قبلی، سه‌شنبه تا جمعه، در محله‌ی پرینسیپه‌ریال لیسبون.
            </p>
            <div className="about__contact-lines">
              <a href="mailto:hello@dreamdecor.studio">hello@dreamdecor.studio</a>
              <a href="tel:+351210000000" dir="ltr">+351 21 000 0000</a>
              <span>Rua das Flores 24, 1200-195 Lisboa</span>
            </div>
          </Reveal>
          <Reveal className="about__contact-card" delay={0.08}>
            <p className="eyebrow">ساعت‌های استودیو</p>
            <p>سه‌شنبه تا جمعه · ۱۰:۰۰ تا ۱۸:۰۰</p>
            <p>شنبه · ۱۱:۰۰ تا ۱۶:۰۰</p>
            <ButtonLink href="/shop" variant="outline" size="sm" icon="arrow-right">
              دیدن مجموعه
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
