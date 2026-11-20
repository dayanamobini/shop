import { getProductById, type Product } from '../data/products'
import { faNum } from '../lib/format'
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
        <Breadcrumbs items={[{ label: 'علاقه‌مندی‌ها' }]} />
        <div className="page-head">
          <p className="eyebrow">برای بعد ذخیره شده</p>
          <h1 className="page-title">
            <em>علاقه‌مندی‌های</em> تو
          </h1>
          <p className="page-sub">
            {saved.length > 0
              ? `${faNum(saved.length)} قطعه که در حال فکر کردن به آن‌ها هستی.`
              : 'هنوز چیزی برای دوست داشتن انتخاب نکرده‌ای.'}
          </p>
        </div>

        {saved.length === 0 ? (
          <div className="empty empty--page">
            <span className="empty__icon">
              <Icon name="heart" size={28} />
            </span>
            <p className="empty__title">هنوز چیزی برای دوست داشتن انتخاب نکرده‌ای.</p>
            <p className="empty__text">
              روی قلب هر قطعه بزن تا تا زمانی که تصمیم می‌گیری، اینجا بماند.
            </p>
            <ButtonLink href="/shop">دیدن مجموعه</ButtonLink>
          </div>
        ) : (
          <ProductGrid products={saved} />
        )}
      </div>
    </div>
  )
}
