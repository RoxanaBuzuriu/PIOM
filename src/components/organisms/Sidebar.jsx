import Icon from '../atoms/Icon'

const navItems = [
  { label: 'Dashboard', icon: 'dashboard' },
  { label: 'Topics', icon: 'topic' },
  { label: 'Requests', icon: 'request' },
  { label: 'Calendar', icon: 'calendar' },
]

export default function Sidebar({ active = 'Dashboard', onSelect = () => {} }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <div className="sidebar__logo">
          <img src="/Logo-emblema-UVT-14.png" alt="UVT logo" />
        </div>
        <div>
          <p className="sidebar__title">MyThesis</p>
          <p className="sidebar__subtitle">Coordinator Console</p>
        </div>
      </div>
      <nav className="sidebar__nav">
        {navItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`sidebar__link ${active === item.label ? 'is-active' : ''}`}
            onClick={() => onSelect(item.label)}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar__footer">
        <p>Semester 1 - 2025</p>
        <span>Prototype build</span>
      </div>
    </aside>
  )
}
