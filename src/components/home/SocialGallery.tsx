import { SOCIAL_TILES } from '../../data/content'
import { Icon } from '../ui/Icon'
import { Img } from '../ui/Img'
import { Reveal } from '../ui/Reveal'

export function SocialGallery() {
  return (
    <section className="section social" aria-labelledby="social-title">
      <div className="container">
        <Reveal className="social__head">
          <p className="eyebrow">@dreamdecor.studio</p>
          <h2 className="social__title" id="social-title">
            با ما <em>الهام</em> بگیر
          </h2>
          <p className="social__copy">ایده‌هایی برای زیباتر زندگی کردن.</p>
        </Reveal>

        <ul className="social__grid">
          {SOCIAL_TILES.map((tile, index) => (
            <li key={tile.photo + index} className={index === 0 || index === 5 ? 'social__tile social__tile--tall' : 'social__tile'}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer noopener">
                <Img
                  photo={tile.photo}
                  alt={tile.caption}
                  sizes="(max-width: 767px) 45vw, (max-width: 1199px) 30vw, 23vw"
                  ratio={[1, 1]}
                />
                <span className="social__overlay">
                  <Icon name="instagram" size={22} />
                  <span className="social__caption">{tile.caption}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
