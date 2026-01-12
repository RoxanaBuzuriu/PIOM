import User from '../models/User'
import Topic from '../models/Topic'
import Request from '../models/Request'
import Thesis from '../models/Thesis'

const faculty = new User({
  id: 'u-1',
  name: 'Roxana Buzuriu',
  role: 'Thesis Coordinator',
  department: 'Computer Science',
  avatar: '',
  tags: ['Artificial Intelligence and Distributed Computing', 'Big Data'],
})

const students = [
  new User({
    id: 's-1',
    name: 'Mara Pop',
    role: 'Student',
    department: 'BSc Computer Science (English)',
    avatar: '',
  }),
  new User({
    id: 's-2',
    name: 'Andrei Petrescu',
    role: 'Student',
    department: 'MSc Big Data',
    avatar: '',
  }),
  new User({
    id: 's-3',
    name: 'Elena Dobre',
    role: 'Student',
    department: 'BSc Artificial Intelligence (English)',
    avatar: '',
  }),
]

const topics = [
  new Topic({
    id: 't-1',
    title: 'Trustworthy AI for Smart Campuses',
    summary:
      'Design a transparency layer that explains campus AI decisions in real time, with a focus on student trust.',
    specialisation: 'Artificial Intelligence and Distributed Computing',
    level: 'MSc',
    keywords: ['Explainability', 'Ethics', 'IoT'],
    capacity: 2,
    status: 'draft',
    createdAt: '2025-11-15',
  }),
  new Topic({
    id: 't-2',
    title: 'Adaptive Study Planner with Multimodal Feedback',
    summary:
      'Prototype a planning assistant that blends calendar, location, and stress signals to recommend study blocks.',
    specialisation: 'Computer Science (English)',
    level: 'BSc',
    keywords: ['Behavior', 'Mobile', 'UX'],
    capacity: 1,
    status: 'open',
    createdAt: '2025-11-02',
  }),
  new Topic({
    id: 't-3',
    title: 'Green Lab Analytics Dashboard',
    summary:
      'Build a visualization layer for energy usage, with alerting rules for lab supervisors.',
    specialisation: 'Big Data',
    level: 'MSc',
    keywords: ['Dashboards', 'Sustainability', 'Analytics'],
    capacity: 1,
    status: 'review',
    createdAt: '2025-10-25',
  }),
]

const availableSpecialisations = {
  BSc: [
    'Computer Science (Romanian)',
    'Computer Science (English)',
    'Artificial Intelligence (English)',
  ],
  MSc: [
    'Artificial Intelligence and Distributed Computing',
    'Big Data',
    'Intelligent Software Robotics',
    'Cybersecurity',
  ],
}

const availableLevels = ['BSc', 'MSc']

const requests = [
  new Request({
    id: 'r-1',
    student: students[0],
    topic: topics[1],
    status: 'pending',
    submittedAt: '2025-11-18',
    note: 'I have a prototype from the AI lab and want to extend it for thesis.',
    gpa: '9.41',
    stage: 'Proposal review',
  }),
  new Request({
    id: 'r-2',
    student: students[1],
    topic: topics[2],
    status: 'needs-info',
    submittedAt: '2025-11-16',
    note: 'Can align with sustainability lab deliverables; needs data access.',
    gpa: '9.12',
    stage: 'Clarification',
  }),
  new Request({
    id: 'r-3',
    student: students[2],
    topic: topics[0],
    status: 'approved',
    submittedAt: '2025-11-10',
    note: 'Excited to focus on ethical AI and human factors.',
    gpa: '9.67',
    stage: 'Accepted',
  }),
]

const theses = [
  new Thesis({
    id: 'th-1',
    student: students[2],
    topic: topics[0],
    status: 'on-track',
    progress: 68,
    dueAt: '2026-02-10',
    milestones: ['Literature review', 'Prototype', 'Evaluation'],
  }),
  new Thesis({
    id: 'th-2',
    student: students[0],
    topic: topics[1],
    status: 'at-risk',
    progress: 42,
    dueAt: '2026-01-28',
    milestones: ['User research', 'Flow redesign', 'Pilot test'],
  }),
  new Thesis({
    id: 'th-3',
    student: students[1],
    topic: topics[2],
    status: 'on-track',
    progress: 56,
    dueAt: '2026-03-05',
    milestones: ['Data ingestion', 'Dashboard v1', 'Insights report'],
  }),
]

const stats = [
  {
    label: 'Active Topics',
    value: '12',
    delta: '+3 this month',
    icon: 'spark',
  },
  {
    label: 'Pending Requests',
    value: '7',
    delta: '2 need action',
    icon: 'clock',
  },
  {
    label: 'Supervised Theses',
    value: '5',
    delta: '1 at risk',
    icon: 'shield',
  },
]

const proposalChecklist = [
  'Aligns with UVT specialisations',
  'Has measurable outcomes and evaluation plan',
  'Includes UVT timeline milestones',
  'Mentorship availability confirmed',
]

const proposalTimeline = [
  {
    title: 'Coordinator enrollment deadline',
    detail: 'Register on UVT e-learning',
    date: 'Dec 2, 2025',
  },
  {
    title: 'Draft 1 submission',
    detail: 'Intro chapters due (end of March)',
    date: 'End of Mar 2026',
  },
  {
    title: 'Draft 2 submission',
    detail: 'Include original contribution (end of May)',
    date: 'End of May 2026',
  },
  {
    title: 'Final thesis upload (July session)',
    detail: 'BSc and MSc upload deadline',
    date: 'Jun 29, 2026',
  },
  {
    title: 'Defense session (July)',
    detail: 'MSc 13-14 Jul, BSc 15-16 Jul',
    date: 'Jul 13-16, 2026',
  },
  {
    title: 'September session (if needed)',
    detail: 'Upload by Jul 24; defense 7-8 Sep',
    date: 'Sep 4-8, 2026',
  },
]

const proposalTemplate = {
  title: topics[0].title,
  specialisation: topics[0].specialisation,
  level: topics[0].level,
  keywords: topics[0].keywords.join(', '),
  capacity: topics[0].capacity,
  summary: topics[0].summary,
}

export {
  availableLevels,
  availableSpecialisations,
  faculty,
  students,
  topics,
  requests,
  theses,
  stats,
  proposalChecklist,
  proposalTimeline,
  proposalTemplate,
}
