import { Link } from '../../lib/router';

export function Logo({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link to="/" className="brand" aria-label="Webeko — صفحه اصلی" onClick={onNavigate}>
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path
            d="M7.5 11l3.4 10 5.1-7.2 5.1 7.2 3.4-10"
            stroke="#FFFFFF"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span dir="ltr">
        Webeko<span className="brand-dot">.</span>
      </span>
    </Link>
  );
}
