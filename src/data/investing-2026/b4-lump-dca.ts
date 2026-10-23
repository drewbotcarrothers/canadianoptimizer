import { invFooter, invPost } from './types';

const VG_CA = 'https://corporate.vanguard.com/content/dam/corp/research/pdf/cost_averaging_invest_now_or_temporarily_hold_your_cash.pdf';
const CRA_LIMITS = 'https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html';
const CRA_TFSA_ROOM = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/contributing/calculate-room.html';

export const lumpSumVsDollarCostAveragingCanada = invPost(
  'passive-etf',
  'lump-sum-vs-dollar-cost-averaging-canada',
  'Lump Sum vs Dollar-Cost Averaging: What the Data Shows',
  'Invest a windfall all at once or spread it out? What Vanguard found for Canadian stocks since 1985, the cost of waiting, and a plan if you fear a crash.',
  `<div class="container">

    <div class="hook">
        You have $60,000 to invest: an inheritance, a bonus, the sale of a cottage. Put it all in today and the market could drop 20% next month. Spread it over a year and you might miss a rally. Vanguard tested this with Canadian stocks from 1985 to 2022. Investing all at once won <span class="highlight">67.2%</span> of the time.
    </div>

    <p>Investing a lump sum all at once has beaten spreading it out about two-thirds of the time. Vanguard's February 2023 study found that for the S&amp;P/TSX Composite from 1985 to 2022, a lump sum beat a three-month split 67.2% of the time. Waiting usually costs return. Spreading out mainly reduces regret if prices fall right away.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Markets rise more often than they fall, so cash waiting on the sidelines usually misses gains.</li>
            <li>In Vanguard's Canadian data, the longer the averaging period, the more often the lump sum won: 67.2% against a three-month split and 69.7% against a six-month split.</li>
            <li>Cost averaging does help in the worst cases. In Vanguard's global figures, it produced a better result in the bottom 5% of outcomes.</li>
            <li>Regular contributions from your pay are not the same choice. You invest that money when you get it, which is already the lump-sum approach.</li>
            <li>If fear would stop you investing at all, a short, written averaging plan beats keeping the money in cash.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/passive-etf/">Passive and ETF investing</a>, in the <a href="/category/investing/">Investing</a> category. Once the money is in, our <a href="/blog/couch-potato-portfolio-canada/">couch potato guide</a> covers how to hold it, and <a href="/blog/rebalancing-without-tax-events-canada/">rebalancing</a> covers how to keep the mix on target.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#terms">What do lump sum and dollar-cost averaging mean?</a></li>
            <li><a href="#data">What does the research show?</a></li>
            <li><a href="#why">Why does the lump sum usually win?</a></li>
            <li><a href="#when">When does averaging come out ahead?</a></li>
            <li><a href="#paths">How do the two compare on different price paths?</a></li>
            <li><a href="#accounts">Does TFSA or RRSP room change the answer?</a></li>
            <li><a href="#plan">How do you average in if you choose to?</a></li>
            <li><a href="#example">How would Sam invest $60,000?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="terms">What do lump sum and dollar-cost averaging mean?</h2>

    <p><strong>Lump-sum investing</strong> means putting the whole amount into your chosen portfolio as soon as you have it. <strong>Dollar-cost averaging</strong>, which Vanguard calls cost averaging, means splitting the amount into equal parts and investing one part at a time, for example a third each month for three months. The uninvested part waits in cash.</p>

    <p>The question only exists when you already have a lump sum. If you invest $500 from every paycheque, that is not dollar-cost averaging a windfall. You are investing each dollar as soon as you have it, which is the lump-sum approach applied over and over. Keep doing that.</p>

    <p>The decision also assumes the target portfolio is the same either way. The study compares the same investment bought at different speeds. It does not compare stocks with GICs or tell you how much risk to take. Decide your stock and bond mix first; our <a href="/blog/model-etf-portfolios-canada/">model portfolios by risk level</a> can help.</p>

    <h2 id="data">What does the research show?</h2>

    <p><a href="${VG_CA}">Vanguard's paper</a>, "Cost averaging: Invest now or temporarily hold your cash?" (February 2023), compared investing at once with splitting the amount into equal monthly parts. It measured which approach had more money after one year, across rolling periods. For Canada, it used the S&amp;P/TSX Composite Index from 1985 to 2022, in Canadian dollars.</p>

    <div class="table-wrapper">
        <table>
            <caption>How often a lump sum beat cost averaging after one year, by market (Vanguard, February 2023)</caption>
            <thead>
                <tr><th>Market and index</th><th>vs 3-month split</th><th>vs 6-month split</th></tr>
            </thead>
            <tbody>
                <tr class="highlight-row"><td>Canada: S&amp;P/TSX Composite, 1985–2022 (CAD)</td><td>67.2%</td><td>69.7%</td></tr>
                <tr><td>U.S.: Russell 3000, 1979–2022 (USD)</td><td>66.4%</td><td>73.7%</td></tr>
                <tr><td>U.K.: FTSE All-Share, 1986–2022 (GBP)</td><td>68.1%</td><td>69.5%</td></tr>
                <tr><td>Australia: S&amp;P/ASX 300, 1992–2022 (AUD)</td><td>67.5%</td><td>72.5%</td></tr>
                <tr><td>Global: MSCI World, 1976–2022 (USD)</td><td>67.7%</td><td>72.6%</td></tr>
            </tbody>
        </table>
    </div>

    <p>The pattern held everywhere Vanguard looked. In Canada, the lump sum won 67.2% of the time against a three-month plan, 67.9% against four months, 69.3% against five months and 69.7% against six months. The longer you wait, the more often waiting costs you.</p>

    <h2 id="why">Why does the lump sum usually win?</h2>

    <p>Stocks and bonds have usually earned more than cash. Vanguard notes that from 1976 to 2022, U.S. stocks beat three-month Treasury bills 76% of the time and U.S. bonds did so 68% of the time. Every month your money sits in cash during an averaging plan is a month of that extra return given up.</p>

    <p>Vanguard also looked at the size of the gap, not just how often each approach won. It started with $100,000 and used global stock and U.S. bond indexes from 1976 to 2022. Here is what each approach had after one year at the median:</p>

    <div class="chart-container">
        <h3>Median wealth after one year from $100,000 (Vanguard, global data 1976–2022)</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">100% stocks, lump sum: $111,940</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">100% stocks, 3-month averaging: $109,580</div><div class="bar-wrapper"><div class="bar" style="width: 80%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">60/40, lump sum: $109,360</div><div class="bar-wrapper"><div class="bar" style="width: 78%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">60/40, 3-month averaging: $107,453</div><div class="bar-wrapper"><div class="bar" style="width: 62%;"><span></span></div></div></div>
        </div>
        <p>Bars show the gain above $100,000, scaled to the largest gain. Figures are the 50th percentile in Vanguard's Figure 3 (MSCI World and Bloomberg U.S. Aggregate Bond indexes). Past performance does not predict future returns.</p>
    </div>

    <p>The more stocks in the portfolio, the bigger the cost of waiting. At the median, the all-stock lump sum ended about 2.2% ahead. For the 40/60 portfolio, the lead was about 1.2%. Once the averaging period ends, both portfolios hold the same mix, so the one that is ahead at that point tends to stay ahead.</p>

    <h2 id="when">When does averaging come out ahead?</h2>

    <p>When prices fall soon after the lump sum goes in. Vanguard's results show averaging did better in the worst outcomes. For an all-stock portfolio, the 5th-percentile result after one year was $82,947 for the lump sum and $85,906 for three-month averaging. That is the trade: averaging gives up some return most of the time in exchange for a softer landing in a bad year.</p>

    <p>Vanguard also tested what happens if the waiting cash earns interest. Using the three-month Treasury bill as the rate on cash, the lump sum still beat the three-month split 65% of the time for an all-equity portfolio. Earning interest on cash narrows the gap but does not close it.</p>

    <p>The paper's conclusion is that averaging might be considered for investors who strongly dislike both risk and losses and who might otherwise leave the whole amount in cash. That is a behavioural reason, not a return reason. It is a good one if it is true of you.</p>

    <div class="warning-box">
        <strong>The real risk is never investing</strong>
        <p>A plan to "wait for a dip" has no end date. Vanguard's comparison is between investing now and investing within a few months. Holding cash for years while waiting for a crash is a different and usually costlier choice.</p>
    </div>

    <h2 id="paths">How do the two compare on different price paths?</h2>

    <p>A simple illustration shows why averaging wins on a falling path and loses on a rising one. Assume $60,000 into one ETF, either all at once at $100 a unit or $20,000 a month for three months. The ETF price after one year is $110 in every case. Prices are invented to show the mechanics.</p>

    <div class="table-wrapper">
        <table>
            <caption>Illustration: $60,000 lump sum vs three monthly $20,000 purchases (prices invented; our calculations)</caption>
            <thead>
                <tr><th>Price path (months 1, 2, 3)</th><th>Lump sum units</th><th>Averaging units</th><th>Average cost per unit</th><th>Lump sum value at $110</th><th>Averaging value at $110</th></tr>
            </thead>
            <tbody>
                <tr><td>Rising: $100, $104, $108</td><td>600.0</td><td>577.5</td><td>$103.90</td><td>$66,000</td><td>$63,524</td></tr>
                <tr><td>Falling: $100, $92, $85</td><td>600.0</td><td>652.7</td><td>$91.93</td><td>$66,000</td><td>$71,795</td></tr>
                <tr class="highlight-row"><td>Choppy: $100, $90, $105</td><td>600.0</td><td>612.7</td><td>$97.93</td><td>$66,000</td><td>$67,397</td></tr>
            </tbody>
        </table>
    </div>

    <p>Averaging buys more units when prices are low, so it wins whenever prices dip during the plan. The research says the rising path has been the more common one. You cannot know in advance which path you will get.</p>

    <h2 id="accounts">Does TFSA or RRSP room change the answer?</h2>

    <p>Only in where you put the money, not how fast. Fill registered room first if it suits your plan. The <a href="${CRA_LIMITS}">CRA's published limits</a> are $7,000 of new TFSA room for 2026 and an RRSP dollar limit of $33,810 for 2026, which is capped at 18% of your previous year's earned income. Someone who has been eligible for a TFSA since 2009 and never contributed has $109,000 of room in 2026. The <a href="${CRA_TFSA_ROOM}">CRA's room page</a> explains how unused room and withdrawals carry forward.</p>

    <p>Two cautions. Check your actual room in CRA My Account before contributing, because TFSA over-contributions are taxed at 1% a month. And a large RRSP contribution can be deducted in a later year if your income is expected to be higher then. You can invest the money now and choose when to take the deduction.</p>

    <h2 id="plan">How do you average in if you choose to?</h2>

    <div class="flowchart">
        <div class="flow-node decision">Would a 20% drop next month make you sell or stop investing?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">No: invest the lump sum now in your target mix</div>
            <div class="flow-node decision">Yes: can you commit to a fixed schedule in writing?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Yes: equal parts over 3 to 6 months, on set dates, whatever the news</div>
            <div class="flow-node result">No: start with a more conservative mix you can hold, and invest it all now</div>
        </div>
    </div>

    <p>If you average in, do it properly:</p>
    <ol>
        <li><strong>Pick a short period.</strong> Three to six months. The data shows longer plans lose more often.</li>
        <li><strong>Set the dates and amounts now.</strong> For example, $10,000 on the 1st of each month for six months.</li>
        <li><strong>Automate it where you can.</strong> Many brokers offer scheduled purchases. Our planned guide on automating a passive portfolio will compare them.</li>
        <li><strong>Park the waiting cash somewhere that pays.</strong> A high-interest savings account or cash ETF. See <a href="/blog/cash-vs-psa-vs-cbil-hisa-etf/">cash ETFs compared</a>.</li>
        <li><strong>Don't change the plan on the news.</strong> Skipping a purchase because markets look scary is market timing.</li>
    </ol>

    <p>A middle path some investors use is to invest half now and average the rest over three months. It is not in Vanguard's study, so we can't give it a hit rate. It simply puts more money to work sooner while leaving some for a dip.</p>

    <h2 id="example">How would Sam invest $60,000?</h2>

    <div class="example-box">
        <strong>Illustrative example: Sam, 39, Winnipeg</strong>
        <p>Sam has $60,000 in a savings account from the sale of a car and some savings. She has $40,000 of unused TFSA room and wants an 80/20 stock and bond mix in one all-in-one ETF. She is nervous because markets have risen this year.</p>
        <div class="example-calculation">
            <div class="line"><span>TFSA contribution now (room confirmed in My Account)</span><span>$40,000</span></div>
            <div class="line"><span>Non-registered account, remainder</span><span>$20,000</span></div>
            <div class="line"><span>Plan: invest $30,000 now, then $10,000 on the 1st of each of the next three months</span><span>Fully invested in 3 months</span></div>
            <div class="line total"><span>Rule she writes down</span><span>Buy on schedule even if markets fall</span></div>
        </div>
        <p>Sam knows the full lump sum has won more often. She chose a short plan because she believes a sharp fall right after investing everything would push her to sell. Amounts and room are illustrative.</p>
    </div>

    <h2>Does your province change anything?</h2>
    <p>No. Lump sum vs averaging is about timing, and the TFSA and RRSP limits are federal. Your province affects the tax on any interest earned by cash while you wait in a non-registered account, and the value of an RRSP deduction. Quebec residents claim the RRSP deduction on their provincial return too.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Target mix chosen before deciding on timing</li>
        <li>Registered room checked in CRA My Account</li>
        <li>Lump sum invested now, or a written plan of no more than six months</li>
        <li>Purchase dates and amounts fixed in advance</li>
        <li>Waiting cash earning interest</li>
        <li>Regular paycheque contributions kept going as usual</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Is lump sum better than dollar-cost averaging?</h3>
    <p>Usually. In Vanguard's Canadian data from 1985 to 2022, a lump sum beat a three-month split 67.2% of the time after one year. It loses when prices fall soon after investing.</p>

    <h3>Is it a bad time to invest after markets hit a high?</h3>
    <p>Markets often reach new highs during long rises. Nobody can reliably time the next fall. If you are worried, choose a more conservative mix rather than waiting in cash.</p>

    <h3>How long should a dollar-cost averaging plan last?</h3>
    <p>Keep it short. In Vanguard's Canadian figures, the lump sum won 67.2% of the time against three months and 69.7% against six months.</p>

    <h3>Is investing every paycheque dollar-cost averaging?</h3>
    <p>Not in the sense studied here. You invest each paycheque when you receive it. That is already investing as soon as money is available.</p>

    <h3>Does averaging work better with bonds in the mix?</h3>
    <p>The cost of waiting is smaller with more bonds. Vanguard found the median lump-sum lead was about 2.2% for all stocks and 1.2% for a 40/60 mix.</p>

    <h3>Should I put a windfall in my TFSA first?</h3>
    <p>Often, if you have room and the money is long-term. Check your exact room first. Over-contributions are taxed at 1% a month.</p>

    <h3>What if the market crashes right after I invest?</h3>
    <p>Then averaging would have done better that time. Your plan should already cover what you will do: hold, keep contributing and rebalance.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${VG_CA}">Vanguard research: Cost averaging: Invest now or temporarily hold your cash?</a> (February 2023), reviewed October 23, 2026</li>
        <li><a href="${CRA_LIMITS}">CRA: MP, DB, RRSP, DPSP, ALDA, TFSA limits, YMPE and YAMPE</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_TFSA_ROOM}">CRA: Calculate your TFSA contribution room</a>, reviewed October 23, 2026</li>
        <li>Price-path illustration: invented prices and our calculations, as shown</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/couch-potato-portfolio-canada/">Couch potato investing in Canada</a></li>
        <li><a href="/blog/model-etf-portfolios-canada/">Model ETF portfolios by risk level</a></li>
        <li><a href="/blog/tfsa-contribution-optimization/">TFSA contribution strategy</a></li>
        <li><a href="/blog/rrsp-vs-tfsa-vs-fhsa/">RRSP vs TFSA vs FHSA</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Putting a windfall to work? Get the account order right.</strong></p>
        <p>The 2026 tax guide covers TFSA and RRSP room, deduction timing and what to hold where.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about investment timing as of October 23, 2026. Research figures are historical results from Vanguard's February 2023 paper and do not predict future returns. The price-path table uses invented prices. It is not investment or tax advice.")}

</div>`
);
