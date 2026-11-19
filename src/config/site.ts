// File: /src/config/site.ts
export const SITE = {
  name: 'Butuan City Sports Department',
  shortName: 'BCSD',
  city: 'City Government of Butuan',
  address: '2/F City Hall Complex, J. Rosales Ave., Butuan City, Agusan del Norte',
  phone: '(085) 342-5555',
  email: 'sports@butuan.gov.ph',
  facebookUrl: 'https://www.facebook.com/ButuanCitySportsDepartment',
  officeHours: 'Mon–Fri, 8:00 AM – 5:00 PM',
  coordinates: { latitude: 8.9475, longitude: 125.5406 },
} as const

export const GOV_LINKS = [
  { label: 'Office of the President', href: 'https://op-proper.gov.ph' },
  { label: 'Office of the Vice President', href: 'https://ovp.gov.ph' },
  { label: 'Senate', href: 'https://www.senate.gov.ph' },
  { label: 'House of Representatives', href: 'https://www.congress.gov.ph' },
  { label: 'Supreme Court', href: 'https://sc.judiciary.gov.ph' },
] as const

export const CITY_LINKS = [
  { label: 'Butuan City Website', href: 'https://butuan.gov.ph' },
  { label: 'Transparency Seal', href: 'https://butuan.gov.ph/transparency-seal' },
] as const