import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react'
import { Icon, type IconName } from './Icon'
import { navigate } from '../../lib/hooks'

type Variant = 'primary' | 'outline' | 'light' | 'ghost' | 'dark'
type Size = 'sm' | 'md' | 'lg'

type BaseProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  icon?: IconName
  iconPosition?: 'start' | 'end'
  className?: string
  fullWidth?: boolean
}

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & {
    href?: undefined
  }

type LinkProps = BaseProps & {
  href: string
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
  'aria-label'?: string
}

const classes = (
  variant: Variant,
  size: Size,
  className?: string,
  fullWidth?: boolean,
) =>
  ['btn', `btn--${variant}`, `btn--${size}`, fullWidth ? 'btn--full' : '', className]
    .filter(Boolean)
    .join(' ')

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'end',
  className,
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={classes(variant, size, className, fullWidth)}
      {...props}
    >
      {icon && iconPosition === 'start' && <Icon name={icon} size={16} />}
      <span>{children}</span>
      {icon && iconPosition === 'end' && <Icon name={icon} size={16} />}
    </button>
  )
}

export function ButtonLink({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'end',
  className,
  fullWidth,
  onClick,
  ...rest
}: LinkProps) {
  return (
    <a
      href={href}
      className={classes(variant, size, className, fullWidth)}
      onClick={(event) => {
        onClick?.(event)
        if (event.defaultPrevented || event.metaKey || event.ctrlKey) return
        event.preventDefault()
        navigate(href)
      }}
      {...rest}
    >
      {icon && iconPosition === 'start' && <Icon name={icon} size={16} />}
      <span>{children}</span>
      {icon && iconPosition === 'end' && <Icon name={icon} size={16} />}
    </a>
  )
}
