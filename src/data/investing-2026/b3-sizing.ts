import { invFooter, invPost } from './types';

const GSAM_DIV = 'https://www.getsmarteraboutmoney.ca/learning-path/understanding-risk/diversification/';
const CRA_LOSS = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/capital-losses-deductions.html';
const CRA_T4037 = 'https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4037/capital-gains.html';
const CRA_TFSA_ROOM = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/contributing/calculate-room.html';

export const positionSizingStocksCanada = invPost(
  'stock-picking',
  'position-sizing-stocks-canada',
  'Position Sizing: How Much of Your Portfolio in One Stock?',
  'How big should one stock be in your portfolio? The math of losses at 2%, 5%, 10% and 25% weights, simple sizing rules, and how to trim tax-smart in Canada.',
  `<div class="container">

    <div class="hook">
        Picking a good company is half the job. The other half is deciding how much to own. If one stock is 25% of your portfolio and it halves, you lose <span class="highlight">12.5% of everything</span>, and you need a 14.3% gain on the rest just to get back to where you were. At 5%, the same disaster costs you 2.5%.
    </div>

    <p>There is no official limit, but a common rule of thumb is to start any single stock at about 5% or less of your portfolio and trim if it passes 10%. The maths shows why: a 50% fall in a 5% holding costs 2.5% of the portfolio. GetSmarterAboutMoney.ca (OSC, 2026) adds that diversification reduces, but cannot eliminate, risk.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Your worst-case loss from one stock is its weight in your portfolio. A 5% position that goes to zero costs 5%.</li>
            <li>Losses compound against you: a 50% portfolio loss needs a 100% gain to recover.</li>
            <li>Owning two banks is not two bets. GetSmarterAboutMoney.ca says stocks in the same industry tend to move together.</li>
            <li>Set a size limit at purchase and a trim trigger, and write both down before you buy.</li>
            <li>Trim in a TFSA or RRSP first where you can. Trimming in a taxable account triggers capital gains, half of which is taxable.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/stock-picking/">Stock Picking</a>, in the <a href="/category/investing/">Investing</a> category. The pillar on <a href="/blog/how-to-pick-stocks-canada/">how to pick stocks in Canada</a> covers choosing companies. This page covers how much to buy, which matters as much for your outcome.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#math">How much can one stock hurt you?</a></li>
            <li><a href="#rules">What sizing rules do investors use?</a></li>
            <li><a href="#sector">Does owning several banks count as diversified?</a></li>
            <li><a href="#employer">What about employer stock?</a></li>
            <li><a href="#trim">When and how should you trim a winner?</a></li>
            <li><a href="#average">Should you average down when a stock falls?</a></li>
            <li><a href="#accounts">Does the account matter?</a></li>
            <li><a href="#example">How would Marc trim a 30% position?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="math">How much can one stock hurt you?</h2>

    <p>A position's weight is its share of your total investments. If it falls by some percentage, your portfolio falls by the weight times that percentage. Here is a $100,000 portfolio where one stock drops 50% and everything else stays flat:</p>

    <div class="table-wrapper">
        <table>
            <caption>One stock falls 50%: effect on a $100,000 portfolio (our calculations)</caption>
            <thead>
                <tr><th>Position weight</th><th>Position value</th><th>Dollar loss</th><th>Portfolio loss</th><th>Gain needed on what is left to recover</th></tr>
            </thead>
            <tbody>
                <tr><td>2%</td><td>$2,000</td><td>$1,000</td><td>1.0%</td><td>1.01%</td></tr>
                <tr class="highlight-row"><td>5%</td><td>$5,000</td><td>$2,500</td><td>2.5%</td><td>2.56%</td></tr>
                <tr><td>10%</td><td>$10,000</td><td>$5,000</td><td>5.0%</td><td>5.26%</td></tr>
                <tr><td>25%</td><td>$25,000</td><td>$12,500</td><td>12.5%</td><td>14.29%</td></tr>
            </tbody>
        </table>
    </div>

    <div class="chart-container">
        <h3>Portfolio loss when one stock falls 50%, by position weight ($100,000 portfolio)</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">2% position: lose $1,000</div><div class="bar-wrapper"><div class="bar" style="width: 8%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">5% position: lose $2,500</div><div class="bar-wrapper"><div class="bar" style="width: 20%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">10% position: lose $5,000</div><div class="bar-wrapper"><div class="bar" style="width: 40%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">25% position: lose $12,500</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span></span></div></div></div>
        </div>
        <p>The recovery figure is the loss divided by what remains. Losing 12.5% leaves 87.5%, and 12.5 ÷ 87.5 is 14.29%. At the extreme, a 50% loss needs a 100% gain.</p>
    </div>

    <p>Individual stocks can fall far more than 50%, and some go to zero. A broad index fund cannot realistically go to zero, because hundreds of companies would all have to fail. That difference is why position size is the main risk control for anyone who picks stocks.</p>

    <h2 id="rules">What sizing rules do investors use?</h2>

    <p>There is no regulatory limit on how much of one stock an individual can own in their own account. These are common rules of thumb. Pick one and apply it consistently.</p>

    <div class="table-wrapper">
        <table>
            <caption>Four common position sizing approaches (rules of thumb, not regulations)</caption>
            <thead>
                <tr><th>Approach</th><th>How it works</th><th>Good for</th><th>Watch out for</th></tr>
            </thead>
            <tbody>
                <tr><td>Equal weight</td><td>Divide by the number of stocks: 20 stocks at 5% each</td><td>Simple, no favourites</td><td>Treats a utility and a junior miner as equal risks</td></tr>
                <tr class="highlight-row"><td>Cap at purchase, trim trigger</td><td>Buy no more than 5%; trim back if it passes 10%</td><td>Letting winners run without one taking over</td><td>Taxes when trimming in a taxable account</td></tr>
                <tr><td>Core and satellite</td><td>Broad ETFs as the core (say 80% or more); stocks in the rest</td><td>Investors who want to pick a few stocks without betting the plan</td><td>Satellite creep, as the stock portion grows</td></tr>
                <tr><td>Risk budget</td><td>Size so a plausible bad drop costs a set share, such as 1% of the portfolio</td><td>Mixing steady and volatile stocks</td><td>Needs an honest estimate of the bad drop</td></tr>
            </tbody>
        </table>
    </div>

    <div class="example-box">
        <strong>Risk budget example (illustrative)</strong>
        <div class="example-calculation">
            <div class="line"><span>Portfolio</span><span>$100,000</span></div>
            <div class="line"><span>Risk budget per stock (1%)</span><span>$1,000</span></div>
            <div class="line"><span>Steady dividend payer, plausible bad drop 25%</span><span>$1,000 ÷ 25% = $4,000</span></div>
            <div class="line"><span>Volatile small-cap, plausible bad drop 60%</span><span>$1,000 ÷ 60% = about $1,667</span></div>
        </div>
        <p>The riskier stock gets a smaller position, so either one going wrong costs about the same. The drop estimates are judgements, not forecasts.</p>
    </div>

    <h2 id="sector">Does owning several banks count as diversified?</h2>

    <p>No. GetSmarterAboutMoney.ca, the investor education site run by the Ontario Securities Commission, uses this exact example in its <a href="${GSAM_DIV}">diversification guide</a>. If you own one bank and add another, "you have not changed the industry diversification of your portfolio", because when one bank's shares drop, other banks' shares are likely to drop too. It also notes that a portfolio focused only on Canada can become over-weighted in resources and financials.</p>

    <p>So apply a second limit by sector. A common approach is to cap any one sector at a set share of your stock picks, perhaps 25% to 30%, and to count overlap with ETFs you own. If you hold a Canadian index ETF, you already own every big bank inside it.</p>

    <p>Even good diversification has limits. The same guide says diversification "becomes less effective in extreme market conditions" such as the 2008 financial crisis and the 2020 pandemic crash, when most investments fall together. Position sizing limits the damage from one company failing. It does not protect you from the whole market falling.</p>

    <h2 id="employer">What about employer stock?</h2>

    <p>Employer shares from a stock purchase plan or options are the most common oversized position. They double up your risk: if the company struggles, your shares and your job can both suffer at once. Many investors treat employer stock as part of their single-stock limit, and sell plan shares regularly to stay under it. Selling shares from a plan has its own tax rules, including the employee security option rules in CRA guide <a href="${CRA_T4037}">T4037</a>. Check your plan's terms and any blackout periods.</p>

    <h2 id="trim">When and how should you trim a winner?</h2>

    <div class="flowchart">
        <div class="flow-node decision">Has one stock grown past your trim trigger (for example 10%)?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">No: leave it; review again next quarter</div>
            <div class="flow-node decision">Yes: is it held in a TFSA or RRSP?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Registered: trim back to target; no tax on the sale</div>
            <div class="flow-node result">Taxable: direct new money elsewhere first, then trim in stages across tax years</div>
        </div>
    </div>

    <p>Trimming does not mean you think the stock is bad. It means one company now carries more of your future than you planned. The steps:</p>

    <div class="step-section">
        <div class="step"><div class="step-number">1</div><div><div class="step-title">Write limits down before buying</div><p>A target weight, a maximum, and what you will do when the maximum is passed.</p></div></div>
        <div class="step"><div class="step-number">2</div><div><div class="step-title">Check weights on a schedule</div><p>Quarterly or twice a year, not daily.</p></div></div>
        <div class="step"><div class="step-number">3</div><div><div class="step-title">Use new contributions first</div><p>Buying other holdings shrinks the big one's weight without a sale.</p></div></div>
        <div class="step"><div class="step-number">4</div><div><div class="step-title">Sell inside registered accounts first</div><p>No capital gain is reported on sales inside a TFSA or RRSP.</p></div></div>
        <div class="step"><div class="step-number">5</div><div><div class="step-title">Spread taxable sales over years</div><p>Splitting a large gain across two tax years can keep more of it in a lower bracket.</p></div></div>
        <div class="step"><div class="step-number">6</div><div><div class="step-title">Record the ACB of what is left</div><p>Selling part of a position does not change the average cost per share of the rest. See <a href="/blog/t5008-slip-cost-base-canada/">the T5008 and your cost base</a>.</p></div></div>
    </div>

    <h2 id="average">Should you average down when a stock falls?</h2>

    <p>Buying more of a stock after it drops lowers your average cost, but it also raises the share of your portfolio riding on one company that the market has just marked down. Sometimes the fall is noise. Sometimes it is the first sign of a real problem. Your size limit should decide, not the price. A simple test: if you would not buy this stock at today's price with fresh money and no existing position, do not add to it. If you would, add only up to your maximum weight, counting the shares you already own. Reread the latest MD&amp;A and any material change report before adding. See <a href="/blog/sedar-plus-company-filings-canada/">how to read SEDAR+ filings</a>.</p>

    <h2 id="small">What if your portfolio is small?</h2>

    <p>With $10,000, a 5% position is $500. That is fine at a broker with no or low commissions, or one that offers fractional shares, but a $9.95 commission would eat 2% of the position on the way in alone. Small portfolios often do better with a broad ETF core and one or two stocks at most, then more names as the portfolio grows. The weight limits stay the same; only the number of positions changes.</p>

    <h2 id="accounts">Does the account matter?</h2>

    <p>Yes, in two ways. First, tax on trimming: in a non-registered account, half of a capital gain is taxable, per <a href="${CRA_T4037}">T4037</a>. Inside a TFSA or RRSP, selling triggers nothing.</p>

    <p>Second, losses. In a non-registered account, a capital loss offsets capital gains, and net capital losses can be carried back three years or forward indefinitely, per the <a href="${CRA_LOSS}">CRA</a>. Inside a TFSA, a loss cannot be claimed at all, and the room is gone too: only the amount you withdraw is added back to your room, per the <a href="${CRA_TFSA_ROOM}">CRA's TFSA room rules</a>. A TFSA that loses $10,000 on one stock has lost $10,000 of tax-free space for good. That is an argument for keeping your highest-risk, smallest positions out of the TFSA, or at least small within it.</p>

    <h2 id="example">How would Marc in Calgary trim a 30% position?</h2>

    <div class="example-box">
        <strong>Illustrative example: Marc, 48, Calgary</strong>
        <p>Marc has $200,000 invested. $60,000 of it (30%) is his employer's shares, held in a non-registered account with an ACB of $20,000. The rest is ETFs in his RRSP and TFSA. He wants the employer stock at 10% of the portfolio or less.</p>
        <div class="example-calculation">
            <div class="line"><span>Target value at 10%</span><span>$20,000</span></div>
            <div class="line"><span>Shares to sell</span><span>$40,000 (two-thirds)</span></div>
            <div class="line"><span>ACB of shares sold (two-thirds of $20,000)</span><span>$13,333</span></div>
            <div class="line"><span>Capital gain</span><span>$26,667</span></div>
            <div class="line total"><span>Taxable capital gain (one-half)</span><span>$13,333</span></div>
            <div class="line"><span>Plan: sell half in December, half in January</span><span>about $6,667 taxable each year</span></div>
        </div>
        <p>Before trimming, a 50% fall in his employer's shares would cost Marc $30,000, or 15% of his portfolio. After, it would cost $10,000, or 5%. He reinvests the proceeds in his ETF mix and keeps buying through his plan, selling each year to stay at 10%. Figures are illustrative; his actual tax depends on his income and Alberta rates.</p>
    </div>

    <h2>Does your province change anything?</h2>
    <p>Not the sizing maths. Your province changes the tax on trimming, because provincial rates apply to the taxable half of a gain. Quebec residents also report the gain on their Quebec return. If your income is near a bracket edge, spreading sales across years matters more.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Target and maximum weight written down for each stock</li>
        <li>Sector limit set, including overlap with ETFs you own</li>
        <li>Employer stock counted toward your limits</li>
        <li>Review dates in the calendar</li>
        <li>Trim plan uses registered accounts and new money first</li>
        <li>Highest-risk positions kept small, especially in your TFSA</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>What percentage of my portfolio should one stock be?</h3>
    <p>There is no official limit. A common rule of thumb is 5% or less per stock at purchase, trimming above about 10%. Riskier companies deserve less.</p>

    <h3>How many stocks do I need to be diversified?</h3>
    <p>There is no fixed number. Spread matters more than count: 20 stocks in two sectors are less diversified than 15 across eight. A broad ETF does this for you.</p>

    <h3>Should I sell a stock just because it has grown large?</h3>
    <p>Not necessarily all of it. Trimming back to your maximum keeps you invested while limiting the damage if it turns.</p>

    <h3>Are bank stocks a safe place to concentrate?</h3>
    <p>Banks tend to move together, so several banks behave more like one big position. GetSmarterAboutMoney.ca uses this exact example.</p>

    <h3>Can I claim a loss on a stock in my TFSA?</h3>
    <p>No. TFSA gains are not taxed and losses cannot be claimed, and the lost value does not come back as contribution room.</p>

    <h3>Does trimming trigger tax?</h3>
    <p>In a non-registered account, yes: half of any capital gain is taxable. Inside a TFSA or RRSP, no.</p>

    <h3>Do ETFs need position limits too?</h3>
    <p>Less so for broad index ETFs. Narrow sector or single-country ETFs behave more like concentrated bets.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${GSAM_DIV}">GetSmarterAboutMoney.ca (OSC): What diversification means for your investments</a> (last updated October 14, 2026), reviewed October 23, 2026</li>
        <li><a href="${CRA_LOSS}">CRA: Capital losses and deductions</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_T4037}">CRA: Guide T4037, Capital Gains 2025</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_TFSA_ROOM}">CRA: Calculate your TFSA contribution room</a>, reviewed October 23, 2026</li>
        <li>Loss and recovery percentages: our calculations, as shown in the table</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/how-to-pick-stocks-canada/">How to pick stocks in Canada</a></li>
        <li><a href="/blog/sedar-plus-company-filings-canada/">How to read SEDAR+ filings</a></li>
        <li><a href="/blog/t5008-slip-cost-base-canada/">The T5008 slip and your cost base</a></li>
        <li><a href="/blog/superficial-loss-rule-canada/">The superficial loss rule</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Trimming a big winner? Know the tax first.</strong></p>
        <p>The 2026 tax guide covers capital gains, ACB and timing sales across tax years.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about portfolio construction as of October 23, 2026. Sizing rules shown are common rules of thumb, not regulations or recommendations. Examples are illustrative and ignore commissions. It is not investment or tax advice.")}

</div>`
);
