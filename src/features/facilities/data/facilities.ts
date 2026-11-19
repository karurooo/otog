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
      amenities: ['Oval track', 'Football field', 'Bleachers'],
      operating_hours: 'Mon–Sat, 6:00 AM – 8:00 PM',
      is_open: true,
      status_note: null,
      image: null,
    },
    {
      id: 2,
      name: 'Butuan City Covered Gymnasium',
      barangay: 'Barangay Doongan',
      address: 'Doongan Rd., Butuan City',
      latitude: 8.9525,
      longitude: 125.5286,
      amenities: ['Basketball court', 'Volleyball court'],
      operating_hours: 'Mon–Sun, 8:00 AM – 9:00 PM',
      is_open: true,
      status_note: null,
      image: null,
    },
    {
      id: 3,
      name: 'Libertad Aquatic Center',
      barangay: 'Barangay Libertad',
      address: 'Sports Complex Compound, Butuan City',
      latitude: 8.9395,
      longitude: 125.5316,
      amenities: ['25 m pool'],
      operating_hours: 'Tue–Sun, 7:00 AM – 5:00 PM',
      is_open: false,
      status_note: 'Closed for filtration pump maintenance until December 2026.',
      image: null,
    },
  ],
  message: 'OK',
  errors: null,
}
