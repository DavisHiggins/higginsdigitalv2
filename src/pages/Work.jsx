import { useState } from 'react'
import { motion } from 'framer-motion'
import HigginsBackground from '../components/Background/HigginsBackground'
import Button from '../components/ui/Button'
import ImageModal from '../components/ui/ImageModal'
import { projects } from '../data/projectProof'
import './Work.css'

/* ── Before & After Dropdown ───────────────────────────────────────────── */
function BeforeAfterDropdown({ comparisons, onImageClick }) {
  const [isOpen, setIsOpen] = useState(false)

  if (!comparisons || comparisons.length === 0) return null

  return (
    <div className="ba-dropdown">
      <button
        className="ba-dropdown__trigger"
        onClick={() => setIsOpen(o => !o)}
        aria-expanded={isOpen}
      >
        <span>Before &amp; After Comparison</span>
        <span className={`ba-dropdown__chevron ${isOpen ? 'ba-dropdown__chevron--open' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <div className="ba-dropdown__content">
          <div className="ba-dropdown__header">
            <span className="ba-dropdown__col-label ba-dropdown__col-label--before">Before</span>
            <span className="ba-dropdown__col-label ba-dropdown__col-label--after">After</span>
          </div>
          {comparisons.map(comp => (
            <div key={comp.id} className="ba-dropdown__row">
              <button
                className="ba-dropdown__bubble ba-dropdown__bubble--before"
                onClick={() => onImageClick(comp.beforeImage, comp.beforeAlt, comp.beforeLabel)}
              >
                {comp.beforeLabel}
              </button>
              <button
                className="ba-dropdown__bubble ba-dropdown__bubble--after"
                onClick={() => onImageClick(comp.afterImage, comp.afterAlt, comp.afterLabel)}
              >
                {comp.afterLabel}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* ── Work Page ─────────────────────────────────────────────────────────── */
export default function Work() {
  const [modal, setModal] = useState(null)

  function openModal(src, alt, caption) {
    setModal({ src, alt, caption })
  }

  function closeModal() {
    setModal(null)
  }

  return (
    <div className="work-page">
      <HigginsBackground />

      <section className="section work-hero">
        <div className="container">
          <motion.div
            className="work-hero__content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="mono-label">Work / Projects</span>
            <h1 className="work-hero__title">
              Built for real businesses,{' '}
              <span className="gradient-text">not demo screens.</span>
            </h1>
            <p className="work-hero__sub">
              Every project is designed to create trust, drive conversions, and perform under real conditions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="work-project"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="work-project__meta">
                <span className="mono-label">{project.category}</span>
                {project.logo && (
                  <img src={project.logo} alt={project.client} className="work-project__logo" loading="lazy" />
                )}
              </div>

              <div className="work-project__layout">
                {/* Left: text info */}
                <div className="work-project__info">
                  <h2 className="work-project__title">{project.client}</h2>
                  <p className="work-project__tagline">{project.tagline}</p>

                  <div className="work-project__section">
                    <h4 className="work-project__section-label mono-label">The Problem</h4>
                    <p>{project.problem}</p>
                  </div>

                  <div className="work-project__section">
                    <h4 className="work-project__section-label mono-label">What Was Built</h4>
                    <p>{project.built}</p>
                  </div>

                  <div className="work-project__section">
                    <h4 className="work-project__section-label mono-label">What Improved</h4>
                    <ul className="work-project__improved">
                      {project.improved.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="work-project__section">
                    <h4 className="work-project__section-label mono-label">Tech / Approach</h4>
                    <p>{project.tech}</p>
                  </div>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-project__link"
                    >
                      View Live Site →
                    </a>
                  )}
                </div>

                {/* Right: visuals */}
                <div className="work-project__visuals">
                  {/* Main showcase image */}
                  {project.showcaseImage && (
                    <div className="work-project__showcase">
                      <img
                        src={project.showcaseImage}
                        alt={`${project.client} website`}
                        loading="lazy"
                        style={project.showcaseObjectPosition ? {
                          objectFit: 'cover',
                          objectPosition: project.showcaseObjectPosition,
                          height: '280px',
                          width: '100%',
                        } : {}}
                      />
                    </div>
                  )}

                  {/* Additional gallery images (Photography Portfolio) */}
                  {project.galleryImages && project.galleryImages.length > 0 && (
                    <div className="work-project__gallery">
                      {project.galleryImages.map((img, gi) => (
                        <div key={gi} className="work-project__gallery-img">
                          <img src={img} alt={`${project.client} screenshot ${gi + 2}`} loading="lazy" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Before & After dropdown (HBG) */}
                  {project.comparisons && project.comparisons.length > 0 && (
                    <BeforeAfterDropdown
                      comparisons={project.comparisons}
                      onImageClick={openModal}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          <div className="work-cta">
            <h2 className="work-cta__title">Ready to build something like this?</h2>
            <p className="work-cta__sub text-muted">Start with a free scorecard or go straight to a project quote.</p>
            <div className="work-cta__buttons">
              <Button to="/start-project" variant="primary" size="lg">Start a Project</Button>
              <Button to="/scorecard" variant="secondary" size="lg">Free Website Scorecard</Button>
            </div>
          </div>
        </div>
      </section>

      {modal && (
        <ImageModal
          src={modal.src}
          alt={modal.alt}
          caption={modal.caption}
          onClose={closeModal}
        />
      )}
    </div>
  )
}
