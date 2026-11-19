import { getProductById } from '../../data/products'
import { money } from '../../lib/format'
import { navigate } from '../../lib/hooks'
import { useStore } from '../../store/StoreContext'
import { Button, ButtonLink } from '../ui/Button'
import { Drawer } from '../ui/Drawer'
import { Icon } from '../ui/Icon'
import { Img } from '../ui/Img'

export function MiniCart() {
  const {
    cart,
    cartOpen,
    setCartOpen,
    setQty,
    removeLine,
    subtotal,
    shipping,
    total,
    cartCount,
  } = useStore()

  const remaining = Math.max(0, 99 - subtotal)
  const progress = Math.min(100, (subtotal / 99) * 100)

  return (
    <Drawer
      open={cartOpen}
      onClose={() => setCartOpen(false)}
      eyebrow={`${cartCount} ${cartCount === 1 ? 'piece' : 'pieces'}`}
      title="Your cart"
      footer={
        cart.length > 0 ? (
          <div className="minicart__summary">
            <div className="minicart__row">
              <span>Subtotal</span>
              <span>{money(subtotal)}</span>
            </div>
            <div className="minicart__row">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Complimentary' : money(shipping)}</span>
            </div>
            <div className="minicart__row minicart__row--total">
              <span>Total</span>
              <span>{money(total)}</span>
            </div>
            <Button
              fullWidth
              onClick={() => {
                setCartOpen(false)
                navigate('/checkout')
              }}
            >
              Checkout
            </Button>
            <ButtonLink
              href="/cart"
              variant="ghost"
              size="sm"
              fullWidth
              onClick={() => setCartOpen(false)}
            >
              View full cart
            </ButtonLink>
          </div>
        ) : undefined
      }
    >
      {cart.length === 0 ? (
        <div className="empty empty--drawer">
          <span className="empty__icon">
            <Icon name="bag" size={26} />
          </span>
          <p className="empty__title">Your cart is currently dreaming of something beautiful.</p>
          <ButtonLink href="/shop" variant="outline" size="sm" onClick={() => setCartOpen(false)}>
            Browse the shop
          </ButtonLink>
        </div>
      ) : (
        <>
          <div className="ship-meter">
            <p>
              {remaining === 0
                ? 'Complimentary shipping unlocked.'
                : `${money(remaining)} away from complimentary shipping.`}
            </p>
            <span className="ship-meter__track">
              <span className="ship-meter__fill" style={{ width: `${progress}%` }} />
            </span>
          </div>

          <ul className="minicart">
            {cart.map((line) => {
              const product = getProductById(line.id)
              if (!product) return null
              return (
                <li className="minicart__line" key={`${line.id}-${line.color}`}>
                  <a
                    className="minicart__media"
                    href={`/product/${product.slug}`}
                    onClick={(event) => {
                      event.preventDefault()
                      setCartOpen(false)
                      navigate(`/product/${product.slug}`)
                    }}
                  >
                    <Img
                      photo={product.photos[0]}
                      alt={product.name}
                      sizes="92px"
                      ratio={[1, 1]}
                      widths={[160, 240, 320]}
                    />
                  </a>
                  <div className="minicart__body">
                    <div className="minicart__top">
                      <h3 className="minicart__name">{product.name}</h3>
                      <button
                        type="button"
                        className="minicart__remove"
                        onClick={() => removeLine(line.id, line.color)}
                        aria-label={`Remove ${product.name} from cart`}
                      >
                        <Icon name="close" size={14} />
                      </button>
                    </div>
                    <p className="minicart__color">{line.color}</p>
                    <div className="minicart__bottom">
                      <div className="qty qty--sm">
                        <button
                          type="button"
                          onClick={() => setQty(line.id, line.color, line.qty - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Icon name="minus" size={12} />
                        </button>
                        <span>{line.qty}</span>
                        <button
                          type="button"
                          onClick={() => setQty(line.id, line.color, line.qty + 1)}
                          aria-label="Increase quantity"
                        >
                          <Icon name="plus" size={12} />
                        </button>
                      </div>
                      <span className="minicart__price">{money(product.price * line.qty)}</span>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </Drawer>
  )
}
