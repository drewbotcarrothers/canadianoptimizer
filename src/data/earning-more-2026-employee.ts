import type { BlogPostRecord } from '../lib/post-video';

const meta = {
  category: 'Earning More',
  categorySlug: 'earning-more',
  author: 'Andrew',
  date: '2026-10-15',
  updated: '2026-10-15',
  subcategory: 'employee',
} as const;

function post(slug: string, title: string, excerpt: string, content: string): BlogPostRecord {
  return { ...meta, title, slug, excerpt, image: `/images/blog/${slug}.png`, content };
}

const footer = `<div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about earning money as an employee in Canada as of October 2026. It is not tax, legal, or employment advice. Employment standards differ by province and by occupation, and many jobs are exempt from overtime or holiday rules. Survey figures are quoted from the publisher named below. Confirm the statute or the government guide linked here, and your own contract, before you rely on a number.</p>
        <div class="footer-note">Published: October 15, 2026 | Category: Earning More | Author: Andrew</div>
    </div>`;

export const earningMore2026EmployeePosts: BlogPostRecord[] = [
  post(
    'how-to-ask-for-a-raise-canada',
    'How to Ask for a Raise in Canada (2026 Benchmarks)',
    'Normandin Beaudry 3.1% for 2026 and Mercer 3.2% total for 2027 are employer budgets. Here is how to ask for more than the average pool.',
    `<div class="container">

    <div class="hook">
        A manager who says "the budget is 3 percent" is describing a pool, not your ceiling. <span class="highlight">Normandin Beaudry 3.1% for 2026</span> and <span class="highlight">Mercer 3.2% total for 2027</span> are what many Canadian employers planned to spend on increases. Your ask is a case for a larger share of that pool, or for leaving it.
    </div>

    <p>The after-tax comparison, if the answer is no and you have another offer, is <a href="/blog/raise-promotion-negotiation-math-canada/">raise and promotion math</a>. Take-home on a new salary is <a href="/blog/salary-after-tax-by-province-canada/">salary after tax by province</a>. A bonus that arrives later is <a href="/blog/bonus-tax-canada/">bonus tax</a>, and it is not the same object as a base increase. The map of the three paths is <a href="/blog/how-to-earn-more-money-canada/">how to earn more</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Normandin Beaudry's 2026 survey put the average salary-increase budget at 3.1 percent, excluding salary freezes, and at 3.4 percent once additional ad hoc budgets are included.</li>
            <li>Mercer's July 2026 survey of Canadian employers put 2027 plans at 3.0 percent for merit and 3.2 percent total, including promotions and other adjustments. Say it as Mercer 3.2% total for 2027.</li>
            <li>Ask for a base increase with a number, a reason tied to work already done, and a date. A vague "I was hoping for more" gets the average.</li>
            <li>If you are in Ontario and the role is posted, the range on the posting is evidence. Read <a href="/blog/ontario-pay-transparency-job-postings/">what the posting must show</a>.</li>
        </ul>
    </div>

    <h2>What the 3 percent actually is</h2>

    <p>Normandin Beaudry, in its salary-increase survey, said organizations were scaling budgets back to an average projected increase of 3.1 percent for 2026, excluding freezes, versus 3.2 percent in 2025. When the firm added the additional budgets organizations planned for 2026, the average reached 3.4 percent. That second number is real, and it is not a promise that your letter will say 3.4. It is a sign that some employers keep a side purse for market adjustments, critical roles, and people they do not want to lose.</p>

    <p>Mercer's newsroom note on its July 2026 QuickPulse survey said Canadian employers plan to hold 2027 base salary increases for merit at 3.0 percent, and total increases at 3.2 percent. Total, in their words, covers merit, promotions, cost-of-living, and other adjustments. A promotion can sit inside that 3.2 percent. It can also be argued as a different job. Do not let "the budget" collapse those into one conversation if the work changed.</p>

    <h2>The conversation, in order</h2>

    <ol>
        <li>Write the number you want on base, not a range you hope they will top. If the posted or internal band has a top, know whether you are asking to move inside it or through it.</li>
        <li>Put three pieces of evidence under it: scope that grew, a result with a unit (revenue, time, error rate, people managed), and the market if you have one. A feeling is not evidence.</li>
        <li>Ask in a meeting you booked, not in a hallway, and not only by email. Say the number out loud. Then stop talking.</li>
        <li>If the answer is the pool, ask what would change the number this cycle, and what the side purse is for. The 3.4 percent Normandin Beaudry described, including ad hoc budgets, is the question: "Is any of that unallocated?"</li>
        <li>Get the answer in writing. A "we'll see at year end" with no date is a no. Treat it as one, and decide whether <a href="/blog/negotiate-job-offer-canada/">another offer</a> is the next conversation.</li>
    </ol>

    <h2>What not to argue</h2>

        <p>Inflation, tenure, and a colleague's rumour are weak. The budget surveys are context for you, not a quote to throw at a manager as if they signed Normandin Beaudry's report. Do not cite a promotion premium you cannot source. If you want a promotion priced, price the new job: title, scope, and base. Equity in an offer is a separate tax object: <a href="/blog/rsu-stock-options-tax-canada/">RSUs and stock options</a>.</p>

    <h2>Frequently asked questions</h2>

    <h3>Is 3.1 percent a good raise?</h3>
    <p>It is the average budget Normandin Beaudry reported for 2026, excluding freezes. It is a good raise if your work did not change and you are paid in range. It is a weak raise if the job grew. Ask against the work, and use 3.1 percent as the floor of the conversation, not the target.</p>

    <h3>When should I ask?</h3>
    <p>Before the budget is locked, if you know when that meeting is. After a result you can point at, if you do not. A review meeting is the default. It is also the meeting where the pool has often already been divided. Earlier is better.</p>

    <h3>What if they say no?</h3>
    <p>Ask what would make it a yes at the next cycle, and whether the no is the pool or your case. Then decide if staying is still the higher-paid path. That comparison, after tax and after what you would forfeit, is the raise-math article, not a mood.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.normandin-beaudry.ca/en/salary-forecast/salary-increases-for-2026-budgets-continue-to-decline/">Normandin Beaudry: salary increases for 2026</a></li>
        <li><a href="https://www.mercer.com/en-ca/about/newsroom/canadian-employers-hold-compensation-budgets-steady/">Mercer Canada: compensation budgets for 2027</a></li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/raise-promotion-negotiation-math-canada/">Raise and promotion math</a></li>
        <li><a href="/blog/ontario-pay-transparency-job-postings/">Ontario pay transparency</a></li>
        <li><a href="/blog/negotiate-job-offer-canada/">Job offer negotiation</a></li>
        <li><a href="/blog/salary-after-tax-by-province-canada/">Salary after tax by province</a></li>
    </ul>

    ${footer}

</div>`
  ),
  post(
    'ontario-pay-transparency-job-postings',
    'Ontario Pay Transparency: What Job Postings Must Tell You',
    'Since January 1, 2026, many Ontario job postings must show a compensation range no wider than $50,000, disclose AI screening, and drop Canadian-experience requirements.',
    `<div class="container">

    <div class="hook">
        Since January 1, 2026, a publicly advertised job posting from an Ontario employer with 25 or more employees has to show the pay. <span class="highlight">A range wider than $50,000 a year is not allowed on the posting</span>, unless the top of the range is over $200,000. That range is now part of how you negotiate.
    </div>

    <p>The rules are in the Employment Standards Act, Part III.1, and in O. Reg. 476/24. Ontario's own guide is the page to read before you argue with a recruiter. How to use the number in the conversation is <a href="/blog/negotiate-job-offer-canada/">the offer script</a> and <a href="/blog/how-to-ask-for-a-raise-canada/">how to ask for a raise</a>. This article is what the posting owes you. It is not a substitute for the guide, and it does not cover British Columbia or Prince Edward Island. Those laws were not checked for this page.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The duties hit employers with 25 or more employees on the day the posting goes up. Count people, not full-time equivalents. Twenty part-time and five full-time is 25.</li>
            <li>The posting needs expected compensation, or a range. A range cannot exceed the equivalent of $50,000 a year. $85,000 to $135,000 can be posted. $85,000 to $140,000 cannot.</li>
            <li>No range is required if expected compensation is over $200,000 a year, or the range ends above $200,000.</li>
            <li>The posting must say whether artificial intelligence is used to screen, assess, or select applicants, and whether a vacancy exists. Canadian-experience requirements are prohibited on the posting and on the application form, with a licensing exception.</li>
            <li>The range on the posting is not a promise you will be offered that number. It is information you are allowed to use.</li>
        </ul>
    </div>

    <h2>Who has to comply</h2>

    <p>Fewer than 25 employees on the posting day, and the job-posting rules do not apply. The count is Ontario employees, including part-time, casual, people on leave, and people on layoff if the relationship has not ended. Multiple locations in Ontario are added together. A general "we are hiring" sign with no specific position is not a publicly advertised job posting. A posting open only to current employees is not one either. Work performed outside Ontario is generally out of scope. The Crown is excluded. Ontario's guide walks the examples. Use it when a recruiter says the company is "too small" and you can see three locations.</p>

    <h2>What "compensation" includes, and what it leaves out</h2>

    <p>Ontario defines compensation for this part as wages: salary, hourly pay, commission, piece work, and a bonus tied to hours, production, or efficiency. It does not include tips, gifts, expense allowances, or a bonus that is both discretionary and unrelated to hours, production, or efficiency. Stock options are not in that wage definition. A posted range can therefore be base pay while the equity sits off to the side. Price the equity separately, using <a href="/blog/rsu-stock-options-tax-canada/">the RSU and stock-option guide</a>, and do not pretend the posting's top number included it.</p>

    <p>If pay is an hourly rate plus commission, the posting has to say something about both. It does not have to be a full commission plan. A line such as a bonus of up to a stated share of salary, based on performance, can be enough. Read the posting as a floor for the conversation, not as the whole package. The rest of the package is <a href="/blog/negotiate-job-offer-canada/">the offer checklist</a>.</p>

    <h2>How to use the range</h2>

    <p>Ask where in the range the offer sits, and what moves it. A posting at $90,000 to $130,000 that produces an offer at $92,000 is a question: which requirement in the posting do I fail? If you meet the posted requirements, say so, and ask for a number closer to the top. The regulation's $50,000 cap means a very wide "depending on experience" band is no longer a lawful way to hide the pay, for employers who are in scope. The Act does not stop the employer from having a wider internal band. It stops them printing the wide one on the public posting.</p>

    <p>Also read the two sentences people skip. If artificial intelligence screens applications, the posting has to say so. It does not have to explain the model. And the posting cannot require Canadian experience, including work experience, credentials, or an existing professional network, except where a licence or registration genuinely requires it. If the application form still asks for Canadian experience, that form has the same problem as the posting.</p>

    <h2>Frequently asked questions</h2>

    <h3>Does this apply to a company with 25 staff across Canada, but 10 in Ontario?</h3>
    <p>The guide counts employees employed in Ontario. Ten in Ontario is under the threshold, even if the firm is larger elsewhere. Related employers can be treated as one employer in some cases. If you are unsure, the guide's section on related employers is the place to look, not a guess.</p>

    <h3>Can they offer me less than the posted range?</h3>
    <p>Ontario says the posting rule does not oblige the employer to offer you the compensation on the posting. You can still ask why the offer left the range, and you can walk. The posting is leverage. It is not a contract.</p>

    <h3>What about a role over $200,000?</h3>
    <p>If expected compensation is more than $200,000 a year, or the range ends above $200,000, the compensation line is not required. The AI disclosure, the vacancy statement, and the ban on Canadian-experience requirements are separate duties. Read the guide for which of those still apply. Do not assume a six-figure title is outside every rule.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.ontario.ca/document/your-guide-employment-standards-act-0/requirements-related-publicly-advertised-job">Ontario: requirements for publicly advertised job postings</a></li>
        <li><a href="https://www.ontario.ca/laws/regulation/r24476">O. Reg. 476/24: rules and exemptions re job postings</a></li>
        <li><a href="https://www.ontario.ca/laws/statute/00e41">Employment Standards Act, 2000, Part III.1</a></li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/negotiate-job-offer-canada/">Job offer negotiation script</a></li>
        <li><a href="/blog/how-to-ask-for-a-raise-canada/">How to ask for a raise</a></li>
        <li><a href="/blog/rsu-stock-options-tax-canada/">RSUs and stock options</a></li>
        <li><a href="/category/earning-more/employee/">All employee articles</a></li>
    </ul>

    ${footer}

</div>`
  ),
  post(
    'negotiate-job-offer-canada',
    'Job Offer Negotiation Script for Canadians',
    'A total-compensation script for a Canadian job offer: base, bonus, RRSP match, vacation, and remote, in that order.',
    `<div class="container">

    <div class="hook">
        The first number in an offer is the one they hope you will accept. <span class="highlight">Read the whole package out loud before you answer</span>: base, bonus, RRSP or pension, vacation, and where you are allowed to work. Then ask for the line that is actually short.
    </div>

    <p>If the posting is in Ontario and the employer is large enough, the range should already be public: <a href="/blog/ontario-pay-transparency-job-postings/">pay transparency</a>. How a raise inside a job you already have differs from a new offer is <a href="/blog/how-to-ask-for-a-raise-canada/">the raise article</a>. What you give up by leaving, including unvested equity, is <a href="/blog/raise-promotion-negotiation-math-canada/">raise and promotion math</a>. Equity tax is <a href="/blog/rsu-stock-options-tax-canada/">RSUs and stock options</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Negotiate total compensation, not the base in isolation. A higher base with a worse bonus, no match, and ten days of vacation can be a pay cut.</li>
            <li>Say one number, tied to the posted range or to the job you are leaving. Then wait.</li>
            <li>Get the revised offer in writing before you resign. A verbal "we can probably do that" is not an offer.</li>
            <li>Employer budgets around Normandin Beaudry 3.1% for 2026 are for people already on staff. A new hire is not locked to that pool. Do not quote it as your ceiling.</li>
        </ul>
    </div>

    <h2>The checklist, before you speak</h2>

    <table>
        <thead>
            <tr><th>Line</th><th>What to write down</th><th>What people skip</th></tr>
        </thead>
        <tbody>
            <tr><td>Base</td><td>The salary or hourly rate, and whether it is the bottom of a posted range.</td><td>Accepting base because the title sounds senior.</td></tr>
            <tr><td>Bonus</td><td>Target percent, whether it is discretionary, and when it pays.</td><td>Counting a target as cash. Withholding on a bonus is <a href="/blog/bonus-tax-canada/">a tax article</a>, not a reason to ignore the target.</td></tr>
            <tr><td>Retirement</td><td>RRSP match, pension, and when you are eligible.</td><td>A match you cannot use for a year is not this year's cash.</td></tr>
            <tr><td>Time</td><td>Vacation days, personal days, and whether stats are on top.</td><td>Trading a week of vacation for a small base bump without doing the hourly.</td></tr>
            <tr><td>Place</td><td>Remote, hybrid, and which province they will put on payroll.</td><td>Assuming a laptop means you can move. That is <a href="/blog/geographic-arbitrage-canada/">geographic arbitrage</a>.</td></tr>
            <tr><td>Equity</td><td>Grant, vest, and what you forfeit at the old job.</td><td>Adding the grant's face value to base as if it were salary.</td></tr>
        </tbody>
    </table>

    <h2>A script you can say</h2>

    <p>Thank them. Restate the role so you are negotiating the job they described, not a job you invented. Then: "The offer is $X base, with a target bonus of Y and Z days of vacation. To join, I need $A base. The posting's range runs to $B, and the scope you described sits in the top half of it. If base cannot move, I need the vacation or the match to move instead. Can you revise the letter?"</p>

    <p>Then stop. Do not fill the silence with a discount on your own number. If they ask "is that flexible?", answer with what is flexible: "Base is the line I need. Vacation is the line I can trade." One flexible line. Not five.</p>

    <p>If they will not move base and the other lines are thin, the honest close is that you are declining, or that you need a day. Resigning on a verbal promise is how people discover the letter does not match the call. The comparison to staying, after tax, is the raise-math page. Use it before you give notice.</p>

    <h2>Frequently asked questions</h2>

    <h3>Should I name a number first?</h3>
    <p>If a range is posted, you are not naming a number first. You are picking a point in their range. If nothing is posted, ask for the range before you give a number. Naming a low number to seem reasonable is how offers stick at the bottom.</p>

    <h3>Is it rude to negotiate in Canada?</h3>
    <p>No. It is how the range got built. A calm, specific ask is ordinary. A threat you will not carry out is not. If you will not walk away, do not say you will.</p>

    <h3>What about a signing bonus?</h3>
    <p>It is cash once, and it is taxed as employment income. It does not compound the way base does, and it does not raise next year's RRSP room the way a full year of higher salary does. Take it when base truly cannot move and you have priced that. Do not take it instead of a base gap you will feel for years.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.ontario.ca/document/your-guide-employment-standards-act-0/requirements-related-publicly-advertised-job">Ontario: job posting compensation rules</a></li>
        <li><a href="https://www.normandin-beaudry.ca/en/salary-forecast/salary-increases-for-2026-budgets-continue-to-decline/">Normandin Beaudry: 2026 salary budgets, for people already employed</a></li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/how-to-ask-for-a-raise-canada/">How to ask for a raise</a></li>
        <li><a href="/blog/raise-promotion-negotiation-math-canada/">Raise and promotion math</a></li>
        <li><a href="/blog/bonus-tax-canada/">Bonus tax</a></li>
        <li><a href="/blog/remote-work-us-company-from-canada/">Remote work for a US company</a></li>
    </ul>

    ${footer}

</div>`
  ),
  post(
    'how-to-negotiate-severance-canada',
    'How to Negotiate Severance in Canada',
    'Ontario ESA notice and severance are the floor. Common-law notice can be higher. Here is when the gap is large enough to pay for a lawyer, and how the tax article fits.',
    `<div class="container">

    <div class="hook">
        The package in the termination letter is the employer's opening number. In Ontario it is often the Employment Standards Act minimum, written as if it were the whole of the law. <span class="highlight">The Act is the floor. It is not the only claim.</span> Read the floor, then decide whether a lawyer costs less than the gap.
    </div>

    <p>This page is the negotiation. How a lump sum is withheld, and what can move to an RRSP, is <a href="/blog/severance-pay-tax-canada/">severance pay taxes</a>. Do the tax reading after you know the gross you are actually owed. Employment insurance after a job ends is <a href="/blog/employment-insurance-benefits-canada/">the EI guide</a>. If you are leaving for another offer rather than being dismissed, that is <a href="/blog/negotiate-job-offer-canada/">an offer negotiation</a>, not this article.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Ontario termination pay and Ontario severance pay are different. Notice, or pay instead of notice, runs up to eight weeks. Severance pay, for people who qualify, runs up to 26 weeks and is on top of notice.</li>
            <li>Severance pay under the Act requires five or more years, and either a global payroll of at least $2.5 million or a permanent closure that severs 50 or more employees in six months.</li>
            <li>Ontario's guide says common-law rights can be greater, and that you generally cannot both sue for wrongful dismissal and file an ESA claim for the same termination. Pick the forum with advice, not with a guess.</li>
            <li>Do not sign a release on the day you are upset. Ask for time. A release is the point of the negotiation.</li>
        </ul>
    </div>

    <h2>The Ontario floor, so you can see the gap</h2>

    <p>Ontario's termination guide sets written notice, or termination pay instead, by length of service. After the qualifying period, the scale runs from one week when service is under a year, up to eight weeks at eight years or more. The steps in between are on the guide: two weeks from one year, then one more week for each year through the eighth. Termination pay stands in for that notice. It is regular wages for the notice period, and benefits generally continue through the notice you should have had. Vacation pay accrues on termination pay. Confirm the table. Do not recite it from memory in a meeting.</p>

    <p>Severance pay is a second cheque, for a narrower group. Ontario's severance page says you qualify if employment is severed, you have worked five or more years (the guide's definition of that time is broader than "unbroken full-time"), and the employer has a global payroll of at least $2.5 million, or severed 50 or more employees in a six-month period because all or part of the business permanently closed. The Act's maximum is 26 weeks. Notice and severance are not offsets for each other. A letter that offers "eight weeks including everything" may be mixing two columns. Ask which weeks are notice and which are severance.</p>

    <h2>Common law, without a fake formula</h2>

    <p>Courts in common-law provinces can award reasonable notice that is longer than the Act's scale. There is no statute that says "one month per year," and this page will not invent one. Age, length of service, the character of the job, and the availability of similar work are the kinds of facts lawyers argue. They are also why a blog cannot price your letter. What a blog can say is the decision rule: if the gap between the letter and a plausible common-law claim is larger than a lawyer's fee, the consult pays for itself. If the letter is already at the generous end and you have a short, ordinary role, the fee may buy you a confirmation that you should sign.</p>

    <p>Ontario is explicit that you choose. You generally cannot pursue wrongful dismissal in court and an ESA claim at the Ministry for the same termination. Other provinces have their own floors. If you do not work in Ontario, read that province's employment standards page before you use this scale. The shape of the negotiation is the same: identify the statutory minimum, do not assume it is the deal, and do not sign a release you have not read.</p>

    <h2>What to ask for, besides weeks</h2>

    <ul>
        <li>More weeks, or salary continuance instead of a lump sum, if benefits and a slower EI start matter. The tax treatment of a lump sum is the <a href="/blog/severance-pay-tax-canada/">tax article</a>.</li>
        <li>A neutral reference, and an agreed announcement. Those are cheap for the employer and valuable if you are interviewing.</li>
        <li>Outplacement or a period of benefits continuation, if weeks will not move.</li>
        <li>Time. "I will have this reviewed and reply by Friday" is a complete sentence.</li>
    </ul>

    <p>Do not threaten a lawsuit you will not file. Do not post about the employer while a release is open. And do not spend the lump sum before you know the withholding. The tax page is the second half of this conversation.</p>

    <h2>Frequently asked questions</h2>

    <h3>I was there four years. Do I get Ontario severance pay?</h3>
    <p>Not under the Act's severance rules. Those start at five years, and they still need the payroll or mass-termination condition. You may still be owed notice or termination pay, and you may still have a common-law claim. "No ESA severance" is not "no package."</p>

    <h3>Should I take the lump sum?</h3>
    <p>Continuance keeps a paycheque and often benefits. A lump sum is money now, withheld at the rates the tax article describes, and it can end benefits sooner. Pick the one that matches your cash and your job search. Neither is free tax advice.</p>

    <h3>When is a lawyer worth it?</h3>
    <p>When the letter looks like the statutory minimum, your service or your role makes a longer notice plausible, and the extra months would exceed the fee. A short call that tells you to sign is also worth it if it stops you from sitting on a deadline.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.ontario.ca/document/your-guide-employment-standards-act-0/termination-employment">Ontario: termination of employment</a></li>
        <li><a href="https://www.ontario.ca/document/your-guide-employment-standards-act-0/severance-pay">Ontario: severance pay</a></li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/severance-pay-tax-canada/">Severance pay taxes</a></li>
        <li><a href="/blog/employment-insurance-benefits-canada/">Employment insurance</a></li>
        <li><a href="/blog/how-to-ask-for-a-raise-canada/">How to ask for a raise, if you are staying somewhere else</a></li>
        <li><a href="/blog/career-switch-after-tax-lifetime-earnings-canada/">Is a career switch worth it?</a></li>
    </ul>

    ${footer}

</div>`
  ),
  post(
    'overtime-stat-holiday-pay-canada',
    'Overtime and Stat Holiday Pay: Are You Being Paid Right?',
    'Ontario, British Columbia, Alberta, and Quebec do not share one overtime rule. Here is how to check a pay stub against the official threshold.',
    `<div class="container">

    <div class="hook">
        "Salaried" is not a synonym for "no overtime." <span class="highlight">The threshold is provincial, and the stub is the evidence.</span> Ontario's general rule is time and a half after 44 hours in a week. British Columbia, Alberta, and Quebec use different clocks. Exemptions are real. So are underpayments.
    </div>

    <p>This is a pay-stub check for four provinces. It is not a claim form, and it is not every exemption. Managers, some professionals, and some industries are outside the general rule. Read the exception list on the page linked for your province before you accuse a payroll system. If the extra pay is a bonus rather than overtime, that is <a href="/blog/bonus-tax-canada/">bonus tax</a>. The earning hub is <a href="/blog/how-to-earn-more-money-canada/">how to earn more</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Ontario: at least one and one-half times the regular rate after 44 hours in a work week, unless an exemption or a different threshold applies.</li>
            <li>British Columbia: time and a half after 8 hours in a day, up to 12; double time after 12 hours in a day; time and a half after 40 hours in a week. Only the first 8 hours of a day count toward the weekly total.</li>
            <li>Alberta: overtime is the greater of hours over 8 in a day or 44 in a week. Confirm the premium on Alberta's overtime page before you quote it at work.</li>
            <li>Quebec: time and a half after 40 hours in a week for most workers. A statutory holiday that falls on a normal work day counts toward those 40 hours.</li>
            <li>Ontario public holiday pay is regular wages plus vacation pay payable in the four work weeks before the holiday week, divided by 20. Quebec's indemnity is 1/20 of wages earned in the four complete weeks before the holiday week, excluding overtime.</li>
        </ul>
    </div>

    <h2>Four overtime clocks</h2>

    <table>
        <caption>General rules only, as stated on the government pages linked below. Exemptions and averaging agreements change the row.</caption>
        <thead>
            <tr><th>Province</th><th>When overtime starts</th><th>Premium</th></tr>
        </thead>
        <tbody>
            <tr><td>Ontario</td><td>After 44 hours in a work week. No general daily trigger.</td><td>At least 1.5 times the regular rate.</td></tr>
            <tr><td>British Columbia</td><td>After 8 hours in a day, and after 40 hours in a week.</td><td>1.5 times up to 12 hours in a day, then double time. Weekly overtime is 1.5 times, using only the first 8 hours of each day.</td></tr>
            <tr><td>Alberta</td><td>The greater of hours over 8 in a day or 44 in a week.</td><td>See Alberta's overtime page. A shorter agreed week does not, by itself, lower the 8/44 rule.</td></tr>
            <tr><td>Quebec</td><td>After 40 hours in a week for most workers.</td><td>1.5 times the regular hourly rate.</td></tr>
        </tbody>
    </table>

    <p>British Columbia's page is explicit that an employee cannot sign away overtime. It is also explicit about the 32-hour weekly rest: work during that rest is time and a half, and you do not stack that premium on top of overtime for the same hours. Quebec's overtime page says hours attached to a statutory holiday or vacation count as hours worked when you test the 40. A short week that includes a holiday can still produce overtime. That surprises people who only look at hours on the floor.</p>

    <h2>Stat holiday pay, Ontario and Quebec in full</h2>

    <p>Ontario lists nine public holidays: New Year's Day, Family Day, Good Friday, Victoria Day, Canada Day, Labour Day, Thanksgiving Day, Christmas Day, and Boxing Day. Public holiday pay is all regular wages earned in the four work weeks before the work week of the holiday, plus vacation pay payable for those four weeks, divided by 20. Regular wages for this math exclude overtime, vacation pay, and the holiday pay itself. If you agree in writing or electronically to work the holiday, the guide gives two routes: regular wages for the hours worked plus a substitute day off with public holiday pay, or public holiday pay plus premium pay (one and a half times) for the hours worked and no substitute day. Premium pay is not stacked on overtime for the same hour. Read the qualifying rules. Missing the shift before or after the holiday, without reasonable cause, can cost the entitlement.</p>

    <p>Quebec lists eight paid statutory holidays on the CNESST page, and pays an indemnity of 1/20 of wages earned during the four complete weeks of pay before the holiday week, excluding overtime. Commission pay uses 1/60 of wages over twelve weeks. Confirm the holiday list on that page rather than importing Ontario's nine. British Columbia and Alberta publish their own statutory-holiday lists and their own formula for the day's pay. Use those pages when the stub is from Vancouver or Calgary. This article does not restate a formula it has not quoted from the provincial page.</p>

    <h2>How to check the stub</h2>

    <ol>
        <li>Write the hours each day for one pay period. Do not trust a total that hides the long day.</li>
        <li>Apply your province's clock, not your old province's. A move does not bring the old threshold with you.</li>
        <li>Find the overtime line and the rate. Time and a half of regular rate is not time and a half of minimum wage, unless your province's rule for that job actually says minimum wage. Read the page.</li>
        <li>On a holiday week, compute the indemnity with the formula above if you are in Ontario or Quebec, and compare it to the line called "stat" or "holiday."</li>
        <li>If the gap is real, ask payroll in writing, with the arithmetic. If the answer is "you're salaried," ask which exemption they are relying on. The word salaried is not itself an exemption.</li>
    </ol>

    <h2>Frequently asked questions</h2>

    <h3>I am on salary. Do I get overtime?</h3>
    <p>Sometimes. Ontario's general rule is about hours, not about the word salary. Some jobs are exempt. The exemption is a category on the regulation, not a line in an offer letter that says "overtime does not apply" unless the statute allows that deal. Look up the category. Then look at the stub.</p>

    <h3>Can I agree to skip overtime?</h3>
    <p>British Columbia says the employer must pay overtime even if the employee agrees not to claim it. Other provinces limit contracting out of the minimum. A waiver in a handbook is not something to rely on. The government page is.</p>

    <h3>Does holiday pay replace overtime?</h3>
    <p>No. They are different lines. In Quebec, holiday hours can create overtime. In Ontario, premium pay for working the holiday is not also overtime on those same hours. Separate the lines on the stub before you add them.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.ontario.ca/document/employment-standard-act-policy-and-interpretation-manual/part-viii-overtime-pay">Ontario: overtime pay, ESA Part VIII</a></li>
        <li><a href="https://www.ontario.ca/document/your-guide-employment-standards-act-0/public-holidays">Ontario: public holidays</a></li>
        <li><a href="https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards/hours/overtime-pay">British Columbia: overtime pay</a></li>
        <li><a href="https://www.alberta.ca/overtime-hours-overtime-pay">Alberta: overtime hours and overtime pay</a></li>
        <li><a href="https://www.cnesst.gouv.qc.ca/en/working-conditions/wage-and-pay/wages/overtime">Quebec CNESST: overtime</a></li>
        <li><a href="https://www.cnesst.gouv.qc.ca/en/working-conditions/leave/statutory-holidays">Quebec CNESST: statutory holidays</a></li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/bonus-tax-canada/">Bonus tax, if the extra pay is not overtime</a></li>
        <li><a href="/blog/how-to-ask-for-a-raise-canada/">How to ask for a raise</a></li>
        <li><a href="/blog/salary-after-tax-by-province-canada/">Salary after tax by province</a></li>
    </ul>

    ${footer}

</div>`
  ),
];
