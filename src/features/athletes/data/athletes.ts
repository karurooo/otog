// File: /src/features/athletes/data/athletes.ts
import type { ApiResponse } from '@/types/api'
import type { Athlete, MedalTallyRow } from '../types/athlete'

export const featuredAthletesFixture: ApiResponse<Athlete[]> = {
  data: [
    {
      id: 1,
      full_name: 'Carlo D. Morales',
      sport: 'Athletics',
      achievement: 'Gold medalist, 400m sprint, CARAA 2026.',
      year: 2026,
      photo: null,
    },
    {
      id: 2,
      full_name: 'Aira M. Castillo',
      sport: 'Swimming',
      achievement: 'Gold medalist, 100m freestyle, CARAA 2026.',
      year: 2026,
      photo: null,
    },
  ],
  message: 'OK',
  errors: null,
}

const row = (
  competition: string,
  year: number,
  gold: number,
  silver: number,
  bronze: number,
): MedalTallyRow => ({ competition, year, gold, silver, bronze })

export const medalTallyFixture: ApiResponse<MedalTallyRow[]> = {
  data: [
    row('Palarong Pambansa', 2026, 6, 4, 9),
    row('Batang Pinoy', 2026, 8, 7, 11),
  ],
  message: 'OK',
  errors: null,
}
