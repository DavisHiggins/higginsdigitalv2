import { motion } from 'framer-motion'
import HigginsBackground from '../components/Background/HigginsBackground'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'
import { processSteps } from '../data/processSteps'
import './HowItWorks.css'

export default function HowItWorks() {
  return (
    <div className="how-page">
      <HigginsBackground />

      <section className="section how-hero">
        <div className="container">
          <motion.div
            className="how-hero__content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="mono-label">How It Works</span>
            <h1 className="how-hero__title">
              A clear process from first conversation{' '}
              <span className="gradient-text">to launch, support, and ownership.</span>
            </h1>
            <p className="how-hero__sub">
              No guesswork. No missing steps. Every Higgins Digital project follows a clear, structured path from discovery to delivery.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="how-steps">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                className="how-step"
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="how-step__num">
                  <span className="mono-label">{step.step}</span>
                </div>
                <div className="how-step__body">
                  <h2 className="how-step__title">{step.title}</h2>
                  <p className="how-step__desc">{step.description}</p>
                  <ul className="how-step__details">
                    {step.details.map(d => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="how-step__connector" aria-hidden="true" />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="how-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="how-cta__title">Ready to start the process?</h2>
            <p className="how-cta__sub text-muted">Answer a few quick questions and Higgins Digital will follow up with a clear next step.</p>
            <div className="how-cta__buttons">
              <Button to="/start-project" variant="primary" size="lg">Start a Project</Button>
              <Button to="/scorecard" variant="secondary" size="lg">Get a Free Scorecard</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
