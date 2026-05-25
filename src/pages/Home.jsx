import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HigginsBackground from '../components/Background/HigginsBackground'
import Button from '../components/ui/Button'
import GlassCard from '../components/ui/GlassCard'
import SectionHeader from '../components/ui/SectionHeader'
import { projects } from '../data/projectProof'
import { processSteps } from '../data/processSteps'
import './Home.css'

/* ── animation presets ─────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
}

/* ── data ──────────────────────────────────────────────────────────── */
const services = [
  { icon: '⬡', title: 'Website Builds', desc: 'Custom-built from scratch for businesses that want to own their site.', to: '/services' },
  { icon: '↺', title: 'Website Redesigns', desc: 'Modernize an outdated site without losing what already works.', to: '/pricing' },
  { icon: '◈', title: 'Managed Monthly Plans', desc: 'Build and launch with lower upfront commitment, support included.', to: '/pricing' },
  { icon: '◇', title: 'Website Care Plans', desc: 'Keep your site monitored, edited, and performing after launch.', to: '/pricing' },
  { icon: '⬢', title: 'Custom Portals & Platforms', desc: 'Dashboards, portals, and internal tools beyond a standard website.', to: '/services' },
  { icon: '◉', title: 'Performance & Conversion', desc: 'Speed, SEO structure, and conversion path improvements.', to: '/services' },
]

const ownership = [
  { title: 'Full source-code transfer', desc: 'Every file delivered at project completion.' },
  { title: 'No platform lock-in', desc: 'No Webflow or Squarespace dependency.' },
  { title: 'No forced subscriptions', desc: 'Monthly plans chosen by you, not required to stay live.' },
  { title: 'Portable deployment', desc: 'Host anywhere: Vercel, Netlify, or your own server.' },
]

const pricingPaths = [
  { label: 'ONE-TIME BUILDS', value: 'From $1,000', sub: 'Full ownership at launch', to: '/pricing' },
  { label: 'MANAGED MONTHLY', value: 'From $150/mo', sub: '12-month plan, build included', to: '/pricing' },
  { label: 'CARE PLANS', value: 'From $75/mo', sub: 'Support for existing sites', to: '/pricing' },
  { label: 'MODIFICATIONS', value: 'From $100', sub: 'Quick fixes to full rebuilds', to: '/pricing' },
]

const trust = [
  'Custom code ownership',
  'Fast static delivery',
  'No platform lock-in',
  'Optional care plans',
  'Direct communication',
  'Real business focus',
]

