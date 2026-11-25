import { batchFooter, batchPost } from './types';

const D = '2026-11-25';
const PTT = 'https://www2.gov.bc.ca/gov/content/taxes/property-taxes/property-transfer-tax';
const FTB = `${PTT}/exemptions/first-time-home-buyers`;
const FTB_AMT = `${PTT}/exemptions/first-time-home-buyers/current-amount`;
const NEW = `${PTT}/exemptions/newly-built-home-exemption`;
const NEW_AMT = `${PTT}/exemptions/newly-built-home-exemption/exemption-amounts`;
const ADDL = `${PTT}/additional-property-transfer-tax`;
const EXAMPLES = `${PTT}/calculation-examples`;
const HUB = '/category/real-estate/closing-costs-transfer-tax/';

const disclaimer = `General education, not financial, tax or legal advice. Rates, exemption rules and thresholds come from the Province of British Columbia's property transfer tax pages listed under Sources, all read on November 25, 2026; the province noted that changes to its website were underway. The purchase prices in the tables are illustrations, not market data, and the tax and exemption figures for them are our arithmetic from the published rates and exemption rules, checked against the province's own amount tables where it prints them. Your lawyer or notary files the property transfer tax return and confirms what applies to your purchase. Canadian Optimizer has no affiliate relationship with any lender or lawyer named here and links to no application page.`;

