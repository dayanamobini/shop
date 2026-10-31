import { useEffect, useMemo, useRef, useState } from 'react'
import { products } from '../data/catalog'
import { money } from '../lib/format'
import { useRouter } from '../lib/router'
import { useShop } from '../store/shop'
import { CloseIcon, SearchIcon } from './Icons'

const suggestions = ['Silk dress', 'Blazer', 'Knit', 'Bags', 'Shoes']

export default function SearchOverlay() {
  const { searchOpen, closeSearch } = useShop()
  const { navigate } = useRouter()
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!searchOpen) return
    const timer = window.setTimeout(() => inputRef.current?.focus(), 220)
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeSearch()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('keydown', onKey)
    }
  }, [searchOpen, closeSearch])

  const results = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return []
    return products
      .filter((product) =>
        `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(term),
      )
      .slice(0, 4)
  }, [query])

  const submit = (value: string) => {
    const term = value.trim()
    if (!term) return
    closeSearch()
    navigate(`/search?q=${encodeURIComponent(term)}`)
    setQuery('')
  }

  return (
    <>
      <div
        className={`overlay${searchOpen ? ' is-open' : ''}`}
        onClick={closeSearch}
        aria-hidden="true"
      />
      <div
        className={`search-panel${searchOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Search products"
      >
        <div className="container search-panel__inner">
          <form
            className="search-panel__form"
            onSubmit={(event) => {
              event.preventDefault()
              submit(query)
            }}
          >
            <SearchIcon size={22} />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for dresses, knitwear, bags…"
              aria-label="Search products"
            />
            <button type="button" className="icon-btn" aria-label="Close search" onClick={closeSearch}>
              <CloseIcon size={20} />
            </button>
          </form>

          {!query && (
            <>
              <div className="search-panel__meta">
                <span>Popular searches</span>
              </div>
              <div className="search-suggestions">
                {suggestions.map((item) => (
                  <button key={item} type="button" onClick={() => submit(item)}>
                    {item}
                  </button>
                ))}
              </div>
            </>
          )}

          {query && (
            <>
              <div className="search-panel__meta">
                <span>{results.length} results for “{query}”</span>
                <button type="button" className="text-link" onClick={() => submit(query)}>
                  View all results
                </button>
              </div>
              {results.length > 0 ? (
                <div className="search-panel__results">
                  {results.map((product) => (
                    <button
                      key={product.id}
                      type="button"
                      className="search-result"
                      onClick={() => {
                        closeSearch()
                        navigate(`/product/${product.slug}`)
                      }}
                    >
                      <img src={product.images[0]} alt="" loading="lazy" />
                      <span>
                        <span className="search-result__name">{product.name}</span>
                        <span className="search-result__price">{money(product.price)}</span>
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <p style={{ marginTop: 26, fontSize: 13.5, color: 'var(--muted)' }}>
                  Nothing matched that search. Try “dress”, “knit” or “bag”.
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}
