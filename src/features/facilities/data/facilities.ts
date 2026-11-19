import type { ApiResponse } from '@/types/api'
import type { Facility } from '../types/facility'

// SCAFFOLD: empty until Dev B adds the city sports facilities directory.
export const facilitiesFixture: ApiResponse<Facility[]> = {
  data: [],
  message: 'OK',
  errors: null,
}
