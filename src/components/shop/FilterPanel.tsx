import { CATEGORIES, products } from '../../data/products'
import { categoryLabel } from '../../data/labels'
import { PRICE_MAX, PRICE_MIN, PRICE_STEP } from '../../lib/commerce'
import { faNum, money } from '../../lib/format'

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
        <p className="filters__title">پالایش</p>
        <button type="button" className="link-btn" onClick={onClear}>
          پاک کردن همه
        </button>
      </div>

      <fieldset className="filters__group">
        <legend>دسته‌بندی</legend>
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
                <span className="check__label">{categoryLabel(category)}</span>
                <span className="check__count">{faNum(count)}</span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>

      <fieldset className="filters__group">
        <legend>محدوده قیمت</legend>
        <div className="filters__price">
          <span>{money(PRICE_MIN)}</span>
          <span>{money(maxPrice)}</span>
        </div>
        <input
          className="range"
          type="range"
          min={PRICE_MIN}
          max={PRICE_MAX}
          step={PRICE_STEP}
          value={maxPrice}
          aria-label="حداکثر قیمت"
          onChange={(event) => onMaxPrice(Number(event.target.value))}
        />
        <p className="filters__hint">نمایش محصولات تا {money(maxPrice)}</p>
      </fieldset>

      <fieldset className="filters__group">
        <legend>موجودی</legend>
        <label className="check">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(event) => onInStockOnly(event.target.checked)}
          />
          <span className="check__box" aria-hidden="true" />
          <span className="check__label">فقط کالاهای موجود</span>
        </label>
      </fieldset>

      <p className="filters__count">{faNum(resultCount)} محصول</p>
    </div>
  )
}
