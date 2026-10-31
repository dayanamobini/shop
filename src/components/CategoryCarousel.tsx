import { categories } from '../data/catalog'
import { Link } from '../lib/router'

export default function CategoryCarousel() {
  return (
    <section className="cats" aria-label="Shop by category">
      <div className="container">
        <ul className="cats__rail">
          {categories.map((category) => (
            <li key={category.id}>
              <Link to={`/shop/${category.id}`} className="cat">
                <span className="cat__media">
                  <img src={category.image} alt="" loading="lazy" width={208} height={208} />
                </span>
                <span>{category.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
