import { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true)
      return
    }

    let ringX = 0
    let ringY = 0
    let dotX = 0
    let dotY = 0
    let rafId = null
    let isVisible = false
    let justEntered = false

    function onMouseMove(e) {
      if (justEntered) {
        // Re-entry: snap both dot and ring instantly — no interpolation dart
        dotX = e.clientX
        dotY = e.clientY
        ringX = e.clientX
        ringY = e.clientY
        justEntered = false
      } else {
        dotX = e.clientX
        dotY = e.clientY
      }
      if (!isVisible) {
        isVisible = true
        setVisible(true)
      }
    }

    function onMouseLeave() {
      // Freeze cursor at last known position — do NOT reset to 0,0
      justEntered = true
      isVisible = false
      setVisible(false)
    }

    function onMouseDown() {
      setClicking(true)
    }

    function onMouseUp() {
      setClicking(false)
    }

    function lerp(a, b, t) {
      return a + (b - a) * t
    }

    function animate() {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`
      }
      ringX = lerp(ringX, dotX, 0.14)
      ringY = lerp(ringY, dotY, 0.14)
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`
      }
      rafId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, []) // run once only — coordinates live in closure, never reset

  if (isTouch) return null

  return (
    <>
      <div
        ref={dotRef}
        className={`hd-cursor-dot ${visible ? 'hd-cursor-dot--visible' : ''} ${clicking ? 'hd-cursor-dot--clicking' : ''}`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`hd-cursor-ring ${visible ? 'hd-cursor-ring--visible' : ''} ${clicking ? 'hd-cursor-ring--clicking' : ''}`}
        aria-hidden="true"
      />
    </>
  )
}
