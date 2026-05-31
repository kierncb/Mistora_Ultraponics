import { doc } from 'firebase/firestore'
import { db } from '../firebase'

export const defaultThresholds = {
  airTemperature: { min: '24', max: '28' },
  humidity: { min: '65', max: '80' },
  waterTemperature: { min: '20', max: '26' },
  tds: { min: '700', max: '1200' },
}

export const thresholdsDocRef = doc(db, 'settings', 'thresholds')

export const cloneThresholds = (thresholdSet) => ({
  airTemperature: { ...thresholdSet.airTemperature },
  humidity: { ...thresholdSet.humidity },
  waterTemperature: { ...thresholdSet.waterTemperature },
  tds: { ...thresholdSet.tds },
})

export const normalizeThresholds = (thresholds, fallback = defaultThresholds) => ({
  airTemperature: {
    min: String(thresholds?.airTemperature?.min ?? thresholds?.temp?.min ?? fallback.airTemperature.min),
    max: String(thresholds?.airTemperature?.max ?? thresholds?.temp?.max ?? fallback.airTemperature.max),
  },
  humidity: {
    min: String(thresholds?.humidity?.min ?? fallback.humidity.min),
    max: String(thresholds?.humidity?.max ?? fallback.humidity.max),
  },
  waterTemperature: {
    min: String(thresholds?.waterTemperature?.min ?? thresholds?.temp?.min ?? fallback.waterTemperature.min),
    max: String(thresholds?.waterTemperature?.max ?? thresholds?.temp?.max ?? fallback.waterTemperature.max),
  },
  tds: {
    min: String(thresholds?.tds?.min ?? fallback.tds.min),
    max: String(thresholds?.tds?.max ?? fallback.tds.max),
  },
})