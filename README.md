# PIOM — MyThesis Platform (UI Prototype)
A React prototype for the MyThesis Platform with three end-to-end scenarios, atomic components, and a responsive layout.
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

A **React + Vite** front-end prototype (no backend) for a “MyThesis Platform”, built around **three end-to-end scenarios**, a **responsive dashboard layout**, and an **Atomic Design** component system (**atoms / molecules / organisms**).

## Key Features

- **Scenario-driven UI** (3 end-to-end flows) surfaced via a scenario switcher (tabs) and dashboard navigation.
- **Atomic Design** folder structure:
  - `atoms/` — reusable primitives (buttons, icons, badges, avatars)
  - `molecules/` — small compositions (cards, progress UI)
  - `organisms/` — feature sections (sidebar, topbar, panels, forms)
- **Design tokens via CSS variables** (consistent colors across the UI).
- **Mock data** to keep shapes consistent and make later API integration easier.

---

## Scenarios (Functional Walkthrough)

> The project is organized around three user flows. The exact screens may evolve, but the intent remains consistent. 

### Scenario 1 — Propose a New Thesis Topic
A guided flow that takes a topic from **Draft → Review → Publish**.

### Scenario 2 — Review Supervision Requests
A coordinator/teacher reviews student requests and can:
- **Approve**
- **Request more information**
- **Defer / keep pending**

### Scenario 3 — Supervision Overview
A consolidated view for supervised theses:
- milestones
- progress status

## Tech Stack

- **React** (UI)
- **Vite** (development server + production build)
- **JavaScript**
- **CSS** (tokens via CSS variables)

## Project Structure
```
.
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ atoms/
│  │  ├─ molecules/
│  │  └─ organisms/
│  ├─ data/
│  │  └─ mockData.js
│  ├─ models/
│  │  ├─ Request.js
│  │  ├─ Thesis.js
│  │  ├─ Topic.js
│  │  └─ User.js
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ index.css
│  └─ App.css
├─ index.html
├─ vite.config.js
└─ eslint.config.js
```

---

## Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm

### Install & Run

- npm install
- npm run dev
Then open the local URL printed in the terminal (typically `http://localhost:5173`).

---

## Notes (scurta descriere)

PIOM este un prototip UI în React pentru o platformă de gestionare a temelor de licență/disertație (MyThesis). Proiectul este organizat pe trei scenarii end-to-end și folosește Atomic Design: atoms (componente de bază), molecules (carduri/stepper/progress), și organisms (secțiuni mari: sidebar/topbar/panouri). Datele sunt mock pentru a demonstra fluxurile fără backend, iar modelele din `src/models` păstrează formele de date coerente pentru o integrare ușoară cu un API ulterior.
