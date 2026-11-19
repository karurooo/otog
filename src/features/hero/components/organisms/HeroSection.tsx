import { siteStatsFixture } from '../../data/siteStats'
import { HeroCtaGroup } from '../molecules/HeroCtaGroup'

export function HeroSection() {
  const s = siteStatsFixture.data
  const stats = [
    { value: s.athletes_count, label: 'Registered athletes' },
    { value: s.programs_count, label: 'Active programs' },
    { value: s.facilities_count, label: 'City sports facilities' },
    { value: s.medals_count, label: s.medals_year ? `Medals won in ${s.medals_year}` : 'Medals won' },
  ]
  return (
    <section id="home" aria-labelledby="home-title">
      <div className="bg-gov-bar text-white">
        <div className="mx-auto max-w-7xl px-4 pt-20 pb-32 sm:px-6 lg:px-8">
          <h1 id="home-title" className="font-display text-5xl font-bold uppercase sm:text-7xl">
            Every Butuanon,
            <br />
            in the game.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">
            Sports programs, events and city facilities for athletes of every age, from barangay courts to the national
            stage.
          </p>
          <HeroCtaGroup />
        </div>
      </div>
      <dl className="mx-auto -mt-16 grid max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg bg-white p-5 shadow-md">
            <dt className="text-sm text-slate-600">{stat.label}</dt>
            <dd className="font-display text-primary text-4xl font-bold">{stat.value.toLocaleString('en-PH')}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
