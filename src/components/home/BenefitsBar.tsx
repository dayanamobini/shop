import { BENEFITS } from '../../data/content'
import { Icon } from '../ui/Icon'

export function BenefitsBar() {
  return (
    <section className="benefits" aria-label="مزایای خرید">
      <div className="container benefits__inner">
        {BENEFITS.map((benefit) => (
          <div className="benefit" key={benefit.title}>
            <span className="benefit__icon">
              <Icon name={benefit.icon} size={22} />
            </span>
            <div>
              <p className="benefit__title">{benefit.title}</p>
              <p className="benefit__text">{benefit.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
