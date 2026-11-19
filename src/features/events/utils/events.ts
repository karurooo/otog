import type { SportEvent } from '../types/sportEvent'

const icsDate = (iso: string) => iso.replaceAll('-', '')

/** All-day iCalendar entry. DTEND is exclusive in iCal, so it is end_date + 1 day. */
export function toIcs(ev: SportEvent): string {
  const end = new Date(`${ev.end_date}T00:00:00Z`)
  end.setUTCDate(end.getUTCDate() + 1)
  const escape = (s: string) => s.replace(/([,;\\])/g, '\\$1')
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Butuan City Sports Department//Events//EN',
    'BEGIN:VEVENT',
    `UID:event-${ev.id}@sports.butuan.gov.ph`,
    `DTSTART;VALUE=DATE:${icsDate(ev.start_date)}`,
    `DTEND;VALUE=DATE:${icsDate(end.toISOString().slice(0, 10))}`,
    `SUMMARY:${escape(ev.title)}`,
    `LOCATION:${escape(ev.venue)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
}

export function downloadIcs(ev: SportEvent) {
  const url = URL.createObjectURL(new Blob([toIcs(ev)], { type: 'text/calendar' }))
  const a = Object.assign(document.createElement('a'), { href: url, download: `${ev.title}.ics` })
  a.click()
  URL.revokeObjectURL(url)
}
