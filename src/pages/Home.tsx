import BestSellers from '../components/BestSellers'
import CategoryCarousel from '../components/CategoryCarousel'
import Hero from '../components/Hero'
import InstagramGallery from '../components/InstagramGallery'
import ProductCard from '../components/ProductCard'
import PromotionalBanner from '../components/PromotionalBanner'
import Testimonials from '../components/Testimonials'
import { products, promoBanners } from '../data/catalog'
import { Link } from '../lib/router'
import { EnvelopeIcon, ReturnIcon, ShieldIcon, TruckIcon } from '../components/Icons'

const services = [
  { icon: <TruckIcon size={20} />, title: 'Complimentary shipping', text: 'On all orders over $99' },
  { icon: <ReturnIcon size={20} />, title: '30-day returns', text: 'Easy, no-questions exchanges' },
  { icon: <ShieldIcon size={20} />, title: 'Secure checkout', text: 'Encrypted payments' },
  { icon: <EnvelopeIcon size={20} />, title: 'Considered packaging', text: 'Recycled and recyclable' },
]

export default function Home() {
  const newArrivals = products.filter((product) => product.badge === 'New').slice(0, 4)

  return (
    <>
      <Hero />
      <CategoryCarousel />

      <section className="section" aria-labelledby="new-arrivals-title">
        <div className="container split">
          <div className="split__aside">
            <p className="eyebrow">Just arrived</p>
            <h2 id="new-arrivals-title">New Arrivals</h2>
            <p>
              Fresh styles just in — quiet, considered pieces in ivory, sand and taupe, made to
              live in your wardrobe for years.
            </p>
            <Link to="/shop" className="btn">
              Shop all
            </Link>
          </div>
          <div className="products-grid products-grid--4">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight" aria-label="Seasonal edits">
        <div className="container promos">
          {promoBanners.map((banner) => (
            <PromotionalBanner key={banner.title} banner={banner} />
          ))}
        </div>
      </section>

      <BestSellers />
      <Testimonials />

      <section className="services" aria-label="Service information">
        <div className="container services__grid">
          {services.map((service) => (
            <div className="service" key={service.title}>
              {service.icon}
              <div>
                <h4>{service.title}</h4>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <InstagramGallery />
    </>
  )
}
