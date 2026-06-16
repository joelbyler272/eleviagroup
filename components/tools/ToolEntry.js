/**
 * One tool in the list. The name links out to the tool so a leader can check
 * the current price. Teal carries the price, amber marks the honest caution.
 */
export default function ToolEntry({
  name,
  category,
  what,
  price,
  url,
  why,
  example,
  watchOut,
}) {
  return (
    <article>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-2xl font-light text-near-black">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 transition-colors duration-200 hover:text-deep-teal"
          >
            {name}
            <span aria-hidden="true" className="text-base text-warm-amber">
              ↗
            </span>
          </a>
        </h3>
        <span className="font-sans text-xs font-medium uppercase tracking-label text-warm-gray">
          {category}
        </span>
      </div>

      <p className="mt-2 font-body text-base leading-relaxed text-warm-gray">
        {what}
      </p>

      <p className="mt-3 font-sans text-sm font-medium tracking-wide text-deep-teal">
        {price}
      </p>

      <p className="mt-5 font-body text-base leading-relaxed text-near-black">
        {why}
      </p>

      {example ? (
        <p className="mt-3 font-body text-sm italic leading-relaxed text-warm-gray">
          In practice: {example}
        </p>
      ) : null}

      <div className="mt-5 border-l-2 border-warm-amber pl-4">
        <p className="font-sans text-xs font-medium uppercase tracking-label text-deep-teal">
          Watch out for
        </p>
        <p className="mt-1 font-body text-sm leading-relaxed text-near-black">
          {watchOut}
        </p>
      </div>
    </article>
  )
}
