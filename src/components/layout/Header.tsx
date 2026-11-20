import { useEffect, useState } from 'react';
import { Link, useRouter } from '../../lib/router';
import { contactInfo, navLinks, socials } from '../../data/site';
import { Logo } from './Logo';
import { Icon } from '../ui/Icon';
import { ButtonLink } from '../ui/Button';

function isActive(path: string, to: string) {
  if (to.includes('#')) return false;
  if (to === '/') return path === '/';
  return path === to || path.startsWith(`${to}/`);
}

export function Header() {
  const { path } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <header className="site-header" data-scrolled={scrolled}>
        <div className="container header-inner">
          <Logo />

          <nav className="nav-desktop" aria-label="ناوبری اصلی">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="nav-link"
                aria-current={isActive(path, link.to) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <ButtonLink to="/contact" size="sm" icon="arrow-left">
              شروع یک پروژه
            </ButtonLink>
            <button
              type="button"
              className="menu-btn"
              aria-label="باز کردن منو"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Icon name="menu" size={20} />
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="drawer" role="dialog" aria-modal="true" aria-label="منوی موبایل">
          <div className="drawer-top">
            <Logo onNavigate={() => setOpen(false)} />
            <button type="button" className="menu-btn" style={{ display: 'grid' }} aria-label="بستن منو" onClick={() => setOpen(false)}>
              <Icon name="close" size={20} />
            </button>
          </div>

          <nav className="drawer-nav" aria-label="ناوبری موبایل">
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className="drawer-link"
                style={{ ['--i' as string]: index }}
                onClick={() => setOpen(false)}
              >
                <span>{link.label}</span>
                <span aria-hidden="true">
                  <Icon name="arrow-left" size={18} />
                </span>
              </Link>
            ))}
          </nav>

          <div className="drawer-foot">
            <ButtonLink to="/contact" icon="arrow-left" onClick={() => setOpen(false)}>
              شروع یک پروژه
            </ButtonLink>
            <div className="drawer-contact">
              <a href={contactInfo.phoneHref}>
                <Icon name="phone" size={16} />
                {contactInfo.phone}
              </a>
              <a href={contactInfo.emailHref}>
                <Icon name="mail" size={16} />
                {contactInfo.email}
              </a>
            </div>
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
        </div>
      ) : null}
    </>
  );
}
