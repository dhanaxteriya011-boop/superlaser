import { useState, useMemo, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Catalog.css'

// ── Category map by page range (based on product catalogue structure)
const PAGE_CATEGORIES = {
  'Acrylic Awards':     [1,2,3,4,5,6,7,8,9,10,11,12],
  'Crystal Trophies':   [13,14,15,16,17,18,19,20],
  'Metal Trophies':     [21,22,23,24,25,26,27,28,29,30],
  'Corporate Shields':  [31,32,33,34,35,36,37,38,39,40],
  'Star Trophies':      [41,42,43,44,45,46,47,48],
  'Wooden Awards':      [49,50,51,52,53,54],
}

const CATEGORY_ICONS = {
  'Acrylic Awards':    '🔮',
  'Crystal Trophies':  '💎',
  'Metal Trophies':    '🏆',
  'Corporate Shields': '🎖️',
  'Star Trophies':     '⭐',
  'Wooden Awards':     '🪵',
}

// Build all 54 items
const ALL_ITEMS = Array.from({ length: 54 }, (_, i) => {
  const page = i + 1
  const padded = String(page).padStart(4, '0')
  const cat = Object.entries(PAGE_CATEGORIES).find(([, pages]) => pages.includes(page))?.[0] || 'General'
  return {
    id: page,
    img: `/images/2026_ProductCatalog_page-${padded}.jpg`,
    page: padded,
    name: `${cat} — Page ${page}`,
    category: cat,
    label: `Page ${page}`,
  }
})

const ALL_CATEGORIES = ['All', ...Object.keys(PAGE_CATEGORIES)]

// ── Lightbox ─────────────────────────────────────────────────
function Lightbox({ item, onClose, onPrev, onNext }) {
  const navigate = useNavigate()
  useEffect(() => {
    const handler = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onNext, onPrev])

  return (
    <div className="lb-overlay" onClick={onClose}>
      <div className="lb-box" onClick={e => e.stopPropagation()}>

        {/* Close — floats ABOVE the card */}
        <button className="lb-close" onClick={onClose} title="Close (Esc)">✕</button>

        {/* Arrows — sit outside the card on left/right */}
        <button className="lb-arrow lb-prev" onClick={onPrev} title="Previous">&#8592;</button>
        <button className="lb-arrow lb-next" onClick={onNext} title="Next">&#8594;</button>

        {/* Scrollable card */}
        <div className="lb-card">
          <div className="lb-img-wrap">
            <img src={item.img} alt={item.name} className="lb-img" />
          </div>

          <div className="lb-info">
            <div className="lb-meta">
              <span className="lb-cat-badge">
                {CATEGORY_ICONS[item.category]} {item.category}
              </span>
              <span className="lb-page">Page {item.id} / 54</span>
            </div>
            <h3 className="lb-title">{item.name}</h3>
            <button className="lb-enquire" onClick={() => navigate('/contact')}>
              <span>Enquire About This Product</span>
              <span className="lb-enq-arrow">→</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

// ── Main Catalog Page ─────────────────────────────────────────
export default function Catalog() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch]               = useState('')
  const [lightbox, setLightbox]           = useState(null) // index in filtered list
  const [view, setView]                   = useState('grid') // 'grid' | 'list'
  const [loaded, setLoaded]               = useState({})
  const searchRef = useRef(null)

  const filtered = useMemo(() => {
    let list = ALL_ITEMS
    if (activeCategory !== 'All') list = list.filter(i => i.category === activeCategory)
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(i =>
        i.category.toLowerCase().includes(q) ||
        i.label.toLowerCase().includes(q) ||
        i.page.includes(q)
      )
    }
    return list
  }, [activeCategory, search])

  const openLightbox  = idx => setLightbox(idx)
  const closeLightbox = () => setLightbox(null)

  // Lock body scroll when lightbox open — ALWAYS restores on unmount/close
  useEffect(() => {
    if (lightbox !== null) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = prev || '' }
    }
  }, [lightbox])
  const prevItem = () => setLightbox(p => (p - 1 + filtered.length) % filtered.length)
  const nextItem = () => setLightbox(p => (p + 1) % filtered.length)

  const markLoaded = id => setLoaded(p => ({ ...p, [id]: true }))

  return (
    <div className="catalog-page">

      {/* ── Hero ── */}
      <div className="catalog-hero">
        <div className="catalog-hero-inner">
          <span className="catalog-hero-tag">2026 Collection</span>
          <h1 className="catalog-hero-title">
            Product <span className="gold-grad">Catalogue</span>
          </h1>
          <p className="catalog-hero-sub">
            Browse our complete range of 54 premium award designs — from gleaming metal
            trophies to elegant wooden accolades.
          </p>

          {/* Search Bar */}
          <div className="catalog-search-wrap">
            <span className="search-ico">🔍</span>
            <input
              ref={searchRef}
              type="text"
              className="catalog-search"
              placeholder="Search by category, page number…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && (
              <button className="search-clear" onClick={() => setSearch('')}>✕</button>
            )}
          </div>

          {/* Stats */}
          <div className="catalog-hero-stats">
            <span><strong>54</strong> pages</span>
            <span className="dot">·</span>
            <span><strong>6</strong> categories</span>
            <span className="dot">·</span>
            <span><strong>200+</strong> designs</span>
          </div>
        </div>
      </div>

      {/* ── Filter Bar ── */}
      <div className="catalog-filter-bar">
        <div className="catalog-filter-inner">
          {/* Category pills */}
          <div className="filter-pills">
            {ALL_CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat !== 'All' && <span className="pill-ico">{CATEGORY_ICONS[cat]}</span>}
                {cat}
                {cat !== 'All' && (
                  <span className="pill-count">
                    {PAGE_CATEGORIES[cat].length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="filter-right">
            <span className="filter-result-count">
              {filtered.length} of {ALL_ITEMS.length} pages
            </span>
            <div className="view-toggle">
              <button className={`vt-btn ${view === 'grid' ? 'active' : ''}`} onClick={() => setView('grid')} title="Grid view">⊞</button>
              <button className={`vt-btn ${view === 'list' ? 'active' : ''}`} onClick={() => setView('list')} title="List view">☰</button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Grid / List ── */}
      <div className="catalog-body">
        {filtered.length === 0 ? (
          <div className="catalog-empty">
            <span className="empty-ico">🔍</span>
            <h3>No results found</h3>
            <p>Try a different category or clear your search.</p>
            <button className="btn-primary" onClick={() => { setSearch(''); setActiveCategory('All') }}>
              Reset Filters
            </button>
          </div>
        ) : (
          <div className={`catalog-grid ${view === 'list' ? 'list-view' : ''}`}>
            {filtered.map((item, idx) => (
              <div
                key={item.id}
                className={`cat-card ${loaded[item.id] ? 'cat-card--loaded' : ''}`}
                onClick={() => openLightbox(idx)}
                style={{ animationDelay: `${(idx % 12) * 0.04}s` }}
              >
                <div className="cat-card-img-wrap">
                  {!loaded[item.id] && <div className="cat-skeleton" />}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="cat-card-img"
                    onLoad={() => markLoaded(item.id)}
                    loading="lazy"
                  />
                  <div className="cat-card-overlay">
                    <span className="cat-overlay-zoom">🔍 View</span>
                  </div>
                  <span className="cat-card-badge">{item.category}</span>
                  <span className="cat-page-num">{item.label}</span>
                </div>
                <div className="cat-card-foot">
                  <span className="cat-card-cat">
                    {CATEGORY_ICONS[item.category]} {item.category}
                  </span>
                  <button
                    className="cat-enquire-btn"
                    onClick={e => { e.stopPropagation(); navigate('/contact') }}
                  >
                    Enquire →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Bottom CTA ── */}
      <div className="catalog-bottom-cta">
        <div className="catalog-cta-inner">
          <h2>Can't find what you're looking for?</h2>
          <p>We create fully custom designs. Share your vision and we'll craft the perfect award.</p>
          <div className="catalog-cta-btns">
            <button className="btn-cta-primary" onClick={() => navigate('/contact')}>
              <span className="btn-cta-shine" />
              <span>📞 Talk to an Expert</span>
              <span className="btn-cta-arrow">→</span>
            </button>
            <a
              href="/brochures/SuperLaserIndia_Catalogue_2026.pdf"
              download
              className="btn-cta-secondary"
            >
              ⬇ Download PDF Catalogue
            </a>
          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <Lightbox
          item={filtered[lightbox]}
          onClose={closeLightbox}
          onPrev={prevItem}
          onNext={nextItem}
        />
      )}
    </div>
  )
}
