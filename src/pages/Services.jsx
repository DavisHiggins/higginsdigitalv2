import { motion } from 'framer-motion'
import HigginsBackground from '../components/Background/HigginsBackground'
import SectionHeader from '../components/ui/SectionHeader'
import GlassCard from '../components/ui/GlassCard'
import Button from '../components/ui/Button'
import './Services.css'

const services = [
  {
    icon: '⬡',
    title: 'Website Builds',
    description: 'Custom-built websites designed and developed from scratch around your business, brand, and goals.',
    details: ['Custom UI/UX design', 'Mobile-first responsive build', 'Fast static or headless deployment', 'SEO foundations', 'Full source-code ownership'],
    link: '/pricing',
    linkLabel: 'View Build Pricing',
  },
  {
    icon: '↺',
    title: 'Website Redesigns',
    description: 'Transform an outdated or underperforming site into a modern, credible digital presence.',
    details: ['Visual redesign and brand alignment', 'Performance and speed improvement', 'Mobile layout reconstruction', 'Content restructuring', 'CTA and conversion path improvements'],
    link: '/pricing#modifications',
    linkLabel: 'View Redesign Options',
  },
  {
    icon: '⬢',
    title: 'Custom Portals & Platforms',
    description: 'Custom applications, dashboards, portals, and internal tools for businesses that need real engineering beyond a standard website.',
    details: ['Custom application architecture', 'Client and admin portals', 'API and data integrations', 'Authentication systems', 'Scalable production deployment'],
    link: '/start-project',
    linkLabel: 'Request a Quote',
  },
  {
    icon: '◈',
    title: 'Managed Monthly Plans',
    description: 'Get a professionally built website launched without a large upfront investment. Monthly plans include the build, launch, and ongoing support.',
    details: ['Website build included', 'Hosting and deployment setup', 'Monthly maintenance and edits', '12-month minimum recommended', 'Ownership transfer option available'],
    link: '/pricing#managed-monthly',
    linkLabel: 'View Monthly Plans',
  },
  {
    icon: '◇',
    title: 'Website Care Plans',
    description: 'Keep your site supported, monitored, updated, and performing without managing the technical side yourself.',
    details: ['Monthly site health checks', 'Minor content and image edits', 'Performance monitoring', 'Priority support options', 'Small UI improvements over time'],
    link: '/pricing#care-plans',
    linkLabel: 'View Care Plans',
  },
  {
    icon: '◉',
    title: 'Performance & Conversion',
    description: 'Targeted improvements to speed, structure, SEO, and conversion paths for businesses that already have a site.',
    details: ['Page speed audit and optimization', 'CTA and conversion path review', 'SEO structure overhaul', 'Mobile layout improvements', 'Load time and Core Web Vitals work'],
    link: '/pricing#modifications',
    linkLabel: 'View Improvement Options',
  },
]

const differentiators = [
  { title: 'Agency-level execution', description: 'Custom premium work without the overhead of a 20-person team.' },
  { title: 'Performance-first builds', description: 'Sites built for speed, clean code, and real-world performance, not bloated page builders.' },
  { title: 'Full ownership', description: 'Every line of code is yours after launch. No platform lock-in.' },
  { title: 'Flexible pricing paths', description: 'One-time builds, managed monthly plans, or care plans. Choose what fits your business.' },
  { title: 'Direct communication', description: 'Work directly with the developer building your site.' },
  { title: 'Business-focused results', description: 'Every decision is made to serve your actual goals: more trust, more leads, more conversions.' },
]

export default function Services() {
  return (
    <div className="services-page">
      <HigginsBackground />

      <section className="section services-hero">
        <div className="container">
          <motion.div
            className="services-hero__content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="mono-label">Services</span>
            <h1 className="services-hero__title">
              Premium websites and digital systems{' '}
              <span className="gradient-text">built around your business.</span>
            </h1>
            <p className="services-hero__sub">
              Higgins Digital builds fast, conversion-focused websites and custom digital products for businesses that need more than a template.
            </p>
            <div className="services-hero__ctas">
              <Button to="/start-project" variant="primary" size="lg">Start a Project</Button>
              <Button to="/pricing" variant="secondary" size="lg">View Pricing</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="Services"
            title="What Higgins Digital builds"
            subtitle="From straightforward websites to full custom platforms, every service is built with the same commitment to quality, performance, and business outcomes."
          />
          <div className="services-grid">
            {services.map((s, i) => (
              <GlassCard key={s.title} delay={i * 0.07} accent="blue" className="service-card">
                <div className="service-card__icon">{s.icon}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.description}</p>
                <ul className="service-card__details">
                  {s.details.map(d => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <a href={s.link} className="service-card__link">{s.linkLabel} →</a>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="Why Higgins Digital"
            title="Built to perform. Built to be yours."
            subtitle="The difference between Higgins Digital and a typical agency or template platform is ownership, performance, and direct execution."
          />
          <div className="services-diff-grid">
            {differentiators.map((d, i) => (
              <GlassCard key={d.title} delay={i * 0.07} className="services-diff-card">
                <h4 className="services-diff-card__title">{d.title}</h4>
                <p className="services-diff-card__desc">{d.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm">
        <div className="container">
          <motion.div
            className="services-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mono-label">Get Started</span>
            <h2 className="services-cta__title">Start with a free scorecard or go straight to a quote.</h2>
            <div className="services-cta__buttons">
              <Button to="/start-project" variant="primary" size="lg">Request a Quote</Button>
              <Button to="/scorecard" variant="secondary" size="lg">Free Website Scorecard</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
