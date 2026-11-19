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
    {
      id: 3,
      full_name: 'Jomar P. Del Rosario',
      sport: 'Boxing',
      achievement: 'Gold medalist, flyweight division, Batang Pinoy 2026.',
      year: 2026,
      photo: null,
    },
    {
      id: 4,
      full_name: 'Trisha L. Ramos',
      sport: 'Weightlifting',
      achievement: 'Silver medalist, 49kg youth class, Palarong Pambansa 2026.',
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
    row('PNG', 2026, 3, 2, 5),
    row('CARAA', 2026, 12, 10, 14),
    row('Palarong Pambansa', 2025, 5, 6, 8),
    row('Batang Pinoy', 2025, 7, 5, 10),
  ],
  message: 'OK',
  errors: null,
}