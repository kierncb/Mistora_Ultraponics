import { collection, getDocs, limit, orderBy, query, Timestamp, where } from 'firebase/firestore'
import { db } from '../firebase'

const windowConfigs = {
  '1h': {
    summaryPath: ['sensor_readings', 'rollups', 'fiveMinute'],
    summaryTimestampField: 'bucketStart',
    summaryPoints: 12,
    rawLookbackMs: 60 * 60 * 1000,
    rawTimestampField: 'timestamp',
  },
  '24h': {
    summaryPath: ['sensor_readings', 'rollups', 'hourly'],
    summaryTimestampField: 'bucketStart',
    summaryPoints: 24,
    rawLookbackMs: 24 * 60 * 60 * 1000,
    rawTimestampField: 'timestamp',
  },
  '7d': {
    summaryPath: ['sensor_readings', 'rollups', 'daily'],
    summaryTimestampField: 'bucketStart',
    summaryPoints: 7,
    rawLookbackMs: 7 * 24 * 60 * 60 * 1000,
    rawTimestampField: 'timestamp',
  },
}

function mapDocs(snapshot) {
  return snapshot.docs.map((docSnapshot) => ({ id: docSnapshot.id, ...docSnapshot.data() }))
}

function buildSummaryQuery(config) {
  return query(
    collection(db, ...config.summaryPath),
    orderBy(config.summaryTimestampField, 'desc'),
    limit(config.summaryPoints),
  )
}

function buildRawQuery(config) {
  const startDate = new Date(Date.now() - config.rawLookbackMs)

  return query(
    collection(db, 'sensor_readings', 'logs', 'history'),
    where(config.rawTimestampField, '>=', Timestamp.fromDate(startDate)),
    orderBy(config.rawTimestampField, 'asc'),
  )
}

export async function loadTrendWindow(range) {
  const config = windowConfigs[range]

  if (!config) {
    return []
  }

  try {
    const summarySnapshot = await getDocs(buildSummaryQuery(config))

    if (summarySnapshot.size > 0) {
      return mapDocs(summarySnapshot).reverse()
    }
  } catch {
    // Fall back to raw history below.
  }

  try {
    const rawSnapshot = await getDocs(buildRawQuery(config))
    return mapDocs(rawSnapshot)
  } catch {
    return []
  }
}

export async function loadTwentyFourHourSummary() {
  return loadTrendWindow('24h')
}