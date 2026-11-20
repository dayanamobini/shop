import type { Category, CollectionId } from './products'
import { PHOTO } from './images'

export const NAV_LINKS = [
  { label: 'خانه', href: '/' },
  { label: 'فروشگاه', href: '/shop' },
  { label: 'دسته‌بندی‌ها', href: '/collections' },
  { label: 'مجله دکور', href: '/inspiration' },
  { label: 'درباره ما', href: '/about' },
]

export const SHOP_CATEGORIES: {
  name: string
  target: Category
  photo: string
  blurb: string
}[] = [
  { name: 'مجسمه‌ها', target: 'Sculptures', photo: 'photo-1707248985080-954ad8466006', blurb: 'فرم، سکون، نور' },
  { name: 'آباژورها', target: 'Lighting', photo: 'photo-1540932239986-30128078f3c5', blurb: 'عصری گرم‌تر' },
  { name: 'گلدان‌ها', target: 'Vases', photo: 'photo-1612196808214-b8e1d6145a8c', blurb: 'برای ساقه‌ها و سکوت' },
  { name: 'تابلو و دیوارکوب', target: 'Wall Art', photo: 'photo-1618220048045-10a6dbdf83e0', blurb: 'دیوارِ آرام، اتاقِ پرحرف' },
  { name: 'کوسن‌ها', target: 'Textiles', photo: 'photo-1611489704434-2612dc89c992', blurb: 'نرمی‌ای که در آن غرق شوی' },
  { name: 'آینه‌ها', target: 'Mirrors', photo: 'photo-1619378396304-7ef156537d7e', blurb: 'نور روز را دو برابر کن' },
  { name: 'گلدان و گیاهان', target: 'Planters', photo: 'photo-1583078603507-65d00910f610', blurb: 'جاندار، در آغوشی زیبا' },
]

export const MEGA_MENU: {
  title: string
  links: { label: string; category?: Category }[]
}[] = [
  {
    title: 'اشیاء',
    links: [
      { label: 'مجسمه', category: 'Sculptures' },
      { label: 'گلدان', category: 'Vases' },
      { label: 'دکور', category: 'Decor' },
      { label: 'آینه', category: 'Mirrors' },
    ],
  },
  {
    title: 'برای اتاق',
    links: [
      { label: 'مبلمان', category: 'Furniture' },
      { label: 'نورپردازی', category: 'Lighting' },
      { label: 'منسوجات', category: 'Textiles' },
      { label: 'تابلو و دیوارکوب', category: 'Wall Art' },
      { label: 'گیاهان', category: 'Planters' },
    ],
  },
]

export const MOODS: {
  id: string
  name: string
  description: string
  photo: string
  href: string
}[] = [
  {
    id: 'calm',
    name: 'آرام',
    description: 'نور نرم، رنگ‌های ساکت، هیچ‌چیز که طلب توجه کند.',
    photo: 'photo-1616137466211-f939a420be84',
    href: '/shop?mood=calm',
  },
  {
    id: 'bold',
    name: 'جسور',
    description: 'شرابی عمیق، وزن مجسمه‌وار، اتاقی با یک نظر مشخص.',
    photo: 'photo-1618220179428-22790b461013',
    href: '/shop?mood=bold',
  },
  {
    id: 'artistic',
    name: 'هنری',
    description: 'اشیاء گردآوری‌شده، بافت‌های لایه‌لایه، کمی تکرارنشدنی.',
    photo: 'photo-1484101403633-562f891dc89a',
    href: '/shop?mood=artistic',
  },
  {
    id: 'natural',
    name: 'طبیعی',
    description: 'سنگ خام، سبزی زنده، موادی که زیبا پیر می‌شوند.',
    photo: 'photo-1502672260266-1c1ef2d93688',
    href: '/shop?mood=natural',
  },
]

export const COLLECTIONS: {
  id: CollectionId
  name: string
  tagline: string
  description: string
  photo: string
  size: 'large' | 'wide' | 'tall' | 'standard'
}[] = [
  {
    id: 'sculptural',
    name: 'مجموعه فرم‌های مجسمه‌ای',
    tagline: 'فرم، پیش از هر چیز',
    description: 'اشیائی که یک اتاق را نگه می‌دارند، همان‌گونه که یک جمله یک فکر را.',
    photo: 'photo-1567538096630-e0c55bd6374c',
    size: 'large',
  },
  {
    id: 'soft-living',
    name: 'زندگی نرم و آرام',
    tagline: 'بعدازظهرهای کند',
    description: 'بوکله، کتان و نور رزگون برای ساعت‌هایی که برای خودت نگه می‌داری.',
    photo: 'photo-1616486029423-aaa4789e8c9a',
    size: 'standard',
  },
  {
    id: 'modern-rituals',
    name: 'آیین‌های مدرن',
    tagline: 'مراسم روزانه',
    description: 'شمع‌ها، کاسه‌ها و آیین‌های کوچکی که روز را نشانه‌گذاری می‌کنند.',
    photo: 'photo-1602874801007-bd458bb1b8b6',
    size: 'standard',
  },
  {
    id: 'golden-hour',
    name: 'ساعت طلایی',
    tagline: 'نور گرم',
    description: 'نورپردازی‌هایی برای آخرین ساعت روز.',
    photo: 'photo-1526057565006-20beab8dd2ed',
    size: 'wide',
  },
  {
    id: 'organic-forms',
    name: 'فرم‌های ارگانیک',
    tagline: 'ساخته‌ی دست',
    description: 'خاک، سنگ و چوب؛ فرم‌گرفته به دست کسانی که بهترین شناخت را دارند.',
    photo: 'photo-1565193566173-7a0ee3dbe261',
    size: 'standard',
  },
]

