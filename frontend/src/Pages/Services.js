import { useNavigate } from 'react-router-dom'
import '../styles/Services.css'

const SERVICES = [
  {
    ico: '🏆', title: 'Custom Trophies', badge: 'Most Popular',
    desc: 'Handcrafted gold, silver and bronze trophies for sports tournaments, corporate events and academic ceremonies.',
    features: ['Fully customisable base', 'Laser engraved nameplates', 'Bulk delivery in 3–5 days'],
  },
  {
    ico: '🥇', title: 'Acrylic Awards', badge: 'Bestseller',
    desc: 'Precision laser-cut acrylic awards with crystal-clear finish, custom shapes and full-colour UV printing.',
    features: ['Full-colour UV printing', 'Custom shapes & sizes', 'Min. 1 piece orders'],
  },
  {
    ico: '💎', title: 'Crystal Trophies', badge: 'Premium',
    desc: 'Exquisite optical crystal and glass trophies for prestigious ceremonies and VIP corporate gifting.',
    features: ['Imported optical crystal', 'Laser 3D interior engraving', 'Premium gift box'],
  },
  {
    ico: '🎖️', title: 'Corporate Mementos', badge: 'Corporate',
    desc: 'Elegant plaques and shields for retirement functions, award nights and brand milestone celebrations.',
    features: ['Wooden or SS finish', 'Company logo engraving', 'Certificate inserts'],
  },
  {
    ico: '🪧', title: 'Name Plates & Boards', badge: 'Signage',
    desc: 'Laser engraved name plates, office signage and display boards for offices, hospitals and retail spaces.',
    features: ['Brass, SS or acrylic', 'Indoor / outdoor grade', '24-hour express option'],
  },
  {
    ico: '🎗️', title: 'Medal & Ribbon Sets', badge: 'Bulk',
    desc: 'Sports and academic medals with premium ribbons. Custom dies and bulk orders with fast turnaround.',
    features: ['Gold, silver, bronze finish', 'Custom ribbon colours', 'Die-cut custom shapes'],
  },
  {
    ico: '🪵', title: 'Wooden Awards', badge: 'Elegant',
    desc: 'Premium wooden block trophies with laser-cut metal figurines — a perfect blend of tradition and modernity.',
    features: ['Real wood finish', 'Brass & chrome inserts', 'Corporate desk pieces'],
  },
  {
    ico: '🖼️', title: 'Memento Frames', badge: 'Gifting',
    desc: 'Custom photo frames and memento pieces for farewell gifts, anniversary awards and milestone recognition.',
    features: ['Personalised engraving', 'Photo insert options', 'Bulk event orders'],
  },
  {
    ico: '🏅', title: 'School & Sports Awards', badge: 'Education',
    desc: 'Budget-friendly bulk award solutions for schools, sports academies and college event organisers.',
    features: ['Low MOQ — from 10 pcs', 'Same-day dispatch', 'All sports categories'],
  },
]

const PROCESS = [
  { num: '01', ico: '📞', title: 'Enquire',  desc: 'Share your requirements via our contact form or WhatsApp with quantity and event details.' },
  { num: '02', ico: '🎨', title: 'Design',   desc: 'We create a digital mock-up with your logo, name and text — sent for your approval.' },
  { num: '03', ico: '⚙️', title: 'Produce',  desc: 'Approved artwork goes to our precision CNC laser workshop for manufacture.' },
  { num: '04', ico: '📦', title: 'Deliver',  desc: 'Securely packed and dispatched across India — or collected from our Chennai studio.' },
]

const CAPABILITIES = [
  { ico: '⚡', stat: '48 hrs',  label: 'Express Turnaround' },
  { ico: '📦', stat: '10K+',   label: 'Max Batch Size' },
  { ico: '🎨', stat: '200+',   label: 'Award Designs' },
  { ico: '🗺️', stat: 'PAN India', label: 'Delivery Coverage' },
  { ico: '✅', stat: '100%',   label: 'Quality Checked' },
  { ico: '🧾', stat: 'GST',    label: 'Invoice Provided' },
]

export default function Services() {
  const navigate = useNavigate()

  return (
    <div className="services-page light-theme">

      {/* ── Page Hero ── */}
      <div className="page-hero-mini">
        <div className="breadcrumb"><span className="gold">Services</span></div>
        <h1 className="hero-title">Our <span className="gold-grad">Expertise</span></h1>
        <p className="hero-subtitle">Award-grade craftsmanship for every milestone — laser precision since 1999.</p>
      </div>

      {/* ── Services Grid ── */}
      <section className="section">
        <div className="sec-header centered">
          <span className="sec-tag">What We Make</span>
          <h2 className="sec-title">Complete <span className="gold-grad">Award Solutions</span></h2>
          <div className="title-underline"></div>
        </div>
        <div className="services-grid-new">
          {SERVICES.map((s, i) => (
            <div key={i} className="svc-card-new">
              <div className="svc-card-head">
                <span className="svc-ico">{s.ico}</span>
                <span className="svc-tag-badge">{s.badge}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="svc-feature-list">
                {s.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <button className="btn-svc" onClick={() => navigate('/contact')}>Enquire Now →</button>
            </div>
          ))}
        </div>
      </section>

      {/* ── Capabilities Strip ── */}
      <section className="capabilities-strip">
        <div className="cap-inner">
          <div className="sec-header centered" style={{ marginBottom: '2.5rem' }}>
            <span className="sec-tag">Why Choose Us</span>
            <h2 className="sec-title">Built for <span className="gold-grad">Scale & Quality</span></h2>
            <div className="title-underline"></div>
          </div>
          <div className="cap-grid">
            {CAPABILITIES.map((c, i) => (
              <div key={i} className="cap-card">
                <span className="cap-ico">{c.ico}</span>
                <div className="cap-stat">{c.stat}</div>
                <div className="cap-label">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Workflow ── */}
      <section className="section process-dark">
        <div className="sec-header centered">
          <span className="sec-tag">How It Works</span>
          <h2 className="sec-title">Our <span className="gold-grad">Workflow</span></h2>
          <div className="title-underline"></div>
        </div>
        <div className="process-grid-new">
          {PROCESS.map((p, i) => (
            <div key={i} className="step-card">
              <span className="step-number">{p.num}</span>
              <div className="step-ico-circle">{p.ico}</div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── View Catalogue CTA ── */}
      <section className="section" style={{ background: '#FFF7E8', textAlign: 'center' }}>
        <div className="sec-header centered">
          <span className="sec-tag">Browse Products</span>
          <h2 className="sec-title">Explore Our <span className="gold-grad">2026 Catalogue</span></h2>
          <div className="title-underline"></div>
          <p className="sec-desc" style={{ marginTop: '1rem' }}>
            View all 54 pages of our latest catalogue — from star trophies to wooden awards —
            with search and category filters.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
          <button className="svc-catalog-btn" onClick={() => navigate('/catalog')}>
            <span className="svc-catalog-shine" />
            📖 Browse Full Catalogue
            <span className="svc-catalog-arrow">→</span>
          </button>
          <button className="btn-svc-outline" onClick={() => navigate('/contact')}>
            💬 Request Custom Design
          </button>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <div className="services-cta-bottom">
        <h2>Ready to Start Your <span className="gold-grad">Custom Order?</span></h2>
        <p>Trusted by 1000+ organisations across India. Fast turnaround. Zero compromise on quality.</p>
        <button className="btn-primary-large" onClick={() => navigate('/contact')}>
          Talk to an Expert →
        </button>
      </div>

    </div>
  )
}
