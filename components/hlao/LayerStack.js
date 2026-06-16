import Reveal from '@/components/Reveal'

/**
 * The HLAO model as a stack. You sit on top, your data sits underneath,
 * and the working layers run between them. The order matches the brand
 * language: Layer 0 at the base, Layer 6 at the ceiling. Read top to bottom,
 * nothing operates above the human layer.
 */

const layers = [
  {
    id: 'L6',
    name: 'Human Oversight',
    body: 'Your dashboard, approval queue, and escalation inbox. You see everything and approve what matters. No agent operates above this layer.',
    tone: 'human',
  },
  {
    id: 'L5',
    name: 'Recursive Learning',
    body: 'Every correction and override teaches the system. Over time, agents need less oversight because they have absorbed your judgment.',
    tone: 'work',
  },
  {
    id: 'L4',
    name: 'Memory and Context',
    body: 'What happened, who approved what, what is pending. The system remembers, so it gets sharper instead of starting from zero.',
    tone: 'work',
  },
  {
    id: 'L3',
    name: 'Orchestration',
    body: 'The coordination layer. It makes sure the right agent handles the right task at the right time.',
    tone: 'work',
  },
  {
    id: 'L2',
    name: 'Judgment Agents',
    body: 'AI agents that read, draft, classify, and recommend. They handle work that needs context, always inside the boundaries you set.',
    tone: 'work',
  },
  {
    id: 'L1',
    name: 'Rule Agents',
    body: 'Agents that follow exact rules. If X happens, do Y. No judgment, no AI. Routing, formatting, triggering, logging.',
    tone: 'work',
  },
  {
    id: 'L0',
    name: 'Data Foundation',
    body: 'Where your information lives. A connected layer that agents read from and write to. Invisible, and load-bearing.',
    tone: 'foundation',
  },
]

const toneStyles = {
  human: {
    row: 'bg-deep-teal',
    id: 'text-warm-paper/70',
    name: 'text-warm-paper',
    body: 'text-warm-paper/80',
  },
  work: {
    row: 'bg-warm-paper border border-border',
    id: 'text-warm-amber',
    name: 'text-near-black',
    body: 'text-warm-gray',
  },
  foundation: {
    row: 'bg-near-black',
    id: 'text-warm-paper/60',
    name: 'text-warm-paper',
    body: 'text-warm-paper/70',
  },
}

export default function LayerStack() {
  return (
    <div>
      <p className="mb-6 font-sans text-sm font-medium uppercase tracking-label text-warm-gray">
        You on top. Your data underneath. The work in between.
      </p>

      <Reveal className="flex flex-col gap-1.5">
        {layers.map((layer) => {
          const s = toneStyles[layer.tone]
          return (
            <div
              key={layer.id}
              className={`flex flex-col gap-2 rounded-[2px] px-5 py-5 sm:flex-row sm:items-baseline sm:gap-6 sm:px-7 sm:py-6 ${s.row}`}
            >
              <span
                className={`font-sans text-xs font-medium tracking-label ${s.id} sm:w-10 sm:shrink-0`}
              >
                {layer.id}
              </span>
              <div className="sm:flex-1">
                <h3 className={`font-display text-xl font-light ${s.name}`}>
                  {layer.name}
                </h3>
                <p
                  className={`mt-2 max-w-2xl font-body text-base leading-relaxed ${s.body}`}
                >
                  {layer.body}
                </p>
              </div>
            </div>
          )
        })}
      </Reveal>
    </div>
  )
}
