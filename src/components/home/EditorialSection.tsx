import { PHOTO } from '../../data/images'
import { ButtonLink } from '../ui/Button'
import { Img } from '../ui/Img'
import { Reveal } from '../ui/Reveal'

export function EditorialSection() {
  return (
    <section className="editorial" aria-labelledby="editorial-title">
      <div className="container editorial__inner">
        <Reveal className="editorial__copy">
          <p className="eyebrow">The Lookbook · Vol. 04</p>
          <h2 className="editorial__title" id="editorial-title">
            Style Beyond
            <br />
            <em>Reality</em>
          </h2>
          <p className="editorial__text">
            Discover handpicked décor that blends art, emotion, and function. Rooms composed the
            way a magazine composes a page — slowly, and with feeling.
          </p>
          <ButtonLink href="/inspiration" size="lg" icon="arrow-right">
            Explore Lookbook
          </ButtonLink>

          <dl className="editorial__stats">
            <div>
              <dt>Artisans</dt>
              <dd>120+</dd>
            </div>
            <div>
              <dt>Countries</dt>
              <dd>24</dd>
            </div>
            <div>
              <dt>Avg. rating</dt>
              <dd>4.9</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="editorial__visual" delay={0.1}>
          <span className="editorial__blob" aria-hidden="true" />
          <figure className="editorial__arch">
            <Img
              photo={PHOTO.editorial}
              alt="An editorial living room with curved archways, a sculptural chair and warm afternoon light"
              sizes="(max-width: 767px) 92vw, (max-width: 1199px) 48vw, 560px"
              ratio={[4, 5]}
            />
          </figure>
          <figure className="editorial__mini">
            <Img
              photo={PHOTO.editorialFloat}
              alt="A wavy ceramic vase styled with a single dried stem"
              sizes="150px"
              ratio={[1, 1]}
              widths={[240, 360]}
            />
            <figcaption>
              <span className="eyebrow">Object No. 12</span>
              Ivory Arch Vase
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
