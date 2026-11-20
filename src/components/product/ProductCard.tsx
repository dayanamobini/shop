import { useRef, useState } from 'react'
import type { Product } from '../../data/products'
import { badgeLabel, categoryLabel } from '../../data/labels'
import { money } from '../../lib/format'
import { navigate } from '../../lib/hooks'
import { useStore } from '../../store/StoreContext'
import { Icon } from '../ui/Icon'
import { Img } from '../ui/Img'
import { Rating } from '../ui/Rating'

type ProductCardProps = {
  product: Product
  layout?: 'grid' | 'list'
}

export function ProductCard({ product, layout = 'grid' }: ProductCardProps) {
  const { addToCart, toggleWishlist, isWishlisted, setQuickViewId } = useStore()
  const [popping, setPopping] = useState(false)
  const popTimer = useRef<number | undefined>(undefined)
  const saved = isWishlisted(product.id)

  const open = (event: React.MouseEvent) => {
    if (event.metaKey || event.ctrlKey) return
    event.preventDefault()
    navigate(`/product/${product.slug}`)
  }

  return (
    <article className={`pcard${layout === 'list' ? ' pcard--list' : ''}`}>
      <div className="pcard__media">
        <a
          className="pcard__media-link"
          href={`/product/${product.slug}`}
          onClick={open}
          aria-label={`مشاهده ${product.name}`}
        >
          <span className="pcard__img pcard__img--main">
            <Img
              photo={product.photos[0]}
              alt={product.name}
              sizes="(max-width: 767px) 50vw, (max-width: 1199px) 33vw, 24vw"
              ratio={[4, 5]}
            />
          </span>
          <span className="pcard__img pcard__img--alt" aria-hidden="true">
            <Img
              photo={product.photos[1]}
              alt=""
              sizes="(max-width: 767px) 50vw, (max-width: 1199px) 33vw, 24vw"
              ratio={[4, 5]}
            />
          </span>
        </a>

        {product.badge && <span className="pcard__badge">{badgeLabel(product.badge)}</span>}
        {!product.inStock && <span className="pcard__badge pcard__badge--muted">ناموجود</span>}

        <button
          type="button"
          className={`pcard__wish${saved ? ' is-saved' : ''}${popping ? ' is-pop' : ''}`}
          aria-label={
            saved
              ? `حذف ${product.name} از علاقه‌مندی‌ها`
              : `افزودن ${product.name} به علاقه‌مندی‌ها`
          }
          aria-pressed={saved}
          onClick={() => {
            toggleWishlist(product.id)
            setPopping(true)
            window.clearTimeout(popTimer.current)
            popTimer.current = window.setTimeout(() => setPopping(false), 620)
          }}
        >
          <Icon name={saved ? 'heart-filled' : 'heart'} size={17} />
        </button>

        <div className="pcard__actions">
          <button
            type="button"
            className="pcard__action"
            onClick={() => setQuickViewId(product.id)}
          >
            <Icon name="eye" size={15} />
            مشاهده سریع
          </button>
          <button
            type="button"
            className="pcard__action pcard__action--solid"
            disabled={!product.inStock}
            onClick={() => addToCart(product)}
          >
            <Icon name="bag" size={15} />
            {product.inStock ? 'افزودن به سبد' : 'ناموجود'}
          </button>
        </div>
      </div>

      <div className="pcard__info">
        <p className="pcard__cat">{categoryLabel(product.category)}</p>
        <h3 className="pcard__name">
          <a href={`/product/${product.slug}`} onClick={open}>
            {product.name}
          </a>
        </h3>
        {layout === 'list' && <p className="pcard__desc">{product.description}</p>}
        <div className="pcard__foot">
          <span className="pcard__price">
            {money(product.price)}
            {product.compareAt && <s>{money(product.compareAt)}</s>}
          </span>
          <Rating rating={product.rating} count={product.reviewCount} size={11} />
        </div>
        {layout === 'list' && (
          <div className="pcard__list-actions">
            <button
              type="button"
              className="btn btn--primary btn--sm"
              disabled={!product.inStock}
              onClick={() => addToCart(product)}
            >
              افزودن به سبد
            </button>
            <button
              type="button"
              className="btn btn--ghost btn--sm"
              onClick={() => setQuickViewId(product.id)}
            >
              مشاهده سریع
            </button>
          </div>
        )}
      </div>
    </article>
  )
}
