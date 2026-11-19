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
              alt="An artisan’s studio with hand-finished ceramic pieces on a wooden workbench"
              sizes="(max-width: 767px) 92vw, 46vw"
              ratio={[4, 5]}
            />
          </figure>
          <figure className="story__mini">
            <Img
              photo={PHOTO.storyFloat}
              alt="A small sculptural object held in two hands"
              sizes="160px"
              ratio={[1, 1]}
              widths={[240, 360]}
            />
          </figure>
          <span className="story__stamp" aria-hidden="true">
            <span>EST.</span>
            <span>2014</span>
          </span>
        </Reveal>

        <Reveal className="story__copy" delay={0.08}>
          <p className="eyebrow">About DreamDécor</p>
          <h2 className="story__title" id="story-title">
            Objects With a <em>Story</em>
          </h2>
          <p className="story__lead">
            DreamDécor curates artistic, functional and emotionally meaningful pieces for modern
            homes.
          </p>
          <p className="story__text">
            We work directly with 120 makers across 24 countries — ceramicists, weavers,
            stone-carvers and lighting studios — and pay them properly for the slow work they do.
            Nothing here is mass-produced. Everything is chosen to be lived with, and then passed
            on.
          </p>
          <ButtonLink href="/about" size="lg" variant="outline" icon="arrow-right">
            Discover Our Story
          </ButtonLink>
          <div className="story__signature">
            <span className="story__line" aria-hidden="true" />
            <p>
              Elena Duarte
              <span>Founder & Creative Director</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
