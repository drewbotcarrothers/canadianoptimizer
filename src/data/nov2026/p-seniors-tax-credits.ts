import { batchFooter, batchPost } from './types';

const D = '2026-11-20';

const disclaimer = `General education, not tax advice. The 2026 federal amounts come from the Canada Revenue Agency's indexation table and its 2026 rates page, and the rules from the CRA pages listed under Sources, all read on November 19, 2026. Helen and Raj are an illustration: their incomes are round example numbers, the tax shown is federal only, and it ignores provincial tax, CPP and OAS details, and any other credits they might have. Your own return will differ; tax software or a tax professional will optimize your pension split.`;

const content = `<div class="container">

    <div class="hook">
        Turning 65 adds two federal credits to your return, and being part of a couple can add a third lever. <span class="highlight">Most of the money seniors leave behind is not a missed credit but a credit claimed on the wrong spouse's return.</span> This guide, part of our <a href="/category/taxes/credits-deductions/">tax credits and deductions hub</a>, prices each credit for the 2026 tax year and works one couple's return from start to finish.
    </div>

    <p>The main federal tax credits for seniors are the age amount, worth up to $9,208 for the 2026 tax year if you are 65 or older, and the pension income amount on up to $2,000 of eligible pension income. Both are credited at 14%. Couples can also split eligible pension income and transfer unused credits to each other.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The 2026 age amount is $9,208, reduced by 15% of net income above $46,432, and gone at about $107,819 (our calculation).</li>
            <li>The pension income amount covers up to $2,000 of eligible pension income. From 65, RRIF payments count; CPP and OAS never do.</li>
            <li>Each dollar of these amounts cuts federal tax by 14 cents in 2026, so the age amount is worth up to $1,289.12 and the pension amount up to $280.00.</li>
            <li>In our example couple, splitting $16,400 or more of RRIF income cuts their combined federal tax by $993.01; splitting the maximum 50% saves no more.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <strong>On this page</strong>
        <ul>
            <li><a href="#which">Which tax credits can seniors claim?</a></li>
            <li><a href="#age">How does the age amount work in 2026?</a></li>
            <li><a href="#pension">Who can claim the pension income amount?</a></li>
            <li><a href="#example">A worked 2026 return for a couple aged 67</a></li>
            <li><a href="#transfer">Can you transfer credits to your spouse?</a></li>
            <li><a href="#other">Which other credits matter after 65?</a></li>
            <li><a href="#oas">How do the credits interact with the OAS clawback?</a></li>
            <li><a href="#mistakes">Common mistakes</a></li>
        </ul>
    </nav>

    <h2 id="which">Which tax credits can seniors claim?</h2>
    <p>Two federal credits exist only because of age or pension income: the age amount (line 30100) and the pension income amount (line 31400). Several others are open to everyone but come up far more often after 65: the disability amount, medical expenses, the Canada caregiver amount and the home accessibility expenses credit.</p>
    <p>All of them are non-refundable. Each one lowers the tax you owe, but none of them pays you money if you owe nothing. The Department of Finance's <a href="https://www.canada.ca/en/department-finance/services/publications/report-impact-reducing-lowest-marginal-personal-income-tax-rate-non-refundable-tax-credits.html">report on the lowest tax rate and non-refundable credits</a> confirms that most of these credits are worth the lowest federal rate, which is 14% for 2026, so a $1,000 credit amount saves $140 of federal tax. The <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/tax-rates-brackets/current-year.html">CRA's 2026 rates page</a> shows that same 14% on the first $58,523 of taxable income.</p>

    <div class="table-wrapper">
        <table>
            <caption>Federal credits seniors most often claim, 2026 tax year (CRA indexation table and line pages, reviewed November 19, 2026)</caption>
            <thead>
                <tr><th>Credit</th><th>Line</th><th>2026 maximum amount</th><th>Federal value at 14%</th><th>Who gets it</th></tr>
            </thead>
            <tbody>
                <tr><td>Age amount</td><td>30100</td><td>$9,208</td><td>$1,289.12</td><td>65 or older on December 31; shrinks above $46,432 of net income</td></tr>
                <tr><td>Pension income amount</td><td>31400</td><td>$2,000</td><td>$280.00</td><td>Anyone with eligible pension income; from 65 that includes RRIF payments</td></tr>
                <tr><td>Disability amount</td><td>31600</td><td>$10,341</td><td>$1,447.74</td><td>An approved disability tax credit certificate (Form T2201)</td></tr>
                <tr><td>Canada caregiver amount (infirm dependant 18 or older)</td><td>30450</td><td>$8,773</td><td>$1,228.22</td><td>You support an infirm relative</td></tr>
                <tr><td>Medical expenses</td><td>33099</td><td>Costs above 3% of net income or $2,890, whichever is less</td><td>14% of the excess</td><td>Anyone with eligible costs</td></tr>
                <tr><td>Home accessibility expenses</td><td>31285</td><td>$20,000 of eligible renovation costs a year</td><td>Up to $2,800.00</td><td>Renovations for someone 65 or older, or eligible for the disability credit</td></tr>
            </tbody>
        </table>
    </div>
    <p>The dollar amounts are the 2026 column of the CRA's <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/adjustment-personal-income-tax-benefit-amounts.html">indexation table for personal income tax and benefit amounts</a>, except the pension amount, which the <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31400-pension-income-amount.html">line 31400 page</a> sets at $2,000, and the home accessibility limit from the <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31285-home-accessibility-expenses.html">line 31285 page</a>. Every province and territory has its own versions of these credits on its own form, with different amounts, so the federal figures here are only half of the saving.</p>

    <h2 id="age">How does the age amount work in 2026?</h2>
    <p>You can claim the age amount if you are 65 or older on December 31 of the tax year. For 2026 the full amount is $9,208 when your net income (line 23600) is $46,432 or less. Above that, the amount drops by 15% of every dollar over the threshold until it reaches zero.</p>
    <p>The CRA's <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30100-amount.html">age amount page</a> states the rule and points to the chart on the <a href="https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5000-d1/5000-d1-25e.pdf">Federal Worksheet</a>, which applies the 15% rate. The threshold and maximum are indexed each year. Working the 2026 numbers through, the credit disappears at a net income of about $107,819 (our calculation: $46,432 plus $9,208 divided by 15%).</p>

    <div class="table-wrapper">
        <table>
            <caption>2026 age amount at five net incomes (our calculation from the CRA's 2026 amounts)</caption>
            <thead>
                <tr><th>Net income (line 23600)</th><th>Age amount</th><th>Federal credit at 14%</th></tr>
            </thead>
            <tbody>
                <tr><td>$40,000</td><td>$9,208.00</td><td>$1,289.12</td></tr>
                <tr><td>$55,000</td><td>$7,922.80</td><td>$1,109.19</td></tr>
                <tr><td>$70,000</td><td>$5,672.80</td><td>$794.19</td></tr>
                <tr><td>$85,000</td><td>$3,422.80</td><td>$479.19</td></tr>
                <tr><td>$100,000</td><td>$1,172.80</td><td>$164.19</td></tr>
            </tbody>
        </table>
    </div>
    <p>Two details catch people. First, the test is your own net income, not the household's, so a couple with one high and one low income can lose the credit on one return and keep it in full on the other. Second, net income is measured after a pension split, which is why splitting can bring the age amount back, as the worked example below shows.</p>

    <h2 id="pension">Who can claim the pension income amount?</h2>
    <p>Anyone who reports eligible pension income can claim the pension income amount, on the lesser of $2,000 or that income. What counts depends on your age: before 65, mainly lifetime pension payments from an employer plan; from 65, RRIF and life income fund payments and RRSP annuity payments as well.</p>
    <p>The <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31400-pension-income-amount.html">line 31400 page</a> lists the eligible slips and boxes, and the CRA's <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/pension-income-splitting.html">pension income splitting page</a> lists what is not eligible: Old Age Security, the Canada Pension Plan and Quebec Pension Plan, certain tax-free foreign pensions and US IRA income. That is why a retiree living only on CPP and OAS gets no pension income amount at all.</p>
    <p>The common fix is to convert part of an RRSP to a RRIF at 65 and withdraw at least $2,000 a year from it. At 14%, that unlocks up to $280.00 of federal credit each year, plus the provincial version. Our <a href="/blog/rrsp-to-rrif-conversion/">RRSP to RRIF conversion guide</a> covers the timing, and the <a href="/blog/rrif-minimum-withdrawal/">RRIF minimum withdrawal guide</a> covers how much has to come out once the RRIF exists.</p>

    <h2 id="example">A worked 2026 return for a couple aged 67</h2>
    <p class="did-you-know" data-info-gain>Our worked 2026 federal return for a couple aged 67 shows the combined tax at five pension-split amounts: splitting $16,400 of RRIF income saves $993.01, the same as splitting the full 50%, because the gain comes from restoring the age amount and keeping both incomes in the 14% bracket.</p>
    <p>Here is the example, with round illustration numbers. Helen and Raj are both 67 at the end of 2026. Helen withdraws $40,000 from her RRIF and receives $22,800 of CPP and OAS, for a net income of $62,800. Raj receives $15,800 of CPP and OAS and has no other income.</p>
    <p>We worked out each spouse's federal tax using the 2026 brackets, the basic personal amount of $16,452, the age amount and the pension income amount, plus a transfer of Raj's unused age and pension amounts to Helen on line 32600. The split is Helen's RRIF income allocated to Raj on Form T1032. This is federal tax only, before provincial tax.</p>

    <div class="table-wrapper">
        <table>
            <caption>Helen and Raj, federal tax for 2026 at five pension splits (our calculation, illustration incomes)</caption>
            <thead>
                <tr><th>RRIF income split to Raj</th><th>Helen's net income</th><th>Raj's net income</th><th>Raj's unused credits moved to Helen</th><th>Helen's federal tax</th><th>Raj's federal tax</th><th>Combined</th></tr>
            </thead>
            <tbody>
                <tr><td>None</td><td>$62,800</td><td>$15,800</td><td>$9,208.00</td><td>$4,252.21</td><td>$0.00</td><td>$4,252.21</td></tr>
                <tr><td>$5,000</td><td>$57,800</td><td>$20,800</td><td>$6,860.00</td><td>$3,497.93</td><td>$0.00</td><td>$3,497.93</td></tr>
                <tr><td>$10,000</td><td>$52,800</td><td>$25,800</td><td>$1,860.00</td><td>$3,392.93</td><td>$0.00</td><td>$3,392.93</td></tr>
                <tr><td>$15,000</td><td>$47,800</td><td>$30,800</td><td>$0.00</td><td>$2,848.33</td><td>$439.60</td><td>$3,287.93</td></tr>
                <tr><td>$20,000 (the 50% maximum)</td><td>$42,800</td><td>$35,800</td><td>$0.00</td><td>$2,119.60</td><td>$1,139.60</td><td>$3,259.20</td></tr>
            </tbody>
        </table>
    </div>
    <p>Without a split, Helen's net income of $62,800 is over the age amount threshold, so her own age amount falls to $6,752.80, and the part of her income above $58,523 is taxed at 20.5%. Raj owes no tax, so his whole age amount of $9,208 moves to Helen's return, which is why their combined bill is only $4,252.21.</p>
    <p>Each step of the split moves income from Helen to Raj. Helen drops into the 14% bracket, her age amount climbs back toward the full $9,208, and Raj gains his own $2,000 pension income amount on the RRIF income he now reports. Once the split reaches $16,400, Helen's net income is under $46,432, both spouses get the full age amount and both are taxed only at 14%. From there to the 50% maximum the combined bill stays at $3,259.20, because every extra dollar moved is taxed at the same 14% on either return.</p>
    <p>The lesson is that the best split is often less than 50%, and that the age amount is part of the reason to split, not only the brackets. On a real return, provincial brackets and credits apply too, and they can move the best split. Tax software tests the splits for you; our <a href="/blog/pension-income-splitting-canada/">pension income splitting guide</a> walks through Form T1032 line by line.</p>

    <h2 id="transfer">Can you transfer credits to your spouse?</h2>
    <p>Yes. If your spouse or common-law partner doesn't need all of their age amount, pension income amount, disability amount or tuition amounts to bring their federal tax to zero, you can claim the unused part on line 32600 of your return.</p>
    <p>The CRA's <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32600-amounts-transferred-your-spouse-common-law-partner.html">line 32600 page</a> lists the credits that can move and requires that you had a spouse or common-law partner at the end of the year. Medical expenses work differently: one spouse can claim the couple's combined expenses, which usually belongs on the lower-income return because the 3% floor is smaller. Our <a href="/blog/medical-expense-tax-credit-canada/">medical expense tax credit guide</a> works through that choice. If you have recently moved in with a partner, our guide to <a href="/blog/common-law-taxes-benefits-canada/">when the CRA treats you as common-law</a> explains when these spousal rules start to apply.</p>

    <h2 id="other">Which other credits matter after 65?</h2>
    <p>The disability amount, medical expenses, the Canada caregiver amount and the home accessibility credit matter most after 65, because health costs, care for a partner and home changes tend to arrive together. Each one has its own test, and most can be claimed by a spouse or a supporting relative instead.</p>
    <ul>
        <li><strong>Disability amount ($10,341 for 2026).</strong> You need an approved Form T2201. The CRA's <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/tax-credits-deductions-persons-disabilities/disability-tax-credit.html">disability tax credit page</a> explains the application; once approved, the credit is worth $1,447.74 federally a year, and any part you can't use can move to a spouse on line 32600.</li>
        <li><strong>Medical expenses.</strong> The <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-33099-33199-eligible-medical-expenses-you-claim-on-your-tax-return.html">medical expenses page</a> sets the floor at 3% of net income or a fixed dollar amount, whichever is less. The fixed amount is $2,890 for 2026, so the 3% test is the lower one for anyone with net income under about $96,333 (our calculation).</li>
        <li><strong>Canada caregiver amount.</strong> If you support an infirm parent, sibling or adult child, the 2026 maximum for a dependant 18 or older is $8,773, reduced by the dependant's income above $20,601.</li>
        <li><strong>Home accessibility expenses.</strong> The <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31285-home-accessibility-expenses.html">line 31285 page</a> allows up to $20,000 a year of eligible renovation costs for a home that becomes safer or more accessible for someone 65 or older. At 14%, the full $20,000 is worth $2,800.00 federally.</li>
    </ul>
    <p>Our guides to the <a href="/blog/disability-tax-credit-canada-guide/">disability tax credit</a> and to <a href="/blog/missed-tax-credits/">commonly missed tax credits</a> cover each of these in more depth.</p>

    <h2 id="oas">How do the credits interact with the OAS clawback?</h2>
    <p>They don't, directly: credits lower tax, while the Old Age Security recovery tax depends on net income. But the same moves that protect the age amount, mainly pension splitting and timing RRIF withdrawals, also lower net income, so they help with both at once.</p>
    <p>The <a href="https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/recovery-tax.html">OAS recovery tax page</a> sets the threshold for 2026 income at $95,323, which applies to payments from July 2027 to June 2028. Above it you repay 15% of the excess. The age amount is already gone well before that point, at about $107,819, so a retiree near the OAS threshold should plan the split around the clawback, not the age amount. Our <a href="/blog/oas-gis-clawback-canada/">OAS and GIS clawback guide</a> has the full math.</p>

    <div class="callout warning">
        <strong>Common mistakes</strong>
        <ul id="mistakes">
            <li><strong>Assuming CPP or OAS earns the pension amount.</strong> They don't. Only eligible pension income does, and from 65 a small RRIF withdrawal is the easiest way to get it.</li>
            <li><strong>Splitting the full 50% by habit.</strong> As the worked example shows, a smaller split can save just as much. Test the amounts each year; the CRA doesn't require the same percentage every year.</li>
            <li><strong>Forgetting the transfer on line 32600.</strong> A low-income spouse's age amount is wasted if neither return claims it.</li>
            <li><strong>Claiming medical expenses on the higher-income return.</strong> The 3% floor rises with income, so the lower-income spouse usually gets more of the credit.</li>
            <li><strong>Missing the T1032 deadline.</strong> The election has to be filed by the filing due date, and both spouses must report the same figures.</li>
        </ul>
    </div>

    <h2>Frequently asked questions</h2>
    <h3>What is the age amount for 2026?</h3>
    <p>For the 2026 tax year the age amount is $9,208 if you are 65 or older and your net income is $46,432 or less. It shrinks by 15% of income above that threshold and is gone at about $107,819. Federally it is worth up to $1,289.12.</p>
    <h3>Do I get the pension income amount on CPP or OAS?</h3>
    <p>No. The CRA lists Old Age Security and the Canada Pension Plan as ineligible. From age 65, RRIF payments, life income fund payments and RRSP annuity payments qualify, as do employer pension payments at any age.</p>
    <h3>Can my spouse use my age amount?</h3>
    <p>Yes, if you don't need it to bring your own federal tax to zero. Your spouse or common-law partner claims the unused part on line 32600. The same applies to the pension income amount and the disability amount.</p>
    <h3>Is pension splitting always 50%?</h3>
    <p>No. Up to 50% of eligible pension income can be allocated, and any lower amount is allowed. In our example, a split of $16,400 saves as much as the full 50%. Software usually finds the best split for you.</p>
    <h3>Can you split RRIF income before 65?</h3>
    <p>Generally not. RRIF payments count as eligible pension income for splitting only if the transferring spouse is 65 or older at the end of the year, or the payments follow the death of a spouse. Lifetime payments from an employer pension can be split at any age.</p>
    <h3>Are seniors' tax credits refundable?</h3>
    <p>No. The age, pension, disability, caregiver and medical credits are non-refundable. They reduce tax to zero but don't create a refund on their own, which is why transfers between spouses matter so much.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/adjustment-personal-income-tax-benefit-amounts.html">CRA: Indexation adjustment for personal income tax and benefit amounts (2026 column)</a>, reviewed November 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/tax-rates-brackets/current-year.html">CRA: Current year tax rates and income brackets (2026)</a>, reviewed November 19, 2026</li>
        <li><a href="https://www.canada.ca/en/department-finance/services/publications/report-impact-reducing-lowest-marginal-personal-income-tax-rate-non-refundable-tax-credits.html">Department of Finance: Report on the impact of reducing the lowest marginal personal income tax rate on non-refundable tax credits</a>, reviewed November 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30100-amount.html">CRA: Line 30100, age amount</a>, reviewed November 19, 2026</li>
        <li><a href="https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5000-d1/5000-d1-25e.pdf">CRA: Federal Worksheet (5000-D1), line 30100 chart</a>, reviewed November 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31400-pension-income-amount.html">CRA: Line 31400, pension income amount</a>, reviewed November 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/pension-income-splitting.html">CRA: Pension income splitting</a>, reviewed November 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t1032.html">CRA: Form T1032, Joint Election to Split Pension Income</a>, reviewed November 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32600-amounts-transferred-your-spouse-common-law-partner.html">CRA: Line 32600, amounts transferred from your spouse or common-law partner</a>, reviewed November 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-33099-33199-eligible-medical-expenses-you-claim-on-your-tax-return.html">CRA: Lines 33099 and 33199, eligible medical expenses</a>, reviewed November 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/tax-credits-deductions-persons-disabilities/disability-tax-credit.html">CRA: Disability tax credit</a>, reviewed November 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31285-home-accessibility-expenses.html">CRA: Line 31285, home accessibility expenses</a>, reviewed November 19, 2026</li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/recovery-tax.html">Government of Canada: Old Age Security pension recovery tax</a>, reviewed November 19, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/pension-income-splitting-canada/">Pension income splitting: Form T1032 step by step</a></li>
        <li><a href="/blog/oas-gis-clawback-canada/">OAS and GIS clawback</a></li>
        <li><a href="/blog/rrsp-to-rrif-conversion/">RRSP to RRIF conversion</a></li>
        <li><a href="/blog/medical-expense-tax-credit-canada/">Medical expense tax credit</a></li>
        <li><a href="/blog/common-law-taxes-benefits-canada/">Common-law in Canada: when the CRA says you are</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Credits are lines on a return, and a retiree's return has more of them than most.</strong></p>
        <p>The Canadian Optimizer Tax Guide walks through the T1 line by line, including pension splitting and the transfers between spouses.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">See the Tax Guide</a>
    </div>

    ${batchFooter(D, 'Taxes', disclaimer)}

</div>`;

export const seniorsTaxCreditsPost = batchPost({
  date: D,
  category: 'Taxes',
  categorySlug: 'taxes',
  subcategory: 'credits-deductions',
  slug: 'seniors-tax-credits-canada',
  title: "Tax Credits for Seniors in Canada: Age Amount, Pension Amount and More",
  excerpt:
    "The 2026 age amount, the $2,000 pension income amount, transfers between spouses and a worked return for a couple aged 67 showing which pension split saves the most.",
  content,
});
