import { INSPIRATION_STORIES, LOOKBOOK_CHAPTERS } from '../data/content'
import { PHOTO } from '../data/images'
import { ButtonLink } from '../components/ui/Button'
import { Img } from '../components/ui/Img'
import { Reveal } from '../components/ui/Reveal'
import { Newsletter } from '../components/home/Newsletter'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'

export function InspirationPage() {
  return (
    <div className="inspiration">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Inspiration' }]} />
      </div>

      <section className="inspiration-hero">
        <div className="container inspiration-hero__inner">
          <Reveal className="inspiration-hero__copy">
            <p className="eyebrow">The DreamDécor Journal</p>
            <h1 className="page-title">
              Rooms to <em>Live In</em>
            </h1>
            <p className="page-sub">
              Interiors, materials and small rituals — the thinking behind the objects we make and
              the way we live with them.
            </p>
            <ButtonLink href="#chapters" variant="outline" icon="arrow-right">
              Read the lookbook
            </ButtonLink>
          </Reveal>
          <Reveal className="inspiration-hero__media" delay={0.1}>
            <Img
              photo={PHOTO.inspirationBanner}
              alt="A sunlit interior with layered textiles and sculptural décor"
              sizes="(max-width: 767px) 92vw, 50vw"
              ratio={[4, 5]}
              eager
            />
          </Reveal>
        </div>
      </section>

      <section className="section" id="chapters" aria-labelledby="chapters-title">
        <div className="container">
          <Reveal className="section-head">
            <div className="section-head__text">
              <p className="eyebrow">The Lookbook · Vol. 04</p>
              <h2 className="section-head__title" id="chapters-title">
                Style Beyond <em>Reality</em>
              </h2>
            </div>
          </Reveal>

          <div className="chapters">
            {LOOKBOOK_CHAPTERS.map((chapter, index) => (
              <Reveal
                key={chapter.id}
                className={`chapter${index % 2 === 1 ? ' chapter--flip' : ''}`}
                delay={index * 0.05}
              >
                <div className="chapter__media">
                  <Img
                    photo={chapter.photo}
                    alt={chapter.title}
                    sizes="(max-width: 767px) 92vw, 46vw"
                    ratio={[4, 3]}
                  />
                </div>
                <div className="chapter__copy">
                  <span className="chapter__num">{chapter.number}</span>
                  <h3 className="chapter__title">{chapter.title}</h3>
                  <p>{chapter.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="stories-title">
        <div className="container">
          <Reveal className="section-head">
            <div className="section-head__text">
              <p className="eyebrow">From the journal</p>
              <h2 className="section-head__title" id="stories-title">
                Stories & <em>Notes</em>
              </h2>
            </div>
          </Reveal>
          <div className="stories">
            {INSPIRATION_STORIES.map((story, index) => (
              <Reveal key={story.id} className="story-card" delay={index * 0.05}>
                <a href="/inspiration" onClick={(event) => event.preventDefault()}>
                  <span className="story-card__media">
                    <Img
                      photo={story.photo}
                      alt={story.title}
                      sizes="(max-width: 767px) 92vw, 46vw"
                      ratio={[4, 3]}
                    />
                  </span>
                  <span className="story-card__body">
                    <span className="eyebrow">
                      {story.category} · {story.read}
                    </span>
                    <span className="story-card__title">{story.title}</span>
                    <span className="story-card__excerpt">{story.excerpt}</span>
                    <span className="story-card__cta">Read the story →</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  )
}