export const BENEFITS = [
  { icon: 'truck' as const, title: 'ارسال سریع', text: 'برای سفارش‌های واجد شرایط' },
  { icon: 'return' as const, title: 'بازگشت آسان', text: 'مهلت ۳۰ روزه بازگشت' },
  { icon: 'shield' as const, title: 'پرداخت امن', text: 'اطلاعات شما کاملاً محافظت می‌شود' },
  { icon: 'support' as const, title: 'پشتیبانی', text: 'همیشه در کنار شما هستیم' },
]

export const SOCIAL_TILES = [
  { photo: 'photo-1618220179428-22790b461013', caption: 'نور صبح، کتان و یک شاخه‌ی تنها.' },
  { photo: 'photo-1519710164239-da123dc03ef4', caption: 'گوشه‌ای که همه‌چیز از آن شروع شد.' },
  { photo: 'photo-1578500494198-246f612d3b3d', caption: 'تن‌های شرابی برای ماه‌های سرد.' },
  { photo: 'photo-1616137466211-f939a420be84', caption: 'اشیائی که با گذر زمان زیباتر می‌شوند.' },
  { photo: 'photo-1631049307264-da0ec9d70304', caption: 'فقط قوس‌های نرم.' },
  { photo: 'photo-1618220048045-10a6dbdf83e0', caption: 'قفسه‌ای که آهسته چیده شد.' },
  { photo: 'photo-1484101403633-562f891dc89a', caption: 'یکشنبه، بی‌مزاحم.' },
  { photo: 'photo-1517705008128-361805f42e86', caption: 'از مجموعه‌ی ساعت طلایی.' },
]

export const LOOKBOOK_CHAPTERS = [
  {
    id: 'chapter-1',
    number: '۰۱',
    title: 'هنرِ سکون',
    copy: 'اتاق با خویشتن‌داری آغاز می‌شود. یک شیء که آهسته انتخاب شده، بیش از یک قفسه پر از اشیا می‌گوید.',
    photo: 'photo-1618221195710-dd6b41faaea6',
  },
  {
    id: 'chapter-2',
    number: '۰۲',
    title: 'نور، به‌عنوان ماده',
    copy: 'ما برای ساعت پیش از غروب طراحی می‌کنیم؛ زمانی که یک چراغ از مبلمان بودن دست می‌کشد و به فضا تبدیل می‌شود.',
    photo: 'photo-1616486029423-aaa4789e8c9a',
  },
  {
    id: 'chapter-3',
    number: '۰۳',
    title: 'ساخته‌شده برای زندگی',
    copy: 'چرخ‌کاری‌شده، بافته‌شده و پرداخت‌شده با دست. همان ناهماهنگی‌های کوچک، اصل ماجراست.',
    photo: 'photo-1615529182904-14819c35db37',
  },
]

export const INSPIRATION_STORIES = [
  {
    id: 'story-1',
    category: 'دکوراسیون',
    title: 'چطور فضای خانه را لوکس‌تر کنیم؟',
    excerpt:
      'لوکس بودن همیشه درباره‌ی گران بودن نیست؛ درباره‌ی نور، فاصله و انتخاب‌هایی است که آرامش می‌سازند.',
    photo: PHOTO.editorial,
    read: '۶ دقیقه مطالعه',
    date: '۲۸ آبان ۱۴۰۵',
  },
  {
    id: 'story-2',
    category: 'ایده',
    title: '۷ ایده برای دکوراسیون مینیمال',
    excerpt:
      'از یک شیء در هر سطح تا بازی با بافت‌های هم‌خانواده؛ راه‌هایی ساده برای اتاقی آرام و کامل.',
    photo: 'photo-1612196808214-b8e1d6145a8c',
    read: '۴ دقیقه مطالعه',
    date: '۱۴ آبان ۱۴۰۵',
  },
  {
    id: 'story-3',
    category: 'نورپردازی',
    title: 'راهنمای انتخاب نور مناسب برای خانه',
    excerpt:
      'دمای رنگ، شدت و ارتفاع؛ سه کلیدی که حال‌وهوای هر اتاق را تعیین می‌کنند.',
    photo: 'photo-1519710164239-da123dc03ef4',
    read: '۵ دقیقه مطالعه',
    date: '۲ آبان ۱۴۰۵',
  },
  {
    id: 'story-4',
    category: 'رنگ',
    title: 'چطور رنگ‌ها را در دکوراسیون ترکیب کنیم؟',
    excerpt:
      'از پالت‌های هم‌جوار تا یک لهجه‌ی زرشکی؛ قاعده‌هایی که به چشم آرامش می‌دهند.',
    photo: 'photo-1507473885765-e6ed057f782c',
    read: '۳ دقیقه مطالعه',
    date: '۱۹ مهر ۱۴۰۵',
  },
]

export const RECENT_SEARCHES_DEFAULT = ['مجسمه', 'چراغ ابر', 'گلدان رز']
