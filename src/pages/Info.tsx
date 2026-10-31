import { Link } from '../lib/router'

type InfoPage = { title: string; intro: string; sections: { heading: string; body: string }[] }

const pages: Record<string, InfoPage> = {
  'our-story': {
    title: 'Our Story',
    intro:
      'DEVA was founded on a simple idea: that a wardrobe should be small, considered and worn often.',
    sections: [
      {
        heading: 'How we began',
        body: 'We started with nine pieces — a shirt, a blazer, a knit, a dress and the essentials around them — designed to work together season after season. Each one was refined over a year of fittings before it was made available.',
      },
      {
        heading: 'How we design',
        body: 'Every collection begins with fabric. We work with mills in Italy, Portugal and Japan on natural fibres that age well, then cut them into quiet, modern silhouettes that do not date.',
      },
    ],
  },
  sustainability: {
    title: 'Sustainability',
    intro: 'Fewer, better things — made responsibly and designed to be kept.',
    sections: [
      {
        heading: 'Materials',
        body: 'We use natural and recycled fibres: wool, silk, linen, organic cotton and deadstock fabric from partner mills. No virgin synthetics in our ready-to-wear.',
      },
      {
        heading: 'Production',
        body: 'We produce in small runs with long-term partners in Portugal, Italy and Spain, all of whom we visit at least once a year.',
      },
      {
        heading: 'Packaging',
        body: 'Orders ship in recycled, recyclable packaging with no plastic. Garments arrive on recycled hangers or folded in reusable dust bags.',
      },
    ],
  },
  careers: {
    title: 'Careers',
    intro: 'We are a small studio of designers, pattern cutters and client care specialists.',
    sections: [
      {
        heading: 'Open roles',
        body: 'There are no open positions at present. We keep a record of exceptional people — send a short note and your portfolio to careers@devacollection.example and we will be in touch when something suits.',
      },
    ],
  },
  contact: {
    title: 'Contact Us',
    intro: 'Our client care team replies to every message within one business day.',
    sections: [
      {
        heading: 'Client care',
        body: 'Email: care@devacollection.example · Monday to Friday, 9am–6pm GMT. For order questions, include your order number (it begins with DV-).',
      },
      {
        heading: 'Studio',
        body: 'DEVA Collection, 14 Lambs Conduit Street, London WC1N 3LW. Visits by appointment only.',
      },
    ],
  },
  shipping: {
    title: 'Shipping Information',
    intro: 'Complimentary standard delivery on orders over $99.',
    sections: [
      {
        heading: 'Delivery times',
        body: 'Standard: 2–4 business days ($9, free over $99). Express: 1–2 business days ($15). Orders placed before 2pm GMT ship the same day.',
      },
      {
        heading: 'Tracking',
        body: 'You will receive a tracking link by email as soon as your parcel leaves our studio. Tracking is also available in your account under Order history.',
      },
      {
        heading: 'International',
        body: 'We ship to the UK, EU, US and Australia. Duties are calculated at checkout so there is nothing to pay on delivery.',
      },
    ],
  },
  returns: {
    title: 'Returns & Exchanges',
    intro: 'Unworn pieces may be returned within 30 days of delivery.',
    sections: [
      {
        heading: 'How to return',
        body: 'Open your account, choose the order, and select the pieces you wish to return. We will email a prepaid label. Pack the pieces in their original condition with tags attached.',
      },
      {
        heading: 'Refunds',
        body: 'Refunds are issued to the original payment method within five business days of the parcel reaching our studio.',
      },
      {
        heading: 'Exchanges',
        body: 'Exchanges for a different size are free. Reply to your order confirmation with the size you need and we will hold it for you.',
      },
    ],
  },
  'size-guide': {
    title: 'Size Guide',
    intro: 'Our pieces are cut for a relaxed, true-to-size fit — take your usual size.',
    sections: [
      {
        heading: 'Clothing',
        body: 'XS = UK 6 / EU 34 · S = UK 8 / EU 36 · M = UK 10 / EU 38 · L = UK 12 / EU 40 · XL = UK 14 / EU 42.',
      },
      {
        heading: 'Footwear',
        body: 'Our shoes run true to size in EU sizing. For a wider fit, take the next size up. Between sizes? Size up for boots, down for ballet flats.',
      },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    intro: 'The questions we are asked most often.',
    sections: [
      {
        heading: 'When will my order arrive?',
        body: 'Standard delivery takes 2–4 business days, express 1–2. You will receive tracking as soon as the parcel leaves us.',
      },
      {
        heading: 'Can I change my order?',
        body: 'We can amend an order until it ships. Email care@devacollection.example with your order number as soon as possible.',
      },
      {
        heading: 'How do I care for my pieces?',
        body: 'Care instructions are printed on every garment label and listed on each product page. Wash sparingly and air between wears.',
      },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    intro: 'The terms that apply when you shop with DEVA Collection.',
    sections: [
      {
        heading: 'Orders',
        body: 'All orders are subject to availability and confirmation of payment. Prices are shown in USD and include applicable tax.',
      },
      {
        heading: 'Returns',
        body: 'Unworn pieces with tags attached may be returned within 30 days of delivery for a full refund.',
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    intro: 'We collect the minimum information needed to process your order.',
    sections: [
      {
        heading: 'What we store',
        body: 'Your name, email, delivery address and order history. This demonstration store keeps your bag, wishlist and account details in your own browser; nothing is sent to a server.',
      },
      {
        heading: 'Your rights',
        body: 'You may request a copy of your data, or ask for it to be deleted, at any time by writing to privacy@devacollection.example.',
      },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    intro: 'We use only what is necessary to keep your bag and preferences working.',
    sections: [
      {
        heading: 'Essential storage',
        body: 'Your bag, wishlist and account state are saved in your browser local storage so they survive a page reload. No advertising or analytics cookies are set.',
      },
    ],
  },
}

export default function Info({ slug }: { slug: string }) {
  const page = pages[slug]

  if (!page) {
    return (
      <div className="container">
        <div className="empty" style={{ margin: 'clamp(40px, 6vw, 80px) 0' }}>
          <h1>Page not found</h1>
          <p>The page you were looking for has moved or no longer exists.</p>
          <Link to="/" className="btn">
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="page-head">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--charcoal)' }}>{page.title}</span>
          </nav>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(30px, 4vw, 56px) 0 clamp(50px, 6vw, 90px)' }}>
        <div style={{ maxWidth: 680, display: 'grid', gap: 28 }}>
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 style={{ fontSize: 24, marginBottom: 10 }}>{section.heading}</h2>
              <p style={{ fontSize: 13.5, lineHeight: 1.9, color: '#5d626a' }}>{section.body}</p>
            </section>
          ))}
          <Link to="/shop" className="btn" style={{ justifySelf: 'start', marginTop: 8 }}>
            Shop the collection
          </Link>
        </div>
      </div>
    </>
  )
}
