import { COLLECTIONS, MEGA_MENU } from '../../data/content'
import { FREE_SHIPPING_THRESHOLD } from '../../lib/commerce'
import { money } from '../../lib/format'
import { Img } from '../ui/Img'
import { ButtonLink } from '../ui/Button'

export function MegaMenu({ onNavigate }: { onNavigate: () => void }) {
  const featured = COLLECTIONS[3]
  return (
    <div className="mega" onMouseLeave={onNavigate}>
      <div className="mega__inner container">
        <div className="mega__cols">
          {MEGA_MENU.map((group) => (
            <div className="mega__col" key={group.title}>
              <p className="mega__title">{group.title}</p>
              <ul className="mega__list">
                {group.links.map((item) => (
                  <li key={item.label}>
                    <a href={`/shop?category=${item.category}`} onClick={onNavigate}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mega__col mega__col--soft">
            <p className="mega__title">کالکشن‌ها</p>
            <ul className="mega__list">
              {COLLECTIONS.slice(0, 4).map((collection) => (
                <li key={collection.id}>
                  <a href={`/collections/${collection.id}`} onClick={onNavigate}>
                    {collection.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="/collections" onClick={onNavigate}>
                  همه‌ی کالکشن‌ها
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a
          className="mega__feature"
          href={`/collections/${featured.id}`}
          onClick={onNavigate}
        >
          <span className="mega__feature-media">
            <Img
              photo={featured.photo}
              alt={featured.name}
              sizes="(max-width: 1199px) 0px, 320px"
              ratio={[4, 5]}
            />
          </span>
          <span className="mega__feature-body">
            <span className="eyebrow">کالکشن منتخب</span>
            <span className="mega__feature-title">{featured.name}</span>
            <span className="mega__feature-link">مشاهده</span>
          </span>
        </a>
      </div>
      <div className="mega__footer container">
        <span>ارسال رایگان برای سفارش‌های بالای {money(FREE_SHIPPING_THRESHOLD)}</span>
        <ButtonLink href="/shop" variant="ghost" size="sm" icon="arrow-right">
          همه‌ی محصولات
        </ButtonLink>
      </div>
    </div>
  )
}
