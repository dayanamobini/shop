import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { GlowCursor } from '../ui/GlowCursor';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">
        رفتن به محتوای اصلی
      </a>
      <GlowCursor />
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <div className="noise" aria-hidden="true" />
    </>
  );
}
