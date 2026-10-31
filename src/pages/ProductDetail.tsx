import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import {
  ChevronDownIcon,
  CloseIcon,
  HeartIcon,
  ReturnIcon,
  ShieldIcon,
  StarIcon,
  TruckIcon,
  ZoomIcon,
} from '../components/Icons'
import { categoryLabels, productBySlug, products } from '../data/catalog'
import { money } from '../lib/format'
import { Link, useRouter } from '../lib/router'
import { useShop } from '../store/shop'

const sizeChart = [
  { size: 'XS', uk: '6', eu: '34', us: '2', bust: '80–84', waist: '62–66' },
  { size: 'S', uk: '8', eu: '36', us: '4', bust: '84–88', waist: '66–70' },
  { size: 'M', uk: '10', eu: '38', us: '6', bust: '88–92', waist: '70–74' },
  { size: 'L', uk: '12', eu: '40', us: '8', bust: '92–98', waist: '74–80' },
  { size: 'XL', uk: '14', eu: '42', us: '10', bust: '98–104', waist: '80–86' },
]

export default function ProductDetail({ slug }: { slug: string }) {
  const product = productBySlug(slug)
  const { addToCart, toggleWishlist, isWishlisted, pushToast } = useShop()
  const { navigate } = useRouter()

  const [activeImage, setActiveImage] = useState(0)
  const [size, setSize] = useState('')
  const [color, setColor] = useState(product?.colors[0]?.name ?? '')
  const [qty, setQty] = useState(1)
  const [zoomed, setZoomed] = useState(false)
  const [origin, setOrigin] = useState('50% 50%')
  const [openSection, setOpenSection] = useState<string | null>('details')
  const [sizeGuide, setSizeGuide] = useState(false)
  const [error, setError] = useState(false)

  const related = useMemo(() => {
    if (!product) return []
    const sameCategory = products.filter((item) => item.category === product.category && item.id !== product.id)
    const others = products.filter((item) => item.category !== product.category && item.id !== product.id)
    return [...sameCategory, ...others].slice(0, 4)
  }, [product])

  if (!product) {
    return (
      <div className="container">
        <div className="empty" style={{ margin: '60px 0' }}>
          <h1>We couldn’t find that piece</h1>
          <p>It may have sold out or moved. Explore the current collection instead.</p>
          <Link to="/shop" className="btn">
            Back to the collection
          </Link>
        </div>
      </div>
    )
  }

  const wishlisted = isWishlisted(product.id)
  const lowStock = product.stock <= 6

  const add = () => {
    if (product.sizes.length > 1 && !size) {
      setError(true)
      pushToast('Please choose a size first', 'error')
      return
    }
    addToCart(product.id, size || product.sizes[0], color, qty)
  }

  return (
    <>
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb" style={{ paddingTop: 22 }}>
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to={`/shop/${product.category}`}>{categoryLabels[product.category]}</Link>
          <span>/</span>
          <span style={{ color: 'var(--charcoal)' }}>{product.name}</span>
        </nav>
      </div>

      <div className="container pdp">
        <div className="pdp__grid">
          <div className="gallery">
            <div className="gallery__thumbs">
              {product.images.map((image, index) => (
                <button
                  key={image + index}
                  type="button"
                  className={`gallery__thumb${index === activeImage ? ' is-active' : ''}`}
                  aria-label={`View image ${index + 1} of ${product.name}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={image} alt="" loading="lazy" />
                </button>
              ))}
            </div>

            <div
              className={`gallery__main${zoomed ? ' is-zoomed' : ''}`}
              onMouseEnter={() => setZoomed(true)}
              onMouseLeave={() => setZoomed(false)}
              onMouseMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect()
                setOrigin(
                  `${((event.clientX - rect.left) / rect.width) * 100}% ${
                    ((event.clientY - rect.top) / rect.height) * 100
                  }%`,
                )
              }}
              onClick={() => setZoomed(!zoomed)}
            >
              <img
                src={product.images[activeImage]}
                alt={`${product.name} — view ${activeImage + 1}`}
                style={{ transformOrigin: origin }}
              />
              <span className="gallery__hint">
                <ZoomIcon size={13} /> Hover to zoom
              </span>
            </div>
          </div>

          <div className="pdp__info">
            <span className="eyebrow">{product.badge ?? 'DEVA Collection'}</span>
            <h1 className="pdp__title">{product.name}</h1>

            <div className="pdp__rating">
              <span className="stars" aria-label={`${product.rating} out of 5`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} size={12} filled={index < Math.round(product.rating)} />
                ))}
              </span>
              <span style={{ fontSize: 11.5, color: 'var(--muted)' }}>
                {product.rating.toFixed(1)} · {product.reviewCount} reviews
              </span>
            </div>

            <p className="pdp__price">
              {money(product.price)}
              {product.compareAt && <span className="pdp__compare">{money(product.compareAt)}</span>}
            </p>

            <p className="pdp__desc">{product.description}</p>

            <div className="option">
              <div className="option__head">
                <span className="option__label">Colour · {color}</span>
              </div>
              <div className="swatches">
                {product.colors.map((option) => (
                  <button
                    key={option.name}
                    type="button"
                    className={`swatch${color === option.name ? ' is-active' : ''}`}
                    style={{ background: option.hex }}
                    aria-label={option.name}
                    aria-pressed={color === option.name}
                    onClick={() => setColor(option.name)}
                  />
                ))}
              </div>
            </div>

            <div className="option">
              <div className="option__head">
                <span className="option__label">
                  Size{size ? ` · ${size}` : ''}
                  {error && !size ? ' — please choose' : ''}
                </span>
                <button type="button" className="size-link" onClick={() => setSizeGuide(true)}>
                  Size guide
                </button>
              </div>
              <div className="sizes-row">
                {product.sizes.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`size-btn${size === option ? ' is-active' : ''}`}
                    onClick={() => {
                      setSize(option)
                      setError(false)
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="option" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div className="qty">
                <button type="button" aria-label="Decrease quantity" onClick={() => setQty(Math.max(1, qty - 1))}>
                  −
                </button>
                <span aria-live="polite">{qty}</span>
                <button type="button" aria-label="Increase quantity" onClick={() => setQty(Math.min(10, qty + 1))}>
                  +
                </button>
              </div>
              <span style={{ fontSize: 11.5, color: 'var(--muted)' }}>
                {lowStock ? 'Low stock — order soon' : 'In stock'}
              </span>
            </div>

            <div className="pdp__actions">
              <button type="button" className="btn" onClick={add}>
                Add to bag · {money(product.price * qty)}
              </button>
              <button
                type="button"
                className={`wish-btn${wishlisted ? ' is-active' : ''}`}
                aria-label={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
                aria-pressed={wishlisted}
                onClick={() => toggleWishlist(product.id)}
              >
                <HeartIcon size={18} filled={wishlisted} />
              </button>
            </div>

            <p className={`stock${lowStock ? ' stock--low' : ''}`}>
              <span className="stock__dot" />
              {lowStock
                ? `Only ${product.stock} left — ships within 2 business days`
                : 'In stock — ships within 1–2 business days'}
            </p>

            <div className="accordion">
              {[
                { key: 'details', label: 'Details & composition' },
                { key: 'shipping', label: 'Shipping & returns' },
                { key: 'care', label: 'Care' },
              ].map((section) => (
                <div className="acc__item" key={section.key}>
                  <button
                    type="button"
                    className="acc__btn"
                    aria-expanded={openSection === section.key}
                    onClick={() => setOpenSection(openSection === section.key ? null : section.key)}
                  >
                    {section.label}
                    <ChevronDownIcon size={14} />
                  </button>
                  {openSection === section.key && (
                    <div className="acc__panel">
                      {section.key === 'details' && (
                        <ul>
                          {product.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                      )}
                      {section.key === 'shipping' && (
                        <p>
                          Complimentary standard delivery on orders over $99 (2–4 business days).
                          Express delivery available at checkout. Unworn pieces can be returned within
                          30 days of delivery.
                        </p>
                      )}
                      {section.key === 'care' && (
                        <p>
                          Store folded in the dust bag provided. Wash sparingly, air between wears,
                          and follow the care label for the best long-term result.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="perks">
              <span className="perk">
                <TruckIcon size={17} /> Free shipping over $99
              </span>
              <span className="perk">
                <ReturnIcon size={17} /> 30-day easy returns
              </span>
              <span className="perk">
                <ShieldIcon size={17} /> Secure, encrypted checkout
              </span>
            </div>
          </div>
        </div>

        <section className="reviews" aria-labelledby="reviews-title">
          <div className="reviews__grid">
            <div>
              <h2 className="section-title" id="reviews-title" style={{ fontSize: 28 }}>
                Customer reviews
              </h2>
              <p className="reviews__score">{product.rating.toFixed(1)}</p>
              <span className="stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} size={14} filled={index < Math.round(product.rating)} />
                ))}
              </span>
              <p style={{ marginTop: 10, fontSize: 12, color: 'var(--muted)' }}>
                Based on {product.reviewCount} reviews
              </p>
            </div>

            <div className="reviews__list">
              {product.reviews.map((review) => (
                <article className="review" key={review.name + review.date}>
                  <div className="review__top">
                    <span className="review__name">{review.name}</span>
                    <span className="review__date">{review.date}</span>
                  </div>
                  <span className="stars" aria-label={`${review.rating} out of 5`}>
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <StarIcon key={index} size={12} />
                    ))}
                  </span>
                  <p className="review__title">{review.title}</p>
                  <p className="review__text">{review.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section--tight" aria-labelledby="related-title">
          <div className="section-head">
            <h2 className="section-title" id="related-title" style={{ fontSize: 30 }}>
              You may also like
            </h2>
            <button type="button" className="text-link" onClick={() => navigate(`/shop/${product.category}`)}>
              Shop {categoryLabels[product.category]}
            </button>
          </div>
          <div className="products-grid products-grid--4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </div>

      {sizeGuide && (
        <>
          <div className="overlay is-open" onClick={() => setSizeGuide(false)} aria-hidden="true" />
          <div className="modal">
            <div className="modal__panel modal__panel--narrow" role="dialog" aria-modal="true" aria-label="Size guide">
              <button
                type="button"
                className="modal__close"
                aria-label="Close size guide"
                onClick={() => setSizeGuide(false)}
              >
                <CloseIcon size={18} />
              </button>
              <p className="eyebrow">Fit & measurements</p>
              <h2>Size guide</h2>
              <p style={{ marginTop: 10, fontSize: 13, color: 'var(--muted)' }}>
                Measurements in centimetres. Our pieces are cut for a relaxed, true-to-size fit — take
                your usual size.
              </p>
              <table className="size-table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>UK</th>
                    <th>EU</th>
                    <th>US</th>
                    <th>Bust</th>
                    <th>Waist</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeChart.map((row) => (
                    <tr key={row.size}>
                      <td>{row.size}</td>
                      <td>{row.uk}</td>
                      <td>{row.eu}</td>
                      <td>{row.us}</td>
                      <td>{row.bust}</td>
                      <td>{row.waist}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  )
}
