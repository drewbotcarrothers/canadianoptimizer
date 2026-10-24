import { invFooter, invPost } from './types';

const CRA_T4037 = 'https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4037/capital-gains.html';
const CRA_LOSS = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/capital-losses-deductions.html';
const CRA_CALC = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/calculating-reporting-your-capital-gains-losses.html';
const OSC_T1 = 'https://www.osc.ca/en/news-events/news/canadian-securities-regulators-announce-move-t1-settlement-cycle';
const GSAM_EVAL = 'https://www.getsmarteraboutmoney.ca/learning-path/stocks/how-to-evaluate-companies-when-buying-stock/';

export const whenToSellAStockCanada = invPost(
  'stock-picking',
  'when-to-sell-a-stock-canada',
  'When to Sell a Stock: Writing Your Sell Rules in Advance',
  'Five good reasons to sell a stock, three bad ones, a sell-rule template, the tax cost of selling in Canada, superficial losses, and the T+1 year-end deadline.',
  `<div class="container">

    <div class="hook">
        Most investors spend hours deciding what to buy and seconds deciding when to sell. Usually it happens in a panic, or never. A stock you bought at $50 that now trades at $80 carries a tax bill if you sell it outside a TFSA or RRSP. On a $6,000 gain, about <span class="highlight">$900</span> at a 30% marginal rate. That bill tempts people to hold on long after the reason to own it is gone.
    </div>

    <p>Sell a stock when the reason you bought it no longer holds, when it has grown too large in your portfolio, when something clearly better needs the money, or when you need the cash. A falling price alone is not a reason. Write your sell rules when you buy, before emotions get involved.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Write down why you own each stock. If that reason breaks, sell, whatever the price.</li>
            <li>Price drops are a reason to re-check the business, not a reason to sell by themselves.</li>
            <li>In a non-registered account, half of a capital gain is taxable. Inside a TFSA or RRSP, selling has no immediate tax.</li>
            <li>Selling at a loss and buying the same stock back within 30 days before or after makes the loss superficial, so you can't claim it yet.</li>
            <li>Since May 27, 2024, Canadian trades settle one business day after the trade date (T+1). A sale must settle by December 31 to count for that tax year.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/stock-picking/">Stock picking</a>, in the <a href="/category/investing/">Investing</a> category. The pillar on <a href="/blog/how-to-pick-stocks-canada/">how to pick stocks in Canada</a> covers buy rules. <a href="/blog/position-sizing-stocks-canada/">Position sizing</a> covers trimming a stock that has grown too big.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#good">What are good reasons to sell?</a></li>
            <li><a href="#bad">What are bad reasons to sell?</a></li>
            <li><a href="#template">What should your sell rules say?</a></li>
            <li><a href="#tax">What does selling cost in tax?</a></li>
            <li><a href="#losses">How do you sell at a loss without losing the deduction?</a></li>
            <li><a href="#timing">When do sales count for this tax year?</a></li>
            <li><a href="#stages">Should you sell all at once or in stages?</a></li>
            <li><a href="#example">How would Andre apply his rules?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="good">What are good reasons to sell?</h2>

    <p>Selling should follow a change in facts, not a change in mood. These five reasons hold up:</p>

    <div class="table-wrapper">
        <table>
            <caption>Five reasons to sell a stock, and how to recognize them</caption>
            <thead>
                <tr><th>Reason</th><th>What it looks like</th><th>Evidence to check</th></tr>
            </thead>
            <tbody>
                <tr class="highlight-row"><td>The thesis is broken</td><td>The reason you bought no longer holds: a key product fails, a regulator changes the rules, management changes strategy</td><td>Annual and quarterly reports, MD&amp;A, material change reports</td></tr>
                <tr><td>The balance sheet is weakening</td><td>Debt rising faster than cash flow; a dividend not covered by free cash flow</td><td>Cash flow statement; debt-to-EBITDA trend</td></tr>
                <tr><td>The price is far above what you think it's worth</td><td>Valuation well past your own written estimate</td><td>P/E, EV/EBITDA and FCF yield against history and peers</td></tr>
                <tr><td>The position is too large</td><td>One stock has grown past your size limit</td><td>Your portfolio weights</td></tr>
                <tr><td>You need the money, or have a clearly better use</td><td>A home purchase, retirement income, paying off high-interest debt</td><td>Your financial plan</td></tr>
            </tbody>
        </table>
    </div>

    <p>The first reason is the most important and the hardest. It requires knowing why you own the stock. If you can't explain it in two sentences, write it down now. The OSC's <a href="${GSAM_EVAL}">GetSmarterAboutMoney.ca guide to evaluating companies</a> lists warning signs worth watching, such as costs rising while sales don't, or a company short on cash.</p>

    <p>Valuation-based selling needs a number you set earlier. Our guide to <a href="/blog/stock-valuation-pe-ev-ebitda-fcf-canada/">valuation basics</a> shows how to write one. Without it, "it's gone up a lot" becomes the reason, which isn't one.</p>

    <h2 id="bad">What are bad reasons to sell?</h2>

    <p><strong>"The price fell."</strong> If the business is unchanged, a lower price makes the stock cheaper, not worse. Check the facts. If they're unchanged, holding or adding within your size limit is consistent with your original decision.</p>

    <p><strong>"I'll wait until I get back to even."</strong> Your purchase price means nothing to the market. The question is whether you'd buy the stock today at today's price. If not, why hold it?</p>

    <p><strong>"I don't want to pay the tax."</strong> Tax matters, but it shouldn't decide alone. Holding a deteriorating stock to avoid a tax bill can cost far more than the tax. And the gain stays taxable. You defer the bill; you don't avoid it, and in most cases the gain is taxed eventually anyway.</p>

    <div class="warning-box">
        <strong>Watch for the two biases</strong>
        <p>Investors tend to sell winners too early to lock in a gain and hold losers too long to avoid admitting a mistake. Written rules are the best defence against both.</p>
    </div>

    <h2 id="template">What should your sell rules say?</h2>

    <p>A sell discipline is a short note per stock, written on the day you buy. Here is a template you can copy into a spreadsheet:</p>

    <div class="table-wrapper">
        <table>
            <caption>Sell-rule template (one row per holding; fill in at purchase)</caption>
            <thead>
                <tr><th>Field</th><th>What to write</th><th>Example</th></tr>
            </thead>
            <tbody>
                <tr><td>Thesis</td><td>Two sentences on why you own it</td><td>"Dominant rail network; steady pricing; dividend raised 30 years running"</td></tr>
                <tr><td>Thesis breakers</td><td>Two or three events that would make you sell</td><td>"Two years of falling volumes; debt-to-EBITDA above 3.5"</td></tr>
                <tr><td>Valuation ceiling</td><td>The ratio at which you'd trim</td><td>"Trim if FCF yield falls below 2.5%"</td></tr>
                <tr><td>Size limit</td><td>Maximum weight before trimming</td><td>"Trim back to 5% if it passes 8%"</td></tr>
                <tr><td>Review dates</td><td>When you'll re-read the thesis</td><td>"After each annual report"</td></tr>
                <tr class="highlight-row"><td>Account and ACB</td><td>Where it's held, and its cost base</td><td>"Non-registered; 200 shares; ACB $10,000"</td></tr>
            </tbody>
        </table>
    </div>

    <p>Review each row when the company reports. If a thesis breaker happens, sell. Don't rewrite the thesis to fit the new facts. That's the habit the template is meant to stop.</p>

    <h2 id="tax">What does selling cost in tax?</h2>

    <p>In a non-registered account, selling for more than your adjusted cost base creates a capital gain. The CRA's <a href="${CRA_CALC}">capital gain calculation page</a> says to subtract the ACB and selling costs from the proceeds of disposition. One-half of the gain is taxable, at your marginal rate. The <a href="${CRA_T4037}">CRA's Guide T4037</a> explains the rules.</p>

    <div class="example-box">
        <strong>Illustrative example: selling a winner</strong>
        <div class="example-calculation">
            <div class="line"><span>200 shares bought at $50 (ACB, including commission)</span><span>$10,000</span></div>
            <div class="line"><span>Sold at $80, after commission</span><span>$16,000</span></div>
            <div class="line"><span>Capital gain</span><span>$6,000</span></div>
            <div class="line"><span>Taxable capital gain (one-half)</span><span>$3,000</span></div>
            <div class="line total"><span>Tax at an assumed 30% marginal rate</span><span>about $900</span></div>
        </div>
        <p>The 30% rate is an assumption for illustration; your rate depends on your income and province. Inside a TFSA or RRSP, this sale would trigger no tax now.</p>
    </div>

    <div class="chart-container">
        <h3>What's left of $16,000 after selling, by account (illustrative; 30% marginal rate assumed)</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">TFSA: $16,000, no tax</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">RRSP: $16,000 stays in the plan; taxed when withdrawn</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Non-registered: $15,100 after about $900 tax</div><div class="bar-wrapper"><div class="bar" style="width: 94%;"><span></span></div></div></div>
        </div>
        <p>Our calculations. The non-registered figure assumes a $10,000 ACB.</p>
    </div>

    <p>Compare $900 with the risk you're avoiding. If you think the stock could fall 25%, that is $4,000 of a $16,000 position. The tax is the smaller cost.</p>

    <h2 id="losses">How do you sell at a loss without losing the deduction?</h2>

    <p>A capital loss in a non-registered account can offset capital gains this year, the three previous years or any future year. The <a href="${CRA_LOSS}">CRA's capital losses page</a> explains how. But <a href="${CRA_T4037}">Guide T4037</a> says that if you or an affiliated person, such as your spouse, buy the same or identical property in the period from 30 calendar days before to 30 calendar days after the sale, and still own it 30 days after, the loss is superficial. You can't deduct it; if you are the one who bought the shares back, you can usually add it to their cost base instead.</p>

    <p>Selling inside a TFSA or RRSP at a loss gives you no deduction at all. Our guides to the <a href="/blog/superficial-loss-rule-canada/">superficial loss rule</a> and <a href="/blog/tax-loss-harvesting-calendar-canada/">tax-loss harvesting</a> cover the details.</p>

    <h2 id="timing">When do sales count for this tax year?</h2>

    <p>For tax, what counts is the settlement date, not the trade date. Since the <a href="${OSC_T1}">CSA's move to T+1</a> on May 27, 2024, Canadian equity trades settle one business day after the trade. To count in 2026, a sale must settle by December 31, 2026, which is a Thursday. That means trading by Wednesday, December 30, at the latest. Check your broker's year-end cut-off, which may be earlier.</p>

    <div class="flowchart">
        <div class="flow-node decision">Has a thesis breaker, valuation ceiling or size limit been hit?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">No: hold; review at the next report</div>
            <div class="flow-node decision">Yes: is it in a TFSA or RRSP?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Registered: sell now; no tax on the sale</div>
            <div class="flow-node result">Non-registered: sell; if a large gain and not urgent, consider splitting across December and January</div>
        </div>
    </div>

    <h2 id="stages">Should you sell all at once or in stages?</h2>

    <p>If the thesis is broken, sell it all. Waiting for a better price is hoping, and hoping isn't a rule. If you're trimming because of size or valuation, stages can make sense. For example, sell a third now and a third after each of the next two quarterly reports.</p>

    <p>In a non-registered account, splitting a large gain across two tax years can keep more of it in a lower bracket. Selling half in late December and half in early January spreads the taxable gain over two returns. It also means more exposure for a few extra weeks. Decide which matters more to you.</p>

    <h2 id="example">How would Andre apply his rules?</h2>

    <div class="example-box">
        <strong>Illustrative example: Andre, 45, Edmonton</strong>
        <p>Andre owns three stocks in a non-registered account. His rules: sell if a thesis breaker happens; trim any stock above 8% of his portfolio back to 5%.</p>
        <div class="example-calculation">
            <div class="line"><span>Stock A: dividend cut, debt rising (thesis breaker)</span><span>Sell all, accept a $2,000 loss</span></div>
            <div class="line"><span>Stock B: up 60%, now 11% of portfolio (size limit)</span><span>Trim to 5%: half in December, half in January</span></div>
            <div class="line"><span>Stock C: down 15%, business unchanged</span><span>Hold; no rule triggered</span></div>
            <div class="line total"><span>Tax effect</span><span>Stock A's loss offsets part of Stock B's December gain</span></div>
        </div>
        <p>Andre doesn't buy Stock A back for at least 31 days, to keep the loss claimable. Holdings and amounts are illustrative.</p>
    </div>

    <h2>Does your province change anything?</h2>
    <p>Not the rules for when to sell. Your province sets part of your marginal rate on the taxable half of any gain, so the tax cost of selling varies across Canada. Quebec residents also report the gain on their Quebec return. If you're near a bracket edge, splitting sales across years helps more.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Thesis, thesis breakers, valuation ceiling and size limit written for each stock</li>
        <li>Rules reviewed after each annual or quarterly report</li>
        <li>ACB known for every non-registered holding</li>
        <li>Losses checked against the 30-day superficial loss window</li>
        <li>Year-end trades placed in time to settle by December 31</li>
        <li>Large gains split across tax years where it makes sense</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Should I sell a stock that has dropped 20%?</h3>
    <p>Not because of the drop alone. Check whether the business has changed. If your thesis still holds, the stock is cheaper than when you bought it.</p>

    <h3>Should I sell a stock that has doubled?</h3>
    <p>Only if it has passed your valuation ceiling or size limit, or the thesis has changed. Trimming back to your target weight is a middle path.</p>

    <h3>How much tax do I pay when I sell a stock?</h3>
    <p>In a non-registered account, half of the capital gain is added to your income and taxed at your marginal rate. In a TFSA or RRSP, nothing at the time of sale.</p>

    <h3>What is the last day to sell for a tax loss this year?</h3>
    <p>The trade must settle by December 31. With T+1 settlement, that means trading at least one business day earlier. For 2026, December 30 at the latest.</p>

    <h3>Can I sell at a loss and buy back right away?</h3>
    <p>Not if you want to claim the loss. Buying the same stock within 30 days before or after makes it a superficial loss.</p>

    <h3>Should I use stop-loss orders?</h3>
    <p>They sell automatically on price alone, which can mean selling in a brief dip. They suit traders more than long-term investors.</p>

    <h3>Do ETFs need sell rules too?</h3>
    <p>Broad index ETFs mostly need rebalancing rules instead. See <a href="/blog/rebalancing-without-tax-events-canada/">how to rebalance</a>.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${CRA_T4037}">CRA: Guide T4037, Capital Gains</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_CALC}">CRA: Calculating and reporting your capital gains and losses</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_LOSS}">CRA: Capital losses and deductions</a>, reviewed October 23, 2026</li>
        <li><a href="${OSC_T1}">OSC/CSA: Canadian securities regulators announce move to T+1 settlement cycle</a> (May 27, 2024), reviewed October 23, 2026</li>
        <li><a href="${GSAM_EVAL}">GetSmarterAboutMoney.ca (OSC): How to evaluate companies when buying stock</a>, reviewed October 23, 2026</li>
        <li>Tax and account comparisons: our calculations with an assumed marginal rate, as shown</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/position-sizing-stocks-canada/">Position sizing</a></li>
        <li><a href="/blog/stock-valuation-pe-ev-ebitda-fcf-canada/">Valuation basics</a></li>
        <li><a href="/blog/capital-gains-tax-canada/">Capital gains tax in Canada</a></li>
        <li><a href="/blog/tax-loss-harvesting-calendar-canada/">Tax-loss harvesting calendar</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Selling this year? Know the tax before you click.</strong></p>
        <p>The 2026 tax guide covers capital gains, losses, ACB and timing sales across tax years.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about selling decisions as of October 23, 2026. Sell rules shown are examples, not recommendations. Tax examples use an assumed marginal rate and ignore provincial differences. It is not investment or tax advice.")}

</div>`
);
