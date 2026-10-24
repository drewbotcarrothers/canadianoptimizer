import { invFooter, invPost } from './types';

const VBAL = 'https://fund-docs.vanguard.com/VBAL_Balanced_ETF_Portfolio_9578_FS_EN_CA.pdf';
const CIRO = 'https://www.ciro.ca/office-investor/investing-basics/understanding-investment-performance-returns';
const GSAM = 'https://www.getsmarteraboutmoney.ca/learning-path/investing-basics/what-is-risk/';

export const stayTheCourseBalancedPortfoliosCanada = invPost(
  'passive-etf',
  'stay-the-course-balanced-portfolios-canada',
  'Stay the Course: What Balanced Portfolios Did in Crashes',
  "VBAL's 2022 NAV return was -11.45% on the Vanguard fact sheet. How the next years recovered, and how to write a stay-invested rule before the next crash.",
  `<div class="container">

    <div class="hook">
        In 2022, a popular Canadian balanced ETF fell <span class="highlight">11.45%</span> on a net asset value basis. Many investors sold after that year. The next three calendar years on the same fact sheet were all positive. The hard part is deciding the rule before the year that hurts.
    </div>

    <p>Vanguard's VBAL fact sheet, with calendar returns as of December 31, 2025, shows a 2022 NAV return of -11.45%, then +12.69% in 2023, +15.63% in 2024 and +13.35% in 2025. Selling after 2022 locked in the loss and skipped the recovery. A written stay-invested rule is how you avoid making that decision under stress.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>VBAL's inception date is January 25, 2018, so it has no 2008 calendar return. Use current fund fact sheets for the years they actually cover.</li>
            <li>On the December 31, 2025 fact sheet, VBAL's only negative calendar year among 2021–2025 was 2022 at -11.45% NAV.</li>
            <li>The same sheet shows MER 0.22% (as of March 31, 2026) and a roughly 60/40 mix of equity and bond underlying funds.</li>
            <li>CIRO's investor page on returns stresses time horizon and monitoring. Your annual report uses a money-weighted rate of return, not the fund's calendar return.</li>
            <li>Write a "down 20%" script before you need it: what you will sell, what you will buy, and who you will call.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/passive-etf/">Passive and ETF investing</a>, in the <a href="/category/investing/">Investing</a> category. For portfolio construction, see <a href="/blog/couch-potato-portfolio-canada/">Couch Potato investing</a> and <a href="/blog/model-etf-portfolios-canada/">model ETF portfolios by risk level</a>.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#numbers">What did a Canadian balanced ETF actually return?</a></li>
            <li><a href="#why">Why do people sell after a bad year?</a></li>
            <li><a href="#rule">How do you write a stay-invested rule?</a></li>
            <li><a href="#compare">How should you read your own return?</a></li>
            <li><a href="#example">What would the Patels have done in 2022?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="numbers">What did a Canadian balanced ETF actually return?</h2>

    <p>All-in-one asset allocation ETFs are the cleanest published proxy for a Canadian balanced portfolio today. Vanguard Balanced ETF Portfolio (VBAL) targets a balanced mix through underlying Vanguard ETFs. The fact sheet lists Canadian and global equity funds alongside Canadian and hedged global bond funds.</p>

    <div class="table-wrapper">
        <table>
            <caption>VBAL year-end NAV calendar returns (Vanguard fact sheet as of December 31, 2025)</caption>
            <thead>
                <tr><th>Calendar year</th><th>NAV return (net of expenses)</th></tr>
            </thead>
            <tbody>
                <tr><td>2021</td><td>10.29%</td></tr>
                <tr class="highlight-row"><td>2022</td><td>-11.45%</td></tr>
                <tr><td>2023</td><td>12.69%</td></tr>
                <tr><td>2024</td><td>15.63%</td></tr>
                <tr><td>2025</td><td>13.35%</td></tr>
            </tbody>
        </table>
    </div>

    <p>The same sheet reports MER 0.22% as of March 31, 2026, and an inception date of January 25, 2018. That means VBAL cannot answer "what happened in 2008." Older mutual funds and index series can, but each source must be quoted on its own page. Do not paste a round "% crash" from memory.</p>

    <div class="chart-container">
        <p class="chart-title">VBAL calendar NAV returns, 2021–2025 (fact sheet)</p>
        <div class="bar-chart">
            <div class="bar-group"><div class="bar" style="height:62%"></div><span class="bar-label">2021<br>10.3%</span></div>
            <div class="bar-group"><div class="bar negative" style="height:69%"></div><span class="bar-label">2022<br>-11.5%</span></div>
            <div class="bar-group"><div class="bar" style="height:76%"></div><span class="bar-label">2023<br>12.7%</span></div>
            <div class="bar-group"><div class="bar" style="height:94%"></div><span class="bar-label">2024<br>15.6%</span></div>
            <div class="bar-group"><div class="bar" style="height:80%"></div><span class="bar-label">2025<br>13.4%</span></div>
        </div>
        <p class="chart-source">Source: Vanguard VBAL fund fact sheet, calendar NAV returns as of December 31, 2025. Chart heights are illustrative of the published percentages.</p>
    </div>

    <h2 id="why">Why do people sell after a bad year?</h2>

    <p>A calendar loss is painful because statements arrive once a year and social media amplifies the year that hurt. Selling after 2022 turned a paper loss into a realized one and removed the chance to own the 2023–2025 years on the same sheet. <a href="${CIRO}">CIRO's page on investment performance</a> notes that short-term investments are more affected by temporary swings, and that time horizon matters.</p>

    <p>Balanced portfolios are built so the bond sleeve can cushion equity declines. They are not built to avoid every negative year. In 2022, both stocks and bonds fell in many markets, which is why a 60/40 still lost money. That does not mean the design failed forever. It means one calendar year is a weak reason to abandon a decades-long plan.</p>

    <h2 id="rule">How do you write a stay-invested rule?</h2>

    <p>Decide the rule on a calm day. Put it somewhere you will find it when markets are ugly.</p>

    <div class="flowchart">
        <div class="flow-node decision">Is the money needed in under three years?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Yes: keep it in cash, HISA or short GICs, not a balanced ETF</div>
            <div class="flow-node decision">No: did the portfolio fall more than your written band (for example 20%)?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">No: do nothing except the usual contribution</div>
            <div class="flow-node result">Yes: rebalance to target; do not abandon the equity sleeve</div>
        </div>
    </div>

    <ul class="checklist">
        <li>Target mix written (for example 60/40)</li>
        <li>Rebalance band written (for example ±5 percentage points)</li>
        <li>"I will not sell the equity sleeve after a calendar loss" written</li>
        <li>Cash buffer for near-term spending kept outside the portfolio</li>
        <li>One person named to call before any panic trade</li>
    </ul>

    <h2 id="compare">How should you read your own return?</h2>

    <p>Fund fact sheets show time-weighted style calendar returns for the product. Your brokerage's annual performance report, under CIRO rules, uses a <strong>money-weighted</strong> rate of return that includes the timing of your deposits and withdrawals. Those two numbers will not match. Comparing your personal return to VBAL's 2022 figure without adjusting for cash flows is not a fair test of whether you "beat" the fund.</p>

    <p>For how to read the annual report properly, see <a href="/blog/beating-the-index-portfolio-return-canada/">are you beating the index</a> in this batch.</p>

    <h2 id="example">What would the Patels have done in 2022?</h2>

    <div class="example-box">
        <strong>Illustrative example: the Patels, age 42, Calgary</strong>
        <p>They held $200,000 in a balanced ETF at the start of 2022. Their written rule said: rebalance yearly, never abandon equities after a calendar loss, keep two years of planned spending in a HISA.</p>
        <div class="example-calculation">
            <div class="line"><span>Starting value (illustrative)</span><span>$200,000</span></div>
            <div class="line"><span>If 2022 matched VBAL's -11.45% NAV</span><span>About $177,100</span></div>
            <div class="line"><span>Action under their rule</span><span>Rebalance; keep contributing</span></div>
            <div class="line total"><span>What they did not do</span><span>Sell everything in January 2023</span></div>
        </div>
        <p>The dollar path after 2022 depends on their exact fund, fees and cash flows. The point of the example is the rule, not a prediction. Amounts are illustrative.</p>
    </div>

    <h2>Does your province change anything?</h2>
    <p>Market returns do not change by province. Tax on selling in a non-registered account does. A panic sale in a taxable account can create a capital gain or loss you did not plan for. Registered accounts (TFSA, RRSP) avoid that friction, which is one reason many Canadians keep long-term balanced ETFs inside them.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Fact sheet for your fund saved with the review date</li>
        <li>Stay-invested rule written and dated</li>
        <li>Near-term cash needs separated from the portfolio</li>
        <li>Contribution plan automated where possible</li>
        <li>Annual review date booked (not "when markets look scary")</li>
    </ul>


    <h2 id="history">Why 2008 is hard to quote from today's all-in-ones</h2>
    <p>Canadian asset-allocation ETFs such as VBAL did not exist in 2008. The Vanguard fact sheet lists an inception date of January 25, 2018. Anyone quoting a precise "balanced ETF" calendar return for 2008 is either using a different product, an index blend they built themselves, or a secondary database. This article sticks to the fact sheet years.</p>
    <p>That does not mean 2008 is irrelevant. Equity markets fell hard worldwide. Bond sleeves and cash buffers mattered. The lesson that transfers is behavioural: investors who abandoned equities near the bottom waited years to return. Write the rule now so you are not improvising then.</p>
    <p>If you need a longer history for a committee or a spouse conversation, pull calendar returns from a specific mutual fund or index fact sheet that actually covers 2008, label the source, and do not pretend it is VBAL. Mixing products without labels is how myths start.</p>

    <h2 id="buffer">How large should the cash buffer be?</h2>
    <p>A stay-invested rule works only if you will not be forced to sell equities for groceries. Many households keep one to three years of planned portfolio withdrawals in a HISA, cash ETF or short GIC ladder. The exact number depends on job stability and other income. The buffer is not meant to time the market. It is meant to buy you the right to ignore a calendar loss.</p>
    <p>Couples should agree on the buffer in writing. One partner's risk tolerance often drives panic sales. A joint rule plus a named "call before trading" person reduces that risk.</p>
    <p>Rebalancing after a drop—selling a bit of what held up to buy what fell—can feel backwards. It is how a written 60/40 stays 60/40. Use new contributions first when you can, so you avoid unnecessary taxable sales.</p>


    <h2 id="script">A sample stay-invested script you can copy</h2>
    <p>Paste this into a note and edit the brackets. Sign and date it with your partner if you invest jointly.</p>
    <div class="tip-box">
        <strong>Sample script</strong>
        <p>"Our long-term portfolio target is [60/40]. We will rebalance when any sleeve is more than [5] percentage points off target. We will not sell the equity sleeve solely because of a calendar-year loss. Money we need within [24] months sits in [HISA/GIC ladder], not in this portfolio. Before any panic trade, we call [name]. We review this rule every [January]."</p>
    </div>
    <p>The script is useless if you keep near-term spending inside the equity sleeve. Fund the buffer first. Automate contributions so a bad headline does not also stop your buying.</p>
    <p>After a large market drop, expect relatives and coworkers to share stories about people who "got out in time." Your fact sheet history is a better teacher than those stories. VBAL's published path through 2022 and the following positive years is one such teacher for balanced investors who held the product.</p>
    <p>If you use an advisor, ask them to write the stay-invested rule into your IPS or meeting notes. If they encourage market timing as a service, that is a different product than passive balanced investing—price it honestly.</p>
    <p>Finally, rehearse the emotion. On a calm day, look at a -11% illustration on a $200,000 portfolio (about a $22,000 paper decline) and decide whether your buffer and income can absorb watching that number without selling. If not, lower equity exposure now, not during the crash.</p>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>What was VBAL's return in 2022?</h3>
    <p>The Vanguard fact sheet with calendar returns as of December 31, 2025 shows a 2022 NAV return of -11.45%.</p>

    <h3>Did VBAL exist in 2008?</h3>
    <p>No. The fact sheet lists an inception date of January 25, 2018.</p>

    <h3>Is a balanced ETF safe in a crash?</h3>
    <p>No. It can still lose money in a calendar year, as 2022 shows. The bond sleeve is meant to cushion, not eliminate, losses.</p>

    <h3>Should I sell after a -10% year?</h3>
    <p>Not if the money is long-term and your written rule says to stay invested. Selling after the loss is how you miss the recovery years on the same sheet.</p>

    <h3>What MER does VBAL show?</h3>
    <p>0.22% as of March 31, 2026 on the fact sheet used for this article.</p>

    <h3>How is my brokerage return different from the fact sheet?</h3>
    <p>Your annual report uses a money-weighted return that includes your deposits and withdrawals. The fact sheet does not.</p>

    <h3>What about XBAL or other balanced ETFs?</h3>
    <p>Use each issuer's own fact sheet for calendar returns. Do not assume VBAL's years apply to another ticker.</p>


    <h2 id="together">Putting the stay-invested plan together</h2>
    <p>Start with the fact sheet for the fund you actually own. Write down the worst calendar year on that sheet and the recovery years that followed when available. Translate that percentage into dollars on your current balance so the pain is concrete. Fund a cash buffer sized to your spending. Write the stay-invested script with your partner. Automate contributions. Book a calm annual review date that is not tied to headlines.</p>
    <p>If you cannot tolerate a repeat of that worst year in dollar terms, reduce equity exposure now while markets are open and liquidity is normal. Do not wait for the next crash to discover your true risk tolerance. A lower equity target you can hold beats a higher target you abandon.</p>
    <p>Teachers, pension members and business owners should map other income sources before panicking about portfolio declines. A stable pension can justify more equity in the investable portfolio—or less, if the pension is already equity-like. The point is integration, not copying a stranger's 60/40.</p>
    <p>Keep the Vanguard VBAL calendar table handy as one historical example, not as a promise. Your fund's sheet is the primary document. Review it when the issuer updates calendar returns each year.</p>
    <p>When friends ask what you did in the last crash, answer with your rule, not with a prediction about the next one. Predictions expire. Rules compound.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${VBAL}">Vanguard: VBAL Balanced ETF Portfolio fund fact sheet</a> (calendar NAV returns as of December 31, 2025; MER as of March 31, 2026), reviewed October 24, 2026</li>
        <li><a href="${CIRO}">CIRO: Understanding investment performance / returns</a>, reviewed October 24, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/couch-potato-portfolio-canada/">Couch Potato investing in Canada</a></li>
        <li><a href="/blog/model-etf-portfolios-canada/">Model ETF portfolios by risk level</a></li>
        <li><a href="/blog/lump-sum-vs-dollar-cost-averaging-canada/">Lump sum vs dollar-cost averaging</a></li>
        <li><a href="/blog/beating-the-index-portfolio-return-canada/">Are you beating the index?</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Want the tax side of staying invested?</strong></p>
        <p>The 2026 tax guide covers TFSA and RRSP strategy, capital gains and how account choice changes what a crash costs you on paper.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about historical fund returns as of October 24, 2026. Past performance is not a guarantee of future results. The Patel example is illustrative. This is not investment advice.", "October 24, 2026")}

</div>`,
  '2026-10-24'
);
