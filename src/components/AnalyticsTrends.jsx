import React, { useEffect, useMemo, useState } from 'react'
import TrendChart from './TrendChart'
import PageHeader from './PageHeader'
import { db } from '../firebase'
import { collection, doc, query, where, orderBy, limit, getDocs, onSnapshot, Timestamp } from 'firebase/firestore'
import { defaultThresholds, normalizeThresholds, thresholdsDocRef } from '../lib/thresholds'

function downsample(values, target) {
  if (!values || values.length === 0) return []
  if (values.length <= target) return values.map((value) => Number(value.toFixed ? value.toFixed(2) : Number(value)))

  const out = []
  const size = values.length / target

  for (let index = 0; index < target; index += 1) {
    const start = Math.floor(index * size)
    let end = Math.floor((index + 1) * size)
    if (end <= start) end = start + 1

    const slice = values.slice(start, Math.min(end, values.length))
    const average = slice.reduce((sum, value) => sum + value, 0) / slice.length
    out.push(Number(average.toFixed(2)))
  }

  return out
}

function asNumber(value) {
  if (typeof value === 'number' && Number.isFinite(value)) return value
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : null
}

function findNumericValue(source, preferredKeys) {
  const queue = [source]
  const seen = new Set()

  while (queue.length > 0) {
    const current = queue.shift()
    if (current == null) continue

    if (typeof current === 'number' || typeof current === 'string') {
      const parsed = asNumber(current)
      if (parsed != null) return parsed
      continue
    }

    if (typeof current !== 'object') continue
    if (seen.has(current)) continue
    seen.add(current)

    for (const key of preferredKeys) {
      if (!Object.prototype.hasOwnProperty.call(current, key)) continue

      const value = current[key]
      const parsed = asNumber(value)
      if (parsed != null) return parsed

      if (value && typeof value === 'object') {
        queue.push(value)
      }
    }
  }

  return null
}

