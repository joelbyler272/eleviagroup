/**
 * The Elevia wordmark: "Elevia." set in Fraunces Light 300.
 * The period is Deep Teal. No icon, just the wordmark.
 *
 * `tone` switches the letters for light or dark backgrounds.
 * The period stays teal in both.
 */
export default function Wordmark({ tone = 'dark', className = '' }) {
  const letters = tone === 'light' ? 'text-warm-paper' : 'text-near-black'

  return (
    <span
      className={`font-display text-2xl font-light tracking-tight ${letters} ${className}`}
    >
      Elevia<span className="text-deep-teal">.</span>
    </span>
  )
}
