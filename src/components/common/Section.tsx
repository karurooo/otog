import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  intro?: string
  tone?: 'light' | 'band' | 'dark'
  children: ReactNode
}

const TONES = {
  light: 'bg-white text-slate-900',
  band: 'bg-band text-slate-900',
  dark: 'bg-gov-bar text-white',
}

export function Section({ id, eyebrow, title, intro, tone = 'light', children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`${TONES[tone]} py-16`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-accent text-[13px] font-semibold tracking-[0.2em] uppercase">{eyebrow}</p>
        <h2 id={`${id}-title`} className="font-display mt-2 text-4xl font-bold sm:text-5xl">
          {title}
        </h2>
        {intro && <p className="mt-3 max-w-2xl opacity-80">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
