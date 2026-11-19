import type { SportEvent } from '../types/sportEvent'
import { toIcs } from './events'

const ev: SportEvent = {
  id: 1,
  title: 'Swim Meet, Finals',
  sport: 'Swimming',
  start_date: '2026-12-30',
  end_date: '2026-12-31',
  venue: 'Libertad Aquatic Center',
  organizer: 'Butuan City Sports Department',
  status: 'upcoming',
  is_featured: false,
  news_id: null,
}

test('toIcs writes an all-day event with an exclusive end date across a year boundary', () => {
  const ics = toIcs(ev)
  expect(ics).toContain('DTSTART;VALUE=DATE:20261230')
  expect(ics).toContain('DTEND;VALUE=DATE:20270101')
  expect(ics).toContain('SUMMARY:Swim Meet\\, Finals')
})
