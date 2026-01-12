const icons = {
  spark: (
    <path d="M12 3l2.3 4.6L19 9.2l-4.7 1.6L12 16l-2.3-5.2L5 9.2l4.7-1.6L12 3z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  shield: (
    <path d="M12 3l7 3v6c0 4.4-3 7.8-7 9-4-1.2-7-4.6-7-9V6l7-3z" />
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M16 16l4 4" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  bell: (
    <>
      <path d="M6 16h12l-1.5-2v-4a4.5 4.5 0 00-9 0v4L6 16z" />
      <path d="M10 18a2 2 0 004 0" />
    </>
  ),
  chevron: <path d="M6 9l6 6 6-6" />,
  dashboard: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1" />
      <rect x="13" y="4" width="7" height="7" rx="1" />
      <rect x="4" y="13" width="7" height="7" rx="1" />
      <rect x="13" y="13" width="7" height="7" rx="1" />
    </>
  ),
  topic: (
    <>
      <path d="M5 6h14" />
      <path d="M5 12h14" />
      <path d="M5 18h9" />
    </>
  ),
  request: (
    <>
      <rect x="4" y="5" width="16" height="12" rx="2" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
    </>
  ),
  supervision: (
    <>
      <path d="M4 18V6l8-3 8 3v12" />
      <path d="M9 10h6" />
      <path d="M9 14h6" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="6" width="16" height="14" rx="2" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M4 10h16" />
    </>
  ),
  filter: (
    <>
      <path d="M4 6h16" />
      <path d="M7 12h10" />
      <path d="M10 18h4" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
}

export default function Icon({ name, size = 18, className = '' }) {
  const icon = icons[name]
  if (!icon) return null

  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icon}
    </svg>
  )
}
