import { batchFooter, batchPost } from './types';

const D = '2026-11-23';
const RR = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/contributing-a-rrsp-prpp';
const LIMIT = `${RR}/contributions-affect-your-rrsp-prpp-deduction-limit.html`;
const WHERE = `${RR}/where-you-find-your-rrsp-prpp-deduction-limit.html`;
const UNUSED = `${RR}/what-unused-rrsp-prpp-contributions.html`;
const EXCESS = `${RR}/what-happens-you-over-your-rrsp-prpp-deduction-limit.html`;
const CLAIM = `${RR}/claim-your-rrsp-prpp-contributions-on-your-tax-return.html`;
const T4040 = 'https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4040/rrsps-other-registered-plans-retirement.html';
const LIMITS = 'https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html';
const HUB = '/category/taxes/registered-accounts-tax/';

const disclaimer = `General education, not tax advice. The formula, limits and slip boxes come from the Canada Revenue Agency's RRSP pages, the CRA limits table and Guide T4040 (Chart 3) for the 2026 tax year, all read on November 23, 2026. The room table and Priya's numbers are our own arithmetic, using illustration incomes and a labelled example pension adjustment. The CRA's figure on your notice of assessment or Form T1028 is the one that counts.`;

const content = `<div class="container">

    <div class="hook">
        Your RRSP deduction limit is a single line on your notice of assessment, built from four or five numbers you never see together. <span class="highlight">Once you can rebuild it, you can tell whether the CRA's figure is right and how much room next year will bring.</span> This guide, part of our <a href="${HUB}">TFSA, RRSP and FHSA tax rules hub</a>, rebuilds it step by step for the 2026 and 2027 tax years.
    </div>

    <p>Your RRSP deduction limit is unused room carried forward, plus the lesser of 18% of last year's earned income and the annual dollar limit, minus your pension adjustment, plus any pension adjustment reversal, minus any net past service adjustment. The CRA sets the 2026 dollar limit at $33,810 and the 2027 limit at $35,390.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>New room each year is 18% of the previous year's earned income, capped at the dollar limit, less your pension adjustment.</li>
            <li>The cap starts to bind at $187,833.33 of 2025 earned income for 2026, and $196,611.11 of 2026 earned income for 2027.</li>
            <li>Unused room carries forward indefinitely, so the limit on your notice can be far above one year's new room.</li>
            <li>Your figure is on the notice of assessment, Form T1028 or your CRA account. Use that, not your own estimate, when you contribute.</li>
            <li>Going more than $2,000 over the limit costs 1% a month on the excess.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#formula">The formula</a></li>
            <li><a href="#find">Where to find your limit</a></li>
            <li><a href="#earned">Earned income</a></li>
            <li><a href="#room">New room at six incomes</a></li>
            <li><a href="#pension">Pension adjustments</a></li>
            <li><a href="#example">Worked example</a></li>
            <li><a href="#limit-vs">Limit vs contributions</a></li>
            <li><a href="#over">Going over</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="formula">How does the CRA calculate your RRSP deduction limit?</h2>
    <p>With a six-step formula, laid out on the CRA's <a href="${LIMIT}">deduction limit page</a> and in Chart 3 of <a href="${T4040}">Guide T4040</a>. For the 2026 limit, the steps are:</p>
    <div class="step-section">
        <div class="step"><span class="step-number">1</span><span class="step-title">Unused room at the end of 2025.</span> Room from earlier years that you have not deducted.</div>
        <div class="step"><span class="step-number">2</span><span class="step-title">2025 earned income.</span> Mainly employment and self-employment earnings, net of certain expenses and losses.</div>
        <div class="step"><span class="step-number">3</span><span class="step-title">18% of it, or $33,810, whichever is less.</span> This is the gross new room for 2026.</div>
        <div class="step"><span class="step-number">4</span><span class="step-title">Minus your 2025 pension adjustment (PA).</span> From box 52 of your T4 slips and box 034 of your T4A slips. If the result is negative, it is zero.</div>
        <div class="step"><span class="step-number">5</span><span class="step-title">Plus any 2026 pension adjustment reversal (PAR).</span> From box 2 of a T10 slip.</div>
        <div class="step"><span class="step-number">6</span><span class="step-title">Minus your 2026 net past service pension adjustment (PSPA).</span> From T215 slips and Form T1004.</div>
    </div>
    <p>Add step 1 to the result of steps 3 to 6 and you have the 2026 RRSP deduction limit. The same steps, one year later and with the $35,390 dollar limit, give the 2027 limit.</p>

    <h2 id="find">Where do you find your RRSP deduction limit?</h2>
    <p>In three places, according to the CRA's <a href="${WHERE}">where to find it page</a>:</p>
    <ul>
        <li><strong>Your latest notice of assessment or reassessment,</strong> in the RRSP Deduction Limit Statement.</li>
        <li><strong>Form T1028, Your RRSP Information for 2026,</strong> which the CRA may send if your limit changed since your last notice, if the statement was missing from it, or if you are in the Home Buyers' Plan.</li>
        <li><strong>Your CRA account</strong> online, or the CRA's automated phone service.</li>
    </ul>
    <p>The statement also shows "Unused RRSP contributions previously reported and available to deduct": money already in the plan that you reported on Schedule 7 but did not deduct. That amount uses up part of the limit.</p>

    <h2 id="earned">What counts as earned income for RRSP room?</h2>
    <p>Not everything you report. The T4040 glossary says the CRA adds your employment earnings, self-employment earnings and certain other types of income, then subtracts specific employment expenses and business or rental losses. Chart 3 adds employment income (lines 10100 and 10400), net income from a business you run, net rental income (line 12600), CPP or QPP disability payments, taxable support payments received and a few other items. It then subtracts union and professional dues (line 21200), employment expenses (line 22900), business and rental losses, and deductible support payments.</p>
    <p>Two practical results: interest, dividends and capital gains are not on the list, so a retiree living on investment income builds no new room; and a year with a rental or business loss can shrink next year's room even if your salary did not change.</p>

    <h2 id="room">How much new RRSP room will you get for 2027?</h2>
    <p>18% of your 2026 earned income, up to $35,390, minus any pension adjustment. With no pension plan at work, the table shows what that gives.</p>
    <div class="table-wrapper">
        <table>
            <caption>New 2027 RRSP room by 2026 earned income, no pension adjustment (our arithmetic from the CRA formula and the $35,390 limit)</caption>
            <thead><tr><th>2026 earned income</th><th>18% of earned income</th><th>New 2027 room</th></tr></thead>
            <tbody>
                <tr><td>$40,000</td><td>$7,200</td><td>$7,200</td></tr>
                <tr><td>$60,000</td><td>$10,800</td><td>$10,800</td></tr>
                <tr><td>$80,000</td><td>$14,400</td><td>$14,400</td></tr>
                <tr><td>$100,000</td><td>$18,000</td><td>$18,000</td></tr>
                <tr><td>$150,000</td><td>$27,000</td><td>$27,000</td></tr>
                <tr class="highlight-row"><td>$200,000</td><td>$36,000</td><td>$35,390 (capped)</td></tr>
            </tbody>
        </table>
    </div>
    <p class="did-you-know" data-info-gain><strong>Where the cap starts:</strong> dividing each year's dollar limit by 18% gives the earned income at which more income stops adding room: $187,833.33 of 2025 earned income for the 2026 limit of $33,810, and $196,611.11 of 2026 earned income for the 2027 limit of $35,390. Below those incomes, every extra $1,000 earned adds $180 of room, before any pension adjustment.</p>

    <h2 id="pension">How does a workplace pension change your limit?</h2>
    <p>It lowers it through the pension adjustment. The T4040 defines the PA as the total pension credits for the year under a deferred profit sharing plan or a defined benefit or money purchase registered pension plan: a measure of the value of the benefits that built up for you that year. Your employer reports it even if you are not yet vested.</p>
    <div class="table-wrapper">
        <table>
            <caption>The three pension figures in the formula (CRA Guide T4040)</caption>
            <thead><tr><th>Figure</th><th>What it does</th><th>Where it is reported</th></tr></thead>
            <tbody>
                <tr><td>Pension adjustment (PA)</td><td>Reduces next year's new room by the value of this year's pension benefits</td><td>Box 52 of the T4; box 034 of the T4A; total goes on line 20600</td></tr>
                <tr><td>Pension adjustment reversal (PAR)</td><td>Restores room when you leave a plan and receive less than the PAs and PSPAs reported for you</td><td>Box 2 of the T10 slip from the plan administrator</td></tr>
                <tr><td>Past service pension adjustment (PSPA)</td><td>Reduces room when past service benefits after 1989 are improved or bought back</td><td>T215 slips (exempt PSPAs); Form T1004 (certified PSPAs)</td></tr>
            </tbody>
        </table>
    </div>
    <p>The PA is why two people with the same salary can have very different limits. For how the pension interacts with the RRSP choice itself, see <a href="/blog/rrsp-or-tfsa-by-income/">RRSP or TFSA at every income</a>.</p>

    <h2 id="example">What does a full calculation look like?</h2>
    <p>Start from 18% of last year's earned income, cap it at the dollar limit, subtract the pension adjustment, then add unused room. The worked example below runs those steps for one person with a workplace pension and some room carried forward.</p>
    <div class="example-box">
        <div class="example-title">Illustration: Priya's 2027 RRSP deduction limit</div>
        <p>Priya (a labelled example) earns $90,000 in 2026 and belongs to a pension plan at work. Her 2026 T4 shows a pension adjustment of $6,000 in box 52. At the end of 2026 she has $12,000 of unused room. She has no PAR or PSPA.</p>
        <div class="example-calculation">
            <div class="line"><span>18% of $90,000 earned income</span><span>$16,200</span></div>
            <div class="line"><span>Lesser of that and the 2027 limit of $35,390</span><span>$16,200</span></div>
            <div class="line"><span>Minus her 2026 pension adjustment</span><span>−$6,000</span></div>
            <div class="line"><span>New 2027 room</span><span>$10,200</span></div>
            <div class="line"><span>Plus unused room at the end of 2026</span><span>+$12,000</span></div>
            <div class="line total"><span>2027 RRSP deduction limit</span><span>$22,200</span></div>
        </div>
        <p>If Priya had already put in, but not deducted, $5,000 in the first 60 days of 2027 and reported it on Schedule 7, that amount would still count against the $22,200.</p>
    </div>

    <h2 id="limit-vs">Is the deduction limit the same as what you can contribute?</h2>
    <p>Not quite. The limit caps what you can <em>deduct</em> for the year. You can contribute up to the limit plus $2,000 without the over-contribution tax, but the extra $2,000 is not deductible until a later year's room covers it. Contributions you make but do not deduct stay in the plan as unused contributions, and you can deduct them later.</p>
    <ul>
        <li>Deduct on line 20800 of your return. Your RRSP issuer gives you a receipt.</li>
        <li>You do not have to deduct a contribution in the year you make it; carrying it to a higher-income year can be worth more.</li>
        <li>You can contribute until December 31 of the year you turn 71, and to a spouse's or common-law partner's RRSP until the end of the year they turn 71.</li>
        <li>Spousal RRSP contributions use your own limit, not your partner's. See <a href="/blog/spousal-rrsp-canada/">spousal RRSPs</a>.</li>
        <li>Home Buyers' Plan and Lifelong Learning Plan repayments are not RRSP contributions for the deduction.</li>
    </ul>
    <p>Timing has its own rules: the deadline for the 2026 tax year is March 1, 2027, explained in <a href="/blog/rrsp-deadline-first-60-days/">the RRSP deadline and the first 60 days</a>.</p>

    <h2 id="over">What happens if you go over your RRSP deduction limit?</h2>
    <p>Up to $2,000 over costs nothing; beyond that, 1% a month. The CRA's <a href="${EXCESS}">excess contributions page</a> says the $2,000 allowance applies only if you were 18 or older at some point in the year. If you owe the tax, file a T1-OVP and pay within 90 days of the end of the year.</p>
    <div class="example-calculation">
        <div class="line"><span>Deduction limit (illustration)</span><span>$10,000</span></div>
        <div class="line"><span>Unused contributions (illustration)</span><span>$15,000</span></div>
        <div class="line"><span>Amount taxed: $15,000 − $10,000 − $2,000</span><span>$3,000</span></div>
        <div class="line total"><span>1% a month</span><span>$30 a month</span></div>
    </div>
    <p>Withdraw the excess or wait for new room to absorb it. If the excess came from a reasonable error and you are fixing it, Form RC2503 asks the CRA to waive or cancel the tax. The <a href="/blog/rrsp-playbook/">RRSP playbook</a> covers the strategy side of using your room.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>What is the RRSP limit for 2026?</h3>
    <p>The dollar limit is $33,810. Your own deduction limit is 18% of your 2025 earned income up to that amount, minus your pension adjustment, plus unused room from earlier years.</p>
    <h3>What is the RRSP limit for 2027?</h3>
    <p>The CRA lists $35,390 as the 2027 dollar limit, based on 2026 earned income.</p>
    <h3>Why is my RRSP deduction limit lower than 18% of my salary?</h3>
    <p>Usually a pension adjustment from a workplace pension, or deductions and losses that reduce earned income. Check box 52 of your T4.</p>
    <h3>Does unused RRSP room expire?</h3>
    <p>No. Room accumulated after 1990 carries forward indefinitely.</p>
    <h3>Is my RRSP deduction limit the same as my TFSA room?</h3>
    <p>No. TFSA room does not depend on income; see <a href="/blog/tfsa-withdrawal-rules/">TFSA withdrawal rules</a> for how it is restored.</p>
    <h3>Can I trust my own calculation over the CRA's?</h3>
    <p>Use your calculation to check the CRA's figure, but contribute against the figure on your latest notice of assessment or Form T1028. If they differ, find out why before you contribute.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${LIMIT}">CRA: How contributions affect your RRSP deduction limit</a>, reviewed November 23, 2026</li>
        <li><a href="${WHERE}">CRA: Where can you find your RRSP deduction limit</a>, reviewed November 23, 2026</li>
        <li><a href="${T4040}">CRA: Guide T4040, RRSPs and Other Registered Plans for Retirement (Chart 3, Chapter 7)</a>, reviewed November 23, 2026</li>
        <li><a href="${LIMITS}">CRA: MP, DB, RRSP, DPSP, ALDA, TFSA limits, YMPE and the YAMPE</a>, reviewed November 23, 2026</li>
        <li><a href="${UNUSED}">CRA: What to do with unused RRSP, PRPP or SPP contributions</a>, reviewed November 23, 2026</li>
        <li><a href="${EXCESS}">CRA: What happens if you go over your RRSP deduction limit</a>, reviewed November 23, 2026</li>
        <li><a href="${CLAIM}">CRA: How to claim your RRSP, PRPP or SPP contributions on your return</a>, reviewed November 23, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/rrsp-deadline-first-60-days/">RRSP deadline for the 2026 tax year</a></li>
        <li><a href="/blog/contribution-limits/">Registered account contribution limits</a></li>
        <li><a href="/blog/rrsp-playbook/">The RRSP playbook</a></li>
        <li><a href="/blog/rrsp-vs-tfsa-vs-fhsa/">RRSP vs TFSA vs FHSA</a></li>
        <li><a href="/blog/spousal-rrsp-canada/">Spousal RRSPs</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Line 20800 is one deduction. The Tax Guide covers the rest of the return.</strong></p>
        <p>The Canadian Optimizer Tax Guide walks through the T1 line by line, including RRSP deductions, pension adjustments and the credits people miss.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">See the Tax Guide</a>
    </div>

    ${batchFooter(D, 'Taxes', disclaimer)}

</div>`;

export const rrspDeductionLimitExplainedPost = batchPost({
  date: D,
  category: 'Taxes',
  categorySlug: 'taxes',
  subcategory: 'registered-accounts-tax',
  slug: 'rrsp-deduction-limit-explained',
  title: 'RRSP Deduction Limit Explained: How the CRA Works Out Your Room',
  excerpt:
    'How the CRA calculates your RRSP deduction limit for the 2026 tax year: 18% of earned income up to $33,810, the pension adjustment, PAR and PSPA, where to find it, and a worked example.',
  content,
});
