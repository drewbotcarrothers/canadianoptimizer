import { batchFooter, batchPost } from './types';

const D = '2026-11-22';
const UPDATED = '2026-11-27';
const TFSA = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account';
const LIMITS = 'https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html';
const INDEXATION = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/adjustment-personal-income-tax-benefit-amounts.html';

const disclaimer = `General education, not tax or financial advice. Rules come from the Canada Revenue Agency TFSA pages listed under Sources, read on November 22, 2026. Priya, the $5,000 re-contribution, the $7,000 account that grows to $9,000 or falls to $6,000, and the other dollar amounts in examples are illustrations, not your numbers. Your own room depends on your full transaction history with every TFSA issuer, so check your records, confirm the current CRA pages, and ask a tax professional about your own file.`;

const content = `<div class="container">

    <div class="hook">
        Taking money out of a TFSA is the easy part. <span class="highlight">Putting it back is where people get taxed, because the room you just freed up does not exist yet.</span> This guide, part of our <a href="/category/investing/accounts-asset-location/">accounts and asset location hub</a>, shows exactly when your room returns and what an early re-contribution costs, month by month.
    </div>

    <p>You can withdraw from a TFSA at any time without tax, but the room does not come back right away. According to the CRA's 2026 TFSA pages, the amount you withdraw is added back to your contribution room on January 1 of the next year. Re-contribute sooner without unused room and the excess is taxed at 1% a month.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>A withdrawal in 2026 becomes new room on January 1, 2027, on top of the 2027 dollar limit of $7,500.</li>
            <li>Re-contributing in the same year is only safe up to the unused room you already had before the withdrawal.</li>
            <li>The tax on an excess is 1% of the highest excess in each month, with no grace amount, and it counts the month you fix it.</li>
            <li>Moving a TFSA to another institution should be a direct transfer, never a withdrawal and a new deposit.</li>
            <li>Your CRA account lags by months, so your own statements are the record that counts.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#when">When room comes back</a></li>
            <li><a href="#timeline">A withdrawal traced through two years</a></li>
            <li><a href="#cost">What re-contributing early costs</a></li>
            <li><a href="#growth">Growth, losses and fees</a></li>
            <li><a href="#transfers">Withdrawals vs transfers</a></li>
            <li><a href="#check">How to check your room first</a></li>
            <li><a href="#fix">If you already put it back</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="when">When does TFSA room come back after a withdrawal?</h2>
    <p>On January 1 of the calendar year after the withdrawal, not before. The CRA's page on <a href="${TFSA}/withdraw.html">withdrawing from a TFSA</a> says a withdrawal "does not immediately create new available contribution room", and the full amount is added back at the start of the next year.</p>
    <p>The CRA's <a href="${TFSA}/contributing/calculate-room.html">room calculation</a> has four parts, and it helps to see them side by side:</p>
    <div class="table-wrapper">
        <table>
            <caption>How your available TFSA room is built each January (CRA formula, checked November 2026)</caption>
            <thead>
                <tr><th>Part</th><th>Adds or subtracts</th><th>What it means for a withdrawal</th></tr>
            </thead>
            <tbody>
                <tr><td>This year's TFSA dollar limit</td><td>Adds</td><td>Arrives on January 1 for every eligible resident</td></tr>
                <tr><td>Unused room from previous years</td><td>Adds</td><td>Room you never used carries forward with no expiry</td></tr>
                <tr class="highlight-row"><td>Withdrawals made last year</td><td>Adds</td><td>This is where a withdrawal comes back, one January later</td></tr>
                <tr><td>Contributions already made this year</td><td>Subtracts</td><td>Every deposit, including a re-deposit of withdrawn money, uses room immediately</td></tr>
            </tbody>
        </table>
    </div>
    <p>The asymmetry is the whole rule. A contribution reduces your room the day you make it; a withdrawal restores room only at the next January. The CRA lists three things that have no effect on your room in either direction: qualifying transfers, exempt contributions and specified distributions.</p>
    <p>For scale: the dollar limit is $7,000 for 2026, the same as 2024 and 2025, per the CRA's <a href="${LIMITS}">limits table</a>. Someone who has been an adult resident since 2009 and never contributed has $109,000 of room in 2026, which is the sum of every annual limit from 2009 to 2026. The 2027 dollar limit is $7,500, effective January 1, 2027, on the CRA's <a href="${INDEXATION}">indexation adjustment page</a>, reviewed November 27, 2026. The 2027 indexation increase is 2.6%. Footnote 5 says the limit is $5,000 indexed to inflation after 2009 and rounded to the nearest $500. Adding that $7,500 to the 2009–2026 total gives $116,500 of cumulative room from January 1, 2027 for the same person. That sum is not a balance the CRA prints as one number, and it is not your room if your history is different.</p>

    <h2 id="timeline">How does one withdrawal move through the calendar?</h2>
    <p>A withdrawal touches three dates: the day you take the money, the January it returns as room, and the spring the CRA's records catch up. The gap between the second and third is where most over-contributions start.</p>

    <div class="example-box">
        <strong>Example (illustration): Priya withdraws $12,000 on March 3, 2026</strong>
        <div class="example-calculation">
            <div class="line"><span>Unused room at the end of 2025</span><span>$0</span></div>
            <div class="line"><span>2026 dollar limit, added January 1, 2026</span><span>$7,000</span></div>
            <div class="line"><span>Contribution in January 2026</span><span>−$7,000</span></div>
            <div class="line"><span>Withdrawal on March 3, 2026 (no effect on 2026 room)</span><span>$12,000 out</span></div>
            <div class="line"><span>Room left for the rest of 2026</span><span>$0</span></div>
            <div class="line total"><span>Room on January 1, 2027</span><span>$12,000 + $7,500</span></div>
        </div>
        <p>Priya and her amounts are made up. The rule that the $12,000 returns only in January comes from the CRA withdrawal page.</p>
    </div>

    <div class="table-wrapper">
        <table>
            <caption>Priya's withdrawal on the calendar (dates from the CRA TFSA pages)</caption>
            <thead>
                <tr><th>When</th><th>What happens</th><th>What Priya should do</th></tr>
            </thead>
            <tbody>
                <tr><td>March 3, 2026</td><td>$12,000 leaves her TFSA, tax-free</td><td>Nothing goes back in during 2026 unless she has unused room (she has none)</td></tr>
                <tr class="highlight-row"><td>January 1, 2027</td><td>$12,000 is added back as room, plus the $7,500 2027 dollar limit</td><td>She can re-contribute from this date</td></tr>
                <tr><td>By the end of February 2027</td><td>Her issuer reports her 2026 transactions to the CRA</td><td>Keep her own statement of the March withdrawal</td></tr>
                <tr><td>Spring 2027</td><td>The CRA updates the TFSA figure in her CRA account</td><td>Treat any figure shown before then as out of date</td></tr>
            </tbody>
        </table>
    </div>
    <p>The spring lag is not a guess. The CRA's own pages say issuers send each year's transactions by the end of February of the next year, that TFSA records from 2025 were processed by April 2026, and that the account figure is "only updated once per year in the spring". On January 1 the CRA account can show room that you have already used.</p>

    <h2 id="cost">What does it cost to put the money back in the same year?</h2>
    <p>If you had no unused room, it costs 1% of the re-contributed amount for every month from the re-contribution to December, counting the month you put it back. The excess then disappears on January 1, because the withdrawal is added back as room that day. The CRA's <a href="${TFSA}/owing-tax/excess.html">tax on excess amounts</a> page sets the rate and the monthly rule.</p>

    <div class="table-wrapper">
        <table>
            <caption>Tax on a $5,000 withdrawal re-contributed in 2026 with $0 unused room, by month of re-contribution (our calculation from the CRA's 1%-a-month rule)</caption>
            <thead>
                <tr><th>Month the $5,000 goes back in</th><th>Months taxed in 2026</th><th>Tax owed</th></tr>
            </thead>
            <tbody>
                <tr><td>March</td><td>10</td><td>$500</td></tr>
                <tr><td>April</td><td>9</td><td>$450</td></tr>
                <tr><td>May</td><td>8</td><td>$400</td></tr>
                <tr><td>June</td><td>7</td><td>$350</td></tr>
                <tr><td>July</td><td>6</td><td>$300</td></tr>
                <tr><td>August</td><td>5</td><td>$250</td></tr>
                <tr><td>September</td><td>4</td><td>$200</td></tr>
                <tr><td>October</td><td>3</td><td>$150</td></tr>
                <tr><td>November</td><td>2</td><td>$100</td></tr>
                <tr><td>December</td><td>1</td><td>$50</td></tr>
                <tr class="highlight-row"><td>January 2027 or later</td><td>0</td><td>$0</td></tr>
            </tbody>
        </table>
    </div>

    <p class="did-you-know" data-info-gain><strong>Our calculation:</strong> for someone with no unused room, a $5,000 withdrawal put back in March 2026 costs $500 in TFSA tax, and even a December re-deposit costs $50, while the same deposit made on or after January 1, 2027 costs $0. Waiting a few weeks past New Year's beats every same-year re-contribution.</p>

    <p>Three details change the arithmetic:</p>
    <ul>
        <li><strong>Unused room you already had is safe to use.</strong> With $3,000 of unused room, re-contributing the $5,000 creates a $2,000 excess, which is $20 a month, so a June re-contribution left in until January costs $140.</li>
        <li><strong>The month you fix it still counts.</strong> The CRA's tax is based on the highest excess in each month. Its own example puts a $2,000 excess in during June and removes it in September, and charges four months, $80 in all.</li>
        <li><strong>There is no grace amount.</strong> The CRA's <a href="${TFSA}/tax-payable-on-tfsas/examples-tax-payable-on-excess-tfsa-amount.html">worked examples</a> point out that RRSPs have a $2,000 cushion and TFSAs do not: the 1% applies from the first dollar.</li>
    </ul>
    <p>The table also assumes the excess is left alone until January. Withdrawing the excess sooner stops the tax after that month, though that defeats the reason for putting the money back.</p>

    <div class="warning-box">
        <strong>The trap that catches the most people:</strong> taking money out for a purchase that falls through, then putting it straight back. The CRA's own example is a $3,000 trip withdrawal re-deposited in the same year by someone who had already used the full year's room. Every dollar of it is an over-contribution.
    </div>

    <h2 id="growth">Does the growth you withdraw come back as room?</h2>
    <p>Yes. Room comes back in the amount you withdraw, not the amount you put in, so tax-free growth becomes new room the following January. Losses work the other way.</p>
    <div class="example-box">
        <strong>Example (illustration): the same $7,000 contribution, two outcomes</strong>
        <div class="example-calculation">
            <div class="line"><span>Contributed in an earlier year</span><span>$7,000</span></div>
            <div class="line"><span>Account grows to $9,000; all of it is withdrawn in 2026</span><span>$9,000 of room returns January 1, 2027</span></div>
            <div class="line"><span>Account falls to $6,000; all of it is withdrawn in 2026</span><span>$6,000 of room returns January 1, 2027</span></div>
            <div class="line total"><span>Room the falling account never gets back</span><span>$1,000</span></div>
        </div>
        <p>The amounts are made up. They follow the CRA's formula, which adds back the amount you withdraw, and its <a href="${TFSA}/contributing/how.html">page on contributing</a>, which says an investment loss "is never added back as available contribution room".</p>
    </div>
    <p>That is why a TFSA is a costly place for speculative bets that might go to zero: the room used by the loss is gone for good. It is also why some investors draw from the TFSA last in retirement, as our <a href="/blog/tfsa-retirement-strategy/">TFSA retirement strategy</a> explains. Fees work differently again: the CRA says TFSA management fees and fees paid by a TFSA trust do not affect your room.</p>

    <h2 id="transfers">Which ways of moving money out don't count as withdrawals?</h2>
    <p>A direct transfer between TFSAs, arranged by the receiving institution, is not a withdrawal and uses no room. Taking the money out yourself and depositing it elsewhere is a withdrawal followed by a new contribution, even if both happen the same day.</p>
    <div class="table-wrapper">
        <table>
            <caption>How each way of moving TFSA money affects room (CRA TFSA pages, November 2026)</caption>
            <thead>
                <tr><th>What you do</th><th>Counts as a withdrawal?</th><th>Room effect</th></tr>
            </thead>
            <tbody>
                <tr><td>Withdraw cash to your bank account</td><td>Yes</td><td>Amount returns next January 1</td></tr>
                <tr class="highlight-row"><td>Direct transfer to your TFSA at another institution (in kind, cash or partial)</td><td>No</td><td>None</td></tr>
                <tr><td>Withdraw yourself, then deposit at the new institution</td><td>Yes, plus a new contribution</td><td>The deposit uses current room; any shortfall is an excess</td></tr>
                <tr><td>Transfer to an ex-spouse under a separation agreement or court order, done directly</td><td>No</td><td>None for either person, and it does not return as room</td></tr>
                <tr><td>Pay account or management fees</td><td>No</td><td>None</td></tr>
            </tbody>
        </table>
    </div>
    <p>The CRA's <a href="${TFSA}/transfer.html">transfer page</a> shows how expensive a do-it-yourself move can be: a holder who withdrew $50,000 to chase a better rate at another bank and deposited it herself had a $50,000 excess, taxed at $500 a month until removed. If you are moving accounts, start the transfer from the receiving institution; our guide to <a href="/blog/transfer-investment-account-leave-advisor-canada/">in-kind transfers and transfer fees</a> covers the paperwork, and some institutions charge a fee to send a transfer.</p>

    <h2 id="check">How do I check my room before I re-contribute?</h2>
    <p>Add it up from your own statements. The CRA recommends calculating your room from your own records rather than relying on the figure in your CRA account, which can miss the past year's transactions until spring.</p>
    <ol>
        <li><strong>Collect every TFSA statement.</strong> Your room is shared across all your TFSAs, so include every issuer.</li>
        <li><strong>Start from your unused room at the end of last year.</strong> If you are unsure of it, rebuild it from the year you first became eligible, using the CRA's table of annual dollar limits.</li>
        <li><strong>Add this year's dollar limit and last year's withdrawals.</strong> Withdrawals made this year do not count yet.</li>
        <li><strong>Subtract every contribution made this year,</strong> including re-deposits.</li>
        <li><strong>Use the CRA's tools as a check.</strong> The CRA offers Form RC343, a contribution room worksheet, and a "do your own calculation" calculator in the CRA account.</li>
    </ol>
    <p>If the CRA's figures disagree with your statements, the CRA says to contact the issuer, which must send an amended report. Our <a href="/blog/tfsa-contribution-optimization/">TFSA contribution timing guide</a> covers when in the year to use new room once you know it.</p>

    <ul class="checklist">
        <li>I know my unused room before this year's withdrawal.</li>
        <li>Any same-year re-deposit is no larger than that unused room.</li>
        <li>Moves between institutions are direct transfers started by the receiving institution.</li>
        <li>I have kept the statement showing the withdrawal date and amount.</li>
        <li>Anything I could not prove waits until January 1.</li>
    </ul>

    <h2 id="fix">What should I do if I already put the money back?</h2>
    <p>Withdraw the excess as soon as you spot it, then file a TFSA Return. Waiting for the CRA's letter only adds months of tax.</p>
    <ol>
        <li><strong>Withdraw the full excess.</strong> The CRA says to do it as soon as possible; a partial withdrawal still leaves the month taxed on the highest excess.</li>
        <li><strong>File Form RC243, the TFSA Return, with Schedule A</strong> by June 30 of the year after the excess. A 2026 excess means filing by June 30, 2027. The CRA expects the return whether or not it writes to you first.</li>
        <li><strong>Ask for relief if it was an honest mistake.</strong> The CRA may waive or cancel the tax when it arose from a reasonable error and the excess was withdrawn. You request it by letter through "Submit documents" in your CRA account or by mail.</li>
        <li><strong>Object if the assessment is wrong.</strong> You have 90 days from the date on the TFSA notice of assessment to file a notice of objection.</li>
    </ol>
    <p>A deliberate over-contribution is treated more harshly: the CRA says it may be taxed at the 100% advantage rate. The full penalty mechanics, including how the TFSA Return works line by line, are in our guide to the <a href="/blog/tfsa-overcontribution-penalty/">TFSA over-contribution penalty</a>.</p>

    <h2 id="special">Do the withdrawal rules change if I leave Canada or rely on benefits?</h2>
    <p>Leaving Canada changes the re-contribution rule; benefits do not change the withdrawal rule. As a non-resident you can still withdraw tax-free in Canada, but any re-contribution is a taxable non-resident contribution, and the room from your withdrawals only becomes usable once you are a resident again. Our guide to <a href="/blog/investing-when-leaving-canada-tfsa-rrsp/">your TFSA and RRSP when you leave Canada</a> walks through it.</p>
    <p>For benefits, the CRA says TFSA income and withdrawals do not affect your eligibility for federal income-tested benefits and credits. That is one reason the account matters more for lower-income savers, which our <a href="/blog/rrsp-or-tfsa-by-income/">RRSP or TFSA by income</a> table shows in dollars.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Can I withdraw from my TFSA and put it back in the same year?</h3>
    <p>Only up to the unused room you had before the withdrawal. The withdrawn amount itself returns as room on January 1 of the next year, so re-depositing it earlier without spare room creates an excess taxed at 1% a month.</p>
    <h3>Is a TFSA withdrawal taxable?</h3>
    <p>No, not in Canada. Withdrawals are tax-free, including the growth. A non-resident's country of residence may tax them, as the CRA notes.</p>
    <h3>Do I get the room back on the growth I withdraw?</h3>
    <p>Yes. The amount withdrawn is what returns as room, so if $7,000 grew to $9,000 and you take it all out, $9,000 of room comes back the next January 1.</p>
    <h3>Does a transfer between my TFSAs reset anything?</h3>
    <p>No. A direct transfer arranged by the receiving institution does not touch your room. Withdrawing and depositing it yourself does, because it counts as a withdrawal and a new contribution.</p>
    <h3>Why does my CRA account show more room than I have?</h3>
    <p>Because it is updated once a year, in the spring, after issuers report the previous year's transactions by the end of February. Early in the year it may not include last year's contributions.</p>
    <h3>How is the 1% tax calculated if I fix the excess mid-month?</h3>
    <p>The tax is 1% of the highest excess in the account during each month, so the month you remove it is still charged in full.</p>
    <h3>What is the deadline to report a TFSA excess?</h3>
    <p>File Form RC243 and Schedule A, and pay, by June 30 of the year after the year the tax applies.</p>
    <h3>What is the 2027 TFSA limit?</h3>
    <p>$7,500, effective January 1, 2027. The CRA's indexation adjustment page, reviewed November 27, 2026, lists $7,500 for 2027 and $7,000 for 2026, 2025, and 2024. The 2027 indexation increase is 2.6%. Footnote 5 says the limit is $5,000 indexed to inflation after 2009 and rounded to the nearest $500. Cumulative room from 2009 through 2027 is $116,500 for someone eligible every year who has never contributed. Through 2026 it is $109,000.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${TFSA}/withdraw.html">CRA: Withdrawing from a TFSA</a>, reviewed November 22, 2026</li>
        <li><a href="${TFSA}/contributing/calculate-room.html">CRA: Calculate your TFSA contribution room</a>, reviewed November 22, 2026</li>
        <li><a href="${TFSA}/contributing/before.html">CRA: Before you contribute to a TFSA (dollar limits by year)</a>, reviewed November 22, 2026</li>
        <li><a href="${INDEXATION}">CRA: Indexation adjustment for personal income tax and benefit amounts</a>, reviewed November 27, 2026. 2027 TFSA dollar limit $7,500. Footnote 5.</li>
        <li><a href="${LIMITS}">CRA: MP, DB, RRSP, DPSP, ALDA, TFSA limits, YMPE and the YAMPE</a>, reviewed November 22, 2026</li>
        <li><a href="${TFSA}/contributing/how.html">CRA: How to contribute to a TFSA (investment losses)</a>, reviewed November 22, 2026</li>
        <li><a href="${TFSA}/owing-tax/excess.html">CRA: Tax on excess TFSA amounts</a>, reviewed November 22, 2026</li>
        <li><a href="${TFSA}/tax-payable-on-tfsas/examples-tax-payable-on-excess-tfsa-amount.html">CRA: Examples, tax payable on excess TFSA amount</a>, reviewed November 22, 2026</li>
        <li><a href="${TFSA}/contributing/overcontribute.html">CRA: If you over-contribute to a TFSA</a>, reviewed November 22, 2026</li>
        <li><a href="${TFSA}/owing-tax/pay.html">CRA: If you have to pay tax on a TFSA (RC243, waivers, objections)</a>, reviewed November 22, 2026</li>
        <li><a href="${TFSA}/transfer.html">CRA: Requesting a TFSA transfer</a>, reviewed November 22, 2026</li>
        <li><a href="${TFSA}/non-resident.html">CRA: How non-residency affects your TFSA</a>, reviewed November 22, 2026</li>
        <li><a href="${TFSA}/what.html">CRA: What is a TFSA (impact on benefits)</a>, reviewed November 22, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/tfsa-overcontribution-penalty/">TFSA over-contribution penalty: how it is calculated and fixed</a></li>
        <li><a href="/blog/how-to-open-tfsa/">How to open a TFSA, step by step</a></li>
        <li><a href="/blog/rrsp-or-tfsa-by-income/">RRSP or TFSA at every income</a></li>
        <li><a href="/blog/investing-when-leaving-canada-tfsa-rrsp/">Your TFSA and RRSP when you leave Canada</a></li>
        <li><a href="/blog/tfsa-strategies/">TFSA strategies most Canadians miss</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Withdrawal timing is one rule in a bigger plan for your accounts.</strong></p>
        <p>The Canadian Investing Guide covers every registered account, the order to fill them, and what to hold in each. $29 CAD.</p>
        <a href="/ebooks/investing-guide/" class="cta-button">See the Canadian Investing Guide</a>
    </div>

    ${batchFooter(D, 'Investing', disclaimer, UPDATED)}

</div>`;

export const tfsaWithdrawalRulesPost = {
  ...batchPost({
  date: D,
  category: 'Investing',
  categorySlug: 'investing',
  subcategory: 'accounts-asset-location',
  slug: 'tfsa-withdrawal-rules',
  title: 'TFSA Withdrawal Rules: When Your Room Comes Back',
  excerpt:
    'TFSA room from a withdrawal returns on January 1 of the next year. See the dates, what an early re-contribution costs month by month, and how to fix an excess.',
  content,
}),
  updated: UPDATED,
};
