import { getProductById, type Product } from '../data/products'
import { useStore } from '../store/StoreContext'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { ButtonLink } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { ProductGrid } from '../components/product/ProductGrid'

export function WishlistPage() {
  const { wishlist } = useStore()
  const saved = wishlist
    .map((id) => getProductById(id))
    .filter((product): product is Product => Boolean(product))

  return (
    <div className="wishlist-page">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Wishlist' }]} />
        <div className="page-head">
          <p className="eyebrow">Saved for later</p>
          <h1 className="page-title">
            Your <em>Wishlist</em>
          </h1>
          <p className="page-sub">
            {saved.length > 0
              ? `${saved.length} ${saved.length === 1 ? 'piece' : 'pieces'} you’re considering.`
              : 'A quiet place for the pieces you can’t stop thinking about.'}
          </p>
        </div>

        {saved.length === 0 ? (
          <div className="empty empty--page">
            <span className="empty__icon">
              <Icon name="heart" size={28} />
            </span>
            <p className="empty__title">Your wishlist is waiting for something beautiful.</p>
            <p className="empty__text">
              Tap the heart on any piece to keep it here while you decide.
            </p>
            <ButtonLink href="/shop">Discover the collection</ButtonLink>
          </div>
        ) : (
          <ProductGrid products={saved} />
        )}
      </div>
    </div>
  )
}
