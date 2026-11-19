import { EmptyState } from '@/components/common/EmptyState'
import { Section } from '@/components/common/Section'
import { aboutFixture } from '../../data/about'
import type { Official } from '../../types/about'

function Avatar({ person }: { person: Official }) {
  return person.photo ? (
    <img src={person.photo} alt={person.full_name} className="size-16 rounded-full object-cover" />
  ) : (
    <div aria-hidden className="bg-primary/10 text-primary grid size-16 shrink-0 place-items-center rounded-full font-bold">
      {person.full_name.charAt(0) || '?'}
    </div>
  )
}

export function AboutSection() {
  const a = aboutFixture.data
  const statements = [
    { title: 'Mandate', body: a.mandate },
    { title: 'Mission', body: a.mission },
    { title: 'Vision', body: a.vision },
  ].filter((s) => s.body)

  return (
    <Section id="about" eyebrow="About the department" title="Building a healthier, winning Butuan">
      {statements.length === 0 ? (
        <EmptyState title="Department profile coming soon" />
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {statements.map((s) => (
            <article key={s.title} className="border-primary rounded-lg border-t-4 bg-white p-6 shadow-sm">
              <h3 className="font-display text-2xl font-bold uppercase">{s.title}</h3>
              <p className="mt-2 text-slate-700">{s.body}</p>
            </article>
          ))}
        </div>
      )}

      {a.officer.full_name && (
        <figure className="bg-band mt-10 flex flex-col gap-6 rounded-lg p-6 sm:flex-row">
          <Avatar person={a.officer} />
          <div>
            <blockquote className="space-y-2 text-slate-700 italic">
              {a.officer.message.map((p) => (
                <p key={p}>“{p}”</p>
              ))}
            </blockquote>
            <figcaption className="mt-3 font-semibold">
              {a.officer.full_name} · <span className="font-normal">{a.officer.position}</span>
            </figcaption>
          </div>
        </figure>
      )}

      <h3 className="mt-12 text-xl font-semibold">Key officials</h3>
      {a.officials.length === 0 ? (
        <div className="mt-4">
          <EmptyState title="Officials roster coming soon" />
        </div>
      ) : (
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {a.officials.map((o) => (
            <li key={o.id} className="flex items-center gap-4 rounded-lg border p-4">
              <Avatar person={o} />
              <div>
                <p className="font-semibold">{o.full_name}</p>
                <p className="text-sm text-slate-600">{o.position}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
