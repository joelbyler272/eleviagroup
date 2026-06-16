import Reveal from '@/components/Reveal'

/**
 * The questions every owner asks. Plain answers, no hedging.
 */

const questions = [
  {
    q: 'What if the agent makes a mistake?',
    a: 'It will, and that is built into the model. High-stakes work goes through an approval step. When a mistake happens, the system learns from your correction, so mistakes drop over time.',
  },
  {
    q: 'Will this replace my people?',
    a: 'No. It takes the parts of the job they would rather not do. Your people get time back for the work that needs a human: relationships, judgment calls, exceptions, customers.',
  },
  {
    q: 'I do not understand AI.',
    a: 'You do not need to. You understand your business, and that is what matters. You work with a dashboard, not code. You approve, flag, and decide, the same things you do today.',
  },
  {
    q: 'What happens if you leave?',
    a: 'The system runs on your infrastructure, your data, and tools you own. Nothing lives on our servers, and the playbook documents everything. You are never locked in.',
  },
]

export default function HlaoQuestions() {
  return (
    <section className="bg-warm-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <p className="font-sans text-sm font-medium uppercase tracking-label text-deep-teal">
            Common questions
          </p>
          <h2 className="mt-6 font-display text-3xl font-light leading-tight text-near-black sm:text-4xl">
            The things owners ask first.
          </h2>
        </Reveal>

        <dl className="mt-14 divide-y divide-border border-t border-border">
          {questions.map((item, index) => (
            <Reveal key={item.q} delay={(index % 2) * 0.08}>
              <div className="grid gap-3 py-8 lg:grid-cols-12 lg:gap-10">
                <dt className="font-display text-xl font-light text-near-black lg:col-span-5">
                  {item.q}
                </dt>
                <dd className="font-body text-base leading-relaxed text-warm-gray lg:col-span-7">
                  {item.a}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
