import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">

        {/* LOGO */}
        <a className="nav-logo" href="/" onClick={(e) => { e.preventDefault(); navigate('/'); closeMenu(); }}>
          <div className="nav-logo-icon">⭐</div>
          <div className="nav-logo-text">
            <span className="nav-brand">Super Laser India</span>
            <span className="nav-sub">Crafting Excellence Since 1999</span>
          </div>
        </a>

        {/* NAV LINKS */}
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {[
            { to: '/',         label: 'Home' },
            { to: '/services', label: 'Services' },
            { to: '/about',    label: 'About Us' },
            { to: '/contact',  label: 'Contact' },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}

          {/* ── BROCHURE DOWNLOADS ── */}
          <li>
            <div className="nav-brochure-group">
              <a
                href="/brochures/New Design Type with Price - 2025.pdf"
                download="New Design Type with Price - 2025.pdf"
                className="nav-brochure-btn"
                onClick={closeMenu}
                title="Download Awards & Trophies Catalogue 2026"
              >
                <span className="btn-icon">⬇</span>
                Brochure 2026
              </a>
              <a
                href="/brochures/2026_ProductCatalog.pdf"
                download="2026_ProductCatalog.pdf"
                className="nav-brochure-btn"
                onClick={closeMenu}
                title="Download Full Product Catalogue"
              >
                <span className="btn-icon">📄</span>
                Product Catalog
              </a>
            </div>
          </li>

          {/* Mobile CTA */}
          <li className="nav-mobile-cta">
            <button className="nav-cta" onClick={() => { navigate('/contact'); closeMenu(); }}>
              Get Free Quote
            </button>
          </li>
        </ul>

        {/* DESKTOP ACTIONS */}
        <div className="nav-actions">
          <button className="nav-cta" onClick={() => navigate('/contact')}>
            Get Free Quote
          </button>
        </div>

        {/* HAMBURGER */}
        <button
          className={`nav-hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {open && <div className="nav-overlay" onClick={closeMenu} />}
    </nav>
  )
}
