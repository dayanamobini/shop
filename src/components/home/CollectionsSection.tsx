import { COLLECTIONS } from '../../data/content'
import { CollectionCard } from '../shop/CollectionCard'
import { SectionHeading } from '../ui/SectionHeading'

export function CollectionsSection() {
  return (
    <section className="section collections" aria-labelledby="collections-title">
      <div className="container">
        <SectionHeading
          eyebrow="Curated collections"
          title={
            <span id="collections-title">
              Five Ways to <em>Live Beautifully</em>
            </span>
          }
          copy="Edits built around a feeling rather than a category — so a room comes together instead of accumulating."
          action={{ label: 'All collections', href: '/collections' }}
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
