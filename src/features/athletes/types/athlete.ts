export interface Athlete {
  id: number
  full_name: string
  sport: string
  achievement: string
  year: number
  photo: string | null
}

export interface MedalTallyRow {
  competition: string
  year: number
  gold: number
  silver: number
  bronze: number
}
