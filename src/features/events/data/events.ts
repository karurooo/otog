import type { PaginatedResponse } from '@/types/api'
import { todayManila } from '@/utils/date'
import type { EventFilters, SportEvent } from '../types/sportEvent'

const e = (
  id: number,
  title: string,
  sport: string,
  start_date: string,
  end_date: string,
  status: SportEvent['status'] = 'upcoming',
  venue = 'Venue pending',
  is_featured = false,
): SportEvent => ({
  id,
  title,
  sport,
  start_date,
  end_date,
  venue,
  organizer: 'Butuan City Sports Department',
  status,
  is_featured,
  news_id: null,
})

export const eventsFixture: SportEvent[] = [
  e(1, 'Butuan City Swim Meet', 'Swimming', '2026-10-10', '2026-10-11', 'completed'),
  e(2, 'Balangay Fun Run', 'Athletics', '2026-11-08', '2026-11-08', 'completed'),
  e(3, 'Inter-Barangay Basketball League', 'Basketball', '2026-11-10', '2026-11-30', 'ongoing'),
  e(4, 'City Volleyball Clinic', 'Volleyball', '2026-11-22', '2026-11-22'),
  e(5, 'Butuan Chess Open', 'Chess', '2026-12-05', '2026-12-06', 'postponed'),
  e(6, 'Youth Football Cup', 'Football', '2026-12-12', '2026-12-14'),
  e(7, 'New Year Fun Run', 'Athletics', '2027-01-03', '2027-01-03'),
]

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
