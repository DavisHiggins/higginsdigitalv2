import { motion } from 'framer-motion'
import './GlassCard.css'

export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = false,
  accent = null,
  delay = 0,
  animate = true,
}) {
  const cardProps = animate ? {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay },
  } : {}

  return (
    <motion.div
      className={`glass-card ${hover ? 'glass-card--hover' : ''} ${glow ? 'glass-card--glow' : ''} ${accent ? `glass-card--accent-${accent}` : ''} ${className}`}
      {...cardProps}
    >
      {children}
    </motion.div>
  )
}
