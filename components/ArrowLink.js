import Link from 'next/link'

/**
 * Inline text link with a trailing arrow. Points from one page to another,
 * or out to a source. Internal links use a right arrow and client routing.
 * External links use a diagonal arrow and open in a new tab.
 */
export default function ArrowLink({ href, children, className = '', external }) {
  const isExternal = external ?? /^https?:\/\//.test(href)

  const classes = `group inline-flex items-center gap-2 font-sans text-sm font-medium tracking-wide text-deep-teal ${className}`

  const arrow = (
    <span
      aria-hidden="true"
      className="text-warm-amber transition-transform duration-200 group-hover:translate-x-1"
    >
      {isExternal ? '↗' : '→'}
    </span>
  )

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {arrow}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {arrow}
    </Link>
  )
}
