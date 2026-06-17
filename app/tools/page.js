import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import Reveal from '@/components/Reveal'
import ToolEntry from '@/components/tools/ToolEntry'
import { PULLED, startHere, jobs, discounts, caveats } from '@/lib/tools'

export const metadata = {
  title: 'Tools',
  description:
    'A short, honest list of the AI tools worth a leader’s time in 2026. Hard prices, real cautions, and no money taken from any maker.',
  openGraph: {
    title: 'Tools · Elevia Group',
    description:
      'The AI tools worth a leader’s time in 2026. Hard prices, real cautions, no affiliate money.',
    url: 'https://eleviagroup.co/tools',
    siteName: 'Elevia Group',
    type: 'website',
  },
}

export default function ToolsPage() {
  return (
    <main id="top">
      <Nav />

      {/* Intro (dark) */}
      <section className="bg-near-black">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-warm-amber" aria-hidden="true" />
              <p className="font-sans text-sm font-medium uppercase tracking-label text-deep-teal">
                Tools
              </p>
            </div>
            <h1 className="mt-7 font-display text-4xl font-light leading-[1.1] text-warm-paper sm:text-5xl">
              The AI tools worth a leader’s time.
            </h1>
            <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-warm-paper/70">
              A short, working list for non-technical leaders. Every tool here is
              available now, costs under 50 dollars a month per person, and earns
              its place by saving real time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Start here and the list (warm paper) */}
      <section className="bg-warm-paper">
        <div className="mx-auto max-w-3xl px-6 py-24 sm:px-8 sm:py-28">
          <Reveal>
            <div className="rounded-lg border border-soft-teal bg-soft-teal p-8 sm:p-10">
              <p className="font-sans text-xs font-medium uppercase tracking-label text-deep-teal">
                The highest-return move
              </p>
              <p className="mt-4 font-display text-2xl font-light leading-snug text-deep-teal">
                {startHere.title}
              </p>
              <p className="mt-4 font-body text-base leading-relaxed text-near-black/80">
                {startHere.body}
              </p>
            </div>
          </Reveal>

          {jobs.map((job) => (
            <div key={job.id} className="mt-20">
              <Reveal>
                <p className="font-sans text-sm font-medium uppercase tracking-label text-deep-teal">
                  {job.label}
                </p>
                <h2 className="mt-4 font-display text-2xl font-light leading-tight text-near-black sm:text-3xl">
                  {job.heading}
                </h2>
              </Reveal>

              <div className="mt-10 divide-y divide-border">
                {job.tools.map((tool, index) => (
                  <Reveal
                    key={tool.name}
                    delay={index === 0 ? 0 : 0.05}
                    className={index === 0 ? 'pb-12' : 'py-12'}
                  >
                    <ToolEntry {...tool} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Discounts (soft teal) */}
      <section className="bg-soft-teal">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <p className="font-sans text-sm font-medium uppercase tracking-label text-deep-teal">
              For nonprofits
            </p>
            <h2 className="mt-4 font-display text-2xl font-light leading-tight text-near-black sm:text-3xl">
              Claim what you are owed.
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-warm-gray">
              Several of these cost far less, or nothing, if you run a nonprofit.
              Verify eligibility on each program before you count on it.
            </p>
          </Reveal>

          <dl className="mt-10 divide-y divide-deep-teal/15 border-t border-deep-teal/15">
            {discounts.map((item) => (
              <Reveal key={item.name}>
                <div className="grid gap-2 py-6 sm:grid-cols-12 sm:gap-6">
                  <dt className="font-display text-lg font-light text-near-black sm:col-span-4">
                    {item.name}
                  </dt>
                  <dd className="font-body text-base leading-relaxed text-warm-gray sm:col-span-8">
                    {item.detail}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* How to read this (warm paper) */}
      <section className="bg-warm-paper">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="font-display text-2xl font-light leading-tight text-near-black sm:text-3xl">
              How to read this list.
            </h2>
          </Reveal>
          <ul className="mt-8 space-y-5">
            {caveats.map((caveat, index) => (
              <Reveal key={index} as="li" delay={(index % 3) * 0.05}>
                <div className="border-l-2 border-border pl-5 font-body text-base leading-relaxed text-warm-gray">
                  {caveat}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* The thesis (dark) */}
      <section className="bg-near-black">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-3xl font-light leading-tight text-warm-paper sm:text-4xl">
              A list of tools is not a system.
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-warm-paper/70">
              These get you hours back. They do not, on their own, change how the
              organization runs. A drawer of good tools is still a drawer of tools.
              Turning them into an operating model, where the right work happens
              without you touching it, is the rest of what we do.
            </p>
            <div className="mt-8">
              <Link
                href="/hlao"
                className="group inline-flex items-center gap-2 font-sans text-sm font-medium tracking-wide text-warm-paper transition-colors duration-200 hover:text-warm-amber"
              >
                See the model
                <span
                  aria-hidden="true"
                  className="text-warm-amber transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA (teal) */}
      <CTA />

      <Footer />
    </main>
  )
}
