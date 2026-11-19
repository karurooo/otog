import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Modal } from '@/components/common/Modal'
import { NAV_ITEMS } from '@/config/navigation'

export function MobileNav() {
  const [open, setOpen] = useState(false)
  if (NAV_ITEMS.length === 0) return null
  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="rounded p-2 hover:bg-slate-100"
      >
        <Menu aria-hidden className="size-6" />
      </button>
      <Modal open={open} title="Menu" onClose={() => setOpen(false)}>
        <nav aria-label="Mobile">
          <ul className="grid gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded px-3 py-3 font-semibold hover:bg-slate-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Modal>
    </div>
  )
}
