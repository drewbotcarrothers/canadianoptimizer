import { batchFooter, batchPost } from './types';

const D = '2026-11-26';
const HUB = '/category/taxes/filing-cra/';
const CHG = 'https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/after-you-file/change-return.html';
const TIP = 'https://www.canada.ca/en/revenue-agency/news/newsroom/tax-tips/tax-tips-2026/making-changes-to-your-tax-return-here-what-new-and-how-to-save-time.html';
const FORM = 'https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t1-adj.html';
const NOA = 'https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/after-you-file/noa-nor.html';
const OBJ = 'https://www.canada.ca/en/revenue-agency/services/about-canada-revenue-agency-cra/complaints-disputes/file-objection-cppei-appeal-minister/income-tax-decision-tree.html';
const TIMES = 'https://www.canada.ca/en/revenue-agency/corporate/contact-information/check-cra-processing-times.html';

const disclaimer = `General education, not tax advice. Which changes you can request, how to send them and the processing times come from the Canada Revenue Agency's Changing a tax return page, its T1-ADJ form page, its notice of assessment page, its objections decision tree and its May 12, 2026 tax tip, all read on November 26, 2026. The CRA publishes different processing times on different pages and updates them often, so check its Check CRA processing times tool for the number that applies today. Marcus and his refund are a labelled illustration. Talk to a tax professional about your own file.`;

