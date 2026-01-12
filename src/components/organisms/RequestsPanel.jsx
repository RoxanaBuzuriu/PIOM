import { useMemo, useState } from 'react'
import Request from '../../models/Request'
import RequestCard from '../molecules/RequestCard'

const actionMap = {
  message: { status: 'needs-info', stage: 'Clarification sent' },
  defer: { status: 'pending', stage: 'Deferred' },
  accept: { status: 'approved', stage: 'Accepted' },
}

export default function RequestsPanel({ requests, onNotify = () => {} }) {
  const [items, setItems] = useState(requests)
  const [activeFilter, setActiveFilter] = useState('all')
  const [lastAction, setLastAction] = useState('')

  const counts = useMemo(() => {
    const base = { pending: 0, 'needs-info': 0, approved: 0 }
    items.forEach((item) => {
      if (base[item.status] !== undefined) {
        base[item.status] += 1
      }
    })
    return base
  }, [items])

  const filteredRequests = useMemo(() => {
    if (activeFilter === 'all') return items
    return items.filter((item) => item.status === activeFilter)
  }, [activeFilter, items])

  const handleAction = (id, action) => {
    setItems((prev) => {
      const target = prev.find((item) => item.id === id)
      if (!target) return prev

      const update = actionMap[action] || actionMap.message
      const message = `${target.student.name} - ${update.stage}`
      setLastAction(message)
      onNotify(message)

      return prev.map((item) => {
        if (item.id !== id) return item
        return new Request({
          id: item.id,
          student: item.student,
          topic: item.topic,
          status: update.status,
          submittedAt: item.submittedAt,
          note: item.note,
          gpa: item.gpa,
          stage: update.stage,
        })
      })
    })
  }

  const filters = [
    { id: 'all', label: `All ${items.length}` },
    { id: 'pending', label: `Pending ${counts.pending}` },
    { id: 'needs-info', label: `Needs Info ${counts['needs-info']}` },
    { id: 'approved', label: `Approved ${counts.approved}` },
  ]

  return (
    <section className="scenario">
      <header className="scenario__header">
        <div>
          <p className="eyebrow">Scenario 2</p>
          <h2>Review Supervision Requests</h2>
          <p className="scenario__subtitle">
            Teacher accepts, defers, or requests clarification from student applicants.
          </p>
        </div>
        <div className="scenario__actions">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`chip ${activeFilter === filter.id ? 'chip--active' : ''}`}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </header>
      {lastAction ? <p className="scenario__note">Last update: {lastAction}</p> : null}

      <div className="grid-three">
        {filteredRequests.length ? (
          filteredRequests.map((request) => (
            <RequestCard key={request.id} request={request} onAction={handleAction} />
          ))
        ) : (
          <div className="empty-state">No requests in this filter.</div>
        )}
      </div>
    </section>
  )
}
