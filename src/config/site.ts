// SCAFFOLD: contact fields are filled by Dev D (Section 11: Contact), links by Dev D (Section 12: Footer).
export const SITE = {
  name: 'Butuan City Sports Department',
  shortName: 'BCSD',
  city: 'City Government of Butuan',
  address: '',
  phone: '',
  email: '',
  facebookUrl: '',
  officeHours: '',
  coordinates: { latitude: 0, longitude: 0 },
} as const

export const GOV_LINKS: readonly { label: string; href: string }[] = []

export const CITY_LINKS: readonly { label: string; href: string }[] = []
