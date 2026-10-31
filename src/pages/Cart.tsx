import { useState } from 'react'
import { MinusIcon, PlusIcon, TrashIcon } from '../components/Icons'
import { productById } from '../data/catalog'
import { money } from '../lib/format'
import { Link, useRouter } from '../lib/router'
import { useShop } from '../store/shop'

export default function Cart() {
  const { cart, subtotal, shipping, discountAmount, discount, updateQty, removeLine, applyDiscount, clearDiscount } =
    useShop()
  const { navigate } = useRouter()
  const [code, setCode] = useState('')

  if (cart.length === 0) {
    return (
      <div className="container">
        <div className="empty" style={{ margin: 'clamp(40px, 6vw, 80px) 0' }}>
          <h1>Your bag is empty</h1>
          <p>Discover the new season: quiet tailoring, soft knits and considered accessories.</p>
          <Link to="/shop" className="btn">
            Shop new arrivals
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="page-head">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--charcoal)' }}>Shopping bag</span>
          </nav>
          <h1>Shopping bag</h1>
        </div>
      </div>

      <div className="container cart-layout">
        <div>
          <div className="cart-lines">
            {cart.map((line) => {
              const product = productById(line.productId)
              if (!product) return null
              return (
                <div className="cart-line" key={line.key}>
                  <Link to={`/product/${product.slug}`}>
                    <img src={product.images[0]} alt={product.name} loading="lazy" />
                  </Link>
                  <div>
                    <Link to={`/product/${product.slug}`} className="cart-line__name">
                      {product.name}
                    </Link>
                    <p className="cart-line__meta">
                      {line.color} · Size {line.size}
                    </p>
                    <div className="cart-line__controls">
                      <div className="qty qty--sm">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQty(line.key, line.qty - 1)}
                        >
                          <MinusIcon size={13} />
                        </button>
                        <span>{line.qty}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQty(line.key, line.qty + 1)}
                        >
                          <PlusIcon size={13} />
                        </button>
                      </div>
                      <button type="button" className="line__remove" onClick={() => removeLine(line.key)}>
                        <TrashIcon size={13} /> Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-line__right">
                    <span>{money(product.price * line.qty)}</span>
                  </div>
                </div>
              )
            })}
          </div>

          <div style={{ marginTop: 24 }}>
            <Link to="/shop" className="text-link">
              ← Continue shopping
            </Link>
          </div>
        </div>

        <aside className="summary-box" aria-label="Order summary">
          <h2>Order summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>{money(subtotal)}</span>
          </div>
          {discountAmount > 0 && (
            <div className="summary-row summary-row--discount">
              <span>Discount ({discount})</span>
              <span>−{money(discountAmount)}</span>
            </div>
          )}
          <div className="summary-row">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'Free' : money(shipping)}</span>
          </div>
          <div className="summary-row">
            <span>Estimated tax</span>
            <span>Included</span>
          </div>
          <div className="summary-row summary-row--total">
            <span>Total</span>
            <span>{money(subtotal - discountAmount + shipping)}</span>
          </div>

          <form
            className="discount-form"
            onSubmit={(event) => {
              event.preventDefault()
              if (applyDiscount(code)) setCode('')
            }}
          >
            <label className="visually-hidden" htmlFor="discount">
              Discount code
            </label>
            <input
              id="discount"
              className="input"
              placeholder="Discount code"
              value={code}
              onChange={(event) => setCode(event.target.value)}
            />
            <button type="submit" className="btn btn--ghost btn--small">
              Apply
            </button>
          </form>
          {discount ? (
            <p className="discount-note">
              <span>{discount} applied</span>
              <button type="button" onClick={clearDiscount}>
                Remove
              </button>
            </p>
          ) : (
            <p style={{ fontSize: 11, color: 'var(--muted)' }}>
              Try <strong>DEVA10</strong> for 10% off your first order.
            </p>
          )}

          <button type="button" className="btn btn--block" onClick={() => navigate('/checkout')}>
            Proceed to checkout
          </button>

          <p style={{ marginTop: 14, fontSize: 11, color: 'var(--muted)', textAlign: 'center' }}>
            Shipping calculated at checkout · Free over $99
          </p>
        </aside>
      </div>
    </>
  )
}
