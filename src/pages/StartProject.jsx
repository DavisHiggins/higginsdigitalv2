import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HigginsBackground from '../components/Background/HigginsBackground'
import Button from '../components/ui/Button'
import './StartProject.css'

const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT

const steps = [
  {
    id: 1,
    title: 'What do you need?',
    subtitle: 'Choose the option that best describes what you are looking for.',
    field: 'service',
    options: ['Website build', 'Redesign', 'Monthly plan', 'Care plan', 'Custom portal', 'Not sure'],
  },
  {
    id: 2,
    title: 'What type of business?',
    subtitle: 'Help us understand your industry and goals.',
    field: 'businessType',
    options: ['Service business', 'Creator', 'Contractor', 'Real estate', 'Local business', 'Startup', 'Other'],
  },
  {
    id: 3,
    title: 'What is your budget range?',
    subtitle: 'This helps Higgins Digital recommend the right path without wasting your time.',
    field: 'budget',
    options: ['Under $1,500', '$1,500–$3,000', '$3,000–$5,000', '$5,000+'],
  },
  {
    id: 4,
    title: 'What is your timeline?',
    subtitle: 'When do you need the project launched?',
    field: 'timeline',
    options: ['ASAP', '2–4 weeks', '1–2 months', 'Flexible'],
  },
]

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
}

export default function StartProject() {
  const [stepIdx, setStepIdx] = useState(0)
  const [direction, setDirection] = useState(1)
  const [answers, setAnswers] = useState({})
  const [contact, setContact] = useState({ name: '', business: '', email: '', phone: '', website: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const totalSteps = steps.length + 1
  const progress = ((stepIdx + 1) / totalSteps) * 100

  function selectOption(field, value) {
    setAnswers(prev => ({ ...prev, [field]: value }))
  }

  function goNext() {
    setDirection(1)
    setStepIdx(i => i + 1)
  }

  function goBack() {
    setDirection(-1)
    setStepIdx(i => i - 1)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const payload = { ...answers, ...contact }

    if (FORM_ENDPOINT) {
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!res.ok) throw new Error()
        setSubmitted(true)
      } catch {
        setError('Submission failed. Please email davishiggins@higginsd.com directly.')
        setSubmitting(false)
      }
    } else {
      const body = Object.entries(payload).map(([k, v]) => `${k}: ${v}`).join('\n')
      window.location.href = `mailto:davishiggins@higginsd.com?subject=New Project Inquiry&body=${encodeURIComponent(body)}`
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="start-project-page">
        <HigginsBackground />
        <div className="container">
          <motion.div
            className="start-project-success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="start-project-success__icon">✓</div>
            <h2>Project request received.</h2>
            <p>Higgins Digital will review your answers and follow up with the cleanest next step.</p>
            <Button to="/" variant="primary">Return Home</Button>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="start-project-page">
      <HigginsBackground />
      <div className="container">
        <div className="start-project-header">
          <span className="mono-label">Start a Project</span>
          <h1 className="start-project__title">Tell us about your project.</h1>
          <p className="start-project__sub">
            Answer a few quick questions so Higgins Digital can recommend the cleanest path for your goals, timeline, and budget.
          </p>
        </div>

        <div className="start-project-card">
          <div className="start-project__progress">
            <div className="start-project__progress-bar" style={{ width: `${progress}%` }} />
          </div>
          <div className="start-project__step-count mono-label">
            Step {stepIdx + 1} of {totalSteps}
          </div>

          <AnimatePresence custom={direction} mode="wait">
            {stepIdx < steps.length ? (
              <motion.div
                key={stepIdx}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                className="start-project__step"
              >
                <h2 className="start-project__step-title">{steps[stepIdx].title}</h2>
                <p className="start-project__step-sub">{steps[stepIdx].subtitle}</p>
                <div className="start-project__options">
                  {steps[stepIdx].options.map(opt => (
                    <button
                      key={opt}
                      className={`start-project__option ${answers[steps[stepIdx].field] === opt ? 'start-project__option--selected' : ''}`}
                      onClick={() => selectOption(steps[stepIdx].field, opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="contact"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                className="start-project__step"
                onSubmit={handleSubmit}
              >
                <h2 className="start-project__step-title">Your contact information</h2>
                <p className="start-project__step-sub">Last step. Where should Higgins Digital send your recommendation?</p>
                <div className="start-project__form-grid">
                  <div className="start-project__form-group">
                    <label htmlFor="sp-name">Name *</label>
                    <input id="sp-name" type="text" required value={contact.name} onChange={e => setContact(p => ({...p, name: e.target.value}))} placeholder="Your full name" />
                  </div>
                  <div className="start-project__form-group">
                    <label htmlFor="sp-biz">Business name</label>
                    <input id="sp-biz" type="text" value={contact.business} onChange={e => setContact(p => ({...p, business: e.target.value}))} placeholder="Your company or brand" />
                  </div>
                  <div className="start-project__form-group">
                    <label htmlFor="sp-email">Email *</label>
                    <input id="sp-email" type="email" required value={contact.email} onChange={e => setContact(p => ({...p, email: e.target.value}))} placeholder="your@email.com" />
                  </div>
                  <div className="start-project__form-group">
                    <label htmlFor="sp-phone">Phone (optional)</label>
                    <input id="sp-phone" type="tel" value={contact.phone} onChange={e => setContact(p => ({...p, phone: e.target.value}))} placeholder="(555) 000-0000" />
                  </div>
                  <div className="start-project__form-group start-project__form-group--full">
                    <label htmlFor="sp-url">Current website URL (optional)</label>
                    <input id="sp-url" type="url" value={contact.website} onChange={e => setContact(p => ({...p, website: e.target.value}))} placeholder="https://yoursite.com" />
                  </div>
                  <div className="start-project__form-group start-project__form-group--full">
                    <label htmlFor="sp-notes">Project notes (optional)</label>
                    <textarea id="sp-notes" rows={4} value={contact.notes} onChange={e => setContact(p => ({...p, notes: e.target.value}))} placeholder="Tell us more about what you're looking to build..." />
                  </div>
                </div>
                {error && <p className="start-project__error">{error}</p>}
                <div className="start-project__nav">
                  <button type="button" className="hd-btn hd-btn--secondary hd-btn--md" onClick={goBack}>← Back</button>
                  <button
                    type="submit"
                    className={`hd-btn hd-btn--primary hd-btn--md ${submitting ? 'hd-btn--loading' : ''}`}
                    disabled={submitting}
                  >
                    {submitting && <span className="hd-btn__spinner" />}
                    <span className={submitting ? 'hd-btn__text hd-btn__text--loading' : 'hd-btn__text'}>
                      Submit Request
                    </span>
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

          {stepIdx < steps.length && (
            <div className="start-project__nav">
              {stepIdx > 0 && (
                <button className="hd-btn hd-btn--secondary hd-btn--md" onClick={goBack}>← Back</button>
              )}
              <button
                className="hd-btn hd-btn--primary hd-btn--md"
                onClick={goNext}
                disabled={!answers[steps[stepIdx].field]}
              >
                {stepIdx === steps.length - 1 ? 'Add contact info →' : 'Next →'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
