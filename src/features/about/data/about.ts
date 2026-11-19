import type { ApiResponse } from '@/types/api'
import type { About } from '../types/about'

// SCAFFOLD: empty until Dev A writes the department mandate, mission, vision and roster.
export const aboutFixture: ApiResponse<About> = {
  data: {
    mandate: '',
    mission: '',
    vision: '',
    officer: { id: 0, full_name: '', position: '', photo: null, message: [] },
    officials: [],
  },
  message: 'OK',
  errors: null,
}
