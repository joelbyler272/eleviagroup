import Reveal from '@/components/Reveal'
import ArrowLink from '@/components/ArrowLink'

/**
 * Section 3: The Gap (Warm Paper background).
 * Editorial split: the label and headline sit in a left rail, the argument
 * runs in a wider right column. The barrier is translation, and the evidence
 * is now on the page to back it.
 */
export default function Problem() {
  return (
    <section className="bg-warm-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="mb-6 h-px w-10 bg-warm-amber" aria-hidden="true" />
            <p className="font-sans text-sm font-medium uppercase tracking-label text-deep-teal">
              The Gap
            </p>
            <h2 className="mt-6 font-display text-3xl font-light leading-tight text-near-black sm:text-4xl">
              The barrier to AI isn&apos;t awareness. It&apos;s translation.
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="font-body text-xl leading-relaxed text-near-black">
              Most organizational leaders have already tried AI. But they
              do not have technical support to call, a roadmap to follow, or
              a plain-language read on what any of it means.
            </p>
            <p className="mt-5 font-body text-lg leading-relaxed text-warm-gray">
              So the tools sit half-used, and the organization stays stuck. That
              gap, between owning a tool and running on it, is where
              organizations get left behind.
            </p>

            {/* Evidence, drawn from the research file */}
            <div className="mt-8 border-t border-border pt-6">
              <p className="font-display text-3xl font-light leading-none text-deep-teal sm:text-4xl">
                76% use AI. 14% run on it.
              </p>
              <p className="mt-3 font-body text-base text-warm-gray">
                Goldman Sachs survey of small business owners, 2026.
              </p>
              <div className="mt-5">
                <ArrowLink href="/research">See the evidence</ArrowLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
