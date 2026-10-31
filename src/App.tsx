import { useEffect } from 'react'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import Header from './components/Header'
import Newsletter from './components/Newsletter'
import QuickView from './components/QuickView'
import SearchOverlay from './components/SearchOverlay'
import { CheckIcon } from './components/Icons'
import { RouterProvider, useRouter } from './lib/router'
import { ShopProvider, useShop } from './store/shop'
import Account from './pages/Account'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Info from './pages/Info'
import ProductDetail from './pages/ProductDetail'
import Search from './pages/Search'
import Shop from './pages/Shop'
import Wishlist from './pages/Wishlist'

const TITLES: Record<string, string> = {
  '': 'DEVA COLLECTION — Timeless fashion for the modern woman',
  shop: 'Shop all pieces — DEVA COLLECTION',
  product: 'Piece detail — DEVA COLLECTION',
  cart: 'Shopping bag — DEVA COLLECTION',
  checkout: 'Checkout — DEVA COLLECTION',
  account: 'Account — DEVA COLLECTION',
  wishlist: 'Wishlist — DEVA COLLECTION',
  search: 'Search — DEVA COLLECTION',
}

function NotFound() {
  return (
    <div className="container">
      <div className="empty" style={{ margin: 'clamp(40px, 6vw, 80px) 0' }}>
        <h1>Page not found</h1>
        <p>The page you were looking for does not exist.</p>
        <a href="/" className="btn">
          Back to home
        </a>
      </div>
    </div>
  )
}

function Page() {
  const { path, search } = useRouter()
  const segments = path.split('/').filter(Boolean)
  const [root, param] = segments

  useEffect(() => {
    const base = TITLES[root ?? ''] ?? 'DEVA COLLECTION'
    document.title = path === '/search' && search ? 'Search — DEVA COLLECTION' : base
  }, [path, root, search])

  if (!root) return <Home />
  switch (root) {
    case 'shop':
      return <Shop category={param} />
    case 'product':
      return <ProductDetail key={param ?? ''} slug={param ?? ''} />
    case 'cart':
      return <Cart />
    case 'checkout':
      return <Checkout />
    case 'account':
      return <Account />
    case 'wishlist':
      return <Wishlist />
    case 'search':
      return <Search />
    case 'pages':
      return <Info slug={param ?? ''} />
    default:
      return <NotFound />
  }
}

function Shell() {
  const { cartOpen, searchOpen, quickViewId, toasts } = useShop()

  const locked = cartOpen || searchOpen || Boolean(quickViewId)

  useEffect(() => {
    document.body.classList.toggle('is-locked', locked)
    return () => document.body.classList.remove('is-locked')
  }, [locked])

  return (
    <>
      <a className="sr-skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Page />
      </main>
      <Newsletter />
      <Footer />

      <SearchOverlay />
      <CartDrawer />
      <QuickView />

      <div className="toasts" role="status" aria-live="polite">
        {toasts.map((toast) => (
          <div className={`toast${toast.tone === 'error' ? ' toast--error' : ''}`} key={toast.id}>
            {toast.tone === 'success' && <CheckIcon size={14} />}
            {toast.message}
          </div>
        ))}
      </div>
    </>
  )
}

export default function App() {
  return (
    <RouterProvider>
      <ShopProvider>
        <Shell />
      </ShopProvider>
    </RouterProvider>
  )
}
