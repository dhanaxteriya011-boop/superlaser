import { useState, useEffect } from 'react'
import '../styles/WhatsApp.css'

const WA_NUMBER = '919585949422'
const WA_MSG    = encodeURIComponent('Hello! I came across your website and I am interested in your trophy and award products. Could you please share more details?')
const WA_URL    = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`

export default function WhatsApp() {
  const [visible, setVisible]   = useState(false)
  const [tooltip, setTooltip]   = useState(false)
  const [pulse, setPulse]       = useState(false)

  // Show after 2s, then pulse every 10s to attract attention
  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 2000)
    const t2 = setTimeout(() => setPulse(true), 4000)
    const interval = setInterval(() => {
      setPulse(true)
      setTimeout(() => setPulse(false), 1200)
    }, 10000)
    return () => { clearTimeout(t1); clearTimeout(t2); clearInterval(interval) }
  }, [])

  return (
    <div className={`wa-wrapper ${visible ? 'wa-visible' : ''}`}>
      {/* Tooltip bubble */}
      <div className={`wa-tooltip ${tooltip ? 'show' : ''}`}>
        Chat with us on WhatsApp!
        <span className="wa-tooltip-arrow" />
      </div>

      {/* Main button */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`wa-btn ${pulse ? 'wa-pulse' : ''}`}
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        onClick={() => setTooltip(false)}
      >
        {/* WhatsApp SVG icon */}
        <svg className="wa-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.482.65 4.81 1.787 6.83L2 30l7.363-1.763A13.935 13.935 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#25D366"/>
          <path d="M22.555 19.615c-.315-.157-1.862-.918-2.15-1.022-.287-.105-.496-.157-.705.157-.21.315-.81 1.022-.993 1.232-.183.21-.367.236-.682.079-.315-.158-1.33-.49-2.532-1.56-.936-.833-1.568-1.861-1.752-2.176-.183-.315-.02-.485.138-.642.14-.14.315-.366.472-.55.158-.183.21-.314.315-.524.105-.21.053-.394-.026-.55-.079-.158-.705-1.7-.966-2.328-.254-.612-.513-.529-.705-.538l-.6-.01c-.21 0-.55.079-.838.394-.288.315-1.1 1.075-1.1 2.62 0 1.547 1.126 3.043 1.283 3.252.158.21 2.216 3.384 5.37 4.745.75.324 1.336.517 1.791.662.752.239 1.437.205 1.978.124.604-.09 1.862-.761 2.124-1.496.263-.735.263-1.365.184-1.496-.079-.13-.288-.21-.603-.367z" fill="#fff"/>
        </svg>

        {/* Ping rings */}
        <span className="wa-ring wa-ring-1" />
        <span className="wa-ring wa-ring-2" />
      </a>

      {/* Label badge */}
      <div className="wa-label">Chat Now</div>
    </div>
  )
}
