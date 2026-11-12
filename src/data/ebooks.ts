/**
 * Canadian Optimizer ebooks: one place for prices, checkout links, copy and the
 * blog-category-to-book mapping. See EBOOKS.md at the repo root.
 *
 * CHECKOUT LINKS
 * - Paste each Stripe Payment Link URL into CHECKOUT_URLS below.
 * - An empty string means "not on sale yet": every buy button for that product
 *   shows a disabled "Coming soon" state instead of a broken link.
 *
 * DOWNLOAD LINKS (thank-you pages)
 * - Buyer download links are NOT stored in this public repo. They come from the
 *   NEXT_PUBLIC_EBOOK_DOWNLOADS build variable (a GitHub Actions repository
 *   variable; deploy.yml must pass it into `npm run build`, see EBOOKS.md).
 * - Format: {"retirement-guide":{"folder":"https://drive...","zip":"https://drive..."}, ...}
 * - When a product has no entry, its thank-you page shows a clearly marked
 *   placeholder and tells the buyer how to get the file.
 */

export type BookSlug =
  | 'tax-guide'
  | 'retirement-guide'
  | 'government-benefits-guide'
  | 'insurance-guide'
  | 'side-hustle-guide'
  | 'raise-guide'
  | 'self-employed-guide'
  | 'investing-guide'
  | 'index-investing-guide';

export type BundleSlug = 'earn-more-bundle';

export type ProductSlug = BookSlug | BundleSlug;

/** Stripe Payment Link URLs. Leave '' until Andrew approves and the live link exists. */
export const CHECKOUT_URLS: Record<ProductSlug, string> = {
  // Live since before Nov 2026 (existing C$49 Payment Link). Keep as is.
  'tax-guide': 'https://buy.stripe.com/aFa8wPejNdIy4jK1Z89oc01',
  // Live Payment Links created Nov 12, 2026 (hosted confirmation message with the Drive download link).
  'retirement-guide': 'https://buy.stripe.com/cNibJ17Vp7ka9E433c9oc0m',
  'government-benefits-guide': 'https://buy.stripe.com/7sYaEXdfJcEuaI85bk9oc0n',
  'insurance-guide': 'https://buy.stripe.com/dRm7sL7Vp8oe5nOeLU9oc0o',
  'side-hustle-guide': 'https://buy.stripe.com/bJe4gzejN1ZQ2bC6fo9oc0p',
  'raise-guide': 'https://buy.stripe.com/3cIcN5fnRawm3fG1Z89oc0q',
  'self-employed-guide': 'https://buy.stripe.com/8x2cN58Zt0VMcQgbzI9oc0r',
  'investing-guide': 'https://buy.stripe.com/4gM6oHcbFdIy03u47g9oc0s',
  'index-investing-guide': 'https://buy.stripe.com/8x2aEXfnR1ZQ3fG9rA9oc0t',
  'earn-more-bundle': 'https://buy.stripe.com/dRmaEX4Jd5c203ufPY9oc0u',
};

/** Prices in whole Canadian dollars. Change here and every page, button and schema follows. */
export const PRICES_CAD: Record<ProductSlug, number> = {
  'tax-guide': 49,
  'retirement-guide': 29,
  'government-benefits-guide': 29,
  'insurance-guide': 29,
  'side-hustle-guide': 29,
  'raise-guide': 29,
  'self-employed-guide': 29,
  'investing-guide': 29,
  'index-investing-guide': 29,
  // Set by Andrew, Nov 12, 2026.
  'earn-more-bundle': 59,
};

/** Refund window promised on every sales page (confirmed by Andrew, Nov 12, 2026). */
export const REFUND_DAYS = 30;
export const SUPPORT_PATH = '/contact/';

export type EbookPart = { name: string; chapters: string[] };
export type EbookFaq = { question: string; answer: string };
export type EbookExample = { name: string; detail: string };

export type Ebook = {
  slug: BookSlug;
  kind: 'book';
  title: string;
  /** Short name for buttons and cards, e.g. "Retirement Guide". */
  shortTitle: string;
  subtitle: string;
  edition: string;
  series?: 'Earn More' | 'Investing';
  pages: number;
  chapterCount: number;
  approxWords: string;
  formats: string;
  currentAs: string;
  cover: string;
  coverPng: string;
  metaDescription: string;
  /** One or two sentences for cards and CTAs. */
  pitch: string;
  /** Opening paragraph on the sales page. */
  lede: string;
  whoFor: string[];
  notFor: string[];
  highlights: string[];
  examplesIntro: string;
  examples: EbookExample[];
  parts: EbookPart[];
  backMatter: string[];
  freeUpdate?: string;
  extraFaqs: EbookFaq[];
  related: BookSlug[];
};

export type EbookBundle = {
  slug: BundleSlug;
  kind: 'bundle';
  title: string;
  shortTitle: string;
  subtitle: string;
  books: BookSlug[];
  cover: string;
  coverPng: string;
  metaDescription: string;
  pitch: string;
  lede: string;
  whoFor: string[];
  extraFaqs: EbookFaq[];
};

