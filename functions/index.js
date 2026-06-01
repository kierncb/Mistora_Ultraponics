const admin = require('firebase-admin')
const { onDocumentCreated } = require('firebase-functions/v2/firestore')

admin.initializeApp()

const db = admin.firestore()

const BUCKETS = [
  { collection: 'fiveMinute', sizeMs: 5 * 60 * 1000 },
  { collection: 'hourly', sizeMs: 60 * 60 * 1000 },
  { collection: 'daily', sizeMs: 24 * 60 * 60 * 1000 },
]

function toDate(value) {
  if (!value) return new Date()
  if (typeof value.toDate === 'function') return value.toDate()
  if (value instanceof Date) return value

  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed
}

function asNumber(value) {
  if (typeof value === 'number' && Number.isFinite(value)) return value
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : null
}

function bucketStartFor(date, sizeMs) {
  return new Date(Math.floor(date.getTime() / sizeMs) * sizeMs)
}

function bucketIdFor(date) {
  return date.toISOString()
}

function readingPayload(data) {
  return {
    airTemperature: asNumber(data.airTemperature),
    humidity: asNumber(data.humidity),
    waterTemperature: asNumber(data.waterTemperature),
    tds: asNumber(data.tds),
  }
}

function getAverage(previousAverage, previousCount, nextValue) {
  if (nextValue == null) return previousAverage ?? null
  if (!previousCount || previousAverage == null) return nextValue
  return ((previousAverage * previousCount) + nextValue) / (previousCount + 1)
}

async function updateRollup(windowName, sizeMs, readingId, readingData, timestamp) {
  const bucketStart = bucketStartFor(timestamp, sizeMs)
  const bucketRef = db.collection('sensor_readings').doc('rollups').collection(windowName).doc(bucketIdFor(bucketStart))
  const values = readingPayload(readingData)

  await db.runTransaction(async (transaction) => {
    const snapshot = await transaction.get(bucketRef)
    const current = snapshot.exists ? snapshot.data() : {}
    const previousCount = Number(current.sampleCount || 0)

    transaction.set(bucketRef, {
      bucketStart: admin.firestore.Timestamp.fromDate(bucketStart),
      bucketEnd: admin.firestore.Timestamp.fromDate(new Date(bucketStart.getTime() + sizeMs)),
      sampleCount: previousCount + 1,
      airTemperature: getAverage(current.airTemperature, previousCount, values.airTemperature),
      humidity: getAverage(current.humidity, previousCount, values.humidity),
      waterTemperature: getAverage(current.waterTemperature, previousCount, values.waterTemperature),
      tds: getAverage(current.tds, previousCount, values.tds),
      latestReadingId: readingId,
      latestTimestamp: admin.firestore.Timestamp.fromDate(timestamp),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true })
  })
}

exports.rollupSensorHistory = onDocumentCreated('sensor_readings/logs/history/{readingId}', async (event) => {
  const snapshot = event.data
  if (!snapshot) return

  const readingId = event.params.readingId
  const readingData = snapshot.data()
  const timestamp = toDate(readingData.timestamp || snapshot.createTime || event.time)

  await Promise.all(BUCKETS.map((bucket) => updateRollup(bucket.collection, bucket.sizeMs, readingId, readingData, timestamp)))
})