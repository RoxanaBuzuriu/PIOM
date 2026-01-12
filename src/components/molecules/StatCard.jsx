import Icon from '../atoms/Icon'

export default function StatCard({ label, value, delta, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-card__icon">
        <Icon name={icon} />
      </div>
      <div>
        <p className="stat-card__label">{label}</p>
        <div className="stat-card__value">{value}</div>
        <p className="stat-card__delta">{delta}</p>
      </div>
    </div>
  )
}
