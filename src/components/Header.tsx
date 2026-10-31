import { useEffect, useState } from 'react'
import { Link, useRouter } from '../lib/router'
import { collections, categories } from '../data/catalog'
import { useShop } from '../store/shop'
import {
  BagIcon,
  ChevronDownIcon,
  CloseIcon,
  HeartIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from './Icons'

const megaColumns = [
  {
    title: 'Clothing',
    links: [
      { label: 'Dresses', to: '/shop/dresses' },
      { label: 'Tops', to: '/shop/tops' },
      { label: 'Bottoms', to: '/shop/bottoms' },
      { label: 'Blazers', to: '/shop/blazers' },
    ],
  },
  {
    title: 'Accessories',
    links: [
      { label: 'Bags', to: '/shop/bags' },
      { label: 'Shoes', to: '/shop/shoes' },
      { label: 'Fine jewellery', to: '/shop/accessories' },
      { label: 'View everything', to: '/shop' },
    ],
  },
  {
    title: 'Edits',
    links: [
      { label: 'New arrivals', to: '/shop' },
      { label: 'Best sellers', to: '/shop?sort=bestselling' },
      { label: 'The atelier edit', to: '/shop/blazers' },
      { label: 'Sale', to: '/shop?sale=1' },
    ],
  },
]

export default function Header() {
  const { path, navigate } = useRouter()
  const { cartCount, wishlist, openCart, openSearch } = useShop()
  const [stuck, setStuck] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mega, setMega] = useState<'shop' | 'collections' | null>(null)
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenGroup(null)
    setMega(null)
  }, [path])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMega(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isActive = (to: string) => {
    const base = to.split('?')[0]
    if (base === '/shop') return path === '/shop'
    return path === base || path.startsWith(`${base}/`)
  }

  return (
    <>
      <div className="announce">
        <div className="container announce__inner">
          <div className="announce__group">
            <span>Free shipping on orders over $99</span>
            <span className="announce__sep" aria-hidden="true" />
            <span>Easy returns within 30 days</span>
          </div>
          <div className="announce__group announce__group--right">
            <Link to="/account">Track order</Link>
            <span className="announce__sep" aria-hidden="true" />
            <Link to="/account">Help centre</Link>
          </div>
        </div>
      </div>

      <header className={`site-header${stuck ? ' is-stuck' : ''}`}>
        <div className="container header__inner">
          <button
            type="button"
            className="icon-btn header__menu-btn"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon size={20} />
          </button>

          <Link to="/" className="logo logo--center" aria-label="DEVA Collection home">
            DEVA COLLECTION
          </Link>

          <nav aria-label="Main navigation">
            <ul className="nav">
              <li className={`nav__item${path === '/shop' ? ' nav__item--active' : ''}`}>
                <Link to="/shop" className="nav__link">
                  New Arrivals
                </Link>
              </li>

              <li
                className={`nav__item nav__item--has-mega${mega === 'shop' ? ' nav__item--open' : ''}`}
                onMouseEnter={() => setMega('shop')}
                onMouseLeave={() => setMega(null)}
              >
                <button
                  type="button"
                  className="nav__link"
                  aria-haspopup="true"
                  aria-expanded={mega === 'shop'}
                  onClick={() => setMega(mega === 'shop' ? null : 'shop')}
                >
                  Shop
                  <ChevronDownIcon size={13} />
                </button>
                <div className="mega">
                  <div className="mega__inner">
                    <div className="mega__cols">
                      {megaColumns.map((column) => (
                        <div className="mega__col" key={column.title}>
                          <h4>{column.title}</h4>
                          {column.links.map((link) => (
                            <Link key={link.label} to={link.to}>
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div className="mega__media">
                      {collections.map((collection) => (
                        <Link className="mega__card" key={collection.label} to={collection.to}>
                          <img src={collection.image} alt="" loading="lazy" />
                          <span>{collection.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              <li
                className={`nav__item nav__item--has-mega${mega === 'collections' ? ' nav__item--open' : ''}`}
                onMouseEnter={() => setMega('collections')}
                onMouseLeave={() => setMega(null)}
              >
                <button
                  type="button"
                  className="nav__link"
                  aria-haspopup="true"
                  aria-expanded={mega === 'collections'}
                  onClick={() => setMega(mega === 'collections' ? null : 'collections')}
                >
                  Collections
                  <ChevronDownIcon size={13} />
                </button>
                <div className="mega">
                  <div className="mega__inner">
                    <div className="mega__cols">
                      <div className="mega__col">
                        <h4>Seasonal</h4>
                        <Link to="/shop/tops">Quiet neutrals</Link>
                        <Link to="/shop/blazers">The atelier edit</Link>
                        <Link to="/shop/dresses">Evening</Link>
                        <Link to="/shop/bottoms">Tailoring</Link>
                      </div>
                      <div className="mega__col">
                        <h4>By category</h4>
                        {categories.slice(0, 4).map((category) => (
                          <Link key={category.id} to={`/shop/${category.id}`}>
                            {category.label}
                          </Link>
                        ))}
                      </div>
                      <div className="mega__col">
                        <h4>Discover</h4>
                        <Link to="/shop?sort=bestselling">Best sellers</Link>
                        <Link to="/shop?sale=1">Sale</Link>
                        <Link to="/shop">New arrivals</Link>
                        <Link to="/search">Search</Link>
                      </div>
                    </div>
                    <div className="mega__media">
                      {collections.map((collection) => (
                        <Link className="mega__card" key={collection.label} to={collection.to}>
                          <img src={collection.image} alt="" loading="lazy" />
                          <span>{collection.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              {[
                { label: 'Dresses', to: '/shop/dresses' },
                { label: 'Tops', to: '/shop/tops' },
                { label: 'Bottoms', to: '/shop/bottoms' },
              ].map((link) => (
                <li
                  className={`nav__item${isActive(link.to) ? ' nav__item--active' : ''}`}
                  key={link.to}
                >
                  <Link to={link.to} className="nav__link">
                    {link.label}
                  </Link>
                </li>
              ))}

              <li className="nav__item">
                <Link to="/shop?sale=1" className="nav__link nav__link--sale">
                  Sale
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header__actions">
            <button type="button" className="icon-btn" aria-label="Search" onClick={openSearch}>
              <SearchIcon size={19} />
            </button>
            <Link to="/account" className="icon-btn" aria-label="Account">
              <UserIcon size={19} />
            </Link>
            <Link to="/wishlist" className="icon-btn" aria-label={`Wishlist, ${wishlist.length} items`}>
              <HeartIcon size={19} />
              {wishlist.length > 0 && <span className="icon-btn__badge">{wishlist.length}</span>}
            </Link>
            <button
              type="button"
              className="icon-btn"
              aria-label={`Shopping bag, ${cartCount} items`}
              onClick={openCart}
            >
              <BagIcon size={19} />
              {cartCount > 0 && <span className="icon-btn__badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`overlay${mobileOpen ? ' is-open' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`mobile-drawer${mobileOpen ? ' is-open' : ''}`}
        aria-hidden={!mobileOpen}
        aria-label="Mobile navigation"
      >
        <div className="mobile-drawer__top">
          <span className="logo">DEVA COLLECTION</span>
          <button
            type="button"
            className="icon-btn"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <CloseIcon size={20} />
          </button>
        </div>

        <ul className="mobile-drawer__nav">
          <li>
            <Link to="/shop">New Arrivals</Link>
          </li>
          <li>
            <button
              type="button"
              className="mobile-drawer__toggle"
              aria-expanded={openGroup === 'shop'}
              onClick={() => setOpenGroup(openGroup === 'shop' ? null : 'shop')}
            >
              Shop
              <ChevronDownIcon
                size={16}
                style={{ transform: openGroup === 'shop' ? 'rotate(180deg)' : undefined }}
              />
            </button>
            {openGroup === 'shop' && (
              <div className="mobile-drawer__sub">
                {categories.map((category) => (
                  <Link key={category.id} to={`/shop/${category.id}`}>
                    {category.label}
                  </Link>
                ))}
                <Link to="/shop">View everything</Link>
              </div>
            )}
          </li>
          <li>
            <button
              type="button"
              className="mobile-drawer__toggle"
              aria-expanded={openGroup === 'collections'}
              onClick={() => setOpenGroup(openGroup === 'collections' ? null : 'collections')}
            >
              Collections
              <ChevronDownIcon
                size={16}
                style={{ transform: openGroup === 'collections' ? 'rotate(180deg)' : undefined }}
              />
            </button>
            {openGroup === 'collections' && (
              <div className="mobile-drawer__sub">
                <Link to="/shop?sort=bestselling">Best sellers</Link>
                <Link to="/shop/blazers">The atelier edit</Link>
                <Link to="/shop/tops">Quiet neutrals</Link>
                <Link to="/shop?sale=1">Sale</Link>
              </div>
            )}
          </li>
          <li>
            <Link to="/shop/dresses">Dresses</Link>
          </li>
          <li>
            <Link to="/shop/tops">Tops</Link>
          </li>
          <li>
            <Link to="/shop/bottoms">Bottoms</Link>
          </li>
          <li>
            <Link to="/shop?sale=1">Sale</Link>
          </li>
        </ul>

        <div className="mobile-drawer__foot">
          <Link to="/account">My account</Link>
          <Link to="/wishlist">Wishlist ({wishlist.length})</Link>
          <button
            type="button"
            className="mobile-drawer__toggle"
            style={{ borderBottom: 0, fontFamily: 'var(--sans)', fontSize: 12, letterSpacing: '0.1em' }}
            onClick={() => {
              setMobileOpen(false)
              navigate('/cart')
            }}
          >
            Shopping bag ({cartCount})
          </button>
        </div>
      </aside>
    </>
  )
}
