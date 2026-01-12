export default class Request {
  constructor({ id, student, topic, status, submittedAt, note, gpa, stage }) {
    this.id = id
    this.student = student
    this.topic = topic
    this.status = status
    this.submittedAt = submittedAt
    this.note = note
    this.gpa = gpa
    this.stage = stage
  }

  get statusTone() {
    if (this.status === 'approved') return 'success'
    if (this.status === 'pending') return 'warning'
    if (this.status === 'needs-info') return 'neutral'
    return 'muted'
  }
}
