import { invFooter, invPost } from './types';

const OBSI = 'https://www.obsi.ca/en/for-consumers/how-the-complaint-process-works/';
const OBSI_LIM = 'https://www.obsi.ca/en/how-we-work/our-approaches/limitation-period/';
const CIPF = 'https://www.cipf.ca/cipf-coverage/about-cipf-coverage';
const CIPF_FAQ = 'https://www.cipf.ca/faq';
const CIRO_C = 'https://www.ciro.ca/complaint-and-inquiry-submission-secure-form';
const CDIC = 'https://www.cdic.ca/depositors/whats-covered/';

export const advisorComplaintObsiCipfCanada = invPost(
  'hands-off',
  'advisor-complaint-obsi-cipf-canada',
  'When an Advisor Gets It Wrong: Complaints, OBSI, CIPF',
  "Firm complaint deadlines, OBSI's 180-day window after a final written response, what CIPF covers and does not, and steps when advice or a firm fails you.",
  `<div class="container">

    <div class="hook">
        Bad advice and a failed brokerage are different disasters. <span class="highlight">OBSI handles many advice and service complaints</span>. CIPF is about missing property if a member firm goes insolvent—not about market losses.
    </div>

    <p>Start with a written complaint to your firm. Banks and federal credit unions have 56 days; investment firms and provincial credit unions have 90 days (60 in Quebec, extendable to 90 in exceptional circumstances). After a final written response, you generally have 180 days to bring the complaint to OBSI. CIPF coverage for individuals is generally up to $1 million per category of accounts (general, registered retirement, and RESPs where you are the subscriber), and it does not cover unsuitable advice or a drop in market value.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Complain in writing to the firm first; keep dates and copies.</li>
            <li>OBSI timelines: 56 days (banks/federal credit unions) or 90/60 days (investment firms); then 180 days after final response to file with OBSI.</li>
            <li>OBSI recommendations are not court orders; firms that refuse can be publicly named.</li>
            <li>CIPF covers missing property on member insolvency within limits—not bad advice, fraud of an issuer, or market losses.</li>
            <li>CDIC covers eligible deposits at member institutions; it is not the same as CIPF.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/hands-off/">Hands-off investing</a>. Also see <a href="/blog/check-financial-advisor-registration-canada/">checking registration</a> and <a href="/blog/transfer-investment-account-leave-advisor-canada/">leaving an advisor</a>.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#firm">How do you complain to the firm?</a></li>
            <li><a href="#obsi">When can you go to OBSI?</a></li>
            <li><a href="#cipf">What does CIPF cover?</a></li>
            <li><a href="#cdic">How is CDIC different?</a></li>
            <li><a href="#example">What would Sam do after a unsuitable advice dispute?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="firm">How do you complain to the firm?</h2>
    <p>Put the complaint in writing. Name the account, the dates, what went wrong, what you want, and attach statements. Use the firm's published complaint process. Escalate inside the firm if the first contact does not resolve it.</p>
    <div class="table-wrapper">
        <table>
            <caption>Firm response windows (from OBSI's process page)</caption>
            <thead><tr><th>Firm type</th><th>Time to help you</th></tr></thead>
            <tbody>
                <tr><td>Bank or federal credit union</td><td>56 days</td></tr>
                <tr class="highlight-row"><td>Investment firm or provincial credit union</td><td>90 days (60 in Quebec; up to 90 in exceptional circumstances)</td></tr>
            </tbody>
        </table>
    </div>

    <h2 id="obsi">When can you go to OBSI?</h2>
    <p>Per <a href="${OBSI}">OBSI's complaint process page</a>, you can contact OBSI if you are not satisfied with the final answer, or if the firm misses its deadline (56 or 90/60 days as above). You have 180 days after the firm's final written response to submit to OBSI. OBSI also describes a six-year limitation concept for when you first raised the issue with the firm—see their <a href="${OBSI_LIM}">limitation period page</a>.</p>
    <div class="flowchart">
        <div class="flow-node decision">Have you complained in writing to the firm?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">No: do that first and calendar the deadline</div>
            <div class="flow-node decision">Final response in, or deadline passed?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">File with OBSI within 180 days of final response</div>
            <div class="flow-node result">Also consider CIRO complaints for regulatory issues</div>
        </div>
    </div>
    <p>OBSI investigates and may recommend compensation. If the firm refuses a recommendation, OBSI can publish the firm's name and findings. Using OBSI does not remove your right to go to court, but legal limitation periods still matter—get legal advice if amounts are large.</p>
    <p>For regulatory misconduct, use <a href="${CIRO_C}">CIRO's complaint form</a>. CIPF itself says it is not a regulator and points complainants to the firm, CIRO and OBSI.</p>

    <h2 id="cipf">What does CIPF cover?</h2>
    <p><a href="${CIPF}">CIPF</a> protects eligible clients if a CIRO member firm becomes insolvent and fails to return property it held for them. Covered property can include cash, securities, futures contracts and segregated funds. Crypto assets are excluded. CIPF does <strong>not</strong> cover market losses, unsuitable investments, poor advice, or issuer bankruptcy when the shares are still in your account.</p>
    <div class="table-wrapper">
        <table>
            <caption>CIPF coverage limits for an individual (from CIPF FAQ)</caption>
            <thead><tr><th>Account category</th><th>Limit</th></tr></thead>
            <tbody>
                <tr><td>General accounts combined (cash, margin, TFSA, FHSA, etc.)</td><td>$1 million</td></tr>
                <tr class="highlight-row"><td>Registered retirement accounts combined (RRSP, RRIF, LIF, etc.)</td><td>$1 million</td></tr>
                <tr><td>RESPs combined (where you are the subscriber)</td><td>$1 million</td></tr>
            </tbody>
        </table>
    </div>
    <p>Claims generally must be filed within 180 days of the insolvency date. Coverage is per member firm, not shared across firms.</p>

    <div class="chart-container">
        <p class="chart-title">Which problem maps to which body? (overview)</p>
        <div class="bar-chart">
            <div class="bar-group"><div class="bar" style="height:90%"></div><span class="bar-label">Firm<br>first</span></div>
            <div class="bar-group"><div class="bar" style="height:80%"></div><span class="bar-label">OBSI<br>dispute</span></div>
            <div class="bar-group"><div class="bar" style="height:70%"></div><span class="bar-label">CIRO<br>conduct</span></div>
            <div class="bar-group"><div class="bar" style="height:60%"></div><span class="bar-label">CIPF<br>insolvency</span></div>
        </div>
        <p class="chart-source">Conceptual overview from OBSI, CIRO and CIPF roles described on their sites. Not a quantitative chart.</p>
    </div>

    <h2 id="cdic">How is CDIC different?</h2>
    <p><a href="${CDIC}">CDIC</a> insures eligible deposits at member financial institutions up to its limits by category. CIPF is about investment dealer / mutual fund dealer insolvency and missing securities or cash in brokerage accounts. Holding a GIC inside a brokerage may raise both questions—read both sites for your product.</p>

    <h2 id="example">What would Sam do after an unsuitable advice dispute?</h2>
    <div class="example-box">
        <strong>Illustrative example: Sam, 55, London, Ontario</strong>
        <div class="example-calculation">
            <div class="line"><span>Day 0</span><span>Written complaint to firm compliance</span></div>
            <div class="line"><span>Day 40</span><span>Still waiting; bank clock is 56 days</span></div>
            <div class="line"><span>Day 60</span><span>Final response rejected by Sam</span></div>
            <div class="line total"><span>Next</span><span>OBSI filing within 180 days</span></div>
        </div>
        <p>Sam also moves new contributions elsewhere while the dispute runs. CIPF is irrelevant here because the firm is solvent and the securities are still in the account. Amounts and outcomes are illustrative.</p>
    </div>

    <h2>Does your province change anything?</h2>
    <p>Quebec residents have a 60-day firm window for investment firms (extendable to 90). Legal limitation periods for court actions differ by province. OBSI's own six-year concept is described on its limitation page.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Written complaint sent and dated</li>
        <li>Firm deadline calendared</li>
        <li>OBSI 180-day deadline calendared after final response</li>
        <li>CIRO complaint considered for conduct issues</li>
        <li>CIPF vs CDIC roles understood</li>
    </ul>


    <h2 id="evidence">What evidence should you keep?</h2>
    <p>Save account applications, KYC / investor profile forms, trade confirmations, email advice, call notes and annual performance and fee reports. Unsuitability cases often turn on what the firm knew about your objectives and risk tolerance. If your profile said "capital preservation" and the account was filled with leveraged products, that paper trail matters.</p>
    <p>Do not rely on verbal promises. After phone calls, send a short email summarizing what you understood and keep the reply. OBSI and regulators work from documents.</p>
    <p>If you fear the firm is near insolvency—an unusual event—read CIPF's client checklist and contact CIRO. Ordinary market losses are not CIPF events even when they feel catastrophic.</p>


    <h2 id="money">How compensation recommendations work at OBSI</h2>
    <p>OBSI describes a fairness-based approach that considers law, regulatory guidance and good industry practice. If OBSI believes compensation is owed, it tries to settle through discussion. If the firm refuses after an official recommendation, OBSI can publish the firm's name and the outcome. That publicity tool matters because OBSI cannot force payment the way a court can.</p>
    <p>Keep expectations realistic. Not every losing investment is unsuitable. Markets fall. What matters is whether the recommendation matched your documented profile and whether disclosure was fair.</p>
    <p>If the dollar amount is large, speak with a lawyer about limitation periods while the OBSI file runs. OBSI's process does not freeze court deadlines in every situation—read their limitation materials and get advice.</p>
    <p>After any dispute, update your banking and brokerage access credentials, review authorized advisors on the account and consider whether a transfer in kind to a new firm is appropriate even before the complaint ends.</p>


    <h2 id="mistakes2">Mistakes that weaken a complaint</h2>
    <ul>
        <li>Only complaining by phone with no written record</li>
        <li>Missing the firm's deadline calendar</li>
        <li>Waiting more than 180 days after a final response to call OBSI</li>
        <li>Expecting CIPF to cover a market loss</li>
        <li>Letting KYC forms stay inaccurate for years</li>
    </ul>
    <p>Written trails win process fights. Even a short email after each call helps. If English or French is not your first language, ask the firm for accommodation and bring a trusted helper to meetings when allowed.</p>
    <p>Do not threaten social media outrage as your primary strategy. Regulators and OBSI respond to documents. Public posts can also complicate legal strategy—ask counsel before broadcasting details.</p>
    <p>If you are a joint account holder, coordinate with the co-holder so the firm receives one clear complaint narrative.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>How long do I have to go to OBSI?</h3>
    <p>180 days after the firm's final written response, per OBSI. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Does CIPF cover bad advice?</h3>
    <p>No. CIPF covers missing property on member insolvency within limits. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Does CIPF cover crypto?</h3>
    <p>Crypto assets held by a member are not eligible for CIPF coverage, per CIPF. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Is OBSI free?</h3>
    <p>Yes. OBSI's banking ECB materials and consumer pages describe a free service. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>What if my firm is not in OBSI?</h3>
    <p>Use OBSI's find-your-firm tools. Not every firm participates. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Should I also call CIRO?</h3>
    <p>Yes when you believe rules were broken. That is separate from seeking compensation through OBSI. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>What is the CIPF limit for my RRSP?</h3>
    <p>Generally up to $1 million for all registered retirement accounts combined at that member firm, per CIPF's FAQ. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>


    <h2 id="together">Putting protection and complaints in perspective</h2>
    <p>Most investing years will never involve OBSI or CIPF. The systems exist for when ordinary conversations fail or when a firm fails. Knowing the map reduces panic time when something goes wrong. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>Prevention still beats process: verify registration before you hire, keep KYC forms accurate, read fee reports and walk away from pressure tactics. Our registration and questions-to-ask guides are the front line. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>If you are helping aging parents, confirm you have legal authority before firms will speak with you. Complaint timelines still run while families organize paperwork. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>Separate emotional losses from legal claims. A stock that fell 40% after a fair, documented recommendation is painful and usually not an OBSI win. An undocumented switch into high-risk products for a client labelled conservative is a different story. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>Keep CIPF and CDIC bookmarks beside your brokerage login. Knowing which lock protects which door is basic Canadian financial literacy. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>

    <p>Time matters. Photograph or PDF every statement while you still have portal access. Firms can restrict access during disputes or insolvency. Export CSV trade histories early. If you use a spouse as trading authority, document that authority before you need it. Finally, remember that transferring away from a firm does not cancel a complaint you already filed—ask OBSI or the firm how an account transfer affects the file so you do not accidentally stall your own case.</p>

    <p>If your complaint involves a deceased account holder, estates need probate or other authority documents before firms and OBSI will engage fully. Start that paperwork early; complaint clocks do not always wait for families to organize.</p>

    <p>Name a backup contact who can find your complaint folder if you are travelling.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${OBSI}">OBSI: How the complaint process works</a>, reviewed October 24, 2026</li>
        <li><a href="${OBSI_LIM}">OBSI: Limitation period</a>, reviewed October 24, 2026</li>
        <li><a href="${CIPF}">CIPF: About CIPF coverage</a>, reviewed October 24, 2026</li>
        <li><a href="${CIPF_FAQ}">CIPF: FAQs</a>, reviewed October 24, 2026</li>
        <li><a href="${CDIC}">CDIC: What's covered</a>, reviewed October 24, 2026</li>
        <li><a href="${CIRO_C}">CIRO: Complaint and inquiry submission</a>, reviewed October 24, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/check-financial-advisor-registration-canada/">Check advisor registration</a></li>
        <li><a href="/blog/transfer-investment-account-leave-advisor-canada/">Leave your advisor</a></li>
        <li><a href="/blog/is-a-financial-advisor-worth-it-canada/">Is a 1% advisor worth it?</a></li>
        <li><a href="/blog/fee-only-advice-only-planners-canada/">Fee-only planners</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Document the tax cost of a forced sale before you act.</strong></p>
        <p>The 2026 tax guide covers capital gains and account transfers at a high level so you can ask better questions while a complaint runs.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about complaint and coverage processes as of October 24, 2026. Not legal advice. The Sam example is illustrative.", "October 24, 2026")}

</div>`,
  '2026-10-24'
);
