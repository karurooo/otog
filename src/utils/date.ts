const TZ = 'Asia/Manila'

/** Today's date in Philippine Standard Time as `YYYY-MM-DD` (sortable as a string). */
export function todayManila(now = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: TZ }).format(now)
}

/** `2026-11-16` → `Nov 16, 2026`. Returns the input unchanged when it is not a valid date. */
export function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00+08:00`)
  if (Number.isNaN(d.getTime())) return iso
  return new Intl.DateTimeFormat('en-PH', { timeZone: TZ, dateStyle: 'medium' }).format(d)
}
