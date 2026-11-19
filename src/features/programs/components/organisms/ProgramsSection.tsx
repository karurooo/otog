import { useState } from 'react'
import { Trophy } from 'lucide-react'
import { EmptyState } from '@/components/common/EmptyState'
import { requestInquiry } from '@/components/common/inquire'
import { Modal } from '@/components/common/Modal'
import { Section } from '@/components/common/Section'
import { PROGRAM_CATEGORIES, PROGRAM_ICONS } from '../../constants/programCategories'
import { programsFixture } from '../../data/programs'
import type { Program } from '../../types/program'

export function ProgramsSection() {
  const [category, setCategory] = useState<string>('all')
  const [selected, setSelected] = useState<Program | null>(null)
  const programs = programsFixture.data.filter((p) => category === 'all' || p.category === category)

  return (
    <Section
      id="programs"
      eyebrow="Sports programs"
      title="Find your program"
      intro="From first kicks to elite competition. Choose a category to see what's open."
      tone="band"
    >
      <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
        {PROGRAM_CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            aria-pressed={category === c.id}
            onClick={() => setCategory(c.id)}
            className="aria-pressed:bg-primary rounded-full border bg-white px-4 py-1.5 text-sm font-semibold aria-pressed:text-white"
          >
            {c.label}
          </button>
        ))}
      </div>

      {programs.length === 0 ? (
        <div className="mt-8">
          <EmptyState
            title="No programs in this category yet."
            hint={category === 'all' ? undefined : 'Choose "All" to see every program.'}
          />
        </div>
      ) : (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => {
            const Icon = PROGRAM_ICONS[p.icon] ?? Trophy
            return (
              <li key={p.id} className="flex flex-col rounded-lg bg-white p-6 shadow-sm">
                <Icon aria-hidden className="text-primary size-8" />
                <p className="mt-3 text-xs font-semibold text-slate-500 uppercase">
                  {PROGRAM_CATEGORIES.find((c) => c.id === p.category)?.label}
                </p>
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 flex-1 text-slate-700">{p.summary}</p>
                <dl className="mt-4 grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <dt className="text-slate-500">Ages</dt>
                    <dd>{p.age_group}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Schedule</dt>
                    <dd>{p.schedule}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Fee</dt>
                    <dd>{p.fee_label}</dd>
                  </div>
                </dl>
                <div className="mt-5 flex gap-2">
                  <button
                    type="button"
                    onClick={() => requestInquiry({ inquiry_type: 'program', subject: `Inquiry: ${p.name}` })}
                    className="bg-primary rounded-md px-4 py-2 text-sm font-semibold text-white"
                  >
                    Ask about this program
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelected(p)}
                    className="rounded-md border px-4 py-2 text-sm font-semibold"
                  >
                    Details
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      )}

      <Modal open={selected !== null} title={selected?.name ?? ''} onClose={() => setSelected(null)}>
        {selected && (
          <div className="space-y-3 text-slate-700">
            {selected.description.map((d) => (
              <p key={d}>{d}</p>
            ))}
            <p>
              <strong>Venue:</strong> {selected.venue}
            </p>
            <p>
              <strong>Coach:</strong> {selected.coach_name ?? 'To be announced'}
              {selected.coach_contact && ` · ${selected.coach_contact}`}
            </p>
            {selected.demo_url && (
              <a
                href={selected.demo_url}
                target="_blank"
                rel="noreferrer"
                className="bg-primary inline-block rounded-md px-4 py-2 text-sm font-semibold text-white"
              >
                Play demo
              </a>
            )}
            {selected.requirements.length > 0 && (
              <>
                <p className="font-semibold">Requirements</p>
                <ul className="list-disc pl-5">
                  {selected.requirements.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </Modal>
    </Section>
  )
}
