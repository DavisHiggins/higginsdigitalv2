import { useEffect, useRef, useState } from 'react'
import './ImageModal.css'

export default function ImageModal({ src, alt, caption, onClose }) {
  const [scale, setScale] = useState(1)
  const overlayRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  function handleOverlayClick(e) {
    if (e.target === overlayRef.current) onClose()
  }

  function zoomIn() {
    setScale(s => Math.min(s + 0.5, 4))
  }

  function zoomOut() {
    setScale(s => Math.max(s - 0.5, 0.5))
  }

  function resetZoom() {
    setScale(1)
  }

  return (
    <div
      className="hd-modal-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={caption || alt}
    >
      <div className="hd-modal-box">
        <div className="hd-modal-toolbar">
          {caption && <span className="hd-modal-caption mono-label">{caption}</span>}
          <div className="hd-modal-controls">
            <button className="hd-modal-btn" onClick={zoomOut} aria-label="Zoom out" title="Zoom out">−</button>
            <button className="hd-modal-btn hd-modal-btn--reset" onClick={resetZoom} aria-label="Reset zoom" title="Reset zoom">
              {Math.round(scale * 100)}%
            </button>
            <button className="hd-modal-btn" onClick={zoomIn} aria-label="Zoom in" title="Zoom in">+</button>
            <button className="hd-modal-btn hd-modal-btn--close" onClick={onClose} aria-label="Close">✕</button>
          </div>
        </div>
        <div className="hd-modal-image-wrap">
          <img
            src={src}
            alt={alt}
            className="hd-modal-image"
            style={{ transform: `scale(${scale})` }}
            draggable={false}
          />
        </div>
      </div>
    </div>
  )
}
