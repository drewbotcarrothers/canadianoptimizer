import { barChart, flowChart } from '../../lib/earn-visuals';
import { cta, directAnswer, howto, readNext, sources, takeaways, toc } from './chrome';

const footer = `<div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about earning money as an employee in Canada as of October 2026. It is not tax, legal, or employment advice. Employment standards differ by province and by occupation, and many jobs are exempt from overtime or holiday rules. Survey figures are quoted from the publisher named below. Confirm the statute or the government guide linked here, and your own contract, before you rely on a number.</p>
        <div class="footer-note">Published: October 15, 2026 | Updated: October 16, 2026 | Category: Earning More | Author: Andrew</div>
    </div>`;

export const payContent = `<div class="container">

    <div class="hook">
        Ontario pay transparency is now a negotiation tool, not a slogan. Since January 1, 2026, many public job postings have to show expected pay or a range. <span class="highlight">If the range is on the posting, you do not have to guess the band.</span> The payoff is a counter that sits inside a number the employer already published, or a clear reason you are asking above it.
    </div>

    ${directAnswer('Ontario’s Employment Standards Act requires employers with 25 or more employees to put expected compensation, or a range no wider than $50,000 a year, on a publicly advertised job posting. Pay information is not required when expected pay is over $200,000. British Columbia and Prince Edward Island use different posting rules.')}

    ${takeaways([
      'Count heads, not full-time equivalents. Twenty part-time employees and five full-time employees are 25. All Ontario locations count.',
      'A range from $85,000 to $135,000 can be posted. A range from $85,000 to $140,000 cannot, because it is wider than $50,000. The ESA does not stop the employer from using a wider internal band.',
      'The posting must also say whether artificial intelligence is used to screen, assess, or select applicants, and whether a vacancy exists.',
      'Canadian experience cannot be required on the posting or the application form.',
      'B.C. requires expected pay or a range and has not capped how wide that range may be. P.E.I. requires expected pay or a range and bans pay-history questions. Alberta is not given a posting rule on this page because this page did not verify one.',
    ])}

    ${toc([
      { id: 'who', label: 'Who has to post a range in Ontario?' },
      { id: 'what-on-the-ad', label: 'What must the posting contain?' },
      { id: 'compare', label: 'How do Ontario, B.C., and P.E.I. differ?' },
      { id: 'use-the-range', label: 'How do you use the range in a negotiation?' },
      { id: 'after-interview', label: 'What are you owed after an interview?' },
      { id: 'mistakes', label: 'What do people misread?' },
      { id: 'faq', label: 'Frequently asked questions' },
    ])}

    <h2 id="who">Who has to follow Ontario pay transparency on a job posting?</h2>
    <p>An employer that employs 25 or more employees on the day the posting goes up, when the ad is a publicly advertised job posting under the Employment Standards Act. Fewer than 25, and Part III.1 does not apply that day.</p>
    <p>Ontario’s guide is explicit that the count is people, not full-time equivalents. Part-time and casual employees each count as one. Employees at every Ontario location are added together. The guide’s example is three sandwich shops with 12 employees each: 36 employees, so a posting that day must follow the rules even though no single shop has 25. Assignment employees of a temporary help agency count toward the agency, not toward the client they are assigned to.</p>
    <p>O. Reg. 476/24 says a publicly advertised job posting does <strong>not</strong> include a general recruitment campaign that is not for a specific position, a help-wanted sign that does not advertise a specific position, a posting only for existing employees, or a position performed outside Ontario. Mixed work is outside the definition when the work outside Ontario is not a continuation of work performed in Ontario. Read that before you accuse a remote posting of a breach.</p>

    <h2 id="what-on-the-ad">What must an Ontario job posting show?</h2>
    <p>Four things matter for pay and process. Miss one and the ad is not just incomplete. It is offside the Act for employers who are covered.</p>
    <div class="table-wrapper">
    <table>
        <caption>Ontario publicly advertised job postings, employers with 25 or more employees, in force January 1, 2026.</caption>
        <thead><tr><th>Requirement</th><th>What the guide says</th><th>What you do with it</th></tr></thead>
        <tbody>
            <tr><td>Expected compensation or a range</td><td>One or the other. Not both, unless they choose both. A range must not exceed the equivalent of $50,000 a year.</td><td>Save the posting. Anchor your ask to a point in the range, or say why you are above it.</td></tr>
            <tr><td>$200,000 exception</td><td>No compensation information is required if expected pay is more than $200,000, or the range ends above $200,000. Example from the guide: $210,000, or $170,000 to $210,000.</td><td>You can still ask. The statute does not forbid the question. It excuses the employer from printing the number.</td></tr>
            <tr><td>Artificial intelligence</td><td>If AI is used to screen, assess, or select applicants, the posting must say so. A detailed description of the system is not required.</td><td>Ask what the screen measures if you are rejected quickly. The disclosure is a sentence, not an audit.</td></tr>
            <tr><td>Vacancy statement</td><td>The posting must say whether an existing vacancy exists. Existing means imminently available for a qualified candidate. The employer does not have to fill it.</td><td>A “no vacancy” line is a pipeline ad. Decide whether you want to interview for a role that is not open.</td></tr>
            <tr><td>Canadian experience</td><td>Banned on the posting and on any associated application form.</td><td>If the form still asks, you can point at section 8.3. Human rights rules can also apply. This page is not a complaint clinic.</td></tr>
        </tbody>
    </table>
    </div>
    <p>Employers must keep a copy of every such posting, and any associated application form, for <strong>three years</strong> after public access is removed. Linked pages that form part of the posting are part of what they must keep, and so is each version if the ad changes. That is why you should save your own copy the day you apply. Their file is not your file.</p>
    <div class="example-box"><strong>Example, using the guide’s own range test.</strong> A posting says $90,000 to $130,000. The width is $40,000, which is inside the $50,000 limit. You are asking for $128,000. That is inside their published range, near the top. You do not need a national survey to justify being in the band. You need the two or three results that match the top of the band rather than the bottom. The ask itself is <a href="/blog/how-to-ask-for-a-raise-canada/">how to ask for a raise</a> if you already work there, and <a href="/blog/negotiate-job-offer-canada/">the offer script</a> if you do not.</div>

    <h2 id="compare">How do Ontario, British Columbia, and Prince Edward Island compare?</h2>
    <p>Three provinces now make pay visible on a public ad. They do not share one rule. Use the row for the province where the job is regulated. A federally regulated employer, such as a bank or a telecom, may be outside the provincial Act entirely.</p>

    ${barChart({
      title: 'Is the posted pay range capped?',
      aria: 'Bar chart showing Ontario caps a posted compensation range at $50,000. British Columbia and Prince Edward Island have no stated cap on this page.',
      caption: 'Ontario’s $50,000 limit is in O. Reg. 476/24. British Columbia’s guidance says the province is not currently limiting how wide a range may be. Prince Edward Island’s Employment Standards Act requires expected pay or a range and does not state a dollar cap. “No cap found” means this page did not find one in the official text, not that a future regulation cannot add one.',
      rows: [
        { label: 'Ontario', pct: 100, text: '$50,000 cap' },
        { label: 'British Columbia', pct: 18, text: 'No cap stated' },
        { label: 'Prince Edward Island', pct: 18, text: 'No cap stated' },
      ],
    })}

    <div class="table-wrapper">
    <table>
        <caption>Pay-posting rules checked against official pages in October 2026. Other provinces are omitted on purpose.</caption>
        <thead><tr><th></th><th>Ontario</th><th>British Columbia</th><th>Prince Edward Island</th></tr></thead>
        <tbody>
            <tr><td>Source</td><td>ESA Part III.1 and O. Reg. 476/24, in force January 1, 2026</td><td>Pay Transparency Act. Government page: the Act became law May 11, 2023</td><td>Employment Standards Act, sections 18 and 19. Guide page updated June 30, 2026</td></tr>
            <tr><td>Who</td><td>25 or more employees on the posting day</td><td>Provincially regulated employers, unless exempted by regulation</td><td>An employer advertising a specific job to the general public</td></tr>
            <tr><td>What must be shown</td><td>Expected compensation or a range</td><td>Expected salary or wage, or a range. “$20 an hour and up” does not meet the guidance</td><td>Expected pay or a range of expected pay</td></tr>
            <tr><td>Range width</td><td>Must not exceed $50,000 a year</td><td>No maximum set in the current guidance</td><td>No dollar cap stated in the Act section cited here</td></tr>
            <tr><td>High-pay exception</td><td>Above $200,000 expected, or a range that ends above $200,000</td><td>Not stated on the guidance page used here</td><td>Not stated in section 19 as cited here</td></tr>
            <tr><td>Pay history</td><td>Not a rule of the ESA job-posting part. Do not import it from the 2018 Pay Transparency Act unless you have confirmed that Act is in force for that section</td><td>Employers must not ask what you were paid by another employer. WorkBC states this with the posting rule</td><td>Section 18: an employer shall not seek an applicant’s pay history. You may disclose it yourself</td></tr>
            <tr><td>Talking about pay</td><td>Not claimed here as an ESA posting right</td><td>Reprisal for asking about pay, or for revealing your pay, is restricted</td><td>The June 30, 2026 government page says employers cannot punish pay discussions or questions about pay policy</td></tr>
        </tbody>
    </table>
    </div>
    <div class="warning-box"><strong>Watch out.</strong> A wide B.C. range can be legal and still useless. The guidance says the range should be the employer’s reasonable expectation of pay at the time of posting, and that you may ask outside it. “$40,000 to $140,000” tells you less than Ontario’s cap would. Ask which part of the range is for the experience they described in the ad.</div>

    <h2 id="use-the-range">How do you use a posted range when you negotiate?</h2>
    <p>Pick a point in the range that matches evidence, then say it. The bottom of the range is the employer’s opening, not your target, unless you are new to the work they described.</p>
    ${howto('How to use an Ontario posted pay range', [
      { name: 'Save the posting', text: 'Store the URL, the date, and a screenshot. The employer must keep the ad for three years. You should not have to ask them for the copy later.' },
      { name: 'Measure the width', text: 'Subtract the bottom from the top. If the public range is wider than $50,000 and the employer has 25 or more employees, the ad is outside O. Reg. 476/24. You can ask them to correct it. You can also still negotiate.' },
      { name: 'Choose your number inside or above the range', text: 'Inside: name the figure and the two results that match the top, not the midpoint. Above: say the posting caps the printed range, and your ask is for pay the internal band can still hold. The ESA does not forbid a wider internal range.' },
      { name: 'Do not lead with your old salary where history questions are banned', text: 'In B.C. and P.E.I., answer with the posted range and the work. Volunteering your old number trains the offer to your past employer.' },
      { name: 'Confirm the final number in the offer letter', text: 'A posting is not a contract. The letter is. If the letter is below the range you discussed, send it back before you resign.' },
    ])}
    <div class="script-box">
        <p><strong>Inside the range.</strong> “The posting lists $90,000 to $130,000. Based on [two results], I am asking for $128,000 base.”</p>
        <p><strong>Above a capped Ontario range.</strong> “The posted range stops at $135,000 because of the $50,000 rule. I am asking for $142,000. If the internal band can hold that, I would like the offer to say so.”</p>
        <p><strong>No number, and the role is over $200,000.</strong> “The posting is in the exception above $200,000, so it did not have to show a range. My expectation for this scope is [$number]. Is that inside what you can approve?”</p>
    </div>
    <p>Then stop talking. The rest of the package, bonus, RRSP match, vacation, and remote days, is the <a href="/blog/negotiate-job-offer-canada/">offer negotiation</a>. Take-home on the base is the <a href="/blog/salary-after-tax-by-province-canada/">province table</a>.</p>

    ${flowChart({
      aria: 'Flowchart: if the employer has fewer than 25 Ontario employees, the posting rule does not apply. If it has 25 or more, check for a range, an AI line, a vacancy line, and no Canadian-experience requirement.',
      caption: 'A missing range is a compliance question and a negotiation question. You can ask for the number either way.',
      nodes: [
        { title: '25 or more Ontario employees?', kind: 'decision' },
        { title: 'No: ask anyway', kind: 'option', text: 'The Act does not force the number. You can still request it.' },
        { title: 'Yes: read the four lines', text: 'Pay or range, AI if used, vacancy yes or no, no Canadian-experience requirement.' },
        { title: 'Anchor the ask', kind: 'result', text: 'A point in the range, or a reason to go above it.' },
      ],
    })}

    <h2 id="after-interview">What happens after Ontario interviews you?</h2>
    <p>If you were interviewed for a publicly advertised job posting, the employer must tell you whether a hiring decision has been made for that posting. The guide says this is within <strong>45 days</strong> after the interview, or after the last interview if you were interviewed more than once. If interviews are more than 45 days apart, they must tell you within 45 days after each one. They can do it in person, in writing, by phone, video, email, text, or a portal update if they give you the link.</p>
    <p>That notice is not an offer and it is not a reason. It does stop the silence that lasts a season. If day 46 arrives with nothing, a short note that cites the timeline is enough. Keep a copy. They must retain the information they provided for three years.</p>
    <div class="tip-box"><strong>Pro tip.</strong> Apply with the range visible in your notes: bottom, top, width, vacancy yes or no, AI yes or no. When the recruiter asks “what are you looking for,” answer with a number you already chose from that page, not with “I’m flexible.”</div>

    <h2 id="mistakes">What do people misread in these rules?</h2>
    <ul class="checklist">
        <li>Treating the Ontario $50,000 cap as a cap on what you can be paid. It caps what can be printed, not the internal band.</li>
        <li>Assuming every Canadian province requires a range. This page verifies Ontario, British Columbia, and Prince Edward Island only.</li>
        <li>Counting full-time equivalents. Ontario counts each employee as one.</li>
        <li>Ignoring “no existing vacancy.” You may be interviewing for a list, not a chair.</li>
        <li>Quoting your pay history in B.C. or P.E.I. because a form asked. The ban is on them seeking it. You can still hurt yourself by volunteering it.</li>
        <li>Confusing Ontario’s 2018 Pay Transparency Act with the ESA rules that actually took effect on January 1, 2026. Use the ESA guide unless you have confirmed the older Act is in force for the section you want.</li>
    </ul>
    <p>A lawyer is useful if you are filing an employment-standards claim, or if a posting rule is tangled up with a human-rights issue such as a Canadian-experience screen that also filters newcomers. For a straightforward ask, the script above is the tool. The earning map, if the posting is a dead end, is <a href="/blog/how-to-earn-more-money-canada/">how to earn more</a>.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>When did Ontario pay transparency for job postings start?</h3>
    <p>January 1, 2026. The requirements sit in Part III.1 of the Employment Standards Act, 2000, with the range limit and the under-25 exemption in O. Reg. 476/24.</p>
    <h3>Do small Ontario employers have to post a salary?</h3>
    <p>Not under this part, if they employ fewer than 25 employees on the day of the posting. You can still ask for the range. The statute excuses them from printing it.</p>
    <h3>Can an Ontario range be wider than $50,000?</h3>
    <p>Not on a publicly advertised job posting that has to show a range. The guide’s example is that $85,000 to $135,000 may be included and $85,000 to $140,000 may not. The ESA does not prohibit a wider range inside the company.</p>
    <h3>What if the job pays more than $200,000?</h3>
    <p>If expected compensation is more than $200,000 a year, or the range ends above that, the employer does not have to include compensation information. You may still ask.</p>
    <h3>Does British Columbia cap the width of the range?</h3>
    <p>Not in the guidance current on the provincial page used here. The province says it may regulate width later. “$20 an hour and up” and “competitive wage” do not meet the examples of a compliant posting.</p>
    <h3>Can a P.E.I. employer ask what I made before?</h3>
    <p>Section 18 says no employer shall seek an applicant’s pay history. You may disclose it without being asked. Comparable ranges for the role can still be discussed. Publicly available history is also outside the ban.</p>
    <h3>Does the posting bind the employer to that pay?</h3>
    <p>No. B.C.’s guidance says applicants can request pay outside the range and employers can offer outside it. In every province, the offer letter is the number you enforce. Save both.</p>
    <h3>What if I was interviewed and never heard back?</h3>
    <p>In Ontario, for a covered public posting, the employer must tell you whether a hiring decision has been made within 45 days of the interview, or of the last interview if they were close together. That is a status update, not a duty to hire you.</p>

    ${sources([
      '<a href="https://www.ontario.ca/document/your-guide-employment-standards-act-0/requirements-related-publicly-advertised-job">Ontario: requirements for publicly advertised job postings</a>',
      '<a href="https://www.ontario.ca/laws/regulation/240476">O. Reg. 476/24, Rules and exemptions re job postings</a>',
      '<a href="https://www.ontario.ca/laws/statute/00e41">Employment Standards Act, 2000, Part III.1</a>',
      '<a href="https://www2.gov.bc.ca/gov/content/governments/about-the-bc-government/gender-equity/wage-or-salary-information-on-job-postings">British Columbia: wage or salary information on job postings</a>',
      '<a href="https://www2.gov.bc.ca/gov/content/governments/about-the-bc-government/gender-equity/pay-transparency-in-bc">British Columbia: pay transparency</a>',
      '<a href="https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/23018">Pay Transparency Act, SBC 2023, c. 18</a>',
      '<a href="https://www.princeedwardisland.ca/en/information/workforce-and-advanced-learning/pay-transparency">Prince Edward Island: pay transparency, updated June 30, 2026</a>',
      '<a href="https://www.workbc.ca/get-support/job-application-tips/job-applicants-and-workers-rights">WorkBC: job applicant rights, including pay history and pay discussion</a>',
    ])}

    ${readNext([
      '<a href="/blog/negotiate-job-offer-canada/">Job offer negotiation script</a>',
      '<a href="/blog/how-to-ask-for-a-raise-canada/">How to ask for a raise once you are inside</a>',
      '<a href="/blog/salary-after-tax-by-province-canada/">Salary after tax by province</a>',
      '<a href="/blog/how-to-earn-more-money-canada/">How to earn more money in Canada</a>',
    ])}

    ${cta('Next step: once you have a number inside the range, run it through the income tax calculator before you accept. The 2026 tax guide is the longer version of what that salary does to the rest of the return.')}

    ${footer}
</div>`;
