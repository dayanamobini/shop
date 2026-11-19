import { newArrivals } from '../../data/products'
import { ProductCarousel } from '../product/ProductCarousel'
import { SectionHeading } from '../ui/SectionHeading'

export function NewArrivals() {
  return (
    <section className="section section--cream arrivals" aria-labelledby="arrivals-title">
      <div className="container">
        <SectionHeading
          eyebrow="Just landed"
          title={<span id="arrivals-title">New Arrivals</span>}
          copy="The newest pieces from our studios in Lisbon, Marrakech and Copenhagen."
          action={{ label: 'Shop new in', href: '/shop?sort=newest' }}
        />
        <ProductCarousel products={newArrivals} />
      </div>
    </section>
  )
}
