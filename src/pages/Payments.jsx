import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HigginsBackground from '../components/Background/HigginsBackground'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'
import { paymentOptions } from '../data/paymentOptions'
import './Payments.css'

function PaymentCard({ option }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleCheckout() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId: option.id }),
      })
      const data = await res.json()
      if (!res.ok || !data.url) throw new Error(data.error || 'Checkout failed')
      window.location.href = data.url
    } catch (err) {
      setError('Checkout could not be started. Please try again or contact Higgins Digital.')
      setLoading(false)
    }
  }

  return (
    <motion.div
      className={`payment-card ${option.recommended ? 'payment-card--recommended' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
    >
      {option.recommended && <div className="payment-card__badge">★ Recommended</div>}
      <h3 className="payment-card__title">{option.title}</h3>
      <div className={`payment-card__price ${option.type === 'quote' ? 'payment-card__price--quote' : ''}`}>
        {option.price}
      </div>
      <p className="payment-card__desc">{option.description}</p>
      {error && <p className="payment-card__error">{error}</p>}
      <div className="payment-card__action">
        {option.checkout ? (
          <button
            className={`hd-btn hd-btn--primary hd-btn--md ${loading ? 'hd-btn--loading' : ''}`}
            onClick={handleCheckout}
            disabled={loading}
          >
            {loading && <span className="hd-btn__spinner" aria-hidden="true" />}
            <span className={loading ? 'hd-btn__text hd-btn__text--loading' : 'hd-btn__text'}>
              {loading ? 'Starting checkout...' : option.cta}
            </span>
          </button>
        ) : (
          <Link to="/start-project" className="hd-btn hd-btn--secondary hd-btn--md">
            <span className="hd-btn__text">{option.cta}</span>
          </Link>
        )}
      </div>
    </motion.div>
  )
}

function PaymentSection({ title, options }) {
  return (
    <div className="payments-section">
      <h2 className="payments-section__title">{title}</h2>
      <div className="payments-section__grid">
        {options.map(opt => (
          <PaymentCard key={opt.id} option={opt} />
        ))}
      </div>
    </div>
  )
}

export default function Payments() {
  const [searchParams] = useSearchParams()
  const canceled = searchParams.get('canceled') === 'true'

  const grouped = paymentOptions.reduce((acc, opt) => {
    if (!acc[opt.group]) acc[opt.group] = []
    acc[opt.group].push(opt)
    return acc
  }, {})

  return (
    <div className="payments-page">
      <HigginsBackground />

      <section className="section payments-hero">
        <div className="container">
          <motion.div
            className="payments-hero__content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            {canceled && (
              <div className="payments-canceled">
                Payment was not completed. You can try again or contact Higgins Digital if you have questions.
              </div>
            )}
            <span className="mono-label">Secure Payments</span>
            <h1 className="payments-hero__title">
              Start a project, activate a plan, or pay for ongoing support.
            </h1>
            <p className="payments-hero__sub">
              Payments are processed securely through Stripe. Monthly plans renew automatically, and one-time payments or deposits are applied toward the selected project or service.
            </p>
            <div className="payments-trust-badge">
              <span className="payments-trust-icon">🔒</span>
              <span>Higgins Digital does not store card details on this website. All payments processed by Stripe.</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="payments-sections-list">
            {Object.entries(grouped).map(([group, options]) => (
              <PaymentSection key={group} title={group} options={options} />
            ))}
          </div>

          {/* Before You Pay */}
          <motion.div
            className="payments-disclaimer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="payments-disclaimer__title">Before You Pay</h3>
            <div className="payments-disclaimer__body">
              <p>
                Online payments are intended for clearly defined plans, deposits, and approved services. For larger builds, custom platforms, advanced integrations, or full transformations, Higgins Digital may require a short consultation before work begins. If a payment is submitted for a service that requires additional scope clarification, Higgins Digital will contact you before starting the project.
              </p>
              <ul>
                <li>Subscription plans renew monthly until canceled according to the agreed service terms. Managed monthly website plans may require an initial minimum commitment depending on the project scope.</li>
                <li>Deposits apply toward the selected project total unless otherwise stated in the written project agreement.</li>
                <li>For custom or complex work, Higgins Digital may contact you to confirm scope before work begins.</li>
                <li>Recurring plans renew monthly until canceled according to the agreed service terms.</li>
              </ul>
            </div>
            <div className="payments-disclaimer__contact">
              Questions? <Link to="/contact">Contact Higgins Digital</Link> or <Link to="/start-project">start a project inquiry</Link>.
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
