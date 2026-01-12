export default function Button({
  variant = 'primary',
  size = 'md',
  icon = null,
  className = '',
  children,
  ...props
}) {
  return (
    <button className={`btn btn--${variant} btn--${size} ${className}`} {...props}>
      {icon ? <span className="btn__icon">{icon}</span> : null}
      <span>{children}</span>
    </button>
  )
}
