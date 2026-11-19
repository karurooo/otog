import type { ApiResponse } from '@/types/api'
import type { Program } from '../types/program'

// SCAFFOLD: empty until Dev B adds the program catalog.
export const programsFixture: ApiResponse<Program[]> = {
  data: [],
  message: 'OK',
  errors: null,
}
