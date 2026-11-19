import { ButtonLink } from '../components/ui/Button'

export function NotFoundPage() {
  return (
    <div className="notfound">
      <div className="container notfound__inner">
        <p className="eyebrow">404</p>
        <h1 className="page-title">
          This room doesn’t <em>exist</em>
        </h1>
        <p className="page-sub">
          The page you were looking for has been moved, or perhaps never existed at all.
        </p>
        <div className="notfound__actions">
          <ButtonLink href="/">Back home</ButtonLink>
          <ButtonLink href="/shop" variant="outline">
            Browse the shop
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}
