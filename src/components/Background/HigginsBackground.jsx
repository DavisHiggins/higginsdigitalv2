import './HigginsBackground.css'

export default function HigginsBackground({ variant = 'default' }) {
  return (
    <div className={`hd-bg hd-bg--${variant}`} aria-hidden="true">
      {/* Base: dark navy foundation */}
      <div className="hd-bg__base" />

      {/* Inspiration image layer — intentional, not full-bleed */}
      <div className="hd-bg__inspo" />

      {/* Animated diagonal blue streaks — left side */}
      <div className="hd-bg__diag hd-bg__diag--blue-1" />
      <div className="hd-bg__diag hd-bg__diag--blue-2" />
      <div className="hd-bg__diag hd-bg__diag--blue-3" />

      {/* Animated gold accent lines — right side */}
      <div className="hd-bg__diag hd-bg__diag--gold-1" />
      <div className="hd-bg__diag hd-bg__diag--gold-2" />

      {/* Stars spread across full background */}
      <div className="hd-bg__stars">
        {/* Top-left quadrant */}
        <div className="hd-bg__star hd-bg__star--1" />
        <div className="hd-bg__star hd-bg__star--2" />
        <div className="hd-bg__star hd-bg__star--3" />
        {/* Top-right quadrant */}
        <div className="hd-bg__star hd-bg__star--4" />
        <div className="hd-bg__star hd-bg__star--5" />
        <div className="hd-bg__star hd-bg__star--6" />
        {/* Middle-left */}
        <div className="hd-bg__star hd-bg__star--7" />
        {/* Middle-right */}
        <div className="hd-bg__star hd-bg__star--8" />
        {/* Center */}
        <div className="hd-bg__star hd-bg__star--9" />
        <div className="hd-bg__star hd-bg__star--10" />
        {/* Bottom-left */}
        <div className="hd-bg__star hd-bg__star--11" />
        <div className="hd-bg__star hd-bg__star--12" />
        {/* Bottom-right */}
        <div className="hd-bg__star hd-bg__star--13" />
        <div className="hd-bg__star hd-bg__star--14" />
        <div className="hd-bg__star hd-bg__star--15" />
      </div>

      {/* Top-left constellation */}
      <svg
        className="hd-bg__constellation hd-bg__constellation--tl"
        viewBox="0 0 200 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g className="hd-bg__constellation-lines">
          <line x1="30" y1="60" x2="80" y2="30" stroke="rgba(0,170,255,0.25)" strokeWidth="0.75" />
          <line x1="80" y1="30" x2="148" y2="55" stroke="rgba(0,170,255,0.2)" strokeWidth="0.75" />
          <line x1="148" y1="55" x2="115" y2="115" stroke="rgba(0,170,255,0.18)" strokeWidth="0.75" />
          <line x1="115" y1="115" x2="50" y2="130" stroke="rgba(0,170,255,0.2)" strokeWidth="0.75" />
          <line x1="50" y1="130" x2="30" y2="60" stroke="rgba(0,170,255,0.15)" strokeWidth="0.75" />
          <line x1="80" y1="30" x2="115" y2="115" stroke="rgba(0,170,255,0.12)" strokeWidth="0.5" />
        </g>
        <g className="hd-bg__constellation-stars">
          <circle cx="30" cy="60" r="2.5" fill="rgba(0,170,255,0.7)" className="hd-cstar hd-cstar--1" />
          <circle cx="80" cy="30" r="3.5" fill="rgba(100,200,255,0.9)" className="hd-cstar hd-cstar--2" />
          <circle cx="148" cy="55" r="2" fill="rgba(0,150,255,0.65)" className="hd-cstar hd-cstar--3" />
          <circle cx="115" cy="115" r="2.5" fill="rgba(0,170,255,0.6)" className="hd-cstar hd-cstar--4" />
          <circle cx="50" cy="130" r="2" fill="rgba(80,180,255,0.55)" className="hd-cstar hd-cstar--5" />
        </g>
      </svg>

      {/* Bottom-right constellation */}
      <svg
        className="hd-bg__constellation hd-bg__constellation--br"
        viewBox="0 0 220 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g className="hd-bg__constellation-lines">
          <line x1="190" y1="50" x2="140" y2="80" stroke="rgba(217,164,65,0.22)" strokeWidth="0.75" />
          <line x1="140" y1="80" x2="165" y2="140" stroke="rgba(217,164,65,0.18)" strokeWidth="0.75" />
          <line x1="165" y1="140" x2="100" y2="155" stroke="rgba(0,170,255,0.2)" strokeWidth="0.75" />
          <line x1="100" y1="155" x2="70" y2="100" stroke="rgba(0,170,255,0.18)" strokeWidth="0.75" />
          <line x1="70" y1="100" x2="140" y2="80" stroke="rgba(217,164,65,0.15)" strokeWidth="0.5" />
          <line x1="140" y1="80" x2="100" y2="155" stroke="rgba(0,150,255,0.12)" strokeWidth="0.5" />
        </g>
        <g className="hd-bg__constellation-stars">
          <circle cx="190" cy="50" r="2" fill="rgba(217,164,65,0.7)" className="hd-cstar hd-cstar--6" />
          <circle cx="140" cy="80" r="3.5" fill="rgba(240,180,60,0.85)" className="hd-cstar hd-cstar--7" />
          <circle cx="165" cy="140" r="2.5" fill="rgba(0,170,255,0.7)" className="hd-cstar hd-cstar--8" />
          <circle cx="100" cy="155" r="3" fill="rgba(100,200,255,0.8)" className="hd-cstar hd-cstar--9" />
          <circle cx="70" cy="100" r="2" fill="rgba(217,164,65,0.6)" className="hd-cstar hd-cstar--10" />
        </g>
      </svg>

      {/* Ambient blue glow top-center */}
      <div className="hd-bg__ambient hd-bg__ambient--top" />

      {/* Ambient gold glow bottom-right */}
      <div className="hd-bg__ambient hd-bg__ambient--gold" />

      {/* Subtle dot grid texture */}
      <div className="hd-bg__dots" />

      {/* Vignette overlay */}
      <div className="hd-bg__vignette" />
    </div>
  )
}
