import { useState } from 'react'
import { getProductById } from '../data/products'
import { EXPRESS_SHIPPING_COST } from '../lib/commerce'
import { faNum, money } from '../lib/format'
import { navigate } from '../lib/hooks'
import { useStore } from '../store/StoreContext'
import { Button, ButtonLink } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { Img } from '../components/ui/Img'

type Delivery = 'standard' | 'express'
type Payment = 'card' | 'paypal' | 'applepay'

export function CheckoutPage() {
  const { cart, subtotal, shipping, clearCart, notify } = useStore()
  const [delivery, setDelivery] = useState<Delivery>('standard')
  const [payment, setPayment] = useState<Payment>('card')
  const [placed, setPlaced] = useState(false)
  const [orderNumber] = useState(
    () => `DD-${Math.floor(100000 + Math.random() * 899999)}`,
  )

  const lines = cart
    .map((line) => ({ ...line, product: getProductById(line.id) }))
    .filter((line) => Boolean(line.product))

  const deliveryCost = delivery === 'express' ? EXPRESS_SHIPPING_COST : shipping
  const total = subtotal + deliveryCost

  if (placed) {
    return (
      <div className="checkout checkout--done">
        <div className="container checkout__done">
          <span className="checkout__done-icon">
            <Icon name="check" size={26} />
          </span>
          <p className="eyebrow">سفارش {orderNumber}</p>
          <h1 className="page-title">
            سپاسگزاریم — سفارش شما <em>در راه است</em>
          </h1>
          <p className="page-sub">
            تأییدیه‌ی سفارش را برایت ایمیل کردیم. قطعات با دست بسته‌بندی می‌شوند و تا دو روز کاری
            ارسال خواهند شد.
          </p>
          <div className="checkout__done-actions">
            <ButtonLink href="/shop">ادامه خرید</ButtonLink>
            <ButtonLink href="/" variant="outline">
              بازگشت به خانه
            </ButtonLink>
          </div>
        </div>
      </div>
    )
  }

  if (lines.length === 0) {
    return (
      <div className="checkout">
        <div className="container">
          <div className="empty empty--page">
            <span className="empty__icon">
              <Icon name="bag" size={28} />
            </span>
            <p className="empty__title">هنوز چیزی برای پرداخت نیست.</p>
            <p className="empty__text">سبد خریدت منتظر یک انتخاب زیباست.</p>
            <ButtonLink href="/shop">دیدن فروشگاه</ButtonLink>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout">
      <div className="container">
        <header className="checkout__head">
          <button type="button" className="link-btn" onClick={() => navigate('/cart')}>
            ← بازگشت به سبد خرید
          </button>
          <p className="eyebrow">پرداخت امن</p>
          <h1 className="page-title">
            تقریباً <em>خانه</em>
          </h1>
          <ol className="checkout__steps" aria-label="مراحل پرداخت">
            <li className="is-active">اطلاعات</li>
            <li className="is-active">ارسال</li>
            <li>پرداخت</li>
          </ol>
        </header>

        <form
          className="checkout__layout"
          onSubmit={(event) => {
            event.preventDefault()
            setPlaced(true)
            clearCart()
            notify('سفارش ثبت شد.', `تأییدیه ${orderNumber} به ایمیل شما ارسال شد.`)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <div className="checkout__form">
            <section className="checkout__block">
              <div className="checkout__block-head">
                <span className="checkout__num">۰۱</span>
                <h2>اطلاعات تماس</h2>
              </div>
              <div className="field">
                <label htmlFor="email">ایمیل</label>
                <input id="email" type="email" required autoComplete="email" placeholder="you@example.com" />
              </div>
              <label className="check">
                <input type="checkbox" defaultChecked />
                <span className="check__box" aria-hidden="true" />
                <span className="check__label">از محصولات جدید و خبرنامه‌ی یکشنبه باخبرم کن</span>
              </label>
            </section>

            <section className="checkout__block">
              <div className="checkout__block-head">
                <span className="checkout__num">۰۲</span>
                <h2>آدرس ارسال</h2>
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="first">نام</label>
                  <input id="first" required autoComplete="given-name" placeholder="نگار" />
                </div>
                <div className="field">
                  <label htmlFor="last">نام خانوادگی</label>
                  <input id="last" required autoComplete="family-name" placeholder="محمدی" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="address">نشانی</label>
                <input id="address" required autoComplete="street-address" placeholder="خیابان ولیعصر، پلاک ۲۴" />
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="city">شهر</label>
                  <input id="city" required autoComplete="address-level2" placeholder="تهران" />
                </div>
                <div className="field">
                  <label htmlFor="postal">کد پستی</label>
                  <input id="postal" required autoComplete="postal-code" placeholder="۱۱۰۰۱۵۵" />
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="country">کشور</label>
                  <input id="country" required autoComplete="country-name" placeholder="ایران" />
                </div>
                <div className="field">
                  <label htmlFor="phone">شماره تماس (اختیاری)</label>
                  <input id="phone" type="tel" autoComplete="tel" placeholder="۰۹۱۲ ۳۴۵ ۶۷۸۹" />
                </div>
              </div>
            </section>

            <section className="checkout__block">
              <div className="checkout__block-head">
                <span className="checkout__num">۰۳</span>
                <h2>روش ارسال</h2>
              </div>
              <div className="options">
                <label className={`option${delivery === 'standard' ? ' is-active' : ''}`}>
                  <input
                    type="radio"
                    name="delivery"
                    value="standard"
                    checked={delivery === 'standard'}
                    onChange={() => setDelivery('standard')}
                  />
                  <span className="option__text">
                    <span className="option__title">ارسال استاندارد</span>
                    <span className="option__sub">۲ تا ۴ روز کاری، بسته‌بندی با دست</span>
                  </span>
                  <span className="option__price">
                    {shipping === 0 ? 'رایگان' : money(shipping)}
                  </span>
                </label>
                <label className={`option${delivery === 'express' ? ' is-active' : ''}`}>
                  <input
                    type="radio"
                    name="delivery"
                    value="express"
                    checked={delivery === 'express'}
                    onChange={() => setDelivery('express')}
                  />
                  <span className="option__text">
                    <span className="option__title">ارسال فوری</span>
                    <span className="option__sub">روز کاری بعد، پیش از ساعت ۱۲</span>
                  </span>
                  <span className="option__price">{money(EXPRESS_SHIPPING_COST)}</span>
                </label>
              </div>
            </section>

            <section className="checkout__block">
              <div className="checkout__block-head">
                <span className="checkout__num">۰۴</span>
                <h2>روش پرداخت</h2>
              </div>
              <div className="options options--row">
                {(
                  [
                    { value: 'card', label: 'کارت بانکی' },
                    { value: 'paypal', label: 'پی‌پال' },
                    { value: 'applepay', label: 'اپل پی' },
                  ] as { value: Payment; label: string }[]
                ).map((method) => (
                  <label
                    key={method.value}
                    className={`option option--compact${payment === method.value ? ' is-active' : ''}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.value}
                      checked={payment === method.value}
                      onChange={() => setPayment(method.value)}
                    />
                    <span className="option__title">{method.label}</span>
                  </label>
                ))}
              </div>

              {payment === 'card' && (
                <div className="card-fields">
                  <div className="field">
                    <label htmlFor="card">شماره کارت</label>
                    <input id="card" inputMode="numeric" placeholder="۴۲۴۲ ۴۲۴۲ ۴۲۴۲ ۴۲۴۲" required />
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="expiry">تاریخ انقضا</label>
                      <input id="expiry" placeholder="ماه / سال" required />
                    </div>
                    <div className="field">
                      <label htmlFor="cvc">CVV2</label>
                      <input id="cvc" inputMode="numeric" placeholder="۱۲۳" required />
                    </div>
                  </div>
                </div>
              )}

              <p className="checkout__note">
                <Icon name="shield" size={15} /> این یک فروشگاه نمایشی است. هیچ پرداختی انجام
                نمی‌شود و اطلاعات کارت ذخیره نمی‌گردد.
              </p>
            </section>
          </div>

          <aside className="checkout__summary" aria-label="خلاصه سفارش">
            <h2 className="cart__summary-title">خلاصه سفارش</h2>
            <ul className="checkout__lines">
              {lines.map((line) => {
                const product = line.product!
                return (
                  <li key={`${line.id}-${line.color}`}>
                    <span className="checkout__line-media">
                      <Img
                        photo={product.photos[0]}
                        alt={product.name}
                        sizes="64px"
                        ratio={[1, 1]}
                        widths={[160, 240]}
                      />
                      <span className="checkout__line-qty">{faNum(line.qty)}</span>
                    </span>
                    <span className="checkout__line-text">
                      <span className="checkout__line-name">{product.name}</span>
                      <span className="checkout__line-meta">{line.color}</span>
                    </span>
                    <span className="checkout__line-price">
                      {money(product.price * line.qty)}
                    </span>
                  </li>
                )
              })}
            </ul>
            <div className="summary-row">
              <span>جمع کالاها</span>
              <span>{money(subtotal)}</span>
            </div>
            <div className="summary-row">
              <span>ارسال</span>
              <span>{deliveryCost === 0 ? 'رایگان' : money(deliveryCost)}</span>
            </div>
            <div className="summary-row summary-row--total">
              <span>مبلغ نهایی</span>
              <span>{money(total)}</span>
            </div>
            <Button type="submit" fullWidth size="lg">
              ثبت سفارش · {money(total)}
            </Button>
            <p className="cart__note">
              <Icon name="return" size={15} /> بازگشت ۳۰ روزه، بدون پرسش
            </p>
          </aside>
        </form>
      </div>
    </div>
  )
}
