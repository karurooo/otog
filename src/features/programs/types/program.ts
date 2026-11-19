export type ProgramCategory = 'grassroots' | 'competitive' | 'community' | 'inclusive'

export interface Program {
  id: number
  slug: string
  name: string
  category: ProgramCategory
  /** lucide-react icon name, see PROGRAM_ICONS. */
  icon: string
  summary: string
  description: string[]
  age_group: string
  schedule: string
  venue: string
  fee_label: string
  requirements: string[]
  coach_name: string | null
  coach_contact: string | null
  is_featured: boolean
  /** Optional playable demo under `public/`, opened in a new tab from the details dialog. */
  demo_url?: string
}
