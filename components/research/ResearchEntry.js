import ArrowLink from '@/components/ArrowLink'

/**
 * One item in the research file.
 *
 * The headline finding leads, shown either as a large figure (stat) or a
 * pulled quote, both marked with the teal rule of evidence. The amber rule
 * below marks the Elevia read, so the firm's take never gets mistaken for the
 * reporting it sits beside.
 */
export default function ResearchEntry({
  source,
  outlet,
  date,
  region,
  title,
  url,
  stat,
  quote,
  context,
  takeaway,
}) {
  const linkLabel = outlet || source

  return (
    <article>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-xs font-medium uppercase tracking-label text-warm-gray">
        <span>{source}</span>
        <span aria-hidden="true">·</span>
        <span>{date}</span>
        {region ? (
          <>
            <span aria-hidden="true">·</span>
            <span>{region}</span>
          </>
        ) : null}
      </div>

      <h3 className="mt-4 font-display text-2xl font-light leading-snug text-near-black sm:text-3xl">
        {title}
      </h3>

      {stat ? (
        <p className="mt-6 font-display text-4xl font-light leading-none text-deep-teal sm:text-5xl">
          {stat}
        </p>
      ) : null}

      {quote ? (
        <blockquote className="mt-6 border-l-2 border-deep-teal pl-5 font-body text-xl italic leading-relaxed text-near-black">
          {quote}
        </blockquote>
      ) : null}

      {context ? (
        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-warm-gray">
          {context}
        </p>
      ) : null}

      <div className="mt-6 border-l-2 border-warm-amber pl-5">
        <p className="font-sans text-xs font-medium uppercase tracking-label text-deep-teal">
          Why it matters
        </p>
        <p className="mt-2 font-body text-base leading-relaxed text-near-black">
          {takeaway}
        </p>
      </div>

      <div className="mt-6">
        <ArrowLink href={url} external>
          Read it at {linkLabel}
        </ArrowLink>
      </div>
    </article>
  )
}
