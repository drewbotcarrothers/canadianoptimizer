import { invFooter, invPost } from './types';

const RBC = 'https://www.rbc.com/investor-relations/_assets-custom/pdf/2026q1_report.pdf';
const TD = 'https://www.td.com/content/dam/tdcom/canada/about-td/pdf/quarterly-results/2026/q1/2026-q1-financial-supppack-en.pdf';
const BMO = 'https://www.bmo.com/ir/qtrinfo/1/2026-q1/Suppq126.pdf';
const BNS = 'https://www.scotiabank.com/content/dam/scotiabank/corporate/quarterly-reports/2026/q1/Q126_Supplementary_Financial_Information-EN.pdf';
const CIBC = 'https://www.cibc.com/content/dam/cibc-public-assets/about-cibc/investor-relations/pdfs/quarterly-results/2026/q126report-en.pdf';
const OSFI = 'https://www.osfi-bsif.gc.ca/en/guidance/guidance-library/capital-adequacy-requirements-car-2023';

export const canadianBankStocksDividendCanada = invPost(
  'dividend-investing',
  'canadian-bank-stocks-dividend-canada',
  'Canadian Bank Stocks: Compare Dividends and CET1 Ratios',
  'Q1 2026 dividends and CET1 ratios from bank reports for RBC, TD, BMO, Scotiabank and CIBC. How dividend investors compare the banks with no buy rating.',
  `<div class="container">

    <div class="hook">
        Canadian bank stocks fund a huge share of dividend portfolios. The useful comparison is not a tip sheet. It is <span class="highlight">dated dividends and capital ratios</span> from each bank's own report.
    </div>

    <p>For the quarter ended January 31, 2026, the banks' published materials showed common dividends of $1.64 (RBC), $1.08 (TD), $1.67 (BMO), $1.10 (Scotiabank) and $1.07 (CIBC) per share for the quarter, with CET1 ratios of 13.7%, 14.5%, 13.1%, 13.3% and 13.4% respectively. Those figures are starting points for comparison, not buy or sell ratings.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Use each bank's supplementary financial information or report to shareholders for the quarter you care about. Do not mix quarters.</li>
            <li>CET1 (Common Equity Tier 1) is the core capital ratio OSFI watches. Higher is more buffer, not a promise of a higher dividend.</li>
            <li>Quarterly dividend per share is what the board declared. Yield needs a share price, which moves daily, so this article quotes the dividend and CET1, not a yield tip.</li>
            <li>National Bank is omitted here because a clean Q1 2026 primary PDF was not retrieved in this review pass; check NBC IR before adding it to your table.</li>
            <li>Concentration risk matters: five bank stocks are still one sector.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/dividend-investing/">Dividend investing</a>. For yield traps, see <a href="/blog/dividend-yield-traps-canada/">dividend yield traps</a>. For tax, see <a href="/blog/dividend-tax-credit-by-province-canada/">the dividend tax credit by province</a>.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#table">What did the Big Five publish for Q1 2026?</a></li>
            <li><a href="#cet1">What is CET1 and why do dividend investors care?</a></li>
            <li><a href="#compare">How should you compare the banks?</a></li>
            <li><a href="#risk">What can still go wrong?</a></li>
            <li><a href="#example">How would Priya build a comparison sheet?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="table">What did the Big Five publish for Q1 2026?</h2>
    <div class="table-wrapper">
        <table>
            <caption>Selected Q1 2026 figures from bank reports (quarter ended January 31, 2026)</caption>
            <thead><tr><th>Bank</th><th>Dividend / common share (quarter)</th><th>CET1 ratio</th><th>Source document</th></tr></thead>
            <tbody>
                <tr><td>RBC</td><td>$1.64</td><td>13.7%</td><td>Q1 2026 Report to Shareholders</td></tr>
                <tr><td>TD</td><td>$1.08</td><td>14.5%</td><td>Q1 2026 Supplementary Financial Information</td></tr>
                <tr class="highlight-row"><td>BMO</td><td>$1.67 declared</td><td>13.1%</td><td>Q1 2026 Supplementary Financial Information</td></tr>
                <tr><td>Scotiabank</td><td>$1.10</td><td>13.3%</td><td>Q1 2026 Supplementary Financial Information</td></tr>
                <tr><td>CIBC</td><td>$1.07</td><td>13.4%</td><td>Q1 2026 Report to Shareholders</td></tr>
            </tbody>
        </table>
    </div>
    <p>Annualise a quarterly dividend only as arithmetic (times four) if you need a rough run-rate, and label it as such. Boards can change the dividend. Past declarations are not a forecast.</p>

    <div class="chart-container">
        <p class="chart-title">Q1 2026 CET1 ratios (bank reports)</p>
        <div class="bar-chart">
            <div class="bar-group"><div class="bar" style="height:94%"></div><span class="bar-label">TD<br>14.5%</span></div>
            <div class="bar-group"><div class="bar" style="height:89%"></div><span class="bar-label">RBC<br>13.7%</span></div>
            <div class="bar-group"><div class="bar" style="height:87%"></div><span class="bar-label">CIBC<br>13.4%</span></div>
            <div class="bar-group"><div class="bar" style="height:86%"></div><span class="bar-label">BNS<br>13.3%</span></div>
            <div class="bar-group"><div class="bar" style="height:85%"></div><span class="bar-label">BMO<br>13.1%</span></div>
        </div>
        <p class="chart-source">Sources linked in the table. Chart heights illustrate the published CET1 percentages for Q1 2026.</p>
    </div>

    <h2 id="cet1">What is CET1 and why do dividend investors care?</h2>
    <p>CET1 is high-quality capital as a percentage of risk-weighted assets. Canadian domestic systemically important banks face OSFI minimums and buffers that put practical CET1 expectations well above the bare Basel minimums. A bank that is comfortably above its requirements has more room to absorb losses before a dividend cut becomes the conversation. CET1 is not a dividend coverage ratio. Pair it with earnings, payout commentary and credit quality in the same report.</p>

    <h2 id="compare">How should you compare the banks?</h2>
    <div class="flowchart">
        <div class="flow-node decision">Do you need income, or total return including growth?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Income focus: track declared DPS, payout comments, CET1</div>
            <div class="flow-node result">Total return: add earnings growth and valuation from filings</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-node result">Either way: cap position size so one bank cannot sink the plan</div>
    </div>
    <p>Build a one-page sheet you update each quarter: dividend per share, CET1, and a one-line note from management's capital discussion. Skip price targets from strangers on the internet. For how much of a portfolio one stock should be, see <a href="/blog/position-sizing-stocks-canada/">position sizing</a>.</p>
    <p>Eligible Canadian dividends get preferential tax treatment in non-registered accounts through the dividend tax credit. Inside a TFSA the credit does not matter. Inside an RRSP the credit also does not apply on the way in; withdrawals are ordinary income. Match the account to the goal before you fall in love with a yield.</p>

    <h2 id="risk">What can still go wrong?</h2>
    <div class="warning-box">
        <strong>Sector concentration.</strong>
        <p>Owning five banks is not the same as owning the whole market. Credit cycles, housing stress and regulatory capital rules can hit the group together.</p>
    </div>
    <p>Dividends can be frozen or cut. Capital ratios can fall when risk-weighted assets rise or earnings weaken. Read the credit quality and PCL (provisions) sections in the same quarterly pack you used for the dividend line.</p>

    <h2 id="example">How would Priya build a comparison sheet?</h2>
    <div class="example-box">
        <strong>Illustrative example: Priya, 48, Mississauga</strong>
        <p>She wants bank dividend exposure but capped at 15% of her equity sleeve.</p>
        <div class="example-calculation">
            <div class="line"><span>Equity sleeve</span><span>$400,000</span></div>
            <div class="line"><span>Max bank sleeve (15%)</span><span>$60,000</span></div>
            <div class="line"><span>Names she tracks</span><span>RBC, TD, BMO (equal weight)</span></div>
            <div class="line total"><span>Quarterly habit</span><span>Update DPS + CET1 from IR PDFs</span></div>
        </div>
        <p>She does not chase the highest quarterly dividend on the table. She watches whether CET1 and earnings support the dividend. Amounts are illustrative.</p>
    </div>

    <h2>Does your province change anything?</h2>
    <p>Bank regulation is federal. Your tax on eligible dividends depends on province. Use the <a href="/blog/dividend-tax-credit-by-province-canada/">DTC by province</a> tables when the shares sit in a non-registered account.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Same fiscal quarter for every bank in the table</li>
        <li>CET1 and dividend per share copied from primary PDFs</li>
        <li>Position size cap written</li>
        <li>Account type chosen (TFSA / RRSP / taxable)</li>
        <li>No buy rating from this article treated as advice</li>
    </ul>


    <h2 id="payout">How to read payout commentary without a yield tip</h2>
    <p>Banks discuss dividend increases, payout ratios and capital return (dividends plus buybacks) in the same quarterly packages as CET1. A rising dividend with a falling CET1 and rising provisions deserves more scrutiny than a flat dividend with a fortress capital ratio. You do not need a price target to notice that pattern.</p>
    <p>Compare each bank to itself over several quarters, not only to peers on one day. Seasonal noise and one-time items show up in earnings. The supplementary packs usually include adjusted metrics—read the footnotes before you celebrate a headline number.</p>
    <p>Preferred shares and limited recourse capital notes are different instruments with different risks. This article's table is about common share dividends only. Do not mix them into the same yield fantasy.</p>

    <h2 id="etf">When a bank ETF is the better tool</h2>
    <p>If you lack time to update five IR PDFs each quarter, a Canadian bank ETF can hold the sector for you. You still have sector concentration. You gain operational simplicity. Check the ETF's MER, top holdings and distribution policy on its fact sheet the same way you would for any dividend product.</p>
    <p>Position sizing still applies. Whether you hold five names or one ETF, decide the maximum percentage of your equity sleeve that can be Canadian banks before you buy.</p>
    <p>Taxable accounts should track adjusted cost base carefully when DRIP is on. See our DRIP guide for ACB mechanics.</p>


    <h2 id="cycle">Credit cycles and why banks move together</h2>
    <p>Canadian banks earn a large share of profits from lending tied to households and businesses. When unemployment rises or housing cools, provisions for credit losses can climb across the group. That is why five bank stocks can fall together even if you felt diversified by ticker count.</p>
    <p>OSFI capital rules force banks to hold buffers precisely because crises are correlated. CET1 is one window into that buffer. It is not a crystal ball. Pair it with the credit quality discussion in the same quarterly report.</p>
    <p>Dividend investors sometimes treat banks like utilities. They are not. They are leveraged financial institutions. Size the sleeve accordingly and avoid borrowing to buy more yield.</p>
    <p>If you use dividends to fund living costs, keep a cash reserve so a temporary price decline does not force a sale at the worst time. Reinvesting dividends while you are still working is a different problem from spending them in retirement—label which phase you are in.</p>
    <p>For tax, remember that eligible dividends are preferential in taxable accounts but irrelevant inside a TFSA. Do not overweight banks in a TFSA just because the dividend "feels" tax-efficient; the TFSA already shelters growth and income.</p>


    <h2 id="mistakes2">Mistakes dividend investors make with banks</h2>
    <ul>
        <li>Chasing the highest quarterly dividend per share without CET1 context</li>
        <li>Confusing dividend per share with dividend yield</li>
        <li>Ignoring sector caps because "banks are safe"</li>
        <li>Buying more after a cut scare without reading the credit note</li>
        <li>Holding five banks plus a Canadian equity ETF without checking overlap</li>
    </ul>
    <p>Each mistake is fixable with a one-page sheet and a calendar reminder after earnings season. The goal is not to predict the next hike. The goal is to avoid being surprised by capital or credit stress that was already visible in the pack.</p>
    <p>If updating five PDFs feels like a second job, switch to a bank ETF and free the attention for saving rate and asset location decisions that usually matter more.</p>
    <p>Business owners who already have bank loans and operating accounts at one institution should be especially careful about concentrating equity ownership at the same name—not because of a legal rule, but because correlated shocks hurt twice.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Which Canadian bank pays the highest dividend?</h3>
    <p>For Q1 2026, BMO's declared dividend per share was $1.67 and RBC's was $1.64 on the reports cited above. That is not the same as the highest yield, which needs the share price. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>What CET1 ratio is "safe"?</h3>
    <p>OSFI sets requirements and buffers for D-SIBs. Compare each bank to its own disclosure and to peers in the same quarter, not to a round number from memory. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Should I own all six banks?</h3>
    <p>Only if the sector weight fits your plan. Many investors use a bank ETF or a smaller subset with a size cap. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Why is National Bank missing?</h3>
    <p>A usable Q1 2026 primary PDF was not retrieved in this pass. Add it from NBC investor relations when you build your own sheet. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Are bank dividends eligible Canadian dividends?</h3>
    <p>Common share dividends from these Canadian banks are typically eligible dividends when paid to residents, but confirm on your T5 and CRA rules for your situation. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Do I need a stock-picking skill to own banks?</h3>
    <p>You need a process: filings, sizing, and account location. A bank ETF can replace individual names if you do not want that process. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Where do I find the next quarter's numbers?</h3>
    <p>Each bank's investor relations site, usually under quarterly results, within days of the earnings release. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>


    <h2 id="together">Putting bank dividends in a full plan</h2>
    <p>Decide the maximum sector weight first. Fill that weight with either a bank ETF or a few common shares you are willing to track quarterly. Update DPS and CET1 from primary PDFs after each earnings season. Ignore tip sheets that skip those documents.</p>
    <p>Match account type to the goal. Taxable accounts can use the dividend tax credit; registered accounts cannot. Spending retirees may prefer taxable eligible dividends only after modelling OAS. Accumulators may prefer total-return equity ETFs instead of a heavy bank bet.</p>
    <p>Reinvest dividends while working unless you need the cash. Turn off DRIP in retirement if you need the cash in a chequing account—just remember to track ACB when DRIP was on. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>Review concentration after every large purchase or inheritance. It is easy for employer stock, bank stocks and Canadian equity ETFs to stack the same risk. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>Keep National Bank and any other name you add on the same quarterly template once you have its IR PDF. Consistency beats completeness on day one. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${RBC}">RBC Q1 2026 Report to Shareholders</a>, reviewed October 24, 2026</li>
        <li><a href="${TD}">TD Q1 2026 Supplementary Financial Information</a>, reviewed October 24, 2026</li>
        <li><a href="${BMO}">BMO Q1 2026 Supplementary Financial Information</a>, reviewed October 24, 2026</li>
        <li><a href="${BNS}">Scotiabank Q1 2026 Supplementary Financial Information</a>, reviewed October 24, 2026</li>
        <li><a href="${CIBC}">CIBC Q1 2026 Report to Shareholders</a>, reviewed October 24, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/dividend-yield-traps-canada/">Dividend yield traps</a></li>
        <li><a href="/blog/dividend-tax-credit-by-province-canada/">Dividend tax credit by province</a></li>
        <li><a href="/blog/position-sizing-stocks-canada/">Position sizing</a></li>
        <li><a href="/blog/canadian-dividend-etfs-compared/">Canadian dividend ETFs compared</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Dividends are only half the story after tax.</strong></p>
        <p>The 2026 tax guide covers the dividend tax credit, OAS interactions and account location.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about published bank figures as of October 24, 2026. Not a recommendation to buy or sell any security. The Priya example is illustrative.", "October 24, 2026")}

</div>`,
  '2026-10-24'
);
