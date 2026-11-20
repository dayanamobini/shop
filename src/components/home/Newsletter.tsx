import { useState } from 'react'
import { PHOTO } from '../../data/images'
import { useStore } from '../../store/StoreContext'
import { Icon } from '../ui/Icon'
import { Img } from '../ui/Img'
import { Reveal } from '../ui/Reveal'

export function Newsletter() {
  const { notify } = useStore()
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="container">
        <Reveal className="newsletter__panel">
          <div className="newsletter__copy">
            <p className="eyebrow eyebrow--light">خبرنامه‌ی یکشنبه</p>
            <h2 className="newsletter__title" id="newsletter-title">
              در جریان <em>زیبایی‌ها</em> باش
            </h2>
            <p className="newsletter__text">
              برای دریافت ایده‌های دکوراسیون، محصولات جدید و پیشنهادهای ویژه ایمیلت را وارد کن.
            </p>
            <form
              className="newsletter__form"
              onSubmit={(event) => {
                event.preventDefault()
                if (!email.trim()) return
                setDone(true)
                setEmail('')
                notify('به فهرست ما خوش آمدید.', 'اولین خبرنامه‌ی یکشنبه در راه است.')
              }}
            >
              <label className="sr-only" htmlFor="newsletter-email">
                نشانی ایمیل
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="ایمیل خود را وارد کنید"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit" className="btn btn--light">
                <span>عضویت</span>
                <Icon name="arrow-right" size={16} />
              </button>
            </form>
            <p className="newsletter__note" role="status">
              {done ? 'سپاسگزاریم — در فهرست ما هستی.' : 'بدون هیاهو. هر وقت خواستی لغو کن.'}
            </p>
          </div>

          <figure className="newsletter__media" aria-hidden="true">
            <Img
              photo={PHOTO.collectionGolden}
              alt=""
              sizes="(max-width: 767px) 0px, 420px"
              ratio={[3, 4]}
            />
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
