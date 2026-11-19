import { ChevronDown, Download } from 'lucide-react'
import { EmptyState } from '@/components/common/EmptyState'
import { Section } from '@/components/common/Section'
import { formatDate } from '@/utils/date'
import { downloadsFixture, faqsFixture } from '../../data/resources'

export function ResourcesSection() {
  const downloads = downloadsFixture.data
  const faqs = faqsFixture.data

  return (
    <Section id="resources" eyebrow="Forms & FAQ" title="Forms and common questions" tone="band">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold">Downloadable forms</h3>
          {downloads.length === 0 ? (
            <div className="mt-4">
              <EmptyState title="Forms coming soon" />
            </div>
          ) : (
            <ul className="mt-4 divide-y rounded-lg border bg-white">
              {downloads.map((d) => (
                <li key={d.id}>
                  <a href={d.url} download className="flex items-center gap-4 p-4 hover:bg-slate-50">
                    <span className="bg-primary rounded px-2 py-1 text-xs font-bold text-white">{d.file_type}</span>
                    <span className="flex-1">
                      <span className="block font-semibold">{d.name}</span>
                      <span className="text-sm text-slate-600">
                        {d.size_kb} KB, updated {formatDate(d.updated_at)}
                      </span>
                    </span>
                    <Download aria-hidden className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3 className="text-xl font-semibold">Common questions</h3>
          {faqs.length === 0 ? (
            <div className="mt-4">
              <EmptyState title="FAQs coming soon" />
            </div>
          ) : (
            <div className="mt-4 divide-y rounded-lg border bg-white">
              {faqs.map((f) => (
                // Shared `name` makes the accordion single-open natively.
                <details key={f.id} name="faq" className="group p-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                    {f.question}
                    <ChevronDown aria-hidden className="size-5 shrink-0 transition group-open:rotate-180" />
                  </summary>
                  <div className="mt-2 space-y-2 text-slate-700">
                    {f.answer.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
