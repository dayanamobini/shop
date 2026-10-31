import { productById } from '../data/catalog'
import { money } from '../lib/format'
import { useRouter } from '../lib/router'
import { useShop } from '../store/shop'
import { CloseIcon, MinusIcon, PlusIcon, TrashIcon } from './Icons'

const FREE_SHIPPING = 99

export default function CartDrawer() {
  const { cartOpen, closeCart, cart, updateQty, removeLine, subtotal, shipping } = useShop()
  const { navigate } = useRouter()
  const remaining = Math.max(0, FREE_SHIPPING - subtotal)
  const progress = Math.min(100, (subtotal / FREE_SHIPPING) * 100)

  const go = (to: string) => {
    closeCart()
    navigate(to)
  }

  return (
    <>
      <div
        className={`overlay${cartOpen ? ' is-open' : ''}`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={`drawer${cartOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
        aria-hidden={!cartOpen}
      >
        <div className="drawer__head">
          <h3>Your bag ({cart.length})</h3>
          <button type="button" className="icon-btn" aria-label="Close bag" onClick={closeCart}>
            <CloseIcon size={20} />
          </button>
        </div>

        <div className="drawer__body">
          {cart.length === 0 && (
            <div style={{ padding: '48px 0', textAlign: 'center' }}>
              <p style={{ fontSize: 13.5, color: 'var(--muted)' }}>Your bag is empty.</p>
              <button
                type="button"
                className="btn btn--ghost btn--small"
                style={{ marginTop: 18 }}
                onClick={() => go('/shop')}
              >
                Shop new arrivals
              </button>
            </div>
          )}

          {cart.map((line) => {
            const product = productById(line.productId)
            if (!product) return null
            return (
              <div className="line" key={line.key}>
                <img src={product.images[0]} alt={product.name} loading="lazy" />
                <div>
                  <p className="line__name">{product.name}</p>
                  <p className="line__meta">
                    {line.color} · Size {line.size}
                  </p>
                  <div className="line__row">
                    <div className="qty qty--sm">
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${product.name}`}
                        onClick={() => updateQty(line.key, line.qty - 1)}
                      >
                        <MinusIcon size={13} />
                      </button>
                      <span aria-live="polite">{line.qty}</span>
                      <button
                        type="button"
                        aria-label={`Increase quantity of ${product.name}`}
                        onClick={() => updateQty(line.key, line.qty + 1)}
                      >
                        <PlusIcon size={13} />
                      </button>
                    </div>
                    <span style={{ fontSize: 13 }}>{money(product.price * line.qty)}</span>
                  </div>
                  <div className="line__row">
                    <button
                      type="button"
                      className="line__remove"
                      onClick={() => removeLine(line.key)}
                    >
                      <TrashIcon size={13} /> Remove
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {cart.length > 0 && (
          <div className="drawer__foot">
            <p className="ship-note">
              {remaining > 0
                ? `You're ${money(remaining)} away from free shipping.`
                : 'Your order qualifies for free standard shipping.'}
              <span className="ship-note__bar">
                <span className="ship-note__fill" style={{ width: `${progress}%` }} />
              </span>
            </p>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>{money(subtotal)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : money(shipping)}</span>
            </div>

            <div className="drawer__actions">
              <button type="button" className="btn btn--block" onClick={() => go('/checkout')}>
                Checkout
              </button>
              <button
                type="button"
                className="btn btn--ghost btn--block"
                onClick={() => go('/cart')}
              >
                View bag
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  )
}
