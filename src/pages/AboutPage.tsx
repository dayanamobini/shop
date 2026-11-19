import { PHOTO } from '../data/images'
import { ButtonLink } from '../components/ui/Button'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Icon } from '../components/ui/Icon'
import { Img } from '../components/ui/Img'
import { Reveal } from '../components/ui/Reveal'

const VALUES = [
  {
    title: 'Made by hand',
    copy: 'Every piece passes through a maker’s hands — thrown, carved, woven or finished one at a time.',
    icon: 'sparkle' as const,
  },
  {
    title: 'Chosen slowly',
    copy: 'We add a handful of pieces each season, and only when they earn their place in a room.',
    icon: 'eye' as const,
  },
  {
    title: 'Made to last',
    copy: 'Natural materials, repairable construction, and packaging that leaves nothing behind.',
    icon: 'shield' as const,
  },
]

const ARTISANS = [
  {
    name: 'Marta & João',
    craft: 'Ceramics · Lisbon',
    photo: 'photo-1493106641515-6b5631de4bb9',
    quote: 'The wobble is where the hand shows. We keep it.',
  },
  {
    name: 'Studio Alba',
    craft: 'Lighting · Copenhagen',
    photo: 'photo-1540932239986-30128078f3c5',
    quote: 'Light should feel like weather, not like a fixture.',
  },
  {
    name: 'Yasmine B.',
    craft: 'Textiles · Marrakech',
    photo: 'photo-1611489704434-2612dc89c992',
    quote: 'A loom is patient. We learned to be patient too.',
  },
]

const FAQS = [
  {
    q: 'How long does delivery take?',
    a: 'Standard delivery arrives in 2–4 business days and is complimentary on orders over $99. Express delivery arrives the next business day before noon.',
  },
  {
    q: 'What is your returns policy?',
    a: 'Return anything within 30 days in its original condition for a full refund. We cover the return shipping on damaged or incorrect items.',
  },
  {
    q: 'Are the pieces truly handmade?',
    a: 'Yes. Small variations in glaze, grain and shape are part of the process and are never considered defects.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'We ship to 24 countries. Duties and taxes are calculated at checkout so there are no surprises on arrival.',
  },
]

export function AboutPage() {
  return (
    <div className="about">
      <div className="container">
        <Breadcrumbs items={[{ label: 'About' }]} />
      </div>

      <section className="about-hero">
        <div className="container about-hero__inner">
          <Reveal className="about-hero__media">
            <Img
              photo={PHOTO.aboutBanner}
              alt="The DreamDécor studio, with objects laid out on a long table"
              sizes="(max-width: 767px) 92vw, 50vw"
              ratio={[4, 5]}
              eager
            />
            <span className="about-hero__stamp" aria-hidden="true">
              <span>DreamDécor</span>
              <span>Lisbon · 2014</span>
            </span>
          </Reveal>
          <Reveal className="about-hero__copy" delay={0.08}>
            <p className="eyebrow">About DreamDécor</p>
            <h1 className="page-title">
              Objects With a <em>Story</em>
            </h1>
            <p className="page-sub">
              We curate artistic, functional and emotionally meaningful pieces for modern homes —
              made by people we know, in places we’ve been.
            </p>
            <p className="about-hero__text">
              DreamDécor began in a small Lisbon apartment with one rule: only keep what you would
              notice if it were gone. Ten years later, that rule still decides everything we make,
              stock and ship.
            </p>
            <ButtonLink href="#artisans" variant="outline" icon="arrow-right">
              Meet the artisans
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="section section--cream" id="values" aria-labelledby="values-title">
        <div className="container">
          <Reveal className="section-head">
            <div className="section-head__text">
              <p className="eyebrow">What we believe</p>
              <h2 className="section-head__title" id="values-title">
                Slow, Considered, <em>Human</em>
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
              <p className="eyebrow">The makers</p>
              <h2 className="section-head__title" id="artisans-title">
                Hands Behind the <em>Objects</em>
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
                <p className="artisan__quote">“{artisan.quote}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream" id="shipping" aria-labelledby="faq-title">
        <div className="container about__faq">
          <Reveal className="about__faq-copy">
            <p className="eyebrow">Help & information</p>
            <h2 className="section-head__title" id="faq-title">
              Good to <em>Know</em>
            </h2>
            <p className="page-sub">
              Shipping, returns and the small details. Anything else — we’re at
              hello@dreamdecor.studio.
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
            <p className="eyebrow">Say hello</p>
            <h2 className="section-head__title" id="contact-title">
              We’d love to <em>hear from you</em>
            </h2>
            <p className="page-sub">
              Studio visits by appointment, Tuesday to Friday, in Lisbon’s Príncipe Real.
            </p>
            <div className="about__contact-lines">
              <a href="mailto:hello@dreamdecor.studio">hello@dreamdecor.studio</a>
              <a href="tel:+351210000000">+351 21 000 0000</a>
              <span>Rua das Flores 24, 1200-195 Lisboa</span>
            </div>
          </Reveal>
          <Reveal className="about__contact-card" delay={0.08}>
            <p className="eyebrow">Studio hours</p>
            <p>Tuesday – Friday · 10:00 – 18:00</p>
            <p>Saturday · 11:00 – 16:00</p>
            <ButtonLink href="/shop" variant="outline" size="sm" icon="arrow-right">
              Shop the collection
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
