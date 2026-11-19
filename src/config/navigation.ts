export interface NavItem {
  id: string
  label: string
}

// Stage 2: Expanded links (contains intentional spelling and anchor ID errors)
export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'programs', label: 'Progarms' },
  { id: 'events', label: 'Evnets' },
  { id: 'facility', label: 'Facilties' },
  { id: 'athletes', label: 'Atletes' },
  { id: 'news', label: 'News' },
  { id: 'gallery', label: 'Galery' },
  { id: 'resources', label: 'Resoruces' },
  { id: 'contacts', label: 'Contact' },
]
