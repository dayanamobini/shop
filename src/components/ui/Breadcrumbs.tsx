import { navigate } from '../../lib/hooks'

type Crumb = { label: string; href?: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="crumbs" aria-label="مسیر صفحه">
      <ol>
        <li>
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault()
              navigate('/')
            }}
          >
            خانه
          </a>
        </li>
        {items.map((item) => (
          <li key={item.label}>
            <span aria-hidden="true">/</span>
            {item.href ? (
              <a
                href={item.href}
                onClick={(event) => {
                  event.preventDefault()
                  navigate(item.href!)
                }}
              >
                {item.label}
              </a>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
