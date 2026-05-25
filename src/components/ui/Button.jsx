import { Link } from 'react-router-dom'
import './Button.css'

export default function Button({
  children,
  variant = 'primary',
  href,
  to,
  onClick,
  disabled = false,
  loading = false,
  size = 'md',
  className = '',
  type = 'button',
  ...props
}) {
  const classes = `hd-btn hd-btn--${variant} hd-btn--${size} ${loading ? 'hd-btn--loading' : ''} ${className}`

  const content = (
    <>
      {loading && <span className="hd-btn__spinner" aria-hidden="true" />}
      <span className={loading ? 'hd-btn__text hd-btn__text--loading' : 'hd-btn__text'}>
        {children}
      </span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  )
}
