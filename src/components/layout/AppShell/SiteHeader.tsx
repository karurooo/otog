import { Trophy } from 'lucide-react'
import { SITE } from '@/config/site'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="bg-gov-bar px-4 py-1 text-xs text-white/80">
        <div className="mx-auto max-w-7xl sm:px-2 lg:px-4">Republic of the Philippines · {SITE.city}</div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="text-primary flex items-center gap-2 font-bold">
          {/* SCAFFOLD: placeholder mark until the official department logo is supplied. */}
          <Trophy aria-hidden className="size-7" />
          <span className="leading-tight">
            <span className="block text-xs font-normal text-slate-600">City of Butuan</span>
            Sports Department
          </span>
        </a>
        <DesktopNav />
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="bg-accent hidden rounded-md px-4 py-2 text-sm font-semibold text-slate-900 hover:brightness-95 sm:inline-block"
          >
            Send an inquiry
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
