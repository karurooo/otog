import type { ApiResponse } from '@/types/api'
import type { SiteStats } from '../types/siteStats'

// SCAFFOLD: zeroed until Dev A supplies approved department metrics.
export const siteStatsFixture: ApiResponse<SiteStats> = {
  data: {
    athletes_count: 0,
    programs_count: 0,
    facilities_count: 0,
    medals_count: 0,
    medals_year: 0,
  },
  message: 'OK',
  errors: null,
}
