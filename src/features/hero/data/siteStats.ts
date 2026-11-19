import type { ApiResponse } from '@/types/api'
import type { SiteStats } from '../types/siteStats'

export const siteStatsFixture: ApiResponse<SiteStats> = {
  data: {
    athletes_count: 1250,
    programs_count: 12,
    facilities_count: 8,
    medals_count: 64,
    medals_year: 2026,
  },
  message: 'OK',
  errors: null,
}
