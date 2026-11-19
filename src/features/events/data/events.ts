import type { PaginatedResponse } from '@/types/api'
import { todayManila } from '@/utils/date'
import type { EventFilters, SportEvent } from '../types/sportEvent'

// SCAFFOLD: empty until Dev B adds the city tournament calendar.
export const eventsFixture: SportEvent[] = []

export function loadEventsFixture(
  f: EventFilters,
  today = todayManila(),
): PaginatedResponse<SportEvent> {
  const all = eventsFixture
    .filter((ev) => f.include_past || ev.end_date >= today)
    .filter((ev) => !f.sport || ev.sport === f.sport)
    .sort((a, b) => a.start_date.localeCompare(b.start_date))
  const start = (f.page - 1) * f.per_page
  return {
    data: all.slice(start, start + f.per_page),
    meta: {
      current_page: f.page,
      last_page: Math.max(1, Math.ceil(all.length / f.per_page)),
      per_page: f.per_page,
      total: all.length,
    },
    message: 'OK',
    errors: null,
  }
}
