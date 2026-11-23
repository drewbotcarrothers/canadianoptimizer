import { batchFooter, batchPost } from './types';

const D = '2026-11-23';
const RR = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/contributing-a-rrsp-prpp';
const LIMIT = `${RR}/contributions-affect-your-rrsp-prpp-deduction-limit.html`;
const UNUSED = `${RR}/what-unused-rrsp-prpp-contributions.html`;
const EXCESS = `${RR}/what-happens-you-over-your-rrsp-prpp-deduction-limit.html`;
const T4040 = 'https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4040/rrsps-other-registered-plans-retirement.html';
const LIMITS = 'https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html';
const DATES = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/important-dates-individuals.html';
const HUB = '/category/taxes/registered-accounts-tax/';

const disclaimer = `General education, not tax advice. Deadlines, limits and reporting rules come from the Canada Revenue Agency's RRSP pages and Guide T4040 for the 2026 tax year, all read on November 23, 2026. Dev and Anika are labelled illustrations, and the over-contribution figures are our own arithmetic from the CRA's 1% rule. Your own deduction limit is on your latest notice of assessment or in your CRA account.`;

const content = `<div class="container">

    <div class="hook">
        Every winter the RRSP deadline gets called the last day to "use" a year. <span class="highlight">The rules are more flexible than that, and stricter in one place most people miss: the paperwork for the first 60 days.</span> This guide, part of our <a href="${HUB}">TFSA, RRSP and FHSA tax rules hub</a>, explains the deadline for the 2026 tax year and what a January or February contribution can and cannot do.
    </div>

    <p>The RRSP contribution deadline for the 2026 tax year is March 1, 2027, according to the CRA's Guide T4040. A contribution made from January 1 to March 1, 2027 can be deducted on your 2026 return, or saved for a later year, but it must be reported on Schedule 7 if you do not deduct it all.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Deadline for the 2026 tax year: <strong>March 1, 2027</strong>, the 60th day of 2027.</li>
            <li>The deadline is about deducting, not about room expiring. Unused room carries forward indefinitely.</li>
            <li>A first-60-days contribution can go on your 2026 return or a later one. You choose.</li>
            <li>Not deducting everything you put in from March 3, 2026 to March 1, 2027? File Schedule 7, or the CRA may reduce or disallow the deduction later.</li>
            <li>The year you turn 71 has no first 60 days for your own RRSP: the last day is December 31.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#deadline">The 2026 deadline</a></li>
            <li><a href="#choices">Three ways to use a January or February contribution</a></li>
            <li><a href="#schedule7">The Schedule 7 rule</a></li>
            <li><a href="#limit">How much you can put in</a></li>
            <li><a href="#71">The age-71 exception</a></li>
            <li><a href="#other">HBP, LLP, transfers and estates</a></li>
            <li><a href="#over">If you put in too much</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="deadline">What is the RRSP deadline for the 2026 tax year?</h2>
    <p>March 1, 2027. Guide <a href="${T4040}">T4040</a> states it directly, and the CRA's <a href="${LIMIT}">RRSP deduction limit page</a> says contributions made up to March 1, 2027 qualify for a deduction on the 2026 return. It is the 60th day of 2027: 31 days of January plus 28 of February is 59, so day 60 is March 1.</p>
    <div class="table-wrapper">
        <table>
            <caption>The RRSP calendar around the 2026 tax year (CRA Guide T4040 and RRSP pages, read November 23, 2026)</caption>
            <thead><tr><th>Date or window</th><th>What it is</th></tr></thead>
            <tbody>
                <tr><td>March 4, 2025 to March 2, 2026</td><td>The Schedule 7 reporting window for the 2025 return</td></tr>
                <tr><td>March 3, 2026 to March 1, 2027</td><td>The Schedule 7 reporting window for the 2026 return</td></tr>
                <tr><td>January 1, 2026 to March 1, 2027</td><td>Contributions to your own RRSP you can designate as 2026 HBP or LLP repayments</td></tr>
                <tr class="highlight-row"><td>March 1, 2027</td><td>Last day to contribute for a 2026 deduction</td></tr>
                <tr><td>March 31, 2027</td><td>Due date for a T1-OVP return on 2026 excess contributions (90 days after year-end)</td></tr>
            </tbody>
        </table>
    </div>
    <p class="did-you-know" data-info-gain><strong>What this page adds:</strong> one dated calendar for the 2026 tax year that lines up the March 1, 2027 deadline with the two Schedule 7 reporting windows (March 4, 2025 to March 2, 2026, and March 3, 2026 to March 1, 2027), the HBP and LLP repayment window and the March 31, 2027 T1-OVP date, plus a decision table for the three ways to use a first-60-days contribution.</p>
    <p>Notice that the windows do not run calendar year to calendar year. Each one starts the day after the previous deadline, which is why a contribution made in February belongs to one return's window and one made in March to the next.</p>

    <h2 id="choices">What can a January or February contribution do?</h2>
    <p>It can be deducted on the previous year's return, on the current year's, or split. The T4040 says you do not have to claim all your deductible contributions in the year you make them, and contributions you do not claim may be carried forward to years when you may be in a higher tax bracket.</p>
    <div class="table-wrapper">
        <table>
            <caption>Three ways to use an RRSP contribution made January 1 to March 1, 2027</caption>
            <thead><tr><th>Choice</th><th>When it fits</th><th>Paperwork</th></tr></thead>
            <tbody>
                <tr class="highlight-row"><td>Deduct it all on the 2026 return</td><td>Your 2026 income is your highest for a while, and the amount fits your 2026 deduction limit</td><td>Report it on Schedule 7 and claim it on line 20800</td></tr>
                <tr><td>Deduct part on 2026, carry the rest</td><td>Part of 2026 income is in a high bracket and part is not, or the full amount is more than the limit</td><td>Schedule 7 shows the full amount and the part deducted</td></tr>
                <tr><td>Deduct none on 2026</td><td>You expect a higher-income year soon, for example a return to full-time work</td><td>Schedule 7 still lists it as a contribution you are not deducting</td></tr>
            </tbody>
        </table>
    </div>
    <div class="example-box">
        <div class="example-title">Illustration: Dev splits a February contribution</div>
        <p>Dev (a labelled example) contributes $10,000 on February 12, 2027. His 2026 deduction limit has room for it, but he was on parental leave for part of 2026 and expects a much higher income in 2027. He reports the full $10,000 on Schedule 7 for 2026, deducts $4,000 there and carries $6,000 to his 2027 return. The money is invested from February either way; only the timing of the deduction changes.</p>
    </div>
    <p>What the money cannot do is be deducted twice, or be deducted beyond your deduction limit. And because room carries forward indefinitely, missing March 1 does not lose room: you simply deduct the contribution on the next year's return.</p>

    <h2 id="schedule7">Why does Schedule 7 matter for the first 60 days?</h2>
    <p>Because the CRA uses it to track contributions you have not yet deducted. The CRA's <a href="${UNUSED}">unused contributions page</a> and the T4040 say to list on Schedule 7 every contribution made from March 3, 2026 to March 1, 2027 that you are not deducting on your 2026 return. Otherwise the CRA may reduce or disallow your claim for them on a future return.</p>
    <ul>
        <li><strong>Filing on paper:</strong> attach Schedule 7 to your 2026 return.</li>
        <li><strong>Filing electronically:</strong> keep Schedule 7 in case the CRA asks for it.</li>
        <li><strong>Already filed and forgot?</strong> Send Schedule 7 with Form T1-ADJ to your tax centre, with copies of your receipts showing your name and SIN.</li>
        <li><strong>Missed the 2025 Schedule 7</strong> for contributions made March 4, 2025 to March 2, 2026? The T4040 says to send a completed 2025 Schedule 7 with your receipts, separate from your 2026 return.</li>
    </ul>
    <p>Your unused, already-reported contributions appear on your notice of assessment under "Unused RRSP contributions previously reported and available to deduct".</p>

    <h2 id="limit">How much can you contribute by March 1, 2027?</h2>
    <p>Up to your 2026 RRSP deduction limit, printed on your latest notice of assessment, plus a $2,000 cushion that only limits the penalty, not the deduction. The CRA's formula is unused room from earlier years plus the lesser of 18% of your previous year's earned income and the annual limit, minus your pension adjustment, with a few further adjustments.</p>
    <div class="table-wrapper">
        <table>
            <caption>Annual RRSP dollar limits (CRA limits table, read November 23, 2026)</caption>
            <thead><tr><th>Year</th><th>RRSP dollar limit</th><th>Based on earned income of</th></tr></thead>
            <tbody>
                <tr class="highlight-row"><td>2026</td><td>$33,810</td><td>2025</td></tr>
                <tr><td>2027</td><td>$35,390</td><td>2026</td></tr>
            </tbody>
        </table>
    </div>
    <p>A contribution in January or February 2027 can use 2026 room on the 2026 return, or 2027 room on the 2027 return. Our <a href="/blog/rrsp-deduction-limit-explained/">RRSP deduction limit guide</a> walks through the formula, and <a href="/blog/contribution-limits/">contribution limits</a> lists every registered account's limits.</p>

    <h2 id="71">What changes the year you turn 71?</h2>
    <p>There is no first-60-days grace for your own RRSP. The T4040 says the year you turn 71 is the last year you can contribute to your RRSP, and an RRSP must mature by the end of that year. So if you turn 71 in 2026, your last contribution to your own plan is December 31, 2026, not March 1, 2027.</p>
    <p>Two ways around it, both from the same guide: you can contribute to a spousal or common-law partner's RRSP until the end of the year they turn 71, and you can still deduct earlier unused contributions up to your deduction limit. Our <a href="/blog/rrsp-to-rrif-conversion/">RRSP to RRIF conversion guide</a> covers the maturity choices.</p>
    <div class="example-box">
        <div class="example-title">Illustration: Anika turns 71 in 2026</div>
        <p>Anika (a labelled example) turns 71 in June 2026 and her husband is 66. She must contribute to her own RRSP by December 31, 2026. In February 2027 she can still contribute to his spousal RRSP, using her own deduction limit, and deduct it on her 2026 return.</p>
    </div>

    <h2 id="other">Which other deadlines sit inside the first 60 days?</h2>
    <p>Repayments and transfers use the same March 1, 2027 date, with their own rules from the T4040.</p>
    <ul>
        <li><strong>Home Buyers' Plan and Lifelong Learning Plan:</strong> to make a 2026 repayment, designate contributions to your own RRSP made January 1, 2026 to March 1, 2027 on Schedule 7. Contributions to a spouse's RRSP cannot be designated. Repayments are not deductible RRSP contributions.</li>
        <li><strong>Transfers of certain income:</strong> some amounts reported on lines 11500, 12900 or 13000 of your 2026 return can be transferred to your RRSP on or before March 1, 2027 and deducted on top of your limit.</li>
        <li><strong>After a death:</strong> no one can contribute to a deceased person's RRSP, but the legal representative can contribute to the surviving spouse's RRSP in the year of death or the first 60 days after the end of that year, and claim it on the deceased's final return up to their limit.</li>
    </ul>

    <h2 id="over">What if you contribute too much in the rush?</h2>
    <p>You pay 1% a month on the part above your deduction limit plus $2,000. The CRA's <a href="${EXCESS}">excess contributions page</a> says you file a T1-OVP and pay within 90 days of the end of the year, and the $2,000 cushion only applies if you were 18 or older in the year.</p>
    <div class="example-calculation">
        <div class="line"><span>Deduction limit (illustration)</span><span>$10,000</span></div>
        <div class="line"><span>Contributed by mistake (illustration)</span><span>$15,000</span></div>
        <div class="line"><span>Over the limit</span><span>$5,000</span></div>
        <div class="line"><span>Over the limit plus the $2,000 cushion (taxable excess)</span><span>$3,000</span></div>
        <div class="line total"><span>Tax at 1% a month</span><span>$30 a month</span></div>
    </div>
    <p>Left for 6 months, that is $180 (our arithmetic). The CRA notes you may not owe the tax on excess you withdraw before the end of the month it was made, and you can ask for a waiver with Form RC2503 if the excess came from a reasonable error and you are fixing it. If you do not file the T1-OVP on time, a late-filing penalty of 5% of the balance plus 1% a month applies. The <a href="${DATES}">CRA's important dates page</a> puts the T1-OVP due date at March 31.</p>
    <p>For the same mistake inside a TFSA, see <a href="/blog/tfsa-overcontribution-penalty/">the TFSA over-contribution penalty</a>.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>What is the last day to contribute to an RRSP for 2026?</h3>
    <p>March 1, 2027, according to the CRA's Guide T4040.</p>
    <h3>Do I have to deduct a February contribution on last year's return?</h3>
    <p>No. You can deduct it for the 2026 tax year, a later year, or split it, as long as you report it on Schedule 7 when you do not deduct it all.</p>
    <h3>Do I lose RRSP room if I miss the deadline?</h3>
    <p>No. Unused RRSP deduction room accumulated after 1990 carries forward indefinitely. You deduct the late contribution on the next year's return.</p>
    <h3>Is the RRSP deadline the same as the tax filing deadline?</h3>
    <p>No. The contribution deadline is March 1, 2027; the T1-OVP for excess contributions is due March 31. Your regular return has its own due date.</p>
    <h3>Can I contribute to a spousal RRSP after I turn 71?</h3>
    <p>Yes, until the end of the year your spouse or common-law partner turns 71, using your own deduction limit.</p>
    <h3>Where do I find my 2026 RRSP deduction limit?</h3>
    <p>On the RRSP Deduction Limit Statement on your latest notice of assessment, on Form T1028 if the CRA sent one, or in your CRA account.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${T4040}">CRA: Guide T4040, RRSPs and Other Registered Plans for Retirement (2026)</a>, reviewed November 23, 2026</li>
        <li><a href="${LIMIT}">CRA: How contributions affect your RRSP deduction limit</a>, reviewed November 23, 2026</li>
        <li><a href="${UNUSED}">CRA: What to do with unused RRSP, PRPP or SPP contributions</a>, reviewed November 23, 2026</li>
        <li><a href="${EXCESS}">CRA: What happens if you go over your RRSP deduction limit</a>, reviewed November 23, 2026</li>
        <li><a href="${LIMITS}">CRA: MP, DB, RRSP, DPSP, ALDA, TFSA limits, YMPE and the YAMPE</a>, reviewed November 23, 2026</li>
        <li><a href="${DATES}">CRA: Important dates for RRSPs, HBP, LLP, FHSAs and more</a>, reviewed November 23, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/rrsp-deduction-limit-explained/">RRSP deduction limit explained</a></li>
        <li><a href="/blog/rrsp-playbook/">The RRSP playbook</a></li>
        <li><a href="/blog/spousal-rrsp-canada/">Spousal RRSPs</a></li>
        <li><a href="/blog/rrsp-or-tfsa-by-income/">RRSP or TFSA at every income</a></li>
        <li><a href="/blog/cra-deadlines/">CRA deadlines for the year</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The RRSP deduction is one line. The return has a few hundred more.</strong></p>
        <p>The Canadian Optimizer Tax Guide walks through the T1 line by line, including RRSP deductions, Schedule 7 and the credits people miss.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">See the Tax Guide</a>
    </div>

    ${batchFooter(D, 'Taxes', disclaimer)}

</div>`;

export const rrspDeadlineFirst60DaysPost = batchPost({
  date: D,
  category: 'Taxes',
  categorySlug: 'taxes',
  subcategory: 'registered-accounts-tax',
  slug: 'rrsp-deadline-first-60-days',
  title: 'RRSP Deadline for the 2026 Tax Year: How the First 60 Days Work',
  excerpt:
    'The RRSP deadline for the 2026 tax year is March 1, 2027. What a January or February contribution can do, the Schedule 7 rule, the age-71 exception and the cost of over-contributing.',
  content,
});
