import { Accessibility, Activity, Dumbbell, Trophy, Users, Waves, type LucideIcon } from 'lucide-react'
import type { ProgramCategory } from '../types/program'

export const PROGRAM_CATEGORIES: readonly { id: ProgramCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'grassroots', label: 'Grassroots & youth' },
  { id: 'competitive', label: 'Competitive' },
  { id: 'community', label: 'Community & fitness' },
  { id: 'inclusive', label: 'Inclusive' },
]

// Explicit map keeps the bundle small (importing every lucide icon would blow the 200 KB budget).
export const PROGRAM_ICONS: Record<string, LucideIcon> = { Accessibility, Activity, Dumbbell, Trophy, Users, Waves }
