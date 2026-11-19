export type NewsCategory = 'announcement' | 'result' | 'advisory' | 'feature'

export interface NewsItem {
  id: number
  title: string
  category: NewsCategory
  /** `YYYY-MM-DD`; must be ISO so newest-first string sorting works. */
  published_at: string
  excerpt: string
  body: string[]
  cover: string | null
}
