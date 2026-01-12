import Avatar from '../atoms/Avatar'
import Button from '../atoms/Button'
import Icon from '../atoms/Icon'

export default function Topbar({ user, viewMode = 'desktop', onViewChange = () => {} }) {
  return (
    <header className="topbar">
      <div className="topbar__search">
        <Icon name="search" />
        <input
          type="search"
          aria-label="Search topics, students, requests"
          placeholder="Search topics, students, requests"
        />
      </div>
      <div className="topbar__actions">
        <div className="view-toggle" role="group" aria-label="Preview mode">
          <button
            type="button"
            className={`view-toggle__btn ${viewMode === 'desktop' ? 'is-active' : ''}`}
            aria-pressed={viewMode === 'desktop'}
            onClick={() => onViewChange('desktop')}
          >
            <Icon name="monitor" />
            Desktop
          </button>
          <button
            type="button"
            className={`view-toggle__btn ${viewMode === 'phone' ? 'is-active' : ''}`}
            aria-pressed={viewMode === 'phone'}
            onClick={() => onViewChange('phone')}
          >
            <Icon name="phone" />
            Phone
          </button>
        </div>
        <div className="topbar__profile">
          <Avatar name={user.name} />
          <div>
            <p className="topbar__name">{user.name}</p>
            <p className="topbar__role">{user.role}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
