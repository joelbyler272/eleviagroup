import Reveal from '@/components/Reveal'

const rows = [
  {
    dimension: 'Scope',
    workflow: 'One task, one trigger, one outcome.',
    aos: 'Many tasks, many agents, coordinated across the organization.',
  },
  {
    dimension: 'Learning',
    workflow: 'Stays the same until someone rewrites it.',
    aos: 'Gets smarter every time your team corrects it.',
  },
  {
    dimension: 'Capacity',
    workflow: 'Saves time on the task it automates.',
    aos: 'Compounds. A 10-person team executes like 40.',
  },
  {
    dimension: 'Ceiling',
    workflow: 'Linear. More work still means more people.',
    aos: 'Exponential. More work means more agents.',
  },
]

export default function AosVsWorkflows() {
  return (
    <section className="bg-near-black">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28">
        <Reveal className="max-w-3xl">
          <p className="font-sans text-sm font-medium uppercase tracking-label text-deep-teal">
            Why the distinction matters
          </p>
          <h2 className="mt-6 font-display text-3xl font-light leading-tight text-warm-paper sm:text-4xl">
            Automated workflows are a first step. An agentic operating system is
            the destination.
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-warm-paper/70">
            Most organizations start with workflows: if a form is submitted,
            send a notification. If a payment clears, update the ledger. That is
            useful, but it is not transformation. Transformation is when the
            system itself runs the operational side of your organization, learns
            from your corrections, and compounds over time.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="grid gap-px overflow-hidden rounded-[2px] bg-warm-paper/10 sm:grid-cols-2">
            <div className="bg-near-black px-6 py-5 sm:px-7 sm:py-6">
              <div className="flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 rounded-full bg-warm-gray"
                  aria-hidden="true"
                />
                <p className="font-sans text-sm font-medium uppercase tracking-label text-warm-paper">
                  Automated workflow
                </p>
              </div>
              <p className="mt-3 font-body text-base leading-relaxed text-warm-paper/60">
                A single trigger fires a single sequence. Useful, predictable,
                and limited to the scenario someone programmed.
              </p>
            </div>
            <div className="bg-near-black px-6 py-5 sm:px-7 sm:py-6">
              <div className="flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 rounded-full bg-warm-amber"
                  aria-hidden="true"
                />
                <p className="font-sans text-sm font-medium uppercase tracking-label text-warm-paper">
                  Agentic operating system (AOS)
                </p>
              </div>
              <p className="mt-3 font-body text-base leading-relaxed text-warm-paper/60">
                A network of agents that handles the operational work across your
                organization, learns from every correction, and grows capacity
                without adding headcount.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 space-y-6">
          {rows.map((row, index) => (
            <Reveal key={row.dimension} delay={(index % 4) * 0.05}>
              <div className="border-t border-warm-paper/15 pt-5">
                <p className="font-sans text-xs font-medium uppercase tracking-label text-warm-amber">
                  {row.dimension}
                </p>
                <div className="mt-3 grid gap-4 sm:grid-cols-2 sm:gap-8">
                  <p className="font-body text-base leading-relaxed text-warm-paper/60">
                    <span className="font-sans text-xs font-medium uppercase tracking-label text-warm-paper/40">
                      Workflow:{' '}
                    </span>
                    {row.workflow}
                  </p>
                  <p className="font-body text-base leading-relaxed text-warm-paper">
                    <span className="font-sans text-xs font-medium uppercase tracking-label text-warm-amber/70">
                      AOS:{' '}
                    </span>
                    {row.aos}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 border-t border-warm-amber/40 pt-8">
            <p className="max-w-3xl font-display text-2xl font-light leading-snug text-warm-paper sm:text-3xl">
              The question is not whether to automate. It is whether to stop at
              automation, or build something that exponentially scales the
              impact the organization creates.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
