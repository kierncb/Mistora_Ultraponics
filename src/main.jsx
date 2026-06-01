import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './firebase'
import { FirestoreDashboardProvider } from './context/FirestoreDashboardContext'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <FirestoreDashboardProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirestoreDashboardProvider>
  </React.StrictMode>
)
