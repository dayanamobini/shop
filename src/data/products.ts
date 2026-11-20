export type Category =
  | 'Furniture'
  | 'Lighting'
  | 'Decor'
  | 'Vases'
  | 'Wall Art'
  | 'Textiles'
  | 'Mirrors'
  | 'Planters'
  | 'Sculptures'

export type CollectionId =
  | 'sculptural'
  | 'soft-living'
  | 'modern-rituals'
  | 'golden-hour'
  | 'organic-forms'

export type Badge = 'New' | 'Bestseller' | 'Limited'

export type Product = {
  id: string
  slug: string
  name: string
  category: Category
  collection: CollectionId
  price: number
  compareAt?: number
  rating: number
  reviewCount: number
  photos: [string, string]
  colors: { name: string; hex: string }[]
  badge?: Badge
  inStock: boolean
  description: string
  materials: string
  dimensions: string
  care: string
  added: number
}

export const CATEGORIES: Category[] = [
  'Furniture',
  'Lighting',
  'Decor',
  'Vases',
  'Wall Art',
  'Textiles',
  'Mirrors',
  'Planters',
  'Sculptures',
]

export const products: Product[] = [
  {
    id: 'p-orbit-sculpture',
    slug: 'orbit-sculpture',
    name: 'مجسمه اوربیت',
    category: 'Sculptures',
    collection: 'sculptural',
    price: 2450000,
    rating: 4.9,
    reviewCount: 214,
    photos: ['photo-1707248985080-954ad8466006', 'photo-1707054437518-dfd402977b03'],
    colors: [
      { name: 'عاجی', hex: '#EFE4D8' },
      { name: 'رز محو', hex: '#E8C9C5' },
      { name: 'اونیکس', hex: '#3A3234' },
    ],
    badge: 'Bestseller',
    inStock: true,
    description:
      'تمرینی آرام در تعادل. دو کره‌ی دست‌ساز در یک قوس پیوسته به هم می‌رسند و نور را همان‌گونه که در اتاق می‌چرخد، به بازی می‌گیرند.',
    materials: 'سفال سنگی با لعاب معدنی مات و پرداخت دستی.',
    dimensions: 'ارتفاع ۳۲ × عرض ۲۱ × عمق ۱۸ سانتی‌متر · ۲٫۴ کیلوگرم',
    care: 'با پارچه‌ی نرم و خشک گردگیری کنید. از نور مستقیم آفتاب دور نگه دارید.',
    added: 8,
  },
  {
    id: 'p-cloud-table-lamp',
    slug: 'cloud-table-lamp',
    name: 'چراغ رومیزی ابر',
    category: 'Lighting',
    collection: 'golden-hour',
    price: 3890000,
    compareAt: 4290000,
    rating: 4.8,
    reviewCount: 386,
    photos: ['photo-1513506003901-1e6a229e2d15', 'photo-1507473885765-e6ed057f782c'],
    colors: [
      { name: 'عاجی گرم', hex: '#F3E9DD' },
      { name: 'رز خاکی', hex: '#C98F91' },
    ],
    badge: 'Bestseller',
    inStock: true,
    description:
      'نوری نرم و بی‌وزن، به شکل ابری که از آسمان می‌گذرد. درخششی قابل تنظیم برای آیین‌های پیش از خواب و کتاب خواندن‌های دیروقت.',
    materials: 'دیفیوزر شیشه‌ی اپال دمیده‌شده روی پایه‌ی برنجی مات.',
    dimensions: 'ارتفاع ۳۸ × قطر ۲۶ سانتی‌متر · ۱٫۸ کیلوگرم',
    care: 'با پارچه‌ی نرم و خشک پاک کنید. لامپ LED گرم، حداکثر ۴۰ وات.',
    added: 6,
  },
  {
    id: 'p-wavy-ceramic-vase',
    slug: 'wavy-ceramic-vase',
    name: 'گلدان سرامیکی موج',
    category: 'Vases',
    collection: 'organic-forms',
    price: 1290000,
    rating: 4.7,
    reviewCount: 168,
    photos: ['photo-1612196808214-b8e1d6145a8c', 'photo-1572853566597-b83cde546912'],
    colors: [
      { name: 'گچی', hex: '#F2ECE4' },
      { name: 'تراکوتا', hex: '#B4695A' },
    ],
    badge: 'New',
    inStock: true,
    description:
      'سیلوتی مواج که با دست فرم گرفته است؛ هیچ دو عددی کاملاً شبیه هم نیستند. خالی هم زیباست، با یک شاخه‌ی تنها زیباتر.',
    materials: 'سرامیک دست‌ساز با لعاب مات و گچی.',
    dimensions: 'ارتفاع ۲۶ × قطر ۱۴ سانتی‌متر · ۱٫۲ کیلوگرم',
    care: 'با دست بشویید. مناسب ماشین ظرف‌شویی نیست.',
    added: 2,
  },
  {
    id: 'p-aura-gloss-lamp',
    slug: 'aura-gloss-lamp',
    name: 'چراغ رومیزی هاله',
    category: 'Lighting',
    collection: 'golden-hour',
    price: 4650000,
    rating: 4.9,
    reviewCount: 132,
    photos: ['photo-1565814329452-e1efa11c5b89', 'photo-1540932239986-30128078f3c5'],
    colors: [
      { name: 'زرشکی', hex: '#5B1722' },
      { name: 'شامپاینی', hex: '#D9C3A3' },
    ],
    badge: 'Limited',
    inStock: true,
    description:
      'ستونی مجسمه‌وار از نورِ لاکی. سطح براق آن محیط را مثل آبِ آرام بازمی‌تاباند.',
    materials: 'آلومینیوم لاکی با آباژور کتانی.',
    dimensions: 'ارتفاع ۵۲ × قطر ۳۰ سانتی‌متر · ۳٫۱ کیلوگرم',
    care: 'با پارچه‌ی میکروفایبر خشک گردگیری کنید. از شوینده‌های ساینده بپرهیزید.',
    added: 5,
  },
  {
    id: 'p-arco-stone-vase',
    slug: 'arco-stone-vase',
    name: 'گلدان سنگی آرکو',
    category: 'Vases',
    collection: 'organic-forms',
    price: 1950000,
    rating: 4.6,
    reviewCount: 96,
    photos: ['photo-1613424777445-f93a2a48e285', 'photo-1643569556871-91ec60671ed7'],
    colors: [
      { name: 'شنی', hex: '#DFCDB8' },
      { name: 'اسلیتی', hex: '#7A7773' },
    ],
    inStock: true,
    description:
      'تراشیده از یک تکه سنگ؛ آرکو پایه‌ی سنگین را با قوسی بعید از فضای خالی در تعادل نگه می‌دارد.',
    materials: 'سنگ تراورتن یکپارچه با پرداخت مات.',
    dimensions: 'ارتفاع ۳۰ × عرض ۱۸ × عمق ۱۲ سانتی‌متر · ۳٫۶ کیلوگرم',
    care: 'با پارچه‌ی نمدار پاک کنید. سالی یک بار با روغن سنگ تثبیت شود.',
    added: 7,
  },
  {
    id: 'p-halo-wall-mirror',
    slug: 'halo-wall-mirror',
    name: 'آینه دیواری هاله',
    category: 'Mirrors',
    collection: 'soft-living',
    price: 5480000,
    rating: 4.8,
    reviewCount: 141,
    photos: ['photo-1619378396304-7ef156537d7e', 'photo-1617228206053-477863025d9c'],
    colors: [
      { name: 'برنجی', hex: '#B08D57' },
      { name: 'عاجی', hex: '#EDE3D7' },
    ],
    inStock: true,
    description:
      'دایره‌ای کامل در قابی به نازکی یک نجوا از برنج. راهرو را نرم می‌کند و نور اتاق‌های کوچک را دو برابر.',
    materials: 'قاب برنجی برس‌خورده‌ی دستی با شیشه‌ی ۵ میلی‌متری پخ‌دار.',
    dimensions: 'قطر ۷۰ × عمق ۴ سانتی‌متر · ۶٫۲ کیلوگرم',
    care: 'شیشه را با شوینده‌ی بدون آمونیاک تمیز کنید. سالی دو بار قاب را پولیش بزنید.',
    added: 4,
  },
  {
    id: 'p-linen-cloud-cushion',
    slug: 'linen-cloud-cushion',
    name: 'کوسن کتان ابر',
    category: 'Textiles',
    collection: 'soft-living',
    price: 890000,
    rating: 4.7,
    reviewCount: 302,
    photos: ['photo-1611489704434-2612dc89c992', 'photo-1611489704164-6f73c62bd810'],
    colors: [
      { name: 'رز محو', hex: '#E8C9C5' },
      { name: 'جو دوسر', hex: '#DCCDBB' },
      { name: 'شرابی', hex: '#5B1722' },
    ],
    inStock: true,
    description:
      'کتان اروپایی شسته‌شده با لمسی رها و طبیعی. پر شده تا فرم خود را روی مبل حفظ کند.',
    materials: 'رویه‌ی ۱۰۰٪ کتان سنگ‌شور با الیاف میکروفایبر بازیافتی.',
    dimensions: '۵۰ × ۵۰ سانتی‌متر',
    care: 'با آب سرد و برنامه‌ی ملایم بشویید. در سایه خشک کنید.',
    added: 3,
  },
  {
    id: 'p-terracotta-planter',
    slug: 'terracotta-planter',
    name: 'گلدان سفالی تراکوتا',
    category: 'Planters',
    collection: 'organic-forms',
    price: 1150000,
    rating: 4.5,
    reviewCount: 87,
    photos: ['photo-1583078603507-65d00910f610', 'photo-1513161455079-7dc1de15ef3e'],
    colors: [
      { name: 'تراکوتا', hex: '#B4695A' },
      { name: 'گچی', hex: '#EFE7DD' },
    ],
    inStock: true,
    description:
      'چرخ‌کاری‌شده و کمی ناقص رهاشده. سطح بی‌لعاب آن همراه با گیاهی که در خود دارد نفس می‌کشد.',
    materials: 'سفال طبیعی بی‌لعاب با سوراخ تخلیه‌ی آب.',
    dimensions: 'ارتفاع ۲۴ × قطر ۲۲ سانتی‌متر · ۲٫۱ کیلوگرم',
    care: 'پیش از کاشت با آب بشویید. پتینه‌ی سطح به‌طور طبیعی شکل می‌گیرد.',
    added: 6,
  },
  {
    id: 'p-linea-wall-art',
    slug: 'linea-wall-art',
    name: 'تابلو خطی لینئا',
    category: 'Wall Art',
    collection: 'modern-rituals',
    price: 3250000,
    rating: 4.8,
    reviewCount: 64,
    photos: ['photo-1618220048045-10a6dbdf83e0', 'photo-1484101403633-562f891dc89a'],
    colors: [
      { name: 'بلوط طبیعی', hex: '#C9AE8C' },
      { name: 'شرابی', hex: '#5B1722' },
    ],
    badge: 'New',
    inStock: true,
    description:
      'یک خط پیوسته که با دست روی کاغذ کتانی بافت‌دار طلاکوب شده است. از دور آرام، از نزدیک زنده.',
    materials: 'کاغذ پنبه‌ای آرشیوی، قاب بلوط و شیشه‌ی موزه‌ای.',
    dimensions: '۶۰ × ۸۰ سانتی‌متر با قاب',
    care: 'دور از نور مستقیم آفتاب آویزان کنید. فقط قاب را گردگیری کنید.',
    added: 1,
  },
  {
    id: 'p-dune-ceramic-bowl',
    slug: 'dune-ceramic-bowl',
    name: 'کاسه سرامیکی تلماسه',
    category: 'Decor',
    collection: 'organic-forms',
    price: 780000,
    rating: 4.6,
    reviewCount: 121,
    photos: ['photo-1721328004336-c19ee38adcd1', 'photo-1578749556568-bc2c40e68b61'],
    colors: [
      { name: 'شنی', hex: '#E2D3C0' },
      { name: 'اونیکس', hex: '#3A3234' },
    ],
    inStock: true,
    description:
      'ظرفی کم‌عمق برای میوه، کلید یا هیچ‌چیز. لبه‌اش نرم رها شده، مثل تلماسه در غروب.',
    materials: 'سفال سنگی با لعاب ساتن.',
    dimensions: 'ارتفاع ۹ × قطر ۲۸ سانتی‌متر',
    care: 'در ماشین ظرف‌شویی با برنامه‌ی ملایم قابل شست‌وشو است.',
    added: 5,
  },
  {
    id: 'p-muse-floor-lamp',
    slug: 'muse-floor-lamp',
    name: 'چراغ ایستاده موز',
    category: 'Lighting',
    collection: 'golden-hour',
    price: 6900000,
    rating: 4.9,
    reviewCount: 78,
    photos: ['photo-1540932239986-30128078f3c5', 'photo-1526057565006-20beab8dd2ed'],
    colors: [
      { name: 'زرشکی', hex: '#5B1722' },
      { name: 'فولاد تیره', hex: '#3A3234' },
    ],
    badge: 'Limited',
    inStock: true,
    description:
      'قوسی باریک از نور که به سمت صندلی مطالعه خم می‌شود. فولاد دست‌خم با پوشش لعاب شرابی عمیق.',
    materials: 'فولاد پودرپوش با آباژور کتانی دست‌دوز.',
    dimensions: 'ارتفاع ۱۶۸ × عرض ۴۲ سانتی‌متر · ۸٫۴ کیلوگرم',
    care: 'آباژور را با برس نرم گردگیری کنید. قاب را با پارچه‌ی خشک پاک کنید.',
    added: 4,
  },
  {
    id: 'p-petal-lounge-chair',
    slug: 'petal-lounge-chair',
    name: 'صندلی راحتی گلبرگ',
    category: 'Furniture',
    collection: 'soft-living',
    price: 18500000,
    rating: 4.7,
    reviewCount: 53,
    photos: ['photo-1567538096630-e0c55bd6374c', 'photo-1517705008128-361805f42e86'],
    colors: [
      { name: 'بوکله‌ی کرم', hex: '#EFE6DA' },
      { name: 'رز خاکی', hex: '#C98F91' },
    ],
    inStock: false,
    description:
      'گلبرگ‌های بوکله گرد قاب چوب بلوط را در بر می‌گیرند. کوتاه، راحت و ساخته‌شده برای بعدازظهرهای طولانی.',
    materials: 'قاب بلوط یکپارچه با رویه‌ی بوکله‌ی پشمی.',
    dimensions: 'ارتفاع ۷۴ × عرض ۸۲ × عمق ۸۶ سانتی‌متر',
    care: 'هفته‌ای یک بار با سریِ مبل‌شویی جارو کنید. فقط خشک‌شویی.',
    added: 9,
  },
  {
    id: 'p-amber-glass-candle',
    slug: 'amber-glass-candle',
    name: 'شمع شیشه‌ای عنبر',
    category: 'Decor',
    collection: 'modern-rituals',
    price: 640000,
    rating: 4.9,
    reviewCount: 412,
    photos: ['photo-1602874801007-bd458bb1b8b6', 'photo-1603006905003-be475563bc59'],
    colors: [
      { name: 'عنبر', hex: '#C08A55' },
      { name: 'دودی', hex: '#8A8380' },
    ],
    badge: 'Bestseller',
    inStock: true,
    description:
      'برگ انجیر، سرو و ردی از عنبرِ گرم. دست‌ریخته در ظرف شیشه‌ای قابل استفاده‌ی دوباره.',
    materials: 'موم نارگیل و سویا، فتیله‌ی پنبه‌ای، شیشه‌ی عنبری.',
    dimensions: 'ارتفاع ۱۱ × قطر ۹ سانتی‌متر · ۵۵ ساعت سوخت',
    care: 'پیش از هر بار روشن کردن، فتیله را به ۵ میلی‌متر برسانید. بیش از ۴ ساعت نسوزانید.',
    added: 7,
  },
  {
    id: 'p-ivory-arch-vase',
    slug: 'ivory-arch-vase',
    name: 'گلدان طاق عاج',
    category: 'Vases',
    collection: 'sculptural',
    price: 2150000,
    rating: 4.8,
    reviewCount: 109,
    photos: ['photo-1572853566597-b83cde546912', 'photo-1643569556871-91ec60671ed7'],
    colors: [
      { name: 'عاجی', hex: '#F1E7DD' },
      { name: 'رز محو', hex: '#E8C9C5' },
    ],
    inStock: true,
    description:
      'یک طاق معماری در ابعاد کوچک، با لعاب عاجی نرمی که با تغییر نور بعدازظهر گرم‌تر می‌شود.',
    materials: 'سرامیک دست‌قالب با لعاب نیمه‌مات.',
    dimensions: 'ارتفاع ۳۴ × عرض ۱۶ سانتی‌متر · ۱٫۹ کیلوگرم',
    care: 'با آب گرم و دست بشویید. پیش از استفاده کاملاً خشک کنید.',
    added: 3,
  },
  {
    id: 'p-woven-wall-hanging',
    slug: 'woven-wall-hanging',
    name: 'دیوارکوب بافت',
    category: 'Wall Art',
    collection: 'soft-living',
    price: 2890000,
    rating: 4.6,
    reviewCount: 71,
    photos: ['photo-1519710889408-a67e1c7e0452', 'photo-1616627451515-cbc80e5ece35'],
    colors: [
      { name: 'جو دوسر', hex: '#DCCDBB' },
      { name: 'رز', hex: '#C98F91' },
    ],
    inStock: true,
    description:
      'بافته‌شده روی دارِ سنتی با پشم و پنبه‌ی رنگ‌نشده؛ لبه‌اش مثل پرده می‌افتد.',
    materials: 'پشم و پنبه‌ی رنگ‌نشده روی میله‌ی چوب توس.',
    dimensions: 'عرض ۷۰ × ارتفاع ۹۶ سانتی‌متر',
    care: 'برای زدودن گرد و غبار آرام تکان دهید. شسته نشود.',
    added: 8,
  },
  {
    id: 'p-solstice-pendant',
    slug: 'solstice-pendant',
    name: 'آویز سقفی انقلاب',
    category: 'Lighting',
    collection: 'golden-hour',
    price: 4150000,
    rating: 4.7,
    reviewCount: 94,
    photos: ['photo-1526057565006-20beab8dd2ed', 'photo-1513506003901-1e6a229e2d15'],
    colors: [
      { name: 'برنجی', hex: '#B08D57' },
      { name: 'عاجی', hex: '#EFE7DD' },
    ],
    badge: 'New',
    inStock: true,
    description:
      'گنبدی به نازکی کاغذ که حوضچه‌ای گرم و یکنواخت از نور را روی میز غذاخوری یا گوشه‌ای آرام می‌گستراند.',
    materials: 'آباژور آلومینیوم چرخ‌کاری‌شده با سقف‌پوش برنجی مات.',
    dimensions: 'قطر ۴۵ × ارتفاع ۲۴ سانتی‌متر · ۱٫۴ کیلوگرم، کابل ۲ متر',
    care: 'با پارچه‌ی خشک گردگیری کنید. نصب توسط برق‌کار توصیه می‌شود.',
    added: 2,
  },
  {
    id: 'p-form-sculpture',
    slug: 'form-sculpture-no-2',
    name: 'مجسمه فرم شماره ۲',
    category: 'Sculptures',
    collection: 'sculptural',
    price: 3100000,
    rating: 4.7,
    reviewCount: 46,
    photos: ['photo-1767526202022-8ff4155b5297', 'photo-1493106641515-6b5631de4bb9'],
    colors: [
      { name: 'تراورتن', hex: '#DFCDB8' },
      { name: 'اونیکس', hex: '#3A3234' },
    ],
    inStock: true,
    description:
      'پشته‌ای از فرم‌های نرم‌شده که با دست تراشیده شده‌اند. ساخته شده تا از هر زاویه چرخانده و دوباره دیده شود.',
    materials: 'سنگ آهک دست‌تراش روی پایه‌ی نمدی.',
    dimensions: 'ارتفاع ۲۸ × عرض ۱۶ × عمق ۱۴ سانتی‌متر · ۴٫۱ کیلوگرم',
    care: 'با پارچه‌ی خشک گردگیری کنید. از آب و شوینده‌های اسیدی بپرهیزید.',
    added: 6,
  },
  {
    id: 'p-velvet-rose-throw',
    slug: 'velvet-rose-throw',
    name: 'پتوی مخمل رز',
    category: 'Textiles',
    collection: 'soft-living',
    price: 1690000,
    compareAt: 2290000,
    rating: 4.8,
    reviewCount: 156,
    photos: ['photo-1578500494198-246f612d3b3d', 'photo-1616627451515-cbc80e5ece35'],
    colors: [
      { name: 'رز خاکی', hex: '#C98F91' },
      { name: 'زرشکی', hex: '#5B1722' },
    ],
    inStock: true,
    description:
      'پتوی مخمل پنبه‌ای سبک با ریشه‌های دست‌باف. رنگش همان‌جایی که نور می‌افتد عمیق‌تر می‌شود.',
    materials: '۱۰۰٪ مخمل پنبه‌ای با ریشه‌ی دست‌باف.',
    dimensions: '۱۳۰ × ۱۸۰ سانتی‌متر',
    care: 'فقط خشک‌شویی. پرزها را در یک جهت برس بزنید.',
    added: 5,
  },
  {
    id: 'p-ripple-side-table',
    slug: 'ripple-side-table',
    name: 'میز کنار مبل ریپل',
    category: 'Furniture',
    collection: 'sculptural',
    price: 9800000,
    rating: 4.6,
    reviewCount: 38,
    photos: ['photo-1517705008128-361805f42e86', 'photo-1519710164239-da123dc03ef4'],
    colors: [
      { name: 'خاکستر طبیعی', hex: '#CBB094' },
      { name: 'شرابی', hex: '#5B1722' },
    ],
    inStock: true,
    description:
      'میز کوچکی با لبه‌ی مواج و نرم، بریده از چوب یکپارچه‌ی زبان‌گنجشک. هم‌زمان مبلمان است و هم شیء.',
    materials: 'چوب زبان‌گنجشک یکپارچه با پوشش روغن موم سخت.',
    dimensions: 'ارتفاع ۵۲ × قطر ۴۰ سانتی‌متر · ۷٫۸ کیلوگرم',
    care: 'با پارچه‌ی نمدار پاک کنید. سالی یک بار روغن‌کاری شود.',
    added: 9,
  },
  {
    id: 'p-echo-arch-mirror',
    slug: 'echo-arch-mirror',
    name: 'آینه طاق‌دار اکو',
    category: 'Mirrors',
    collection: 'sculptural',
    price: 4950000,
    rating: 4.8,
    reviewCount: 82,
    photos: ['photo-1617228206053-477863025d9c', 'photo-1639227502880-9f993015fc29'],
    colors: [
      { name: 'عاجی', hex: '#EFE7DD' },
      { name: 'شرابی', hex: '#5B1722' },
    ],
    inStock: true,
    description:
      'طاقی بلند که هر دیوار را شبیه یک ورودی می‌کند. قاب رنگ‌شده با دست و پرداخت مات گچی.',
    materials: 'قاب کاج دست‌رنگ با شیشه‌ی آینه‌ی ۴ میلی‌متری.',
    dimensions: 'ارتفاع ۱۱۰ × عرض ۶۰ × عمق ۳ سانتی‌متر · ۵٫۴ کیلوگرم',
    care: 'با پارچه‌ی نرم و کمی نمدار تمیز کنید.',
    added: 7,
  },
]

