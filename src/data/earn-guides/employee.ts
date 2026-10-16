import { barChart, flowChart, lineChart } from '../../lib/earn-visuals';
import { cta, directAnswer, howto, readNext, sources, takeaways, toc } from './chrome';

const footer = `<div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about earning money as an employee in Canada as of October 2026. It is not tax, legal, or employment advice. Employment standards differ by province and by occupation, and many jobs are exempt from overtime or holiday rules. Survey figures are quoted from the publisher named below. Confirm the statute or the government guide linked here, and your own contract, before you rely on a number.</p>
        <div class="footer-note">Published: October 15, 2026 | Updated: October 16, 2026 | Category: Earning More | Author: Andrew</div>
    </div>`;

export const raiseContent = `<div class="container">

    <div class="hook">
        You want to know how to ask for a raise in Canada without getting the average and calling it a win. A manager who says the budget is about 3 percent is describing a pool. <span class="highlight">Your ask is a number, a reason, and a date.</span> The payoff is a higher base that compounds, or a clean no you can plan around.
    </div>

    ${directAnswer('Ask for a specific base-salary number in a meeting you booked, tied to work already done and to the posted or market range if you have one. Normandin Beaudry’s 3.1 percent for 2026 and Mercer’s 3.2 percent total for 2027 are employer budgets, not a ceiling on your increase.')}

    ${takeaways([
      'Normandin Beaudry’s salary survey put the average 2026 increase budget at 3.1 percent excluding salary freezes, and 3.4 percent once additional ad hoc budgets are included.',
      'Mercer’s July 2026 QuickPulse survey put 2027 plans at 3.0 percent for merit and 3.2 percent total, including promotions and other adjustments.',
      'A one-time larger increase changes every later year. The example below shows the gap on an $80,000 base. It is a method, not a promise.',
      'If you are under the 2026 CPP and EI ceilings, a raise is also a slightly larger CPP contribution and EI premium. Price that before you celebrate the gross.',
      'If the answer is the pool, ask what would change the number and by when. Then decide whether <a href="/blog/negotiate-job-offer-canada/">another offer</a> is the higher-paid path.',
    ])}

    ${toc([
      { id: 'what-3-percent-means', label: 'What the 3 percent budget actually is' },
      { id: 'compounding', label: 'What a bigger raise is worth over five years' },
      { id: 'cpp-ei', label: 'What CPP and EI take from the increase' },
      { id: 'how-to-ask', label: 'How do you ask, step by step?' },
      { id: 'script', label: 'What do you say in the room?' },
      { id: 'if-no', label: 'What if they say the budget is closed?' },
      { id: 'mistakes', label: 'Which arguments make the ask weaker?' },
      { id: 'help', label: 'When do you get outside help?' },
      { id: 'faq', label: 'Frequently asked questions' },
    ])}

    <h2 id="what-3-percent-means">What does a 3 percent raise budget mean in Canada?</h2>
    <p>It is the average pool many employers planned to spend, not the raise you are required to accept. Use it as context for the conversation. Do not quote it as if your manager signed the survey.</p>
    <p>Normandin Beaudry said organizations were scaling budgets back to an average projected increase of <strong>3.1 percent for 2026, excluding freezes</strong>, versus 3.2 percent in 2025. When the firm added the additional budgets organizations planned for 2026, the average reached <strong>3.4 percent</strong>. That second number is a sign that some employers keep a side purse for market adjustments and for people they do not want to lose. It is not a promise that your letter will say 3.4.</p>
    <p>Mercer said Canadian employers plan to hold <strong>2027 base salary increases for merit at 3.0 percent, and total increases at 3.2 percent</strong>. Total, in their words, covers merit, promotions, cost-of-living, and other adjustments. A promotion can sit inside that 3.2 percent. It can also be a different job. If the work changed, do not let “the budget” collapse those into one conversation.</p>

    ${barChart({
      title: 'Published Canadian increase budgets',
      aria: 'Bar chart comparing Normandin Beaudry 2026 budgets of 3.1 and 3.4 percent with Mercer 2027 merit of 3.0 percent and total of 3.2 percent.',
      caption: 'Sources: Normandin Beaudry 2026 salary-increase survey and Mercer Canada, July 2026 QuickPulse, plans for 2027. Bars are scaled to 4 percent so the small gaps stay visible. These are employer pools, not your outcome.',
      rows: [
        { label: 'NB 2026, ex freezes', pct: 77.5, text: '3.1%' },
        { label: 'NB 2026, with ad hoc', pct: 85, text: '3.4%' },
        { label: 'Mercer 2027 merit', pct: 75, text: '3.0%' },
        { label: 'Mercer 2027 total', pct: 80, text: '3.2%' },
      ],
    })}

    <h3>Where a posted range beats a survey</h3>
    <p>In Ontario, a publicly advertised job posting from an employer with 25 or more employees generally has to show expected compensation or a range, and a range cannot be wider than the equivalent of $50,000 a year. British Columbia’s Pay Transparency Act requires expected pay or a pay range, and the province has not set a maximum width. Prince Edward Island requires expected pay or a range on a public posting for a specific job. Save the posting. It is better evidence than a national average. The rules, and the exceptions, are in <a href="/blog/ontario-pay-transparency-job-postings/">Ontario pay transparency</a>.</p>

    <h2 id="compounding">How much is a bigger raise worth if it sticks?</h2>
    <p>A larger base is worth more than the first-year gap, because later increases are usually a percent of the new number. The chart below is an <strong>example</strong>. It applies Normandin Beaudry’s 3.1 percent figure as if it repeated. Employers do not promise that.</p>
    <p>Start at <strong>$80,000</strong>. Path A takes 3.1 percent every year. Path B takes 8 percent once, which is an example ask, then 3.1 percent. Income tax is left out on purpose. Run the new salary through the <a href="/blog/canada-income-tax-calculator/">income tax calculator</a> and the <a href="/blog/salary-after-tax-by-province-canada/">province table</a> before you treat gross as spendable.</p>

    <div class="table-wrapper">
    <table>
        <caption>Example only: $80,000 base, 3.1 percent repeated, versus an 8 percent first increase then 3.1 percent. Rounded to the nearest dollar.</caption>
        <thead><tr><th>Year</th><th>Path A, 3.1% each year</th><th>Path B, 8% once, then 3.1%</th><th>Gap that year</th></tr></thead>
        <tbody>
            <tr><td>Start</td><td>$80,000</td><td>$80,000</td><td>$0</td></tr>
            <tr><td>1</td><td>$82,480</td><td>$86,400</td><td>$3,920</td></tr>
            <tr><td>2</td><td>$85,037</td><td>$89,078</td><td>$4,041</td></tr>
            <tr><td>3</td><td>$87,673</td><td>$91,840</td><td>$4,167</td></tr>
            <tr><td>4</td><td>$90,391</td><td>$94,687</td><td>$4,296</td></tr>
            <tr class="highlight-row"><td>5</td><td>$93,193</td><td>$97,612</td><td>$4,419</td></tr>
        </tbody>
    </table>
    </div>
    <p>Add the five paid years and Path B has delivered about <strong>$20,843 more gross</strong> than Path A ($459,617 versus $438,774). The gap does not close in year 6 unless the smaller path gets a catch-up. That is the second-order effect people miss when they treat a raise as a one-year event. A bonus does not do this. A bonus is a one-time amount, and the withholding on it is a different conversation: <a href="/blog/bonus-tax-canada/">bonus tax</a>.</p>

    ${lineChart({
      title: 'Example: a larger base keeps pulling away',
      aria: 'Line chart of an illustrative $80,000 salary. One line rises by 3.1 percent a year to about $93,000. The other rises 8 percent once and then 3.1 percent a year to about $98,000.',
      caption: 'Illustrative example, not a forecast. The 3.1 percent is Normandin Beaudry’s 2026 average budget excluding freezes, reused here as a constant so you can see compounding. The 8 percent first step is an example ask, not a survey result.',
      yMax: 100000,
      yTicks: [
        { value: 80000, label: '$80k' },
        { value: 90000, label: '$90k' },
        { value: 100000, label: '$100k' },
      ],
      xLabels: ['Start', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
      series: [
        { name: '3.1% each year', color: '#4a5565', values: [80000, 82480, 85037, 87673, 90391, 93193] },
        { name: '8% once, then 3.1%', color: '#d80621', values: [80000, 86400, 89078, 91840, 94687, 97612] },
      ],
    })}

    <h2 id="cpp-ei">What do CPP and EI take out of a raise?</h2>
    <p>Part of a raise never reaches your bank account, and income tax is not the only piece. In 2026, the employee CPP rate is <strong>5.95 percent</strong> on pensionable earnings up to the year’s maximum pensionable earnings of <strong>$74,600</strong>, after the $3,500 basic exemption. The employee EI rate outside Quebec is <strong>1.63 percent</strong>, on insurable earnings up to <strong>$68,900</strong>.</p>
    <p>Take the first-year gap in the example, <strong>$2,480</strong> on the 3.1 percent path from $80,000. That salary is already above both ceilings, so a raise from $80,000 does <strong>not</strong> add employee CPP or EI. The extra CPP2 ceiling is $85,000 in 2026, at 4 percent. A raise that crosses from $82,480 toward $86,400 can create a CPP2 deduction of 4 percent on the slice between $74,600 and $85,000, until the employee maximum of <strong>$416</strong> is reached. Check the year-to-date box on the stub before you assume the whole raise is pensionable.</p>
    <p>Now a second example, still labelled as one. A raise from <strong>$60,000 to $63,000</strong> is under both ceilings. Employee CPP on the $3,000 is 3,000 × 0.0595 = <strong>$178.50</strong>. Employee EI is 3,000 × 0.0163 = <strong>$48.90</strong>. Together that is <strong>$227.40</strong> before income tax. Quebec EI is $1.30 per $100, so the EI piece there is $39. The employer pays a matching CPP amount and 1.4 times the EI premium. You do not receive the employer share, but it is part of what the role costs the company. Say that if they claim they “cannot afford” a base increase and then hire a contractor at a higher hourly. Pricing that hourly is <a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">how to set a freelance rate</a>.</p>
    <div class="tip-box"><strong>Pro tip.</strong> Ask for the increase on base, not as a one-time top-up, unless you are trading on purpose. A bonus does not raise next year’s percent, and it does not raise the salary a new employer will anchor to. If they offer a bonus instead, write down what the base would have been and decide with that number in view.</div>

    <h2 id="how-to-ask">How do you ask for a raise in Canada, step by step?</h2>
    <p>Book the conversation, name one base number, put evidence under it, and leave with a date. A hallway “I was hoping for more” gets the average.</p>
    ${howto('How to ask for a raise in Canada', [
      { name: 'Pick the base number', text: 'Write one figure, not a range you hope they will top. If a posted band or an internal band has a top, decide whether you are asking to move inside it or through it.' },
      { name: 'Collect three pieces of evidence', text: 'Scope that grew, a result with a unit (revenue, time, error rate, people), and a market fact if you have one: a posting, a Job Bank wage report, or an offer. A feeling is not evidence.' },
      { name: 'Book twenty minutes', text: 'Ask before the merit pool is divided if you know that date. After a result you can point at if you do not. Do not ambush a one-on-one that was called for something else.' },
      { name: 'Say the number and stop', text: 'Use the script below. Then wait. Filling the silence with a discount is how people talk themselves down to the budget.' },
      { name: 'If the answer is the pool, ask about the side purse', text: 'The 3.4 percent Normandin Beaudry described, including ad hoc budgets, is the question: is any of that unallocated, and what would move you into it?' },
      { name: 'Get the answer in writing', text: 'A new base and an effective date, or a revisit date with the condition that would change the number. “We’ll see at year end” with no date is a no.' },
    ])}
    <p>The next place this goes, if the written answer is a no, is whether staying still beats leaving. That comparison, after tax, is <a href="/blog/raise-promotion-negotiation-math-canada/">raise and promotion math</a>.</p>

    <h2 id="script">What do you say when you ask?</h2>
    <p>Say the number out loud. Do not email it first and hope the meeting becomes a negotiation. Email is for the record after they agree, or for the follow-up when they need time.</p>
    <div class="script-box">
        <p><strong>Open.</strong> “I want to talk about base salary. Over the last year I took on [scope], and [result with a unit]. I am asking to move base from [$current] to [$ask], effective [date].”</p>
        <p><strong>If they say the budget is 3 percent.</strong> “I understand the pool. The work I just described was not in last year’s job. Is any of the adjustment budget still open, and what would have to be true for this number?”</p>
        <p><strong>If they need time.</strong> “What date will you come back with a yes, a no, or a different number? I will send a short note today with the result and the figure so you have it.”</p>
        <p><strong>If they say yes.</strong> “Thank you. Please confirm the new base and the pay period it starts in writing.”</p>
    </div>
    <div class="warning-box"><strong>Watch out.</strong> Do not cite a promotion premium you cannot source. Do not mention a coworker’s pay unless you are allowed to discuss pay and you know the number is real. In British Columbia and Prince Edward Island, employers cannot punish you for talking about your own pay. That right is not a licence to guess someone else’s number.</div>

    <h2 id="if-no">What if they say the budget is closed?</h2>
    <p>Treat a closed budget as information, not as the end of the earning question. Ask whether the no is the pool or the case. Then choose one path for the next 90 days.</p>
    ${flowChart({
      aria: 'Decision flow: if the raise is yes, confirm it in writing. If it is the budget, ask for a date and a condition. If the case is rejected, decide whether to stay, take an outside offer, or add a side hustle.',
      caption: 'Use this after the meeting, not instead of the meeting. A side hustle is the path that spends hours you have left. It is not a substitute for a base increase you never asked for.',
      nodes: [
        { title: 'Did they move base?', kind: 'decision', text: 'Yes, no, or “not this cycle.”' },
        { title: 'Yes: lock the date', text: 'New base, pay period, and whether a bonus is extra or instead.' },
        { title: 'Not this cycle: name the condition', kind: 'option', text: 'What result, by which date, changes the number?' },
        { title: 'No, and the case is rejected', kind: 'result', text: 'Compare an outside offer, or keep the job and look at a side hustle.' },
      ],
    })}
    <p><strong>Stay</strong> if the condition is specific and the date is inside this fiscal year. <strong>Leave</strong> if you have an offer that wins after tax, benefits, and what you would forfeit. Equity in that offer is a separate object: <a href="/blog/rsu-stock-options-tax-canada/">RSUs and stock options</a>. <strong>Add hours</strong> only if the job allows it. A moonlighting clause can block the side path. The map of the three paths is <a href="/blog/how-to-earn-more-money-canada/">how to earn more</a>.</p>
    <p>Job Bank’s wage reports are the free federal tool for a market check. The pro is that the source is public and occupation-based. The con is that a national or regional wage is not your employer’s band, and it lags. Pair it with a live posting, not instead of one.</p>

    <h2 id="mistakes">Which arguments make the ask weaker?</h2>
    <p>Inflation, tenure, and a rumour are weak because they are not about the job. The budget surveys are context for you. Thrown at a manager as a demand, they sound like you read a headline.</p>
    <ul class="checklist">
        <li>You asked for a feeling (“something fair”) instead of a base number.</li>
        <li>You led with rent, a new baby, or inflation. Real costs. Bad leverage.</li>
        <li>You asked on the day layoffs were announced and had no result to point at.</li>
        <li>You accepted a bonus in place of base without writing down the compounding you gave up.</li>
        <li>You negotiated a new job’s pay by quoting your old pay in a province that limits pay-history questions. In B.C. and P.E.I., pivot to the posted range and the work.</li>
        <li>You threatened to quit without an offer. That is a bluff, and it is hard to walk back.</li>
    </ul>

    <h2 id="help">When do you get outside help?</h2>
    <p>Most raise conversations do not need a lawyer. Get employment-law advice before you sign a release, before you rely on a non-compete or a moonlighting clause, or when the “no” arrives as a termination. Severance is a different negotiation: <a href="/blog/how-to-negotiate-severance-canada/">how to negotiate severance</a>. A career coach or a recruiter is useful when you cannot tell whether the band is real. They are not a substitute for the number you still have to say yourself.</p>
    <p>If the raise lands, the next useful hour is take-home, not another article about asking. The calculator on this site uses the brackets. The ebook is the longer tax walkthrough for the year the raise arrives.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Is 3.1 percent a good raise in Canada in 2026?</h3>
    <p>It is the average budget Normandin Beaudry reported for 2026, excluding freezes. It is a reasonable outcome if your work did not change and you are already paid in range. It is a weak outcome if the job grew. Use 3.1 percent as the floor of the conversation, not the target.</p>
    <h3>When should I ask for a raise?</h3>
    <p>Before the merit pool is locked, if you know that meeting. After a result you can point at, if you do not. A review is the default, and it is also the meeting where the pool has often already been divided. Earlier is better.</p>
    <h3>Should I ask for a percent or a dollar amount?</h3>
    <p>Say the dollar base you want. Percents hide the number and invite a debate about the survey. You can show the percent afterward so they see it against their pool.</p>
    <h3>Does a raise increase CPP and EI?</h3>
    <p>Only on earnings still under the ceilings. In 2026 those ceilings are $74,600 for CPP, $85,000 for CPP2, and $68,900 for EI outside Quebec. Above them, a further base increase does not add that premium.</p>
    <h3>What if my workplace is unionized?</h3>
    <p>The collective agreement usually sets the grid. Asking outside the agreement can be a grievance issue, not a personal negotiation. Read the agreement or ask the union before you book the meeting this script describes.</p>
    <h3>Can my employer punish me for discussing pay?</h3>
    <p>British Columbia’s Pay Transparency Act and Prince Edward Island’s Employment Standards Act restrict reprisal for pay discussions. Ontario’s live job-posting rules are about the advertisement, not a general right this article can quote as a pay-discussion statute. Read the statute for your province before you rely on it.</p>
    <h3>Is a promotion the same as a raise?</h3>
    <p>No. Mercer folds some promotions into the total increase budget. You can still argue that a new title is a new job with its own base. Price the new scope. Do not accept a title with the old salary unless you are choosing that on purpose.</p>
    <h3>What if they offer equity instead of base?</h3>
    <p>Price the equity separately and read how it is taxed before you trade base for it. A dollar of base compounds and is simple. A dollar of RSUs is a vesting schedule and a tax event. The tax article is the one to open before you trade.</p>

    ${sources([
      '<a href="https://www.normandin-beaudry.ca/en/salary-forecast/salary-increases-for-2026-budgets-continue-to-decline/">Normandin Beaudry: salary increases for 2026</a>',
      '<a href="https://www.mercer.com/en-ca/about/newsroom/canadian-employers-hold-compensation-budgets-steady/">Mercer Canada: compensation budgets for 2027</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/cpp-contribution-rates-maximums-exemptions.html">CRA: CPP contribution rates, maximums and exemptions</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/calculating-deductions/making-deductions/second-additional-cpp-contribution-rates-maximums.html">CRA: CPP2 rates and maximums</a>',
      '<a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/employment-insurance-ei/ei-premium-rates-maximums.html">CRA: EI premium rates and maximums</a>',
      '<a href="https://www.canada.ca/en/employment-social-development/news/2025/09/canada-employment-insurance-commission-sets-the-2026-employment-insurance-premium-rate.html">Employment and Social Development Canada: 2026 EI premium rate</a>',
      '<a href="https://www.jobbank.gc.ca/trend-analysis/search-wages">Job Bank: wage reports</a>',
    ])}

    ${readNext([
      '<a href="/blog/ontario-pay-transparency-job-postings/">Ontario pay transparency, and how a posted range changes the ask</a>',
      '<a href="/blog/negotiate-job-offer-canada/">Job offer negotiation script</a>',
      '<a href="/blog/raise-promotion-negotiation-math-canada/">Raise and promotion math, after tax</a>',
      '<a href="/blog/how-to-earn-more-money-canada/">How to earn more: raise, business, or side hustle</a>',
    ])}

    ${cta('Next step: put the base you just asked for into the income tax calculator so you know the take-home before you accept a bonus instead. The 2026 tax guide is the longer walkthrough of the year the raise shows up on a T4.')}

    ${footer}
</div>`;
