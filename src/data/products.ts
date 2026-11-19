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
  badge?: 'New' | 'Bestseller' | 'Limited'
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
    name: 'Orbit Sculpture',
    category: 'Sculptures',
    collection: 'sculptural',
    price: 148,
    rating: 4.9,
    reviewCount: 214,
    photos: ['photo-1707248985080-954ad8466006', 'photo-1707054437518-dfd402977b03'],
    colors: [
      { name: 'Ivory', hex: '#EFE4D8' },
      { name: 'Blush', hex: '#E8C9C5' },
      { name: 'Onyx', hex: '#3A3234' },
    ],
    badge: 'Bestseller',
    inStock: true,
    description:
      'A quiet study in balance. Two hand-thrown spheres meet in a single continuous curve, catching the light as it moves across a room.',
    materials: 'Hand-finished stoneware with a matte mineral glaze.',
    dimensions: 'H 32 cm × W 21 cm × D 18 cm · 2.4 kg',
    care: 'Dust with a soft dry cloth. Keep out of direct sunlight.',
    added: 8,
  },
  {
    id: 'p-cloud-table-lamp',
    slug: 'cloud-table-lamp',
    name: 'Cloud Table Lamp',
    category: 'Lighting',
    collection: 'golden-hour',
    price: 219,
    compareAt: 249,
    rating: 4.8,
    reviewCount: 386,
    photos: ['photo-1513506003901-1e6a229e2d15', 'photo-1507473885765-e6ed057f782c'],
    colors: [
      { name: 'Warm Ivory', hex: '#F3E9DD' },
      { name: 'Dusty Rose', hex: '#C98F91' },
    ],
    badge: 'Bestseller',
    inStock: true,
    description:
      'Diffused, weightless light shaped like a passing cloud. A dimmable glow for bedside rituals and late reading.',
    materials: 'Blown opal glass diffuser on a brushed brass base.',
    dimensions: 'H 38 cm × Ø 26 cm · 1.8 kg',
    care: 'Wipe with a soft dry cloth. Use a warm LED bulb, max 40W.',
    added: 6,
  },
  {
    id: 'p-wavy-ceramic-vase',
    slug: 'wavy-ceramic-vase',
    name: 'Wavy Ceramic Vase',
    category: 'Vases',
    collection: 'organic-forms',
    price: 86,
    rating: 4.7,
    reviewCount: 168,
    photos: ['photo-1612196808214-b8e1d6145a8c', 'photo-1572853566597-b83cde546912'],
    colors: [
      { name: 'Chalk', hex: '#F2ECE4' },
      { name: 'Terracotta', hex: '#B4695A' },
    ],
    badge: 'New',
    inStock: true,
    description:
      'An undulating silhouette pulled by hand, so no two are quite alike. Beautiful empty, better with a single stem.',
    materials: 'Hand-built ceramic with a chalky matte glaze.',
    dimensions: 'H 26 cm × Ø 14 cm · 1.2 kg',
    care: 'Hand wash. Not dishwasher safe.',
    added: 2,
  },
  {
    id: 'p-aura-gloss-lamp',
    slug: 'aura-gloss-lamp',
    name: 'Aura Gloss Lamp',
    category: 'Lighting',
    collection: 'golden-hour',
    price: 264,
    rating: 4.9,
    reviewCount: 132,
    photos: ['photo-1565814329452-e1efa11c5b89', 'photo-1540932239986-30128078f3c5'],
    colors: [
      { name: 'Burgundy', hex: '#5B1722' },
      { name: 'Champagne', hex: '#D9C3A3' },
    ],
    badge: 'Limited',
    inStock: true,
    description:
      'A sculptural column of lacquered light. The high-gloss finish reflects its surroundings like still water.',
    materials: 'Lacquered aluminium with a linen shade.',
    dimensions: 'H 52 cm × Ø 30 cm · 3.1 kg',
    care: 'Dust with a dry microfibre cloth. Avoid abrasive cleaners.',
    added: 5,
  },
  {
    id: 'p-arco-stone-vase',
    slug: 'arco-stone-vase',
    name: 'Arco Stone Vase',
    category: 'Vases',
    collection: 'organic-forms',
    price: 112,
    rating: 4.6,
    reviewCount: 96,
    photos: ['photo-1613424777445-f93a2a48e285', 'photo-1643569556871-91ec60671ed7'],
    colors: [
      { name: 'Sand', hex: '#DFCDB8' },
      { name: 'Slate', hex: '#7A7773' },
    ],
    inStock: true,
    description:
      'Carved from a single block of stone, the Arco balances a heavy base with an improbable arch of negative space.',
    materials: 'Solid travertine with a honed finish.',
    dimensions: 'H 30 cm × W 18 cm × D 12 cm · 3.6 kg',
    care: 'Wipe with a damp cloth. Seal annually with stone oil.',
    added: 7,
  },
  {
    id: 'p-halo-wall-mirror',
    slug: 'halo-wall-mirror',
    name: 'Halo Wall Mirror',
    category: 'Mirrors',
    collection: 'soft-living',
    price: 298,
    rating: 4.8,
    reviewCount: 141,
    photos: ['photo-1619378396304-7ef156537d7e', 'photo-1617228206053-477863025d9c'],
    colors: [
      { name: 'Brass', hex: '#B08D57' },
      { name: 'Ivory', hex: '#EDE3D7' },
    ],
    inStock: true,
    description:
      'A perfect circle framed by a whisper of brass. It softens a hallway and doubles the light in a small room.',
    materials: 'Hand-brushed brass frame with 5 mm bevelled glass.',
    dimensions: 'Ø 70 cm × D 4 cm · 6.2 kg',
    care: 'Clean glass with a non-ammonia cleaner. Polish frame twice a year.',
    added: 4,
  },
  {
    id: 'p-linen-cloud-cushion',
    slug: 'linen-cloud-cushion',
    name: 'Linen Cloud Cushion',
    category: 'Textiles',
    collection: 'soft-living',
    price: 64,
    rating: 4.7,
    reviewCount: 302,
    photos: ['photo-1611489704434-2612dc89c992', 'photo-1611489704164-6f73c62bd810'],
    colors: [
      { name: 'Blush', hex: '#E8C9C5' },
      { name: 'Oat', hex: '#DCCDBB' },
      { name: 'Wine', hex: '#5B1722' },
    ],
    inStock: true,
    description:
      'Washed European linen with a relaxed, lived-in hand. Generously filled so it holds its shape on a sofa.',
    materials: '100% stonewashed linen cover with recycled microfibre fill.',
    dimensions: '50 × 50 cm',
    care: 'Machine wash cold on a gentle cycle. Line dry.',
    added: 3,
  },
  {
    id: 'p-terracotta-planter',
    slug: 'terracotta-planter',
    name: 'Terracotta Planter',
    category: 'Planters',
    collection: 'organic-forms',
    price: 72,
    rating: 4.5,
    reviewCount: 87,
    photos: ['photo-1583078603507-65d00910f610', 'photo-1513161455079-7dc1de15ef3e'],
    colors: [
      { name: 'Terracotta', hex: '#B4695A' },
      { name: 'Chalk', hex: '#EFE7DD' },
    ],
    inStock: true,
    description:
      'Thrown on a wheel and left slightly imperfect. The unglazed exterior breathes with the plant it holds.',
    materials: 'Unglazed natural terracotta with a drainage hole.',
    dimensions: 'H 24 cm × Ø 22 cm · 2.1 kg',
    care: 'Rinse before planting. Patina will develop naturally.',
    added: 6,
  },
  {
    id: 'p-linea-wall-art',
    slug: 'linea-wall-art',
    name: 'Linea Wall Art',
    category: 'Wall Art',
    collection: 'modern-rituals',
    price: 186,
    rating: 4.8,
    reviewCount: 64,
    photos: ['photo-1618220048045-10a6dbdf83e0', 'photo-1484101403633-562f891dc89a'],
    colors: [
      { name: 'Natural Oak', hex: '#C9AE8C' },
      { name: 'Wine', hex: '#5B1722' },
    ],
    badge: 'New',
    inStock: true,
    description:
      'A single continuous line, gilded by hand on textured cotton paper. Quiet from afar, alive up close.',
    materials: 'Archival cotton paper, oak frame, museum glass.',
    dimensions: '60 × 80 cm framed',
    care: 'Hang away from direct sunlight. Dust the frame only.',
    added: 1,
  },
  {
    id: 'p-dune-ceramic-bowl',
    slug: 'dune-ceramic-bowl',
    name: 'Dune Ceramic Bowl',
    category: 'Decor',
    collection: 'organic-forms',
    price: 58,
    rating: 4.6,
    reviewCount: 121,
    photos: ['photo-1721328004336-c19ee38adcd1', 'photo-1578749556568-bc2c40e68b61'],
    colors: [
      { name: 'Sand', hex: '#E2D3C0' },
      { name: 'Onyx', hex: '#3A3234' },
    ],
    inStock: true,
    description:
      'A shallow vessel for fruit, keys, or nothing at all. Its rim is left soft, like a dune at dusk.',
    materials: 'Stoneware with a satin glaze.',
    dimensions: 'H 9 cm × Ø 28 cm',
    care: 'Dishwasher safe on a gentle cycle.',
    added: 5,
  },
  {
    id: 'p-muse-floor-lamp',
    slug: 'muse-floor-lamp',
    name: 'Muse Floor Lamp',
    category: 'Lighting',
    collection: 'golden-hour',
    price: 342,
    rating: 4.9,
    reviewCount: 78,
    photos: ['photo-1540932239986-30128078f3c5', 'photo-1526057565006-20beab8dd2ed'],
    colors: [
      { name: 'Burgundy', hex: '#5B1722' },
      { name: 'Blackened Steel', hex: '#3A3234' },
    ],
    badge: 'Limited',
    inStock: true,
    description:
      'A slender arch of light that leans into a reading chair. Hand-bent steel, finished in a deep wine enamel.',
    materials: 'Powder-coated steel with a hand-stitched linen shade.',
    dimensions: 'H 168 cm × W 42 cm · 8.4 kg',
    care: 'Dust the shade with a soft brush. Wipe the frame with a dry cloth.',
    added: 4,
  },
  {
    id: 'p-petal-lounge-chair',
    slug: 'petal-lounge-chair',
    name: 'Petal Lounge Chair',
    category: 'Furniture',
    collection: 'soft-living',
    price: 690,
    rating: 4.7,
    reviewCount: 53,
    photos: ['photo-1567538096630-e0c55bd6374c', 'photo-1517705008128-361805f42e86'],
    colors: [
      { name: 'Cream Bouclé', hex: '#EFE6DA' },
      { name: 'Dusty Rose', hex: '#C98F91' },
    ],
    inStock: false,
    description:
      'Petals of bouclé curve around a solid oak frame. Low, generous, and made for long afternoons.',
    materials: 'Solid oak frame upholstered in wool bouclé.',
    dimensions: 'H 74 cm × W 82 cm × D 86 cm',
    care: 'Vacuum weekly with an upholstery attachment. Professional clean only.',
    added: 9,
  },
  {
    id: 'p-amber-glass-candle',
    slug: 'amber-glass-candle',
    name: 'Amber Glass Candle',
    category: 'Decor',
    collection: 'modern-rituals',
    price: 46,
    rating: 4.9,
    reviewCount: 412,
    photos: ['photo-1602874801007-bd458bb1b8b6', 'photo-1603006905003-be475563bc59'],
    colors: [
      { name: 'Amber', hex: '#C08A55' },
      { name: 'Smoke', hex: '#8A8380' },
    ],
    badge: 'Bestseller',
    inStock: true,
    description:
      'Fig leaf, cedar and a trace of warm amber. Poured by hand into a reusable glass vessel.',
    materials: 'Coconut-soy wax, cotton wick, amber glass.',
    dimensions: 'H 11 cm × Ø 9 cm · 55 hour burn',
    care: 'Trim the wick to 5 mm before each burn. Never burn for more than 4 hours.',
    added: 7,
  },
  {
    id: 'p-ivory-arch-vase',
    slug: 'ivory-arch-vase',
    name: 'Ivory Arch Vase',
    category: 'Vases',
    collection: 'sculptural',
    price: 124,
    rating: 4.8,
    reviewCount: 109,
    photos: ['photo-1572853566597-b83cde546912', 'photo-1643569556871-91ec60671ed7'],
    colors: [
      { name: 'Ivory', hex: '#F1E7DD' },
      { name: 'Blush', hex: '#E8C9C5' },
    ],
    inStock: true,
    description:
      'An architectural arch in miniature, glazed in a soft ivory that warms as the afternoon light shifts.',
    materials: 'Hand-cast ceramic with a semi-matte glaze.',
    dimensions: 'H 34 cm × W 16 cm · 1.9 kg',
    care: 'Hand wash with warm water. Dry fully before use.',
    added: 3,
  },
  {
    id: 'p-woven-wall-hanging',
    slug: 'woven-wall-hanging',
    name: 'Woven Wall Hanging',
    category: 'Wall Art',
    collection: 'soft-living',
    price: 158,
    rating: 4.6,
    reviewCount: 71,
    photos: ['photo-1519710889408-a67e1c7e0452', 'photo-1616627451515-cbc80e5ece35'],
    colors: [
      { name: 'Oat', hex: '#DCCDBB' },
      { name: 'Rose', hex: '#C98F91' },
    ],
    inStock: true,
    description:
      'Woven on a traditional floor loom in undyed wool and cotton, with an edge that falls like a curtain.',
    materials: 'Undyed wool and cotton on a birch dowel.',
    dimensions: 'W 70 cm × H 96 cm',
    care: 'Shake gently to release dust. Do not wash.',
    added: 8,
  },
  {
    id: 'p-solstice-pendant',
    slug: 'solstice-pendant',
    name: 'Solstice Pendant',
    category: 'Lighting',
    collection: 'golden-hour',
    price: 228,
    rating: 4.7,
    reviewCount: 94,
    photos: ['photo-1526057565006-20beab8dd2ed', 'photo-1513506003901-1e6a229e2d15'],
    colors: [
      { name: 'Brass', hex: '#B08D57' },
      { name: 'Ivory', hex: '#EFE7DD' },
    ],
    badge: 'New',
    inStock: true,
    description:
      'A paper-thin dome that throws a warm, even pool of light over a dining table or a quiet corner.',
    materials: 'Spun aluminium shade with a brushed brass canopy.',
    dimensions: 'Ø 45 cm × H 24 cm · 1.4 kg cable 2 m',
    care: 'Dust with a dry cloth. Professional installation recommended.',
    added: 2,
  },
  {
    id: 'p-form-sculpture',
    slug: 'form-sculpture-no-2',
    name: 'Form Sculpture No. 2',
    category: 'Sculptures',
    collection: 'sculptural',
    price: 176,
    rating: 4.7,
    reviewCount: 46,
    photos: ['photo-1767526202022-8ff4155b5297', 'photo-1493106641515-6b5631de4bb9'],
    colors: [
      { name: 'Travertine', hex: '#DFCDB8' },
      { name: 'Onyx', hex: '#3A3234' },
    ],
    inStock: true,
    description:
      'A stack of softened forms, carved by hand. Meant to be turned and reconsidered from every angle.',
    materials: 'Hand-carved limestone on a felt base.',
    dimensions: 'H 28 cm × W 16 cm × D 14 cm · 4.1 kg',
    care: 'Dust with a dry cloth. Avoid water and acidic cleaners.',
    added: 6,
  },
  {
    id: 'p-velvet-rose-throw',
    slug: 'velvet-rose-throw',
    name: 'Velvet Rose Throw',
    category: 'Textiles',
    collection: 'soft-living',
    price: 98,
    compareAt: 128,
    rating: 4.8,
    reviewCount: 156,
    photos: ['photo-1578500494198-246f612d3b3d', 'photo-1616627451515-cbc80e5ece35'],
    colors: [
      { name: 'Dusty Rose', hex: '#C98F91' },
      { name: 'Burgundy', hex: '#5B1722' },
    ],
    inStock: true,
    description:
      'A featherweight cotton velvet throw with a hand-knotted fringe. The colour deepens where the light falls.',
    materials: '100% cotton velvet with hand-knotted fringe.',
    dimensions: '130 × 180 cm',
    care: 'Dry clean only. Brush the pile in one direction.',
    added: 5,
  },
  {
    id: 'p-ripple-side-table',
    slug: 'ripple-side-table',
    name: 'Ripple Side Table',
    category: 'Furniture',
    collection: 'sculptural',
    price: 420,
    rating: 4.6,
    reviewCount: 38,
    photos: ['photo-1517705008128-361805f42e86', 'photo-1519710164239-da123dc03ef4'],
    colors: [
      { name: 'Natural Ash', hex: '#CBB094' },
      { name: 'Wine', hex: '#5B1722' },
    ],
    inStock: true,
    description:
      'A small table with a softly rippled edge, cut from solid ash. It reads as furniture and object at once.',
    materials: 'Solid ash with a natural hardwax oil finish.',
    dimensions: 'H 52 cm × Ø 40 cm · 7.8 kg',
    care: 'Wipe with a damp cloth. Re-oil once a year.',
    added: 9,
  },
  {
    id: 'p-echo-arch-mirror',
    slug: 'echo-arch-mirror',
    name: 'Echo Arch Mirror',
    category: 'Mirrors',
    collection: 'sculptural',
    price: 254,
    rating: 4.8,
    reviewCount: 82,
    photos: ['photo-1617228206053-477863025d9c', 'photo-1639227502880-9f993015fc29'],
    colors: [
      { name: 'Ivory', hex: '#EFE7DD' },
      { name: 'Wine', hex: '#5B1722' },
    ],
    inStock: true,
    description:
      'A tall arch that makes any wall feel like a doorway. The painted frame is finished by hand in a chalky matte.',
    materials: 'Hand-painted pine frame with 4 mm mirror glass.',
    dimensions: 'H 110 cm × W 60 cm × D 3 cm · 5.4 kg',
    care: 'Clean with a soft, slightly damp cloth.',
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
    name: 'Amelia R.',
    location: 'Copenhagen',
    rating: 5,
    date: '12 October 2026',
    title: 'Even lovelier in person',
    body: 'The finish is so much softer than it photographs. It arrived beautifully wrapped and instantly made the room feel finished.',
  },
  {
    id: 'r2',
    name: 'Julien M.',
    location: 'Paris',
    rating: 5,
    date: '28 September 2026',
    title: 'Worth every penny',
    body: 'I bought one and came back for a second. The weight and craftsmanship are exactly what I hoped for at this price.',
  },
  {
    id: 'r3',
    name: 'Sara K.',
    location: 'Toronto',
    rating: 4,
    date: '3 September 2026',
    title: 'Beautiful, slightly smaller than expected',
    body: 'Gorgeous piece and the colour is perfect. Do read the dimensions carefully — I pictured it larger, though it suits my shelf.',
  },
  {
    id: 'r4',
    name: 'Noor A.',
    location: 'Dubai',
    rating: 5,
    date: '19 August 2026',
    title: 'The packaging alone',
    body: 'It felt like receiving a gift. The object itself is stunning in the evening light. Shipping took four days.',
  },
]
