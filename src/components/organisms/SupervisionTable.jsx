import { useMemo, useState } from 'react'
import Avatar from '../atoms/Avatar'
import Badge from '../atoms/Badge'
import ProgressBar from '../molecules/ProgressBar'

const referenceDate = new Date('2025-11-20')
const upcomingWindowDays = 45

export default function SupervisionTable({ theses, onNotify = () => {} }) {
  const [showUpcomingOnly, setShowUpcomingOnly] = useState(false)
  const [exportedAt, setExportedAt] = useState('')

  const filteredTheses = useMemo(() => {
    if (!showUpcomingOnly) return theses

    return theses.filter((thesis) => {
      const dueDate = new Date(thesis.dueAt)
      if (Number.isNaN(dueDate.getTime())) return false
      const diffDays = (dueDate - referenceDate) / (1000 * 60 * 60 * 24)
      return diffDays >= 0 && diffDays <= upcomingWindowDays
    })
  }, [showUpcomingOnly, theses])

  const handleExport = () => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    setExportedAt(time)
    onNotify(`Report exported at ${time}`)
  }

  const handleToggleUpcoming = () => {
    setShowUpcomingOnly((prev) => {
      const next = !prev
      onNotify(next ? 'Showing upcoming reviews' : 'Showing all theses')
      return next
    })
  }

  return (
    <section className="scenario">
      <header className="scenario__header">
        <div>
          <p className="eyebrow">Scenario 3</p>
          <h2>Monitor Supervised Theses</h2>
          <p className="scenario__subtitle">
            A compact overview of milestones, progress, and upcoming deadlines.
          </p>
        </div>
        <div className="scenario__actions">
          <button
            className={`chip ${showUpcomingOnly ? 'chip--active' : ''}`}
            type="button"
            onClick={handleToggleUpcoming}
          >
            Upcoming reviews
          </button>
          <button className="chip" type="button" onClick={handleExport}>
            Export report
          </button>
        </div>
      </header>
      {exportedAt ? (
        <p className="scenario__note">Report exported at {exportedAt}</p>
      ) : null}

      <div className="card card--table">
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Topic</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Next milestone</th>
              <th>Due date</th>
            </tr>
          </thead>
          <tbody>
            {filteredTheses.length ? (
              filteredTheses.map((thesis) => (
                <tr key={thesis.id}>
                  <td>
                    <div className="table-profile">
                      <Avatar name={thesis.student.name} size="sm" />
                      <div>
                        <p>{thesis.student.name}</p>
                        <small>{thesis.student.department}</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="table-topic">{thesis.topic.title}</p>
                    <small>{thesis.topic.specialisation}</small>
                  </td>
                  <td>
                    <Badge tone={thesis.statusTone}>{thesis.status.replace('-', ' ')}</Badge>
                  </td>
                  <td>
                    <ProgressBar value={thesis.progress} />
                  </td>
                  <td>{thesis.milestones[0]}</td>
                  <td>{thesis.dueAt}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="table-empty" colSpan="6">
                  No theses in this view.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}
