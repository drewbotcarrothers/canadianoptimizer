import { invFooter, invPost } from './types';

const CIRO_TCR = 'https://www.ciro.ca/office-investor/investing-basics/total-cost-reporting-what-investors-need-know-2027';
const OSC_TCR = 'https://www.osc.ca/en/news-events/news/canadian-financial-regulators-enhance-cost-reporting-requirements-investment-funds-and-individual';
const GSAM_MF_FEES = 'https://www.getsmarteraboutmoney.ca/learning-path/mutual-funds-segregated-funds/mutual-fund-fees/';
const GSAM_Q = 'https://www.getsmarteraboutmoney.ca/learning-path/working-with-an-advisor/8-questions-to-ask-an-advisor/';
const CRA_22100 = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22100-carrying-charges-interest-expenses.html';
const NRS = 'https://www.aretheyregistered.ca/';

export const isAFinancialAdvisorWorthItCanada = invPost(
  'hands-off',
  'is-a-financial-advisor-worth-it-canada',
  'Is a 1% Advisor Worth It? A Value-of-Advice Checklist',
  'What a 1% advisory fee costs over 25 years, what good advice should include for that price, how to read your all-in fee report, and when paying is worth it.',
  `<div class="container">

    <div class="hook">
        On a $500,000 portfolio, a 1% advisory fee is <span class="highlight">$5,000 a year</span>, before the cost of the funds inside. Over 25 years, the gap between paying about 1.25% in total and 0.20% can exceed $225,000 on a $250,000 start, in our illustration. That's the price. The question is what you get for it.
    </div>

    <p>A 1% advisor is worth it if the advice adds more than the fee, through tax planning, a withdrawal strategy, insurance and estate work, and keeping you invested in a crash. If you only get a portfolio of funds and an annual meeting, low-cost ETFs or a robo-advisor give you that for much less.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Fees compound. In our illustration, $250,000 growing at 6% before fees for 25 years ends at about $1.02 million with 0.20% in costs and about $798,000 with 1.25%.</li>
            <li>Good advice is mostly planning: which accounts to fund and draw first, CPP and OAS timing, tax, insurance and estate. Portfolio picking is the smallest part.</li>
            <li>From 2026, total cost reporting requires your annual report to show fund costs in dollars, so you can see the full price for the first time in reports arriving from January 2027.</li>
            <li>Fees paid for managing a non-registered account may be deductible on line 22100. Fees for RRSPs, RRIFs, TFSAs and FHSAs are not.</li>
            <li>Ask what you get for the fee, in writing. Then judge the advisor against that list each year.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/hands-off/">Hands-off investing</a>, in the <a href="/category/investing/">Investing</a> category. For your options side by side, see <a href="/blog/robo-advisor-vs-financial-advisor-canada/">who should manage your money</a>. For the maths of fund fees alone, see <a href="/blog/mer-drag-index-funds-canada/">MER drag</a>.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#cost">What does a 1% fee really cost?</a></li>
            <li><a href="#layers">What are you actually paying for?</a></li>
            <li><a href="#value">What should good advice include?</a></li>
            <li><a href="#breakeven">How much value does an advisor need to add?</a></li>
            <li><a href="#report">How do you find your real all-in cost?</a></li>
            <li><a href="#tax">Can you deduct advisory fees?</a></li>
            <li><a href="#models">How do the main advice models compare?</a></li>
            <li><a href="#decide">When is paying worth it?</a></li>
            <li><a href="#example">How would the Nguyens decide?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="cost">What does a 1% fee really cost?</h2>

    <p>A fee taken every year compounds against you, just as returns compound for you. Here's $250,000 invested for 25 years with no new money, assuming a 6% annual return before fees. The return is an assumption for illustration, not a forecast.</p>

    <div class="table-wrapper">
        <table>
            <caption>$250,000 over 25 years at an assumed 6% gross return, by total annual cost (our calculations)</caption>
            <thead>
                <tr><th>Total annual cost</th><th>Example of who might charge it</th><th>Value after 25 years</th><th>Less than the 0.20% case</th></tr>
            </thead>
            <tbody>
                <tr><td>0.20%</td><td>DIY low-cost ETFs</td><td>$1,023,486</td><td>–</td></tr>
                <tr><td>0.60%</td><td>A robo-advisor plus its ETFs</td><td>$931,012</td><td>$92,474</td></tr>
                <tr class="highlight-row"><td>1.25%</td><td>1% advisory fee plus 0.25% ETF costs</td><td>$797,610</td><td>$225,875</td></tr>
                <tr><td>2.00%</td><td>Mutual funds with embedded advice</td><td>$666,459</td><td>$357,026</td></tr>
            </tbody>
        </table>
    </div>

    <div class="chart-container">
        <h3>Value of $250,000 after 25 years at 6% gross, by total cost (illustrative)</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">0.20% total cost: $1,023,486</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">0.60%: $931,012</div><div class="bar-wrapper"><div class="bar" style="width: 91%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">1.25%: $797,610</div><div class="bar-wrapper"><div class="bar" style="width: 78%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">2.00%: $666,459</div><div class="bar-wrapper"><div class="bar" style="width: 65%;"><span></span></div></div></div>
        </div>
        <p>Our calculations: $250,000 × (1 + 6% − cost)<sup>25</sup>. Fee levels are illustrative, not quotes from any firm.</p>
    </div>

    <p>The point isn't that advice is bad. It's that the fee has to earn its keep every single year. A fee that looks small as a percentage is large in dollars: 1% of $500,000 is $5,000 a year, or about $417 a month.</p>

    <h2 id="layers">What are you actually paying for?</h2>

    <p>Most advised accounts have two or three layers of cost:</p>

    <ul>
        <li><strong>The advisory or account fee.</strong> In a fee-based account, a percentage of assets charged to you directly, often around 1% and lower on larger accounts.</li>
        <li><strong>The fund costs.</strong> Each fund's management expense ratio (MER) and trading expense ratio, taken inside the fund. You never see a bill.</li>
        <li><strong>Embedded commissions.</strong> In Series A mutual funds, part of the MER is a trailing commission paid to the dealer. The OSC's <a href="${GSAM_MF_FEES}">GetSmarterAboutMoney.ca page on mutual fund fees</a> explains how these work.</li>
    </ul>

    <p>If you're in Series A funds and also paying a separate advisory fee, ask why. Our guide to <a href="/blog/mutual-fund-fees-series-a-vs-f-canada/">Series A vs F</a> explains the difference.</p>

    <h2 id="value">What should good advice include?</h2>

    <p>For 1% a year, you should get a lot more than fund selection. Here's a checklist to use with your advisor. Ask which of these they do, how often, and whether it's in writing.</p>

    <div class="table-wrapper">
        <table>
            <caption>Value-of-advice checklist: what to expect, and how to check you're getting it</caption>
            <thead>
                <tr><th>Service</th><th>What good looks like</th><th>How to check</th></tr>
            </thead>
            <tbody>
                <tr class="highlight-row"><td>Written financial plan</td><td>Goals, savings rate, retirement date and income target, updated regularly</td><td>Ask for the document</td></tr>
                <tr><td>Account strategy</td><td>Which of RRSP, TFSA, FHSA, RESP and non-registered to fund first, and why</td><td>A one-page summary</td></tr>
                <tr><td>Tax planning</td><td>Asset location, tax-loss selling, pension income splitting, RRSP meltdown where useful</td><td>Ask what they changed last year</td></tr>
                <tr><td>Retirement income plan</td><td>CPP and OAS timing, withdrawal order, OAS clawback management</td><td>Year-by-year projection</td></tr>
                <tr><td>Insurance and estate</td><td>Coverage reviewed; beneficiaries, wills and powers of attorney checked</td><td>Ask when they last reviewed yours</td></tr>
                <tr><td>Behavioural coaching</td><td>Talking you out of selling in a crash</td><td>What they said in 2020 and 2022</td></tr>
                <tr><td>Portfolio management</td><td>Diversified, low-cost, rebalanced, matched to your risk</td><td>Holdings and all-in cost</td></tr>
            </tbody>
        </table>
    </div>

    <p>The OSC's list of <a href="${GSAM_Q}">questions to ask an advisor</a> covers fees, services and conflicts. Our guide to <a href="/blog/questions-to-ask-financial-advisor-canada/">questions to ask a financial advisor</a> adds answers that should worry you.</p>

    <h2 id="breakeven">How much value does an advisor need to add?</h2>

    <p>Compare the advised option with what you'd realistically do instead. If the alternative is a 0.20% ETF portfolio you'd stick with, a 1.25% all-in advisor must add about 1.05% a year to break even. If the alternative is a 0.60% robo-advisor, the hurdle is about 0.65%.</p>

    <p>Some of that value is easy to measure, such as a tax strategy that saves $3,000 a year. Some is not, such as stopping you from selling at the bottom. Be honest about which one you need. If you've held through past crashes on your own, the coaching value is lower for you.</p>

    <div class="flowchart">
        <div class="flow-node decision">Do you need planning beyond the portfolio (tax, retirement income, estate)?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">No: low-cost ETFs or a robo-advisor</div>
            <div class="flow-node decision">Yes: is it ongoing, or a one-time plan?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">One-time or occasional: a fee-only planner, plus low-cost investing</div>
            <div class="flow-node result">Ongoing and complex: an advisor whose written service list justifies the fee</div>
        </div>
    </div>

    <h2 id="report">How do you find your real all-in cost?</h2>

    <p>Until now, your annual report showed what your dealer was paid, but not the cost of the funds inside your account. That's changing. The <a href="${OSC_TCR}">CSA and CCIR announcement</a> of April 20, 2023 set out enhanced cost reporting that shows ongoing fund costs as a percentage for each fund and as a total dollar amount. The rules took effect January 1, 2026. <a href="${CIRO_TCR}">CIRO says</a> investors begin receiving the enhanced reports from January 1, 2027.</p>

    <p>When yours arrives, add the dealer compensation and the fund costs together. Divide by your average balance. That is your all-in percentage. Our guide to <a href="/blog/total-cost-reporting-canada/">reading your first all-in fee report</a> walks through it line by line.</p>

    <div class="tip-box">
        <strong>Don't want to wait until 2027?</strong>
        <p>Ask your advisor today for your total cost last year in dollars: advisory fees, fund MERs and any commissions. A good advisor will give you one number.</p>
    </div>

    <h2 id="tax">Can you deduct advisory fees?</h2>

    <p>Sometimes. The <a href="${CRA_22100}">CRA's line 22100 page</a> lets you claim fees to manage or take care of your investments, and fees for certain investment advice. It excludes fees for RRSPs, RRIFs, TFSAs, FHSAs, pooled registered pension plans and specified pension plans. It also says brokerage fees and commissions are not deductible there; they go into your capital gain calculation instead.</p>

    <p>So a fee-based non-registered account can carry a partial tax saving. Fund MERs are charged inside the fund, so there's no separate fee for you to claim.</p>

    <h2 id="models">How do the main advice models compare?</h2>

    <p>Not all advice is sold the same way, and the model shapes the incentives. A commission or embedded-fee advisor is paid through the funds you hold, so the cost is easy to miss. A fee-based advisor charges a visible percentage of assets, which you can see on your statements and, in a non-registered account, may partly deduct. A fee-only planner charges a flat or hourly fee and doesn't manage or sell products, so the cost is the same whether you hold $100,000 or $1 million.</p>

    <p>None of these is automatically better. A percentage fee grows as your portfolio grows, even if the work doesn't. A flat fee only covers what you agreed on, so you still need to carry out the plan yourself. The useful question isn't which model is cheapest. It's which one matches the help you actually need, and whether you'll follow through on your own. Ask any advisor, in writing, how they're paid and whether they earn more if you buy one product over another.</p>

    <h2 id="decide">When is paying worth it?</h2>

    <p>Paying for ongoing advice tends to make sense when:</p>
    <ul>
        <li>You're five to ten years from retirement and need a withdrawal, CPP, OAS and tax plan.</li>
        <li>You have a complex situation: a business, a corporation, rental property, a pension decision or an estate.</li>
        <li>You know you'd sell in a crash, and you've done it before.</li>
        <li>You don't have the time or interest, and the alternative is doing nothing at all.</li>
    </ul>

    <p>It tends not to when you're early in your career with simple accounts, you're comfortable holding an all-in-one ETF, or the "advice" is mainly fund selection. A one-time plan from a fee-only planner, combined with a low-cost portfolio, can fill the gap. Before hiring anyone, check their registration on the <a href="${NRS}">CSA's National Registration Search</a>.</p>

    <h2 id="example">How would the Nguyens decide?</h2>

    <div class="example-box">
        <strong>Illustrative example: the Nguyens, 58 and 60, Ottawa</strong>
        <p>They have $800,000 across RRSPs, TFSAs and a non-registered account, plus a defined benefit pension for one spouse. Their advisor charges 1% plus about 0.25% in ETF costs.</p>
        <div class="example-calculation">
            <div class="line"><span>Annual cost at 1.25% on $800,000</span><span>$10,000</span></div>
            <div class="line"><span>Robo-advisor alternative at 0.60%</span><span>$4,800</span></div>
            <div class="line"><span>Extra paid for advice</span><span>$5,200 a year</span></div>
            <div class="line"><span>What the advisor delivered last year, in writing</span><span>RRSP meltdown plan, pension splitting, OAS clawback plan, will review</span></div>
            <div class="line total"><span>Their decision</span><span>Stay until 70, then review again</span></div>
        </div>
        <p>They decided the retirement income work was worth more than $5,200 a year to them at this stage. Once withdrawals are set, they'll compare with a one-time plan and a robo-advisor. Amounts are illustrative.</p>
    </div>

    <h2>Does your province change anything?</h2>
    <p>Advisor fees and services are similar across Canada. Titles differ: Ontario and Saskatchewan regulate the "financial planner" title, and Quebec regulates financial planners through the AMF. Tax-planning value is higher in higher-tax provinces, because each dollar of tax saved is worth more.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>All-in cost known in dollars and as a percentage</li>
        <li>Written list of services included in the fee</li>
        <li>Financial plan and retirement income plan received</li>
        <li>Tax and account strategy explained in writing</li>
        <li>Advisor's registration checked</li>
        <li>Non-registered management fees claimed on line 22100 if eligible</li>
        <li>Yearly review: did the advice beat the fee?</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Is 1% a normal fee for a financial advisor in Canada?</h3>
    <p>It's a common level for fee-based accounts, often lower on larger balances. Fund costs come on top. Ask for your all-in cost in dollars.</p>

    <h3>How much does a 1% fee cost over time?</h3>
    <p>In our illustration, $250,000 at 6% gross for 25 years ends about $226,000 lower at 1.25% total cost than at 0.20%.</p>

    <h3>Are advisory fees tax-deductible?</h3>
    <p>Fees to manage non-registered investments may be deductible on line 22100. Fees for RRSPs, RRIFs, TFSAs and FHSAs are not.</p>

    <h3>What should I get for a 1% fee?</h3>
    <p>A written plan, tax and account strategy, retirement income planning, insurance and estate reviews, coaching and a low-cost portfolio.</p>

    <h3>Is a robo-advisor better than a human advisor?</h3>
    <p>For portfolio management alone, often yes on cost. For complex planning, a human may add more. See <a href="/blog/robo-advisor-vs-financial-advisor-canada/">our comparison</a>.</p>

    <h3>How do I see what I'm really paying?</h3>
    <p>Total cost reporting began in 2026. Your first all-in report arrives from January 2027. Until then, ask your advisor.</p>

    <h3>How do I leave if it's not worth it?</h3>
    <p>Open an account at the new firm and ask it to transfer in kind. See <a href="/blog/transfer-investment-account-leave-advisor-canada/">how to leave your advisor</a>.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${OSC_TCR}">CSA and CCIR: Enhanced cost reporting requirements</a> (April 20, 2023), reviewed October 23, 2026</li>
        <li><a href="${CIRO_TCR}">CIRO: Total cost reporting, what investors need to know for 2027</a>, reviewed October 23, 2026</li>
        <li><a href="${GSAM_MF_FEES}">GetSmarterAboutMoney.ca (OSC): Mutual fund fees</a>, reviewed October 23, 2026</li>
        <li><a href="${GSAM_Q}">GetSmarterAboutMoney.ca (OSC): Questions to ask an advisor</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_22100}">CRA: Line 22100, Carrying charges, interest expenses and other expenses</a>, reviewed October 23, 2026</li>
        <li><a href="${NRS}">CSA: National Registration Search</a>, reviewed October 23, 2026</li>
        <li>Fee drag and break-even figures: our calculations with an assumed 6% gross return</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/robo-advisor-vs-financial-advisor-canada/">Who should manage your money?</a></li>
        <li><a href="/blog/total-cost-reporting-canada/">How to read your first all-in fee report</a></li>
        <li><a href="/blog/mer-drag-index-funds-canada/">MER drag and index funds</a></li>
        <li><a href="/blog/transfer-investment-account-leave-advisor-canada/">How to leave your advisor</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Want to judge the tax advice you're paying for?</strong></p>
        <p>The 2026 tax guide covers RRSP and TFSA strategy, pension splitting, the OAS clawback and capital gains.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about advice fees as of October 23, 2026. Fee levels and returns in the examples are assumptions for illustration, not quotes or forecasts. It is not investment or tax advice.")}

</div>`
);
