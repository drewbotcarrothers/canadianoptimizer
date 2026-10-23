import { invFooter, invPost } from './types';

const XEQT = 'https://www.blackrock.com/ca/investors/en/products/309480/ishares-core-equity-etf-portfolio';
const XGRO = 'https://www.blackrock.com/ca/investors/en/products/239447/ishares-balanced-growth-coreportfoliotm-fund';
const XBAL = 'https://www.blackrock.com/ca/investors/en/products/239449/ishares-balanced-income-coreportfoliotm-fund';
const XCNS = 'https://www.blackrock.com/ca/investors/en/products/309484/ishares-core-conservative-balanced-etf-portfolio';
const CRA_LIMITS = 'https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html';

export const couchPotatoPortfolioCanada = invPost(
  'passive-etf',
  'couch-potato-portfolio-canada',
  'Couch Potato Investing in Canada: The Passive ETF Guide',
  'Couch potato investing in Canada: hold one low-cost all-in-one ETF or a few index ETFs in a TFSA or RRSP, add money on a schedule, and rebalance yearly.',
  `<div class="container">

    <div class="hook">
        In 2022, every iShares one-ticket portfolio lost about 11%, from the all-stock fund to the one that is 60% bonds. <span class="highlight">XEQT fell 10.93%; conservative XCNS fell 11.19%</span> (BlackRock). Passive investing does not dodge bad years. It gives you one cheap fund you can hold through them.
    </div>

    <p>A Canadian couch potato portfolio is one low-cost asset-allocation ETF, or a few index ETFs, held in a TFSA, RRSP, or FHSA and rebalanced about once a year. As of October 2026, BlackRock lists MERs of 0.18% to 0.19% on its four one-ticket portfolios. The mix you can stick with matters more than which fund you pick.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>iShares' four one-ticket portfolios (XEQT, XGRO, XBAL, XCNS) charge a 0.17% management fee. Their MERs are 0.18% to 0.19%. That is $180 to $190 a year on $100,000.</li>
            <li>The mix is the decision. In 2024, the funds returned between 11.99% (40% stocks) and 24.67% (100% stocks). In 2022, all four lost about 11%.</li>
            <li>Building your own portfolio from separate ETFs is not automatically cheaper. An 80/20 mix of XAW and XBB costs about 0.196%, compared with XGRO's 0.19%.</li>
            <li>Use registered room first. The 2026 TFSA limit is $7,000. Total TFSA room since 2009 is $109,000 for someone who was 18 or older and lived in Canada every year since then.</li>
            <li>Write your rebalancing rule down before the next crash, not during it.</li>
        </ul>
    </div>

    <p>This is the pillar for <a href="/category/investing/passive-etf/">Passive ETF Investing</a>, part of the <a href="/category/investing/">Investing</a> category. It covers the whole plan in order: account, mix, fund, contributions, rebalancing, and what to do in a crash. If you have not opened an account yet, start with <a href="/blog/how-to-invest-canada-guide/">how to invest in Canada</a>.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#what-is">What is a couch potato portfolio?</a></li>
            <li><a href="#mix">How much should be in stocks?</a></li>
            <li><a href="#one-fund">One ETF or several?</a></li>
            <li><a href="#accounts">Which account should hold it?</a></li>
            <li><a href="#setup">How do you set it up?</a></li>
            <li><a href="#rebalance">How and when should you rebalance?</a></li>
            <li><a href="#crash">What do you do in a crash?</a></li>
            <li><a href="#mistakes">What mistakes cost passive investors the most?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="what-is">What is a couch potato portfolio?</h2>

    <p>A couch potato portfolio is a passive investing plan. You own the whole market through index funds instead of picking stocks or timing trades. The name comes from how little work it takes once it is set up. In Canada today, the usual version is a single asset-allocation ETF that already holds thousands of stocks and bonds from Canada, the US, and other countries.</p>

    <p>It works for three reasons that do not depend on a forecast:</p>
    <ul>
        <li><strong>Cost.</strong> A fund that charges 0.19% leaves more of the market's return with you than one that charges 2%. The <a href="/blog/mer-drag-index-funds-canada/">MER drag guide</a> shows how that gap compounds.</li>
        <li><strong>Diversification.</strong> BlackRock lists 8,276 underlying holdings for XEQT as of October 22, 2026, held through 5 ETFs. No single company failing can sink it.</li>
        <li><strong>Behaviour.</strong> One fund with one rule leaves fewer chances to panic, chase last year's winner, or forget to rebalance.</li>
    </ul>

    <div class="term">
        <div class="term-name">Asset-allocation ETF (also called an all-in-one ETF)</div>
        <div class="term-def">An exchange-traded fund that holds other ETFs in fixed target weights and rebalances back to them inside the fund. BlackRock calls its range "iShares Core ETF Portfolios." Vanguard, BMO, and others sell similar funds.</div>
    </div>

    <h2 id="mix">How much should be in stocks?</h2>

    <p>Choose the highest stock share you would still hold after a year like 2022. Then go down one step if you are unsure. There is no CRA rule or official percentage. The mix is about how you will behave, so the history of the actual funds is the most useful guide.</p>

    <div class="table-wrapper">
        <table>
            <caption>iShares one-ticket portfolios: mix, cost, and calendar-year returns (%). Source: BlackRock product pages, reviewed October 23, 2026</caption>
            <thead>
                <tr><th>Fund</th><th>Stocks / bonds</th><th>MER</th><th>2021</th><th>2022</th><th>2023</th><th>2024</th><th>2025</th></tr>
            </thead>
            <tbody>
                <tr><td><a href="${XEQT}">XEQT</a></td><td>100 / 0</td><td>0.19%</td><td>19.57</td><td>-10.93</td><td>17.05</td><td>24.67</td><td>20.45</td></tr>
                <tr class="highlight-row"><td><a href="${XGRO}">XGRO</a></td><td>80 / 20</td><td>0.19%</td><td>15.17</td><td>-11.00</td><td>14.92</td><td>20.47</td><td>16.96</td></tr>
                <tr><td><a href="${XBAL}">XBAL</a></td><td>60 / 40</td><td>0.18%</td><td>11.06</td><td>-11.08</td><td>12.78</td><td>16.13</td><td>13.33</td></tr>
                <tr><td><a href="${XCNS}">XCNS</a></td><td>40 / 60</td><td>0.18%</td><td>6.57</td><td>-11.19</td><td>10.56</td><td>11.99</td><td>10.25</td></tr>
            </tbody>
        </table>
    </div>

    <p>Each fund's management fee is 0.17%. BlackRock lowered XEQT's fee from 0.18% on December 18, 2025. Past returns are not a forecast. They show how each mix has behaved in real years.</p>

    <div class="chart-container">
        <h3>2022 calendar-year return by mix (%)</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label">100</div><div class="bar-wrapper"><div class="bar" style="width: 97.6%;"><span>-10.93% XEQT</span></div></div></div>
            <div class="bar-item"><div class="bar-label">80</div><div class="bar-wrapper"><div class="bar" style="width: 98.2%;"><span>-11.00% XGRO</span></div></div></div>
            <div class="bar-item"><div class="bar-label">60</div><div class="bar-wrapper"><div class="bar" style="width: 99%;"><span>-11.08% XBAL</span></div></div></div>
            <div class="bar-item"><div class="bar-label">40</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span>-11.19% XCNS</span></div></div></div>
        </div>
        <p>Labels are the stock percentage. In 2022, stocks and bonds fell together, so more bonds did not soften the loss: every mix lost between 10.93% and 11.19%. Source: BlackRock iShares product pages, calendar-year performance, reviewed October 23, 2026.</p>
    </div>

    <p>2022 was unusual, because rising interest rates hit bonds too. In most years more bonds means smaller swings in both directions: in 2024, XCNS returned 11.99% and XEQT returned 24.67%. Bonds cost you return in good years, and they usually, but not always, help in bad ones.</p>

    <div class="flowchart">
        <div class="flow-node decision">Will you need a large part of this money within 5 years?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Yes: keep that part in a HISA, GIC, or cash ETF, not a stock fund</div>
            <div class="flow-node decision">No: if your balance fell 25% in a year, would you keep contributing?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-grid-3">
            <div class="flow-node result">Yes, easily: 80–100% stocks</div>
            <div class="flow-node result">Probably: 60–80% stocks</div>
            <div class="flow-node result">Not sure: 40–60% stocks</div>
        </div>
    </div>

    <p>The flowchart is a starting point, not a rule. It has two questions: when you need the money, and what you would actually do in a bad year. Money for a home purchase within a few years belongs in the <a href="/blog/hisa-vs-cash-etf-canada/">HISA or cash ETF comparison</a>, not here.</p>

    <h2 id="one-fund">One ETF or several?</h2>

    <p>One fund suits most people who want to be passive. Several funds make sense only if you will rebalance them yourself and want to place each part in the most tax-efficient account. The cost difference is smaller than most people expect.</p>

    <div class="example-box">
        <strong>Illustration: is building your own 80/20 portfolio cheaper than XGRO?</strong>
        <div class="example-calculation">
            <div class="line"><span>80% in XAW (MER 0.22%) = 0.80 × 0.22%</span><span>0.176%</span></div>
            <div class="line"><span>20% in XBB (MER 0.10%) = 0.20 × 0.10%</span><span>0.020%</span></div>
            <div class="line total"><span>Weighted MER of the two-fund version</span><span>0.196%</span></div>
            <div class="line"><span>XGRO, one fund, rebalanced for you</span><span>0.19%</span></div>
        </div>
        <p>MERs are from the iShares product list as of September 30, 2026. This version is not identical to XGRO: XAW holds no Canadian stocks, and XGRO does. It shows that building your own portfolio from separate ETFs does not automatically save money. If you build your own, do it for asset location or control, not to save a few basis points.</p>
    </div>

    <div class="table-wrapper">
        <table>
            <caption>Three ways to run a passive portfolio, as of October 2026</caption>
            <thead>
                <tr><th>Approach</th><th>What you do</th><th>Typical cost</th><th>Choose it when</th></tr>
            </thead>
            <tbody>
                <tr><td>One asset-allocation ETF</td><td>Buy one fund and keep adding to it</td><td>MER 0.18–0.19% (iShares range)</td><td>You want the fewest decisions, and every account can hold the same fund</td></tr>
                <tr><td>2–4 index ETFs</td><td>Choose the weights, place each fund in an account, rebalance yourself</td><td>Weighted MER, often close to the one-fund cost</td><td>Your portfolio is large enough that asset location matters, and you will maintain it</td></tr>
                <tr><td>Robo-advisor</td><td>Deposit money; the robo picks the funds and rebalances</td><td>Management fee (e.g. Questwealth 0.25% under $100,000) plus the ETFs' MERs</td><td>You will not place trades yourself, even once a quarter</td></tr>
            </tbody>
        </table>
    </div>

    <p>The ticker-level comparison is <a href="/blog/xeqt-vs-veqt-canada/">XEQT versus VEQT</a>. The full trade-off between one fund and several is <a href="/blog/all-in-one-etfs-vs-diy-canada/">all-in-one ETFs versus a DIY portfolio</a>. Robo fees are compared in <a href="/blog/robo-advisor-vs-financial-advisor-canada/">robo-advisor versus financial advisor</a>.</p>

    <h2 id="accounts">Which account should hold it?</h2>

    <p>Hold it in registered accounts first: the TFSA, RRSP, and FHSA if you are buying a first home. Use a taxable account only when that room is full. With one fund, you hold the same fund in every account. With several funds, the <a href="/blog/diy-etf-portfolio-asset-location-canada/">asset-location guide</a> shows where each one goes.</p>

    <div class="table-wrapper">
        <table>
            <caption>2026 registered room for a passive investor. Source: CRA limits page, reviewed October 23, 2026</caption>
            <thead>
                <tr><th>Account</th><th>2026 limit</th><th>Why a passive investor uses it</th></tr>
            </thead>
            <tbody>
                <tr><td>TFSA</td><td>$7,000 (total room since 2009: $109,000 if eligible every year)</td><td>Growth and withdrawals are tax-free, and you can withdraw at any time</td></tr>
                <tr><td>RRSP</td><td>18% of last year's earned income, up to $33,810</td><td>You get a deduction now. Withdrawals are taxed later</td></tr>
                <tr><td>FHSA</td><td>$8,000 a year, $40,000 lifetime</td><td>Deductible going in, tax-free out for a qualifying first home</td></tr>
                <tr><td>Non-registered</td><td>No limit</td><td>For money left over after the registered accounts are full. Track your ACB</td></tr>
            </tbody>
        </table>
    </div>

    <div class="chart-container">
        <h3>TFSA dollar limit by year</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label">'09</div><div class="bar-wrapper"><div class="bar" style="width: 50%;"><span>$5,000</span></div></div></div>
            <div class="bar-item"><div class="bar-label">'13</div><div class="bar-wrapper"><div class="bar" style="width: 55%;"><span>$5,500</span></div></div></div>
            <div class="bar-item"><div class="bar-label">'15</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span>$10,000</span></div></div></div>
            <div class="bar-item"><div class="bar-label">'16</div><div class="bar-wrapper"><div class="bar" style="width: 55%;"><span>$5,500</span></div></div></div>
            <div class="bar-item"><div class="bar-label">'19</div><div class="bar-wrapper"><div class="bar" style="width: 60%;"><span>$6,000</span></div></div></div>
            <div class="bar-item"><div class="bar-label">'23</div><div class="bar-wrapper"><div class="bar" style="width: 65%;"><span>$6,500</span></div></div></div>
            <div class="bar-item"><div class="bar-label">'24</div><div class="bar-wrapper"><div class="bar" style="width: 70%;"><span>$7,000</span></div></div></div>
        </div>
        <p>Each bar is the first year a new limit applied: $5,000 for 2009–2012, $5,500 for 2013–2014, $10,000 for 2015, $5,500 for 2016–2018, $6,000 for 2019–2022, $6,500 for 2023, and $7,000 for 2024–2026. Added up, that is $109,000. Source: <a href="${CRA_LIMITS}">CRA, MP, DB, RRSP, DPSP, ALDA, TFSA limits</a>, reviewed October 23, 2026. Your own room is in CRA My Account.</p>
    </div>

    <p>The accounts are federal, so the rules are the same in every province. Your province affects how much the RRSP deduction is worth, because provincial brackets are added to federal ones. Quebec residents file a separate provincial return with Revenu Québec, so the RRSP deduction appears on two returns. The <a href="/blog/rrsp-vs-tfsa-vs-fhsa/">RRSP versus TFSA versus FHSA comparison</a> works through that choice.</p>

    <h2 id="setup">How do you set it up?</h2>

    <p>It takes one evening. After that, the only regular task is the automatic contribution.</p>

    <div class="diagram">
        <div class="diagram-step">1. Check your TFSA, RRSP, and FHSA room in CRA My Account</div>
        <div class="diagram-arrow"></div>
        <div class="diagram-step light">2. Write your mix in one sentence (for example: "80% stocks, 20% bonds, one fund")</div>
        <div class="diagram-arrow"></div>
        <div class="diagram-step">3. Open the account at a discount brokerage that charges no commission on ETF purchases</div>
        <div class="diagram-arrow"></div>
        <div class="diagram-step light">4. Set up an automatic deposit from your chequing account on payday</div>
        <div class="diagram-arrow"></div>
        <div class="diagram-step">5. Buy the fund when the cash arrives. Use a limit order during market hours</div>
        <div class="diagram-arrow"></div>
        <div class="diagram-step light">6. Check once a year and rebalance if your rule says to</div>
    </div>

    <p>Brokerage choice is covered in the <a href="/blog/best-online-brokerages-canada/">brokerage guide</a> and <a href="/blog/wealthsimple-vs-questrade/">Wealthsimple versus Questrade</a>. A Canadian-listed one-fund portfolio never needs a currency conversion, so foreign-exchange fees do not apply.</p>

    <div class="example-box">
        <strong>Illustration: Maya, 31, Halifax, $500 every payday</strong>
        <p>Maya has $14,000 of unused TFSA room and no plans to buy a home. She writes: "XGRO, 80/20, TFSA, $500 every second Friday, rebalancing done inside the fund." Her brokerage moves $500 from chequing each payday, and she buys XGRO units with a limit order the following Monday. At XGRO's 0.19% MER, a $14,000 balance costs about $26.60 a year in fund expenses. She does nothing else until next October. This is an example of a process, not a recommendation for her mix or a forecast of her return.</p>
    </div>

    <h2 id="rebalance">How and when should you rebalance?</h2>

    <p>With a one-fund portfolio, the fund rebalances itself. With your own building blocks, pick one of two rules and write it down: rebalance once a year on a fixed date, or rebalance when any holding drifts more than 5 percentage points from its target. Use new contributions first, so you rarely have to sell.</p>

    <div class="example-box">
        <strong>Illustration: rebalancing after a 25% stock drop</strong>
        <div class="example-calculation">
            <div class="line"><span>Start: $80,000 in stocks + $20,000 in bonds</span><span>$100,000 (80/20)</span></div>
            <div class="line"><span>Stocks fall 25%, bonds flat: $60,000 + $20,000</span><span>$80,000 (75/25)</span></div>
            <div class="line"><span>Target stocks: 80% × $80,000</span><span>$64,000</span></div>
            <div class="line total"><span>Move from bonds to stocks (or add as new money)</span><span>$4,000</span></div>
        </div>
        <p>The arithmetic is exact. The 25% drop is hypothetical. Rebalancing makes you buy stocks after they fall, which is the hardest trade to make in the moment. That is why the rule is written in advance. In a taxable account, selling bonds can trigger a gain. The <a href="/blog/rebalancing-without-tax-events-canada/">tax-aware rebalancing guide</a> shows how to use cash flows instead.</p>
    </div>

    <h2 id="crash">What do you do in a crash?</h2>

    <p>Keep contributing, and rebalance only if your written rule says so. Do not switch to a more conservative fund after the fall. That turns a paper loss into a real one and locks in the lower mix just as prices are lowest. The 2022 numbers above show that even a 40/60 fund fell about 11% in a single year. Every mix has bad years.</p>

    <div class="tip-box">
        <strong>Write this before you need it:</strong> "If my portfolio falls 20% or more, I will keep my automatic deposit running, I will not sell, and I will rebalance on my usual date. I can change my mix only once a year, after a 30-day wait."
    </div>

    <h2 id="mistakes">What mistakes cost passive investors the most?</h2>

    <div class="warning-box">
        <strong>Common mistakes</strong>
        <ul>
            <li><strong>Owning three all-in-one funds.</strong> XEQT, VEQT, and ZEQT together are still one portfolio, just more complicated. Pick one.</li>
            <li><strong>Leaving cash uninvested.</strong> A deposit sitting in your account is not invested until you buy the fund. Check your cash balance.</li>
            <li><strong>Over-contributing to a TFSA.</strong> The CRA charges 1% a month on excess contributions. Check your room in My Account before you deposit, not afterward.</li>
            <li><strong>Chasing last year's winner.</strong> Adding a US-only or tech ETF because it led last year moves you away from your written mix.</li>
            <li><strong>Choosing a bond-heavy fund for money you will not need for 30 years</strong>, or an all-stock fund for a down payment you need in 2 years.</li>
        </ul>
    </div>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Room confirmed in CRA My Account for TFSA, RRSP, and FHSA</li>
        <li>Mix written in one sentence and dated</li>
        <li>One fund chosen, or a weight and account written for each building block</li>
        <li>Automatic deposit set to your pay schedule</li>
        <li>Rebalancing rule and crash rule written down</li>
        <li>A yearly review date in your calendar</li>
    </ul>

    <p>When to get help: if you have a defined-benefit pension, a corporation, or a large RRSP that will be withdrawn in retirement, a fee-only planner or a CPA can test the account order for your situation. A passive portfolio does not replace a tax plan.</p>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Is couch potato investing still good in 2026?</h3>
    <p>The method does not depend on the year. It relies on low costs, broad diversification, and a written mix, not on a forecast. What changes is the price of the funds. As of October 23, 2026, the iShares one-ticket portfolios list MERs of 0.18% to 0.19%.</p>

    <h3>What is the best all-in-one ETF in Canada?</h3>
    <p>The one whose stock-and-bond mix you will hold. Among the large providers, the differences in fees and holdings are small. Pick the mix first, then compare the fund pages. The ticker comparison is <a href="/blog/xeqt-vs-veqt-canada/">XEQT versus VEQT</a>.</p>

    <h3>Can I hold XEQT in a TFSA?</h3>
    <p>Yes. Canadian-listed ETFs are qualified investments for a TFSA. Foreign tax withheld on dividends from the fund's non-Canadian holdings cannot be recovered in a TFSA. On a broad fund, that cost is small, and the tax-free growth usually outweighs it.</p>

    <h3>How often should I rebalance?</h3>
    <p>With one all-in-one fund, the fund does it for you. With several funds, once a year or when any holding drifts more than 5 percentage points from target. Use new contributions first.</p>

    <h3>Should I wait for a dip before buying?</h3>
    <p>A schedule beats a guess, because you cannot know where the bottom is. If you have a lump sum and investing it all at once feels too risky, split it over a few months on fixed dates and write the dates down.</p>

    <h3>How much do I need to start?</h3>
    <p>The price of one unit, or less at a brokerage that offers fractional shares. Low minimums make a monthly habit possible. The habit matters more than the starting amount.</p>

    <h3>Is a couch potato portfolio safe?</h3>
    <p>It is diversified, not guaranteed. Every mix iShares sells lost about 11% in 2022. Money you need within a few years belongs in a HISA or GIC instead.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${XEQT}">BlackRock: iShares Core Equity ETF Portfolio (XEQT)</a>: fees, holdings, calendar returns, reviewed October 23, 2026</li>
        <li><a href="${XGRO}">BlackRock: XGRO</a>, <a href="${XBAL}">XBAL</a>, and <a href="${XCNS}">XCNS</a>: fees and calendar returns, reviewed October 23, 2026</li>
        <li><a href="https://www.blackrock.com/ca/investors/en/products/product-list">BlackRock: iShares product list</a>: MERs for XAW and XBB as of September 30, 2026, reviewed October 23, 2026</li>
        <li><a href="${CRA_LIMITS}">CRA: TFSA, RRSP, and other limits</a>, reviewed October 23, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account/contributing-your-fhsa.html">CRA: Participating in your FHSAs</a>, reviewed October 23, 2026</li>
        <li><a href="https://www.questrade.com/questwealth-portfolios">Questrade: Questwealth Portfolios fees</a>, reviewed October 23, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/all-in-one-etfs-vs-diy-canada/">All-in-one ETFs versus a DIY portfolio</a></li>
        <li><a href="/blog/diy-etf-portfolio-asset-location-canada/">DIY ETF portfolio and asset location</a></li>
        <li><a href="/blog/rebalancing-without-tax-events-canada/">Rebalancing without tax events</a></li>
        <li><a href="/blog/best-etfs-tfsa-canada/">Best ETFs for a TFSA</a></li>
        <li><a href="/blog/mer-drag-index-funds-canada/">MER drag on index funds</a></li>
        <li><a href="/blog/dividend-investing-canada/">Dividend investing in Canada</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The fund is the easy part. Account placement is where tax is saved.</strong></p>
        <p>The 2026 tax guide covers TFSA and RRSP decisions from the filing side.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter('General education about passive investing in Canada as of October 23, 2026. It is not a recommendation to buy, sell, or hold any security, and not investment or tax advice. Fund fees and returns are from BlackRock pages on the date shown in Sources; past returns are not a forecast. Dollar examples are labelled illustrations of arithmetic. Confirm the current fund page and your CRA room before you act, and consult a registered adviser or tax professional for your own situation.')}

</div>`
);
