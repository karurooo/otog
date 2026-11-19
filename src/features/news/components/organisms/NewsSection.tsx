import { useState } from 'react'
import { EmptyState } from '@/components/common/EmptyState'
import { Modal } from '@/components/common/Modal'
import { Section } from '@/components/common/Section'
import { formatDate } from '@/utils/date'
import { loadNewsFixture } from '../../data/news'
import type { NewsItem } from '../../types/newsItem'

const PER_PAGE = 3

export function NewsSection() {
  const [pages, setPages] = useState(1)
  const [reading, setReading] = useState<NewsItem | null>(null)
  // Pages accumulate ("Load more"), so request everything up to the current page at once.
  const res = loadNewsFixture(1, pages * PER_PAGE)
  const hasMore = res.meta.total > res.data.length

  return (
    <Section id="news" eyebrow="News & announcements" title="Latest from the department" tone="band">
      {res.data.length === 0 ? (
        <EmptyState title="No news yet" hint="Announcements and results will be posted here." />
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {res.data.map((n) => (
            <li key={n.id} className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm">
              {n.cover && <img src={n.cover} alt="" className="aspect-video w-full object-cover" />}
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold text-slate-500 uppercase">
                  {n.category} · <time dateTime={n.published_at}>{formatDate(n.published_at)}</time>
                </p>
                <h3 className="mt-1 text-lg font-semibold">{n.title}</h3>
                <p className="mt-2 flex-1 text-slate-700">{n.excerpt}</p>
                <button
                  type="button"
                  onClick={() => setReading(n)}
                  className="text-primary mt-4 self-start font-semibold hover:underline"
                >
                  Read the full post →
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {hasMore && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setPages((p) => p + 1)}
            className="rounded-md border bg-white px-5 py-2 font-semibold"
          >
            Load more news
          </button>
        </div>
      )}

      <Modal open={reading !== null} title={reading?.title ?? ''} onClose={() => setReading(null)}>
        {reading && (
          <article className="space-y-3 text-slate-700">
            <p className="text-sm text-slate-500">{formatDate(reading.published_at)}</p>
            {reading.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </article>
        )}
      </Modal>
    </Section>
  )
}
