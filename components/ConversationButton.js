import { CONTACT_HREF } from '@/lib/site'

/**
 * The one call to action used across the site: "Start a conversation".
 *
 * variant "outline" sits on dark backgrounds (Warm Paper border and text).
 * variant "solid" sits on the teal CTA band (Warm Paper fill, Near Black text).
 */
export default function ConversationButton({
  variant = 'outline',
  label = 'Start a conversation',
  className = '',
}) {
  const base =
    'inline-flex items-center justify-center font-sans text-sm font-medium tracking-wide ' +
    'px-7 py-3.5 rounded-[2px] transition-colors duration-200 ' +
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

  const variants = {
    outline:
      'border border-warm-paper text-warm-paper hover:bg-warm-paper hover:text-near-black ' +
      'focus-visible:ring-warm-paper focus-visible:ring-offset-near-black',
    solid:
      'bg-warm-paper text-near-black hover:bg-soft-teal ' +
      'focus-visible:ring-warm-paper focus-visible:ring-offset-deep-teal',
  }

  return (
    <a href={CONTACT_HREF} className={`${base} ${variants[variant]} ${className}`}>
      {label}
    </a>
  )
}
