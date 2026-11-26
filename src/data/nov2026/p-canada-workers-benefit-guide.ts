import { batchFooter, batchPost } from './types';

const D = '2026-11-26';
const HUB = '/category/government-benefits/credits-low-income/';
const CWB = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-45300-canada-workers-benefit-cwb';
const S6 = 'https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5000-s6/5000-s6-25e.pdf';

const disclaimer = `General education, not tax or benefit advice. Eligibility rules, income limits and maximum amounts come from the Canada Revenue Agency's Canada workers benefit pages for the 2025 tax year and the 2025 Schedule 6, read on November 26, 2026. Amounts shown are for residents of Canada outside Quebec, Alberta and Nunavut unless stated, because the CRA sets different amounts for those three. The worked tables are our own calculations from the CRA's published formula, using labelled example incomes; your CRA notice is the authority for your own figure. Talk to a tax professional about your own file.`;

const content = `<div class="container">

    <div class="hook">
        The Canada Workers Benefit is a refundable tax credit for people who work and earn a low income, and many eligible workers never claim it because it looks like someone else's benefit. <span class="highlight">A single worker can get up to $1,633 and a family up to $2,813 for the 2025 tax year, and the credit shrinks by only 15 cents for each extra dollar of income.</span> This guide, part of our <a href="${HUB}">credits and low-income benefits hub</a>, shows who qualifies, how the amount is worked out and how to claim it.
    </div>

    <p>The Canada Workers Benefit (CWB) is a refundable tax credit for working Canadians with low income, claimed on line 45300 of the return. For the 2025 tax year the basic amount is up to $1,633 for a single person and up to $2,813 for a family, plus a disability supplement of up to $843 (Canada Revenue Agency).</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>You must earn working income of more than $3,000, be a resident of Canada all year, and be 19 or older on December 31 unless you live with a spouse, partner or child.</li>
            <li>The basic credit builds at 27 cents per dollar of working income over $3,000 until it reaches the maximum, then falls 15 cents per dollar once net income passes $26,855 (single) or $30,639 (family).</li>
            <li>The credit stops at $37,742 of income for a single person and $49,393 for a family outside Quebec, Alberta and Nunavut.</li>
            <li>You claim it by filing a return. The CRA then pays up to half as advance payments in July, October and January with no separate application.</li>
            <li>Because the test uses net income, an RRSP deduction can raise your credit by 15 cents for each dollar deducted while you are in the phase-out range.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#qualify">Who qualifies</a></li>
            <li><a href="#limits">Income limits by province</a></li>
            <li><a href="#formula">How the credit is calculated</a></li>
            <li><a href="#tables">Worked amounts by income</a></li>
            <li><a href="#disability">The disability supplement</a></li>
            <li><a href="#advance">Advance payments</a></li>
            <li><a href="#claim">How to claim it</a></li>
            <li><a href="#rrsp">RRSPs and the CWB</a></li>
            <li><a href="#mistakes">Common mistakes</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="qualify">Who qualifies for the Canada Workers Benefit?</h2>
    <p>Someone who earns working income, lives in Canada, is old enough or has a household reason, and whose income is below the cut-off for their province and family situation. The CRA's <a href="${CWB}/who-is-eligible.html">eligibility page</a> lists the conditions for the basic amount. You must meet all of these:</p>
    <ul>
        <li>You earn working income and your net income is below the level set for your province or territory of residence.</li>
        <li>You are a resident of Canada throughout the year.</li>
        <li>You are 19 or older on December 31, or you live with your spouse or common-law partner or your child.</li>
    </ul>
    <p>You are <strong>not</strong> eligible if you were a full-time student at a designated educational institution for more than 13 weeks in the year, unless you had an eligible dependant on December 31. The same exclusion applies if you were confined to a prison or similar institution for at least 90 days, or do not pay tax in Canada because you are a diplomat or a family member or employee of one.</p>
    <p>On the 2025 Schedule 6, <strong>working income</strong> is employment income, taxable scholarships, fellowships, bursaries and artists' project grants, and net self-employment income (profits only, not losses). A single person or family needs working income above $3,000 to claim the basic amount. For the disability supplement, your own working income must be above $1,150.</p>
    <h3>Who counts as an eligible spouse or dependant?</h3>
    <p>An eligible spouse lived with you as your spouse or common-law partner on December 31 and was a resident of Canada all year, and does not fall under the same student, prison or diplomat exclusions. An eligible dependant is your or your partner's child who is under 19, lives with you on December 31 and is not eligible for the CWB themselves. The CRA's definition of child includes a person in your custody and control who is wholly dependent on you for support. If you have a spouse, only one of you can claim the basic amount.</p>

    <h2 id="limits">What are the CWB income limits in each province?</h2>
    <p>They are the same for most of the country and different in Alberta, Nunavut and Quebec. These are the net income levels at which the basic amount reaches zero for the 2025 tax year, from the CRA's eligibility page.</p>
    <div class="table-wrapper">
        <table>
            <caption>2025 net income level where the basic CWB reaches zero (Canada Revenue Agency, read November 26, 2026)</caption>
            <thead>
                <tr><th>Your situation</th><th>Canada (excluding Alberta, Quebec, Nunavut)</th><th>Alberta</th><th>Nunavut</th></tr>
            </thead>
            <tbody>
                <tr class="highlight-row"><td>Family (single parent or couple, with or without children)</td><td>$49,393</td><td>$50,232</td><td>$67,365</td></tr>
                <tr><td>Single, no eligible dependants</td><td>$37,742</td><td>$37,826</td><td>$67,367</td></tr>
            </tbody>
        </table>
    </div>
    <p>Quebec has its own scale, and the CRA says the maximum basic amount also varies for residents of Quebec, Nunavut and Alberta. For Quebec the CRA distinguishes four household types, with a different cut-off for each, so look up the Quebec row on the CRA page rather than using the table above. The rest of this guide uses the figures for the rest of the country.</p>

    <h2 id="formula">How is the Canada Workers Benefit calculated?</h2>
    <p>In two steps, and both are printed on Schedule 6. First the credit builds as you earn: 27% of your working income over $3,000, up to a maximum of $1,633 for a single person or $2,813 if you had an eligible spouse or dependant. Second, it shrinks: 15% of the amount your adjusted net income is over $26,855 (single) or $30,639 (family) is subtracted.</p>
    <div class="table-wrapper">
        <table>
            <caption>The basic CWB formula, 2025 tax year, outside Quebec, Alberta and Nunavut (CRA 2025 Schedule 6 and CWB pages)</caption>
            <thead><tr><th>Step</th><th>Single</th><th>Family (spouse or dependant)</th></tr></thead>
            <tbody>
                <tr><td>Builds at 27% of working income over</td><td>$3,000</td><td>$3,000</td></tr>
                <tr><td>Maximum basic amount</td><td>$1,633</td><td>$2,813</td></tr>
                <tr><td>Reduced by 15% of adjusted net income over</td><td>$26,855</td><td>$30,639</td></tr>
                <tr><td>No basic amount if adjusted net income is more than</td><td>$37,742</td><td>$49,393</td></tr>
            </tbody>
        </table>
    </div>
    <p>Adjusted net income is your net income from line 23600, adjusted for a few items such as repayments of universal child care benefit and registered disability savings plan income. For a couple, the family figure is both partners' adjusted net income, less a secondary earner exemption of up to $16,386 on the lower earner's income.</p>
    <p>Two numbers fall out of the formula. The credit reaches its maximum when working income hits about $9,048 for a single person ($1,633 divided by 27%, plus $3,000) and about $13,419 for a family ($2,813 divided by 27%, plus $3,000). And in the phase-out, every $1,000 of extra income costs $150 of credit. That is a real cost on top of tax, and it is the reason the CWB matters when you decide on a raise, overtime or an RRSP contribution.</p>

    <h2 id="tables">How much will you actually get at your income?</h2>
    <p>Less than the maximum unless your income sits in the flat middle of the range. These two tables apply the formula to labelled example incomes.</p>
    <div class="table-wrapper">
        <table>
            <caption>Basic CWB for a single person with no dependants at example incomes (2025 tax year; our calculation from the CRA formula, assuming all income is working income and no other income)</caption>
            <thead><tr><th>Working and net income</th><th>27% build-up</th><th>15% reduction</th><th>Basic CWB</th></tr></thead>
            <tbody>
                <tr><td>$5,000</td><td>$540</td><td>$0</td><td>$540</td></tr>
                <tr><td>$9,000</td><td>$1,620</td><td>$0</td><td>$1,620</td></tr>
                <tr class="highlight-row"><td>$15,000</td><td>$3,240 (capped at $1,633)</td><td>$0</td><td>$1,633</td></tr>
                <tr><td>$30,000</td><td>capped at $1,633</td><td>$472</td><td>$1,161</td></tr>
                <tr><td>$35,000</td><td>capped at $1,633</td><td>$1,222</td><td>$411</td></tr>
                <tr><td>$37,000</td><td>capped at $1,633</td><td>$1,522</td><td>$111</td></tr>
            </tbody>
        </table>
    </div>
    <div class="table-wrapper">
        <table>
            <caption>Basic CWB for a family at example incomes (2025 tax year; our calculation from the CRA formula, assuming family working income equals adjusted family net income and ignoring the secondary earner exemption)</caption>
            <thead><tr><th>Family working and net income</th><th>27% build-up</th><th>15% reduction</th><th>Basic CWB</th></tr></thead>
            <tbody>
                <tr><td>$10,000</td><td>$1,890</td><td>$0</td><td>$1,890</td></tr>
                <tr><td>$20,000</td><td>$4,590 (capped at $2,813)</td><td>$0</td><td>$2,813</td></tr>
                <tr class="highlight-row"><td>$40,000</td><td>capped at $2,813</td><td>$1,404</td><td>$1,409</td></tr>
                <tr><td>$45,000</td><td>capped at $2,813</td><td>$2,154</td><td>$659</td></tr>
                <tr><td>$49,000</td><td>capped at $2,813</td><td>$2,754</td><td>$59</td></tr>
            </tbody>
        </table>
    </div>
    <p class="did-you-know" data-info-gain><strong>What this page adds:</strong> a worked table of the basic credit at income steps for a single person and a family, a calculation showing where the maximum is reached (about $9,048 and $13,419 of working income), and an RRSP example showing a $2,000 deduction raises the credit by $300 inside the phase-out. Each figure is our calculation from the CRA's published formula and labelled as such.</p>
    <div class="example-box">
        <div class="example-title">Illustration: Dana and a part-year raise</div>
        <p>Dana (a labelled example) is single, with no dependants, and lives outside Quebec, Alberta and Nunavut. She earned $30,000 in 2025 and expects $35,000 in 2026. On the 2025 formula, the extra $5,000 would cut her basic credit from $1,161 to $411, a loss of $750. That is 15% of the extra income, and it is on top of the income tax and payroll deductions on the raise. It does not make the raise a bad idea, because she still keeps $4,250 of the $5,000 before income tax, but her net gain is smaller than the pay stub suggests.</p>
    </div>
    <p>These tables use the figures for the rest of Canada. Quebec, Alberta and Nunavut use different maximums and limits.</p>

    <h2 id="disability">What is the CWB disability supplement?</h2>
    <p>An extra credit for working people who are eligible for the disability tax credit. For the 2025 tax year it is up to $843 for a single person and up to $843 for a family, according to the CRA's <a href="${CWB}/how-much-you-can-get.html">how much you can get</a> page. You must be eligible for the disability tax credit with an approved Form T2201 on file, and your net income must be below the level for your province.</p>
    <ul>
        <li><strong>Single:</strong> the supplement is reduced when adjusted net income is more than $37,740, and none is paid above $43,360.</li>
        <li><strong>Family:</strong> it is reduced above $49,389. None is paid if one spouse is eligible for the disability tax credit and family income is more than $55,009, or if both are eligible and it is more than $60,629.</li>
        <li><strong>Reduction rate:</strong> 15% for a single person or a family with one eligible spouse, and 7.5% if both spouses are eligible for the credit, according to Schedule 6.</li>
    </ul>
    <p>For example, a single person with DTC approval and an adjusted net income of $40,000 would have the $843 supplement cut by 15% of the $2,260 over $37,740, which is $339, leaving $504. That figure is our calculation, and it is on top of any basic CWB, which at that income would be zero. Our <a href="/blog/disability-tax-credit-canada-guide/">disability tax credit guide</a> covers how to get T2201 approved, which is the gate to the supplement.</p>
    <p>If you and your spouse are both eligible for the DTC, only one of you can claim the basic amount, but each of you claims your own disability supplement on a separate Schedule 6. If only one is eligible, that person claims both the basic amount and the supplement.</p>

    <h2 id="advance">How do the advance payments work?</h2>
    <p>Automatically, once you file. If you are entitled to the CWB, you get up to 50% of it in advance payments, called the Advanced Canada Workers Benefit. If you are entitled to the disability supplement, you also get 50% of that. You do not apply for them: the CRA works out your eligibility when you file your return.</p>
    <ul>
        <li><strong>Dates:</strong> three payments, on July 12, October 11 and January 10. If the date falls on a weekend or federal holiday, payment is made on the last business day before it.</li>
        <li><strong>Filing deadline for the advance payments:</strong> the CRA must receive your return before November 1 of the benefit period, which starts in July and ends in June of the following year.</li>
        <li><strong>Maximum advance:</strong> half of $1,633 is $816.50 for a single person, and half of $2,813 is $1,406.50 for a family (our arithmetic on the CRA's maximums).</li>
        <li><strong>Couples:</strong> only one spouse receives the family's advance payments. It is the one with the higher working income, or the first filer if the working incomes are equal.</li>
        <li><strong>Missing payment:</strong> wait 10 working days after the expected date before you contact the CRA.</li>
    </ul>
    <p>The CRA says only death, incarceration and emigration change your advance payments mid-year. A change in marital status, dependants or address does not change them unless you request a reassessment and your CWB amount changes. The rest is settled when your return is assessed.</p>

    <h2 id="claim">How do you claim the Canada Workers Benefit?</h2>
    <p>By filing a return and answering the CWB questions in your tax software, or by completing Schedule 6 on a paper return. If you file electronically, certified software walks you through the questions. On paper, you attach Schedule 6 and enter the result from Step 2 (basic) or Step 3 (disability supplement) on line 45300.</p>
    <p>If you received advance payments, the CRA sends an RC210 slip, and Schedule 6 has a step to report them. Keep it with your records; our <a href="/blog/tax-record-keeping/">record-keeping guide</a> says how long to hold on to slips. If you cannot sign in to see your slips, our <a href="/blog/cra-my-account-guide/">CRA My Account guide</a> covers registration.</p>
    <p>The CWB sits alongside the other income-tested benefits that the same return unlocks. The <a href="/blog/government-benefits-stacking-map-canada/">benefits stacking map</a> shows how household income affects each one, and the <a href="/blog/gst-hst-credit-groceries-essentials-benefit/">Canada Groceries and Essentials Benefit guide</a> covers the quarterly payment that many CWB recipients also get. Payment dates for all of them are on the <a href="/blog/canada-benefit-payment-dates/">benefit payment dates page</a>.</p>

    <h2 id="rrsp">Can an RRSP contribution increase your Canada Workers Benefit?</h2>
    <p>Yes, if your income is in the phase-out range. Schedule 6 starts adjusted net income from line 23600, which is after the RRSP deduction. A deduction therefore lowers the income the 15% reduction is applied to, and each dollar deducted adds 15 cents back to the credit.</p>
    <div class="example-box">
        <div class="example-title">Illustration: Dana puts $2,000 into an RRSP</div>
        <p>Dana earned $35,000. Without a contribution, her basic CWB on the 2025 formula is $411. If she contributes $2,000 and deducts it, her net income falls to $33,000 and the reduction becomes 15% of $6,145, or $922. Her credit rises to $711, an increase of $300. Working income is unchanged because the RRSP deduction does not lower employment income. That $300 is a bonus on top of the income tax refund from the deduction itself.</p>
    </div>
    <p>Whether an RRSP is the right account for someone at this income is a separate question; at low incomes a TFSA is often the better fit, and our <a href="/blog/rrsp-or-tfsa-by-income/">RRSP or TFSA by income</a> table works through the trade-off.</p>

    <h2 id="mistakes">What mistakes cost people the CWB?</h2>
    <p>Most lost credit comes from a handful of avoidable slips, and they are easy to check before you file.</p>
    <ul>
        <li><strong>Not filing.</strong> There is no application. If you do not file a return, you do not get the credit, and even a very small return can unlock it.</li>
        <li><strong>Assuming students never qualify.</strong> The full-time student exclusion has an exception if you had an eligible dependant on December 31.</li>
        <li><strong>Using the wrong income.</strong> The build-up uses working income. The reduction uses adjusted net income. They are not the same number if you have investment income, pension income or deductions.</li>
        <li><strong>Both partners claiming the basic amount.</strong> Only one spouse can claim it. If you cannot decide, the CRA decides for you.</li>
        <li><strong>Forgetting the DTC link.</strong> The disability supplement requires an approved T2201; a diagnosis alone is not enough.</li>
        <li><strong>Ignoring Quebec, Alberta and Nunavut differences.</strong> The federal figures in this guide apply to the rest of Canada. Look up your own region on the CRA page.</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>How much is the Canada Workers Benefit?</h3>
    <p>For the 2025 tax year, up to $1,633 for a single person and up to $2,813 for a family, plus up to $843 for the disability supplement. The amount depends on your working income, adjusted net income and where you live.</p>
    <h3>Do I have to apply for the Canada Workers Benefit?</h3>
    <p>You claim it by filing your tax return. There is no separate application, and the advance payments are sent automatically if the CRA finds you eligible when you file.</p>
    <h3>What income do I need to qualify?</h3>
    <p>Working income of more than $3,000 for the basic amount, and more than $1,150 of your own for the disability supplement, according to Schedule 6.</p>
    <h3>Can students get the Canada Workers Benefit?</h3>
    <p>Only if they studied full-time for 13 weeks or less in the year, or they had an eligible dependant on December 31.</p>
    <h3>Is the Canada Workers Benefit taxable?</h3>
    <p>The CRA describes it as a refundable tax credit claimed on line 45300, not as taxable income. Check your own return, and ask a tax professional if you have a complex situation.</p>
    <h3>When are the advance payments made?</h3>
    <p>On July 12, October 11 and January 10, or the last business day before if one falls on a weekend or federal holiday.</p>
    <h3>What if I live in Quebec, Alberta or Nunavut?</h3>
    <p>The CRA sets different income limits and maximums for each. The limits for Alberta and Nunavut are in the table above, and Quebec's are on the CRA's eligibility page.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${CWB}/who-is-eligible.html">Canada Revenue Agency: Canada workers benefit, who is eligible</a>, reviewed November 26, 2026</li>
        <li><a href="${CWB}/how-much-you-can-get.html">Canada Revenue Agency: Canada workers benefit, how much you can get</a>, reviewed November 26, 2026</li>
        <li><a href="${CWB}/how-to-claim.html">Canada Revenue Agency: Canada workers benefit, how to claim</a>, reviewed November 26, 2026</li>
        <li><a href="${S6}">Canada Revenue Agency: Schedule 6, Canada Workers Benefit (T1-2025)</a>, reviewed November 26, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/government-benefits-stacking-map-canada/">Government benefits stacking map</a></li>
        <li><a href="/blog/gst-hst-credit-groceries-essentials-benefit/">Canada Groceries and Essentials Benefit</a></li>
        <li><a href="/blog/canada-benefit-payment-dates/">Canada benefit payment dates</a></li>
        <li><a href="/blog/disability-tax-credit-canada-guide/">Disability tax credit guide</a></li>
        <li><a href="/blog/canada-child-benefit-optimization-canada/">Canada Child Benefit: the July reset</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The CWB is one of several benefits that the same tax return unlocks.</strong></p>
        <p>The Canadian Government Benefits Guide covers who qualifies, how much and how to apply for each major federal benefit, so none of them is left unclaimed.</p>
        <a href="/ebooks/government-benefits-guide/" class="cta-button">See the Government Benefits Guide</a>
    </div>

    ${batchFooter(D, 'Government Benefits', disclaimer)}

</div>`;

export const canadaWorkersBenefitGuidePost = batchPost({
  date: D,
  category: 'Government Benefits',
  categorySlug: 'government-benefits',
  subcategory: 'credits-low-income',
  slug: 'canada-workers-benefit-guide',
  title: 'Canada Workers Benefit: Who Qualifies and How Much You Can Get',
  excerpt:
    'Who qualifies for the Canada Workers Benefit, the 2025 income limits, how the 27% build-up and 15% reduction work, worked amounts by income, the disability supplement and the advance payments.',
  content,
});
