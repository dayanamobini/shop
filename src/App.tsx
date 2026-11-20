import { useEffect } from 'react'
import { useHash, usePath } from './lib/hooks'
import { StoreProvider } from './store/StoreContext'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { MiniCart } from './components/layout/MiniCart'
import { MobileMenu } from './components/layout/MobileMenu'
import { SearchOverlay } from './components/layout/SearchOverlay'
import { QuickView } from './components/ui/QuickView'
import { Toasts } from './components/ui/Toasts'
import { HomePage } from './pages/HomePage'
import { ShopPage } from './pages/ShopPage'
import { ProductPage } from './pages/ProductPage'
import { CollectionsPage } from './pages/CollectionsPage'
import { CollectionPage } from './pages/CollectionPage'
import { InspirationPage } from './pages/InspirationPage'
import { AboutPage } from './pages/AboutPage'
import { CartPage } from './pages/CartPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { WishlistPage } from './pages/WishlistPage'
import { NotFoundPage } from './pages/NotFoundPage'

function ScrollManager() {
  const path = usePath()
  const hash = useHash()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0 })
  }, [path, hash])

  return null
}

function Pages() {
  const path = usePath()

  if (path === '/') return <HomePage />
  if (path === '/shop') return <ShopPage />
  if (path === '/collections') return <CollectionsPage />
  if (path.startsWith('/collections/')) return <CollectionPage id={path.split('/')[2] ?? ''} />
  if (path.startsWith('/product/')) return <ProductPage slug={path.split('/')[2] ?? ''} />
  if (path === '/inspiration') return <InspirationPage />
  if (path === '/about') return <AboutPage />
  if (path === '/cart') return <CartPage />
  if (path === '/checkout') return <CheckoutPage />
  if (path === '/wishlist') return <WishlistPage />
  return <NotFoundPage />
}

export default function App() {
  return (
    <StoreProvider>
      <ScrollManager />
      <a className="skip-link" href="#main">
        رفتن به محتوای اصلی
      </a>
      <Header />
      <main id="main">
        <Pages />
      </main>
      <Footer />
      <MiniCart />
      <SearchOverlay />
      <MobileMenu />
      <QuickView />
      <Toasts />
    </StoreProvider>
  )
}
