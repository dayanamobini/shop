import { useEffect, useState } from 'react'
import { getProduct, products, PRODUCT_REVIEWS } from '../data/products'
import { COLLECTIONS } from '../data/content'
import { badgeLabel, categoryLabel } from '../data/labels'
import { FREE_SHIPPING_THRESHOLD } from '../lib/commerce'
import { faDecimal, faNum, money } from '../lib/format'
import { navigate, useScrolled } from '../lib/hooks'
import { useStore } from '../store/StoreContext'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Button, ButtonLink } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { Img } from '../components/ui/Img'
import { Rating } from '../components/ui/Rating'
import { ProductGrid } from '../components/product/ProductGrid'
import { NotFoundPage } from './NotFoundPage'

export function ProductPage({ slug }: { slug: string }) {
  const product = getProduct(slug)
  const {
    addToCart,
    toggleWishlist,
    isWishlisted,
    addRecent,
    recent,
    setQuickViewId,
  } = useStore()
  const [color, setColor] = useState(product?.colors[0].name ?? '')
  const [qty, setQty] = useState(1)
  const [activePhoto, setActivePhoto] = useState(0)
  const sticky = useScrolled(680)

  useEffect(() => {
    if (!product) return
    addRecent(product.id)
    setColor(product.colors[0].name)
    setQty(1)
    setActivePhoto(0)
  }, [product, addRecent])

  if (!product) return <NotFoundPage />

  const saved = isWishlisted(product.id)
  const gallery = [product.photos[0], product.photos[1]]
  const collectionName =
    COLLECTIONS.find((entry) => entry.id === product.collection)?.name ?? product.collection
  const related = products
    .filter((entry) => entry.collection === product.collection && entry.id !== product.id)
    .slice(0, 4)
  const completeLook =
    related.length >= 4
      ? related
      : [...related, ...products.filter((entry) => entry.id !== product.id)].slice(0, 4)
  const recentlyViewed = recent
    .map((id) => products.find((entry) => entry.id === id))
    .filter((entry): entry is (typeof products)[number] => Boolean(entry) && entry!.id !== product.id)
    .slice(0, 4)

  const add = () => addToCart(product, { qty, color })

  return (
    <div className="pdp">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'فروشگاه', href: '/shop' },
            {
              label: categoryLabel(product.category),
              href: `/shop?category=${product.category}`,
            },
            { label: product.name },
          ]}
        />

        <div className="pdp__top">
          <div className="pdp__gallery">
            <div className="pdp__thumbs" role="tablist" aria-label="تصاویر محصول">
              {gallery.map((photo, index) => (
                <button
                  key={`${photo}-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={activePhoto === index}
                  className={activePhoto === index ? 'is-active' : ''}
                  onClick={() => setActivePhoto(index)}
                  aria-label={`تصویر ${faNum(index + 1)}`}
                >
                  <Img
                    photo={photo}
                    alt=""
                    sizes="88px"
                    ratio={[1, 1]}
                    widths={[160, 240]}
                  />
                </button>
              ))}
            </div>
            <div className="pdp__stage">
              <Img
                photo={gallery[activePhoto]}
                alt={`${product.name} — ${product.colors[0].name}`}
                sizes="(max-width: 767px) 92vw, 56vw"
                ratio={[4, 5]}
                eager
              />
              {product.badge && <span className="pdp__badge">{badgeLabel(product.badge)}</span>}
              <button
                type="button"
                className="pdp__zoom"
                onClick={() => setQuickViewId(product.id)}
                aria-label="باز کردن مشاهده سریع"
              >
                <Icon name="eye" size={16} />
              </button>
            </div>
          </div>

          <div className="pdp__info">
            <p className="eyebrow">
              {categoryLabel(product.category)} · {collectionName}
            </p>
            <h1 className="pdp__title">{product.name}</h1>
            <div className="pdp__meta">
              <Rating rating={product.rating} count={product.reviewCount} />
              <a className="pdp__review-link" href="#reviews">
                خواندن نظرات
              </a>
            </div>
            <p className="pdp__price">
              {money(product.price)}
              {product.compareAt && <s>{money(product.compareAt)}</s>}
              {product.compareAt && (
                <span className="pdp__save">
                  {money(product.compareAt - product.price)} تخفیف
                </span>
              )}
            </p>
            <p className="pdp__desc">{product.description}</p>

            <div className="pdp__colors">
              <p className="field-label">
                رنگ · <strong>{color}</strong>
              </p>
              <div className="swatches">
                {product.colors.map((option) => (
                  <button
                    key={option.name}
                    type="button"
                    className={`swatch${option.name === color ? ' is-active' : ''}`}
                    style={{ background: option.hex }}
                    aria-label={option.name}
                    aria-pressed={option.name === color}
                    onClick={() => setColor(option.name)}
                  />
                ))}
              </div>
            </div>

            <div className="pdp__buy">
              <div className="qty">
                <button
                  type="button"
                  onClick={() => setQty((value) => Math.max(1, value - 1))}
                  aria-label="کاهش تعداد"
                >
                  <Icon name="minus" size={14} />
                </button>
                <span aria-live="polite">{faNum(qty)}</span>
                <button
                  type="button"
                  onClick={() => setQty((value) => Math.min(99, value + 1))}
                  aria-label="افزایش تعداد"
                >
                  <Icon name="plus" size={14} />
                </button>
              </div>
              <Button size="lg" onClick={add} disabled={!product.inStock} fullWidth>
                {product.inStock ? 'افزودن به سبد' : 'ناموجود'}
              </Button>
              <button
                type="button"
                className={`wish-btn${saved ? ' is-saved' : ''}`}
                onClick={() => toggleWishlist(product.id)}
                aria-label="افزودن به علاقه‌مندی‌ها"
                aria-pressed={saved}
              >
                <Icon name={saved ? 'heart-filled' : 'heart'} />
              </button>
            </div>
            <Button
              variant="outline"
              size="lg"
              fullWidth
              disabled={!product.inStock}
              onClick={() => {
                add()
                navigate('/checkout')
              }}
            >
              خرید سریع
            </Button>

            <ul className="pdp__assurance">
              <li>
                <Icon name="truck" size={17} /> ارسال رایگان بالای {money(FREE_SHIPPING_THRESHOLD)} ·
                ارسال در ۲ تا ۴ روز
              </li>
              <li>
                <Icon name="return" size={17} /> مهلت ۳۰ روزه بازگشت، بدون دردسر
              </li>
              <li>
                <Icon name="sparkle" size={17} /> دست‌ساز — تفاوت‌های جزئی طبیعی است
              </li>
            </ul>

            <div className="acc-list">
              <details className="acc" open>
                <summary>
                  جزئیات و جنس <Icon name="plus" size={16} />
                </summary>
                <div className="acc__body">
                  <p>{product.materials}</p>
                  <p>{product.dimensions}</p>
                </div>
              </details>
              <details className="acc">
                <summary>
                  نحوه‌ی نگهداری <Icon name="plus" size={16} />
                </summary>
                <div className="acc__body">
                  <p>{product.care}</p>
                </div>
              </details>
              <details className="acc">
                <summary>
                  ارسال و بازگشت <Icon name="plus" size={16} />
                </summary>
                <div className="acc__body">
                  <p>
                    ارسال رایگان برای سفارش‌های بالای {money(FREE_SHIPPING_THRESHOLD)}. تحویل
                    استاندارد در ۲ تا ۴ روز کاری. بازگشت تا ۳۰ روز در وضعیت اولیه پذیرفته می‌شود.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>

      <section className="section section--cream pdp__section" aria-labelledby="complete-look">
        <div className="container">
          <div className="pdp__section-head">
            <div>
              <p className="eyebrow">در کنار هم</p>
              <h2 className="section-head__title" id="complete-look">
                این محصولات را هم <em>ببینید</em>
              </h2>
            </div>
            <ButtonLink href="/shop" variant="ghost" size="sm" icon="arrow-right">
              همه محصولات
            </ButtonLink>
          </div>
          <ProductGrid products={completeLook} />
        </div>
      </section>

      <section className="section pdp__section" id="reviews" aria-labelledby="reviews-title">
        <div className="container pdp__reviews">
          <div className="reviews__summary">
            <p className="eyebrow">نظرات مشتریان</p>
            <h2 className="section-head__title" id="reviews-title">
              {faDecimal(product.rating)} <span>/ ۵</span>
            </h2>
            <Rating rating={product.rating} showCount={false} size={16} />
            <p className="reviews__count">بر اساس {faNum(product.reviewCount)} نظر</p>
            <div className="reviews__bars">
              {[5, 4, 3, 2, 1].map((stars) => {
                const share = stars === 5 ? 78 : stars === 4 ? 16 : stars === 3 ? 4 : stars === 2 ? 1 : 1
                return (
                  <div className="reviews__bar" key={stars}>
                    <span>{faNum(stars)}★</span>
                    <span className="reviews__track">
                      <span style={{ width: `${share}%` }} />
                    </span>
                    <span>{faNum(share)}٪</span>
                  </div>
                )
              })}
            </div>
            <Button variant="outline" size="sm">
              نوشتن نظر
            </Button>
          </div>

          <ul className="reviews__list">
            {PRODUCT_REVIEWS.map((review) => (
              <li className="review" key={review.id}>
                <div className="review__head">
                  <div>
                    <p className="review__name">{review.name}</p>
                    <p className="review__loc">
                      {review.location} · {review.date}
                    </p>
                  </div>
                  <Rating rating={review.rating} showCount={false} size={12} />
                </div>
                <p className="review__title">{review.title}</p>
                <p className="review__body">{review.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {recentlyViewed.length > 0 && (
        <section className="section section--cream" aria-labelledby="recent-title">
          <div className="container">
            <div className="pdp__section-head">
              <div>
                <p className="eyebrow">از همان‌جا که رها کردی</p>
                <h2 className="section-head__title" id="recent-title">
                  بازدیدهای اخیر
                </h2>
              </div>
            </div>
            <ProductGrid products={recentlyViewed} />
          </div>
        </section>
      )}

      <div className={`sticky-buy${sticky ? ' is-visible' : ''}`}>
        <div>
          <p className="sticky-buy__name">{product.name}</p>
          <p className="sticky-buy__price">{money(product.price)}</p>
        </div>
        <Button onClick={add} disabled={!product.inStock}>
          افزودن به سبد
        </Button>
      </div>
    </div>
  )
}
