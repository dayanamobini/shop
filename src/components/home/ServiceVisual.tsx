import type { ServiceVisual as VisualKind } from '../../data/services';
import { Icon } from '../ui/Icon';

/** Small futuristic UI mockups used inside service cards. */
export function ServiceVisual({ variant }: { variant: VisualKind }) {
  if (variant === 'browser') {
    return (
      <div className="sv">
        <div className="sv-window">
          <div className="sv-window-bar">
            <span className="sv-dot" />
            <span className="sv-dot" />
            <span className="sv-dot" />
          </div>
          <div className="sv-window-body">
            <div className="sv-hero-block" />
            <div className="sv-line" />
            <div className="sv-line sv-line--short" />
            <div className="sv-pair">
              <div className="sv-block" />
              <div className="sv-block" />
            </div>
          </div>
        </div>
        <span className="sv-chip-float">
          <Icon name="cursor" size={11} />
          طراحی اختصاصی
        </span>
      </div>
    );
  }

  if (variant === 'shop') {
    return (
      <div className="sv">
        <div className="sv-product-back" />
        <div className="sv-product">
          <div className="sv-product-img" />
          <div className="sv-line" />
          <div className="sv-line sv-line--short" />
          <div className="sv-product-row">
            <span className="sv-price">۲٫۴۸۰٫۰۰۰</span>
            <span className="sv-buy">افزودن</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'uiux') {
    return (
      <div className="sv">
        <div className="sv-ui">
          <div className="sv-ui-row">
            <span>حالت تاریک</span>
            <span className="sv-toggle" />
          </div>
          <div className="sv-ui-row">
            <span className="sv-slider" />
          </div>
          <div className="sv-ui-row">
            <span>ذخیره تغییرات</span>
            <span className="sv-btn-pill">ذخیره</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sv">
      <div className="sv-code">
        {[0, 1, 2, 3, 4].map((line) => (
          <div className="sv-code-line" key={line}>
            <i />
            <i />
            <i />
          </div>
        ))}
      </div>
      <div className="sv-bars" aria-hidden="true">
        <span style={{ height: '38%' }} />
        <span style={{ height: '64%' }} />
        <span style={{ height: '48%' }} />
        <span style={{ height: '88%' }} />
        <span style={{ height: '72%' }} />
      </div>
    </div>
  );
}
