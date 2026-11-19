import { PHOTO } from '../../data/images'
import { useParallax } from '../../lib/hooks'
import { ButtonLink } from '../ui/Button'
import { Img } from '../ui/Img'

export function Lookbook() {
  const ref = useParallax<HTMLDivElement>(60)

  return (
    <section className="lookbook" id="lookbook" aria-labelledby="lookbook-title">
      <div className="lookbook__media" ref={ref}>
        <Img
          photo={PHOTO.lookbook}
          alt="A cinematic interior scene with warm evening light, a curved sofa and sculptural objects"
          sizes="100vw"
          ratio={[16, 9]}
          widths={[768, 1024, 1440, 1920, 2400]}
        />
      </div>
      <span className="lookbook__shade" aria-hidden="true" />
      <div className="lookbook__inner container">
        <p className="eyebrow eyebrow--light">The DreamDécor Film</p>
        <h2 className="lookbook__title" id="lookbook-title">
          Designed to Be <em>Felt</em>
        </h2>
        <p className="lookbook__copy">
          We don’t style rooms for photographs. We compose them for the hour when the light goes
          amber and the day finally slows down.
        </p>
        <ButtonLink href="/inspiration" variant="light" size="lg" icon="arrow-right">
          Explore the Lookbook
        </ButtonLink>
      </div>
      <div className="lookbook__chapters container">
        <span>01 · Stillness</span>
        <span>02 · Light</span>
        <span>03 · Made by hand</span>
      </div>
    </section>
  )
}