const content = `<div class="container">

    <div class="hook">
        British Columbia's property transfer tax is a graduated tax on the fair market value of the property, and two exemptions can remove it or most of it. <span class="highlight">On a $650,000 home the tax is $11,000; a qualifying first-time buyer saves $8,000 of it, and a buyer of a newly built home at that price pays nothing.</span> This guide, part of our <a href="${HUB}">closing costs and land transfer tax hub</a>, shows the rates, both exemptions and the price cliff most buyers miss.
    </div>

    <p>BC charges 1% on the first $200,000 of a property's fair market value, 2% from $200,000 to $2,000,000 and 3% above that, plus a further 2% on the residential value over $3,000,000. It is due when the transfer is registered at the Land Title Office, and your lawyer or notary files the return.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The tax on $650,000 is $11,000 and on $835,000 it is $14,700, from the province's own rate formula.</li>
            <li>The first time home buyers' exemption removes up to $8,000, and only for homes worth $835,000 or less. It fades to nothing at $860,000.</li>
            <li>The newly built home exemption removes the whole tax up to $1,100,000 and fades to nothing at $1,150,000.</li>
            <li>Foreign buyers pay an extra 20% in five regional districts, including Metro Vancouver.</li>
            <li>Both exemptions require you to move in within 92 days and live there for the first year.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#rates">The rates</a></li>
            <li><a href="#table">Cost at seven prices</a></li>
            <li><a href="#ftb">First time home buyers' exemption</a></li>
            <li><a href="#cliff">The price cliff</a></li>
            <li><a href="#new">Newly built home exemption</a></li>
            <li><a href="#foreign">Foreign buyers</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="rates">What are BC's property transfer tax rates?</h2>
    <p>Three rates apply to every taxable transfer, and a fourth layer sits on expensive homes. The province's <a href="${PTT}">property transfer tax page</a> lists them.</p>
    <div class="table-wrapper">
        <table>
            <caption>BC property transfer tax rates (Province of British Columbia)</caption>
            <thead>
                <tr><th>Part of the fair market value</th><th>Rate</th></tr>
            </thead>
            <tbody>
                <tr><td>Up to and including $200,000</td><td>1%</td></tr>
                <tr><td>$200,000 to $2,000,000</td><td>2%</td></tr>
                <tr><td>Above $2,000,000</td><td>3%</td></tr>
                <tr><td>Residential value above $3,000,000 (a further tax on top of the 3%)</td><td>+2%</td></tr>
            </tbody>
        </table>
    </div>
    <p>The tax is based on fair market value on the day the property is registered, not the sticker price, unless an exemption applies or you buy a pre-sold strata unit, which has its own rule. The province's <a href="${EXAMPLES}">calculation examples</a> show two cases: a $650,000 home pays $2,000 plus $9,000, for $11,000, and a $4,500,000 all-residential home pays $143,000.</p>

    <h2 id="table">How much property transfer tax will you pay at different prices?</h2>
    <p>At the margin, every extra dollar of value between $200,000 and $2,000,000 adds 2 cents of tax. The table applies the published rates, and then the two exemptions, to seven illustration prices.</p>
    <p class="did-you-know" data-info-gain><strong>What this page adds:</strong> a single table showing the tax at seven prices before exemptions, after the first time home buyers' exemption and after the newly built home exemption, plus the dollar cost of each extra $1,000 inside the first-time buyer phase-out between $835,000 and $860,000.</p>
    <div class="table-wrapper">
        <table>
            <caption>BC property transfer tax at seven illustration prices (our arithmetic from the published rules)</caption>
            <thead>
                <tr><th>Fair market value (illustration)</th><th>Tax before exemptions</th><th>Payable, first-time buyer</th><th>Payable, newly built home</th></tr>
            </thead>
            <tbody>
                <tr><td>$500,000</td><td>$8,000</td><td>$0</td><td>$0</td></tr>
                <tr><td>$650,000</td><td>$11,000</td><td>$3,000</td><td>$0</td></tr>
                <tr class="highlight-row"><td>$835,000</td><td>$14,700</td><td>$6,700</td><td>$0</td></tr>
                <tr><td>$900,000</td><td>$16,000</td><td>$16,000</td><td>$0</td></tr>
                <tr><td>$1,100,000</td><td>$20,000</td><td>$20,000</td><td>$0</td></tr>
                <tr><td>$1,500,000</td><td>$28,000</td><td>$28,000</td><td>$28,000</td></tr>
                <tr><td>$3,500,000</td><td>$93,000</td><td>$93,000</td><td>$93,000</td></tr>
            </tbody>
        </table>
    </div>
    <p>The first-time buyer column assumes you meet every personal condition and that the home is used only as your principal residence. The newly built column assumes a qualifying new home, not a resale. At $3,500,000 the $93,000 is $2,000 plus $36,000 plus $45,000, plus $10,000 for the further 2% on the $500,000 above $3,000,000.</p>

    <h2 id="ftb">Who qualifies for the first time home buyers' exemption?</h2>
    <p>A Canadian citizen or permanent resident who has never owned a principal residence anywhere in the world and has never claimed the exemption before, and who also has BC ties. The province's <a href="${FTB}">exemption page</a> lists the conditions at the time you register.</p>
    <ul>
        <li><strong>Residency:</strong> you lived in BC for at least a year immediately before registration, or filed at least two income tax returns as a BC resident in the last six taxation years.</li>
        <li><strong>Ownership history:</strong> you have never owned a registered interest in a property that was your principal residence anywhere in the world, and have never received a first time home buyers' exemption or refund.</li>
        <li><strong>The property:</strong> used only as your principal residence, a fair market value of $835,000 or less (effective April 1, 2024), 0.5 hectares (1.24 acres) or smaller, and only residential improvements.</li>
        <li><strong>The amount:</strong> the exemption covers the tax on the first $500,000, which is up to $8,000. Between $500,000 and $835,000 the exemption stays at $8,000.</li>
        <li><strong>Partial buyers:</strong> if only some buyers qualify, only their percentage of interest is exempt. Two spouses buying an $835,000 home as joint tenants with only one qualifying leave $14,700 minus $4,000, so $10,700 payable.</li>
    </ul>
    <p>After you register, you must move in within 92 days and live there as your principal residence until the first anniversary of registration. Move out early and you repay part of the exemption in proportion. A false declaration costs a penalty equal to the amount claimed, on top of the exemption itself. Foreign buyers who become Canadian citizens or permanent residents by the first anniversary may apply for a refund.</p>

    <h2 id="cliff">What happens to the first-time buyer exemption above $835,000?</h2>
    <p>It phases out quickly, at $320 for every $1,000 of added value, and it is gone at $860,000. The province's <a href="${FTB_AMT}">amount table</a> prints the steps, and our check of the formula gives the same results.</p>
    <div class="table-wrapper">
        <table>
            <caption>First time home buyers' exemption in the phase-out range (Province of British Columbia amount table)</caption>
            <thead>
                <tr><th>Fair market value</th><th>Tax before exemption</th><th>Exemption</th><th>Tax payable</th></tr>
            </thead>
            <tbody>
                <tr><td>$835,000</td><td>$14,700</td><td>$8,000</td><td>$6,700</td></tr>
                <tr><td>$836,000</td><td>$14,720</td><td>$7,680</td><td>$7,040</td></tr>
                <tr class="highlight-row"><td>$850,000</td><td>$15,000</td><td>$3,200</td><td>$11,800</td></tr>
                <tr><td>$860,000</td><td>$15,200</td><td>$0</td><td>$15,200</td></tr>
            </tbody>
        </table>
    </div>
    <p>The cliff changes how to read an offer. Adding $1,000 to an $835,000 price costs $340 more in tax, because the tax rises $20 and the exemption falls $320. A first-time buyer at $850,000 pays $11,800, which is $5,100 more than at $835,000 (our arithmetic from the table). The exemption is read against fair market value, not only the price on the contract, so check the assessed value with your lawyer before you commit.</p>

    <h2 id="new">How does the newly built home exemption work?</h2>
    <p>It removes the entire tax on a qualifying new principal residence worth $1,100,000 or less, and phases out to nothing at $1,150,000. The province's <a href="${NEW}">newly built home exemption page</a> sets the rules, and the <a href="${NEW_AMT}">amount page</a> says the exemption equals the tax up to the threshold.</p>
    <ul>
        <li><strong>What counts as new:</strong> a house built on vacant land, or a condo unit, that has not been occupied since construction, plus some manufactured and moved homes and conversions.</li>
        <li><strong>Buyer:</strong> a Canadian citizen or permanent resident. Unlike the first-time buyer exemption, the page does not require you to be a first-time buyer.</li>
        <li><strong>Property:</strong> BC, principal residence only, 0.5 hectares or smaller.</li>
        <li><strong>Apply:</strong> your lawyer enters exemption code 49 on the return.</li>
        <li><strong>Occupancy:</strong> move in within 92 days and stay for the rest of the first year, or repay a portion.</li>
    </ul>
    <p>If you paid the tax on vacant land and later built a home, you may be eligible for a refund. Buyers of pre-sold strata units should ask their lawyer which value the tax is based on.</p>

    <h2 id="foreign">Do foreign buyers pay more in BC?</h2>
    <p>Yes. A foreign national, foreign corporation or taxable trustee pays an additional 20% on the fair market value of the residential portion they acquire, in five regional districts. The province's <a href="${ADDL}">additional tax page</a> names them: Capital, Fraser Valley, Metro Vancouver, Central Okanagan and Nanaimo.</p>
    <p>The additional tax applies to your proportionate share, so a 70% interest is taxed on 70% of the value. On a $1,000,000 residential property in Metro Vancouver, 20% is $200,000 (our arithmetic). Some people are exempt, including confirmed BC Provincial Nominees. Foreign entities and taxable trustees are not eligible for the two exemptions above, and for individuals both exemptions require Canadian citizenship or permanent residence.</p>
    <p>For the Ontario and Quebec equivalents, see the <a href="/blog/land-transfer-tax-ontario/">Ontario land transfer tax guide</a> and the <a href="/blog/welcome-tax-quebec/">Quebec welcome tax guide</a>. For first-time buyer savings plans, read the <a href="/blog/fhsa-home-purchase-sequencing-canada/">FHSA purchase sequencing guide</a>, and for the full closing-day list see the <a href="/blog/land-transfer-tax-closing-costs-canada/">national closing costs guide</a>.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>How do you calculate BC property transfer tax?</h3>
    <p>Apply 1% to the first $200,000, 2% to the part up to $2,000,000 and 3% above that, then add 2% on residential value over $3,000,000. On $650,000 that is $2,000 plus $9,000, for $11,000.</p>
    <h3>When is property transfer tax due?</h3>
    <p>When the property is registered at the Land Title Office. Your legal professional normally files the return and collects the tax from you on closing.</p>
    <h3>Can I get the first-time buyer exemption on a $900,000 home?</h3>
    <p>No. The home's fair market value must be $835,000 or less for the full exemption, and the exemption ends at $860,000.</p>
    <h3>Do I have to live in the home to keep the exemption?</h3>
    <p>Yes. For both exemptions you must move in within 92 days of registration and live there as your principal residence until the first anniversary.</p>
    <h3>Is the newly built home exemption only for first-time buyers?</h3>
    <p>No. The province's page requires Canadian citizenship or permanent residence, and the home must be a qualifying new principal residence; it does not require a first purchase.</p>
    <h3>What is the BC property transfer tax on a $500,000 home?</h3>
    <p>$8,000 before exemptions: $2,000 on the first $200,000 and $6,000 on the next $300,000. A first-time buyer pays nothing.</p>
    <h3>Does the property transfer tax count as part of my down payment?</h3>
    <p>No. It is a separate cost due on closing, so keep it in cash on top of the down payment.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${PTT}">Province of British Columbia: Property transfer tax</a>, reviewed November 25, 2026</li>
        <li><a href="${EXAMPLES}">Province of British Columbia: Calculation examples for the property transfer tax</a>, reviewed November 25, 2026</li>
        <li><a href="${FTB}">Province of British Columbia: First time home buyers' program</a>, reviewed November 25, 2026</li>
        <li><a href="${FTB_AMT}">Province of British Columbia: First time home buyers' exemption amounts</a>, reviewed November 25, 2026</li>
        <li><a href="${NEW}">Province of British Columbia: Newly built home exemption</a>, reviewed November 25, 2026</li>
        <li><a href="${NEW_AMT}">Province of British Columbia: Newly built home exemption amounts</a>, reviewed November 25, 2026</li>
        <li><a href="${ADDL}">Province of British Columbia: Additional property transfer tax for foreign entities and taxable trustees</a>, reviewed November 25, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/land-transfer-tax-closing-costs-canada/">Land transfer tax and closing costs across Canada</a></li>
        <li><a href="/blog/land-transfer-tax-ontario/">Ontario land transfer tax</a></li>
        <li><a href="/blog/welcome-tax-quebec/">Quebec welcome tax</a></li>
        <li><a href="/blog/first-time-home-buyer-guide-canada/">First-time home buyer guide</a></li>
        <li><a href="/blog/home-buyers-plan-hbp-guide/">Home Buyers' Plan guide</a></li>
    </ul>

    ${batchFooter(D, 'Real Estate', disclaimer)}

</div>`;

export const propertyTransferTaxBcPost = batchPost({
  date: D,
  category: 'Real Estate',
  categorySlug: 'real-estate',
  subcategory: 'closing-costs-transfer-tax',
  slug: 'property-transfer-tax-bc',
  title: 'BC Property Transfer Tax: Rates, Exemptions and Price Cliffs',
  excerpt:
    'BC property transfer tax rates, the first time home buyers\' exemption ($835,000 limit), the newly built home exemption ($1,100,000 limit), foreign buyer tax and the tax at seven prices.',
  content,
});
