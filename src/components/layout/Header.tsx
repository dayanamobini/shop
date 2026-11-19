import { useEffect, useRef, useState } from 'react'
import { NAV_LINKS } from '../../data/content'
import { navigate, useClickOutside, useEscape, usePath, useScrolled } from '../../lib/hooks'
import { useStore } from '../../store/StoreContext'
import { Icon } from '../ui/Icon'
import { MegaMenu } from './MegaMenu'

export function Header() {
  const path = usePath()
  const scrolled = useScrolled(20)
  const { wishlist, cartCount, setCartOpen, setSearchOpen, setMenuOpen } = useStore()
  const [megaOpen, setMegaOpen] = useState(false)
  const closeTimer = useRef<number | undefined>(undefined)
  const navRef = useClickOutside<HTMLDivElement>(megaOpen, () => setMegaOpen(false))

  useEscape(megaOpen, () => setMegaOpen(false))

  useEffect(() => {
    setMegaOpen(false)
  }, [path])

  const openMega = () => {
    window.clearTimeout(closeTimer.current)
    setMegaOpen(true)
  }

  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setMegaOpen(false), 180)
  }

  return (
    <>
      <div className="announce">
        <div className="announce__inner">
          <span>Complimentary shipping on orders over $99</span>
          <span className="announce__dot" aria-hidden="true" />
          <span className="announce__second">New: The Golden Hour Collection</span>
        </div>
      </div>

      <header className={`site-header${scrolled ? ' is-stuck' : ''}`}>
        <div className="site-header__inner container">
          <a
            className="logo"
            href="/"
            onClick={(event) => {
              event.preventDefault()
              navigate('/')
            }}
            aria-label="DreamDécor home"
          >
            Dream<span>Décor</span>
          </a>

          <nav className="nav" aria-label="Primary" ref={navRef}>
            <ul className="nav__list">
              {NAV_LINKS.map((link) =>
                link.label === 'Shop' ? (
                  <li
                    key={link.label}
                    className="nav__item nav__item--mega"
                    onMouseEnter={openMega}
                    onMouseLeave={scheduleClose}
                  >
                    <a
                      href="/shop"
                      className={`nav__link${path.startsWith('/shop') ? ' is-active' : ''}`}
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                      onClick={(event) => {
                        event.preventDefault()
                        navigate('/shop')
                      }}
                      onFocus={openMega}
                    >
                      Shop
                      <Icon name="chevron-down" size={13} />
                    </a>
                  </li>
                ) : (
                  <li key={link.label} className="nav__item">
                    <a
                      href={link.href}
                      className={`nav__link${path === link.href ? ' is-active' : ''}`}
                      onClick={(event) => {
                        event.preventDefault()
                        navigate(link.href)
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
            {megaOpen && <MegaMenu onNavigate={() => setMegaOpen(false)} />}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="icon-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Search products"
            >
              <Icon name="search" />
            </button>
            <a
              href="/wishlist"
              className="icon-btn header-actions__wish"
              aria-label={`Wishlist${wishlist.length ? `, ${wishlist.length} saved` : ''}`}
              onClick={(event) => {
                event.preventDefault()
                navigate('/wishlist')
              }}
            >
              <Icon name="heart" />
              {wishlist.length > 0 && <span className="icon-badge">{wishlist.length}</span>}
            </a>
            <button
              type="button"
              className="icon-btn header-actions__cart"
              onClick={() => setCartOpen(true)}
              aria-label={`Open cart${cartCount ? `, ${cartCount} items` : ''}`}
            >
              <Icon name="bag" />
              {cartCount > 0 && <span className="icon-badge icon-badge--wine">{cartCount}</span>}
            </button>
            <button
              type="button"
              className="icon-btn header-actions__menu"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}


