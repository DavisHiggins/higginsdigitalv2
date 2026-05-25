import { motion } from 'framer-motion'
import './SectionHeader.css'

export default function SectionHeader({ badge, title, subtitle, align = 'center', className = '' }) {
  return (
    <motion.div
      className={`section-header section-header--${align} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
    >
      {badge && (
        <span className="section-header__badge mono-label">{badge}</span>
      )}
      <h2 className="section-header__title">{title}</h2>
      {subtitle && (
        <p className="section-header__subtitle">{subtitle}</p>
      )}
    </motion.div>
  )
}
