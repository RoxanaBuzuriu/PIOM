import Avatar from '../atoms/Avatar'
import Badge from '../atoms/Badge'
import Button from '../atoms/Button'

export default function RequestCard({ request, onAction = () => {} }) {
  return (
    <div className="request-card">
      <div className="request-card__header">
        <div className="request-card__profile">
          <Avatar name={request.student.name} />
          <div>
            <p className="request-card__name">{request.student.name}</p>
            <p className="request-card__meta">
              {request.student.department} - GPA {request.gpa}
            </p>
          </div>
        </div>
        <Badge tone={request.statusTone}>{request.status.replace('-', ' ')}</Badge>
      </div>
      <div className="request-card__topic">
        <h4>{request.topic.title}</h4>
        <p>{request.stage}</p>
      </div>
      <p className="request-card__note">{request.note}</p>
      <div className="request-card__actions">
        <Button variant="ghost" type="button" onClick={() => onAction(request.id, 'message')}>
          Message
        </Button>
        <Button variant="secondary" type="button" onClick={() => onAction(request.id, 'defer')}>
          Defer
        </Button>
        <Button variant="primary" type="button" onClick={() => onAction(request.id, 'accept')}>
          Accept
        </Button>
      </div>
    </div>
  )
}
