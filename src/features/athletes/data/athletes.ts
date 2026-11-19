import type { ApiResponse } from '@/types/api'
import type { Athlete, MedalTallyRow } from '../types/athlete'

// SCAFFOLD: empty until Dev C adds featured athletes and the medal tally.
export const featuredAthletesFixture: ApiResponse<Athlete[]> = {
  data: [],
  message: 'OK',
  errors: null,
}

export const medalTallyFixture: ApiResponse<MedalTallyRow[]> = {
  data: [],
  message: 'OK',
  errors: null,
}
