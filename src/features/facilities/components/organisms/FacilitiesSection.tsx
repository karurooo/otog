import { MapPin } from 'lucide-react'
import { EmptyState } from '@/components/common/EmptyState'
import { requestInquiry } from '@/components/common/inquire'
import { Section } from '@/components/common/Section'
import { facilitiesFixture } from '../../data/facilities'

export function FacilitiesSection() {
  const facilities = facilitiesFixture.data
  return (
    <Section id="facilities" eyebrow="Facilities" title="Where Butuan trains and plays" tone="band">
      {facilities.length === 0 ? (
        <EmptyState title="Facility directory coming soon" />
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <li key={f.id} className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="relative aspect-video bg-slate-200">
                {f.image && <img src={f.image} alt={f.name} className="size-full object-cover" />}
                <span
                  className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold text-white ${f.is_open ? 'bg-success' : 'bg-danger'}`}
                >
                  {f.is_open ? 'Open' : 'Closed'}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-semibold">{f.name}</h3>
                <p className="mt-1 flex items-center gap-1 text-sm text-slate-600">
                  <MapPin aria-hidden className="size-4" /> {f.barangay}
                </p>
                {f.status_note && <p className="text-danger mt-2 text-sm">{f.status_note}</p>}
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {f.amenities.map((a) => (
                    <li key={a} className="bg-band rounded px-2 py-0.5 text-xs">
                      {a}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 flex-1 text-sm">{f.operating_hours}</p>
                <div className="mt-4 flex gap-2">
                  <button
                    type="button"
                    onClick={() => requestInquiry({ inquiry_type: 'facility', subject: `Facility use: ${f.name}` })}
                    className="bg-primary rounded-md px-4 py-2 text-sm font-semibold text-white"
                  >
                    Request to use
                  </button>
                  <a
                    href={`https://www.openstreetmap.org/?mlat=${f.latitude}&mlon=${f.longitude}#map=17/${f.latitude}/${f.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border px-4 py-2 text-sm font-semibold"
                  >
                    View on map
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
