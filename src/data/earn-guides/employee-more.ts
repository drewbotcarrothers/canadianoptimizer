import { barChart, flowChart } from '../../lib/earn-visuals';
import { cta, directAnswer, howto, readNext, sources, takeaways, toc } from './chrome';

const footer = `<div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about earning money as an employee in Canada as of October 2026. It is not tax, legal, or employment advice. Employment standards differ by province and by occupation, and many jobs are exempt from overtime or holiday rules. Survey figures are quoted from the publisher named below. Confirm the statute or the government guide linked here, and your own contract, before you rely on a number.</p>
        <div class="footer-note">Published: October 15, 2026 | Updated: October 16, 2026 | Category: Earning More | Author: Andrew</div>
    </div>`;

export const offerContent = `<div class="container">

    <div class="hook">
        A job offer in Canada is a package, and most people only negotiate the first line. <span class="highlight">Base, bonus, RRSP match, vacation, and remote days are different objects.</span> The payoff is a written counter you can send this week, anchored to a posted range where one exists, without inventing a “typical” signing bonus.
    </div>

    ${directAnswer('Negotiate a job offer in Canada only after it is in writing. Compare total compensation, name one base number, and ask for the pieces that are still open if base is fixed. In Ontario, British Columbia, and Prince Edward Island, the public posting may already show a pay range you can point at.')}

    ${takeaways([
      'Do not resign until the revised offer is signed. A verbal “we can probably do that” is not a base salary.',
      'Employer CPP in 2026 is as much as $4,230.45, plus up to $416 of CPP2, and employer EI outside Quebec is 1.4 times the employee premium. That cost is why a salary and a contractor rate are not the same hourly.',
      'A bonus is not base. It does not compound, and the tax withheld on it is often higher than the tax you finally owe. Read <a href="/blog/bonus-tax-canada/">bonus tax</a> before you trade salary for a target bonus.',
      'Equity is a third object. Price the grant and the vest, then read <a href="/blog/rsu-stock-options-tax-canada/">RSUs and stock options</a> before you give up cash for it.',
      'Where B.C. or P.E.I. law stops the employer from asking your pay history, do not fill the silence with your old salary.',
    ])}

    ${toc([
      { id: 'before-you-speak', label: 'What do you check before you counter?' },
      { id: 'total-comp', label: 'How do you compare the whole offer?' },
      { id: 'script', label: 'What do you say, and what do you email?' },
      { id: 'levers', label: 'Which levers are actually open?' },
      { id: 'decide', label: 'When do you take it, counter once, or walk?' },
      { id: 'mistakes', label: 'What sinks an otherwise good counter?' },
      { id: 'faq', label: 'Frequently asked questions' },
    ])}

    <h2 id="before-you-speak">What should you check before you negotiate a job offer?</h2>
    <p>Three documents, in this order: the posting, the offer letter, and your current pay stub. The posting tells you the band they were willing to print. The letter tells you what they will actually pay. The stub tells you what you would give up, including employer-paid benefits you will not see on a new base salary.</p>
    <p>Ontario, British Columbia, and Prince Edward Island can force a public range onto the posting. The differences, including Ontario’s $50,000 width cap and the $200,000 exception, are in <a href="/blog/ontario-pay-transparency-job-postings/">pay transparency</a>. If the letter is below the bottom of a range they posted, ask them to explain it in writing before you negotiate anything else. That is a stronger opening than a speech about your potential.</p>
    <div class="warning-box"><strong>Watch out.</strong> Online advice that says “counter 8 to 15 percent” is not a Canadian rule and it is not used here. A percent with no evidence is a guess. Use the posted range, a Job Bank wage report, or a competing offer you actually hold.</div>

    <h2 id="total-comp">How do you put a dollar figure on the whole offer?</h2>
    <p>Write every line in dollars per year. Leave a line blank when you do not know the value. Do not invent a benefits number to make the column look finished. The example below is a method. The salary is made up so the arithmetic is visible.</p>
    <div class="table-wrapper">
    <table>
        <caption>Example only. An $85,000 offer versus staying at $78,000. Benefits dollars are blank on purpose.</caption>
        <thead><tr><th>Line</th><th>Current job</th><th>New offer</th><th>How to treat it</th></tr></thead>
        <tbody>
            <tr><td>Base</td><td>$78,000</td><td>$85,000</td><td>Compounds. This is the number to negotiate first.</td></tr>
            <tr><td>Target bonus</td><td>8% = $6,240, not guaranteed</td><td>10% = $8,500, not guaranteed</td><td>Worth less than base. Confirm whether it is a target or a minimum.</td></tr>
            <tr><td>RRSP or pension match</td><td>Ask the stub</td><td>Ask the letter</td><td>A match you must contribute to get is not free. A defined-benefit pension is not an RRSP match. Do not convert it with a blog formula.</td></tr>
            <tr><td>Vacation</td><td>3 weeks</td><td>3 weeks</td><td>One extra week on $85,000 is about $85,000 ÷ 52 = $1,635 of pay, if you would have worked that week. That is the ceiling of the trade, not a second salary.</td></tr>
            <tr><td>Employer health premiums</td><td>On the benefits booklet</td><td>Unknown until you ask</td><td>Write the real premium or leave it blank.</td></tr>
            <tr class="highlight-row"><td>Base gap</td><td></td><td>$7,000</td><td>$7,000 ÷ $78,000 = 9.0 percent. Say the dollars.</td></tr>
        </tbody>
    </table>
    </div>
    <p>The $7,000 base gap is gross. In 2026, employee CPP stops at $74,600 of pensionable earnings and employee EI outside Quebec stops at $68,900. Both of these salaries are already through those ceilings, so the $7,000 does not add base CPP or EI. It can still add CPP2. CPP2 in 2026 is 4 percent of pensionable earnings between $74,600 and $85,000, to a maximum of $416. On a move from $78,000 to $85,000, the slice inside that band is $7,000, and 4 percent is <strong>$280</strong> if you had not already hit the $416 maximum with the old employer this year. A mid-year job change splits the maximum across employers. Check both stubs. Income tax is the larger bite. Use the <a href="/blog/canada-income-tax-calculator/">calculator</a> for the province you will live in, not a flat 30 percent.</p>
    <p>There is a second-order effect if you are close to a benefit clawback. A higher salary can shrink the Canada Child Benefit or GST/HST credit, or push Old Age Security recovery tax if you are in that age range. That is not a reason to refuse a good offer. It is a reason to price the net. The map is <a href="/blog/side-income-benefits-tax-clawbacks-canada/">benefit clawbacks</a>, and it applies to a raise as well as a side hustle.</p>

    ${barChart({
      title: 'Example: where the $7,000 base gap goes first',
      aria: 'Illustrative bar chart. Seven thousand dollars of base, two hundred eighty dollars of possible CPP2, and the rest still subject to income tax.',
      caption: 'Example only, for a move from $78,000 to $85,000 in 2026, assuming the $7,000 sits inside the CPP2 band and the $416 maximum is not already met. Income tax is not a single rate, so it is not drawn as a bar.',
      rows: [
        { label: 'Base gap', pct: 100, text: '$7,000' },
        { label: 'CPP2 at 4%', pct: 28, text: '$280' },
      ],
    })}

    <h2 id="script">What script do you use to counter an offer?</h2>
    <p>Thank them, state one base number, give the evidence in one sentence, and ask for the letter to be reissued. Do not attach seven asks. One base ask, and one fallback if base is truly fixed.</p>
    ${howto('How to negotiate a job offer in Canada', [
      { name: 'Wait for the written offer', text: 'If they want a verbal yes, say you are enthusiastic and you will answer when the letter is in your inbox. One to three days is a normal review window. Say which day you will answer.' },
      { name: 'Price the package on one page', text: 'Base, target bonus, match, vacation, and the benefits you were actually quoted. Leave blanks blank.' },
      { name: 'Send one number', text: 'Use the email below. Anchor to the posting or to a result, not to a blog’s recommended percent.' },
      { name: 'Negotiate the fallback once', text: 'If base cannot move, ask for one other line: a signing amount, a vacation week, a written six-month salary review, or a remote pattern. Get that line in the letter too.' },
      { name: 'Sign, then resign', text: 'Give notice at the old job only after the new letter is signed. Keep a copy of the posting beside it.' },
    ])}
    <div class="script-box">
        <p><strong>Email.</strong> “Thank you for the offer of $[base]. I want the role. Based on the posted range of $[low] to $[high] and on [one result], I am asking for $[ask] base. If base is fixed, I would like [one fallback] written into the letter. I can confirm by [day].”</p>
        <p><strong>If they ask your current salary in B.C. or P.E.I.</strong> “I would rather stay on the range for this role. The posting shows $[low] to $[high], and $[ask] matches the work you described.”</p>
        <p><strong>If you hold another offer.</strong> “I have a written offer at $[other]. I would rather join you at $[ask]. I need to answer the other employer by [day].”</p>
    </div>
    <p>Say it, then stop. A second paragraph of apology is a discount.</p>

    <h2 id="levers">Which parts of a Canadian offer actually move?</h2>
    <p>Base moves when the band has room or when they are afraid of losing you. Other lines move when base does not. Ask which line is open instead of demanding all of them.</p>
    <ul>
        <li><strong>Base.</strong> Best line. It compounds and it is what the next employer will anchor to. The math of staying for a smaller raise instead is <a href="/blog/raise-promotion-negotiation-math-canada/">raise and promotion math</a>.</li>
        <li><strong>Target bonus.</strong> Only as valuable as the plan’s history of paying it. Ask for the last two years’ payout as a percent of target. If they will not say, treat the target as zero in your comparison.</li>
        <li><strong>Vacation.</strong> Price a week as base divided by 52, as in the table. Some employers would rather give days than base. Take the days if you will use them. They do not compound.</li>
        <li><strong>RRSP match.</strong> A 4 percent match on $85,000 is $3,400 a year, and only if you contribute. Ask when it vests. An unvested match you might forfeit is not cash.</li>
        <li><strong>Remote days.</strong> Worth the commute you drop and the province you might live in. Moving while you keep the pay is <a href="/blog/geographic-arbitrage-canada/">geographic arbitrage</a>. A US employer paying you from Canada is a different structure: <a href="/blog/remote-work-us-company-from-canada/">remote work for a US company</a>.</li>
        <li><strong>Signing amount.</strong> Useful to cover a bonus you forfeit by leaving. Ask them to replace a specific forfeited amount, not a round number you hope sounds normal. Get it in the letter, and ask whether it is repayable if you leave inside a year.</li>
    </ul>
    <div class="tip-box"><strong>Pro tip.</strong> If they will not move base and will not move anything else, ask for a written review at six months with the condition that would change pay. A review with no condition is a delay. Put the condition in the email even if they will not put it in the letter, so you have a record.</div>

    <h2 id="decide">When should you accept, counter once, or walk away?</h2>
    <p><strong>Accept</strong> if the base is inside the range you already decided was enough, the bonus is clearly a bonus, and you are not giving up a pension you have not priced. <strong>Counter once</strong> if the letter is below the posted range or below a competing written offer. <strong>Walk</strong> if the only way the package works is if the target bonus pays in full and you have no evidence that it does.</p>
    ${flowChart({
      aria: 'Decision flow for a job offer: written letter first, then one counter, then sign or decline.',
      caption: 'One counter is the process. A second counter is a new negotiation and it needs new evidence, not a new mood.',
      nodes: [
        { title: 'Is the offer written?', kind: 'decision' },
        { title: 'No: wait', kind: 'option', text: 'Name the day you will answer.' },
        { title: 'Yes: one base number', text: 'Posted range, Job Bank, or a real competing offer.' },
        { title: 'Sign or decline', kind: 'result', text: 'Resign only after the revised letter is signed.' },
      ],
    })}
    <p>Tools that help: Job Bank for a public wage, the posting itself, and the calculator on this site for take-home. A recruiter is useful when they are paid by the employer and will tell you the top of the band. They are not useful when they pressure you to accept so their fee closes. A lawyer is the right call when the letter includes a non-compete, an IP assignment that covers your side work, or a repayment clause you do not understand.</p>

    <h2 id="mistakes">What sinks an otherwise good counter?</h2>
    <ul class="checklist">
        <li>Giving a range. They hear the bottom.</li>
        <li>Quoting an unsourced “market percent” from a career blog.</li>
        <li>Trading base for a title. A title does not pay the mortgage. Price the new job if the title is the point: <a href="/blog/how-to-ask-for-a-raise-canada/">how to ask for a raise</a> covers the same mistake from the inside.</li>
        <li>Ignoring a clawback or a forfeited bonus at the old job. Write both numbers down.</li>
        <li>Resigning on a verbal yes.</li>
        <li>Accepting equity you cannot describe. If you cannot say the grant, the vest, and the tax year, you cannot compare it to cash.</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Should I negotiate a job offer in Canada?</h3>
    <p>Yes, when you have a written offer and one piece of evidence: a posted range, a wage report, or another offer. A counter without evidence is a wish. A silent accept of a number below the posting is how people leave money in the band.</p>
    <h3>How long can I take to decide?</h3>
    <p>Say a date. One to three days is ordinary. If you need longer because you are waiting on another employer, say that. Disappearing is not a tactic.</p>
    <h3>What if they say the base is the top of the band?</h3>
    <p>Ask which other line can move, and ask once. Vacation, a signing amount tied to a bonus you forfeit, or a dated salary review are the usual leftovers. Get the leftover in the letter.</p>
    <h3>Do I tell them my current salary?</h3>
    <p>In British Columbia and Prince Edward Island, employers are not supposed to seek it. You do not have to fill the gap. In other provinces, you can still decline and talk about the range for this job. Volunteering a low number anchors the offer to your past.</p>
    <h3>Is a higher bonus as good as a higher base?</h3>
    <p>No. Base compounds and is harder to skip. A target bonus can be cut. Price a bonus at the percent they actually paid, not at the percent in the plan.</p>
    <h3>How does the offer interact with CPP and EI?</h3>
    <p>Employee premiums stop at the 2026 ceilings: $74,600 for CPP, $85,000 for CPP2, and $68,900 for EI outside Quebec. A mid-year change can double-withhold if both employers deduct as if they were your only employer. You reconcile that on the T1. Over-contributions are not a reason to refuse the job. They are a reason to check both stubs.</p>
    <h3>Should I take a contract instead of this salary?</h3>
    <p>Only after you know you would actually be a contractor. The status test is <a href="/blog/employee-vs-contractor-canada/">employee versus contractor</a>. The rate that replaces this salary, including both shares of CPP, is <a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">the freelance rate</a>.</p>
    <h3>When do I involve a lawyer?</h3>
    <p>Before you sign a non-compete, a long repayment clause, or an IP term that would kill a side hustle. Not for a $5,000 base gap you can ask for yourself.</p>

    ${sources([
      '<a href="https://www.ontario.ca/document/your-guide-employment-standards-act-0/requirements-related-publicly-advertised-job">Ontario: publicly advertised job postings</a>',
      '<a href="https://www2.gov.bc.ca/gov/content/governments/about-the-bc-government/gender-equity/wage-or-salary-information-on-job-postings">British Columbia: wage or salary information on job postings</a>',
      '<a href="https://www.princeedwardisland.ca/en/information/workforce-and-advanced-learning/pay-transparency">Prince Edward Island: pay transparency</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/cpp-contribution-rates-maximums-exemptions.html">CRA: CPP rates and maximums, 2026</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/calculating-deductions/making-deductions/second-additional-cpp-contribution-rates-maximums.html">CRA: CPP2, 2026 maximum $416</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/employment-insurance-ei/ei-premium-rates-maximums.html">CRA: EI premium rates and maximums</a>',
      '<a href="https://www.jobbank.gc.ca/trend-analysis/search-wages">Job Bank wage reports</a>',
    ])}

    ${readNext([
      '<a href="/blog/ontario-pay-transparency-job-postings/">What the posting must already tell you</a>',
      '<a href="/blog/how-to-ask-for-a-raise-canada/">How to ask for a raise if you stay</a>',
      '<a href="/blog/salary-after-tax-by-province-canada/">Take-home by province</a>',
      '<a href="/blog/rsu-stock-options-tax-canada/">How equity in the offer is taxed</a>',
    ])}

    ${cta('Next step: run the base in the offer letter through the income tax calculator for your province before you sign. The 2026 tax guide covers the rest of the return the new T4 will land on.')}

    ${footer}
</div>`;

