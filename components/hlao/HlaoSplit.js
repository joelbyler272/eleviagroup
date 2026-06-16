import Reveal from '@/components/Reveal'

/**
 * The core idea of HLAO: one job splits into two. Your team keeps leadership,
 * agents take the operational work. Shown as two columns to mirror the split.
 * Teal marks the human side, amber marks the agent side.
 */

const ledItems = [
  'Setting direction',
  'Judgment calls',
  'Handling exceptions',
  'Evolving the system',
]

const operatedItems = [
  'Intake and routing',
  'Follow-up and scheduling',
  'Drafting and reporting',
  'Logging and tracking',
]

function Column({ kicker, title, body, items, dotClass }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className={`h-2.5 w-2.5 rounded-full ${dotClass}`} aria-hidden="true" />
        <p className="font-sans text-sm font-medium uppercase tracking-label text-near-black">
          {kicker}
        </p>
      </div>
      <h3 className="mt-5 font-display text-2xl font-light text-near-black">
        {title}
      </h3>
      <p className="mt-4 font-body text-lg leading-relaxed text-warm-gray">
        {body}
      </p>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-baseline gap-3 font-body text-base text-near-black"
          >
            <span
              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dotClass}`}
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function HlaoSplit() {
  return (
    <section className="bg-soft-teal">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-light leading-tight text-near-black sm:text-4xl">
            One job becomes two.
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-warm-gray">
            Every organization is both human-led and human-operated today. Your
            people make the decisions and do the work. This model splits those
            two jobs for the first time.
          </p>
        </Reveal>

        <Reveal className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          <Column
            kicker="Human-Led"
            title="Your team keeps leadership."
            body="The decisions that need a person stay with a person."
            items={ledItems}
            dotClass="bg-deep-teal"
          />
          <div className="md:border-l md:border-deep-teal/15 md:pl-16">
            <Column
              kicker="Agent-Operated"
              title="Agents take the operational work."
              body="The repetitive, time-consuming tasks that do not need judgment."
              items={operatedItems}
              dotClass="bg-warm-amber"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
