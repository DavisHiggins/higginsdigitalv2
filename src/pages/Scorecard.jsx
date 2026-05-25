import { useState } from 'react'
import { motion } from 'framer-motion'
import HigginsBackground from '../components/Background/HigginsBackground'
import SectionHeader from '../components/ui/SectionHeader'
import GlassCard from '../components/ui/GlassCard'
import './Scorecard.css'

const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT

const scoreCategories = [
  { icon: '👁', title: 'First Impression', description: 'Does your site communicate trust, quality, and purpose within the first few seconds?' },
  { icon: '📱', title: 'Mobile Experience', description: 'Is the site easy to use, read, and navigate on a phone?' },
  { icon: '⚡', title: 'Speed', description: 'Does the site load fast enough to hold visitor attention and rank well?' },
  { icon: '🛡', title: 'Trust', description: 'Do visitors feel confident in your business before they contact you?' },
  { icon: '🎯', title: 'Calls to Action', description: 'Are the next steps obvious and easy to take on every page?' },
  { icon: '🔍', title: 'SEO Structure', description: 'Is the site structured to be found by search engines for the right terms?' },
  { icon: '📊', title: 'Conversion Clarity', description: 'Is the site clearly designed to turn visitors into leads, bookings, or buyers?' },
]

const goalOptions = ['More leads', 'More trust', 'Better mobile experience', 'Faster site', 'Better design', 'More bookings', 'Not sure']

export default function Scorecard() {
  const [form, setForm] = useState({ url: '', business: '', email: '', goal: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  function update(field, val) { setForm(p => ({ ...p, [field]: val })) }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const payload = { type: 'scorecard', ...form }

    if (FORM_ENDPOINT) {
      try {
        const res = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
        if (!res.ok) throw new Error()
        setSubmitted(true)
      } catch {
        setError('Submission failed. Please email davishiggins@higginsd.com directly.')
        setSubmitting(false)
      }
    } else {
      const body = `Website URL: ${form.url}\nBusiness: ${form.business}\nEmail: ${form.email}\nGoal: ${form.goal}`
      window.location.href = `mailto:davishiggins@higginsd.com?subject=Website Scorecard Request&body=${encodeURIComponent(body)}`
      setSubmitted(true)
    }
  }

  return (
    <div className="scorecard-page">
      <HigginsBackground />

      <section className="section scorecard-hero">
        <div className="container">
          <motion.div
            className="scorecard-hero__content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="mono-label">Free Website Scorecard</span>
            <h1 className="scorecard-hero__title">
              Find out what your website is costing you.
            </h1>
            <p className="scorecard-hero__sub">
              Submit your website and Higgins Digital will review the areas that matter most: first impression, mobile experience, speed, trust, calls to action, SEO structure, and conversion clarity.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="scorecard-layout">
            {/* Form */}
            <div className="scorecard-form-col">
              {submitted ? (
                <motion.div
                  className="scorecard-success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="scorecard-success__icon">✓</div>
                  <h3>Scorecard request received.</h3>
                  <p>A short review will be sent within 48 hours.</p>
                </motion.div>
              ) : (
                <div className="scorecard-form-card">
                  <h2 className="scorecard-form-card__title">Get a free website scorecard within 48 hours.</h2>
                  <form onSubmit={handleSubmit} className="scorecard-form">
                    <div className="scorecard-form__group">
                      <label htmlFor="sc-url">Website URL *</label>
                      <input id="sc-url" type="url" required value={form.url} onChange={e => update('url', e.target.value)} placeholder="https://yoursite.com" />
                    </div>
                    <div className="scorecard-form__group">
                      <label htmlFor="sc-biz">Business name *</label>
                      <input id="sc-biz" type="text" required value={form.business} onChange={e => update('business', e.target.value)} placeholder="Your business name" />
                    </div>
                    <div className="scorecard-form__group">
                      <label htmlFor="sc-email">Email address *</label>
                      <input id="sc-email" type="email" required value={form.email} onChange={e => update('email', e.target.value)} placeholder="your@email.com" />
                    </div>
                    <div className="scorecard-form__group">
                      <label htmlFor="sc-goal">Main goal</label>
                      <select id="sc-goal" value={form.goal} onChange={e => update('goal', e.target.value)}>
                        <option value="">Select your main goal</option>
                        {goalOptions.map(g => <option key={g} value={g}>{g}</option>)}
                      </select>
                    </div>
                    {error && <p className="scorecard-form__error">{error}</p>}
                    <button
                      type="submit"
                      className={`hd-btn hd-btn--primary hd-btn--lg scorecard-submit ${submitting ? 'hd-btn--loading' : ''}`}
                      disabled={submitting}
                    >
                      {submitting && <span className="hd-btn__spinner" />}
                      <span className={submitting ? 'hd-btn__text hd-btn__text--loading' : 'hd-btn__text'}>
                        Request My Scorecard
                      </span>
                    </button>
                    <p className="scorecard-form__trust">Scorecards typically sent within 48 hours.</p>
                  </form>
                </div>
              )}
            </div>

            {/* Categories */}
            <div className="scorecard-categories-col">
              <h3 className="scorecard-categories__title">What gets reviewed</h3>
              <div className="scorecard-categories">
                {scoreCategories.map((cat, i) => (
                  <GlassCard key={cat.title} delay={i * 0.06} className="scorecard-category">
                    <div className="scorecard-category__icon">{cat.icon}</div>
                    <div>
                      <h4 className="scorecard-category__title">{cat.title}</h4>
                      <p className="scorecard-category__desc">{cat.description}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
