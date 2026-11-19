// File: /src/components/layout/AppShell/SiteFooter.tsx
import { CITY_LINKS, GOV_LINKS, SITE } from '@/config/site'

interface LinkGroupProps {
  title: string
  links: readonly { label: string; href: string }[]
}

function FooterLinkGroup({ title, links }: LinkGroupProps) {
  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold tracking-wide uppercase">
        {title}
      </h2>
      <ul className="space-y-2 text-sm text-white/80">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-gov-bar text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <FooterLinkGroup title="Government" links={GOV_LINKS} />
        <FooterLinkGroup title="City" links={CITY_LINKS} />
        <div>
          <h2 className="mb-3 text-sm font-semibold tracking-wide uppercase">
            {SITE.name}
          </h2>
          <address className="text-sm text-white/80 not-italic">
            {SITE.address}
          </address>
        </div>
      </div>
      <p className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} {SITE.city}. All rights reserved.
      </p>
    </footer>
  )
}
