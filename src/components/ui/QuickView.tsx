import { useState } from 'react'
import { getProductById } from '../../data/products'
import { money } from '../../lib/format'
import { useBodyLock, useEscape } from '../../lib/hooks'
import { useStore } from '../../store/StoreContext'
import { Img } from './Img'
import { Icon } from './Icon'
import { Rating } from './Rating'
import { Button, ButtonLink } from './Button'

export function QuickView() {
  const { quickViewId, setQuickViewId, addToCart, toggleWishlist, isWishlisted } = useStore()
  const product = quickViewId ? getProductById(quickViewId) : undefined
  const [color, setColor] = useState<string | null>(null)
  const [qty, setQty] = useState(1)

  useBodyLock(Boolean(product))
  useEscape(Boolean(product), () => setQuickViewId(null))

  if (!product) return null
  const activeColor = color ?? product.colors[0].name

  return (
    <div
      className="overlay overlay--center"
      role="presentation"
      onMouseDown={() => setQuickViewId(null)}
    >
      <div
        className="quickview"
        role="dialog"
        aria-modal="true"
        aria-label={`Quick view — ${product.name}`}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="icon-btn quickview__close"
          onClick={() => setQuickViewId(null)}
          aria-label="Close quick view"
        >
          <Icon name="close" />
        </button>
        <div className="quickview__media">
          <Img
            photo={product.photos[0]}
            alt={product.name}
            sizes="(max-width: 767px) 100vw, 380px"
            ratio={[4, 5]}
          />
        </div>
        <div className="quickview__body">
          <p className="eyebrow">{product.category}</p>
          <h2 className="quickview__title">{product.name}</h2>
          <Rating rating={product.rating} count={product.reviewCount} />
          <p className="quickview__price">
            {money(product.price)}
            {product.compareAt && <s>{money(product.compareAt)}</s>}
          </p>
          <p className="quickview__desc">{product.description}</p>
          <div className="quickview__colors">
            <span className="field-label">Colour · {activeColor}</span>
            <div className="swatches">
              {product.colors.map((option) => (
                <button
                  key={option.name}
                  type="button"
                  className={`swatch${option.name === activeColor ? ' is-active' : ''}`}
                  style={{ background: option.hex }}
                  aria-label={option.name}
                  aria-pressed={option.name === activeColor}
                  onClick={() => setColor(option.name)}
                />
              ))}
            </div>
          </div>
          <div className="quickview__actions">
            <div className="qty">
              <button
                type="button"
                onClick={() => setQty((value) => Math.max(1, value - 1))}
                aria-label="Decrease quantity"
              >
                <Icon name="minus" size={14} />
              </button>
              <span aria-live="polite">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((value) => Math.min(99, value + 1))}
                aria-label="Increase quantity"
              >
                <Icon name="plus" size={14} />
              </button>
            </div>
            <Button
              onClick={() => {
                addToCart(product, { qty, color: activeColor })
                setQuickViewId(null)
              }}
            >
              Add to cart
            </Button>
            <button
              type="button"
              className={`wish-btn${isWishlisted(product.id) ? ' is-saved' : ''}`}
              onClick={() => toggleWishlist(product.id)}
              aria-label="Save to wishlist"
              aria-pressed={isWishlisted(product.id)}
            >
              <Icon name={isWishlisted(product.id) ? 'heart-filled' : 'heart'} />
            </button>
          </div>
          <ButtonLink href={`/product/${product.slug}`} variant="ghost" size="sm" icon="arrow-right">
            View full details
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}
