import type { Product } from '../../data/products'
import { ProductCard } from './ProductCard'

export function ProductGrid({
  products,
  columns = 4,
  layout = 'grid',
}: {
  products: Product[]
  columns?: 3 | 4
  layout?: 'grid' | 'list'
}) {
  return (
    <div className={`pgrid pgrid--${columns}${layout === 'list' ? ' pgrid--list' : ''}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} layout={layout} />
      ))}
    </div>
  )
}
