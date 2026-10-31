export type ColorOption = { name: string; hex: string }

export type Review = {
  name: string
  rating: number
  date: string
  title: string
  text: string
}

export type CategoryId =
  | 'dresses'
  | 'tops'
  | 'bottoms'
  | 'blazers'
  | 'shoes'
  | 'bags'
  | 'accessories'

export type Product = {
  id: string
  slug: string
  name: string
  category: CategoryId
  price: number
  compareAt?: number
  badge?: 'New' | 'Bestseller' | 'Limited'
  rating: number
  reviewCount: number
  colors: ColorOption[]
  sizes: string[]
  images: string[]
  description: string
  details: string[]
  stock: number
  added: number
  reviews: Review[]
}

const photo = (id: string, width = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`

export const heroImage = photo('1445205170230-053b83016050', 1400)

export const categories: { id: CategoryId; label: string; image: string }[] = [
  { id: 'dresses', label: 'Dresses', image: photo('1596783074918-c84cb06531ca', 420) },
  { id: 'tops', label: 'Tops', image: photo('1551803091-e20673f15770', 420) },
  { id: 'bottoms', label: 'Bottoms', image: photo('1594633312681-425c7b97ccd1', 420) },
  { id: 'bags', label: 'Bags', image: photo('1590874103328-eac38a683ce7', 420) },
  { id: 'accessories', label: 'Accessories', image: photo('1479064555552-3ef4979f8908', 420) },
  { id: 'blazers', label: 'Blazers', image: photo('1591047139829-d91aecb6caea', 420) },
  { id: 'shoes', label: 'Shoes', image: photo('1519415943484-9fa1873496d4', 420) },
]

export const collections = [
  {
    label: 'The Atelier Edit',
    to: '/shop/blazers',
    image: photo('1445205170230-053b83016050', 700),
  },
  {
    label: 'Quiet Neutrals',
    to: '/shop/tops',
    image: photo('1512436991641-6745cdb1723f', 700),
  },
]

export const categoryLabels: Record<CategoryId, string> = {
  dresses: 'Dresses',
  tops: 'Tops',
  bottoms: 'Bottoms',
  blazers: 'Blazers',
  shoes: 'Shoes',
  bags: 'Bags',
  accessories: 'Accessories',
}

const clothing = ['XS', 'S', 'M', 'L', 'XL']
const shoeSizes = ['36', '37', '38', '39', '40', '41']
const oneSize = ['One size']

const reviewPool: Review[] = [
  {
    name: 'Camille R.',
    rating: 5,
    date: '12 Oct 2026',
    title: 'Beautifully made',
    text: 'The fabric feels far more expensive than the price suggests. It has become the piece I reach for every week.',
  },
  {
    name: 'Sofia M.',
    rating: 5,
    date: '03 Oct 2026',
    title: 'True to size',
    text: 'Fits exactly as described and the colour is softer in person. Shipping was quick and beautifully packaged.',
  },
  {
    name: 'Nadia K.',
    rating: 4,
    date: '27 Sep 2026',
    title: 'Elegant and versatile',
    text: 'A quiet, timeless piece that works from morning to evening. I would love to see it in a deeper taupe too.',
  },
]

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'wrap-midi-dress',
    name: 'Wrap Midi Dress',
    category: 'dresses',
    price: 245,
    compareAt: 298,
    badge: 'Bestseller',
    rating: 4.9,
    reviewCount: 96,
    colors: [
      { name: 'Blush', hex: '#D9A9A2' },
      { name: 'Ivory', hex: '#F1EADF' },
    ],
    sizes: clothing,
    images: [photo('1596783074918-c84cb06531ca'), photo('1502716119720-b23a93e5fe1b')],
    description:
      'A softly wrapped midi with a fluid drape through the body and a gently defined waist. Cut from a matte crepe that moves beautifully and presses well.',
    details: [
      'Mid-weight matte crepe',
      'True wrap with concealed fastening',
      'Fully lined bodice',
      'Dry clean recommended',
    ],
    stock: 6,
    added: 22,
    reviews: reviewPool,
  },
  {
    id: 'p2',
    slug: 'bias-silk-maxi-dress',
    name: 'Bias Silk Maxi Dress',
    category: 'dresses',
    price: 215,
    badge: 'New',
    rating: 4.7,
    reviewCount: 41,
    colors: [
      { name: 'Terracotta', hex: '#B4562F' },
      { name: 'Ivory', hex: '#F1EADF' },
    ],
    sizes: clothing,
    images: [photo('1595777457583-95e059d581b8'), photo('1596783074918-c84cb06531ca')],
    description:
      'Cut on the bias for a long, easy line that skims rather than clings. Featherweight silk, finished with a fine rolled hem.',
    details: ['100% silk crêpe de chine', 'Bias cut, slips on', 'Adjustable shoulder straps', 'Dry clean only'],
    stock: 9,
    added: 21,
    reviews: reviewPool.slice(1),
  },
  {
    id: 'p3',
    slug: 'polka-midi-dress',
    name: 'Polka Midi Dress',
    category: 'dresses',
    price: 189,
    rating: 4.6,
    reviewCount: 33,
    colors: [
      { name: 'Clay', hex: '#A8412F' },
      { name: 'Ivory', hex: '#F1EADF' },
    ],
    sizes: clothing,
    images: [photo('1502716119720-b23a93e5fe1b'), photo('1595777457583-95e059d581b8')],
    description:
      'A print we return to each season — softly scattered by hand and printed on a light, breathable viscose.',
    details: ['Viscose and linen blend', 'Midi length, A-line skirt', 'Side seam pockets', 'Machine wash cold'],
    stock: 14,
    added: 16,
    reviews: reviewPool.slice(0, 2),
  },
  {
    id: 'p4',
    slug: 'ribbed-knit-cardigan',
    name: 'Ribbed Knit Cardigan',
    category: 'tops',
    price: 89,
    badge: 'New',
    rating: 4.8,
    reviewCount: 42,
    colors: [
      { name: 'Oat', hex: '#E5DACA' },
      { name: 'Taupe', hex: '#B7A99A' },
      { name: 'Black', hex: '#171717' },
    ],
    sizes: clothing,
    images: [photo('1512436991641-6745cdb1723f'), photo('1445205170230-053b83016050')],
    description:
      'An open, softly ribbed knit in a relaxed silhouette that drapes without clinging. Layer it over silk or denim.',
    details: [
      '70% wool, 30% cashmere',
      'Relaxed, dropped-shoulder fit',
      'Hand wash cold, dry flat',
      'Model is 177cm and wears a size S',
    ],
    stock: 12,
    added: 20,
    reviews: reviewPool.slice(0, 2),
  },
  {
    id: 'p5',
    slug: 'classic-poplin-shirt',
    name: 'Classic Poplin Shirt',
    category: 'tops',
    price: 79,
    badge: 'Bestseller',
    rating: 4.9,
    reviewCount: 128,
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Ivory', hex: '#F1EADF' },
    ],
    sizes: clothing,
    images: [photo('1490481651871-ab68de25d43d'), photo('1434389677669-e08b4cac3105')],
    description:
      'Our signature shirt, cut from crisp cotton poplin with a clean point collar and a gently curved hem. The quiet foundation of a wardrobe.',
    details: ['100% organic cotton poplin', 'Relaxed fit, true to size', 'Mother-of-pearl buttons', 'Machine wash cold'],
    stock: 24,
    added: 18,
    reviews: reviewPool.slice(1),
  },
  {
    id: 'p6',
    slug: 'cotton-logo-tee',
    name: 'Cotton Logo Tee',
    category: 'tops',
    price: 45,
    rating: 4.4,
    reviewCount: 57,
    colors: [
      { name: 'Ash', hex: '#B6B4B0' },
      { name: 'Ivory', hex: '#F1EADF' },
    ],
    sizes: clothing,
    images: [photo('1554568218-0f1715e72254'), photo('1620799140408-edc6dcb6d633')],
    description:
      'A heavyweight organic cotton tee with a soft, broken-in hand feel and our quiet studio print at the chest.',
    details: ['220gsm organic cotton', 'Relaxed unisex cut', 'Ribbed crew neck', 'Machine wash cold'],
    stock: 30,
    added: 13,
    reviews: reviewPool.slice(0, 2),
  },
  {
    id: 'p7',
    slug: 'lace-camisole',
    name: 'Lace Camisole',
    category: 'tops',
    price: 69,
    rating: 4.5,
    reviewCount: 24,
    colors: [
      { name: 'Cobalt', hex: '#33418F' },
      { name: 'Sand', hex: '#D8CBBE' },
    ],
    sizes: clothing,
    images: [photo('1551803091-e20673f15770'), photo('1523381210434-271e8be1f52b')],
    description:
      'A fine-gauge lace camisole with a softly scooped neck, designed to sit under tailoring or on its own after dark.',
    details: ['Stretch floral lace', 'Adjustable straps', 'Fully lined front', 'Hand wash cold'],
    stock: 17,
    added: 11,
    reviews: reviewPool.slice(1),
  },
  {
    id: 'p8',
    slug: 'high-rise-straight-denim',
    name: 'High-Rise Straight Denim',
    category: 'bottoms',
    price: 119,
    badge: 'Bestseller',
    rating: 4.5,
    reviewCount: 88,
    colors: [
      { name: 'Ecru', hex: '#E8E1D5' },
      { name: 'Indigo', hex: '#5C6B7A' },
    ],
    sizes: clothing,
    images: [photo('1434389677669-e08b4cac3105'), photo('1525507119028-ed4c629a60a3')],
    description:
      'Rigid cotton denim in a clean straight leg with a high waist. Breaks in beautifully and pairs with everything you own.',
    details: ['100% cotton denim', 'High rise, straight leg', 'Ankle length hem', 'Machine wash cold inside out'],
    stock: 21,
    added: 12,
    reviews: reviewPool.slice(0, 2),
  },
  {
    id: 'p9',
    slug: 'tailored-wide-leg-trousers',
    name: 'Tailored Wide-Leg Trousers',
    category: 'bottoms',
    price: 129,
    rating: 4.8,
    reviewCount: 64,
    colors: [
      { name: 'Rose', hex: '#D3A79C' },
      { name: 'Taupe', hex: '#B7A99A' },
    ],
    sizes: clothing,
    images: [photo('1594633312681-425c7b97ccd1'), photo('1524250502761-1ac6f2e30d43')],
    description:
      'High-rise trousers with a fluid wide leg and a pressed crease. Cut from a supple wool blend that holds its line all day.',
    details: ['Wool-blend suiting', 'High rise, wide leg', 'Hook and bar closure', 'Dry clean'],
    stock: 18,
    added: 17,
    reviews: reviewPool.slice(0, 2),
  },
  {
    id: 'p10',
    slug: 'cropped-bomber-jacket',
    name: 'Cropped Bomber Jacket',
    category: 'blazers',
    price: 169,
    badge: 'New',
    rating: 4.6,
    reviewCount: 26,
    colors: [
      { name: 'Rose', hex: '#C48B7F' },
      { name: 'Stone', hex: '#CFC6B8' },
    ],
    sizes: clothing,
    images: [photo('1591047139829-d91aecb6caea'), photo('1512436991641-6745cdb1723f')],
    description:
      'A soft, garment-washed bomber with a cropped boxy cut and clean utility detailing. Layer it over knitwear through the cooler months.',
    details: ['Washed cotton twill', 'Cropped boxy fit', 'Concealed zip placket', 'Machine wash cold'],
    stock: 11,
    added: 19,
    reviews: reviewPool.slice(1),
  },
  {
    id: 'p11',
    slug: 'wool-overcoat',
    name: 'Wool Overcoat',
    category: 'blazers',
    price: 289,
    badge: 'Bestseller',
    rating: 4.9,
    reviewCount: 72,
    colors: [
      { name: 'Slate', hex: '#7C8A97' },
      { name: 'Camel', hex: '#C4A57F' },
    ],
    sizes: clothing,
    images: [photo('1539109136881-3be0616acf4b'), photo('1445205170230-053b83016050')],
    description:
      'An elongated, softly structured coat with a single-button front and a generous lapel. Tailoring that feels like a favourite sweater.',
    details: ['Italian wool blend', 'Oversized, elongated fit', 'Full cupro lining', 'Dry clean only'],
    stock: 7,
    added: 15,
    reviews: reviewPool,
  },
  {
    id: 'p12',
    slug: 'leather-court-sneakers',
    name: 'Leather Court Sneakers',
    category: 'shoes',
    price: 135,
    rating: 4.6,
    reviewCount: 64,
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Off-white', hex: '#EFEAE1' },
    ],
    sizes: shoeSizes,
    images: [photo('1608231387042-66d1773070a5'), photo('1620799140408-edc6dcb6d633')],
    description:
      'A minimal court sneaker in soft nappa leather with a slim, tonal sole. The everyday shoe that works with tailoring as easily as denim.',
    details: ['Nappa leather upper', 'Leather lining', 'Rubber sole', 'Made in Portugal'],
    stock: 26,
    added: 8,
    reviews: reviewPool.slice(0, 2),
  },
  {
    id: 'p13',
    slug: 'pointed-court-heels',
    name: 'Pointed Court Heels',
    category: 'shoes',
    price: 155,
    badge: 'New',
    rating: 4.8,
    reviewCount: 39,
    colors: [
      { name: 'Noir', hex: '#171717' },
      { name: 'Nude', hex: '#D7BFA8' },
    ],
    sizes: shoeSizes,
    images: [photo('1596703263926-eb0762ee17e4'), photo('1564859228273-274232fdb516')],
    description:
      'A timeless pointed court with a 65mm heel and a softly cushioned footbed. Elegant enough for the evening, comfortable enough for the day.',
    details: ['Smooth calf leather', '65mm covered heel', 'Cushioned leather insole', 'Made in Italy'],
    stock: 14,
    added: 20,
    reviews: reviewPool.slice(1),
  },
  {
    id: 'p14',
    slug: 'slingback-leather-heels',
    name: 'Slingback Leather Heels',
    category: 'shoes',
    price: 125,
    rating: 4.4,
    reviewCount: 47,
    colors: [
      { name: 'Tan', hex: '#C89A6B' },
      { name: 'Noir', hex: '#171717' },
    ],
    sizes: shoeSizes,
    images: [photo('1519415943484-9fa1873496d4'), photo('1564859228273-274232fdb516')],
    description:
      'A slender slingback in supple nude leather, set on a low sculpted heel. The everyday heel that works with tailoring and denim alike.',
    details: ['Soft nappa leather', '45mm sculpted heel', 'Cushioned leather insole', 'Made in Spain'],
    stock: 19,
    added: 9,
    reviews: reviewPool.slice(0, 2),
  },
  {
    id: 'p15',
    slug: 'suede-ankle-boots',
    name: 'Suede Ankle Boots',
    category: 'shoes',
    price: 189,
    compareAt: 219,
    badge: 'Bestseller',
    rating: 4.7,
    reviewCount: 51,
    colors: [
      { name: 'Tobacco', hex: '#9C6B4A' },
      { name: 'Noir', hex: '#171717' },
    ],
    sizes: shoeSizes,
    images: [photo('1524250502761-1ac6f2e30d43'), photo('1479064555552-3ef4979f8908')],
    description:
      'A slim suede boot with a sculpted block heel and an almond toe. Designed to sit under tailoring and over denim alike.',
    details: ['Calf suede upper', '50mm block heel', 'Side zip', 'Leather sole with rubber insert'],
    stock: 10,
    added: 14,
    reviews: reviewPool.slice(0, 2),
  },
  {
    id: 'p16',
    slug: 'woven-leather-tote',
    name: 'Woven Leather Tote',
    category: 'bags',
    price: 219,
    badge: 'New',
    rating: 4.6,
    reviewCount: 34,
    colors: [
      { name: 'Camel', hex: '#C89B6D' },
      { name: 'Ivory', hex: '#F1EADF' },
    ],
    sizes: oneSize,
    images: [photo('1590874103328-eac38a683ce7'), photo('1591561954557-26941169b49e')],
    description:
      'Hand-woven leather panels give this unstructured tote its soft, generous shape. Roomy enough for a laptop and a day out.',
    details: ['Hand-woven calf leather', 'Magnetic closure', 'Cotton twill lining', 'Fits a 14" laptop'],
    stock: 8,
    added: 20,
    reviews: reviewPool.slice(1),
  },
  {
    id: 'p17',
    slug: 'quilted-chain-bag',
    name: 'Quilted Chain Bag',
    category: 'bags',
    price: 289,
    badge: 'Bestseller',
    rating: 4.9,
    reviewCount: 83,
    colors: [
      { name: 'Noir', hex: '#171717' },
      { name: 'Bone', hex: '#E7DFD2' },
    ],
    sizes: oneSize,
    images: [photo('1548036328-c9fa89d128fa'), photo('1584917865442-de89df76afd3')],
    description:
      'Diamond-quilted leather, a fine gold chain and just enough room for the essentials. The evening bag that works with everything.',
    details: ['Quilted lambskin', 'Gold-tone hardware', 'Detachable chain strap', 'Interior card slot'],
    stock: 5,
    added: 18,
    reviews: reviewPool,
  },
  {
    id: 'p18',
    slug: 'floral-clasp-bag',
    name: 'Floral Clasp Bag',
    category: 'bags',
    price: 159,
    rating: 4.5,
    reviewCount: 29,
    colors: [
      { name: 'Bloom', hex: '#DCC3B4' },
      { name: 'Ivory', hex: '#F1EADF' },
    ],
    sizes: oneSize,
    images: [photo('1591561954557-26941169b49e'), photo('1590874103328-eac38a683ce7')],
    description:
      'A small structured bag with a polished clasp and a printed panel that catches the light. Made in a limited run.',
    details: ['Printed coated leather', 'Gold-tone clasp', 'Detachable chain strap', 'Suede lining'],
    stock: 6,
    added: 10,
    reviews: reviewPool.slice(0, 2),
  },
  {
    id: 'p19',
    slug: 'slim-leather-belt',
    name: 'Slim Leather Belt',
    category: 'accessories',
    price: 65,
    rating: 4.6,
    reviewCount: 22,
    colors: [
      { name: 'Cognac', hex: '#9A6239' },
      { name: 'Noir', hex: '#171717' },
    ],
    sizes: oneSize,
    images: [photo('1479064555552-3ef4979f8908'), photo('1524250502761-1ac6f2e30d43')],
    description:
      'A narrow calf-leather belt with a brushed square buckle. Hand-finished in Spain and designed to sit at the natural waist.',
    details: ['Full-grain calf leather', '25mm strap width', 'Brushed brass buckle', 'Made in Spain'],
    stock: 23,
    added: 7,
    reviews: reviewPool.slice(1),
  },
  {
    id: 'p20',
    slug: 'oval-sunglasses',
    name: 'Oval Sunglasses',
    category: 'accessories',
    price: 105,
    rating: 4.4,
    reviewCount: 18,
    colors: [
      { name: 'Tortoise', hex: '#8A5A38' },
      { name: 'Noir', hex: '#171717' },
    ],
    sizes: oneSize,
    images: [photo('1490114538077-0a7f8cb49891'), photo('1524250502761-1ac6f2e30d43')],
    description:
      'A softened oval frame in hand-polished acetate with a subtle bevel. Lightweight enough to forget you are wearing them.',
    details: ['Italian acetate frame', 'CR-39 lenses, 100% UV', 'Includes leather case', 'Hand finished'],
    stock: 16,
    added: 6,
    reviews: reviewPool.slice(0, 2),
  },
]

export const promoBanners = [
  {
    eyebrow: 'Up to 30% off',
    title: 'Summer Essentials',
    subtitle: 'Light. Effortless. Essential.',
    cta: 'Shop now',
    to: '/shop/dresses',
    image: photo('1595777457583-95e059d581b8', 1200),
    tone: 'dark' as const,
  },
  {
    eyebrow: 'The finishing touch',
    title: 'Accessory Edit',
    subtitle: 'The finishing touch you deserve.',
    cta: 'Shop accessories',
    to: '/shop/bags',
    image: photo('1590874103328-eac38a683ce7', 1200),
    tone: 'light' as const,
  },
]

export const testimonials = [
  {
    name: 'Sophia L.',
    location: 'London, UK',
    rating: 5,
    quote:
      'Every piece feels considered — the fabrics, the fit, the packaging. It is the first brand I check when I want something I will keep for years.',
    avatar: photo('1494790108377-be9c29b29330', 120),
  },
  {
    name: 'Jessica M.',
    location: 'Melbourne, AU',
    rating: 5,
    quote:
      'The wool coat is the best tailored piece I own. Ordering from the other side of the world was effortless and it arrived in four days.',
    avatar: photo('1487412720507-e7ab37603c6f', 120),
  },
  {
    name: 'Ava T.',
    location: 'Copenhagen, DK',
    rating: 5,
    quote:
      'Quiet, beautiful clothes that actually work in a real wardrobe. I have worn the poplin shirt at least twice a week since it arrived.',
    avatar: photo('1544005313-94ddf0286df2', 120),
  },
  {
    name: 'Isabelle R.',
    location: 'Paris, FR',
    rating: 5,
    quote:
      'The knitwear is exceptional — soft, weighty and beautifully finished. It looks far more expensive than it is.',
    avatar: photo('1531746020798-e6953c6e8e04', 120),
  },
  {
    name: 'Maya K.',
    location: 'New York, US',
    rating: 5,
    quote:
      'Returns were simple and the team answered within the hour. A rare thing to find at this price point.',
    avatar: photo('1529139574466-a303027c1d8b', 120),
  },
  {
    name: 'Elena P.',
    location: 'Milan, IT',
    rating: 5,
    quote:
      'I have replaced half my wardrobe with DEVA pieces. They are the clothes I reach for without thinking.',
    avatar: photo('1517841905240-472988babdf9', 120),
  },
]

export const instagramPosts = [
  { image: photo('1512436991641-6745cdb1723f', 500), caption: 'The rail, mid-season.' },
  { image: photo('1525507119028-ed4c629a60a3', 500), caption: 'Poplin and denim, styled three ways.' },
  { image: photo('1620799140408-edc6dcb6d633', 500), caption: 'Off-duty tailoring.' },
  { image: photo('1524250502761-1ac6f2e30d43', 500), caption: 'What we pack for a weekend.' },
  { image: photo('1567401893414-76b7b1e5a7a5', 500), caption: 'Inside the studio.' },
  { image: photo('1479064555552-3ef4979f8908', 500), caption: 'The details we obsess over.' },
  { image: photo('1523381210434-271e8be1f52b', 500), caption: 'New season, undyed.' },
]

export function productBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}

export function productById(id: string) {
  return products.find((product) => product.id === id)
}
