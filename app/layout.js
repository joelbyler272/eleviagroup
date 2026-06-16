import { Fraunces, Newsreader, Inter } from 'next/font/google'
import { SITE_URL, TAGLINE } from '@/lib/site'
import './globals.css'

/**
 * Brand typefaces, loaded through next/font for self-hosting and zero layout shift.
 * Only the weights the brand uses are requested, which keeps the payload small.
 */

// Display and headings: Fraunces Light 300, with a 300 italic for editorial accents.
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

// Body copy: Newsreader Regular 400.
// Newsreader has no metric override data in next/font, so the automatic
// fallback adjustment is turned off and an explicit serif fallback is set.
const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
  adjustFontFallback: false,
})

// Utility, labels, caps: Inter Medium 500.
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Elevia Group',
    template: '%s · Elevia Group',
  },
  description:
    'Elevia Group translates AI into plain language, then builds the operating model that puts it to work inside your business.',
  keywords: [
    'digital transformation advisory',
    'AI operating model',
    'Human-Led, Agent-Operated',
    'HLAO',
    'small business AI',
  ],
  openGraph: {
    title: 'Elevia Group',
    description:
      'Translation. Transformation. We translate AI into plain language, then build the operating model that puts it to work.',
    url: SITE_URL,
    siteName: 'Elevia Group',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elevia Group',
    description: TAGLINE,
  },
}

export const viewport = {
  themeColor: '#1A1A1A',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${newsreader.variable} ${inter.variable}`}
    >
      <body className="bg-warm-paper font-body text-near-black antialiased">
        {children}
      </body>
    </html>
  )
}
