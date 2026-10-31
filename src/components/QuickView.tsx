import { useEffect, useState } from 'react'
import { productById } from '../data/catalog'
import { money } from '../lib/format'
import { useRouter } from '../lib/router'
import { useShop } from '../store/shop'
import { CloseIcon, HeartIcon, StarIcon } from './Icons'

export default function QuickView() {
  const { quickViewId, setQuickView, addToCart, toggleWishlist, isWishlisted } = useShop()
  const { navigate } = useRouter()
  const product = quickViewId ? productById(quickViewId) : undefined
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!product) return
    setSize(product.sizes.length === 1 ? product.sizes[0] : '')
    setColor(product.colors[0]?.name ?? '')
    setError(false)
  }, [product])

  useEffect(() => {
    if (!product) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setQuickView(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [product, setQuickView])

  if (!product) return null

  const close = () => setQuickView(null)

  const add = () => {
    if (!size) {
      setError(true)
      return
    }
    addToCart(product.id, size, color, 1)
    close()
  }

  return (
    <>
      <div className="overlay is-open" onClick={close} aria-hidden="true" />
      <div className="modal">
        <div className="modal__panel" role="dialog" aria-modal="true" aria-label={product.name}>
          <button type="button" className="modal__close" aria-label="Close quick view" onClick={close}>
            <CloseIcon size={18} />
          </button>

          <div className="modal__media">
            <img src={product.images[0]} alt={product.name} />
          </div>

          <div className="modal__body">
            <span className="eyebrow">{product.badge ?? 'DEVA Collection'}</span>
            <h2>{product.name}</h2>
            <span className="rating" style={{ marginTop: 8 }}>
              <StarIcon size={12} /> {product.rating.toFixed(1)} · {product.reviewCount} reviews
            </span>
            <p className="modal__price">{money(product.price)}</p>
            <p className="modal__desc">{product.description}</p>

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
                  {error && !size ? ' — please select' : ''}
                </span>
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

            <div className="modal__actions">
              <button type="button" className="btn" onClick={add}>
                Add to bag
              </button>
              <button
                type="button"
                className={`wish-btn${isWishlisted(product.id) ? ' is-active' : ''}`}
                aria-label="Save to wishlist"
                onClick={() => toggleWishlist(product.id)}
              >
                <HeartIcon size={17} filled={isWishlisted(product.id)} />
              </button>
            </div>

            <button
              type="button"
              className="text-link"
              style={{ marginTop: 20, border: 0, borderBottom: '1px solid currentColor', background: 'none' }}
              onClick={() => {
                close()
                navigate(`/product/${product.slug}`)
              }}
            >
              View full details
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
