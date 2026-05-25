import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HigginsBackground from '../components/Background/HigginsBackground'
import SectionHeader from '../components/ui/SectionHeader'
import GlassCard from '../components/ui/GlassCard'
import Button from '../components/ui/Button'
import { oneTimeBuilds, managedPlans, carePlans, modifications, comparisonRows } from '../data/pricingData'
import './Pricing.css'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
}

function PricingCard({ plan, type = 'build' }) {
  const isQuote = plan.quoteOnly
  const ctaLink = isQuote ? (plan.primaryCtaLink || plan.ctaLink || '/start-project') : null

  return (
    <GlassCard
      className={`pricing-card ${plan.recommended ? 'pricing-card--recommended' : ''}`}
      glow={plan.recommended}
      accent={plan.recommended ? 'featured' : 'blue'}
      hover
    >
      {plan.badge && (
        <div className="pricing-card__badge">{plan.badge}</div>
      )}
      {plan.category && (
        <span className="mono-label pricing-card__category">{plan.category}</span>
      )}
      <h3 className="pricing-card__name">{plan.name || plan.title}</h3>
      <div className="pricing-card__price">{plan.price}</div>
      {plan.subtitle && <p className="pricing-card__subtitle">{plan.subtitle}</p>}
      <p className="pricing-card__desc">{plan.description}</p>

      <ul className="pricing-card__list">
        {(plan.included || []).map(item => (
          <li key={item}>
            <span className="pricing-card__check">✓</span>
            {item}
          </li>
        ))}
      </ul>

      {plan.note && <p className="pricing-card__note">{plan.note}</p>}
      {plan.bestFor && (
        <p className="pricing-card__note">
          <strong>Best for:</strong> {plan.bestFor}
        </p>
      )}

      <div className="pricing-card__actions">
        {type === 'build' && !isQuote && (
          <>
            <Button to="/payments" variant="primary" size="md">{plan.primaryCta}</Button>
            <Button to="/start-project" variant="secondary" size="md">{plan.secondaryCta}</Button>
          </>
        )}
        {type === 'build' && isQuote && (
          <Button to="/start-project" variant="primary" size="md">{plan.primaryCta || 'Request Quote'}</Button>
        )}
        {type === 'managed' && !isQuote && (
          <Button to="/payments" variant="primary" size="md">{plan.cta}</Button>
        )}
        {type === 'managed' && isQuote && (
          <Button to="/start-project" variant="primary" size="md">{plan.cta}</Button>
        )}
        {type === 'care' && (
          <Button to="/payments" variant="primary" size="md">{plan.cta}</Button>
        )}
        {type === 'mod' && !isQuote && (
          <Button to="/payments" variant="primary" size="md">{plan.cta}</Button>
        )}
        {type === 'mod' && isQuote && (
          <Button to="/start-project" variant="primary" size="md">{plan.cta}</Button>
        )}
      </div>
    </GlassCard>
  )
}

