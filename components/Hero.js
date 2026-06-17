'use client'

import { motion, useReducedMotion } from 'framer-motion'
import ConversationButton from '@/components/ConversationButton'

/**
 * Section 2: Hero (dark, Near Black background).
 * Subtle fade-in on load. The children rise in sequence, nothing else.
 * No parallax, no gimmicks.
 */

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-near-black">
      <motion.div
        className="mx-auto max-w-6xl px-6 py-28 sm:px-8 sm:py-36 lg:py-44"
        variants={container}
        initial={reduce ? false : 'hidden'}
        animate="show"
      >
        <motion.div variants={item} className="flex items-center gap-4">
          <span className="h-px w-10 bg-warm-amber" aria-hidden="true" />
          <p className="font-sans text-sm font-medium uppercase tracking-label text-deep-teal">
            Elevia Group
          </p>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-7 max-w-5xl font-display text-4xl font-light leading-[1.08] text-warm-paper sm:text-5xl lg:text-6xl"
        >
          Most organizations know AI matters.{' '}
          <br />
          Almost none have made it work.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-warm-paper/70"
        >
          The gap is not a technology problem, it is a translation problem. We
          tell you plainly what is worth doing and what is safe, then build the
          systems that put it to work.
        </motion.p>

        <motion.div variants={item} className="mt-10">
          <ConversationButton variant="outline" />
        </motion.div>
      </motion.div>
    </section>
  )
}
