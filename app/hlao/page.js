import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import Reveal from '@/components/Reveal'
import LayerStack from '@/components/hlao/LayerStack'
import HlaoSplit from '@/components/hlao/HlaoSplit'
import AosVsWorkflows from '@/components/hlao/AosVsWorkflows'
import HlaoPrinciples from '@/components/hlao/HlaoPrinciples'
import HlaoQuestions from '@/components/hlao/HlaoQuestions'

export const metadata = {
  title: 'The HLAO Model',
  description:
    'Human-Led, Agent-Operated. Your team leads, agents handle the operational work, and nothing changes hands without your say. The seven layers, in plain language.',
  openGraph: {
    title: 'The HLAO Model · Elevia Group',
    description:
      'Your team leads, agents handle the operational work, and nothing changes hands without your say.',
    url: 'https://eleviagroup.co/hlao',
    siteName: 'Elevia Group',
    type: 'article',
  },
}

export default function HlaoPage() {
  return (
    <main id="top">
      <Nav />

      {/* Page intro (dark) */}
      <section className="bg-near-black">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-warm-amber" aria-hidden="true" />
              <p className="font-sans text-sm font-medium uppercase tracking-label text-deep-teal">
                The HLAO Model
              </p>
            </div>
            <h1 className="mt-7 font-display text-4xl font-light leading-[1.1] text-warm-paper sm:text-5xl">
              Human-Led, Agent-Operated
            </h1>
            <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-warm-paper/70">
              Organizations have always been human-led, and that will not change.
              What changes is who operates them. For the first time, the daily
              work of running the place does not have to land on people, it can
              land on agents.
            </p>
          </Reveal>
        </div>
      </section>

      {/* One job becomes two (soft teal) */}
      <HlaoSplit />

      {/* AOS vs automated workflows (warm paper) */}
      <AosVsWorkflows />

      {/* The seven layers (warm paper) */}
      <section className="bg-warm-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28">
          <Reveal className="max-w-2xl">
            <p className="font-sans text-sm font-medium uppercase tracking-label text-deep-teal">
              The architecture
            </p>
            <h2 className="mt-6 font-display text-3xl font-light leading-tight text-near-black sm:text-4xl">
              The model has seven layers, from your data to your dashboard.
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-warm-gray">
              Each layer does one job. Together they let agents run the
              operational work while you stay on top of it.
            </p>
          </Reveal>

          <div className="mt-14">
            <LayerStack />
          </div>
        </div>
      </section>

      {/* Principles (dark) */}
      <HlaoPrinciples />

      {/* Common questions (warm paper) */}
      <HlaoQuestions />

      {/* Closing CTA (teal) */}
      <CTA />

      <Footer />
    </main>
  )
}
