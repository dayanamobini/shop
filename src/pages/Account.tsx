import { useState } from 'react'
import { Link } from '../lib/router'
import { money } from '../lib/format'
import { useShop, type Address } from '../store/shop'
import { CheckIcon, TrashIcon } from '../components/Icons'

type Tab = 'profile' | 'orders' | 'addresses' | 'wishlist'

const emptyAddress = {
  label: 'Home',
  name: '',
  line1: '',
  city: '',
  postal: '',
  country: 'United Kingdom',
  phone: '',
}

export default function Account() {
  const { user, login, register, logout, orders, addresses, addAddress, removeAddress, wishlist } = useShop()
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [tab, setTab] = useState<Tab>('profile')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [newAddress, setNewAddress] = useState(emptyAddress)
  const [showAddressForm, setShowAddressForm] = useState(false)

  const submitAuth = (event: React.FormEvent) => {
    event.preventDefault()
    const result = mode === 'login' ? login(email, password) : register(name, email, password)
    if (!result.ok) {
      setError(result.error ?? 'Something went wrong.')
      return
    }
    setError('')
    setEmail('')
    setPassword('')
    setName('')
  }

  const submitAddress = (event: React.FormEvent) => {
    event.preventDefault()
    if (!newAddress.name.trim() || !newAddress.line1.trim() || !newAddress.city.trim()) return
    addAddress(newAddress as Omit<Address, 'id'>)
    setNewAddress(emptyAddress)
    setShowAddressForm(false)
  }

  if (!user) {
    return (
      <>
        <div className="page-head">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span style={{ color: 'var(--charcoal)' }}>Account</span>
            </nav>
            <h1>{mode === 'login' ? 'Sign in' : 'Create an account'}</h1>
            <p>Track orders, save addresses and keep your wishlist in one place.</p>
          </div>
        </div>

        <div className="container account-layout">
          <div className="account-nav" aria-hidden="true">
            <button type="button" className="is-active">
              {mode === 'login' ? 'Sign in' : 'Register'}
            </button>
          </div>

          <div className="account-panel">
            <form className="auth-card" onSubmit={submitAuth} noValidate>
              {mode === 'register' && (
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input
                    id="name"
                    className="input"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    autoComplete="name"
                  />
                </div>
              )}
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="input"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </div>
              <div className="field">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  className="input"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                  placeholder="At least 6 characters"
                />
              </div>

              {error && (
                <p className="form-message form-message--error" role="alert">
                  {error}
                </p>
              )}

              <button type="submit" className="btn btn--block">
                {mode === 'login' ? 'Sign in' : 'Create account'}
              </button>

              <p className="auth-switch">
                {mode === 'login' ? 'New to DEVA? ' : 'Already have an account? '}
                <button
                  type="button"
                  onClick={() => {
                    setMode(mode === 'login' ? 'register' : 'login')
                    setError('')
                  }}
                >
                  {mode === 'login' ? 'Create an account' : 'Sign in'}
                </button>
              </p>
            </form>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="page-head">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--charcoal)' }}>Account</span>
          </nav>
          <h1>Hello, {user.name.split(' ')[0]}</h1>
          <p>Manage your details, review orders and revisit saved pieces.</p>
        </div>
      </div>

      <div className="container account-layout">
        <nav className="account-nav" aria-label="Account sections">
          {(['profile', 'orders', 'addresses', 'wishlist'] as Tab[]).map((item) => (
            <button
              key={item}
              type="button"
              className={tab === item ? 'is-active' : ''}
              onClick={() => setTab(item)}
              aria-current={tab === item}
            >
              {item === 'profile' ? 'Profile' : item === 'orders' ? 'Order history' : item === 'addresses' ? 'Saved addresses' : 'Wishlist'}
            </button>
          ))}
          <button type="button" onClick={logout}>
            Sign out
          </button>
        </nav>

        <div className="account-panel">
          {tab === 'profile' && (
            <>
              <h2>Profile</h2>
              <p>Your details as we have them on file.</p>
              <dl className="detail-grid">
                <div>
                  <dt>Name</dt>
                  <dd>{user.name}</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>{user.email}</dd>
                </div>
                <div>
                  <dt>Orders placed</dt>
                  <dd>{orders.length}</dd>
                </div>
                <div>
                  <dt>Saved pieces</dt>
                  <dd>{wishlist.length}</dd>
                </div>
              </dl>
              <p style={{ fontSize: 13, color: 'var(--muted)' }}>
                Need to update something? Write to{' '}
                <Link to="/pages/contact" className="text-link" style={{ fontSize: 12 }}>
                  client care
                </Link>{' '}
                and we will make the change for you.
              </p>
            </>
          )}

          {tab === 'orders' && (
            <>
              <h2>Order history</h2>
              <p>Every order placed with this browser is listed here.</p>
              {orders.length === 0 ? (
                <div className="empty">
                  <h3>No orders yet</h3>
                  <p>When you place an order it will appear here with tracking details.</p>
                  <Link to="/shop" className="btn">
                    Start shopping
                  </Link>
                </div>
              ) : (
                orders.map((order) => (
                  <article className="order-card" key={order.id}>
                    <div className="order-card__top">
                      <span>
                        <strong>{order.id}</strong> · {order.date}
                      </span>
                      <span className="status-pill">{order.status}</span>
                      <span>{money(order.total)}</span>
                    </div>
                    <div className="order-card__lines">
                      {order.lines.map((line) => (
                        <div className="order-card__line" key={`${order.id}-${line.productId}-${line.size}-${line.color}`}>
                          <img src={line.image} alt="" loading="lazy" />
                          <span>
                            {line.name}
                            <span style={{ display: 'block', fontSize: 11, color: 'var(--muted)' }}>
                              {line.color} · {line.size} · Qty {line.qty}
                            </span>
                          </span>
                          <span>{money(line.price * line.qty)}</span>
                        </div>
                      ))}
                    </div>
                    <p style={{ marginTop: 12, fontSize: 11.5, color: 'var(--muted)' }}>{order.delivery}</p>
                  </article>
                ))
              )}
            </>
          )}

          {tab === 'addresses' && (
            <>
              <h2>Saved addresses</h2>
              <p>Addresses are stored on this device for faster checkout.</p>
              {addresses.map((address) => (
                <div className="address-card" key={address.id}>
                  <div className="address-card__top">
                    <span className="address-card__label">{address.label}</span>
                    <button type="button" onClick={() => removeAddress(address.id)} aria-label={`Delete ${address.label} address`}>
                      <TrashIcon size={13} /> Delete
                    </button>
                  </div>
                  <strong>{address.name}</strong>
                  <br />
                  {address.line1}
                  <br />
                  {address.city} {address.postal}
                  <br />
                  {address.country}
                  <br />
                  {address.phone}
                </div>
              ))}

              {showAddressForm ? (
                <form onSubmit={submitAddress} style={{ marginTop: 18, maxWidth: 520 }}>
                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="label">Label</label>
                      <input
                        id="label"
                        className="input"
                        value={newAddress.label}
                        onChange={(event) => setNewAddress({ ...newAddress, label: event.target.value })}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="name">Full name</label>
                      <input
                        id="name"
                        className="input"
                        value={newAddress.name}
                        onChange={(event) => setNewAddress({ ...newAddress, name: event.target.value })}
                      />
                    </div>
                    <div className="field field--wide">
                      <label htmlFor="line1">Address</label>
                      <input
                        id="line1"
                        className="input"
                        value={newAddress.line1}
                        onChange={(event) => setNewAddress({ ...newAddress, line1: event.target.value })}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="city">City</label>
                      <input
                        id="city"
                        className="input"
                        value={newAddress.city}
                        onChange={(event) => setNewAddress({ ...newAddress, city: event.target.value })}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="postal">Postal code</label>
                      <input
                        id="postal"
                        className="input"
                        value={newAddress.postal}
                        onChange={(event) => setNewAddress({ ...newAddress, postal: event.target.value })}
                      />
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
                    <button type="submit" className="btn btn--small">
                      <CheckIcon size={14} /> Save address
                    </button>
                    <button
                      type="button"
                      className="btn btn--ghost btn--small"
                      onClick={() => setShowAddressForm(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <button
                  type="button"
                  className="btn btn--ghost"
                  style={{ marginTop: 18 }}
                  onClick={() => setShowAddressForm(true)}
                >
                  Add a new address
                </button>
              )}
            </>
          )}

          {tab === 'wishlist' && (
            <>
              <h2>Wishlist</h2>
              <p>You have {wishlist.length} saved {wishlist.length === 1 ? 'piece' : 'pieces'}.</p>
              <Link to="/wishlist" className="btn">
                View wishlist
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  )
}
