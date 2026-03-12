import { useNavigate } from 'react-router-dom'
import '../styles/About.css'

const MILESTONES = [
  { year: '1999', title: 'Founded', desc: 'Started with one laser machine on Mount Road, Chennai.' },
  { year: '2008', title: 'Acrylic Division', desc: 'Launched specialized acrylic and UV printing capabilities.' },
  { year: '2012', title: 'Corporate Clients', desc: 'On-boarded TATA and IBM as regular corporate partners.' },
  { year: '2024', title: '25 Years Strong', desc: 'Celebrating 50,000+ awards delivered nationwide.' },
]

const TEAM = [
  { emo: '👨‍💼', name: 'Rajesh Kumar',   role: 'Founder & CEO',         desc: '25 years of expertise in laser engraving.' },
  { emo: '👩‍🎨', name: 'Priya Sharma',   role: 'Design Head',           desc: 'Creative director for all custom trophy artwork.' },
  { emo: '👨‍🔧', name: 'Suresh Babu',    role: 'Production Manager',    desc: 'Oversees precision CNC and quality control.' },
]

const VALUES = [
  { ico: '💎', title: 'Quality First',    desc: 'Every piece is inspected before dispatch. Zero compromise.' },
  { ico: '🤝', title: 'Client Trust',     desc: 'Decades of relationships built on reliability.' },
  { ico: '⚡', title: 'Innovation',       desc: 'Constantly upgrading to the latest fiber laser tech.' },
  { ico: '🌱', title: 'Sustainability',   desc: 'Eco-conscious packaging and responsible sourcing.' },
]

export default function About() {
  const navigate = useNavigate()
  
  return (
    <div className="about-page light-theme">
      {/* ── Page Hero ── */}
      <div className="page-hero-mini">
        <div className="breadcrumb">
          <span className="gold">About Legacy</span>
        </div>
        <h1 className="hero-title">Crafting <span className="gold-grad">Excellence</span></h1>
        <p className="hero-subtitle">Celebrating 25 years of precision and recognition.</p>
      </div>

      {/* ── Story Section ── */}
      <section className="section story-bg">
        <div className="about-story-container">
          <div className="about-story-text">
            <span className="sec-tag">The Heritage</span>
            <h2 className="sec-title-left">Chennai's <br/><span className="gold-grad">Trophy Legacy</span></h2>
            <div className="title-underline-left"></div>
            <p>Super Laser India was founded in 1999 on Mount Road, Chennai with a single laser machine and a vision to bring world-class craftsmanship to the award industry.</p>
            <p>Over two and a half decades, we have grown into the most trusted name for corporate mementos and prestigious awards, serving over 1,000 clients nationwide.</p>
            <div className="about-btns">
              <button className="btn-svc" onClick={() => navigate('/services')}>View Collection</button>
            </div>
          </div>
          <div className="about-visual-box">
             <div className="glow-circle">
                <span className="visual-emoji">🏆</span>
             </div>
             <div className="floating-badge b1">⭐ Est. 1999</div>
             <div className="floating-badge b2">📍 Chennai</div>
          </div>
        </div>
      </section>

      {/* ── Milestones Timeline ── */}
      <section className="section timeline-dark">
        <div className="sec-header centered">
          <span className="sec-tag">Our Journey</span>
          <h2 className="sec-title">The <span className="gold-grad">Milestones</span></h2>
          <div className="title-underline"></div>
        </div>

        <div className="timeline-wrap">
          <div className="timeline-line"></div>
          {MILESTONES.map((m, i) => (
            <div key={i} className={`tl-card-item ${i % 2 === 0 ? 'left' : 'right'}`}>
              <div className="tl-content-card">
                <span className="tl-year-tag">{m.year}</span>
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
              <div className="tl-center-dot"></div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team Section ── */}
      <section className="section team-dark">
        <div className="sec-header centered">
          <span className="sec-tag">The Experts</span>
          <h2 className="sec-title">Our <span className="gold-grad">Craftspeople</span></h2>
          <div className="title-underline"></div>
        </div>
        <div className="team-grid-new">
          {TEAM.map((t, i) => (
            <div key={i} className="team-member-card">
              <div className="member-avatar-box">{t.emo}</div>
              <h4>{t.name}</h4>
              <span className="member-role">{t.role}</span>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Values Grid ── */}
      <section className="section values-dark">
        <div className="sec-header centered">
          <span className="sec-tag">Core Values</span>
          <h2 className="sec-title">Built on <span className="gold-grad">Trust</span></h2>
          <div className="title-underline"></div>
        </div>
        <div className="values-flex">
          {VALUES.map((v, i) => (
            <div key={i} className="value-item-new">
              <span className="value-icon-new">{v.ico}</span>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}