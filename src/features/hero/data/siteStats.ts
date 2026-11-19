import type { ApiResponse } from '@/types/api'
import type { SiteStats } from '../types/siteStats'

// Stage 1: Initial baseline metrics
export const siteStatsFixture: ApiResponse<SiteStats> = {
  data: {
    athletes_count: 500,
    programs_count: 2,
    facilities_count: 0,
    medals_count: 0,
    medals_year: 2026,
  },
  message: 'OK',
  errors: null,
}
