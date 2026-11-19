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
      'The Butuan City Sports Department has opened registration for its 2026 grassroots sports clinics covering swimming, basketball, athletics, and para-sports.',
      'Interested participants may download the registration form in the Resources section or visit the City Sports Office from Monday to Friday.',
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
      'Butuan City youth swimmers secured 12 gold, 8 silver, and 6 bronze medals during the regional aquatics meet.',
      'Head coach Ramon Aquino credited consistent weekend grassroots sessions for the squad’s record-breaking relay finish.',
    ],
    cover: null,
  },
  {
    id: 3,
    title: 'Libertad Aquatic Center Maintenance Advisory',
    category: 'advisory',
    published_at: '2026-11-14',
    excerpt: 'Scheduled filtration maintenance begins this week.',
    body: [
      'Pool operations at Libertad Aquatic Center are temporarily paused for scheduled filtration pump rehabilitation.',
      'Normal public hours and Learn to Swim classes will resume upon clearance by the City Engineering Office in December 2026.',
    ],
    cover: null,
  },
  {
    id: 4,
    title: 'Coach Spotlight: Building Youth Basketball Leaders',
    category: 'feature',
    published_at: '2026-11-13',
    excerpt: 'How barangay clinics are mentoring the next generation of players.',
    body: [
      'Community coaches across Butuan City are turning after-school clinics into structured mentorship hubs focused on discipline and academics.',
      'Over 400 student-athletes participated in the program this semester across 18 barangays.',
    ],
    cover: null,
  },
  {
    id: 5,
    title: 'Inter-Barangay League Semifinals Schedule Released',
    category: 'announcement',
    published_at: '2026-11-12',
    excerpt: 'Tip-off times and court assignments for the final four barangays.',
    body: [
      'The semifinals of the Inter-Barangay Basketball League will be held at the Butuan City Covered Gymnasium starting at 4:00 PM.',
      'Admission is free for all residents; spectators are reminded to observe venue safety guidelines.',
    ],
    cover: null,
  },
  {
    id: 6,
    title: 'Balangay Fun Run Draws Over 2,000 Participants',
    category: 'result',
    published_at: '2026-11-11',
    excerpt: 'Families, students, and local runners packed Guingona Park for the annual run.',
    body: [
      'More than 2,000 runners joined the 3K, 5K, and 10K categories of the annual Balangay Fun Run.',
      'Proceeds from sponsor pledges will support equipment kits for barangay youth track clubs.',
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