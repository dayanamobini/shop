import type { CollectionId } from '../../data/products'
import { navigate } from '../../lib/hooks'
import { Icon } from '../ui/Icon'
import { Img } from '../ui/Img'
import { Reveal } from '../ui/Reveal'

export type CollectionCardData = {
  id: CollectionId
  name: string
  tagline: string
  description: string
  photo: string
  size: 'large' | 'wide' | 'tall' | 'standard'
}

export function CollectionCard({
  collection,
  delay = 0,
}: {
  collection: CollectionCardData
  delay?: number
}) {
  return (
    <Reveal className={`collection collection--${collection.size}`} delay={delay}>
      <a
        href={`/collections/${collection.id}`}
        className="collection__link"
        onClick={(event) => {
          event.preventDefault()
          navigate(`/collections/${collection.id}`)
        }}
      >
        <span className="collection__media">
          <Img
            photo={collection.photo}
            alt={collection.name}
            sizes={
              collection.size === 'large'
                ? '(max-width: 767px) 92vw, 50vw'
                : '(max-width: 767px) 92vw, 25vw'
            }
            ratio={collection.size === 'large' ? [4, 5] : [4, 3]}
          />
        </span>
        <span className="collection__shade" aria-hidden="true" />
        <span className="collection__body">
          <span className="eyebrow">{collection.tagline}</span>
          <span className="collection__name">{collection.name}</span>
          <span className="collection__desc">{collection.description}</span>
          <span className="collection__cta">
            مشاهده <Icon name="arrow-up-right" size={15} />
          </span>
        </span>
      </a>
    </Reveal>
  )
}
