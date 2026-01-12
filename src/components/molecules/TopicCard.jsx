import Badge from '../atoms/Badge'

export default function TopicCard({ topic }) {
  return (
    <div className="topic-card">
      <div className="topic-card__header">
        <div>
          <p className="topic-card__track">{topic.specialisation} - {topic.level}</p>
          <h4>{topic.title}</h4>
        </div>
        <Badge tone={topic.statusTone}>{topic.status}</Badge>
      </div>
      <p className="topic-card__summary">{topic.summary}</p>
      <div className="topic-card__meta">
        <span>Capacity {topic.capacity}</span>
        <span>{topic.availabilityLabel}</span>
      </div>
      <div className="topic-card__tags">
        {topic.keywords.map((keyword) => (
          <span key={keyword} className="tag">
            {keyword}
          </span>
        ))}
      </div>
    </div>
  )
}
