import { invFooter, invPost } from './types';

const OAS_REC = 'https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/recovery-tax.html';
const OAS_PAY = 'https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/payments.html';
const CRA_23500 = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23500-social-benefits-repayment.html';
const CRA_DTC = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-40425-federal-dividend-tax-credit.html';
const CRA_TFSA = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/what.html';
const CRA_TFSA_LIMITS = 'https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html';
const ESDC_Q = 'https://www.canada.ca/en/employment-social-development/programs/pensions/pension/statistics/2025-quarterly-october-december.html';

export const dividendsOasClawbackCanada = invPost(
  'dividend-investing',
  'dividends-oas-clawback-canada',
  'Dividends and the OAS Clawback: Why the Gross-Up Matters',
  'Eligible dividends count at 138% for the OAS clawback, so $1 above the threshold costs 20.7 cents of OAS. Official 2024 and 2025 thresholds, examples and fixes.',
  `<div class="container">

    <div class="hook">
        Old Age Security is clawed back at 15% of net income above $93,454 for 2025, according to Service Canada. For dividend investors the catch is the gross-up: $10,000 of eligible Canadian dividends adds <span class="highlight">$13,800 to net income</span>, so every dollar of dividends above the line costs about 20.7 cents of OAS.
    </div>

    <p>The OAS clawback uses net income, and net income includes the grossed-up value of Canadian dividends, not the cash received. Eligible dividends count at 138%, so above the threshold each $1 of dividends costs 20.7 cents of OAS, versus 15 cents for interest and 7.5 cents for capital gains (Service Canada and CRA, 2025).</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The OAS recovery tax is 15% of net income above the threshold. For the 2025 income year it starts at $93,454, per Service Canada and CRA, and the tax is recovered from OAS paid July 2026 to June 2027.</li>
            <li>Eligible dividends are grossed up by 38% and non-eligible dividends by 15% before they reach net income (line 23400).</li>
            <li>The dividend tax credit reduces income tax, but it does not reduce net income, so it does nothing for the clawback.</li>
            <li>Above the threshold, $1 of eligible dividends costs 20.7 cents of OAS, $1 of interest 15 cents, $1 of capital gains 7.5 cents.</li>
            <li>CRA says TFSA income and withdrawals do not affect federal income-tested benefits, including OAS. Holding dividend payers in a TFSA is the cleanest fix.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/dividend-investing/">Dividend Investing</a>, in the <a href="/category/investing/">Investing</a> category. The pillar, <a href="/blog/dividend-investing-canada/">dividend investing in Canada</a>, covers building an income portfolio. The broader retirement view of the clawback, including pensions and RRIFs, is in our <a href="/blog/oas-gis-clawback-canada/">OAS and GIS clawback guide</a>.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#how">How does the OAS clawback work?</a></li>
            <li><a href="#grossup">Why do dividends count for more than you receive?</a></li>
            <li><a href="#compare">How do dividends compare with interest and capital gains?</a></li>
            <li><a href="#example">What does it cost in a real retirement budget?</a></li>
            <li><a href="#credit">Doesn't the dividend tax credit make up for it?</a></li>
            <li><a href="#fix">How can you reduce the clawback?</a></li>
            <li><a href="#provinces">Does your province matter?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="how">How does the OAS clawback work?</h2>

    <p>The official name is the OAS pension recovery tax. If your net income for a year is above the threshold, you repay 15% of the excess, up to the full OAS you received. <a href="${OAS_REC}">Service Canada's recovery tax page</a> sets out the thresholds:</p>

    <div class="table-wrapper">
        <table>
            <caption>Published OAS recovery tax thresholds (Service Canada recovery tax page and ESDC quarterly report, reviewed October 23, 2026)</caption>
            <thead>
                <tr><th>Income year</th><th>Recovery period</th><th>Clawback starts above</th><th>OAS fully clawed back at (age 65–74)</th><th>Fully clawed back at (75+)</th></tr>
            </thead>
            <tbody>
                <tr><td>2024</td><td>July 2025 to June 2026</td><td>$90,997</td><td>$148,451</td><td>$154,196</td></tr>
                <tr class="highlight-row"><td>2025</td><td>July 2026 to June 2027</td><td>$93,454</td><td>$152,062</td><td>$157,923</td></tr>
            </tbody>
        </table>
    </div>

    <p>This page works in the <strong>2025 income year</strong>: net income on your 2025 return, compared with the $93,454 threshold, sets the recovery tax withheld from OAS paid from July 2026 to June 2027. CRA's line 23500 page uses the same $93,454 for 2025 returns, and ESDC's October to December 2025 quarterly report gives the final 2025 repayment range as $93,454 to $152,062 (65 to 74) and up to $157,923 (75 and over). Check Service Canada's page for the 2026 income year once you file for 2026. For context, the maximum OAS pension for October to December 2026 is $762.50 a month at 65 to 74 and $838.75 at 75 and over, per its <a href="${OAS_PAY}">payment amounts page</a>. Seniors 75 and older have received 10% more since July 2022.</p>

    <p>On your return, CRA calculates the repayment on line 23500 using net income from line 23400, minus a few adjustments for amounts already repaid (<a href="${CRA_23500}">CRA line 23500 page</a>). Service Canada then withholds the recovery tax from your monthly OAS from July of the following year, based on that return. If you were withheld based on a high-income year that will not repeat, Form T1213(OAS) asks CRA to reduce it.</p>

    <h2 id="grossup">Why do dividends count for more than you receive?</h2>

    <p>Canadian dividends are paid from a company's after-tax profit. To avoid taxing the same profit twice, the tax system "grosses up" the dividend to approximate the pre-tax profit, taxes that amount, then gives back a dividend tax credit. <a href="${CRA_DTC}">CRA's line 40425 page</a> sets the federal credit for eligible dividends at 15.0198% of the grossed-up amount, and 9.0301% for other than eligible dividends.</p>

    <div class="table-wrapper">
        <table>
            <caption>How $10,000 of each income type reaches net income</caption>
            <thead>
                <tr><th>Income type, $10,000 received</th><th>Inclusion</th><th>Added to net income</th><th>Cents of OAS lost per $1 received, above the threshold</th></tr>
            </thead>
            <tbody>
                <tr class="highlight-row"><td>Eligible Canadian dividends (most large public companies)</td><td>138% (38% gross-up)</td><td>$13,800</td><td>20.7¢</td></tr>
                <tr><td>Non-eligible dividends (many small private corporations)</td><td>115% (15% gross-up)</td><td>$11,500</td><td>17.25¢</td></tr>
                <tr><td>Interest, RRIF withdrawals, pension</td><td>100%</td><td>$10,000</td><td>15¢</td></tr>
                <tr><td>Foreign dividends (gross, before withholding)</td><td>100%</td><td>$10,000</td><td>15¢</td></tr>
                <tr><td>Capital gains (2025 inclusion rate 50%)</td><td>50%</td><td>$5,000</td><td>7.5¢</td></tr>
                <tr><td>Return of capital</td><td>0% (reduces ACB instead)</td><td>$0</td><td>0¢</td></tr>
                <tr><td>Anything earned or withdrawn in a TFSA</td><td>Not reported</td><td>$0</td><td>0¢</td></tr>
            </tbody>
        </table>
    </div>

    <div class="chart-container">
        <h3>OAS clawed back per $1,000 of income received, once above the threshold (calculated)</h3>
        <div class="bar-chart">
            <div class="bar-item"><div class="bar-label wide">Eligible dividends: $207</div><div class="bar-wrapper"><div class="bar" style="width: 100%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Non-eligible dividends: $172.50</div><div class="bar-wrapper"><div class="bar" style="width: 83%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Interest or RRIF: $150</div><div class="bar-wrapper"><div class="bar" style="width: 72%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">Capital gains: $75</div><div class="bar-wrapper"><div class="bar" style="width: 36%;"><span></span></div></div></div>
            <div class="bar-item"><div class="bar-label wide">TFSA income: $0</div><div class="bar-wrapper"><div class="bar" style="width: 1%;"><span></span></div></div></div>
        </div>
        <p>15% × amount added to net income. Ignores income tax, which is separate. Capital gains use the 50% inclusion rate CRA lists for 2025.</p>
    </div>

    <h2 id="compare">How do dividends compare with interest and capital gains?</h2>

    <p>Take a retiree with $90,000 of net income from pensions, CPP, OAS and RRIF withdrawals in 2025. Add $10,000 of investment income in a non-registered account and measure the OAS recovery tax at the published 2025 threshold of $93,454. That recovery is withheld from OAS paid July 2026 to June 2027.</p>

    <div class="table-wrapper">
        <table>
            <caption>OAS recovery tax on $10,000 of extra investment income, 2025 income year (illustrative calculation)</caption>
            <thead>
                <tr><th>Extra $10,000 received as</th><th>Net income</th><th>Above $93,454 by</th><th>OAS recovery (15%)</th></tr>
            </thead>
            <tbody>
                <tr class="highlight-row"><td>Eligible dividends</td><td>$103,800</td><td>$10,346</td><td>$1,551.90</td></tr>
                <tr><td>Non-eligible dividends</td><td>$101,500</td><td>$8,046</td><td>$1,206.90</td></tr>
                <tr><td>Interest</td><td>$100,000</td><td>$6,546</td><td>$981.90</td></tr>
                <tr><td>Capital gains</td><td>$95,000</td><td>$1,546</td><td>$231.90</td></tr>
                <tr><td>TFSA withdrawal or income</td><td>$90,000</td><td>Below threshold</td><td>$0</td></tr>
            </tbody>
        </table>
    </div>

    <p>Same cash, very different OAS outcomes. The dividend case costs $570 more in OAS than the interest case, purely because of the gross-up, and $1,320 more than the capital gains case. The interest row matches Service Canada's own worked example ($100,000 of 2025 income, repayment $981.90). Income tax is a separate calculation, where eligible dividends often still come out ahead of interest thanks to the credit.</p>

    <h2 id="example">What does it cost in a real retirement budget?</h2>

    <div class="example-box">
        <strong>Illustrative example: Diane, Kelowna, age 68, 2025 income</strong>
        <div class="example-calculation">
            <div class="line"><span>Defined benefit pension</span><span>$52,000</span></div>
            <div class="line"><span>CPP</span><span>$14,000</span></div>
            <div class="line"><span>OAS at the 2025 maximum (6 × $727.67 + 3 × $734.95 + 3 × $740.09)</span><span>$8,791.14</span></div>
            <div class="line"><span>RRIF minimum withdrawal</span><span>$11,000</span></div>
            <div class="line"><span>Eligible dividends received: $12,000, grossed up</span><span>$16,560</span></div>
            <div class="line"><span>Net income</span><span>$102,351.14</span></div>
            <div class="line"><span>Above the 2025 threshold ($93,454)</span><span>$8,897.14</span></div>
            <div class="line total"><span>OAS recovery tax (15%), withheld July 2026 to June 2027</span><span>$1,334.57</span></div>
        </div>
        <p>Diane's dividend portfolio is about $300,000 at a 4% yield. If $100,000 of it sat in her TFSA instead (within the $102,000 of cumulative room CRA's published annual limits give someone who was 18 or older in 2009, through 2025), the remaining $8,000 of taxable dividends would gross up to $11,040, net income would be $96,831.14, and the clawback would fall to $506.57. OAS uses ESDC's published 2025 quarterly maximums; all other figures are illustrative.</p>
    </div>

    <h2 id="credit">Doesn't the dividend tax credit make up for it?</h2>

    <p>Partly, on the income tax side. The credit is applied after net income and taxable income are calculated, so it lowers the tax you owe but never lowers the number used for the clawback. On $10,000 of eligible dividends, the federal credit is about $2,073 (15.0198% of $13,800), plus a provincial credit. If all $13,800 sits above the threshold, the clawback on it is $2,070. In that zone, the federal credit is roughly cancelled out by the lost OAS.</p>

    <p>That is the core point of this page: in the clawback range, eligible dividends lose much of their usual tax advantage over interest. The precise answer depends on your province's rates and bracket. Our <a href="/blog/dividend-tax-credit-by-province-canada/">dividend tax credit by province</a> page has 2025 provincial rates to run your own numbers.</p>

    <div class="flowchart">
        <div class="flow-node decision">Is your net income (with grossed-up dividends) above $93,454 for 2025?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">No: the gross-up does not cost you OAS; the dividend credit works as usual</div>
            <div class="flow-node decision">Yes: is there unused TFSA room?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Yes: move dividend payers into the TFSA first (in kind triggers gains)</div>
            <div class="flow-node result">No: consider growth or capital-gains assets in the taxable account</div>
        </div>
    </div>

    <h2 id="fix">How can you reduce the clawback?</h2>

    <div class="step-section">
        <div class="step"><div class="step-number">1</div><div><div class="step-title">Use the TFSA for dividend payers</div><p>CRA's "What is a TFSA" page says income earned in a TFSA and withdrawals from it do not affect federal income-tested benefits and credits, naming OAS and GIS. Contribute each year, including after 71. Moving shares in kind counts as a sale at fair market value: gains are taxable, losses cannot be claimed.</p></div></div>
        <div class="step"><div class="step-number">2</div><div><div class="step-title">Rethink what sits in the taxable account</div><p>Investments that return more through capital gains and less through dividends add less to net income. A capital gain also lets you choose the year you realize it.</p></div></div>
        <div class="step"><div class="step-number">3</div><div><div class="step-title">Smooth RRSP and RRIF withdrawals</div><p>Drawing more from an RRSP before OAS starts, or before 71, can lower later RRIF minimums and net income. See the <a href="/blog/rrsp-meltdown-strategy/">RRSP meltdown strategy</a>.</p></div></div>
        <div class="step"><div class="step-number">4</div><div><div class="step-title">Split eligible pension income</div><p>Pension income splitting moves eligible pension income to a spouse. It does not move dividends, so it helps only if pension income is part of the problem.</p></div></div>
        <div class="step"><div class="step-number">5</div><div><div class="step-title">Time large capital gains</div><p>A large gain in one year can push net income over the line for that year only. Spreading sales over years, or using capital losses, can keep each year lower.</p></div></div>
        <div class="step"><div class="step-number">6</div><div><div class="step-title">Consider deferring OAS</div><p>If you are still working at 65 and above the threshold, deferring OAS can avoid paying it back. See <a href="/blog/oas-eligibility-deferral-canada/">OAS eligibility and deferral</a>.</p></div></div>
    </div>

    <div class="warning-box">
        <strong>Do not let the tail wag the dog</strong>
        <p>Losing 20.7 cents of OAS on a dollar of dividends is a cost, not a reason to sell good investments in a hurry. Selling a long-held stock can trigger a capital gain that pushes this year's net income higher still. Plan moves over several years.</p>
    </div>

    <h2 id="defer">Does deferring OAS help with the clawback?</h2>

    <p>Only partly. If you defer OAS past 65, there is no OAS to recover in the years you wait, so a high-income stretch in your late 60s, such as final years of work or a large RRSP withdrawal, does not cost you OAS. Deferral also raises the monthly amount you eventually receive. But once payments start, the same 15% recovery applies to net income above the threshold, and a larger pension means more is exposed. Deferral suits people whose income will fall later. It does not fix a dividend-heavy portfolio that keeps net income high for life. The trade-offs are in our <a href="/blog/oas-eligibility-deferral-canada/">OAS eligibility and deferral guide</a>.</p>

    <h2 id="provinces">Does your province matter?</h2>

    <p>The OAS clawback is federal, with the same threshold and 15% rate everywhere in Canada. Provinces matter for income tax: each sets its own dividend tax credit and brackets, so the after-tax value of a dividend in the clawback range varies. Quebec residents report dividends with the same 38% gross-up on the Revenu Québec return and claim Quebec's own dividend credit there. Some provincial benefits and credits for seniors use net income too, which can add to the effect of the gross-up.</p>

    <div class="table-wrapper">
        <table>
            <caption>Where each piece is set</caption>
            <thead>
                <tr><th>Item</th><th>Set by</th><th>Same everywhere?</th></tr>
            </thead>
            <tbody>
                <tr><td>OAS threshold and 15% recovery rate</td><td>Federal (Service Canada, CRA)</td><td>Yes</td></tr>
                <tr><td>Gross-up (38% eligible, 15% non-eligible)</td><td>Federal, used for net income</td><td>Yes</td></tr>
                <tr><td>Federal dividend tax credit</td><td>Federal</td><td>Yes</td></tr>
                <tr><td>Provincial dividend tax credit and brackets</td><td>Each province; Revenu Québec in Quebec</td><td>No</td></tr>
            </tbody>
        </table>
    </div>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Work out net income using grossed-up dividends, not cash received</li>
        <li>Compare with the published threshold for the income year: $90,997 (2024), $93,454 (2025)</li>
        <li>Use TFSA room for dividend payers first</li>
        <li>Plan RRIF withdrawals and large capital gains across several years</li>
        <li>File Form T1213(OAS) if a one-time spike caused excess withholding</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Do dividends count toward the OAS clawback?</h3>
    <p>Yes. Canadian dividends count at their grossed-up value: 138% for eligible dividends and 115% for non-eligible dividends.</p>

    <h3>What is the current OAS clawback threshold?</h3>
    <p>For 2025 income it is $93,454, per Service Canada and CRA, and it sets the recovery from July 2026 to June 2027. For 2024 income it was $90,997 (recovery July 2025 to June 2026).</p>

    <h3>Does the dividend tax credit reduce the clawback?</h3>
    <p>No. The credit reduces income tax, not net income. The clawback uses net income.</p>

    <h3>Do TFSA dividends affect OAS?</h3>
    <p>No. CRA says TFSA income and withdrawals do not affect federal income-tested benefits such as OAS and GIS.</p>

    <h3>Are capital gains better than dividends for the clawback?</h3>
    <p>Per dollar received, yes: with a 50% inclusion rate, $1 of capital gain adds 50 cents to net income, against $1.38 for eligible dividends. Investment choices should still be made on total return and risk.</p>

    <h3>Can I split dividends with my spouse to avoid the clawback?</h3>
    <p>Not through pension income splitting, which covers eligible pension income only. Dividends are taxed to the person who owns the shares, and attribution rules can apply to money given to a spouse to invest.</p>

    <h3>What if one year's income spike triggered the clawback?</h3>
    <p>The recovery tax is withheld from OAS from the following July based on that year. If your current year's income will be lower, you can ask CRA to reduce withholding with Form T1213(OAS).</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${OAS_REC}">Service Canada: Old Age Security pension recovery tax</a>, reviewed October 23, 2026</li>
        <li><a href="${OAS_PAY}">Service Canada: Old Age Security payment amounts, October to December 2026</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_23500}">CRA: Line 23500, social benefits repayment</a> ($93,454 threshold for 2025 returns), reviewed October 23, 2026</li>
        <li><a href="${ESDC_Q}">ESDC: CPP and OAS quarterly report, October to December 2025</a> (2025 repayment range and OAS maximums; with the January to March, April to June and July to September 2025 reports), reviewed October 23, 2026</li>
        <li><a href="${CRA_DTC}">CRA: Line 40425, federal dividend tax credit</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_TFSA}">CRA: What is a TFSA (TFSA impact on government benefits and credits)</a>, reviewed October 23, 2026</li>
        <li><a href="${CRA_TFSA_LIMITS}">CRA: TFSA dollar limits by year</a> (2009 to 2025 limits sum to $102,000), reviewed October 23, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/capital-losses-deductions.html">CRA: Capital losses (2025 inclusion rate 50%)</a>, reviewed October 23, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/oas-gis-clawback-canada/">OAS and GIS clawback in Canada</a></li>
        <li><a href="/blog/dividend-tax-credit-by-province-canada/">Dividend tax credit by province</a></li>
        <li><a href="/blog/dividend-investing-canada/">Dividend investing in Canada</a></li>
        <li><a href="/blog/dividend-growth-vs-high-yield-canada/">Dividend growth vs high yield</a></li>
        <li><a href="/blog/rrsp-meltdown-strategy/">RRSP meltdown strategy</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The clawback is calculated on your return.</strong></p>
        <p>The 2026 tax guide walks through net income, the dividend gross-up and the social benefits repayment line by line.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about Old Age Security and dividend income as of October 23, 2026. It is not tax or investment advice. Thresholds and OAS amounts change each year; this page uses the published thresholds for the 2025 income year. Households and dollar amounts are illustrations. Confirm your own figures with CRA or a tax professional.")}

</div>`
);
