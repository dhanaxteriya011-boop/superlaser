import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Contact.css'

const FAQS = [
  { q: 'What is the minimum order quantity?', a: 'We accept orders from a single piece. For bulk orders (50+), we offer special corporate discounts.' },
  { q: 'How long does delivery take?', a: 'Standard orders take 3–5 working days. Express same-day service is available for urgent requirements in Chennai.' },
  { q: 'Can I upload my own logo?', a: 'Yes! Share your logo (PDF/AI/PNG) and our design team will prepare a free digital mock-up for approval.' },
  { q: 'Do you provide GST invoices?', a: 'Yes, we are a GST-registered business and provide full tax invoices for all orders.' },
]

export default function Contact() {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(null)
  
  const [form, setForm] = useState({ name:'', phone:'', email:'', service:'', message:'' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      alert("Message Sent! Our team will contact you shortly.")
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="contact-page light-theme">
      {/* ── Page Hero ── */}
      <div className="page-hero-mini">
        <div className="breadcrumb">
          <span className="gold">Contact Support</span>
        </div>
        <h1 className="hero-title">Get in <span className="gold-grad">Touch</span></h1>
        <p className="hero-subtitle">Ready to recognize excellence? We are here to help.</p>
      </div>

      {/* ── Main Contact Grid ── */}
      <section className="section">
        <div className="contact-main-grid">
          
          {/* Information Sidebar */}
          <div className="contact-sidebar">
            <div className="sidebar-inner">
              <span className="sec-tag">Official Studio</span>
              <h3>Super Laser <span className="gold">India</span></h3>
              <p className="sidebar-desc">Visit our manufacturing facility in the heart of Chennai.</p>

              <div className="contact-methods">
                <div className="cm-item">
                  <div className="cm-icon-circle">📍</div>
                  <div className="cm-text">
                    <strong>Address</strong>
                    <p>Mount Road, Anna Salai, Chennai 600002</p>
                  </div>
                </div>
                <div className="cm-item">
                  <div className="cm-icon-circle">📞</div>
                  <div className="cm-text">
                    <strong>Phone</strong>
                    <a href="tel:+919840012345">+91 98400 12345</a>
                  </div>
                </div>
                <div className="cm-item">
                  <div className="cm-icon-circle">📧</div>
                  <div className="cm-text">
                    <strong>Email</strong>
                    <a href="mailto:info@superlaser.com">info@superlaserindia.com</a>
                  </div>
                </div>
              </div>

              <div className="social-row">
                 {['fb','ig','li','wa'].map(s => <div key={s} className="soc-dot"></div>)}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <div className="form-glass-card">
              <h3>Start Your <span className="gold-grad">Order</span></h3>
              <p>Briefly describe your requirements and we'll reply within 4 hours.</p>

              <form className="luxury-form" onSubmit={handleSubmit}>
                <div className="input-row">
                  <div className="input-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                  <div className="input-group">
                    <label>Phone Number</label>
                    <input type="text" placeholder="+91 00000 00000" required />
                  </div>
                </div>

                <div className="input-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@company.com" required />
                </div>

                <div className="input-group">
                  <label>Service Type</label>
                  <select>
                    <option>Custom Trophies</option>
                    <option>Acrylic Awards</option>
                    <option>Crystal Plaques</option>
                    <option>Other / Custom</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>Message / Requirements</label>
                  <textarea rows="4" placeholder="Quantity, Event Date, Design details..."></textarea>
                </div>

                <button type="submit" className="form-submit-btn" disabled={loading}>
                  {loading ? "Processing..." : "Submit Inquiry →"}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="section faq-dark">
        <div className="sec-header centered">
          <span className="sec-tag">Quick Help</span>
          <h2 className="sec-title">Common <span className="gold-grad">Questions</span></h2>
          <div className="title-underline"></div>
        </div>

        <div className="faq-container-new">
          {FAQS.map((f, i) => (
            <div key={i} className={`faq-lux-item ${openFaq === i ? 'active' : ''}`}>
              <div className="faq-lux-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{f.q}</span>
                <span className="faq-plus">{openFaq === i ? '−' : '+'}</span>
              </div>
              <div className="faq-lux-a">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}