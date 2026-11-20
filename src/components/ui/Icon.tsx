import type { ReactElement, SVGProps } from 'react'

export type IconName =
  | 'search'
  | 'heart'
  | 'heart-filled'
  | 'bag'
  | 'menu'
  | 'close'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'star'
  | 'plus'
  | 'minus'
  | 'check'
  | 'play'
  | 'truck'
  | 'return'
  | 'shield'
  | 'support'
  | 'instagram'
  | 'pinterest'
  | 'facebook'
  | 'youtube'
  | 'filter'
  | 'grid'
  | 'list'
  | 'trash'
  | 'eye'
  | 'sparkle'
  | 'sliders'

const paths: Record<IconName, ReactElement> = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  heart: <path d="M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 7.9a4.1 4.1 0 0 1 7.5 2.7C19.5 15.4 12 20 12 20Z" />,
  'heart-filled': (
    <path
      d="M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 7.9a4.1 4.1 0 0 1 7.5 2.7C19.5 15.4 12 20 12 20Z"
      fill="currentColor"
    />
  ),
  bag: (
    <>
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </>
  ),
  menu: (
    <>
      <path d="M3.5 7h17" />
      <path d="M3.5 12h17" />
      <path d="M3.5 17h11" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </>
  ),
  'chevron-down': <path d="m6 9.5 6 6 6-6" />,
  'chevron-left': <path d="m14.5 5.5-6 6.5 6 6.5" />,
  'chevron-right': <path d="m9.5 5.5 6 6.5-6 6.5" />,
  'arrow-right': (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  'arrow-up-right': (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  star: (
    <path
      d="m12 3.6 2.5 5.3 5.8.8-4.2 4.1 1 5.8-5.1-2.8-5.1 2.8 1-5.8L3.7 9.7l5.8-.8L12 3.6Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  minus: <path d="M5 12h14" />,
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  play: <path d="M8.5 6.2v11.6L19 12 8.5 6.2Z" fill="currentColor" stroke="none" />,
  truck: (
    <>
      <path d="M2.5 7.5h10v9h-10z" />
      <path d="M12.5 11h4l3 3v2.5h-7z" />
      <circle cx="6.5" cy="18" r="1.8" />
      <circle cx="16.5" cy="18" r="1.8" />
    </>
  ),
  return: (
    <>
      <path d="M4 9h11a5 5 0 0 1 0 10H9" />
      <path d="m8 5-4 4 4 4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 19 6v6c0 4.2-3 7-7 8.5-4-1.5-7-4.3-7-8.5V6l7-2.5Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  support: (
    <>
      <path d="M4.5 13v-1a7.5 7.5 0 0 1 15 0v1" />
      <path d="M4.5 12.5h2.2v5H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 .5-1Z" />
      <path d="M19.5 12.5h-2.2v5H19a1 1 0 0 0 1-1v-3a1 1 0 0 0-.5-1Z" />
      <path d="M17.5 18.5c0 1.4-1.6 2.5-4 2.5" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.8" cy="7.2" r=".9" fill="currentColor" stroke="none" />
    </>
  ),
  pinterest: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M10.4 17.5 12 11" />
      <path d="M9.6 12.6c-.6-1.5.1-3.4 1.9-3.9 1.7-.5 3.4.4 3.4 2.2 0 1.6-.9 3-2.2 3-.9 0-1.6-.7-1.4-1.6" />
    </>
  ),
  facebook: <path d="M14.5 8.5h2V5.7h-2.2c-2 0-3.3 1.3-3.3 3.4v1.6H9v2.8h2v6.8h2.9v-6.8h2.3l.4-2.8h-2.7V9.4c0-.6.3-.9.9-.9Z" />,
  youtube: (
    <>
      <rect x="3" y="6.5" width="18" height="11" rx="3.4" />
      <path d="M10.5 9.8v4.4l4-2.2-4-2.2Z" fill="currentColor" stroke="none" />
    </>
  ),
  filter: (
    <>
      <path d="M3.5 6.5h17" />
      <path d="M6.5 12h11" />
      <path d="M10 17.5h4" />
    </>
  ),
  sliders: (
    <>
      <path d="M4 7h9" />
      <path d="M17 7h3" />
      <circle cx="15" cy="7" r="2" />
      <path d="M4 17h3" />
      <path d="M11 17h9" />
      <circle cx="9" cy="17" r="2" />
    </>
  ),
  grid: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </>
  ),
  list: (
    <>
      <path d="M4 6.5h16" />
      <path d="M4 12h16" />
      <path d="M4 17.5h16" />
    </>
  ),
  trash: (
    <>
      <path d="M5 7h14" />
      <path d="M9 7V5h6v2" />
      <path d="m6.5 7 1 12h9l1-12" />
      <path d="M10.5 10.5v5" />
      <path d="M13.5 10.5v5" />
    </>
  ),
  eye: (
    <>
      <path d="M2.8 12S6 6.8 12 6.8 21.2 12 21.2 12 18 17.2 12 17.2 2.8 12 2.8 12Z" />
      <circle cx="12" cy="12" r="2.6" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3.5c.7 3.6 2 4.9 5.6 5.6-3.6.7-4.9 2-5.6 5.6-.7-3.6-2-4.9-5.6-5.6 3.6-.7 4.9-2 5.6-5.6Z" />
      <path d="M17.8 15c.4 1.7 1 2.3 2.7 2.7-1.7.4-2.3 1-2.7 2.7-.4-1.7-1-2.3-2.7-2.7 1.7-.4 2.3-1 2.7-2.7Z" />
    </>
  ),
}

/** Directional icons are mirrored so arrows point the RTL way. */
const MIRRORED: IconName[] = ['arrow-right', 'arrow-up-right', 'chevron-left', 'chevron-right', 'return']

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName
  size?: number
}

export function Icon({ name, size = 20, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={['icon', MIRRORED.includes(name) ? 'icon--flip' : '', className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {paths[name]}
    </svg>
  )
}
