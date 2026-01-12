import { useRef, useState } from 'react'
import './App.css'
import Sidebar from './components/organisms/Sidebar'
import Topbar from './components/organisms/Topbar'
import ScenarioTabs from './components/organisms/ScenarioTabs'
import DashboardHeader from './components/organisms/DashboardHeader'
import ProposalForm from './components/organisms/ProposalForm'
import RequestsPanel from './components/organisms/RequestsPanel'
import SupervisionTable from './components/organisms/SupervisionTable'
import TopicCard from './components/molecules/TopicCard'
import RequestCard from './components/molecules/RequestCard'
import Toast from './components/atoms/Toast'
import {
  availableLevels,
  availableSpecialisations,
  faculty,
  topics,
  requests,
  theses,
  stats,
  proposalChecklist,
  proposalTimeline,
  proposalTemplate,
} from './data/mockData'

const scenarios = [
  {
    id: 'propose',
    label: 'Propose Topic',
    detail: 'Draft -> Review -> Publish',
  },
  {
    id: 'requests',
    label: 'Review Requests',
    detail: 'Approve or ask for info',
  },
  {
    id: 'supervision',
    label: 'Supervision Overview',
    detail: 'Progress + milestones',
  },
]

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const buildCalendar = (year) =>
  monthNames.map((name, monthIndex) => {
    const firstDay = new Date(year, monthIndex, 1)
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
    const startOffset = (firstDay.getDay() + 6) % 7
    const weeks = []
    let week = Array(startOffset).fill(null)

    for (let day = 1; day <= daysInMonth; day += 1) {
      week.push(day)
      if (week.length === 7) {
        weeks.push(week)
        week = []
      }
    }

    if (week.length) {
      while (week.length < 7) {
        week.push(null)
      }
      weeks.push(week)
    }

    return { name, weeks }
  })

const getInitialViewMode = () => {
  if (typeof window === 'undefined') return 'desktop'
  const params = new URLSearchParams(window.location.search)
  return params.get('view') === 'phone' ? 'phone' : 'desktop'
}

function App() {
  const [activeScenario, setActiveScenario] = useState('propose')
  const [activeNav, setActiveNav] = useState('Dashboard')
  const [viewMode, setViewMode] = useState(getInitialViewMode)
  const [toastMessage, setToastMessage] = useState('')
  const toastTimerRef = useRef(null)

  const showToast = (message) => {
    setToastMessage(message)
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current)
    }
    toastTimerRef.current = setTimeout(() => {
      setToastMessage('')
    }, 2400)
  }

  const dismissToast = () => {
    setToastMessage('')
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current)
      toastTimerRef.current = null
    }
  }

  const handleViewChange = (mode) => {
    setViewMode(mode)
    const params = new URLSearchParams(window.location.search)
    if (mode === 'phone') {
      params.set('view', 'phone')
    } else {
      params.delete('view')
    }
    const suffix = params.toString()
    const nextUrl = suffix ? `${window.location.pathname}?${suffix}` : window.location.pathname
    window.history.replaceState({}, '', nextUrl)
  }

  const scenarioPanels = {
    propose: (
      <ProposalForm
        levels={availableLevels}
        specialisations={availableSpecialisations}
        template={proposalTemplate}
        checklist={proposalChecklist}
        timeline={proposalTimeline}
        previewTopic={topics[0]}
        onNotify={showToast}
      />
    ),
    requests: <RequestsPanel requests={requests} onNotify={showToast} />,
    supervision: <SupervisionTable theses={theses} onNotify={showToast} />,
  }

  const calendarYear = 2026
  const calendarMonths = buildCalendar(calendarYear)
  const exampleRequest = requests[0]

  const renderNavPanel = () => {
    if (activeNav === 'Topics') {
      return (
        <section className="panel">
          <header className="panel__header">
            <div>
              <p className="eyebrow">Topics</p>
              <h2>Current Thesis Topics</h2>
              <p className="panel__subtitle">Topics already defined in the scenarios list.</p>
            </div>
          </header>
          <div className="panel__content panel__content--horizontal">
            {topics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        </section>
      )
    }

    if (activeNav === 'Requests') {
      return (
        <section className="panel">
          <header className="panel__header">
            <div>
              <p className="eyebrow">Requests</p>
              <h2>Request Example</h2>
              <p className="panel__subtitle">One sample request card for quick review.</p>
            </div>
          </header>
          <div className="panel__content panel__content--horizontal">
            {exampleRequest ? (
              <RequestCard
                request={exampleRequest}
                onAction={(id, action) =>
                  showToast(`Example request action: ${action}`)
                }
              />
            ) : (
              <div className="empty-state">No requests available.</div>
            )}
          </div>
        </section>
      )
    }

    if (activeNav === 'Calendar') {
      return (
        <section className="panel">
          <header className="panel__header">
            <div>
              <p className="eyebrow">Calendar</p>
              <h2>{calendarYear} Calendar</h2>
              <p className="panel__subtitle">Full academic year view for planning.</p>
            </div>
          </header>
          <div className="calendar">
            {calendarMonths.map((month) => (
              <div key={month.name} className="calendar__month">
                <h3>{month.name}</h3>
                <div className="calendar__weekdays">
                  {weekDays.map((day) => (
                    <span key={`${month.name}-${day}`} className="calendar__weekday">
                      {day}
                    </span>
                  ))}
                </div>
                <div className="calendar__days">
                  {month.weeks.flat().map((day, index) => (
                    <span
                      key={`${month.name}-${index}`}
                      className={`calendar__day ${day ? '' : 'is-empty'}`}
                    >
                      {day || ''}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )
    }

    return null
  }

  return (
    <div className={`app app--${viewMode}`}>
      <Sidebar active={activeNav} onSelect={setActiveNav} />
      <div className="app__main">
        <Topbar user={faculty} viewMode={viewMode} onViewChange={handleViewChange} />
        <main className="main">
          {activeNav === 'Dashboard' ? (
            <>
              <DashboardHeader stats={stats} />
              <ScenarioTabs
                scenarios={scenarios}
                activeId={activeScenario}
                onChange={setActiveScenario}
              />
              <div className="scenario-container">
                {Object.entries(scenarioPanels).map(([id, panel]) => (
                  <div
                    key={id}
                    id={`scenario-panel-${id}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${id}`}
                    hidden={activeScenario !== id}
                  >
                    {panel}
                  </div>
                ))}
              </div>
            </>
          ) : (
            renderNavPanel()
          )}
        </main>
      </div>
      <Toast message={toastMessage} onDismiss={dismissToast} />
    </div>
  )
}

export default App
