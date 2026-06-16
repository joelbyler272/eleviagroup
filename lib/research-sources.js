/**
 * The research file, grouped by theme.
 *
 * Every entry here was checked against the primary source. Where a survey was
 * run by a company that sells AI tools, the context line says so. Add new
 * entries to the right theme as they come in.
 *
 * Fields:
 *   source   the organization behind the finding (shown in the meta line)
 *   outlet   where the link points, if different from source
 *   date     publication date
 *   region   place or sector
 *   title    headline (links to the source)
 *   url      the source link
 *   stat     a single pulled figure, shown large (use this or quote)
 *   quote    a pulled sentence, shown as a blockquote (use this or stat)
 *   context  what the figure or quote means, plus who measured it
 *   takeaway the Elevia read on why it matters
 */

export const themes = [
  {
    id: 'gap',
    label: 'The gap',
    heading: 'Owning a tool and using it are two different things.',
    entries: [
      {
        source: 'U.S. Census Bureau',
        date: 'May 2026',
        region: 'United States',
        title: 'AI Use at U.S. Businesses',
        url: 'https://www.census.gov/library/stories/2026/05/ai-use-businesses.html',
        stat: 'Under 20%',
        context:
          'The share of firms with four or fewer employees that used AI in the past two weeks, against 37 percent of firms with 250 or more. The Business Trends and Outlook Survey asks about real use, not plans.',
        takeaway:
          'The smallest firms are the furthest behind, and they are the ones we work with. This is the federal baseline, measured by what businesses actually do.',
      },
      {
        source: 'Federal Reserve Board',
        date: 'April 2026',
        region: 'United States',
        title: 'Monitoring AI Adoption in the U.S. Economy',
        url: 'https://www.federalreserve.gov/econres/notes/feds-notes/monitoring-ai-adoption-in-the-u-s-economy-20260403.html',
        stat: 'About 18%',
        context:
          'Of firms had adopted AI by the end of 2025, once the Fed reconciles three national surveys. Adoption climbs steeply with company size.',
        takeaway:
          'A sober read from the central bank. AI is not yet everywhere on Main Street, whatever the louder claims say.',
      },
      {
        source: 'Goldman Sachs 10,000 Small Businesses Voices',
        outlet: 'Goldman Sachs',
        date: 'March 2026',
        region: 'United States',
        title:
          'Small Businesses Embrace AI, But Need Training and Support to Fully Harness It',
        url: 'https://www.goldmansachs.com/pressroom/press-releases/2026/small-businesses-embrace-ai-but-need-training-and-support-to-fully-harness-it',
        stat: '76% use it, 14% live on it',
        context:
          'Owners who use AI, against owners who have built it into core operations. From a survey of 1,256 owners by Babson College and David Binder Research.',
        takeaway:
          'The gap in one line. Most owners have the tools in hand. Few have woven them into how the business actually runs. The distance between the two is the work.',
      },
      {
        source: 'JPMorgan Chase Institute',
        date: '2025',
        region: 'United States',
        title: 'Understanding the use of AI among small businesses',
        url: 'https://www.jpmorganchase.com/institute/all-topics/business-growth-and-entrepreneurship/understanding-ai-use-by-small-businesses',
        stat: '26.1% vs 15.3%',
        context:
          'AI adoption among employer firms versus nonemployers by December 2025, measured from real payments across millions of business accounts. The gap has nearly doubled since early 2023.',
        takeaway:
          'Measured by where the money actually goes, not by what owners say. The firms with staff are pulling ahead, and the rest are falling further behind.',
      },
      {
        source: 'MIT NANDA',
        outlet: 'Fortune',
        date: 'August 2025',
        region: 'United States',
        title: 'MIT report: 95% of generative AI pilots at companies are failing',
        url: 'https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/',
        stat: '95%',
        context:
          'Of enterprise AI pilots delivered no measurable return. MIT puts the cause on the gap between tools and real work, not on the technology.',
        takeaway:
          'Even large companies with budgets stall here. The lesson holds at any size. A tool you have not connected to the work produces nothing. Translation comes first.',
      },
    ],
  },
  {
    id: 'stall',
    label: 'Where it stalls',
    heading: 'The barrier is rarely awareness. It is knowing where to start.',
    entries: [
      {
        source: 'U.S. SBA, Office of Advocacy',
        date: 'September 2025',
        region: 'United States',
        title: 'AI in Business: Small Firms Closing In',
        url: 'https://advocacy.sba.gov/wp-content/uploads/2025/09/Research-Spotlight-AI-in-Business-Small-Firms-Closing-In_-092425.pdf',
        stat: 'Nearly 82%',
        context:
          'Of businesses with fewer than five employees said AI was not relevant to them, in the Census AI supplement the report draws on. The SBA also notes that federal AI resources are not centralized enough to help.',
        takeaway:
          'The smallest owners do not see how AI applies to their work. That is a translation problem, named by the government’s own small business watchdog.',
      },
      {
        source: 'Federal Reserve Bank of San Francisco',
        outlet: 'Fed Communities',
        date: 'August 2025',
        region: 'United States',
        title: 'Small business owners are using AI in some surprising ways',
        url: 'https://fedcommunities.org/small-business-owners-using-ai-surprising-ways/',
        quote:
          'Many small business owners seem eager to deploy AI to support their enterprises, but aren’t sure where to start.',
        context:
          'Sarah Simms of the Federal Reserve Bank of San Francisco, drawing on the Small Business Credit Survey.',
        takeaway:
          'A named Fed official saying plainly what we hear in every first conversation. The want is there. The path is not.',
      },
      {
        source: 'Jobs for the Future',
        outlet: 'PSHRA',
        date: '2025',
        region: 'United States',
        title: 'Workplace AI training is not keeping pace with adoption',
        url: 'https://pshra.org/survey-workplace-ai-training-not-keeping-pace-with-increasing-adoption/',
        stat: '36%',
        context:
          'Of more than 3,000 workers said they have the training and resources to use AI, down from 45 percent a year earlier, even as use rose. Survey by Jobs for the Future, republished by PSHRA.',
        takeaway:
          'Tools without training do not stick. Small teams feel that gap hardest, because there is no one down the hall to ask.',
      },
    ],
  },
  {
    id: 'industry',
    label: 'Industry by industry',
    heading: 'The same gap, in the industries we serve.',
    entries: [
      {
        source: 'ServiceTitan',
        outlet: 'HousingWire',
        date: 'April 2026',
        region: 'Trades',
        title: 'Residential contractors remain AI-skeptical early on',
        url: 'https://www.housingwire.com/articles/ai-adoption-residential-contracting/',
        stat: '25% use it, 43% distrust it',
        context:
          'Of residential contractors use AI in a real way, while 43 percent do not trust its output. ServiceTitan, which sells software to the trades, surveyed 1,000 contractors through the independent firm Thrive Analytics.',
        takeaway:
          'HVAC, plumbing, and electrical owners already wear every hat. They do not need more noise. They need someone to turn it into a next step.',
      },
      {
        source: 'Accounting Seed',
        outlet: 'CFO.com',
        date: 'February 2026',
        region: 'Accounting',
        title: 'Finance teams are slow to adopt AI for accounting',
        url: 'https://www.cfo.com/news/smbs-finance-organizations-are-slow-to-adopt-ai-for-accounting-Accounting-Seed/813015/',
        stat: '63% explore, 16% use',
        context:
          'Finance professionals are exploring AI, but only 16 percent actually use it. From a survey of 128 professionals by Accounting Seed, an accounting-software vendor, reported by CFO.com.',
        takeaway:
          'In the back office, trust and accuracy decide everything. Teams stall because they cannot tell which tools are credible. That judgment is exactly what an assessment provides.',
      },
      {
        source: 'Virtuous',
        outlet: 'NonProfit PRO',
        date: 'February 2026',
        region: 'Nonprofits',
        title: 'Nonprofit AI adoption hits 92%, but only 7% see major impact',
        url: 'https://www.nonprofitpro.com/article/nonprofit-ai-adoption-hits-92-but-only-7-see-major-impact/',
        stat: '92% use it, 7% gain from it',
        context:
          'Of nonprofits use AI in some form, but only 7 percent report major gains, often because the know-how sits with one person. Survey of 346 nonprofits by Virtuous, a nonprofit software vendor.',
        takeaway:
          'Almost everyone is experimenting. Almost no one is getting real return, because scattered experiments are not a system. Mission teams need those experiments turned into shared workflows.',
      },
    ],
  },
  {
    id: 'ground',
    label: 'On the ground',
    heading: 'What it looks like in a real place.',
    entries: [
      {
        source: 'CBC News',
        date: 'June 2026',
        region: 'Kootenays, British Columbia',
        title:
          'AI is reaching rural businesses in the Kootenays, but support gaps remain',
        url: 'https://www.cbc.ca/news/canada/british-columbia/rural-kootenay-ai-9.7234623',
        quote:
          'Everybody wants to use AI, but it’s not like a blanket: here is your AI, use this for your business.',
        context:
          'Priya Biswas, executive director of the Kootenay Association for Science and Technology, whose provincially funded TechEdge program helps rural owners assess which tools fit before they buy.',
        takeaway:
          'The translation gap, described from the ground. The work starts before a business ever picks a tool. That first read is an assessment, and it is where any honest AI effort begins.',
      },
      {
        source: 'Albuquerque Journal',
        date: 'January 2026',
        region: 'Albuquerque, New Mexico',
        title: 'How Albuquerque’s small businesses are putting AI to work',
        url: 'https://www.abqjournal.com/business/wed-rather-be-ahead-of-the-curve-how-albuquerques-small-businesses-are-putting-ai-to-work/2951604',
        quote: 'I think people are still trying to wrap their brains around it.',
        context:
          'Laurene Rodriguez, CEO of Mariposa Marketing. One local owner took a six-week prompting course at the community college just to get started.',
        takeaway:
          'The appetite is real, and so is the effort it takes to get going. People are teaching themselves because no one has handed them the path.',
      },
      {
        source: 'BDC',
        outlet: 'The Logic',
        date: 'April 2026',
        region: 'Canada',
        title: 'BDC launches a $500M loan program to help small businesses adopt AI',
        url: 'https://thelogic.co/news/bdc-ai-loans-small-business-canada/',
        stat: 'About 12%',
        context:
          'Of Canadian businesses reported using AI in the second quarter of 2025, per Statistics Canada. Canada’s small business bank is now pairing 500 million dollars in financing with human advisors, an admission that money alone does not close the gap.',
        takeaway:
          'Even a national bank concluded that capital is not enough. Owners need a person to help them see where AI actually fits. That is the whole idea.',
      },
    ],
  },
]
