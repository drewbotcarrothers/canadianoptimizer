import { batchFooter, batchPost } from './types';

const D = '2026-11-23';
const CPP = 'https://www.canada.ca/en/services/benefits/publicpensions/cpp';
const CAL = 'https://www.canada.ca/en/services/benefits/calendar.html';
const HUB = '/category/government-benefits/seniors-cpp-oas/';

const disclaimer = `General education, not financial or tax advice. Rules, processing times, forms and payment dates come from the Government of Canada's CPP retirement pension pages and benefit payment calendar, all read on November 23, 2026. The apply-by dates in the calendar table are our own arithmetic from those published processing times, not dates set by Service Canada. Your own pension amount is in My Service Canada Account. Quebec workers apply to Retraite Québec, not Service Canada.`;

const content = `<div class="container">

    <div class="hook">
        The Canada Pension Plan does not start by itself. <span class="highlight">You have to apply, and the date you submit decides whether your first payment arrives on time.</span> This guide, part of our <a href="${HUB}">CPP, OAS and GIS hub for seniors</a>, walks through who can apply, what to gather, the online and paper routes, and an apply-by calendar for every 2027 start month.
    </div>

    <p>To get the CPP retirement pension you must apply to Service Canada, online through My Service Canada Account or with paper form ISP-1000. You can apply up to 12 months before your chosen start date, at any age from 60. Canada.ca says online decisions arrive within 28 days and mailed applications within 120 days.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>CPP is not automatic. Even at 65 you must apply; only a CPP disability benefit switches over to the retirement pension on its own.</li>
            <li>Pick your start month first. The application asks for it, and starting before 65 cuts the pension for life while starting after 65 raises it.</li>
            <li>Apply online if you can: the stated decision time is 28 days, against 120 days for paper.</li>
            <li>Have your SIN and banking details ready, plus foreign insurance numbers and children's details if they apply to you.</li>
            <li>If you are already past 65, you can ask for up to 11 months of back payments. Before 65, there is no backdating.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#who">Who can apply</a></li>
            <li><a href="#start">Choose the start month first</a></li>
            <li><a href="#gather">What to gather</a></li>
            <li><a href="#online">Apply online</a></li>
            <li><a href="#paper">Apply on paper</a></li>
            <li><a href="#calendar">Apply-by calendar for 2027</a></li>
            <li><a href="#after">After you apply</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="who">Who can apply for the CPP retirement pension?</h2>
    <p>Anyone aged at least 60 who has made at least one valid contribution to the CPP. Canada.ca's <a href="${CPP}/eligibility.html">CPP eligibility page</a> counts contributions from work in Canada and credits received from a spouse or common-law partner after a divorce or separation. There is no income test and you do not need to stop working.</p>
    <ul>
        <li><strong>Working while you collect:</strong> the pension is not reduced if you keep working. If you are under 70 and still contributing, each year of contributions adds a post-retirement benefit that is paid automatically the following year.</li>
        <li><strong>Quebec:</strong> if you only worked in Quebec, or you live in Quebec after working there and in another province, you deal with Retraite Québec and the Québec Pension Plan instead.</li>
        <li><strong>Other countries:</strong> Canada has social security agreements with a number of countries, so years abroad can help you qualify for a pension from both.</li>
    </ul>

    <h2 id="start">When should you decide your start date?</h2>
    <p>Before you open the application, because the form asks for it. The standard age is 65, and you can start as early as 60 or as late as 70, according to Canada.ca's <a href="${CPP}/when-start.html">when to start page</a>.</p>
    <div class="table-wrapper">
        <table>
            <caption>How the start age changes the CPP retirement pension (Canada.ca, read November 23, 2026)</caption>
            <thead>
                <tr><th>Start</th><th>Adjustment per month</th><th>Per year</th><th>Limit</th></tr>
            </thead>
            <tbody>
                <tr><td>Before 65</td><td>−0.6%</td><td>−7.2%</td><td>−36% at age 60</td></tr>
                <tr class="highlight-row"><td>At 65</td><td>None</td><td>None</td><td>Standard amount</td></tr>
                <tr><td>After 65</td><td>+0.7%</td><td>+8.4%</td><td>+42% at age 70</td></tr>
            </tbody>
        </table>
    </div>
    <p>The change is permanent. Waiting past 70 adds nothing, because the maximum monthly amount is reached when you turn 70. For context, Canada.ca's <a href="${CPP}/amount.html">amount page</a> lists a maximum of $1,507.65 a month at 65 (January 2026) and an average of $858.34 a month at 65 (July 2026); your own figure depends on your contribution record. Our guides to <a href="/blog/how-much-cpp-will-i-get/">how much CPP you will get</a> and <a href="/blog/cpp-when-to-take-canada/">when to take CPP</a> cover the decision itself. This page is about the paperwork once you have decided.</p>

    <h2 id="gather">What do you need before you apply?</h2>
    <p>Your Social Insurance Number and your direct deposit details. Canada.ca's <a href="${CPP}/apply.html">apply page</a> lists the rest by situation:</p>
    <div class="table-wrapper">
        <table>
            <caption>What the CPP application asks for, by situation</caption>
            <thead>
                <tr><th>Your situation</th><th>What to have ready</th></tr>
            </thead>
            <tbody>
                <tr><td>Everyone</td><td>SIN; name of your financial institution, branch (transit) number and account number</td></tr>
                <tr><td>Lived or worked outside Canada</td><td>Country name, your insurance number there, and the start and end dates</td></tr>
                <tr><td>Claiming the child-rearing provision</td><td>Each child's full name, SIN and date of birth; proof of the child's entry to Canada if born abroad (for example IMM 1000 records or a full passport); dates you did not receive Family Allowance or were not eligible for the Canada Child Benefit; dates you were not the primary caregiver</td></tr>
                <tr><td>Applying from outside Canada</td><td>The paper form, mailed to the Service Canada office in your last province or territory of residence</td></tr>
                <tr><td>Already on the CPP disability benefit</td><td>Nothing: it changes to the retirement pension automatically at 65</td></tr>
            </tbody>
        </table>
    </div>
    <p class="did-you-know"><strong>Do not skip the child-rearing questions.</strong> If you stayed home or worked less while raising young children, the child-rearing provision can raise your CPP retirement pension, but only if the application has the children's details. Canada.ca says the factors it can apply automatically are the ones you provided in your application.</p>
    <p>Before you start, sign in to My Service Canada Account and look at your Statement of Contributions. It is a detailed record of your CPP contributions and pensionable earnings, with an estimate of your pension if you are eligible now. A missing year is easier to fix before you apply than after.</p>

    <h2 id="online">How do you apply for CPP online?</h2>
    <p>Through My Service Canada Account (MSCA), in three steps. Canada.ca calls it the fast route and gives a decision time of 28 days from when the application is received.</p>
    <div class="step-section">
        <div class="step"><span class="step-number">1</span><span class="step-title">Sign in or register.</span> Use "Apply using MSCA" on the apply page. If you have never registered, do that first; it is a separate step from the application.</div>
        <div class="step"><span class="step-number">2</span><span class="step-title">Open the CPP section.</span> On your dashboard, go to "Canada Pension Plan".</div>
        <div class="step"><span class="step-number">3</span><span class="step-title">Apply.</span> Choose "Apply for Canada Pension Plan retirement pension", enter your start month, banking and any foreign or child-rearing details, and submit.</div>
    </div>
    <p>Keep the confirmation. Once a decision is made, the status shows in MSCA.</p>

    <h2 id="paper">How do you apply for CPP on paper?</h2>
    <p>Fill in form ISP-1000, Application for a Canada Pension Plan Retirement Pension, and mail it. Canada.ca expects a decision within 120 days of receipt, so a paper application needs about four months of lead time.</p>
    <ul>
        <li><strong>Someone helping you deal with Service Canada:</strong> add form ISP-1603 (Consent to Communicate Information to an Authorized Person). It does not let that person apply for you, change your payment address or change tax withholding.</li>
        <li><strong>Applying for someone who cannot manage their own affairs:</strong> a medical professional completes ISP-3505 (Certificate of Incapability), and you add ISP-3506 as a private trustee or ISP-3507 as an agency or institution.</li>
        <li><strong>Living outside Canada:</strong> paper is the only route.</li>
    </ul>
    <p>The downloadable form can appear to keep loading in the browser; Canada.ca's tip is to check your Downloads folder.</p>

    <h2 id="calendar">When should you submit for a 2027 start?</h2>
    <p>As early as the window allows. You can apply 12 months ahead, and working back from Canada.ca's 28-day and 120-day decision times gives the latest dates to submit if you want the decision letter before your pension month begins.</p>
    <div class="table-wrapper">
        <table>
            <caption>Apply-by calendar for a CPP retirement pension starting in 2027 (our arithmetic from Canada.ca processing times; payment dates from the Canada.ca benefit calendar)</caption>
            <thead>
                <tr><th>Pension starts</th><th>Earliest month to apply</th><th>Online: submit by</th><th>Paper: submit by</th><th>First payment date</th></tr>
            </thead>
            <tbody>
                <tr><td>January 2027</td><td>January 2026</td><td>December 4, 2026</td><td>September 3, 2026</td><td>January 27, 2027</td></tr>
                <tr><td>February 2027</td><td>February 2026</td><td>January 4, 2027</td><td>October 4, 2026</td><td>February 24, 2027</td></tr>
                <tr><td>March 2027</td><td>March 2026</td><td>February 1, 2027</td><td>November 1, 2026</td><td>March 25, 2027</td></tr>
                <tr><td>April 2027</td><td>April 2026</td><td>March 4, 2027</td><td>December 2, 2026</td><td>April 28, 2027</td></tr>
                <tr><td>May 2027</td><td>May 2026</td><td>April 3, 2027</td><td>January 1, 2027</td><td>May 27, 2027</td></tr>
                <tr><td>June 2027</td><td>June 2026</td><td>May 4, 2027</td><td>February 1, 2027</td><td>June 28, 2027</td></tr>
                <tr><td>July 2027</td><td>July 2026</td><td>June 3, 2027</td><td>March 3, 2027</td><td>July 28, 2027</td></tr>
                <tr><td>August 2027</td><td>August 2026</td><td>July 4, 2027</td><td>April 3, 2027</td><td>August 27, 2027</td></tr>
                <tr><td>September 2027</td><td>September 2026</td><td>August 4, 2027</td><td>May 4, 2027</td><td>September 27, 2027</td></tr>
                <tr><td>October 2027</td><td>October 2026</td><td>September 3, 2027</td><td>June 3, 2027</td><td>October 27, 2027</td></tr>
                <tr><td>November 2027</td><td>November 2026</td><td>October 4, 2027</td><td>July 4, 2027</td><td>November 26, 2027</td></tr>
                <tr><td>December 2027</td><td>December 2026</td><td>November 3, 2027</td><td>August 3, 2027</td><td>December 22, 2027</td></tr>
            </tbody>
        </table>
    </div>
    <p class="did-you-know" data-info-gain><strong>What the calendar shows:</strong> for every 2027 start month, the earliest month the 12-month window opens, the last day to submit online (28 days before the month) or on paper (120 days before) to have a decision in hand, and the first payment date from Canada.ca's published 2027 calendar. Paper applicants for a January to March 2027 start are already past those dates, so online is the realistic route.</p>
    <p>These are targets, not cut-offs. Submitting after them does not cost you the pension; it only means the decision may arrive after the month you picked. The dates come from the <a href="${CAL}">benefit payment calendar</a>, which already lists 2027. The last 2026 payments are on November 26 and December 22, 2026.</p>

    <h2 id="retro">Can you backdate CPP if you apply late?</h2>
    <p>Only if you are past 65. Canada.ca says that if you apply after 65 you can ask for a start date up to 11 months before the month your application is received, but no earlier than the month after your 65th birthday. If you apply in the month you turn 65 or earlier, there is no retroactivity.</p>
    <div class="example-box">
        <div class="example-title">Illustration: Leila applies late</div>
        <p>Leila (a labelled example) turned 65 in March 2026 and forgot to apply. Her application reaches Service Canada in November 2026. She can ask for a start as early as April 2026, the month after her birthday, which is within 11 months of November. Had she waited until May 2027, the earliest start she could request would be June 2026, and she would lose the months before it.</p>
    </div>
    <p>Two edge cases from the same page: if someone dies in or before the month they turn 70 without applying, their retirement pension cannot be paid to anyone. If they were over 70, the estate can apply within one year of death and may receive the month of death and the 11 months before it, but nothing for the months up to the 70th birthday.</p>

    <h2 id="after">What happens after you apply?</h2>
    <p>You get a decision letter by mail. Canada.ca's <a href="${CPP}/after-apply.html">after you apply page</a> says an approval letter shows your monthly amount and the date of your first payment; a denial gives the reason; or the letter asks for more information.</p>
    <ul>
        <li><strong>Missing documents slow it down.</strong> Processing takes longer if something is missing or Service Canada asks for more.</li>
        <li><strong>Disagree with the decision?</strong> You have 90 days from the date you receive the letter to ask for a reconsideration.</li>
        <li><strong>Check status online.</strong> Paper applicants can register for MSCA afterwards to follow the file and see tax slips later.</li>
        <li><strong>Payment dates.</strong> CPP is paid once a month on the dates in the benefit calendar, usually in the last week of the month and earlier in December.</li>
    </ul>
    <p>Once CPP is in place, check whether you also qualify for Old Age Security and the Guaranteed Income Supplement: see <a href="/blog/how-to-apply-for-oas/">how to apply for OAS</a> and <a href="/blog/how-to-apply-for-gis/">how to apply for the GIS</a>. If you have a spouse or common-law partner, pension sharing can move part of the pension between you to lower your combined tax; our <a href="/blog/cpp-timing-benefits-stacking-canada/">CPP timing and benefits stacking guide</a> shows how the pieces fit.</p>

    <h2>Your CPP application checklist</h2>
    <ul class="checklist">
        <li>Decide your start month (60 to 70) after looking at your estimate in MSCA.</li>
        <li>Check your Statement of Contributions for missing years.</li>
        <li>Gather your SIN and direct deposit details.</li>
        <li>Note foreign insurance numbers and dates if you lived or worked abroad.</li>
        <li>List each child's name, SIN and date of birth if you will claim the child-rearing provision.</li>
        <li>Submit online by the date in the calendar above, or on paper about four months ahead.</li>
        <li>Keep the confirmation and watch for the decision letter.</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Is CPP paid automatically at 65?</h3>
    <p>No. You must apply for the retirement pension. The one exception is the CPP disability benefit, which changes to a retirement pension automatically at 65.</p>
    <h3>How early can I apply for CPP?</h3>
    <p>Up to 12 months before the start date you choose, and the earliest start is age 60.</p>
    <h3>How long does a CPP application take?</h3>
    <p>Canada.ca says to expect a decision within 28 days for an online application and within 120 days for a paper one, counted from when it is received.</p>
    <h3>Can I apply for CPP if I still work?</h3>
    <p>Yes. Working does not reduce the pension, and under 70 your continued contributions earn a post-retirement benefit.</p>
    <h3>What is the CPP application form called?</h3>
    <p>ISP-1000, Application for a Canada Pension Plan Retirement Pension. Most people can use MSCA instead.</p>
    <h3>I live outside Canada. Can I apply online?</h3>
    <p>No. Applications from outside Canada must use the paper form, sent to the Service Canada office for your last province or territory of residence.</p>
    <h3>I worked in Quebec. Do I apply to Service Canada?</h3>
    <p>Not if you only worked in Quebec, or you live in Quebec after working there and elsewhere. Those cases go to Retraite Québec.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${CPP}/apply.html">Government of Canada: CPP retirement pension, Apply</a>, reviewed November 23, 2026</li>
        <li><a href="${CPP}/eligibility.html">Government of Canada: CPP retirement pension, Do you qualify</a>, reviewed November 23, 2026</li>
        <li><a href="${CPP}/when-start.html">Government of Canada: CPP retirement pension, When to start your retirement pension</a>, reviewed November 23, 2026</li>
        <li><a href="${CPP}/amount.html">Government of Canada: CPP retirement pension, How much you could receive</a>, reviewed November 23, 2026</li>
        <li><a href="${CPP}/after-apply.html">Government of Canada: CPP retirement pension, After you apply</a>, reviewed November 23, 2026</li>
        <li><a href="${CAL}">Government of Canada: Benefit payment dates (CPP 2026 and 2027)</a>, reviewed November 23, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/how-much-cpp-will-i-get/">How much CPP will I get?</a></li>
        <li><a href="/blog/cpp-when-to-take-canada/">When to take CPP</a></li>
        <li><a href="/blog/how-to-apply-for-oas/">How to apply for OAS</a></li>
        <li><a href="/blog/how-to-apply-for-gis/">How to apply for the Guaranteed Income Supplement</a></li>
        <li><a href="/blog/canada-benefit-payment-dates/">Government benefit payment dates</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>CPP is one application. OAS, the GIS and the Allowance each have their own rules.</strong></p>
        <p>The Canadian Government Benefits Guide covers 18 federal benefits, including CPP, OAS and the GIS: who qualifies, how much, how to apply and what happens next. $29 CAD.</p>
        <a href="/ebooks/government-benefits-guide/" class="cta-button">See the Government Benefits Guide</a>
    </div>

    ${batchFooter(D, 'Government Benefits', disclaimer)}

</div>`;

export const howToApplyForCppPost = batchPost({
  date: D,
  category: 'Government Benefits',
  categorySlug: 'government-benefits',
  subcategory: 'seniors-cpp-oas',
  slug: 'how-to-apply-for-cpp',
  title: 'How to Apply for CPP: Steps, Documents and When to Submit',
  excerpt:
    'How to apply for the CPP retirement pension online or with form ISP-1000, what to gather, how long a decision takes, and an apply-by calendar for every 2027 start month.',
  content,
});
