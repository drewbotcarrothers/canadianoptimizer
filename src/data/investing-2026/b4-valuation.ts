import { invFooter, invPost } from './types';

const CN_Q4 = 'https://www.cn.ca/-/media/files/investors/investor-financial-quarterly/investor-financial-quarterly-2025/q4/q4-2025-quarterly-review-en.pdf';
const CN_FIN = 'https://www.cn.ca/en/investors/financial-results/';
const GSAM_EVAL = 'https://www.getsmarteraboutmoney.ca/learning-path/stocks/how-to-evaluate-companies-when-buying-stock/';
const OSC_CD = 'https://www.osc.ca/en/industry/companies/continuous-disclosure';

export const stockValuationBasicsCanada = invPost(
  'stock-picking',
  'stock-valuation-pe-ev-ebitda-fcf-canada',
  'Stock Valuation Basics: P/E, EV/EBITDA, FCF Yield, Worked',
  'How to value a stock with P/E, EV/EBITDA, free cash flow yield and payout ratio, worked step by step on CN Rail\'s filed 2025 results, and what each misses.',
  `<div class="container">

    <div class="hook">
        CN Rail earned <span class="highlight">$7.57</span> a share in 2025, on a diluted basis. Is the stock cheap at $130? Fair at $150? Expensive at $170? You can't answer from the share price alone. You need a few ratios, the company's own filed numbers and about 20 minutes.
    </div>

    <p>To value a stock, compare its price with what the business produces. Price-to-earnings (P/E) divides the share price by earnings per share. EV/EBITDA compares the whole company, debt included, with operating profit. Free cash flow yield shows how much cash is left after investment. Each misses something, so use several together.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>P/E is the quickest check. At a $150 share price, CN's 2025 diluted EPS of $7.57 gives a P/E of about 19.8.</li>
            <li>EV/EBITDA adds debt. CN had $21,206 million of debt at December 31, 2025, which raises its enterprise value well above its market value.</li>
            <li>Free cash flow yield is cash after capital spending. CN reported 2025 free cash flow of $3,336 million, a yield of about 3.6% at $150.</li>
            <li>A ratio means little alone. Compare it with the company's own history, close peers and the interest rate on safe bonds.</li>
            <li>Use the company's filed results, and read how it defines any non-GAAP measure such as free cash flow or adjusted EBITDA.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/stock-picking/">Stock picking</a>, in the <a href="/category/investing/">Investing</a> category. The pillar on <a href="/blog/how-to-pick-stocks-canada/">how to pick stocks in Canada</a> puts valuation into a full research process, and <a href="/blog/sedar-plus-company-filings-canada/">how to read SEDAR+ filings</a> shows where the numbers come from.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#numbers">Which numbers do you need?</a></li>
            <li><a href="#pe">How do you calculate and read P/E?</a></li>
            <li><a href="#ev">What is EV/EBITDA and why include debt?</a></li>
            <li><a href="#fcf">What is free cash flow yield?</a></li>
            <li><a href="#cn">What do the ratios say about CN at three prices?</a></li>
            <li><a href="#misses">What does each ratio miss?</a></li>
            <li><a href="#compare">What should you compare a ratio with?</a></li>
            <li><a href="#process">How do you put it together?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="numbers">Which numbers do you need?</h2>

    <p>Everything comes from the company's annual results and financial statements. Canadian public companies must file these under <a href="${OSC_CD}">continuous disclosure rules</a>, and most also post them on their investor site. We use <a href="${CN_Q4}">CN's fourth-quarter and full-year 2025 results</a>, released January 30, 2026, which include the financial statements and non-GAAP reconciliations.</p>

    <div class="table-wrapper">
        <table>
            <caption>Canadian National Railway: selected 2025 figures (CN Q4 2025 results, January 30, 2026; $ millions unless noted)</caption>
            <thead>
                <tr><th>Item</th><th>2025</th><th>2024</th><th>Where it is in the release</th></tr>
            </thead>
            <tbody>
                <tr><td>Total revenues</td><td>17,304</td><td>17,046</td><td>Income statement</td></tr>
                <tr><td>Net income</td><td>4,720</td><td>4,448</td><td>Income statement</td></tr>
                <tr class="highlight-row"><td>Diluted EPS ($)</td><td>7.57</td><td>7.01</td><td>Income statement</td></tr>
                <tr><td>Adjusted diluted EPS ($, non-GAAP)</td><td>7.63</td><td>7.10</td><td>Non-GAAP reconciliation</td></tr>
                <tr><td>Net cash from operating activities</td><td>7,049</td><td>6,699</td><td>Cash flow statement</td></tr>
                <tr><td>Net cash used in investing activities</td><td>(3,713)</td><td>(3,607)</td><td>Cash flow statement</td></tr>
                <tr><td>Free cash flow (non-GAAP)</td><td>3,336</td><td>3,092</td><td>Non-GAAP reconciliation</td></tr>
                <tr><td>Adjusted EBITDA (non-GAAP)</td><td>8,734</td><td>8,370</td><td>Non-GAAP reconciliation</td></tr>
                <tr><td>Debt (current plus long-term)</td><td>21,206</td><td>20,894</td><td>Balance sheet</td></tr>
                <tr><td>Cash and cash equivalents</td><td>350</td><td>389</td><td>Balance sheet</td></tr>
                <tr><td>Total shareholders' equity</td><td>21,568</td><td>21,051</td><td>Balance sheet</td></tr>
                <tr><td>Common shares outstanding (millions, Dec. 31)</td><td>613.3</td><td></td><td>Statement of changes in equity</td></tr>
                <tr><td>Dividends declared per share ($)</td><td>3.55</td><td>3.38</td><td>Income statement</td></tr>
            </tbody>
        </table>
    </div>

    <p>CN defines free cash flow as net cash from operating activities minus net cash used in investing activities, adjusted for some items. In 2025, $7,049 million minus $3,713 million is $3,336 million. Adjusted EBITDA is net income before interest, income tax, depreciation and amortization, with further adjustments CN lists. Those are CN's definitions. Other companies may define the same terms differently.</p>

    <h2 id="pe">How do you calculate and read P/E?</h2>

    <p>P/E is the share price divided by earnings per share. Use diluted EPS, which counts shares that options and other awards could create. At $150, CN's P/E is $150 ÷ $7.57, or about 19.8. You are paying about $19.80 for each dollar of last year's earnings.</p>

    <p>The inverse, EPS ÷ price, is the earnings yield: about 5.0% at $150. It is a handy way to compare a stock with a bond. It is not cash you receive. Only the dividend is paid out; the rest is kept and reinvested.</p>

    <p>A high P/E isn't automatically expensive. It can mean investors expect earnings to grow. A low P/E isn't automatically cheap. It can mean earnings are about to fall. The <a href="${GSAM_EVAL}">OSC's GetSmarterAboutMoney.ca guide to evaluating companies</a> notes that the benchmark for a low P/E varies by industry, and that the ratio is most useful for comparing one company with another.</p>

    <h2 id="ev">What is EV/EBITDA and why include debt?</h2>

    <p>Enterprise value (EV) is what it would cost to buy the whole business: the market value of the shares plus debt, minus cash. Two companies with the same share price and earnings are not equally cheap if one carries much more debt. EV catches that.</p>

    <p>EBITDA is earnings before interest, taxes, depreciation and amortization. It shows operating profit before financing choices and non-cash charges. Dividing EV by EBITDA compares the price of the whole company with the profit it makes.</p>

    <div class="example-box">
        <strong>CN at an illustrative $150 share price</strong>
        <div class="example-calculation">
            <div class="line"><span>Market value: 613.3 million shares × $150</span><span>$91,995 million</span></div>
            <div class="line"><span>Plus debt</span><span>$21,206 million</span></div>
            <div class="line"><span>Minus cash</span><span>$350 million</span></div>
            <div class="line"><span>Enterprise value</span><span>$112,851 million</span></div>
            <div class="line total"><span>EV ÷ adjusted EBITDA ($8,734 million)</span><span>about 12.9</span></div>
        </div>
        <p>The $150 price is chosen to show the calculation, not a quote. CN's figures are from its 2025 results. Our calculations.</p>
    </div>

    <p>CN also reports its own leverage measure: adjusted debt to adjusted EBITDA of 2.51 times for 2025. That is a credit measure. It says how many years of operating profit would repay the debt, and it doesn't depend on the share price.</p>

    <h2 id="fcf">What is free cash flow yield?</h2>

    <p>Free cash flow is the cash a business generates after the spending needed to maintain and grow it. Railways spend heavily on track and equipment, so earnings can look better than cash. CN's 2025 operating cash flow was $7,049 million, but $3,713 million went to investing activities.</p>

    <p>Free cash flow yield is free cash flow divided by market value. At $150, that is $3,336 million ÷ $91,995 million, about 3.6%. Per share, CN produced about $5.44 of free cash flow ($3,336 million ÷ 613.3 million shares).</p>

    <p>Compare that with the dividend. CN declared $3.55 a share for 2025. That is about 47% of diluted EPS ($3.55 ÷ $7.57) and about 65% of free cash flow per share ($3.55 ÷ $5.44). Our guide to <a href="/blog/dividend-yield-traps-canada/">dividend yield traps</a> explains why the free-cash-flow payout matters more.</p>

    <h2 id="cn">What do the ratios say about CN at three prices?</h2>

    <p>The ratios move with the price. Here is the same 2025 data at three illustrative share prices. None is a forecast or a quote.</p>

    <div class="table-wrapper">
        <table>
            <caption>CN valuation ratios on 2025 filed results at three illustrative share prices (our calculations)</caption>
            <thead>
                <tr><th>Share price</th><th>Market value ($M)</th><th>P/E (diluted)</th><th>EV/adj. EBITDA</th><th>FCF yield</th><th>Dividend yield (2025 declared)</th><th>Price/book</th></tr>
            </thead>
            <tbody>
                <tr><td>$130</td><td>79,729</td><td>17.2</td><td>11.5</td><td>4.2%</td><td>2.7%</td><td>3.7</td></tr>
                <tr class="highlight-row"><td>$150</td><td>91,995</td><td>19.8</td><td>12.9</td><td>3.6%</td><td>2.4%</td><td>4.3</td></tr>
                <tr><td>$170</td><td>104,261</td><td>22.5</td><td>14.3</td><td>3.2%</td><td>2.1%</td><td>4.8</td></tr>
            </tbody>
        </table>
    </div>

    <div class="chart-container">
        <h3>CN free cash flow yield at three illustrative share prices</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">$130 a share: 4.18%</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">$150 a share: 3.63%</div><div class="bar-wrapper"><div class="bar" style="width: 87%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">$170 a share: 3.20%</div><div class="bar-wrapper"><div class="bar" style="width: 77%;"><span></span></div></div></div>
        </div>
        <p>$3,336 million of 2025 free cash flow ÷ (613.3 million shares × price). Our calculations.</p>
    </div>

    <p>To use this, check today's price at your broker and run the same arithmetic. Then ask whether the yield is enough. A 3.6% free cash flow yield from a company that grows can beat a 4% bond over time. If free cash flow shrinks, it won't.</p>

    <h2 id="misses">What does each ratio miss?</h2>

    <div class="table-wrapper">
        <table>
            <caption>Valuation ratios: what each shows and what it misses</caption>
            <thead>
                <tr><th>Ratio</th><th>Formula</th><th>Good for</th><th>Misses</th></tr>
            </thead>
            <tbody>
                <tr><td>P/E</td><td>Price ÷ diluted EPS</td><td>Quick comparison of similar profitable companies</td><td>Debt, one-off items, cash vs accounting profit; useless when EPS is negative</td></tr>
                <tr><td>EV/EBITDA</td><td>(Market value + debt − cash) ÷ EBITDA</td><td>Comparing companies with different debt levels</td><td>Capital spending, which EBITDA ignores; "adjusted" definitions vary</td></tr>
                <tr><td>FCF yield</td><td>Free cash flow ÷ market value</td><td>Capital-heavy businesses; dividend safety</td><td>Lumpy years; company definitions vary</td></tr>
                <tr><td>Dividend payout</td><td>Dividend ÷ EPS or ÷ FCF per share</td><td>Whether the dividend is covered</td><td>Growth reinvestment; buybacks</td></tr>
                <tr><td>Price/book</td><td>Market value ÷ shareholders' equity</td><td>Banks, insurers, asset-heavy firms</td><td>Intangible value; book values from old purchase prices</td></tr>
            </tbody>
        </table>
    </div>

    <p>EBITDA deserves a warning. It leaves out depreciation, but railways, pipelines and telecoms must keep spending on assets that wear out. For those businesses, free cash flow is the better test. For banks, EV/EBITDA doesn't work at all because debt is their raw material; use P/E and price-to-book instead.</p>

    <div class="warning-box">
        <strong>Adjusted numbers are the company's choice</strong>
        <p>Non-GAAP measures such as adjusted EPS and adjusted EBITDA exclude items the company decides are unusual. CN's 2025 adjustments included a workforce reduction program and advisory costs. Read the reconciliation, and check whether "one-time" items keep coming back.</p>
    </div>

    <h2 id="compare">What should you compare a ratio with?</h2>

    <p>Three benchmarks make a ratio meaningful:</p>
    <ol>
        <li><strong>The company's own history.</strong> Is the P/E higher or lower than its five- or ten-year range? Pull past annual results from the company's <a href="${CN_FIN}">investor page</a> or SEDAR+.</li>
        <li><strong>Close peers.</strong> Compare CN with other large railways, not with banks or tech companies. Different industries have very different normal ranges.</li>
        <li><strong>Safe yields.</strong> Compare earnings yield or FCF yield with government bond yields. When bond yields rise, investors usually want more from stocks.</li>
    </ol>

    <p>Growth matters most of all. CN's diluted EPS grew from $7.01 to $7.57 in 2025, about 8%. A company growing earnings 8% a year can justify a higher P/E than one growing 2%. How much higher is a judgement call. That is why valuation is a range, not a single number.</p>

    <h2 id="process">How do you put it together?</h2>

    <div class="flowchart">
        <div class="flow-node decision">Is the company profitable with positive free cash flow?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">No: P/E and FCF yield don't work; use revenue trends and balance-sheet strength, and size it small</div>
            <div class="flow-node decision">Yes: are P/E, EV/EBITDA and FCF yield near or better than the company's history and peers?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Yes, and growth looks intact: a candidate; size it by your rules</div>
            <div class="flow-node result">No: write down the price at which it would pass, and wait</div>
        </div>
    </div>

    <div class="example-box">
        <strong>Illustrative example: Wei, 34, Vancouver</strong>
        <p>Wei likes CN's business. She writes a one-page valuation note using the 2025 filing: diluted EPS $7.57, free cash flow $5.44 a share, dividend $3.55, debt-to-EBITDA 2.51 times.</p>
        <div class="example-calculation">
            <div class="line"><span>Her rule: FCF yield at least 4%</span><span>Price at or below $136 ($5.44 ÷ 0.04)</span></div>
            <div class="line"><span>Cross-check: P/E at $136</span><span>about 18.0</span></div>
            <div class="line total"><span>Plan</span><span>Buy a 4% position at or below $136; review after 2026 results</span></div>
        </div>
        <p>Her 4% hurdle is a personal choice, not a standard. Figures are from CN's 2025 results; the decision is illustrative.</p>
    </div>

    <h2>Does your province change anything?</h2>
    <p>No. Valuation is the same anywhere in Canada. Your province affects the tax on dividends and capital gains from the stock, which matters if you are comparing after-tax returns with a bond or GIC. See <a href="/blog/dividend-tax-credit-by-province-canada/">the dividend tax credit by province</a>.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Latest annual results downloaded from the company or SEDAR+</li>
        <li>Diluted EPS, free cash flow, debt, cash and share count recorded</li>
        <li>Non-GAAP definitions and reconciliations read</li>
        <li>P/E, EV/EBITDA, FCF yield and payout calculated at today's price</li>
        <li>Ratios compared with history, peers and bond yields</li>
        <li>Buy price written down before you place an order</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>What is a good P/E ratio?</h3>
    <p>There isn't one number. It depends on growth, risk, industry and interest rates. Compare a company's P/E with its own history and close peers.</p>

    <h3>Should I use diluted or basic EPS?</h3>
    <p>Diluted. It includes shares that options and awards could add. CN's 2025 basic EPS was $7.58 and diluted $7.57.</p>

    <h3>Why use EV instead of market value?</h3>
    <p>EV includes debt and cash, so it compares companies with different balance sheets fairly. It is closer to the cost of buying the whole business.</p>

    <h3>Is EBITDA the same as cash flow?</h3>
    <p>No. EBITDA ignores capital spending, interest and taxes. Free cash flow subtracts what the business spends to keep running.</p>

    <h3>Where do I find a company's numbers?</h3>
    <p>In its annual results, MD&amp;A and financial statements, on SEDAR+ and usually its investor site.</p>

    <h3>Can a stock with a high P/E be a good buy?</h3>
    <p>Yes, if earnings grow fast enough. But high expectations leave little room for disappointment.</p>

    <h3>Do valuation ratios work for banks?</h3>
    <p>P/E and price-to-book do. EV/EBITDA does not, because borrowing and lending is a bank's core business.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${CN_Q4}">CN: 2025 fourth-quarter press release, financial statements and non-GAAP measures</a> (January 30, 2026), reviewed October 23, 2026</li>
        <li><a href="${CN_FIN}">CN: Financial results (investor page)</a>, reviewed October 23, 2026</li>
        <li><a href="${GSAM_EVAL}">GetSmarterAboutMoney.ca (OSC): How to evaluate companies when buying stock</a>, reviewed October 23, 2026</li>
        <li><a href="${OSC_CD}">OSC: Continuous disclosure</a>, reviewed October 23, 2026</li>
        <li>Ratios at illustrative share prices: our calculations from CN's filed figures</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/how-to-pick-stocks-canada/">How to pick stocks in Canada</a></li>
        <li><a href="/blog/sedar-plus-company-filings-canada/">How to read SEDAR+ filings</a></li>
        <li><a href="/blog/position-sizing-stocks-canada/">Position sizing</a></li>
        <li><a href="/blog/when-to-sell-a-stock-canada/">When to sell a stock</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Found a stock worth owning? Hold it in the right account.</strong></p>
        <p>The 2026 tax guide covers dividends, capital gains and which account to use for each.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about valuation methods as of October 23, 2026. CN figures are from its 2025 results; share prices used are illustrative, not quotes or targets. Naming a company is not a recommendation. It is not investment advice.")}

</div>`
);
