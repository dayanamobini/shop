import { COLLECTIONS } from '../../data/content'
import { CollectionCard } from '../shop/CollectionCard'
import { SectionHeading } from '../ui/SectionHeading'

export function CollectionsSection() {
  return (
    <section className="section collections" aria-labelledby="collections-title">
      <div className="container">
        <SectionHeading
          eyebrow="کالکشن‌های منتخب"
          title={
            <span id="collections-title">
              پنج راه برای <em>زندگی زیبا</em>
            </span>
          }
          copy="مجموعه‌هایی که حول یک احساس ساخته شده‌اند، نه یک دسته‌بندی؛ تا اتاق شکل بگیرد، نه اینکه فقط پر شود."
          action={{ label: 'همه کالکشن‌ها', href: '/collections' }}
        />

        <div className="collections__grid">
          {COLLECTIONS.map((collection, index) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
              delay={index * 0.06}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
