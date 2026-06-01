import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'

const windowConfigs = {
  '1h': {
    summaryPath: ['sensor_readings', 'rollups', 'fiveMinute'],
    summaryTimestampField: 'bucketStart',
    summaryPoints: 12,
  },
  '24h': {
    summaryPath: ['sensor_readings', 'rollups', 'hourly'],
    summaryTimestampField: 'bucketStart',
    summaryPoints: 24,
  },
  '7d': {
    summaryPath: ['sensor_readings', 'rollups', 'daily'],
    summaryTimestampField: 'bucketStart',
    summaryPoints: 7,
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

export async function loadTrendWindow(range) {
  const config = windowConfigs[range]

  if (!config) {
    return []
  }

  try {
    const summarySnapshot = await getDocs(buildSummaryQuery(config))

    return mapDocs(summarySnapshot).reverse()
  } catch {
    return []
  }
}

export async function loadTwentyFourHourSummary() {
  return loadTrendWindow('24h')
}