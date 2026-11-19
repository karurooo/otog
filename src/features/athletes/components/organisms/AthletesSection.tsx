import { useState } from 'react'
import { EmptyState } from '@/components/common/EmptyState'
import { Section } from '@/components/common/Section'
import { featuredAthletesFixture, medalTallyFixture } from '../../data/athletes'

export function AthletesSection() {
  const athletes = featuredAthletesFixture.data
  const tally = medalTallyFixture.data
  const years = [...new Set(tally.map((r) => r.year))].sort((a, b) => b - a)
  const [year, setYear] = useState(years[0])
  const rows = tally.filter((r) => r.year === year)

  return (
    <Section id="athletes" eyebrow="Athletes & achievements" title="Pride of Butuan" tone="dark">
      {athletes.length === 0 ? (
        <EmptyState title="Featured athletes coming soon" />
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {athletes.map((a) => (
            <li key={a.id} className="rounded-lg bg-white/5 p-5 ring-1 ring-white/10">
              {a.photo && <img src={a.photo} alt={a.full_name} className="mb-4 aspect-square w-full rounded object-cover" />}
              <p className="text-accent text-xs font-semibold uppercase">{a.sport}</p>
              <h3 className="text-lg font-semibold">{a.full_name}</h3>
              <p className="mt-1 text-sm text-white/80">{a.achievement}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
        <h3 className="font-display text-3xl font-bold">Medal tally</h3>
        {years.length > 0 && (
          <label className="flex items-center gap-2 text-sm">
            Year
            <select
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="rounded-md border border-white/30 bg-transparent px-3 py-2"
            >
              {years.map((y) => (
                <option key={y} value={y} className="text-slate-900">
                  {y}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>
      {rows.length === 0 ? (
        <div className="mt-4">
          <EmptyState title="Medal tally coming soon" />
        </div>
      ) : (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-white/20 text-white/70">
              <tr>
                <th className="py-2">Competition</th>
                <th>Gold</th>
                <th>Silver</th>
                <th>Bronze</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={`${r.competition}-${r.year}`} className="border-b border-white/10">
                  <td className="py-2">{r.competition}</td>
                  <td>{r.gold}</td>
                  <td>{r.silver}</td>
                  <td>{r.bronze}</td>
                  <td className="font-semibold">{r.gold + r.silver + r.bronze}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Section>
  )
}
