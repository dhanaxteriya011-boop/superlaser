import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'

const HERO_SLIDES = [
  {
    img: '/images/2026_ProductCatalog_page-0001.jpg',
    fallback: '/images/2026_ProductCatalog_page-0001.jpg',
    tag: '25+ Years · Chennai\'s Finest',
    line1: 'Crafting Excellence,',
    line2: 'One Trophy at a Time',
    sub: 'Star & Figurine Trophies — Series 705–707',
  },
  {
    img: '/images/2026_ProductCatalog_page-0018.jpg',
    fallback: '/images/2026_ProductCatalog_page-0018.jpg',
    tag: 'Acrylic · Crystal · Metal Awards',
    line1: 'Laser Precision,',
    line2: 'Timeless Recognition',
    sub: 'Acrylic Frame Awards — Series 703–704',
  },
  {
    img: '/images/2026_ProductCatalog_page-0001.jpg',
    fallback: '/images/2026_ProductCatalog_page-0001.jpg',
    tag: 'Sports · Corporate · Academic Events',
    line1: 'Bulk Orders,',
    line2: 'Premium Quality Delivered',
    sub: 'Wooden Block Trophies — Series 105–107',
  },
]

const SERVICES = [
  { ico: '🏆', title: 'Custom Trophies',      desc: 'Gold, silver & bronze trophies for tournaments and corporate events. Fully customisable with laser engraving.', tag: 'Most Popular' },
  { ico: '🥇', title: 'Acrylic Awards',        desc: 'Premium laser-cut acrylic awards with crystal-clear finish, custom shapes and full-colour UV printing.',         tag: 'Bestseller' },
  { ico: '🔮', title: 'Crystal Trophies',      desc: 'Exquisite crystal and glass trophies perfect for prestigious ceremonies and VIP corporate gifting.',               tag: 'Premium' },
  { ico: '🎖️', title: 'Corporate Mementos',   desc: 'Elegant plaques and shields for corporate gifting, retirement functions and brand milestone events.',             tag: 'Corporate' },
  { ico: '🪧', title: 'Name Plates & Boards', desc: 'Laser engraved name plates, signage and display boards for offices, hospitals and retail spaces.',               tag: 'Signage' },
  { ico: '🎗️', title: 'Medal & Ribbon Sets',  desc: 'Sports and academic medals with premium ribbons. Bulk orders with fast turnaround and custom dies.',             tag: 'Bulk' },
]

const WHY = [
  { ico: '⚡', title: '25+ Years Experience', desc: 'Serving Chennai since 1999 with unmatched expertise in trophy craft.' },
  { ico: '🎯', title: 'Bulk Order Specialists', desc: 'From 1 piece to 10,000 units — we scale without compromising quality.' },
  { ico: '✂️', title: 'Laser Precision Tech',   desc: 'CNC and laser engraving machines for flawless, consistent results.' },
  { ico: '🚚', title: 'Pan-India Delivery',     desc: 'Fast, safe shipping across Tamil Nadu and all major Indian cities.' },
]

const GALLERY = [
  { img: '/images/trophy-42.jpg', label: 'Star & Figurine Trophies', sub: 'Trophy 705–707 Series', tag: 'Bestseller' },
  { img: '/images/trophy-43.jpg', label: 'Acrylic Frame Awards',      sub: 'Trophy 703–704 Series', tag: 'Corporate' },
  { img: '/images/trophy-53.jpg', label: 'Wooden Block Trophies',     sub: 'Trophy 105–107 Series', tag: 'Premium' },
]

const CLIENTS = ['TATA', 'IBM', 'BSNL', 'Anna University', 'IIT Madras', 'Chennai FC', 'NCC India', 'CBSE Schools', 'Apollo Hospitals', 'TVS Group', 'BHEL', 'Railways']

// ── Scroll Reveal Hook ──────────────────────────────────────
function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

