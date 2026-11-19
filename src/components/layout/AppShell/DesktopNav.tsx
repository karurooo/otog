import { NAV_ITEMS } from '@/config/navigation'

export function DesktopNav() {
  if (NAV_ITEMS.length === 0) return null
  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex gap-5 text-sm font-semibold">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="hover:text-primary py-2 hover:underline">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
