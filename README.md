# Elevia Group

Marketing website for Elevia Group, a Digital Transformation Advisory firm.

**Translation. Transformation.**

## Stack

- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- Deployed on Vercel

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.js        Fonts, metadata, root shell
  page.js          Homepage, composes the sections in order
  hlao/page.js     The HLAO model page
  globals.css      Tailwind layers and base styles
  icon.svg         Favicon: the E. monogram
components/
  Nav.js           Wordmark, HLAO link, and the one call to action
  Hero.js          Dark hero, fade-in on load
  Problem.js       The Gap, editorial two-column layout
  WhatWeDo.js      Translation. Transformation. plus the HLAO teaser
  HowWeWork.js     Three steps as a numbered sequence
  CTA.js           Closing call to action
  Footer.js        Wordmark and tagline
  Wordmark.js      "Elevia." with the teal period
  ConversationButton.js   Shared "Start a conversation" button
  ArrowLink.js     Inline text link with a trailing arrow
  Reveal.js        Scroll-triggered fade-up wrapper
  hlao/
    HlaoSplit.js       Human-Led and Agent-Operated, side by side
    LayerStack.js      The seven layers, as a stacked diagram
    HlaoPrinciples.js  Four principles
    HlaoQuestions.js   Common questions
lib/
  site.js          Contact address, site URL, tagline
tailwind.config.js Brand color and font tokens
```

## Pages

- `/` Homepage
- `/hlao` The HLAO model, explained in full, with the seven-layer diagram

The homepage links to the HLAO page from the nav and from the framework card.

## Brand tokens

Colors and fonts live in `tailwind.config.js`. Components pull from those tokens, so brand changes happen in one place.

| Token | Hex |
|---|---|
| near-black | #1A1A1A |
| deep-teal | #1B6B6D |
| warm-amber | #D4A843 |
| warm-paper | #FAF8F5 |
| warm-gray | #5C5C5C |
| soft-teal | #E8F4F4 |
| border | #E5E1DB |

Fonts (Google Fonts, loaded through `next/font`):

- Display and headings: Fraunces Light 300
- Body: Newsreader Regular 400
- Utility, labels, caps: Inter Medium 500

## Before launch

Set the real contact address in `lib/site.js`. Every "Start a conversation"
button reads `CONTACT_HREF` from that file. It currently points to
`mailto:hello@eleviagroup.co`. Swap it for the real inbox or a booking link.

## Animation

Framer Motion only. Fade-up on section entry, hero fade-in on load. Nothing
else. The restraint is the point.

## Voice and copy rules

When editing copy, keep to the house style:

- No em dashes anywhere in the code or copy
- No exclamation marks
- No buzzwords (no "leverage," "utilize," "scalable," "robust," "AI-powered,"
  "solution")
- Short sentences. Active voice. Specific over vague.

## Deploy to Vercel

Push to a Git repository and import it at vercel.com, or run:

```bash
npx vercel
```

No environment variables are required for this build.
