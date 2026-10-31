import { instagramPosts } from '../data/catalog'
import { InstagramIcon } from './Icons'

export default function InstagramGallery() {
  return (
    <section className="section section--tight" aria-labelledby="instagram-title">
      <div className="container">
        <div className="instagram__head">
          <p className="eyebrow">Follow the collection</p>
          <h2 className="section-title" id="instagram-title" style={{ marginTop: 10 }}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer noopener">
              Follow Us @deva.collection
            </a>
          </h2>
        </div>

        <div className="instagram__grid">
          {instagramPosts.map((post) => (
            <a
              key={post.image}
              className="ig-tile"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Open on Instagram: ${post.caption}`}
            >
              <img src={post.image} alt={post.caption} loading="lazy" width={400} height={400} />
              <span className="ig-tile__icon" aria-hidden="true">
                <InstagramIcon size={22} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
