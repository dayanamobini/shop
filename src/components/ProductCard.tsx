import { money } from '../lib/format'
import { Link } from '../lib/router'
import type { Product } from '../data/catalog'
import { useShop } from '../store/shop'
import { HeartIcon, StarIcon } from './Icons'

export default function ProductCard({ product }: { product: Product }) {
  const { toggleWishlist, isWishlisted, setQuickView } = useShop()
  const wishlisted = isWishlisted(product.id)

  return (
    <article className="card">
      <div className="card__media">
        <Link to={`/product/${product.slug}`} className="card__hit">
          <span className="visually-hidden">{product.name}</span>
        </Link>
        <img
          className="card__img"
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          width={600}
          height={800}
        />
        <img
          className="card__img card__img--alt"
          src={product.images[1] ?? product.images[0]}
          alt=""
          loading="lazy"
          aria-hidden="true"
        />

        {product.compareAt && (
          <span className="card__badge card__badge--sale">
            {Math.round((1 - product.price / product.compareAt) * 100)}% off
          </span>
        )}
        {!product.compareAt && product.badge && <span className="card__badge">{product.badge}</span>}

        <button
          type="button"
          className={`card__wish${wishlisted ? ' is-active' : ''}`}
          aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          aria-pressed={wishlisted}
          onClick={() => toggleWishlist(product.id)}
        >
          <HeartIcon size={15} filled={wishlisted} />
        </button>

        <button type="button" className="card__quick" onClick={() => setQuickView(product.id)}>
          Quick view
        </button>
      </div>

      <div className="card__body">
        <Link to={`/product/${product.slug}`} className="card__name">
          {product.name}
        </Link>
        <div className="card__meta">
          <span>{money(product.price)}</span>
          {product.compareAt && <span className="card__compare">{money(product.compareAt)}</span>}
        </div>
        <div className="card__colors" aria-hidden="true">
          {product.colors.map((color) => (
            <span
              key={color.name}
              className="dot"
              style={{ background: color.hex }}
              title={color.name}
            />
          ))}
        </div>
        <span className="rating">
          <StarIcon size={11} />
          {product.rating.toFixed(1)} ({product.reviewCount})
        </span>
      </div>
    </article>
  )
}
