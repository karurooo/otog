import type { ApiResponse } from '@/types/api'
import type { About } from '../types/about'

export const aboutFixture: ApiResponse<About> = {
  data: {
    mandate:
      'Plan, promote, and coordinate sports development programs for Butuan City.',
    mission:
      'Provide accessible sports programs that build healthy communities.',
    vision:
      'A city where every Butuanon has the opportunity to play and excel.',
    officer: {
      id: 0,
      full_name: 'TBD',
      position: 'City Sports Officer',
      photo: null,
      message: ['Welcome to the Butuan City Sports Department.'],
    },
    officials: [],
  },
  message: 'OK',
  errors: null,
}
