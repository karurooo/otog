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

export const GOV_LINKS = [
  { label: 'Office of the President', href: 'https://op-proper.gov.ph' },
  { label: 'Office of the Vice President', href: 'https://ovp.gov.ph' },
  { label: 'Senate', href: 'https://www.senate.gov.ph' },
] as const

export const CITY_LINKS = [
  { label: 'Butuan City Website', href: 'https://butuan.gov.ph' },
] as const