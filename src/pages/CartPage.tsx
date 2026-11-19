import { getProductById, products } from '../data/products'
import { money } from '../lib/format'
import { navigate } from '../lib/hooks'
import { useStore } from '../store/StoreContext'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Button, ButtonLink } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { Img } from '../components/ui/Img'
import { ProductGrid } from '../components/product/ProductGrid'

export function CartPage() {
  const { cart, setQty, removeLine, subtotal, shipping, total, cartCount } = useStore()
  const lines = cart
    .map((line) => ({ ...line, product: getProductById(line.id) }))
    .filter((line) => Boolean(line.product))
  const recommended = products.filter((product) => !cart.some((line) => line.id === product.id)).slice(0, 4)

  return (
    <div className="cart-page">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Cart' }]} />
        <div className="page-head page-head--row">
          <div>
            <p className="eyebrow">Your selection</p>
            <h1 className="page-title">
              Shopping <em>Bag</em>
            </h1>
          </div>
          <p className="page-sub">
            {cartCount} {cartCount === 1 ? 'piece' : 'pieces'} chosen
          </p>
        </div>

        {lines.length === 0 ? (
          <div className="empty empty--page">
            <span className="empty__icon">
              <Icon name="bag" size={28} />
            </span>
            <p className="empty__title">Your cart is currently dreaming of something beautiful.</p>
            <p className="empty__text">
              Start with a sculpture, a lamp, or a vase — the rest tends to follow.
            </p>
            <ButtonLink href="/shop">Browse the shop</ButtonLink>
          </div>
        ) : (
          <div className="cart__layout">
            <div className="cart__lines">
              <div className="cart__head">
                <span>Piece</span>
                <span>Quantity</span>
                <span>Total</span>
              </div>
              {lines.map((line) => {
                const product = line.product!
                return (
                  <div className="cart__line" key={`${line.id}-${line.color}`}>
                    <a
                      className="cart__media"
                      href={`/product/${product.slug}`}
                      onClick={(event) => {
                        event.preventDefault()
                        navigate(`/product/${product.slug}`)
                      }}
                    >
                      <Img
                        photo={product.photos[0]}
                        alt={product.name}
                        sizes="120px"
                        ratio={[1, 1]}
                        widths={[240, 360]}
                      />
                    </a>
                    <div className="cart__info">
                      <p className="cart__cat">{product.category}</p>
                      <a
                        className="cart__name"
                        href={`/product/${product.slug}`}
                        onClick={(event) => {
                          event.preventDefault()
                          navigate(`/product/${product.slug}`)
                        }}
                      >
                        {product.name}
                      </a>
                      <p className="cart__variant">{line.color}</p>
                      <p className="cart__unit">{money(product.price)} each</p>
                      <button
                        type="button"
                        className="link-btn cart__remove"
                        onClick={() => removeLine(line.id, line.color)}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="cart__qty">
                      <div className="qty">
                        <button
                          type="button"
                          onClick={() => setQty(line.id, line.color, line.qty - 1)}
                          aria-label={`Decrease quantity of ${product.name}`}
                        >
                          <Icon name="minus" size={13} />
                        </button>
                        <span>{line.qty}</span>
                        <button
                          type="button"
                          onClick={() => setQty(line.id, line.color, line.qty + 1)}
                          aria-label={`Increase quantity of ${product.name}`}
                        >
                          <Icon name="plus" size={13} />
                        </button>
                      </div>
                    </div>
                    <p className="cart__total">{money(product.price * line.qty)}</p>
                  </div>
                )
              })}

              <div className="cart__continue">
                <ButtonLink href="/shop" variant="ghost" size="sm" icon="arrow-right">
                  Continue shopping
                </ButtonLink>
              </div>
            </div>

            <aside className="cart__summary" aria-label="Order summary">
              <h2 className="cart__summary-title">Summary</h2>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>{money(subtotal)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Complimentary' : money(shipping)}</span>
              </div>
              <div className="summary-row">
                <span>Estimated tax</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="summary-row summary-row--total">
                <span>Total</span>
                <span>{money(total)}</span>
              </div>
              <Button fullWidth size="lg" onClick={() => navigate('/checkout')}>
                Checkout
              </Button>
              <p className="cart__note">
                <Icon name="shield" size={15} /> Secure checkout · 30-day returns
              </p>
              <div className="ship-meter">
                <p>
                  {subtotal >= 99
                    ? 'Complimentary shipping unlocked.'
                    : `${money(99 - subtotal)} away from complimentary shipping.`}
                </p>
                <span className="ship-meter__track">
                  <span
                    className="ship-meter__fill"
                    style={{ width: `${Math.min(100, (subtotal / 99) * 100)}%` }}
                  />
                </span>
              </div>
            </aside>
          </div>
        )}
      </div>

      {recommended.length > 0 && (
        <section className="section section--cream">
          <div className="container">
            <p className="eyebrow">You may also love</p>
            <h2 className="section-head__title">Complete the room</h2>
            <ProductGrid products={recommended} />
          </div>
        </section>
      )}
    </div>
  )
}
