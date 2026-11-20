import { Link } from '../lib/router';
import { useDocumentMeta } from '../lib/hooks';

const content = {
  terms: {
    title: 'قوانین همکاری',
    description: 'قوانین و شرایط همکاری با Webeko برای پروژه‌های طراحی و توسعه.',
    sections: [
      {
        heading: '۱. شروع همکاری',
        body: 'همکاری پس از تأیید پیشنهاد پروژه و پرداخت پیش‌پرداخت آغاز می‌شود. دامنه کار، زمان‌بندی و تعداد بازبینی‌ها در پیشنهاد مشخص می‌شود.',
      },
      {
        heading: '۲. تحویل و بازبینی',
        body: 'هر مرحله از پروژه برای تأیید شما ارسال می‌شود. دو دور بازبینی در هر مرحله گنجانده شده است؛ بازبینی‌های بیشتر یا تغییر دامنه کار با توافق جداگانه انجام می‌شود.',
      },
      {
        heading: '۳. مالکیت',
        body: 'پس از تسویه نهایی، مالکیت کامل طراحی و کد پروژه به شما منتقل می‌شود. کتابخانه‌ها و ابزارهای متن‌باز موجود در پروژه تابع مجوز خودشان باقی می‌مانند.',
      },
      {
        heading: '۴. پشتیبانی',
        body: 'پشتیبانی رایگان سه ماهه پس از انتشار شامل رفع خطاهای فنی است، نه افزودن قابلیت جدید. برای تغییرات فراتر از این بازه، بسته پشتیبانی ماهانه تعریف می‌شود.',
      },
    ],
  },
  privacy: {
    title: 'حریم خصوصی',
    description: 'نحوه جمع‌آوری و استفاده Webeko از اطلاعات شما.',
    sections: [
      {
        heading: '۱. اطلاعاتی که دریافت می‌کنیم',
        body: 'از فرم تماس، نام، شماره تماس، ایمیل و توضیحات پروژه را دریافت می‌کنیم. این اطلاعات فقط برای پاسخ‌گویی و پیگیری همان درخواست استفاده می‌شود.',
      },
      {
        heading: '۲. استفاده از اطلاعات',
        body: 'اطلاعات شما به فروش نمی‌رسد و در اختیار شخص ثالث قرار نمی‌گیرد. برای ارسال پیشنهاد و هماهنگی جلسه استفاده می‌شود.',
      },
      {
        heading: '۳. نگهداری',
        body: 'سوابق مکاتبات تا دو سال نگهداری می‌شود. در هر زمان می‌توانید درخواست حذف اطلاعات خود را از طریق ایمیل اعلام کنید.',
      },
      {
        heading: '۴. کوکی‌ها',
        body: 'این وب‌سایت برای کارکرد صحیح از کوکی‌های ضروری استفاده می‌کند. هیچ ابزار ردیابی تبلیغاتی خارجی روی این سایت فعال نیست.',
      },
    ],
  },
};

export function LegalPage({ kind }: { kind: 'terms' | 'privacy' }) {
  const page = content[kind];
  useDocumentMeta(`${page.title} | Webeko`, page.description);

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
            <span aria-current="page">{page.title}</span>
          </nav>
          <h1 className="page-title">{page.title}</h1>
          <p className="lead">{page.description}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="form-card glass glass--edge" style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            {page.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="h3" style={{ marginBottom: 8 }}>
                  {section.heading}
                </h2>
                <p className="text-muted" style={{ lineHeight: 1.95 }}>
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