const content = `<div class="container">

    <div class="hook">
        You filed, the notice of assessment arrived, and then the missing T4 slip or the RRSP receipt turned up in a drawer. <span class="highlight">You do not file a second return: you ask the CRA to adjust the one on file, and the route you choose can change the wait from about two weeks to about twenty.</span> This guide, part of our <a href="${HUB}">filing and CRA hub</a>, compares the three ways to do it and tells you which fits your situation.
    </div>

    <p>To change a tax return the CRA has already assessed, use Change my return in your CRA account or ReFILE in certified tax software. Both are online and the CRA page lists a 2 week processing time. Mailing Form T1-ADJ is the slow option, listed at 20 weeks. You must wait for your notice of assessment first.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Wait for the notice of assessment before asking for a change, and do not send a second request until the CRA answers the first.</li>
            <li>You can add income or a slip, or claim a deduction, credit or expense you missed. You cannot use this route to apply for benefits, change an election or update your address, bank details or marital status.</li>
            <li>Change my return (CRA account) and ReFILE (tax software) are the fast, online routes. Form T1-ADJ on paper is the slow one.</li>
            <li>Online, you send supporting documents only if the CRA asks, after it gives you a case number. By mail you send them all up front.</li>
            <li>If you simply disagree with an assessment, that is an objection, with its own 90-day limit.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#when">When you can ask</a></li>
            <li><a href="#what">What you can and cannot change</a></li>
            <li><a href="#compare">The three routes compared</a></li>
            <li><a href="#how">How each route works</a></li>
            <li><a href="#docs">Supporting documents</a></li>
            <li><a href="#wait">How long it takes</a></li>
            <li><a href="#which">Which route fits your situation</a></li>
            <li><a href="#objection">Change request or objection?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="when">When can you ask the CRA to change your return?</h2>
    <p>Only after you receive your notice of assessment. The CRA's <a href="${CHG}">Changing a tax return</a> page says the return must have been filed by you or your tax preparer, and that if you already submitted a change request you must wait for the CRA's response before you ask for more changes.</p>
    <p>The second rule matters more than it looks. If you find one error today and a second one next week, you cannot just send another request while the first is open. Collect everything first. The CRA's own tip is to include all changes in a single request and double-check the amounts.</p>

    <h2 id="what">What can you change, and what can you not?</h2>
    <p>You can correct amounts and add missing information. The CRA lists three examples: reporting income such as a T4 slip or tips, claiming a deduction, credit or expense such as childcare or medical costs, and adding a missing tax slip such as an RRSP contribution receipt.</p>
    <div class="table-wrapper">
        <table>
            <caption>What a change request can and cannot do (Canada Revenue Agency, read November 26, 2026)</caption>
            <thead><tr><th>You can use it to</th><th>You cannot use it to</th></tr></thead>
            <tbody>
                <tr><td>Report income you left out, such as a T4 slip or tips</td><td>Apply for benefits or credits</td></tr>
                <tr><td>Claim a deduction, credit or expense, such as childcare or medical costs</td><td>Make or revise an election</td></tr>
                <tr><td>Add a missing slip, such as an RRSP contribution receipt</td><td>Allocate a refund to other CRA accounts</td></tr>
                <tr><td></td><td>Update your mailing or email address, direct deposit information, marital status or name</td></tr>
            </tbody>
        </table>
    </div>
    <p>Those personal details are changed separately in your CRA account; our <a href="/blog/cra-my-account-guide/">CRA My Account guide</a> shows where. Missing a slip you will need again next year is a good reason to read the <a href="/blog/tax-record-keeping/">record-keeping guide</a> too.</p>

    <h2 id="compare">How do Change my return, ReFILE and T1-ADJ compare?</h2>
    <p>The two online routes are the same speed and the paper route is much slower. The choice between the online two comes down to where you filed and whether you can sign in to your CRA account.</p>
    <div class="table-wrapper">
        <table>
            <caption>Three ways to change an assessed return (Canada Revenue Agency Changing a tax return page and T1-ADJ form page, read November 26, 2026)</caption>
            <thead><tr><th>Route</th><th>Where</th><th>Listed processing time</th><th>You need</th></tr></thead>
            <tbody>
                <tr class="highlight-row"><td>Change my return</td><td>Your CRA account</td><td>2 weeks</td><td>Access to your CRA account</td></tr>
                <tr><td>ReFILE</td><td>Certified tax software</td><td>2 weeks</td><td>The return was sent with certified tax software; any certified product's ReFILE works</td></tr>
                <tr><td>Form T1-ADJ</td><td>Paper or printed webform, by mail</td><td>20 weeks</td><td>The form plus supporting documents for the entire amount</td></tr>
            </tbody>
        </table>
    </div>
    <p class="did-you-know" data-info-gain><strong>What this page adds:</strong> the three routes in one table with the situations that push you to each, a worked comparison showing the online route lands a refund about 18 weeks sooner on the CRA's own listed times, and a note on how to read the processing-time numbers, because the CRA publishes different ones on different pages.</p>
    <p>The ReFILE service is available daily except 3 am to 6 am ET for maintenance, with a closure from February 2 to 23, 2026 for tax year updates, according to the CRA's page. You do not have to use the same software you filed with, though it may be easier.</p>

    <h2 id="how">How does each route work step by step?</h2>
    <p>Online in your CRA account is the simplest, and the CRA gives the steps. If you changed someone else's return, you must be an authorized representative with at least level 2 access.</p>
    <div class="step-section">
        <div class="step"><span class="step-number">1</span><span class="step-title">Sign in to your CRA account.</span> Select Individual to change your own return, or Representative for someone else's.</div>
        <div class="step"><span class="step-number">2</span><span class="step-title">Open Tax returns.</span> Find and select Change my return.</div>
        <div class="step"><span class="step-number">3</span><span class="step-title">Choose the tax year.</span> Follow the steps to enter the new amounts.</div>
        <div class="step"><span class="step-number">4</span><span class="step-title">Save your confirmation.</span> Keep the confirmation number and the summary of changes for your records.</div>
    </div>
    <p><strong>ReFILE</strong> sits inside certified tax software as the option to change a return. For your own return, the return you are changing must have been filed with certified tax software. For a family member's or friend's return it must have been NETFILE certified software, and you must be an authorized representative with at least level 2 access. Professional preparers must have used EFILE certified software.</p>
    <p><strong>T1-ADJ by mail</strong> is the fallback. Send it separately from your current-year return. The form asks for your SIN, the tax year, your name and address, authorization details if applicable, the adjustment details including revised amounts, and a daytime phone number. Attach supporting documents for the entire amount, including amounts you claimed before but never documented, and mail it all to your tax centre. The CRA's <a href="${FORM}">T1-ADJ page</a> offers a webform you fill in online and then print, which it says may reduce errors.</p>

    <h2 id="docs">Do you have to send supporting documents?</h2>
    <p>Online, only if the CRA asks. The CRA's May 12, 2026 tax tip says that for online requests you provide documents only if the CRA contacts you after you submit, and that it will give you a case number first. You cannot attach anything until you have a case number, and then you submit the documents online through your CRA account using it.</p>
    <p>The same tip says that more than half of online change requests are processed without any supporting documents. By mail, every document goes in the envelope with the form. Keep receipts either way, as <a href="/blog/cra-audit-guide/">the CRA audit guide</a> explains.</p>

    <h2 id="wait">How long does a change take, really?</h2>
    <p>Listed times are 2 weeks online and 20 weeks by mail, but read them as a range and not a promise. The CRA's tip says requests needing additional review may take up to 49 weeks, and requests involving international or non-resident returns, including emigrant returns, may also take longer. Processing times assume all required information is provided upfront.</p>
    <p>The CRA publishes different numbers on different pages. The change-your-return page and the T1-ADJ form page both list 20 weeks for mail, while the May 12 tip describes mailed requests as being handled within an eight-week service standard. Use the CRA's <a href="${TIMES}">Check CRA processing times</a> tool and the progress tracker in your CRA account for the current figure, and do not call: the CRA says the status in your account is the most current and its agents have no more information.</p>
    <div class="example-box">
        <div class="example-title">Illustration: Marcus finds a receipt</div>
        <p>Marcus (a labelled example) filed in the spring and received his notice of assessment. In November he finds a missing RRSP contribution receipt that would add a refund of $600. That $600 is an assumed round figure for the illustration, not a calculation. On the CRA's listed times, an online request takes 2 weeks and a mailed T1-ADJ takes 20 weeks, a difference of 18 weeks. If the CRA asked for documents online, the receipt would be sent through his CRA account with the case number. By mail it would have gone in the envelope on day one.</p>
    </div>
    <p>While you wait, the CRA says you continue to receive the benefits and credits you are eligible for, and any adjustment is applied retroactively once the request is processed.</p>

    <h2 id="which">Which route fits your situation?</h2>
    <p>For most people the answer is Change my return, because it needs no software and no paper. The table maps common situations to a route.</p>
    <div class="table-wrapper">
        <table>
            <caption>Which route to choose (our reading of the CRA's Changing a tax return page)</caption>
            <thead><tr><th>Your situation</th><th>Route</th></tr></thead>
            <tbody>
                <tr><td>You forgot a T4 or other slip, you can sign in to your CRA account</td><td class="highlight-row">Change my return</td></tr>
                <tr><td>You prepared your own return in software and want to stay inside it</td><td>ReFILE</td></tr>
                <tr><td>You cannot access your CRA account and did not use certified software</td><td>T1-ADJ by mail</td></tr>
                <tr><td>You want to apply for a benefit or revise an election</td><td>Not a change request; use the specific benefit or election process</td></tr>
                <tr><td>You changed address, bank account or marital status</td><td>Update your CRA account, not your return</td></tr>
                <tr><td>You never filed a past year, or left out income in a past year</td><td>The CRA's Voluntary Disclosures Program</td></tr>
            </tbody>
        </table>
    </div>
    <p>The CRA's page also has a decision tool that asks whether the return you are changing is for 2016 to 2025 or for 2015 or earlier, and shows the options for each. The Voluntary Disclosures Program grants relief case by case to taxpayers who come forward to fix errors or omissions in their tax affairs, and the CRA says you can apply any time of year as long as the mistake is at least one year past the filing due date.</p>
    <ul class="checklist">
        <li>Confirm you have your notice of assessment for the year.</li>
        <li>Make sure no earlier change request for the same return is still open.</li>
        <li>List every correction and put them in one request.</li>
        <li>Choose Change my return, ReFILE or T1-ADJ using the table above.</li>
        <li>Keep supporting documents ready in case the CRA gives you a case number.</li>
        <li>Check your progress tracker instead of calling.</li>
    </ul>

    <h2 id="objection">Is this a change request or an objection?</h2>
    <p>If information was missing or entered wrongly, ask for a change. If the information is complete but you disagree with the CRA's assessment or reassessment, that is an objection, a formal dispute. The CRA's <a href="${NOA}">notice of assessment page</a> gives you 90 days from the date of your notice to register one.</p>
    <p>The CRA's <a href="${OBJ}">income tax objections decision tree</a> adds that an individual's deadline is whichever is later: one year after the filing deadline for the return (April 30 or June 15), or 90 days after the date on the notice. It also says that if you filed a request to change your return and have not heard back, it may be faster to wait for the CRA to finish the adjustment. If you missed the objection deadline because you were trying to have your return adjusted, you may apply for an extension of up to a year after the objection deadline.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Can I file a second tax return to fix a mistake?</h3>
    <p>No. Ask the CRA to change the assessed return through Change my return, ReFILE or Form T1-ADJ. You must wait for your notice of assessment first.</p>
    <h3>What is the difference between ReFILE and T1-ADJ?</h3>
    <p>ReFILE is the online change service inside certified tax software, listed at 2 weeks. T1-ADJ is the paper form, listed at 20 weeks.</p>
    <h3>Do I need to attach receipts to an online change request?</h3>
    <p>Not at first. The CRA says it will contact you if it needs documents, and give you a case number for submitting them online.</p>
    <h3>Can I change my address or direct deposit on my tax return?</h3>
    <p>No. The CRA says a change request cannot update your address, direct deposit information, marital status or name. Make those changes in your CRA account.</p>
    <h3>Can I ask for a second change while the first is pending?</h3>
    <p>No. The CRA says to wait for its response to the first request before asking for more changes, which is why you should put every correction in one request.</p>
    <h3>What if I left out income years ago?</h3>
    <p>Consider the Voluntary Disclosures Program, which can reduce penalties in many cases. The CRA's page says you can apply at any time of year if the mistake is at least one year past the filing due date.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${CHG}">Government of Canada: Changing a tax return</a>, reviewed November 26, 2026</li>
        <li><a href="${TIP}">Canada Revenue Agency: Making changes to your tax return? Here's what's new and how to save time</a>, May 12, 2026, reviewed November 26, 2026</li>
        <li><a href="${FORM}">Canada Revenue Agency: T1-ADJ T1 Adjustment Request</a>, reviewed November 26, 2026</li>
        <li><a href="${NOA}">Government of Canada: Notices of assessment (NOA or NOR)</a>, reviewed November 26, 2026</li>
        <li><a href="${OBJ}">Canada Revenue Agency: Income tax objections decision tree</a>, reviewed November 26, 2026</li>
        <li><a href="${TIMES}">Canada Revenue Agency: Check CRA processing times</a>, reviewed November 26, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/cra-my-account-guide/">CRA My Account: register, sign in and what to check</a></li>
        <li><a href="/blog/cra-deadlines/">CRA deadlines: every key date</a></li>
        <li><a href="/blog/cra-audit-guide/">CRA audit guide</a></li>
        <li><a href="/blog/tax-record-keeping/">Tax record-keeping guide</a></li>
        <li><a href="/blog/rrsp-deduction-limit-explained/">Your RRSP deduction limit explained</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Most changes happen because a credit or slip was missed the first time.</strong></p>
        <p>The Canadian Optimizer Tax Guide covers the deductions and credits most Canadians leave unclaimed, with the lines to put them on, so the first return is right and the second request is never needed.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">See the Tax Guide</a>
    </div>

    ${batchFooter(D, 'Taxes', disclaimer)}

</div>`;

export const changeTaxReturnRefileT1AdjPost = batchPost({
  date: D,
  category: 'Taxes',
  categorySlug: 'taxes',
  subcategory: 'filing-cra',
  slug: 'change-tax-return-refile-t1-adj',
  title: 'How to Change Your Tax Return: Change My Return, ReFILE or T1-ADJ',
  excerpt:
    'How to change a tax return the CRA has already assessed: Change my return, ReFILE or Form T1-ADJ compared, what you can and cannot change, supporting documents and listed processing times.',
  content,
});
