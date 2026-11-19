import type { ApiResponse } from '@/types/api'
import type { Program } from '../types/program'

const base = {
  description: ['Program details coming soon.'],
  venue: 'TBD',
  requirements: ['Barangay clearance'],
  coach_name: null,
  coach_contact: null,
  is_featured: false,
}

export const programsFixture: ApiResponse<Program[]> = {
  data: [
    {
      ...base,
      id: 1,
      slug: 'learn-to-swim',
      name: 'Learn to Swim',
      category: 'grassroots',
      icon: 'Waves',
      summary: 'Beginner swimming lessons for Butuanon youth.',
      age_group: 'Ages 7–14',
      schedule: 'Sat, 8:00–10:00 AM',
      fee_label: 'Free',
      is_featured: true,
    },
    {
      ...base,
      id: 2,
      slug: 'youth-basketball',
      name: 'Youth Basketball Clinic',
      category: 'grassroots',
      icon: 'Users',
      summary: 'Fundamentals and scrimmages for young players.',
      age_group: 'Ages 10–16',
      schedule: 'Mon/Wed, 4:00–6:00 PM',
      fee_label: 'Free',
    },
  ],
  message: 'OK',
  errors: null,
}
