import { getProductById, products } from '../data/products'
import { categoryLabel } from '../data/labels'
import { FREE_SHIPPING_THRESHOLD } from '../lib/commerce'
import { faNum, money } from '../lib/format'
import { navigate } from '../lib/hooks'
import { useStore } from '../store/StoreContext'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Button, ButtonLink } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { Img } from '../components/ui/Img'
import { ProductGrid } from '../components/product/ProductGrid'

export function CartPage() {
  const { cart, setQty, removeLine, subtotal, shipping, total, cartCount } = useStore()
  const lines = cart
    .map((line) => ({ ...line, product: getProductById(line.id) }))
    .filter((line) => Boolean(line.product))
  const recommended = products.filter((product) => !cart.some((line) => line.id === product.id)).slice(0, 4)

  return (
    <div className="cart-page">
      <div className="container">
        <Breadcrumbs items={[{ label: 'سبد خرید' }]} />
        <div className="page-head page-head--row">
          <div>
            <p className="eyebrow">انتخاب شما</p>
            <h1 className="page-title">
              سبد <em>خرید</em>
            </h1>
          </div>
          <p className="page-sub">{faNum(cartCount)} کالا انتخاب شده</p>
        </div>

        {lines.length === 0 ? (
          <div className="empty empty--page">
            <span className="empty__icon">
              <Icon name="bag" size={28} />
            </span>
            <p className="empty__title">سبد خریدت منتظر یک انتخاب زیباست.</p>
            <p className="empty__text">
              با یک مجسمه، یک چراغ یا یک گلدان شروع کن — بقیه‌اش خودش می‌آید.
            </p>
            <ButtonLink href="/shop">دیدن فروشگاه</ButtonLink>
          </div>
        ) : (
          <div className="cart__layout">
            <div className="cart__lines">
              <div className="cart__head">
                <span>کالا</span>
                <span>تعداد</span>
                <span>جمع</span>
              </div>
              {lines.map((line) => {
                const product = line.product!
                return (
                  <div className="cart__line" key={`${line.id}-${line.color}`}>
                    <a
                      className="cart__media"
                      href={`/product/${product.slug}`}
                      onClick={(event) => {
                        event.preventDefault()
                        navigate(`/product/${product.slug}`)
                      }}
                    >
                      <Img
                        photo={product.photos[0]}
                        alt={product.name}
                        sizes="120px"
                        ratio={[1, 1]}
                        widths={[240, 360]}
                      />
                    </a>
                    <div className="cart__info">
                      <p className="cart__cat">{categoryLabel(product.category)}</p>
                      <a
                        className="cart__name"
                        href={`/product/${product.slug}`}
                        onClick={(event) => {
                          event.preventDefault()
                          navigate(`/product/${product.slug}`)
                        }}
                      >
                        {product.name}
                      </a>
                      <p className="cart__variant">{line.color}</p>
                      <p className="cart__unit">{money(product.price)} برای هر عدد</p>
                      <button
                        type="button"
                        className="link-btn cart__remove"
                        onClick={() => removeLine(line.id, line.color)}
                      >
                        حذف
                      </button>
                    </div>
                    <div className="cart__qty">
                      <div className="qty">
                        <button
                          type="button"
                          onClick={() => setQty(line.id, line.color, line.qty - 1)}
                          aria-label={`کاهش تعداد ${product.name}`}
                        >
                          <Icon name="minus" size={13} />
                        </button>
                        <span>{faNum(line.qty)}</span>
                        <button
                          type="button"
                          onClick={() => setQty(line.id, line.color, line.qty + 1)}
                          aria-label={`افزایش تعداد ${product.name}`}
                        >
                          <Icon name="plus" size={13} />
                        </button>
                      </div>
                    </div>
                    <p className="cart__total">{money(product.price * line.qty)}</p>
                  </div>
                )
              })}

              <div className="cart__continue">
                <ButtonLink href="/shop" variant="ghost" size="sm" icon="arrow-right">
                  ادامه خرید
                </ButtonLink>
              </div>
            </div>

            <aside className="cart__summary" aria-label="خلاصه سفارش">
              <h2 className="cart__summary-title">خلاصه سفارش</h2>
              <div className="summary-row">
                <span>جمع کالاها</span>
                <span>{money(subtotal)}</span>
              </div>
              <div className="summary-row">
                <span>ارسال</span>
                <span>{shipping === 0 ? 'رایگان' : money(shipping)}</span>
              </div>
              <div className="summary-row">
                <span>مالیات</span>
                <span>در مرحله پرداخت محاسبه می‌شود</span>
              </div>
              <div className="summary-row summary-row--total">
                <span>مبلغ نهایی</span>
                <span>{money(total)}</span>
              </div>
              <Button fullWidth size="lg" onClick={() => navigate('/checkout')}>
                ادامه پرداخت
              </Button>
              <p className="cart__note">
                <Icon name="shield" size={15} /> پرداخت امن · بازگشت ۳۰ روزه
              </p>
              <div className="ship-meter">
                <p>
                  {subtotal >= FREE_SHIPPING_THRESHOLD
                    ? 'ارسال رایگان برای سفارش شما فعال شد.'
                    : `${money(FREE_SHIPPING_THRESHOLD - subtotal)} تا ارسال رایگان باقی مانده.`}
                </p>
                <span className="ship-meter__track">
                  <span
                    className="ship-meter__fill"
                    style={{ width: `${Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)}%` }}
                  />
                </span>
              </div>
            </aside>
          </div>
        )}
      </div>

      {recommended.length > 0 && (
        <section className="section section--cream">
          <div className="container">
            <p className="eyebrow">شاید این‌ها را هم دوست داشته باشی</p>
            <h2 className="section-head__title">اتاق را کامل کن</h2>
            <ProductGrid products={recommended} />
          </div>
        </section>
      )}
    </div>
  )
}
