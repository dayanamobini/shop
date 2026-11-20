import { INSPIRATION_STORIES } from '../../data/content'
import { navigate } from '../../lib/hooks'
import { Img } from '../ui/Img'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Magazine() {
  return (
    <section className="section magazine" aria-labelledby="magazine-title">
      <div className="container">
        <SectionHeading
          eyebrow="از مجله"
          title={<span id="magazine-title">مجله دریم‌دکور</span>}
          copy="ایده‌ها، راهنماها و داستان‌هایی برای بهتر چیدن و زیباتر زندگی کردن."
          action={{ label: 'همه مقالات', href: '/inspiration' }}
        />

        <div className="magazine__grid">
          {INSPIRATION_STORIES.map((story, index) => (
            <Reveal key={story.id} className="mag-card" delay={index * 0.05}>
              <a
                href="/inspiration"
                onClick={(event) => {
                  event.preventDefault()
                  navigate('/inspiration')
                }}
              >
                <span className="mag-card__media">
                  <Img
                    photo={story.photo}
                    alt={story.title}
                    sizes="(max-width: 767px) 92vw, (max-width: 1199px) 46vw, 24vw"
                    ratio={[4, 3]}
                  />
                </span>
                <span className="mag-card__body">
                  <span className="mag-card__meta">
                    {story.category} · {story.date}
                  </span>
                  <span className="mag-card__title">{story.title}</span>
                  <span className="mag-card__excerpt">{story.excerpt}</span>
                  <span className="mag-card__cta">ادامه مطلب</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
