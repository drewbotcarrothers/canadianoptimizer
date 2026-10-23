import { invFooter, invPost } from './types';

const FF_A = 'https://funds.rbcgam.com/pdf/fund-facts/funds/rbf460_e.pdf';
const FF_F = 'https://funds.rbcgam.com/pdf/fund-facts/funds/rbf658_e.pdf';
const CSA_OEO = 'https://www.osc.ca/en/news-events/news/canadian-securities-regulators-adopt-ban-trailing-commissions-order-execution-only-dealers';
const OSC_DSC = 'https://www.osc.ca/en/news-events/news/osc-implement-ban-deferred-sales-charge-option-harmonizing-rule-across-canada';
const CRA_22100 = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22100-carrying-charges-interest-expenses.html';
const CRA_T4037 = 'https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4037/capital-gains.html';

export const mutualFundFeesSeriesAVsFCanada = invPost(
  'hands-off',
  'mutual-fund-fees-series-a-vs-f-canada',
  'Mutual Fund Fees in Canada: MER, Trailers and Series A vs F',
  'What a Canadian mutual fund really costs: MER, trading costs, the trailing commission inside Series A, and how Series F with a separate advice fee compares.',
  `<div class="container">

    <div class="hook">
        Two investors own the same RBC balanced fund, with the same managers and the same holdings. Over ten years, $1,000 in Series A grew to $1,986 and $1,000 in Series F grew to $2,199, according to the fund's own Fund Facts. The difference is mostly <span class="highlight">a 1% trailing commission</span> built into Series A, paid every year whether or not you get advice.
    </div>

    <p>A mutual fund costs its MER plus its trading expense ratio. In Series A, the MER includes a trailing commission paid to your dealer for advice. Series F removes it, and any advice fee is paid separately. RBC's Fund Facts (June 30, 2026) show its Select Balanced Portfolio costing 2.00% a year in Series A and 1.00% in Series F.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Fund expenses are the MER (management fee, operating costs and taxes) plus the TER (trading costs). Both are in the Fund Facts.</li>
            <li>A trailing commission comes out of the management fee for as long as you own the fund. In our example it is 1.00% a year, or $10 per $1,000.</li>
            <li>Series F has no trailer. It is for fee-based or order-execution-only (discount broker) accounts, where any advice fee is paid separately.</li>
            <li>Since June 1, 2022, discount brokers can no longer receive trailers, and new deferred sales charge (DSC) purchases are banned across Canada.</li>
            <li>A separate advice fee on a non-registered account may be deductible on line 22100. The trailer inside an MER is not something you can claim.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/hands-off/">Hands-Off Investing</a>, in the <a href="/category/investing/">Investing</a> category. If you hold mutual funds through a bank branch or an advisor, it explains what you pay and what the alternatives cost. For the cost of advice in general, see <a href="/blog/robo-advisor-vs-financial-advisor-canada/">robo-advisor vs financial advisor</a>.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#cost">What does a mutual fund actually cost?</a></li>
            <li><a href="#trailer">What is a trailing commission?</a></li>
            <li><a href="#avsf">Series A vs Series F: what is the difference?</a></li>
            <li><a href="#ten">How much does 1% cost over ten years?</a></li>
            <li><a href="#rules">What changed in 2022?</a></li>
            <li><a href="#tax">Which fees are tax-deductible?</a></li>
            <li><a href="#etf">How do mutual funds compare with ETFs?</a></li>
            <li><a href="#choose">Which series should you hold?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="cost">What does a mutual fund actually cost?</h2>

    <p>You never see a bill. Fund costs come out of the fund's assets, so they show up as a lower return. Fund Facts documents, which every Canadian mutual fund must publish for each series, break the cost into parts. Here is the <a href="${FF_A}">Series A Fund Facts</a> for RBC Select Balanced Portfolio, a large and widely held fund:</p>

    <div class="table-wrapper">
        <table>
            <caption>RBC Select Balanced Portfolio: Series A and Series F costs, from Fund Facts dated June 30, 2026 (expenses as of December 31, 2025)</caption>
            <thead>
                <tr><th>Item</th><th>Series A (RBF460)</th><th>Series F (RBF658)</th></tr>
            </thead>
            <tbody>
                <tr><td>Management expense ratio (MER)</td><td>1.94%</td><td>0.94%</td></tr>
                <tr><td>Trading expense ratio (TER)</td><td>0.06%</td><td>0.06%</td></tr>
                <tr class="highlight-row"><td>Fund expenses (MER + TER)</td><td>2.00% ($20.00 per $1,000)</td><td>1.00% ($10.00 per $1,000)</td></tr>
                <tr><td>Trailing commission (inside the MER)</td><td>1.00% ($10.00 per $1,000)</td><td>None</td></tr>
                <tr><td>Sales charges</td><td>None (no load)</td><td>None</td></tr>
                <tr><td>Short-term trading fee</td><td>2% if sold within 7 days</td><td>2% if sold within 7 days</td></tr>
                <tr><td>Who can buy it</td><td>Any investor</td><td>Fee-based or order-execution-only accounts</td></tr>
                <tr><td>$1,000 ten years ago, at May 31, 2026</td><td>$1,986 (7.1% a year)</td><td>$2,199 (8.2% a year)</td></tr>
            </tbody>
        </table>
    </div>

    <p>Both series hold the same portfolio; the fund held $76,718.0 million on May 31, 2026. The <a href="${FF_F}">Series F Fund Facts</a> also notes that its management fee fell from 0.78% to 0.70% on January 1, 2026. The 0.94% MER above is measured for 2025, so Series F's current cost is somewhat lower. Returns are after fund expenses and are historical; they do not predict future results.</p>

    <h2 id="trailer">What is a trailing commission?</h2>

    <p>The Fund Facts describe it plainly: "The trailing commission is an ongoing commission. It is paid for as long as you own the fund. It is for the services and advice your representative and your representative's firm provide to you." RBC Global Asset Management pays it to your dealer out of the management fee. For this Series A, the rate is 1.00% of your investment each year.</p>

    <p>The trailer is not a separate charge. It is part of the MER. That is why many investors do not know they pay it. On $150,000, a 1.00% trailer is $1,500 a year. The Fund Facts also carry a warning: "Higher commissions can influence representatives to recommend one investment over another."</p>

    <h2 id="avsf">Series A vs Series F: what is the difference?</h2>

    <p>Same fund, different packaging. Series A bundles the advice cost into the MER. Series F unbundles it. According to its Fund Facts, Series F is for "investors who have fee-based or order execution only accounts", who "may pay a fee directly to their representative firm" for trading, advice or other services.</p>

    <div class="table-wrapper">
        <table>
            <caption>How the two main series compare</caption>
            <thead>
                <tr><th>Feature</th><th>Series A</th><th>Series F</th></tr>
            </thead>
            <tbody>
                <tr><td>Advice cost</td><td>Built into the MER as a trailer</td><td>Paid separately, or nothing if you invest yourself</td></tr>
                <tr><td>Visibility</td><td>Shown in Fund Facts and annual cost reports</td><td>Shown as a separate fee on your statement</td></tr>
                <tr><td>Where you get it</td><td>Bank branches, mutual fund dealers, advisors</td><td>Fee-based advisors; discount brokers</td></tr>
                <tr class="highlight-row"><td>Tax treatment of advice cost</td><td>Reduces fund returns; nothing to claim separately</td><td>Fee may be deductible on line 22100 for non-registered accounts</td></tr>
                <tr><td>Best for</td><td>Small accounts that need advice</td><td>DIY investors, or advised clients with larger accounts</td></tr>
            </tbody>
        </table>
    </div>

    <p>Other series exist. Many fund companies offer series for high-net-worth clients, for discount brokers, or with lower fees at higher balances. Each has its own Fund Facts, so compare the fund expenses line.</p>

    <h2 id="ten">How much does 1% cost over ten years?</h2>

    <div class="chart-container">
        <h3>$100,000 invested for the ten years to May 31, 2026, RBC Select Balanced Portfolio</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">Series A (actual, 7.1%/yr): $198,600</div><div class="bar-wrapper"><div class="bar" style="width: 90%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Series F + 1% advice fee (illustrative): about $198,900</div><div class="bar-wrapper"><div class="bar" style="width: 90%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Series F + 0.5% fee (illustrative): about $209,100</div><div class="bar-wrapper"><div class="bar" style="width: 95%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Series F, no advice fee (actual, 8.2%/yr): $219,900</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span></span></div></div></div>
        </div>
        <p>Actual figures scale the Fund Facts' $1,000 results to $100,000. The advice-fee rows are our illustration: Series F's ten-year return with 1% or 0.5% taken off each year. Past returns are not a guide to future returns.</p>
    </div>

    <p>The lesson is not that Series F is always cheaper. With a 1% advice fee on top, Series F ended up almost exactly where Series A did. The $21,300 gap between Series A and plain Series F is the price of advice over ten years on $100,000. Whether that is good value depends on what advice you actually receive.</p>

    <h2 id="rules">What changed in 2022?</h2>

    <p>Two rule changes took effect on June 1, 2022:</p>

    <div class="table-wrapper">
        <table>
            <caption>2022 mutual fund rule changes (CSA and OSC releases)</caption>
            <thead>
                <tr><th>Rule</th><th>What it does</th><th>Source</th></tr>
            </thead>
            <tbody>
                <tr><td>Order-execution-only trailer ban</td><td>Fund companies cannot pay trailers to dealers that do not make a suitability determination, such as discount brokers</td><td>CSA, adopted September 17, 2020</td></tr>
                <tr><td>Deferred sales charge (DSC) ban, outside Ontario</td><td>No new purchases under DSC (back-end load) options</td><td>CSA rules, all provinces and territories except Ontario</td></tr>
                <tr><td>DSC ban, Ontario</td><td>Ontario adopted its own ban for the same date, harmonizing the rule across Canada</td><td>OSC, May 7, 2021</td></tr>
            </tbody>
        </table>
    </div>

    <p>The <a href="${CSA_OEO}">CSA release</a> says the effective date gave fund companies time to offer a no-trailer series to discount brokerage investors. The <a href="${OSC_DSC}">OSC release</a> explains Ontario's DSC ban. If you bought DSC units before the ban, their redemption fee schedules can continue until they expire, so check before you sell or switch.</p>

    <h2 id="tax">Which fees are tax-deductible?</h2>

    <p>The CRA's <a href="${CRA_22100}">line 22100 page</a> lets you claim "fees to manage or take care of your investments", and fees for certain investment advice, but not fees for RRSPs, RRIFs, TFSAs or FHSAs. Brokerage commissions are not deductible; they go into your capital gain calculation instead.</p>

    <div class="table-wrapper">
        <table>
            <caption>Tax treatment of common investment costs (CRA line 22100)</caption>
            <thead>
                <tr><th>Cost</th><th>Deductible on line 22100?</th></tr>
            </thead>
            <tbody>
                <tr><td>MER, including any trailer (paid inside the fund)</td><td>No separate claim. It is paid inside the fund and already reflected in your return</td></tr>
                <tr class="highlight-row"><td>Separate advice or management fee, non-registered account</td><td>Generally yes, if it is for managing investments or qualifying advice</td></tr>
                <tr><td>Fees for an RRSP, RRIF, TFSA or FHSA</td><td>No</td></tr>
                <tr><td>Commissions to buy or sell</td><td>No. Add to cost or subtract from proceeds instead (guide T4037)</td></tr>
                <tr><td>Financial newsletter subscriptions</td><td>No</td></tr>
            </tbody>
        </table>
    </div>

    <p>Changing series is not always a sale for tax purposes. CRA guide <a href="${CRA_T4037}">T4037</a> says that switching between series of the same class of a mutual fund corporation, where only the fees differ, is not a disposition. Many funds are trusts rather than corporations, so in a non-registered account ask the fund company how a switch is treated before you make it.</p>

    <h2 id="etf">How do mutual funds compare with ETFs?</h2>

    <p>The cost labels are the same. An ETF also has a management fee, an MER and a trading expense ratio, published in its ETF Facts document. The differences are in how you buy and what is bundled. ETFs trade on an exchange through a brokerage account, so you may pay a commission and a bid-ask spread. Most broad index ETFs have no trailing commission built in. Mutual funds are bought at the day's net asset value, often with no commission, and can be set up for automatic small contributions. The fair comparison is fund expenses plus any advice fee or trading cost, side by side. For one-ticket portfolios, see <a href="/blog/model-etf-portfolios-canada/">model ETF portfolios</a>, or a <a href="/blog/best-robo-advisors-canada/">robo-advisor</a> if you want the rebalancing done for you.</p>

    <h2 id="choose">Which series should you hold?</h2>

    <div class="flowchart">
        <div class="flow-node decision">Do you want ongoing advice from a person?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">No: use a discount broker and a no-trailer series, or low-cost ETFs or a robo-advisor</div>
            <div class="flow-node decision">Yes: is your account large enough for a fee-based account?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Yes: compare Series F plus the advice fee with Series A</div>
            <div class="flow-node result">No: Series A may be the practical option. Make sure you get the advice you pay for</div>
        </div>
    </div>

    <div class="example-box">
        <strong>Illustrative example: Sandra, 55, Winnipeg</strong>
        <p>Sandra has $150,000 in Series A of a balanced fund like the one above, bought at her bank branch. She meets her advisor once every two years.</p>
        <div class="example-calculation">
            <div class="line"><span>Fund expenses at 2.00%</span><span>$3,000 a year</span></div>
            <div class="line"><span>Of which trailer to the dealer, 1.00%</span><span>$1,500 a year</span></div>
            <div class="line"><span>Same fund, Series F at 1.00%, no advice</span><span>$1,500 a year</span></div>
            <div class="line total"><span>Potential saving if she goes DIY</span><span>$1,500 a year</span></div>
        </div>
        <p>Sandra has three choices: ask for more advice for what she pays, move to a fee-based account and compare the total, or move to a discount broker or robo-advisor. Figures use the Fund Facts percentages; amounts are illustrative.</p>
    </div>

    <h2>How do you check what you pay?</h2>

    <div class="step-section">
        <div class="step"><div class="step-number">1</div><div><div class="step-title">Find the fund code</div><p>It is on your statement, such as RBF460. Each series of each fund has its own code.</p></div></div>
        <div class="step"><div class="step-number">2</div><div><div class="step-title">Open the Fund Facts</div><p>Search the code on the fund company's website. Read "How much does it cost?"</p></div></div>
        <div class="step"><div class="step-number">3</div><div><div class="step-title">Note fund expenses and the trailer</div><p>Multiply each by your balance.</p></div></div>
        <div class="step"><div class="step-number">4</div><div><div class="step-title">Check your annual cost report</div><p>Dealers report the fees you paid each year. See <a href="/blog/total-cost-reporting-canada/">total cost reporting</a>.</p></div></div>
        <div class="step"><div class="step-number">5</div><div><div class="step-title">Compare with an alternative</div><p>A no-trailer series, an ETF portfolio or a robo-advisor.</p></div></div>
    </div>

    <h2>Does your province change anything?</h2>
    <p>The fee rules are national, set by the Canadian Securities Administrators, with Ontario adopting its DSC ban through its own rule. Quebec's regulator, the AMF, is part of the CSA, and Fund Facts are available in French. Your province affects only the tax value of any deductible advice fee, through provincial tax rates.</p>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>What is a good MER for a mutual fund in Canada?</h3>
    <p>There is no official benchmark. Compare series of the same fund and with ETF alternatives. In our example, Series A fund expenses were 2.00% and Series F 1.00%.</p>

    <h3>Is the trailing commission included in the MER?</h3>
    <p>Yes. It is paid out of the management fee, which is part of the MER.</p>

    <h3>Can I buy Series F at a discount broker?</h3>
    <p>Often, yes. The RBC Fund Facts say Series F is available in order-execution-only accounts. Availability varies by fund company and broker.</p>

    <h3>Are deferred sales charges still allowed?</h3>
    <p>Not for new purchases since June 1, 2022. Older DSC schedules can run until they expire.</p>

    <h3>Is switching from Series A to F taxable?</h3>
    <p>Not inside a registered account. In a non-registered account, it depends on the fund's structure; ask the fund company before switching.</p>

    <h3>Can I deduct my advisor's fee?</h3>
    <p>A separate fee for managing a non-registered account generally can be claimed on line 22100. Fees for registered accounts cannot.</p>

    <h3>Is Series F always cheaper?</h3>
    <p>Not after a separate advice fee. In our illustration, Series F plus a 1% fee ended up about level with Series A.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${FF_A}">RBC GAM: Fund Facts, RBC Select Balanced Portfolio Series A</a> (June 30, 2026), reviewed October 23, 2026</li>
        <li><a href="${FF_F}">RBC GAM: Fund Facts, RBC Select Balanced Portfolio Series F</a> (June 30, 2026), reviewed October 23, 2026</li>
        <li><a href="${CSA_OEO}">OSC (CSA): Regulators adopt ban on trailing commissions for order-execution-only dealers</a> (September 17, 2020), reviewed October 23, 2026</li>
        <li><a href="${OSC_DSC}">OSC: OSC to implement ban on deferred sales charge option</a> (May 7, 2021), reviewed October 23, 2026</li>
        <li><a href="${CRA_22100}">CRA: Line 22100, carrying charges and other expenses</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_T4037}">CRA: Guide T4037, Capital Gains 2025</a>, reviewed October 23, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/robo-advisor-vs-financial-advisor-canada/">Robo-advisor vs financial advisor</a></li>
        <li><a href="/blog/total-cost-reporting-canada/">Total cost reporting: what your statement now shows</a></li>
        <li><a href="/blog/questions-to-ask-financial-advisor-canada/">Questions to ask a financial advisor</a></li>
        <li><a href="/blog/best-robo-advisors-canada/">Best robo-advisors in Canada</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Paying a trailer and not sure what you get for it?</strong></p>
        <p>Compare the cost and services of a robo-advisor, a full-service advisor and a fee-only planner.</p>
        <a href="/blog/robo-advisor-vs-financial-advisor-canada/" class="cta-button">Compare your options</a>
    </div>

    ${invFooter("General education about Canadian mutual fund fees as of October 23, 2026. RBC Select Balanced Portfolio is used only as a documented example from its June 30, 2026 Fund Facts; it is not a recommendation. Past performance does not guarantee future results. Advice-fee scenarios are illustrative. It is not investment or tax advice.")}

</div>`
);
