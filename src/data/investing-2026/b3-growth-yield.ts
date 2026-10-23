import { invFooter, invPost } from './types';

const GSAM_DIV = 'https://www.getsmarteraboutmoney.ca/learning-path/stocks/how-stocks-and-dividends-work/';
const FTS_HIST = 'https://www.fortisinc.com/docs/default-source/investor-presentations/historical-dividends-1972-2025_updated-dec-2025.pdf';
const FTS_Q4 = 'https://fortis.gcs-web.com/news-releases/news-release-details/fortis-inc-reports-fourth-quarter-annual-2025-results';
const CRA_DTC = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-40425-federal-dividend-tax-credit.html';

export const dividendGrowthVsHighYieldCanada = invPost(
  'dividend-investing',
  'dividend-growth-vs-high-yield-canada',
  'Dividend Growth vs High Yield: Which Builds More Income?',
  'A 3% yield growing 7% a year passes a 6% yield growing 1% in year 14, but needs 22 years to win on total cash. The math, Canadian examples and the risks.',
  `<div class="container">

    <div class="hook">
        Fortis raised its dividend for a 52nd straight year in 2025, and its annual payout went from $1.525 a share in 2015 to $2.49 in 2025, according to its own dividend history. That is about <span class="highlight">5% more income every year for a decade</span> without buying another share. A high yield pays more today; a growing one can pay more later.
    </div>

    <p>A high-yield stock pays more income now. A dividend-growth stock pays less now but raises its dividend faster. In our illustration, a 3% yield growing 7% a year passes a 6% yield growing 1% in year 14, and takes until year 22 to pay more in total. Which wins depends on your timeline and the dividend's safety.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Yield is today's income. Dividend growth is tomorrow's. The longer you hold, the more growth matters.</li>
            <li>In this guide's $100,000 illustration, the growth stock's annual income passes the high-yield stock's in year 14, and its total cash passes in year 22.</li>
            <li>Very high yields are more likely to be cut. Neither style is guaranteed: the OSC's investor site says companies can reduce or eliminate dividends at any time.</li>
            <li>Total return (dividends plus price change) matters more than either label. A dividend is paid out of the company's value, not on top of it.</li>
            <li>In a taxable account, Canadian eligible dividends get the dividend tax credit either way. The style choice is about income timing and risk, not a tax trick.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/dividend-investing/">Dividend Investing</a>, in the <a href="/category/investing/">Investing</a> category. The pillar, <a href="/blog/dividend-investing-canada/">dividend investing in Canada</a>, covers building the portfolio. This page answers one design question: should the portfolio lean toward income now or income growth? A separate guide compares <a href="/blog/dividend-vs-growth-taxable-accounts-canada/">dividend payers with non-payers</a> in a taxable account.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#define">What is the difference between dividend growth and high yield?</a></li>
            <li><a href="#math">When does a growing dividend overtake a high one?</a></li>
            <li><a href="#real">What does real dividend growth look like in Canada?</a></li>
            <li><a href="#risk">Which style is riskier?</a></li>
            <li><a href="#total">Why total return matters more than yield</a></li>
            <li><a href="#who">Which style fits your situation?</a></li>
            <li><a href="#tax">Does tax or province change the answer?</a></li>
            <li><a href="#blend">Can you combine both?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="define">What is the difference between dividend growth and high yield?</h2>

    <p>Both styles buy dividend-paying companies. They choose differently.</p>

    <ul>
        <li><strong>High yield</strong> looks for the largest dividend relative to the share price today. Yield is the annual dividend divided by the price, as the <a href="${GSAM_DIV}">OSC's investor site</a> defines it. Typical candidates are mature businesses with little room to grow: some pipelines, telecoms, REITs and utilities, plus high-income funds.</li>
        <li><strong>Dividend growth</strong> looks for companies that raise their dividend steadily, usually because earnings are growing. The starting yield is lower, sometimes well below the market's. The bet is that the payout keeps climbing.</li>
    </ul>

    <div class="table-wrapper">
        <table>
            <caption>Dividend growth vs high yield at a glance</caption>
            <thead>
                <tr><th>Feature</th><th>Dividend growth</th><th>High yield</th></tr>
            </thead>
            <tbody>
                <tr><td>Starting yield</td><td>Lower</td><td>Higher</td></tr>
                <tr><td>Dividend increases</td><td>Regular, often yearly</td><td>Small, rare or none</td></tr>
                <tr><td>Payout ratio</td><td>Usually moderate, leaving room to raise</td><td>Often high, little cushion</td></tr>
                <tr><td>Income in year 1</td><td>Lower</td><td>Higher</td></tr>
                <tr><td>Income in year 20 (if growth holds)</td><td>Often higher</td><td>Often lower</td></tr>
                <tr><td>Main risk</td><td>Growth slows; you paid for growth that does not arrive</td><td>The dividend is cut, often with a price drop</td></tr>
                <tr class="highlight-row"><td>Best fit</td><td>Long horizon, reinvesting or still working</td><td>Need income now, shorter horizon</td></tr>
            </tbody>
        </table>
    </div>

    <h2 id="math">When does a growing dividend overtake a high one?</h2>

    <p>Take $100,000 and two illustrative stocks. Stock H yields 6% and raises its dividend 1% a year. Stock G yields 3% and raises it 7% a year. Ignore price changes and reinvestment for now: this is just the cash each pays on the original $100,000.</p>

    <div class="chart-container">
        <h3>Annual dividend income on $100,000 (illustrative calculation)</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">Year 1, high yield: $6,000</div><div class="bar-wrapper"><div class="bar" style="width: 55%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Year 1, growth: $3,000</div><div class="bar-wrapper"><div class="bar" style="width: 28%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Year 10, high yield: $6,562</div><div class="bar-wrapper"><div class="bar" style="width: 60%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Year 10, growth: $5,515</div><div class="bar-wrapper"><div class="bar" style="width: 51%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Year 20, high yield: $7,249</div><div class="bar-wrapper"><div class="bar" style="width: 67%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Year 20, growth: $10,850</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span></span></div></div></div>
        </div>
        <p>Income in year n = $100,000 × starting yield × (1 + growth rate)<sup>n−1</sup>. Illustrative rates, not a forecast for any company.</p>
    </div>

    <div class="table-wrapper">
        <table>
            <caption>Annual and cumulative income on $100,000 (illustrative calculation)</caption>
            <thead>
                <tr><th>Year</th><th>High yield: that year</th><th>Growth: that year</th><th>High yield: total to date</th><th>Growth: total to date</th></tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>$6,000</td><td>$3,000</td><td>$6,000</td><td>$3,000</td></tr>
                <tr><td>5</td><td>$6,244</td><td>$3,932</td><td>about $30,600</td><td>about $17,250</td></tr>
                <tr><td>10</td><td>$6,562</td><td>$5,515</td><td>$62,773</td><td>$41,449</td></tr>
                <tr class="highlight-row"><td>14</td><td>$6,829</td><td>$7,230</td><td colspan="2">Growth now pays more each year</td></tr>
                <tr><td>15</td><td>$6,897</td><td>$7,736</td><td>$96,581</td><td>$75,387</td></tr>
                <tr><td>20</td><td>$7,249</td><td>$10,850</td><td>$132,114</td><td>$122,986</td></tr>
                <tr class="highlight-row"><td>22</td><td colspan="2">Growth's total cash passes high yield's</td><td>$146,830</td><td>$147,017</td></tr>
            </tbody>
        </table>
    </div>

    <p>Two things stand out. First, the crossover takes a long time: 14 years for the annual cheque and 22 for the running total. Someone retiring next year and spending the income would collect far more from Stock H for well over a decade. Second, the result is very sensitive to the growth rate. If Stock G grows its dividend 5% instead of 7%, the annual crossover moves out to year 19 (3,000 × 1.05<sup>18</sup> ≈ $7,220 against 6,000 × 1.01<sup>18</sup> ≈ $7,177). If Stock H cuts its dividend once, the race can end early in Stock G's favour.</p>

    <div class="tip-box">
        <strong>The rule of thumb behind the table</strong>
        <p>A lower yield catches up faster when the growth gap is wide. Doubling a 3% yield to 6% takes about 10 years at 7% growth, because 1.07<sup>10</sup> ≈ 1.97. At 4% growth it takes about 18 years. Before choosing growth, ask whether the company can really keep raising at that pace.</p>
    </div>

    <h2 id="real">What does real dividend growth look like in Canada?</h2>

    <p>Fortis is a useful real-world reference because it publishes a full dividend history back to 1972. These are dividends per share paid in each calendar year, taken from the <a href="${FTS_HIST}">Fortis common share dividend history</a>:</p>

    <div class="table-wrapper">
        <table>
            <caption>Fortis annual dividends paid per share, selected years (from the company's dividend history, December 2025)</caption>
            <thead>
                <tr><th>Year</th><th>Annual dividend per share</th><th>Change from five years earlier</th></tr>
            </thead>
            <tbody>
                <tr><td>2015</td><td>$1.5250</td><td>—</td></tr>
                <tr><td>2020</td><td>$1.9375</td><td>+27%</td></tr>
                <tr><td>2025</td><td>$2.4900</td><td>+29%</td></tr>
                <tr class="highlight-row"><td>2015 to 2025</td><td colspan="2">+63%, about 5.0% a year compounded (our calculation)</td></tr>
            </tbody>
        </table>
    </div>

    <p>In its <a href="${FTS_Q4}">fourth-quarter 2025 results</a>, Fortis reported a 4.1% increase in its quarterly dividend, 52 consecutive years of increases, and guidance of 4% to 6% annual dividend growth through 2030. Guidance is a target, not a promise. We use Fortis to show what steady growth looks like in practice, not as a recommendation. A long record lowers the odds of a sudden change, but it does not remove them: the board decides each dividend.</p>

    <p>Notice that real growth here is closer to 5% than the 7% in our illustration. Plug 5% into the earlier math and the growth stock needs about 19 years to pass a 6% yielder growing at 1%. That is why investors who pick growth stocks should check the growth rate that companies have actually delivered and say they target, and not assume a high number.</p>

    <h2 id="risk">Which style is riskier?</h2>

    <p>They carry different risks.</p>

    <ul>
        <li><strong>High yield: cut risk.</strong> A high yield often reflects a high payout ratio, heavy debt or a falling share price. Each raises the chance of a cut. A cut usually hits twice: the income drops and the price falls. Our guide to <a href="/blog/dividend-yield-traps-canada/">dividend yield traps</a> covers the warning signs.</li>
        <li><strong>Dividend growth: valuation and slowdown risk.</strong> Steady growers often trade at higher prices relative to earnings, which is why their yield is low. If growth slows, the price can fall even though the dividend is still rising.</li>
        <li><strong>Both: concentration.</strong> Canadian dividend payers cluster in banks, utilities, pipelines and telecoms. A portfolio of either style can end up heavily exposed to interest rates and a few sectors. The OSC's investor site notes that holding two banks does not add industry diversification.</li>
    </ul>

    <div class="flowchart">
        <div class="flow-node decision">Do you need to spend the dividends within the next 10 years?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node decision">Yes: is each yield covered by earnings and free cash flow?</div>
            <div class="flow-node result">No: lean toward dividend growth and reinvest the income</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Yes: higher yield can fit, kept diversified across sectors</div>
            <div class="flow-node result">No: skip that stock; a cut would cost income and capital</div>
        </div>
    </div>

    <h2 id="total">Why total return matters more than yield</h2>

    <p>When a company pays a dividend, the cash leaves the company, and the share price typically adjusts down by about that amount. Your wealth is the share price plus the dividends received. That is the total return. A company that yields 6% while its price slides 3% a year has a total return of about 3%. A company that yields 2% and grows its value 7% a year has about 9%.</p>

    <p>So the yield-versus-growth question is really three questions: how much income do you need in cash, how reliable is it, and what total return does each stock offer for its risk? A low-yield stock can fund spending too: you can sell a few shares. In a taxable account that creates a capital gain, which is taxed differently from a dividend; see our guide to <a href="/blog/capital-gains-tax-canada/">capital gains tax in Canada</a>.</p>

    <h2 id="who">Which style fits your situation?</h2>

    <div class="table-wrapper">
        <table>
            <caption>Which dividend style fits which investor (general guidance, not advice)</caption>
            <thead>
                <tr><th>Situation</th><th>Leaning</th><th>Why</th></tr>
            </thead>
            <tbody>
                <tr><td>Age 35, reinvesting, TFSA and RRSP</td><td>Dividend growth or broad index</td><td>Decades for growth to compound; income not needed now</td></tr>
                <tr><td>Age 55, retiring in 10 years</td><td>Mix, shifting toward income</td><td>Growth now builds the income you will draw later</td></tr>
                <tr><td>Age 70, spending the income</td><td>More yield, but only covered yields</td><td>Income needed now; a cut is harder to absorb</td></tr>
                <tr><td>Any age, taxable account, high income</td><td>Either; watch the gross-up</td><td>Grossed-up dividends raise net income, which can affect income-tested benefits</td></tr>
            </tbody>
        </table>
    </div>

    <div class="example-box">
        <strong>Illustrative example: Michel, Laval, age 58</strong>
        <div class="example-calculation">
            <div class="line"><span>Portfolio for income</span><span>$300,000</span></div>
            <div class="line"><span>All in 6% yielders growing 1%: year-1 income</span><span>$18,000</span></div>
            <div class="line"><span>All in 3% yielders growing 7%: year-1 income</span><span>$9,000</span></div>
            <div class="line"><span>Half and half: year-1 income</span><span>$13,500</span></div>
            <div class="line total"><span>Half and half, year 10: $9,843 + $8,273</span><span>about $18,100</span></div>
        </div>
        <p>Michel plans to retire at 65. He reinvests until then. A blend gives him more income than pure growth in the early years, and by year 10 the blend pays about what the all-high-yield portfolio paid in year 1, with less exposure to any single cut. Rates are illustrative, not forecasts.</p>
    </div>

    <h2 id="tax">Does tax or province change the answer?</h2>

    <p>Not much, if both stocks are Canadian companies paying eligible dividends. Both get the same gross-up and credit. The federal credit on eligible dividends is 15.0198% of the grossed-up amount (<a href="${CRA_DTC}">CRA line 40425</a>), and every province adds its own credit; our <a href="/blog/dividend-tax-credit-by-province-canada/">dividend tax credit by province</a> guide lists 2025 rates. Quebec residents claim the provincial credit on the Revenu Québec return.</p>

    <p>Three tax points still matter for the style choice:</p>
    <ul>
        <li><strong>Timing.</strong> High yield creates more taxable income now in a non-registered account. Growth defers more of the return into unrealized capital gains, taxed only when you sell.</li>
        <li><strong>Benefits after 65.</strong> Eligible dividends are grossed up by 38% for net income. A high-yield portfolio in a taxable account can push net income over the OAS recovery threshold sooner. See <a href="/blog/dividends-oas-clawback-canada/">dividends and the OAS clawback</a>.</li>
        <li><strong>Account choice.</strong> Inside a TFSA or RRSP, the dividend tax credit does not apply, so the comparison is pure income and total return. Foreign dividends never get the Canadian credit.</li>
    </ul>

    <h2 id="blend">Can you combine both?</h2>

    <p>Yes, and many investors do. A common structure is a core of steady growers or a broad index fund, plus a smaller sleeve of well-covered higher yielders for current income. As you approach the spending years, new money and reinvested dividends can tilt toward the income sleeve without selling anything.</p>

    <div class="step-section">
        <div class="step"><div class="step-number">1</div><div><div class="step-title">Write down the income you need and when</div><p>"Nothing for 15 years" and "$20,000 a year from next spring" lead to very different portfolios.</p></div></div>
        <div class="step"><div class="step-number">2</div><div><div class="step-title">Screen every stock for dividend safety first</div><p>Payout ratio, free cash flow and debt, whatever the style. A safe 4% beats a risky 8%.</p></div></div>
        <div class="step"><div class="step-number">3</div><div><div class="step-title">Check delivered growth, not just promised growth</div><p>Use five to ten years of the company's own dividend history, from its investor relations page.</p></div></div>
        <div class="step"><div class="step-number">4</div><div><div class="step-title">Spread across sectors</div><p>Limit how much of the income comes from any one industry, so one sector's bad year does not cut your cheque.</p></div></div>
        <div class="step"><div class="step-number">5</div><div><div class="step-title">Review once a year</div><p>Note each dividend change. A freeze after years of increases is worth investigating.</p></div></div>
    </div>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Income need and start date written down</li>
        <li>Every holding's dividend covered by earnings and free cash flow</li>
        <li>Growth rate checked against the company's own history</li>
        <li>No sector providing most of the income</li>
        <li>Total return compared, not just yield</li>
        <li>Account location decided: taxable for the credit, registered for shelter</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Is dividend growth better than high yield?</h3>
    <p>Over long periods, growth often produces more income on your original cost, if the growth continues. For income needed soon, a well-covered higher yield pays more for many years. Neither is better for everyone.</p>

    <h3>How long does it take a growing dividend to catch up?</h3>
    <p>In our illustration, a 3% yield growing 7% a year passes a 6% yield growing 1% in year 14 on annual income and year 22 on total cash. Slower growth pushes those dates out a lot.</p>

    <h3>What is yield on cost?</h3>
    <p>Your current annual dividend divided by what you originally paid. If you bought at $100 and the dividend is now $6, your yield on cost is 6%. It is a way to see growth, but it does not change today's value or opportunity cost.</p>

    <h3>Are high-yield stocks more likely to cut their dividends?</h3>
    <p>Often, yes. A very high yield can mean the price has fallen because the market expects trouble. Check the payout ratio, free cash flow and debt before buying.</p>

    <h3>Should retirees only own high-yield stocks?</h3>
    <p>Not necessarily. Retirees still face decades of inflation. A mix of covered higher yields and growing dividends, or selling some shares for income, can work better than chasing the highest yield.</p>

    <h3>Do dividend-growth ETFs exist in Canada?</h3>
    <p>Yes. Several Canadian ETFs screen for dividend growth rather than yield. Read each fund's methodology, holdings and MER on the provider's fact sheet before choosing.</p>

    <h3>Does the dividend tax credit favour one style?</h3>
    <p>No. Eligible Canadian dividends get the same credit whatever the yield. High yield creates more taxable income sooner in a non-registered account; growth defers more of the return.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${FTS_HIST}">Fortis Inc.: Common share dividend history, 1972 to 2025</a> (updated December 2025), reviewed October 23, 2026</li>
        <li><a href="${FTS_Q4}">Fortis Inc.: Fourth quarter and annual 2025 results</a> (February 12, 2026), reviewed October 23, 2026</li>
        <li><a href="${GSAM_DIV}">GetSmarterAboutMoney (OSC): How stocks and dividends work</a>, reviewed October 23, 2026</li>
        <li><a href="https://www.getsmarteraboutmoney.ca/learning-path/understanding-risk/diversification/">GetSmarterAboutMoney (OSC): What diversification means for your investments</a> (updated October 14, 2026), reviewed October 23, 2026</li>
        <li><a href="${CRA_DTC}">CRA: Line 40425, federal dividend tax credit</a>, reviewed October 23, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/dividend-investing-canada/">Dividend investing in Canada</a></li>
        <li><a href="/blog/dividend-yield-traps-canada/">Dividend yield traps in Canada</a></li>
        <li><a href="/blog/dividend-tax-credit-by-province-canada/">Dividend tax credit by province</a></li>
        <li><a href="/blog/drip-dividend-reinvestment-canada/">DRIPs in Canada</a></li>
        <li><a href="/blog/dividend-vs-growth-taxable-accounts-canada/">Dividend vs growth stocks in a taxable account</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Dividend income has to be reported correctly, whichever style you choose.</strong></p>
        <p>The 2026 tax guide covers the gross-up, the dividend tax credit and capital gains from the filing side.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about dividend investing styles as of October 23, 2026. It is not a recommendation to buy or sell any security, and not investment or tax advice. Stock H, Stock G and the households are illustrations. Fortis is shown as a public example of dividend history, not as a recommendation. Past dividend growth does not guarantee future growth.")}

</div>`
);
