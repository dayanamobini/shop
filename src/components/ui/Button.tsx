import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from '../../lib/router';
import { Icon, type IconName } from './Icon';

type Variant = 'primary' | 'ghost';
type Size = 'md' | 'sm';

type SharedProps = {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  children: ReactNode;
  className?: string;
};

function classes({ variant = 'primary', size = 'md', className = '' }: Omit<SharedProps, 'children' | 'icon'>) {
  return ['btn', `btn--${variant}`, size === 'sm' ? 'btn--sm' : '', className].filter(Boolean).join(' ');
}

type ButtonLinkProps = SharedProps & { to: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'>;

export function ButtonLink({ to, variant, size, icon, children, className, ...rest }: ButtonLinkProps) {
  return (
    <Link to={to} className={classes({ variant, size, className })} {...rest}>
      {children}
      {icon ? <Icon name={icon} size={18} /> : null}
    </Link>
  );
}

type ButtonProps = SharedProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;

export function Button({ variant, size, icon, children, className, type = 'button', ...rest }: ButtonProps) {
  return (
    <button type={type} className={classes({ variant, size, className })} {...rest}>
      {children}
      {icon ? <Icon name={icon} size={18} /> : null}
    </button>
  );
}
