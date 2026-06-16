import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import WhatWeDo from '@/components/WhatWeDo'
import HowWeWork from '@/components/HowWeWork'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

/**
 * Homepage. Sections render in the order set by the brief.
 */
export default function Home() {
  return (
    <main id="top">
      <Nav />
      <Hero />
      <Problem />
      <WhatWeDo />
      <HowWeWork />
      <CTA />
      <Footer />
    </main>
  )
}
