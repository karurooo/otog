import { useState } from 'react'
import { CalendarPlus } from 'lucide-react'
import { EmptyState } from '@/components/common/EmptyState'
import { Section } from '@/components/common/Section'
import { formatDate } from '@/utils/date'
import { eventsFixture, loadEventsFixture } from '../../data/events'
import type { EventStatus } from '../../types/sportEvent'
import { downloadIcs } from '../../utils/events'

const STATUS_STYLES: Record<EventStatus, string> = {
  upcoming: 'bg-primary/10 text-primary',
  ongoing: 'bg-success/10 text-success',
  completed: 'bg-slate-200 text-slate-700',
  postponed: 'bg-accent/20 text-amber-800',
}

export function EventsSection() {
  const [sport, setSport] = useState('')
  const [includePast, setIncludePast] = useState(false)
  const sports = [...new Set(eventsFixture.map((e) => e.sport))].sort()
  // shortcut: single page of 100 and list view only; add pagination + the calendar view when the list grows.
  const events = loadEventsFixture({ sport: sport || undefined, include_past: includePast, page: 1, per_page: 100 }).data

  return (
    <Section id="events" eyebrow="Events & calendar" title="What's coming up">
      <div className="flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2 text-sm">
          Sport
          <select value={sport} onChange={(e) => setSport(e.target.value)} className="rounded-md border px-3 py-2">
            <option value="">All sports</option>
            {sports.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={includePast} onChange={(e) => setIncludePast(e.target.checked)} />
          Show past events
        </label>
      </div>

      {events.length === 0 ? (
        <div className="mt-8">
          <EmptyState title="No upcoming events" hint='Check back soon or turn on "Show past events".' />
        </div>
      ) : (
        <ul className="mt-8 divide-y rounded-lg border">
          {events.map((ev) => (
            <li key={ev.id} className="flex flex-wrap items-center gap-4 p-4">
              <div className="min-w-0 flex-1">
                <p className="text-sm text-slate-600">
                  {formatDate(ev.start_date)}
                  {ev.end_date !== ev.start_date && ` – ${formatDate(ev.end_date)}`} · {ev.sport}
                </p>
                <h3 className="font-semibold">
                  {ev.title}
                  {ev.is_featured && <span className="text-accent ml-2 text-xs uppercase">Featured</span>}
                </h3>
                <p className="text-sm text-slate-600">{ev.venue}</p>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${STATUS_STYLES[ev.status]}`}>
                {ev.status === 'ongoing' && <span aria-hidden>● </span>}
                {ev.status}
              </span>
              <button
                type="button"
                onClick={() => downloadIcs(ev)}
                aria-label={`Add ${ev.title} to calendar`}
                className="rounded p-2 hover:bg-slate-100"
              >
                <CalendarPlus aria-hidden className="size-5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
