import { invFooter, invPost } from './types';

const CRA_T3 = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/tax-slips/understand-your-tax-slips/t3-statement-trust-income-allocations-designations-slip-information-individuals.html';
const CRA_T5 = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/tax-slips/understand-your-tax-slips/t5-slips/t5-statement-investment-income-slip-information-individuals.html';
const CRA_T4015 = 'https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4015/t5-guide-return-investment-income.html';
const CRA_MF = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/completing-schedule-3/tax-treatment-mutual-funds.html';
const CRA_SPECIAL = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/special-rules-other-transactions.html';
const RIOCAN_TAX = 'https://www.riocan.com/English/investors/units-and-distributions/tax-information/default.aspx';
const VDY = 'https://www.vanguard.ca/en/advisor/products/products-group/etfs/VDY';

export const returnOfCapitalT3T5SlipsCanada = invPost(
  'dividend-investing',
  'return-of-capital-t3-t5-slips-canada',
  'Return of Capital and T3 Slips: How Distributions Are Taxed',
  'How ETF and REIT distributions are taxed in Canada: T3 and T5 boxes, return of capital (box 42), reinvested gains, negative ACB, and a worked RioCan example.',
  `<div class="container">

    <div class="hook">
        In 2025, RioCan paid unitholders <span class="highlight">$1.1540</span> a unit. Only part of that was taxable that year. RioCan says 38.17% was return of capital, which is not taxed when you receive it but lowers your cost base. Get that wrong and you pay tax twice, or too little and the CRA catches it later.
    </div>

    <p>ETF and REIT distributions are taxed by type, not as one amount. Your T3 or T5 slip splits them into eligible dividends, capital gains, other income, foreign income and return of capital. Return of capital (T3 box 42) is not taxed when paid. It reduces your adjusted cost base, so it raises your capital gain when you sell.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>ETFs and REITs structured as trusts issue T3 slips. Corporations, including mutual fund corporations, issue T5 slips.</li>
            <li>On a T3, you report the taxable dividends in boxes 32 and 50, capital gains in box 21 and other income in box 26.</li>
            <li>Box 42 is a cost base adjustment. A positive amount (usually return of capital) reduces your ACB; the CRA says do not report it as income.</li>
            <li>If return of capital pushes your ACB below zero, the CRA treats the negative amount as a capital gain that year and resets your ACB to zero.</li>
            <li>Reinvested distributions, including year-end capital gains that are reinvested or not paid in cash, are taxed and increase your ACB.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/dividend-investing/">Dividend investing</a>, in the <a href="/category/investing/">Investing</a> category. For the bigger picture of dividend tax, see <a href="/blog/dividend-tax-credit-by-province-canada/">the dividend tax credit by province</a>. For tracking your cost base, see <a href="/blog/adjusted-cost-base-canada-guide/">our ACB guide</a>.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#types">What types of distribution are there?</a></li>
            <li><a href="#t3">How do you read a T3 slip?</a></li>
            <li><a href="#t5">How is a T5 slip different?</a></li>
            <li><a href="#roc">What is return of capital?</a></li>
            <li><a href="#example">How would you record a RioCan distribution?</a></li>
            <li><a href="#negative">What happens if your ACB goes below zero?</a></li>
            <li><a href="#reinvested">Why are you taxed on distributions you never received?</a></li>
            <li><a href="#registered">Does any of this matter in a TFSA or RRSP?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="types">What types of distribution are there?</h2>

    <p>A fund or REIT collects income from what it owns and passes it to you. Each type keeps its tax character on the way through. That is why one monthly payment can contain four different kinds of income, each taxed differently.</p>

    <div class="table-wrapper">
        <table>
            <caption>Distribution types and how each is taxed in a non-registered account (CRA slip guidance)</caption>
            <thead>
                <tr><th>Type</th><th>Where it comes from</th><th>How it is taxed</th><th>T3 box</th></tr>
            </thead>
            <tbody>
                <tr><td>Eligible Canadian dividends</td><td>Dividends from Canadian companies</td><td>Grossed up and earn the dividend tax credit</td><td>49 (actual), 50 (taxable), 51 (credit)</td></tr>
                <tr><td>Other than eligible dividends</td><td>Mostly small-business dividends</td><td>Smaller gross-up and credit</td><td>23 (actual), 32 (taxable), 39 (credit)</td></tr>
                <tr><td>Capital gains</td><td>Gains the fund realized when selling</td><td>Half is taxable</td><td>21</td></tr>
                <tr><td>Other income</td><td>Interest, rent and similar income</td><td>Fully taxable</td><td>26</td></tr>
                <tr><td>Foreign non-business income</td><td>Foreign dividends and interest</td><td>Fully taxable; foreign tax credit for tax paid (box 34)</td><td>25</td></tr>
                <tr class="highlight-row"><td>Return of capital</td><td>Cash paid beyond the fund's taxable income</td><td>Not taxed now; reduces your ACB</td><td>42</td></tr>
            </tbody>
        </table>
    </div>

    <p>The box numbers and instructions are from the <a href="${CRA_T3}">CRA's T3 slip page for individuals</a>. The capital gains inclusion rate is one-half; the CRA's worked example on its <a href="${CRA_MF}">tax treatment of mutual funds</a> page multiplies total capital gains by 50%.</p>

    <h2 id="t3">How do you read a T3 slip?</h2>

    <p>Most Canadian-listed ETFs and REITs are trusts, so they send T3 slips. Your broker usually issues the slip for everything held in your account. The CRA's instructions for the main boxes:</p>

    <ul>
        <li><strong>Boxes 32 and 50:</strong> the taxable amounts of dividends. Report their total on line 12000, and box 32 on line 12010.</li>
        <li><strong>Boxes 39 and 51:</strong> the federal dividend tax credit. Claim the total on line 40425.</li>
        <li><strong>Box 21:</strong> capital gains. Subtract box 30, then report the rest on line 17600 of Schedule 3.</li>
        <li><strong>Box 26:</strong> other income. Subtract box 31, then report the rest on line 13000.</li>
        <li><strong>Boxes 25 and 34:</strong> foreign non-business income and the foreign tax paid on it. Report box 25 on line 12100; use both on Form T2209 for the foreign tax credit.</li>
        <li><strong>Box 42:</strong> amount resulting in cost base adjustment. Adjust your ACB; don't report it as income.</li>
    </ul>

    <p>Tax software reads these boxes for you. The part software can't do is box 42, because your software doesn't know your cost base. You have to track that yourself.</p>

    <div class="tip-box">
        <strong>T3 slips arrive late</strong>
        <p>Trusts often issue T3 slips in March. RioCan, for example, said its 2025 T3 slips were expected to be mailed by March 31, 2026. Wait for them before filing, or you may need to amend your return.</p>
    </div>

    <h2 id="t5">How is a T5 slip different?</h2>

    <p>Corporations send T5 slips, including Canadian companies whose shares you own and mutual fund corporations. The <a href="${CRA_T5}">CRA's T5 slip page</a> says to report box 25, the taxable amount of eligible dividends, on line 12000 and claim box 26, the dividend tax credit, on line 40425. Box 18 is capital gains dividends, reported on line 17400 of Schedule 3. Box 13 is interest from Canadian sources.</p>

    <p>The <a href="${CRA_T4015}">CRA's T5 guide</a> explains that box 25 is box 24 plus a 38% gross-up, and that the box 26 credit is 15.0198% of box 25 for eligible dividends. A T5 has no return of capital box. The CRA notes that return of capital on mutual fund corporation shares also reduces your ACB, and that because it is not reported on the T5, you should track it yourself.</p>

    <h2 id="roc">What is return of capital?</h2>

    <p>Return of capital is any part of a distribution that is more than the fund's taxable income for the year. Funds and REITs pay it for different reasons. A REIT can deduct building depreciation for tax, so its cash flow is higher than its taxable income. Some funds pay a fixed monthly amount and make up any shortfall with return of capital. Covered-call ETFs often include some.</p>

    <p>Return of capital is not automatically bad. RioCan's 38.17% in 2025 reflects tax deductions, not necessarily a fund paying out your own money. But it can also mean a fund is paying more than it earns. The only way to tell is to look at the fund's earnings or the REIT's funds from operations against its payout.</p>

    <p>What matters for tax is that it is deferral, not forgiveness. Each dollar of return of capital lowers your ACB by a dollar. When you sell, your gain is that much bigger. You pay tax on it later, as a capital gain, of which half is taxable.</p>

    <h2 id="example">How would you record a RioCan distribution?</h2>

    <p><a href="${RIOCAN_TAX}">RioCan's tax information page</a> shows how its distributions were taxed each year. For 2025, total distributions were $1.1540 a unit, split 58.49% other income, 3.34% capital gains and 38.17% return of capital.</p>

    <div class="chart-container">
        <h3>RioCan 2025 distribution of $1.1540 per unit, by tax type</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">Other income: 58.49% (fully taxable)</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Return of capital: 38.17% (reduces ACB)</div><div class="bar-wrapper"><div class="bar" style="width: 65%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Capital gains: 3.34% (half taxable)</div><div class="bar-wrapper"><div class="bar" style="width: 6%;"><span></span></div></div></div>
        </div>
        <p>Percentages are from RioCan's tax information page, calculated under the Income Tax Act (Canada). The mix changes every year: return of capital was 20.39% in 2024 and nil in 2021 and 2022.</p>
    </div>

    <div class="example-box">
        <strong>Illustrative example: Claire, 1,000 RioCan units in a non-registered account</strong>
        <p>Claire bought 1,000 units at $18.00 for an ACB of $18,000. She held them all of 2025. The purchase price is illustrative; the tax split is RioCan's published 2025 figure.</p>
        <div class="example-calculation">
            <div class="line"><span>Total 2025 distributions (1,000 × $1.1540)</span><span>$1,154.00</span></div>
            <div class="line"><span>Other income, 58.49% (T3 box 26): fully taxable</span><span>$674.97</span></div>
            <div class="line"><span>Capital gains, 3.34% (T3 box 21)</span><span>$38.54</span></div>
            <div class="line"><span>Taxable capital gain (one-half)</span><span>$19.27</span></div>
            <div class="line"><span>Return of capital, 38.17% (T3 box 42): not taxed now</span><span>$440.48</span></div>
            <div class="line total"><span>New ACB: $18,000 − $440.48</span><span>$17,559.52</span></div>
        </div>
        <p>Of $1,154 received, $694.24 is added to Claire's 2025 income. If she later sells the units for $20,000, her capital gain is $2,440.48, not $2,000, because the return of capital lowered her ACB. Amounts are rounded to the cent.</p>
    </div>

    <p>Compare a broad Canadian dividend ETF. <a href="${VDY}">Vanguard's VDY page</a> shows 2025 distributions of $2.96453 a unit: $2.19840 of eligible dividends, $0.76462 of capital gains and only $0.00151 of return of capital. The return-of-capital share there is tiny.</p>

    <h2 id="negative">What happens if your ACB goes below zero?</h2>

    <p>If years of return of capital reduce your ACB below zero, the <a href="${CRA_SPECIAL}">CRA's special rules page</a> says the negative amount is deemed a capital gain in that year. You report it on line 13200 of Schedule 3, enter zero on line 13199 because there was no sale, and your ACB becomes zero.</p>

    <p>The CRA's own example: you buy units for $1,000 and get $200 of return of capital each year for five years. Your ACB is zero after the fifth year. The next year you get another $100 of return of capital. That $100 is a capital gain you must report that year.</p>

    <div class="flowchart">
        <div class="flow-node decision">Does your T3 show a positive amount in box 42?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">No: no ACB change from this slip (a negative box 42 increases your ACB)</div>
            <div class="flow-node decision">Yes: is the amount larger than your current ACB?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">No: subtract it from your ACB; nothing to report as income</div>
            <div class="flow-node result">Yes: ACB becomes zero; report the excess as a capital gain on Schedule 3, line 13200</div>
        </div>
    </div>

    <h2 id="reinvested">Why are you taxed on distributions you never received?</h2>

    <p>Many ETFs make a year-end capital gains distribution that is reinvested in new units and then consolidated, so your unit count doesn't change. You never see the cash, but the gain shows up on your T3 and is taxable. These are often called phantom or notional distributions.</p>

    <p>The fix is to add the reinvested amount to your ACB. Otherwise you will be taxed on it again when you sell. The CRA's mutual fund page says to recalculate your average cost every time you reinvest distributions. Its worked example for "Kate" shows a $750 reinvested capital gain reported on Schedule 3 and the units' ACB adjusted accordingly.</p>

    <p>DRIP purchases work the same way: the dividend is taxable when paid, and the cost of the new shares adds to your ACB. See <a href="/blog/drip-dividend-reinvestment-canada/">our DRIP guide</a> for an example.</p>

    <h2 id="registered">Does any of this matter in a TFSA or RRSP?</h2>

    <p>No. Distributions inside a TFSA, RRSP, RRIF, FHSA or RESP are not reported as they happen, and you don't get T3 or T5 slips for them. You don't track ACB in those accounts. What matters there is what comes out: TFSA withdrawals are tax-free, while RRSP and RRIF withdrawals are fully taxed as income, whatever the type of distribution that built them.</p>

    <p>That is one reason investors put fully taxable income, such as REIT other income and bond interest, in registered accounts first. See <a href="/blog/diy-etf-portfolio-asset-location-canada/">our asset location guide</a>.</p>

    <h2>Does your province change anything?</h2>
    <p>The slip rules are federal. Quebec residents also receive a Relevé 16 for trust income and a Relevé 3 for investment income, used on the Quebec return. Provincial tax rates change how much tax you pay on each type, and provincial dividend tax credits differ.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>All T3 slips received before filing (many arrive in March)</li>
        <li>Box 42 amounts subtracted from each holding's ACB</li>
        <li>Reinvested and phantom distributions added to ACB</li>
        <li>ACB checked for any holding close to zero</li>
        <li>Foreign tax paid (box 34) claimed on Form T2209</li>
        <li>Fully taxable income held in registered accounts where possible</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Is return of capital taxable?</h3>
    <p>Not when you receive it. It reduces your ACB, which raises your capital gain when you sell. If your ACB falls below zero, the excess is a capital gain that year.</p>

    <h3>What is box 42 on a T3 slip?</h3>
    <p>The amount resulting in cost base adjustment. A positive amount reduces your ACB; a negative amount increases it.</p>

    <h3>Do I report box 42 on my tax return?</h3>
    <p>Not as income. You use it to update your ACB, which matters when you sell. Keep a record each year.</p>

    <h3>Why did my ETF pay a capital gain I never received?</h3>
    <p>It was likely reinvested and consolidated at year end. It is taxable, and you add it to your ACB.</p>

    <h3>When do T3 slips arrive?</h3>
    <p>Often in March. RioCan said its 2025 T3 slips were expected to be mailed by March 31, 2026.</p>

    <h3>Do I need to track ACB in my TFSA?</h3>
    <p>No. Gains and distributions in a TFSA are not taxed, so ACB doesn't matter there.</p>

    <h3>Is a high return of capital a warning sign?</h3>
    <p>Not always. REITs often pay it because of depreciation deductions. But a fund paying more than it earns can also show up as return of capital.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${CRA_T3}">CRA: T3 slip information for individuals</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_T5}">CRA: T5 slip information for individuals</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_T4015}">CRA: Guide T4015, T5 Guide – Return of Investment Income</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_MF}">CRA: Tax treatment of mutual funds</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_SPECIAL}">CRA: Special rules and other transactions</a>, reviewed October 23, 2026</li>
        <li><a href="${RIOCAN_TAX}">RioCan REIT: Tax information</a>, reviewed October 23, 2026</li>
        <li><a href="${VDY}">Vanguard Canada: VDY fund page (distribution tax characteristics)</a>, reviewed October 23, 2026</li>
        <li>Claire's example: our calculations from RioCan's published percentages, with an illustrative purchase price</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/adjusted-cost-base-canada-guide/">Adjusted cost base, explained</a></li>
        <li><a href="/blog/covered-call-etfs-canada/">Covered-call ETFs in Canada</a></li>
        <li><a href="/blog/t5008-slip-cost-base-canada/">The T5008 slip and your cost base</a></li>
        <li><a href="/blog/canadian-dividend-etfs-compared/">Canadian dividend ETFs compared</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Slips piling up? Get the boxes right the first time.</strong></p>
        <p>The 2026 tax guide covers T3 and T5 slips, ACB tracking and capital gains on Schedule 3.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about the taxation of investment distributions as of October 23, 2026. Box numbers and rules are from the CRA pages listed; RioCan and VDY figures are from their own pages. Examples are illustrative. It is not tax advice.")}

</div>`
);