// ── Hero ─────────────────────────────────────────────────────
function Hero() {
  const [slide, setSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState(null)
  const [transitioning, setTransitioning] = useState(false)
  const navigate = useNavigate()
  const n = HERO_SLIDES.length

  const goTo = (idx) => {
    if (transitioning || idx === slide) return
    setPrevSlide(slide)
    setTransitioning(true)
    setSlide(idx)
    setTimeout(() => { setPrevSlide(null); setTransitioning(false) }, 900)
  }

  useEffect(() => {
    const t = setInterval(() => goTo((slide + 1) % n), 5500)
    return () => clearInterval(t)
  }, [slide, transitioning])

  const cur = HERO_SLIDES[slide]

  return (
    <section className="hero hero-bg-carousel">

      {/* Background image layers */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={i}
          className={`hero-bg-layer ${i === slide ? 'active' : ''} ${i === prevSlide ? 'prev' : ''}`}
          style={{ backgroundImage: `url(${s.fallback || s.img})` }}
        />
      ))}

      {/* Dark gradient overlay so text is readable */}
      <div className="hero-bg-overlay" />

      {/* Particle dots */}
      <div className="hero-particles">
        {Array.from({ length: 14 }, (_, i) => (
          <span key={i} style={{
            left: `${(i * 7.2) % 100}%`,
            top: `${(i * 13) % 100}%`,
            '--dur': `${3 + (i % 3)}s`,
            '--del': `${(i * 0.45) % 5}s`
          }} />
        ))}
      </div>

      {/* Content */}
      <div className="hero-container hero-container-full">
        <div className="hero-content hero-content-center" key={`content-${slide}`}>

          {/* Tag badge */}
          <div className="hero-badge-anim">
            <span className="hero-badge hero-badge-light">⭐ {cur.tag}</span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline hero-headline-light">
            <span>{cur.line1}</span>
            <em className="hero-em-gold">{cur.line2}</em>
          </h1>

          {/* Sub-label (product category) */}
          <div className="hero-product-label">
            <span className="hero-product-dot" />
            {cur.sub}
          </div>

          <p className="hero-desc hero-desc-light">
            Chennai's most trusted award manufacturer. From gleaming sports trophies to
            premium corporate mementos — laser-crafted with passion since 1999.
          </p>

          {/* Buttons */}
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => navigate('/catalog')}>
              Browse Catalogue →
            </button>
            <button className="btn-outline btn-outline-light" onClick={() => navigate('/contact')}>
              Get Free Quote
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats hero-stats-light">
            {[['25+','Years'],['50K+','Awards'],['1000+','Clients'],['4.9★','Rating']].map(([n, l]) => (
              <div key={l} className="stat-mini">
                <span className="hero-stat-num">{n}</span>
                <span className="hero-stat-lbl">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide controls — bottom centre */}
      <div className="hero-controls">
        <button className="hero-ctrl-arrow" onClick={() => goTo((slide - 1 + n) % n)}>&#8592;</button>
        <div className="hero-dots-row">
          {HERO_SLIDES.map((_, i) => (
            <button key={i} className={`hero-dot${i === slide ? ' active' : ''}`} onClick={() => goTo(i)} />
          ))}
        </div>
        <button className="hero-ctrl-arrow" onClick={() => goTo((slide + 1) % n)}>&#8594;</button>
        <span className="hero-slide-counter">{String(slide + 1).padStart(2,'0')} / {String(n).padStart(2,'0')}</span>
      </div>

    </section>
  )
}

