import { COLLECTIONS } from '../../data/content'
import { Img } from '../ui/Img'
import { ButtonLink } from '../ui/Button'

export function MegaMenu({ onNavigate }: { onNavigate: () => void }) {
  const featured = COLLECTIONS[3]
  return (
    <div className="mega" onMouseLeave={onNavigate}>
      <div className="mega__inner container">
        <div className="mega__cols">
          <div className="mega__col">
            <p className="mega__title">Objects</p>
            <ul className="mega__list">
              {['Sculptures', 'Vases', 'Decor', 'Mirrors'].map((item) => (
                <li key={item}>
                  <a href={`/shop?category=${item}`} onClick={onNavigate}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mega__col">
            <p className="mega__title">For the Room</p>
            <ul className="mega__list">
              {['Furniture', 'Lighting', 'Textiles', 'Wall Art', 'Planters'].map((item) => (
                <li key={item}>
                  <a href={`/shop?category=${item}`} onClick={onNavigate}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mega__col mega__col--soft">
            <p className="mega__title">Collections</p>
            <ul className="mega__list">
              {COLLECTIONS.slice(0, 4).map((collection) => (
                <li key={collection.id}>
                  <a href={`/collections/${collection.id}`} onClick={onNavigate}>
                    {collection.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="/collections" onClick={onNavigate}>
                  All collections
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a
          className="mega__feature"
          href={`/collections/${featured.id}`}
          onClick={onNavigate}
        >
          <span className="mega__feature-media">
            <Img
              photo={featured.photo}
              alt={featured.name}
              sizes="(max-width: 1199px) 0px, 320px"
              ratio={[4, 5]}
            />
          </span>
          <span className="mega__feature-body">
            <span className="eyebrow">Featured edit</span>
            <span className="mega__feature-title">{featured.name}</span>
            <span className="mega__feature-link">Discover →</span>
          </span>
        </a>
      </div>
      <div className="mega__footer container">
        <span>Free shipping on orders over $99</span>
        <ButtonLink href="/shop" variant="ghost" size="sm" icon="arrow-right">
          Shop all pieces
        </ButtonLink>
      </div>
    </div>
  )
}
