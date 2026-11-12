/**
 * Subcategory taxonomy (content strategy §3c): 57 subcategories across the 9 categories.
 *
 * - SUBCATEGORIES feeds CATEGORIES in src/lib/site.ts (hub pages, breadcrumbs, sitemap, llms.txt).
 * - HUB_CONTENT is the answer-first intro and "start here" path on each hub page.
 * - PILLAR_SLUGS are the one pillar guide per category that sits at the category root (no subcategory).
 * - SUBCATEGORY_ASSIGNMENTS sets the subcategory of live posts whose record has none.
 *   New posts set `subcategory` on the record instead.
 *
 * Subcategory is metadata only: post URLs stay /blog/<slug>/. Renaming a hub slug changes its URL
 * and needs a 301 and Andrew's OK.
 */
export type SubcategoryRecord = {
  slug: string;
  name: string;
  pageTitle: string;
  metaDescription: string;
  description: string;
};

export const SUBCATEGORIES: Record<string, SubcategoryRecord[]> = {
  "investing": [
    {
      slug: "passive-etf",
      name: "Passive ETF Investing",
      pageTitle: "Passive ETF Investing in Canada",
      metaDescription:
        "Couch Potato-style investing for Canadians: all-in-one ETFs, model portfolios by risk level, asset location, rebalancing, and staying invested in a crash.",
      description: "All-in-one ETFs, model portfolios, asset location, and holding on in a crash.",
    },
    {
      slug: "dividend-investing",
      name: "Dividend Investing",
      pageTitle: "Dividend Investing in Canada",
      metaDescription:
        "Dividend income for Canadians: the dividend tax credit by province, banks, utilities, pipelines and telcos, DRIPs, yield traps, and covered-call ETFs.",
      description: "Dividend tax credit, banks, utilities, pipelines, and income that lasts.",
    },
    {
      slug: "stock-picking",
      name: "Stock Picking",
      pageTitle: "DIY Stock Picking in Canada",
      metaDescription:
        "Picking stocks for total return in Canada: reading filings, valuation basics, Canadian vs US stocks, position sizing, when to sell, and ACB records.",
      description: "Analyzing a business, valuation, sizing, selling, and ACB records.",
    },
    {
      slug: "hands-off",
      name: "Hands-Off Investing",
      pageTitle: "Hands-Off Investing in Canada",
      metaDescription:
        "Robo-advisors, bank advisors, mutual funds, and fee-only planners in Canada: what you really pay, questions to ask, red flags, and how to switch.",
      description: "Robo-advisors, advisors, and planners: what you pay and how to choose.",
    },
    {
      slug: "brokerages-platforms",
      name: "Brokerages & Platforms",
      pageTitle: "Canadian Online Brokerages and Investing Platforms",
      metaDescription:
        "Choosing a Canadian online brokerage: fees, USD accounts, FX conversion, Norbert's Gambit, account protection and switching platforms.",
      description: "Choosing and using an online brokerage: fees, FX, protection and transfers.",
    },
    {
      slug: "accounts-asset-location",
      name: "Accounts & Asset Location",
      pageTitle: "Investing Accounts and Asset Location in Canada",
      metaDescription:
        "Which investing account to open and fund first in Canada: TFSA, RRSP, FHSA, RESP, corporate and taxable accounts, and which investments go where.",
      description: "Which account first, how to fund it, and which investment goes in which account.",
    },
    {
      slug: "fixed-income-cash",
      name: "Bonds, GICs & Cash in a Portfolio",
      pageTitle: "Bonds, GICs and Cash in a Canadian Portfolio",
      metaDescription:
        "The safe side of a Canadian portfolio: bond ETFs, GICs, high-interest savings ETFs and cash, how each is taxed and where each belongs.",
      description: "Bond ETFs, GICs and cash as part of an investment portfolio.",
    },
    {
      slug: "us-global",
      name: "US & Global Investing",
      pageTitle: "US and Global Investing for Canadians",
      metaDescription:
        "Investing outside Canada: US-listed vs Canadian-listed ETFs, foreign withholding tax by account, Norbert's Gambit, currency and estate considerations.",
      description: "US and international holdings: withholding tax, currency and listing choices.",
    },
  ],
  "taxes": [
    {
      slug: "brackets-basics",
      name: "Tax Brackets & How Tax Works",
      pageTitle: "Canadian Tax Brackets and How Income Tax Works",
      metaDescription:
        "How Canadian income tax works: federal and provincial brackets, marginal vs average rates, take-home pay, bonus and severance withholding, and AMT.",
      description: "Brackets, marginal rates, take-home pay and why withholding differs from what you owe.",
    },
    {
      slug: "credits-deductions",
      name: "Credits & Deductions",
      pageTitle: "Canadian Tax Credits and Deductions",
      metaDescription:
        "Canadian tax credits and deductions explained: what qualifies, refundable vs non-refundable, medical, donations, family credits and income splitting.",
      description: "What you can claim, what each claim is worth, and the ones people miss.",
    },
    {
      slug: "registered-accounts-tax",
      name: "TFSA, RRSP & FHSA Tax Rules",
      pageTitle: "TFSA, RRSP and FHSA Tax Rules in Canada",
      metaDescription:
        "Tax rules for the TFSA, RRSP, spousal RRSP and FHSA: contribution room, deductions, withdrawals, over-contribution penalties and which account comes first.",
      description: "Contribution room, deductions, withdrawals and penalties for the registered accounts.",
    },
    {
      slug: "investment-tax",
      name: "Investment & Capital Gains Tax",
      pageTitle: "Investment and Capital Gains Tax in Canada",
      metaDescription:
        "How investment income is taxed in Canada: capital gains, dividends, interest, crypto and employee equity, with worked examples and planning moves.",
      description: "Capital gains, dividends, interest, crypto and equity compensation.",
    },
    {
      slug: "self-employed-business-tax",
      name: "Self-Employed & Small Business Tax",
      pageTitle: "Self-Employed and Small Business Tax in Canada",
      metaDescription:
        "Tax for freelancers, side hustlers and small business owners in Canada: T2125, instalments, GST/HST, incorporating, salary vs dividends and holdcos.",
      description: "T2125, instalments, GST/HST, incorporation and paying yourself.",
    },
    {
      slug: "life-events-estates",
      name: "Life Events & Estates",
      pageTitle: "Tax for Life Events and Estates in Canada",
      metaDescription:
        "Tax when life changes in Canada: marriage and common-law status, children, retirement, inheritance, gifts to family and the final return after a death.",
      description: "Marriage, kids, retirement, gifts, inheritance and the final return.",
    },
    {
      slug: "filing-cra",
      name: "Filing, CRA & Disputes",
      pageTitle: "Filing Your Return and Dealing With the CRA",
      metaDescription:
        "Filing your Canadian tax return: deadlines, tax software, records, CRA My Account, audits, changing a return and working with a tax professional.",
      description: "Deadlines, software, records, audits and changing a return.",
    },
    {
      slug: "forms-slips",
      name: "CRA Forms, Lines & Slips",
      pageTitle: "CRA Forms, Lines and Slips Explained",
      metaDescription:
        "Line-by-line guides to CRA forms, return lines and tax slips, with filled-in illustrative examples, common errors and links to the official form.",
      description: "Field-by-field walkthroughs of CRA forms, lines and slips.",
    },
  ],
  "real-estate": [
    {
      slug: "first-time-buyers",
      name: "First-Time Buyers",
      pageTitle: "First-Time Home Buyers in Canada",
      metaDescription:
        "First-time home buyer guides for Canada: FHSA, Home Buyers' Plan, GST/HST rebates, rent vs buy, and the order of operations from saving to closing.",
      description: "FHSA, HBP, rebates, rent vs buy and the order of operations.",
    },
    {
      slug: "mortgages-renewal",
      name: "Mortgages & Renewal",
      pageTitle: "Mortgages and Mortgage Renewal in Canada",
      metaDescription:
        "Canadian mortgage guides: fixed vs variable, the stress test, CMHC insurance, prepayment and penalties, renewal and switching lenders.",
      description: "Choosing, prepaying and renewing a Canadian mortgage.",
    },
    {
      slug: "heloc-smith-manoeuvre",
      name: "HELOC & Smith Manoeuvre",
      pageTitle: "HELOCs and the Smith Manoeuvre in Canada",
      metaDescription:
        "Home equity lines of credit and the Smith Manoeuvre in Canada: readvanceable mortgages, interest deductibility, cash damming and the risks.",
      description: "HELOCs, readvanceable mortgages and making interest deductible.",
    },
    {
      slug: "closing-costs-transfer-tax",
      name: "Closing Costs & Land Transfer Tax",
      pageTitle: "Closing Costs and Land Transfer Tax in Canada",
      metaDescription:
        "Closing costs when buying a home in Canada: land transfer tax by province, municipal taxes, first-time buyer rebates, legal fees and other costs.",
      description: "Land transfer tax by province and the other costs due on closing.",
    },
    {
      slug: "landlords-rental",
      name: "Landlords & Rental Property",
      pageTitle: "Landlords and Rental Property in Canada",
      metaDescription:
        "Rental property in Canada: deductions and CCA, principal residence vs rental, REITs vs direct ownership, multi-property math and incorporating.",
      description: "Rental property tax, cash flow, and when to own more than one.",
    },
    {
      slug: "selling-downsizing",
      name: "Selling, Moving & Downsizing",
      pageTitle: "Selling, Moving and Downsizing in Canada",
      metaDescription:
        "Selling a home in Canada: the principal residence exemption, selling costs, moving, and downsizing in retirement.",
      description: "Selling a home, moving, and downsizing.",
    },
  ],
  "credit-cards": [
    {
      slug: "cash-back",
      name: "Cash Back Cards",
      pageTitle: "Cash Back Credit Cards in Canada",
      metaDescription:
        "Cash back credit cards in Canada by spending category: groceries, gas, Costco and everyday spend, with the annual-fee math for real budgets.",
      description: "Cash back cards by spending category, with fee break-even math.",
    },
    {
      slug: "travel-points",
      name: "Travel Rewards & Points",
      pageTitle: "Travel Rewards Credit Cards and Points in Canada",
      metaDescription:
        "Travel rewards cards and points programs in Canada: Aeroplan, Amex Membership Rewards and bank points, how to value them and which card fits.",
      description: "Travel cards, points programs, and what a point is actually worth.",
    },
    {
      slug: "no-fee-student-newcomer",
      name: "No-Fee, Student & Newcomer Cards",
      pageTitle: "No-Fee, Student and Newcomer Credit Cards in Canada",
      metaDescription:
        "No annual fee credit cards, student cards and cards for newcomers to Canada: what you can qualify for, what each earns and how to build credit.",
      description: "Cards with no annual fee, and cards you can get as a student or newcomer.",
    },
    {
      slug: "credit-score-building",
      name: "Credit Scores & Rebuilding",
      pageTitle: "Credit Scores and Rebuilding Credit in Canada",
      metaDescription:
        "How credit scores work in Canada: Equifax and TransUnion, utilization, applications, secured cards and the steps that rebuild a credit file.",
      description: "How Canadian credit scores work and how to raise or rebuild one.",
    },
    {
      slug: "premium-travel-perks",
      name: "Premium Cards & Travel Perks",
      pageTitle: "Premium Credit Cards and Travel Perks in Canada",
      metaDescription:
        "Premium credit cards in Canada: lounge access, travel insurance, travel credits and portals, and when an annual fee actually pays for itself.",
      description: "Premium cards, lounges, travel insurance and whether the fee pays off.",
    },
    {
      slug: "balance-transfer-low-interest",
      name: "Balance Transfer & Low-Interest Cards",
      pageTitle: "Balance Transfer and Low-Interest Credit Cards in Canada",
      metaDescription:
        "Balance transfer and low-interest credit cards in Canada: promo rates, transfer fees, what happens after the promo ends, and when a loan is cheaper.",
      description: "Moving card debt to a lower rate, and what it really costs.",
    },
    {
      slug: "card-strategy",
      name: "Card Strategy & Business Cards",
      pageTitle: "Credit Card Strategy and Business Cards in Canada",
      metaDescription:
        "Credit card strategy in Canada: welcome bonuses, minimum spend, card stacks by persona, business cards for sole props and corporations, and rewards math.",
      description: "Welcome bonuses, card stacks, business cards and the rewards math.",
    },
  ],
  "retirement": [
    {
      slug: "retirement-planning",
      name: "Retirement Planning",
      pageTitle: "Retirement Planning in Canada",
      metaDescription:
        "Retirement planning in Canada: how much you need, planning by age, TFSA vs RRSP for retirement, healthcare and long-term care costs, and mistakes to avoid.",
      description: "How much you need, planning by age, and the costs people underestimate.",
    },
    {
      slug: "decumulation-rrif",
      name: "Withdrawals & RRIFs",
      pageTitle: "Retirement Withdrawals and RRIFs in Canada",
      metaDescription:
        "Turning savings into retirement income in Canada: RRSP to RRIF conversion, RRIF minimums, withdrawal order, meltdown strategies, annuities and pension splitting.",
      description: "Withdrawal order, RRIF rules, annuities and pension income splitting.",
    },
    {
      slug: "pensions-lira",
      name: "Pensions & LIRAs",
      pageTitle: "Workplace Pensions and LIRAs in Canada",
      metaDescription:
        "Workplace pensions in Canada: defined benefit vs defined contribution, commuted value decisions, LIRAs and LIFs, and unlocking rules by province.",
      description: "DB vs DC pensions, commuted values, LIRAs and unlocking.",
    },
    {
      slug: "cpp-oas-timing",
      name: "CPP & OAS Timing",
      pageTitle: "CPP and OAS Timing Decisions",
      metaDescription:
        "When to take CPP and OAS: the cost of starting early, the reward for waiting, the OAS clawback, GIS, and how timing fits your withdrawal plan.",
      description: "When to start CPP and OAS, and the clawback.",
    },
    {
      slug: "estate-legacy",
      name: "Estate & Legacy",
      pageTitle: "Estate Planning and Legacy in Canada",
      metaDescription:
        "Estate planning in Canada: wills and powers of attorney, beneficiaries, probate fees by province, tax-efficient wealth transfer and digital assets.",
      description: "Wills, beneficiaries, probate and passing on wealth tax-efficiently.",
    },
    {
      slug: "early-retirement",
      name: "Early Retirement & Lifestyle",
      pageTitle: "Early Retirement and Retirement Lifestyle in Canada",
      metaDescription:
        "Early retirement in Canada: FIRE bridge years, CPP impact, retiring at 55, and building a retirement you actually enjoy.",
      description: "Retiring early, the bridge years, and a retirement worth having.",
    },
  ],
  "budgeting-saving": [
    {
      slug: "savings-gics-cash",
      name: "Savings Accounts, GICs & Cash",
      pageTitle: "Savings Accounts, GICs and Cash in Canada",
      metaDescription:
        "Where to keep cash in Canada: high-interest savings accounts, GICs and GIC ladders, cash ETFs and T-bills, with rates dated and CDIC rules explained.",
      description: "High-interest savings, GICs, cash ETFs and where short-term money belongs.",
    },
    {
      slug: "banking",
      name: "Banking & Accounts",
      pageTitle: "Banking and Chequing Accounts in Canada",
      metaDescription:
        "Everyday banking in Canada: no-fee chequing accounts, deposit insurance (CDIC) coverage, and choosing between big banks, online banks and fintechs.",
      description: "Chequing accounts, fees and deposit insurance.",
    },
    {
      slug: "debt-payoff",
      name: "Debt Payoff & Credit Repair",
      pageTitle: "Paying Off Debt in Canada",
      metaDescription:
        "Paying off debt in Canada: whether to pay debt or invest, payoff order, consolidation, consumer proposals vs bankruptcy, and rebuilding afterwards.",
      description: "Payoff order, debt vs investing, and options when debt is unmanageable.",
    },
    {
      slug: "budgeting-systems",
      name: "Budgeting Systems & Apps",
      pageTitle: "Budgeting Systems and Apps for Canadians",
      metaDescription:
        "Budgeting systems for Canadian households: cash flow systems, fixed-cost audits, couples' money systems, automation and budgeting apps.",
      description: "Cash-flow systems, automation, couples' money and budgeting apps.",
    },
    {
      slug: "saving-goals",
      name: "Saving Goals & Emergency Funds",
      pageTitle: "Saving Goals and Emergency Funds in Canada",
      metaDescription:
        "Saving goals for Canadians: how big an emergency fund should be, where to keep it, saving-rate targets that work with Canadian housing and tax.",
      description: "Emergency funds and saving-rate targets that work in Canada.",
    },
  ],
  "earning-more": [
    {
      slug: "employee",
      name: "Employee",
      pageTitle: "Earning More as an Employee in Canada",
      metaDescription:
        "Raises, job offers, severance, overtime, and remote pay for Canadians who earn a salary.",
      description: "Raises, offers, severance, and the pay stub.",
    },
    {
      slug: "entrepreneur",
      name: "Entrepreneur",
      pageTitle: "Earning More as an Entrepreneur in Canada",
      metaDescription:
        "Freelance rates, business registration, first clients, self-employed EI, and raising prices in Canada.",
      description: "Rates, registration, clients, and getting paid.",
    },
    {
      slug: "side-hustles",
      name: "Side Hustles",
      pageTitle: "Side Hustles in Canada",
      metaDescription:
        "Side hustles with published earnings, Marketplace sales, platform reporting, reselling, and creator income.",
      description: "Extra income, and whether it still pays.",
    },
    {
      slug: "career-employment-rights",
      name: "Employment Standards & Rights",
      pageTitle: "Employment Standards and Workers' Rights in Canada",
      metaDescription:
        "Employment standards in Canada: overtime, statutory holiday pay, termination and severance minimums, pay transparency and workplace rights by province.",
      description: "Overtime, stat pay, termination rules and pay transparency by province.",
    },
    {
      slug: "creator-online-income",
      name: "Creator & Online Income",
      pageTitle: "Creator and Online Income in Canada",
      metaDescription:
        "Earning online in Canada: creator income from YouTube and other platforms, digital products, affiliate income and what the CRA expects.",
      description: "Creator platforms, digital products and other online income.",
    },
  ],
  "insurance": [
    {
      slug: "life-insurance",
      name: "Life Insurance",
      pageTitle: "Life Insurance in Canada",
      metaDescription:
        "Life insurance in Canada: how much you need, term vs whole life, cost by age, group vs personal coverage, buying online or through a broker.",
      description: "How much life insurance you need, which kind, and where to buy it.",
    },
    {
      slug: "income-protection",
      name: "Disability & Critical Illness",
      pageTitle: "Disability and Critical Illness Insurance in Canada",
      metaDescription:
        "Protecting your income in Canada: disability insurance, critical illness insurance, group plan gaps and coverage for the self-employed.",
      description: "Disability and critical illness insurance, and the gaps in group plans.",
    },
    {
      slug: "health-dental",
      name: "Health & Dental Insurance",
      pageTitle: "Health and Dental Insurance in Canada",
      metaDescription:
        "Private health and dental insurance in Canada: what provincial plans don't cover, coverage for the self-employed and early retirees.",
      description: "Private health and dental coverage beyond the provincial plan.",
    },
    {
      slug: "travel-insurance",
      name: "Travel Insurance",
      pageTitle: "Travel Insurance for Canadians",
      metaDescription:
        "Travel medical insurance for Canadians: what provincial plans cover abroad, stability clauses, snowbird coverage and credit card travel insurance.",
      description: "Travel medical coverage, stability clauses and snowbird policies.",
    },
    {
      slug: "auto-insurance",
      name: "Auto Insurance",
      pageTitle: "Car Insurance in Canada",
      metaDescription:
        "Car insurance in Canada: public vs private systems by province, how to lower premiums, discounts, deductibles and optional coverages.",
      description: "Public and private car insurance by province, and how to pay less.",
    },
    {
      slug: "home-tenant",
      name: "Home & Tenant Insurance",
      pageTitle: "Home and Tenant Insurance in Canada",
      metaDescription:
        "Home, condo and tenant insurance in Canada: coverage gaps, water damage, liability, rentals and how to avoid paying for the same risk twice.",
      description: "Home, condo and tenant coverage and the gaps that cause denied claims.",
    },
  ],
  "government-benefits": [
    {
      slug: "family-child",
      name: "Family & Child Benefits",
      pageTitle: "Family and Child Benefits in Canada",
      metaDescription:
        "Canada Child Benefit and family benefits: who qualifies, how adjusted family net income and the July reset change payments, and what to file.",
      description: "The Canada Child Benefit and other benefits for families.",
    },
    {
      slug: "seniors-cpp-oas",
      name: "Seniors: CPP, OAS & GIS",
      pageTitle: "Seniors' Benefits: CPP, OAS and GIS",
      metaDescription:
        "Seniors' benefits in Canada: how much CPP you'll get, OAS eligibility and deferral, GIS, how they stack with other income, and how to apply.",
      description: "How CPP, OAS and GIS work, how much they pay and how to apply.",
    },
    {
      slug: "disability",
      name: "Disability Benefits",
      pageTitle: "Disability Benefits and Credits in Canada",
      metaDescription:
        "Disability benefits in Canada: the disability tax credit (T2201), the Canada Disability Benefit, the RDSP, and how the programs connect.",
      description: "The disability tax credit, the Canada Disability Benefit and the RDSP.",
    },
    {
      slug: "employment-insurance",
      name: "Employment Insurance",
      pageTitle: "Employment Insurance in Canada",
      metaDescription:
        "Employment Insurance in Canada: regular and special benefits, how much EI pays, how other income affects it, and how to apply.",
      description: "EI regular and special benefits, amounts and earnings while on claim.",
    },
    {
      slug: "credits-low-income",
      name: "Credits & Low-Income Benefits",
      pageTitle: "Tax-Delivered Credits and Low-Income Benefits in Canada",
      metaDescription:
        "Benefits paid through your tax return: the GST/HST and groceries benefit, the Canada Workers Benefit, dental care, payment dates and how benefits stack.",
      description: "Benefits and credits delivered through the tax return, and when they pay.",
    },
    {
      slug: "provincial-programs",
      name: "Provincial Programs",
      pageTitle: "Provincial Benefit Programs in Canada",
      metaDescription:
        "Provincial and territorial benefits in Canada: how provincial programs test income and residency, and first-home programs beyond the FHSA.",
      description: "Provincial and territorial programs and how their tests work.",
    },
  ],
};

