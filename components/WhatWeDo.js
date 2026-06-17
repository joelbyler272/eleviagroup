import Reveal from '@/components/Reveal'
import ArrowLink from '@/components/ArrowLink'

/**
 * Section 4: What We Do (Warm Paper, two columns on desktop).
 * Left column states the work. Right column is the HLAO teaser card, which
 * links to the dedicated HLAO page where the model is explained in full.
 */
export default function WhatWeDo() {
  return (
    <section className="border-t border-border bg-warm-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-sans text-sm font-medium uppercase tracking-label text-deep-teal">
            What We Do
          </p>
          <h2 className="mt-6 font-display text-3xl font-light leading-tight text-near-black sm:text-4xl">
            Translation. <span className="italic">Transformation.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:pt-2">
            <p className="max-w-md font-body text-lg leading-relaxed text-warm-gray">
              We translate AI into plain language and clear decisions. Then we
              build the roadmap and operating model that puts it to work inside
              your organization.
            </p>
          </Reveal>

          {/* HLAO teaser. The full model lives on its own page. */}
          <Reveal delay={0.1}>
            <div className="rounded-lg border border-soft-teal bg-soft-teal p-8 sm:p-10">
              <p className="font-sans text-xs font-medium uppercase tracking-label text-deep-teal">
                The framework
              </p>
              <p className="mt-4 font-display text-2xl font-light leading-snug text-deep-teal">
                Human-Led, Agent-Operated.
              </p>
              <p className="mt-4 font-body text-base leading-relaxed text-near-black/80">
                Your team leads. Agents handle the operational work. Nothing
                changes hands without your say.
              </p>
              <div className="mt-6">
                <ArrowLink href="/hlao">See how the model works</ArrowLink>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
