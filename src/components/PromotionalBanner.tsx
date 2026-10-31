import { Link } from '../lib/router'

type Banner = {
  eyebrow: string
  title: string
  subtitle: string
  cta: string
  to: string
  image: string
  tone: 'dark' | 'light'
}

export default function PromotionalBanner({ banner }: { banner: Banner }) {
  return (
    <article className={`promo${banner.tone === 'light' ? ' promo--light' : ''}`}>
      <img src={banner.image} alt="" loading="lazy" />
      <div className="promo__body">
        <p className="promo__eyebrow">{banner.eyebrow}</p>
        <h3>{banner.title}</h3>
        <p>{banner.subtitle}</p>
        <p className="promo__price">Up to 30% off</p>
        <Link to={banner.to} className="text-link">
          {banner.cta} →
        </Link>
      </div>
    </article>
  )
}
