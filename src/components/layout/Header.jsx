import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/how-it-works', label: 'Process' },
  { to: '/scorecard', label: 'Scorecard' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className={`hd-header ${scrolled ? 'hd-header--scrolled' : ''}`}>
        <div className="hd-header__inner container">

          {/* Brand: H mark + wordmark */}
          <Link to="/" className="hd-header__brand" aria-label="Higgins Digital Home">
            <img
              src="/assets/brand/logo-mark-transparent.png"
              alt=""
              className="hd-header__hmark-img"
              aria-hidden="true"
            />
            <span className="hd-header__wordmark">
              <span className="hd-header__wordmark-higgins">Higgins</span>
              <span className="hd-header__wordmark-digital">Digital</span>
            </span>
          </Link>

          <nav className="hd-header__nav" aria-label="Main navigation">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end ?? false}
                className={({ isActive }) =>
                  `hd-header__link ${isActive ? 'hd-header__link--active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/start-project" className="hd-header__cta">
            Start a Project
          </Link>

          <button
            className={`hd-header__burger ${menuOpen ? 'hd-header__burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile menu — rendered outside <header> so fixed positioning is viewport-relative */}
      {menuOpen && (
        <div className="hd-mobile-menu" aria-label="Mobile navigation" role="dialog" aria-modal="true">
          <div className="hd-mobile-menu__topbar">
            <Link to="/" className="hd-header__brand hd-mobile-menu__brand-link" onClick={() => setMenuOpen(false)}>
              <img
                src="/assets/brand/logo-mark-transparent.png"
                alt=""
                className="hd-header__hmark-img"
                aria-hidden="true"
              />
              <span className="hd-header__wordmark">
                <span className="hd-header__wordmark-higgins">Higgins</span>
                <span className="hd-header__wordmark-digital">Digital</span>
              </span>
            </Link>
            <button
              className="hd-mobile-menu__close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <span />
              <span />
            </button>
          </div>

          <nav className="hd-mobile-menu__nav">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `hd-mobile-menu__link ${isActive ? 'hd-mobile-menu__link--active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hd-mobile-menu__footer">
            <Link to="/start-project" className="hd-mobile-menu__cta" onClick={() => setMenuOpen(false)}>
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