// ── Stats Strip ──────────────────────────────────────────────
function StatsStrip() {
  const [ref, visible] = useReveal()
  return (
    <div className="stats-strip" ref={ref}>
      <div className="stats-strip-container" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        {[
          { ico: '🏅', num: '25+',  lbl: 'Years in Business' },
          { ico: '📦', num: '50K+', lbl: 'Awards Delivered' },
          { ico: '🤝', num: '1000+', lbl: 'Happy Clients' },
        ].map((item, i) => (
          <>
            <div key={i} className="strip-item" style={{ animationDelay: `${i * 0.15}s` }}>
              <span className="strip-icon">{item.ico}</span>
              <div className="strip-txt">
                <span className="strip-num">{item.num}</span>
                <span className="strip-lbl">{item.lbl}</span>
              </div>
            </div>
            {i < 2 && <div className="strip-divider" />}
          </>
        ))}
      </div>
    </div>
  )
}

// ── Download Banner ──────────────────────────────────────────
function DownloadBanner() {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className="download-banner" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease' }}>
      <div className="download-banner-text">
        <h3>📥 Download Our 2026 Catalogue</h3>
        <p>Explore our complete range of 200+ premium award designs, pricing, and customisation options in our latest brochures.</p>
      </div>
      <div className="download-banner-btns">
        <a
          href="/brochures/SuperLaserIndia_Catalogue_2026.pdf"
          download="SuperLaserIndia_Catalogue_2026.pdf"
          className="dl-btn"
        >
          <span className="dl-icon">⬇</span>
          Awards Brochure 2026
        </a>
        <a
          href="/brochures/SuperLaserIndia_ProductCatalog.pdf"
          download="SuperLaserIndia_ProductCatalog.pdf"
          className="dl-btn secondary"
        >
          <span className="dl-icon">📄</span>
          Full Product Catalog
        </a>
      </div>
    </div>
  )
}