export const severanceContent = `<div class="container">

    <div class="hook">
        The severance number in the letter is often the Employment Standards Act floor, written as if it were the whole deal. <span class="highlight">In Ontario the floor and the common-law conversation are different debts.</span> The payoff is a reply that asks for the statutory math, the benefits, and a pause before you sign a release.
    </div>

    ${directAnswer('Negotiate severance in Canada by separating the employment-standards minimum from anything a contract or the common law might add. In Ontario, notice or pay in lieu is up to 8 weeks, and severance pay is a second amount of up to 26 weeks if you qualify. Get the offer in writing before you sign a release.')}

    ${takeaways([
      'Ontario ESA section 54: after three months, termination needs written notice under section 57 or 58, or pay instead under section 61.',
      'Notice runs from 1 week (under 1 year) to 8 weeks (8 years or more). It is a stepped table, not “one week per year” in every year.',
      'Severance pay is extra. You qualify at 5 years if the employer’s payroll is $2.5 million or more, or if a permanent closure severs 50 or more people in six months. The formula is weeks of regular wages, pro-rated for completed months, capped at 26.',
      'Notice and severance do not offset each other. Working the notice period does not cancel severance pay.',
      'A release is what they are buying if they offer more than the statute. Tax on a lump sum is <a href="/blog/severance-pay-tax-canada/">a separate article</a>. Read it before you agree to a single cheque.',
    ])}

    ${toc([
      { id: 'floor', label: 'What is the Ontario floor?' },
      { id: 'common-law', label: 'What is common law, without a fake formula?' },
      { id: 'script', label: 'What do you say before you sign?' },
      { id: 'besides-weeks', label: 'What else can you ask for?' },
      { id: 'lawyer', label: 'When does a lawyer pay for itself?' },
      { id: 'provinces', label: 'What changes outside Ontario?' },
      { id: 'faq', label: 'Frequently asked questions' },
    ])}

    <h2 id="floor">What does Ontario actually require when a job ends?</h2>
    <p>Two possible payments, and they stack. Termination pay replaces notice you did not get to work. Severance pay compensates long service when you qualify. The Ministry’s policy manual says one cannot be used to offset the other.</p>
    <div class="table-wrapper">
    <table>
        <caption>Ontario ESA section 57, notice of termination. Employment of three months or more. Mass termination under section 58 can be longer.</caption>
        <thead><tr><th>Length of employment</th><th>Minimum written notice</th></tr></thead>
        <tbody>
            <tr><td>3 months to under 1 year</td><td>1 week</td></tr>
            <tr><td>1 year to under 3 years</td><td>2 weeks</td></tr>
            <tr><td>3 years to under 4</td><td>3 weeks</td></tr>
            <tr><td>4 years to under 5</td><td>4 weeks</td></tr>
            <tr><td>5 years to under 6</td><td>5 weeks</td></tr>
            <tr><td>6 years to under 7</td><td>6 weeks</td></tr>
            <tr><td>7 years to under 8</td><td>7 weeks</td></tr>
            <tr><td>8 years or more</td><td>8 weeks</td></tr>
        </tbody>
    </table>
    </div>
    <p>Severance pay, section 65, multiplies your regular wages for a regular work week by completed years plus completed extra months divided by 12. The cap is 26 weeks. Section 64’s payroll test treats $2.5 million as either the last or second-last fiscal year, or the last four weeks of wages multiplied by 13.</p>
    <div class="example-box">
        <strong>Example, not your package.</strong>
        <p>Regular weekly wages $1,200. Employment of 7 years and 9 months. The employer’s payroll is over $2.5 million, so severance pay applies.</p>
        <div class="example-calculation">
            <div class="line"><span>Notice under s. 57 (7 years, under 8)</span><span>7 weeks</span></div>
            <div class="line"><span>Notice pay if you do not work it</span><span>7 × $1,200 = $8,400</span></div>
            <div class="line"><span>Severance weeks</span><span>7 + 9/12 = 7.75</span></div>
            <div class="line"><span>Severance pay</span><span>7.75 × $1,200 = $9,300</span></div>
            <div class="line total"><span>ESA floor if notice is paid out</span><span>$17,700</span></div>
        </div>
        <p>If you work the seven weeks, you earn wages for those weeks and severance pay is still $9,300. The $17,700 figure is the floor when notice is cashed out. It is not a common-law award, and it ignores benefits continuation the statute may also require during the notice period. Confirm benefit continuation on the Ontario guide before you assume the cash is the whole floor.</p>
    </div>

    ${barChart({
      title: 'Example: Ontario floor for 7 years and 9 months',
      aria: 'Illustrative bars showing $8,400 of termination pay and $9,300 of severance pay on a $1,200 weekly wage.',
      caption: 'Example using ESA sections 57 and 65 and a made-up weekly wage of $1,200. Common law, a contract, or a collective agreement can change what you should ask for. They do not change this floor for an employee the ESA covers.',
      rows: [
        { label: 'Notice paid out', pct: 47, text: '$8,400' },
        { label: 'Severance pay', pct: 53, text: '$9,300' },
      ],
    })}

    <h2 id="common-law">What can common law add, without a fake formula?</h2>
    <p>For many non-union employees, a court can award more notice than the ESA if the contract does not legally limit them to the statute. The amount depends on age, length of service, the character of the job, and availability of similar work. There is <strong>no official weeks-per-year formula</strong>, and this page will not invent one. “One month per year” is a rumour. It is not a statute and it is not your number.</p>
    <p>What you can do without a lawyer’s opinion is see the gap between the letter and the floor. If the letter is the floor, and you have long service, a senior role, or a contract you never reviewed, that gap is the reason to buy an hour of advice before you sign. If the letter is already far above the floor and the release is narrow, the hour may still be worth it, but the decision is different. The tax on whatever you accept, including how a lump sum is withheld and whether RRSP room can absorb some of it, is <a href="/blog/severance-pay-tax-canada/">severance pay and tax</a>.</p>
    <div class="warning-box"><strong>Watch out.</strong> A termination clause in your old offer letter may try to limit you to the ESA. Some of those clauses fail. You cannot tell by reading a blog. Do not assume the clause wins, and do not assume it loses.</div>

    <h2 id="script">What do you say in the severance meeting?</h2>
    <p>You do not have to negotiate in the room where you were just dismissed. Your job in that hour is to collect the paper and buy time.</p>
    ${howto('How to respond to a severance offer in Canada', [
      { name: 'Do not sign', text: 'Say you need to read the letter. Ask for the deadline in writing. A same-day signature is almost never in your interest.' },
      { name: 'Ask for the statutory math', text: '“Please show the notice weeks under the Employment Standards Act and, if I qualify, the severance-pay calculation, including completed months.”' },
      { name: 'List what the cash does not cover', text: 'Benefits, pension or RRSP match through the notice period, unused vacation, commission already earned, and a bonus plan that was partly complete.' },
      { name: 'Ask whether a release is required for the floor', text: 'The statute is owed whether or not you sign a release. Extra money is what a release is for. If they bundle the floor into the release, separate the two numbers.' },
      { name: 'Reply in writing', text: 'Use the script below. One counter, with the items listed. Then stop and get advice if the gap might be common law.' },
    ])}
    <div class="script-box">
        <p><strong>In the room.</strong> “I understand the employment is ending. I am not able to sign today. Please email the letter, the notice calculation, and the date you need an answer.”</p>
        <p><strong>Follow-up.</strong> “The letter offers [their number]. On my reading the ESA notice is [weeks] and severance pay, if the payroll test is met, is [weeks], which is [dollars] before benefits. I am asking for [your number or ‘a package that reflects common-law notice’], continuation of benefits for that period, and payment of earned vacation and commission. I will not be signing the release today.”</p>
    </div>

    <h2 id="besides-weeks">What should you ask for besides more weeks?</h2>
    <p>Weeks are the headline. The lines under them are where offers get thin.</p>
    <ul>
        <li><strong>Benefits.</strong> Ask which benefits continue, and for how long. A drug plan that stops on Friday is a cost you have to replace.</li>
        <li><strong>Vacation and commission.</strong> These are often wages already earned, not a gift. Ask for them as a separate line from severance.</li>
        <li><strong>Reference and announcement.</strong> A agreed wording costs them nothing and changes your next search. Get it in the letter if the departure was not for cause.</li>
        <li><strong>Outplacement or a longer email access.</strong> Useful if your work files and contacts are on their systems. Do not trade weeks of pay for a coaching package you will not use.</li>
        <li><strong>Timing of the cheque.</strong> A lump sum and salary continuance are taxed differently at source. The tax article walks through withholding and RRSP room. Choose with that page open, not from memory.</li>
    </ul>
    <p>If you are about to job hunt, the market you are walking into is slower than a slogan implies. Statistics Canada’s September 2026 labour force release put unemployment at 6.5 percent and the job-finding rate at 30.6 percent, against 36.5 percent before the pandemic. That is context for how long a package needs to last. It is not a prediction of your search. The tactics that follow from a slower market sit with <a href="/blog/career-switch-after-tax-lifetime-earnings-canada/">whether a career switch is worth it</a>.</p>

    <h2 id="lawyer">When does paying a lawyer make sense?</h2>
    <p><strong>Buy advice before you sign</strong> if service is long, the role is specialized, you are older, the letter is the ESA floor, or a contract clause claims to cancel common law. <strong>You can often reply yourself</strong> if you have short service, the letter is clearly above the floor, and the release only confirms what you already agree. <strong>Use the Ministry</strong> for an unpaid ESA amount. Ontario’s employment standards claim process is the public route for the floor. It is not a common-law lawsuit.</p>
    <p>A rough test, labelled as a method: if a lawyer’s consult is a few hundred dollars and the gap between the letter and a plausible better outcome is many weeks of your pay, the consult is cheap. This page will not quote a lawyer’s fee or a court award. Ask for the price of the letter review before you send the file.</p>
    ${flowChart({
      aria: 'Flowchart: do not sign, compare the letter to the ESA floor, get advice if common law might exceed the letter, then counter in writing.',
      caption: 'The ESA floor is the part you can calculate from the statute. Anything above it is a negotiation, a contract, or a legal opinion.',
      nodes: [
        { title: 'Do not sign today', kind: 'decision' },
        { title: 'Is the letter at least the ESA floor?', text: 'Notice table, plus severance pay if you qualify.' },
        { title: 'Might common law be more?', kind: 'option', text: 'Long service, senior role, or a clause you do not trust.' },
        { title: 'One written counter', kind: 'result', text: 'Weeks, benefits, vacation, commission, reference.' },
      ],
    })}

    <h2 id="provinces">What if you do not work in Ontario?</h2>
    <p>Every province and the federal Canada Labour Code has its own notice rules. This page does not reprint them, because a wrong table is worse than a link. Use the employment-standards office for the province that regulates the job. Federally regulated work, including many banks, telecoms, and airlines, is not the Ontario table even if you sit in Toronto.</p>
    <p>Two constants travel. First, the amount in the letter is an offer until you sign, except for the statutory minimum, which is owed anyway. Second, a release is the point of any extra money. Read what you are giving up, including the right to sue, before you trade it for a cheque. The earning question after you sign is the same as anyone else’s: another job, or a bridge. <a href="/blog/how-to-earn-more-money-canada/">How to earn more</a> is the map. A side income while you search still has tax and benefit effects: <a href="/blog/side-hustle-taxes-canada/">side-hustle taxes</a> and <a href="/blog/side-income-benefits-tax-clawbacks-canada/">clawbacks</a>.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Is severance pay the same as termination pay in Ontario?</h3>
    <p>No. Termination pay stands in for notice. Severance pay is a separate entitlement for employees with five or more years when the payroll or mass-closure test is met. They are not offsets.</p>
    <h3>How many weeks of notice does the Ontario ESA require?</h3>
    <p>From 1 week, once you have three months, up to 8 weeks at eight years. Years 1 and 2 are both 2 weeks. It is not one week per year across the whole table. Section 58 can require more notice when 50 or more people are terminated in the same four-week period.</p>
    <h3>Do I have to sign a release to get the ESA minimum?</h3>
    <p>The minimum is a statutory debt. Employers sometimes staple it to a release that also settles common-law claims. Ask them to separate the floor from the extra. Do not assume the staple is legal. If you are unsure, ask a lawyer before you sign.</p>
    <h3>Can I negotiate if I was fired for cause?</h3>
    <p>Only if “cause” is real. The ESA standard for denying notice is narrower than a manager’s disappointment. If they allege cause and offer nothing, get advice before you agree with the allegation in writing. This page is not that advice.</p>
    <h3>Should I take salary continuance or a lump sum?</h3>
    <p>Continuance keeps a pay period and sometimes benefits. A lump sum ends the relationship and is often withheld at a flat rate that is not your final tax. Compare the cash date, the benefits, and the withholding. The tax article is the one to use for the withholding question.</p>
    <h3>Does unused vacation get added to severance?</h3>
    <p>Ask for it as its own line. Vacation pay is generally wages for vacation already earned. Do not let it disappear inside a round severance number.</p>
    <h3>Will EI be affected?</h3>
    <p>A severance package can delay Employment Insurance. Service Canada treats money you receive on separation as earnings that can be allocated. Confirm the allocation with Service Canada before you plan the week benefits start. This page does not guess the number of weeks.</p>
    <h3>What if I already signed?</h3>
    <p>A signed release is much harder to reopen. Stop sending more emails and talk to an employment lawyer about whether anything you signed is enforceable. Do not rely on a cooling-off period this page has not cited.</p>

    ${sources([
      '<a href="https://www.ontario.ca/laws/statute/00e41">Employment Standards Act, 2000, sections 54, 57, 61, 64 and 65</a>',
      '<a href="https://www.ontario.ca/document/your-guide-employment-standards-act-0/severance-pay">Ontario guide: severance pay</a>',
      '<a href="https://www.ontario.ca/document/employment-standard-act-policy-and-interpretation-manual/part-xv-termination-and-severance-employment">Ontario ESA policy manual, Part XV: notice and severance are separate</a>',
      '<a href="https://www.labour.gov.on.ca/english/es/tools/severance/calculator.php">Ontario severance pay calculator</a>',
      '<a href="https://www150.statcan.gc.ca/n1/daily-quotidien/261009/dq261009a-eng.htm">Statistics Canada, The Daily, October 9, 2026: Labour Force Survey, September 2026</a>',
    ])}

    ${readNext([
      '<a href="/blog/severance-pay-tax-canada/">How severance is taxed and withheld</a>',
      '<a href="/blog/negotiate-job-offer-canada/">How to negotiate the next offer</a>',
      '<a href="/blog/how-to-ask-for-a-raise-canada/">How to ask for a raise if you are still employed</a>',
      '<a href="/blog/how-to-earn-more-money-canada/">Raise, business, or side hustle</a>',
    ])}

    ${cta('Next step: before you agree to a lump sum, estimate the tax with the income tax calculator and read the severance tax article. The 2026 tax guide is the longer treatment of a one-time amount landing in a single year.')}

    ${footer}
</div>`;

