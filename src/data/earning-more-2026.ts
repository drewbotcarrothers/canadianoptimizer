import type { BlogPostRecord } from '../lib/post-video';

const meta = {
  category: 'Earning More',
  categorySlug: 'earning-more',
  author: 'Andrew',
  date: '2026-10-15',
  updated: '2026-10-15',
} as const;

function earningPost(
  slug: string,
  title: string,
  excerpt: string,
  content: string,
  subcategory?: string
): BlogPostRecord {
  return {
    ...meta,
    subcategory,
    title,
    slug,
    excerpt,
    image: `/images/blog/${slug}.png`,
    content,
  };
}

const footer = `<div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about earning money in Canada as of October 2026. It is not tax, legal, employment, or financial advice, and it is not a filing position. Survey figures are quoted from the publisher named in the sources. Statutory rules are quoted from the government page linked beside them, and they change. Dollar examples that are not tied to a cited page are illustrations of a method, not a quote you should charge and not your paycheque. Confirm the current page before you rely on a number.</p>
        <div class="footer-note">Published: October 15, 2026 | Category: Earning More | Author: Andrew</div>
    </div>`;

export const earningMore2026Posts: BlogPostRecord[] = [
  earningPost(
    'how-to-earn-more-money-canada',
    'How to Earn More Money in Canada: Raise, Business or Side Hustle?',
    'Three ways Canadians are actually earning more in 2026: a raise, a business, or a side hustle. The budgets, the labour market, and which path to open first.',
    `<div class="container">

    <div class="hook">
        There are three ways to earn more in Canada this year. Ask for a larger share of a raise budget that is already about 3 percent. Build a business you invoice. Or keep the job and add a side hustle. <span class="highlight">The wrong first step is a tax trick.</span> The right first step is picking the path that matches the hours you actually have.
    </div>

    <p>This is the hub. Employees start with <a href="/category/earning-more/employee/">raises, offers, and the pay stub</a>. People going out on their own start with <a href="/category/earning-more/entrepreneur/">rates, registration, and clients</a>. A job you are keeping, plus extra income, starts with <a href="/category/earning-more/side-hustles/">side hustles</a>. How salary, a bonus, equity, and a contract are taxed, once the money exists, is the <a href="/blog/tax-aware-income-guide/">income guide in Taxes</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Normandin Beaudry 3.1% for 2026 is an employer budget, excluding salary freezes. It is not a cap on your ask.</li>
            <li>Mercer 3.2% total for 2027 is the same kind of number: a plan for the whole increase, merit plus other adjustments.</li>
            <li>Statistics Canada's September 2026 labour force release put unemployment at 6.5 percent, youth unemployment at 13.0 percent, and the job-finding rate at 30.6 percent, against 36.5 percent before the pandemic.</li>
            <li>Ownr's Ipsos survey found 23 percent of Canadians earn side income. On BNN Bloomberg's October 8, 2026 report of that research, nearly 1 in 5 side hustlers say they're likely to go full-time.</li>
            <li>Pick one path for the next 90 days. A raise conversation, a rate, or a side hustle. Not all three at once.</li>
        </ul>
    </div>

    <h2>Path one: get paid more for the job you have</h2>

    <p>Normandin Beaudry's salary survey put the average 2026 increase budget at 3.1 percent, excluding organizations that freeze pay. The same release put the figure at 3.4 percent once additional ad hoc budgets are included. Mercer, looking ahead, reported employers planning Mercer 3.2% total for 2027, with merit at 3.0 percent inside that total. Those are pools the company already expected to spend. They are not a finding that 3 percent is what your work is worth.</p>

    <p>Use them as the opening of the conversation, then make a case for a larger share: a posted range, a competing offer, or a record of work the budget was not built to reward. The script and the benchmarks are <a href="/blog/how-to-ask-for-a-raise-canada/">how to ask for a raise</a>. If the choice is stay or leave, the after-tax comparison is <a href="/blog/raise-promotion-negotiation-math-canada/">raise and promotion math</a>. A new offer is <a href="/blog/negotiate-job-offer-canada/">a negotiation</a>, and in Ontario the posting itself now has to show a range: <a href="/blog/ontario-pay-transparency-job-postings/">pay transparency</a>.</p>

    <h2>Path two: sell the work yourself</h2>

    <p>A business is a different hourly. You set the price, you also buy the weeks you cannot bill, both shares of CPP, and the benefits a payroll used to carry. Start with <a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">how to set a freelance rate</a>, then decide whether the relationship is even self-employment: <a href="/blog/employee-vs-contractor-canada/">employee versus contractor</a>. Registering the name or the company is <a href="/blog/how-to-register-a-business-canada/">its own checklist</a>. The first invoices are <a href="/blog/first-10-clients-freelance-canada/">the first ten clients</a>.</p>

    <p>Whether a company should exist at all is <a href="/blog/should-you-incorporate/">should you incorporate</a>. How to pay yourself if it does is <a href="/blog/salary-vs-dividends-incorporated-canada/">salary versus dividends</a>, which lives with the tax articles because the question is extraction, not how to win the work.</p>

    <h2>Path three: keep the job and add income</h2>

    <p>Omnisend's 2026 side-hustle report, a Cint survey of 1,029 people in Canada in March 2026, found that 31 percent have a side hustle, 85 percent of them for the money, 53 percent earn $500 a month or less, and 91 percent work under 20 hours a week. Ownr and Ipsos, in a separate September 2026 survey of 1,501 Canadians, found that 23 percent earn side income. The roundup is <a href="/blog/best-side-hustles-canada/">best side hustles</a>. Before you scale one, ask whether the extra dollar survives the benefits it can shrink: <a href="/blog/side-income-benefits-tax-clawbacks-canada/">side income and clawbacks</a>. The filing, once it is a business, is <a href="/blog/side-hustle-taxes-canada/">side-hustle taxes</a>.</p>

    <h2>Which path, given a slower hiring market</h2>

    <p>Statistics Canada's Daily for October 9, 2026 reported the September labour force survey: unemployment 6.5 percent, youth unemployment 13.0 percent, and a job-finding rate of 30.6 percent compared with 36.5 percent before the pandemic. A job hop is still a real path. It is a slower one than a slogan about "always be looking" implies. If you are employed, the raise conversation is the path you can run this month. If you are not, a side hustle that fits under 20 hours does not replace a search. It funds one.</p>

    <p>A career change measured over years, not over a posting, is <a href="/blog/career-switch-after-tax-lifetime-earnings-canada/">is a career switch worth it</a>. Moving while you keep the remote pay is <a href="/blog/geographic-arbitrage-canada/">geographic arbitrage</a>. Working for a US company from here is <a href="/blog/remote-work-us-company-from-canada/">remote work for a US company</a>.</p>

    <h2>Frequently asked questions</h2>

    <h3>Should I ask for a raise or start a side hustle?</h3>
    <p>If you have a job and a case, ask first. A raise uses hours you are already selling. A side hustle spends hours you have left, and Omnisend's report says most people who have one earn $500 a month or less. Do the raise conversation, then decide whether the leftover hours are worth a second activity.</p>

    <h3>Is 3 percent a normal raise in Canada in 2026?</h3>
    <p>It is a normal budget, not a normal outcome for every person. Normandin Beaudry 3.1% for 2026 is the average increase budget excluding freezes. Some people get less because the pool is shared. Some get more because they asked with evidence, or because they left.</p>

    <h3>Where does tax fit?</h3>
    <p>After you know which dollar you are earning. Take-home by province, bonus withholding, severance, equity, and side-hustle filing are in Taxes, linked from the articles above. They do not choose the path. They price it.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.normandin-beaudry.ca/en/salary-forecast/salary-increases-for-2026-budgets-continue-to-decline/">Normandin Beaudry: 2026 salary increase budgets</a></li>
        <li><a href="https://www.mercer.com/en-ca/about/newsroom/canadian-employers-hold-compensation-budgets-steady/">Mercer Canada: 2027 compensation budgets</a></li>
        <li><a href="https://www150.statcan.gc.ca/n1/daily-quotidien/261009/dq261009a-eng.htm">Statistics Canada, The Daily, October 9, 2026: Labour Force Survey, September 2026</a></li>
        <li><a href="https://www.omnisend.com/side-hustles-report-2026">Omnisend: side hustles report 2026</a></li>
        <li><a href="https://www.rbcx.com/news/press-releases/side-hustles-are-getting-serious-nearly-one-in-four-canadians-has-one-but-many-arent-taking-the-entrepreneurial-leap-ownr-data-reveals/">RBCx / Ownr: Ipsos side-hustle release, October 8, 2026</a></li>
        <li><a href="https://www.bnnbloomberg.ca/business/economics/2026/10/08/necessity-and-opportunity-turning-a-side-hustle-into-a-small-business/">BNN Bloomberg, October 8, 2026, on the Ownr/Ipsos findings</a></li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/how-to-ask-for-a-raise-canada/">How to ask for a raise in Canada</a></li>
        <li><a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">How to set your freelance rate</a></li>
        <li><a href="/blog/best-side-hustles-canada/">Best side hustles in Canada</a></li>
        <li><a href="/blog/tax-aware-income-guide/">How salary, bonus, equity, and side income are taxed</a></li>
    </ul>

    ${footer}

</div>`
  ),
];
