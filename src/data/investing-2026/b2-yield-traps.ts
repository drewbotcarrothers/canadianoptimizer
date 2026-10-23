import { invFooter, invPost } from './types';

const GSAM_DIV = 'https://www.getsmarteraboutmoney.ca/learning-path/stocks/how-stocks-and-dividends-work/';

export const dividendYieldTrapsCanada = invPost(
  'dividend-investing',
  'dividend-yield-traps-canada',
  'Dividend Yield Traps in Canada: Warning Signs Before a Cut',
  'A high dividend yield can mean the market expects a cut. Learn the payout ratio, free cash flow and debt checks that flag a Canadian dividend yield trap early.',
  `<div class="container">

    <div class="hook">
        "Dividends are not guaranteed," warns the OSC's investor site. Yet a stock that falls from $40 to $25 while paying $2 <span class="highlight">jumps from a 5% yield to 8%</span> without paying a cent more (illustrative). That jump is often the warning, not the opportunity.
    </div>

    <p>A dividend yield trap is a stock whose yield looks high because its price has fallen on bad news, and the dividend is then cut. Before you buy, check that earnings and free cash flow cover the dividend, that debt is not rising, and that the yield is not far above similar companies.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Dividend yield = annual dividend ÷ share price, as the OSC's investor site defines it. A falling price raises the yield automatically.</li>
            <li>A payout ratio above 100% of earnings, or above 100% of free cash flow, means the dividend is not being earned.</li>
            <li>Rising debt, shrinking cash flow and a dividend that has stopped growing are the usual signs before a cut.</li>
            <li>For REITs and pipelines, use the cash-flow measures they report, not net earnings. REIT distributions can include return of capital, which lowers your adjusted cost base.</li>
            <li>A cut often comes with a price drop, so you lose income and capital at the same time. Diversification limits the damage.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/dividend-investing/">Dividend Investing</a>, in the <a href="/category/investing/">Investing</a> category. The pillar, <a href="/blog/dividend-investing-canada/">dividend investing in Canada</a>, covers building the portfolio. This page is the safety check you run before each purchase.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#what">What is a dividend yield trap?</a></li>
            <li><a href="#math">Why does a falling price raise the yield?</a></li>
            <li><a href="#signs">What are the warning signs?</a></li>
            <li><a href="#compare">How do you compare two high yielders?</a></li>
            <li><a href="#sectors">Do REITs, pipelines and banks need different checks?</a></li>
            <li><a href="#filings">Where do you find the numbers?</a></li>
            <li><a href="#cost">What does a cut cost you?</a></li>
            <li><a href="#provinces">Does tax or province change the picture?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="what">What is a dividend yield trap?</h2>

    <p>It is a high yield that is high for a bad reason. Investors sell a stock because they expect trouble: falling profits, too much debt, a regulatory problem. The price drops, so the yield rises, and income-focused buyers are drawn in. If the company then cuts the dividend, the income disappears and the price often falls again.</p>

    <p>The <a href="${GSAM_DIV}">OSC's investor site</a> is clear that a company's board decides whether to declare a dividend, that dividends can be reduced or eliminated at any time, and that even large companies with long records can be affected by events, industry news or financial difficulty.</p>

    <h2 id="math">Why does a falling price raise the yield?</h2>

    <p>Because the yield divides last year's dividend by today's price. Nothing about the company has to improve for the yield to rise; the price just has to fall.</p>

    <div class="chart-container">
        <h3>Yield on a $2.00 annual dividend at different share prices (illustrative calculation)</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">$50 share price: 4%</div><div class="bar-wrapper"><div class="bar" style="width: 40%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">$40 share price: 5%</div><div class="bar-wrapper"><div class="bar" style="width: 50%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">$33.33 share price</div><div class="bar-wrapper"><div class="bar" style="width: 60%;"><span>6%</span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">$25 share price</div><div class="bar-wrapper"><div class="bar" style="width: 80%;"><span>8%</span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">$20 share price</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span>10%</span></div></div></div>
        </div>
        <p>Yield = $2.00 ÷ share price. Illustrative numbers, not any real company. A screener showing 10% here would be showing the result of a 60% price fall from $50.</p>
    </div>

    <h2 id="signs">What are the warning signs?</h2>

    <p>No single number predicts a cut. Look for several of these together, using the company's annual report, quarterly results and dividend history on its investor relations page.</p>

    <div class="table-wrapper">
        <table>
            <caption>Dividend yield trap warning signs and how to check them</caption>
            <thead>
                <tr><th>Check</th><th>How to calculate it</th><th>Comfortable</th><th>Warning</th></tr>
            </thead>
            <tbody>
                <tr class="highlight-row"><td>Earnings payout ratio</td><td>Dividends per share ÷ earnings per share</td><td>Well under 100%, stable over years</td><td>Over 100%, or rising fast</td></tr>
                <tr><td>Free cash flow payout</td><td>Dividends ÷ (operating cash flow − capital spending)</td><td>Dividends covered by free cash flow</td><td>Dividends paid from borrowing or asset sales</td></tr>
                <tr><td>Debt trend</td><td>Net debt now vs two to three years ago</td><td>Flat or falling</td><td>Rising while profits fall</td></tr>
                <tr><td>Yield vs peers</td><td>The stock's yield vs similar companies</td><td>Close to peers</td><td>Far above peers in the same industry</td></tr>
                <tr><td>Dividend growth</td><td>Dividend history over five years</td><td>Regular increases</td><td>Frozen, or "under review" in management comments</td></tr>
                <tr><td>Price trend</td><td>Share price over the past year</td><td>Stable</td><td>A large fall on company-specific news</td></tr>
            </tbody>
        </table>
    </div>

    <p>These thresholds are rules of thumb used in this guide, not regulatory standards. A business with very steady cash flow can safely pay out more of its earnings than a cyclical one.</p>

    <div class="flowchart">
        <div class="flow-node decision">Is the yield far above similar companies?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">No: run the normal checks, then decide</div>
            <div class="flow-node decision">Yes: do earnings and free cash flow both cover the dividend?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">No: treat the yield as at risk. Pass, or size it small</div>
            <div class="flow-node decision">Yes: is debt stable and the business stable?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">No: wait for another quarter of results</div>
            <div class="flow-node result">Yes: may be a real bargain. Still keep the position small</div>
        </div>
    </div>

    <h2 id="compare">How do you compare two high yielders?</h2>

    <div class="table-wrapper">
        <table>
            <caption>Illustrative example: two dividend stocks with the same $2.00 dividend (not real companies)</caption>
            <thead>
                <tr><th>Measure</th><th>Company A</th><th>Company B</th></tr>
            </thead>
            <tbody>
                <tr><td>Share price</td><td>$40 (flat this year)</td><td>$25 (down from $40)</td></tr>
                <tr><td>Dividend yield</td><td>5.0%</td><td>8.0%</td></tr>
                <tr><td>Earnings per share</td><td>$3.20</td><td>$1.60</td></tr>
                <tr><td>Earnings payout ratio</td><td>63%</td><td>125%</td></tr>
                <tr><td>Free cash flow per share</td><td>$2.60</td><td>$1.20</td></tr>
                <tr><td>Free cash flow payout</td><td>77%</td><td>167%</td></tr>
                <tr><td>Net debt trend</td><td>Flat</td><td>Up 40% in two years</td></tr>
                <tr class="highlight-row"><td>Verdict</td><td>Dividend covered</td><td>Likely yield trap</td></tr>
            </tbody>
        </table>
    </div>

    <p>Company B pays the same dollars, but it is paying out more than it earns and borrowing to do it. That can continue for a while, which is why traps catch people, but not forever.</p>

    <h2 id="sectors">Do REITs, pipelines and banks need different checks?</h2>

    <ul>
        <li><strong>REITs:</strong> depreciation makes net earnings look low, so REITs report cash-flow measures such as funds from operations. Compare distributions with the cash-flow measure the REIT reports, over several years. Part of a REIT's distribution can be return of capital, which lowers your adjusted cost base; see <a href="/blog/adjusted-cost-base-canada-guide/">adjusted cost base</a>.</li>
        <li><strong>Pipelines and utilities:</strong> they spend heavily on projects, so watch debt and whether the dividend is paid from cash flow or new borrowing.</li>
        <li><strong>Banks and insurers:</strong> earnings payout ratios are the usual check, alongside the capital ratios each bank reports every quarter.</li>
        <li><strong>High-yield ETFs and covered-call funds:</strong> a high distribution can include return of capital or come at the cost of upside. See <a href="/blog/covered-call-etfs-canada/">covered call ETFs</a>.</li>
    </ul>

    <h2 id="filings">Where do you find the numbers?</h2>

    <p>Every Canadian public company files its annual and quarterly reports on SEDAR+, the securities regulators' filing system, and usually posts them on its investor relations page. You need three documents:</p>

    <div class="step-section">
        <div class="step"><div class="step-number">1</div><div><div class="step-title">The cash flow statement</div><p>Take "cash from operating activities" and subtract capital expenditures (often "purchase of property, plant and equipment"). Compare the result with "dividends paid" in the financing section. If dividends are larger, the company is funding them some other way.</p></div></div>
        <div class="step"><div class="step-number">2</div><div><div class="step-title">The income statement</div><p>Find diluted earnings per share and compare it with the dividend per share. Use several years, because one bad year can distort the ratio.</p></div></div>
        <div class="step"><div class="step-number">3</div><div><div class="step-title">Management's discussion and analysis (MD&amp;A)</div><p>Read what management says about the dividend, debt and capital spending plans. Words like "sustainable" without numbers to back them are not reassurance.</p></div></div>
        <div class="step"><div class="step-number">4</div><div><div class="step-title">The balance sheet, two years apart</div><p>Compare total debt minus cash now and two years ago. Rising debt alongside a rising payout ratio is the classic pattern before a cut.</p></div></div>
    </div>

    <p>Write the numbers down for each holding once a year. A single page per company is enough to spot a trend before the market prices it in.</p>

    <h2 id="growth">Is a lower yield with growth better?</h2>

    <p>Often, for long-term investors. A company yielding 3% that raises its dividend 7% a year overtakes a flat 5% yield, measured on your original cost, in year eight. Arithmetic on a $100 share: $3.00 × 1.07<sup>7</sup> ≈ $4.82 after seven raises, and $3.00 × 1.07<sup>8</sup> ≈ $5.15 after eight, against a flat $5.00. This is an illustration, not a forecast; growth rates change. The point is that today's yield is only one input.</p>

    <h2 id="cost">What does a cut cost you?</h2>

    <div class="example-box">
        <strong>Illustrative example: Raj, Saskatoon, $20,000 in Company B</strong>
        <div class="example-calculation">
            <div class="line"><span>Income expected at 8%</span><span>$1,600 a year</span></div>
            <div class="line"><span>Dividend cut in half</span><span>$800 a year</span></div>
            <div class="line"><span>Share price falls a further 20% on the news</span><span>$20,000 → $16,000</span></div>
            <div class="line total"><span>First-year result: $800 income, $4,000 capital loss</span><span>-$3,200</span></div>
        </div>
        <p>Had Raj bought Company A at 5%, he would have collected $1,000 with no cut. The extra $600 of promised yield cost him $3,200. All numbers are illustrative.</p>
    </div>

    <div class="tip-box">
        <strong>Limit the damage before it happens</strong>
        <p>Hold enough companies, across sectors, that one cut does not change your income much. A rule many investors use is to keep any single stock to a small share of the portfolio. A broad dividend ETF spreads the risk for you.</p>
    </div>

    <h2 id="provinces">Does tax or province change the picture?</h2>

    <p>Not the risk, but the reward. In a taxable account, eligible Canadian dividends get the dividend tax credit, and its value differs by province: for 2025, the provincial rate on grossed-up eligible dividends runs from 5.51% in Nunavut to 14% in New Brunswick. See <a href="/blog/dividend-tax-credit-by-province-canada/">dividend tax credit by province</a>. A capital loss on a trap can offset capital gains in a taxable account, but not in a TFSA, where losses are not deductible and the contribution room is not restored. A high tax credit is never a reason to buy a weak dividend.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Yield compared with similar companies</li>
        <li>Earnings payout ratio checked over several years</li>
        <li>Free cash flow covers the dividend</li>
        <li>Debt flat or falling</li>
        <li>Reason for any big price drop understood</li>
        <li>Position small enough that a cut would not hurt your plan</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>What dividend yield is too high?</h3>
    <p>There is no fixed number. A yield far above similar companies, after a big price fall, is the warning. Check whether the company earns and generates enough cash to pay it.</p>

    <h3>What is a good payout ratio?</h3>
    <p>Comfortably below 100% of earnings, and stable. Steadier businesses can pay out more than cyclical ones. For REITs, use the cash-flow measure they report instead.</p>

    <h3>Do companies warn before cutting dividends?</h3>
    <p>Sometimes. Phrases like "reviewing our capital allocation" or a frozen dividend after years of increases are common signals. Often the share price falls first.</p>

    <h3>Is a dividend ETF safer than individual stocks?</h3>
    <p>It spreads the risk: one cut has a small effect on the fund's income. It does not prevent cuts, and high-yield funds can still hold weak companies.</p>

    <h3>Should I sell after a dividend cut?</h3>
    <p>Not automatically. Ask whether you would buy the stock today at this price with the new dividend. If not, consider selling, keeping tax consequences in mind.</p>

    <h3>Are Canadian bank dividends guaranteed?</h3>
    <p>No dividend on common shares is guaranteed. The OSC's investor site says companies can reduce or eliminate dividends at any time.</p>

    <h3>Can I claim a loss on a yield trap in my TFSA?</h3>
    <p>No. Losses inside a TFSA are not deductible, and the room used is not restored. In a taxable account, the capital loss can offset capital gains.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${GSAM_DIV}">GetSmarterAboutMoney (OSC): How stocks and dividends work</a> (last updated January 2, 2026), reviewed October 23, 2026</li>
        <li><a href="https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5004-d/5004-d-25e.pdf">CRA: 2025 Worksheet NB428</a> and <a href="https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5014-d/5014-d-25e.pdf">Worksheet NU428</a>, line 61520 (provincial dividend tax credit rates), reviewed October 23, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/dividend-investing-canada/">Dividend investing in Canada</a></li>
        <li><a href="/blog/dividend-tax-credit-by-province-canada/">Dividend tax credit by province</a></li>
        <li><a href="/blog/covered-call-etfs-canada/">Covered call ETFs in Canada</a></li>
        <li><a href="/blog/how-to-pick-stocks-canada/">How to pick stocks in Canada</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Dividends, losses and the tax credit all land on your return.</strong></p>
        <p>The 2026 tax guide covers investment income and capital losses from the filing side.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about evaluating dividend stocks as of October 23, 2026. It is not a recommendation to buy or sell any security, and not investment or tax advice. Companies, prices and households are illustrations, not real securities. Thresholds are rules of thumb, not standards.")}

</div>`
);
