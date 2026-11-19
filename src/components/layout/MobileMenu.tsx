import { COLLECTIONS, NAV_LINKS, SHOP_CATEGORIES } from '../../data/content'
import { navigate, useEscape } from '../../lib/hooks'
import { useBodyLock } from '../../lib/hooks'
import { useStore } from '../../store/StoreContext'
import { Icon } from '../ui/Icon'

export function MobileMenu() {
  const { menuOpen, setMenuOpen, setSearchOpen, setCartOpen, wishlist } = useStore()
  useBodyLock(menuOpen)
  useEscape(menuOpen, () => setMenuOpen(false))

  if (!menuOpen) return null

  const go = (href: string) => {
    setMenuOpen(false)
    navigate(href)
  }

  return (
    <div className="overlay" role="presentation" onMouseDown={() => setMenuOpen(false)}>
      <div
        className="menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="menu-panel__head">
          <span className="logo logo--dark">
            Dream<span>Décor</span>
          </span>
          <button
            type="button"
            className="icon-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <Icon name="close" />
          </button>
        </div>

        <nav aria-label="Mobile">
          <ul className="menu-panel__links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault()
                    go(link.href)
                  }}
                >
                  {link.label}
                  <Icon name="arrow-up-right" size={16} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="menu-panel__grid">
          <div>
            <p className="eyebrow">Shop by category</p>
            <ul className="menu-panel__small">
              {SHOP_CATEGORIES.map((category) => (
                <li key={category.name}>
                  <a
                    href={`/shop?category=${category.target}`}
                    onClick={(event) => {
                      event.preventDefault()
                      go(`/shop?category=${category.target}`)
                    }}
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Collections</p>
            <ul className="menu-panel__small">
              {COLLECTIONS.map((collection) => (
                <li key={collection.id}>
                  <a
                    href={`/collections/${collection.id}`}
                    onClick={(event) => {
                      event.preventDefault()
                      go(`/collections/${collection.id}`)
                    }}
                  >
                    {collection.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="menu-panel__foot">
          <button
            type="button"
            className="btn btn--outline btn--sm"
            onClick={() => {
              setMenuOpen(false)
              setSearchOpen(true)
            }}
          >
            <Icon name="search" size={15} />
            <span>Search</span>
          </button>
          <button
            type="button"
            className="btn btn--outline btn--sm"
            onClick={() => {
              setMenuOpen(false)
              setCartOpen(true)
            }}
          >
            <Icon name="bag" size={15} />
            <span>Cart</span>
          </button>
          <button
            type="button"
            className="btn btn--outline btn--sm"
            onClick={() => go('/wishlist')}
          >
            <Icon name="heart" size={15} />
            <span>Wishlist{wishlist.length ? ` (${wishlist.length})` : ''}</span>
          </button>
        </div>

        <p className="menu-panel__note">
          DreamDécor · Objects for beautiful living
          <br />
          hello@dreamdecor.studio
        </p>
      </div>
    </div>
  )
}
