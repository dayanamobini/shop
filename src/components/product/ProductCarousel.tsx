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
    const offset = Math.abs(el.scrollLeft)
    setAtStart(offset <= 4)
    setAtEnd(offset + el.clientWidth >= el.scrollWidth - 4)
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

  /** In RTL the browser scrolls to the left with negative offsets. */
  const move = (direction: 1 | -1) => {
    const el = track.current
    if (!el) return
    const rtl = getComputedStyle(el).direction === 'rtl'
    const step = Math.max(el.clientWidth * 0.82, 280)
    el.scrollBy({ left: direction * step * (rtl ? -1 : 1), behavior: 'smooth' })
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
        aria-label="محصولات قبلی"
      >
        <Icon name="chevron-left" />
      </button>
      <button
        type="button"
        className="carousel__arrow carousel__arrow--next"
        onClick={() => move(1)}
        disabled={atEnd}
        aria-label="محصولات بعدی"
      >
        <Icon name="chevron-right" />
      </button>
    </div>
  )
}
