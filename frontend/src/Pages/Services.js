import { useNavigate } from 'react-router-dom'
import '../styles/Services.css'

const SERVICES = [
  {
    ico: '🏆', title: 'Custom Trophies', badge: 'Most Popular',
    desc: 'Handcrafted gold, silver and bronze trophies for sports tournaments, corporate events and academic ceremonies.',
    features: ['Fully customisable base','Laser engraved nameplates', 'Bulk delivery in 3–5 days'],
  },
  {
    ico: '🥇', title: 'Acrylic Awards', badge: 'Bestseller',
    desc: 'Precision laser-cut acrylic awards with crystal-clear finish, custom shapes and UV printing.',
    features: ['Full-colour UV printing','Custom shapes and sizes', 'Available in bulk'],
  },
  {
    ico: '🔮', title: 'Crystal Trophies', badge: 'Premium',
    desc: 'Exquisite optical crystal and glass trophies for prestigious ceremonies and VIP gifting.',
    features: ['Imported optical crystal','Laser 3D engraving', 'Premium gift box'],
  },
  {
    ico: '🎖️', title: 'Corporate Mementos', badge: 'Corporate',
    desc: 'Elegant plaques and shields for corporate gifting, retirement functions and milestone events.',
    features: ['Wooden or SS finish','Company logo engraving', 'Custom certificate inserts'],
  },
  {
    ico: '🪧', title: 'Name Plates & Boards', badge: 'Signage',
    desc: 'Laser engraved name plates, signage and display boards for offices and retail spaces.',
    features: ['Brass or SS finish','Indoor/Outdoor grade', 'Fast 24-hour option'],
  },
  {
    ico: '🎗️', title: 'Medal & Ribbon Sets', badge: 'Bulk',
    desc: 'Sports and academic medals with premium ribbons. Bulk orders with fast turnaround.',
    features: ['Gold, silver, bronze','Custom ribbon colors', 'Die-cut custom shapes'],
  },
]

const PROCESS = [
  { num: '01', title: 'Enquire',   desc: 'Share your requirements via our contact form or WhatsApp.' },
  { num: '02', title: 'Design',    desc: 'We send a digital mock-up with your logo and text for approval.' },
  { num: '03', title: 'Produce',   desc: 'Approved designs go to our precision laser workshop.' },
  { num: '04', title: 'Deliver',   desc: 'Securely packed and dispatched to your doorstep.' },
]

const PRICING = [
  {
    tier: 'Basic', amount: '150', featured: false,
    features: ['Standard trophies', 'Engraved nameplate', '3–5 day delivery', 'Min. order: 1 piece'],
  },
  {
    tier: 'Standard', amount: '350', featured: true,
    features: ['Acrylic / crystal awards', 'Full-colour UV print', '2–3 day delivery', 'Gift box included'],
  },
  {
    tier: 'Premium', amount: '800', featured: false,
    features: ['Optical crystal trophy', '3D Interior engraving', 'Premium packaging', 'Same-day express'],
  },
]

export default function Services() {
  const navigate = useNavigate()
  
  return (
    <div className="services-page light-theme">
      {/* ── Page Hero ── */}
      <div className="page-hero-mini">
        <div className="breadcrumb">
          <span className="gold">Services</span>
        </div>
        <h1 className="hero-title">Our <span className="gold-grad">Expertise</span></h1>
        <p className="hero-subtitle">Laser-crafted recognition pieces for every milestone.</p>
      </div>

      {/* ── Product Catalog Section ── */}
      <section className="section">
        <div className="sec-header centered">
          <span className="sec-tag">Product Catalog</span>
          <h2 className="sec-title">Luxury <span className="gold-grad">Awards</span></h2>
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
              <button className="btn-svc" onClick={() => navigate('/contact')}>Enquire Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* ── Workflow Section ── */}
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
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing Section ── */}
      <section className="section pricing-dark">
        <div className="sec-header centered">
          <span className="sec-tag">Investment</span>
          <h2 className="sec-title">Starting <span className="gold-grad">Estimates</span></h2>
          <div className="title-underline"></div>
        </div>

        <div className="pricing-container">
          {PRICING.map((p, i) => (
            <div key={i} className={`pricing-card ${p.featured ? 'featured' : ''}`}>
              {p.featured && <div className="pop-badge">Most Popular</div>}
              <h3 className="tier-name">{p.tier}</h3>
              <div className="price-tag">
                <span className="currency">₹</span>
                <span className="amount">{p.amount}</span>
                <span className="per">/pc</span>
              </div>
              <ul className="price-list">
                {p.features.map(f => <li key={f}>✓ {f}</li>)}
              </ul>
              <button className="price-btn" onClick={() => navigate('/contact')}>Get Free Quote</button>
            </div>
          ))}
        </div>
      </section>

      {/* ── Simple CTA Footer ── */}
      <div className="services-cta-bottom">
        <h2>Ready to start your <span className="gold-grad">Custom Order?</span></h2>
        <button className="btn-primary-large" onClick={() => navigate('/contact')}>
          Talk to an Expert →
        </button>
      </div>
    </div>
  )
}