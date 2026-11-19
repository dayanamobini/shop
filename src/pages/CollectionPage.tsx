import { COLLECTIONS } from '../data/content'
import { products } from '../data/products'
import { navigate } from '../lib/hooks'
import { ProductGrid } from '../components/product/ProductGrid'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { ButtonLink } from '../components/ui/Button'
import { Img } from '../components/ui/Img'
import { NotFoundPage } from './NotFoundPage'

export function CollectionPage({ id }: { id: string }) {
  const collection = COLLECTIONS.find((entry) => entry.id === id)
  if (!collection) return <NotFoundPage />

  const items = products.filter((product) => product.collection === collection.id)

  return (
    <div className="collection-page">
      <div className="container">
        <Breadcrumbs
          items={[{ label: 'Collections', href: '/collections' }, { label: collection.name }]}
        />
      </div>

      <div className="container collection-hero">
        <div className="collection-hero__copy">
          <p className="eyebrow">{collection.tagline}</p>
          <h1 className="page-title">{collection.name}</h1>
          <p className="page-sub">{collection.description}</p>
          <p className="collection-hero__count">
            {items.length} {items.length === 1 ? 'piece' : 'pieces'} in this edit
          </p>
        </div>
        <div className="collection-hero__media">
          <Img
            photo={collection.photo}
            alt={collection.name}
            sizes="(max-width: 767px) 92vw, 44vw"
            ratio={[4, 5]}
            eager
          />
        </div>
      </div>

      <section className="section" aria-label={`${collection.name} products`}>
        <div className="container">
          {items.length > 0 ? (
            <ProductGrid products={items} />
          ) : (
            <p className="empty__title">This collection is being composed — check back soon.</p>
          )}
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <p className="eyebrow">Keep wandering</p>
          <h2 className="section-head__title">Other collections</h2>
          <div className="collection-links">
            {COLLECTIONS.filter((entry) => entry.id !== collection.id).map((entry) => (
              <a
                key={entry.id}
                href={`/collections/${entry.id}`}
                className="collection-link"
                onClick={(event) => {
                  event.preventDefault()
                  navigate(`/collections/${entry.id}`)
                }}
              >
                <span className="collection-link__media">
                  <Img photo={entry.photo} alt="" sizes="120px" ratio={[1, 1]} widths={[240, 360]} />
                </span>
                <span>
                  <span className="collection-link__name">{entry.name}</span>
                  <span className="collection-link__tag">{entry.tagline}</span>
                </span>
              </a>
            ))}
          </div>
          <div className="section-head__cta">
            <ButtonLink href="/shop" variant="outline" icon="arrow-right">
              Shop all pieces
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  )
}
