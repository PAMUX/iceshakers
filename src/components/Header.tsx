import { useEffect, useState } from 'react'
import logo from '../assets/logos/iceshaker-logo.png'
import truck from '../assets/icons/icon-truck.png'
import './Header.css'

export const NAV_LINKS = [
  { label: 'Bottles', href: '#bottles' },
  { label: 'Custom', href: '#colors' },
  { label: 'Shop', href: '#bottles' },
  { label: 'About Us', href: '#use-cases' },
  { label: 'Contact Us', href: '#quote' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="header">
      <div className="topbar">
        <div className="topbar__inner shell">
          <p className="topbar__shipping">
            <img src={truck} alt="" className="topbar__truck" />
            <span>FREE GROUND SHIPPING ON ORDERS $80+ (USA ONLY)</span>
          </p>
          <p className="topbar__perks">
            <span>CUSTOM LOGOS</span>
            <i>|</i>
            <span>BULK ORDERS</span>
            <i>|</i>
            <span>FAST TURNAROUND</span>
          </p>
        </div>
      </div>

      <div className="nav">
        <div className="nav__inner shell">
          <a href="#top" className="nav__brand">
            <img src={logo} alt="Ice Shaker" />
          </a>

          <nav className="nav__links" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#quote" className="nav__cta">
            REQUEST A QUOTE
          </a>

          <button
            type="button"
            className="nav__burger"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? ' is-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#quote" className="mobile-menu__cta" onClick={() => setOpen(false)}>
          REQUEST A QUOTE
        </a>
      </div>
    </header>
  )
}
