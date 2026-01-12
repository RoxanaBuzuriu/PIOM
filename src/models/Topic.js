export default class Topic {
  constructor({
    id,
    title,
    summary,
    specialisation,
    track,
    level,
    keywords,
    capacity,
    status,
    createdAt,
  }) {
    this.id = id
    this.title = title
    this.summary = summary
    this.specialisation = specialisation ?? track
    this.level = level
    this.keywords = keywords
    this.capacity = capacity
    this.status = status
    this.createdAt = createdAt
  }

  get statusTone() {
    if (this.status === 'open') return 'success'
    if (this.status === 'review') return 'warning'
    if (this.status === 'draft') return 'neutral'
    return 'muted'
  }

  get availabilityLabel() {
    if (this.status === 'open') return 'Open for applicants'
    if (this.status === 'review') return 'In review'
    if (this.status === 'draft') return 'Draft'
    return 'Closed'
  }
}
