import { batchFooter, batchPost } from './types';

const D = '2026-11-23';
const OAS = 'https://www.canada.ca/en/services/benefits/publicpensions/old-age-security';
const CAL = 'https://www.canada.ca/en/services/benefits/calendar.html';
const HUB = '/category/government-benefits/seniors-cpp-oas/';

const disclaimer = `General education, not financial or tax advice. Rules, processing times, amounts and payment dates come from the Government of Canada's Old Age Security pages and benefit payment calendar, all read on November 23, 2026. OAS amounts are adjusted every January, April, July and October, so the October to December 2026 figures will change. Margaret's timeline is a labelled illustration; the submit-by dates in it are our own arithmetic from the published processing times, not dates set by Service Canada.`;

const content = `<div class="container">

    <div class="hook">
        According to Service Canada, most people never need to fill in an Old Age Security application. <span class="highlight">The catch is knowing whether you are one of them before your 65th birthday, not after.</span> This guide, part of our <a href="${HUB}">CPP, OAS and GIS hub for seniors</a>, shows how to tell, what to do with the letter, and how to apply, delay or fix a start date.
    </div>

    <p>Most people do not need to apply for Old Age Security: Service Canada sends an automatic enrolment letter around your 64th birthday. If no letter arrives within a month of that birthday, or the letter asks you to apply, use My Service Canada Account or form ISP-3550. Canada.ca says online decisions take about 14 days.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Watch the mail around your 64th birthday. The letter tells you whether you were signed up automatically or need to apply.</li>
            <li>No letter one month after you turn 64? Contact Service Canada; do not assume you are covered.</li>
            <li>You can apply or delay online once you are at least one month past your 64th birthday.</li>
            <li>Delaying adds 0.6% a month up to 36% at 70, but it is a poor trade if you qualify for the Guaranteed Income Supplement.</li>
            <li>Already past 65 and never started? You can be paid up to 11 months back, but not for months you chose to defer.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#automatic">Do you need to apply?</a></li>
            <li><a href="#letter">Which letter did you get?</a></li>
            <li><a href="#gather">What to gather</a></li>
            <li><a href="#online">Apply or delay online</a></li>
            <li><a href="#paper">Apply on paper</a></li>
            <li><a href="#timeline">A birthday-to-payment timeline</a></li>
            <li><a href="#late">Applying late</a></li>
            <li><a href="#after">After you apply</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="automatic">Do you need to apply for OAS?</h2>
    <p>Usually not. Canada.ca's <a href="${OAS}/apply.html">apply page</a> says that if Service Canada has your eligibility information, you get a letter around your 64th birthday confirming automatic enrolment, and you do not need to apply. You do need to act in four cases:</p>
    <ul>
        <li>the letter contains incorrect information;</li>
        <li>the letter asks you to apply;</li>
        <li>you want to delay or change your start date;</li>
        <li>you have turned 65 but have not started the pension or delayed it.</li>
    </ul>
    <p>To qualify at all, you must be 65 or older and, if you live in Canada, a citizen or legal resident who has lived here at least 10 years since age 18. Living abroad, you need 20 years of residence after 18. The full pension takes 40 years; with fewer you get a partial pension of years in Canada divided by 40. Our <a href="/blog/oas-eligibility-deferral-canada/">OAS eligibility and deferral guide</a> covers those rules in depth.</p>

    <h2 id="letter">What should you do with the letter?</h2>
    <p>Read it for one thing first: whether it confirms enrolment or invites you to apply. The table maps each situation to the step Canada.ca describes.</p>
    <div class="table-wrapper">
        <table>
            <caption>OAS letter and action guide (from Canada.ca's apply, when-to-start and after-you-apply pages, read November 23, 2026)</caption>
            <thead>
                <tr><th>Your situation</th><th>What it means</th><th>What to do</th></tr>
            </thead>
            <tbody>
                <tr class="highlight-row"><td>Letter confirms automatic enrolment and the details are right</td><td>Your pension will start the month after you turn 65</td><td>Nothing, unless you want to delay. Check that direct deposit is set up</td></tr>
                <tr><td>Letter confirms enrolment but something is wrong</td><td>Service Canada is using bad information</td><td>Correct it in MSCA or contact Service Canada</td></tr>
                <tr><td>Letter invites you to apply</td><td>Service Canada lacks what it needs to enrol you</td><td>Apply online or on paper (ISP-3550)</td></tr>
                <tr><td>No letter one month after your 64th birthday</td><td>You may not be on file</td><td>Contact Service Canada to find out if you need to apply</td></tr>
                <tr><td>You want a later start</td><td>Each month of delay after 65 adds 0.6%</td><td>Delay online (Profile, then "Delay Receiving OAS/GIS Pension") or on paper</td></tr>
                <tr><td>You are past 65 and nothing has started</td><td>You may be owed back payments</td><td>Apply now and ask for a retroactive start (up to 11 months)</td></tr>
            </tbody>
        </table>
    </div>
    <p class="did-you-know" data-info-gain><strong>What the timeline below adds:</strong> a dated walk-through for one example birthday, from the letter check at 64 and one month to the first payment, with the last dates to submit online (14 days) or on paper (120 days) so a decision arrives before the first OAS month, using Canada.ca's published 2027 payment calendar.</p>

    <h2 id="gather">What do you need for an OAS application?</h2>
    <p>Mostly residence and income details. Canada.ca lists these items:</p>
    <ul class="checklist">
        <li>Your spouse's or common-law partner's SIN and date of birth, if you have one.</li>
        <li>Where you have lived since age 18.</li>
        <li>The date you want the pension to start.</li>
        <li>Residence history for the last 2 years, for you and your partner.</li>
        <li>Income for the last 2 years if you have not filed tax returns with the CRA.</li>
        <li>Any drop in employment or pension income in the last 2 years.</li>
        <li>Any income earned in another country.</li>
        <li>Banking information for direct deposit.</li>
    </ul>
    <p>The residence history matters most. OAS is based on years lived in Canada after 18, not on work or contributions, so a gap you forget to list can shrink the pension.</p>

    <h2 id="online">How do you apply for or delay OAS online?</h2>
    <p>In My Service Canada Account, if four things are true: you are at least one month past your 64th birthday, you are not already receiving OAS, you have not applied (or your application is still being assessed), and no third party such as a power of attorney or trustee manages your OAS account.</p>
    <div class="step-section">
        <div class="step"><span class="step-number">1</span><span class="step-title">Sign in.</span> Use "Apply using MSCA" on the apply page, or register first.</div>
        <div class="step"><span class="step-number">2</span><span class="step-title">Open Old Age Security.</span> Find the section on your MSCA dashboard.</div>
        <div class="step"><span class="step-number">3</span><span class="step-title">Apply or delay.</span> To apply, choose "Apply for Old Age Security and manage my benefits". To delay, go to "Profile", then "Delay Receiving OAS/GIS Pension".</div>
    </div>
    <p>The online application covers the Guaranteed Income Supplement too, so a low-income applicant can do both at once. See <a href="/blog/how-to-apply-for-gis/">how to apply for the GIS</a>.</p>

    <h2 id="paper">How do you apply for OAS on paper?</h2>
    <p>Use form ISP-3550, Application for the Old Age Security Pension and the Guaranteed Income Supplement, with the Reference Guide ISP-3550A. Paper is required if you apply from outside Canada; mail it to the Service Canada office in your last province or territory of residence.</p>
    <ul>
        <li>Use the form that came with your letter, or download a fillable copy, then print it and sign every section that needs a signature, in pen.</li>
        <li>Include certified true copies of required documents, not originals.</li>
        <li>Attach extra pages if you need more space.</li>
        <li>ISP-1603 lets someone talk to Service Canada for you; ISP-3505 with ISP-3506 or ISP-3507 is for someone who manages benefits for a person who cannot.</li>
    </ul>

    <h2 id="timeline">When should you act, birthday by birthday?</h2>
    <p>From your 64th birthday on. Here is the sequence for one example birthday, with Canada.ca's processing times and the 2027 calendar.</p>
    <div class="example-box">
        <div class="example-title">Illustration: Margaret, born March 14, 1962</div>
        <div class="table-wrapper">
            <table>
                <caption>Margaret's OAS timeline (labelled illustration; submit-by dates are our arithmetic)</caption>
                <thead>
                    <tr><th>Date</th><th>What happens</th></tr>
                </thead>
                <tbody>
                    <tr><td>Around March 14, 2026</td><td>She turns 64; the enrolment letter is expected around now</td></tr>
                    <tr><td>April 14, 2026</td><td>One month past 64: if no letter, she contacts Service Canada. The online apply and delay options open to her</td></tr>
                    <tr><td>December 2, 2026</td><td>Last day to mail ISP-3550 if she wants a decision before April 1, 2027 (120 days)</td></tr>
                    <tr><td>March 14, 2027</td><td>She turns 65</td></tr>
                    <tr><td>March 18, 2027</td><td>Last day to apply online for a decision before April 1, 2027 (14 days)</td></tr>
                    <tr class="highlight-row"><td>April 28, 2027</td><td>First OAS payment, for April, the month after she turns 65</td></tr>
                </tbody>
            </table>
        </div>
    </div>
    <p>OAS starts the month after you turn 65, or on the date in your decision letter, and is then paid monthly. The <a href="${CAL}">Canada.ca payment calendar</a> lists the 2027 OAS dates, from January 27 to December 22, 2027.</p>

    <h2 id="delay">Should you delay OAS instead?</h2>
    <p>Only if you can afford to and will not qualify for the GIS. Canada.ca's <a href="${OAS}/when-start.html">when-to-start page</a> says each month of delay after 65 adds 0.6%, up to 36% at 70, and gives these maximums for October to December 2026:</p>
    <div class="table-wrapper">
        <table>
            <caption>Maximum monthly OAS by start age, October to December 2026 (Canada.ca)</caption>
            <thead><tr><th>Start age</th><th>Increase</th><th>Maximum monthly payment</th></tr></thead>
            <tbody>
                <tr><td>65</td><td>None</td><td>$762.50</td></tr>
                <tr><td>66</td><td>7.2%</td><td>$817.40</td></tr>
                <tr><td>67</td><td>14.4%</td><td>$872.30</td></tr>
                <tr><td>68</td><td>21.6%</td><td>$927.20</td></tr>
                <tr><td>69</td><td>28.8%</td><td>$982.10</td></tr>
                <tr><td>70</td><td>36%</td><td>$1,037.00</td></tr>
            </tbody>
        </table>
    </div>
    <p>Three reasons not to delay, all from the same page: there is no gain if you are eligible for the GIS; while OAS is deferred you cannot get the GIS and your partner cannot apply for the Allowance; and GIS and Allowance amounts do not rise when you delay. If you are working, OAS can be partly repaid once net income passes $93,454 for 2025, the <a href="${OAS}/recovery-tax.html">recovery tax</a> threshold for the July 2026 to June 2027 payments.</p>

    <h2 id="late">What if you are already past 65 and never applied?</h2>
    <p>Apply now and ask for a retroactive start. Canada.ca says a payment can go back up to 11 months from the date your application is received, but not for any period you chose to defer.</p>
    <div class="example-calculation">
        <div class="line"><span>Maximum monthly OAS, age 65 to 74 (October to December 2026)</span><span>$762.50</span></div>
        <div class="line"><span>Months that can be paid back</span><span>11</span></div>
        <div class="line total"><span>Most that 11 months at that rate would come to</span><span>$8,387.50</span></div>
    </div>
    <p>That is the ceiling at a single quarter's rate (our arithmetic); a partial pension, or the lower rates of earlier quarters, gives less. Anything older than 11 months is not paid, which is why the "turned 65, nothing started" case in the table above is urgent.</p>

    <h2 id="after">What happens after you apply?</h2>
    <p>A decision letter arrives by mail. Canada.ca's <a href="${OAS}/after-apply.html">after-you-apply page</a> gives 14 days for online applications and 120 days by mail, longer if documents are missing.</p>
    <ul>
        <li>An approval shows your monthly amount and first payment date.</li>
        <li>You have 90 days from receiving the letter to ask for a reconsideration.</li>
        <li>To update direct deposit or contact details in MSCA, call 1-800-277-9914 once to enable the feature.</li>
        <li>Taxes are not taken off OAS automatically for residents of Canada; you can request monthly deductions in MSCA.</li>
        <li>File your tax return by April 30 every year. OAS is reviewed each July from your return.</li>
        <li>Changed your mind? You can cancel or delay within 6 months of the first payment, by letter.</li>
    </ul>
    <p>If you have not started your Canada Pension Plan yet, that one always needs an application: see <a href="/blog/how-to-apply-for-cpp/">how to apply for CPP</a>. For how other income interacts with OAS, read <a href="/blog/oas-gis-income-stacking-canada/">OAS and GIS income stacking</a>.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Is OAS automatic in Canada?</h3>
    <p>For most people, yes. Service Canada enrols you automatically if it has your information and tells you by letter around your 64th birthday. If you get no letter, or the letter asks you to apply, you must apply.</p>
    <h3>How early can I apply for OAS?</h3>
    <p>Online, from one month after your 64th birthday. The pension itself cannot start before 65.</p>
    <h3>How long does an OAS application take?</h3>
    <p>About 14 days online and 120 days by mail, according to Canada.ca, from when it is received.</p>
    <h3>Do I need to have worked to get OAS?</h3>
    <p>No. OAS is based on age and years of residence in Canada after 18. You can get it if you never worked or are still working, though high income can trigger the recovery tax.</p>
    <h3>Can I apply for OAS from outside Canada?</h3>
    <p>Yes, on the paper form ISP-3550, sent to the Service Canada office for your last province or territory of residence. You need at least 20 years of residence in Canada after 18 to be paid abroad.</p>
    <h3>Does applying for OAS also apply me for the GIS?</h3>
    <p>The same online application and the same paper form (ISP-3550) cover both, and the automatic letter says whether Service Canada will try to enrol you in the GIS.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${OAS}/apply.html">Government of Canada: OAS, Apply, delay, or change your start date</a>, reviewed November 23, 2026</li>
        <li><a href="${OAS}/eligibility.html">Government of Canada: OAS, Do you qualify</a>, reviewed November 23, 2026</li>
        <li><a href="${OAS}/when-start.html">Government of Canada: OAS, When to start your retirement pension</a>, reviewed November 23, 2026</li>
        <li><a href="${OAS}/benefit-amount.html">Government of Canada: OAS, How much you could receive</a>, reviewed November 23, 2026</li>
        <li><a href="${OAS}/after-apply.html">Government of Canada: OAS, After you apply</a>, reviewed November 23, 2026</li>
        <li><a href="${OAS}/recovery-tax.html">Government of Canada: OAS pension recovery tax</a>, reviewed November 23, 2026</li>
        <li><a href="${OAS}/while-receiving.html">Government of Canada: OAS, Receiving your pension</a>, reviewed November 23, 2026</li>
        <li><a href="${CAL}">Government of Canada: Benefit payment dates (OAS 2027)</a>, reviewed November 23, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/oas-eligibility-deferral-canada/">OAS eligibility and deferral</a></li>
        <li><a href="/blog/how-to-apply-for-gis/">How to apply for the Guaranteed Income Supplement</a></li>
        <li><a href="/blog/how-to-apply-for-cpp/">How to apply for CPP</a></li>
        <li><a href="/blog/oas-gis-clawback-canada/">The OAS clawback and how to reduce it</a></li>
        <li><a href="/blog/canada-benefit-payment-dates/">Government benefit payment dates</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>OAS may sign you up by itself. Most other benefits will not.</strong></p>
        <p>The Canadian Government Benefits Guide covers 18 federal benefits, including OAS, the GIS and the Allowances: who qualifies, how much, how to apply and what happens next. $29 CAD.</p>
        <a href="/ebooks/government-benefits-guide/" class="cta-button">See the Government Benefits Guide</a>
    </div>

    ${batchFooter(D, 'Government Benefits', disclaimer)}

</div>`;

export const howToApplyForOasPost = batchPost({
  date: D,
  category: 'Government Benefits',
  categorySlug: 'government-benefits',
  subcategory: 'seniors-cpp-oas',
  slug: 'how-to-apply-for-oas',
  title: 'How to Apply for OAS, or Confirm You Are Signed Up Automatically',
  excerpt:
    'Whether you need to apply for Old Age Security, what to do with the letter at 64, how to apply or delay online or with form ISP-3550, and a dated birthday-to-payment timeline.',
  content,
});
