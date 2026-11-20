import type { Badge, Category, CollectionId } from './products'

/** Persian labels for the English keys used across the catalogue. */
export const CATEGORY_LABELS: Record<Category, string> = {
  Furniture: 'مبلمان',
  Lighting: 'نورپردازی',
  Decor: 'دکور',
  Vases: 'گلدان',
  'Wall Art': 'تابلو و دیوارکوب',
  Textiles: 'منسوجات',
  Mirrors: 'آینه',
  Planters: 'گلدان و گیاهان',
  Sculptures: 'مجسمه',
}

export const BADGE_LABELS: Record<Badge, string> = {
  New: 'جدید',
  Bestseller: 'پرفروش',
  Limited: 'محدود',
}

export const COLLECTION_LABELS: Record<CollectionId, string> = {
  sculptural: 'فرم‌های مجسمه‌ای',
  'soft-living': 'زندگی نرم',
  'modern-rituals': 'آیین‌های مدرن',
  'golden-hour': 'ساعت طلایی',
  'organic-forms': 'فرم‌های ارگانیک',
}

export const categoryLabel = (category: Category) => CATEGORY_LABELS[category] ?? category

export const badgeLabel = (badge: Badge) => BADGE_LABELS[badge] ?? badge
