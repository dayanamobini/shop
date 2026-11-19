import { featuredProducts } from '../../data/products'
import { ProductGrid } from '../product/ProductGrid'
import { SectionHeading } from '../ui/SectionHeading'

export function FeaturedProducts() {
  return (
    <section className="section section--cream featured" aria-labelledby="featured-title">
      <div className="container">
        <SectionHeading
          eyebrow="Selected by our stylists"
          title={
            <span id="featured-title">
              Artful Pieces for <em>Modern Living</em>
            </span>
          }
          copy="Four objects we return to again and again — each one chosen for how it makes an ordinary room feel considered."
          action={{ label: 'View all pieces', href: '/shop' }}
        />
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  )
}
