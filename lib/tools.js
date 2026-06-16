/**
 * The tools file: a short, working list for non-technical leaders.
 *
 * Rules for this list:
 *   - Elevia takes no money from any tool here. Placement is earned by saving
 *     real time, not paid for.
 *   - Prices are hard numbers, pulled on the date below. They move fast, so
 *     every tool name links out to its own pricing page.
 *   - Each entry carries an honest "watch out for", because the cautions are
 *     the point.
 *
 * Every non-price claim here was checked against the source before publishing.
 */

export const PULLED = 'June 2026'

export const startHere = {
  title: 'Start here, in week one.',
  body: 'Pick one general assistant, ChatGPT or Claude, and commit to it for daily work for a week before you judge it. Add one meeting notetaker: Granola if you will pay 14 dollars a month for the smoothest experience, Fathom if you want to spend nothing. That pair is the highest-return move on this list, at 20 to 34 dollars a month.',
}

export const jobs = [
  {
    id: 'think',
    label: 'Think',
    heading: 'The thinking work that used to eat your evenings.',
    tools: [
      {
        name: 'ChatGPT',
        category: 'General assistant',
        what: 'Drafts, analyzes, summarizes, and reasons through almost any text or data task.',
        price: 'Free tier; Plus $20/month; Business $20/seat/month.',
        url: 'https://chatgpt.com',
        why: 'The one to start with if you start with nothing. Paste in a messy board email thread and get a one-page summary with decisions and open questions, then turn it into a draft reply in your own voice. The paid plan pays for itself the first week you use it daily.',
        example:
          'A nonprofit director uploads three years of program data and asks for the trend worth putting in front of the board.',
        watchOut:
          'It states wrong facts with full confidence. Check any number, name, or citation before it leaves your desk.',
      },
      {
        name: 'Claude',
        category: 'General assistant',
        what: 'A thinking and writing partner known for long-document work and clear prose.',
        price: 'Free tier; Pro $20/month ($17 annual); Team $25/seat/month.',
        url: 'https://claude.com',
        why: 'Reach for it when the input is long or the writing matters. Drop in a 40-page grant guideline or a full contract and ask what changed, what is risky, and what to ask about. Many leaders find its drafts need less editing, which is the whole point when you write to donors, staff, or a board.',
        example:
          'A COO pastes a draft employee handbook and asks Claude to flag policies that contradict each other.',
        watchOut:
          'It can be cautious to a fault and will sometimes over-qualify a reasonable request, and like all of these it can still get facts wrong.',
      },
    ],
  },
  {
    id: 'meet',
    label: 'Meet',
    heading: 'A clean record of every meeting, without the effort.',
    tools: [
      {
        name: 'Granola',
        category: 'Meeting notes',
        what: 'Transcribes the meeting from your laptop without joining as a bot, then cleans up your rough notes.',
        price: 'Free (about 25 meetings); Business $14/user/month; Enterprise $35/user/month.',
        url: 'https://www.granola.ai',
        why: 'It fixes the quiet problem of executive meetings: you cannot be present and take good notes at once. Because it captures audio from your laptop instead of sending a bot into the call, nothing announces itself in a sensitive board or donor conversation. You jot a few words, and the summary is ready in seconds.',
        example:
          'A CEO records an in-person partnership negotiation and gets a shareable summary before the elevator ride down.',
        watchOut:
          'It keeps text, not audio, so you cannot replay what was said. There is no Android app yet, and the free-tier limits have been changing, so confirm them when you sign up.',
      },
      {
        name: 'Fathom',
        category: 'Meeting notes, the free option',
        what: 'Records, transcribes, and summarizes Zoom, Meet, and Teams calls, with a free plan that does not expire.',
        price: 'Free, no expiry; Premium around $19/month; Team from $15/user/month.',
        url: 'https://www.fathom.video',
        why: 'If budget is the deciding factor, this is the most generous free meeting tool available, and it holds a 5.0 rating across more than 6,500 reviews on G2. You get unlimited recordings and searchable transcripts at no cost, which is plenty for a leader who just wants a record of what was said. Pick this or Granola, not both.',
        example:
          'A development director reviews a recorded funder call and pulls the exact phrasing the funder used.',
        watchOut:
          'Advanced summaries are capped at about five a month on the free plan once the trial ends, and it has historically joined calls as a visible bot that guests can see.',
      },
      {
        name: 'Plaud Note',
        category: 'Voice capture, hardware',
        what: 'A credit-card-sized recorder that captures in-person talks and phone calls, then transcribes and summarizes them.',
        price: 'Device around $159; free plan 300 minutes/month; Pro $99.99/year; Unlimited $239.99/year.',
        url: 'https://www.plaud.ai',
        why: 'So much of a leader’s real work happens away from the screen, in hallway conversations and one-on-one coffees where no meeting bot can follow. Set it on the table and stay in the conversation. It earns its keep for people whose day is not spent on video calls.',
        example:
          'An executive director records a 90-minute in-person major-donor meeting and has a summary with next steps before getting back to the office.',
        watchOut:
          'Recording people carries legal and trust obligations, so get consent. It processes in the cloud, not on the device, so it needs a connection.',
      },
    ],
  },
  {
    id: 'research',
    label: 'Research',
    heading: 'Fast answers you can check.',
    tools: [
      {
        name: 'Perplexity',
        category: 'Research and synthesis',
        what: 'An answer engine that searches the live web and gives a written answer with its sources cited.',
        price: 'Free (about five advanced searches/day); Pro $20/month ($16.67 annual).',
        url: 'https://www.perplexity.ai',
        why: 'When you need to understand something fast and want to see where the answer came from, this beats both a search engine and a plain chatbot. Brief yourself on a new regulation or a prospective board member and get a sourced summary you can act on. The citations let you check the work instead of trusting a black box.',
        example:
          'A CEO researching a new market asks for the competitive landscape and clicks through to the underlying reports.',
        watchOut:
          'A 2025 Columbia study found it cited sources incorrectly about 37 percent of the time, the best of eight engines tested but still more than one in three. Treat it as a fast start and verify anything important against the sources it gives you.',
      },
      {
        name: 'NotebookLM',
        category: 'Research on your own documents',
        what: 'A Google tool that answers questions grounded only in the documents you give it, with citations back to your sources.',
        price: 'Free; higher limits via Google AI Plus $7.99/month or AI Pro $19.99/month.',
        url: 'https://notebooklm.google',
        why: 'This is the tool for board prep and for making sense of your own pile of documents. Upload the last four quarterly reports, the strategic plan, and the bylaws, then ask plain questions and get answers that cite the exact page. Because it draws only from what you give it, it is far less likely to invent things.',
        example:
          'A board chair loads two years of minutes and financials and asks what commitments the board has made that are still open.',
        watchOut:
          'The free plan caps each notebook at 50 sources, and it deliberately will not answer from anything outside your documents.',
      },
    ],
  },
  {
    id: 'write',
    label: 'Write',
    heading: 'Raise the floor on everything you send.',
    tools: [
      {
        name: 'Grammarly',
        category: 'Writing and communication',
        what: 'Checks grammar, clarity, and tone as you write, everywhere you write, and now drafts and rewrites too.',
        price: 'Free tier; Pro $12/seat/month annual (about $30/month billed monthly).',
        url: 'https://www.grammarly.com',
        why: 'It works everywhere you already write, so you change no habit to benefit. It catches the typo in the all-staff email and softens the sentence that read sharper than you meant. For a leader whose words carry weight, the tone check alone is worth it.',
        example:
          'A manager runs a layoff announcement through it to make sure the tone is clear and humane before sending.',
        watchOut:
          'It can push edits that flatten your voice, so accept its suggestions selectively, and watch the auto-renewal.',
      },
    ],
  },
  {
    id: 'automate',
    label: 'Automate',
    heading: 'Hand off the work that does not need you.',
    tools: [
      {
        name: 'Zapier',
        category: 'Workflow automation, no code',
        what: 'Connects the apps you already use so routine handoffs happen automatically, without anyone touching code.',
        price: 'Free (100 tasks/month); Professional $19.99/month; Team $69/month.',
        url: 'https://zapier.com',
        why: 'This is how a non-technical leader stops paying staff to copy information from one place to another. Describe what you want in plain language and its assistant helps build the connection. It connects more apps than anything else, so whatever you run probably works. Start with one annoying manual task and automate just that.',
        example:
          'Every new donation logs to a spreadsheet, triggers a thank-you email, and notifies the team, with no one touching it.',
        watchOut:
          'Its pricing counts every step as a task, so a busy automation can run up the bill faster than you expect, and a misconfigured one can loop into a surprise charge.',
      },
      {
        name: 'Lindy',
        category: 'AI assistant and agent',
        what: 'Builds assistants that act for you: email triage, scheduling, meeting follow-up, and multi-step tasks in plain language.',
        price: 'Free (400 credits/month); paid plans from about $50/month. Confirm current tiers on their site.',
        url: 'https://www.lindy.ai',
        why: 'Where Zapier moves data between apps, Lindy makes judgment calls, which is what an assistant actually does. It can watch your inbox, flag what is urgent, draft replies in your style, and text you when it needs a decision. For a leader without a human assistant, it is the closest thing to one for a fraction of the cost. Begin with a single job, like inbox triage.',
        example:
          'A founder has Lindy research each person on tomorrow’s calendar and send a one-paragraph brief the night before.',
        watchOut:
          'It charges by credits, and complex tasks burn them fast, so costs are harder to predict than a flat subscription. Its pricing has also shifted more than once, so check the current plan before you subscribe. Giving it your inbox is a real trust decision.',
      },
    ],
  },
]

