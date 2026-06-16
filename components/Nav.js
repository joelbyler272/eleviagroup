import Link from 'next/link'
import Wordmark from '@/components/Wordmark'
import { CONTACT_HREF } from '@/lib/site'

/**
 * Section 1: Nav.
 * Wordmark left. A link to the HLAO model and the one call to action on the right.
 * Clean, no hamburger on desktop. Sits on Warm Paper so the Deep Teal action
 * stays legible above the dark hero.
 */
export default function Nav() {
  return (
    <header className="bg-warm-paper">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-8">
        <Link href="/" aria-label="Elevia Group home">
          <Wordmark tone="dark" />
        </Link>

        <div className="flex items-center gap-6 sm:gap-7">
          <Link
            href="/hlao"
            className="hidden font-sans text-sm font-medium tracking-wide text-warm-gray transition-colors duration-200 hover:text-near-black sm:inline"
          >
            The HLAO model
          </Link>
          <Link
            href="/research"
            className="hidden font-sans text-sm font-medium tracking-wide text-warm-gray transition-colors duration-200 hover:text-near-black sm:inline"
          >
            Research
          </Link>
          <Link
            href="/tools"
            className="hidden font-sans text-sm font-medium tracking-wide text-warm-gray transition-colors duration-200 hover:text-near-black sm:inline"
          >
            Tools
          </Link>
          <a
            href={CONTACT_HREF}
            className="font-sans text-sm font-medium tracking-wide text-deep-teal transition-opacity duration-200 hover:opacity-70"
          >
            Start a conversation
          </a>
        </div>
      </nav>
    </header>
  )
}
