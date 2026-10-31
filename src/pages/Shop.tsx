import { useEffect, useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { ChevronDownIcon } from '../components/Icons'
import { categories, categoryLabels, products, type CategoryId } from '../data/catalog'
import { Link, useRouter } from '../lib/router'
import { money } from '../lib/format'

type SortKey = 'featured' | 'newest' | 'price-asc' | 'price-desc' | 'bestselling' | 'rating'

const sortLabels: Record<SortKey, string> = {
  featured: 'Featured',
  newest: 'Newest',
  'price-asc': 'Price: low to high',
  'price-desc': 'Price: high to low',
  bestselling: 'Best selling',
  rating: 'Top rated',
}

const allSizes = Array.from(new Set(products.flatMap((product) => product.sizes)))
const allColors = Array.from(
  new Map(products.flatMap((product) => product.colors).map((color) => [color.name, color])).values(),
)

const PAGE_SIZE = 9

export default function Shop({ category }: { category?: string }) {
  const { search, path } = useRouter()
  const params = new URLSearchParams(search)
  const sortParam = params.get('sort')
  const saleOnly = params.get('sale') === '1'

  const validCategory = categories.some((item) => item.id === category) ? (category as CategoryId) : undefined

  const [selectedCategories, setSelectedCategories] = useState<string[]>(validCategory ? [validCategory] : [])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [sort, setSort] = useState<SortKey>(
    sortParam === 'bestselling' ? 'bestselling' : sortParam === 'newest' ? 'newest' : 'featured',
  )
  const [visible, setVisible] = useState(PAGE_SIZE)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [openFilter, setOpenFilter] = useState<string | null>('category')

  useEffect(() => {
    setSelectedCategories(validCategory ? [validCategory] : [])
    setVisible(PAGE_SIZE)
  }, [path, validCategory])

  useEffect(() => {
    setSort(sortParam === 'bestselling' ? 'bestselling' : sortParam === 'newest' ? 'newest' : 'featured')
  }, [sortParam])

  const filtered = useMemo(() => {
    let list = [...products]

    if (saleOnly) list = list.filter((product) => product.compareAt)
    if (selectedCategories.length > 0) {
      list = list.filter((product) => selectedCategories.includes(product.category))
    }
    if (selectedSizes.length > 0) {
      list = list.filter((product) => product.sizes.some((size) => selectedSizes.includes(size)))
    }
    if (selectedColors.length > 0) {
      list = list.filter((product) => product.colors.some((color) => selectedColors.includes(color.name)))
    }
    const min = Number.parseFloat(minPrice)
    const max = Number.parseFloat(maxPrice)
    if (!Number.isNaN(min)) list = list.filter((product) => product.price >= min)
    if (!Number.isNaN(max)) list = list.filter((product) => product.price <= max)

    switch (sort) {
      case 'newest':
        list.sort((a, b) => b.added - a.added)
        break
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        list.sort((a, b) => b.rating - a.rating)
        break
      case 'bestselling':
        list.sort((a, b) => b.reviewCount - a.reviewCount)
        break
      default:
        break
    }
    return list
  }, [saleOnly, selectedCategories, selectedSizes, selectedColors, minPrice, maxPrice, sort])

  const toggle = (value: string, current: string[], set: (next: string[]) => void) => {
    set(current.includes(value) ? current.filter((item) => item !== value) : [...current, value])
    setVisible(PAGE_SIZE)
  }

  const clearAll = () => {
    setSelectedCategories(validCategory ? [validCategory] : [])
    setSelectedSizes([])
    setSelectedColors([])
    setMinPrice('')
    setMaxPrice('')
  }

  const heading = saleOnly
    ? 'Sale'
    : validCategory
      ? categoryLabels[validCategory]
      : 'All pieces'

  const activeFilterCount =
    selectedCategories.length +
    selectedSizes.length +
    selectedColors.length +
    (minPrice ? 1 : 0) +
    (maxPrice ? 1 : 0)

  return (
    <>
      <div className="page-head">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            {validCategory ? (
              <>
                <Link to="/shop">Shop</Link>
                <span>/</span>
                <span style={{ color: 'var(--charcoal)' }}>{categoryLabels[validCategory]}</span>
              </>
            ) : (
              <span style={{ color: 'var(--charcoal)' }}>{heading}</span>
            )}
          </nav>
          <h1>{heading}</h1>
          <p>
            {saleOnly
              ? 'Final pieces from past collections, reduced while stock lasts.'
              : 'Considered silhouettes in natural fibres — designed to be worn often and kept for years.'}
          </p>
        </div>
      </div>

      <div className="container shop__layout">
        <aside className={`filters${filtersOpen ? ' is-open' : ''}`} aria-label="Product filters">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 12 }}>
            <span className="eyebrow">Filter</span>
            <button type="button" className="link-back" onClick={clearAll}>
              Clear all
            </button>
          </div>

          <div className="filter">
            <button
              type="button"
              className="filter__head"
              aria-expanded={openFilter === 'category'}
              onClick={() => setOpenFilter(openFilter === 'category' ? null : 'category')}
            >
              Category
              <ChevronDownIcon size={14} />
            </button>
            {openFilter === 'category' && (
              <div className="filter__body">
                {categories.map((item) => (
                  <label className="check" key={item.id}>
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(item.id)}
                      onChange={() => toggle(item.id, selectedCategories, setSelectedCategories)}
                    />
                    {item.label}
                    <span className="check__count">
                      {products.filter((product) => product.category === item.id).length}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="filter">
            <button
              type="button"
              className="filter__head"
              aria-expanded={openFilter === 'price'}
              onClick={() => setOpenFilter(openFilter === 'price' ? null : 'price')}
            >
              Price
              <ChevronDownIcon size={14} />
            </button>
            {openFilter === 'price' && (
              <div className="filter__body">
                <div className="price-range">
                  <input
                    type="number"
                    min={0}
                    placeholder="Min"
                    aria-label="Minimum price"
                    value={minPrice}
                    onChange={(event) => setMinPrice(event.target.value)}
                  />
                  <span>—</span>
                  <input
                    type="number"
                    min={0}
                    placeholder="Max"
                    aria-label="Maximum price"
                    value={maxPrice}
                    onChange={(event) => setMaxPrice(event.target.value)}
                  />
                </div>
                <p style={{ fontSize: 11.5, color: 'var(--muted)' }}>
                  Pieces from {money(65)} to {money(289)}
                </p>
              </div>
            )}
          </div>

          <div className="filter">
            <button
              type="button"
              className="filter__head"
              aria-expanded={openFilter === 'size'}
              onClick={() => setOpenFilter(openFilter === 'size' ? null : 'size')}
            >
              Size
              <ChevronDownIcon size={14} />
            </button>
            {openFilter === 'size' && (
              <div className="filter__body">
                <div className="chips">
                  {allSizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={`chip${selectedSizes.includes(size) ? ' is-active' : ''}`}
                      onClick={() => toggle(size, selectedSizes, setSelectedSizes)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="filter">
            <button
              type="button"
              className="filter__head"
              aria-expanded={openFilter === 'colour'}
              onClick={() => setOpenFilter(openFilter === 'colour' ? null : 'colour')}
            >
              Colour
              <ChevronDownIcon size={14} />
            </button>
            {openFilter === 'colour' && (
              <div className="filter__body">
                <div className="swatches">
                  {allColors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      className={`swatch${selectedColors.includes(color.name) ? ' is-active' : ''}`}
                      style={{ background: color.hex }}
                      aria-label={color.name}
                      aria-pressed={selectedColors.includes(color.name)}
                      title={color.name}
                      onClick={() => toggle(color.name, selectedColors, setSelectedColors)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        <div>
          <div className="toolbar">
            <span className="toolbar__count">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              {activeFilterCount > 0 ? ' · filtered' : ''}
            </span>
            <div className="toolbar__right">
              <button
                type="button"
                className="btn btn--ghost btn--small filters-toggle"
                onClick={() => setFiltersOpen(!filtersOpen)}
              >
                Filters{activeFilterCount > 0 ? ` (${activeFilterCount})` : ''}
              </button>
              <label className="visually-hidden" htmlFor="sort">
                Sort products
              </label>
              <select
                id="sort"
                className="select"
                value={sort}
                onChange={(event) => setSort(event.target.value as SortKey)}
              >
                {Object.entries(sortLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="empty">
              <h2>Nothing matches those filters</h2>
              <p>Try removing a filter, or browse the full collection.</p>
              <button type="button" className="btn" onClick={clearAll}>
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <div className="products-grid">
                {filtered.slice(0, visible).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              {visible < filtered.length && (
                <div className="load-more">
                  <button
                    type="button"
                    className="btn btn--ghost"
                    onClick={() => setVisible(visible + PAGE_SIZE)}
                  >
                    Load more
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}
