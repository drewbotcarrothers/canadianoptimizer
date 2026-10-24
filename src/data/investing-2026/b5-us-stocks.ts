import { invFooter, invPost } from './types';

const QT = 'https://www.questrade.com/learning/investing-basics/norberts-gambit-currency-conversion';
const IRS_TREATY = 'https://www.irs.gov/pub/irs-trty/canada.pdf';
const CRA_FTC = 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-40500-federal-foreign-tax-credit.html';

export const buyingUsStocksFromCanada = invPost(
  'stock-picking',
  'buying-us-stocks-from-canada',
  'Buying US Stocks from Canada: FX Costs, Accounts, Tax',
  'Which account should hold US stocks, what FX conversion can cost at a broker, and how the Canada-US treaty treats dividends inside an RRSP versus a TFSA.',
  `<div class="container">

    <div class="hook">
        Buying Apple or an S&amp;P 500 ETF from Canada is easy. Keeping the <span class="highlight">FX and withholding tax</span> from quietly taxing you twice is the real work.
    </div>

    <p>You need three decisions: which account holds the US securities, how you convert CAD to USD, and whether the Canada-US treaty helps your dividends. Questrade's Norbert's Gambit learning page describes retail FX spreads of about 1.5% to 2.5% per conversion. A TFSA does not get the treaty exemption that an RRSP often does on US dividends.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Prefer US-listed equities in an RRSP when treaty relief on dividends matters; a TFSA typically still faces US withholding with no Canadian foreign tax credit.</li>
            <li>Questrade describes retail FX spreads around 1.5%–2.5%; journaling (Norbert's Gambit) is $9.95 per request, or unlimited free with Questrade Plus, per its pricing page.</li>
            <li>Canadian-listed wrappers (for example VFV) do not put your RRSP in front of the US payer the way a US-listed fund can.</li>
            <li>Non-registered accounts may claim a foreign tax credit for some withholding (CRA line 40500), subject to limits.</li>
            <li>Full matrices live in our <a href="/blog/us-withholding-tax-by-account-canada/">US withholding by account</a> and <a href="/blog/norberts-gambit-canada-guide/">Norbert's Gambit</a> guides.</li>
        </ul>
    </div>

    <p>This guide is part of <a href="/category/investing/stock-picking/">Stock picking</a>. It sits beside those withholding and FX posts rather than replacing them.</p>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#account">Which account should hold US stocks?</a></li>
            <li><a href="#fx">What does currency conversion cost?</a></li>
            <li><a href="#treaty">How does the treaty treat dividends?</a></li>
            <li><a href="#wrapper">Canadian-listed vs US-listed products</a></li>
            <li><a href="#example">How would Jordan buy $20,000 of VOO?</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="account">Which account should hold US stocks?</h2>
    <div class="table-wrapper">
        <table>
            <caption>US equity location: high-level treaty and tax sketch</caption>
            <thead><tr><th>Account</th><th>Typical US dividend withholding</th><th>Canadian tax on dividends</th></tr></thead>
            <tbody>
                <tr class="highlight-row"><td>RRSP / RRIF</td><td>Often 0% with treaty + correct forms</td><td>None until withdrawal</td></tr>
                <tr><td>TFSA</td><td>Usually 15% treaty rate; no FTC</td><td>None in Canada</td></tr>
                <tr><td>Non-registered</td><td>Usually 15% treaty rate</td><td>Taxable; possible FTC</td></tr>
            </tbody>
        </table>
    </div>
    <p>Details and edge cases are in the withholding guide. Brokers must have your W-8BEN and account classification in order.</p>

    <h2 id="fx">What does currency conversion cost?</h2>
    <p><a href="${QT}">Questrade's Norbert's Gambit page</a> says retail FX spreads often run about 1.5% to 2.5% per transaction. Its pricing page lists journaling at $9.95 per online request, or unlimited free journaling with Questrade Plus. Interactive Brokers Canada publishes its own spot FX schedule; for large or frequent conversions, compare that schedule to a gambit at your broker.</p>
    <div class="chart-container">
        <p class="chart-title">Illustrative cost to convert $10,000 CAD at stated retail spreads</p>
        <div class="bar-chart">
            <div class="bar-group"><div class="bar" style="height:60%"></div><span class="bar-label">1.5%<br>$150</span></div>
            <div class="bar-group"><div class="bar" style="height:80%"></div><span class="bar-label">2.0%<br>$200</span></div>
            <div class="bar-group"><div class="bar" style="height:100%"></div><span class="bar-label">2.5%<br>$250</span></div>
        </div>
        <p class="chart-source">Illustration using the 1.5%–2.5% retail spread range described on Questrade's learning page. Not a quote for your trade.</p>
    </div>

    <h2 id="treaty">How does the treaty treat dividends?</h2>
    <p>The Canada-US Income Tax Convention caps portfolio dividends in many cases and provides special rules for pensions and retirement arrangements. In practice, Canadians often see 15% withholding on US dividends in taxable and TFSA accounts when paperwork is correct, and 0% inside an RRSP when the broker applies the treaty for that account type. Read the treaty text and your broker's US tax docs rather than assuming.</p>
    <p>In a non-registered account, some of the US tax may be creditable in Canada via <a href="${CRA_FTC}">line 40500</a>, limited by Canadian tax on the same income.</p>

    <h2 id="wrapper">Canadian-listed vs US-listed products</h2>
    <div class="flowchart">
        <div class="flow-node decision">Is the goal US equity exposure inside an RRSP?</div>
        <div class="flow-arrow"></div>
        <div class="flow-branch-container">
            <div class="flow-node result">US-listed ETF/stock can sit closer to treaty relief</div>
            <div class="flow-node result">Canadian-listed wrapper may still leak withholding inside</div>
        </div>
        <div class="flow-arrow"></div>
        <div class="flow-node result">Convert CAD efficiently, then buy; see Norbert's Gambit guide</div>
    </div>
    <p>Side-by-side product examples are in <a href="/blog/vfv-vs-voo-canadians/">VFV vs VOO</a>. This article does not refresh that comparison.</p>

    <h2 id="example">How would Jordan buy $20,000 of VOO?</h2>
    <div class="example-box">
        <strong>Illustrative example: Jordan, 40, Ottawa</strong>
        <div class="example-calculation">
            <div class="line"><span>Account</span><span>RRSP at Questrade</span></div>
            <div class="line"><span>Retail FX on $20,000 at 1.5%</span><span>About $300</span></div>
            <div class="line"><span>Alternative</span><span>Norbert's Gambit + journaling fee</span></div>
            <div class="line total"><span>Decision</span><span>Gambit if spread saved exceeds fees</span></div>
        </div>
        <p>Jordan follows the gambit guide for steps. Amounts are illustrative.</p>
    </div>

    <h2>Does your province change anything?</h2>
    <p>Withholding is US federal. Your Canadian tax on non-registered foreign dividends depends on federal and provincial rates. The foreign tax credit is claimed on the federal return with provincial interactions handled in software.</p>

    <h2>Checklist</h2>
    <ul class="checklist">
        <li>Account chosen with withholding in mind</li>
        <li>W-8BEN / broker US tax profile current</li>
        <li>FX method chosen (spot vs gambit)</li>
        <li>Canadian vs US ticker choice documented</li>
        <li>Related withholding and gambit guides read</li>
    </ul>


    <h2 id="risks">What operational risks do Canadians miss?</h2>
    <p>Settlement timing, corporate actions in USD and wash-sale style superficial loss rules in Canada are easy to trip over when you trade US names actively. If you are a buy-and-hold index investor, operational risk is mostly about FX and account location. If you trade options or individual stocks, read your broker's US market disclosures.</p>
    <p>Estate and US estate-tax considerations can matter for larger US-situs holdings. That topic is beyond this article's scope; get cross-border advice before concentrating a taxable estate in US securities.</p>
    <p>Keep a one-page note: account, ticker (US vs Canadian), FX method and the date you last confirmed W-8BEN status with the broker. Update it when you change firms.</p>


    <h2 id="passive">What if you only want US index exposure?</h2>
    <p>Many Canadians do not need individual US stocks. A US total-market or S&amp;P 500 ETF inside the right account often completes the plan. The FX and treaty questions remain. The research burden falls.</p>
    <p>All-in-one Canadian ETFs already include large US sleeves. Adding a separate US fund on top is the overlap problem described in our too-many-ETFs guide. Check the holdings before you "diversify" into another US ticker.</p>
    <p>If you use Norbert's Gambit, journal promptly and understand settlement. Questrade's learning page discusses delays and market risk during the gambit. Read it before your first attempt.</p>


    <h2 id="checklist2">A practical order of operations</h2>
    <ol>
        <li>Decide the account (usually RRSP for US-listed dividend payers when treaty relief matters).</li>
        <li>Confirm W-8BEN / US tax profile with the broker.</li>
        <li>Choose FX method and estimate cost on the dollar amount.</li>
        <li>Choose US-listed versus Canadian-listed wrapper with the withholding guide open.</li>
        <li>Place the trade and record the ACB in CAD for taxable accounts.</li>
    </ol>
    <p>Skipping step two is how people discover withholding at 30% instead of a treaty rate. Skipping step three is how a 1.5%–2.5% spread eats a year of expected excess return on a short-term trade.</p>
    <p>For taxable accounts, track foreign income and foreign tax paid from slips when you file. The foreign tax credit has limits; unused amounts have carryover rules beyond this article's scope.</p>
    <p>If your US holdings become a large share of net worth, revisit currency risk. Unhedged US equities move with both markets and the Canadian dollar. That can help or hurt CAD returns in any given year.</p>


    <h2 id="mistakes2">Mistakes Canadians make buying US assets</h2>
    <ul>
        <li>Parking US dividend payers in a TFSA by default</li>
        <li>Paying retail FX on every small contribution</li>
        <li>Assuming VFV is treaty-identical to VOO inside an RRSP</li>
        <li>Trading US stocks actively without a USD cash balance</li>
        <li>Forgetting ACB conversion to CAD in taxable accounts</li>
    </ul>
    <p>Each mistake has a mechanical fix already documented in our withholding, gambit and asset-location guides. This article is the checklist that tells you which guide to open next.</p>
    <p>Snowbirds and remote workers with US ties may have extra filing obligations. Those are outside this scope—get cross-border help early if you have a green card, US rental or US estate exposure.</p>
    <p>Keep corporate accounts separate from personal plans. A holding company buying US stocks raises different tax and treaty questions than your RRSP.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>Can I buy US stocks in a TFSA?</h3>
    <p>Yes, if your broker allows it. Expect US dividend withholding without a Canadian foreign tax credit. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Is Norbert's Gambit free?</h3>
    <p>At Questrade, journaling is $9.95 per request or free unlimited with Questrade Plus, per the pricing page. Spreads and market risk still exist. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Does VFV avoid US withholding?</h3>
    <p>VFV is Canadian-listed and invests primarily in a US fund. Withholding can still occur inside the structure. See VFV vs VOO. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>What FX spread should I budget?</h3>
    <p>Questrade's learning page cites about 1.5%–2.5% for retail conversions. Check your broker's current page before trading. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Can I claim foreign tax credit in an RRSP?</h3>
    <p>No. The point of RRSP treaty relief is to avoid the US tax, not to credit it in Canada. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Do I need a USD account?</h3>
    <p>It helps. Dual-currency registered accounts let you hold USD after conversion so you are not forced to convert on every trade. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <h3>Where is the full withholding matrix?</h3>
    <p><a href="/blog/us-withholding-tax-by-account-canada/">US withholding tax by account</a>. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>


    <h2 id="together">Putting US exposure on rails</h2>
    <p>Write a three-line policy: target US equity percentage, preferred account for US-listed holdings, and FX method for amounts above a dollar threshold. Example: "US equity 30% of equities; US-listed ETFs in RRSP; Norbert's Gambit above $5,000, broker convert below." Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>Schedule a calendar reminder to confirm W-8BEN status annually. Brokers sometimes prompt you; do not ignore the prompt. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>After each FX conversion, record the effective rate and fee in a simple log. Patterns show whether gambits are worth your time. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>If you only buy Canadian-listed all-in-ones, you may never need this machinery. That is a valid choice. Complexity should serve a measured withholding or product advantage, not curiosity alone. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>
    <p>Re-read the withholding guide whenever you open a new account type (FHSA, LIRA, corporate account). Treaty results are not identical across every structure. Check the linked primary sources in the Sources section for the figures and dates used in this article.</p>

    <p>New investors sometimes open a US margin account before they need one. Cash accounts are enough for buy-and-hold index exposure. Margin introduces interest costs and forced-sale risk that have nothing to do with treaty relief. Add complexity only when a written strategy requires it. The same caution applies to US options: they are a separate skill with separate tax and assignment risks, not a default add-on to an RRSP index purchase.</p><p>When you change brokers, request a transfer in kind of US-listed positions when possible so you do not invent an unnecessary FX round trip. Confirm the receiving broker supports those tickers and USD balances first.</p>

    <p>Keep a dedicated folder—digital is fine—for W-8BEN confirmations, FX logs and trade confirms for US-listed tickers. When you prepare a tax return with foreign income, that folder saves hours. If you work with an accountant, share the folder each spring rather than forwarding scattered emails.</p>

    <p>Review broker USD account fees annually; free dual-currency features change.</p>

    <p>If a US stock pays a return of capital or special dividend, read the issuer notice and your broker tax lot report carefully. Canadian taxable accounts need correct ACB adjustments. When in doubt, export the year-end tax package early and ask your preparer before filing deadlines approach.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${QT}">Questrade: Norbert's Gambit / currency conversion learning page</a>, reviewed October 24, 2026</li>
        <li><a href="https://www.questrade.com/pricing">Questrade pricing</a> (journaling fees), reviewed October 24, 2026</li>
        <li><a href="${IRS_TREATY}">IRS: Canada-United States Income Tax Convention (treaty PDF)</a>, reviewed October 24, 2026</li>
        <li><a href="${CRA_FTC}">CRA: Line 40500 Federal foreign tax credit</a>, reviewed October 24, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/us-withholding-tax-by-account-canada/">US withholding by account</a></li>
        <li><a href="/blog/norberts-gambit-canada-guide/">Norbert's Gambit</a></li>
        <li><a href="/blog/vfv-vs-voo-canadians/">VFV vs VOO</a></li>
        <li><a href="/blog/diy-etf-portfolio-asset-location-canada/">Asset location</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Account location is a tax decision.</strong></p>
        <p>The 2026 tax guide covers RRSP and TFSA strategy and foreign income reporting basics.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${invFooter("General education about buying US securities from Canada as of October 24, 2026. FX examples are illustrative. This is not tax or investment advice.", "October 24, 2026")}

</div>`,
  '2026-10-24'
);
