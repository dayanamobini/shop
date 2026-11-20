import { useEffect, useMemo, useRef, useState } from 'react'
import { products } from '../../data/products'
import { RECENT_SEARCHES_DEFAULT, SHOP_CATEGORIES } from '../../data/content'
import { categoryLabel } from '../../data/labels'
import { faNum, money } from '../../lib/format'
import { navigate, useBodyLock, useEscape, usePersistentState } from '../../lib/hooks'
import { useStore } from '../../store/StoreContext'
import { Icon } from '../ui/Icon'
import { Img } from '../ui/Img'

const SUGGESTED = ['p-cloud-table-lamp', 'p-orbit-sculpture', 'p-wavy-ceramic-vase']

export function SearchOverlay() {
  const { searchOpen, setSearchOpen, addToCart } = useStore()
  const [query, setQuery] = useState('')
  const [recent, setRecent] = usePersistentState<string[]>(
    'dreamdecor.searches.v2',
    RECENT_SEARCHES_DEFAULT,
  )
  const inputRef = useRef<HTMLInputElement>(null)

  useBodyLock(searchOpen)
  useEscape(searchOpen, () => setSearchOpen(false))

  useEffect(() => {
    if (!searchOpen) return
    setQuery('')
    const timer = window.setTimeout(() => inputRef.current?.focus(), 60)
    return () => window.clearTimeout(timer)
  }, [searchOpen])

  const results = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return []
    return products
      .filter((product) =>
        [
          product.name,
          categoryLabel(product.category),
          product.category,
          product.collection,
          product.description,
        ]
          .join(' ')
          .toLowerCase()
          .includes(term),
      )
      .slice(0, 6)
  }, [query])

  const suggested = SUGGESTED.map((id) => products.find((product) => product.id === id)).filter(
    Boolean,
  ) as typeof products

  if (!searchOpen) return null

  const close = () => setSearchOpen(false)
  const go = (href: string) => {
    close()
    navigate(href)
  }
  const remember = (term: string) => {
    const clean = term.trim()
    if (!clean) return
    setRecent((current) => [clean, ...current.filter((entry) => entry !== clean)].slice(0, 5))
  }

  return (
    <div className="search-overlay" role="dialog" aria-modal="true" aria-label="جست‌وجو">
      <div className="search-overlay__top container">
        <span className="logo logo--dark">
          Dream<span>Décor</span>
        </span>
        <button type="button" className="icon-btn" onClick={close} aria-label="بستن جست‌وجو">
          <Icon name="close" />
        </button>
      </div>

      <div className="search-overlay__inner container">
        <form
          className="search-field"
          onSubmit={(event) => {
            event.preventDefault()
            remember(query)
            if (results.length > 0) go(`/product/${results[0].slug}`)
          }}
          role="search"
        >
          <Icon name="search" size={22} />
          <input
            ref={inputRef}
            type="search"
            value={query}
            placeholder="دنبال چه چیزی می‌گردید؟"
            aria-label="جست‌وجوی محصولات"
            onChange={(event) => setQuery(event.target.value)}
          />
          <kbd>ESC</kbd>
        </form>

        <div className="search-overlay__grid">
          <div className="search-overlay__side">
            {recent.length > 0 && (
              <section>
                <div className="search-overlay__label">
                  <p className="eyebrow">جست‌وجوهای اخیر</p>
                  <button type="button" className="link-btn" onClick={() => setRecent([])}>
                    پاک کردن
                  </button>
                </div>
                <ul className="search-chips">
                  {recent.map((term) => (
                    <li key={term}>
                      <button type="button" onClick={() => setQuery(term)}>
                        {term}
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section>
              <p className="eyebrow">دسته‌بندی‌های محبوب</p>
              <ul className="search-cats">
                {SHOP_CATEGORIES.slice(0, 6).map((category) => (
                  <li key={category.name}>
                    <button
                      type="button"
                      onClick={() => go(`/shop?category=${category.target}`)}
                    >
                      <span>{category.name}</span>
                      <Icon name="arrow-up-right" size={14} />
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="search-overlay__results">
            {query.trim() ? (
              <>
                <p className="eyebrow">
                  {results.length > 0
                    ? `${faNum(results.length)} نتیجه برای «${query.trim()}»`
                    : 'بدون نتیجه'}
                </p>
                {results.length === 0 ? (
                  <div className="search-empty">
                    <p className="search-empty__title">
                      متأسفانه چیزی مطابق جستجوی شما پیدا نکردیم.
                    </p>
                    <p>یک جنس، یک اتاق یا یک حال‌وهوا را امتحان کنید — «سرامیک»، «نورپردازی»، «گرم».</p>
                  </div>
                ) : (
                  <ul className="search-results">
                    {results.map((product) => (
                      <li key={product.id}>
                        <a
                          href={`/product/${product.slug}`}
                          className="search-result"
                          onClick={(event) => {
                            event.preventDefault()
                            remember(query)
                            go(`/product/${product.slug}`)
                          }}
                        >
                          <span className="search-result__media">
                            <Img
                              photo={product.photos[0]}
                              alt={product.name}
                              sizes="72px"
                              ratio={[1, 1]}
                              widths={[160, 240]}
                            />
                          </span>
                          <span className="search-result__text">
                            <span className="search-result__cat">
                              {categoryLabel(product.category)}
                            </span>
                            <span className="search-result__name">{product.name}</span>
                            <span className="search-result__price">{money(product.price)}</span>
                          </span>
                          <button
                            type="button"
                            className="search-result__add"
                            aria-label={`افزودن ${product.name} به سبد خرید`}
                            onClick={(event) => {
                              event.preventDefault()
                              event.stopPropagation()
                              addToCart(product)
                            }}
                          >
                            <Icon name="plus" size={15} />
                          </button>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <>
                <p className="eyebrow">شاید این‌ها را دوست داشته باشید</p>
                <ul className="search-results">
                  {suggested.map((product) => (
                    <li key={product.id}>
                      <a
                        href={`/product/${product.slug}`}
                        className="search-result"
                        onClick={(event) => {
                          event.preventDefault()
                          go(`/product/${product.slug}`)
                        }}
                      >
                        <span className="search-result__media">
                          <Img
                            photo={product.photos[0]}
                            alt={product.name}
                            sizes="72px"
                            ratio={[1, 1]}
                            widths={[160, 240]}
                          />
                        </span>
                        <span className="search-result__text">
                          <span className="search-result__cat">
                            {categoryLabel(product.category)}
                          </span>
                          <span className="search-result__name">{product.name}</span>
                          <span className="search-result__price">{money(product.price)}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
