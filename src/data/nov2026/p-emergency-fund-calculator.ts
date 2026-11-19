import { batchFooter, batchPost } from './types';

const D = '2026-11-20';

const disclaimer = `General education, not financial advice. EI rules and amounts come from the Government of Canada pages listed under Sources, read on November 19, 2026; the EI estimate in the calculator is an approximation, and only Service Canada can tell you your benefit rate and number of weeks. The three households, their spending and earnings, the 15% tax on EI and the 14-week benefit period are our own illustrations. Canadian Optimizer has no live affiliate relationship with any bank or savings account at the time of writing.`;

const content = `<div class="container">

    <div class="hook">
        "Three to six months of expenses" is the rule everyone repeats, and almost nobody says what it means for a Canadian who would get Employment Insurance. <span class="highlight">EI can cover a large share of a layoff, but its first payment takes about four weeks, and that gap is the part your cash has to cover.</span> This calculator, part of our <a href="/category/budgeting-saving/saving-goals/">saving goals and emergency funds hub</a>, builds EI into the number.
    </div>

    <p>A Canadian emergency fund should cover your essential spending for the months you might be without pay, minus what EI and any other income would pay in that time, and never less than about four weeks of the shortfall, because EI's first payment arrives about 28 days after you apply. Enter your numbers below.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>EI regular benefits pay up to 55% of average insurable weekly earnings, to a maximum of $729 a week in 2026.</li>
            <li>The usual one-week waiting period is waived for new claims that start between March 30, 2025 and October 9, 2027.</li>
            <li>Service Canada aims to pay the first EI payment about 28 days after you apply, so the first month is always yours to fund.</li>
            <li>In our examples, counting EI cuts a six-month fund by 36% for a single renter and 66% for a one-layoff couple; a self-employed person gets no regular EI and needs the full amount.</li>
        </ul>
    </div>

    <div id="emergency-fund-calculator"></div>

    <nav aria-label="On this page">
        <strong>On this page</strong>
        <ul>
            <li><a href="#how">How we calculated the target</a></li>
            <li><a href="#examples">What the calculator says for three households</a></li>
            <li><a href="#ei">How much would EI pay you?</a></li>
            <li><a href="#timing">When does the first EI payment arrive?</a></li>
            <li><a href="#no-ei">Who should leave EI out?</a></li>
            <li><a href="#where">Where should the fund sit?</a></li>
        </ul>
    </nav>

    <h2 id="how">How we calculated the target</h2>
    <p>The calculator starts with your essential spending: rent or mortgage, groceries, utilities, transport, insurance and minimum debt payments. It multiplies that by the number of months you want to cover, then subtracts three things: income that keeps arriving (for example a partner's take-home pay), the EI you would receive after tax, and any severance you are sure to get.</p>
    <p>For EI, it takes 55% of your average weekly insurable earnings, working from your yearly earnings spread evenly over the year, capped at $729 a week, the 2026 maximum on the <a href="https://www.canada.ca/en/services/benefits/ei/ei-regular-benefit/benefit-amount.html">EI benefit amount page</a>. Service Canada actually uses your best weeks of earnings, so this is an approximation. It pays EI for the weeks in your chosen period, up to the number of benefit weeks you enter, starting at 14 weeks, the shortest entitlement in Service Canada's table. It leaves out the one-week waiting period while the temporary waiver applies, and you can switch it back on for a claim that would start after October 9, 2027. The EI amount is reduced by the share you expect to lose to tax, because <a href="https://www.canada.ca/en/services/benefits/ei/ei-regular-benefit/benefit-amount.html">tax is deducted from EI payments</a>.</p>
    <p>Finally, it sets a floor: four weeks of your monthly shortfall, which is what you need in cash before the first EI payment arrives. The target is the larger of the gap and that floor. Nobody paid for this tool, it has no affiliate links, and our method is on <a href="/how-we-use-ai/">how we use AI</a>.</p>

    <h2 id="examples">What the calculator says for three households</h2>
    <p class="did-you-know" data-info-gain>We ran the calculator for three example households at three and six months: with EI counted, a single renter needs $12,277 for six months instead of $19,200, a couple with one layoff needs $4,525 instead of $13,200, and a self-employed person with no regular EI needs the full $24,000.</p>
    <p>The households are illustrations. The single renter spends $3,200 a month on essentials and earned $55,000. The couple spends $6,000 a month; one partner earning $95,000 is laid off, and the other's take-home pay of $3,800 a month continues. The self-employed person spends $4,000 a month. EI is counted for 14 weeks, with an example 15% lost to tax.</p>

    <div class="table-wrapper">
        <table>
            <caption>Emergency fund targets for three example households (our calculation, EI rules from Canada.ca reviewed November 19, 2026)</caption>
            <thead>
                <tr><th>Household</th><th>3 months, no EI</th><th>3 months, with EI</th><th>6 months, no EI</th><th>6 months, with EI</th></tr>
            </thead>
            <tbody>
                <tr><td>Single renter</td><td>$9,600</td><td>$3,172</td><td>$19,200</td><td>$12,277</td></tr>
                <tr><td>Couple, one layoff</td><td>$6,600</td><td>$2,031</td><td>$13,200</td><td>$4,525</td></tr>
                <tr><td>Self-employed, no regular EI</td><td>$12,000</td><td>$12,000</td><td>$24,000</td><td>$24,000</td></tr>
            </tbody>
        </table>
    </div>
    <p>Three things stand out. The single renter's EI is about $581.73 a week, which pays $6,923 after tax over 14 weeks and covers a little over a third of six months of spending. The couple's laid-off partner hits the $729 cap, so earning more than the maximum insurable earnings of $68,900 doesn't raise the benefit, and their three-month target is set by the four-week floor ($2,031), not by the gap. And the self-employed person's number doesn't move at all, because EI regular benefits don't cover self-employment income.</p>
    <p>The six-month figures assume EI stops after 14 weeks. If your region and hours give you more weeks, enter them; the target falls further. If you are a long-tenured worker, the temporary measures can add up to 20 weeks, to a maximum of 65.</p>

    <h2 id="ei">How much would EI pay you?</h2>
    <p>For most people, EI regular benefits pay 55% of average insurable weekly earnings, up to a maximum. As of January 1, 2026, the maximum yearly insurable earnings are $68,900, so the most anyone receives is $729 a week. You can get 14 to 45 weeks, depending on your region's unemployment rate and your insurable hours.</p>
    <p>All of that is on the <a href="https://www.canada.ca/en/services/benefits/ei/ei-regular-benefit/benefit-amount.html">EI benefit amount page</a>, which also says Service Canada can't tell you the exact amount before it processes your claim. To qualify, the <a href="https://www.canada.ca/en/services/benefits/ei/ei-regular-benefit/eligibility.html">eligibility page</a> says you must have lost your job through no fault of your own, been without work and pay for at least 7 consecutive days, worked enough insurable hours in the last 52 weeks, and be ready and able to work and looking for a job. Our <a href="/blog/employment-insurance-benefits-canada/">guide to EI benefits</a> covers the hours rules and how a claim works.</p>

    <h2 id="timing">When does the first EI payment arrive?</h2>
    <p>Service Canada's standard is a decision within 28 days of your application, met 80% of the time, and you'll receive your first payment about 28 days after you apply if you're eligible and have sent everything needed. That is the <a href="https://www.canada.ca/en/services/benefits/ei/ei-regular-benefit/after-applying.html">after you apply page</a>, and it is why the calculator never sets a target below four weeks of your shortfall.</p>
    <p>Two temporary rules help right now. The <a href="https://www.canada.ca/en/services/benefits/ei/temporary-measures-for-major-economic-conditions.html">temporary EI measures page</a> says the one-week waiting period is waived for new claims that start between March 30, 2025 and October 9, 2027, and that severance, vacation pay and pay in lieu of notice are not deducted from benefits for claims or allocations that start in that window. Normally that money would delay or reduce EI, so a severance cheque now adds to your cushion instead of replacing EI. Apply right away: the <a href="https://www.canada.ca/en/services/benefits/ei/ei-regular-benefit/apply.html">application page</a> warns that applying more than 4 weeks after your last day of work may lose you benefits.</p>
    <p>Severance is still taxable income. Our guides to <a href="/blog/severance-pay-tax-canada/">severance pay tax</a> and <a href="/blog/how-to-negotiate-severance-canada/">negotiating severance</a> show how to keep more of it.</p>

    <h2 id="no-ei">Who should leave EI out?</h2>
    <p>Leave EI out if you are self-employed, if you would leave your job rather than be laid off, or if you are not sure you have enough insurable hours. In each case, assume your fund has to cover the full period alone.</p>
    <ul>
        <li><strong>Self-employed people.</strong> The <a href="https://www.canada.ca/en/services/benefits/ei/ei-self-employed-workers.html">EI program for self-employed people</a> offers six types of special benefits, such as maternity, parental and sickness benefits, but not regular benefits for lost work. Our <a href="/blog/ei-self-employed-canada/">EI for the self-employed guide</a> explains the opt-in.</li>
        <li><strong>People who might quit.</strong> Leaving without just cause usually means no regular benefits, so an emergency fund meant to let you walk away from a bad job should ignore EI.</li>
        <li><strong>New workers and seasonal workers.</strong> If you aren't sure you have the hours, run the calculator with EI off and treat EI as a bonus.</li>
    </ul>

    <h2 id="where">Where should the fund sit?</h2>
    <p>Keep at least the four-week floor in a high-interest savings account you can reach the same day, and the rest somewhere safe that you can reach within a few days. Our <a href="/blog/emergency-fund-heloc-investments-canada/">emergency fund guide</a> compares cash, a HELOC and investments as backstops, and our <a href="/blog/best-high-interest-savings-accounts-canada/">high-interest savings account comparison</a> lists current rates from the banks' own pages.</p>
    <p>Recalculate when something big changes: a raise past the insurable earnings cap, a new mortgage payment, a partner changing jobs, or the end of the temporary EI measures in October 2027. For the bigger picture of how much to save each month, our <a href="/blog/saving-rate-targets-canada/">saving-rate targets guide</a> sets a target by income.</p>

    <div class="callout warning">
        <strong>Common mistakes</strong>
        <ul>
            <li><strong>Counting total spending instead of essentials.</strong> In a layoff you cut travel and restaurants first; the fund only has to carry what you can't cut.</li>
            <li><strong>Assuming EI replaces 55% of a high salary.</strong> Above $68,900 of insurable earnings, the benefit is capped at $729 a week.</li>
            <li><strong>Waiting to apply.</strong> Apply as soon as you stop working; a late application can cost benefits.</li>
            <li><strong>Forgetting tax.</strong> EI is taxable, so plan on less than the gross weekly amount.</li>
        </ul>
    </div>

    <h2>Frequently asked questions</h2>
    <h3>How much should my emergency fund be in Canada?</h3>
    <p>Enough to cover your essential spending for the months you might go without pay, minus what EI and other income would pay. In our examples that is between $2,031 and $24,000, depending on the household and whether EI applies.</p>
    <h3>Does EI count toward an emergency fund?</h3>
    <p>It can reduce how much you need if you would qualify, but not for the first month. Service Canada's first payment arrives about 28 days after you apply, so keep at least four weeks of your shortfall in cash.</p>
    <h3>Is there still a one-week EI waiting period?</h3>
    <p>Not for new claims that start between March 30, 2025 and October 9, 2027, under the temporary EI measures. The usual rule, outside that window, is one unpaid week before benefits start.</p>
    <h3>What is the maximum EI payment in 2026?</h3>
    <p>$729 a week, based on maximum yearly insurable earnings of $68,900 and the 55% basic rate.</p>
    <h3>Does severance reduce EI right now?</h3>
    <p>Not for claims or allocations starting between March 30, 2025 and October 9, 2027. Under the temporary measures, separation earnings such as severance and pay in lieu of notice are not deducted from benefits.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/services/benefits/ei/ei-regular-benefit/benefit-amount.html">Government of Canada: EI regular benefits, how much you could receive</a>, reviewed November 19, 2026</li>
        <li><a href="https://www.canada.ca/en/services/benefits/ei/ei-regular-benefit/after-applying.html">Government of Canada: EI regular benefits, after you apply</a>, reviewed November 19, 2026</li>
        <li><a href="https://www.canada.ca/en/services/benefits/ei/ei-regular-benefit/eligibility.html">Government of Canada: EI regular benefits, do you qualify</a>, reviewed November 19, 2026</li>
        <li><a href="https://www.canada.ca/en/services/benefits/ei/ei-regular-benefit/apply.html">Government of Canada: EI regular benefits, apply</a>, reviewed November 19, 2026</li>
        <li><a href="https://www.canada.ca/en/services/benefits/ei/temporary-measures-for-major-economic-conditions.html">Government of Canada: Temporary EI measures to respond to major changes in economic conditions</a>, reviewed November 19, 2026</li>
        <li><a href="https://www.canada.ca/en/services/benefits/ei/ei-self-employed-workers.html">Government of Canada: EI benefits for self-employed people</a>, reviewed November 19, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/emergency-fund-heloc-investments-canada/">Emergency fund, HELOC and investments</a></li>
        <li><a href="/blog/employment-insurance-benefits-canada/">Employment Insurance benefits in Canada</a></li>
        <li><a href="/blog/saving-rate-targets-canada/">Saving-rate targets</a></li>
        <li><a href="/blog/canadian-cash-management-guide/">Canadian cash management guide</a></li>
        <li><a href="/blog/severance-pay-tax-canada/">Severance pay tax</a></li>
    </ul>

    ${batchFooter(D, 'Budgeting & Saving', disclaimer)}

</div>`;

export const emergencyFundCalculatorPost = batchPost({
  date: D,
  category: 'Budgeting & Saving',
  categorySlug: 'budgeting-saving',
  subcategory: 'saving-goals',
  slug: 'emergency-fund-calculator-canada',
  title: "Emergency Fund Calculator for Canadians, With EI Built In",
  excerpt:
    "Work out how much emergency fund you need, counting Employment Insurance, the 28-day wait for the first payment, and the temporary EI measures to October 2027.",
  content,
});