export const EBOOKS: Ebook[] = [
  {
    slug: 'tax-guide',
    kind: 'book',
    title: 'How to Reduce Your Taxes & Maximize Your Tax Refund',
    shortTitle: 'Tax Guide',
    subtitle: "A Canadian's Complete Guide to Keeping More of Your Hard-Earned Money",
    edition: '2026 Tax Year Edition',
    pages: 109,
    chapterCount: 25,
    approxWords: '39,800',
    formats: 'PDF + editable Word (DOCX)',
    currentAs: 'Figures for the 2026 tax year, based on information available in early 2026',
    cover: '/images/ebooks/tax-guide-cover.webp',
    coverPng: '/images/ebooks/tax-guide-cover.png',
    metaDescription:
      'A 109-page, 25-chapter guide to Canadian income tax for the 2026 tax year: deductions, credits, RRSP, TFSA, FHSA, self-employment and a 12-month plan. $49 CAD.',
    pitch:
      'A 109-page guide to the 2026 Canadian tax year for employees (T4) and the self-employed (T2125): deductions, credits, RRSP, TFSA, FHSA and a 12-month tax calendar.',
    lede:
      'This guide walks through how Canadian income tax actually works, then goes deduction by deduction and credit by credit, with separate parts for employees and for self-employed and freelance Canadians. It ends with a 12-month tax planning calendar and checklists you can work through before you file.',
    whoFor: [
      'Employed Canadians (T4) who want to understand their return and stop missing deductions and credits',
      'Self-employed and freelance Canadians filing business income on a T2125',
      'Families and anyone going through a life event (a new child, a move, a separation, a first home) that changes their taxes',
      'Investors deciding between the RRSP, TFSA and FHSA, and how to hold investments tax-efficiently',
    ],
    notFor: [
      'Quebec residents looking for a full guide to Quebec provincial tax (federal rules and provincial brackets are covered)',
      'Corporate tax filers looking for a T2 manual',
    ],
    highlights: [
      '25 chapters in 8 parts, from how brackets work to a 12-month planning calendar',
      'Separate strategy parts for employed and self-employed Canadians',
      'Marginal versus effective tax rate worked through with real 2026 federal and Ontario brackets',
      'Chapter on the First Home Savings Account (FHSA) and how it pairs with the RRSP',
      'Appendices with 2026 federal and provincial brackets, CRA deadlines and contribution limits',
      'Includes an editable Word version so you can fill in the checklists',
    ],
    examplesIntro: 'Worked examples use named taxpayers, so you can follow the math with your own numbers.',
    examples: [
      { name: 'Jordan', detail: 'An employed professional in Ontario earning $90,000, used to show marginal versus effective rates and what a deduction is worth' },
      { name: 'Marcus', detail: 'A married Ontario employee earning $95,000, used to show what an RRSP contribution saves' },
      { name: 'David', detail: 'A freelance consultant with $95,000 of business income, used to test whether incorporating pays' },
    ],
    parts: [
      { name: 'Part 1: Foundations', chapters: ['How Canadian Taxes Actually Work', 'The Anatomy of a Tax Return', 'The Most Expensive Mistake Canadians Make'] },
      { name: 'Part 2: Deductions & Credits Every Canadian Should Know', chapters: ['Deductions That Lower Your Taxable Income', 'Non-Refundable Tax Credits', 'Refundable Tax Credits: Money Back in Your Pocket', 'Often-Overlooked Deductions and Credits'] },
      { name: 'Part 3: Strategies for Employed Canadians', chapters: ['Maximizing Your T4 Tax Position', 'The RRSP Playbook', 'The TFSA: Your Tax-Free Wealth Builder'] },
      { name: 'Part 4: Strategies for Self-Employed & Freelance Canadians', chapters: ['Self-Employment Tax Basics', "Business Expenses: What You Can (and Can't) Deduct", 'Incorporation: When It Makes Sense', 'Quarterly Instalments & Cash Flow Planning'] },
      { name: 'Part 5: Family & Life Event Tax Strategies', chapters: ['Tax Planning for Families', 'Major Life Events: Tax Implications', 'The First Home Savings Account (FHSA)'] },
      { name: 'Part 6: Investment & Retirement Tax Optimization', chapters: ['Tax-Efficient Investing', 'Retirement Income Planning'] },
      { name: 'Part 7: Protecting Yourself & Staying Compliant', chapters: ['Record-Keeping That Saves You Money', 'Working with Tax Professionals', 'Income Tax Software Options', 'If the CRA Comes Knocking: Audits & Reassessments'] },
      { name: 'Part 8: Putting It All Together', chapters: ['Your 12-Month Tax Planning Calendar', 'Tax Reduction Checklists'] },
    ],
    backMatter: [
      'Appendix A: 2026 federal tax brackets',
      'Appendix B: 2026 provincial and territorial tax brackets',
      'Appendix C: Key CRA deadlines for 2026',
      'Appendix D: 2026 contribution limits and key figures',
      'Appendix E: Glossary of Canadian tax terms',
    ],
    extraFaqs: [
      {
        question: 'Which tax year does it cover?',
        answer:
          'The 2026 tax year: the return most Canadians file in spring 2027. Figures are based on information available in early 2026, so check current amounts with the CRA before you file.',
      },
    ],
    related: ['retirement-guide', 'self-employed-guide', 'investing-guide'],
  },
  {
    slug: 'retirement-guide',
    kind: 'book',
    title: 'The Canadian Retirement Guide',
    shortTitle: 'Retirement Guide',
    subtitle: 'How to Live Comfortably and Not Run Out of Money',
    edition: '2026 Edition',
    pages: 180,
    chapterCount: 26,
    approxWords: '41,700',
    formats: 'PDF',
    currentAs: 'Current as of October 10, 2026',
    cover: '/images/ebooks/retirement-guide-cover.webp',
    coverPng: '/images/ebooks/retirement-guide-cover.png',
    metaDescription:
      'A 180-page, 26-chapter Canadian retirement guide: how much you need, when to take CPP and OAS, pensions, RRIFs, withdrawal order, housing, care and estate. $29 CAD.',
    pitch:
      'A 180-page guide to the decisions behind a Canadian retirement: your number, CPP and OAS timing, workplace pensions, RRIF withdrawals, housing, care and what you leave.',
    lede:
      'Each of the 26 chapters answers one retirement question, with the answer in the first few paragraphs and the math worked in full. You start with a worksheet that sets your number, then move through government pensions, workplace pensions, turning savings into income, living in retirement and what you leave behind. It closes with a one-page plan.',
    whoFor: [
      'Canadians in their 50s and 60s deciding when they can stop working',
      'Anyone choosing when to start CPP and OAS, or wondering whether GIS applies to them',
      'People with a workplace pension weighing a commuted value, a LIRA or a LIF',
      'Retirees turning an RRSP into income without overpaying tax',
    ],
    notFor: [
      'Quebec workers looking for QPP rules (the book covers CPP; it flags where QPP differs but does not cover it)',
      'Readers who want specific investments picked for them, or step-by-step application forms',
    ],
    highlights: [
      '26 chapters in six parts, each answering one question',
      'A Chapter 1 worksheet that feeds every later chapter',
      'Every plan tested at 3% and again at 1% above inflation, run to age 95',
      'Covers the RRSP meltdown, withdrawal order, pension income splitting and annuities',
      'Housing, healthcare, long-term care, wills, tax at death, probate and digital assets',
      '26 printable checklists, collected again at the back',
    ],
    examplesIntro: 'Three invented households appear throughout, with their numbers worked in full.',
    examples: [
      { name: 'Priya', detail: '58, single and renting in Mississauga' },
      { name: 'Janet and Luc', detail: '62 and 64, own a house in Moncton; Janet has a workplace pension' },
      { name: 'Dale', detail: '54, lives in Kelowna and wants to stop work soon' },
    ],
    parts: [
      { name: 'Part 1: Your Number', chapters: ['How Much You Need', 'Planning by Decade', 'Early Retirement'] },
      { name: 'Part 2: Government Pensions', chapters: ['Canada Pension Plan', 'Old Age Security', 'Guaranteed Income Supplement'] },
      { name: 'Part 3: Workplace Pensions', chapters: ['Workplace Pensions', 'Commuted Value', 'LIRAs and LIFs'] },
      { name: 'Part 4: Turning Savings into Income', chapters: ['RRSP to RRIF', 'RRIF Minimum Withdrawals', 'The RRSP Meltdown', 'The TFSA in Retirement', 'Withdrawal Order', 'Pension Income Splitting', 'Annuities', 'Investing in Retirement'] },
      { name: 'Part 5: Living in Retirement', chapters: ['Housing', 'Healthcare Costs', 'Long-Term Care', 'Purpose, Health and Connection'] },
      { name: 'Part 6: What You Leave', chapters: ['Wills and Powers of Attorney', 'Tax at Death', 'Probate', 'Digital Assets'] },
      { name: 'Closing: Your Plan', chapters: ['Your One-Page Plan'] },
    ],
    backMatter: ['All the checklists', 'Quick reference', 'Glossary', 'When the numbers change', 'Sources', 'Change log'],
    extraFaqs: [],
    related: ['government-benefits-guide', 'investing-guide', 'tax-guide'],
  },
  {
    slug: 'government-benefits-guide',
    kind: 'book',
    title: 'The Canadian Government Benefits Guide',
    shortTitle: 'Government Benefits Guide',
    subtitle: 'How to Apply for Every Benefit You Qualify For, Step by Step',
    edition: '2026 Edition',
    pages: 141,
    chapterCount: 22,
    approxWords: '28,700',
    formats: 'PDF',
    currentAs: 'Current as of October 5, 2026',
    cover: '/images/ebooks/government-benefits-guide-cover.webp',
    coverPng: '/images/ebooks/government-benefits-guide-cover.png',
    metaDescription:
      'A 141-page guide to 18 federal benefits and credits: CCB, CPP, OAS, GIS, EI, the Canada Disability Benefit, dental care and more. Who qualifies and how to apply. $29 CAD.',
    pitch:
      'A 141-page guide to 18 federal benefits and credits, with one chapter each: who qualifies, how much you could get, how to apply and what happens after.',
    lede:
      'Most federal benefits are not paid automatically: someone has to apply. This guide covers eighteen of them, from the Canada Child Benefit to the Guaranteed Income Supplement, and answers the same four questions for each: do you qualify, how much could you get, how do you apply, and what happens after you apply. It finishes by turning your list into a dated application plan.',
    whoFor: [
      'Households that suspect they are missing a benefit they qualify for',
      'Parents (Canada Child Benefit, Canada Learning Bond, child disability benefit)',
      'People with a disability or caring for someone who has one (Disability Tax Credit, Canada Disability Benefit, CPP disability)',
      'Anyone turning 60 or 65, or helping a parent who is (CPP, OAS, GIS, the Allowances)',
    ],
    notFor: [
      'Readers looking for a tax-filing guide (the focus is eligibility and applying)',
      'A full catalogue of provincial programs (Chapter 21 shows how to find yours)',
    ],
    highlights: [
      '18 federal benefits and credits, one chapter each, in the same four-question format',
      'Chapter 1 sorts your household with six tests: age, residence, family, work, disability and income',
      'Step-by-step application walkthroughs and what to have ready before you start',
      'A dated application plan in Chapter 22: when to apply and when the money should arrive',
      'Checklists you can tick off, collected again at the back',
      'Independent: not published by or affiliated with the Government of Canada',
    ],
    examplesIntro: 'Short invented cases show how the rules play out.',
    examples: [
      { name: 'Walter', detail: 'Turns 65, is enrolled in OAS automatically, and learns his CPP retirement pension is not' },
    ],
    parts: [
      { name: 'Getting started', chapters: ['Which benefits does your household qualify for?', 'How does applying work, and what do you need ready?'] },
      { name: 'Families and children', chapters: ['Canada Child Benefit', 'Canada Learning Bond'] },
      { name: 'Income and work', chapters: ['Canada Groceries and Essentials Benefit', 'Canada Workers Benefit', 'Employment Insurance', 'Canadian Dental Care Plan'] },
      { name: 'Disability', chapters: ['Disability Tax Credit', 'Canada Disability Benefit', 'Child disability benefit', 'CPP disability benefit'] },
      { name: 'CPP', chapters: ['CPP retirement pension', 'CPP survivor’s pension', 'CPP children’s benefit', 'CPP death benefit'] },
      { name: 'Older Canadians', chapters: ['Old Age Security', 'Guaranteed Income Supplement', 'Allowance', 'Allowance for the Survivor'] },
      { name: 'Putting it together', chapters: ['Which provincial programs do you qualify for, and how do you find them?', 'What is your application plan, and when will the money arrive?'] },
    ],
    backMatter: ['Quick reference', 'Words used in this book', 'Sources', 'All the checklists', 'Change log', 'When the numbers change'],
    extraFaqs: [
      {
        question: 'Is this book from the government?',
        answer:
          'No. Canadian Optimizer is independent. The book is not published by, affiliated with or endorsed by the Government of Canada, the CRA or Service Canada. Where the book and a Government of Canada page disagree, the government page is right.',
      },
    ],
    related: ['retirement-guide', 'tax-guide', 'insurance-guide'],
  },
  {
    slug: 'insurance-guide',
    kind: 'book',
    title: 'The Canadian Insurance Guide',
    shortTitle: 'Insurance Guide',
    subtitle: 'How to Pay Less, Get Properly Covered and Get Your Claims Paid',
    edition: '2026 Edition',
    pages: 192,
    chapterCount: 30,
    approxWords: '44,700',
    formats: 'PDF',
    currentAs: 'Current as of October 13, 2026',
    cover: '/images/ebooks/insurance-guide-cover.webp',
    coverPng: '/images/ebooks/insurance-guide-cover.png',
    metaDescription:
      'A 192-page, 30-chapter Canadian insurance guide: disability, life, health, travel, home, tenant, condo and car insurance, with 30 checklists. $29 CAD.',
    pitch:
      'A 192-page guide to the insurance a Canadian household buys for itself: disability, life, health, travel, home, tenant, condo and car, with 30 checklists.',
    lede:
      'This guide is for households that already pay for insurance and want to know whether they have the right coverage at a fair price. It starts with how a policy is built and what to insure first, then covers your income and family, health and travel, your home, your car, and the extras. It ends with how to make a claim and a yearly insurance checkup.',
    whoFor: [
      'Households reviewing their coverage and premiums at renewal',
      'Families deciding how much life and disability insurance they need',
      'Renters, condo owners and homeowners checking what their policy really covers (water, flood, wildfire)',
      'Drivers trying to lower a car premium without losing coverage',
    ],
    notFor: [
      'Business owners looking for commercial insurance (business insurance is left out)',
      'Readers who want a specific insurer or product recommended (the book does not recommend any)',
    ],
    highlights: [
      '30 chapters in six parts, each with a printable checklist (all 30 collected at the back)',
      'What to insure first, and the coverage you may already have through work or a credit card',
      'Term versus permanent life, no-medical policies and mortgage life insurance',
      'Car insurance by province, your auto policy, and lowering your premium',
      '"Read the wording" boxes that point to the clause that decides a claim',
      'Premiums shown are dated regulator averages or insurer-published examples',
    ],
    examplesIntro: 'Three composite households run through the book.',
    examples: [
      { name: 'Maya and Daniel', detail: 'A family of four in Brampton, Ontario' },
      { name: 'Sam', detail: 'A single renter in Calgary' },
      { name: 'Gord and Anita', detail: 'A couple near retirement in Nanaimo, B.C.' },
    ],
    parts: [
      { name: 'Part 1: Buying Insurance Well', chapters: ['How Insurance Works', 'What to Insure First', 'Coverage You Already Have', 'Brokers, Agents and Buying Direct'] },
      { name: 'Part 2: Your Income and Your Family', chapters: ['Disability Insurance', 'Critical Illness Insurance', 'How Much Life Insurance', 'Term Life Insurance', 'Permanent Life Insurance', 'Life Insurance Without a Medical', 'Mortgage Life Insurance', 'Group Benefits'] },
      { name: 'Part 3: Your Health and Travel', chapters: ['Health and Dental Insurance', 'Travel Insurance', 'Visitors and Newcomers', 'Long-Term Care Insurance'] },
      { name: 'Part 4: Your Home', chapters: ['Home Insurance', 'Water, Flood, Wildfire and Earthquake', 'Tenant Insurance', 'Condo Insurance', 'Landlords and Short-Term Rentals'] },
      { name: 'Part 5: Your Car', chapters: ['Car Insurance by Province', 'Your Auto Policy', 'Lowering Your Car Premium', 'Delivery, Rideshare and Rental Cars'] },
      { name: 'Part 6: The Extras, the Claim and the Checkup', chapters: ['Umbrella Liability Insurance', 'Pet Insurance', 'Warranties and Add-Ons', 'Making a Claim', 'Your Insurance Checkup'] },
    ],
    backMatter: ['Your checklists', 'Quick reference', 'Glossary', 'When the numbers change', 'Sources', 'Change log'],
    extraFaqs: [],
    related: ['retirement-guide', 'government-benefits-guide', 'tax-guide'],
  },
  {
    slug: 'side-hustle-guide',
    kind: 'book',
    title: 'The Canadian Side Hustle Guide',
    shortTitle: 'Side Hustle Guide',
    subtitle: 'How to Earn Your First $1,000 on the Side and Grow It Without Tax Surprises',
    edition: '2026 Edition',
    series: 'Earn More',
    pages: 112,
    chapterCount: 21,
    approxWords: '29,000',
    formats: 'PDF',
    currentAs: 'Rules and rates current to October 2026',
    cover: '/images/ebooks/side-hustle-guide-cover.webp',
    coverPng: '/images/ebooks/side-hustle-guide-cover.png',
    metaDescription:
      'A 112-page Canadian side hustle guide: your real hourly wage, eight hustles with real numbers, pricing, first customers, and side hustle tax and benefits. $29 CAD.',
    pitch:
      'A 112-page guide to choosing a side hustle, finding customers and pricing your work, with eight hustles costed line by line and one short part on tax.',
    lede:
      'This is a book about earning. It starts with the one number that matters most, your real hourly wage after costs, tax and lost benefits, then covers eight hustles with real Canadian numbers, how to price, find your first ten customers and earn more from the same hours. Tax and benefit clawbacks get one short part at the end, so your first sale does not bring a surprise.',
    whoFor: [
      'Canadians with a day job who want extra income without risking it',
      'Anyone comparing reselling, Etsy, rideshare, freelancing, tutoring, local services, content or renting out space',
      'People already earning on the side who want to raise prices or move off the platforms',
      'Parents and benefit recipients who need to know what a side income does to the Canada Child Benefit and other credits',
    ],
    notFor: [
      'Readers ready to run a full-time business (see The Canadian Self-Employed Guide)',
    ],
    highlights: [
      'The real hourly wage formula: what you keep for every hour the work takes',
      'Eight hustles, each with a "Real numbers" box showing what it costs and pays',
      'Pricing, your first ten customers, reviews, referrals and raising prices',
      'Side hustle tax in one chapter, plus benefits, clawbacks and your tax set-aside',
      'Every chapter ends with a worked example, a fill-in "Your case", a ten-minute task and a checklist',
      'A one-page plan at the back',
    ],
    examplesIntro: 'Three illustrative households carry the examples, built from real 2026 rates, fees and rules.',
    examples: [
      { name: 'Jess Moreau', detail: '29, Halifax elementary teacher: reselling vintage clothing and math tutoring' },
      { name: 'Tomás Ruiz', detail: '37, Winnipeg warehouse supervisor: Uber on weekends and small moves' },
      { name: 'Mei and Kevin Lam', detail: 'Surrey, two children under 6: an Etsy shop, freelance design and videos, and a basement suite' },
    ],
    parts: [
      { name: 'Part 1: Choose', chapters: ['The Real Hourly Wage', 'Choosing Your Side Hustle', 'Your Day Job Comes First'] },
      { name: 'Part 2: The Hustles', chapters: ['Reselling and Decluttering', 'Handmade and Digital Products', 'Rideshare and Delivery', 'Freelancing Online', 'Tutoring and Coaching', 'Local Services', 'Content Creation', 'Renting Out Space and Things'] },
      { name: 'Part 3: Earn More From It', chapters: ['Pricing Your Work', 'Your First Ten Customers', 'Reviews, Referrals and Repeat Business', 'Raising Your Prices', 'Beyond the Platforms', 'More Money From the Same Hours'] },
      { name: 'Part 4: Keep It', chapters: ['Setting Up Properly', 'Side Hustle Tax in One Chapter', 'Benefits, Clawbacks and Your Tax Set-Aside', 'From Side Hustle to Business'] },
    ],
    backMatter: ['Quick reference', 'Glossary', 'Your one-page plan'],
    freeUpdate: 'Buyers of the 2026 edition receive one free update in the new year, covering Federal Budget 2026 and the 2027 figures.',
    extraFaqs: [],
    related: ['self-employed-guide', 'raise-guide', 'tax-guide'],
  },
  {
    slug: 'raise-guide',
    kind: 'book',
    title: 'The Canadian Raise Guide',
    shortTitle: 'Raise Guide',
    subtitle: "How to Win Raises, Land Promotions and Get Paid What You're Worth",
    edition: '2026 Edition',
    series: 'Earn More',
    pages: 153,
    chapterCount: 23,
    approxWords: '42,900',
    formats: 'PDF',
    currentAs: 'Rules and rates current to October 2026',
    cover: '/images/ebooks/raise-guide-cover.webp',
    coverPng: '/images/ebooks/raise-guide-cover.png',
    metaDescription:
      'A 153-page guide to earning more as a Canadian employee: how pay is decided, your market value, asking for a raise, promotions, offers, severance and bonuses. $29 CAD.',
    pitch:
      'A 153-page guide to earning more as an employee in Canada: how raises are budgeted, your market value, what to say when you ask, promotions, offers and severance.',
    lede:
      'Most of this book is about the people and processes that decide your pay, and how to move them: how raise budgets are set and approved, what raises your odds of a yes, what to say when you ask and when you hear pushback, how to win a promotion or a better offer, and how to build skills and credentials that pay. Tax gets one short chapter at the end.',
    whoFor: [
      'Salaried and hourly employees who want a bigger raise from their current employer',
      'Unionized workers navigating pay scales, overtime, shift and premium pay',
      'Anyone weighing an outside offer, a job switch or a move to another province',
      'Employees with bonuses, commission, shares or a severance package to understand',
    ],
    notFor: [
      'Freelancers and business owners (see The Canadian Self-Employed Guide)',
    ],
    highlights: [
      'Where raise money comes from, who controls it, and when asking can still change the answer',
      'Your market value, pay transparency rules and your total compensation',
      '"Say it like this" boxes with words to adapt for a conversation about pay',
      'Negotiating an offer, stay-or-go math, and earning US pay from Canada',
      'Skills, credentials, the skilled trades, changing careers and moving for money',
      'Bonuses, commission, equity, severance and layoffs',
    ],
    examplesIntro: 'Three illustrative households carry the examples, built from real 2026 tax rates, pay scales and rules.',
    examples: [
      { name: 'Arjun Mehta', detail: '34, Mississauga QA analyst at $78,400: asking, pushback, a partial yes, an outside offer, stay or go' },
      { name: 'Chantal Boudreau', detail: '41, Moncton unionized registered nurse: pay scales, premium pay, a nurse practitioner switch, a possible move to Alberta' },
      { name: 'Derek Olsen', detail: '52, Calgary operations manager at $131,500 plus bonus and shares: his package, a restructuring and severance' },
    ],
    parts: [
      { name: 'Part 1: Know Your Worth', chapters: ['How Pay Is Decided', 'Your Market Value', 'Pay Transparency', 'Total Compensation'] },
      { name: 'Part 2: Get Paid More Where You Are', chapters: ['Raising Your Odds', 'Building Your Case', 'Asking for a Raise', 'Handling Pushback', 'Getting Promoted', 'When the Answer Is No', 'Overtime, Shifts and Premium Pay'] },
      { name: 'Part 3: Get Paid More Elsewhere', chapters: ['Job Hunting When Hiring Is Slow', 'Negotiating an Offer', 'Stay or Go', 'Earning US Pay From Canada'] },
      { name: 'Part 4: Grow Your Earning Power', chapters: ['Skills That Pay', 'Credentials Worth the Money', 'The Skilled Trades', 'Changing Careers', 'Moving for Money'] },
      { name: 'Part 5: Pay Beyond Salary', chapters: ['Bonuses, Commission and Equity', 'Severance and Layoffs', 'Keeping More of What You Earn'] },
    ],
    backMatter: ['Quick reference', 'Glossary', 'Your one-page plan'],
    freeUpdate: 'Buyers of the 2026 edition receive one free update in the new year, covering Federal Budget 2026 and the 2027 figures.',
    extraFaqs: [],
    related: ['side-hustle-guide', 'self-employed-guide', 'tax-guide'],
  },
  {
    slug: 'self-employed-guide',
    kind: 'book',
    title: 'The Canadian Self-Employed Guide',
    shortTitle: 'Self-Employed Guide',
    subtitle: 'How to Start Your Business, Price Your Work and Pay Yourself the Smart Way',
    edition: '2026 Edition',
    series: 'Earn More',
    pages: 143,
    chapterCount: 22,
    approxWords: '40,300',
    formats: 'PDF',
    currentAs: 'Rules and rates current to October 2026',
    cover: '/images/ebooks/self-employed-guide-cover.webp',
    coverPng: '/images/ebooks/self-employed-guide-cover.png',
    metaDescription:
      'A 143-page guide for Canadian freelancers and small business owners: going solo, winning clients, pricing, retainers, contracts, HST, incorporating and paying yourself. $29 CAD.',
    pitch:
      'A 143-page guide to earning a living from your own business in Canada: finding clients, pricing and raising rates, recurring revenue, contracts, tax, incorporating and paying yourself.',
    lede:
      'This book is about earning a living from your own business: freelancing, consulting, contracting or a small service business. Most of it is about money coming in, from deciding what to sell and finding clients to pricing, retainers and growing past what you can do alone. Part 4 covers the paperwork, protection and cash flow, and Part 5 covers keeping more of it, including when to incorporate and how to pay yourself.',
    whoFor: [
      'Employees thinking about leaving a paycheque to freelance or consult',
      'Freelancers and consultants who need more clients or more money per client',
      'Service business owners ready to hire, fund growth or open a location',
      'Self-employed Canadians deciding whether to incorporate and how to pay themselves',
    ],
    notFor: [
      'Readers looking for a small extra income alongside a job (see The Canadian Side Hustle Guide)',
    ],
    highlights: [
      'Can you afford to leave your paycheque? The math, worked through before you resign',
      'First clients, marketing for a business of one, proposals that close',
      'Pricing your services, raising rates, retainers and productized packages',
      'Clients outside Canada, contracts and getting paid, registering and insuring',
      'Self-employed tax essentials, when to incorporate, salary versus dividends, and retiring without a pension',
      '"Get it in writing" boxes naming the clause, form or record to keep',
    ],
    examplesIntro: 'Three illustrative people carry the examples, built from real 2026 tax rates, rules and market data.',
    examples: [
      { name: 'Nadia Haddad', detail: '31, Ottawa brand designer who left a $66,000 agency job to freelance on January 1, 2026' },
      { name: 'Ravi Krishnan', detail: '44, Toronto IT consultant billing $135 an hour: one big client, incorporating, salary versus dividends' },
      { name: 'Lauren Fischer', detail: '38, Kelowna mobile dog groomer opening a storefront salon: funding, a first employee, cash flow' },
    ],
    parts: [
      { name: 'Part 1: Make the Leap', chapters: ['Ready to Go Solo', 'Finding Your Offer', 'Your One-Page Plan'] },
      { name: 'Part 2: Win Clients', chapters: ['Your First Clients', 'Marketing for a Business of One', 'Proposals That Close', 'Pricing Your Services', 'Raising Your Rates'] },
      { name: 'Part 3: Grow Revenue', chapters: ['Retainers and Recurring Revenue', 'Packages and Productized Services', 'Clients Outside Canada', 'Help, Partners and Your First Hire', 'Funding Growth'] },
      { name: 'Part 4: Run and Protect It', chapters: ['Contracts and Getting Paid', 'Registering and Insuring Your Business', 'Banking, Bookkeeping and Cash Flow', 'Your Safety Net'] },
      { name: 'Part 5: Keep More of It', chapters: ['Self-Employed Tax Essentials', 'When to Incorporate', 'Paying Yourself', 'Retiring Without a Pension', 'Selling Your Business'] },
    ],
    backMatter: ['Quick reference', 'Glossary', 'Your one-page business plan'],
    freeUpdate: 'Buyers of the 2026 edition receive one free update in the new year, covering Federal Budget 2026 and the 2027 figures.',
    extraFaqs: [],
    related: ['side-hustle-guide', 'tax-guide', 'raise-guide'],
  },
  {
    slug: 'investing-guide',
    kind: 'book',
    title: 'The Canadian Investing Guide',
    shortTitle: 'Investing Guide',
    subtitle: 'Everything You Need to Know to Build Wealth with Confidence',
    edition: '2026',
    series: 'Investing',
    pages: 236,
    chapterCount: 32,
    approxWords: '51,300',
    formats: 'PDF + editable Word (DOCX)',
    currentAs: '2026 figures (built June 2026)',
    cover: '/images/ebooks/investing-guide-cover.webp',
    coverPng: '/images/ebooks/investing-guide-cover.png',
    metaDescription:
      'A 236-page, 32-chapter guide to investing in Canada: TFSA, RRSP, FHSA, RESP, ETFs, asset allocation and location, brokerages, tax and a 90-day plan. $29 CAD.',
    pitch:
      'A 236-page guide to investing in Canada from the ground up: every registered account, what to invest in, where to hold it, choosing a brokerage and a 90-day action plan.',
    lede:
      'This book covers the accumulation phase: building a portfolio from wherever you are now. It explains every account (TFSA, RRSP, FHSA, RESP and taxable), the order to fill them, what to invest in and what to avoid, how to set your asset allocation and where to hold each investment, then how to buy your first ETF, rebalance and keep going. Every chapter ends with a summary and an action checklist.',
    whoFor: [
      'Beginners who have heard of TFSAs and RRSPs but have not started investing',
      'Intermediate investors who want to check account order and asset location',
      'Anyone leaving high-fee bank mutual funds for low-cost ETFs',
      'Families investing for a first home (FHSA) or a child’s education (RESP)',
    ],
    notFor: [
      'Readers looking for stock tips, crypto plays or a system to beat the market',
      'Retirees planning withdrawals (see The Canadian Retirement Guide)',
    ],
    highlights: [
      '32 chapters in seven parts, from mindset to templates and checklists',
      'A chapter on each registered account, then how to choose the right account order',
      'Asset allocation, asset location, rebalancing and tax optimization for investors',
      'The 14 most expensive mistakes, starter portfolios by net worth and a 90-day action plan',
      'Brokerage and robo-advisor reference guide, calculators, websites and data sources',
      'Includes an editable Word version',
    ],
    examplesIntro: 'Fictional characters at different ages, incomes and life stages show what the math looks like.',
    examples: [
      { name: 'Sarah and Mike', detail: 'Both 30, both earning $70,000 in Toronto; one starts investing $500 a month, one waits' },
      { name: 'Priya, James and Lin', detail: 'Worked examples at other incomes and stages, such as James optimizing his RRSP at $120,000' },
    ],
    parts: [
      { name: 'Part 1: Foundations', chapters: ['Why Investing Matters More Than You Think', "The Investor's Mindset", 'Before You Invest a Dollar'] },
      { name: 'Part 2: The Accounts', chapters: ['The TFSA', 'The RRSP', 'The FHSA', 'RESPs', 'Non-Registered (Taxable) Accounts', 'Choosing the Right Account Order'] },
      { name: 'Part 3: What to Invest In', chapters: ['Asset Classes Demystified', 'Stocks and the Canadian Market', "ETFs: The Canadian Investor's Best Friend", 'Bonds, GICs, and Fixed Income', 'Dividend Investing in Canada', 'What to Avoid'] },
      { name: 'Part 4: Building and Managing Your Portfolio', chapters: ['Asset Allocation', 'Where to Hold Your Investments', 'Choosing a Brokerage or Robo-Advisor', 'Executing Your First Investment', 'Rebalancing and Maintenance'] },
      { name: 'Part 5: Advanced Topics', chapters: ['Tax Optimization for Investors', 'Investing Through Life Stages', 'When Things Go Wrong', 'Bridging to Retirement'] },
      { name: 'Part 6: Putting It Together', chapters: ['The 14 Most Expensive Mistakes', 'Starter Portfolios by Net Worth', 'Your 90-Day Action Plan'] },
      { name: 'Part 7: Reference Toolkit', chapters: ['Brokerages and Robo-Advisors: Reference Guide', 'Essential Calculators and Tools', 'Recommended Reading and Following', 'Key Websites and Data Sources', 'Templates and Checklists'] },
    ],
    backMatter: ['Appendices with reference tables'],
    extraFaqs: [
      {
        question: 'How is this different from The Canadian Index Investing Guide?',
        answer:
          'The Canadian Investing Guide covers investing in Canada from the ground up: every account, every asset class and how to build a portfolio. The Index Investing Guide assumes you know the accounts and goes deep on one approach: a low-cost index ETF portfolio and how to stick with it.',
      },
    ],
    related: ['index-investing-guide', 'retirement-guide', 'tax-guide'],
  },
  {
    slug: 'index-investing-guide',
    kind: 'book',
    title: 'The Canadian Index Investing Guide',
    shortTitle: 'Index Investing Guide',
    subtitle: 'Build a Low-Cost ETF Portfolio You’ll Stick With',
    edition: '2026 Edition',
    series: 'Investing',
    pages: 152,
    chapterCount: 19,
    approxWords: '39,700',
    formats: 'PDF',
    currentAs: 'Rules and limits for the 2026 tax year',
    cover: '/images/ebooks/index-investing-guide-cover.webp',
    coverPng: '/images/ebooks/index-investing-guide-cover.png',
    metaDescription:
      'A 152-page, 19-chapter guide to index investing in Canada: fees, your stock and bond mix, choosing ETFs, asset location, US withholding tax, rebalancing and staying the course. $29 CAD.',
    pitch:
      'A 152-page guide for Canadians who have chosen low-cost index ETFs: design the portfolio, put each fund in the right account, run it once a year and stick with it.',
    lede:
      'This book is for one kind of investor: someone who has decided, or nearly decided, that low-cost index ETFs are the way to go. Part 1 shows why indexing works and what fees really cost. Part 2 helps you choose your mix and your funds. Part 3 puts each fund in the right account and handles the tax quirks Canadians face. Part 4 covers buying, rebalancing and a once-a-year review, and Part 5 is about the hard part: staying put.',
    whoFor: [
      'Canadians who own, or plan to own, an all-in-one ETF in a TFSA or RRSP',
      'Investors with RRSP money still in a bank mutual fund who are thinking of moving it',
      'DIY investors sorting out asset location, US withholding tax and Norbert’s Gambit',
      'Anyone who wants a plan they can set up once and keep',
    ],
    notFor: [
      'Complete beginners who need the accounts explained from scratch (there is a two-page refresher; The Canadian Investing Guide covers the basics in full)',
      'Readers who want to pick individual stocks or time the market',
    ],
    highlights: [
      '19 chapters in five parts, with a one-page Index Plan at the back',
      'Why indexing wins, using SPIVA scorecard data, and what fees really cost over 30 years',
      'One fund or several, choosing ETFs and currency hedging',
      'Asset location, US withholding tax, US-listed ETFs and Norbert’s Gambit, and indexing in a taxable account',
      'Rebalancing, an annual review, tempting detours and leaving an advisor or robo',
      'Checklists, tools and quick-reference tables',
    ],
    examplesIntro: 'One investor is followed from start to finish.',
    examples: [
      { name: 'Doug', detail: 'A 36-year-old physiotherapist in Calgary who moves from a bank fund to a simple ETF portfolio' },
    ],
    parts: [
      { name: 'Part 1: Why Index', chapters: ['Why Indexing Wins', 'What Fees Really Cost', 'Inside an Index ETF'] },
      { name: 'Part 2: Design the Portfolio', chapters: ['Your Stock and Bond Mix', 'Canada, the US and the World', 'One Fund or Several', 'Choosing Your ETFs', 'Currency Hedging'] },
      { name: 'Part 3: Put Each Fund in the Right Account', chapters: ['Asset Location', 'US Withholding Tax', 'US-Listed ETFs and Norbert’s Gambit', 'Indexing in a Taxable Account'] },
      { name: 'Part 4: Run It', chapters: ['Buying and Automating', 'Rebalancing', 'Your Annual Review'] },
      { name: 'Part 5: Stick With It', chapters: ['Staying the Course', 'Tempting Detours', 'Leaving an Advisor or Robo', 'As Your Life Changes'] },
    ],
    backMatter: ['Your Index Plan', 'Checklists and tools', 'Quick-reference tables', 'Glossary', 'Sources', 'Change log'],
    extraFaqs: [
      {
        question: 'Does it recommend specific ETFs?',
        answer:
          'Funds and tickers appear as dated examples of a method, not as recommendations. Check current fees and holdings on the fund provider’s site before you buy.',
      },
    ],
    related: ['investing-guide', 'retirement-guide', 'tax-guide'],
  },
];

