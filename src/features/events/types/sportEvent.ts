export type EventStatus = 'upcoming' | 'ongoing' | 'completed' | 'postponed'

export interface SportEvent {
  id: number
  title: string
  sport: string
  /** `YYYY-MM-DD` */
  start_date: string
  /** `YYYY-MM-DD`, inclusive */
  end_date: string
  venue: string
  organizer: string
  status: EventStatus
  is_featured: boolean
  news_id: number | null
}

export interface EventFilters {
  sport?: string
  include_past: boolean
  page: number
  per_page: number
}
