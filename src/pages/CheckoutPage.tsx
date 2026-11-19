import { useState } from 'react'
import { getProductById } from '../data/products'
import { money } from '../lib/format'
import { navigate } from '../lib/hooks'
import { useStore } from '../store/StoreContext'
import { Button, ButtonLink } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { Img } from '../components/ui/Img'

type Delivery = 'standard' | 'express'
type Payment = 'card' | 'paypal' | 'applepay'

export function CheckoutPage() {
  const { cart, subtotal, shipping, clearCart, notify } = useStore()
  const [delivery, setDelivery] = useState<Delivery>('standard')
  const [payment, setPayment] = useState<Payment>('card')
  const [placed, setPlaced] = useState(false)
  const [orderNumber] = useState(
    () => `DD-${Math.floor(100000 + Math.random() * 899999)}`,
  )

  const lines = cart
    .map((line) => ({ ...line, product: getProductById(line.id) }))
    .filter((line) => Boolean(line.product))

  const deliveryCost = delivery === 'express' ? 18 : shipping
  const total = subtotal + deliveryCost

  if (placed) {
    return (
      <div className="checkout checkout--done">
        <div className="container checkout__done">
          <span className="checkout__done-icon">
            <Icon name="check" size={26} />
          </span>
          <p className="eyebrow">Order {orderNumber}</p>
          <h1 className="page-title">
            Thank you — it’s <em>on its way</em>
          </h1>
          <p className="page-sub">
            We’ve sent a confirmation to your inbox. Your pieces will be wrapped by hand and
            dispatched within two business days.
          </p>
          <div className="checkout__done-actions">
            <ButtonLink href="/shop">Continue shopping</ButtonLink>
            <ButtonLink href="/" variant="outline">
              Back home
            </ButtonLink>
          </div>
        </div>
      </div>
    )
  }

  if (lines.length === 0) {
    return (
      <div className="checkout">
        <div className="container">
          <div className="empty empty--page">
            <span className="empty__icon">
              <Icon name="bag" size={28} />
            </span>
            <p className="empty__title">There’s nothing to check out — yet.</p>
            <p className="empty__text">Your cart is dreaming of something beautiful.</p>
            <ButtonLink href="/shop">Browse the shop</ButtonLink>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout">
      <div className="container">
        <header className="checkout__head">
          <button
            type="button"
            className="link-btn"
            onClick={() => navigate('/cart')}
          >
            ← Back to cart
          </button>
          <p className="eyebrow">Secure checkout</p>
          <h1 className="page-title">
            Almost <em>home</em>
          </h1>
          <ol className="checkout__steps" aria-label="Checkout progress">
            <li className="is-active">Information</li>
            <li className="is-active">Delivery</li>
            <li>Payment</li>
          </ol>
        </header>

        <form
          className="checkout__layout"
          onSubmit={(event) => {
            event.preventDefault()
            setPlaced(true)
            clearCart()
            notify('Order placed.', `Confirmation ${orderNumber} sent by email.`)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <div className="checkout__form">
            <section className="checkout__block">
              <div className="checkout__block-head">
                <span className="checkout__num">01</span>
                <h2>Contact information</h2>
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" required autoComplete="email" placeholder="you@example.com" />
              </div>
              <label className="check">
                <input type="checkbox" defaultChecked />
                <span className="check__box" aria-hidden="true" />
                <span className="check__label">Email me about new arrivals and the Sunday Edit</span>
              </label>
            </section>

            <section className="checkout__block">
              <div className="checkout__block-head">
                <span className="checkout__num">02</span>
                <h2>Shipping address</h2>
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="first">First name</label>
                  <input id="first" required autoComplete="given-name" placeholder="Elena" />
                </div>
                <div className="field">
                  <label htmlFor="last">Last name</label>
                  <input id="last" required autoComplete="family-name" placeholder="Duarte" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="address">Address</label>
                <input id="address" required autoComplete="street-address" placeholder="24 Rua das Flores" />
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="city">City</label>
                  <input id="city" required autoComplete="address-level2" placeholder="Lisbon" />
                </div>
                <div className="field">
                  <label htmlFor="postal">Postal code</label>
                  <input id="postal" required autoComplete="postal-code" placeholder="1100-155" />
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="country">Country</label>
                  <input id="country" required autoComplete="country-name" placeholder="Portugal" />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone (optional)</label>
                  <input id="phone" type="tel" autoComplete="tel" placeholder="+351 912 345 678" />
                </div>
              </div>
            </section>

            <section className="checkout__block">
              <div className="checkout__block-head">
                <span className="checkout__num">03</span>
                <h2>Delivery method</h2>
              </div>
              <div className="options">
                <label className={`option${delivery === 'standard' ? ' is-active' : ''}`}>
                  <input
                    type="radio"
                    name="delivery"
                    value="standard"
                    checked={delivery === 'standard'}
                    onChange={() => setDelivery('standard')}
                  />
                  <span className="option__text">
                    <span className="option__title">Standard delivery</span>
                    <span className="option__sub">2–4 business days, wrapped by hand</span>
                  </span>
                  <span className="option__price">
                    {shipping === 0 ? 'Complimentary' : money(shipping)}
                  </span>
                </label>
                <label className={`option${delivery === 'express' ? ' is-active' : ''}`}>
                  <input
                    type="radio"
                    name="delivery"
                    value="express"
                    checked={delivery === 'express'}
                    onChange={() => setDelivery('express')}
                  />
                  <span className="option__text">
                    <span className="option__title">Express delivery</span>
                    <span className="option__sub">Next business day before 12:00</span>
                  </span>
                  <span className="option__price">{money(18)}</span>
                </label>
              </div>
            </section>

            <section className="checkout__block">
              <div className="checkout__block-head">
                <span className="checkout__num">04</span>
                <h2>Payment method</h2>
              </div>
              <div className="options options--row">
                {(
                  [
                    { value: 'card', label: 'Card' },
                    { value: 'paypal', label: 'PayPal' },
                    { value: 'applepay', label: 'Apple Pay' },
                  ] as { value: Payment; label: string }[]
                ).map((method) => (
                  <label
                    key={method.value}
                    className={`option option--compact${payment === method.value ? ' is-active' : ''}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.value}
                      checked={payment === method.value}
                      onChange={() => setPayment(method.value)}
                    />
                    <span className="option__title">{method.label}</span>
                  </label>
                ))}
              </div>

              {payment === 'card' && (
                <div className="card-fields">
                  <div className="field">
                    <label htmlFor="card">Card number</label>
                    <input id="card" inputMode="numeric" placeholder="4242 4242 4242 4242" required />
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="expiry">Expiry</label>
                      <input id="expiry" placeholder="MM / YY" required />
                    </div>
                    <div className="field">
                      <label htmlFor="cvc">CVC</label>
                      <input id="cvc" inputMode="numeric" placeholder="123" required />
                    </div>
                  </div>
                </div>
              )}

              <p className="checkout__note">
                <Icon name="shield" size={15} /> This is a demonstration storefront. No payment is
                taken and no card details are stored.
              </p>
            </section>
          </div>

          <aside className="checkout__summary" aria-label="Order summary">
            <h2 className="cart__summary-title">Order summary</h2>
            <ul className="checkout__lines">
              {lines.map((line) => {
                const product = line.product!
                return (
                  <li key={`${line.id}-${line.color}`}>
                    <span className="checkout__line-media">
                      <Img
                        photo={product.photos[0]}
                        alt={product.name}
                        sizes="64px"
                        ratio={[1, 1]}
                        widths={[160, 240]}
                      />
                      <span className="checkout__line-qty">{line.qty}</span>
                    </span>
                    <span className="checkout__line-text">
                      <span className="checkout__line-name">{product.name}</span>
                      <span className="checkout__line-meta">{line.color}</span>
                    </span>
                    <span className="checkout__line-price">
                      {money(product.price * line.qty)}
                    </span>
                  </li>
                )
              })}
            </ul>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>{money(subtotal)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <span>{deliveryCost === 0 ? 'Complimentary' : money(deliveryCost)}</span>
            </div>
            <div className="summary-row summary-row--total">
              <span>Total</span>
              <span>{money(total)}</span>
            </div>
            <Button type="submit" fullWidth size="lg">
              Place order · {money(total)}
            </Button>
            <p className="cart__note">
              <Icon name="return" size={15} /> 30-day returns, no questions asked
            </p>
          </aside>
        </form>
      </div>
    </div>
  )
}
