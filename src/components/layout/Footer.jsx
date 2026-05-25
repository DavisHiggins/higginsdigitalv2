import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="hd-footer">
      <div className="hd-footer__inner container">
        <div className="hd-footer__brand">
          <Link to="/" aria-label="Higgins Digital Home">
            <img src="/assets/brand/logo-inspo.png" alt="Higgins Digital" className="hd-footer__logo" />
          </Link>
          <p className="hd-footer__tagline">
            Premium websites, custom digital systems, and ongoing support for real businesses.
          </p>
        </div>

        <div className="hd-footer__col">
          <h4 className="hd-footer__col-title mono-label">Navigate</h4>
          <ul className="hd-footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/how-it-works">Process</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="hd-footer__col">
          <h4 className="hd-footer__col-title mono-label">Services</h4>
          <ul className="hd-footer__links">
            <li><Link to="/start-project">Start a Project</Link></li>
            <li><Link to="/scorecard">Free Website Scorecard</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contractor-websites">Contractor Websites</Link></li>
            <li><Link to="/payments">Make a Payment</Link></li>
          </ul>
        </div>

        <div className="hd-footer__col">
          <h4 className="hd-footer__col-title mono-label">Contact</h4>
          <ul className="hd-footer__links">
            <li>
              <a href="mailto:davishiggins@higginsd.com">davishiggins@higginsd.com</a>
            </li>
            <li>
              <a href="https://instagram.com/higgins.digital" target="_blank" rel="noopener noreferrer">@higgins.digital</a>
            </li>
            <li><Link to="/start-project">Request a Quote</Link></li>
          </ul>
        </div>
      </div>

      <div className="hd-footer__bottom container">
        <p className="hd-footer__copy">
          &copy; {year} Higgins Digital. All rights reserved.
        </p>
        <div className="hd-footer__bottom-links">
          <Link to="/payments">Payments</Link>
          <Link to="/start-project">Start a Project</Link>
        </div>
      </div>
    </footer>
  )
}
