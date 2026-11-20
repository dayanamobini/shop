import { Link } from '../lib/router';
import { useDocumentMeta } from '../lib/hooks';
import { Reveal } from '../components/ui/Reveal';
import { SectionHead } from '../components/ui/SectionHead';
import { Icon, type IconName } from '../components/ui/Icon';
import { Stats } from '../components/home/Stats';
import { FinalCta } from '../components/home/FinalCta';

const values: { title: string; text: string; icon: IconName }[] = [
  { title: 'خلاقیت', text: 'هر پروژه از یک ایده تازه شروع می‌شود، نه از یک قالب تکراری.', icon: 'palette' },
  { title: 'کیفیت', text: 'جزئیات کوچک تفاوت بزرگ می‌سازند؛ ما روی همان‌ها وسواس داریم.', icon: 'star' },
  { title: 'شفافیت', text: 'برنامه، هزینه و مسیر پروژه از همان ابتدا روشن است.', icon: 'eye' },
  { title: 'نوآوری', text: 'تکنولوژی را وقتی به کار می‌بریم که واقعاً تجربه را بهتر کند.', icon: 'sparkles' },
  { title: 'تجربه کاربری', text: 'زیبایی بدون کاربرد فقط تزئین است؛ ما دنبال هر دو هستیم.', icon: 'target' },
];

export function AboutPage() {
  useDocumentMeta(
    'درباره ما | Webeko',
    'Webeko یک استودیوی طراحی و توسعه است که تجربه‌های دیجیتال می‌سازد؛ برای برندهایی که می‌خواهند متفاوت دیده شوند.',
  );

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" aria-hidden="true">
          <div className="glow" />
        </div>
        <div className="container">
          <nav className="breadcrumb" aria-label="مسیر صفحه">
            <Link to="/">خانه</Link>
            <span className="breadcrumb-sep" aria-hidden="true">
              /
            </span>
            <span aria-current="page">درباره ما</span>
          </nav>

          <div className="about-hero" style={{ marginTop: 28 }}>
            <div className="page-hero-inner" style={{ maxWidth: 640 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                استودیو Webeko
              </span>
              <h1 className="page-title">ما Webeko هستیم.</h1>
              <p className="lead">
                یک تیم کوچک و متمرکز از طراح و توسعه‌دهنده که تصمیم گرفته‌اند سایت‌های معمولی نسازند. ما باور داریم
                حضور دیجیتال یک برند باید به اندازه خود آن برند دقیق و متفاوت باشد.
              </p>
              <p className="lead">
                از سال ۱۳۹۸ روی پروژه‌هایی کار کرده‌ایم که صاحبشان به جزئیات اهمیت می‌دهد: از فروشگاه‌های کوچک تا
                محصولات دیجیتال با هزاران کاربر. در هر پروژه یک چیز ثابت مانده است — وسواس روی تجربه کاربر.
              </p>
            </div>

            <div className="about-media">
              <img src="/hero-portrait.jpg" alt="عضو تیم Webeko در استودیو، با نورپردازی بنفش" loading="lazy" />
              <div className="about-badge">
                <Icon name="sparkles" size={16} />
                <span>
                  از ۱۳۹۸ تا امروز، <strong>+50</strong> پروژه
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="ارزش‌های ما"
              title={
                <>
                  چیزهایی که <span className="grad-text">سرِ آن‌ها می‌ایستیم.</span>
                </>
              }
            />
          </Reveal>
          <div className="values-grid">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 60}>
                <article className="value-card">
                  <span className="value-icon" aria-hidden="true">
                    <Icon name={value.icon} size={18} />
                  </span>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      <FinalCta />
    </>
  );
}
