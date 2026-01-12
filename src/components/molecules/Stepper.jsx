export default function Stepper({ steps, activeIndex, onStepClick }) {
  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className={`stepper__item ${index === activeIndex ? 'is-active' : ''} ${
            onStepClick ? 'is-clickable' : ''
          }`}
          role={onStepClick ? 'button' : undefined}
          tabIndex={onStepClick ? 0 : undefined}
          onClick={onStepClick ? () => onStepClick(index) : undefined}
          onKeyDown={
            onStepClick
              ? (event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    onStepClick(index)
                  }
                }
              : undefined
          }
          aria-current={index === activeIndex ? 'step' : undefined}
        >
          <div className="stepper__dot">{index + 1}</div>
          <div>
            <p className="stepper__title">{step.title}</p>
            <p className="stepper__detail">{step.detail}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