export const BUNDLES: EbookBundle[] = [
  {
    slug: 'earn-more-bundle',
    kind: 'bundle',
    title: 'The Earn More Bundle',
    shortTitle: 'Earn More Bundle',
    subtitle: 'The Canadian Side Hustle Guide, The Canadian Raise Guide and The Canadian Self-Employed Guide',
    books: ['side-hustle-guide', 'raise-guide', 'self-employed-guide'],
    cover: '/images/ebooks/side-hustle-guide-cover.webp',
    coverPng: '/images/ebooks/side-hustle-guide-cover.png',
    metaDescription:
      'All three Earn More guides for Canadians: side hustles, raises and promotions, and self-employment. 408 pages, 66 chapters, PDF. One price for the set.',
    pitch:
      'All three Earn More guides in one purchase: earning on the side, earning more as an employee, and earning a living from your own business.',
    lede:
      'The Earn More series covers the three ways most Canadians raise their income: a side hustle alongside a job, a bigger paycheque from an employer, and a business of their own. Each book follows the same format, with worked examples, a fill-in "Your case", a ten-minute task and a checklist at the end of every chapter. The bundle gets you all three PDFs in one purchase.',
    whoFor: [
      'Anyone deciding between asking for a raise, starting a side hustle or going out on their own',
      'Side hustlers who expect to grow into a full business',
      'Employees planning a move to freelancing in the next few years',
    ],
    extraFaqs: [
      {
        question: 'Do I get three separate files?',
        answer: 'Yes. The bundle is the same three PDFs sold individually, delivered together.',
      },
    ],
  },
];

