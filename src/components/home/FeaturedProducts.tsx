import { featuredProducts } from '../../data/products'
import { ProductGrid } from '../product/ProductGrid'
import { SectionHeading } from '../ui/SectionHeading'

export function FeaturedProducts() {
  return (
    <section className="section section--cream featured" aria-labelledby="featured-title">
      <div className="container">
        <SectionHeading
          eyebrow="انتخاب استایلیست‌های ما"
          title={
            <span id="featured-title">
              قطعات هنری برای <em>زندگی مدرن</em>
            </span>
          }
          copy="چهار قطعه که دوباره و دوباره به آن‌ها برمی‌گردیم؛ هرکدام انتخاب شده‌اند برای اینکه یک اتاق معمولی را اندیشیده‌شده نشان دهند."
          action={{ label: 'مشاهده همه محصولات', href: '/shop' }}
        />
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  )
}
