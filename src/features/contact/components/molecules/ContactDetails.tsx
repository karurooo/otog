import { SITE } from '@/config/site'

const TBA = 'To be announced'

// Widen `as const` literals: while a field is still '' it would otherwise narrow to `never` below.
const site: Record<'address' | 'phone' | 'email' | 'officeHours' | 'facebookUrl', string> = SITE

export function ContactDetails() {
  const { latitude, longitude }: { latitude: number; longitude: number } = SITE.coordinates
  const rows: { label: string; value: string; href?: string }[] = [
    { label: 'Office', value: site.address },
    { label: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/[^\d+]/g, '')}` },
    { label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { label: 'Office hours', value: site.officeHours },
    { label: 'Facebook', value: site.facebookUrl && 'Department page', href: site.facebookUrl },
  ]
  return (
    <div>
      <dl className="space-y-4">
        {rows.map((r) => (
          <div key={r.label}>
            <dt className="text-sm font-semibold text-slate-500">{r.label}</dt>
            <dd>
              {r.value && r.href ? (
                <a href={r.href} className="text-primary hover:underline">
                  {r.value}
                </a>
              ) : (
                r.value || <span className="text-slate-500">{TBA}</span>
              )}
            </dd>
          </div>
        ))}
      </dl>
      {latitude !== 0 && (
        <iframe
          title="Map of the Sports Department office"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.005},${latitude - 0.004},${longitude + 0.005},${latitude + 0.004}&marker=${latitude},${longitude}`}
          loading="lazy"
          className="mt-6 aspect-video w-full rounded-lg border"
        />
      )}
    </div>
  )
}
