import { useMemo, useState } from 'react'
import { bestSellers, type Category } from '../../data/products'
import { ProductGrid } from '../product/ProductGrid'
import { SectionHeading } from '../ui/SectionHeading'

const FILTERS: { label: string; value: 'All' | Category }[] = [
  { label: 'All', value: 'All' },
  { label: 'Lighting', value: 'Lighting' },
  { label: 'Decor', value: 'Decor' },
  { label: 'Vases', value: 'Vases' },
  { label: 'Sculptures', value: 'Sculptures' },
  { label: 'Textiles', value: 'Textiles' },
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
          eyebrow="Most loved"
          title={<span id="bestsellers-title">Best Sellers</span>}
          copy="The pieces our customers keep coming back for — and gifting."
          action={{ label: 'Shop best sellers', href: '/shop?sort=rating' }}
        />

        <div className="pills" role="tablist" aria-label="Filter best sellers by category">
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
