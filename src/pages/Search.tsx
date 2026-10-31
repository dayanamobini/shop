import { useMemo } from 'react'
import ProductCard from '../components/ProductCard'
import { Link, useRouter } from '../lib/router'
import { products } from '../data/catalog'

const suggestions = ['Dress', 'Knit', 'Blazer', 'Bag', 'Shoes']

export default function Search() {
  const { search } = useRouter()
  const query = new URLSearchParams(search).get('q') ?? ''
  const term = query.trim().toLowerCase()

  const results = useMemo(() => {
    if (!term) return []
    return products.filter((product) =>
      `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(term),
    )
  }, [term])

  return (
    <>
      <div className="page-head">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--charcoal)' }}>Search</span>
          </nav>
          <h1>{query ? `Results for “${query}”` : 'Search'}</h1>
          <p>
            {query
              ? `${results.length} ${results.length === 1 ? 'piece' : 'pieces'} found`
              : 'Search the collection by name, category or detail.'}
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(26px, 3vw, 40px) 0 clamp(50px, 6vw, 90px)' }}>
        {results.length > 0 ? (
          <div className="products-grid products-grid--4">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No matches found</h2>
            <p>
              We couldn’t find anything for that search. Try a different word, or explore these
              categories:
            </p>
            <div className="search-suggestions" style={{ justifyContent: 'center' }}>
              {suggestions.map((item) => (
                <Link key={item} to={`/search?q=${encodeURIComponent(item)}`} className="chip">
                  {item}
                </Link>
              ))}
            </div>
            <Link to="/shop" className="btn" style={{ marginTop: 24 }}>
              Browse all pieces
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
