import { ButtonLink } from '../components/ui/Button'

export function NotFoundPage() {
  return (
    <div className="notfound">
      <div className="container notfound__inner">
        <p className="eyebrow">۴۰۴</p>
        <h1 className="page-title">
          این اتاق <em>وجود ندارد</em>
        </h1>
        <p className="page-sub">
          صفحه‌ای که دنبالش بودی جابه‌جا شده، یا شاید هرگز وجود نداشته است.
        </p>
        <div className="notfound__actions">
          <ButtonLink href="/">بازگشت به خانه</ButtonLink>
          <ButtonLink href="/shop" variant="outline">
            دیدن فروشگاه
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}
