export default function ScenarioTabs({ scenarios, activeId, onChange }) {
  return (
    <div className="scenario-tabs" role="tablist" aria-label="Scenario tabs">
      {scenarios.map((scenario) => (
        <button
          key={scenario.id}
          id={`tab-${scenario.id}`}
          type="button"
          role="tab"
          aria-selected={activeId === scenario.id}
          aria-controls={`scenario-panel-${scenario.id}`}
          tabIndex={activeId === scenario.id ? 0 : -1}
          className={`scenario-tabs__tab ${activeId === scenario.id ? 'is-active' : ''}`}
          onClick={() => onChange(scenario.id)}
        >
          <span>{scenario.label}</span>
          <small>{scenario.detail}</small>
        </button>
      ))}
    </div>
  )
}
