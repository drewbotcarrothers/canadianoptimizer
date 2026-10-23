import { invFooter, invPost } from './types';

const CRA_T5008_IND = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/tax-slips/understand-your-tax-slips/t5-slips/t5008-statement-securities-transactions-slip-information-individuals.html';
const CRA_T5008_SLIP = 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/completing-slips-summaries/financial-slips-summaries/return-securities-transactions-t5008/t5008-slip.html';
const CRA_T4037 = 'https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4037/capital-gains.html';
const CRA_LOSS = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/capital-losses-deductions.html';
const CRA_MF = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/completing-schedule-3/tax-treatment-mutual-funds.html';

export const t5008SlipCostBaseCanada = invPost(
  'stock-picking',
  't5008-slip-cost-base-canada',
  'T5008 Slip: Why the Box 20 Cost Base Is Often Wrong',
  'Your T5008 shows proceeds, but box 20 may not be your adjusted cost base. Learn which boxes matter, when the cost is wrong, and how to fix it before you file.',
  `<div class="container">

    <div class="hook">
        Every February, brokers send T5008 slips showing what you sold and, in box 20, what it cost. The CRA's own instructions warn that box 20 <span class="highlight">"may or may not reflect your adjusted cost base"</span>. If you copy it onto Schedule 3 without checking, you can overpay or underpay tax on the same sale, and the CRA expects you to have checked.
    </div>

    <p>The T5008 slip reports securities you sold or redeemed. Box 21 shows proceeds and box 20 shows the dealer's cost or book value. The CRA says box 20 may not equal your adjusted cost base, so you must adjust it for transfers, other accounts holding the same security, reinvested distributions and returns of capital (CRA, 2026).</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Box 21 is gross proceeds, with no selling costs deducted. You subtract commissions yourself as outlays and expenses.</li>
            <li>Box 20 is the dealer's cost or book value. The CRA says it may or may not be your ACB, and you must make the adjustments.</li>
            <li>The most common errors come from in-kind transfers, the same security held at two brokers, reinvested distributions, return of capital, and superficial losses.</li>
            <li>No T5008 is issued for RRSP or TFSA trades, expired or exercised options, or deemed dispositions. Those still count where tax applies.</li>
            <li>Keep your own ACB record. It is the only number you can defend if the CRA asks.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/stock-picking/">Stock Picking</a>, in the <a href="/category/investing/">Investing</a> category. If you pick individual shares in a taxable account, every sale ends up on a T5008. The pillar on <a href="/blog/how-to-pick-stocks-canada/">how to pick stocks in Canada</a> covers the research side. This page covers the tax paperwork at the end.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#what">What is a T5008 slip?</a></li>
            <li><a href="#boxes">Which boxes matter?</a></li>
            <li><a href="#wrong">Why is box 20 often wrong?</a></li>
            <li><a href="#example">How much can a wrong box 20 cost you?</a></li>
            <li><a href="#reconcile">How do you reconcile your T5008?</a></li>
            <li><a href="#none">When will you not get a T5008?</a></li>
            <li><a href="#quebec">What about Quebec?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="what">What is a T5008 slip?</h2>

    <p>The T5008, Statement of Securities Transactions, is an information slip. Dealers, brokers and fund companies must issue one when they sell or redeem securities for you, according to the <a href="${CRA_T5008_SLIP}">CRA's slip instructions</a>. They must send it, and file it with the CRA, by the last day of February after the year of the sale. Dealers can combine several sales of the same security into one slip; then the date box shows December 31.</p>

    <p>The slip is not a tax calculation. It reports a sale. You work out the capital gain or loss on <a href="${CRA_T4037}">Schedule 3</a> as proceeds minus your adjusted cost base (ACB) minus outlays and expenses such as commissions. For 2025, half of a net capital gain is taxable, per guide T4037.</p>

    <h2 id="boxes">Which boxes matter?</h2>

    <div class="table-wrapper">
        <table>
            <caption>Key T5008 boxes, from the CRA's slip instructions</caption>
            <thead>
                <tr><th>Box</th><th>What it shows</th><th>What to check</th></tr>
            </thead>
            <tbody>
                <tr><td>13</td><td>Foreign currency code, if amounts are not in Canadian dollars</td><td>If filled (such as USD), convert to Canadian dollars yourself</td></tr>
                <tr><td>14</td><td>Settlement date (month and day); 1231 if transactions were combined</td><td>Matches your trade records; settlement date sets the tax year</td></tr>
                <tr><td>15</td><td>Security type: SHS shares, MFT mutual fund trust units, BON bonds, and others</td><td>Correct type</td></tr>
                <tr><td>16</td><td>Quantity sold</td><td>Matches your records</td></tr>
                <tr><td>17 and 18</td><td>Description and ISIN or CUSIP</td><td>Right security</td></tr>
                <tr class="highlight-row"><td>20</td><td>Cost or book value, including purchase charges, adjusted for reinvested distributions, returns of capital and reorganizations</td><td>The CRA says it "may or may not" equal your ACB. Always verify</td></tr>
                <tr><td>21</td><td>Proceeds of disposition, with no expenses deducted</td><td>Subtract selling commissions yourself</td></tr>
            </tbody>
        </table>
    </div>

    <p>The CRA's instructions to dealers say box 20 should be "the total amount paid to purchase a security, including any transaction charges related to the purchase, adjusted for reinvested distributions, returns of capital and corporate reorganizations", and that dealers should take reasonable measures to make it correct. But the same note says the investor may have to adjust it. The <a href="${CRA_T5008_IND}">individuals' page</a> repeats the warning: "You are required to make the adjustments."</p>

    <h2 id="wrong">Why is box 20 often wrong?</h2>

    <p>A dealer only knows what happened in its own account. Your ACB is a tax figure that follows you, across accounts and over decades. Here is where the two drift apart:</p>

    <div class="table-wrapper">
        <table>
            <caption>Common reasons the dealer's cost differs from your ACB</caption>
            <thead>
                <tr><th>Situation</th><th>What the dealer may show</th><th>What your ACB should be</th></tr>
            </thead>
            <tbody>
                <tr class="highlight-row"><td>Shares transferred in kind from another broker</td><td>Blank, zero, or the market value on the transfer date</td><td>Your original cost, from the old broker's records</td></tr>
                <tr><td>Same security held at two brokers (non-registered)</td><td>Average cost of the shares in that account only</td><td>Average cost across all your identical shares, per T4037's identical property rule</td></tr>
                <tr><td>Dividends or distributions reinvested (DRIP)</td><td>Often included, sometimes missed</td><td>Each reinvestment adds to ACB</td></tr>
                <tr><td>Return of capital (T3 box 42)</td><td>Often applied late or not at all</td><td>ACB is reduced by the return of capital</td></tr>
                <tr><td>Reinvested capital gains distributions (ETFs)</td><td>Often missed, since no cash moves</td><td>Added to ACB, since you were already taxed on them</td></tr>
                <tr><td>Superficial loss on a repurchase</td><td>Not tracked</td><td>The denied loss is added to the ACB of the replacement shares</td></tr>
                <tr><td>Shares bought in US dollars</td><td>Converted at an average or sale-date rate, or not at all</td><td>Cost converted at the rate on the purchase date</td></tr>
            </tbody>
        </table>
    </div>

    <p>The foreign currency rule is in T4037: convert proceeds at the exchange rate in effect at the time of the sale, the ACB at the rate when you bought, and selling expenses at the rate when you paid them. The CRA's <a href="${CRA_MF}">mutual fund page</a> explains how reinvested distributions and returns of capital change ACB.</p>

    <h2 id="example">How much can a wrong box 20 cost you?</h2>

    <div class="example-box">
        <strong>Illustrative example: Leah, Ottawa</strong>
        <p>In 2021 Leah bought 100 shares of a Canadian company for $4,000 plus a $9.95 commission. In 2024 she moved them in kind to a new broker. The new broker had no record of her cost and recorded $5,000, the market value on the transfer date. In 2026 she sells them for $6,000, paying another $9.95.</p>
        <div class="example-calculation">
            <div class="line"><span>Proceeds (box 21)</span><span>$6,000.00</span></div>
            <div class="line"><span>True ACB ($4,000 + $9.95)</span><span>$4,009.95</span></div>
            <div class="line"><span>Selling commission</span><span>$9.95</span></div>
            <div class="line total"><span>Correct capital gain</span><span>$1,980.10</span></div>
            <div class="line"><span>Gain if box 20 ($5,000) is used</span><span>$990.05</span></div>
            <div class="line"><span>Gain if box 20 were blank and treated as zero</span><span>$5,990.05</span></div>
        </div>
        <p>Using box 20 understates her gain by $990.05, so she would under-report $495.03 of taxable capital gain at the one-half inclusion rate. If the box had been blank and she had treated cost as zero, she would have over-reported $4,009.95 of gain. Both are wrong. Figures are illustrative.</p>
    </div>

    <div class="chart-container">
        <h3>Leah's capital gain under three cost figures (illustrative)</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">Box 20 at transfer value: $990</div><div class="bar-wrapper"><div class="bar" style="width: 17%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Correct ACB: $1,980</div><div class="bar-wrapper"><div class="bar" style="width: 33%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Cost left at zero: $5,990</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span></span></div></div></div>
        </div>
        <p>Same sale, three different gains. Only the middle one is right.</p>
    </div>

    <div class="example-box">
        <strong>Illustrative example: one stock, two brokers</strong>
        <div class="example-calculation">
            <div class="line"><span>Broker A: 100 shares bought for</span><span>$2,000</span></div>
            <div class="line"><span>Broker B: 100 shares bought for</span><span>$3,000</span></div>
            <div class="line"><span>Your average cost per share (identical properties)</span><span>$25.00</span></div>
            <div class="line"><span>Sell 100 at Broker B for</span><span>$3,500</span></div>
            <div class="line"><span>Gain using Broker B's box 20 ($3,000)</span><span>$500</span></div>
            <div class="line total"><span>Gain using your average ACB ($2,500)</span><span>$1,000</span></div>
        </div>
        <p>T4037 requires you to average the cost of identical properties. Each broker sees only its own account, so neither slip can be right. Commissions are left out to keep the numbers simple.</p>
    </div>

    <div class="example-box">
        <strong>Illustrative example: US shares and two exchange rates</strong>
        <div class="example-calculation">
            <div class="line"><span>Bought 50 shares at US$100 when US$1 = C$1.35</span><span>Cost C$6,750</span></div>
            <div class="line"><span>Sold 50 shares at US$120 when US$1 = C$1.30</span><span>Proceeds C$7,800</span></div>
            <div class="line total"><span>Correct gain (each side at its own date's rate)</span><span>C$1,050</span></div>
            <div class="line"><span>Gain if the sale-date rate is wrongly used for cost too (C$6,500)</span><span>C$1,300</span></div>
        </div>
        <p>T4037 requires the cost at the purchase-date rate and the proceeds at the sale-date rate. Using one rate for both overstated this gain by C$250. Rates and prices are illustrative, and commissions are left out.</p>
    </div>

    <h2 id="reconcile">How do you reconcile your T5008?</h2>

    <div class="flowchart">
        <div class="flow-node decision">Was every share of this security bought in this one account, with no transfers, DRIP, return of capital or US dollars?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Yes: box 20 is probably close. Check it against your trade confirmations</div>
            <div class="flow-node result">No: rebuild the ACB from your own records and use that figure on Schedule 3</div>
        </div>
    </div>

    <div class="step-section">
        <div class="step"><div class="step-number">1</div><div><div class="step-title">Collect every slip and statement</div><p>All T5008s, T3s (box 42 for return of capital), annual statements and trade confirmations, for every non-registered account.</p></div></div>
        <div class="step"><div class="step-number">2</div><div><div class="step-title">List each purchase</div><p>Date, quantity, price, commission, and exchange rate if bought in US dollars.</p></div></div>
        <div class="step"><div class="step-number">3</div><div><div class="step-title">Apply the adjustments</div><p>Add reinvested distributions and denied superficial losses. Subtract returns of capital. Combine identical shares across accounts.</p></div></div>
        <div class="step"><div class="step-number">4</div><div><div class="step-title">Work out the average cost per share</div><p>Recompute after each purchase. A sale does not change the average cost of the shares left.</p></div></div>
        <div class="step"><div class="step-number">5</div><div><div class="step-title">Calculate the gain or loss</div><p>Box 21 proceeds minus ACB of the shares sold minus selling costs. Enter it on Schedule 3, line 4 for shares and fund units.</p></div></div>
        <div class="step"><div class="step-number">6</div><div><div class="step-title">Keep the working</div><p>The CRA does not need your records with the return, but T4037 says to keep them in case it asks.</p></div></div>
    </div>

    <p>Tax software often fills box 20 in automatically from the CRA's Auto-fill my return. That is convenient, and it is exactly how a wrong figure gets onto a return unnoticed. Overwrite it with your own ACB where they differ.</p>

    <div class="warning-box">
        <strong>Losses need the same care.</strong> A capital loss reduces capital gains, and a net capital loss can be carried back three years or forward indefinitely, per the <a href="${CRA_LOSS}">CRA's capital losses page</a>. A loss is denied as a superficial loss if you, or an affiliated person such as your spouse, buy the identical property within 30 calendar days before or after the sale and still hold it at day 30. See our <a href="/blog/superficial-loss-rule-canada/">superficial loss rule guide</a>.
    </div>

    <h2 id="none">When will you not get a T5008?</h2>

    <p>According to the CRA's slip instructions, dealers do not file a T5008 for:</p>
    <ul>
        <li>Sales for a person exempt from tax under section 149 of the Income Tax Act. The CRA's example list includes registered retirement savings plans. Trades inside registered accounts are generally not taxed, so there is nothing to report.</li>
        <li>Deemed dispositions, such as when you emigrate or give shares away.</li>
        <li>Options that expire or are exercised. Selling an option does get a slip.</li>
        <li>Units of a fund that trades at a constant fixed price in Canadian dollars, such as many money market funds. US dollar money market funds are not excluded.</li>
    </ul>
    <p>No slip does not mean no tax. A gift of shares to an adult child is a deemed sale at fair market value, and you report it even though no T5008 arrives.</p>

    <h2 id="quebec">What about Quebec?</h2>

    <p>Since the 2021 tax year, dealers can send Quebec residents a combined T5008/RL-18 slip. The CRA says the transactions to report start on page 3, so read the whole document. The same ACB adjustments apply on the Quebec return. Elsewhere, provinces use the federal capital gain figure, so a wrong ACB affects both your federal and provincial tax.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Every T5008 matched to a trade you made</li>
        <li>Box 13 checked for foreign currency</li>
        <li>Box 20 compared with your own ACB record</li>
        <li>Transfers, other accounts, DRIPs, return of capital and superficial losses applied</li>
        <li>Selling commissions subtracted from box 21 proceeds</li>
        <li>Working saved with your tax records</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Do I have to use the box 20 amount?</h3>
    <p>No. You report your actual adjusted cost base. The CRA says box 20 may or may not reflect it and that you must make any adjustments.</p>

    <h3>Why is box 20 blank on my T5008?</h3>
    <p>Usually because the shares were transferred in and the dealer has no cost record. Use your original purchase records.</p>

    <h3>Does box 21 include the commission?</h3>
    <p>Box 21 is gross proceeds with no expenses deducted. Subtract the selling commission yourself as an outlay or expense.</p>

    <h3>When should I get my T5008?</h3>
    <p>Dealers must send it by the last day of February after the year of the sale.</p>

    <h3>Do I get a T5008 for my TFSA or RRSP?</h3>
    <p>No. Sales for tax-exempt holders such as RRSPs are excluded, and registered account trades are generally not taxable.</p>

    <h3>What if I sold US shares?</h3>
    <p>Convert proceeds at the exchange rate on the sale date and the cost at the rate on the purchase date, per CRA guide T4037. Check box 13 for the currency.</p>

    <h3>What if my T5008 is wrong?</h3>
    <p>Report the correct figures on Schedule 3 and keep your working. If the proceeds or quantity are wrong, ask the dealer for an amended slip.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${CRA_T5008_SLIP}">CRA: T5008 slip (instructions for filers)</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_T5008_IND}">CRA: T5008 slip information for individuals</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_T4037}">CRA: Guide T4037, Capital Gains 2025</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_LOSS}">CRA: Capital losses and deductions</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_MF}">CRA: Tax treatment of mutual funds</a>, reviewed October 23, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/superficial-loss-rule-canada/">The superficial loss rule</a></li>
        <li><a href="/blog/drip-dividend-reinvestment-canada/">DRIPs and your adjusted cost base</a></li>
        <li><a href="/blog/sedar-plus-company-filings-canada/">How to read SEDAR+ filings</a></li>
        <li><a href="/blog/how-to-pick-stocks-canada/">How to pick stocks in Canada</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Want the full filing walkthrough?</strong></p>
        <p>The 2026 tax guide covers Schedule 3, ACB tracking and capital losses with worked examples.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General tax information as of October 23, 2026, summarized from CRA publications. Examples are illustrative. It is not tax advice; for complex situations such as reorganizations, options or emigration, consult a qualified tax professional.")}

</div>`
);
