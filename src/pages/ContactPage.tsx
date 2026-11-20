import { Link } from '../lib/router';
import { useDocumentMeta } from '../lib/hooks';
import { ContactSection } from '../components/home/ContactSection';

export function ContactPage() {
  useDocumentMeta(
    'تماس با ما | Webeko',
    'برای شروع پروژه، مشاوره یا هر سؤالی با Webeko در تماس باشید؛ پاسخ در کمتر از ۲۴ ساعت کاری.',
  );

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" aria-hidden="true">
          <div className="glow" />
        </div>
        <div className="container page-hero-inner">
          <nav className="breadcrumb" aria-label="مسیر صفحه">
            <Link to="/">خانه</Link>
            <span className="breadcrumb-sep" aria-hidden="true">
              /
            </span>
            <span aria-current="page">تماس با ما</span>
          </nav>
          <h1 className="page-title">
            بیایید درباره <span className="grad-text">پروژه شما</span> حرف بزنیم.
          </h1>
          <p className="lead">
            یک پیام کوتاه کافی است تا شروع کنیم. اگر هنوز ایده‌تان کامل نیست هم اشکالی ندارد؛ با هم شکلش می‌دهیم.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
