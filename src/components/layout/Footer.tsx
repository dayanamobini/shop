import { useState, type MouseEvent } from 'react'
import { COLLECTIONS } from '../../data/content'
import { navigate } from '../../lib/hooks'
import { useStore } from '../../store/StoreContext'
import { Icon, type IconName } from '../ui/Icon'

const shopLinks = [
  { label: 'All Products', href: '/shop' },
  { label: 'New Arrivals', href: '/shop?sort=newest' },
  { label: 'Best Sellers', href: '/shop?sort=rating' },
  { label: 'Sale', href: '/shop?sale=1' },
]

const aboutLinks = [
  { label: 'Our Story', href: '/about' },
  { label: 'Sustainability', href: '/about#values' },
  { label: 'Artisans', href: '/about#artisans' },
  { label: 'Press', href: '/inspiration' },
]

const helpLinks = [
  { label: 'FAQs', href: '/about#faq' },
  { label: 'Shipping', href: '/about#shipping' },
  { label: 'Returns', href: '/about#shipping' },
  { label: 'Contact', href: '/about#contact' },
]

const socials: { name: IconName; label: string; href: string }[] = [
  { name: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
  { name: 'pinterest', label: 'Pinterest', href: 'https://pinterest.com' },
  { name: 'facebook', label: 'Facebook', href: 'https://facebook.com' },
  { name: 'youtube', label: 'YouTube', href: 'https://youtube.com' },
]

export function Footer() {
  const { notify } = useStore()
  const [email, setEmail] = useState('')

  const go = (href: string) => (event: MouseEvent) => {
    if (href.startsWith('http')) return
    event.preventDefault()
    navigate(href)
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="logo logo--light">
              Dream<span>Décor</span>
            </span>
            <p className="footer__desc">
              Curated objects for extraordinary living. Handmade, quietly imperfect, and chosen to
              be lived with for years.
            </p>
            <div className="footer__social">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                >
                  <Icon name={social.name} size={17} />
                </a>
              ))}
            </div>
          </div>

          <nav className="footer__cols" aria-label="Footer">
            <div>
              <p className="footer__title">Shop</p>
              <ul>
                {shopLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} onClick={go(link.href)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="footer__title">About</p>
              <ul>
                {aboutLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} onClick={go(link.href)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="footer__title">Help</p>
              <ul>
                {helpLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} onClick={go(link.href)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="footer__news">
            <p className="footer__title">The Sunday Edit</p>
            <p className="footer__news-copy">
              Décor inspiration, new arrivals and quiet offers — once a week.
            </p>
            <form
              className="footer__form"
              onSubmit={(event) => {
                event.preventDefault()
                if (!email.trim()) return
                notify('You’re on the list.', 'Look out for The Sunday Edit.')
                setEmail('')
              }}
            >
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit" aria-label="Subscribe">
                <Icon name="arrow-right" size={17} />
              </button>
            </form>
            <p className="footer__collections">
              {COLLECTIONS.slice(0, 3).map((collection, index) => (
                <span key={collection.id}>
                  <a href={`/collections/${collection.id}`} onClick={go(`/collections/${collection.id}`)}>
                    {collection.name}
                  </a>
                  {index < 2 && <span aria-hidden="true"> · </span>}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} DreamDécor Studio. All rights reserved.</p>
          <p className="footer__legal">
            <a href="/about" onClick={go('/about')}>
              Privacy
            </a>
            <span aria-hidden="true">·</span>
            <a href="/about" onClick={go('/about')}>
              Terms
            </a>
            <span aria-hidden="true">·</span>
            <span>Designed in Lisbon, made by hand</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
