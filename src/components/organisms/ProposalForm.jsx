import { useState } from 'react'
import Button from '../atoms/Button'
import Icon from '../atoms/Icon'
import Stepper from '../molecules/Stepper'
import TopicCard from '../molecules/TopicCard'
import Topic from '../../models/Topic'

const steps = [
  { title: 'Draft', detail: 'Define topic scope and milestones' },
  { title: 'Review', detail: 'Share with department lead' },
  { title: 'Publish', detail: 'Open to student applications' },
]

export default function ProposalForm({
  template,
  checklist,
  timeline,
  previewTopic,
  specialisations = {},
  levels = [],
  onNotify = () => {},
}) {
  const [formData, setFormData] = useState({
    title: template.title,
    specialisation: template.specialisation,
    level: template.level,
    capacity: template.capacity,
    keywords: template.keywords,
    summary: template.summary,
    status: previewTopic.status || 'draft',
  })

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const keywords = formData.keywords
    .split(',')
    .map((keyword) => keyword.trim())
    .filter(Boolean)

  const getSpecialisationsForLevel = (level) => {
    if (Array.isArray(specialisations)) {
      return specialisations
    }
    return specialisations[level] || []
  }

  const allSpecialisations = Array.isArray(specialisations)
    ? specialisations
    : Object.values(specialisations).flat()

  const specialisationsForLevel = getSpecialisationsForLevel(formData.level)
  const specialisationBase = specialisationsForLevel.length
    ? specialisationsForLevel
    : allSpecialisations
  const specialisationOptions = specialisationBase.includes(formData.specialisation)
    ? specialisationBase
    : [formData.specialisation, ...specialisationBase].filter(Boolean)
  const levelOptions = levels.includes(formData.level) ? levels : [formData.level, ...levels]

  const handleLevelChange = (event) => {
    const nextLevel = event.target.value
    const nextSpecialisations = getSpecialisationsForLevel(nextLevel)
    setFormData((prev) => {
      const nextSpecialisation = nextSpecialisations.includes(prev.specialisation)
        ? prev.specialisation
        : nextSpecialisations[0] ?? prev.specialisation
      return {
        ...prev,
        level: nextLevel,
        specialisation: nextSpecialisation,
      }
    })
  }

  const livePreview = new Topic({
    id: previewTopic.id,
    title: formData.title,
    summary: formData.summary,
    specialisation: formData.specialisation,
    level: formData.level,
    keywords,
    capacity: Number(formData.capacity) || 0,
    status: formData.status,
    createdAt: previewTopic.createdAt,
  })

  const statusToStep = {
    draft: 0,
    review: 1,
    open: 2,
  }

  const stepToStatus = ['draft', 'review', 'open']

  const activeStep = statusToStep[formData.status] ?? 0
  const handleStepClick = (index) => {
    const nextStatus = stepToStatus[index]
    if (!nextStatus) return
    setFormData((prev) => ({ ...prev, status: nextStatus }))
    onNotify(`Status set to ${steps[index].title}`)
  }

  const handleStatusSelect = (event) => {
    const nextStatus = event.target.value
    const stepIndex = statusToStep[nextStatus] ?? 0
    setFormData((prev) => ({ ...prev, status: nextStatus }))
    onNotify(`Status set to ${steps[stepIndex].title}`)
  }

  const setStatus = (nextStatus, message) => {
    setFormData((prev) => ({ ...prev, status: nextStatus }))
    onNotify(message)
  }

  return (
    <section className="scenario">
      <header className="scenario__header">
        <div>
          <p className="eyebrow">Scenario 1</p>
          <h2>Propose a New Thesis Topic</h2>
          <p className="scenario__subtitle">
            A guided, top-down flow built from atomic form blocks and reusable topic cards.
          </p>
        </div>
        <div className="scenario__actions">
          <Button
            variant="ghost"
            type="button"
            onClick={() => setStatus('draft', 'Saved as draft')}
          >
            Save Draft
          </Button>
          <Button
            variant="primary"
            type="button"
            icon={<Icon name="plus" />}
            onClick={() => setStatus('open', 'Topic published')}
          >
            Publish Topic
          </Button>
        </div>
      </header>

      <div className="scenario__grid">
        <div className="card card--form">
          <Stepper steps={steps} activeIndex={activeStep} onStepClick={handleStepClick} />
          <div className="form-grid">
            <label>
              Title
              <input type="text" value={formData.title} onChange={handleChange('title')} />
            </label>
            <label>
              Specialisation
              <select value={formData.specialisation} onChange={handleChange('specialisation')}>
                {specialisationOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Level
              <select value={formData.level} onChange={handleLevelChange}>
                {levelOptions.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Capacity
              <input
                type="number"
                min="1"
                value={formData.capacity}
                onChange={handleChange('capacity')}
              />
            </label>
            <label>
              Status
              <select value={formData.status} onChange={handleStatusSelect}>
                <option value="draft">Draft</option>
                <option value="review">In review</option>
                <option value="open">Open</option>
              </select>
            </label>
            <label className="form-grid__wide">
              Keywords
              <input type="text" value={formData.keywords} onChange={handleChange('keywords')} />
            </label>
            <label className="form-grid__wide">
              Summary
              <textarea rows="4" value={formData.summary} onChange={handleChange('summary')} />
            </label>
          </div>
          <div className="form-footer">
            <div>
              <p className="form-footer__label">Attachments</p>
              <p className="form-footer__value">Add syllabus + research references</p>
            </div>
            <Button variant="secondary" size="sm">
              Upload Files
            </Button>
          </div>
        </div>

        <div className="stack">
          <div className="card">
            <h3>Live Preview</h3>
            <TopicCard topic={livePreview} />
          </div>
          <div className="card">
            <h3>Quality Checklist</h3>
            <ul className="checklist">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>Timeline</h3>
            <ul className="timeline">
              {timeline.map((item) => (
                <li key={item.title}>
                  <span>{item.date}</span>
                  <div>
                    <p>{item.title}</p>
                    <small>{item.detail}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
