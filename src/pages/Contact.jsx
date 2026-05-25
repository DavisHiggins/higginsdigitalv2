import { useState } from 'react'
import { motion } from 'framer-motion'
import HigginsBackground from '../components/Background/HigginsBackground'
import Button from '../components/ui/Button'
import GlassCard from '../components/ui/GlassCard'
import './Contact.css'

const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT

const nextSteps = [
  { step: '1', text: 'Higgins Digital reviews your goals.' },
  { step: '2', text: 'You receive a recommended path.' },
  { step: '3', text: 'If it fits, scope and timeline are confirmed.' },
  { step: '4', text: 'Build, launch, and support begin.' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  function update(field, val) { setForm(p => ({ ...p, [field]: val })) }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    if (FORM_ENDPOINT) {
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'contact', ...form }),
        })
        if (!res.ok) throw new Error()
        setSubmitted(true)
      } catch {
        setError('Could not send. Please email davishiggins@higginsd.com directly.')
        setSubmitting(false)
      }
    } else {
      const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      window.location.href = `mailto:davishiggins@higginsd.com?subject=Contact from higginsd.com&body=${encodeURIComponent(body)}`
      setSubmitted(true)
    }
  }

  return (
    <div className="contact-page">
      <HigginsBackground />

      <section className="section contact-hero">
        <div className="container">
          <motion.div
            className="contact-hero__content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="mono-label">Contact</span>
            <h1 className="contact-hero__title">
              Let's talk about your{' '}
              <span className="gradient-text">next project.</span>
            </h1>
            <p className="contact-hero__sub">
              Whether you need a new website, a redesign, or ongoing support, Higgins Digital will give you a clear, honest recommendation based on your goals and budget.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="contact-layout">
            {/* Form */}
            <div className="contact-form-col">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success__icon">✓</div>
                  <h3>Message received.</h3>
                  <p>Higgins Digital will follow up shortly.</p>
                </div>
              ) : (
                <div className="contact-form-card">
                  <h2 className="contact-form-card__title">Send a message</h2>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="contact-form__group">
                      <label htmlFor="c-name">Name *</label>
                      <input id="c-name" type="text" required value={form.name} onChange={e => update('name', e.target.value)} placeholder="Your full name" />
                    </div>
                    <div className="contact-form__group">
                      <label htmlFor="c-email">Email *</label>
                      <input id="c-email" type="email" required value={form.email} onChange={e => update('email', e.target.value)} placeholder="your@email.com" />
                    </div>
                    <div className="contact-form__group">
                      <label htmlFor="c-msg">Message *</label>
                      <textarea id="c-msg" rows={5} required value={form.message} onChange={e => update('message', e.target.value)} placeholder="What are you working on?" />
                    </div>
                    {error && <p className="contact-form__error">{error}</p>}
                    <button
                      type="submit"
                      className={`hd-btn hd-btn--primary hd-btn--lg contact-submit ${submitting ? 'hd-btn--loading' : ''}`}
                      disabled={submitting}
                    >
                      {submitting && <span className="hd-btn__spinner" />}
                      <span className={submitting ? 'hd-btn__text hd-btn__text--loading' : 'hd-btn__text'}>Send Message</span>
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="contact-info-col">
              <GlassCard className="contact-info-card">
                <h3 className="contact-info-card__title">Direct contact</h3>
                <div className="contact-info-links">
                  <a href="mailto:davishiggins@higginsd.com" className="contact-info-link">
                    <span className="contact-info-link__icon">✉</span>
                    <div>
                      <span className="contact-info-link__label mono-label">Work Email</span>
                      <span className="contact-info-link__value">davishiggins@higginsd.com</span>
                    </div>
                  </a>
                  <a href="https://instagram.com/higgins.digital" target="_blank" rel="noopener noreferrer" className="contact-info-link">
                    <span className="contact-info-link__icon">◈</span>
                    <div>
                      <span className="contact-info-link__label mono-label">Instagram</span>
                      <span className="contact-info-link__value">@higgins.digital</span>
                    </div>
                  </a>
                </div>
              </GlassCard>

              <GlassCard className="contact-info-card">
                <h3 className="contact-info-card__title">Or use a structured intake</h3>
                <p className="contact-info-card__sub text-muted">For project requests, start with the intake flow to get the most relevant response.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
                  <Button to="/start-project" variant="primary" size="md">Start a Project</Button>
                  <Button to="/scorecard" variant="secondary" size="md">Free Website Scorecard</Button>
                </div>
              </GlassCard>

              <div className="contact-next-steps">
                <h4 className="contact-next-steps__title mono-label">What happens after you reach out?</h4>
                <ol className="contact-next-steps__list">
                  {nextSteps.map(s => (
                    <li key={s.step}>
                      <span className="contact-next-steps__num">{s.step}</span>
                      <span>{s.text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
