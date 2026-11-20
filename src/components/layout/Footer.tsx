import { Link } from '../../lib/router';
import { socials } from '../../data/site';
import { Logo } from './Logo';
import { Icon } from '../ui/Icon';

const columns = [
  {
    title: 'Webeko',
    links: [
      { label: 'درباره ما', to: '/about' },
      { label: 'نمونه‌کارها', to: '/portfolio' },
      { label: 'خدمات', to: '/services' },
      { label: 'تماس با ما', to: '/contact' },
    ],
  },
  {
    title: 'خدمات',
    links: [
      { label: 'طراحی سایت', to: '/services/web-design' },
      { label: 'فروشگاه اینترنتی', to: '/services/ecommerce' },
      { label: 'UI/UX', to: '/services/ui-ux' },
      { label: 'پشتیبانی', to: '/services/development' },
    ],
  },
  {
    title: 'راهنما',
    links: [
      { label: 'سؤالات متداول', to: '/#faq' },
      { label: 'فرآیند همکاری', to: '/#process' },
      { label: 'قوانین', to: '/terms' },
      { label: 'حریم خصوصی', to: '/privacy' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p className="footer-brand-text">
              طراحی تجربه‌های دیجیتال برای برندهایی که می‌خواهند متفاوت دیده شوند.
            </p>
            <div className="socials">
              {socials.map((social) => (
                <a
                  key={social.label}
                  className="social-btn"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                >
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="footer-title">{column.title}</h3>
              <div className="footer-links">
                {column.links.map((link) => (
                  <Link key={link.label} to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© تمامی حقوق برای Webeko محفوظ است.</span>
          <div className="footer-bottom-links">
            <Link to="/terms">قوانین</Link>
            <Link to="/privacy">حریم خصوصی</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
