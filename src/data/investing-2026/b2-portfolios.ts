import { invFooter, invPost } from './types';

const XEQT = 'https://www.blackrock.com/ca/investors/en/products/309480/ishares-core-equity-etf-portfolio';
const XGRO = 'https://www.blackrock.com/ca/investors/en/products/239447/ishares-balanced-growth-coreportfoliotm-fund';
const XBAL = 'https://www.blackrock.com/ca/investors/en/products/239449/ishares-balanced-income-coreportfoliotm-fund';
const XCNS = 'https://www.blackrock.com/ca/investors/en/products/309484/ishares-core-conservative-balanced-etf-portfolio';
const XINC = 'https://www.blackrock.com/ca/investors/en/products/309482/ishares-core-income-balanced-etf-portfolio';
const XINC_FS = 'https://www.blackrock.com/ca/investors/en/literature/fact-sheet/xinc-ishares-core-income-balanced-etf-portfolio-fund-fact-sheet-en-ca.pdf';
const ISHARES_LIST = 'https://www.blackrock.com/ca/investors/en/products/product-list';

export const modelEtfPortfoliosCanada = invPost(
  'passive-etf',
  'model-etf-portfolios-canada',
  'Model ETF Portfolios for Canadians by Risk Level (2026)',
  'Five model ETF portfolios for Canadians, from 20/80 to 100/0 stocks and bonds, with real 2021 to 2025 returns, MERs, and a simple way to pick your risk level.',
  `<div class="container">

    <div class="hook">
        From 2021 to 2025, $10,000 in iShares' all-stock XEQT grew to about <span class="highlight">$18,719, versus $11,297 in the 20%-stock XINC</span> (calculated from BlackRock's calendar-year returns). Yet in 2022 both fell about 11%. The mix you choose decides how much you earn in good years, not whether you avoid bad ones.
    </div>

    <p>A model ETF portfolio for Canadians is one all-in-one fund matched to your risk level: 20/80, 40/60, 60/40, 80/20 or 100/0 stocks to bonds. BlackRock lists MERs of 0.18% to 0.19% for its five iShares versions in October 2026. Choose by your time horizon and how much loss you can sit through.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>iShares' five one-ticket portfolios run from XINC (20% stocks) to XEQT (100% stocks). Each has a 0.17% management fee and an MER of 0.18% to 0.19%, per BlackRock on October 23, 2026.</li>
            <li>Over 2021–2025, the yearly growth rate ranged from 2.47% (XINC) to 13.36% (XEQT), calculated from published calendar returns.</li>
            <li>In 2022, all five lost between 10.93% and 11.19%, because bonds fell with stocks as interest rates rose.</li>
            <li>Building the same mix from three ETFs can cut costs by a few hundredths of a percent, but you must rebalance yourself.</li>
            <li>The right model is the one you will hold through a bad year. Time horizon matters more than age.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/passive-etf/">Passive and ETF Investing</a>, in the <a href="/category/investing/">Investing</a> category. The pillar, <a href="/blog/couch-potato-portfolio-canada/">couch potato investing in Canada</a>, covers accounts, buying and rebalancing. This page is about choosing the mix.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#models">What are the five model portfolios?</a></li>
            <li><a href="#returns">How have they performed?</a></li>
            <li><a href="#choose">Which risk level fits you?</a></li>
            <li><a href="#diy">Can you build them yourself for less?</a></li>
            <li><a href="#maintain">How do you add money and rebalance?</a></li>
            <li><a href="#change">When should you move to a more conservative model?</a></li>
            <li><a href="#examples">What does this look like for real people?</a></li>
            <li><a href="#provinces">Does your province change anything?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="models">What are the five model portfolios?</h2>

    <p>Each model is a fixed split between stocks (growth) and bonds (stability). An all-in-one ETF holds that split for you and rebalances automatically. iShares is used here because it offers all five steps; Vanguard and BMO sell similar ladders, which you can compare on their own fund pages.</p>

    <div class="table-wrapper">
        <table>
            <caption>iShares one-ticket ETF portfolios by risk level: MER and calendar-year returns (%), BlackRock, reviewed October 23, 2026</caption>
            <thead>
                <tr><th>Model</th><th>Stocks / bonds</th><th>MER</th><th>2021</th><th>2022</th><th>2023</th><th>2024</th><th>2025</th></tr>
            </thead>
            <tbody>
                <tr><td><a href="${XINC}">XINC</a> (income)</td><td>20 / 80</td><td>0.18%</td><td>1.97</td><td>-11.14</td><td>8.41</td><td>7.87</td><td>6.61</td></tr>
                <tr><td><a href="${XCNS}">XCNS</a> (conservative)</td><td>40 / 60</td><td>0.18%</td><td>6.57</td><td>-11.19</td><td>10.56</td><td>11.99</td><td>10.25</td></tr>
                <tr><td><a href="${XBAL}">XBAL</a> (balanced)</td><td>60 / 40</td><td>0.18%</td><td>11.06</td><td>-11.08</td><td>12.78</td><td>16.13</td><td>13.33</td></tr>
                <tr class="highlight-row"><td><a href="${XGRO}">XGRO</a> (growth)</td><td>80 / 20</td><td>0.19%</td><td>15.17</td><td>-11.00</td><td>14.92</td><td>20.47</td><td>16.96</td></tr>
                <tr><td><a href="${XEQT}">XEQT</a> (all equity)</td><td>100 / 0</td><td>0.19%</td><td>19.57</td><td>-10.93</td><td>17.05</td><td>24.67</td><td>20.45</td></tr>
            </tbody>
        </table>
    </div>

    <p>Each fund's management fee is 0.17%. BlackRock reduced XINC's from 0.18% on December 18, 2025. Returns are BlackRock's published calendar-year fund returns, in Canadian dollars. Past returns are not a forecast.</p>

    <h2 id="returns">How have they performed?</h2>

    <p>Here is what $10,000 invested on January 1, 2021 would have grown to by December 31, 2025, using the calendar returns above and assuming distributions were reinvested.</p>

    <div class="chart-container">
        <h3>$10,000 invested from 2021 to 2025 (calculated from BlackRock calendar returns)</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">XINC 20/80</div><div class="bar-wrapper"><div class="bar" style="width: 60.4%;"><span>$11,297</span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">XCNS 40/60</div><div class="bar-wrapper"><div class="bar" style="width: 69%;"><span>$12,920</span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">XBAL 60/40</div><div class="bar-wrapper"><div class="bar" style="width: 78.3%;"><span>$14,658</span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">XGRO 80/20</div><div class="bar-wrapper"><div class="bar" style="width: 88.7%;"><span>$16,597</span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">XEQT 100/0</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span>$18,719</span></div></div></div>
        </div>
        <p>Growth of $10,000 = $10,000 × (1 + each year's return), multiplied across 2021–2025. Annualized: XINC 2.47%, XCNS 5.26%, XBAL 7.95%, XGRO 10.66%, XEQT 13.36%. Five strong years for stocks favoured the stock-heavy funds; a different five years could look very different.</p>
    </div>

    <p>2022 is the lesson. All five lost about 11%, because interest rates rose sharply and bonds fell along with stocks. That was unusual. In most years, more bonds means smaller swings in both directions. In 2024, XINC returned 7.87% and XEQT 24.67%. Bonds cost you return in strong years, and they usually, but not always, soften weak ones.</p>

    <h2 id="choose">Which risk level fits you?</h2>

    <p>Two questions settle most cases: when will you need the money, and what would you do if the account dropped sharply?</p>

    <div class="flowchart">
        <div class="flow-node decision">When will you start spending this money?</div>
        <div class="flow-arrow"></div>
        <div class="flow-grid-3">
            <div class="flow-node result">Within 3 years: mostly cash or GICs, not a stock ETF</div>
            <div class="flow-node result">In 3 to 10 years: 20/80 to 60/40 (XINC, XCNS, XBAL)</div>
            <div class="flow-node decision">More than 10 years: could you hold through a 2022-style loss without selling?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Not sure: 60/40 or 80/20 (XBAL, XGRO)</div>
            <div class="flow-node result">Yes, and you would keep buying: 80/20 or 100/0 (XGRO, XEQT)</div>
        </div>
    </div>

    <div class="table-wrapper">
        <table>
            <caption>Matching the model to the money (general guide, not advice)</caption>
            <thead>
                <tr><th>Model</th><th>Often used for</th><th>Range of yearly returns, 2021–2025</th><th>Watch out for</th></tr>
            </thead>
            <tbody>
                <tr><td>20/80</td><td>Money needed in a few years; retirees drawing income</td><td>-11.14% to 8.41%</td><td>Bonds can still fall, as in 2022</td></tr>
                <tr><td>40/60</td><td>Early retirement; a cautious investor</td><td>-11.19% to 11.99%</td><td>Lower long-run growth</td></tr>
                <tr><td>60/40</td><td>A middle path for 5–15 year goals</td><td>-11.08% to 16.13%</td><td>Still a stock-driven fund</td></tr>
                <tr><td>80/20</td><td>Long-term retirement saving</td><td>-11.00% to 20.47%</td><td>Large drops in a stock crash</td></tr>
                <tr><td>100/0</td><td>Decades away, steady contributions, strong stomach</td><td>-10.93% to 24.67%</td><td>Full stock-market falls with no cushion</td></tr>
            </tbody>
        </table>
    </div>

    <p>Five years is a short record. Stock markets have had worse years than 2022, and a 100/0 fund would take the full hit. Choose the mix you would keep holding if your balance fell by a third.</p>

    <h2 id="diy">Can you build them yourself for less?</h2>

    <p>Yes, slightly. Three iShares building blocks have these MERs on the iShares product list as of September 30, 2026: XIC (Canadian stocks) 0.06%, XAW (global stocks outside Canada) 0.22%, and XBB (Canadian bonds) 0.10%. A weighted mix lands close to the one-ticket funds.</p>

    <div class="example-box">
        <strong>Illustrative example: three-ETF versions of each model, cost on $100,000</strong>
        <div class="example-calculation">
            <div class="line"><span>20/80: 5% XIC, 15% XAW, 80% XBB = 0.116%</span><span>$116 vs XINC $180</span></div>
            <div class="line"><span>40/60: 10% XIC, 30% XAW, 60% XBB = 0.132%</span><span>$132 vs XCNS $180</span></div>
            <div class="line"><span>60/40: 15% XIC, 45% XAW, 40% XBB = 0.148%</span><span>$148 vs XBAL $180</span></div>
            <div class="line"><span>80/20: 20% XIC, 60% XAW, 20% XBB = 0.164%</span><span>$164 vs XGRO $190</span></div>
            <div class="line total"><span>100/0: 25% XIC, 75% XAW = 0.180%</span><span>$180 vs XEQT $190</span></div>
        </div>
        <p>Weighted MER = sum of (weight × MER). The 25% Canadian share of the stocks is an assumption for this example, not the exact split inside the iShares funds, and the bond holdings differ too. Savings are $10 to $64 a year on $100,000, before any trading costs.</p>
    </div>

    <p>For most people, the one-ticket fund is worth the small premium: it rebalances itself and removes the temptation to tinker. Building your own makes more sense when you have several accounts and want to place assets carefully. See <a href="/blog/all-in-one-etfs-vs-diy-canada/">all-in-one ETFs versus DIY</a> and <a href="/blog/diy-etf-portfolio-asset-location-canada/">asset location for a DIY portfolio</a>.</p>

    <h2 id="maintain">How do you add money and rebalance?</h2>

    <p>With an all-in-one fund, adding money is the whole job. The fund rebalances internally to its target, so you do not sell one part to buy another. With a three-ETF version, you rebalance yourself.</p>

    <div class="step-section">
        <div class="step"><div class="step-number">1</div><div><div class="step-title">Automate contributions</div><p>Set a transfer from chequing on payday and buy units on a set day. Regular buying removes the timing decision.</p></div></div>
        <div class="step"><div class="step-number">2</div><div><div class="step-title">Use new money to rebalance (DIY only)</div><p>Put each contribution into whichever ETF is furthest below its target. This often avoids selling, and so avoids triggering gains in a taxable account.</p></div></div>
        <div class="step"><div class="step-number">3</div><div><div class="step-title">Check once a year</div><p>If any part has drifted more than about five percentage points from target, sell some of the overweight part and buy the underweight one. Do it in a TFSA or RRSP if you can.</p></div></div>
        <div class="step"><div class="step-number">4</div><div><div class="step-title">Change the model only when your plans change</div><p>A new home purchase date, retirement within ten years, or a real change in how you handled a downturn are reasons. A bad month is not.</p></div></div>
    </div>

    <h2 id="change">When should you move to a more conservative model?</h2>

    <p>When the money's job changes. A common approach is to step down one level as a spending date approaches, for example from 80/20 to 60/40 about ten years before retirement and to 40/60 near the start of withdrawals. Make each step a planned switch, ideally inside a registered account, so the sale does not create a taxable gain. Some people never step below 60/40 because retirement can last 30 years. The right path depends on your pension, other income and spending, which a fee-only planner can help map.</p>

    <h2 id="examples">What does this look like for real people?</h2>

    <div class="example-box">
        <strong>Illustrative example: Daniel, 27, Halifax</strong>
        <p>Daniel puts $400 a month into his TFSA for retirement, more than 30 years away. In 2022 he kept buying while his balance fell, so he chooses an 80/20 mix and holds XGRO. At 0.19%, a $20,000 balance costs about $38 a year. He reviews once a year and does not change the mix after bad news.</p>
    </div>

    <div class="example-box">
        <strong>Illustrative example: Huguette, 66, Sherbrooke</strong>
        <p>Huguette has $300,000 in a RRIF and withdraws about $18,000 a year. She keeps two years of withdrawals in a high-interest savings ETF or GICs and invests the rest in XCNS (40/60). The cash covers withdrawals in a bad year, so she is not forced to sell after a drop. These are illustrations, not recommendations.</p>
    </div>

    <h2 id="provinces">Does your province change anything?</h2>

    <p>The funds, MERs and account rules (TFSA, RRSP, FHSA) are the same across Canada. Province matters in a taxable account, because interest, dividends and capital gains are taxed differently. The Canadian dividend tax credit, in particular, varies a lot by province: see the <a href="/blog/dividend-tax-credit-by-province-canada/">dividend tax credit by province</a>. In Quebec, provincial tax is filed with Revenu Québec, but the funds and the choice of mix are the same.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Time horizon written down for each goal</li>
        <li>Model chosen: 20/80, 40/60, 60/40, 80/20 or 100/0</li>
        <li>One all-in-one fund per goal, or a DIY mix you will rebalance</li>
        <li>Account chosen: TFSA, RRSP, FHSA or taxable</li>
        <li>Automatic contributions set up</li>
        <li>A yearly review date, not a daily check</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>What is the best model ETF portfolio for a beginner in Canada?</h3>
    <p>The one whose risk level you will hold. For long-term savers, an 80/20 or 60/40 all-in-one fund is a common starting point. If you would sell after a big drop, choose a more conservative mix.</p>

    <h3>Is XEQT too risky?</h3>
    <p>It is 100% stocks, so it has no bond cushion. It lost 10.93% in 2022 and can fall much further in a deep bear market. It suits long horizons and investors who keep buying through declines.</p>

    <h3>What did these portfolios do in 2022?</h3>
    <p>They all lost about 11%, from -10.93% (XEQT) to -11.19% (XCNS), per BlackRock. Rising rates hurt bonds as well as stocks.</p>

    <h3>Should my mix change as I get older?</h3>
    <p>Many people move toward more bonds as they get close to spending the money. Change the mix based on when you need the money, not just your age, and do it in planned steps.</p>

    <h3>Can I hold two all-in-one ETFs to get 70/30?</h3>
    <p>Yes. Half XGRO and half XBAL is roughly 70/30. You then have to keep the halves balanced yourself.</p>

    <h3>Do these funds pay distributions?</h3>
    <p>Yes. BlackRock lists XINC with quarterly distributions. In a TFSA or RRSP, reinvest them. In a taxable account, they are taxable each year.</p>

    <h3>Are Vanguard or BMO versions better?</h3>
    <p>They are similar products with similar costs. Compare the current MER and holdings on each provider's fund page. Pick one family and stick with it.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${XEQT}">BlackRock: XEQT</a>, <a href="${XGRO}">XGRO</a>, <a href="${XBAL}">XBAL</a> and <a href="${XCNS}">XCNS</a> product pages: fees and calendar returns, reviewed October 23, 2026</li>
        <li><a href="${XINC}">BlackRock: XINC product page</a> (MER 0.18%, management fee 0.17%) and <a href="${XINC_FS}">XINC fact sheet</a> (September 30, 2026: calendar returns, quarterly distributions), reviewed October 23, 2026</li>
        <li><a href="${ISHARES_LIST}">BlackRock: iShares product list</a> (XIC, XAW and XBB MERs as of September 30, 2026), reviewed October 23, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/couch-potato-portfolio-canada/">Couch potato investing in Canada</a></li>
        <li><a href="/blog/xeqt-vs-veqt-canada/">XEQT vs VEQT</a></li>
        <li><a href="/blog/all-in-one-etfs-vs-diy-canada/">All-in-one ETFs vs DIY</a></li>
        <li><a href="/blog/best-etfs-tfsa-canada/">Best ETFs for a TFSA</a></li>
        <li><a href="/blog/best-robo-advisors-canada/">Best robo-advisors in Canada</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Your mix is set. Now make sure the tax side is too.</strong></p>
        <p>The 2026 tax guide covers investment income, registered accounts and what to report in a taxable account.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about all-in-one ETF portfolios as of October 23, 2026. It is not a recommendation to buy any fund and not investment advice. Returns are historical, from the provider pages listed in Sources, and are not a forecast. Households and DIY mixes are labelled illustrations. Check the current fund facts before you invest.")}

</div>`
);
