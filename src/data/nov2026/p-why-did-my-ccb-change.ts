import { batchFooter, batchPost } from './types';

const D = '2026-11-26';
const HUB = '/category/government-benefits/family-child/';
const CCB = 'https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit';
const ESDC = 'https://www.canada.ca/en/employment-social-development/news/2026/07/canada-child-benefit-payments-increasing-in-2026-2027.html';

const disclaimer = `General education, not tax or benefit advice. Amounts, income thresholds, reduction rates and the reasons a payment changes come from the Canada Revenue Agency's Canada child benefit pages for the July 2026 to June 2027 payment period and the July 20, 2026 Employment and Social Development Canada release, all read on November 26, 2026. The tables are our own calculations from the CRA's published formula, rounded to the nearest dollar, using labelled example incomes and ages; your benefit notice in your CRA account is the authority for your own payment. Nina and Tom are a labelled illustration. Talk to the CRA or a tax professional about your own file.`;

const content = `<div class="container">

    <div class="hook">
        You open your banking app, see a Canada Child Benefit deposit that is smaller than last month's, and nothing in your life changed. <span class="highlight">Most of the time the cause is one of a handful of things, and the biggest, the July reset, is built into how the benefit works.</span> This guide, part of our <a href="${HUB}">family and child benefits hub</a>, helps you work out which one it is and what to do about it.
    </div>

    <p>A Canada Child Benefit payment changes when your income, family or custody situation changes, and most often each July, when the CRA recalculates using last year's adjusted family net income. For July 2026 to June 2027 the maximums are $8,157 per child under 6 and $6,883 per child aged 6 to 17 (CRA).</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Payments from July 2026 to June 2027 are based on your 2025 adjusted family net income, so a raise in 2025 shows up now, not in 2025.</li>
            <li>A child turning 6 cuts the maximum for that child by $1,274 a year, about $106 a month, with no change in income.</li>
            <li>A $10,000 rise in family income cuts the annual payment by $700 with one child and $1,350 with two, inside the main reduction range.</li>
            <li>A payment that stops, as opposed to shrinking, usually means a missing return, a missing letter reply or a changed address or bank account.</li>
            <li>Check the benefit notice in your CRA account first: the CRA says it shows details of any change to your calculation.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#july">The July reset</a></li>
            <li><a href="#diagnose">Diagnose your change</a></li>
            <li><a href="#income">How income moves the amount</a></li>
            <li><a href="#age">Birthdays and the age 6 drop</a></li>
            <li><a href="#stopped">When a payment stops</a></li>
            <li><a href="#overpay">Overpayments and repayment</a></li>
            <li><a href="#custody">Shared custody and separations</a></li>
            <li><a href="#fix">What to do now</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </div>

    <h2 id="july">Why does the Canada Child Benefit change every July?</h2>
    <p>Because the CRA recalculates it every July using your adjusted family net income from the previous year. The CRA's <a href="${CCB}/how-much.html">how much you can get</a> page says payments from July 2026 to June 2027 are based on 2025 income, and payments from July 2025 to June 2026 were based on 2024 income. The benefit is also indexed to inflation each year.</p>
    <p>That lag explains the most common surprise. A bonus, a new job or a spouse returning to work in 2025 lowers your payment from July 2026, and it keeps lowering it until the following June. A drop in income does the opposite, but only from the next July. Nothing you do in December 2026 changes your payments until July 2027. Our <a href="/blog/canada-child-benefit-optimization-canada/">Canada Child Benefit July reset guide</a> explains how to plan around the lag, and this page is for working out why a payment moved.</p>
    <p>Indexation moves the maximums too. The July 20, 2026 <a href="${ESDC}">Employment and Social Development Canada announcement</a> gives the year-over-year increase as up to $160 for each child under 6 and up to $135 for each child aged 6 to 17. Taking those increases off this year's maximums puts last year's at $7,997 and $6,748 (our subtraction), so the same family at the same income got a small increase this July, and a raise in income can cancel it out.</p>

    <h2 id="diagnose">Which of the usual reasons explains your change?</h2>
    <p>Start with whether your payment is smaller or has stopped. The CRA's <a href="${CCB}/get-payments.html">keep getting your payments</a> page lists the reasons, and the table below groups them by what you will see.</p>
    <div class="table-wrapper">
        <table>
            <caption>What you see, the likely cause and what to do (our grouping of the CRA's keep-getting-your-payments page, read November 26, 2026)</caption>
            <thead><tr><th>What you see</th><th>Likely cause</th><th>What to do</th></tr></thead>
            <tbody>
                <tr class="highlight-row"><td>Smaller from July</td><td>Your 2025 family income was higher than your 2024 income</td><td>Check your benefit notice; use the income tables below to confirm the amount</td></tr>
                <tr><td>Smaller in the month after a birthday</td><td>A child turned 6, so the under-6 rate no longer applies</td><td>Nothing; it is automatic</td></tr>
                <tr><td>Smaller after a child turned 18, or the child left</td><td>The child no longer counts, or is no longer in your care</td><td>Tell the CRA right away if the child no longer lives with you</td></tr>
                <tr><td>Different after a separation, divorce or new partner</td><td>Marital status changed, so family income is recalculated</td><td>Update your marital status in your CRA account</td></tr>
                <tr><td>Half the usual amount</td><td>The CRA treats you as having shared custody</td><td>Check the shared custody rules; the CRA does not use other splits</td></tr>
                <tr><td>Smaller, with a letter about a balance owing</td><td>An earlier overpayment is being recovered</td><td>Read the notice; the CRA may hold back future payments until it is repaid</td></tr>
                <tr><td>Nothing at all</td><td>Return not filed, letter not answered, or address or bank details outdated</td><td>File, reply, update your information</td></tr>
            </tbody>
        </table>
    </div>
    <p class="did-you-know" data-info-gain><strong>What this page adds:</strong> a diagnostic table that matches what you see in the deposit to the CRA's listed causes, plus calculated tables for July 2026 to June 2027 showing what each $10,000 of family income and each child's sixth birthday costs, so you can check a changed amount against the CRA's own formula rather than guess.</p>

    <h2 id="income">How much does a rise in family income change the payment?</h2>
    <p>Inside the main reduction range it is a fixed number of cents per dollar, and it depends on how many children you have. For July 2026 to June 2027, the reduction starts when adjusted family net income is over $38,237, and it takes 7% of the excess with one child, 13.5% with two, 19% with three and 23% with four or more, up to $82,847. Above $82,847 the CRA uses a fixed amount plus a smaller percentage.</p>
    <div class="table-wrapper">
        <table>
            <caption>The CRA's reduction formula for July 2026 to June 2027, based on 2025 adjusted family net income (Canada Revenue Agency, read November 26, 2026)</caption>
            <thead><tr><th>Children</th><th>Income $38,237 to $82,847: reduction on the excess over $38,237</th><th>Income over $82,847: reduction</th></tr></thead>
            <tbody>
                <tr><td>One</td><td>7%</td><td>$3,123 plus 3.2% of the excess over $82,847</td></tr>
                <tr><td>Two</td><td>13.5%</td><td>$6,022 plus 5.7%</td></tr>
                <tr><td>Three</td><td>19%</td><td>$8,476 plus 8%</td></tr>
                <tr><td>Four or more</td><td>23%</td><td>$10,260 plus 9.5%</td></tr>
            </tbody>
        </table>
    </div>
    <p>The reduction is subtracted from the maximum for all your children added together. Here is what that produces for three example families. The first row is the CRA's own worked example; the rest are our calculations, rounded to the nearest dollar, on the same formula.</p>
    <div class="table-wrapper">
        <table>
            <caption>Annual CCB at example incomes, July 2026 to June 2027 (rounded to the nearest dollar; our calculation from the CRA formula)</caption>
            <thead><tr><th>Adjusted family net income</th><th>One child under 6</th><th>Two children, aged 3 and 8</th><th>Two children, aged 8 and 10</th></tr></thead>
            <tbody>
                <tr><td>$45,000</td><td>$7,684</td><td>$14,127</td><td>$12,853</td></tr>
                <tr class="highlight-row"><td>$60,000</td><td>$6,634</td><td>$12,102</td><td>$10,828</td></tr>
                <tr><td>$82,847</td><td>$5,034</td><td>$9,018</td><td>$7,744</td></tr>
                <tr><td>$100,000</td><td>$4,485</td><td>$8,040</td><td>$6,766</td></tr>
            </tbody>
        </table>
    </div>
    <p>The CRA's example for a family with one child under 6 and income of $45,000 gives $7,683.59 a year, which matches the first cell. For planning, the useful numbers are the slopes. Inside the main range, each extra $1,000 of income costs $70 a year for a one-child family; with two children it is $135, with three $190, and from four children $230. A $10,000 raise therefore costs a two-child family $1,350 a year, or $112.50 a month, from the next July.</p>
    <div class="example-box">
        <div class="example-title">Illustration: Nina and Tom get a raise</div>
        <p>Nina and Tom (labelled examples) have two children, aged 3 and 8. Their 2025 family income was $70,000 instead of the $60,000 it was in 2024, after Tom changed jobs. Under the July 2026 to June 2027 formula, their annual payment at $60,000 would be $12,102, and at $70,000 it is $10,752, which is $1,350 less, or $112.50 a month. Nothing changed in their household, and the CRA did not make an error. The letter and the benefit notice in their CRA account would show the new income used.</p>
    </div>
    <p>If your income fell, the same logic runs in reverse, but only from the July after the lower-income year. Our <a href="/blog/government-benefits-stacking-map-canada/">benefits stacking map</a> shows how that same income number moves your other benefits, and the <a href="/blog/gst-hst-credit-groceries-essentials-benefit/">Canada Groceries and Essentials Benefit guide</a> covers the one that rides on the same return.</p>

    <h2 id="age">Why does the payment drop when a child turns 6?</h2>
    <p>Because the maximum is lower for children aged 6 to 17. The under-6 maximum is $8,157 a year ($679.75 a month) and the 6 to 17 maximum is $6,883 a year ($573.58 a month). The difference is $1,274 a year, or about $106 a month, for each child who crosses the line.</p>
    <p>The timing follows the CRA's examples. For a child turning 6 in March 2027, the payment is calculated at the under-6 rate for March and at the 6 to 17 rate from April 2027. For a child turning 18 in December 2026, the last payment is in December 2026 at the 6 to 17 rate. A child born in March 2027 may bring a first payment in April 2027 or the month after eligibility.</p>
    <p>Here is how that looks for a family at $60,000: with children aged 3 and 8 the annual payment is $12,102 on the July 2026 to June 2027 formula, and once both are over 6 the same formula gives $10,828, a difference of $1,274. It is a drop you can plan for years ahead, and it is not a CRA mistake.</p>

    <h2 id="stopped">Why did my Canada Child Benefit stop completely?</h2>
    <p>Usually because the CRA is missing something. The CRA's keep-getting-your-payments page lists these reasons for a stopped payment: you did not file your return, you did not respond to a letter, you did not tell the CRA about a change of address, bank account or marital status, your adjusted family net income is now too high, your child turned 18, you no longer have a child in your care, you stopped meeting an eligibility criterion such as residency, or you or your partner did not submit a statement of income.</p>
    <p>Two of those are quick fixes. You must file a return every year, even if your income is tax exempt or you have none, and your partner must file too. If you file late, the CRA says your payments may stop temporarily, and once your return is assessed it will pay any missed amounts as retroactive payments on the next scheduled payment date. File by April 30 to avoid a gap.</p>
    <p>The other quick fix is your personal information. The CRA says to update it as soon as possible after a move: benefit payments may stop if you do not tell it your new address, even if you use direct deposit and the bank account has not changed. If you change banks, do not close the old account until the first payment arrives in the new one, which can take up to a month.</p>

    <h2 id="overpay">What if the CRA says you were overpaid?</h2>
    <p>The CRA sends a notice with a remittance voucher showing the balance owing. According to the CRA, it may keep all or part of future CCB payments, income tax refunds or Canada Groceries and Essentials Benefit payments until the balance is repaid. This may also apply to other programs the CRA administers for the federal, provincial and territorial governments.</p>
    <p>Overpayments often come from a change you did not report, such as a child who no longer lives with you. The CRA says you must tell it right away if you are getting payments for a child who is no longer in your care, stops living with you, or dies, to avoid overpayments and requests to pay back benefits. If the notice came from an error on your return, our guide to <a href="/blog/change-tax-return-refile-t1-adj/">changing a tax return</a> explains how to correct it.</p>

    <h2 id="custody">What changes with shared custody or a separation?</h2>
    <p>With shared custody, each parent gets 50% of what they would get with full custody, and each amount is calculated on that parent's own adjusted family net income. The CRA says it will not split the amount in other proportions, and will not give the full amount to one parent if it considers you to have shared custody. If a child lives with you only part of the time, use the CRA's shared custody rules to check how it sees your arrangement.</p>
    <p>Marital status changes matter because the income test uses family net income, which includes your spouse's or common-law partner's income if you have one. Your marital status, the number of children in your care and your custody arrangement are all on the CRA's list of reasons a payment amount may change. Our guide to <a href="/blog/common-law-taxes-benefits-canada/">common-law status</a> explains when the CRA considers you a couple.</p>

    <h2 id="fix">What should you do if the amount looks wrong?</h2>
    <p>Work through these steps in order before you contact anyone, because most changes trace back to income, a birthday or a custody update.</p>
    <ul class="checklist">
        <li>Sign in to your CRA account and read the benefit notice, which shows details of any change to your calculation. If you have not registered, see our <a href="/blog/cra-my-account-guide/">CRA My Account guide</a>.</li>
        <li>Compare your 2025 adjusted family net income with the prior year. It is line 23600 of your return and your partner's, adjusted for a few items.</li>
        <li>Check the children's ages and whether anyone turned 6 or 18.</li>
        <li>Confirm your address, bank account and marital status are current.</li>
        <li>If a payment is missing, wait 5 business days after the expected date before contacting the CRA.</li>
        <li>If the numbers still do not fit, use the child and family benefits calculator or contact the CRA.</li>
    </ul>
    <p>You will not receive a monthly payment if your total benefit for the year is less than $240. Instead you get one lump sum with your July payment. The next payment date after today is December 11, 2026, according to the CRA's payment dates page.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Why did my Canada Child Benefit go down in July?</h3>
    <p>Because the CRA recalculates every July using last year's adjusted family net income. If your 2025 family income was higher than 2024, your payment from July 2026 is lower, even if your household has not changed.</p>
    <h3>Why did my CCB go down when my child turned 6?</h3>
    <p>The maximum for a child aged 6 to 17 is $6,883 a year, against $8,157 for a child under 6, a difference of $1,274 a year. The payment changes the month after the birthday.</p>
    <h3>Can I get the Canada Child Benefit without filing a tax return?</h3>
    <p>No. The CRA says you must file a return every year, even with no income, and that your payments will stop if you do not. Your spouse or common-law partner must file too.</p>
    <h3>Will a lump sum or bonus in December change my payment right away?</h3>
    <p>No. It affects your 2026 income, which sets payments from July 2027 to June 2028.</p>
    <h3>What is the Canada Child Benefit maximum right now?</h3>
    <p>For July 2026 to June 2027, up to $8,157 a year per child under 6 ($679.75 a month) and $6,883 per child aged 6 to 17 ($573.58 a month), with no reduction when adjusted family net income is under $38,237.</p>
    <h3>Does the CCB include a disability amount?</h3>
    <p>If your child is eligible for the disability tax credit you may also get the child disability benefit, up to $3,480 a year ($290 a month) for July 2026 to June 2027, added to your CCB payment automatically.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${CCB}/how-much.html">Canada Revenue Agency: Canada child benefit, how much you can get</a>, reviewed November 26, 2026</li>
        <li><a href="${CCB}/get-payments.html">Canada Revenue Agency: Canada child benefit, keep getting your payments</a>, reviewed November 26, 2026</li>
        <li><a href="${CCB}/payment-dates.html">Canada Revenue Agency: Canada child benefit, payment dates</a>, reviewed November 26, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview/canada-child-benefit-we-calculate-your-ccb.html">Canada Revenue Agency: Canada child benefit, how we calculate your CCB</a>, reviewed November 26, 2026</li>
        <li><a href="${ESDC}">Employment and Social Development Canada: Canada Child Benefit payments increasing in 2026-2027</a>, July 20, 2026, reviewed November 26, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/canada-child-benefit-optimization-canada/">Canada Child Benefit: the July reset</a></li>
        <li><a href="/blog/government-benefits-stacking-map-canada/">Government benefits stacking map</a></li>
        <li><a href="/blog/canada-benefit-payment-dates/">Canada benefit payment dates</a></li>
        <li><a href="/blog/gst-hst-credit-groceries-essentials-benefit/">Canada Groceries and Essentials Benefit</a></li>
        <li><a href="/blog/canada-workers-benefit-guide/">Canada Workers Benefit guide</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The CCB is one of several benefits that move with the same family income number.</strong></p>
        <p>The Canadian Government Benefits Guide covers who qualifies, how much and how to apply for each major federal benefit, with the filing steps that keep payments from stopping.</p>
        <a href="/ebooks/government-benefits-guide/" class="cta-button">See the Government Benefits Guide</a>
    </div>

    ${batchFooter(D, 'Government Benefits', disclaimer)}

</div>`;

export const whyDidMyCcbChangePost = batchPost({
  date: D,
  category: 'Government Benefits',
  categorySlug: 'government-benefits',
  subcategory: 'family-child',
  slug: 'why-did-my-ccb-change',
  title: 'Why Did My CCB Change? The July Reset and Other Causes',
  excerpt:
    'Why a Canada Child Benefit payment goes down or stops: the July income reset, a child turning 6 or 18, custody and marital changes, overpayments and missing filings, with calculated tables for July 2026 to June 2027.',
  content,
});
