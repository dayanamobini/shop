import type { ElementType, ReactNode } from 'react'
import { useInView } from '../../lib/hooks'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  delay?: number
  className?: string
  id?: string
}

/** Fades and lifts its children the first time they enter the viewport. */
export function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className,
  id,
}: RevealProps) {
  const ref = useInView<HTMLDivElement>()
  return (
    <Tag
      ref={ref}
      id={id}
      className={['reveal', className].filter(Boolean).join(' ')}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  )
}
