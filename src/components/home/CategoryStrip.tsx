import { SHOP_CATEGORIES } from '../../data/content'
import { navigate } from '../../lib/hooks'
import { Img } from '../ui/Img'
import { Reveal } from '../ui/Reveal'
import { ButtonLink } from '../ui/Button'

export function CategoryStrip() {
  return (
    <section className="cats" aria-labelledby="cats-title">
      <div className="container">
        <Reveal className="cats__head">
          <div>
            <p className="eyebrow">Browse the house</p>
            <h2 className="cats__title" id="cats-title">
              Shop by Category
            </h2>
          </div>
          <ButtonLink href="/shop" variant="ghost" size="sm" icon="arrow-right">
            All categories
          </ButtonLink>
        </Reveal>

        <ul className="cats__list">
          {SHOP_CATEGORIES.map((category, index) => {
            const target = category.target
            return (
              <li
                className="cat"
                key={category.name}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <a
                  href={`/shop?category=${target}`}
                  onClick={(event) => {
                    event.preventDefault()
                    navigate(`/shop?category=${target}`)
                  }}
                >
                  <span className="cat__media">
                    <Img
                      photo={category.photo}
                      alt={category.name}
                      sizes="(max-width: 767px) 34vw, 150px"
                      ratio={[1, 1]}
                      widths={[240, 360, 480]}
                    />
                  </span>
                  <span className="cat__name">{category.name}</span>
                  <span className="cat__blurb">{category.blurb}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
