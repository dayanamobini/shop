import { COLLECTIONS } from '../data/content'
import { CollectionCard } from '../components/shop/CollectionCard'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Reveal } from '../components/ui/Reveal'

export function CollectionsPage() {
  return (
    <div className="collections-page">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Collections' }]} />
        <Reveal className="page-head">
          <p className="eyebrow">Curated by DreamDécor</p>
          <h1 className="page-title">
            Collections for <em>Every Mood</em>
          </h1>
          <p className="page-sub">
            Five edits, each built around a feeling. Start with one and let the room finish itself.
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