export const getProduct = (slug: string) =>
  products.find((product) => product.slug === slug)

export const getProductById = (id: string) =>
  products.find((product) => product.id === id)

export const featuredProducts = [
  'p-orbit-sculpture',
  'p-cloud-table-lamp',
  'p-wavy-ceramic-vase',
  'p-aura-gloss-lamp',
]
  .map(getProductById)
  .filter((product): product is Product => Boolean(product))

export const newArrivals = products
  .filter((product) => product.added <= 3)
  .sort((a, b) => a.added - b.added)

export const bestSellers = products
  .filter((product) => product.reviewCount > 90)
  .sort((a, b) => b.reviewCount - a.reviewCount)

export const PRODUCT_REVIEWS = [
  {
    id: 'r1',
    name: 'نگار م.',
    location: 'تهران',
    rating: 5,
    date: '۲۱ مهر ۱۴۰۵',
    title: 'از نزدیک حتی زیباتر',
    body: 'پرداختش از آنچه در عکس دیده می‌شود نرم‌تر است. بسیار زیبا بسته‌بندی شده بود و همان لحظه اتاق را کامل کرد.',
  },
  {
    id: 'r2',
    name: 'سارا ک.',
    location: 'اصفهان',
    rating: 5,
    date: '۷ مهر ۱۴۰۵',
    title: 'ارزش هر ریالش را دارد',
    body: 'یکی خریدم و برگشتم دومی را هم گرفتم. وزن و کیفیت ساخت دقیقاً همان چیزی است که در این قیمت انتظار داشتم.',
  },
  {
    id: 'r3',
    name: 'امیرحسین ر.',
    location: 'شیراز',
    rating: 4,
    date: '۱۲ شهریور ۱۴۰۵',
    title: 'زیبا، کمی کوچک‌تر از تصورم',
    body: 'قطعه‌ی چشم‌نوازی است و رنگش بی‌نقص. ابعاد را با دقت بخوانید — من بزرگ‌تر تصور کرده بودم، اما به قفسه‌ام می‌آید.',
  },
  {
    id: 'r4',
    name: 'مریم ب.',
    location: 'تبریز',
    rating: 5,
    date: '۲۹ مرداد ۱۴۰۵',
    title: 'فقط بسته‌بندی‌اش',
    body: 'مثل دریافت یک هدیه بود. خود شیء در نور غروب خیره‌کننده است. ارسال چهار روز طول کشید.',
  },
]
