import { useDocumentMeta } from '../lib/hooks';
import { ButtonLink } from '../components/ui/Button';

export function NotFoundPage() {
  useDocumentMeta('صفحه پیدا نشد | Webeko', 'این صفحه در وب‌سایت Webeko وجود ندارد.');

  return (
    <section className="section" style={{ paddingTop: 'calc(var(--header-h) + 40px)' }}>
      <div className="container notfound">
        <span className="notfound-code" aria-hidden="true">
          404
        </span>
        <h1 className="page-title">این صفحه پیدا نشد.</h1>
        <p className="lead" style={{ textAlign: 'center' }}>
          ممکن است آدرس تغییر کرده باشد یا صفحه حذف شده باشد. از صفحه اصلی شروع کنید.
        </p>
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <ButtonLink to="/" icon="arrow-left">
            بازگشت به خانه
          </ButtonLink>
          <ButtonLink to="/portfolio" variant="ghost">
            مشاهده نمونه‌کارها
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
