import type { IconName } from '../components/ui/Icon';

export const navLinks = [
  { label: 'خانه', to: '/' },
  { label: 'خدمات', to: '/services' },
  { label: 'نمونه‌کارها', to: '/portfolio' },
  { label: 'فرآیند همکاری', to: '/#process' },
  { label: 'درباره ما', to: '/about' },
  { label: 'تماس با ما', to: '/contact' },
];

export const stats: { value: number; prefix?: string; suffix?: string; label: string }[] = [
  { value: 50, prefix: '+', label: 'پروژه اجراشده' },
  { value: 30, prefix: '+', label: 'برند همراه Webeko' },
  { value: 98, suffix: '%', label: 'رضایت مشتریان' },
  { value: 24, suffix: '/7', label: 'پشتیبانی' },
];

export const whyFeatures: { label: string; icon: IconName }[] = [
  { label: 'طراحی اختصاصی', icon: 'palette' },
  { label: 'سرعت بالا', icon: 'bolt' },
  { label: 'ریسپانسیو واقعی', icon: 'devices' },
  { label: 'سئوی فنی', icon: 'search' },
  { label: 'امنیت', icon: 'shield' },
  { label: 'پشتیبانی', icon: 'support' },
  { label: 'تجربه کاربری حرفه‌ای', icon: 'target' },
  { label: 'توسعه‌پذیری', icon: 'layers' },
];

export const processSteps: { num: string; title: string; text: string; tag: string }[] = [
  {
    num: '01',
    title: 'شناخت و تحلیل',
    text: 'کسب‌وکار، مخاطب و رقبا را بررسی می‌کنیم و هدف واقعی سایت را مشخص می‌کنیم.',
    tag: '۲ تا ۳ روز',
  },
  {
    num: '02',
    title: 'طراحی UI/UX',
    text: 'ساختار صفحات، مسیر کاربر و زبان بصری برند را طراحی و تأیید می‌کنیم.',
    tag: '۵ تا ۸ روز',
  },
  {
    num: '03',
    title: 'توسعه و پیاده‌سازی',
    text: 'طراحی را با کد تمیز، سریع و ریسپانسیو به یک محصول واقعی تبدیل می‌کنیم.',
    tag: '۱ تا ۳ هفته',
  },
  {
    num: '04',
    title: 'تحویل و پشتیبانی',
    text: 'سایت را منتشر می‌کنیم، تیم شما را آموزش می‌دهیم و کنارتان می‌مانیم.',
    tag: 'همیشگی',
  },
];

export const solutions: { title: string; text: string; icon: IconName }[] = [
  {
    title: 'کسب‌وکارهای خدماتی',
    text: 'برای کلینیک‌ها، مشاوران و مجموعه‌هایی که اعتماد اولین قدم فروش است.',
    icon: 'support',
  },
  {
    title: 'فروشگاه‌های آنلاین',
    text: 'برای برندهایی که می‌خواهند تجربه خرید سریع‌تر و مطمئن‌تری بسازند.',
    icon: 'cart',
  },
  {
    title: 'برندهای شخصی',
    text: 'برای متخصصانی که می‌خواهند حضور دیجیتالشان به اندازه کارشان حرفه‌ای باشد.',
    icon: 'sparkles',
  },
  {
    title: 'استارتاپ‌ها',
    text: 'برای تیم‌هایی که به محصولی قابل ارائه، سریع و قابل توسعه نیاز دارند.',
    icon: 'rocket',
  },
];

export const contactInfo = {
  phone: '۰۲۱ ۹۱۰۰ ۲۴۰۰',
  phoneHref: 'tel:+982191002400',
  email: 'hello@webeko.ir',
  emailHref: 'mailto:hello@webeko.ir',
  address: 'تهران، خیابان ولیعصر، برج نگین',
  hours: 'شنبه تا چهارشنبه، ۹ تا ۱۸',
};

export const socials: { label: string; icon: IconName; href: string }[] = [
  { label: 'اینستاگرام', icon: 'instagram', href: 'https://instagram.com/webeko.studio' },
  { label: 'تلگرام', icon: 'telegram', href: 'https://t.me/webeko' },
  { label: 'لینکدین', icon: 'linkedin', href: 'https://linkedin.com/company/webeko' },
];

export const projectTypes = [
  'طراحی سایت',
  'فروشگاه اینترنتی',
  'UI/UX',
  'لندینگ پیج',
  'پشتیبانی',
  'سایر',
];

export const budgets = [
  'زیر ۲۰ میلیون تومان',
  '۲۰ تا ۵۰ میلیون تومان',
  '۵۰ تا ۱۰۰ میلیون تومان',
  'بیش از ۱۰۰ میلیون تومان',
];
