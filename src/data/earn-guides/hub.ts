import { barChart, flowChart, lineChart } from '../../lib/earn-visuals';
import { cta, directAnswer, readNext, sources, takeaways, toc } from './chrome';

const footer = `<div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about earning money in Canada as of October 2026. It is not tax, legal, employment, or financial advice, and it is not a filing position. Survey figures are quoted from the publisher named in the sources. Statutory rules are quoted from the government page linked beside them, and they change. Dollar examples that are not tied to a cited page are illustrations of a method, not a quote you should charge and not your paycheque. Confirm the current page before you rely on a number.</p>
        <div class="footer-note">Published: October 15, 2026 | Updated: October 16, 2026 | Category: Earning More | Author: Andrew</div>
    </div>`;

export const hubContent = `<div class="container">

    <div class="hook">
        There are three ways to earn more money in Canada this year, and only one of them fits the hours you actually have. <span class="highlight">Ask for a larger share of a raise budget that is already about 3 percent, invoice the work yourself, or keep the job and add a side hustle.</span> The payoff is picking one path for the next 90 days instead of dabbling in all three.
    </div>

    ${directAnswer('Earn more money in Canada by choosing one path: a raise on the job you have, a business you invoice, or a side hustle beside the job. Normandin Beaudry’s 2026 increase budget is 3.1 percent excluding freezes. Statistics Canada’s September 2026 release put unemployment at 6.5 percent. A side hustle is common and usually small.')}

    ${takeaways([
      'Normandin Beaudry: average 2026 salary-increase budget 3.1 percent excluding freezes, 3.4 percent including ad hoc budgets. Mercer: 3.0 percent merit and 3.2 percent total planned for 2027.',
      'Statistics Canada, October 9, 2026: September unemployment 6.5 percent, youth unemployment 13.0 percent, job-finding rate 30.6 percent versus 36.5 percent before the pandemic.',
      'Omnisend 2026: 31 percent have a side hustle, 53 percent of them earn $500 a month or less, 91 percent work under 20 hours. Ownr/Ipsos: 23 percent earn side income.',
      'A raise uses hours you already sell. A business replaces benefits and adds both shares of CPP. A side hustle can shrink income-tested benefits. Price the second-order effect before you pick.',
      'Tax comes after the dollar exists. The income guide in Taxes is <a href="/blog/tax-aware-income-guide/">how salary, bonus, equity, and side income are taxed</a>.',
    ])}

    ${toc([
      { id: 'which-path', label: 'Which path should you open first?' },
      { id: 'raise', label: 'What does the raise path actually pay?' },
      { id: 'business', label: 'What does selling the work yourself cost?' },
      { id: 'side', label: 'What does a side hustle really add?' },
      { id: 'market', label: 'How does a 6.5 percent unemployment rate change the choice?' },
      { id: 'together', label: 'How do the pieces fit, including tax and benefits?' },
      { id: 'ninety', label: 'What do you do in the next 90 days?' },
      { id: 'faq', label: 'Frequently asked questions' },
    ])}

    <h2 id="which-path">Which way of earning more fits the hours you have?</h2>
    <p>If you have a job and a result you can point at, start with the raise. It does not add hours. If you do not have a job, or the job cannot pay more and you can sell a scoped result, start the business path with a rate and ten names. If you must keep the paycheque and you have fewer than 20 hours, start a side hustle and judge it on the hourly, not on a screenshot.</p>
    ${flowChart({
      aria: 'Flowchart of three earning paths. Employed with a case: ask for a raise. Ready to invoice: set a rate. Hours left beside a job: one side hustle. Otherwise do not run all three.',
      caption: 'One path for 90 days. The links under each box are the working guides, not a reading list to finish before you act.',
      nodes: [
        { title: 'Do you already sell your hours to an employer?', kind: 'decision' },
        { title: 'Yes, and the work grew: ask', kind: 'option', text: 'Raise guide, then an offer if the answer is no.' },
        { title: 'Yes, but only leftover hours: one side hustle', kind: 'option', text: 'Judge it at day 90.' },
        { title: 'No job, or the leap is funded: invoice', kind: 'result', text: 'Rate, status, then clients.' },
      ],
    })}
    <p>Employees start in <a href="/category/earning-more/employee/">raises, offers, and the pay stub</a>. People going out on their own start in <a href="/category/earning-more/entrepreneur/">rates, registration, and clients</a>. A job you are keeping, plus extra income, starts in <a href="/category/earning-more/side-hustles/">side hustles</a>.</p>

    <h2 id="raise">How much is the employee path worth?</h2>
    <p>The published budgets are pools, not a cap. Normandin Beaudry put the average 2026 increase at <strong>3.1 percent excluding salary freezes</strong> and <strong>3.4 percent</strong> once ad hoc budgets are included. Mercer put 2027 plans at <strong>3.0 percent merit</strong> and <strong>3.2 percent total</strong>. Ask for a number inside or above the posted range where Ontario, British Columbia, or Prince Edward Island already forces a range onto the ad. The scripts are <a href="/blog/how-to-ask-for-a-raise-canada/">how to ask for a raise</a>, <a href="/blog/negotiate-job-offer-canada/">how to negotiate an offer</a>, and <a href="/blog/ontario-pay-transparency-job-postings/">what the posting must show</a>.</p>
    <p>An example, so the compounding is visible. An $80,000 salary that rises 3.1 percent a year is about $93,193 in year five. The same salary with an 8 percent increase once, then 3.1 percent, is about $97,612. The gap in year five is about $4,419, and the five paid years differ by about $20,843 of gross. The 8 percent is an example ask, not a survey. The full table is on the raise page. After-tax comparison if you might leave is <a href="/blog/raise-promotion-negotiation-math-canada/">raise and promotion math</a>. Take-home by province is <a href="/blog/salary-after-tax-by-province-canada/">the province table</a>.</p>

    ${lineChart({
      title: 'Example: a bigger base keeps compounding',
      aria: 'Line chart comparing an illustrative salary that rises 3.1 percent a year with one that rises 8 percent once and then 3.1 percent.',
      caption: 'Illustrative example on an $80,000 start. The 3.1 percent is Normandin Beaudry’s 2026 average budget excluding freezes, reused as a constant. It is not a promise that your employer will repeat it.',
      yMax: 100000,
      yTicks: [
        { value: 80000, label: '$80k' },
        { value: 90000, label: '$90k' },
        { value: 100000, label: '$100k' },
      ],
      xLabels: ['Start', 'Y1', 'Y2', 'Y3', 'Y4', 'Y5'],
      series: [
        { name: '3.1% each year', color: '#4a5565', values: [80000, 82480, 85037, 87673, 90391, 93193] },
        { name: '8% once, then 3.1%', color: '#d80621', values: [80000, 86400, 89078, 91840, 94687, 97612] },
      ],
    })}

    <p>Two employee paths people skip: the pay stub and the exit. Overtime and stat holiday pay are cash you may already have earned. The clocks differ. Ontario’s general overtime rule is after 44 hours. British Columbia pays daily overtime after 8 hours. The check is <a href="/blog/overtime-stat-holiday-pay-canada/">overtime and stat holiday pay</a>. If the job ends, the letter is often the legal floor. Negotiating it is <a href="/blog/how-to-negotiate-severance-canada/">severance</a>, and the tax on the cheque is <a href="/blog/severance-pay-tax-canada/">severance tax</a>.</p>

    <h2 id="business">What does the business path cost that a salary hides?</h2>
    <p>You set the price. You also buy the weeks you cannot bill, both shares of CPP, and the benefits a payroll used to carry. In 2026 the self-employed CPP maximum is <strong>$8,460.90</strong>, and CPP2 can add up to <strong>$832</strong>. An employee at the base CPP ceiling pays $4,230.45 and the employer pays the same. Leaving the job does not delete the employer half. You pick it up. The rate that includes this is <a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">how to set a freelance rate</a>.</p>
    <p>Registration is the cheap part. Ontario lists a sole proprietorship name at <strong>$60</strong> and an Ontario corporation at <strong>$300</strong>. Corporations Canada lists online federal incorporation at <strong>$200</strong>. None of those fees decides whether you should incorporate. That decision is <a href="/blog/should-you-incorporate/">should you incorporate</a>, and the filing steps are <a href="/blog/how-to-register-a-business-canada/">how to register</a>. The first invoices are <a href="/blog/first-10-clients-freelance-canada/">the first ten clients</a>. A later price increase has its own arithmetic: <a href="/blog/raising-prices-small-business-canada/">raising prices</a>.</p>
    <p>Self-employed EI is optional and narrow. Outside Quebec the 2026 premium is <strong>$1.63 per $100</strong>, up to <strong>$1,123.07</strong>, for special benefits after a 12-month wait, not for a quiet sales month. The break-even is <a href="/blog/ei-self-employed-canada/">EI for the self-employed</a>. Quitting to invoice is not, by itself, a regular EI claim. Confirm that with Service Canada before you resign. The runway is <a href="/blog/side-hustle-to-full-time-canada/">side hustle to full-time</a>.</p>
    <div class="warning-box"><strong>Watch out.</strong> A single client who sets your hours may be an employer. Registering a business does not fix that. The test is <a href="/blog/employee-vs-contractor-canada/">employee versus contractor</a>. A US company using the word contractor from abroad is <a href="/blog/remote-work-us-company-from-canada/">remote work for a US company</a>.</div>

    <h2 id="side">How much does a side hustle actually add?</h2>
    <p>Less than the idea, for most people who have one. Omnisend’s Cint survey of 1,029 people in Canada in March 2026 found <strong>31 percent</strong> have a side hustle, <strong>85 percent</strong> of them for the money, <strong>53 percent</strong> earn $500 a month or less, and <strong>91 percent</strong> work under 20 hours a week. Ownr and Ipsos, in September 2026, found <strong>23 percent</strong> earn side income. BNN Bloomberg’s October 8, 2026 report of that research said nearly one in five side hustlers are likely to go full-time. Intent and the $500 month are both in the data. Do not average them into a fantasy salary.</p>

    ${barChart({
      title: 'Side hustles are common and usually small',
      aria: 'Omnisend bars: 31 percent of Canadians have a side hustle, and among them 53 percent earn 500 dollars a month or less.',
      caption: 'Omnisend 2026. The 31 percent is a share of people in that Canadian sample. The 53 percent is a share of people who have a side hustle. They are not the same base. Ownr and Ipsos found 23 percent earn side income in a different survey.',
      rows: [
        { label: 'Have a side hustle', pct: 31, text: '31%' },
        { label: 'Of those, ≤ $500/mo', pct: 53, text: '53%' },
      ],
    })}

    <p>Pick the shape in <a href="/blog/best-side-hustles-canada/">best side hustles</a>. Selling your own used goods is not the same as a shop: <a href="/blog/facebook-marketplace-tax-canada/">Marketplace tax</a>. Buying to resell needs a profit line before the fee: <a href="/blog/reselling-flipping-canada/">reselling</a>. A platform may report you without that report deciding the tax: <a href="/blog/platform-reporting-rules-canada/">platform reporting</a>. A free product you posted about can be income at fair market value, and CRA’s example uses a <strong>$5,000</strong> vacation: <a href="/blog/content-creator-income-canada/">creator income</a>.</p>
    <div class="example-box"><strong>Example, the $500 month versus a 3.1 percent raise.</strong> On a $60,000 salary, 3.1 percent is $1,860 a year, about $155 a month, for hours you are already at work. A side hustle at $500 a month is larger gross, and it spends hours the raise does not. If the hustle takes 20 hours, that is $25 an hour before costs and tax. If a clawback eats part of the $500, the hourly falls again. Do the raise conversation first if you have a case. Use the hustle if the raise is a no or you need cash the payroll cycle will not produce.</div>

    <h2 id="market">How should a 6.5 percent unemployment rate change the plan?</h2>
    <p>Statistics Canada’s Daily for October 9, 2026 reported the September labour force survey: unemployment <strong>6.5 percent</strong>, youth unemployment <strong>13.0 percent</strong>, and a job-finding rate of <strong>30.6 percent</strong> compared with <strong>36.5 percent</strong> before the pandemic. A hop can still pay more. It is a slower plan than “always be looking” implies. If you are employed, the raise is the path you can run this month. If you are not, a side hustle under 20 hours funds a search. It does not replace one.</p>
    <p>A career change measured in years, not in a posting, is <a href="/blog/career-switch-after-tax-lifetime-earnings-canada/">is a career switch worth it</a>. Keeping a remote paycheque and moving is <a href="/blog/geographic-arbitrage-canada/">geographic arbitrage</a>. Youth at 13.0 percent is the reason a first job and a side hustle can both be rational. It is not a reason to skip the posting rules that now show the range.</p>

    <h2 id="together">How do tax, CPP, and benefits change the winner?</h2>
    <p>The three paths are not three gross numbers. They are three nets.</p>
    <div class="table-wrapper">
    <table>
        <caption>What each path does to the next dollar. Rates are 2026 figures from CRA or ESDC. The benefit effect depends on the program.</caption>
        <thead><tr><th>Path</th><th>CPP / EI</th><th>Sales tax</th><th>Benefits</th></tr></thead>
        <tbody>
            <tr><td>Raise</td><td>Employee CPP 5.95 percent up to $74,600, CPP2 at 4 percent between $74,600 and $85,000, EI 1.63 percent up to $68,900 outside Quebec. Above the ceilings, a further raise adds no more of that premium.</td><td>None. You are not selling a supply.</td><td>A higher salary can shrink income-tested benefits. Same guide as a hustle.</td></tr>
            <tr><td>Business</td><td>Both CPP shares, up to $8,460.90, plus CPP2 up to $832. EI only if you opt into special benefits.</td><td>GST/HST after $30,000 of taxable supplies, or sooner if you register. Ontario HST is 13 percent.</td><td>Profit is income. A quiet year can also mean no regular EI.</td></tr>
            <tr><td>Side hustle</td><td>CPP on self-employed profit once you are over the $3,500 exemption. A tiny year may owe none.</td><td>Same $30,000 line if it is a business. Ride-share registers immediately.</td><td>Often the sharpest clawback, because the dollar is extra on top of a job. <a href="/blog/side-income-benefits-tax-clawbacks-canada/">Clawbacks</a>.</td></tr>
        </tbody>
    </table>
    </div>
    <p>A bonus is not a fourth path. It does not compound. The withholding is <a href="/blog/bonus-tax-canada/">bonus tax</a>. Equity in an offer is not cash until it vests and the tax is priced: <a href="/blog/rsu-stock-options-tax-canada/">RSUs and stock options</a>. How an owner takes money out of a company is <a href="/blog/salary-vs-dividends-incorporated-canada/">salary versus dividends</a>, which lives with the tax articles because the question is extraction, not how to win the work. A holding company is a later structure: <a href="/blog/holding-company-income-streams-canada/">holdco income</a>.</p>
    <div class="tip-box"><strong>Pro tip.</strong> Write the three nets on one page before you resign or before you buy inventory. Gross is how the paths get sold to you. Net is how they pay rent. The calculator is the tax piece. The CPP maximums are on the CRA page linked below. The benefit piece is the clawback guide. None of the three is optional if that path is the one you are about to bet a year on.</div>

    <h2 id="ninety">What should you do in the next 90 days?</h2>
    <p>Pick one. <strong>Raise:</strong> book the meeting, bring one number, and read the posting rules if you are also looking. <strong>Business:</strong> set the hourly, write ten names, and do not incorporate until you know why. <strong>Side hustle:</strong> cap the hours, write the profit line, and review on a date. If the 90 days produce a no, switch paths with the evidence, not with a new mood.</p>
    <p>Job Bank is the free wage check. CRA My Business Account is the place a GST/HST account actually opens. The Ontario Business Registry and Corporations Canada are the filings. A course, a coach, or a software subscription is a cost that belongs in the hourly. Add it before you call the path profitable.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>What is the fastest way to earn more money in Canada?</h3>
    <p>For someone who is employed and has a case, a raise is the fastest because it does not add hours. For someone who is not employed, a scoped freelance offer to people who already know the work is faster than a brand-new side hustle that needs an audience. Neither is instant.</p>
    <h3>Is 3 percent a normal raise in 2026?</h3>
    <p>It is a normal budget. Normandin Beaudry’s average excluding freezes is 3.1 percent. Some people get less because the pool is shared. Some get more because they asked with evidence or because they left.</p>
    <h3>Should I start a side hustle or ask for a raise?</h3>
    <p>Ask first if you have a job and a result. Omnisend’s report says most people with a side hustle earn $500 a month or less. Do the conversation, then decide whether the leftover hours are worth a second activity.</p>
    <h3>Is a business better than a job because of tax?</h3>
    <p>Not as a default. You pay both CPP shares, you may register for GST/HST at $30,000, and you lose benefits the employer was buying. Tax planning comes after the revenue exists. The income guide in Taxes is where that planning lives.</p>
    <h3>How hard is it to find a job in Canada right now?</h3>
    <p>Statistics Canada’s September 2026 figures: 6.5 percent unemployment, 13.0 percent for youth, and a job-finding rate of 30.6 percent versus 36.5 percent before the pandemic. A search can work. It is slower than the pre-pandemic rate those figures compare against.</p>
    <h3>Do I need a corporation to earn more?</h3>
    <p>No. A sole prop can invoice. A corporation costs $300 in Ontario or $200 federally online, and it adds a tax return. Use one when the separate-person reasons are real.</p>
    <h3>Will extra income reduce my Canada Child Benefit?</h3>
    <p>It can. Income-tested benefits use income, not effort. Read the clawback guide and put the approximate reduction next to the side income or the raise before you celebrate the gross.</p>
    <h3>Where does tax fit in earning more?</h3>
    <p>After you know which dollar you are earning. Take-home, bonus withholding, severance, equity, and side-hustle filing are linked from the articles above. They price the path. They do not choose it.</p>

    ${sources([
      '<a href="https://www.normandin-beaudry.ca/en/salary-forecast/salary-increases-for-2026-budgets-continue-to-decline/">Normandin Beaudry: 2026 salary increase budgets</a>',
      '<a href="https://www.mercer.com/en-ca/about/newsroom/canadian-employers-hold-compensation-budgets-steady/">Mercer Canada: 2027 compensation budgets</a>',
      '<a href="https://www150.statcan.gc.ca/n1/daily-quotidien/261009/dq261009a-eng.htm">Statistics Canada, The Daily, October 9, 2026: Labour Force Survey, September 2026</a>',
      '<a href="https://www.omnisend.com/side-hustles-report-2026">Omnisend: side hustles report 2026</a>',
      '<a href="https://www.rbcx.com/news/press-releases/side-hustles-are-getting-serious-nearly-one-in-four-canadians-has-one-but-many-arent-taking-the-entrepreneurial-leap-ownr-data-reveals/">RBCx / Ownr: Ipsos side-hustle release</a>',
      '<a href="https://www.bnnbloomberg.ca/business/economics/2026/10/08/necessity-and-opportunity-turning-a-side-hustle-into-a-small-business/">BNN Bloomberg, October 8, 2026</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/cpp-contribution-rates-maximums-exemptions.html">CRA: 2026 CPP maximums</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/when-register-charge.html">CRA: GST/HST $30,000 threshold</a>',
      '<a href="https://www.canada.ca/en/services/benefits/ei/ei-self-employed-workers/premiums.html">Canada.ca: self-employed EI premiums</a>',
    ])}

    ${readNext([
      '<a href="/blog/how-to-ask-for-a-raise-canada/">How to ask for a raise in Canada</a>',
      '<a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">How to set a freelance rate</a>',
      '<a href="/blog/best-side-hustles-canada/">Best side hustles in Canada</a>',
      '<a href="/blog/tax-aware-income-guide/">How the dollar is taxed once you earn it</a>',
    ])}

    ${cta('Next step: put the salary, the invoice target, or the side-hustle profit into the income tax calculator so the path is a net. The 2026 tax guide is the longer walkthrough of the return that dollar lands on.')}

    ${footer}
</div>`;
