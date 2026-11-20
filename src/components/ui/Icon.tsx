import type { ReactNode } from 'react';

export type IconName =
  | 'sparkles'
  | 'bolt'
  | 'browser'
  | 'cart'
  | 'palette'
  | 'code'
  | 'shield'
  | 'gauge'
  | 'support'
  | 'layers'
  | 'devices'
  | 'search'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up-left'
  | 'check'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'plus'
  | 'minus'
  | 'menu'
  | 'close'
  | 'star'
  | 'quote'
  | 'instagram'
  | 'telegram'
  | 'linkedin'
  | 'phone'
  | 'mail'
  | 'pin'
  | 'eye'
  | 'external'
  | 'chart'
  | 'wand'
  | 'cursor'
  | 'target'
  | 'rocket'
  | 'refresh';

const shapes: Record<IconName, ReactNode> = {
  sparkles: (
    <>
      <path d="M12 3.2l1.85 4.72L18.6 9.8l-4.75 1.88L12 16.4l-1.85-4.72L5.4 9.8l4.75-1.88L12 3.2z" />
      <path d="M18.4 14.6l.8 2 2.1.8-2.1.85-.8 2-.85-2-2.05-.85 2.05-.8.85-2z" />
    </>
  ),
  bolt: <path d="M13.2 2.5L4.6 13.4h6.1l-.9 8.1 8.6-10.9h-6.1l.9-8.1z" />,
  browser: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="3" />
      <path d="M3 9.5h18" />
      <path d="M6.4 7h.01M9.2 7h.01" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4.5h2.1l2.3 10.6a2 2 0 001.95 1.6h7.3a2 2 0 001.95-1.55L20 8H6.2" />
      <circle cx="9.5" cy="20" r="1.3" />
      <circle cx="17" cy="20" r="1.3" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 100 18h1.2a2.3 2.3 0 000-4.6h-.6a1.9 1.9 0 010-3.8h4.1A4.3 4.3 0 0021 8.3C21 5.2 17 3 12 3z" />
      <circle cx="8.2" cy="9" r="1" />
      <circle cx="12" cy="7" r="1" />
      <circle cx="15.8" cy="9" r="1" />
      <circle cx="7.8" cy="13.5" r="1" />
    </>
  ),
  code: (
    <>
      <path d="M8.5 8.5L4.5 12l4 3.5" />
      <path d="M15.5 8.5l4 3.5-4 3.5" />
      <path d="M13.4 5l-2.8 14" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.2l7.2 3v5.6c0 4.2-3 7.9-7.2 9.4-4.2-1.5-7.2-5.2-7.2-9.4V6.2l7.2-3z" />
      <path d="M9.2 12.1l2 2 3.6-3.8" />
    </>
  ),
  gauge: (
    <>
      <path d="M4.6 18a9 9 0 1114.8 0" />
      <path d="M12 14l4.2-4.4" />
      <circle cx="12" cy="14" r="1.4" />
    </>
  ),
  support: (
    <>
      <path d="M4 13v-1a8 8 0 0116 0v1" />
      <rect x="3.2" y="13" width="4" height="6" rx="2" />
      <rect x="16.8" y="13" width="4" height="6" rx="2" />
      <path d="M20 19v.4a2.6 2.6 0 01-2.6 2.6H13" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3.2l9 4.6-9 4.6-9-4.6 9-4.6z" />
      <path d="M3 12.4l9 4.6 9-4.6" />
      <path d="M3 16.8l9 4.6 9-4.6" />
    </>
  ),
  devices: (
    <>
      <rect x="2.5" y="5" width="12.5" height="9.5" rx="2" />
      <path d="M6 18.5h6" />
      <rect x="16.5" y="9" width="5" height="10" rx="1.6" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </>
  ),
  'arrow-left': (
    <>
      <path d="M19 12H5" />
      <path d="M11 6l-6 6 6 6" />
    </>
  ),
  'arrow-right': (
    <>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  'arrow-up-left': (
    <>
      <path d="M17 17L7 7" />
      <path d="M7 15V7h8" />
    </>
  ),
  check: <path d="M20 6.5L9.5 17 4 11.5" />,
  'chevron-down': <path d="M6 9.5l6 6 6-6" />,
  'chevron-left': <path d="M14.5 6l-6 6 6 6" />,
  'chevron-right': <path d="M9.5 6l6 6-6 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  menu: <path d="M4 7h16M4 12h16M4 17h10" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  star: (
    <path
      d="M12 3.6l2.6 5.3 5.9.85-4.25 4.15 1 5.85L12 16.95 6.75 19.75l1-5.85L3.5 9.75l5.9-.85L12 3.6z"
      fill="currentColor"
      stroke="none"
    />
  ),
  quote: (
    <path
      d="M9.5 6.5C6.9 7.6 5.5 9.6 5.5 12.4V17h5v-4.6H8c0-1.8.7-3 2.4-3.8l-.9-2.1zM19 6.5c-2.6 1.1-4 3.1-4 5.9V17h5v-4.6h-2.5c0-1.8.7-3 2.4-3.8L19 6.5z"
      fill="currentColor"
      stroke="none"
    />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  telegram: <path d="M21 4.5L2.8 11.4l5.3 1.7L20 5.4l-9.4 9.1-.3 4.6 3-2.8 4.2 2.9L21 4.5z" />,
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M8 10.5v6M8 7.6v.01" />
      <path d="M12 16.5v-3.2a2.4 2.4 0 014.8 0v3.2" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5h2.8l1.6 4-2 1.4a10.5 10.5 0 005.2 5.2l1.4-2 4 1.6v2.8a2.4 2.4 0 01-2.6 2.4C10.2 18.2 5.8 13.8 4.1 6.1A2.4 2.4 0 016.5 3.5z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M3.8 7.2l7.3 5.1a1.6 1.6 0 001.8 0l7.3-5.1" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4l-8.5 8.5" />
      <path d="M18.5 14.5V18a2 2 0 01-2 2H6a2 2 0 01-2-2V7.5a2 2 0 012-2h3.5" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V11" />
      <path d="M10 20V5" />
      <path d="M16 20v-6" />
      <path d="M22 20H2" />
    </>
  ),
  wand: (
    <>
      <path d="M4 20l9.5-9.5" />
      <path d="M14.5 4.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5z" />
      <path d="M19.5 13l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8z" />
    </>
  ),
  cursor: <path d="M5 3.5l5.2 16.2 2.6-6.4 6.4-2.6L5 3.5z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  rocket: (
    <>
      <path d="M13.5 4.5c3.6-1.4 6-1 6-1s.4 2.4-1 6c-1 2.5-3 5-6.5 7l-4-4c2-3.5 4.5-5.5 5.5-8z" />
      <path d="M9 13.5l-4.5 1.5L3 20l4.5-.5L8 15" />
      <circle cx="15" cy="9" r="1.2" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 12a8 8 0 10-2.6 5.9" />
      <path d="M20 5v4.5h-4.5" />
    </>
  ),
};

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
};

export function Icon({ name, size = 20, className, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {shapes[name]}
    </svg>
  );
}
