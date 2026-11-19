import { MOODS } from '../../data/content'
import { navigate } from '../../lib/hooks'
import { Icon } from '../ui/Icon'
import { Img } from '../ui/Img'
import { Reveal } from '../ui/Reveal'

export function MoodSection() {
  return (
    <section className="moods" aria-labelledby="moods-title">
      <div className="container">
        <Reveal className="moods__head">
          <p className="eyebrow">Shop by mood</p>
          <h2 className="moods__title" id="moods-title">
            Create Your <em>Atmosphere</em>
          </h2>
          <p className="moods__copy">
            Every room has a temperature. Choose the one you want to come home to.
          </p>
        </Reveal>

        <div className="moods__grid">
          {MOODS.map((mood, index) => (
            <Reveal
              key={mood.id}
              className={`mood mood--${index + 1}`}
              delay={index * 0.08}
            >
              <a
                href={mood.href}
                className="mood__link"
                onClick={(event) => {
                  event.preventDefault()
                  navigate(mood.href)
                }}
              >
                <span className="mood__media">
                  <Img
                    photo={mood.photo}
                    alt={`${mood.name} interior mood`}
                    sizes="(max-width: 767px) 74vw, (max-width: 1199px) 44vw, 24vw"
                    ratio={[3, 4]}
                  />
                </span>
                <span className="mood__overlay" aria-hidden="true" />
                <span className="mood__index">0{index + 1}</span>
                <span className="mood__body">
                  <span className="mood__name">{mood.name}</span>
                  <span className="mood__desc">{mood.description}</span>
                  <span className="mood__cta">
                    Enter the mood <Icon name="arrow-right" size={15} />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
