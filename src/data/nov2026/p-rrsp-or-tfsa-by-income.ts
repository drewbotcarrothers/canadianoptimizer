import { batchFooter, batchPost } from './types';

const D = '2026-11-22';
const UPDATED = '2026-11-27';
const INDEXATION = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/adjustment-personal-income-tax-benefit-amounts.html';
const BRACKETS = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/tax-rates-brackets/current-year.html';
const LIMITS = 'https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html';
const RRSP = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans';
const TFSA = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account';
const OAS = 'https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/recovery-tax.html';

const disclaimer = `General education, not tax or financial advice. Tax rates, thresholds and limits come from the Canada Revenue Agency and Government of Canada pages listed under Sources, read on November 22, 2026. The marginal rates, refunds and RRSP-versus-TFSA differences are our own calculations with 2026 federal and provincial brackets for Ontario, British Columbia and Alberta; they leave out CPP and EI credits, the Canada employment amount, the Ontario Health Premium, the Ontario tax reduction and every other credit, so your own rates can differ. Maya and the other people and dollar amounts are illustrations, not your numbers. Retirement tax rates are unknown in advance and assume today's brackets. Check your own notice of assessment and ask a tax professional before you decide.`;

const content = `<div class="container">

    <div class="hook">
        "RRSP or TFSA?" has a one-line answer that most people skip past: <span class="highlight">compare your tax rate today with the rate you expect to pay when the money comes out.</span> This guide, part of our <a href="/category/investing/accounts-asset-location/">accounts and asset location hub</a>, puts that rule into dollars at twelve income levels, so you can find your own row.
    </div>

    <p>In Ontario in 2026, the TFSA usually wins or ties below $53,891 of income, where the second provincial bracket starts, because the RRSP refund is small and retirement withdrawals can be taxed at the same 19.05%. From about $60,000, the RRSP pulls ahead if you expect a lower income in retirement and invest the refund. At $120,000 and up, the RRSP gap is large.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The RRSP wins when today's marginal rate is higher than your rate on withdrawal; the TFSA wins when it is lower; at equal rates they tie.</li>
            <li>In Ontario in 2026, a $50,000 earner pays 19.05% on their last dollar and a $120,000 earner pays 43.41%, per our bracket calculation.</li>
            <li>The RRSP only wins if the refund is invested too. Spend the refund and most of the advantage disappears.</li>
            <li>RRSP room is 18% of last year's earned income, capped at $33,810 for 2026, so high earners usually need both accounts.</li>
            <li>TFSA withdrawals do not count as income for OAS or GIS; RRSP and RRIF withdrawals do.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#rule">The rule in one line</a></li>
            <li><a href="#ontario">RRSP or TFSA at each income in Ontario</a></li>
            <li><a href="#provinces">British Columbia and Alberta</a></li>
            <li><a href="#maya">A worked example at $85,000</a></li>
            <li><a href="#refund">Why the refund must be invested</a></li>
            <li><a href="#high">High incomes: the room cap and OAS</a></li>
            <li><a href="#tfsa-anyway">When to choose the TFSA anyway</a></li>
            <li><a href="#limits">What this model leaves out</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="rule">Is an RRSP or a TFSA better for my income?</h2>
    <p>It depends on two tax rates, not on your income alone. An RRSP contribution is deducted at your marginal rate now and taxed at your marginal rate when you withdraw it. A TFSA contribution comes from after-tax money and is never taxed again. If both rates are the same, the two accounts give you exactly the same amount to spend.</p>
    <p>That is not a rule of thumb; it is arithmetic. Take $1,000 of salary. Into a TFSA, you first pay tax at your marginal rate, say 29.65%, and deposit $703.50. Into an RRSP, you deposit the full $1,000 and the tax is deferred. If both investments grow by the same percentage and you later withdraw the RRSP at the same 29.65%, you keep $703.50 times the growth, the same as the TFSA. Change either rate and one account pulls ahead by $10 for every percentage point of difference, per $1,000 of salary.</p>
    <p>So the job is to estimate the two rates. Today's rate is knowable from the brackets. The retirement rate is a guess, but a reasonable one: add up your expected CPP, OAS, workplace pension and RRIF withdrawals and look up the bracket. Our <a href="/blog/retirement-withdrawal-strategy/">retirement withdrawal strategy guide</a> covers how those income sources stack.</p>

    <h2 id="ontario">RRSP or TFSA at each income level in Ontario</h2>
    <p>We ran the 2026 federal and Ontario brackets from the CRA's <a href="${BRACKETS}">2026 tax rates page</a> through our tax engine for twelve incomes. The federal rate starts at 14% on taxable income up to $58,523 and steps up to 20.5%, 26%, 29% and 33%. Ontario starts at 5.05% up to $53,891 and steps to 9.15% and higher, plus the Ontario surtax. The table shows, for each income, the marginal rate today, the refund on a $5,000 RRSP contribution, and how many dollars the RRSP comes out ahead (or behind) per $1,000 of salary at four retirement incomes.</p>
    <div class="table-wrapper">
        <table>
            <caption>RRSP minus TFSA per $1,000 of salary, Ontario, 2026 brackets (our calculation, November 22, 2026)</caption>
            <thead>
                <tr><th>Income today</th><th>Marginal rate</th><th>Refund on $5,000</th><th>Retire on $30,000</th><th>Retire on $50,000</th><th>Retire on $70,000</th><th>Retire on $100,000</th></tr>
            </thead>
            <tbody>
                <tr><td>$40,000</td><td>19.05%</td><td>$952.50</td><td>$0</td><td>$0</td><td>&minus;$106</td><td>&minus;$124</td></tr>
                <tr><td>$50,000</td><td>19.05%</td><td>$952.50</td><td>$0</td><td>$0</td><td>&minus;$106</td><td>&minus;$124</td></tr>
                <tr><td>$60,000</td><td>29.65%</td><td>$1,253.51</td><td>+$106</td><td>+$106</td><td>$0</td><td>&minus;$18</td></tr>
                <tr><td>$70,000</td><td>29.65%</td><td>$1,482.50</td><td>+$106</td><td>+$106</td><td>$0</td><td>&minus;$18</td></tr>
                <tr><td>$80,000</td><td>29.65%</td><td>$1,482.50</td><td>+$106</td><td>+$106</td><td>$0</td><td>&minus;$18</td></tr>
                <tr><td>$90,000</td><td>29.65%</td><td>$1,482.50</td><td>+$106</td><td>+$106</td><td>$0</td><td>&minus;$18</td></tr>
                <tr><td>$100,000</td><td>31.48%</td><td>$1,574.00</td><td>+$124</td><td>+$124</td><td>+$18</td><td>$0</td></tr>
                <tr class="highlight-row"><td>$120,000</td><td>43.41%</td><td>$2,058.00</td><td>+$244</td><td>+$244</td><td>+$138</td><td>+$119</td></tr>
                <tr><td>$150,000</td><td>44.97%</td><td>$2,170.48</td><td>+$244</td><td>+$244</td><td>+$138</td><td>+$119</td></tr>
                <tr><td>$180,000</td><td>44.97%</td><td>$2,248.48</td><td>+$259</td><td>+$259</td><td>+$153</td><td>+$135</td></tr>
                <tr><td>$200,000</td><td>48.26%</td><td>$2,413.23</td><td>+$292</td><td>+$292</td><td>+$186</td><td>+$168</td></tr>
                <tr><td>$250,000</td><td>49.82%</td><td>$2,491.23</td><td>+$308</td><td>+$308</td><td>+$202</td><td>+$183</td></tr>
            </tbody>
        </table>
    </div>
    <p>How to read a row: the refund column is the tax saved on the whole $5,000, so it can span two brackets, which is why the $60,000 row shows $1,253.51 rather than 29.65% of $5,000. The four right-hand columns use the marginal rate on the last $1,000 of salary today and on the next $1,000 withdrawn in retirement, at Ontario's 2026 rates of 19.05% at $30,000 and $50,000, 29.65% at $70,000 and 31.48% at $100,000. They are in today's dollars before growth. Growth multiplies both accounts equally, so if your investments double, the gap doubles too.</p>
    <p data-info-gain="true"><strong>Our calculation:</strong> in Ontario with 2026 brackets, every $1,000 of salary put in an RRSP instead of a TFSA comes out $244 ahead for a $120,000 earner who retires on $50,000 of taxable income, but $106 behind for a $50,000 earner who retires on $70,000. Between those, a $70,000 to $90,000 earner who retires on $70,000 ends up exactly even, because both rates are 29.65%.</p>
    <p>The pattern that jumps out is the step between $50,000 and $60,000. Ontario's second bracket starts at $53,891 and the federal second bracket at $58,523, so the marginal rate jumps from 19.05% to 29.65% in that range. If you earn just above it, an RRSP contribution large enough to bring you back below it earns the higher refund on part of it only. That is why the refund at $60,000 is $1,253.51, not $1,482.50.</p>

    <h2 id="provinces">How do British Columbia and Alberta change the answer?</h2>
    <p>The rule is the same in every province, but the rates differ. Here are the 2026 combined marginal rates our engine gives at each income for the three provinces. Use them with the same logic: subtract your expected retirement rate in that province and multiply by $10 for each percentage point, per $1,000 of salary.</p>
    <div class="table-wrapper">
        <table>
            <caption>Combined federal and provincial marginal rate, 2026 brackets (our calculation, November 22, 2026)</caption>
            <thead>
                <tr><th>Income</th><th>Ontario</th><th>British Columbia</th><th>Alberta</th></tr>
            </thead>
            <tbody>
                <tr><td>$40,000</td><td>19.05%</td><td>19.60%</td><td>22.00%</td></tr>
                <tr><td>$50,000</td><td>19.05%</td><td>19.60%</td><td>22.00%</td></tr>
                <tr><td>$60,000</td><td>29.65%</td><td>28.20%</td><td>28.50%</td></tr>
                <tr><td>$70,000</td><td>29.65%</td><td>28.20%</td><td>30.50%</td></tr>
                <tr><td>$80,000</td><td>29.65%</td><td>28.20%</td><td>30.50%</td></tr>
                <tr><td>$90,000</td><td>29.65%</td><td>28.20%</td><td>30.50%</td></tr>
                <tr><td>$100,000</td><td>31.48%</td><td>28.20%</td><td>30.50%</td></tr>
                <tr><td>$120,000</td><td>43.41%</td><td>38.29%</td><td>36.00%</td></tr>
                <tr><td>$150,000</td><td>44.97%</td><td>40.70%</td><td>36.00%</td></tr>
                <tr><td>$180,000</td><td>44.97%</td><td>40.70%</td><td>38.00%</td></tr>
                <tr><td>$200,000</td><td>48.26%</td><td>46.09%</td><td>42.29%</td></tr>
                <tr><td>$250,000</td><td>49.82%</td><td>46.09%</td><td>43.29%</td></tr>
            </tbody>
        </table>
    </div>
    <p>Alberta's flat start means its rate at $40,000 to $50,000 is higher than Ontario's or BC's, which makes the RRSP slightly more useful at modest incomes there, as long as retirement income stays in the same bracket. British Columbia stays at 28.20% from $60,000 to $100,000, so a BC earner in that range who retires in BC on about $50,000 gains about $86 per $1,000 of salary (28.20% minus 19.60%). These are rates on employment-type income; dividends and capital gains are taxed differently and do not belong in this comparison.</p>

    <h2 id="maya">Worked example: Maya, $85,000 in Ontario</h2>
    <p>Maya earns $85,000 in Toronto and has $5,000 of salary she wants to save this year. She expects to retire on about $50,000 of taxable income from CPP, OAS and RRIF withdrawals.</p>
    <ol>
        <li><strong>RRSP route.</strong> She contributes $5,000. Her refund is $1,482.50 (29.65% on income between $80,000 and $85,000), so the contribution costs her $3,517.50 out of pocket.</li>
        <li><strong>TFSA route.</strong> She pays the same $1,482.50 of tax first and deposits the remaining $3,517.50.</li>
        <li><strong>At withdrawal, before growth.</strong> The RRSP $5,000 is taxed at 19.05%, leaving $4,047.50. The TFSA $3,517.50 comes out tax-free. The RRSP is ahead by $530.</li>
        <li><strong>If the investments double.</strong> The RRSP is worth $10,000 and leaves $8,095 after 19.05%; the TFSA is worth $7,035. The gap doubles to $1,060.</li>
    </ol>
    <p>The $530 is just the rate difference: 29.65% minus 19.05% is 10.6 percentage points, times $5,000. If Maya instead expected to retire on $100,000 of taxable income in Ontario, her withdrawal rate would be 31.48%, and the TFSA would win by $91.50 on the same $5,000 ($18.30 per $1,000, shown as $18 in the table).</p>
    <p>One more thing about Maya: the RRSP route only wins because she contributes the full $5,000. That needs her to fund the $1,482.50 gap up front and get it back as a refund in the spring, or to ask her employer to reduce withholding at source, using the CRA's Form T1213, Request to Reduce Tax Deductions at Source.</p>

    <h2 id="refund">Why the RRSP only wins if you invest the refund</h2>
    <p>The comparison above assumes you put the same pre-tax salary into each account. In real life most people contribute a round number of after-tax dollars, say $5,000, and then get a refund. If the refund goes into the same RRSP, a TFSA, or a mortgage payment, the maths holds. If it pays for a holiday, you have compared a $5,000 TFSA with a $5,000 RRSP that carries a future tax bill, and the TFSA wins at every income where your retirement rate is above zero.</p>
    <p>A simple habit fixes this. Decide where the refund goes before you contribute, and automate it if you can. Many people send the refund straight into their TFSA, which is the strongest version of using both accounts. Our <a href="/blog/tfsa-contribution-optimization/">TFSA contribution guide</a> covers how to fill the TFSA once the RRSP is set.</p>

    <h2 id="high">High incomes: the RRSP room cap and OAS recovery tax</h2>
    <p>At high incomes the RRSP looks unbeatable in the table, but two limits change the picture.</p>
    <p><strong>The room cap.</strong> The CRA's <a href="${RRSP}/contributing-a-rrsp-prpp/contributions-affect-your-rrsp-prpp-deduction-limit.html">deduction limit page</a> sets new RRSP room at 18% of the previous year's earned income, up to the annual limit of $33,810 for 2026, minus any pension adjustment. That cap is reached at $187,833 of earned income ($33,810 divided by 18%). The 2027 limit is $35,390, per the CRA's <a href="${LIMITS}">limits table</a>. Above the cap, extra savings have to go to a TFSA or a non-registered account anyway, so the question becomes order, not choice. The 2027 TFSA dollar limit is $7,500, effective January 1, 2027, on the CRA's <a href="${INDEXATION}">indexation adjustment page</a>. The 2027 indexation increase is 2.6%. Footnote 5 says the limit is $5,000 indexed to inflation after 2009 and rounded to the nearest $500. The 2026 TFSA limit stays $7,000. Cumulative room for someone eligible every year since 2009 who has never contributed is $116,500 from January 1, 2027, and $109,000 through 2026.</p>
    <p><strong>OAS recovery tax.</strong> RRSP and RRIF withdrawals are taxable income, and in retirement that income counts toward the OAS recovery tax. The Government of Canada's <a href="${OAS}">recovery tax page</a> sets the threshold at $95,323 of net income for the 2026 income year, which applies to OAS paid from July 2027 to June 2028, and the repayment is 15% of income above it. A retiree with $100,000 of net income would repay $701.55 (15% of $4,677). On the next $1,000 they withdraw, the effective rate in Ontario is 46.48%: 31.48% income tax plus 15% recovery. At that point an RRSP built at a 43.41% rate loses to a TFSA.</p>
    <p>TFSA withdrawals are not income. The CRA's <a href="${TFSA}/what.html">TFSA overview</a> says income earned in a TFSA and withdrawals from it do not affect eligibility for federal income-tested benefits and credits, including OAS, the Guaranteed Income Supplement, Employment Insurance, the Canada child benefit, the Canada workers benefit and the GST/HST credit. That is the strongest reason a high earner with a big RRSP should still fill a TFSA every year. Our <a href="/blog/oas-gis-clawback-canada/">OAS and GIS clawback guide</a> and <a href="/blog/rrsp-meltdown-strategy/">RRSP meltdown guide</a> go further.</p>

    <h2 id="tfsa-anyway">When to choose the TFSA even with a high income</h2>
    <ul>
        <li><strong>You need the money before retirement.</strong> An RRSP withdrawal while working is taxed at your working rate, and the CRA's <a href="${RRSP}/making-withdrawals/tax-rates-on-withdrawals.html">withholding rates</a> of 10%, 20% and 30% (5%, 10% and 15% in Quebec) on amounts up to $5,000, $5,000 to $15,000 and over $15,000 are taken at source. The RRSP room is also gone for good, while a TFSA withdrawal comes back as room the next January, as our <a href="/blog/tfsa-withdrawal-rules/">TFSA withdrawal rules guide</a> explains.</li>
        <li><strong>You expect a large pension.</strong> A defined benefit pension plus CPP and OAS can put a retiree into a higher bracket than they had while working part-time or early in a career.</li>
        <li><strong>Your income is temporarily low.</strong> In a parental leave year, a sabbatical, or your first year of work, contribute to the TFSA and keep the RRSP room for a higher-income year. Unused RRSP deduction room carries forward to later years, as the CRA's deduction limit page describes.</li>
        <li><strong>You plan to leave Canada.</strong> Withdrawals from an RRSP as a non-resident face Part XIII withholding, and the TFSA has its own non-resident rules. Our guide to <a href="/blog/investing-when-leaving-canada-tfsa-rrsp/">your TFSA and RRSP when you leave Canada</a> covers both.</li>
        <li><strong>You are buying a first home.</strong> An FHSA gives an RRSP-style deduction and TFSA-style tax-free withdrawal for a qualifying home, and usually comes first. See <a href="/blog/rrsp-vs-tfsa-vs-fhsa/">RRSP vs TFSA vs FHSA</a> and our <a href="/blog/fhsa-guide/">FHSA guide</a>.</li>
    </ul>

    <h2 id="limits">What this model leaves out</h2>
    <p>Our tax engine applies the 2026 federal and provincial brackets, the basic personal amounts and the Ontario surtax to taxable income. It does not apply CPP or EI contributions or their credits, the Canada employment amount, the Ontario Health Premium, the Ontario tax reduction, the age amount or the pension income amount. Those mostly matter at lower incomes, where credits can make the real marginal rate higher or lower than the table shows, and in retirement, where the age amount phases out as income rises.</p>
    <p>It also assumes today's brackets will apply in retirement. Brackets are indexed each year, so the dollar thresholds will move, but nobody knows whether the rates will. Treat the retirement columns as "the bracket you will be in" rather than an exact rate. And the table measures employment income; if your retirement income will include eligible dividends or capital gains from a non-registered account, the rate on RRIF withdrawals stacked on top of them is what counts.</p>
    <p>Finally, the model looks at one year. Real plans span decades, with raises, leaves, a spouse's income and a home purchase along the way, so rerun the comparison whenever your income changes bracket. Our <a href="/blog/rrsp-playbook/">RRSP playbook</a> covers contribution timing and spousal plans in more detail.</p>

    <h2 id="faq">FAQ</h2>
    <h3>At what income does an RRSP become better than a TFSA?</h3>
    <p>When your marginal rate today is higher than your expected rate in retirement. In Ontario in 2026, that usually starts once income is above the second bracket thresholds of $53,891 provincially and $58,523 federally, if you expect to retire on a modest income.</p>
    <h3>Is a TFSA better for low income?</h3>
    <p>Usually. At low incomes the RRSP refund is small, and RRIF withdrawals in retirement can reduce the GIS. TFSA withdrawals do not affect the GIS or other income-tested benefits.</p>
    <h3>Should I put my RRSP refund in my TFSA?</h3>
    <p>That is a strong default. The RRSP only beats the TFSA by the amounts in our table if the refund is saved or invested, and a TFSA keeps it tax-free.</p>
    <h3>What is the 2027 TFSA limit?</h3>
    <p>$7,500, effective January 1, 2027, on the CRA indexation adjustment page reviewed November 27, 2026. The 2026 limit is $7,000. Cumulative room since 2009 is $116,500 from that date for someone eligible every year who has never contributed, and $109,000 through 2026.</p>
    <h3>How much RRSP room do I get in 2026?</h3>
    <p>18% of your 2025 earned income, up to $33,810, minus any pension adjustment, plus unused room carried forward. Your exact figure is on your notice of assessment.</p>
    <h3>Does the answer change if I live in Quebec?</h3>
    <p>The rule is the same, but Quebec residents file a separate provincial return with different rates and a federal abatement, so the numbers in our tables do not apply. Use Quebec rates for both today and retirement.</p>
    <h3>Can I use RRSP room I did not use in earlier years?</h3>
    <p>Yes. The CRA's deduction limit includes your unused RRSP deduction room at the end of the previous year, so room you skip in a low-income year is still there when your rate is higher.</p>
    <h3>Does OAS recovery tax affect my TFSA?</h3>
    <p>No. TFSA withdrawals are not income for the recovery tax. RRSP and RRIF withdrawals are, which is why large RRSPs can push retirees past the $95,323 threshold for the 2026 income year.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${BRACKETS}">CRA: Tax rates and income brackets for individuals, current year (2026)</a>, reviewed November 22, 2026</li>
        <li><a href="${RRSP}/contributing-a-rrsp-prpp/contributions-affect-your-rrsp-prpp-deduction-limit.html">CRA: How contributions affect your RRSP deduction limit</a>, reviewed November 22, 2026</li>
        <li><a href="${INDEXATION}">CRA: Indexation adjustment for personal income tax and benefit amounts</a>, reviewed November 27, 2026. 2027 TFSA dollar limit $7,500. Footnote 5.</li>
        <li><a href="${LIMITS}">CRA: MP, DB, RRSP, DPSP, ALDA, TFSA limits, YMPE and the YAMPE</a>, reviewed November 22, 2026</li>
        <li><a href="${RRSP}/making-withdrawals/tax-rates-on-withdrawals.html">CRA: Tax rates on RRSP withdrawals</a>, reviewed November 22, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t1213.html">CRA: Form T1213, Request to Reduce Tax Deductions at Source</a>, reviewed November 22, 2026</li>
        <li><a href="${OAS}">Government of Canada: OAS pension recovery tax</a>, reviewed November 22, 2026</li>
        <li><a href="${TFSA}/what.html">CRA: What is a TFSA (impact on benefits)</a>, reviewed November 22, 2026</li>
        <li>Our 2026 tax engine (federal, Ontario, British Columbia and Alberta brackets from the CRA page above), run November 22, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/rrsp-vs-tfsa-vs-fhsa/">RRSP vs TFSA vs FHSA</a></li>
        <li><a href="/blog/tfsa-withdrawal-rules/">TFSA withdrawal rules: when your room comes back</a></li>
        <li><a href="/blog/how-to-open-tfsa/">How to open a TFSA, step by step</a></li>
        <li><a href="/blog/investing-when-leaving-canada-tfsa-rrsp/">Your TFSA and RRSP when you leave Canada</a></li>
        <li><a href="/blog/tfsa-contribution-optimization/">TFSA contribution optimization</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Choosing the account is step one. Filling them in the right order is step two.</strong></p>
        <p>The Canadian Investing Guide covers every registered account, the order to fill them, and what to hold in each. $29 CAD.</p>
        <a href="/ebooks/investing-guide/" class="cta-button">See the Canadian Investing Guide</a>
    </div>

    ${batchFooter(D, 'Investing', disclaimer, UPDATED)}

</div>`;

export const rrspOrTfsaByIncomePost = {
  ...batchPost({
  date: D,
  category: 'Investing',
  categorySlug: 'investing',
  subcategory: 'accounts-asset-location',
  slug: 'rrsp-or-tfsa-by-income',
  title: 'RRSP or TFSA by Income: The 2026 Answer at 12 Income Levels',
  excerpt:
    'RRSP or TFSA? We ran 2026 tax brackets at 12 incomes from $40,000 to $250,000 to show how many dollars each account wins by, plus BC and Alberta rates.',
  content,
}),
  updated: UPDATED,
};
