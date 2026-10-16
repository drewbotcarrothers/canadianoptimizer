import { barChart, flowChart } from '../../lib/earn-visuals';
import { cta, directAnswer, howto, readNext, sources, takeaways, toc } from './chrome';

const footer = `<div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about side income in Canada as of October 2026. It is not tax, legal, or business advice, and it is not a filing position. Survey figures are quoted from the publisher named in the sources. Platform fee splits that were not on the survey page itself are not repeated here. Confirm CRA’s current pages before you decide a sale is tax-free or that a platform will not report you.</p>
        <div class="footer-note">Published: October 15, 2026 | Updated: October 16, 2026 | Category: Earning More | Author: Andrew</div>
    </div>`;

export const bestContent = `<div class="container">

    <div class="hook">
        The best side hustles in Canada are the ones that fit the hours you will actually keep. <span class="highlight">Omnisend’s 2026 survey says 31 percent of Canadians have one, and 53 percent of those people earn $500 a month or less.</span> The payoff is a pick based on hours, startup cash, and what the extra dollar does to your benefits, not a list of fantasies.
    </div>

    ${directAnswer('The best side hustle in Canada in 2026 is the one you can run in under 20 hours a week, at a rate that beats your alternatives after costs, tax, and benefit clawbacks. Omnisend found most people who have one earn $500 a month or less. Choose selling, services, or a skill you already have.')}

    ${takeaways([
      'Omnisend, Cint, March 2026, n=1,029 in Canada: 31 percent have a side hustle, 85 percent of them for the money, 53 percent earn $500 a month or less, 91 percent work under 20 hours a week.',
      'Ownr and Ipsos, September 2026, n=1,501: 23 percent earn side income. A different question, a different sample. Both can be true.',
      'Facebook Marketplace leads Omnisend’s online-selling chart at 53 percent of Canadian online sellers. This page does not repeat Amazon, eBay, or Etsy shares that were not in the survey page text.',
      'An extra dollar can shrink the Canada Child Benefit or other income-tested amounts. Price that before you scale: <a href="/blog/side-income-benefits-tax-clawbacks-canada/">clawbacks</a>.',
      'GST/HST registration arrives at $30,000 of taxable supplies, not at $500 a month. Track it anyway.',
    ])}

    ${toc([
      { id: 'what-best-means', label: 'What can “best” mean at $500 a month?' },
      { id: 'shapes', label: 'Which three shapes match the hours?' },
      { id: 'math', label: 'What is an hour actually worth?' },
      { id: 'pick', label: 'How do you choose one for the next 90 days?' },
      { id: 'scale', label: 'What has to be true before you scale?' },
      { id: 'faq', label: 'Frequently asked questions' },
    ])}

    <h2 id="what-best-means">What does a “best” side hustle mean when half earn $500 or less?</h2>
    <p>It means best for a constraint, not best in a headline. Omnisend found that <strong>91 percent</strong> of people with a side hustle work under 20 hours a week, and <strong>53 percent</strong> earn $500 a month or less. A hustle that needs 30 hours to pay is not available to that majority. A hustle that pays $500 in 8 hours is a different object from one that pays $500 in 18.</p>
    <p>Ownr and Ipsos found <strong>23 percent</strong> of Canadians earn side income. BNN Bloomberg’s October 8, 2026 report of that work said nearly one in five side hustlers are likely to go full-time. That is intent. The earnings question is the $500 month. Going full-time on intent alone is <a href="/blog/side-hustle-to-full-time-canada/">the runway article</a>.</p>

    ${barChart({
      title: 'Among people who have a side hustle',
      aria: 'Omnisend 2026 bars: 85 percent do it for the money, 53 percent earn 500 dollars a month or less, 91 percent work under 20 hours a week.',
      caption: 'Omnisend side hustles report 2026, Cint survey of 1,029 people in Canada, March 2026. These three shares are of people who have a side hustle, not of all Canadians. The 31 percent who have one is a different base and is not drawn here.',
      rows: [
        { label: 'For the money', pct: 85, text: '85%' },
        { label: '≤ $500 a month', pct: 53, text: '53%' },
        { label: 'Under 20 h/week', pct: 91, text: '91%' },
      ],
    })}

    <h2 id="shapes">Which shapes fit under 20 hours?</h2>
    <p>Three shapes cover most legal side income without inventing a fourth “passive” category. Passive is usually someone else’s hours you have not counted.</p>
    <div class="table-wrapper">
    <table>
        <caption>How to sort a side hustle before you buy supplies. Earnings in the right column are the survey’s description of the typical outcome, not a promise for that shape.</caption>
        <thead><tr><th>Shape</th><th>Hours pattern</th><th>Cash to start</th><th>What usually limits it</th></tr></thead>
        <tbody>
            <tr><td>Sell personal goods you already own</td><td>Bursts. Listing and meeting.</td><td>Low. The goods exist.</td><td>It ends when the closet ends. Occasional personal sales are not the same as a shop. <a href="/blog/facebook-marketplace-tax-canada/">Marketplace tax</a>.</td></tr>
            <tr><td>Resell goods you bought to sell</td><td>Sourcing plus listing. Easy to blow past 20 hours.</td><td>Inventory cash you can lose.</td><td>Fees, returns, and the moment it becomes a business. <a href="/blog/reselling-flipping-canada/">Reselling</a>.</td></tr>
            <tr><td>Sell a skill you already have</td><td>A few booked hours. Closest thing to a high hourly.</td><td>Low if you own the tools.</td><td>Finding ten people who will pay. <a href="/blog/first-10-clients-freelance-canada/">First ten clients</a>.</td></tr>
        </tbody>
    </table>
    </div>
    <p>Content is a fourth shape people hope is a skill. It is a skill only after someone pays. Sponsorships and free products are income at fair market value when they are business. That page is <a href="/blog/content-creator-income-canada/">creator income</a>. Driving is a fifth shape with a car you are depreciating. The net hourly is in <a href="/blog/rideshare-delivery-driver-taxes-canada/">rideshare and delivery taxes</a>, which also covers the GST/HST exception that forces registration.</p>
    <p>Omnisend’s chart of where Canadians sell online puts <strong>Facebook Marketplace at 53 percent</strong> of online sellers. That is a distribution fact, not a finding that Marketplace pays the most per hour. Platform reporting, if you outgrow a clean-out, is <a href="/blog/platform-reporting-rules-canada/">will the platform report you</a>.</p>

    <h2 id="math">What is one hour worth after the costs you forget?</h2>
    <p>Example, not a survey. You earn <strong>$500 in a month</strong> and spend <strong>20 hours</strong>. That is $25 an hour before costs. Subtract $40 of fuel, fees, or supplies and you have $460, or <strong>$23 an hour</strong>. If the work is taxable business income, income tax and CPP still come off. Under the 2026 ceilings, self-employed CPP is 11.90 percent of pensionable earnings after the $3,500 basic exemption. On a small hustle that never reaches $3,500 of net self-employment income in the year, that CPP may be nil. On a hustle that grows, it is not. The rate page does this properly: <a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">freelance rate</a>.</p>
    <div class="example-calculation">
        <div class="line"><span>Example month</span><span>$500</span></div>
        <div class="line"><span>Example costs</span><span>$40</span></div>
        <div class="line"><span>Hours</span><span>20</span></div>
        <div class="line total"><span>Before tax</span><span>$23 an hour</span></div>
    </div>
    <p>Compare that $23 with a raise at the job you already have. A 3 percent raise on a $60,000 salary is $1,800 a year, about $150 a month, for hours you are already selling. If your employer would pay it, that hour is already gone and the side hustle has to beat a higher bar. Asking is <a href="/blog/how-to-ask-for-a-raise-canada/">how to ask for a raise</a>. The map of the three paths is <a href="/blog/how-to-earn-more-money-canada/">how to earn more</a>.</p>
    <div class="warning-box"><strong>Watch out.</strong> A $500 month that reduces a benefit can be worth less than zero. The Canada Child Benefit and GIS do not care that you worked for the dollar. Read the clawback guide before you scale a hustle in a household that receives those amounts.</div>

    <h2 id="pick">How do you pick one path for 90 days?</h2>
    <p><strong>Sell what you own</strong> if you need cash this month and you are not buying inventory. <strong>Sell a skill</strong> if you can name five people who might pay. <strong>Resell</strong> if you already understand the object and you can lose the inventory cash. <strong>Do not start a second hustle</strong> until the first has an hourly you have calculated. Ninety days is long enough to see a pattern and short enough to quit a bad one.</p>
    ${flowChart({
      aria: 'Decision flow: if a raise is available, ask first. If not, pick sell-what-you-own, a skill, or resale, and review the hourly at day 90.',
      caption: 'One path for 90 days. The surveys describe people who keep the hours small. A second hustle splits those hours.',
      nodes: [
        { title: 'Can you ask for a raise this month?', kind: 'decision' },
        { title: 'Yes: do that first', kind: 'option', text: 'It uses hours you already sell.' },
        { title: 'No: one side shape', text: 'Closet, skill, or resale. Not all three.' },
        { title: 'Day 90: keep, raise the price, or stop', kind: 'result' },
      ],
    })}
    ${howto('How to start a side hustle without inventing a business plan', [
      { name: 'Write the hours', text: 'A number you can keep for 12 weeks. If it is over 20, you are outside what 91 percent of Omnisend’s side hustlers do. That is allowed. It is also how people quit in week five.' },
      { name: 'Write the hourly test', text: 'Revenue minus costs, divided by hours. If it is below a job you could pick up instead, stop or change the price.' },
      { name: 'Check the contract you already signed', text: 'A moonlighting or IP clause at your employer can forbid the skill you were about to sell. Read it before the first invoice.' },
      { name: 'Track taxable supplies', text: 'A running total toward $30,000. You will not feel the GST/HST line at $500 a month. You will feel it if the hustle works.' },
      { name: 'Review on a date', text: 'Keep, change the price, or stop. Do not add a second idea because the first feels slow.' },
    ])}

    <h2 id="scale">What has to be true before you scale?</h2>
    <p>Four months of the hourly you wanted, a list of the next buyers, and a clear answer on employee versus contractor if one client wants all your hours. Registration is cheap when you need a trade name. It is not the scale. <a href="/blog/how-to-register-a-business-canada/">How to register</a> is the filing. <a href="/blog/raising-prices-small-business-canada/">Raising prices</a> is how a $500 month becomes a $800 month without adding hours.</p>
    <p>Tools worth using at this size: a spreadsheet for hours and supplies, Job Bank only if you are comparing the hustle to a wage, and CRA My Account once you are near the GST/HST line. A paid course that promises a hustle is a cost. Put it in the hourly test. If the course costs $400 and the month pays $500, you spent most of the month on the course.</p>
    <div class="tip-box"><strong>Pro tip.</strong> The highest-paid side hustle for someone with a job is often the raise they have not asked for. Do that conversation before you buy inventory. If the answer is no, you still have the 20 hours.</div>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>What is the best side hustle in Canada in 2026?</h3>
    <p>The one that fits under the hours you will keep and clears your costs. The survey evidence says most people with a side hustle earn $500 a month or less and work under 20 hours. “Best” is that constraint plus a skill someone will pay for, not a ranked list of apps.</p>
    <h3>How much do Canadians earn from side hustles?</h3>
    <p>Omnisend’s 2026 report says 53 percent of people with a side hustle earn $500 a month or less. That is a share, not an average this page will invent. Ownr and Ipsos found 23 percent of Canadians earn side income, which is a different question.</p>
    <h3>Are side hustles taxable in Canada?</h3>
    <p>Business income is taxable, including many platform and creator payments. Occasional sales of personal belongings are a different analysis. The Marketplace article draws that line. Reporting rules do not decide tax. They decide what a platform may send CRA.</p>
    <h3>Do I need to register for GST/HST?</h3>
    <p>Not while you are a small supplier, generally $30,000 or less of taxable supplies in a quarter and over four quarters. Ride-share is an exception. Voluntary registration is allowed. The filing detail is the side-hustle tax guide.</p>
    <h3>Will a side hustle affect my benefits?</h3>
    <p>It can. Income-tested benefits use income definitions that can include the profit. Read the clawback guide and put the approximate reduction next to the $500 before you call the month a win.</p>
    <h3>Can my employer stop me?</h3>
    <p>A contract can restrict outside work, especially if it competes or uses their time and tools. Employment standards do not hand you a universal right to moonlight. Read the clause. If it is unclear, ask before you invoice a competitor.</p>
    <h3>Is Facebook Marketplace the best place to sell?</h3>
    <p>It is the most used place in Omnisend’s chart, at 53 percent of Canadian online sellers. Most used is not highest margin. Pick the platform that matches the object, then read the reselling guide. This page does not quote fee splits it has not verified.</p>
    <h3>Should I quit if the hustle feels promising?</h3>
    <p>Not on a promising month. The full-time test is saved runway plus repeated profit. Nearly one in five say they are likely to leap. The earnings data says most have not built a salary yet.</p>

    ${sources([
      '<a href="https://www.omnisend.com/side-hustles-report-2026">Omnisend: side hustles report 2026</a>',
      '<a href="https://www.rbcx.com/news/press-releases/side-hustles-are-getting-serious-nearly-one-in-four-canadians-has-one-but-many-arent-taking-the-entrepreneurial-leap-ownr-data-reveals/">RBCx / Ownr: Ipsos release, October 8, 2026</a>',
      '<a href="https://www.bnnbloomberg.ca/business/economics/2026/10/08/necessity-and-opportunity-turning-a-side-hustle-into-a-small-business/">BNN Bloomberg, October 8, 2026</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/when-register-charge.html">CRA: GST/HST small-supplier threshold</a>',
    ])}

    ${readNext([
      '<a href="/blog/how-to-earn-more-money-canada/">Raise, business, or side hustle</a>',
      '<a href="/blog/facebook-marketplace-tax-canada/">When a Marketplace sale is taxable</a>',
      '<a href="/blog/side-income-benefits-tax-clawbacks-canada/">When the extra dollar shrinks a benefit</a>',
      '<a href="/blog/how-to-ask-for-a-raise-canada/">The raise that might beat the hustle</a>',
    ])}

    ${cta('Next step: if the hustle is already showing up as income, estimate the tax with the calculator and move that amount out of spending. The 2026 tax guide is the longer return for a year with both a T4 and a side business.')}

    ${footer}
</div>`;
