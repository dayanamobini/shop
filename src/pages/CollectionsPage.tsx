import { COLLECTIONS } from '../data/content'
import { CollectionCard } from '../components/shop/CollectionCard'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Reveal } from '../components/ui/Reveal'

export function CollectionsPage() {
  return (
    <div className="collections-page">
      <div className="container">
        <Breadcrumbs items={[{ label: 'دسته‌بندی‌ها' }]} />
        <Reveal className="page-head">
          <p className="eyebrow">گزیده‌ی دریم‌دکور</p>
          <h1 className="page-title">
            کالکشن‌هایی برای <em>هر حال‌وهوا</em>
          </h1>
          <p className="page-sub">
            پنج مجموعه، هرکدام حول یک احساس. با یکی شروع کن و بگذار اتاق خودش را کامل کند.
          </p>
        </Reveal>
      </div>

      <div className="container">
        <div className="collections__grid collections__grid--page">
          {COLLECTIONS.map((collection, index) => (
            <CollectionCard key={collection.id} collection={collection} delay={index * 0.05} />
          ))}
        </div>
      </div>
    </div>
  )
}
