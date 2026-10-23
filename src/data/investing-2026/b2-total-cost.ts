import { invFooter, invPost } from './types';

const OSC_TCR = 'https://www.osc.ca/en/news-events/news/canadian-financial-regulators-enhance-cost-reporting-requirements-investment-funds-and-individual';
const CIRO_TCR = 'https://www.ciro.ca/office-investor/investing-basics/total-cost-reporting-what-investors-need-know-2027';
const GSAM_MF_FEES = 'https://www.getsmarteraboutmoney.ca/learning-path/mutual-funds-segregated-funds/mutual-fund-fees/';
const XEQT = 'https://www.blackrock.com/ca/investors/en/products/309480/ishares-core-equity-etf-portfolio';
const OBSI_FAQ = 'https://www.obsi.ca/en/for-consumers/faqs/';

export const totalCostReportingCanada = invPost(
  'hands-off',
  'total-cost-reporting-canada',
  'Total Cost Reporting in Canada: How to Read Your Fee Report',
  'From 2026, Canadian dealers must report what your funds cost you in dollars, not just their own fees. Here is how to read the first all-in report in 2027.',
  `<div class="container">

    <div class="hook">
        Canada's securities and insurance regulators set the start date at <span class="highlight">January 1, 2026, with the first all-in reports covering the year ending December 31, 2026</span> (CSA and CCIR). For the first time, your annual statement will put fund costs and dealer fees on the same page, in dollars. Many investors will see a bigger number than they expected.
    </div>

    <p>Total cost reporting means your annual "charges and compensation" report must now include what your investment funds cost you, in dollars, plus each fund's expense ratio. The CSA and CCIR rules took effect January 1, 2026, so the first full reports, covering 2026, arrive in early 2027, according to CIRO.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The rules took effect January 1, 2026. Your first enhanced report covers calendar 2026 and arrives from January 2027.</li>
            <li>It adds fund costs in dollars: the aggregate fund expenses and direct fund charges you paid, plus each fund's expense ratio (FER = MER + TER).</li>
            <li>It covers mutual funds, ETFs, scholarship plans and segregated funds. Labour-sponsored funds and prospectus-exempt funds are excluded.</li>
            <li>CIRO says no new fees are being added. The report shows costs you were already paying.</li>
            <li>Use the total in dollars to compare with a robo-advisor or a one-fund ETF. On $250,000, the gap between 0.19% and 2% is about $4,525 a year (illustrative calculation).</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/hands-off/">Hands-Off Investing</a>, in the <a href="/category/investing/">Investing</a> category. It explains what the new report shows, how to read each line, and what to do with the total. For the bigger choice between a robo, an advisor and a planner, read <a href="/blog/robo-advisor-vs-financial-advisor-canada/">robo-advisor versus financial advisor</a>.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#what">What is total cost reporting?</a></li>
            <li><a href="#when">When will you get the first report?</a></li>
            <li><a href="#lines">What does each line mean?</a></li>
            <li><a href="#example">What could a real report show?</a></li>
            <li><a href="#compare">How do you compare your total?</a></li>
            <li><a href="#provinces">Does it differ by province or product?</a></li>
            <li><a href="#act">What should you do when it arrives?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="what">What is total cost reporting?</h2>

    <p>It is an upgrade to a report you already get. Since the earlier client relationship reforms, dealers and advisers have sent an annual report on charges and other compensation. That report showed what the dealer charged you directly, such as account fees, commissions and advisory fees, and what it received from fund companies, such as trailing commissions. It did not show what the funds themselves took out of your returns every day.</p>

    <p>The new rules fix that gap. According to the <a href="${OSC_TCR}">April 20, 2023 announcement</a> by the Canadian Securities Administrators (CSA) and the Canadian Council of Insurance Regulators (CCIR), the enhanced report must show ongoing fund costs both as a percentage for each fund and as an aggregate dollar amount. The CSA rule changes are in section 14.17 of National Instrument 31-103. The insurance regulators applied the same idea to segregated funds through guidance.</p>

    <div class="table-wrapper">
        <table>
            <caption>Annual cost report before and after total cost reporting, per CSA, CCIR and CIRO, reviewed October 23, 2026</caption>
            <thead>
                <tr><th>Item</th><th>Old annual report</th><th>From the 2026 reporting year</th></tr>
            </thead>
            <tbody>
                <tr><td>Dealer charges (account, admin, advisory fees, commissions)</td><td>Shown in dollars</td><td>Still shown in dollars</td></tr>
                <tr><td>Trailing commissions paid to your dealer</td><td>Shown in dollars</td><td>Still shown in dollars</td></tr>
                <tr class="highlight-row"><td>Fund expenses (the MER and trading costs inside each fund)</td><td>Not shown</td><td>Aggregate dollars you paid, plus each fund's expense ratio</td></tr>
                <tr><td>Direct fund charges (for example, short-term trading or redemption fees)</td><td>Not consistently shown</td><td>Aggregate dollars</td></tr>
                <tr><td>Products covered</td><td>Dealer and adviser charges</td><td>Mutual funds, ETFs, scholarship plans and segregated funds; excludes labour-sponsored funds and prospectus-exempt funds</td></tr>
            </tbody>
        </table>
    </div>

    <h2 id="when">When will you get the first report?</h2>

    <p>The CSA amendments received ministerial approval in Ontario on June 20, 2023, and the OSC published notice on June 29, 2023. The rules then had a long runway so dealers could build systems. There is no grandfathering of older fund holdings: every covered fund in your account counts.</p>

    <div class="table-wrapper">
        <table>
            <caption>Total cost reporting timeline, from the OSC and CIRO pages linked in Sources</caption>
            <thead>
                <tr><th>Date</th><th>What happened</th></tr>
            </thead>
            <tbody>
                <tr><td>April 20, 2023</td><td>CSA and CCIR publish final total cost reporting requirements</td></tr>
                <tr><td>June 20, 2023</td><td>Ontario ministerial approval of the CSA amendments</td></tr>
                <tr class="highlight-row"><td>January 1, 2026</td><td>Rules take effect; dealers start tracking fund costs for the year</td></tr>
                <tr><td>December 31, 2026</td><td>End of the first full reporting period</td></tr>
                <tr><td>From January 1, 2027</td><td>CIRO says investors begin receiving the enhanced annual reports</td></tr>
            </tbody>
        </table>
    </div>

    <p>Some dealers may send the report with the December statement and others a few weeks later. If you have not seen it by spring 2027, ask your dealer for it.</p>

    <h2 id="lines">What does each line mean?</h2>

    <p>Read the report from the bottom up: find the grand total in dollars, then split it into what your dealer charged and what your funds charged. CIRO's page shows a sample "Charges and Compensation Report" with these parts.</p>

    <div class="diagram">
        <div class="diagram-step">1. Find the total you paid this year, in dollars</div>
        <div class="diagram-arrow">↓</div>
        <div class="diagram-step light">2. Split it: dealer charges and compensation vs fund expenses</div>
        <div class="diagram-arrow">↓</div>
        <div class="diagram-step light">3. Check each fund's expense ratio (FER = MER + TER)</div>
        <div class="diagram-arrow">↓</div>
        <div class="diagram-step">4. Divide the total by your average balance to get your all-in percentage</div>
    </div>

    <dl>
        <div class="term"><dt class="term-name">Fund expense ratio (FER)</dt><dd class="term-def">The fund's management expense ratio (MER) plus its trading expense ratio (TER), as a percentage. CIRO uses this definition.</dd></div>
        <div class="term"><dt class="term-name">Fund expenses</dt><dd class="term-def">The dollars the funds you held took out of their value over the year, worked out from each fund's expense ratio and your holdings.</dd></div>
        <div class="term"><dt class="term-name">Direct fund charges</dt><dd class="term-def">Charges paid straight out of your holding, such as a short-term trading fee or a redemption charge.</dd></div>
        <div class="term"><dt class="term-name">Trailing commission</dt><dd class="term-def">An ongoing payment from the fund company to your dealer, usually paid out of the MER. The OSC's investor site says these are typically 0.25% to 1.5% a year.</dd></div>
    </dl>

    <div class="tip-box">
        <strong>Do not count trailing commissions twice.</strong>
        <p>A trailing commission is usually paid out of the fund's MER, so it can appear both as compensation to your dealer and inside the fund expenses figure. Ask your dealer whether the trailing commission line is already included in the fund-expense total before you add the two together.</p>
    </div>

    <h2 id="example">What could a real report show?</h2>

    <p>Here are two households with $250,000 each. Both are illustrative examples: the fees are round numbers within the ranges published by the OSC's investor site and the fund pages linked below, not quotes from any firm.</p>

    <div class="example-box">
        <strong>Illustrative example: Priya, Mississauga, fee-based account</strong>
        <p>Priya pays her dealer a 1.25% advisory fee. Her account holds ETFs and F-series funds with an average expense ratio of 0.40%.</p>
        <div class="example-calculation">
            <div class="line"><span>Dealer advisory fee: $250,000 × 1.25%</span><span>$3,125</span></div>
            <div class="line"><span>Fund expenses: $250,000 × 0.40%</span><span>$1,000</span></div>
            <div class="line total"><span>Total cost for the year (1.65%)</span><span>$4,125</span></div>
        </div>
        <p>Before 2026, Priya's report showed only the $3,125. Sales tax on the advisory fee is not included here; check your own statement for it.</p>
    </div>

    <div class="example-box">
        <strong>Illustrative example: Gilles, Trois-Rivières, mutual funds at a branch</strong>
        <p>Gilles holds series A mutual funds with an average 2.00% expense ratio, which includes a 1.00% trailing commission. He pays no separate account fee.</p>
        <div class="example-calculation">
            <div class="line"><span>Trailing commissions to his dealer (inside the MER)</span><span>$2,500</span></div>
            <div class="line"><span>Fund expenses: $250,000 × 2.00%</span><span>$5,000</span></div>
            <div class="line total"><span>Total cost for the year (2.00%)</span><span>$5,000</span></div>
        </div>
        <p>The old report showed $2,500 in trailing commissions. The new one shows the full $5,000 of fund expenses, which already includes the trailer.</p>
    </div>

    <h2 id="compare">How do you compare your total?</h2>

    <p>Divide your total cost by your average balance. Then compare that percentage with what the same money would cost elsewhere. The chart uses $250,000 and each option's published or illustrative all-in cost.</p>

    <div class="chart-container">
        <h3>Annual all-in cost on $250,000 (illustrative calculation)</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">One-fund ETF at 0.19%: $475</div><div class="bar-wrapper"><div class="bar" style="width: 9.5%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Robo at 0.40% all-in: $1,000</div><div class="bar-wrapper"><div class="bar" style="width: 20%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Fee-based 1.65%</div><div class="bar-wrapper"><div class="bar" style="width: 82.5%;"><span>$4,125</span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Mutual funds 2.00%</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span>$5,000</span></div></div></div>
        </div>
        <p>The 0.19% is the MER of iShares' <a href="${XEQT}">XEQT</a> as listed by BlackRock on October 23, 2026. The robo figure assumes a 0.20% service fee plus 0.20% in ETF costs. The other two bars are the illustrative households above. None of this is a quote.</p>
    </div>

    <p>A higher cost can still be worth paying if you get real planning, tax help or behavioural coaching you would not get elsewhere. The report gives you the number to judge that. On $250,000, the difference between 0.19% and 2.00% is $4,525 a year before growth. Our <a href="/blog/mer-drag-index-funds-canada/">MER drag guide</a> shows how that compounds.</p>

    <h2 id="provinces">Does it differ by province or product?</h2>

    <p>The CSA rule applies across Canada, because every provincial and territorial securities regulator, including Quebec's AMF, adopted it. The details differ by product, not by province:</p>
    <ul>
        <li><strong>Mutual funds and ETFs</strong> held at a dealer are covered under the CSA rule in NI 31-103.</li>
        <li><strong>Segregated funds</strong> sold by insurers are covered through guidance from the insurance regulators (CCIR), so the report comes from the insurer and may look different.</li>
        <li><strong>Scholarship plans</strong> are covered.</li>
        <li><strong>Labour-sponsored funds and prospectus-exempt funds</strong> are excluded, so their costs will not appear in the total.</li>
        <li><strong>Individual stocks and bonds</strong> have no fund expense ratio. Commissions and account fees still appear as dealer charges.</li>
    </ul>

    <h2 id="act">What should you do when it arrives?</h2>

    <div class="step-section">
        <div class="step">
            <div class="step-number">1</div>
            <div>
                <div class="step-title">Write down the all-in percentage</div>
                <p>Total dollars divided by your average balance. Do it for each account if you have several dealers.</p>
            </div>
        </div>
        <div class="step">
            <div class="step-number">2</div>
            <div>
                <div class="step-title">List what you got for it</div>
                <p>A written financial plan, tax planning, rebalancing, meetings. If the answer is "a few calls," the fee is mostly for fund selection.</p>
            </div>
        </div>
        <div class="step">
            <div class="step-number">3</div>
            <div>
                <div class="step-title">Ask your advisor three questions</div>
                <p>Is there a lower-cost series of the same fund? Is the trailing commission already inside the fund-expense line? What would it cost to transfer out, including any old deferred sales charges?</p>
            </div>
        </div>
        <div class="step">
            <div class="step-number">4</div>
            <div>
                <div class="step-title">Decide, then act once</div>
                <p>Stay, renegotiate, or move. If something on the report looks wrong and your firm will not fix it, you can escalate to the <a href="${OBSI_FAQ}">Ombudsman for Banking Services and Investments</a>, which lists fee disclosure among the issues it handles.</p>
            </div>
        </div>
    </div>

    <div class="warning-box">
        <strong>Before you move money</strong>
        <ul>
            <li>Funds bought under an old deferred sales charge schedule may still have redemption fees. New DSC sales were banned as of June 1, 2022, according to the OSC's investor site.</li>
            <li>Selling in a non-registered account can trigger capital gains. Transfer "in kind" where possible.</li>
            <li>Never withdraw from a TFSA or RRSP to move it. Use a direct transfer.</li>
        </ul>
    </div>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Found the total cost in dollars on the 2026 report</li>
        <li>Calculated the all-in percentage</li>
        <li>Checked whether trailing commissions are inside the fund-expense line</li>
        <li>Listed the services you actually received</li>
        <li>Compared with a robo or one-fund ETF on the same balance</li>
        <li>Checked any remaining deferred sales charges before transferring</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>When does total cost reporting start in Canada?</h3>
    <p>The rules took effect January 1, 2026. The first enhanced annual reports cover the year ending December 31, 2026, and CIRO says investors begin receiving them from January 1, 2027.</p>

    <h3>Will total cost reporting add new fees?</h3>
    <p>No. CIRO says the reports show costs you were already paying. The change is that fund costs now appear in dollars next to your dealer's charges.</p>

    <h3>What is the difference between MER and FER?</h3>
    <p>The MER is the fund's management fee plus operating costs. The fund expense ratio adds the trading expense ratio (TER), so FER = MER + TER. The new report uses the FER.</p>

    <h3>Does total cost reporting cover ETFs?</h3>
    <p>Yes. The CSA and CCIR announcement lists mutual funds, ETFs, scholarship plans and segregated funds. Labour-sponsored funds and prospectus-exempt funds are excluded.</p>

    <h3>Does it apply to a self-directed brokerage account?</h3>
    <p>The CSA rule applies to registered dealers and advisers, and a discount broker is a registered dealer. If you hold ETFs or mutual funds there and your 2026 report has no fund-expense line, ask the broker in writing how it is reporting them.</p>

    <h3>What if my report has no fund expenses?</h3>
    <p>If you hold only stocks, bonds, GICs or excluded funds, there may be none. If you hold mutual funds or ETFs and the line is missing, ask your dealer in writing.</p>

    <h3>Are segregated funds included?</h3>
    <p>Yes, through the insurance regulators' guidance. The report comes from the insurance company and may be formatted differently from your dealer's.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${OSC_TCR}">OSC: Canadian financial regulators enhance cost reporting requirements for investment funds and individual segregated funds</a> (April 20, 2023), reviewed October 23, 2026</li>
        <li><a href="${CIRO_TCR}">CIRO: Total Cost Reporting, what investors need to know for 2027</a>, reviewed October 23, 2026</li>
        <li><a href="${GSAM_MF_FEES}">GetSmarterAboutMoney (OSC): Mutual fund fees</a>, reviewed October 23, 2026</li>
        <li><a href="${XEQT}">BlackRock: iShares Core Equity ETF Portfolio (XEQT)</a>, MER, reviewed October 23, 2026</li>
        <li><a href="${OBSI_FAQ}">OBSI: Frequently asked questions</a>, reviewed October 23, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/robo-advisor-vs-financial-advisor-canada/">Robo-advisor vs financial advisor in Canada</a></li>
        <li><a href="/blog/questions-to-ask-financial-advisor-canada/">Questions to ask a financial advisor</a></li>
        <li><a href="/blog/check-financial-advisor-registration-canada/">How to check an advisor is registered</a></li>
        <li><a href="/blog/mer-drag-index-funds-canada/">MER drag on index funds</a></li>
        <li><a href="/blog/best-robo-advisors-canada/">Best robo-advisors in Canada</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Got your total? See what the same money costs elsewhere.</strong></p>
        <p>Our robo-advisor versus financial advisor guide compares fees, services and who each option fits.</p>
        <a href="/blog/robo-advisor-vs-financial-advisor-canada/" class="cta-button">Compare robo-advisors and advisors</a>
    </div>

    ${invFooter("General education about Canada's total cost reporting rules as of October 23, 2026. It is not investment, tax or legal advice, and it does not describe any particular firm's report. Household figures are labelled illustrations, not quotes. Check your own report and ask your dealer about anything unclear.")}

</div>`
);
