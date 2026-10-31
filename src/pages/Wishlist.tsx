import ProductCard from '../components/ProductCard'
import { Link } from '../lib/router'
import { products } from '../data/catalog'
import { useShop } from '../store/shop'

export default function Wishlist() {
  const { wishlist } = useShop()
  const saved = products.filter((product) => wishlist.includes(product.id))

  return (
    <>
      <div className="page-head">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--charcoal)' }}>Wishlist</span>
          </nav>
          <h1>Wishlist</h1>
          <p>Pieces you have saved. Tap the heart on any product to add or remove it.</p>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(26px, 3vw, 40px) 0 clamp(50px, 6vw, 90px)' }}>
        {saved.length === 0 ? (
          <div className="empty">
            <h2>Your wishlist is empty</h2>
            <p>Save the pieces you love and they will be waiting here for you.</p>
            <Link to="/shop" className="btn">
              Browse the collection
            </Link>
          </div>
        ) : (
          <>
            <div className="toolbar">
              <span className="toolbar__count">
                {saved.length} saved {saved.length === 1 ? 'piece' : 'pieces'}
              </span>
              <Link to="/shop" className="text-link">
                Continue shopping
              </Link>
            </div>
            <div className="products-grid products-grid--4">
              {saved.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}
