import { useMemo, useState } from 'react'
import { bestSellers, type Category } from '../../data/products'
import { ProductGrid } from '../product/ProductGrid'
import { SectionHeading } from '../ui/SectionHeading'

const FILTERS: { label: string; value: 'All' | Category }[] = [
  { label: 'همه', value: 'All' },
  { label: 'نورپردازی', value: 'Lighting' },
  { label: 'دکور', value: 'Decor' },
  { label: 'گلدان', value: 'Vases' },
  { label: 'مجسمه', value: 'Sculptures' },
  { label: 'منسوجات', value: 'Textiles' },
]

export function BestSellers() {
  const [filter, setFilter] = useState<'All' | Category>('All')

  const items = useMemo(() => {
    const source = bestSellers
    if (filter === 'All') return source.slice(0, 4)
    const filtered = source.filter((product) => product.category === filter)
    return filtered.length > 0 ? filtered : source.slice(0, 4)
  }, [filter])

  return (
    <section className="section bestsellers" aria-labelledby="bestsellers-title">
      <div className="container">
        <SectionHeading
          eyebrow="محبوب‌ترین"
          title={<span id="bestsellers-title">محبوب‌ترین‌ها</span>}
          copy="قطعاتی که مشتریان ما دوباره به سراغشان برمی‌گردند — و هدیه می‌دهند."
          action={{ label: 'خرید پرفروش‌ها', href: '/shop?sort=rating' }}
        />

        <div className="pills" role="tablist" aria-label="پالایش پرفروش‌ها بر اساس دسته">
          {FILTERS.map((item) => (
            <button
              key={item.value}
              type="button"
              role="tab"
              aria-selected={filter === item.value}
              className={`pill${filter === item.value ? ' is-active' : ''}`}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="fade-swap" key={filter}>
          <ProductGrid products={items} />
        </div>
      </div>
    </section>
  )
}