export type HubContent = {
  /** 150–300 words, answer first: who the hub is for and how to use it. */
  intro: string[];
  /** The questions this hub helps the reader decide (shown as a list under the intro). */
  decisions: string[];
  /** 3–5 post slugs in reading order (fewer while the hub is small). */
  startHere: string[];
};

export const HUB_CONTENT: Record<string, HubContent> = {
  "investing/passive-etf": {
    intro: [
      "Passive ETF investing means owning the whole market at low cost and letting time do the work. This hub is for Canadians who want a written stock-and-bond mix, one or a few low-fee ETFs, and a plan they can follow in a bad year.",
      "Start with the DIY ETF portfolio guide, then compare all-in-one ETFs against building your own. The guides cover asset location across the TFSA, RRSP, FHSA and taxable accounts, rebalancing, and how to stay invested when markets fall. Fund facts come from the providers' own pages with the date they were checked.",
      "Choosing a brokerage and the accounts themselves are covered in their own hubs; read them alongside this one.",
    ],
    decisions: ["Which all-in-one ETF matches my risk level?", "Should I hold one fund or build my own mix?", "Which ETF goes in which account?", "How and when should I rebalance?"],
    startHere: [],
  },
  "investing/dividend-investing": {
    intro: [
      "Dividend investing is about building income you can live on, and in Canada it comes with a tax advantage: eligible dividends from Canadian companies get the dividend tax credit in a taxable account. This hub is for investors who want that income to last.",
      "The guides explain the dividend tax credit by province, how to judge a payout before trusting it, DRIPs, yield traps, sector concentration in banks, utilities, pipelines and telcos, and where covered-call ETFs fit. Rules are linked to the CRA and company figures to the issuer's own filings.",
      "If you are unsure whether income or total return suits you, the passive ETF hub is the comparison point.",
    ],
    decisions: ["How much does the dividend tax credit save me in my province?", "Is this dividend safe, or a yield trap?", "Should I use a DRIP?", "Where do covered-call ETFs fit, if anywhere?"],
    startHere: [],
  },
  "investing/stock-picking": {
    intro: [
      "Stock picking is buying individual businesses for total return. This hub is for DIY investors who want to analyze a company properly, size positions so one mistake doesn't sink the portfolio, and keep the records the CRA expects.",
      "The guides cover reading filings on SEDAR+ and EDGAR, valuation basics, Canadian versus US stocks, position sizing, when to sell, and tracking adjusted cost base. They show methods, not tips: no guide here tells you what to buy.",
      "If most of your money should be in index funds with a smaller picking sleeve, read the passive ETF hub first.",
    ],
    decisions: ["How do I read a company's filings?", "How big should one position be?", "When should I sell?", "How do I track adjusted cost base for the CRA?"],
    startHere: [],
  },
  "investing/hands-off": {
    intro: [
      "Hands-off investing means paying someone else to build and manage the portfolio: a robo-advisor, a bank advisor, a mutual fund or a fee-only planner. This hub is for Canadians who want that help and want to know exactly what it costs.",
      "The guides compare what each option really charges, the questions to ask before you sign, red flags, how complaints work, and how to switch without triggering tax in a taxable account. Fees come from the providers' own disclosure pages with the date checked.",
      "If you are weighing doing it yourself instead, the passive ETF hub shows the low-maintenance DIY path.",
    ],
    decisions: ["What does a robo-advisor or advisor really cost me?", "Which questions should I ask before signing?", "What are the red flags?", "How do I switch without triggering tax?"],
    startHere: [],
  },
  "investing/brokerages-platforms": {
    intro: [
      "Your brokerage decides what you pay to buy, hold and convert currency, and how easy your accounts are to manage. This hub is for Canadians choosing a first online brokerage or deciding whether to switch.",
      "Start with the best-brokerages guide, then the head-to-head comparisons. The guides explain trading and account fees, USD accounts and conversion costs, what CIPF protection covers, and how a transfer between institutions works. Every fee comes from the brokerage's own fee page with the date it was checked, and the pages say plainly that a commission to this site never changes a ranking.",
      "Once you've picked a platform, the accounts hub covers which account to open first.",
    ],
    decisions: ["Which brokerage is cheapest for how I invest?", "Do I need a USD account?", "What does CIPF protection cover?", "How do I transfer accounts between brokerages?"],
    startHere: ["best-online-brokerages-canada", "wealthsimple-vs-questrade", "questrade-vs-interactive-brokers-canada", "cipf-vs-cdic-online-broker-canada"],
  },
  "investing/accounts-asset-location": {
    intro: [
      "This hub is about the containers: which account to open, which to fund first, and which investment belongs in which account. Getting the order right can matter as much as the investments themselves, because each account is taxed differently on the way in, while you hold, and on the way out.",
      "The guides cover TFSA contribution timing, corporate versus personal investing, and how to place investments across accounts so tax and foreign withholding land where they cost least. The tax rules for each account live in the Taxes hub for TFSA, RRSP and FHSA rules; these guides focus on opening, funding and investing.",
      "If you haven't chosen a brokerage yet, start with the brokerages hub.",
    ],
    decisions: ["Which account should I open first?", "When in the year should I contribute to my TFSA?", "Should I invest personally or through my corporation?", "Which investment belongs in which account?"],
    startHere: ["tfsa-contribution-optimization", "corporate-vs-personal-investing-canada"],
  },
  "investing/fixed-income-cash": {
    intro: [
      "Every portfolio has a safe side, and this hub is about choosing it: bond ETFs, GICs, high-interest savings ETFs and plain cash. Each one behaves differently when rates move, and interest is fully taxable in a taxable account, so where you hold it matters.",
      "Guides in this hub compare the options by what they do in a portfolio, not by headline yield. Rates and fund facts come from the issuer's own page with the date checked, because they change often. For cash you will spend soon, the Budgeting & Saving hub for savings accounts and GICs is the better starting point.",
      "New guides are being added to this hub.",
    ],
    decisions: ["How much of my portfolio should be bonds or cash?", "Bond ETF or GIC ladder?", "How is interest taxed in each account?", "Where does a high-interest savings ETF fit?"],
    startHere: [],
  },
  "investing/us-global": {
    intro: [
      "Most of the world's stock market is outside Canada, so most portfolios hold US and international investments. This hub covers the costs that come with that: foreign withholding tax that depends on the account, currency conversion, and the choice between US-listed and Canadian-listed funds.",
      "Start with the withholding tax guide, which shows what is lost in each account type, then the Norbert's Gambit walkthrough for converting currency cheaply. Tax rules link to the CRA and treaty sources, and conversion costs come from the brokerages' own pages.",
      "Account choice and brokerage choice are covered in their own hubs; this hub assumes you've made those decisions.",
    ],
    decisions: ["How much foreign withholding tax do I lose in each account?", "US-listed or Canadian-listed ETF?", "How do I convert currency cheaply?", "Do US holdings create estate issues?"],
    startHere: ["us-withholding-tax-by-account-canada", "norberts-gambit-canada-guide"],
  },
  "taxes/brackets-basics": {
    intro: [
      "Start here if you want to know what a raise, a bonus or an RRSP contribution actually does to your tax bill. Canada taxes income in layers: a federal set of brackets plus your province's own brackets, and the rate that matters for most decisions is the marginal rate on the next dollar, not the average rate on all of them.",
      "The guides in this hub explain how the layers stack, how to read take-home pay by province, why a bonus or severance cheque looks over-taxed at source and then settles on the return, and when the alternative minimum tax applies. Every rate is tied to the CRA or the province's own page for the tax year named, and the income tax calculator lets you run your own numbers.",
      "Read this hub before the account and credit hubs: once you know your marginal rate, the RRSP-versus-TFSA question and the value of each credit become arithmetic instead of opinion.",
    ],
    decisions: ["What is my marginal tax rate in my province?", "How much of a raise or bonus do I actually keep?", "Why was so much withheld from my bonus or severance?", "Could the alternative minimum tax apply to me?"],
    startHere: ["federal-tax-brackets", "provincial-tax-rates", "canada-income-tax-calculator", "salary-after-tax-by-province-canada"],
  },
  "taxes/credits-deductions": {
    intro: [
      "This hub is for the line-by-line question: what can I claim, and what is it worth? A deduction lowers taxable income, so it is worth your marginal rate. Most federal credits are non-refundable and are worth the lowest federal rate on the amount, so the same dollar of expense can be worth very different amounts depending on which kind of claim it is.",
      "The guides cover employee deductions, the credits people most often miss, medical expenses, charitable donations (including donating securities), family credits, and the income-splitting tools that are still allowed between spouses. Each one names the tax year, links the CRA page that sets the rule, and shows a worked example so you can see the dollar effect before you file.",
      "If you are filing for a family or a retiree, read the credits guides together: several claims can be transferred or pooled, and the order you claim them in changes the total.",
    ],
    decisions: ["Which deductions and credits can I claim this year?", "Is a deduction or a credit worth more to me?", "Should my spouse or I claim medical expenses and donations?", "Which income-splitting moves are still allowed?"],
    startHere: ["missed-tax-credits", "tax-deductions-employees", "tax-deduction-checklist", "medical-expense-tax-credit-canada", "charitable-donation-tax-credit-canada"],
  },
  "taxes/registered-accounts-tax": {
    intro: [
      "This hub covers the tax rules of Canada's registered accounts: how contribution room is created, what a deduction is worth, what happens when you withdraw, and what the CRA charges when you put in too much. It is the rules side; opening an account and choosing investments live in the Investing hub for accounts and asset location.",
      "Use the comparison guide first if you are deciding where the next dollar goes. Then read the account you picked: the RRSP playbook, TFSA strategies, the FHSA guide, spousal RRSPs and the withdrawal-tax guide each explain one account in depth, with the limits for the year named and linked to the CRA.",
      "Over-contributions are the most expensive mistake in this hub, so the penalty guide shows how the monthly tax is calculated and how to fix it before it compounds.",
    ],
    decisions: ["Should my next dollar go to an RRSP, TFSA or FHSA?", "How much contribution room do I have, and where do I find it?", "What tax do I pay when I withdraw?", "How do I fix an over-contribution before the penalty grows?"],
    startHere: ["rrsp-vs-tfsa-vs-fhsa", "contribution-limits", "rrsp-playbook", "tfsa-strategies", "fhsa-guide"],
  },
  "taxes/investment-tax": {
    intro: [
      "Investment income is not taxed one way in Canada. Interest is fully taxable, eligible Canadian dividends get the dividend tax credit, and only part of a capital gain is included in income. That difference is why where you hold an investment, and when you sell it, can matter as much as what you buy.",
      "The guides in this hub walk through capital gains and how to calculate them, tax-efficient investing in taxable accounts, crypto (capital versus business income), and RSUs and stock options from an employer. Each rule is tied to the CRA page for the tax year named, with worked numbers so you can check your own situation.",
      "Reporting a sale on the return is covered in the CRA forms hub; account choice and asset location are covered in the Investing hub.",
    ],
    decisions: ["How is a capital gain calculated and reported?", "Which investments belong in a taxable account?", "How are my RSUs or stock options taxed?", "Is my crypto activity capital or business income?"],
    startHere: ["capital-gains-tax-canada", "tax-efficient-investing", "rsu-stock-options-tax-canada", "crypto-tax-canada"],
  },
  "taxes/self-employed-business-tax": {
    intro: [
      "This hub is for anyone with income that doesn't come on a T4: freelancers, consultants, side hustlers, gig drivers and incorporated owners. Self-employment changes three things at once: you report business income and expenses yourself, you pay both halves of CPP contributions, and the CRA may expect instalments instead of waiting for the return.",
      "Start with the self-employed tax guide, then the side-hustle guide if the business is small. The incorporation guides cover when a corporation pays off, salary versus dividends, and when a holding company earns its keep. Instalment and GST/HST rules are explained with the thresholds for the year named and linked to the CRA.",
      "Earning the income — rates, clients, registration — lives in the Earning More hubs; this hub prices that income after it exists.",
    ],
    decisions: ["What can I deduct against business income?", "Do I have to register for GST/HST, and when?", "Do I owe quarterly instalments?", "Would incorporating, salary or dividends lower my tax?"],
    startHere: ["self-employed-tax-guide", "side-hustle-taxes-canada", "quarterly-tax-instalments", "should-you-incorporate", "salary-vs-dividends-incorporated-canada"],
  },
  "taxes/life-events-estates": {
    intro: [
      "Life events change your tax picture faster than any raise. Becoming common-law changes your benefits, a new child adds credits and benefits, retiring changes which income splitting is allowed, and a death triggers a final return and often a large deemed sale of assets.",
      "This hub collects the guides that walk through each event in the order the CRA sees it: what changes, what to file, and what deadlines apply. Every rule links to the CRA page that sets it, and worked examples use clearly labelled illustration amounts so you can see the effect before it happens.",
      "If you are handling an estate, the CRA forms hub has the line-by-line guides for the returns; the Retirement estate hub covers wills, beneficiaries and probate.",
    ],
    decisions: ["What changes on my return when I marry or become common-law?", "How is income taxed when I retire?", "What tax is due when someone dies, and who files?", "Are gifts to family taxed or attributed back to me?"],
    startHere: ["life-events-tax-implications", "retirement-income-planning"],
  },
  "taxes/filing-cra": {
    intro: [
      "This hub is about the mechanics of filing and the relationship with the Canada Revenue Agency: when things are due, how to file, what to keep, and what to do when the CRA writes back. Most penalties come from missed dates and missing records, not from the tax itself.",
      "Start with the deadlines and the tax calendar, then pick filing software. The record-keeping and audit guides explain what the CRA can ask for and how long to keep it, and the year-end checklist lists the moves that must happen by December 31. Each date is tied to the CRA page for the year named.",
      "If something on a filed return was wrong, the guides on changing a return and working with a tax professional explain your options before interest builds.",
    ],
    decisions: ["When is my return due, and when is the balance due?", "Which tax software fits my return?", "What records do I keep, and for how long?", "What should I do if the CRA reviews or audits me?"],
    startHere: ["cra-deadlines", "tax-planning-calendar", "best-tax-software", "tax-record-keeping", "cra-audit-guide"],
  },
  "taxes/forms-slips": {
    intro: [
      "This hub holds the line-by-line guides: one CRA form, line or slip per page, explained field by field. Each guide links the official form on Canada.ca, shows a filled-in illustrative example with clearly labelled example amounts, and lists the errors that most often trigger a CRA letter.",
      "These pages are reference material for filing season. If you need the strategy behind a form — whether to claim, when to file, what it costs you — follow the link at the top of each guide to the hub where that decision lives.",
      "New form guides are added a few at a time, so check back during filing season.",
    ],
    decisions: ["Which line or form does this amount go on?", "What does each box on this slip mean?", "Which mistakes on this form trigger a CRA letter?", "Where is the official form on Canada.ca?"],
    startHere: [],
  },
  "real-estate/first-time-buyers": {
    intro: [
      "Buying a first home in Canada involves more programs than most people realize: the First Home Savings Account (FHSA), the Home Buyers' Plan (HBP), first-time buyer rebates and credits, and provincial programs. This hub is for anyone planning a first purchase who wants them in the right order.",
      "Start with the first-time buyer guide, then the FHSA sequencing and HBP guides. The rent versus buy calculator and decision guide help you test whether buying makes sense at all at today's prices. Each program is linked to the CRA, CMHC or provincial page that sets it, with the year named.",
      "Closing costs and land transfer tax have their own hub, and mortgages have theirs.",
    ],
    decisions: ["Should I use the FHSA, the HBP or both?", "What order do I save, qualify and buy in?", "Which first-time buyer rebates apply to me?", "Does buying beat renting for me?"],
    startHere: ["first-time-home-buyer-guide-canada", "fhsa-home-purchase-sequencing-canada", "home-buyers-plan-hbp-guide", "rent-vs-buy-decision-canada", "first-time-home-buyers-gst-rebate"],
  },
  "real-estate/mortgages-renewal": {
    intro: [
      "Your mortgage is likely the largest debt you'll carry, and small decisions — fixed or variable, how much to prepay, whether to switch at renewal — move a lot of money. This hub is for Canadian homeowners and buyers making those decisions.",
      "Start with the mortgage guide, then the decision you face now: the stress test if you're qualifying, fixed versus variable if you're choosing, the renewal guide if your term is ending, or prepayment versus investing if you have extra cash. Rules come from OSFI, CMHC and the Financial Consumer Agency of Canada, and calculators show the math on your own numbers.",
      "Mortgage rates change constantly, so guides show the method and label any rate used as a scenario, not an offer.",
    ],
    decisions: ["Fixed or variable?", "How much do I qualify for under the stress test?", "Should I prepay or invest extra cash?", "Should I renew or switch lenders?"],
    startHere: ["mortgage-stress-test-canada", "fixed-vs-variable-mortgage-canada", "mortgage-renewal-strategy-canada", "mortgage-prepayment-calculator"],
  },
  "real-estate/heloc-smith-manoeuvre": {
    intro: [
      "A home equity line of credit can be cheap, flexible borrowing — or a way to turn mortgage interest into tax-deductible investment interest through the Smith Manoeuvre. This hub is for homeowners who want to understand both the strategy and its risks.",
      "Start with the Smith Manoeuvre guide, then HELOC strategies that keep the CRA's tracing rules satisfied, readvanceable mortgages, and cash damming for landlords and the self-employed. Deductibility rules link to the CRA's own guidance, and every guide spells out what happens when markets or rates move against you.",
      "These strategies involve leverage. Each guide says when to get advice from a tax professional for your own file.",
    ],
    decisions: ["Is the Smith Manoeuvre right for me?", "How do I keep HELOC interest deductible?", "Which readvanceable mortgage features matter?", "What could go wrong?"],
    startHere: ["smith-maneuver-canada-steps-risks", "heloc-strategies-cra-clean-canada", "readvanceable-mortgage-canada", "cash-damming-canada"],
  },
  "real-estate/closing-costs-transfer-tax": {
    intro: [
      "Closing costs catch many buyers off guard because they have to be paid in cash on top of the down payment. The largest is usually land transfer tax, and it works differently in every province: some charge a percentage, some a flat fee, some add a municipal tax, and several offer first-time buyer relief.",
      "Start with the national guide to land transfer tax and closing costs, which compares the provinces. Province pages are added where each province's own rules and numbers justify a separate page, each with a worked example from the province's own rates.",
      "Budget closing costs before you make an offer; the first-time buyers hub shows where they fit in the order of operations.",
    ],
    decisions: ["How much land transfer tax will I pay?", "Do I qualify for a first-time buyer rebate?", "Does my city add its own tax?", "What other closing costs should I budget?"],
    startHere: ["land-transfer-tax-closing-costs-canada"],
  },
  "real-estate/landlords-rental": {
    intro: [
      "Owning a rental property is a business, and the tax rules treat it that way. This hub is for current and would-be landlords who want the real return after expenses, tax and the risks of leverage.",
      "Start with rental property deductions, then the decision guides: principal residence versus rental, REITs versus owning directly, multi-property math and where it breaks, and when incorporating a rental actually pays. Tax rules link to the CRA, and examples use labelled illustration rents and prices.",
      "Reporting rental income line by line is covered in the CRA forms hub.",
    ],
    decisions: ["What can I deduct against rental income?", "Should I claim capital cost allowance?", "Is a rental better than a REIT for me?", "When does incorporating a rental pay?"],
    startHere: ["rental-property-tax-deductions-canada", "primary-residence-vs-rental-property-canada", "reit-vs-direct-rental-ownership-canada", "multi-property-real-estate-math-canada", "landlord-incorporation-when-it-pays-canada"],
  },
  "real-estate/selling-downsizing": {
    intro: [
      "Selling a home raises its own questions: what the principal residence exemption covers, what selling costs to expect, and how to time a move or a downsize. This hub is for Canadians on the selling side of a transaction.",
      "Guides in this hub will cover each step with the CRA and provincial rules linked. Until they're published, the Retirement hub's housing guide covers downsizing decisions and the landlords hub covers selling a property that isn't your principal residence.",
      "New guides are being added to this hub.",
    ],
    decisions: ["Does the principal residence exemption cover my sale?", "What does selling cost?", "When should I downsize?", "What happens when I sell a former rental?"],
    startHere: [],
  },
  "credit-cards/cash-back": {
    intro: [
      "Cash back is the simplest reward: a percentage of what you spend comes back as money, with no points to value. This hub is for Canadians who want the card that pays the most on the way they actually spend, whether that's groceries, gas, Costco or everything on one card.",
      "Start with the best cash back cards guide, then the category guides. Every pick shows the math for a stated monthly budget, the annual fee break-even, and who the card doesn't suit. Earn rates, caps and fees come from the issuer's own page with the date checked, because card terms change often.",
      "If you travel more than a couple of times a year, compare against the travel rewards hub before you apply.",
    ],
    decisions: ["Which cash back card pays most on my budget?", "Is an annual fee worth it at my spending?", "Which card works at Costco and grocery stores?", "Should I use one card or two?"],
    startHere: ["best-cash-back-credit-cards-canada", "best-grocery-credit-cards-canada", "best-credit-card-for-costco-canada"],
  },
  "credit-cards/travel-points": {
    intro: [
      "Travel rewards cards pay in points, and a point is only worth what you can redeem it for. This hub is for Canadians who travel enough to make points worth more than cash back, and want to know which program and card fit.",
      "Start with the points valuation guide so every later comparison uses the same yardstick, then the best travel cards and Aeroplan guides. Reviews and head-to-heads show value for stated spending profiles, with earn rates and fees from the issuer's own pages and the date checked.",
      "Lounge access, travel insurance and other premium perks are covered in the premium cards hub.",
    ],
    decisions: ["What is a point worth in each program?", "Which travel card fits how often I fly?", "Is Aeroplan the right program for me?", "When do points beat cash back?"],
    startHere: ["credit-card-points-valuations-aeroplan-avion-amex-canada", "best-travel-rewards-cards-canada", "aeroplan-points-guide-canada", "best-aeroplan-credit-cards-canada", "amex-cobalt-review-canada"],
  },
  "credit-cards/no-fee-student-newcomer": {
    intro: [
      "Not everyone wants, or can get, a premium card. This hub is for Canadians who want no annual fee, students with little or no income, and newcomers without a Canadian credit history.",
      "The guides compare what each card earns, what the issuer asks for to approve you, and how the card helps build a credit file. Income requirements, fees and earn rates come from the issuer's own page with the date checked. Where a no-fee card beats a fee card for a given budget, the guide shows the math.",
      "If you're rebuilding after missed payments, the credit scores hub covers secured cards and the steps that move a score.",
    ],
    decisions: ["Which no-fee card earns the most for me?", "What can I get with no income or credit history?", "Which card avoids foreign transaction fees?", "How does a first card build my credit file?"],
    startHere: ["best-no-annual-fee-credit-cards-canada", "best-no-foreign-transaction-fee-credit-cards-canada"],
  },
  "credit-cards/credit-score-building": {
    intro: [
      "Your credit score decides which cards, loans and mortgage rates you can get. In Canada two bureaus, Equifax and TransUnion, keep separate files, and lenders may check either. This hub is for anyone who wants to understand the score, protect it, or rebuild it.",
      "The guides explain what moves a score — utilization, payment history, new applications — and what doesn't. Rules come from the bureaus' own pages and the Financial Consumer Agency of Canada, and worked examples use labelled illustration balances.",
      "If you're choosing a first card, the no-fee, student and newcomer hub shows what you can qualify for.",
    ],
    decisions: ["What actually moves my credit score?", "How much of my limit should I use?", "How do new applications affect my score?", "How do I rebuild after missed payments?"],
    startHere: ["credit-card-utilization-applications-credit-score-canada"],
  },
  "credit-cards/premium-travel-perks": {
    intro: [
      "Premium cards charge a large annual fee and promise lounges, travel insurance, credits and better earn rates. This hub is for Canadians deciding whether those perks are worth more than the fee for the way they travel.",
      "Start with the annual fee versus no-fee break-even, then the premium card comparison. The guides on lounges and portals and on card travel insurance explain what the benefits actually cover, with terms taken from the issuer's certificates and pages and the date checked.",
      "If the fee doesn't pay off for you, the cash back and no-fee hubs are the alternatives.",
    ],
    decisions: ["Does this annual fee pay for itself?", "What does card travel insurance actually cover?", "Are lounge access and travel credits worth it to me?", "Which premium card fits how I travel?"],
    startHere: ["credit-card-annual-fee-vs-no-fee-canada", "premium-credit-cards-canada-comparison", "credit-card-airport-lounge-travel-portal-canada", "credit-card-travel-insurance-canada"],
  },
  "credit-cards/balance-transfer-low-interest": {
    intro: [
      "If you carry a balance, interest costs more than any reward earns. This hub is for Canadians paying down card debt who want to know whether a balance transfer or a low-interest card will actually lower the cost.",
      "The guides show the total cost of a transfer, including the fee, the promotional rate, the rate after the promotion ends, and what happens to new purchases. Terms come from the issuer's own page with the date checked, and examples use labelled balances.",
      "For a full payoff plan, including consolidation loans and consumer proposals, see the debt payoff hub in Budgeting & Saving.",
    ],
    decisions: ["Will a balance transfer actually save me money?", "What does the transfer fee cost?", "What happens when the promotional rate ends?", "Is a low-interest card or a loan cheaper?"],
    startHere: ["best-balance-transfer-credit-cards-canada"],
  },
  "credit-cards/card-strategy": {
    intro: [
      "Once you have more than one card, strategy matters: which card for which purchase, when a welcome bonus is worth an application, and how a business card fits. This hub is for Canadians who want to run their cards as a system.",
      "The guides cover welcome bonus math, meeting a minimum spend without buying things you don't need, card stack templates for common households, and business cards for sole proprietors and corporations. The rewards calculator lets you test a stack on your own spending.",
      "Each strategy guide links to the card hubs where the individual picks are compared.",
    ],
    decisions: ["Is this welcome bonus worth an application?", "How do I meet a minimum spend safely?", "Which cards should I combine?", "Do I need a business card?"],
    startHere: ["credit-card-welcome-bonus-math-canada", "canadian-credit-card-stack-templates", "card-churning-minimum-spend", "credit-card-rewards-calculator", "business-credit-cards-sole-prop-corporation-canada"],
  },
  "retirement/retirement-planning": {
    intro: [
      "Retirement planning starts with one question: how much will you spend, and where will that money come from? This hub is for Canadians at any age who want a plan built on government benefits, workplace pensions and their own savings.",
      "Start with the seven-step plan and the how-much-do-you-need guide, then planning by age. The guides on healthcare and long-term care costs cover the expenses most plans underestimate, and the retirement calculator lets you test your own numbers. Benefit amounts link to Canada.ca for the year named.",
      "Once you're close to retiring, the withdrawals hub covers turning savings into income.",
    ],
    decisions: ["How much do I need to retire?", "What should I be doing at my age?", "Should I save in a TFSA or RRSP for retirement?", "What will healthcare and long-term care cost?"],
    startHere: ["how-much-money-retire-canada", "retirement-planning-by-age", "canadian-retirement-calculator", "biggest-retirement-mistakes", "tfsa-retirement-strategy"],
  },
  "retirement/decumulation-rrif": {
    intro: [
      "Saving is half of retirement; spending it in a tax-smart order is the other half. This hub is for Canadians who are retired or close to it and want to draw income from RRSPs, RRIFs, TFSAs and taxable accounts without paying more tax or losing more benefits than necessary.",
      "Start with the withdrawal strategy guide, then the RRSP-to-RRIF conversion and RRIF minimum guides. The meltdown, bucket and annuity guides cover the main strategies, and pension income splitting shows how couples can share income on the return. Rules link to the CRA for the year named.",
      "CPP and OAS timing has its own hub, because the start date interacts with every withdrawal decision here.",
    ],
    decisions: ["Which account should I draw from first?", "When should I convert my RRSP to a RRIF?", "Should I take only the RRIF minimum?", "Can my spouse and I split pension income?"],
    startHere: ["retirement-withdrawal-strategy", "rrsp-to-rrif-conversion", "rrif-minimum-withdrawal", "rrsp-meltdown-strategy", "pension-income-splitting-canada"],
  },
  "retirement/pensions-lira": {
    intro: [
      "If you have a workplace pension, some of your biggest retirement decisions are about it: what kind of plan it is, whether to take a lump sum when you leave, and what you can do with locked-in money. This hub is for Canadians with a pension or a locked-in account.",
      "Start with the defined benefit versus defined contribution guide, then the commuted value decision if you're leaving an employer. The LIRA unlocking guide explains the rules by province, linked to each pension regulator, because unlocking is set provincially or federally depending on the plan.",
      "Ask the plan administrator for your own figures before acting; these guides explain how to read them.",
    ],
    decisions: ["What kind of pension do I have?", "Should I take the commuted value?", "Can I unlock my LIRA?", "How does my pension fit with CPP and OAS?"],
    startHere: ["db-vs-dc-pensions-canada", "commuted-value-pension-canada", "lira-unlocking-by-province"],
  },
  "retirement/cpp-oas-timing": {
    intro: [
      "When you start the Canada Pension Plan and Old Age Security is one of the few retirement decisions you can't easily undo. Starting early means smaller payments for life; waiting means larger ones. This hub is for Canadians weighing that trade-off.",
      "Start with the CPP timing guide, then the OAS clawback and GIS guide. The guides show how timing interacts with your RRSP and RRIF withdrawals and with income-tested benefits, using the adjustment rules and thresholds published on Canada.ca for the year named.",
      "Applying for CPP, OAS and GIS step by step is covered in the Government Benefits hub for seniors.",
    ],
    decisions: ["When should I start CPP?", "Should I defer OAS?", "Will the OAS clawback affect me?", "How does timing change my withdrawals?"],
    startHere: ["cpp-when-to-take-canada", "oas-gis-clawback-canada"],
  },
  "retirement/estate-legacy": {
    intro: [
      "Estate planning decides who gets what, who makes decisions if you can't, and how much goes to tax and probate along the way. This hub is for Canadians who want those decisions made on purpose.",
      "Start with wills and powers of attorney, then probate fees by province and tax-efficient wealth transfer. The guides explain beneficiary and successor designations, what happens to registered accounts at death, and the digital assets people forget. Probate rules link to each province's own page.",
      "Estate law is provincial and personal, so each guide says when to see a lawyer or notary for your own will.",
    ],
    decisions: ["Do I have the right will and powers of attorney?", "How much probate will my estate pay?", "Who should I name as beneficiary or successor?", "How do I pass on wealth tax-efficiently?"],
    startHere: ["estate-planning-wills-poa", "probate-fees-by-province-canada", "tax-efficient-wealth-transfer", "retirement-legacy-digital-assets"],
  },
  "retirement/early-retirement": {
    intro: [
      "Retiring before the usual age means funding the years before workplace pensions, CPP and OAS start. This hub is for Canadians aiming to retire early, and for anyone thinking about what retirement will actually look like day to day.",
      "Start with the early retirement guide, which covers bridge years, the effect on CPP and withdrawal order. The retire-at-55 guide tests a specific case with labelled spending scenarios, and the lifestyle guide covers purpose, health and staying connected.",
      "The retirement planning hub has the calculator to test your own numbers.",
    ],
    decisions: ["How do I fund the years before pensions start?", "How does retiring early change my CPP?", "Can I retire at 55 on what I have?", "What will I do with my time?"],
    startHere: ["early-retirement-fire-canada", "retire-at-55-one-million-canada", "how-to-enjoy-retirement"],
  },
  "budgeting-saving/savings-gics-cash": {
    intro: [
      "Money you'll need within a few years doesn't belong in the stock market, but it shouldn't sit in a chequing account earning almost nothing either. This hub is for Canadians choosing where to keep an emergency fund, a down payment or other short-term savings.",
      "Start with the cash management guide, then the comparisons: high-interest savings accounts, GIC ladders, and cash ETFs versus savings accounts. Rates change often, so every rate is shown with the date it was checked on the bank's own page, and promotional rates are separated from ongoing ones.",
      "Deposit insurance rules are covered in the banking hub.",
    ],
    decisions: ["Where should my emergency fund sit?", "High-interest savings account or GIC?", "How do I build a GIC ladder?", "Cash ETF or savings account?"],
    startHere: ["canadian-cash-management-guide", "best-high-interest-savings-accounts-canada", "gic-ladder-canada", "hisa-vs-cash-etf-canada", "cash-vs-psa-vs-cbil-hisa-etf"],
  },
  "budgeting-saving/banking": {
    intro: [
      "Everyday banking is where small fees add up quietly. This hub is for Canadians choosing a chequing account, comparing big banks with online banks and fintechs, or checking whether their deposits are protected.",
      "Start with the no-fee chequing guide, then the CDIC coverage guide, which explains how deposit insurance works and how to protect more than the per-category limit. Fees and features come from the bank's own pages with the date checked, and CDIC rules link to CDIC.",
      "For savings rather than spending money, see the savings accounts and GICs hub.",
    ],
    decisions: ["Which chequing account has no fees for me?", "Is my money covered by CDIC?", "Online bank or big bank?", "How do I protect more than the coverage limit?"],
    startHere: ["best-no-fee-chequing-account-canada", "cdic-coverage-explained-canada"],
  },
  "budgeting-saving/debt-payoff": {
    intro: [
      "Debt payoff is a math problem with a human side. This hub is for Canadians who want a plan: which debt to pay first, whether to invest instead, and what the options are when debt has become unmanageable.",
      "Start with debt payoff versus investing, which makes the comparison fair, then the consumer proposal versus bankruptcy guide if you need formal relief. Rules for insolvency link to the Office of the Superintendent of Bankruptcy, and examples use labelled illustration balances.",
      "Balance transfer cards are compared in the Credit Cards hub; credit scores are covered there too.",
    ],
    decisions: ["Should I pay off debt or invest?", "Which debt should I pay first?", "Would consolidation help?", "Consumer proposal or bankruptcy?"],
    startHere: ["debt-payoff-vs-investing-canada", "consumer-proposal-vs-bankruptcy-canada"],
  },
  "budgeting-saving/budgeting-systems": {
    intro: [
      "A budget only works if it runs with little effort. This hub is for Canadian households that want a cash-flow system — not coupon clipping — that pays the bills, saves automatically and survives real life.",
      "Start with the money automation stack and the fixed-cost audit, then the couples' money system if you share finances. The budgeting apps guide compares tools by what you give up, with features and prices from each app's own page and the date checked.",
      "Savings targets and emergency funds have their own hub.",
    ],
    decisions: ["How do I automate my money?", "Which fixed costs can I cut?", "How should my partner and I share money?", "Which budgeting app fits me?"],
    startHere: ["money-automation-stack-canada", "fixed-cost-audit-canada", "couples-money-system-canada", "best-budgeting-apps-canada"],
  },
  "budgeting-saving/saving-goals": {
    intro: [
      "How much should you save, and how much should sit in an emergency fund? This hub is for Canadians setting saving targets that work with real housing costs and the tax rules on each account.",
      "Start with the emergency fund guide, which compares cash, a HELOC and investments as backstops, then the saving-rate targets guide. Examples use labelled illustration incomes and costs.",
      "Where to hold the emergency fund itself is covered in the savings accounts and GICs hub.",
    ],
    decisions: ["How big should my emergency fund be?", "Cash, HELOC or investments as a backstop?", "What saving rate should I aim for?", "How do I save for a goal and still invest?"],
    startHere: ["emergency-fund-heloc-investments-canada", "saving-rate-targets-canada"],
  },
  "earning-more/employee": {
    intro: [
      "This hub is for Canadians who earn a salary or wage and want more of it. The biggest lever for most people is the pay itself: the raise, the job offer, the promotion or the switch. Tax prices that income after it exists; the Taxes hubs cover that side.",
      "The guides cover asking for a raise with real benchmarks, negotiating a job offer, pay transparency, severance, overtime and statutory holiday pay, remote work for employers outside Canada, and career switches. Survey figures are quoted with the publisher, sample and date, and employment standards link to the province's own pages.",
      "Read the Earning More pillar guide first if you're still choosing between a raise, a business and a side hustle.",
    ],
    decisions: ["How much of a raise should I ask for?", "How do I negotiate a job offer?", "Is my severance offer fair?", "Should I switch jobs or stay?"],
    startHere: [],
  },
  "earning-more/entrepreneur": {
    intro: [
      "This hub is for Canadians building a business or freelancing full time. The guides focus on earning the money: setting a rate that covers what an employer would have paid, registering the business, finding the first clients, raising prices and paying yourself.",
      "Each guide links to the official source for registration and benefit rules, and the rate guides show the math with labelled illustration numbers. EI for the self-employed and selling a business are covered too.",
      "The tax mechanics of business income — T2125, instalments, GST/HST, incorporating — live in the Taxes hub for self-employed and small business tax.",
    ],
    decisions: ["What rate should I charge?", "Sole proprietor or corporation?", "How do I find first clients?", "How should I pay myself?"],
    startHere: [],
  },
  "earning-more/side-hustles": {
    intro: [
      "This hub is for Canadians earning on the side of a job: reselling, gig work, short-term rentals, selling personal items and other extra income. The question every guide answers is whether it still pays after costs, time and tax.",
      "The guides use published earnings data with the source named, explain the CRA's platform reporting rules, and show how side income interacts with income-tested benefits. Where a figure isn't published, the guide says so.",
      "Reporting the income is covered in the Taxes hub for self-employed and small business tax.",
    ],
    decisions: ["Which side hustle pays after costs and time?", "Do platforms report my sales to the CRA?", "Will side income reduce my benefits?", "When does a hobby become a business?"],
    startHere: [],
  },
  "earning-more/career-employment-rights": {
    intro: [
      "Employment standards set the minimums every employer must meet: overtime, statutory holiday pay, vacation, notice of termination and more. They are set by each province, or federally for federally regulated workplaces, so the rules depend on where and for whom you work.",
      "Guides in this hub will explain those minimums with each province's own rules linked, starting with the largest provinces. Until they're published, the Employee hub covers severance negotiation and overtime pay.",
      "New guides are being added to this hub.",
    ],
    decisions: ["Am I owed overtime?", "What is statutory holiday pay?", "How much notice or severance am I owed?", "What must a job posting disclose?"],
    startHere: [],
  },
  "earning-more/creator-online-income": {
    intro: [
      "Creator and online income — ad revenue, sponsorships, digital products, memberships — is real income with its own costs and rules. This hub is for Canadians earning, or planning to earn, online.",
      "Guides in this hub will cover how each income stream works and what it takes to earn from it, with platform terms linked to the platform's own pages. Until they're published, the Side Hustles hub covers creator income alongside other extra income.",
      "New guides are being added to this hub.",
    ],
    decisions: ["How do creators actually earn?", "Which platform terms affect my income?", "Should I sell digital products?", "What does the CRA expect from online income?"],
    startHere: [],
  },
  "insurance/life-insurance": {
    intro: [
      "Life insurance replaces income or pays debts when someone who depends on you dies. This hub is for Canadians deciding whether they need it, how much, what kind, and where to buy it without paying for coverage they won't use.",
      "Start with the needs analysis, then term versus whole life and the cost-by-age guide. The comparison guides cover mortgage insurance versus term, group versus personal coverage, and buying online versus through a broker. Product facts come from insurers' own pages with the date checked.",
      "Insurance needs change with your life; each guide says when to review coverage.",
    ],
    decisions: ["Do I need life insurance, and how much?", "Term or permanent?", "Group coverage or my own policy?", "Online insurer or broker?"],
    startHere: ["life-insurance-need-analysis-canada", "term-vs-whole-life-insurance-canada", "term-life-insurance-cost-by-age-canada", "best-term-life-insurance-canada", "insurance-shopping-without-over-insuring-canada"],
  },
  "insurance/income-protection": {
    intro: [
      "For most working Canadians, the ability to earn is the biggest asset they own. This hub is for anyone who wants to know what happens to their income if illness or injury stops them working.",
      "Start with the disability insurance guide, which explains own-occupation definitions, waiting periods and group plan traps, then critical illness insurance and the self-employed guide. Policy terms come from insurers' own documents with the date checked.",
      "Government disability programs are covered in the Government Benefits disability hub.",
    ],
    decisions: ["How would I pay the bills if I couldn't work?", "Is my group disability plan enough?", "Do I need critical illness insurance?", "What can I get if I'm self-employed?"],
    startHere: ["disability-insurance-canada-guide", "critical-illness-insurance-canada", "disability-insurance-self-employed-canada"],
  },
  "insurance/health-dental": {
    intro: [
      "Provincial health plans cover doctors and hospitals, but not most prescriptions, dental care, vision or paramedical services for adults. This hub is for Canadians who don't have a workplace plan, or are losing one, and want to fill the gap.",
      "Start with the private health and dental guide for the self-employed and early retirees. Plan details come from insurers' own pages with the date checked, and provincial coverage links to the province's own site.",
      "The Canadian Dental Care Plan is covered in the Government Benefits hub for credits and low-income benefits.",
    ],
    decisions: ["What doesn't my provincial plan cover?", "Do I need private health and dental insurance?", "What happens when I leave my workplace plan?", "How do I compare plans?"],
    startHere: ["private-health-dental-insurance-canada"],
  },
  "insurance/travel-insurance": {
    intro: [
      "Provincial health plans cover very little outside Canada, so a hospital stay abroad can cost far more than the trip. This hub is for Canadians travelling outside their province or country, including snowbirds.",
      "Start with the travel medical guide, which explains provincial gaps, pre-existing condition stability clauses and long-stay coverage. Credit card travel insurance is compared in the premium cards hub. Policy terms come from insurers' own wording with the date checked.",
      "Read the stability clause before you buy; it is the most common reason claims are denied.",
    ],
    decisions: ["What does my provincial plan cover outside Canada?", "What is a stability clause?", "Is my credit card coverage enough?", "What do snowbirds need?"],
    startHere: ["travel-medical-insurance-canada"],
  },
  "insurance/auto-insurance": {
    intro: [
      "Car insurance works differently depending on where you live: some provinces run public insurers, others use private insurers under a provincial regulator. This hub is for drivers who want to understand their system and pay less without cutting coverage they need.",
      "Start with the province-by-province guide, then how to lower your premium. Rules link to each province's insurer or regulator, and discount ranges come from the regulator's or insurer's own pages with the date checked.",
      "Province pages are added where each province's own rules and numbers justify a separate page.",
    ],
    decisions: ["Is my province's system public or private?", "How can I lower my premium?", "Which discounts apply to me?", "Which deductible makes sense?"],
    startHere: ["car-insurance-by-province-canada", "lower-car-insurance-canada"],
  },
  "insurance/home-tenant": {
    intro: [
      "Home and tenant insurance protect your belongings, your building and your liability, but the gaps — especially around water damage and rentals — are where claims get denied. This hub is for homeowners, condo owners and renters.",
      "Start with the coverage gaps guide, which walks through dwelling, contents, liability, water and rental exclusions. Policy terms come from insurers' own wording with the date checked.",
      "Landlords should also read the landlords hub in Real Estate for the tax side of a rental.",
    ],
    decisions: ["What does my home or tenant policy not cover?", "Am I covered for water damage?", "How much liability coverage do I need?", "What changes if I rent out my place?"],
    startHere: ["home-tenant-insurance-coverage-gaps-canada"],
  },
  "government-benefits/family-child": {
    intro: [
      "Family benefits are paid on last year's income, which is why a payment can change in July even when nothing changed at home. This hub is for parents and caregivers who want to know what they're entitled to and why the amount moves.",
      "Start with the Canada Child Benefit guide, which explains adjusted family net income and the July payment-period reset. Every amount and threshold links to the CRA page for the benefit year named, and examples use labelled illustration incomes.",
      "Both parents need to file a return every year to keep benefits flowing, even with little or no income.",
    ],
    decisions: ["How much Canada Child Benefit will I get?", "Why did my payment change in July?", "What income counts toward the test?", "What do I need to file to keep it?"],
    startHere: ["canada-child-benefit-optimization-canada"],
  },
  "government-benefits/seniors-cpp-oas": {
    intro: [
      "The Canada Pension Plan, Old Age Security and the Guaranteed Income Supplement are the foundation of most Canadian retirements. This hub is for seniors and near-seniors who want to know what they'll get, when, and how to apply.",
      "Start with how much CPP you'll get and OAS eligibility and deferral, then the stacking guides that show how other income affects OAS and GIS. Amounts and thresholds link to Canada.ca for the period named, because OAS and GIS amounts are adjusted during the year.",
      "When to start CPP and OAS is a retirement strategy question; see the CPP and OAS timing hub in Retirement.",
    ],
    decisions: ["How much CPP will I get?", "Am I eligible for OAS, and should I defer it?", "Do I qualify for GIS?", "How does my other income affect these benefits?"],
    startHere: ["how-much-cpp-will-i-get", "oas-eligibility-deferral-canada", "cpp-timing-benefits-stacking-canada", "oas-gis-income-stacking-canada"],
  },
  "government-benefits/disability": {
    intro: [
      "Disability programs in Canada are linked: approval for the disability tax credit is the gate to the Registered Disability Savings Plan and to the Canada Disability Benefit. This hub is for people with a disability and the family members who help them apply.",
      "Start with the disability tax credit guide, which explains Form T2201 and transfers, then the Canada Disability Benefit guide. Eligibility rules and amounts link to Canada.ca for the period named.",
      "Disability insurance through work or privately is covered in the Insurance hub for disability and critical illness.",
    ],
    decisions: ["Do I qualify for the disability tax credit?", "How do I complete Form T2201?", "Am I eligible for the Canada Disability Benefit?", "Should I open an RDSP?"],
    startHere: ["disability-tax-credit-canada-guide", "canada-disability-benefit-guide"],
  },
  "government-benefits/employment-insurance": {
    intro: [
      "Employment Insurance replaces part of your income if you lose your job or take leave for a new child, an illness or caregiving. This hub is for workers who want to know what EI pays, how long it lasts, and what happens if they earn money while on claim.",
      "Start with the EI benefits guide, which covers regular and special benefits and how other income is treated. Maximum insurable earnings, benefit rates and waiting periods link to Canada.ca for the year named.",
      "Self-employed Canadians can opt in to EI special benefits; the Earning More entrepreneur hub covers that choice.",
    ],
    decisions: ["Do I qualify for EI?", "How much will EI pay, and for how long?", "What happens if I work while on claim?", "Which special benefits apply to me?"],
    startHere: ["employment-insurance-benefits-canada"],
  },
  "government-benefits/credits-low-income": {
    intro: [
      "Many federal benefits are delivered through the tax system: file a return and the CRA works out what you're owed. This hub is for Canadians on lower or moderate incomes who want to make sure they're receiving everything they qualify for.",
      "Start with the benefits stacking map, then the guides to individual programs and the benefit payment dates. Amounts, income thresholds and dates link to the CRA or Canada.ca for the benefit year named, and the stacking map shows the order in which household income affects each program.",
      "Filing on time every year, even with no income, is the step that unlocks most of these benefits.",
    ],
    decisions: ["Which benefits do I qualify for?", "When are payments made?", "How does my income change each benefit?", "Do I qualify for the dental care plan?"],
    startHere: ["government-benefits-stacking-map-canada", "canada-benefit-payment-dates", "gst-hst-credit-groceries-essentials-benefit", "canadian-dental-care-plan-eligibility"],
  },
  "government-benefits/provincial-programs": {
    intro: [
      "Each province and territory runs its own benefits on top of the federal ones, with its own income tests and rules. This hub is for Canadians who want to find the provincial programs that apply to them.",
      "Start with the provincial benefits map, which explains how the tests work rather than listing every program. Province pages are added where each province's own programs and amounts justify a separate page, each linked to the province's own site.",
      "First-home programs beyond the FHSA are covered here because most of them are provincial.",
    ],
    decisions: ["Which provincial programs apply to me?", "How do provincial income tests work?", "Are there first-home programs in my province?", "How do provincial and federal benefits stack?"],
    startHere: ["provincial-benefits-programs-canada", "first-home-buyer-grants-beyond-fhsa-canada"],
  },
};

