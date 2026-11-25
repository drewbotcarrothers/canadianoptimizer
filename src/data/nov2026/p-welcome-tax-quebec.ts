import { batchFooter, batchPost } from './types';

const D = '2026-11-25';
const QC = 'https://www.quebec.ca/gouvernement/gestion-municipale/finances-fiscalite-municipales/fiscalite/droits-mutations-immobilieres';
const MTL = 'https://montreal.ca/articles/comment-sont-calcules-les-droits-sur-les-mutations-immobilieres-9279';
const HUB = '/category/real-estate/closing-costs-transfer-tax/';

const disclaimer = `General education, not financial, tax or legal advice. The scale, the way the tax base is set and the exemptions come from the Government of Québec's page on transfer duties and the City of Montréal's page on how the duties are calculated, both read on November 25, 2026 (both pages are in French; the English wording here is our translation). The purchase prices in the tables are illustrations, not market data, and every dollar figure for them is our own arithmetic from the published scales. The invoice from the municipality, and your notary, give the amount you owe; municipalities other than Montréal may charge higher rates above $500,000.`;

const content = `<div class="container">

    <div class="hook">
        Quebec's "welcome tax" is a transfer duty collected by the municipality when you buy a property, and it is calculated on whichever is highest of the price, the deed amount or the assessed value. <span class="highlight">On a $750,000 purchase it is $9,360.50 on the provincial scale and $10,349 on Montréal's own scale.</span> This guide, part of our <a href="${HUB}">closing costs and land transfer tax hub</a>, shows both scales, how the base is set and where Montréal buyers pay more.
    </div>

    <p>Under the provincial scale for 2026, the duty is 0.5% on the first $62,900 of the tax base, 1% from $62,900 to $315,000 and 1.5% above $315,000. Montréal uses the same rates up to $552,300 and then adds higher ones, reaching 4% over $3,113,000.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The Government of Québec's own example gives $3,361 of duty on a $350,000 base.</li>
            <li>The base is the highest of three amounts, so a bargain price below the assessed value does not lower the tax.</li>
            <li>Municipalities may set a higher rate above $500,000, capped at 3% everywhere except Montréal, which has no cap.</li>
            <li>Montréal's thresholds rise on January 1, 2027, and its 2027 comparative factor is 1.04.</li>
            <li>The province's list of main exemptions covers relatives, spouses and farms; it does not list a first-time buyer exemption.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#scale">The 2026 scale</a></li>
            <li><a href="#base">How the base is set</a></li>
            <li><a href="#montreal">Montréal's scale</a></li>
            <li><a href="#table">Cost at six prices</a></li>
            <li><a href="#exempt">Exemptions</a></li>
            <li><a href="#pay">When and how you pay</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="scale">What are Quebec's welcome tax rates for 2026?</h2>
    <p>Three brackets, set in law for every municipality. The Government of Québec's <a href="${QC}">page on transfer duties</a> lists them for the 2026 municipal fiscal year and says the thresholds are indexed every year to Québec consumer prices.</p>
    <div class="table-wrapper">
        <table>
            <caption>Quebec provincial scale for transfer duties, 2026 (Government of Québec)</caption>
            <thead>
                <tr><th>Part of the tax base</th><th>Rate</th></tr>
            </thead>
            <tbody>
                <tr><td>First $62,900</td><td>0.5%</td></tr>
                <tr><td>$62,900 to $315,000</td><td>1.0%</td></tr>
                <tr><td>Above $315,000</td><td>1.5%</td></tr>
            </tbody>
        </table>
    </div>
    <p>The province's worked example is a $350,000 base: $62,900 at 0.5% is $315, $252,100 at 1% is $2,521 and $35,000 at 1.5% is $525, which totals $3,361. Our own arithmetic, without rounding each step, gives $3,360.50.</p>
    <p>A municipality may set a higher rate by bylaw on any part of the base above $500,000. That rate cannot exceed 3%, except in the City of Montréal, which can go higher. Ask the municipality where the property is for its rate above $500,000 before you assume the provincial scale.</p>

    <h2 id="base">What is the welcome tax calculated on?</h2>
    <p>On the highest of three amounts, which may not be your price. The Government of Québec's page lists them, and the <a href="${MTL}">City of Montréal's page</a> repeats them.</p>
    <ul>
        <li>The price paid for the property, including the value of anything the buyer gives in exchange.</li>
        <li>The price stated in the deed of transfer.</li>
        <li>The market value: the value on the municipal assessment roll times the comparative factor for the year of the transfer.</li>
    </ul>
    <p>Montréal's page adds that, on a new property, the price paid excludes GST and QST. It lists Montréal's comparative factors as 1.10 for 2024, 1.08 for 2025, 1.00 for 2026 and 1.04 for 2027.</p>
    <div class="example-box">
        <div class="example-title">Illustration: when the assessment sets the tax</div>
        <div class="example-calculation">
            <div class="line"><span>Price on the deed (illustration)</span><span>$480,000</span></div>
            <div class="line"><span>Assessment roll value (illustration)</span><span>$500,000</span></div>
            <div class="line"><span>Montréal 2026 comparative factor</span><span>1.00</span></div>
            <div class="line"><span>Market value: $500,000 × 1.00</span><span>$500,000</span></div>
            <div class="line"><span>Duty on a $480,000 base would be</span><span>$5,310.50</span></div>
            <div class="line total"><span>Duty on the $500,000 base actually used</span><span>$5,610.50</span></div>
        </div>
        <p>The price and roll value are illustrations. Buying under the assessment saves nothing on the duty, and it adds $300 here.</p>
    </div>

    <h2 id="montreal">How is Montréal's welcome tax different?</h2>
    <p>Montréal follows the provincial scale up to $552,300 and then charges more on the part above it. The City of Montréal's <a href="${MTL}">calculation page</a> lists seven brackets for transfers from January 1 to December 31, 2026, and a second list that applies from January 1, 2027.</p>
    <div class="table-wrapper">
        <table>
            <caption>City of Montréal transfer duty brackets (City of Montréal)</caption>
            <thead>
                <tr><th>2026 tax base</th><th>2027 tax base</th><th>Rate</th></tr>
            </thead>
            <tbody>
                <tr><td>Up to $62,900</td><td>Up to $64,400</td><td>0.5%</td></tr>
                <tr><td>$62,900 to $315,000</td><td>$64,400 to $322,600</td><td>1%</td></tr>
                <tr><td>$315,000 to $552,300</td><td>$322,600 to $552,300</td><td>1.5%</td></tr>
                <tr><td>$552,300 to $1,104,700</td><td>$552,300 to $1,104,700</td><td>2%</td></tr>
                <tr><td>$1,104,700 to $2,136,500</td><td>$1,104,700 to $2,136,500</td><td>2.5%</td></tr>
                <tr><td>$2,136,500 to $3,113,000</td><td>$2,136,500 to $3,113,000</td><td>3.5%</td></tr>
                <tr><td>Above $3,113,000</td><td>Above $3,113,000</td><td>4%</td></tr>
            </tbody>
        </table>
    </div>
    <p>The practical gap starts above $552,300 and grows fast. On the same base, the duty is identical at $500,000 and about $989 higher at $750,000, with the whole difference coming from the 2% rate, instead of 1.5%, on the $197,700 between $552,300 and $750,000.</p>

    <h2 id="table">How much welcome tax will you pay at different prices?</h2>
    <p>The same as the provincial scale up to about $552,300 in Montréal, then increasingly more. The table runs six illustration prices, assuming the price is the tax base.</p>
    <p class="did-you-know" data-info-gain><strong>What this page adds:</strong> a side-by-side calculation at six prices of the provincial scale, Montréal's 2026 scale and Montréal's 2027 thresholds, plus the dollar gap, so a buyer can see exactly where Montréal's own scale starts to cost more and how much the January 2027 indexation moves it.</p>
    <div class="table-wrapper">
        <table>
            <caption>Welcome tax at six illustration prices (our arithmetic from the published scales)</caption>
            <thead>
                <tr><th>Tax base (illustration)</th><th>Provincial scale, 2026</th><th>Montréal, 2026</th><th>Montréal minus provincial</th><th>Montréal, 2027 thresholds</th></tr>
            </thead>
            <tbody>
                <tr><td>$350,000</td><td>$3,360.50</td><td>$3,360.50</td><td>$0</td><td>$3,315.00</td></tr>
                <tr><td>$500,000</td><td>$5,610.50</td><td>$5,610.50</td><td>$0</td><td>$5,565.00</td></tr>
                <tr class="highlight-row"><td>$750,000</td><td>$9,360.50</td><td>$10,349.00</td><td>$988.50</td><td>$10,303.50</td></tr>
                <tr><td>$1,200,000</td><td>$16,110.50</td><td>$19,825.50</td><td>$3,715.00</td><td>$19,780.00</td></tr>
                <tr><td>$2,500,000</td><td>$35,610.50</td><td>$55,960.50</td><td>$20,350.00</td><td>$55,915.00</td></tr>
                <tr><td>$4,000,000</td><td>$58,110.50</td><td>$112,895.50</td><td>$54,785.00</td><td>$112,850.00</td></tr>
            </tbody>
        </table>
    </div>
    <p>Two things to read from it. Under $552,300 the Montréal scale and the provincial scale give the same answer, so a typical condo does not pay more in Montréal. And at every price in the table the 2027 thresholds lower the duty by $45.50, because the first two brackets move up, so waiting for January saves a small amount rather than a large one. A municipality outside Montréal may charge more than the provincial column above $500,000, so confirm its rate.</p>

    <h2 id="exempt">Who is exempt from the welcome tax in Quebec?</h2>
    <p>Mainly people receiving a property from a relative, and a few business and farm situations. The Government of Québec's <a href="${QC}">page</a> lists the main cases.</p>
    <ul>
        <li><strong>Relatives:</strong> transfers in the direct line, up or down (parents, grandparents, children, grandchildren), and between in-laws as listed on the page.</li>
        <li><strong>Spouses:</strong> including couples living together, normally after 12 months.</li>
        <li><strong>Ex-spouses:</strong> certain transfers between former common-law partners within the time limits in the law.</li>
        <li><strong>Small transfers:</strong> a tax base under $5,000.</li>
        <li><strong>Farms and companies:</strong> a registered farm operation, and certain transfers involving companies or partnerships and individuals when the conditions are kept for a period.</li>
    </ul>
    <p>In an exempt case, a municipality may collect a supplementary duty of up to $200 by resolution. A first-time buyer who buys from a stranger is not on the list, so budget the full duty. The federal and provincial first-time buyer tools, such as the <a href="/blog/fhsa-home-purchase-sequencing-canada/">FHSA</a>, help with the down payment rather than this cost.</p>

    <h2 id="pay">When and how do you pay the welcome tax?</h2>
    <p>The municipality sends an invoice after the transfer is registered, and you pay it separately from the closing cheques, normally within 30 days. The Government of Québec says the duty must be paid before the 31st day after the municipality sends the account, or interest starts to run. Montréal's page says its invoice is payable in a single payment within 30 days of being sent.</p>
    <p>If the deed is not registered in the land register, the buyer must give the municipality a disclosure notice within 90 days. Missing that deadline can lead to a supplementary duty to Revenu Québec of up to 150% of the duty, plus interest. That is why a notary normally files the registration.</p>
    <p>For the other provinces' systems see the <a href="/blog/land-transfer-tax-ontario/">Ontario land transfer tax guide</a> and the <a href="/blog/property-transfer-tax-bc/">BC property transfer tax guide</a>, and for everything else due on closing, the <a href="/blog/land-transfer-tax-closing-costs-canada/">national closing costs guide</a>. If you are still deciding between renting and buying, the <a href="/blog/rent-vs-buy-decision-canada/">rent versus buy guide</a> shows where this cost fits.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>What is the welcome tax in Quebec?</h3>
    <p>It is the transfer duty a municipality charges the buyer of a property in its territory. It is calculated on a graduated scale and billed after the transfer is registered.</p>
    <h3>How do you calculate the welcome tax?</h3>
    <p>Multiply each slice of the tax base by its rate and add them. For 2026 on the provincial scale that is 0.5% on the first $62,900, 1% to $315,000 and 1.5% above.</p>
    <h3>Is the welcome tax calculated on the purchase price?</h3>
    <p>Only if the price is the highest of three amounts. It uses the price paid, the price in the deed or the assessed value times the comparative factor, whichever is greatest.</p>
    <h3>Is there a first-time buyer exemption from the welcome tax?</h3>
    <p>The province's list of the main exemptions does not include one. It covers relatives, spouses, small transfers, farms and some company transfers.</p>
    <h3>Does Montréal charge more than the rest of Quebec?</h3>
    <p>Only above $552,300 of tax base. Below that, Montréal's rates match the provincial scale, and above it they rise to 2%, 2.5%, 3.5% and 4%.</p>
    <h3>Is GST or QST included in the tax base?</h3>
    <p>No. The City of Montréal says the price paid excludes GST and QST.</p>
    <h3>When do the Montréal brackets change?</h3>
    <p>On January 1 each year. The City of Montréal lists the 2027 thresholds, which start at $64,400 and $322,600, and a 2027 comparative factor of 1.04.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${QC}">Government of Québec: Droits sur les mutations immobilières</a>, reviewed November 25, 2026</li>
        <li><a href="${MTL}">City of Montréal: Comment sont calculés les droits sur les mutations immobilières</a>, reviewed November 25, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/land-transfer-tax-closing-costs-canada/">Land transfer tax and closing costs across Canada</a></li>
        <li><a href="/blog/land-transfer-tax-ontario/">Ontario land transfer tax</a></li>
        <li><a href="/blog/property-transfer-tax-bc/">BC property transfer tax</a></li>
        <li><a href="/blog/first-time-home-buyer-guide-canada/">First-time home buyer guide</a></li>
        <li><a href="/blog/rent-vs-buy-decision-canada/">Rent versus buy decision guide</a></li>
    </ul>

    ${batchFooter(D, 'Real Estate', disclaimer)}

</div>`;

export const welcomeTaxQuebecPost = batchPost({
  date: D,
  category: 'Real Estate',
  categorySlug: 'real-estate',
  subcategory: 'closing-costs-transfer-tax',
  slug: 'welcome-tax-quebec',
  title: 'Quebec Welcome Tax: How the Transfer Duty Is Calculated',
  excerpt:
    'Quebec welcome tax rates for 2026, how the tax base is set, Montréal\'s own scale and its 2027 thresholds, exemptions, and the duty at six prices.',
  content,
});
