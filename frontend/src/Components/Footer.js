import { useNavigate } from 'react-router-dom'
import '../styles/Footer.css'

export default function Footer() {
  const navigate = useNavigate()
  const year = new Date().getFullYear()

  const handleNav = (path) => {
    navigate(path)
    window.scrollTo(0, 0)
  }

  return (
    <footer className="footer">
      <div className="footer-main">

        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-icon-box">⭐</div>
            <div className="logo-text">
              <div className="brand-name">Super Laser India</div>
              <div className="brand-est">Precision Craft Since 1999</div>
            </div>
          </div>
          <p className="footer-desc">
            Chennai's premier destination for luxury awards and corporate recognition. 
            From crystal trophies to industrial signage, we deliver laser-cut perfection.
          </p>
          <div className="footer-social">
            {['facebook', 'instagram', 'linkedin', 'whatsapp'].map((plat, i) => (
              <button key={i} className="social-btn" aria-label={plat}>
                <span className="social-dot" />
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-title">Navigation</h4>
          <ul className="footer-links">
            {[
              ['Home','/'],
              ['Our Services','/services'],
              ['About the Craft','/about'],
              ['Get a Quote','/contact']
            ].map(([label, path]) => (
              <li key={label}>
                <button onClick={() => handleNav(path)}>{label}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4 className="footer-title">Our Expertise</h4>
          <ul className="footer-links list-only">
            {[
              'Custom Metal Trophies',
              'Laser-Cut Acrylics',
              'VIP Crystal Awards',
              'Corporate Mementos',
              'Academic Medal Sets',
              'Engraved Name Plates'
            ].map(service => (
              <li key={service}><span>{service}</span></li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4 className="footer-title">Visit Our Studio</h4>
          <div className="footer-contact-wrap">
            <div className="contact-item">
              <span className="c-ico">📍</span>
              <p>Mount Road, Anna Salai, Chennai, Tamil Nadu 600002</p>
            </div>
            <div className="contact-item">
              <span className="c-ico">📞</span>
              <p>+91 98400 12345</p>
            </div>
            <div className="contact-item">
              <span className="c-ico">📧</span>
              <p>sales@superlaserindia.com</p>
            </div>
            <div className="contact-item">
              <span className="c-ico">⏰</span>
              <p>Mon – Sat: 10AM – 8PM</p>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="bottom-content">
          <p>© {year} Super Laser India. All craftsmanship protected.</p>
          <div className="bottom-tags">
            <span className="gst-tag">GST Registered ✓</span>
            <span className="made-in">Made in Chennai 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  )
}