/** Date the hub intros were last reviewed. */
export const HUB_INTROS_UPDATED = '2026-11-12';

/** One pillar guide per category, linked from the top of its category page. */
export const PILLAR_SLUGS: Record<string, string> = {
  "taxes": "how-canadian-taxes-work",
  "investing": "how-to-invest-canada-guide",
  "credit-cards": "best-credit-cards-canada",
  "real-estate": "canadian-mortgage-guide",
  "retirement": "build-retirement-plan-7-steps",
  "government-benefits": "canada-government-benefits-guide",
  "earning-more": "how-to-earn-more-money-canada",
  "insurance": "canadian-insurance-planning-guide",
  "budgeting-saving": "cash-flow-system-canada"
};

/** Subcategory for live posts whose record has no `subcategory` (176 posts, Nov 12, 2026). */
export const SUBCATEGORY_ASSIGNMENTS: Record<string, string> = {
  // investing
  "corporate-vs-personal-investing-canada": "accounts-asset-location",
  "tfsa-contribution-optimization": "accounts-asset-location",
  "best-online-brokerages-canada": "brokerages-platforms",
  "cipf-vs-cdic-online-broker-canada": "brokerages-platforms",
  "questrade-vs-interactive-brokers-canada": "brokerages-platforms",
  "wealthsimple-vs-questrade": "brokerages-platforms",
  "norberts-gambit-canada-guide": "us-global",
  "us-withholding-tax-by-account-canada": "us-global",
  // taxes
  "amt-canada": "brackets-basics",
  "biggest-tax-mistake-canadians": "brackets-basics",
  "bonus-tax-canada": "brackets-basics",
  "canada-income-tax-calculator": "brackets-basics",
  "federal-tax-brackets": "brackets-basics",
  "provincial-tax-rates": "brackets-basics",
  "salary-after-tax-by-province-canada": "brackets-basics",
  "severance-pay-tax-canada": "brackets-basics",
  "tax-aware-income-guide": "brackets-basics",
  "tax-glossary": "brackets-basics",
  "charitable-donation-tax-credit-canada": "credits-deductions",
  "income-splitting-strategies-couples": "credits-deductions",
  "medical-expense-tax-credit-canada": "credits-deductions",
  "missed-tax-credits": "credits-deductions",
  "prescribed-rate-spousal-loans": "credits-deductions",
  "tax-deduction-checklist": "credits-deductions",
  "tax-deductions-employees": "credits-deductions",
  "tax-tips-families": "credits-deductions",
  "best-tax-software": "filing-cra",
  "canada-tax-money-changes": "filing-cra",
  "cra-audit-guide": "filing-cra",
  "cra-deadlines": "filing-cra",
  "tax-planning-calendar": "filing-cra",
  "tax-record-keeping": "filing-cra",
  "working-with-tax-professional": "filing-cra",
  "year-end-tax-checklist": "filing-cra",
  "capital-gains-tax-canada": "investment-tax",
  "crypto-tax-canada": "investment-tax",
  "rsu-stock-options-tax-canada": "investment-tax",
  "tax-efficient-investing": "investment-tax",
  "life-events-tax-implications": "life-events-estates",
  "retirement-income-planning": "life-events-estates",
  "contribution-limits": "registered-accounts-tax",
  "fhsa-guide": "registered-accounts-tax",
  "rrsp-playbook": "registered-accounts-tax",
  "rrsp-vs-tfsa-vs-fhsa": "registered-accounts-tax",
  "rrsp-withdrawal-tax-by-province": "registered-accounts-tax",
  "spousal-rrsp-canada": "registered-accounts-tax",
  "tfsa-overcontribution-penalty": "registered-accounts-tax",
  "tfsa-strategies": "registered-accounts-tax",
  "holding-company-income-streams-canada": "self-employed-business-tax",
  "quarterly-tax-instalments": "self-employed-business-tax",
  "rideshare-delivery-driver-taxes-canada": "self-employed-business-tax",
  "salary-vs-dividends-incorporated-canada": "self-employed-business-tax",
  "self-employed-tax-guide": "self-employed-business-tax",
  "should-you-incorporate": "self-employed-business-tax",
  "side-hustle-taxes-canada": "self-employed-business-tax",
  // real-estate
  "land-transfer-tax-closing-costs-canada": "closing-costs-transfer-tax",
  "fhsa-home-purchase-sequencing-canada": "first-time-buyers",
  "first-time-home-buyer-guide-canada": "first-time-buyers",
  "first-time-home-buyers-gst-rebate": "first-time-buyers",
  "home-buyers-plan-hbp-guide": "first-time-buyers",
  "rent-vs-buy-canada": "first-time-buyers",
  "rent-vs-buy-decision-canada": "first-time-buyers",
  "cash-damming-canada": "heloc-smith-manoeuvre",
  "heloc-strategies-cra-clean-canada": "heloc-smith-manoeuvre",
  "readvanceable-mortgage-canada": "heloc-smith-manoeuvre",
  "smith-maneuver-canada-steps-risks": "heloc-smith-manoeuvre",
  "landlord-incorporation-when-it-pays-canada": "landlords-rental",
  "multi-property-real-estate-math-canada": "landlords-rental",
  "primary-residence-vs-rental-property-canada": "landlords-rental",
  "reit-vs-direct-rental-ownership-canada": "landlords-rental",
  "rental-property-tax-deductions-canada": "landlords-rental",
  "cmhc-mortgage-insurance-canada": "mortgages-renewal",
  "fixed-vs-variable-mortgage-canada": "mortgages-renewal",
  "mortgage-prepayment-calculator": "mortgages-renewal",
  "mortgage-prepayment-penalty-ird-canada": "mortgages-renewal",
  "mortgage-prepayment-vs-investing-canada": "mortgages-renewal",
  "mortgage-prepayment-vs-tfsa-rrsp-canada": "mortgages-renewal",
  "mortgage-renewal-strategy-canada": "mortgages-renewal",
  "mortgage-stress-test-canada": "mortgages-renewal",
  // credit-cards
  "best-balance-transfer-credit-cards-canada": "balance-transfer-low-interest",
  "business-credit-cards-sole-prop-corporation-canada": "card-strategy",
  "canadian-credit-card-stack-templates": "card-strategy",
  "card-churning-minimum-spend": "card-strategy",
  "credit-card-rewards-calculator": "card-strategy",
  "credit-card-welcome-bonus-math-canada": "card-strategy",
  "best-cash-back-credit-cards-canada": "cash-back",
  "best-credit-card-for-costco-canada": "cash-back",
  "best-grocery-credit-cards-canada": "cash-back",
  "credit-card-utilization-applications-credit-score-canada": "credit-score-building",
  "best-no-annual-fee-credit-cards-canada": "no-fee-student-newcomer",
  "best-no-foreign-transaction-fee-credit-cards-canada": "no-fee-student-newcomer",
  "credit-card-airport-lounge-travel-portal-canada": "premium-travel-perks",
  "credit-card-annual-fee-vs-no-fee-canada": "premium-travel-perks",
  "credit-card-travel-insurance-canada": "premium-travel-perks",
  "premium-credit-cards-canada-comparison": "premium-travel-perks",
  "aeroplan-points-guide-canada": "travel-points",
  "amex-cobalt-review-canada": "travel-points",
  "amex-cobalt-vs-td-aeroplan-visa-infinite": "travel-points",
  "best-aeroplan-credit-cards-canada": "travel-points",
  "best-travel-rewards-cards-canada": "travel-points",
  "credit-card-points-valuations-aeroplan-avion-amex-canada": "travel-points",
  // retirement
  "cpp-when-to-take-canada": "cpp-oas-timing",
  "oas-gis-clawback-canada": "cpp-oas-timing",
  "annuities-canada-guide": "decumulation-rrif",
  "investing-bucket-strategy": "decumulation-rrif",
  "pension-income-splitting-canada": "decumulation-rrif",
  "retirement-withdrawal-strategy": "decumulation-rrif",
  "rrif-minimum-withdrawal": "decumulation-rrif",
  "rrsp-meltdown-strategy": "decumulation-rrif",
  "rrsp-to-rrif-conversion": "decumulation-rrif",
  "early-retirement-fire-canada": "early-retirement",
  "how-to-enjoy-retirement": "early-retirement",
  "retire-at-55-one-million-canada": "early-retirement",
  "estate-planning-wills-poa": "estate-legacy",
  "probate-fees-by-province-canada": "estate-legacy",
  "retirement-legacy-digital-assets": "estate-legacy",
  "tax-efficient-wealth-transfer": "estate-legacy",
  "commuted-value-pension-canada": "pensions-lira",
  "db-vs-dc-pensions-canada": "pensions-lira",
  "lira-unlocking-by-province": "pensions-lira",
  "biggest-retirement-mistakes": "retirement-planning",
  "canadian-retirement-calculator": "retirement-planning",
  "healthcare-costs-retirement": "retirement-planning",
  "housing-decisions-retirement": "retirement-planning",
  "how-much-money-retire-canada": "retirement-planning",
  "long-term-care-costs": "retirement-planning",
  "retirement-planning-by-age": "retirement-planning",
  "tfsa-retirement-strategy": "retirement-planning",
  // budgeting-saving
  "best-no-fee-chequing-account-canada": "banking",
  "cdic-coverage-explained-canada": "banking",
  "best-budgeting-apps-canada": "budgeting-systems",
  "couples-money-system-canada": "budgeting-systems",
  "fixed-cost-audit-canada": "budgeting-systems",
  "money-automation-stack-canada": "budgeting-systems",
  "consumer-proposal-vs-bankruptcy-canada": "debt-payoff",
  "debt-payoff-vs-investing-canada": "debt-payoff",
  "emergency-fund-heloc-investments-canada": "saving-goals",
  "saving-rate-targets-canada": "saving-goals",
  "best-high-interest-savings-accounts-canada": "savings-gics-cash",
  "canadian-cash-management-guide": "savings-gics-cash",
  "cash-vs-psa-vs-cbil-hisa-etf": "savings-gics-cash",
  "gic-ladder-canada": "savings-gics-cash",
  "hisa-vs-cash-etf-canada": "savings-gics-cash",
  // insurance
  "car-insurance-by-province-canada": "auto-insurance",
  "lower-car-insurance-canada": "auto-insurance",
  "private-health-dental-insurance-canada": "health-dental",
  "home-tenant-insurance-coverage-gaps-canada": "home-tenant",
  "critical-illness-insurance-canada": "income-protection",
  "disability-insurance-canada-guide": "income-protection",
  "disability-insurance-self-employed-canada": "income-protection",
  "best-term-life-insurance-canada": "life-insurance",
  "corporate-owned-life-insurance-canada": "life-insurance",
  "group-life-insurance-vs-personal-canada": "life-insurance",
  "infinite-banking-canada": "life-insurance",
  "insurance-shopping-without-over-insuring-canada": "life-insurance",
  "life-insurance-need-analysis-canada": "life-insurance",
  "mortgage-life-insurance-vs-term-life-canada": "life-insurance",
  "online-vs-broker-life-insurance-canada": "life-insurance",
  "term-life-insurance-cost-by-age-canada": "life-insurance",
  "term-vs-whole-life-insurance-canada": "life-insurance",
  "travel-medical-insurance-canada": "travel-insurance",
  // government-benefits
  "canada-benefit-payment-dates": "credits-low-income",
  "canada-carbon-rebate-ended": "credits-low-income",
  "canadian-dental-care-plan-eligibility": "credits-low-income",
  "government-benefits-stacking-map-canada": "credits-low-income",
  "gst-hst-credit-groceries-essentials-benefit": "credits-low-income",
  "canada-disability-benefit-guide": "disability",
  "disability-tax-credit-canada-guide": "disability",
  "employment-insurance-benefits-canada": "employment-insurance",
  "canada-child-benefit-optimization-canada": "family-child",
  "first-home-buyer-grants-beyond-fhsa-canada": "provincial-programs",
  "provincial-benefits-programs-canada": "provincial-programs",
  "cpp-timing-benefits-stacking-canada": "seniors-cpp-oas",
  "how-much-cpp-will-i-get": "seniors-cpp-oas",
  "oas-eligibility-deferral-canada": "seniors-cpp-oas",
  "oas-gis-income-stacking-canada": "seniors-cpp-oas",
};
