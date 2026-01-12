export default class Thesis {
  constructor({ id, student, topic, status, progress, dueAt, milestones }) {
    this.id = id
    this.student = student
    this.topic = topic
    this.status = status
    this.progress = progress
    this.dueAt = dueAt
    this.milestones = milestones
  }

  get statusTone() {
    if (this.status === 'on-track') return 'success'
    if (this.status === 'at-risk') return 'warning'
    return 'neutral'
  }
}