export type Product = Ebook | EbookBundle;

export const ALL_PRODUCTS: Product[] = [...EBOOKS, ...BUNDLES];

export function getBook(slug: string): Ebook | undefined {
  return EBOOKS.find((book) => book.slug === slug);
}

export function getProduct(slug: string): Product | undefined {
  return ALL_PRODUCTS.find((product) => product.slug === slug);
}

export function priceCad(slug: ProductSlug): number {
  return PRICES_CAD[slug];
}

export function formatPrice(slug: ProductSlug): string {
  return `$${PRICES_CAD[slug]} CAD`;
}

export function isBuyable(slug: ProductSlug): boolean {
  return CHECKOUT_URLS[slug].trim().length > 0;
}

export function salesPath(slug: ProductSlug): string {
  return `/ebooks/${slug}/`;
}

export function thankYouPath(slug: ProductSlug): string {
  return `/ebooks/${slug}/thank-you/`;
}

/** Sum of the individual book prices in a bundle (a real list price, not an invented "was" price). */
export function bundleListPrice(bundle: EbookBundle): number {
  return bundle.books.reduce((sum, slug) => sum + PRICES_CAD[slug], 0);
}

/**
 * Stripe Payment Link URL with UTM tags and a client_reference_id so Stripe records
 * where the purchase started. Returns '' when the product is not on sale yet.
 */
