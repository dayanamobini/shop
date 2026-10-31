import { Link } from '../lib/router'
import { InstagramIcon, PinterestIcon, TiktokIcon } from './Icons'

const columns = [
  {
    title: 'Shop',
    links: [
      { label: 'New In', to: '/shop' },
      { label: 'Dresses', to: '/shop/dresses' },
      { label: 'Tops', to: '/shop/tops' },
      { label: 'Bottoms', to: '/shop/bottoms' },
      { label: 'Accessories', to: '/shop/accessories' },
      { label: 'Sale', to: '/shop?sale=1' },
    ],
  },
  {
    title: 'Customer care',
    links: [
      { label: 'Track Order', to: '/account' },
      { label: 'Returns & Exchanges', to: '/pages/returns' },
      { label: 'Shipping Information', to: '/pages/shipping' },
      { label: 'Size Guide', to: '/pages/size-guide' },
      { label: 'FAQ', to: '/pages/faq' },
      { label: 'Contact Us', to: '/pages/contact' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Our Story', to: '/pages/our-story' },
      { label: 'Sustainability', to: '/pages/sustainability' },
      { label: 'Careers', to: '/pages/careers' },
      { label: 'Contact', to: '/pages/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms & Conditions', to: '/pages/terms' },
      { label: 'Privacy Policy', to: '/pages/privacy' },
      { label: 'Cookie Policy', to: '/pages/cookies' },
    ],
  },
]

const payments = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay']

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="logo">DEVA COLLECTION</span>
            <p className="footer__blurb">
              Timeless fashion for the modern woman. Effortless style, every day.
            </p>
            <div className="footer__socials">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="DEVA Collection on Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="DEVA Collection on Pinterest"
              >
                <PinterestIcon size={16} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="DEVA Collection on TikTok"
              >
                <TiktokIcon size={16} />
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div className="footer__col" key={column.title}>
              <h4>{column.title}</h4>
              {column.links.map((link) => (
                <Link key={link.label} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} DEVA Collection. All rights reserved.</span>
          <div className="footer__pay" aria-label="Accepted payment methods">
            {payments.map((payment) => (
              <span key={payment}>{payment}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
