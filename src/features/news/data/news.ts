// File: /src/features/news/data/news.ts
import type { PaginatedResponse } from '@/types/api'
import type { NewsItem } from '../types/newsItem'

const items: NewsItem[] = [
  {
    id: 1,
    title: 'Registration Opens for Grassroots Sports Clinics 2026',
    category: 'announcement',
    published_at: '2026-11-16',
    excerpt: 'Free weekend clinics are now open to Butuan City youth.',
    body: [
      'The Butuan City Sports Department has opened registration for its 2026 grassroots sports clinics.',
    ],
    cover: null,
  },
  {
    id: 2,
    title: 'Butuan Swimmers Haul 12 Golds at Regional Meet',
    category: 'result',
    published_at: '2026-11-15',
    excerpt: 'City swim delegation finishes first overall in the regional aquatics competition.',
    body: [
      'Butuan City youth swimmers secured 12 gold medals during the weekend regional aquatics meet.',
    ],
    cover: null,
  },
]

export function loadNewsFixture(
  page: number,
  perPage: number,
): PaginatedResponse<NewsItem> {
  const sorted = [...items].sort((a, b) =>
    b.published_at.localeCompare(a.published_at),
  )
  const start = (page - 1) * perPage
  return {
    data: sorted.slice(start, start + perPage),
    meta: {
      current_page: page,
      last_page: Math.max(1, Math.ceil(sorted.length / perPage)),
      per_page: perPage,
      total: sorted.length,
    },
    message: 'OK',
    errors: null,
  }
}