export const overtimeContent = `<div class="container">

    <div class="hook">
        Overtime and stat holiday pay are where a correct hourly wage still comes out short. <span class="highlight">The clock is not the same in Ontario, British Columbia, Alberta, Quebec, or Prince Edward Island.</span> The payoff is a stub check you can do on one pay period, with the formula for your province written down.
    </div>

    ${directAnswer('You are owed overtime when your hours pass the threshold in the statute that covers your job, usually at 1.5 times your regular rate. Ontario’s general rule is after 44 hours in a week. British Columbia pays 1.5 times after 8 hours in a day and double time after 12. Many jobs are exempt.')}

    ${takeaways([
      'Ontario: overtime after 44 hours a week at 1.5 times. No general daily overtime rate. Public holiday pay is regular wages plus vacation pay in the prior four work weeks, divided by 20.',
      'British Columbia: 1.5 times after 8 hours in a day up to 12, double time after 12, and 1.5 times after 40 hours in a week counting only the first 8 hours each day.',
      'Alberta: overtime is hours over 8 in a day or 44 in a week, whichever is greater. A shorter scheduled week does not by itself create overtime.',
      'Quebec: overtime after 40 hours at 1.5 times. A statutory holiday that would have been a work day counts toward the 40. The CNESST’s own example is reproduced below.',
      'Prince Edward Island: standard week 44 hours at 1.5 times. Holiday pay is 5 percent of regular wages in the four weeks before the holiday, excluding overtime.',
    ])}

    ${toc([
      { id: 'clocks', label: 'Which overtime clock applies?' },
      { id: 'worked', label: 'What does one long week pay?' },
      { id: 'stat', label: 'How is stat holiday pay calculated?' },
      { id: 'stub', label: 'How do you check the pay stub?' },
      { id: 'exempt', label: 'Who is often outside the general rule?' },
      { id: 'claim', label: 'What do you do if the stub is short?' },
      { id: 'faq', label: 'Frequently asked questions' },
    ])}

    <h2 id="clocks">Which overtime rule applies to your job?</h2>
    <p>The province or the federal Code that regulates the employer, not the province on your mailing address. A bank branch in Calgary can be federal. A shop in Calgary is Alberta. Read the exemption for your occupation before you use the general row.</p>

    ${barChart({
      title: 'Weekly hours before the general overtime rate',
      aria: 'Bar chart of weekly overtime thresholds: Quebec and British Columbia at 40 hours, Ontario, Alberta, and Prince Edward Island at 44.',
      caption: 'Weekly triggers only. British Columbia and Alberta also have daily triggers, so you can earn overtime without crossing the weekly line. Sources: Ontario ESA, British Columbia employment standards, Alberta Employment Standards Code guidance, CNESST, and the 2026 Prince Edward Island employment standards guide.',
      rows: [
        { label: 'Quebec', pct: 80, text: '40 h' },
        { label: 'B.C. weekly', pct: 80, text: '40 h' },
        { label: 'Ontario', pct: 88, text: '44 h' },
        { label: 'Alberta', pct: 88, text: '44 h' },
        { label: 'P.E.I.', pct: 88, text: '44 h' },
      ],
    })}

    <div class="table-wrapper">
    <table>
        <caption>General rules only. Exemptions and averaging agreements change the row. Checked October 2026.</caption>
        <thead><tr><th>Place</th><th>When overtime starts</th><th>Rate</th><th>Public holiday pay, in brief</th></tr></thead>
        <tbody>
            <tr><td>Ontario</td><td>After 44 hours in a week. Daily limits on hours are not the same thing as daily overtime.</td><td>1.5 times. Time off in lieu needs a written agreement: 1.5 hours off per overtime hour, within 3 months, or within 12 months if you agree.</td><td>(Regular wages + vacation pay in the 4 work weeks before the holiday week) ÷ 20. Nine public holidays.</td></tr>
            <tr><td>British Columbia</td><td>After 8 hours in a day, and after 40 in a week. Only the first 8 hours each day count toward the weekly test.</td><td>1.5 times up to 12 hours in a day, then double time. Weekly overtime is 1.5 times.</td><td>If you work overtime on a statutory holiday, the overtime page says average day’s pay plus 1.5 times for the hours worked, not both overtime and a second premium on the same hours. The day-off formula is on the statutory holiday page.</td></tr>
            <tr><td>Alberta</td><td>The greater of 8 hours in a day or 44 in a week.</td><td>1.5 times, with industry exceptions on the Alberta page.</td><td>General holiday pay is a separate Alberta calculation. Use the provincial page rather than Ontario’s formula.</td></tr>
            <tr><td>Quebec</td><td>After 40 hours in a week for most workers.</td><td>1.5 times, or paid leave at time plus 50 percent if you ask or a decree allows it.</td><td>1/20 of wages earned in the 4 complete weeks before the holiday week, excluding overtime. Commission pay uses 1/60 of 12 weeks.</td></tr>
            <tr><td>Prince Edward Island</td><td>After 44 hours in the standard week.</td><td>1.5 times. Banked time, if used, is paid back at 1.5 paid hours per overtime hour.</td><td>5 percent of regular wages in the 4 weeks before the holiday, excluding overtime. Eight paid holidays, listed in the guide.</td></tr>
        </tbody>
    </table>
    </div>

    <h2 id="worked">What does a long week actually pay?</h2>
    <p>Two worked examples. The wage is made up. The clocks are from the government pages.</p>
    <div class="example-box">
        <strong>Example A, British Columbia, using the province’s own daily pattern.</strong>
        <p>The B.C. overtime page’s first example is a week of 8, 10, 6, and 13 hours. That is 6 hours at time-and-a-half and 1 hour at double time. At an example wage of $20:</p>
        <div class="example-calculation">
            <div class="line"><span>Regular hours in that pattern</span><span>37 − 6 − 1 = 30, but the page’s “scheduled” split is the cleaner read: time-and-a-half on 6 hours and double time on 1</span></div>
            <div class="line"><span>6 h × $30</span><span>$180</span></div>
            <div class="line"><span>1 h × $40</span><span>$40</span></div>
            <div class="line"><span>Remaining hours at $20</span><span>30 × $20 = $600</span></div>
            <div class="line total"><span>Gross for those 37 hours</span><span>$820</span></div>
        </div>
        <p>Straight time on 37 hours would have been $740. The premium is $80. Weekly overtime is a second test and you do not stack it on hours already paid as daily overtime. The page says only the first 8 hours each day count toward the 40-hour week.</p>
    </div>
    <div class="example-box">
        <strong>Example B, Ontario, 48 hours at $25.</strong>
        <p>General rule: the first 44 hours at $25, the next 4 at $37.50.</p>
        <div class="example-calculation">
            <div class="line"><span>44 × $25</span><span>$1,100</span></div>
            <div class="line"><span>4 × $37.50</span><span>$150</span></div>
            <div class="line total"><span>Gross wages for the week</span><span>$1,250</span></div>
        </div>
        <p>There is no extra daily premium in this general rule for a 12-hour day that still lands inside 44 hours in the week. A contract or policy can be more generous. The ESA is the floor. Hours worked on a public holiday that are paid as premium pay are not also counted as overtime hours.</p>
    </div>
    <p>Quebec’s commission publishes a full worked week. It is worth using their figures rather than inventing a third wage. A worker at $17.75 has a holiday Monday treated as 8 hours, plus 38 hours actually worked, for 46 hours counted. Overtime is 6 hours. Indemnity is $142. Regular pay on 32 hours is $568. Overtime is $159.78. Total on their page: <strong>$869.78</strong>. Read the current CNESST example before you rely on the cents, and do not swap in a different wage without redoing every line.</p>

    <h2 id="stat">How do you calculate stat holiday pay?</h2>
    <p>Holiday pay is not “another day at your hourly rate” unless the statute says so. Ontario and Quebec both divide four weeks by 20, which is 5 percent, but they do not add the same dollars.</p>
    <div class="example-box">
        <strong>Example, Ontario formula, made-up wages.</strong>
        <p>Regular wages in the four work weeks before the holiday week: $2,000. Vacation pay payable for those four weeks: $80. Public holiday pay = (2,000 + 80) ÷ 20 = <strong>$104</strong>. Overtime pay is not included in regular wages. If you work the holiday and agree in writing, premium pay is 1.5 times your regular rate for the hours worked, on top of the holiday-pay choice the guide describes. Easter Monday, the August civic holiday, and Remembrance Day are not ESA public holidays. Some employers close anyway. That is a policy, not the Act.</p>
    </div>
    <p>Prince Edward Island’s 2026 guide states holiday pay as <strong>5 percent of regular wages in the four weeks before the holiday, not including overtime</strong>, and the amount includes vacation pay or other holiday pay received in that window. The eight holidays are New Year’s Day, Islander Day, Good Friday, Canada Day, Labour Day, the National Day for Truth and Reconciliation, Remembrance Day, and Christmas Day. If you work the holiday, the guide says the employer pays 1.5 times your regular rate plus holiday pay, or your regular wage plus holiday pay on another day before your next vacation.</p>
    <p>A bonus paid in the same month is not holiday pay and it is not overtime. If the extra line on the stub is a bonus, the tax treatment is <a href="/blog/bonus-tax-canada/">bonus tax</a>.</p>

    <h2 id="stub">How do you check one pay stub?</h2>
    <p>Use one pay period. Do not average the year in your head.</p>
    ${howto('How to check overtime and stat holiday pay on a stub', [
      { name: 'Write the hours', text: 'Each day, start and end, unpaid meal breaks removed. The Ontario eating period is 30 minutes after no more than five hours. Do not count a missed meal as a gift.' },
      { name: 'Apply the right clock', text: 'Weekly only, or daily and weekly. Stop if your occupation is on the exemption list.' },
      { name: 'Multiply', text: 'Regular hours times regular rate, plus overtime hours times the premium rate. Compare to the stub’s overtime line, not to the net deposit.' },
      { name: 'Do the holiday line separately', text: 'Four weeks of regular wages, the divide-by-20 or 5 percent rule for your province, then the premium if you worked the day.' },
      { name: 'Ask payroll in writing', text: '“These hours, this rate, this holiday formula. The stub shows a different overtime line. Please walk me through the calculation.”' },
    ])}
    <ul class="checklist">
        <li>The hourly rate on the stub matches the offer or the collective agreement.</li>
        <li>Overtime hours match your daily record, not a rounded week.</li>
        <li>The premium is 1.5, or double time where B.C. says so, and not “straight time because you are salaried.” Salary does not automatically cancel the statute.</li>
        <li>Stat pay uses the four-week formula, not a flat “we always pay 8 hours” unless that flat amount is higher and is the deal.</li>
        <li>Hours you were told to stay are hours. A volunteer hour that was not really voluntary is still work.</li>
    </ul>

    <h2 id="exempt">Who should not use the general row?</h2>
    <p>Managers, some professionals, and some industries are outside the general overtime rule. Ontario, British Columbia, and Alberta each publish an exemption list. Using the general math against an exempt job produces a confident wrong number. Read the list for your province before you accuse payroll. If you are exempt from overtime and the extra hours are permanent, the earning conversation is a base increase, not a stub dispute: <a href="/blog/how-to-ask-for-a-raise-canada/">how to ask for a raise</a>.</p>
    <div class="tip-box"><strong>Pro tip.</strong> A salaried person covered by the general rule still has an overtime rate. Divide the weekly salary by the regular hours the statute or the contract uses, then apply 1.5. Write that implied rate on the stub check so payroll cannot answer with “you are salaried” and stop.</div>

    <h2 id="claim">What do you do if the stub is short?</h2>
    <p>Ask payroll first, in writing, with your hours attached. Many shortages are a missed code. If the answer is “we do not pay overtime,” and you are not exempt, the next step is the employment-standards branch for that province, not a social post. Time limits for complaints are real. Look them up on the same government page as the rule. A unionized job goes to the steward and the collective agreement, which can beat the statute and can also be the only route.</p>
    <p>Keep the stubs. A shortage that repeats is a base-pay problem disguised as a coding error. If the hours are the job, price them in the next salary conversation or in the next offer: <a href="/blog/negotiate-job-offer-canada/">negotiating the offer</a>. The hub for choosing a path is <a href="/blog/how-to-earn-more-money-canada/">how to earn more</a>.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Does Ontario pay daily overtime?</h3>
    <p>Not in the general rule. Overtime is after 44 hours in a week at 1.5 times. You can still refuse excess daily hours in some cases. That is a hours-of-work rule, not an overtime rate. Special industries differ.</p>
    <h3>Is a salary exempt from overtime?</h3>
    <p>Not by itself. Exemption depends on the job. If you are covered, the salary converts to a regular rate and the premium applies after the threshold.</p>
    <h3>Can I bank overtime instead of being paid?</h3>
    <p>Often, with rules. Ontario requires an agreement and pays the bank back at 1.5 hours off per overtime hour, taken within 3 months or within 12 months if you agree. British Columbia allows a written request to bank, with payout rules on the provincial page. Prince Edward Island’s guide says banked overtime taken later is 1.5 paid hours per overtime hour.</p>
    <h3>How many public holidays does Ontario have?</h3>
    <p>Nine under the ESA: New Year’s Day, Family Day, Good Friday, Victoria Day, Canada Day, Labour Day, Thanksgiving, Christmas, and Boxing Day. Easter Monday, the August civic holiday, and Remembrance Day are not on that list.</p>
    <h3>Do I get stat pay if I started last week?</h3>
    <p>In Ontario, qualifying does not depend on how recently you were hired. You can still lose the entitlement under the “last and first” rule if you miss your scheduled shift before or after the holiday without reasonable cause. Most people who fail that test and still work the holiday are owed premium pay for the hours worked.</p>
    <h3>Why is my Quebec holiday week larger than the hours I stood on the floor?</h3>
    <p>Because a statutory holiday that would have been a work day is counted as hours worked when overtime is calculated, and the indemnity is paid as well. The CNESST example is the clean illustration. You do not add the indemnity and also pay those holiday hours a second time as if you had worked them.</p>
    <h3>What about federally regulated jobs?</h3>
    <p>Banks, telecom, and interprovincial transport are often under the Canada Labour Code, not the provincial table. Use the federal labour-standards pages for hours and holidays. Do not apply Ontario’s 44-hour rule to a federal employer because the office is in Ontario.</p>
    <h3>Can my employer average my hours so I lose overtime?</h3>
    <p>Only where the statute allows an averaging agreement, usually in writing and sometimes with an expiry. An informal “we look at the month” is not an agreement. Read the averaging section for your province before you accept a schedule that erases the weekly clock.</p>

    ${sources([
      '<a href="https://www.ontario.ca/document/your-guide-employment-standards-act-0/public-holidays">Ontario: public holidays</a>',
      '<a href="https://www.ontario.ca/laws/statute/00e41">Employment Standards Act, 2000, including overtime and the notice and hours provisions</a>',
      '<a href="https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards/hours/overtime-pay">British Columbia: overtime pay</a>',
      '<a href="https://www.alberta.ca/overtime-hours-overtime-pay">Alberta: overtime hours and overtime pay</a>',
      '<a href="https://www.cnesst.gouv.qc.ca/en/working-conditions/wage-and-pay/wages/overtime">CNESST: overtime, including the $17.75 worked example</a>',
      '<a href="https://www.cnesst.gouv.qc.ca/en/working-conditions/leave/statutory-holidays/calculating-indemnity-statutory-holiday">CNESST: statutory holiday indemnity</a>',
      '<a href="https://www.princeedwardisland.ca/sites/default/files/28a9/2026%20Employment%20Standards%20Guide.pdf">Prince Edward Island: 2026 Employment Standards Guide</a>',
    ])}

    ${readNext([
      '<a href="/blog/how-to-ask-for-a-raise-canada/">If the hours are the job, ask for base instead</a>',
      '<a href="/blog/bonus-tax-canada/">When the extra line is a bonus, not overtime</a>',
      '<a href="/blog/salary-after-tax-by-province-canada/">What the gross becomes after tax</a>',
      '<a href="/blog/how-to-earn-more-money-canada/">How to earn more money in Canada</a>',
    ])}

    ${cta('Next step: if the corrected gross changes your annual pay, run that salary through the income tax calculator. The 2026 tax guide is the place for how a T4 full of overtime is taxed at year end.')}

    ${footer}
</div>`;
