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
  {
    id: 3,
    title: 'Libertad Aquatic Center Maintenace Advisory',
    category: 'advisory',
    published_at: '2026-11-14',
    excerpt: 'Scheduled filtration maintenance begins this week.',
    body: ['Pool operations are temporarily paused for filtration pump maintenance.'],
    cover: null,
  },
  {
    id: 4,
    title: 'Coach Spotlight: Building Youth Baskteball Leaders',
    category: 'feature',
    published_at: '11/13/2026',
    excerpt: 'How barangay clinics are mentoring the next generation of players.',
    body: ['Draft feature body.'],
    cover: null,
  },
  {
    id: 5,
    title: 'Inter-Barangay League Semifinals Schedule Released',
    category: 'announcement',
    published_at: '2026-11-12',
    excerpt: 'Draft excerpt TBD',
    body: ['Draft body TBD.'],
    cover: null,
  },
  {
    id: 6,
    title: 'Balangay Fun Run Draws Over 2,000 Participants',
    category: 'result',
    published_at: '2026-11-11',
    excerpt: 'Draft excerpt TBD',
    body: ['Draft body TBD.'],
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