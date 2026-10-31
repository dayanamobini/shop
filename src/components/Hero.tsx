import { heroImage } from '../data/catalog'
import { Link } from '../lib/router'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__panel">
          <div className="hero__content">
            <p className="eyebrow hero__eyebrow">The autumn collection</p>
            <h1 id="hero-title">
              Timeless Style.
              <br />
              Modern Elegance.
            </h1>
            <p className="hero__sub">
              Elevated everyday pieces, designed to make you feel confident.
            </p>
            <div className="hero__actions">
              <Link to="/shop" className="btn">
                Shop new arrivals
              </Link>
              <Link to="/shop/blazers" className="text-link">
                Explore collections →
              </Link>
            </div>
          </div>
        </div>

        <div className="hero__media">
          <img
            src={heroImage}
            alt="Model wearing a black midi dress and wide-brim hat from the DEVA autumn collection"
            width={1400}
            height={900}
          />
          <span className="hero__caption">Autumn / Winter 26</span>
        </div>
      </div>
    </section>
  )
}
