import { useCallback, useEffect, useRef, useState } from 'react'
import type { Product } from '../../data/products'
import { Icon } from '../ui/Icon'
import { ProductCard } from './ProductCard'

/** Scroll-snap carousel with arrow controls; swipeable on touch devices. */
export function ProductCarousel({ products }: { products: Product[] }) {
  const track = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const update = useCallback(() => {
    const el = track.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    const el = track.current
    if (!el) return
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [update])

  const move = (direction: 1 | -1) => {
    const el = track.current
    if (!el) return
    el.scrollBy({ left: direction * Math.max(el.clientWidth * 0.82, 280), behavior: 'smooth' })
  }

  return (
    <div className="carousel">
      <div className="carousel__track" ref={track}>
        {products.map((product) => (
          <div className="carousel__item" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="carousel__arrow carousel__arrow--prev"
        onClick={() => move(-1)}
        disabled={atStart}
        aria-label="Previous products"
      >
        <Icon name="chevron-left" />
      </button>
      <button
        type="button"
        className="carousel__arrow carousel__arrow--next"
        onClick={() => move(1)}
        disabled={atEnd}
        aria-label="Next products"
      >
        <Icon name="chevron-right" />
      </button>
    </div>
  )
}
