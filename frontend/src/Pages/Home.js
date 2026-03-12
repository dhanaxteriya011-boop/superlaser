import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'

const HERO_SLIDES = [
  { line1: 'Crafting Excellence,', line2: 'One Trophy at a Time', tag: '25+ Years · Chennai\'s Finest' },
  { line1: 'Laser Precision,', line2: 'Timeless Recognition', tag: 'Acrylic · Crystal · Metal Awards' },
  { line1: 'Bulk Orders,', line2: 'Premium Quality Delivered', tag: 'Sports · Corporate · Academic Events' },
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
  { emoji: '🏆', label: 'Star Trophies',     color: '#C9962A' },
  { emoji: '🥇', label: 'Acrylic Awards',    color: '#5B9BD5' },
  { emoji: '🔮', label: 'Crystal Plaques',   color: '#47C0C0' },
  { emoji: '🎖️', label: 'Corporate Shields', color: '#C65151' },
  { emoji: '🎗️', label: 'Medal Sets',        color: '#8AAD3B' },
  { emoji: '🪧', label: 'Name Boards',       color: '#9B6CC9' },
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
  const navigate = useNavigate()

  useEffect(() => {
    const t = setInterval(() => setSlide(p => (p + 1) % HERO_SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [])

  const particles = Array.from({ length: 18 }, (_, i) => ({
    left: `${(i * 5.5) % 100}%`,
    top: `${(i * 11) % 100}%`,
    dur: `${3 + (i % 3)}s`,
    del: `${(i * 0.4) % 5}s`,
  }))

  return (
    <section className="hero">
      <div className="hero-particles">
        {particles.map((p, i) => (
          <span key={i} style={{ left: p.left, top: p.top, '--dur': p.dur, '--del': p.del }} />
        ))}
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge-anim" key={`tag-${slide}`}>
            <span className="hero-badge">⭐ {HERO_SLIDES[slide].tag}</span>
          </div>

          <h1 className="hero-headline" key={`h-${slide}`}>
            <span>{HERO_SLIDES[slide].line1}</span>
            <em className="gold-grad">{HERO_SLIDES[slide].line2}</em>
          </h1>

          <p className="hero-desc">
            Chennai's most trusted award manufacturer. From gleaming sports trophies to
            premium corporate mementos — laser-crafted with passion since 1999.
          </p>

          <div className="hero-btns">
            <button className="btn-primary" onClick={() => navigate('/services')}>
              Explore Collection →
            </button>
            <button className="btn-outline" onClick={() => navigate('/contact')}>
              Get Free Quote
            </button>
          </div>

          <div className="hero-stats">
            {[['25+','Years'],['50K+','Awards'],['1000+','Clients'],['4.9★','Rating']].map(([n, l]) => (
              <div key={l} className="stat-mini">
                <span className="hero-stat-num">{n}</span>
                <span className="hero-stat-lbl">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orb">
            <div className="orb-glow" />
            <div className="orb-ring r1" />
            <div className="orb-ring r2" />
            <div className="hero-trophy-card">
              <span className="hero-trophy-emoji">🏆</span>
              <span className="hero-trophy-label">Premium Awards</span>
            </div>
            <div className="orb-badge b1"><div className="orb-badge-dot" />New Arrivals 2026</div>
            <div className="orb-badge b2"><div className="orb-badge-dot" />Bulk Orders ✓</div>
            <div className="orb-badge b3"><div className="orb-badge-dot" />Since 1999</div>
          </div>
          <div className="hero-slide-dots">
            {HERO_SLIDES.map((_, i) => (
              <button key={i} className={`hero-dot${i === slide ? ' active' : ''}`} onClick={() => setSlide(i)} />
            ))}
          </div>
        </div>
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
  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % n), 2800)
    return () => clearInterval(t)
  }, [n])

  return (
    <section className="section gallery-carousel">
      <div className="sec-header">
        <span className="sec-tag">Showcase</span>
        <h2 className="sec-title">Craftsmanship <span className="gold-grad">In Action</span></h2>
        <div className="divider" />
      </div>
      <div className="carousel-view">
        <div className="carousel-track-3d">
          {GALLERY.map((item, i) => {
            const pos = (i - idx + n) % n
            let cls = 'car-item-v2'
            if (pos === 0) cls += ' active'
            if (pos === 1) cls += ' next'
            if (pos === n - 1) cls += ' prev'
            return (
              <div key={i} className={cls} style={{ '--accent': item.color }}>
                <span className="car-emoji-v2">{item.emoji}</span>
                <div className="car-accent-bar" />
                <span className="car-label-v2">{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ── CTA Strip ────────────────────────────────────────────────
function CTAStrip() {
  const navigate = useNavigate()
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Elevate Your Next <span className="gold-grad">Ceremony</span></h2>
        <p>Get in touch for custom designs, bulk pricing, and rapid delivery timelines.</p>
        <div className="cta-btns">
          <button className="btn-primary" onClick={() => navigate('/contact')}>Request Free Quote</button>
          <button className="btn-outline" onClick={() => navigate('/services')}>View Catalog</button>
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