export const discounts = [
  {
    name: 'OpenAI for Nonprofits',
    detail:
      'Up to 75 percent off ChatGPT Business or Enterprise, verified through Goodstack, which brings Business to about 8 dollars per user per month. Announced February 2026.',
  },
  {
    name: 'Google Workspace for Nonprofits',
    detail:
      'Up to 2,000 employees or volunteers work at no cost across Gmail, Calendar, Meet, NotebookLM, and the Gemini app, with paid AI upgrades from about 3.50 dollars per user per month. Announced January 2026.',
  },
  {
    name: 'Grammarly',
    detail:
      '30 percent off Pro for one year through TechSoup, for new or free-plan users. The older free nonprofit program ended in May 2024.',
  },
  {
    name: 'Perplexity',
    detail:
      'Enterprise Pro at 30 dollars per seat per month for nonprofits, and 10 dollars per month Education Pro for verified students and educators through SheerID.',
  },
  {
    name: 'Zapier',
    detail:
      '15 percent off any paid plan, excluding pay-per-task charges, with proof of charitable status.',
  },
  {
    name: 'Canva',
    detail:
      'The full premium suite free for eligible registered nonprofits of up to 50 users, worth knowing if design sits on your plate.',
  },
]

export const caveats = [
  'Prices move fast. Every figure here was pulled in June 2026, and the general assistants have signaled that pricing will keep changing. Confirm the current price on each tool’s page before you commit a team. The names link out for exactly that.',
  'All of these can be wrong. The assistants and answer engines state incorrect facts with confidence. Keep a human check on anything that carries legal, financial, or reputational weight.',
  'Privacy is your call. Free tiers may use your inputs to train their models unless you opt out, and the assistant and automation tools ask for deep access to your email and calendar. Prefer the business or team tiers for sensitive data, since they usually keep your data out of training.',
  'Recording carries obligations. The meeting and voice tools capture conversations, and consent rules vary by location, so tell people you are recording.',
  'This is a short list on purpose. We skipped developer tools, anything pre-launch, and enterprise products with no small-business pricing. If you already pay for Google Workspace or Microsoft 365, you likely have Gemini or Copilot bundled in already, which is the sensible way to get one.',
]