// ── Services Preview ─────────────────────────────────────────
function ServicesPreview() {
  const navigate = useNavigate()
  const [ref, visible] = useReveal()
  return (
    <section className="section services-preview" ref={ref}>
      <div className="sec-header">
        <span className="sec-tag">Our Expertise</span>
        <h2 className="sec-title">Premium <span className="gold-grad">Award Gallery</span></h2>
        <div className="divider" />
      </div>

      <div className="srv-grid">
        {SERVICES.map((s, i) => (
          <div
            key={i}
            className="srv-card"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(28px)',
              transition: `all 0.55s ease ${i * 0.08}s`
            }}
          >
            <div className="srv-card-top">
              <span className="srv-card-ico">{s.ico}</span>
              <span className="badge-small">{s.tag}</span>
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <button className="srv-btn" onClick={() => navigate('/services')}>Explore Now →</button>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Why Us ───────────────────────────────────────────────────
function WhyUs() {
  const [ref, visible] = useReveal()
  return (
    <section className="section why-us" ref={ref}>
      <div className="why-container">
        <div className="why-text" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-30px)', transition: 'all 0.65s ease' }}>
          <span className="sec-tag">Why Super Laser India?</span>
          <h2 className="sec-title">The Gold Standard in <br /><span className="gold-grad">Precision Craft</span></h2>
          <p className="sec-desc">We combine 25 years of traditional craftsmanship with high-tech laser machinery to create awards that inspire.</p>
          <div className="why-grid-v2">
            {WHY.map((w, i) => (
              <div key={i} className="why-card-v2" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="why-ico-v2">{w.ico}</span>
                <div><h4>{w.title}</h4><p>{w.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="why-visual" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(30px)', transition: 'all 0.65s 0.2s ease' }}>
          <div className="why-big-card">
            <div className="why-big-emoji">🏭</div>
            <h3>State-of-the-Art Facility</h3>
            <p>CNC laser machines, skilled artisans and quality control — all under one roof in Chennai.</p>
          </div>
          <div className="why-stats-row">
            {[['50K+','Awards Made'],['200+','Designs'],['48hr','Turnaround'],['100%','Satisfaction']].map(([n, l]) => (
              <div key={l} className="why-stat-card">
                <div className="why-stat-num">{n}</div>
                <div className="why-stat-lbl">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Clients Ticker ───────────────────────────────────────────
function ClientsTicker() {
  const doubled = [...CLIENTS, ...CLIENTS]
  return (
    <div className="clients-ticker-wrap">
      <p className="clients-label">Trusted by over 1000+ organisations across India</p>
      <div className="ticker-container">
        <div className="ticker-track">
          {doubled.map((c, i) => <span key={i} className="client-chip">{c}</span>)}
        </div>
      </div>
    </div>
  )
}

// ── Gallery Carousel ─────────────────────────────────────────
function GalleryCarousel() {
  const [idx, setIdx] = useState(0)
  const n = GALLERY.length
  const navigate = useNavigate()
  const [ref, visible] = useReveal()

  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % n), 3500)
    return () => clearInterval(t)
  }, [n])

  const prev = () => setIdx(p => (p - 1 + n) % n)
  const next = () => setIdx(p => (p + 1) % n)

  return (
    <section className="section gallery-carousel" ref={ref}>
      <div className="sec-header">
        <span className="sec-tag">Showcase</span>
        <h2 className="sec-title">Craftsmanship <span className="gold-grad">In Action</span></h2>
        <div className="divider" />
      </div>

      <div className="carousel-view" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease' }}>
        <button className="car-arrow car-arrow-left" onClick={prev} aria-label="Previous">&#8592;</button>
        <button className="car-arrow car-arrow-right" onClick={next} aria-label="Next">&#8594;</button>

        <div className="carousel-track-3d">
          {GALLERY.map((item, i) => {
            const pos = (i - idx + n) % n
            let cls = 'car-item-v2'
            if (pos === 0) cls += ' active'
            if (pos === 1) cls += ' next'
            if (pos === n - 1) cls += ' prev'
            return (
              <div key={i} className={cls}>
                <div className="car-img-wrap">
                  <img src={item.img} alt={item.label} className="car-img" />
                  <span className="car-tag-badge">{item.tag}</span>
                </div>
                <div className="car-info">
                  <span className="car-label-v2">{item.label}</span>
                  <span className="car-sub">{item.sub}</span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="car-dots">
          {GALLERY.map((_, i) => (
            <button key={i} className={'car-dot' + (i === idx ? ' active' : '')} onClick={() => setIdx(i)} />
          ))}
        </div>
      </div>

      <div className="carousel-cta">
        <button className="btn-catalog-anim" onClick={() => navigate('/catalog')}>
          <span className="btn-catalog-shine" />
          <span className="btn-catalog-ico">📖</span>
          View Full Catalogue
          <span className="btn-catalog-arrow">→</span>
        </button>
      </div>
    </section>
  )
}

// ── CTA Strip ────────────────────────────────────────────────
function CTAStrip() {
  const navigate = useNavigate()
  return (
    <section className="cta-section">
      <div className="cta-floating-orb orb-l" />
      <div className="cta-floating-orb orb-r" />
      <div className="cta-content">
        <div className="cta-badge">✦ Premium Award Manufacturer ✦</div>
        <h2>Elevate Your Next <span className="gold-grad">Ceremony</span></h2>
        <p>Get in touch for custom designs, bulk pricing, and rapid delivery timelines.</p>
        <div className="cta-btns">
          <button className="btn-cta-primary" onClick={() => navigate('/contact')}>
            <span className="btn-cta-shine" />
            <span>🎯 Request Free Quote</span>
            <span className="btn-cta-arrow">→</span>
          </button>
          <button className="btn-cta-secondary" onClick={() => navigate('/catalog')}>
            <span className="btn-cta-ico">📋</span>
            View Catalogue
          </button>
        </div>
        <div className="cta-trust-row">
          <span>✓ No minimum order</span>
          <span>✓ 48hr turnaround</span>
          <span>✓ GST invoice</span>
          <span>✓ Pan-India delivery</span>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <StatsStrip />
      <DownloadBanner />
      <ServicesPreview />
      <WhyUs />
      <ClientsTicker />
      <GalleryCarousel />
      <CTAStrip />
    </div>
  )
}
