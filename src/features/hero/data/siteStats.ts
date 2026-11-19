import type { ApiResponse } from '@/types/api'
import type { SiteStats } from '../types/siteStats'

// Stage 3: Year corrected and counts populated (pending final Q4 audit)
export const siteStatsFixture: ApiResponse<SiteStats> = {
  data: {
    athletes_count: 1180,
    programs_count: 6,
    facilities_count: 5,
    medals_count: 58,
    medals_year: 2026,
  },
  message: 'OK',
  errors: null,
}
