import { invFooter, invPost } from './types';

const XEQT = 'https://www.blackrock.com/ca/individual/en/literature/fact-sheet/xeqt-ishares-core-equity-etf-portfolio-fund-fact-sheet-en-ca.pdf';
const VBAL = 'https://fund-docs.vanguard.com/VBAL_Balanced_ETF_Portfolio_9578_FS_EN_CA.pdf';

export const tooManyEtfsOverlapMistakesCanada = invPost(
  'passive-etf',
  'too-many-etfs-overlap-mistakes-canada',
  'Too Many ETFs: Overlap, Home Bias and Passive Mistakes',
  'XEQT holds five underlying funds. Stacking VFV on top doubles your US sleeve. Spot overlap, home bias and other passive mistakes using dated fund holdings.',
  `<div class="container">

    <div class="hook">
        A "diversified" account with twelve Canadian ETFs can still be <span class="highlight">mostly the same US stocks</span> three times over. Overlap hides in the holdings page, not in the ticker list on your statement.
    </div>

    <p>iShares Core Equity ETF Portfolio (XEQT) is itself a portfolio of five underlying iShares funds. On the fact sheet reviewed for this article, the top lines included about 30.78% in a US total-market iShares fund, 24.89% in the S&amp;P/TSX Capped Composite fund, 24.26% in MSCI EAFE IMI, 14.99% in another US total-market sleeve and 4.89% in emerging markets. Adding VFV or XUS on top of XEQT is not more diversification. It is more of the same US exposure.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>XEQT's fact sheet shows five holdings and MER 0.19%, with a 100% equity asset allocation.</li>
            <li>Geographic breakdown on that sheet is dominated by the US and Canada sleeves inside those five funds.</li>
            <li>Owning XEQT plus a separate S&amp;P 500 ETF stacks US exposure. Check the holdings page before you buy one more ticker.</li>
            <li>Home bias means holding far more Canada than Canada's share of world markets. It is a choice, not an accident, if you make it on purpose.</li>
            <li>A simple portfolio of one all-in-one, or a few building-block ETFs with a written target, beats a pile of overlapping tickers.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/passive-etf/">Passive and ETF investing</a>. For clean model mixes, see <a href="/blog/model-etf-portfolios-canada/">model ETF portfolios</a> and <a href="/blog/couch-potato-portfolio-canada/">Couch Potato investing</a>.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#overlap">What does ETF overlap look like?</a></li>
            <li><a href="#home">What is home bias?</a></li>
            <li><a href="#mistakes">Which passive mistakes show up most often?</a></li>
            <li><a href="#fix">How do you simplify without a fire sale?</a></li>
            <li><a href="#example">How would Maya clean up eight tickers?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="overlap">What does ETF overlap look like?</h2>
    <p>Overlap means two funds hold many of the same companies. You only see it by reading each fund's holdings or geographic breakdown on the issuer's page or fact sheet.</p>
    <div class="table-wrapper">
        <table>
            <caption>XEQT top holdings (iShares fact sheet; holdings subject to change)</caption>
            <thead><tr><th>Holding</th><th>Weight</th></tr></thead>
            <tbody>
                <tr><td>iShares Core S&amp;P Total U.S. Stock Market (sleeve)</td><td>30.78%</td></tr>
                <tr><td>iShares S&amp;P/TSX Capped Composite</td><td>24.89%</td></tr>
                <tr><td>iShares MSCI EAFE IMI Index</td><td>24.26%</td></tr>
                <tr class="highlight-row"><td>iShares Core S&amp;P Total U.S. Stock (second sleeve)</td><td>14.99%</td></tr>
                <tr><td>iShares MSCI Emerging Markets</td><td>4.89%</td></tr>
            </tbody>
        </table>
    </div>
    <p>Those two US lines already sum to about 45.8% of XEQT before you buy anything else. If you also hold a dedicated S&amp;P 500 ETF for growth, your true US weight is higher than either ticker suggests.</p>
    <div class="chart-container">
        <p class="chart-title">XEQT underlying fund weights (fact sheet)</p>
        <div class="bar-chart">
            <div class="bar-group"><div class="bar" style="height:90%"></div><span class="bar-label">US #1<br>30.8%</span></div>
            <div class="bar-group"><div class="bar" style="height:73%"></div><span class="bar-label">Canada<br>24.9%</span></div>
            <div class="bar-group"><div class="bar" style="height:71%"></div><span class="bar-label">EAFE<br>24.3%</span></div>
            <div class="bar-group"><div class="bar" style="height:44%"></div><span class="bar-label">US #2<br>15.0%</span></div>
            <div class="bar-group"><div class="bar" style="height:14%"></div><span class="bar-label">EM<br>4.9%</span></div>
        </div>
        <p class="chart-source">Source: iShares XEQT fund fact sheet holdings table, reviewed October 24, 2026. Chart heights illustrate the published weights.</p>
    </div>

    <h2 id="home">What is home bias?</h2>
    <p>Canada is a small share of world equity markets. A global index fund will usually hold much less Canada than a Canadian investor's comfort zone. Many Canadians deliberately hold more Canada for currency, tax (eligible dividends in non-registered accounts) and familiarity. That can be rational. Accidental home bias is different: buying every Canadian bank ETF, every Canadian dividend ETF and a TSX index fund until half the portfolio is the same ten stocks.</p>
    <p>VBAL's fact sheet allocation shows a Canadian equity sleeve around 18% of the fund through FTSE Canada All Cap, plus Canadian bonds. That is intentional design inside one product. Eight overlapping Canadian equity ETFs are not the same thing.</p>

    <h2 id="mistakes">Which passive mistakes show up most often?</h2>
    <div class="table-wrapper">
        <table>
            <caption>Common passive investing mistakes (behavioural checklist)</caption>
            <thead><tr><th>Mistake</th><th>What it looks like</th><th>Fix</th></tr></thead>
            <tbody>
                <tr class="highlight-row"><td>Overlap stacking</td><td>XEQT + VFV + QQQ</td><td>Pick one US sleeve</td></tr>
                <tr><td>Collection investing</td><td>A new ETF every quarter</td><td>Written target mix</td></tr>
                <tr><td>Yield chasing</td><td>Highest-yield ETF each year</td><td>Total return focus</td></tr>
                <tr><td>Orphan bond sleeve</td><td>100% equity until rates fall</td><td>Match risk to horizon</td></tr>
                <tr><td>Ignoring MER layering</td><td>Fund-of-funds plus active satellite</td><td>Add MERs, not just tickers</td></tr>
            </tbody>
        </table>
    </div>
    <div class="warning-box">
        <strong>Fund-of-funds already diversify.</strong>
        <p>XEQT's MER of 0.19% on the fact sheet already includes the cost of the underlying funds as described by the issuer. Buying the underlying funds separately plus XEQT is not a free upgrade.</p>
    </div>

    <h2 id="fix">How do you simplify without a fire sale?</h2>
    <div class="flowchart">
        <div class="flow-node decision">Is each ticker doing a unique job in a written plan?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Yes: keep it and write the job beside the ticker</div>
            <div class="flow-node decision">No: is it in a taxable account with a large gain?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Registered: sell and consolidate when convenient</div>
            <div class="flow-node result">Taxable: stop new buys; redirect contributions; sell gradually</div>
        </div>
    </div>
    <p>Redirecting new contributions is the lowest-friction fix. In a TFSA or RRSP you can also sell orphans without a personal tax event. In a non-registered account, prioritize stopping the bleed of new purchases into duplicate funds, then harvest losses or use contribution room elsewhere while you plan taxable sales.</p>
    <p>Write the target portfolio on one page: ticker, percentage, job. If a holding cannot earn a job line, it is a candidate to exit. Revisit the page once a year, not every time a new ETF launches.</p>

    <h2 id="example">How would Maya clean up eight tickers?</h2>
    <div class="example-box">
        <strong>Illustrative example: Maya, 35, Halifax</strong>
        <p>TFSA holds XEQT, VFV, XIU, ZDV, VDY, XUU, a covered-call ETF and a thematic AI ETF.</p>
        <div class="example-calculation">
            <div class="line"><span>Unique jobs she can justify</span><span>One global equity core</span></div>
            <div class="line"><span>Overlap she found</span><span>VFV + XUU + XEQT US sleeves</span></div>
            <div class="line"><span>Plan</span><span>Keep XEQT; stop buying the rest</span></div>
            <div class="line total"><span>After 12 months of contributions</span><span>XEQT is most of the TFSA</span></div>
        </div>
        <p>She sells the thematic ETF first (smallest and no unique job). Dividend ETFs wait until she decides whether she wants a dividend tilt at all. Amounts are illustrative.</p>
    </div>

    <h2>Does your province change anything?</h2>
    <p>Overlap is a portfolio problem, not a provincial one. Tax on selling duplicates in a non-registered account does vary with your marginal rate. Prefer consolidating inside TFSAs and RRSPs when you can.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Holdings page printed or saved for every ETF you own</li>
        <li>US weight estimated across the whole portfolio</li>
        <li>Canada weight chosen on purpose</li>
        <li>Each ticker has a one-line job</li>
        <li>No new tickers without removing an old one</li>
    </ul>


    <h2 id="thematic">Why thematic ETFs create silent overlap</h2>
    <p>Artificial intelligence, clean energy and "innovation" ETFs often hold the same mega-cap US technology names that already dominate a total-market US sleeve inside XEQT. The theme feels new. The holdings page often is not. Before you buy a theme, open its top-ten list and compare it with your core fund's US holdings.</p>
    <p>Covered-call equity ETFs add another layer: they may own a familiar index and then sell calls against it. The distribution can look generous while total return lags the plain index. If income is the goal, size the position knowingly; do not treat it as extra diversification on top of XEQT.</p>
    <p>Currency-hedged and unhedged twins are also easy to double up. Holding both does not diversify companies. It mostly changes currency exposure. Pick a hedge policy and stick to it.</p>

    <h2 id="count">How to count true exposures</h2>
    <p>Build a simple spreadsheet with columns for Canada equity, US equity, international equity, emerging markets and bonds. For each ETF, enter the geographic breakdown from the fact sheet. Sum the columns. That sum is your real portfolio. The ticker count on your statement is not.</p>
    <p>When the US column exceeds your written target, stop buying US satellite ETFs. When Canada exceeds your intentional home-bias target, stop buying another Canadian dividend fund "for income" without a plan.</p>
    <p>Review the sheet when you rebalance, not when a new ETF is advertised. Product marketing is not a portfolio policy.</p>


    <h2 id="costs">How overlap raises costs without raising diversification</h2>
    <p>Every extra ETF can add tracking differences, bid-ask friction and attention costs. Even when MERs are low, a cluttered portfolio is harder to rebalance and easier to neglect. Neglect shows up as years without contributions or as panic trades when you finally open the app.</p>
    <p>Fund-of-funds already pay the underlying funds' costs inside the published MER. XEQT's 0.19% MER on the fact sheet is the all-in management expense figure the issuer reports for that product structure. Stacking overlapping satellites rarely improves the math.</p>
    <p>Audit once a year: list every ticker, its MER, its job and its geographic weights. Delete jobs that duplicate. Redirect the next twelve months of contributions to the survivors before you sell taxable duplicates.</p>
    <p>If you enjoy researching products, channel that energy into reading one annual report for a company you already own, or into raising your savings rate. Both beat collecting tickers.</p>
    <p>Parents opening RESPs should be especially careful. Age-based or simple all-in-one RESP portfolios beat a drawer of thematic ETFs bought because a child likes a brand. Keep the RESP boring on purpose.</p>


    <h2 id="mistakes2">Seven cleanup moves that usually work</h2>
    <ol>
        <li>Pick one core equity ETF or all-in-one and write its job line.</li>
        <li>List every other equity ETF and mark duplicates of that core.</li>
        <li>Stop contributions to duplicates immediately.</li>
        <li>Sell duplicates inside registered accounts when you are ready.</li>
        <li>In taxable accounts, harvest losses or wait for low-gain lots.</li>
        <li>Rebuild geographic weights on a spreadsheet once.</li>
        <li>Ban new tickers for twelve months unless a holding is removed.</li>
    </ol>
    <p>These moves are operational, not market calls. They work in bull markets and bear markets because they attack clutter, not prices. If a duplicate has a huge taxable gain, the "stop contributing" step still helps while you plan the tax.</p>
    <p>Couples should assign one person as portfolio librarian for a year so two shopping habits do not refill the clutter. Review the ban together at the annual meeting.</p>
    <p>If you feel behind peers who own twenty tickers, remember that concentration of attention is a feature. Professional managers disclose holdings with discipline; amateurs often collect souvenirs.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>How many ETFs should a Canadian hold?</h3>
    <p>One all-in-one is enough for many people. A few building blocks (equity, bond, maybe Canadian equity) also work. More than that needs a written reason. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Is XEQT already diversified?</h3>
    <p>Yes, across regions through five underlying funds on the fact sheet. It is not diversified into bonds; it is 100% equity. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Can I hold XEQT and VEQT together?</h3>
    <p>They are competing all-equity portfolios. Holding both is usually overlap, not diversification. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>What MER does XEQT show?</h3>
    <p>0.19% on the iShares fact sheet reviewed October 24, 2026. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Is Canadian home bias always bad?</h3>
    <p>Not if you chose it for tax or comfort and still have global exposure. It is a problem when it is accidental and extreme. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Should I sell everything to simplify?</h3>
    <p>In a registered account, often yes when ready. In a taxable account, redirect contributions first and sell with tax in mind. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Where do I see holdings?</h3>
    <p>On the issuer's fund page or fact sheet PDF. Do not rely on the brokerage nickname alone. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>


    <h2 id="together">Putting a simple portfolio on one page</h2>
    <p>Your one-page policy can be short: target percentages, rebalancing band, contribution schedule, and a ban on new tickers without removing an old one. Tape it near your monitor. Most overlap problems begin with an unplanned purchase that felt small. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>Once a year, export holdings from every account—TFSA, RRSP, taxable, RESP—and merge them before you judge diversification. Asset location can hide concentration when each account looks fine alone. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>If you use a robo-advisor plus a self-directed account, include both. Robo portfolios are often sensible; doubling them with a DIY XEQT sleeve may still be overweight equities. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>Share the one-pager with a spouse or trusted person. Overlap often accumulates when two people buy "just one more ETF" without a shared list. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>When simplifying, celebrate boredom. A boring portfolio that you fund for thirty years usually beats an exciting collection you tinker with every quarter. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${XEQT}">BlackRock iShares: XEQT Core Equity ETF Portfolio fund fact sheet</a>, reviewed October 24, 2026</li>
        <li><a href="${VBAL}">Vanguard: VBAL Balanced ETF Portfolio fund fact sheet</a> (allocation context), reviewed October 24, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/couch-potato-portfolio-canada/">Couch Potato investing</a></li>
        <li><a href="/blog/model-etf-portfolios-canada/">Model ETF portfolios</a></li>
        <li><a href="/blog/canadian-dividend-etfs-compared/">Canadian dividend ETFs compared</a></li>
        <li><a href="/blog/stay-the-course-balanced-portfolios-canada/">Stay the course in crashes</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Simplifying is easier when the tax side is clear.</strong></p>
        <p>The 2026 tax guide covers TFSA and RRSP room, asset location and when a taxable sale is worth it.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about ETF holdings as of October 24, 2026. Holdings change. The Maya example is illustrative. This is not investment advice.", "October 24, 2026")}

</div>`,
  '2026-10-24'
);
