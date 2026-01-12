export default function Avatar({ name, src, size = 'md' }) {
  if (src) {
    return <img className={`avatar avatar--${size}`} src={src} alt={name} />
  }

  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <span className={`avatar avatar--${size}`} aria-label={name}>
      {initials}
    </span>
  )
}
