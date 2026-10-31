import { useRef } from 'react'
import { products } from '../data/catalog'
import { Link } from '../lib/router'
import ProductCard from './ProductCard'
import { ChevronLeftIcon, ChevronRightIcon } from './Icons'

export default function BestSellers() {
  const trackRef = useRef<HTMLDivElement>(null)
  const bestsellers = products.filter((product) => product.badge === 'Bestseller')

  const scroll = (direction: number) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * (track.clientWidth * 0.7), behavior: 'smooth' })
  }

  return (
    <section className="section" aria-labelledby="bestsellers-title">
      <div className="container">
        <div className="section-head">
          <div className="section-head__text">
            <p className="eyebrow">Most loved</p>
            <h2 className="section-title" id="bestsellers-title" style={{ marginTop: 12 }}>
              Best Sellers
            </h2>
            <p>The pieces our community returns for, season after season.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <Link to="/shop?sort=bestselling" className="text-link">
              View all
            </Link>
            <div className="carousel__nav">
              <button
                type="button"
                className="carousel__btn"
                aria-label="Previous products"
                onClick={() => scroll(-1)}
              >
                <ChevronLeftIcon size={16} />
              </button>
              <button
                type="button"
                className="carousel__btn"
                aria-label="Next products"
                onClick={() => scroll(1)}
              >
                <ChevronRightIcon size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="carousel">
          <div className="carousel__track" ref={trackRef}>
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
