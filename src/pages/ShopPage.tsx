import { useEffect, useMemo, useState } from 'react'
import { products, type Category } from '../data/products'
import { categoryLabel } from '../data/labels'
import { PRICE_MAX } from '../lib/commerce'
import { faNum } from '../lib/format'
import { FilterPanel } from '../components/shop/FilterPanel'
import { ProductGrid } from '../components/product/ProductGrid'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Button } from '../components/ui/Button'
import { Drawer } from '../components/ui/Drawer'
import { Icon } from '../components/ui/Icon'
import { useSearch } from '../lib/hooks'
import { Reveal } from '../components/ui/Reveal'

const MOOD_TO_COLLECTION: Record<string, string> = {
  calm: 'soft-living',
  bold: 'sculptural',
  artistic: 'modern-rituals',
  natural: 'organic-forms',
}

const SORT_OPTIONS = [
  { value: 'featured', label: 'پیشنهاد ما' },
  { value: 'newest', label: 'جدیدترین' },
  { value: 'price-asc', label: 'ارزان‌ترین' },
  { value: 'price-desc', label: 'گران‌ترین' },
  { value: 'rating', label: 'بیشترین امتیاز' },
]

const PAGE_SIZE = 8

export function ShopPage() {
  const search = useSearch()
  const searchString = search.toString()
  const urlCategory = search.get('category')
  const mood = search.get('mood')
  const urlCollection = search.get('collection') ?? (mood ? MOOD_TO_COLLECTION[mood] : null)
  const saleOnly = search.get('sale') === '1'
  const sortParam = search.get('sort')

  const [selected, setSelected] = useState<string[]>(urlCategory ? [urlCategory] : [])
  const [maxPrice, setMaxPrice] = useState(PRICE_MAX)
  const [inStockOnly, setInStockOnly] = useState(false)
  const [sort, setSort] = useState(sortParam ?? 'featured')
  const [layout, setLayout] = useState<'grid' | 'list'>('grid')
  const [visible, setVisible] = useState(PAGE_SIZE)
  const [filtersOpen, setFiltersOpen] = useState(false)

  useEffect(() => {
    setSelected(urlCategory ? [urlCategory] : [])
    setVisible(PAGE_SIZE)
  }, [urlCategory, searchString])

  useEffect(() => {
    if (sortParam) setSort(sortParam)
  }, [sortParam])

  useEffect(() => {
    setVisible(PAGE_SIZE)
  }, [selected, maxPrice, inStockOnly, sort])

  const filtered = useMemo(() => {
    const list = products.filter(
      (product) =>
        (selected.length === 0 || selected.includes(product.category)) &&
        product.price <= maxPrice &&
        (!inStockOnly || product.inStock) &&
        (!urlCollection || product.collection === urlCollection) &&
        (!saleOnly || Boolean(product.compareAt)),
    )

    switch (sort) {
      case 'newest':
        return [...list].sort((a, b) => a.added - b.added)
      case 'price-asc':
        return [...list].sort((a, b) => a.price - b.price)
      case 'price-desc':
        return [...list].sort((a, b) => b.price - a.price)
      case 'rating':
        return [...list].sort((a, b) => b.rating - a.rating)
      default:
        return list
    }
  }, [selected, maxPrice, inStockOnly, sort, urlCollection, saleOnly])

  const shown = filtered.slice(0, visible)
  const activeFilters =
    selected.length + (maxPrice < PRICE_MAX ? 1 : 0) + (inStockOnly ? 1 : 0)

  const toggleCategory = (category: string) => {
    setSelected((current) =>
      current.includes(category)
        ? current.filter((entry) => entry !== category)
        : [...current, category],
    )
  }

  const clearAll = () => {
    setSelected([])
    setMaxPrice(PRICE_MAX)
    setInStockOnly(false)
  }

  const heading = urlCategory
    ? categoryLabel(urlCategory as Category)
    : urlCollection
      ? 'کالکشن منتخب'
      : saleOnly
        ? 'تخفیف‌ها'
        : 'فروشگاه'

  const filterProps = {
    selected,
    onToggle: toggleCategory,
    maxPrice,
    onMaxPrice: setMaxPrice,
    inStockOnly,
    onInStockOnly: setInStockOnly,
    onClear: clearAll,
    resultCount: filtered.length,
  }

  return (
    <div className="shop">
      <div className="shop__banner">
        <div className="container">
          <Breadcrumbs items={[{ label: 'فروشگاه' }]} />
          <Reveal className="shop__banner-inner">
            <p className="eyebrow">اشیائی برای زندگی زیبا</p>
            <h1 className="shop__title">{heading}</h1>
            <p className="shop__sub">
              {faNum(filtered.length)} قطعه — دست‌ساز، دست‌چین و ارسال‌شده از استودیوی ما.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="container shop__layout">
        <aside className="shop__aside" aria-label="فیلترها">
          <FilterPanel {...filterProps} />
        </aside>

        <div className="shop__main">
          <div className="shop__toolbar">
            <button
              type="button"
              className="btn btn--outline btn--sm shop__filter-btn"
              onClick={() => setFiltersOpen(true)}
            >
              <Icon name="sliders" size={15} />
              <span>فیلترها{activeFilters > 0 ? ` (${faNum(activeFilters)})` : ''}</span>
            </button>

            <p className="shop__result-count">{faNum(filtered.length)} محصول</p>

            <div className="shop__tools">
              <label className="sort">
                <span className="sr-only">مرتب‌سازی بر اساس</span>
                <select value={sort} onChange={(event) => setSort(event.target.value)}>
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      مرتب‌سازی: {option.label}
                    </option>
                  ))}
                </select>
                <Icon name="chevron-down" size={14} />
              </label>

              <div className="view-toggle" role="group" aria-label="نمایش">
                <button
                  type="button"
                  className={layout === 'grid' ? 'is-active' : ''}
                  aria-pressed={layout === 'grid'}
                  aria-label="نمایش شبکه‌ای"
                  onClick={() => setLayout('grid')}
                >
                  <Icon name="grid" size={16} />
                </button>
                <button
                  type="button"
                  className={layout === 'list' ? 'is-active' : ''}
                  aria-pressed={layout === 'list'}
                  aria-label="نمایش فهرستی"
                  onClick={() => setLayout('list')}
                >
                  <Icon name="list" size={16} />
                </button>
              </div>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="empty empty--page">
              <span className="empty__icon">
                <Icon name="search" size={26} />
              </span>
              <p className="empty__title">هیچ محصولی با این فیلترها هم‌خوان نیست.</p>
              <p className="empty__text">کمی فیلترها را باز کن؛ اتاق دوباره باز می‌شود.</p>
              <Button variant="outline" size="sm" onClick={clearAll}>
                پاک کردن فیلترها
              </Button>
            </div>
          ) : (
            <>
              <div className="fade-swap" key={`${sort}-${layout}-${visible}`}>
                <ProductGrid products={shown} layout={layout} />
              </div>
              {visible < filtered.length && (
                <div className="shop__more">
                  <Button variant="outline" onClick={() => setVisible((count) => count + PAGE_SIZE)}>
                    نمایش محصولات بیشتر
                  </Button>
                  <span>
                    نمایش {faNum(shown.length)} از {faNum(filtered.length)}
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Drawer
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        title="فیلترها"
        eyebrow={`${faNum(filtered.length)} محصول`}
        side="start"
        footer={
          <Button fullWidth onClick={() => setFiltersOpen(false)}>
            نمایش {faNum(filtered.length)} محصول
          </Button>
        }
      >
        <FilterPanel {...filterProps} />
      </Drawer>
    </div>
  )
}
