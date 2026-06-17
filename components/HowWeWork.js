import Reveal from '@/components/Reveal'

/**
 * Section 5: How It Works (Near Black background).
 * A left rail holds the heading. The three steps run down the right as a
 * numbered sequence joined by a thin amber line, so it reads as a path
 * rather than three equal columns.
 */

const steps = [
  {
    number: '01',
    title: 'Assessment',
    body: 'A clear look at where your organization is today, which tools are worth it, and which are safe to trust.',
  },
  {
    number: '02',
    title: 'Build',
    body: 'We design and build your Roadmap and HLAO operating model. Agents go to work. Your team gets time back.',
  },
  {
    number: '03',
    title: 'Oversight',
    body: 'We stay close. Monthly check-ins, continuous refinement, ongoing accountability.',
  },
]

export default function HowWeWork() {
  return (
    <section className="bg-near-black">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-8 sm:py-28 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="font-sans text-sm font-medium uppercase tracking-label text-deep-teal">
            How It Works
          </p>
          <h2 className="mt-6 font-display text-3xl font-light leading-tight text-warm-paper sm:text-4xl">
            Three steps, and no guesswork along the way.
          </h2>
        </Reveal>

        <div className="lg:col-span-7 lg:col-start-6">
          <ol className="relative">
            {/* The amber line that joins the steps */}
            <span
              className="absolute left-[7px] top-2 bottom-2 w-px bg-warm-amber/40 sm:left-2"
              aria-hidden="true"
            />
            {steps.map((step, index) => (
              <li key={step.number} className="relative pl-10 sm:pl-12">
                <Reveal
                  delay={index * 0.1}
                  className={index === 0 ? '' : 'mt-12'}
                >
                  {/* Node on the line */}
                  <span
                    className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-warm-amber bg-near-black sm:left-0"
                    aria-hidden="true"
                  />
                  <span className="font-sans text-sm font-medium tracking-wide text-warm-amber">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-light text-warm-paper">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xl font-body text-base leading-relaxed text-warm-paper/70">
                    {step.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
