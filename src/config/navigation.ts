export interface NavItem {
  id: string
  label: string
}

// Stage 3: Label spellings corrected; anchor IDs pending final verification
export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'programs', label: 'Programs' },
  { id: 'events', label: 'Events' },
  { id: 'facility', label: 'Facilities' },
  { id: 'athletes', label: 'Athletes' },
  { id: 'news', label: 'News' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'resources', label: 'Resources' },
  { id: 'contacts', label: 'Contact' },
]
