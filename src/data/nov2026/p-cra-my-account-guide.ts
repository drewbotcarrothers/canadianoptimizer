import { batchFooter, batchPost } from './types';

const D = '2026-11-26';
const HUB = '/category/taxes/filing-cra/';
const CRA = 'https://www.canada.ca/en/revenue-agency';
const ES = `${CRA}/services/e-services`;
const HELP = `${ES}/cra-login-services/help-cra-sign-in-services`;

const disclaimer = `General education, not tax advice. How to register, which sign-in options exist, what you can see before and after identity verification and the multi-factor authentication rules all come from the Canada Revenue Agency's CRA account pages and its October 29, 2026 tax tip, read on November 26, 2026. The CRA changes these services often, so confirm the current steps on Canada.ca before you register, and talk to a tax professional about your own file. Priya is a labelled illustration, not a real person.`;

const content = `<div class="container">

    <div class="hook">
        Most people meet their CRA account for the first time in the middle of filing season, when a slip is missing or a refund is late, and then discover that signing up takes days. <span class="highlight">Register or confirm your sign-in in November and the account does most of the filing work for you in February.</span> This guide, part of our <a href="${HUB}">filing and CRA hub</a>, covers how to register, which sign-in option to pick, and what to check each year.
    </div>

    <p>My Account is the part of your CRA account where you view and manage your personal income tax and benefit information. You can use it with a social insurance number and a filed and assessed return from the current or previous tax year. Register with a sign-in option, add multi-factor authentication, then verify your identity (CRA, November 2026).</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>You need a SIN and an assessed return from this or last tax year, so a first-time filer cannot register until the notice of assessment arrives.</li>
            <li>The option you register with is the one you use at every sign-in: CRA user ID and password, a Sign-In Partner (online banking) or a provincial partner (BC Services Card or Alberta.ca Account).</li>
            <li>Verify your identity with the document verification service for immediate full access, or wait up to 10 business days for a mailed security code.</li>
            <li>Only one multi-factor authentication method is mandatory, but the CRA asks you to add a backup, and so should you.</li>
            <li>Check the account once a year before you file, then again after your notice of assessment arrives.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#who">Who can use My Account</a></li>
            <li><a href="#register">How to register</a></li>
            <li><a href="#options">Which sign-in option to choose</a></li>
            <li><a href="#verify">Verifying your identity</a></li>
            <li><a href="#mfa">Multi-factor authentication</a></li>
            <li><a href="#locked">If you are locked out</a></li>
            <li><a href="#yearly">What to check each year</a></li>
            <li><a href="#others">Someone else's account</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="who">Who can use CRA My Account?</h2>
    <p>Anyone with a social insurance number (SIN) and a filed and assessed income tax and benefit return from the current or previous tax year. That is the test on the CRA's <a href="${ES}/digital-services-individuals/account-individuals/about-account.html">About My Account</a> page. If you have no SIN, the registration page also accepts a temporary tax number or an individual tax number.</p>
    <p>The practical effect is timing. If you filed your first return this spring, the account was out of reach until the notice of assessment came back. If you skipped filing for the last two years, you will have to file first.</p>
    <p>My Account is one door into a CRA account that also holds My Business Account, Represent a Client and other accounts. You register once and use the same sign-in for all of them, according to the CRA's <a href="${ES}/cra-login-services/register-cra-sign-in-services.html">registration page</a>.</p>

    <h2 id="register">How do you register for a CRA account?</h2>
    <p>In five steps, and the first one is the one people skip: gather what you need before you start, because the session expires after 18 minutes of inactivity and nothing is saved. The CRA's registration page lists the steps.</p>
    <div class="step-section">
        <div class="step"><span class="step-number">1</span><span class="step-title">Gather your details.</span> Your date of birth and SIN, plus amounts you reported on your most recent assessed return from the last 2 years. Use the amounts you first reported, even if a reassessment later changed them.</div>
        <div class="step"><span class="step-number">2</span><span class="step-title">Choose a registration option.</span> CRA user ID and password, a Sign-In Partner, or a provincial partner. The next section compares them.</div>
        <div class="step"><span class="step-number">3</span><span class="step-title">Enroll in multi-factor authentication.</span> A one-time passcode is required at every sign-in. First-time registrants are prompted to enrol in 2 options.</div>
        <div class="step"><span class="step-number">4</span><span class="step-title">Verify your identity.</span> With the document verification service on a mobile device, or with a security code mailed to you.</div>
        <div class="step"><span class="step-number">5</span><span class="step-title">Add other accounts.</span> Business, representative and other accounts can be added after you sign in.</div>
    </div>
    <p>For immediate access you also need a mobile device with a camera and an accepted piece of ID. Without one, plan around the mail.</p>

    <h2 id="options">Which sign-in option should you choose?</h2>
    <p>The one you will actually remember, because the CRA says the option you register with is the one you use every time you sign in. There are three, and GC Key is not one of them: the CRA states you cannot use GC Key to sign in to your CRA account.</p>
    <div class="table-wrapper">
        <table>
            <caption>The three CRA account sign-in options (CRA, read November 26, 2026; the last column is our own view)</caption>
            <thead><tr><th>Option</th><th>How it works</th><th>Best for</th></tr></thead>
            <tbody>
                <tr><td>CRA user ID and password</td><td>You create a username and password just for the CRA</td><td>People who want the CRA login separate from their bank, and who use a password manager</td></tr>
                <tr class="highlight-row"><td>Sign-In Partner</td><td>You use your online banking sign-in at a participating bank or credit union</td><td>People who already sign in to a participating institution every week</td></tr>
                <tr><td>Provincial partner</td><td>You use a BC Services Card or an Alberta.ca Account</td><td>British Columbia and Alberta residents who already have one</td></tr>
            </tbody>
        </table>
    </div>
    <p>The CRA's sign-in page lists the current Sign-In Partners, and the list includes RBC Royal Bank, TD Bank Group, Scotiabank, BMO Financial Group, CIBC, National Bank of Canada, Desjardins, Tangerine, Simplii Financial and Wealthsimple, among others. Check that your institution is on it before choosing this route.</p>
    <p class="did-you-know" data-info-gain><strong>What this page adds:</strong> a yearly CRA account checklist that follows the tax calendar, from a November sign-in test through the notice of assessment, and a table of exactly which services work before you verify your identity and which only unlock afterwards, so you know what to expect while the mailed code is in transit.</p>
    <p><strong>A warning about banking credentials.</strong> The CRA tells you not to use autofill on a shared device. If you register with someone else's banking credentials by mistake and link your SIN to them, the other person gets access to your tax information.</p>

    <h2 id="verify">How do you verify your identity?</h2>
    <p>Choose between two methods. The document verification service gives full, immediate access. The CRA security code is mailed to the address the CRA has on file within 10 business days, and it expires, so use it as soon as it arrives. The CRA's <a href="${HELP}/verify-identity.html">verify your identity</a> page sets out both.</p>
    <ul>
        <li><strong>Document verification service:</strong> you must be at least 16 years old, have an accepted government-issued photo ID and a mobile device with a working camera. Accepted documents include a Canadian driver's licence, a Canadian passport, a permanent resident card and a provincial or territorial photo ID card. Provincial health cards are not accepted.</li>
        <li><strong>CRA security code:</strong> you enter your postal code, and if it does not match the CRA's record you have to update your address first. If the code has not arrived after 10 business days, use the document verification service or contact the CRA for a new one.</li>
    </ul>
    <div class="table-wrapper">
        <table>
            <caption>What My Account lets you do before and after identity verification (CRA verify-your-identity page, read November 26, 2026)</caption>
            <thead><tr><th>Before verification (limited access)</th><th>After verification (full access)</th></tr></thead>
            <tbody>
                <tr><td>View the status of your tax return</td><td>Apply for benefits</td></tr>
                <tr><td>View your RRSP deduction limit and TFSA contribution room</td><td>Update your personal information</td></tr>
                <tr><td>View your notice of assessment or reassessment</td><td>Everything in the limited list</td></tr>
                <tr><td>Request a remittance voucher, set up pre-authorized debit, change notification preferences</td><td></td></tr>
            </tbody>
        </table>
    </div>
    <p>Limited access is enough to find your RRSP room before a contribution deadline; our guide to <a href="/blog/rrsp-deduction-limit-explained/">reading your RRSP deduction limit</a> shows where it sits on the notice. It is not enough to change your address or direct deposit, so do not wait for a mailed code in the week before a payment is due.</p>

    <h2 id="mfa">What is multi-factor authentication and which method should you pick?</h2>
    <p>It is a one-time passcode you enter in addition to your password at every sign-in, and it is mandatory for all CRA account users. The CRA offers three methods, and you should enrol in at least two, even though only one is required.</p>
    <ul>
        <li><strong>Third-party authenticator app:</strong> a free app that makes a 6-digit code, renewed every 30 seconds. You do not need to pay for one.</li>
        <li><strong>Passcode grid:</strong> a grid the CRA generates for you to save or print.</li>
        <li><strong>Phone:</strong> a code sent by text or phone call. If you use a VoIP service, choose the Call me option instead of Text me.</li>
    </ul>
    <p>The CRA says a backup protects you if you change your phone number, cannot reach your text messages, misplace the grid or delete the app. After you sign in, the Welcome page lets you add or change a method. Never read a passcode to anyone: the CRA says it will never call and ask for your one-time passcode.</p>

    <h2 id="locked">What if you are locked out or forgot your sign-in?</h2>
    <p>You may be able to regain access without calling. The CRA's sign-in page says users locked out because they forgot their credentials can register again for a new credential. If you forgot your user ID, the recovery steps need your SIN, your date of birth, the amount you entered on line 15000 of your most recent return from one of the previous 2 tax years, and the answers to your security questions.</p>
    <ul>
        <li><strong>Forgot your password:</strong> choose CRA user ID and password, select Forgot your password, enter your user ID and answer your security questions.</li>
        <li><strong>No passcode arrived:</strong> ask for it again, send it to another number you registered, or fall back to your grid or app.</li>
        <li><strong>Account locked:</strong> it locks after too many wrong entries, and the CRA's help page lists the steps.</li>
    </ul>
    <p>Be sceptical of any message that says your account is suspended. The CRA states it will not send you an email with a link asking you to sign in, and it keeps a scam alerts page for fake websites and messages. Type the address yourself or use the Canada.ca link instead.</p>

    <h2 id="yearly">What should you check in your CRA account each year?</h2>
    <p>Six things, in this order. The CRA's October 29, 2026 tax tip tells taxpayers to register or confirm they can sign in before tax season, and says a working account helps you use pre-filled returns, Auto-fill My Return in tax software and secure NETFILE or EFILE authentication when you file a 2026 return.</p>
    <div class="table-wrapper">
        <table>
            <caption>A yearly CRA account checklist (our schedule, built from the CRA's October 29, 2026 tax tip and account help pages)</caption>
            <thead><tr><th>When</th><th>What to check</th><th>Why it matters</th></tr></thead>
            <tbody>
                <tr><td>November to January</td><td>Sign in, and add a backup passcode method</td><td>A lockout in March costs days; the identity steps can take up to 10 business days by mail</td></tr>
                <tr><td>November to January</td><td>Confirm your address, marital status and phone number, and set correspondence to electronic mail</td><td>Wrong details stop letters and benefit payments</td></tr>
                <tr class="highlight-row"><td>Before you file</td><td>Look at your RRSP deduction limit and TFSA room</td><td>Contribution deadlines are not flexible; see <a href="/blog/rrsp-deadline-first-60-days/">the RRSP deadline guide</a></td></tr>
                <tr><td>When you file</td><td>Use Auto-fill My Return or a pre-filled return if you qualify</td><td>It pulls slips straight from the CRA and cuts typing errors</td></tr>
                <tr><td>After you file</td><td>Check the status of the return in your account and read your notice of assessment</td><td>The notice shows your refund or balance and your new limits</td></tr>
                <tr><td>Each month</td><td>Watch your benefit and credit payments and any new mail</td><td>A missing payment is easiest to explain from the account</td></tr>
            </tbody>
        </table>
    </div>
    <div class="example-box">
        <div class="example-title">Illustration: Priya checks in November</div>
        <p>Priya (a labelled example) filed last spring and has never signed in. In November she signs in with her bank's Sign-In Partner option, finds that she has no backup passcode method and adds an authenticator app, then updates her phone number. In February her tax software offers Auto-fill My Return, and she uses it. If her slips had been missing, her account would have shown why. The work took one sitting instead of a rushed week in April.</p>
    </div>
    <p>If something on a return turns out to be wrong after it is assessed, the account is also where you change it; see <a href="/blog/change-tax-return-refile-t1-adj/">how to change your tax return with ReFILE or T1-ADJ</a>.</p>

    <h2 id="others">Can you use My Account for someone else?</h2>
    <p>Not with your own sign-in. To see a friend's or family member's information you must be their authorized representative and use Represent a Client in your own CRA account. The CRA also says My Account cannot be used to access a deceased person's information: an executor uses Represent a Client for that. Our guide to the <a href="/blog/final-tax-return-deceased-canada/">final return for a deceased person</a> covers what the executor files.</p>

    <h2>Your CRA account setup checklist</h2>
    <ul class="checklist">
        <li>Confirm you have a SIN and an assessed return from this or last tax year.</li>
        <li>Pick the sign-in option you will remember in a year.</li>
        <li>Choose the document verification service if you have a photo ID and a camera.</li>
        <li>Enrol in two passcode methods, not one.</li>
        <li>Update your address, phone number and marital status, and set electronic mail.</li>
        <li>Save the CRA's scam alert page and ignore sign-in links in emails.</li>
    </ul>
    <p>For the dates this all feeds into, see <a href="/blog/cra-deadlines/">the CRA deadlines guide</a>.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Is CRA My Account the same as a CRA account?</h3>
    <p>No. Your CRA account is the sign-in that opens several services. My Account is the personal one, for your own income tax and benefits.</p>
    <h3>How long does it take to get access to My Account?</h3>
    <p>Immediately with the document verification service. By mail, the CRA security code arrives within 10 business days, and you get limited access to My Account until you enter it.</p>
    <h3>Can I register if I have never filed a tax return?</h3>
    <p>Not for My Account. You need an assessed return from the current or previous tax year, so file first and register after the notice of assessment arrives.</p>
    <h3>Can I use GC Key to sign in to My Account?</h3>
    <p>No. The CRA says GC Key can be used with other federal departments but not to sign in to your CRA account.</p>
    <h3>What if my security code expired?</h3>
    <p>Use the document verification service instead, or sign in to request a new code by mail.</p>
    <h3>Can I see my RRSP limit before my identity is verified?</h3>
    <p>Yes. The CRA lists your RRSP deduction limit and TFSA contribution room among the limited-access services.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${ES}/digital-services-individuals/account-individuals/about-account.html">Canada Revenue Agency: About My Account</a>, reviewed November 26, 2026</li>
        <li><a href="${ES}/cra-login-services/register-cra-sign-in-services.html">Canada Revenue Agency: Register for a CRA account</a>, reviewed November 26, 2026</li>
        <li><a href="${HELP}/verify-identity.html">Canada Revenue Agency: Verify your identity</a>, reviewed November 26, 2026</li>
        <li><a href="${HELP}/multi-factor-authentication.html">Canada Revenue Agency: Multi-factor authentication</a>, reviewed November 26, 2026</li>
        <li><a href="${ES}/digital-services-individuals/account-individuals.html">Canada Revenue Agency: Sign in to your CRA account</a>, reviewed November 26, 2026</li>
        <li><a href="${CRA}/news/newsroom/tax-tips/tax-tips-2026/do-not-wait-until-tax-time-to-take-action-in-your-cra-account.html">Canada Revenue Agency: Don't wait until tax time to take action in your CRA account</a>, October 29, 2026, reviewed November 26, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/cra-deadlines/">CRA deadlines: every key date</a></li>
        <li><a href="/blog/tax-record-keeping/">Tax record-keeping guide</a></li>
        <li><a href="/blog/best-tax-software/">Best Canadian tax software</a></li>
        <li><a href="/blog/rrsp-deduction-limit-explained/">Your RRSP deduction limit explained</a></li>
        <li><a href="/blog/change-tax-return-refile-t1-adj/">How to change your tax return: ReFILE vs T1-ADJ</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>A working CRA account makes the return itself faster. The return still has dozens of lines that cost money.</strong></p>
        <p>The Canadian Optimizer Tax Guide walks through the T1 line by line, including the credits and deductions people miss when they let software fill in the blanks.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">See the Tax Guide</a>
    </div>

    ${batchFooter(D, 'Taxes', disclaimer)}

</div>`;

export const craMyAccountGuidePost = batchPost({
  date: D,
  category: 'Taxes',
  categorySlug: 'taxes',
  subcategory: 'filing-cra',
  slug: 'cra-my-account-guide',
  title: 'CRA My Account: How to Register, Sign In and What to Check',
  excerpt:
    'Who can use CRA My Account, how to register and verify your identity, which sign-in option to pick, how multi-factor authentication works, and a yearly checklist of what to review.',
  content,
});
