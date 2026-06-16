import Reveal from '@/components/Reveal'
import ConversationButton from '@/components/ConversationButton'

/**
 * Section 6: CTA (Deep Teal background).
 * One conversation. No pitch deck.
 */
export default function CTA() {
  return (
    <section className="bg-deep-teal">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-light leading-tight text-warm-paper sm:text-4xl">
            One conversation. No pitch deck.
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-warm-paper/80">
            Just a plain-language look at what&apos;s possible for your business.
            If it fits, we build it together.
          </p>
          <div className="mt-9">
            <ConversationButton variant="solid" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
