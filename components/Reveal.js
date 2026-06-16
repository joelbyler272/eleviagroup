'use client'

import { motion, useReducedMotion } from 'framer-motion'

/**
 * Scroll-triggered fade-up. Wraps any section content.
 * Runs once, when the element enters the viewport. Restraint is the point,
 * so the motion is small: a short rise and a gentle ease.
 *
 * When a visitor prefers reduced motion, the content renders in place with
 * no animation, so nothing is ever hidden behind an effect.
 */
export default function Reveal({ children, className, delay = 0, as = 'div' }) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  )
}
