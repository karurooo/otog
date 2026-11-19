export interface NavItem {
  id: string
  label: string
}

// Single source for section anchors (nav, scroll-spy, footer). Order = page order.
export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'programs', label: 'Programs' },
  { id: 'events', label: 'Events' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'athletes', label: 'Athletes' },
  { id: 'news', label: 'News' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'resources', label: 'Resources' },
  { id: 'contact', label: 'Contact' },
]
