import { invFooter, invPost } from './types';

const CIPF = 'https://www.cipf.ca/cipf-coverage/about-cipf-coverage';
const CIPF_FAQ = 'https://www.cipf.ca/faq';
const CDIC = 'https://www.cdic.ca/depositors/whats-covered/';
const CIRO = 'https://www.ciro.ca/';

export const cipfVsCdicOnlineBrokerCanada = invPost(
  undefined,
  'cipf-vs-cdic-online-broker-canada',
  'Is Your Money Safe at an Online Broker? CIPF vs CDIC',
  'CIPF covers missing securities if a CIRO dealer fails, within category limits. CDIC covers eligible deposits. What each protects—and what neither covers.',
  `<div class="container">

    <div class="hook">
        Online brokerages feel intangible. The real question is not "is the app safe?" It is <span class="highlight">which lock protects which asset</span> when an institution fails.
    </div>

    <p>CIPF protects eligible clients if a CIRO member investment dealer or mutual fund dealer becomes insolvent and fails to return property it held for them. For an individual, limits are generally $1 million for general accounts, $1 million for registered retirement accounts and $1 million for RESPs where you are the subscriber. CDIC insures eligible deposits at member financial institutions up to its category limits. CIPF does not cover market losses or bad advice. CDIC does not cover stocks held at a brokerage.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>CIPF = missing securities/cash at a failed CIRO member dealer (within limits). Not market losses.</li>
            <li>CDIC = eligible deposits at member banks/trusts/loan companies (within category limits).</li>
            <li>Confirm your broker is a CIPF member on cipf.ca. Confirm deposit products on cdic.ca.</li>
            <li>Crypto assets held by a CIPF member are not CIPF-eligible.</li>
            <li>Both systems can matter in one household: cash at a bank (CDIC) and ETFs at a broker (CIPF).</li>
        </ul>
    </div>

    <p>This guide sits under <a href="/category/investing/">Investing</a> as a start-here account-safety article. For complaint paths when advice fails (not insolvency), see <a href="/blog/advisor-complaint-obsi-cipf-canada/">OBSI, CIRO and CIPF</a>.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#cipf">What does CIPF cover?</a></li>
            <li><a href="#limits">What are the CIPF limits?</a></li>
            <li><a href="#cdic">What does CDIC cover?</a></li>
            <li><a href="#both">When do you need both?</a></li>
            <li><a href="#check">How do you check coverage?</a></li>
            <li><a href="#example">How would the Okonks map their accounts?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="cipf">What does CIPF cover?</h2>
    <p>Per <a href="${CIPF}">CIPF's coverage page</a>, CIPF covers missing property—cash, securities, futures contracts and segregated funds—held by a member firm for an eligible client when the firm becomes insolvent and cannot return that property. It does not cover a drop in market value, unsuitable advice, issuer default, or crypto assets held by the member.</p>
    <p>If you held 100 shares and those shares are returned after an insolvency, CIPF's job is done even if the shares are worth less than you paid. That distinction is the most common misunderstanding.</p>

    <div class="table-wrapper">
        <table>
            <caption>CIPF vs CDIC at a glance (from CIPF FAQ and CDIC pages)</caption>
            <thead><tr><th>Question</th><th>CIPF</th><th>CDIC</th></tr></thead>
            <tbody>
                <tr class="highlight-row"><td>Triggers when</td><td>Member dealer insolvent; property missing</td><td>Member deposit-taker fails</td></tr>
                <tr><td>Typical assets</td><td>Securities and cash in brokerage accounts</td><td>Eligible deposits (savings, GICs, etc.)</td></tr>
                <tr><td>Market losses</td><td>Not covered</td><td>Not applicable to deposits at par</td></tr>
                <tr><td>Bad advice</td><td>Not covered</td><td>Not covered</td></tr>
                <tr><td>Where to verify</td><td>cipf.ca member lists</td><td>cdic.ca member / what's covered</td></tr>
            </tbody>
        </table>
    </div>

    <h2 id="limits">What are the CIPF limits?</h2>
    <p>CIPF's FAQ states that for an individual the limits are generally:</p>
    <ul>
        <li>$1 million for all general accounts combined (cash, margin, TFSAs, FHSAs, etc.)</li>
        <li>$1 million for all registered retirement accounts combined (RRSPs, RRIFs, LIFs, etc.)</li>
        <li>$1 million for RESPs combined where you are the subscriber</li>
    </ul>
    <p>Coverage is per member firm, not shared across firms. Claims generally must be filed within 180 days of the insolvency date. Mutual fund dealer accounts located in Québec have special eligibility rules described on CIPF's site.</p>

    <div class="chart-container">
        <p class="chart-title">CIPF individual category limits (conceptual)</p>
        <div class="bar-chart">
            <div class="bar-group"><div class="bar" style="height:100%"></div><span class="bar-label">General<br>$1M</span></div>
            <div class="bar-group"><div class="bar" style="height:100%"></div><span class="bar-label">Retirement<br>$1M</span></div>
            <div class="bar-group"><div class="bar" style="height:100%"></div><span class="bar-label">RESP<br>$1M</span></div>
        </div>
        <p class="chart-source">Source: CIPF FAQ coverage limits. Chart heights are equal because each published category limit is $1 million.</p>
    </div>

    <h2 id="cdic">What does CDIC cover?</h2>
    <p><a href="${CDIC}">CDIC</a> protects eligible deposits at member institutions. Coverage is organized by categories (for example deposits in one name, joint deposits, trusts, and certain registered plans) with a standard limit per category per member. Exact category rules and current dollar limits belong on CDIC's page—read them for your product rather than memorizing a single number from a blog.</p>
    <p>Stocks, bonds and ETFs held in a brokerage account are not CDIC deposits. A GIC bought as a deposit at a CDIC member may be covered; a GIC held as a security inside a brokerage raises CIPF questions instead. Product packaging matters.</p>

    <h2 id="both">When do you need both?</h2>
    <div class="flowchart">
        <div class="flow-node decision">Is the asset a deposit at a bank/credit-union CDIC member?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Yes: check CDIC categories and limits</div>
            <div class="flow-node decision">Is it securities/cash at a CIRO dealer?</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">Yes: check CIPF membership and category limits</div>
            <div class="flow-node result">Crypto at a dealer: usually outside CIPF—read CIPF crypto FAQ</div>
        </div>
    </div>
    <p>Many households correctly use both: emergency cash at a CDIC member and long-term ETFs at a CIPF member broker.</p>

    <h2 id="check">How do you check coverage?</h2>
    <ul class="checklist">
        <li>Find your dealer's legal name on your statement</li>
        <li>Search CIPF investment dealer / mutual fund dealer member lists</li>
        <li>For bank deposits, search CDIC's member tools and what's-covered page</li>
        <li>Ask the firm in writing which protection applies to each product</li>
        <li>Keep statements and confirmations exportable</li>
    </ul>

    <h2 id="example">How would the Okonks map their accounts?</h2>
    <div class="example-box">
        <strong>Illustrative example: the Okonks, Toronto</strong>
        <div class="example-calculation">
            <div class="line"><span>Emergency savings at a CDIC member bank</span><span>CDIC categories</span></div>
            <div class="line"><span>TFSA + RRSP ETFs at a CIPF broker</span><span>CIPF general + retirement</span></div>
            <div class="line"><span>RESP at the same broker</span><span>CIPF RESP category</span></div>
            <div class="line total"><span>Market drop of 20%</span><span>Neither CIPF nor CDIC pays</span></div>
        </div>
        <p>They stop worrying about "app safety" and start verifying legal entity names. Amounts are illustrative.</p>
    </div>

    <h2>Does your province change anything?</h2>
    <p>CIPF's Québec mutual-fund-dealer rule is the main geographic nuance called out on CIPF's site. CDIC is a federal deposit insurer for members. Provincial credit unions may use different deposit insurers—check your institution.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Broker legal name matched to CIPF list</li>
        <li>Bank deposits checked against CDIC</li>
        <li>Crypto and exotic products flagged as often uncovered</li>
        <li>Large balances reviewed against category limits</li>
        <li>OBSI/CIRO paths bookmarked for advice disputes</li>
    </ul>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Does CIPF cover ETFs?</h3>
    <p>Yes, if the ETF units are held by a CIPF member for an eligible client. CIPF returns the units or their value at insolvency if missing—it does not guarantee market value.</p>
    <h3>Does CIPF cover a stock that went to zero?</h3>
    <p>No. Issuer failure and market losses are not CIPF events when the security is still in your account.</p>
    <h3>Is my TFSA under CIPF or CDIC?</h3>
    <p>A TFSA full of ETFs at a broker is a CIPF general-account category item. A TFSA that is only a bank deposit product may be CDIC—read the product.</p>
    <h3>Are the limits $1 million total?</h3>
    <p>No. CIPF describes separate $1 million limits for general, registered retirement and RESP categories for an individual.</p>
    <h3>Does CDIC cover GICs at my broker?</h3>
    <p>Only if the GIC is structured as a CDIC-eligible deposit at a member. Many brokerage holdings are securities under CIPF instead. Ask the firm.</p>
    <h3>What about crypto?</h3>
    <p>CIPF says crypto assets held by a member are not eligible for CIPF coverage. Some related fund units may be treated differently—read the FAQ.</p>
    <h3>Where do I complain about bad advice?</h3>
    <p>Firm first, then OBSI/CIRO as appropriate. That is not a CIPF claim. See our complaint guide.</p>

    <h2>Putting protection on one page</h2>
    <p>Write each account, the legal entity, and whether CIPF or CDIC applies. Update when you change firms. Share the page with a spouse. Most years you will never need it. The year you do, the map saves days.</p>
    <p>Do not confuse marketing slogans ("your money is safe with us") with a named statutory or industry fund. Ask which legal protection applies and keep the link.</p>
    <p>Large taxable brokerage balances above a category limit are a reason to consider multiple CIPF members or a barbell with CDIC cash—not a reason to panic about normal volatility.</p>
    <p>Business accounts and trusts have different CIPF and CDIC treatments. Read the institutional pages before assuming personal limits apply.</p>
    <p>If a firm fails, follow CIPF's insolvency checklist and any court-appointed trustee instructions. File claims within the stated window.</p>
    <p>Keep this article beside your brokerage login bookmarks together with cipf.ca and cdic.ca. Verification beats reassurance posts on social media.</p>
    <p>Finally, remember that diversification and low costs still matter more for long-term outcomes than which logo is on the app—coverage is a backstop, not a return engine. Build the portfolio as if markets will move; hold it at firms you have verified.</p>
    <p>Parents and adult children helping elders should verify accounts together once a year. Access rights and legal names are easier to fix before an emergency than during one.</p>


    <h2>Putting CIPF and CDIC into a household checklist</h2>
    <p>Write each account on one page: legal entity name, product type, and whether CIPF or CDIC applies. Update the page when you change firms or open a RESP. Share it with anyone who co-owns the money so a spouse is not guessing during a stress event.</p>
    <p>Re-check official membership lists after a corporate rebrand. Marketing names change; CIPF and CDIC care about the legal dealer or deposit-taker. Keep a PDF or screenshot of the member page with the review date in the filename.</p>
    <p>Separate market risk from institutional protection in family conversations. A 20% drawdown is not a CIPF claim. Teaching that difference once prevents panic calls to support lines that cannot reverse prices.</p>
    <p>If balances approach a published category limit, ask the firm how accounts are grouped before you move money. Splitting across members can be rational; it is not free if it creates tax or transfer friction.</p>
    <p>Parents helping adult children, and adult children helping elders, should verify access rights and beneficiaries in the same sitting as coverage checks. Coverage does not fix a locked-out login or a missing successor subscriber.</p>
    <p>For GICs, read the product sheet: deposit versus security packaging decides CDIC versus CIPF. Do not assume a "GIC" label on a brokerage screen is a CDIC deposit.</p>
    <p>Crypto, private placements and some structured notes often sit outside ordinary CIPF expectations. If a product is hard to explain in one sentence, read the CIPF FAQ before sizing it like an ETF.</p>
    <p>Keep OBSI and CIRO complaint paths bookmarked for advice disputes. Those paths solve different problems than insolvency coverage. Mixing them wastes months.</p>
    <p>Annual review month works better than crisis review. Pair the coverage check with beneficiary updates and a password manager export for authorized family members.</p>
    <p>Finally, remember that verified custody is a backstop. Long-term outcomes still come from savings rate, costs and staying invested—not from which app logo feels safest in a commercial.</p>


    <h2>Common myths that waste time</h2>
    <p>Myth: "CIPF guarantees my returns." Reality: CIPF addresses missing property at a failed member firm. Price declines stay yours.</p>
    <p>Myth: "CDIC covers my brokerage ETFs." Reality: CDIC is for eligible deposits at member deposit-takers. Brokerage securities sit in the CIPF world when the dealer is a member.</p>
    <p>Myth: "One million dollars of total coverage for everything." Reality: CIPF describes separate category limits. Read the FAQ for how general, retirement and RESP buckets work for an individual.</p>
    <p>Myth: "If the app has a lock icon, I am covered." Reality: Coverage follows legal membership and product type, not UI chrome.</p>
    <p>Myth: "I should never use one firm for TFSA and RRSP." Reality: CIPF categories already separate retirement accounts from general accounts. Concentration risk is different from coverage math—run both checks.</p>
    <p>When a friend forwards a scary insolvency rumour, open cipf.ca and cdic.ca before you rearrange accounts. Moving registered money in a panic can create tax and transfer costs that dwarf any real risk you were trying to avoid.</p>
    <p>If you hold accounts at a credit union, confirm whether provincial deposit insurance applies instead of CDIC. The brand "bank-like" does not automatically mean federal deposit insurance.</p>
    <p>For corporate or trust accounts, do not copy personal limit rules. Ask the firm and read the institutional pages. Mismatched assumptions are common when a small business owner treats the company brokerage like a personal TFSA.</p>


    <p>Document the review date beside every screenshot. Future-you will not remember whether a fee page or membership list was current when you last checked. Dated files are cheap insurance.</p>
    <p>If you use multiple apps under one brand family, confirm whether securities sit at one CIPF member or several. Brand umbrellas can hide different legal entities.</p>
    <p>Teach teenagers who just opened a TFSA the difference between market risk and firm failure in one short conversation. That lesson compounds better than another watchlist tip.</p>
    <p>When transferring accounts, coverage continues only at the receiving member after assets arrive. Understand the in-transit window and keep confirmations.</p>

    <p>If a friend asks whether money is "safe," answer with the product type first. Safety without that detail is marketing, not analysis.</p>

    <p>Keep paper or PDF confirmations of large transfers for at least seven years beside your tax records. Insolvency processes ask for proof of what the firm held for you.</p>
    <p>Review margin accounts separately: borrowed money does not change CIPF category math the way people hope, and forced sells in a crash are a risk CIPF will not soften.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${CIPF}">CIPF: About CIPF coverage</a>, reviewed October 24, 2026</li>
        <li><a href="${CIPF_FAQ}">CIPF: FAQs</a>, reviewed October 24, 2026</li>
        <li><a href="${CDIC}">CDIC: What's covered</a>, reviewed October 24, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/advisor-complaint-obsi-cipf-canada/">When an advisor gets it wrong</a></li>
        <li><a href="/blog/best-online-brokerages-canada/">Best online brokerages</a></li>
        <li><a href="/blog/bond-etfs-vs-gics-canada/">Bond ETFs vs GICs</a></li>
        <li><a href="/blog/how-to-invest-canada-guide/">How to invest in Canada</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Account choice is also a tax choice.</strong></p>
        <p>The 2026 tax guide covers TFSA, RRSP and taxable-account basics.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about CIPF and CDIC as of October 24, 2026. Not a guarantee of coverage for your accounts. Verify on official sites. The Okonk example is illustrative.", "October 24, 2026")}

</div>`,
  '2026-10-24'
);