export default function Pricing() {
  return (
    <div className="pricing-page">
      <HigginsBackground />

      {/* Hero */}
      <section className="section pricing-hero">
        <div className="container">
          <motion.div className="pricing-hero__content" {...fadeUp}>
            <span className="mono-label">Pricing</span>
            <h1 className="pricing-hero__title">
              Flexible website pricing built around how{' '}
              <span className="gradient-text">your business wants to grow.</span>
            </h1>
            <p className="pricing-hero__sub">
              From polished five-page sites to custom platforms with integrations and portals, Higgins Digital builds fast, modern, conversion-focused websites with flexible payment options and full source-code ownership available at launch.
            </p>
            <div className="pricing-hero__highlights">
              {[
                { label: 'ONE-TIME BUILDS', value: 'Starting at $1,000' },
                { label: 'MANAGED MONTHLY', value: 'Starting at $150/mo' },
                { label: 'CARE PLANS', value: 'Starting at $75/mo' },
                { label: 'MODIFICATIONS', value: 'Starting at $100' },
              ].map(h => (
                <div key={h.label} className="pricing-hero__highlight">
                  <span className="pricing-hero__highlight-label mono-label">{h.label}</span>
                  <span className="pricing-hero__highlight-value">{h.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Part 1: Pricing Path Selector */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="PART ONE"
            title="Choose the pricing path that fits your business."
            subtitle="Whether you want to pay once and fully own the site, spread the build into a managed monthly plan, or keep an existing site supported after launch, Higgins Digital gives you a clear path without unnecessary platform lock-in."
          />
          <div className="pricing-paths">
            {[
              {
                title: 'Pay Once',
                subtitle: 'Best for businesses that want full ownership after launch.',
                bullets: ['One-time project payment', 'Custom website designed and built around your business', 'Source-code ownership transferred at launch', 'Optional monthly care after delivery'],
                cta: 'View One-Time Builds',
                href: '#one-time-builds',
              },
              {
                title: 'Managed Monthly',
                subtitle: 'Best for businesses that want a professional site without a large upfront payment.',
                bullets: ['Lower upfront commitment', 'Website build, launch support, and ongoing care included', 'Small monthly edits and maintenance', '12-month minimum recommended'],
                cta: 'View Monthly Plans',
                href: '#managed-monthly',
              },
              {
                title: 'Ongoing Care',
                subtitle: 'Best for businesses that already have a site and want support after launch.',
                bullets: ['Website monitoring', 'Minor content updates', 'Performance checks', 'Priority support options'],
                cta: 'View Care Plans',
                href: '#care-plans',
              },
            ].map((path, i) => (
              <GlassCard key={path.title} delay={i * 0.1} accent="blue" className="pricing-path-card">
                <h3 className="pricing-path-card__title">{path.title}</h3>
                <p className="pricing-path-card__subtitle text-muted">{path.subtitle}</p>
                <ul className="pricing-path-card__list">
                  {path.bullets.map(b => (
                    <li key={b}>
                      <span className="text-blue">→</span> {b}
                    </li>
                  ))}
                </ul>
                <a href={path.href} className="pricing-path-card__cta">{path.cta} ↓</a>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Part 2: One-Time Builds */}
      <section className="section" id="one-time-builds">
        <div className="container">
          <SectionHeader
            badge="PART TWO"
            title="One-Time Website Builds"
            subtitle="From-scratch builds for businesses that want a professional website, full ownership, and no ongoing platform dependency."
          />
          <div className="pricing-grid pricing-grid--3">
            {oneTimeBuilds.map((plan, i) => (
              <PricingCard key={plan.id} plan={plan} type="build" />
            ))}
          </div>
        </div>
      </section>

      {/* Part 3: Managed Monthly */}
      <section className="section" id="managed-monthly">
        <div className="container">
          <SectionHeader
            badge="PART THREE"
            title="Managed Monthly Website Plans"
            subtitle="For businesses that want a professional website without a large upfront payment. Higgins Digital builds, launches, maintains, and supports the site through a simple monthly plan."
          />
          <div className="pricing-managed-note">
            <div className="pricing-managed-note__icon">ℹ</div>
            <div>
              <strong>Not a rental trap.</strong>
              <p>Managed monthly plans are designed for businesses that prefer predictable monthly costs instead of a larger upfront build. After the initial agreement, clients can continue monthly support or discuss a buyout/ownership transfer option.</p>
            </div>
          </div>
          <div className="pricing-grid pricing-grid--3">
            {managedPlans.map((plan, i) => (
              <PricingCard key={plan.id} plan={plan} type="managed" />
            ))}
          </div>
        </div>
      </section>

      {/* Part 4: Care Plans */}
      <section className="section" id="care-plans">
        <div className="container">
          <SectionHeader
            badge="PART FOUR"
            title="Website Care Plans"
            subtitle="For clients who already launched a site and want continued support, small edits, monitoring, and improvements without managing the technical side themselves."
          />
          <div className="pricing-grid pricing-grid--3">
            {carePlans.map((plan, i) => (
              <PricingCard key={plan.id} plan={plan} type="care" />
            ))}
          </div>
        </div>
      </section>

      {/* Part 5: Modifications */}
      <section className="section" id="modifications">
        <div className="container">
          <SectionHeader
            badge="PART FIVE"
            title="Modifications & Transformations"
            subtitle="Already have a site? Higgins Digital can update what works, rebuild what does not, or completely modernize the experience."
          />
          <div className="pricing-grid pricing-grid--4">
            {modifications.map((mod, i) => (
              <GlassCard key={mod.id} delay={i * 0.08} className={`pricing-mod-card ${mod.quoteOnly ? '' : ''}`}>
                <div className="pricing-mod-card__label">{mod.label}</div>
                <div className="pricing-mod-card__turnaround mono-label">{mod.turnaround}</div>
                <h3 className="pricing-mod-card__name">{mod.name}</h3>
                <div className="pricing-mod-card__price">{mod.price}</div>
                <p className="pricing-mod-card__desc">{mod.description}</p>
                <ul className="pricing-card__list">
                  {mod.included.map(item => (
                    <li key={item}><span className="pricing-card__check">✓</span>{item}</li>
                  ))}
                </ul>
                <div className="pricing-card__actions" style={{ marginTop: 'auto' }}>
                  {mod.quoteOnly ? (
                    <Button to="/start-project" variant="secondary" size="sm">{mod.cta}</Button>
                  ) : (
                    <Button to="/payments" variant="primary" size="sm">{mod.cta}</Button>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Part 6: Why HD Wins */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="PART SIX"
            title="Why Higgins Digital Wins"
            subtitle="A cleaner, faster, more flexible alternative to bloated templates and overpriced agency builds."
          />
          <div className="pricing-comparison-wrapper">
            <table className="pricing-comparison-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Typical Agency or Template Build</th>
                  <th className="pricing-comparison-table__hd-col">Higgins Digital Build</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.metric}>
                    <td className="pricing-comparison-table__metric">{row.metric}</td>
                    <td className="pricing-comparison-table__agency">{row.agency}</td>
                    <td className="pricing-comparison-table__hd">{row.higgins}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ownership Statement */}
      <section className="section-sm">
        <div className="container">
          <motion.div className="pricing-ownership" {...fadeUp}>
            <span className="mono-label">No Lock-In</span>
            <h2 className="pricing-ownership__title gradient-text-gold">The code is yours. Period.</h2>
            <p className="pricing-ownership__body">
              After launch, and after any agreed domain purchase, transfer, or project balance is complete, every line of code, every asset, and every file can belong 100% to the client. No platform lock-in, no hidden licensing fees, and no permission needed to host, edit, or migrate the site later.
            </p>
            <p className="pricing-ownership__note text-muted">
              Monthly care and managed plans are available for businesses that want Higgins Digital to continue maintaining and improving the site — not because the client is trapped.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-sm">
        <div className="container">
          <motion.div className="pricing-final-cta" {...fadeUp}>
            <h2 className="pricing-final-cta__title">Ready to build the right website for your business?</h2>
            <p className="pricing-final-cta__sub text-muted">
              Start with a one-time build, choose a managed monthly plan, or request support for an existing site. Higgins Digital will recommend the cleanest path based on your goals, timeline, and budget.
            </p>
            <div className="pricing-final-cta__buttons">
              <Button to="/start-project" variant="primary" size="lg">Request a Quote</Button>
              <Button to="/work" variant="secondary" size="lg">View Work</Button>
              <Button to="/payments" variant="gold" size="lg">Make a Payment</Button>
            </div>
            <p className="pricing-final-cta__trust mono-label">Quotes typically sent within 48 hours.</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
