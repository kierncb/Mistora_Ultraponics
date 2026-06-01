import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { defaultThresholds, normalizeThresholds, thresholdsDocRef } from '../lib/thresholds'

const FirestoreDashboardContext = createContext(null)

export function FirestoreDashboardProvider({ children }) {
  const [latestReading, setLatestReading] = useState(null)
  const [thresholds, setThresholds] = useState(defaultThresholds)

  useEffect(() => {
    const unsubscribe = onSnapshot(thresholdsDocRef, (snapshot) => {
      if (!snapshot.exists()) {
        setThresholds(defaultThresholds)
        return
      }

      setThresholds(normalizeThresholds(snapshot.data().thresholds))
    }, () => {
      setThresholds(defaultThresholds)
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    const latestReadingRef = doc(db, 'sensor_readings', 'latest')

    const unsubscribe = onSnapshot(latestReadingRef, (snapshot) => {
      if (!snapshot.exists()) {
        setLatestReading(null)
        return
      }

      setLatestReading({ id: snapshot.id, ...snapshot.data() })
    }, () => {
      setLatestReading(null)
    })

    return unsubscribe
  }, [])

  const value = useMemo(() => ({ latestReading, thresholds }), [latestReading, thresholds])

  return (
    <FirestoreDashboardContext.Provider value={value}>
      {children}
    </FirestoreDashboardContext.Provider>
  )
}

export function useFirestoreDashboard() {
  const context = useContext(FirestoreDashboardContext)

  if (!context) {
    throw new Error('useFirestoreDashboard must be used within a FirestoreDashboardProvider')
  }

  return context
}