import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HigginsBackground from '../components/Background/HigginsBackground'
import Button from '../components/ui/Button'
import './PaymentSuccess.css'

export default function PaymentSuccess() {
  return (
    <div className="payment-success-page">
      <HigginsBackground />
      <section className="payment-success-section">
        <div className="container">
          <motion.div
            className="payment-success-inner"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="payment-success-icon">✓</div>
            <span className="mono-label">Payment Received</span>
            <h1 className="payment-success__title">Payment received.</h1>
            <p className="payment-success__body">
              Thank you for your payment. Higgins Digital will review the payment details and follow up with next steps shortly.
            </p>
            <div className="payment-success__actions">
              <Button to="/" variant="primary" size="lg">Return Home</Button>
              <Button to="/start-project" variant="secondary" size="lg">Complete Project Intake</Button>
              <Button to="/contact" variant="ghost">Contact Higgins Digital</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
