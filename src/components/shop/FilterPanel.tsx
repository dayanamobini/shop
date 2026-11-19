import { CATEGORIES, products } from '../../data/products'
import { money } from '../../lib/format'

type FilterPanelProps = {
  selected: string[]
  onToggle: (category: string) => void
  maxPrice: number
  onMaxPrice: (value: number) => void
  inStockOnly: boolean
  onInStockOnly: (value: boolean) => void
  onClear: () => void
  resultCount: number
}

export function FilterPanel({
  selected,
  onToggle,
  maxPrice,
  onMaxPrice,
  inStockOnly,
  onInStockOnly,
  onClear,
  resultCount,
}: FilterPanelProps) {
  const counts = CATEGORIES.map((category) => ({
    category,
    count: products.filter((product) => product.category === category).length,
  }))

  return (
    <div className="filters">
      <div className="filters__head">
        <p className="filters__title">Refine</p>
        <button type="button" className="link-btn" onClick={onClear}>
          Clear all
        </button>
      </div>

      <fieldset className="filters__group">
        <legend>Category</legend>
        <ul className="filters__checks">
          {counts.map(({ category, count }) => (
            <li key={category}>
              <label className="check">
                <input
                  type="checkbox"
                  checked={selected.includes(category)}
                  onChange={() => onToggle(category)}
                />
                <span className="check__box" aria-hidden="true" />
                <span className="check__label">{category}</span>
                <span className="check__count">{count}</span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>

      <fieldset className="filters__group">
        <legend>Price</legend>
        <div className="filters__price">
          <span>{money(0)}</span>
          <span>{money(maxPrice)}</span>
        </div>
        <input
          className="range"
          type="range"
          min={40}
          max={700}
          step={10}
          value={maxPrice}
          aria-label="Maximum price"
          onChange={(event) => onMaxPrice(Number(event.target.value))}
        />
        <p className="filters__hint">Showing pieces up to {money(maxPrice)}</p>
      </fieldset>

      <fieldset className="filters__group">
        <legend>Availability</legend>
        <label className="check">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(event) => onInStockOnly(event.target.checked)}
          />
          <span className="check__box" aria-hidden="true" />
          <span className="check__label">In stock only</span>
        </label>
      </fieldset>

      <p className="filters__count">
        {resultCount} {resultCount === 1 ? 'piece' : 'pieces'}
      </p>
    </div>
  )
}
