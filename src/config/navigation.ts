export interface NavItem {
  id: string
  label: string
}

// Stage 1: Initial navigation links (Home and About only)
export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
]