function getReadingValue(reading, sensorKey) {
  if (!reading) return null

  const preferredKeys = sensorKey === 'airTemperature' || sensorKey === 'waterTemperature'
    ? [sensorKey, 'value', 'temperature', 'temp', 'v', 'reading', 'data', 'payload']
    : [sensorKey, 'value', 'v', 'reading', 'data', 'payload']

  const extracted = findNumericValue(reading, preferredKeys)
  if (extracted != null) return extracted

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

function buildSeries(readings, sensorKey, targetPoints) {
  const values = (readings || []).map((reading) => getReadingValue(reading, sensorKey)).filter((value) => value != null)
  return downsample(values, targetPoints)
}

function formatValue(value, unit, decimals = 1) {
  if (value == null || !Number.isFinite(value)) return '—'
  return `${Number(value.toFixed(decimals))}${unit ? ` ${unit}` : ''}`
}

function formatDelta(value, unit, decimals = 1) {
  if (value == null || !Number.isFinite(value)) return '—'
  const rounded = Number(value.toFixed(decimals))
  const sign = rounded > 0 ? '+' : ''
  return `${sign}${rounded}${unit ? ` ${unit}` : ''}`
}

function getStatusLabel(latest, thresholds, delta, stableThreshold) {
  if (latest == null || !Number.isFinite(latest)) return 'No data'

  const min = asNumber(thresholds?.min)
  const max = asNumber(thresholds?.max)

  if (min != null && latest < min) return 'Below threshold'
  if (max != null && latest > max) return 'Above threshold'
  if (delta != null && Number.isFinite(delta) && delta > stableThreshold) return 'Rising'
  if (delta != null && Number.isFinite(delta) && delta < -stableThreshold) return 'Falling'
  return 'Stable'
}

function statusTone(status) {
  if (status === 'Above threshold' || status === 'Below threshold') return 'danger'
  if (status === 'Rising' || status === 'Falling') return 'warning'
  if (status === 'Stable') return 'stable'
  return 'neutral'
}

function toneClasses(tone) {
  if (tone === 'danger') return 'bg-rose-50 text-rose-700 ring-1 ring-rose-200/70 dark:bg-rose-500/10 dark:text-rose-200 dark:ring-rose-500/20'
  if (tone === 'warning') return 'bg-amber-50 text-amber-700 ring-1 ring-amber-200/70 dark:bg-amber-500/10 dark:text-amber-200 dark:ring-amber-500/20'
  if (tone === 'stable') return 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/70 dark:bg-emerald-500/10 dark:text-emerald-200 dark:ring-emerald-500/20'
  return 'bg-slate-100 text-slate-600 ring-1 ring-slate-200/70 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700/70'
}

function buildInsight(label, latest, delta24h, thresholds, unit, stableThreshold) {
  if (latest == null || !Number.isFinite(latest)) return `${label} data is not available yet.`

  const min = asNumber(thresholds?.min)
  const max = asNumber(thresholds?.max)
  const deltaText = delta24h == null || !Number.isFinite(delta24h)
    ? 'no 24h comparison yet'
    : `${delta24h > 0 ? 'up' : 'down'} ${Math.abs(delta24h).toFixed(unit === '%' ? 0 : 1)}${unit} vs yesterday`

  if (min != null && latest < min) {
    return `${label} is trending below target by ${(min - latest).toFixed(unit === '%' ? 0 : 1)}${unit}. ${deltaText}.`
  }

  if (max != null && latest > max) {
    return `${label} is above the safe band by ${(latest - max).toFixed(unit === '%' ? 0 : 1)}${unit}. ${deltaText}.`
  }

  if (delta24h != null && Number.isFinite(delta24h) && Math.abs(delta24h) > stableThreshold) {
    return `${label} is ${delta24h > 0 ? 'rising' : 'falling'} by ${Math.abs(delta24h).toFixed(unit === '%' ? 0 : 1)}${unit} over the last 24h.`
  }

  return `${label} is holding steady inside the target range. ${deltaText}.`
}

export default function AnalyticsTrends() {
  const ranges = [
    { key: 'live', label: 'Live', points: 30 },
    { key: '1h', label: '1 hr', points: 60 },
    { key: '24h', label: '24 hrs', points: 96 },
    { key: '7d', label: '7 days', points: 168 },
  ]

  const [range, setRange] = useState('live')
  const [rangeReadings, setRangeReadings] = useState([])
  const [summaryReadings, setSummaryReadings] = useState([])
  const [liveLatestReading, setLiveLatestReading] = useState(null)
  const [thresholds, setThresholds] = useState(defaultThresholds)

  const active = ranges.find((item) => item.key === range) || ranges[0]

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
        setLiveLatestReading(null)
        return
      }

      setLiveLatestReading({ id: snapshot.id, ...snapshot.data() })
    }, () => {
      setLiveLatestReading(null)
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    const startDate = new Date(Date.now() - 24 * 60 * 60 * 1000)

    const q = query(
      collection(db, 'sensor_readings', 'logs', 'history'),
      where('timestamp', '>=', Timestamp.fromDate(startDate)),
      orderBy('timestamp', 'asc'),
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setSummaryReadings(snapshot.docs.map((docSnapshot) => ({ id: docSnapshot.id, ...docSnapshot.data() })))
    }, () => {
      setSummaryReadings([])
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    let cancelled = false

    if (range === 'live') {
      const q = query(
        collection(db, 'sensor_readings', 'logs', 'history'),
        orderBy('timestamp', 'desc'),
        limit(active.points),
      )

      const unsubscribe = onSnapshot(q, (snapshot) => {
        if (cancelled) return

        const docs = snapshot.docs.map((docSnapshot) => ({ id: docSnapshot.id, ...docSnapshot.data() }))
        setRangeReadings(docs.reverse())
      }, () => {
        if (cancelled) return
        setRangeReadings([])
      })

      return () => {
        cancelled = true
        if (typeof unsubscribe === 'function') unsubscribe()
      }
    }

    setRangeReadings([])

    const now = new Date()
    let startDate

    if (range === '1h') startDate = new Date(now.getTime() - 1 * 60 * 60 * 1000)
    else if (range === '24h') startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000)
    else if (range === '7d') startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    else startDate = new Date(0)

    const q = query(
      collection(db, 'sensor_readings', 'logs', 'history'),
      where('timestamp', '>=', Timestamp.fromDate(startDate)),
      orderBy('timestamp', 'asc'),
    )

    getDocs(q)
      .then((snapshot) => {
        if (cancelled) return
        setRangeReadings(snapshot.docs.map((docSnapshot) => ({ id: docSnapshot.id, ...docSnapshot.data() })))
      })
      .catch(() => {
        if (cancelled) return
        setRangeReadings([])
      })

    return () => {
      cancelled = true
    }
  }, [range, active.points])

  const temperature = useMemo(() => buildSeries(rangeReadings, 'airTemperature', active.points), [rangeReadings, active.points])
  const humidity = useMemo(() => buildSeries(rangeReadings, 'humidity', active.points), [rangeReadings, active.points])
  const waterTemp = useMemo(() => buildSeries(rangeReadings, 'waterTemperature', active.points), [rangeReadings, active.points])
  const tds = useMemo(() => buildSeries(rangeReadings, 'tds', active.points), [rangeReadings, active.points])

  const latestReading = useMemo(() => {
    if (liveLatestReading) return liveLatestReading
    if (summaryReadings.length > 0) return summaryReadings[summaryReadings.length - 1]
    if (rangeReadings.length > 0) return rangeReadings[rangeReadings.length - 1]
    return null
  }, [liveLatestReading, summaryReadings, rangeReadings])

  const dayWindow = useMemo(() => {
    const compute = (key) => {
      if (summaryReadings.length < 2) return null

      const first = getReadingValue(summaryReadings[0], key)
      const last = getReadingValue(summaryReadings[summaryReadings.length - 1], key)
      if (first == null || last == null) return null
      return last - first
    }

    return {
      airTemperature: compute('airTemperature'),
      humidity: compute('humidity'),
      waterTemperature: compute('waterTemperature'),
      tds: compute('tds'),
    }
  }, [summaryReadings])

  const metricConfig = useMemo(() => ([
    {
      key: 'airTemperature',
      title: 'Air Temperature',
      unit: '°C',
      chartData: temperature,
      currentValue: getReadingValue(latestReading, 'airTemperature'),
      delta24h: dayWindow.airTemperature,
      thresholds: thresholds.airTemperature,
      stableThreshold: 0.4,
      colors: { lineStart: '#fb7185', lineEnd: '#ef4444', fill: '#fb7185' },
    },
    {
      key: 'humidity',
      title: 'Humidity',
      unit: '%',
      chartData: humidity,
      currentValue: getReadingValue(latestReading, 'humidity'),
      delta24h: dayWindow.humidity,
      thresholds: thresholds.humidity,
      stableThreshold: 2,
      colors: { lineStart: '#06b6d4', lineEnd: '#3b82f6', fill: '#06b6d4' },
    },
    {
      key: 'waterTemperature',
      title: 'Water Temperature',
      unit: '°C',
      chartData: waterTemp,
      currentValue: getReadingValue(latestReading, 'waterTemperature'),
      delta24h: dayWindow.waterTemperature,
      thresholds: thresholds.waterTemperature,
      stableThreshold: 0.4,
      colors: { lineStart: '#06b6d4', lineEnd: '#3b82f6', fill: '#06b6d4' },
    },
    {
      key: 'tds',
      title: 'TDS',
      unit: 'ppm',
      chartData: tds,
      currentValue: getReadingValue(latestReading, 'tds'),
      delta24h: dayWindow.tds,
      thresholds: thresholds.tds,
      stableThreshold: 5,
      colors: { lineStart: '#10b981', lineEnd: '#059669', fill: '#10b981' },
    },
  ]), [temperature, humidity, waterTemp, tds, latestReading, dayWindow, thresholds])

  const kpiCards = useMemo(() => metricConfig.map((metric) => {
    const status = getStatusLabel(metric.currentValue, metric.thresholds, metric.delta24h, metric.stableThreshold)

    return {
      ...metric,
      status,
      tone: statusTone(status),
    }
  }), [metricConfig])

  const insights = useMemo(() => metricConfig.map((metric) => {
    const status = getStatusLabel(metric.currentValue, metric.thresholds, metric.delta24h, metric.stableThreshold)

    return {
      key: metric.key,
      title: metric.title,
      tone: statusTone(status),
      body: buildInsight(metric.title, metric.currentValue, metric.delta24h, metric.thresholds, metric.unit, metric.stableThreshold),
    }
  }), [metricConfig])

  return (
    <section className="space-y-5 lg:space-y-6">
      <PageHeader
        label="Analytics view"
        title="Trends & Analytics"
        subtitle="Track air and water temperature, humidity, and TDS across live and historical windows with threshold context and automated summaries."
      />

      <div className="dashboard-card-soft rounded-3xl p-4 sm:p-5">
        <div className="flex flex-col gap-3 border-b border-slate-200/70 pb-4 dark:border-slate-800/70 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="surface-label">Performance snapshot</p>
            <h3 className="font-display mt-1 text-lg font-bold text-slate-900 dark:text-white sm:text-xl">Current readings and 24h movement</h3>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {kpiCards.map((metric) => (
            <article key={metric.key} className="rounded-2xl border border-slate-200/70 bg-white/85 p-4 shadow-sm dark:border-slate-800/70 dark:bg-slate-950/40">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{metric.title}</p>
                  <div className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{formatValue(metric.currentValue, metric.unit, metric.unit === '%' ? 0 : 1)}</div>
                </div>
                <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ${toneClasses(metric.tone)}`}>
                  {metric.status}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-200/70 pt-3 text-sm dark:border-slate-800/70">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">24h change</p>
                  <p className={`font-semibold ${metric.delta24h == null ? 'text-slate-500 dark:text-slate-400' : metric.delta24h > 0 ? 'text-emerald-600 dark:text-emerald-300' : metric.delta24h < 0 ? 'text-sky-600 dark:text-sky-300' : 'text-slate-600 dark:text-slate-300'}`}>
                    {formatDelta(metric.delta24h, metric.unit, metric.unit === '%' ? 0 : 1)}
                  </p>
                </div>
                <div className="text-right text-xs text-slate-500 dark:text-slate-400">
                  <p>Target range</p>
                  <p className="font-semibold text-slate-700 dark:text-slate-200">{metric.thresholds.min} - {metric.thresholds.max}{metric.unit}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.75fr)_minmax(300px,1fr)]">
        <div className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="surface-label">Trend surface</p>
              <h3 className="font-display mt-1 text-lg font-bold text-slate-900 dark:text-white sm:text-xl">Charts with threshold bands</h3>
            </div>
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center sm:justify-end sm:gap-3">
              <div className="rounded-full bg-slate-100/70 p-1 shadow-sm dark:bg-slate-800/50">
                {ranges.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setRange(item.key)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition sm:px-4 sm:text-sm ${item.key === range ? 'bg-white text-slate-900 shadow dark:bg-slate-700 dark:text-slate-100' : 'text-slate-600 hover:bg-white/60 dark:text-slate-300 dark:hover:bg-slate-700/60'}`}
                    aria-pressed={item.key === range}
                    aria-label={`Show ${item.label}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400 sm:text-right">
                Showing: <span className="font-semibold text-slate-700 dark:text-slate-200">{active.label}</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400">Visual safe, warning, and critical zones</p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {metricConfig.map((metric) => {
              const status = getStatusLabel(metric.currentValue, metric.thresholds, metric.delta24h, metric.stableThreshold)

              return (
                <TrendChart
                  key={metric.key}
                  data={metric.chartData}
                  title={metric.title}
                  unit={metric.unit}
                  thresholds={metric.thresholds}
                  currentValue={metric.currentValue}
                  statusLabel={status}
                  statusTone={statusTone(status)}
                  subtitle="Latest trend"
                  colors={metric.colors}
                />
              )
            })}
          </div>
        </div>

        <aside className="dashboard-card-soft rounded-3xl p-4 sm:p-5 lg:sticky lg:top-6 lg:self-start">
          <div>
            <p className="surface-label">Insights</p>
            <h3 className="font-display mt-1 text-lg font-bold text-slate-900 dark:text-white sm:text-xl">Automatic summaries</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Quick readouts based on the latest sensor values and the last 24 hours of history.</p>
          </div>

          <div className="mt-4 space-y-3">
            {insights.map((insight) => (
              <article key={insight.key} className="rounded-2xl border border-slate-200/70 bg-white/85 p-4 shadow-sm dark:border-slate-800/70 dark:bg-slate-950/40">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{insight.title}</p>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ${toneClasses(insight.tone)}`}>
                    {insight.tone === 'stable' ? 'Stable' : insight.tone === 'warning' ? 'Trending' : insight.tone === 'danger' ? 'Alert' : 'Info'}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{insight.body}</p>
              </article>
            ))}
          </div>
        </aside>
      </div>

      <div className="text-sm text-slate-500 dark:text-slate-400">Tip: Hover over the charts to inspect exact values. Use the range buttons to switch time windows.</div>
    </section>
  )
}
