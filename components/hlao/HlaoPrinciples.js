import Reveal from '@/components/Reveal'

/**
 * The four principles that answer the fears business owners have about AI.
 * Dark section so it reads as a distinct chapter on the page.
 */

const principles = [
  {
    title: 'Authority, not capability',
    body: 'The question is not whether AI can do something. It is whether it should, and who decides. Every agent acts under authority a human granted.',
  },
  {
    title: 'The human ceiling',
    body: 'Agents recommend, draft, flag, and execute. The final say on anything that matters stays with your team. The system asks before it acts on what you have not pre-approved.',
  },
  {
    title: 'No middle management layer',
    body: 'Traditional companies add managers to handle complexity. This model gives agents the operational work and gives you direct oversight. Fewer layers between you and the work.',
  },
  {
    title: 'Recursive, not static',
    body: 'The system is not set and forget. It learns from every correction and exception you handle. The agents improve because you teach them by doing what you already do.',
  },
]

export default function HlaoPrinciples() {
  return (
    <section className="bg-near-black">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <p className="font-sans text-sm font-medium uppercase tracking-label text-deep-teal">
            What keeps you in control
          </p>
          <h2 className="mt-6 font-display text-3xl font-light leading-tight text-warm-paper sm:text-4xl">
            Four principles the model never breaks.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-16 gap-y-12 sm:grid-cols-2">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={(index % 2) * 0.1}>
              <div className="border-t border-warm-paper/15 pt-6">
                <h3 className="font-display text-2xl font-light text-warm-paper">
                  {principle.title}
                </h3>
                <p className="mt-4 max-w-md font-body text-base leading-relaxed text-warm-paper/70">
                  {principle.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 border-t border-warm-amber/40 pt-8">
            <p className="max-w-3xl font-display text-2xl font-light leading-snug text-warm-paper sm:text-3xl">
              And it is built to be handed off. Your team learns to run the
              system, so the know-how lives in your workflows, not in one
              person&apos;s head, and not in ours.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
