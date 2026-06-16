/**
 * Tailwind configuration for Elevia Group.
 * Brand tokens live here so every component pulls from one source.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand color tokens (see brief)
        'near-black': '#1A1A1A',
        'deep-teal': '#1B6B6D',
        'warm-amber': '#D4A843',
        'warm-paper': '#FAF8F5',
        'warm-gray': '#5C5C5C',
        'soft-teal': '#E8F4F4',
        'border': '#E5E1DB',
      },
      fontFamily: {
        // Display and headings
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        // Running body copy
        body: ['var(--font-newsreader)', 'Georgia', 'serif'],
        // Utility, labels, caps
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        // Used for the small caps section labels
        label: '0.18em',
      },
      maxWidth: {
        prose: '42rem',
      },
    },
  },
  plugins: [],
}
