import type { ApiResponse } from '@/types/api'
import type { About } from '../types/about'

export const aboutFixture: ApiResponse<About> = {
  data: {
    mandate:
      'Plan, promote, and coordinate sports developement programs and facilities for Butuan City.',
    mission:
      'Provide accessible, inclusive sports programs that develop athletes and build healthy communities.',
    vision:
      'A city where every Butanon has the opportunity to play, compete, and excel.',
    officer: {
      id: 0,
      full_name: 'Dir. Roberto M. Villanueva',
      position: 'City Sports Offcier',
      photo: null,
      message: [
        'Welcome to the official website of the Butuan City Sports Depratment.',
      ],
    },
    officials: [
      {
        id: 1,
        full_name: 'Elena R. Santos',
        position: 'Assistant Sports Officer',
        photo: null,
      },
      {
        id: 2,
        full_name: 'Marco D. Cruz',
        position: 'Grassroots Programs Head',
        photo: null,
      },
      {
        id: 3,
        full_name: 'Official name pending',
        position: 'Position pending',
        photo: null,
      },
      {
        id: 4,
        full_name: 'Official name pending',
        position: 'Position pending',
        photo: null,
      },
    ],
  },
  message: 'OK',
  errors: null,
}
