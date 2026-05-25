import { motion } from 'framer-motion'
import HigginsBackground from '../components/Background/HigginsBackground'
import SectionHeader from '../components/ui/SectionHeader'
import GlassCard from '../components/ui/GlassCard'
import Button from '../components/ui/Button'
import './ContractorWebsites.css'

const losesTrust = [
  { icon: '⚠', title: 'Outdated visuals', description: 'First impressions happen instantly. An outdated site signals an outdated business.' },
  { icon: '📵', title: 'Weak mobile layouts', description: 'Most visitors arrive on a phone. A broken mobile experience loses them before they read a word.' },
  { icon: '🔍', title: 'Hidden contact information', description: 'If your number, email, or quote form is hard to find, leads will not bother.' },
  { icon: '⏳', title: 'Slow loading pages', description: 'Slow sites create doubt. Fast sites create confidence.' },
  { icon: '❓', title: 'Unclear services', description: 'Visitors need to know within seconds what you do, where you work, and how to hire you.' },
  { icon: '✗', title: 'No proof or credibility', description: 'Without reviews, photos, or project examples, visitors have no reason to trust you.' },
]

const modernNeeds = [
  { icon: '✓', title: 'Clear services', description: 'What you do, where you work, and what types of projects you take on.' },
  { icon: '✓', title: 'Strong first impression', description: 'Clean, professional, and credible from the first second.' },
  { icon: '✓', title: 'Fast mobile experience', description: "Works perfectly on the phone in someone's hand before they call." },
  { icon: '✓', title: 'Simple quote path', description: 'One obvious button or form that makes it easy to reach you.' },
  { icon: '✓', title: 'Project proof', description: 'Photos, before/afters, or descriptions that show real work done.' },
  { icon: '✓', title: 'Trust signals', description: 'Licensed, insured, years in business: what makes you the safe choice.' },
]