export function checkoutUrl(slug: ProductSlug, placement: string): string {
  const base = CHECKOUT_URLS[slug].trim();
  if (!base) return '';
  const url = new URL(base);
  url.searchParams.set('utm_source', 'site');
  url.searchParams.set('utm_medium', 'sales_page');
  url.searchParams.set('utm_campaign', slug.replace(/-/g, '_'));
  url.searchParams.set('utm_content', placement);
  url.searchParams.set('client_reference_id', `co_${slug}_${placement}`.replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 200));
  return url.toString();
}

/** On-site sales page link with UTM tags, for CTAs in posts and elsewhere on the site. */
export function salesUrlWithUtm(slug: ProductSlug, medium: 'cta_full' | 'cta_compact' | string, content: string): string {
  const params = new URLSearchParams({
    utm_source: 'site',
    utm_medium: medium,
    utm_campaign: slug.replace(/-/g, '_'),
    utm_content: content,
  });
  return `${salesPath(slug)}?${params.toString()}`;
}

/**
 * Which product a blog post's end-of-post CTA promotes. Categories without a book
 * (Credit Cards, Real Estate, Budgeting & Saving) return null and show no CTA.
 */
export const CATEGORY_EBOOKS: Record<string, { default: ProductSlug | null; bySubcategory?: Record<string, ProductSlug> }> = {
  taxes: { default: 'tax-guide' },
  retirement: { default: 'retirement-guide' },
  'government-benefits': { default: 'government-benefits-guide' },
  insurance: { default: 'insurance-guide' },
  investing: {
    default: 'investing-guide',
    bySubcategory: { 'passive-etf': 'index-investing-guide' },
  },
  'earning-more': {
    default: 'earn-more-bundle',
    bySubcategory: {
      'side-hustles': 'side-hustle-guide',
      employee: 'raise-guide',
      entrepreneur: 'self-employed-guide',
    },
  },
  'credit-cards': { default: null },
  'real-estate': { default: null },
  'budgeting-saving': { default: null },
};

export function ebookForPost(categorySlug: string, subcategory?: string): ProductSlug | null {
  const entry = CATEGORY_EBOOKS[categorySlug];
  if (!entry) return null;
  if (subcategory && entry.bySubcategory?.[subcategory]) return entry.bySubcategory[subcategory];
  return entry.default;
}

export type DownloadLinks = { folder?: string; zip?: string };

/** Buyer download links from the NEXT_PUBLIC_EBOOK_DOWNLOADS build variable (never committed). */
export function downloadLinks(slug: ProductSlug): DownloadLinks | null {
  const raw = process.env.NEXT_PUBLIC_EBOOK_DOWNLOADS;
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Record<string, DownloadLinks>;
    const entry = parsed[slug];
    if (!entry || (!entry.folder && !entry.zip)) return null;
    return entry;
  } catch {
    return null;
  }
}
