import { articleFooter, octPost } from './types';

const taxDisclaimer =
  'This is general education about Canadian income tax as of October 4, 2026. It is not tax, legal, or investment advice, and it is not a filing position. Deadlines, withholding rates, and the prescribed interest rate change. Figures are tied to CRA, Revenu Québec, or the Department of Finance pages reviewed on October 4, 2026, or are labelled as arithmetic on stated assumptions. Confirm the form and consult a tax professional for your file.';

const footer = articleFooter('Taxes', taxDisclaimer);

export const oct2026TaxPostsB = [
  octPost(
    'Taxes',
    'taxes',
    'year-end-tax-checklist',
    'Year-End Tax Moves for 2026: The December 31 Checklist',
    'Nine moves before December 31, 2026 for Canadians who already max a TFSA, including the RRSP deadline that is not in December.',
    `<div class="container">

    <div class="hook">
        December 31 is a real deadline for some moves and a fake one for the RRSP deduction. The people who already fill a TFSA every January do not need another reminder to contribute. They need the short list of things that <span class="highlight">actually die at midnight</span> on the last day of 2026.
    </div>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>An FHSA contribution has to be in the account during the calendar year to be an FHSA deduction for that year. CRA's contribution period is January 1 to December 31. There is no 60-day spill into March.</li>
            <li>A TFSA withdrawal in December does not restore room until January 1 of the next year. Putting the money back in the same December creates an excess if you had no other room.</li>
            <li>A charitable gift has to be made in the year. A public-security donation has to be completed, not merely instructed, in the year.</li>
            <li>A capital loss is a 2026 loss only if the settlement date falls in 2026. This page does not name the last trade date. Ask the broker. The 30-day superficial-loss window still applies.</li>
            <li>An RRSP contribution for the 2026 deduction can still be made in the first 60 days of 2027. December 31 is the wrong countdown for that one item.</li>
        </ul>
    </div>

    <p>The year-round map is the <a href="/blog/tax-planning-calendar/">tax planning calendar</a>. This page is the December cut. It assumes the TFSA is already a habit, which is the <a href="/blog/tfsa-contribution-optimization/">January contribution guide</a>. If the TFSA is not full, that is the first dollar, and it is not a December trick.</p>

    <h2>Which deadlines are actually December 31?</h2>

    <table>
        <caption>2026 year-end timing, from the pages reviewed</caption>
        <thead>
            <tr>
                <th>Move</th>
                <th>The date that matters</th>
                <th>What people get wrong</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>FHSA contribution you want to deduct for 2026</td>
                <td>In the account by December 31, 2026</td>
                <td>Treating it like an RRSP, which has a 60-day window into the next year</td>
            </tr>
            <tr>
                <td>TFSA withdrawal you want back as 2027 room</td>
                <td>The withdrawal has to occur in 2026. Room returns January 1, 2027, plus the 2027 dollar limit once CRA announces it</td>
                <td>Recontributing in December and creating an excess. See the <a href="/blog/tfsa-overcontribution-penalty/">penalty page</a></td>
            </tr>
            <tr>
                <td>Charitable donation for the 2026 credit</td>
                <td>Gift made in 2026</td>
                <td>A pledge, or a security still sitting at the broker on January 2</td>
            </tr>
            <tr>
                <td>Tax-loss sale for a 2026 capital loss</td>
                <td>Settlement date in 2026</td>
                <td>Trading on the last open day and settling in January. Confirm the broker's cutoff. Do not use a date from a blog</td>
            </tr>
            <tr>
                <td>Medical expenses</td>
                <td>Any 12-month period ending in 2026, not a December 31 cliff</td>
                <td>Waiting for December when an earlier 12-month window already clears the threshold. The credit is the <a href="/blog/medical-expense-tax-credit-canada/">medical expense guide</a></td>
            </tr>
            <tr>
                <td>RRSP deduction for 2026</td>
                <td>First 60 days of 2027 are still open</td>
                <td>Rushing a December transfer that could wait, or missing the real deadline in March because December felt final</td>
            </tr>
            <tr>
                <td>RRIF minimum for 2026</td>
                <td>The carrier has to pay the minimum in the calendar year</td>
                <td>Assuming a December 30 click still settles as a 2026 payment. Ask the carrier. The factors are the <a href="/blog/rrif-minimum-withdrawal/">RRIF minimum table</a></td>
            </tr>
        </tbody>
    </table>

    <h2>Nine moves, in the order that changes the bill</h2>

    <ol>
        <li><strong>Stop a same-year TFSA round trip.</strong> If you need cash, withdraw. If you also want to contribute, check room first. A December withdrawal does not fund a December contribution.</li>
        <li><strong>Fund the FHSA by December 31 if 2026 is the deduction year you want.</strong> CRA says contributions may be deducted in the year they are made or a later year, and that you cannot use a 2026 contribution on a 2025 return. The mirror image is the planning point: a contribution on January 2, 2027 is a 2027 event. Annual room in the year you open is $8,000, and the lifetime deduction cap CRA states is $40,000. Unused participation room carries forward under CRA's formula, up to the annual mechanics on the FHSA pages, not as a blank cheque. The account is the <a href="/blog/fhsa-guide/">FHSA guide</a>.</li>
        <li><strong>Harvest a loss only if settlement will land in 2026 and the substitute is not identical.</strong> The denial rule is the <a href="/blog/superficial-loss-rule-canada/">superficial loss rule</a>: you or an affiliated person acquire the same property in the 30 days before or after the sale and still hold it at the end of that window. A TFSA or RRSP rebuy counts as your acquisition. The calendar version is <a href="/blog/tax-loss-harvesting-calendar-canada/">tax-loss harvesting</a>. Turn off the DRIP before you sell.</li>
        <li><strong>Donate appreciated securities in kind if the gift was going to happen anyway.</strong> The donation credit is the <a href="/blog/charitable-donation-tax-credit-canada/">charitable donation guide</a>. The tax point of an in-kind gift of publicly listed securities is that the capital gain can be nil while the credit uses the fair market value, on the conditions in the Income Tax Act. Get the transfer completed in 2026. A December 31 instruction that the broker completes in January is a 2027 gift.</li>
        <li><strong>Pick the medical 12-month window on purpose.</strong> CRA lets you claim eligible expenses for any 12-month period ending in the tax year, once the expenses clear the threshold on the return. December 31 is not magic. A window that ends in June can be the one that clears it. Do not delay a pair of glasses into a worse window for the sake of a round date.</li>
        <li><strong>Pay the interest on a prescribed-rate loan by January 30, and set the transfer in December so it cannot slip.</strong> The rate for a new loan made from October 1 to December 31, 2026 is 3 percent, from CRA's fourth-quarter page. The deadline and the paperwork are the <a href="/blog/prescribed-rate-spousal-loans/">spousal loan guide</a>. One late year can attribute the income for that year and later years.</li>
        <li><strong>Take the RRIF minimum the carrier requires for 2026.</strong> The minimum is taxable. It is not optional once the plan has a minimum. If you want extra income in 2026 for a bracket you have already modelled, request it early enough that the carrier pays it in 2026. If you do not, do not manufacture a withdrawal to "use a bracket" without reading the <a href="/blog/oas-gis-clawback-canada/">OAS recovery tax</a>.</li>
        <li><strong>Do not prepay the RRSP out of panic.</strong> The 2026 deduction can be supported by a contribution in the first 60 days of 2027, and you designate the year. Contribute in December only if the cash and the room are ready and you want the deduction on the 2026 return for a reason you can say out loud. The <a href="/blog/rrsp-playbook/">RRSP playbook</a> is that reason.</li>
        <li><strong>Write down the superficial-loss dates before the family gathering.</strong> A spouse's automatic purchase, a joint DRIP, and a January TFSA contribution into the same ticker are how December losses disappear. One shared note with the ticker and the first safe date is the whole control.</li>
    </ol>

    <h2>I ran the numbers on a December TFSA withdrawal</h2>

    <div class="example-box">
        <strong>Illustration: $7,000 out on December 15 and back on December 20</strong>
        <p>Assume the person had used all available room, including the 2026 dollar limit of $7,000, and has no unused room left. They withdraw $7,000 on December 15. CRA's rule is that the withdrawn amount becomes room on January 1 of the next year, not on December 16. They contribute $7,000 again on December 20. That contribution is an excess of $7,000 for the rest of December. The tax on excess TFSA amounts is 1 percent a month, charged for each month the excess stays in. One month on $7,000 is $70. The larger cost is the habit: the same pattern in a larger account, or a contribution that sits in the account into January before the new room arrives, is still an excess until the dates line up. This is arithmetic on CRA's timing rule and the 1 percent monthly tax described on the excess-TFSA page. It is not your notice. If the withdrawal was to fund a January contribution, wait until January.</p>
    </div>

    <p>The useful December withdrawal is the one you needed for spending, or the one that moves an asset you do not want inside the TFSA, with the room deliberately parked until next year. It is not a tax-loss sale. Losses inside a TFSA are not your capital losses. Selling inside the TFSA to "harvest" does nothing on the T1 and can only shrink the account.</p>

    <h2>Tax-loss selling without inventing a settlement date</h2>

    <p>Canada moved to a shorter settlement cycle. The legal question for the tax return is still the settlement date, not the click. CRA treats the disposition of a publicly traded security as occurring on the settlement date for purposes of which year gets the loss. December 31, 2026 is a Thursday. Whether the market is open, whether your security settles T+1, and whether a holiday pushes settlement into January are facts for the broker and the exchange, not a date this page will guess. Place the order early enough that the broker confirms, in writing, that settlement falls in 2026. Then count 30 days forward and 30 days back before anyone affiliated rebuys that security.</p>

    <div class="warning-box">
        <strong>A loss only offsets capital gains:</strong>
        <p>A 2026 capital loss reduces 2026 capital gains first. The unused loss can be carried, under the capital-loss rules, to other years. It does not reduce salary. If you have no gains in 2026 and no gains to carry the loss against, the December trade is a portfolio decision, not a tax refund. The inclusion rate in force is one-half, which is the <a href="/blog/capital-gains-tax-canada/">capital gains guide</a>.</p>
    </div>

    <h2>Who should care about which line</h2>

    <p>An employee with a full TFSA and no taxable account can ignore the harvesting section. Their December list is the FHSA if a first home is real, the donation if they give, the medical window if they had a large year, and the RRSP only if the bracket justifies it. An incorporated owner has a different December: salary versus dividend is a compensation decision with a corporate year-end that may not be December 31. That decision is <a href="/blog/salary-vs-dividends-incorporated-canada/">salary versus dividends</a>, not a personal TFSA trick. A retiree with a RRIF should look at the minimum, the OAS recovery threshold, and pension splitting before they request an extra December payment. A parent saving in an RESP should know that the Canada Education Savings Grant follows contributions in the calendar year. Confirm the year's grant room on the ESDC page before you treat December 31 as a grant deadline. This article does not restate a grant dollar amount it is not quoting from that page in the same sentence.</p>

    <h2>Frequently asked questions</h2>

    <h3>Is December 31 the RRSP deadline?</h3>
    <p>No. A contribution in the first 60 days of 2027 can be deducted on the 2026 return, up to your available room. December 31 of the year you turn 71 is a different, harder deadline, because that is the last day to contribute to your own RRSP. The ordinary working-age deadline is the 60-day rule.</p>

    <h3>Can I withdraw from my TFSA in December and recontribute in December?</h3>
    <p>Only if you still have unused room from before that withdrawal. The amount you withdraw becomes new room on January 1 of the following year. A same-month recontribution with no other room is an excess.</p>

    <h3>What is the last day to sell for a 2026 tax loss?</h3>
    <p>The day your broker will settle in 2026. This page does not publish that date. Ask the broker, get the settlement date, and then apply the superficial-loss window around the trade.</p>

    <h3>Do FHSA contributions have a grace period into March?</h3>
    <p>No. CRA says the FHSA contribution period is the calendar year. A contribution made in 2027 is not a 2026 deduction. You can choose to deduct a 2026 contribution in 2026 or a later year. You cannot pull a 2027 contribution backward.</p>

    <h3>Should I trigger a capital gain in December to "use a low bracket"?</h3>
    <p>Only if you were going to sell and the bracket this year is genuinely lower than the bracket you expect in the year you would otherwise sell. A gain you manufacture to fill a bracket is still a gain, included at one-half, and it uses cost base you do not get back. Most households should not invent dispositions in the last week of December.</p>

    <h3>Does a year-end bonus change any of this?</h3>
    <p>A bonus paid in 2026 is 2026 employment income, whenever you feel you earned it. If it lands in December, the RRSP deduction and the FHSA deduction are the tools that can still move 2026 taxable income, subject to room and to the FHSA calendar-year rule. The withholding on the bonus is not the final tax. The return is.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account/tax-deductions-fhsa-contributions.html">CRA: FHSA deductions and the January 1 to December 31 contribution period</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/contributing/calculate-room.html">CRA: TFSA room, including the January 1 return of withdrawals</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/prescribed-interest-rates/2026-q4.html">CRA: prescribed interest rates, fourth quarter 2026</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-20805-fhsa-deduction.html">CRA: line 20805, you cannot deduct a 2026 FHSA contribution on a 2025 return</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>December is a filter. The return is the system.</strong></p>
        <p>The 2026 tax guide is the filing companion for the moves on this list, $49 CAD.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),
];
