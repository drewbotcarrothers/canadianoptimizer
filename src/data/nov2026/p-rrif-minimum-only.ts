import { batchFooter, batchPost } from './types';

const D = '2026-11-17';

const disclaimer = `General education, not tax, legal or financial advice. Rules, rates and thresholds were checked against the CRA and Canada.ca pages listed under Sources on November 14, 2026. The $500,000 RRIF, the 3% and 1% real returns, the $12,000, $52,000 and $70,000 other-income levels, the death ages and the single-person household are illustrations, not forecasts or your assessment. The model uses federal tax only, constant 2026 dollars and a single taxpayer, and leaves out provincial tax and indexation. Confirm the current CRA pages and talk to a financial planner or tax professional about your own RRIF.`;

const content = `<div class="container">

    <div class="hook">
        The RRIF minimum is a floor, not a plan, but what do the extra withdrawals actually save? <span class="highlight">We ran $500,000 through both paths, year by year, with the CRA's own factors and brackets.</span> The answer on this page from our <a href="/category/retirement/decumulation-rrif/">withdrawals and RRIFs hub</a> is smaller, and more conditional, than the usual warning suggests.
    </div>

    <p>Not always. In our 2026-dollar model of a single retiree with $500,000 in a RRIF from age 71, level withdrawals left $3,596 to $7,460 more after tax than the minimum at death at 90, and $4,380 less when other income was high. We used the CRA's 2026 federal brackets and its RRIF factors; provincial tax is excluded.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>At 71, the CRA's factor of 5.28% makes the minimum on $500,000 equal to $26,400. In constant 2026 dollars it barely moves for years, because a 3% real return roughly offsets the rising factor.</li>
            <li>Level withdrawals (about $28,714 a year, sized to empty the RRIF by 95) beat minimum-only by $7,460 when other income is $12,000 and by $3,596 when it is $52,000, at death at 90.</li>
            <li>When other income is $70,000, level withdrawals lose by $4,380, because they push more income over the OAS recovery threshold while you are alive.</li>
            <li>The big tax event is the final return, where the whole leftover RRIF is added to income. A spouse who receives it as a rollover changes that completely.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <strong>On this page</strong>
        <ul>
            <li><a href="#minimum">What does the minimum force you to take?</a></li>
            <li><a href="#method">How was the comparison built?</a></li>
            <li><a href="#year-by-year">What does each path look like year by year?</a></li>
            <li><a href="#result">Which path leaves more after tax?</a></li>
            <li><a href="#oas">Does taking only the minimum protect your OAS?</a></li>
            <li><a href="#when">When is minimum-only fine, and when is it a mistake?</a></li>
            <li><a href="#limits">What does this model leave out?</a></li>
        </ul>
    </nav>

    <h2 id="minimum">What does the RRIF minimum force you to take each year?</h2>
    <p>The minimum is your RRIF's value on January 1 multiplied by a CRA factor that depends on your age. The CRA's page on the <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/completing-slips-summaries/t4rsp-t4rif-information-returns/payments/minimum-amount-a-rrif.html">minimum amount from a RRIF</a> says the factor is 1 divided by (90 minus your age), and the <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/completing-slips-summaries/t4rsp-t4rif-information-returns/payments/chart-prescribed-factors.html">chart of prescribed factors</a> says that formula applies to age 70 or younger and lists the factor from age 71. You can withdraw more but not less, according to the CRA's <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/registered-retirement-income-fund-rrif/receiving-income-a-rrif.html">receiving income from a RRIF</a> page.</p>

    <div class="table-wrapper">
        <table>
            <caption>CRA prescribed RRIF factors for "all other RRIFs" (reviewed November 14, 2026), with the minimum each would force on an example balance that stayed at $500,000</caption>
            <thead>
                <tr><th>Age at January 1</th><th>Factor</th><th>Minimum on an example $500,000</th></tr>
            </thead>
            <tbody>
                <tr><td>71</td><td>5.28%</td><td>$26,400</td></tr>
                <tr><td>75</td><td>5.82%</td><td>$29,100</td></tr>
                <tr><td>80</td><td>6.82%</td><td>$34,100</td></tr>
                <tr><td>85</td><td>8.51%</td><td>$42,550</td></tr>
                <tr class="highlight-row"><td>90</td><td>11.92%</td><td>$59,600</td></tr>
                <tr><td>95 or older</td><td>20.00%</td><td>$100,000</td></tr>
            </tbody>
        </table>
    </div>
    <p>The last column is arithmetic on a balance that never changes, to show how the factor climbs. A real balance shrinks and grows, so the dollars forced out are very different. The next sections show what they are. Our <a href="/blog/rrif-minimum-withdrawal/">RRIF minimum withdrawal guide</a> has the full table and how to use a younger spouse's age; this page asks a different question: what does it cost to stop at the minimum?</p>

    <h2 id="method">How was the comparison built?</h2>
    <p>Two withdrawal paths, one retiree, same tax rules, and the leftovers taxed at death. Everything is in constant 2026 dollars, so the return is a real return and the 2026 brackets and OAS threshold are held flat. The model code is in the repository next to this post's figures log. Dollar inputs marked as examples are illustrations, not forecasts.</p>

    <div class="table-wrapper">
        <table>
            <caption>Model inputs: sourced rules and example assumptions</caption>
            <thead>
                <tr><th>Input</th><th>Value</th><th>Where it comes from</th></tr>
            </thead>
            <tbody>
                <tr><td>RRIF at January 1 of the year you are 71</td><td>$500,000</td><td>Example</td></tr>
                <tr><td>Real return</td><td>3% a year (1% shown as a check)</td><td>Example</td></tr>
                <tr><td>Minimum-only path</td><td>Withdraw exactly the CRA minimum</td><td><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/completing-slips-summaries/t4rsp-t4rif-information-returns/payments/chart-prescribed-factors.html">CRA prescribed factors</a></td></tr>
                <tr><td>Level path</td><td>$28,714 a year, or the minimum if higher</td><td>The payment that would empty $500,000 by the end of age 95 at 3% (our arithmetic)</td></tr>
                <tr><td>Other income</td><td>$12,000, $52,000 or $70,000 a year (CPP, work pension)</td><td>Examples</td></tr>
                <tr><td>OAS pension</td><td>$762.50 a month at 65 to 74 and $838.75 at 75 and over, held flat</td><td><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/payments.html">Canada.ca OAS payment amounts</a>, October to December 2026</td></tr>
                <tr><td>Federal brackets</td><td>14% to $58,523; 20.5% to $117,045; 26% to $181,440; 29% to $258,482; 33% above</td><td><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/tax-rates-brackets/current-year.html">CRA 2026 federal rates</a></td></tr>
                <tr><td>Credits</td><td>Basic personal amount $16,452 (reduced to $14,829 above the 33% bracket start), age amount $9,208 reduced as net income rises above $46,432, pension amount $2,000, all at 14%. The age amount is reduced by 15% of net income above that threshold, under section 118(2) of the Income Tax Act; section 118(3) sets the $2,000 pension amount</td><td><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/adjustment-personal-income-tax-benefit-amounts.html">CRA indexation table, 2026</a>; <a href="https://laws-lois.justice.gc.ca/eng/acts/I-3.3/section-118.html">Income Tax Act, section 118</a></td></tr>
                <tr><td>OAS recovery tax</td><td>15% of net income above $95,323, up to the OAS received</td><td><a href="https://laws-lois.justice.gc.ca/eng/acts/I-3.3/section-180.2.html">Income Tax Act, section 180.2</a>; <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/adjustment-personal-income-tax-benefit-amounts.html">CRA 2026 threshold</a></td></tr>
                <tr><td>Death</td><td>At the end of the year you turn 90 (80, 85 and 95 also run); the whole remaining RRIF is added to that year's income; no spouse</td><td><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4178/death-a-rrif-annuitant.html">CRA RC4178</a></td></tr>
            </tbody>
        </table>
    </div>

    <p>To compare fairly, both paths must support the same lifestyle. We fix spending at what the minimum-only path leaves after tax each year. Any extra after-tax cash from the level path goes into a Tax-Free Savings Account (TFSA) that earns the same 3% real return, and a shortfall comes out of it. The largest yearly top-up in any of the 3% runs is $3,652, which fits within the $7,000 2026 annual TFSA dollar limit on the <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/adjustment-personal-income-tax-benefit-amounts.html">CRA indexation table</a>. TFSA room already used elsewhere would change that.</p>

    <h2 id="year-by-year">What does each path look like year by year?</h2>
    <p>With $12,000 of other income, the minimum-only path draws about $26,400 at 71 and about $24,837 at 90, while the level path draws $28,714 every year. Federal income tax stays between $2,704 and $3,328 a year on both paths, because the income never leaves the 14% bracket.</p>

    <div class="table-wrapper">
        <table>
            <caption>Profile A ($12,000 other income, 3% real return), selected years, constant 2026 dollars (model output)</caption>
            <thead>
                <tr><th>Age</th><th>Min-only: balance at January 1</th><th>Min-only: withdrawal</th><th>Min-only: federal tax</th><th>Level: balance at January 1</th><th>Level: withdrawal</th><th>Level: federal tax</th></tr>
            </thead>
            <tbody>
                <tr><td>71</td><td>$500,000</td><td>$26,400</td><td>$2,808</td><td>$500,000</td><td>$28,714</td><td>$3,181</td></tr>
                <tr><td>75</td><td>$449,361</td><td>$26,153</td><td>$2,916</td><td>$439,022</td><td>$28,714</td><td>$3,328</td></tr>
                <tr><td>80</td><td>$378,620</td><td>$25,822</td><td>$2,862</td><td>$351,927</td><td>$28,714</td><td>$3,328</td></tr>
                <tr><td>85</td><td>$298,601</td><td>$25,411</td><td>$2,796</td><td>$250,961</td><td>$28,714</td><td>$3,328</td></tr>
                <tr><td>90</td><td>$208,360</td><td>$24,837</td><td>$2,704</td><td>$133,913</td><td>$28,714</td><td>$3,328</td></tr>
            </tbody>
        </table>
    </div>
    <p>The minimum barely moves in real dollars because two things offset: the factor rises each year, but the balance falls. The level path takes about $2,314 more than the minimum at 71 and ends up taking much more than the minimum by 90, when its balance is down to $133,913 against $208,360.</p>

    <h2 id="result">Which path leaves more after tax?</h2>
    <p>At death at 90, level withdrawals come out ahead by $7,460 with $12,000 of other income and $3,596 with $52,000, and behind by $4,380 with $70,000. In each case the gap is under 2% of the starting $500,000, so the path matters less than the headlines suggest.</p>

    <p class="did-you-know" data-info-gain><strong>Did you know:</strong> our own calculation shows that on $500,000 from 71, minimum-only costs at most $7,460 more than level withdrawals by age 90 and wins when other income is high. The bigger tax event is the leftover RRIF added to income in the final return, not the early years.</p>

    <div class="table-wrapper">
        <table>
            <caption>Death at 90, federal tax only, 3% real return, constant 2026 dollars (model output; examples, not forecasts)</caption>
            <thead>
                <tr><th>Other income a year</th><th>Tax plus OAS recovery tax: min-only</th><th>Tax plus OAS recovery tax: level</th><th>Left to heirs after tax: min-only</th><th>Left to heirs after tax: level, plus TFSA</th><th>Level's edge</th></tr>
            </thead>
            <tbody>
                <tr class="highlight-row"><td>$12,000</td><td>$111,060</td><td>$98,275</td><td>$134,304</td><td>$141,764</td><td>+$7,460</td></tr>
                <tr><td>$52,000</td><td>$281,372</td><td>$271,249</td><td>$130,597</td><td>$134,193</td><td>+$3,596</td></tr>
                <tr><td>$70,000</td><td>$387,364</td><td>$383,072</td><td>$129,837</td><td>$125,457</td><td>&minus;$4,380</td></tr>
            </tbody>
        </table>
    </div>
    <p>In the $70,000 row the level path pays less total tax and still loses. It pays more of the tax early, and tax paid early has less time to compound. Read the last column, not the tax columns. At a 1% real return the edge is $7,024, $1,360 and &minus;$1,950, so the sign does not change.</p>

    <div class="chart-container">
        <h3>Profile A: tax on the leftover RRIF at death at 90 (federal income tax plus OAS recovery tax)</h3>
        <div class="bar-chart">
            <div class="bar-item">
                <div class="bar-label">Min</div>
                <div class="bar-wrapper"><div class="bar" style="width: 100%;"><span>$54,726</span></div></div>
            </div>
            <div class="bar-item">
                <div class="bar-label">Level</div>
                <div class="bar-wrapper"><div class="bar" style="width: 59%;"><span>$32,305</span></div></div>
            </div>
        </div>
        <p>The minimum-only path leaves $189,030 in the RRIF at 90 and the level path leaves $108,355. The CRA treats the deceased as having received the RRIF's fair market value just before death, so the bigger leftover is taxed in one year (CRA <a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4178/death-a-rrif-annuitant.html">RC4178</a>). That is where the minimum-only path pays.</p>
    </div>

    <h2>Does the death age change the answer?</h2>
    <p>Not the direction, but the size. For profile A, the level path's edge is $3,916 at death at 80, $7,027 at 85, $7,460 at 90 and $5,730 at 95. At 95 the level path has emptied the RRIF, so there is no deemed income at all. Dying early favours neither path much. The model cannot tell you your death age, which is the reason to avoid a plan that only works at one.</p>

    <h2 id="oas">Does taking only the minimum protect your OAS?</h2>
    <p>Only if your other income is high enough for OAS recovery tax to matter while you are alive. The recovery tax is 15% of net income above $95,323 for 2026, up to the OAS you received, under <a href="https://laws-lois.justice.gc.ca/eng/acts/I-3.3/section-180.2.html">section 180.2 of the Income Tax Act</a>, with the $95,323 threshold from the CRA's <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/adjustment-personal-income-tax-benefit-amounts.html">2026 indexation table</a>. In profiles A and B no RRIF withdrawal on either path crosses it before death.</p>

    <p>In profile C, with $70,000 of other income, both paths pay recovery tax every year: $30,842 in total to age 90 for minimum-only and $39,819 for level. That is the $8,977 gap that sinks the level path in that row. If you are already near the line, the minimum is the better friend. Our guide to the <a href="/blog/oas-gis-clawback-canada/">OAS clawback and GIS</a> covers the income stacking in detail.</p>

    <p>Every path pays recovery tax in the year of death. The CRA's <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23500-social-benefits-repayment.html">line 23500 page</a> compares your net income for the year with the threshold, and the deemed RRIF income is part of that year's net income. In profile A the final-year recovery tax is $10,065 on minimum-only and $9,572 on level, nearly the whole year's OAS either way. Withdrawing more earlier does not avoid that.</p>

    <div class="warning-box">
        <strong>Watch out:</strong> OAS pays more at 75 and over than at 65 to 74 (<a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/payments.html">$838.75 a month against $762.50</a> in the October to December 2026 quarter), and the CRA's recovery thresholds are indexed, but this model holds both flat in 2026 dollars. A real plan will not. Also, the Guaranteed Income Supplement (GIS) is cut by income: the single-person income limit for the October to December 2026 quarter is $23,112 on the <a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/payments.html">Canada.ca payment page</a>. Profile A's income is already above it, but a retiree with a small RRIF and little other income should check before withdrawing extra.
    </div>

    <h2 id="when">When is minimum-only fine, and when is it a mistake?</h2>
    <p>Minimum-only is usually fine when you need the cash for nothing else, your other income is already near the OAS threshold, or a spouse will inherit the RRIF as a rollover. It is more likely a mistake when you are single, have a large balance and low other income, so the leftover will be taxed at high rates in one final year.</p>

    <div class="table-wrapper">
        <table>
            <caption>Decision guide (based on the model above and CRA rules reviewed November 14, 2026)</caption>
            <thead>
                <tr><th>Your situation</th><th>Usually fits</th><th>Why</th></tr>
            </thead>
            <tbody>
                <tr><td>Married or common-law, spouse is the successor annuitant</td><td>Minimum-only is often fine</td><td>The CRA does not treat the RRIF as received at the first death when the spouse is the successor annuitant, so the RRIF continues (<a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4178/death-a-rrif-annuitant.html">RC4178</a>)</td></tr>
                <tr><td>Single, large RRIF, other income under about $50,000</td><td>Withdraw more than the minimum</td><td>Extra withdrawals fill the 14% bracket and shrink the final-year inclusion (profile A)</td></tr>
                <tr><td>Other income near $95,323</td><td>Stay near the minimum</td><td>Extra income triggers 15% recovery tax while you are alive (profile C)</td></tr>
                <tr><td>Small RRIF, low income, GIS recipient</td><td>Check the GIS cut before withdrawing more</td><td>GIS is income-tested; the single limit is $23,112 for Oct to Dec 2026</td></tr>
                <tr><td>Need to spend more than the minimum</td><td>Withdraw what you need</td><td>The minimum is a floor, not a spending target</td></tr>
            </tbody>
        </table>
    </div>

    <ol>
        <li>Find your January 1 balance and your factor, then write down the minimum in dollars.</li>
        <li>Add up your other taxable income for the year, including CPP, OAS and any pension, and compare it with $95,323.</li>
        <li>Ask whether a spouse would receive the RRIF. If yes, the final-return tax is deferred, not avoided.</li>
        <li>Run two numbers: the tax on the minimum, and the tax if you add $5,000 and then $10,000. Use your province's rates, which this model excludes.</li>
        <li>Check the pension amount and age amount effects on the same return. Pension splitting, covered in our <a href="/blog/pension-income-splitting-canada/">Form T1032 guide</a>, can change which brackets you land in.</li>
    </ol>

    <div class="tip-box">
        <strong>Pro tip:</strong> before you pick a withdrawal path, compare it with the other moves for the same dollars: the early-withdrawal approach in our <a href="/blog/rrsp-meltdown-strategy/">RRSP meltdown guide</a>, the order of accounts in the <a href="/blog/retirement-withdrawal-strategy/">withdrawal strategy guide</a>, and the guaranteed income in the <a href="/blog/annuities-canada-guide/">annuities guide</a>.
    </div>

    <h2 id="limits">What does this model leave out?</h2>
    <p>It leaves out several things that can move the numbers, so treat the results as a pattern, not a prediction. The main omissions are below.</p>
    <ul>
        <li><strong>Provincial income tax.</strong> It adds to every dollar of tax shown. Quebec has its own system through Revenu Québec. We did not model any province.</li>
        <li><strong>Indexation and real returns that vary.</strong> Brackets, credits, the OAS threshold and OAS itself rise with inflation. A bad run of returns early would change the balance on both paths.</li>
        <li><strong>A surviving spouse.</strong> The model has one person. Couples can split pension income and roll the RRIF over, which changes the picture.</li>
        <li><strong>Other taxes at death.</strong> Probate fees and any capital gains on other assets are outside it. See <a href="/blog/probate-fees-by-province-canada/">probate fees by province</a> and our <a href="/blog/inheritance-tax-canada/">inheritance tax guide</a>.</li>
        <li><strong>Investment taxes in the TFSA assumption.</strong> The model puts spare cash into a TFSA without testing room beyond the annual limit check above.</li>
    </ul>
    <p>Treat the dollar results as examples. If your RRIF is bigger, your other income different or your spouse younger, run your own version, or ask a financial planner or tax professional to run it with your province's rates.</p>

    <h2>Frequently asked questions</h2>
    <h3>Is it bad to only take the RRIF minimum?</h3>
    <p>Not necessarily. In our model of $500,000 from age 71, the gap between minimum-only and level withdrawals was between $4,380 in favour of minimum-only and $7,460 in favour of level at death at 90, under 2% of the starting balance.</p>
    <h3>How is the RRIF minimum calculated?</h3>
    <p>It is your RRIF's value on January 1 times a CRA factor for your age, or for a younger spouse's age if you elected it when the RRIF was set up. The factor at 71 is 5.28%, and at 95 or older it is 20%, per the CRA's chart of prescribed factors.</p>
    <h3>Does a RRIF withdrawal affect OAS?</h3>
    <p>Yes, through net income. OAS recovery tax is 15% of net income above $95,323 for 2026, up to the OAS received. RRIF withdrawals count in net income.</p>
    <h3>What happens to a RRIF when you die?</h3>
    <p>If there is no spouse rollover, the CRA treats you as having received the RRIF's fair market value just before death, and it is reported on your final return. A spouse named as successor annuitant can keep the RRIF going without that inclusion.</p>
    <h3>Can I take more than the minimum from a RRIF?</h3>
    <p>Yes. The CRA says you can withdraw more, but not less, than the minimum. Our RRIF minimum guide covers how withholding works on the amount above the minimum.</p>
    <h3>Should I take extra from my RRIF to avoid OAS clawback later?</h3>
    <p>Only if the extra income stays below the threshold. In profile A it did, and level withdrawals helped. In profile C, with $70,000 of other income, extra withdrawals added recovery tax every year and the level path lost.</p>
    <h3>Does the model include provincial tax?</h3>
    <p>No. It uses CRA 2026 federal brackets and credits only. Provincial tax would raise every tax figure, and the OAS recovery tax is federal.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/completing-slips-summaries/t4rsp-t4rif-information-returns/payments/chart-prescribed-factors.html">CRA: Chart – Prescribed factors</a>, reviewed November 14, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/completing-slips-summaries/t4rsp-t4rif-information-returns/payments/minimum-amount-a-rrif.html">CRA: Minimum amount from a RRIF</a>, reviewed November 14, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/registered-retirement-income-fund-rrif/receiving-income-a-rrif.html">CRA: Receiving income from a RRIF</a>, reviewed November 14, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4178/death-a-rrif-annuitant.html">CRA: Information Sheet RC4178, Death of a RRIF Annuitant, PRPP Member, or ALDA Annuitant</a>, reviewed November 14, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/tax-rates-brackets/current-year.html">CRA: Current year tax rates and income brackets (2026)</a>, reviewed November 14, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/adjustment-personal-income-tax-benefit-amounts.html">CRA: Indexation adjustment for personal income tax and benefit amounts</a>, reviewed November 14, 2026</li>
        <li><a href="https://laws-lois.justice.gc.ca/eng/acts/I-3.3/section-118.html">Justice Laws: Income Tax Act, section 118 (personal credits)</a>, current to October 19, 2026, reviewed November 14, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23500-social-benefits-repayment.html">CRA: Line 23500 – Social benefits repayment</a>, reviewed November 14, 2026</li>
        <li><a href="https://laws-lois.justice.gc.ca/eng/acts/I-3.3/section-180.2.html">Justice Laws: Income Tax Act, section 180.2 (tax on old age security benefits)</a>, current to October 19, 2026, reviewed November 14, 2026</li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/payments.html">Canada.ca: Old Age Security payment amounts</a>, reviewed November 14, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/rrif-minimum-withdrawal/">RRIF minimum withdrawals: the table and the younger-spouse election</a></li>
        <li><a href="/blog/oas-gis-clawback-canada/">OAS clawback and GIS: how income stacks</a></li>
        <li><a href="/blog/rrsp-meltdown-strategy/">The RRSP meltdown strategy</a></li>
        <li><a href="/blog/retirement-withdrawal-strategy/">The retirement withdrawal order</a></li>
        <li><a href="/blog/rrsp-to-rrif-conversion/">Converting your RRSP to a RRIF</a></li>
        <li><a href="/blog/final-tax-return-deceased-canada/">The final tax return for a deceased person</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>A withdrawal path is one decision inside a full retirement income plan.</strong></p>
        <p>The Canadian Optimizer Retirement Guide covers RRIFs, CPP, OAS and the order to draw your accounts.</p>
        <a href="/ebooks/retirement-guide/" class="cta-button">See the Retirement Guide</a>
    </div>

    ${batchFooter(D, 'Retirement', disclaimer)}

</div>`;

export const rrifMinimumOnlyPost = batchPost({
  date: D,
  category: 'Retirement',
  categorySlug: 'retirement',
  subcategory: 'decumulation-rrif',
  slug: 'rrif-minimum-only-mistake',
  title: "Should You Only Take the RRIF Minimum? The Tax and OAS Math",
  excerpt:
    "Taking only the RRIF minimum is not always a mistake. On $500,000 from age 71, level withdrawals beat it by $3,596 to $7,460 at 90 unless other income is high.",
  content,
});
