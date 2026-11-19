import type { ApiResponse } from '@/types/api'
import type { Facility } from '../types/facility'

export const facilitiesFixture: ApiResponse<Facility[]> = {
  data: [
    {
      id: 1,
      name: 'Libertad Sports Complex',
      barangay: 'Barangay Libertad',
      address: 'J.C. Aquino Ave., Butuan City',
      latitude: 8.9475,
      longitude: 125.5406,
      amenities: ['Oval track', 'Football field'],
      operating_hours: 'Mon–Sat, 6:00 AM – 8:00 PM',
      is_open: true,
      status_note: null,
      image: null,
    },
  ],
  message: 'OK',
  errors: null,
}
