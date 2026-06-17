import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import Reveal from '@/components/Reveal'
import ResearchEntry from '@/components/research/ResearchEntry'
import { themes } from '@/lib/research-sources'

export const metadata = {
  title: 'Research',
  description:
    'The evidence on AI reaching small and mid-sized businesses, and where the gaps are. A checked, running file from Elevia Group.',
  openGraph: {
    title: 'Research · Elevia Group',
    description:
      'The evidence on AI reaching small and mid-sized businesses, and where the gaps are.',
    url: 'https://eleviagroup.co/research',
    siteName: 'Elevia Group',
    type: 'website',
  },
}

export default function ResearchPage() {
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
                Research
              </p>
            </div>
            <h1 className="mt-7 font-display text-4xl font-light leading-[1.1] text-warm-paper sm:text-5xl">
              The evidence on AI reaching small and mid-sized organizations.
            </h1>
            <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-warm-paper/70">
              We track how AI actually shows up in small and mid-sized
              organizations, the kind with ten to two hundred people and little
              or no technology staff. Where the tools arrive before the guidance
              does. And awareness is rarely the problem, the translation is.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The file (warm paper) */}
      <section className="bg-warm-paper">
        <div className="mx-auto max-w-3xl px-6 py-24 sm:px-8 sm:py-28">
          {themes.map((theme, themeIndex) => (
            <div
              key={theme.id}
              className={themeIndex === 0 ? '' : 'mt-24'}
            >
              <Reveal>
                <p className="font-sans text-sm font-medium uppercase tracking-label text-deep-teal">
                  {theme.label}
                </p>
                <h2 className="mt-4 font-display text-2xl font-light leading-tight text-near-black sm:text-3xl">
                  {theme.heading}
                </h2>
              </Reveal>

              <div className="mt-10 divide-y divide-border">
                {theme.entries.map((entry, index) => (
                  <Reveal
                    key={entry.url}
                    delay={index === 0 ? 0 : 0.05}
                    className={index === 0 ? 'pb-12' : 'py-12'}
                  >
                    <ResearchEntry {...entry} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}

          {/* A note on sources */}
          <div className="mt-20 border-t border-border pt-8">
            <p className="font-body text-base leading-relaxed text-warm-gray">
              A note on sources. Every figure here was checked against the
              original report. The government and institutional sources carry the
              most weight, and where a survey was run by a company that sells the
              tools, we say so in the line beneath it. If you have seen research
              worth adding, send it along.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA (teal) */}
      <CTA />

      <Footer />
    </main>
  )
}
