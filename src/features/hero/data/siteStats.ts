import type { ApiResponse } from '@/types/api'
import type { SiteStats } from '../types/siteStats'

// Stage 2: Incomplete counts and outdated medals_year
export const siteStatsFixture: ApiResponse<SiteStats> = {
  data: {
    athletes_count: 950,
    programs_count: 4,
    facilities_count: 0, // TODO: pending facilities count
    medals_count: 0, // TODO: pending verified medal tally
    medals_year: 2024,
  },
  message: 'OK',
  errors: null,
}
