import { PHOTO } from '../../data/images'
import { useParallax } from '../../lib/hooks'
import { navigate } from '../../lib/hooks'
import { ButtonLink } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Img } from '../ui/Img'

export function Hero() {
  const visualRef = useParallax<HTMLDivElement>(34)

  return (
    <section className="hero" aria-labelledby="hero-title">
      <span className="hero__wash" aria-hidden="true" />
      <span className="hero__ring" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">Home Décor Store</p>
          <h1 className="hero__title" id="hero-title">
            Turn Your Home
            <br />
            Into a <em>Dreamscape</em>
          </h1>
          <p className="hero__text">
            Extraordinary décor pieces for extraordinary living — hand-thrown, hand-woven, and
            chosen one at a time.
          </p>
          <div className="hero__ctas">
            <ButtonLink href="/shop" size="lg" icon="arrow-right">
              Shop the Collection
            </ButtonLink>
            <button
              type="button"
              className="btn btn--ghost btn--lg hero__story"
              onClick={() =>
                document.getElementById('lookbook')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <span className="hero__play">
                <Icon name="play" size={13} />
              </span>
              Watch Story
            </button>
          </div>
          <div className="hero__proof">
            <div className="hero__faces" aria-hidden="true">
              <span style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=70'})` }} />
              <span style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=70'})` }} />
              <span style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=70'})` }} />
            </div>
            <p>
              <strong>4.9 / 5</strong> from 2,480 homes
            </p>
          </div>
        </div>

        <div className="hero__visual" ref={visualRef}>
          <figure className="hero__main">
            <Img
              photo={PHOTO.hero}
              alt="A softly lit living room styled with sculptural décor, an arched mirror and warm cream textiles"
              sizes="(max-width: 767px) 92vw, (max-width: 1199px) 52vw, 620px"
              ratio={[4, 5]}
              eager
            />
          </figure>

          <figure className="hero__float">
            <Img
              photo={PHOTO.heroFloat}
              alt="A hand-thrown ceramic vase on a marble plinth"
              sizes="180px"
              ratio={[3, 4]}
              widths={[240, 400, 600]}
            />
            <figcaption>Hand-thrown</figcaption>
          </figure>

          <a
            className="hero__card"
            href="/collections/golden-hour"
            onClick={(event) => {
              event.preventDefault()
              navigate('/collections/golden-hour')
            }}
          >
            <p className="eyebrow">This season</p>
            <p className="hero__card-title">The Golden Hour</p>
            <span className="hero__card-link">
              Explore the edit <Icon name="arrow-right" size={14} />
            </span>
          </a>

          <span className="hero__seal" aria-hidden="true">
            <svg viewBox="0 0 120 120" className="hero__seal-ring">
              <defs>
                <path
                  id="sealPath"
                  d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0"
                />
              </defs>
              <text>
                <textPath href="#sealPath">
                  HANDCRAFTED · SINCE 2014 · SLOW MADE · HANDCRAFTED · SINCE 2014 ·
                </textPath>
              </text>
            </svg>
            <span className="hero__seal-dot" />
          </span>
        </div>
      </div>
      <span className="hero__curve" aria-hidden="true" />
    </section>
  )
}
