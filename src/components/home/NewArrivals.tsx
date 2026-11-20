import { newArrivals } from '../../data/products'
import { ProductCarousel } from '../product/ProductCarousel'
import { SectionHeading } from '../ui/SectionHeading'

export function NewArrivals() {
  return (
    <section className="section section--cream arrivals" aria-labelledby="arrivals-title">
      <div className="container">
        <SectionHeading
          eyebrow="تازه رسیده"
          title={<span id="arrivals-title">تازه‌های دکور</span>}
          copy="جدیدترین قطعات از استودیوهای ما در لیسبون، مراکش و کپنهاگ."
          action={{ label: 'خرید تازه‌ها', href: '/shop?sort=newest' }}
        />
        <ProductCarousel products={newArrivals} />
      </div>
    </section>
  )
}
