import { useState } from 'react'
import { testimonials } from '../data/catalog'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from './Icons'

const PAGE_SIZE = 3

export default function Testimonials() {
  const [page, setPage] = useState(0)
  const pages = Math.ceil(testimonials.length / PAGE_SIZE)
  const visible = testimonials.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  const move = (direction: number) => {
    setPage((current) => (current + direction + pages) % pages)
  }

  return (
    <section className="section testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="testimonials__head">
          <div>
            <p className="eyebrow">Loved by our community</p>
            <h2 className="section-title" id="testimonials-title" style={{ marginTop: 12 }}>
              What Our Customers Say
            </h2>
          </div>
          <div className="carousel__nav">
            <button
              type="button"
              className="carousel__btn"
              aria-label="Previous testimonials"
              onClick={() => move(-1)}
            >
              <ChevronLeftIcon size={16} />
            </button>
            <button
              type="button"
              className="carousel__btn"
              aria-label="Next testimonials"
              onClick={() => move(1)}
            >
              <ChevronRightIcon size={16} />
            </button>
          </div>
        </div>

        <div className="testimonials__grid" aria-live="polite">
          {visible.map((testimonial) => (
            <figure className="review-card" key={testimonial.name}>
              <div className="stars" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <StarIcon key={index} size={13} />
                ))}
              </div>
              <blockquote className="review-card__quote">“{testimonial.quote}”</blockquote>
              <figcaption className="review-card__author">
                <img src={testimonial.avatar} alt="" loading="lazy" width={84} height={84} />
                <span>
                  <span className="review-card__name">{testimonial.name}</span>
                  <span className="review-card__meta">{testimonial.location} · Verified buyer</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
