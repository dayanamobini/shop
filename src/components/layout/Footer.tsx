import { useState, type MouseEvent } from 'react'
import { COLLECTIONS } from '../../data/content'
import { navigate } from '../../lib/hooks'
import { useStore } from '../../store/StoreContext'
import { Icon, type IconName } from '../ui/Icon'

const shopLinks = [
  { label: 'همه محصولات', href: '/shop' },
  { label: 'جدیدترین‌ها', href: '/shop?sort=newest' },
  { label: 'پرفروش‌ها', href: '/shop?sort=rating' },
  { label: 'تخفیف‌ها', href: '/shop?sale=1' },
]

const aboutLinks = [
  { label: 'داستان ما', href: '/about' },
  { label: 'پایداری', href: '/about#values' },
  { label: 'هنرمندان', href: '/about#artisans' },
  { label: 'همکاری', href: '/inspiration' },
]

const helpLinks = [
  { label: 'سؤالات متداول', href: '/about#faq' },
  { label: 'روش‌های ارسال', href: '/about#shipping' },
  { label: 'شرایط بازگشت', href: '/about#shipping' },
  { label: 'تماس با ما', href: '/about#contact' },
]

const socials: { name: IconName; label: string; href: string }[] = [
  { name: 'instagram', label: 'اینستاگرام', href: 'https://instagram.com' },
  { name: 'pinterest', label: 'پینترست', href: 'https://pinterest.com' },
  { name: 'facebook', label: 'فیسبوک', href: 'https://facebook.com' },
  { name: 'youtube', label: 'یوتیوب', href: 'https://youtube.com' },
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
              گزیده‌ای از اشیاء برای زندگی استثنایی. دست‌ساز، آرام و کمی ناکامل، و انتخاب‌شده تا
              سال‌ها با آن زندگی کنید.
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

          <nav className="footer__cols" aria-label="پیوندهای پابرگ">
            <div>
              <p className="footer__title">فروشگاه</p>
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
              <p className="footer__title">درباره ما</p>
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
              <p className="footer__title">راهنما</p>
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
            <p className="footer__title">خبرنامه‌ی یکشنبه</p>
            <p className="footer__news-copy">
              الهام دکوراسیون، محصولات تازه و پیشنهادهای آرام — هفته‌ای یک ایمیل.
            </p>
            <form
              className="footer__form"
              onSubmit={(event) => {
                event.preventDefault()
                if (!email.trim()) return
                notify('به فهرست ما خوش آمدید.', 'منتظر خبرنامه‌ی یکشنبه باش.')
                setEmail('')
              }}
            >
              <label className="sr-only" htmlFor="footer-email">
                نشانی ایمیل
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="ایمیل شما"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit" aria-label="عضویت در خبرنامه">
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
          <p>© {new Date().getFullYear()} استودیو دریم‌دکور. تمام حقوق محفوظ است.</p>
          <p className="footer__legal">
            <a href="/about" onClick={go('/about')}>
              حریم خصوصی
            </a>
            <span aria-hidden="true">·</span>
            <a href="/about" onClick={go('/about')}>
              شرایط استفاده
            </a>
            <span aria-hidden="true">·</span>
            <span>طراحی در لیسبون، ساخته‌شده با دست</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