/* ── component ─────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="home-page">
      <HigginsBackground variant="hero" />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="home-hero">
        <div className="container home-hero__inner">
          <div className="home-hero__content">

            <motion.div
              className="home-hero__eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              <span className="mono-label">Higgins Digital</span>
              <span className="home-hero__eyebrow-line" />
            </motion.div>

            <motion.h1
              className="home-hero__headline"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              High-performance websites{' '}
              <span className="gradient-text">for real businesses.</span>
            </motion.h1>

            <motion.p
              className="home-hero__sub"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
            >
              Higgins Digital builds fast, modern, conversion-focused websites and custom digital systems for businesses that need more than a template, with flexible pricing and full source-code ownership available at launch.
            </motion.p>

            <motion.div
              className="home-hero__ctas"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <Button to="/start-project" variant="primary" size="lg">
                Request a Quote
              </Button>
              <Button to="/scorecard" variant="secondary" size="lg">
                Free Website Scorecard
              </Button>
            </motion.div>

            <motion.p
              className="home-hero__trust-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.62 }}
            >
              Quotes and scorecards typically sent within 48 hours.
            </motion.p>

            <motion.div
              className="home-hero__pills"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.75 }}
            >
              {trust.map(p => (
                <span key={p} className="home-hero__pill">
                  <span className="home-hero__pill-check">✓</span>
                  {p}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Logo mark — hero right side */}
          <motion.div
            className="home-hero__logomark"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            aria-hidden="true"
          >
            <div className="home-hero__logomark-glow" />
            <img
              src="/assets/brand/logo-inspo.png"
              alt=""
              className="home-hero__logomark-img"
            />
          </motion.div>
        </div>

        {/* Gold quick nav links — visually separated from trust pills above */}
        <motion.div
          className="home-hero__quicklinks container"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.9 }}
        >
          <div className="home-hero__ql-links">
            <Link to="/work" className="home-hero__ql">View Work <span className="home-hero__ql-arrow">→</span></Link>
            <Link to="/pricing" className="home-hero__ql">View Pricing <span className="home-hero__ql-arrow">→</span></Link>
            <Link to="/how-it-works" className="home-hero__ql">How It Works <span className="home-hero__ql-arrow">→</span></Link>
            <Link to="/payments" className="home-hero__ql">Make a Payment <span className="home-hero__ql-arrow">→</span></Link>
          </div>
        </motion.div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="Services"
            title="Agency-level execution. Without the overhead."
            subtitle="Because Higgins Digital is lean, technical, and build-focused, clients get premium custom work without paying for bloated agency layers."
          />
          <div className="home-services-grid">
            {services.map((s, i) => (
              <GlassCard key={s.title} delay={i * 0.06} accent="blue" className="home-service-card">
                <div className="home-service-card__icon">{s.icon}</div>
                <h3 className="home-service-card__title">{s.title}</h3>
                <p className="home-service-card__desc">{s.desc}</p>
                <Link to={s.to} className="home-service-card__link">Learn more →</Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING PATHS ────────────────────────────────────────── */}
      <section className="section home-pricing-section">
        <div className="container">
          <SectionHeader
            badge="Pricing"
            title="Flexible pricing built around your goals."
            subtitle="One-time builds, managed monthly plans, or care for an existing site. Choose the path that fits your business."
          />
          <div className="home-pricing-grid">
            {pricingPaths.map((p, i) => (
              <Link key={p.label} to={p.to} className="home-pricing-card">
                <span className="mono-label">{p.label}</span>
                <div className="home-pricing-card__value">{p.value}</div>
                <div className="home-pricing-card__sub">{p.sub}</div>
              </Link>
            ))}
          </div>
          <div className="home-pricing-cta">
            <Button to="/pricing" variant="secondary">See Full Pricing →</Button>
          </div>
        </div>
      </section>

      {/* ── PROJECT PROOF ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="Real Work"
            title="Built for real businesses, not demo screens."
            subtitle="Every project is designed to create trust, drive conversions, and perform under real conditions."
          />
          <div className="home-projects-grid">
            {projects.filter(p => p.featured).map((project, i) => (
              <GlassCard key={project.id} delay={i * 0.1} accent="featured" className="home-project-card">
                {project.showcaseImage && (
                  <div className="home-project-card__image">
                    <img src={project.showcaseImage} alt={`${project.client} website`} loading="lazy" />
                  </div>
                )}
                <div className="home-project-card__body">
                  <span className="mono-label">{project.category}</span>
                  <h3 className="home-project-card__title">{project.client}</h3>
                  <p className="home-project-card__tagline">{project.tagline}</p>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="home-project-card__link">
                      View Live Site →
                    </a>
                  )}
                </div>
              </GlassCard>
            ))}

            {/* Placeholder: Personal Portfolio & Resume Website */}
            <GlassCard delay={projects.filter(p => p.featured).length * 0.1} accent="featured" className="home-project-card">
              <div className="home-project-card__image home-project-card__image--placeholder">
                <span className="home-project-card__coming-soon">Current Project. Coming soon.</span>
              </div>
              <div className="home-project-card__body">
                <span className="mono-label">Academic Platform</span>
                <h3 className="home-project-card__title">Personal Portfolio &amp; Resume Website</h3>
                <p className="home-project-card__tagline">A dedicated portfolio and resume site built to showcase data analytics work, technical projects, and professional experience, designed to impress recruiters and employers.</p>
              </div>
            </GlassCard>
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Button to="/work" variant="secondary">View All Projects</Button>
          </div>
        </div>
      </section>

      {/* ── OWNERSHIP ─────────────────────────────────────────────── */}
      <section className="section home-ownership">
        <div className="container">
          <SectionHeader
            badge="Ownership"
            title="You own the code. You own the site. You own the future."
            subtitle="No platform lock-in, no hidden licensing. After completion, every file is yours."
          />
          <div className="home-ownership-grid">
            {ownership.map((o, i) => (
              <GlassCard key={o.title} delay={i * 0.08} className="home-ownership-card">
                <div className="home-ownership-card__check">✓</div>
                <h4 className="home-ownership-card__title">{o.title}</h4>
                <p className="home-ownership-card__desc">{o.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── WEBSITE SCORECARD CTA ─────────────────────────────────── */}
      <section className="section-sm">
        <div className="container">
          <motion.div className="home-scorecard-banner" {...fadeUp}>
            <div className="home-scorecard-banner__text">
              <span className="mono-label">Free Resource</span>
              <h2 className="home-scorecard-banner__title">Is your website costing you leads?</h2>
              <p className="home-scorecard-banner__sub">
                Submit your site and Higgins Digital will review first impression, mobile experience, speed, trust signals, CTAs, SEO structure, and conversion clarity, all at no cost.
              </p>
            </div>
            <div className="home-scorecard-banner__action">
              <Button to="/scorecard" variant="primary" size="lg">Get Your Free Scorecard</Button>
              <p className="home-scorecard-banner__note">Delivered within 48 hours.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS PREVIEW ───────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="Process"
            title="A clear path from first call to launch."
            subtitle="No guesswork. Discovery → Strategy → Design → Build → Review → Launch → Support."
          />
          <div className="home-process-strip">
            {processSteps.slice(0, 4).map((step, i) => (
              <motion.div
                key={step.step}
                className="home-process-step"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              >
                <div className="home-process-step__num">{step.step}</div>
                <h4 className="home-process-step__title">{step.title}</h4>
                <p className="home-process-step__desc">{step.description}</p>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Button to="/how-it-works" variant="secondary">See Full Process →</Button>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────── */}
      <section className="section home-final-cta">
        <div className="container">
          <motion.div className="home-final-cta__inner" {...fadeUp}>
            <h2 className="home-final-cta__title">
              Start with a conversation,{' '}
              <span className="gradient-text">not a contract.</span>
            </h2>
            <p className="home-final-cta__sub">
              Tell Higgins Digital what you need. You'll get a clear recommendation, a realistic scope, and a pricing path that fits.
            </p>
            <div className="home-final-cta__buttons">
              <Button to="/start-project" variant="primary" size="lg">Start a Project</Button>
              <Button to="/scorecard" variant="secondary" size="lg">Free Website Scorecard</Button>
              <Button to="/work" variant="ghost">View Work</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
