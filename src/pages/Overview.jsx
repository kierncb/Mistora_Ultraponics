import React, { useEffect, useMemo, useState } from 'react'
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore'
import SensorCard from '../components/SensorCard'
import PageHeader from '../components/PageHeader'
import { db } from '../firebase'
import { useFirestoreDashboard } from '../context/FirestoreDashboardContext'


const sensorDefs = [
  { id: 'airTemperature', label: 'Air Temperature', unit: '°C' },
  { id: 'humidity', label: 'Humidity', unit: '%' },
  { id: 'waterTemperature', label: 'Water Temperature', unit: '°C' },
  { id: 'tds', label: 'TDS', unit: 'ppm' },
]


function asNumber(value) {
  if (typeof value === 'number' && Number.isFinite(value)) return value
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : null
}


function getReadingValue(reading, sensorKey) {
  if (!reading) return null

  if (sensorKey === 'airTemperature' || sensorKey === 'waterTemperature') {
    return asNumber(reading[sensorKey] ?? reading.value ?? reading.temperature ?? reading.v)
  }

  if (sensorKey === 'humidity') {
    return asNumber(reading[sensorKey] ?? reading.value ?? reading.v)
  }

  if (sensorKey === 'tds') {
    return asNumber(reading[sensorKey] ?? reading.value ?? reading.v)
  }

  return asNumber(reading[sensorKey] ?? reading.value ?? reading.v)
}


function toDate(value) {
  if (!value) return null
  if (typeof value.toDate === 'function') return value.toDate()
  if (value instanceof Date) return value

  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? null : parsed
}


function formatRelativeTransmissionTime(timestamp) {
  const time = toDate(timestamp)
  if (!time) return null

  const diffMs = Date.now() - time.getTime()
  if (!Number.isFinite(diffMs)) return null
  if (diffMs < 30 * 1000) return 'just now'

  const steps = [
    { unit: 'year', ms: 365 * 24 * 60 * 60 * 1000 },
    { unit: 'month', ms: 30 * 24 * 60 * 60 * 1000 },
    { unit: 'day', ms: 24 * 60 * 60 * 1000 },
    { unit: 'hour', ms: 60 * 60 * 1000 },
    { unit: 'minute', ms: 60 * 1000 },
  ]

  const step = steps.find((item) => diffMs >= item.ms) || { unit: 'minute', ms: 60 * 1000 }
  const value = Math.max(1, Math.round(diffMs / step.ms))
  const formatter = new Intl.RelativeTimeFormat(undefined, { numeric: 'auto' })

  return formatter.format(-value, step.unit)
}


const formatEventDate = (createdAt) => {
  if (!createdAt) return 'Unknown time'
  return createdAt.toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

export default function Overview(){
  const [latestLog, setLatestLog] = useState(null)
  const { latestReading, thresholds } = useFirestoreDashboard()

  useEffect(() => {
    const latestLogQuery = query(
      collection(db, 'activity_logs'),
      orderBy('createdAt', 'desc'),
      limit(1),
    )

    let cancelled = false

    getDocs(latestLogQuery)
      .then((snapshot) => {
        if (cancelled) return

        const logDoc = snapshot.docs[0]

        if (!logDoc) {
          setLatestLog(null)
          return
        }

        const logData = logDoc.data()
        setLatestLog({
          id: logDoc.id,
          title: logData.title || 'System event',
          detail: logData.detail || 'No details available.',
          type: logData.type || 'event',
          severity: logData.severity || 'info',
          createdAt: toDate(logData.createdAt),
        })
      })
      .catch(() => {
        if (cancelled) return
        setLatestLog(null)
      })

    return () => {
      cancelled = true
    }
  }, [])

  const sensors = useMemo(() => sensorDefs.map((sensor) => ({
    ...sensor,
    value: getReadingValue(latestReading, sensor.id) ?? 0,
  })), [latestReading])

  const readingLabel = useMemo(() => {
    if (!latestLog?.createdAt) return null

    return formatRelativeTransmissionTime(latestLog.createdAt)
  }, [latestLog])

  return (
    <section className="space-y-5 lg:space-y-6">
      <PageHeader
        label="System snapshot"
        title="Live Overview"
        subtitle="Key environment metrics at a glance — auto-refreshing cards."
      />

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.9fr)] xl:items-start">
        <div className="grid gap-3 sm:grid-cols-2">
          {sensors.map((sensor) => {
            const thresholdKey = sensor.id
            const sensorThresholds = thresholds[thresholdKey] || defaultThresholds[thresholdKey]

            return (
              <SensorCard
                key={sensor.id}
                {...sensor}
                min={sensorThresholds.min}
                max={sensorThresholds.max}
              />
            )
          })}
        </div>

        <article className="dashboard-card group rounded-2xl p-4 backdrop-blur sm:p-5 xl:sticky xl:top-6">
          <div className="flex h-full flex-col">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="surface-label transition group-hover:text-slate-700 dark:group-hover:text-slate-200">Latest activity</p>
                <p className="surface-title mt-2 text-2xl font-bold tracking-tight leading-tight sm:text-3xl">
                  {latestLog ? latestLog.title : 'No recent activity'}
                </p>
              </div>
              <span className="dashboard-chip shrink-0 text-slate-700 dark:text-slate-200">
                {latestLog ? latestLog.type.replace('_', ' ') : 'Idle'}
              </span>
            </div>

            {latestLog ? (
              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {latestLog.detail}
              </p>
            ) : (
              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                No recent activity is available yet.
              </p>
            )}

            <div className="mt-auto border-t border-slate-200/70 pt-4 dark:border-slate-800/70">
              <div className="flex items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
                <span>{latestLog ? latestLog.severity : 'No data available'}</span>
                <span>{latestLog ? `${readingLabel || 'just now'}` : '—'}</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
