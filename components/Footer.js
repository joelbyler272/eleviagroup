import Link from 'next/link'
import Wordmark from '@/components/Wordmark'
import { CONTACT_HREF, CONTACT_EMAIL, TAGLINE } from '@/lib/site'

/**
 * Footer (Near Black). Shared across every page.
 * Left: who Elevia is and how to reach it. Right: where to go next.
 * Deep Teal is avoided here because it reads poorly on the dark ground, so
 * the action uses Warm Paper and the accent work is carried by Warm Amber.
 */

const exploreLinks = [
  { label: 'Home', href: '/' },
  { label: 'The HLAO Model', href: '/hlao' },
  { label: 'Research', href: '/research' },
  { label: 'Tools', href: '/tools' },
]

const linkClass =
  'font-sans text-sm tracking-wide text-warm-paper/70 transition-colors duration-200 hover:text-warm-paper'

const headingClass =
  'font-sans text-xs font-medium uppercase tracking-label text-warm-paper/40'

export default function Footer() {
  return (
    <footer className="bg-near-black">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Who Elevia is */}
          <div className="lg:col-span-5">
            <Link href="/" aria-label="Elevia Group home">
              <Wordmark tone="light" />
            </Link>
            <p className="mt-5 max-w-sm font-body text-base leading-relaxed text-warm-paper/60">
              A Digital Transformation Advisory firm. We translate AI into
              plain language, and bridge the gap between knowing AI and putting
              it to work.
            </p>
            <p className="mt-6 font-sans text-xs font-medium uppercase tracking-label text-warm-gray">
              Human-Led, Agent-Operated
            </p>
          </div>

          {/* Where to go next */}
          <nav className="lg:col-span-3 lg:col-start-7" aria-label="Footer">
            <h2 className={headingClass}>Explore</h2>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* How to reach Elevia */}
          <div className="lg:col-span-3">
            <h2 className={headingClass}>Contact</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={CONTACT_HREF}
                  className="font-sans text-sm font-medium tracking-wide text-warm-paper transition-colors duration-200 hover:text-warm-amber"
                >
                  Start a conversation
                </a>
              </li>
              <li>
                <a href={CONTACT_HREF} className={linkClass}>
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Fine print */}
        <div className="mt-14 flex flex-col gap-3 border-t border-warm-paper/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs tracking-wide text-warm-gray">
            © 2026 Elevia Group LLC
          </p>
          <p className="font-sans text-xs tracking-wide text-warm-gray">
            {TAGLINE}
          </p>
        </div>
      </div>
    </footer>
  )
}
