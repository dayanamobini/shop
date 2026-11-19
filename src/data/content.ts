import type { Category, CollectionId } from './products'
import { PHOTO } from './images'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'Inspiration', href: '/inspiration' },
  { label: 'About', href: '/about' },
]

export const SHOP_CATEGORIES: {
  name: string
  target: Category
  photo: string
  blurb: string
}[] = [
  { name: 'Sculptures', target: 'Sculptures', photo: 'photo-1707248985080-954ad8466006', blurb: 'Form, stillness, light' },
  { name: 'Lighting', target: 'Lighting', photo: 'photo-1540932239986-30128078f3c5', blurb: 'A warmer kind of evening' },
  { name: 'Vases', target: 'Vases', photo: 'photo-1612196808214-b8e1d6145a8c', blurb: 'For stems and silence' },
  { name: 'Wall Art', target: 'Wall Art', photo: 'photo-1618220048045-10a6dbdf83e0', blurb: 'Quiet walls, louder rooms' },
  { name: 'Cushions', target: 'Textiles', photo: 'photo-1611489704434-2612dc89c992', blurb: 'Softness you can sink into' },
  { name: 'Mirrors', target: 'Mirrors', photo: 'photo-1619378396304-7ef156537d7e', blurb: 'Double the daylight' },
  { name: 'Planters', target: 'Planters', photo: 'photo-1583078603507-65d00910f610', blurb: 'Living things, beautifully held' },
]

export const MEGA_MENU: {
  title: string
  links: { label: string; category?: Category }[]
}[] = [
  {
    title: 'Objects',
    links: [
      { label: 'Sculptures', category: 'Sculptures' },
      { label: 'Vases', category: 'Vases' },
      { label: 'Decor', category: 'Decor' },
      { label: 'Mirrors', category: 'Mirrors' },
    ],
  },
  {
    title: 'For the Room',
    links: [
      { label: 'Furniture', category: 'Furniture' },
      { label: 'Lighting', category: 'Lighting' },
      { label: 'Textiles', category: 'Textiles' },
      { label: 'Wall Art', category: 'Wall Art' },
      { label: 'Planters', category: 'Planters' },
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
    name: 'Calm',
    description: 'Soft light, quiet tones, nothing that asks for attention.',
    photo: 'photo-1616137466211-f939a420be84',
    href: '/shop?mood=calm',
  },
  {
    id: 'bold',
    name: 'Bold',
    description: 'Deep wine, sculptural weight, a room with a point of view.',
    photo: 'photo-1618220179428-22790b461013',
    href: '/shop?mood=bold',
  },
  {
    id: 'artistic',
    name: 'Artistic',
    description: 'Collected objects, layered textures, a little unrepeatable.',
    photo: 'photo-1484101403633-562f891dc89a',
    href: '/shop?mood=artistic',
  },
  {
    id: 'natural',
    name: 'Natural',
    description: 'Raw stone, living green, materials that age gracefully.',
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
    name: 'The Sculptural Edit',
    tagline: 'Form first',
    description: 'Objects that hold a room the way a sentence holds a thought.',
    photo: 'photo-1567538096630-e0c55bd6374c',
    size: 'large',
  },
  {
    id: 'soft-living',
    name: 'Soft Living',
    tagline: 'Slow afternoons',
    description: 'Bouclé, linen and rose-toned light for the hours you keep for yourself.',
    photo: 'photo-1616486029423-aaa4789e8c9a',
    size: 'standard',
  },
  {
    id: 'modern-rituals',
    name: 'Modern Rituals',
    tagline: 'Everyday ceremony',
    description: 'Candles, bowls and small ceremonies that mark the day.',
    photo: 'photo-1602874801007-bd458bb1b8b6',
    size: 'standard',
  },
  {
    id: 'golden-hour',
    name: 'Golden Hour',
    tagline: 'Warm light',
    description: 'Lighting designed for the last hour of the day.',
    photo: 'photo-1526057565006-20beab8dd2ed',
    size: 'wide',
  },
  {
    id: 'organic-forms',
    name: 'Organic Forms',
    tagline: 'Made by hand',
    description: 'Clay, stone and timber shaped by the people who know them best.',
    photo: 'photo-1565193566173-7a0ee3dbe261',
    size: 'standard',
  },
]

export const BENEFITS = [
  { icon: 'truck' as const, title: 'Free Shipping', text: 'On orders over $99' },
  { icon: 'return' as const, title: 'Easy Returns', text: '30-day hassle-free returns' },
  { icon: 'shield' as const, title: 'Secure Checkout', text: 'Your data is protected' },
  { icon: 'support' as const, title: '24/7 Support', text: 'Always here for you' },
]

export const SOCIAL_TILES = [
  { photo: 'photo-1618220179428-22790b461013', caption: 'Morning light, linen, and a single stem.' },
  { photo: 'photo-1519710164239-da123dc03ef4', caption: 'The corner that started it all.' },
  { photo: 'photo-1578500494198-246f612d3b3d', caption: 'Wine tones for the winter months.' },
  { photo: 'photo-1616137466211-f939a420be84', caption: 'Objects that look better with age.' },
  { photo: 'photo-1631049307264-da0ec9d70304', caption: 'Soft curves only.' },
  { photo: 'photo-1618220048045-10a6dbdf83e0', caption: 'A shelf, styled slowly.' },
  { photo: 'photo-1484101403633-562f891dc89a', caption: 'Sunday, undisturbed.' },
  { photo: 'photo-1517705008128-361805f42e86', caption: 'From the Golden Hour collection.' },
]

export const LOOKBOOK_CHAPTERS = [
  {
    id: 'chapter-1',
    number: '01',
    title: 'The Art of Stillness',
    copy: 'A room begins with restraint. One object, chosen slowly, says more than a shelf of them.',
    photo: 'photo-1618221195710-dd6b41faaea6',
  },
  {
    id: 'chapter-2',
    number: '02',
    title: 'Light as Material',
    copy: 'We design for the hour before dusk, when a lamp stops being furniture and becomes atmosphere.',
    photo: 'photo-1616486029423-aaa4789e8c9a',
  },
  {
    id: 'chapter-3',
    number: '03',
    title: 'Made to Be Lived With',
    copy: 'Hand-thrown, hand-woven, hand-finished. The small imperfections are the point.',
    photo: 'photo-1615529182904-14819c35db37',
  },
]

export const INSPIRATION_STORIES = [
  {
    id: 'story-1',
    category: 'Interiors',
    title: 'A Lisbon Apartment Built Around One Arch',
    excerpt: 'How a single curved doorway organised an entire home — and taught us about restraint.',
    photo: PHOTO.editorial,
    read: '6 min read',
  },
  {
    id: 'story-2',
    category: 'Materials',
    title: 'Why We Still Throw Clay by Hand',
    excerpt: 'Inside the studio where every vase begins as a lump of earth and a pair of patient hands.',
    photo: 'photo-1612196808214-b8e1d6145a8c',
    read: '4 min read',
  },
  {
    id: 'story-3',
    category: 'Styling',
    title: 'The Five-Object Shelf',
    excerpt: 'A simple rule for styling open shelving without making it look styled.',
    photo: 'photo-1519710164239-da123dc03ef4',
    read: '3 min read',
  },
  {
    id: 'story-4',
    category: 'Light',
    title: 'Living With Warm Light',
    excerpt: 'Layering three temperatures of light to make an evening feel longer.',
    photo: 'photo-1507473885765-e6ed057f782c',
    read: '5 min read',
  },
]

export const RECENT_SEARCHES_DEFAULT = ['Sculptures', 'Cloud lamp', 'Blush vases']
