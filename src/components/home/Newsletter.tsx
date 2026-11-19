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
            <p className="eyebrow eyebrow--light">The Sunday Edit</p>
            <h2 className="newsletter__title" id="newsletter-title">
              Stay in the <em>Loop</em>
            </h2>
            <p className="newsletter__text">
              Get décor inspiration, new arrivals and exclusive offers — one considered email a
              week.
            </p>
            <form
              className="newsletter__form"
              onSubmit={(event) => {
                event.preventDefault()
                if (!email.trim()) return
                setDone(true)
                setEmail('')
                notify('Welcome to the list.', 'Your first Sunday Edit is on its way.')
              }}
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit" className="btn btn--light">
                <span>Subscribe</span>
                <Icon name="arrow-right" size={16} />
              </button>
            </form>
            <p className="newsletter__note" role="status">
              {done
                ? 'Thank you — you’re on the list.'
                : 'No noise. Unsubscribe anytime.'}
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
