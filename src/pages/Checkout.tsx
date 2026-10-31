import { useState } from 'react'
import { CheckIcon, ChevronLeftIcon, ShieldIcon } from '../components/Icons'
import { productById } from '../data/catalog'
import { money } from '../lib/format'
import { Link, useRouter } from '../lib/router'
import { useShop, type Address, type Order } from '../store/shop'

type Delivery = 'standard' | 'express'

const emptyForm = {
  email: '',
  firstName: '',
  lastName: '',
  address: '',
  apartment: '',
  city: '',
  postal: '',
  country: 'United Kingdom',
  phone: '',
  card: '',
  expiry: '',
  cvc: '',
}

export default function Checkout() {
  const { cart, subtotal, shipping, discountAmount, discount, placeOrder, user } = useShop()
  const { navigate } = useRouter()
  const [step, setStep] = useState(1)
  const [delivery, setDelivery] = useState<Delivery>('standard')
  const [form, setForm] = useState({ ...emptyForm, email: user?.email ?? '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [order, setOrder] = useState<Order | null>(null)

  const expressFee = delivery === 'express' ? 15 : 0
  const total = subtotal - discountAmount + shipping + expressFee

  const set = (key: keyof typeof emptyForm, value: string) => {
    setForm((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: '' }))
  }

  const validateInformation = () => {
    const next: Record<string, string> = {}
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.firstName.trim()) next.firstName = 'Required.'
    if (!form.lastName.trim()) next.lastName = 'Required.'
    if (!form.address.trim()) next.address = 'Required.'
    if (!form.city.trim()) next.city = 'Required.'
    if (!form.postal.trim()) next.postal = 'Required.'
    if (form.phone.trim().length < 6) next.phone = 'Enter a contactable number.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const validatePayment = () => {
    const next: Record<string, string> = {}
    const digits = form.card.replace(/\s/g, '')
    if (digits.length < 15) next.card = 'Enter a 16-digit card number.'
    if (!/^\d{2}\s?\/\s?\d{2}$/.test(form.expiry)) next.expiry = 'Use MM/YY.'
    if (form.cvc.length < 3) next.cvc = '3 digits.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const place = () => {
    if (!validatePayment()) return
    const address: Address = {
      id: 'checkout',
      label: 'Shipping',
      name: `${form.firstName} ${form.lastName}`.trim(),
      line1: `${form.address}${form.apartment ? `, ${form.apartment}` : ''}`,
      city: form.city,
      postal: form.postal,
      country: form.country,
      phone: form.phone,
    }
    const placed = placeOrder(delivery === 'express' ? 'Express · 1–2 days' : 'Standard · 2–4 days', address)
    setOrder(placed)
  }

  if (order) {
    return (
      <div className="confirmation">
        <span className="confirmation__mark">
          <CheckIcon size={26} />
        </span>
        <h1>Thank you, {order.address?.name.split(' ')[0] ?? 'friend'}.</h1>
        <p>
          Your order is confirmed. We’ve sent a receipt to your email and will notify you as soon as
          it ships.
        </p>

        <div className="confirmation__card">
          <div className="confirmation__row">
            <span>Order number</span>
            <strong>{order.id}</strong>
          </div>
          <div className="confirmation__row">
            <span>Delivery</span>
            <span>{order.delivery}</span>
          </div>
          <div className="confirmation__row">
            <span>Total paid</span>
            <span>{money(order.total)}</span>
          </div>
          {order.address && (
            <div className="confirmation__row">
              <span>Shipping to</span>
              <span>
                {order.address.line1}, {order.address.city} {order.address.postal}
              </span>
            </div>
          )}
        </div>

        <div className="confirmation__actions">
          <Link to="/account" className="btn">
            View order history
          </Link>
          <Link to="/shop" className="btn btn--ghost">
            Continue shopping
          </Link>
        </div>
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div className="container">
        <div className="empty" style={{ margin: 'clamp(40px, 6vw, 80px) 0' }}>
          <h1>Your bag is empty</h1>
          <p>Add a piece to your bag before checking out.</p>
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
            <Link to="/cart">Bag</Link>
            <span>/</span>
            <span style={{ color: 'var(--charcoal)' }}>Checkout</span>
          </nav>
          <h1>Checkout</h1>
        </div>
      </div>

      <div className="container checkout-layout">
        <div>
          <div className="steps" aria-label="Checkout progress">
            <span className={step === 1 ? 'is-active' : 'is-done'}>01 Information</span>
            <span className={step === 2 ? 'is-active' : step > 2 ? 'is-done' : ''}>02 Delivery</span>
            <span className={step === 3 ? 'is-active' : ''}>03 Payment</span>
          </div>

          {step === 1 && (
            <div className="checkout-block">
              <h2>Contact & shipping address</h2>
              <div className="form-grid">
                <div className="field field--wide">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    className="input"
                    type="email"
                    value={form.email}
                    onChange={(event) => set('email', event.target.value)}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <span className="form-message form-message--error">{errors.email}</span>}
                </div>
                <div className="field">
                  <label htmlFor="firstName">First name</label>
                  <input
                    id="firstName"
                    className="input"
                    value={form.firstName}
                    onChange={(event) => set('firstName', event.target.value)}
                    aria-invalid={Boolean(errors.firstName)}
                  />
                  {errors.firstName && <span className="form-message form-message--error">{errors.firstName}</span>}
                </div>
                <div className="field">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    id="lastName"
                    className="input"
                    value={form.lastName}
                    onChange={(event) => set('lastName', event.target.value)}
                    aria-invalid={Boolean(errors.lastName)}
                  />
                  {errors.lastName && <span className="form-message form-message--error">{errors.lastName}</span>}
                </div>
                <div className="field field--wide">
                  <label htmlFor="address">Address</label>
                  <input
                    id="address"
                    className="input"
                    value={form.address}
                    onChange={(event) => set('address', event.target.value)}
                    placeholder="Street and number"
                    aria-invalid={Boolean(errors.address)}
                  />
                  {errors.address && <span className="form-message form-message--error">{errors.address}</span>}
                </div>
                <div className="field field--wide">
                  <label htmlFor="apartment">Apartment, suite (optional)</label>
                  <input
                    id="apartment"
                    className="input"
                    value={form.apartment}
                    onChange={(event) => set('apartment', event.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    className="input"
                    value={form.city}
                    onChange={(event) => set('city', event.target.value)}
                    aria-invalid={Boolean(errors.city)}
                  />
                  {errors.city && <span className="form-message form-message--error">{errors.city}</span>}
                </div>
                <div className="field">
                  <label htmlFor="postal">Postal code</label>
                  <input
                    id="postal"
                    className="input"
                    value={form.postal}
                    onChange={(event) => set('postal', event.target.value)}
                    aria-invalid={Boolean(errors.postal)}
                  />
                  {errors.postal && <span className="form-message form-message--error">{errors.postal}</span>}
                </div>
                <div className="field">
                  <label htmlFor="country">Country</label>
                  <select
                    id="country"
                    className="input"
                    value={form.country}
                    onChange={(event) => set('country', event.target.value)}
                  >
                    {['United Kingdom', 'France', 'Germany', 'Italy', 'United States', 'Australia'].map(
                      (country) => (
                        <option key={country}>{country}</option>
                      ),
                    )}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    className="input"
                    value={form.phone}
                    onChange={(event) => set('phone', event.target.value)}
                    aria-invalid={Boolean(errors.phone)}
                  />
                  {errors.phone && <span className="form-message form-message--error">{errors.phone}</span>}
                </div>
              </div>

              <div className="checkout-nav">
                <button type="button" className="link-back" onClick={() => navigate('/cart')}>
                  <ChevronLeftIcon size={14} /> Back to bag
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    if (validateInformation()) setStep(2)
                  }}
                >
                  Continue to delivery
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="checkout-block">
              <h2>Delivery method</h2>
              <button
                type="button"
                className={`option-card${delivery === 'standard' ? ' is-selected' : ''}`}
                onClick={() => setDelivery('standard')}
              >
                <input type="radio" readOnly checked={delivery === 'standard'} />
                <span>
                  <span className="option-card__title">Standard delivery</span>
                  <span className="option-card__meta">2–4 business days, tracked</span>
                </span>
                <span className="option-card__price">{shipping === 0 ? 'Free' : money(shipping)}</span>
              </button>
              <button
                type="button"
                className={`option-card${delivery === 'express' ? ' is-selected' : ''}`}
                onClick={() => setDelivery('express')}
              >
                <input type="radio" readOnly checked={delivery === 'express'} />
                <span>
                  <span className="option-card__title">Express delivery</span>
                  <span className="option-card__meta">1–2 business days, signature required</span>
                </span>
                <span className="option-card__price">{money(15)}</span>
              </button>

              <div className="checkout-nav">
                <button type="button" className="link-back" onClick={() => setStep(1)}>
                  <ChevronLeftIcon size={14} /> Back
                </button>
                <button type="button" className="btn" onClick={() => setStep(3)}>
                  Continue to payment
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="checkout-block">
              <h2>Payment</h2>
              <div className="form-grid">
                <div className="field field--wide">
                  <label htmlFor="card">Card number</label>
                  <input
                    id="card"
                    className="input"
                    inputMode="numeric"
                    placeholder="4242 4242 4242 4242"
                    value={form.card}
                    onChange={(event) => set('card', event.target.value)}
                    aria-invalid={Boolean(errors.card)}
                  />
                  {errors.card && <span className="form-message form-message--error">{errors.card}</span>}
                </div>
                <div className="field">
                  <label htmlFor="expiry">Expiry</label>
                  <input
                    id="expiry"
                    className="input"
                    placeholder="MM/YY"
                    value={form.expiry}
                    onChange={(event) => set('expiry', event.target.value)}
                    aria-invalid={Boolean(errors.expiry)}
                  />
                  {errors.expiry && <span className="form-message form-message--error">{errors.expiry}</span>}
                </div>
                <div className="field">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    id="cvc"
                    className="input"
                    placeholder="123"
                    value={form.cvc}
                    onChange={(event) => set('cvc', event.target.value)}
                    aria-invalid={Boolean(errors.cvc)}
                  />
                  {errors.cvc && <span className="form-message form-message--error">{errors.cvc}</span>}
                </div>
              </div>

              <p className="perk" style={{ marginTop: 16 }}>
                <ShieldIcon size={17} /> This is a demonstration checkout — no card is charged.
              </p>

              <div className="checkout-nav">
                <button type="button" className="link-back" onClick={() => setStep(2)}>
                  <ChevronLeftIcon size={14} /> Back
                </button>
                <button type="button" className="btn" onClick={place}>
                  Place order · {money(total)}
                </button>
              </div>
            </div>
          )}
        </div>

        <aside className="summary-box" aria-label="Order summary">
          <h2>Order summary</h2>
          <div className="order-mini">
            {cart.map((line) => {
              const product = productById(line.productId)
              if (!product) return null
              return (
                <div className="order-mini__line" key={line.key}>
                  <img src={product.images[0]} alt="" loading="lazy" />
                  <span>
                    {product.name}
                    <span className="order-mini__meta">
                      {line.color} · {line.size} · Qty {line.qty}
                    </span>
                  </span>
                  <span>{money(product.price * line.qty)}</span>
                </div>
              )
            })}
          </div>

          <div className="summary-row" style={{ marginTop: 16 }}>
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
            <span>{shipping + expressFee === 0 ? 'Free' : money(shipping + expressFee)}</span>
          </div>
          <div className="summary-row summary-row--total">
            <span>Total</span>
            <span>{money(total)}</span>
          </div>
        </aside>
      </div>
    </>
  )
}