export default function ContractorWebsites() {
  return (
    <div className="contractor-page">
      <HigginsBackground />

      {/* Hero */}
      <section className="section contractor-hero">
        <div className="container">
          <motion.div
            className="contractor-hero__content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="mono-label">Contractors & Service Businesses</span>
            <h1 className="contractor-hero__title">
              Contractor websites built to create trust{' '}
              <span className="gradient-text">before the first phone call.</span>
            </h1>
            <p className="contractor-hero__sub">
              Higgins Digital builds clean, fast, credibility-focused websites for contractors and service businesses that need to look established, reliable, and easy to contact.
            </p>
            <div className="contractor-hero__ctas">
              <Button to="/start-project" variant="primary" size="lg">Request a Quote</Button>
              <Button to="/scorecard" variant="secondary" size="lg">View Website Scorecard</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Contractor Websites Lose Trust */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="The Problem"
            title="Why contractor websites lose trust"
            subtitle="Most contractor websites fail before the visitor even reads the content."
          />
          <div className="contractor-grid">
            {losesTrust.map((item, i) => (
              <GlassCard key={item.title} delay={i * 0.07} className="contractor-problem-card">
                <div className="contractor-problem-card__icon">{item.icon}</div>
                <h4 className="contractor-problem-card__title">{item.title}</h4>
                <p className="contractor-problem-card__desc">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* What a Modern Site Needs */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="The Solution"
            title="What a modern contractor site needs"
            subtitle="These are the elements that turn a visitor into a call."
          />
          <div className="contractor-grid">
            {modernNeeds.map((item, i) => (
              <GlassCard key={item.title} delay={i * 0.07} accent="blue" className="contractor-need-card">
                <div className="contractor-need-card__icon">{item.icon}</div>
                <h4 className="contractor-need-card__title">{item.title}</h4>
                <p className="contractor-need-card__desc">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="Proof"
            title="Seen in action: Higgins Building Group"
            subtitle="A real contractor website rebuilt to perform."
          />
          <div className="contractor-proof">
            <div className="contractor-proof__text">
              <h3 className="contractor-proof__title">Higgins Building Group</h3>
              <p className="contractor-proof__tagline">
                Transformed an outdated contractor website into a faster, cleaner, more credible digital presence built to create trust before the first phone call.
              </p>
              <div className="contractor-proof__results">
                <div className="contractor-proof__result">
                  <span className="mono-label">Before</span>
                  <p>Outdated visuals, broken mobile experience, weak trust signals, and no clear path to get a quote.</p>
                </div>
                <div className="contractor-proof__result">
                  <span className="mono-label">After</span>
                  <p>Clean credibility-first design, mobile-first layout, clear services, project proof gallery, and easy contact path.</p>
                </div>
              </div>
              <a href="https://higginsbuildingg.com" target="_blank" rel="noopener noreferrer" className="contractor-proof__link">
                View Live Site →
              </a>
            </div>
            <div className="contractor-proof__images">
              <div className="contractor-proof__before-after">
                <div className="contractor-ba__col">
                  <span className="mono-label contractor-ba__label">Before</span>
                  <img src="/assets/projects/hbg-before.webp" alt="Higgins Building Group before redesign" loading="lazy" className="contractor-ba__img" />
                </div>
                <div className="contractor-ba__col">
                  <span className="mono-label contractor-ba__label">After</span>
                  <img src="/assets/projects/hbg-after.webp" alt="Higgins Building Group after redesign" loading="lazy" className="contractor-ba__img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="Packages"
            title="Contractor website packages"
            subtitle="Purpose-built options for contractors and service businesses."
          />
          <div className="contractor-packages">
            {[
              {
                name: 'Contractor Launch Site',
                price: 'Starting at $1,500',
                description: 'A clean, fast, professional website for contractors establishing or upgrading their digital presence.',
                included: ['4–6 page custom site', 'Services, about, contact pages', 'Mobile-first responsive build', 'Contact form and quote path', 'Basic SEO structure', '30-day post-launch support'],
                cta: 'Request Quote',
              },
              {
                name: 'Contractor Growth Site',
                price: 'Starting at $2,500',
                description: 'A more complete digital presence for established contractors who want stronger credibility, project proof, and conversion paths.',
                included: ['8–12 page custom site', 'Project gallery', 'Testimonials and trust signals', 'Advanced mobile layout', 'Lead capture improvements', '60-day post-launch support'],
                cta: 'Request Quote',
                recommended: true,
              },
              {
                name: 'Contractor Transformation',
                price: 'Starting at $1,500',
                description: 'Completely rebuild and modernize an outdated contractor website without losing your existing brand or content.',
                included: ['Full visual redesign', 'Mobile layout reconstruction', 'Content restructuring', 'CTA improvements', 'Speed optimization'],
                cta: 'Request Quote',
              },
            ].map((pkg, i) => (
              <GlassCard key={pkg.name} delay={i * 0.1} accent={pkg.recommended ? 'featured' : 'blue'} className={`contractor-package ${pkg.recommended ? 'contractor-package--recommended' : ''}`}>
                {pkg.recommended && <div className="contractor-package__badge">★ Most Popular</div>}
                <h3 className="contractor-package__name">{pkg.name}</h3>
                <div className="contractor-package__price">{pkg.price}</div>
                <p className="contractor-package__desc">{pkg.description}</p>
                <ul className="contractor-package__list">
                  {pkg.included.map(item => (
                    <li key={item}><span>✓</span>{item}</li>
                  ))}
                </ul>
                <Button to="/start-project" variant={pkg.recommended ? 'primary' : 'secondary'} size="md">{pkg.cta}</Button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-sm">
        <div className="container">
          <motion.div
            className="contractor-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mono-label">Ready to build trust before the first call?</span>
            <h2 className="contractor-cta__title">
              Let Higgins Digital build your contractor website.
            </h2>
            <p className="contractor-cta__sub text-muted">Start with a free website scorecard or request a quote directly.</p>
            <div className="contractor-cta__buttons">
              <Button to="/start-project" variant="primary" size="lg">Request a Quote</Button>
              <Button to="/scorecard" variant="secondary" size="lg">Free Website Scorecard</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
