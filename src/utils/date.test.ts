import { formatDate, todayManila } from './date'

test('todayManila uses PH time (UTC+8)', () => {
  expect(todayManila(new Date('2026-11-18T17:00:00Z'))).toBe('2026-11-19')
})

test('formatDate formats ISO dates and passes through invalid ones', () => {
  expect(formatDate('2026-11-16')).toMatch(/Nov 16, 2026/)
  expect(formatDate('16/11/2026')).toBe('16/11/2026')
})
