import type { ApiResponse } from '@/types/api'
import type { About } from '../types/about'

export const aboutFixture: ApiResponse<About> = {
  data: {
    mandate:
      'Plan, promote, and coordinate sports development programs and facilities for the people of Butuan City.',
    mission:
      'Provide accessible, inclusive sports programs that develop athletes and build healthy communities.',
    vision:
      'A city where every Butuanon has the opportunity to play, compete, and excel.',
    officer: {
      id: 0,
      full_name: 'Dir. Roberto M. Villanueva',
      position: 'City Sports Officer',
      photo: null,
      message: [
        'Welcome to the official website of the Butuan City Sports Department.',
        'We invite every athlete, parent, coach, and school to take part in our city-wide sports programs.',
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
        full_name: 'Engr. Carlo B. Mendoza',
        position: 'Facilities Operations Lead',
        photo: null,
      },
      {
        id: 4,
        full_name: 'Liza T. Reyes',
        position: 'Athlete Development Coordinator',
        photo: null,
      },
    ],
  },
  message: 'OK',
  errors: null,
}
