import type { ReactNode } from 'react'
import { ButtonLink } from './Button'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  copy?: string
  action?: { label: string; href: string }
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  children?: ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  action,
  align = 'left',
  tone = 'dark',
  children,
}: SectionHeadingProps) {
  return (
    <Reveal className={`section-head section-head--${align} section-head--${tone}`}>
      <div className="section-head__text">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="section-head__title">{title}</h2>
        {copy && <p className="section-head__copy">{copy}</p>}
      </div>
      {(action || children) && (
        <div className="section-head__aside">
          {children}
          {action && (
            <ButtonLink href={action.href} variant="ghost" size="sm" icon="arrow-right">
              {action.label}
            </ButtonLink>
          )}
        </div>
      )}
    </Reveal>
  )
}
