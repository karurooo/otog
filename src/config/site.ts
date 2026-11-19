// File: /src/config/site.ts
export const SITE = {
  name: 'Butuan City Sports Department',
  shortName: 'BCSD',
  city: 'City Government of Butuan',
  address: 'Butuan City, Agusan del Norte',
  phone: '',
  email: '',
  facebookUrl: '',
  officeHours: 'Mon–Fri, 8:00 AM – 5:00 PM',
  coordinates: { latitude: 8.9475, longitude: 125.5406 },
} as const

export const GOV_LINKS: readonly { label: string; href: string }[] = []

export const CITY_LINKS: readonly { label: string; href: string }[] = []