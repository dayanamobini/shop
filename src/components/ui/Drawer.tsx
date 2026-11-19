import type { ReactNode } from 'react'
import { Icon } from './Icon'
import { useBodyLock, useEscape } from '../../lib/hooks'

type DrawerProps = {
  open: boolean
  onClose: () => void
  title: string
  eyebrow?: string
  children: ReactNode
  footer?: ReactNode
  side?: 'right' | 'left'
  wide?: boolean
}

export function Drawer({
  open,
  onClose,
  title,
  eyebrow,
  children,
  footer,
  side = 'right',
  wide,
}: DrawerProps) {
  useBodyLock(open)
  useEscape(open, onClose)

  if (!open) return null

  return (
    <div className="overlay" role="presentation" onMouseDown={onClose}>
      <aside
        className={`drawer drawer--${side}${wide ? ' drawer--wide' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="drawer__head">
          <div>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 className="drawer__title">{title}</h2>
          </div>
          <button
            type="button"
            className="icon-btn"
            onClick={onClose}
            aria-label={`Close ${title.toLowerCase()}`}
          >
            <Icon name="close" />
          </button>
        </header>
        <div className="drawer__body">{children}</div>
        {footer && <footer className="drawer__foot">{footer}</footer>}
      </aside>
    </div>
  )
}
