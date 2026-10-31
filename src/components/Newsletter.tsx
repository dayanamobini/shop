import { useState } from 'react'
import { CheckIcon, EnvelopeIcon } from './Icons'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'done'>('idle')

  const submit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus('error')
      return
    }
    setStatus('done')
    setEmail('')
  }

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="container newsletter__inner">
        <div className="newsletter__lead">
          <span className="newsletter__icon" aria-hidden="true">
            <EnvelopeIcon size={22} />
          </span>
          <div>
            <h2 id="newsletter-title">Join DEVA</h2>
            <p>
              Subscribe for early access to new arrivals, exclusive offers, and style inspiration.
            </p>
          </div>
        </div>

        <div>
          <form className="newsletter__form" onSubmit={submit} noValidate>
            <label htmlFor="newsletter-email" className="visually-hidden">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              placeholder="Your email address"
              onChange={(event) => {
                setEmail(event.target.value)
                if (status !== 'idle') setStatus('idle')
              }}
              aria-invalid={status === 'error'}
            />
            <button type="submit" className="btn">
              Subscribe
            </button>
          </form>

          {status === 'error' && (
            <p className="form-message form-message--error" role="alert">
              Please enter a valid email address.
            </p>
          )}
          {status === 'done' && (
            <p className="form-message" role="status">
              <CheckIcon size={14} /> Thank you — you are on the list.
            </p>
          )}
          {status === 'idle' && (
            <p className="newsletter__note">
              By subscribing you agree to our privacy policy. Unsubscribe at any time.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
