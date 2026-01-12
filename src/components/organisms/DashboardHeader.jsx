import StatCard from '../molecules/StatCard'

export default function DashboardHeader({ stats }) {
  return (
    <section className="dashboard">
      <div className="dashboard__intro">
        <div>
          <p className="eyebrow">MyThesis Platform</p>
        </div>
        <div className="dashboard__cards">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
