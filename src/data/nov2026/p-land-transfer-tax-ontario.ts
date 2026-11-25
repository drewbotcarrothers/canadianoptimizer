import { batchFooter, batchPost } from './types';

const D = '2026-11-25';
const LTT = 'https://www.ontario.ca/document/land-transfer-tax';
const CALC = `${LTT}/calculating-land-transfer-tax`;
const FTB = `${LTT}/land-transfer-tax-refunds-first-time-homebuyers`;
const TOR = 'https://www.toronto.ca/services-payments/property-taxes-utilities/municipal-land-transfer-tax-mltt';
const TOR_RATES = `${TOR}/municipal-land-transfer-tax-mltt-rates-and-fees/`;
const TOR_REBATE = `${TOR}/municipal-land-transfer-tax-mltt-rebate-opportunities/`;
const BILL = 'https://www.ola.org/sites/default/files/node-files/bill/document/pdf/2026/2026-10/b143_e.pdf';
const ANNEX = 'https://budget.ontario.ca/2026/fallstatement/annex.html';
const HUB = '/category/real-estate/closing-costs-transfer-tax/';

const disclaimer = `General education, not financial, tax or legal advice. Rates, refund rules and fees come from the Ontario Ministry of Finance and City of Toronto pages listed under Sources, all read on November 25, 2026. The purchase prices in the tables are illustrations, not market data, and every dollar figure for them is our own arithmetic from the published rates. Your lawyer's statement of adjustments gives the amounts that count, and Ontario's calculation can differ if part of the price is for chattels, if HST applies or if only some buyers qualify for a refund. Canadian Optimizer has no affiliate relationship with any lender or lawyer named here and links to no application page.`;

const content = `<div class="container">

    <div class="hook">
        Ontario charges land transfer tax on every home purchase, and Toronto adds a second one on top. <span class="highlight">On an $800,000 home the province's tax is $12,475, and inside the City of Toronto the city charges another $12,475.</span> This guide, part of our <a href="${HUB}">closing costs and land transfer tax hub</a>, shows the rates, the Toronto layer, the first-time buyer refunds and what each costs at six prices.
    </div>

    <p>Ontario's land transfer tax is 0.5% on the first $55,000 of the price, 1% up to $250,000, 1.5% up to $400,000 and 2% above that, plus 2.5% on any part over $2,000,000 for a home with one or two single-family residences. It is due when the transfer is registered, and Toronto buyers also pay the city's own matching tax.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The provincial tax on a $400,000 home is $4,475, and the same home in Toronto carries another $4,475 of municipal tax.</li>
            <li>A first-time buyer refund of up to $4,000 applies in all of Ontario, and Toronto adds a rebate of up to $4,475, so a $400,000 Toronto purchase costs a first-time buyer $475 in total.</li>
            <li>Toronto's rates above $3,000,000 rose on April 1, 2026, to 4.4% and higher, which adds $17,000 to a $3,500,000 purchase.</li>
            <li>Non-residents pay an extra 25% provincially, plus 10% in Toronto.</li>
            <li>Budget the cash for closing day: the tax is paid through your lawyer when the transfer is registered, not later with your mortgage.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <ul>
            <li><a href="#rates">Provincial rates</a></li>
            <li><a href="#base">What the tax is charged on</a></li>
            <li><a href="#toronto">Toronto's municipal tax</a></li>
            <li><a href="#table">Cost at six prices</a></li>
            <li><a href="#refund">First-time buyer refunds</a></li>
            <li><a href="#extras">Other taxes and fees</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>

    <h2 id="rates">What are Ontario's land transfer tax rates?</h2>
    <p>The Ministry of Finance's <a href="${CALC}">calculation page</a> lists five brackets for agreements of purchase and sale after November 14, 2016. Each rate applies only to the slice of the price inside that bracket.</p>
    <div class="table-wrapper">
        <table>
            <caption>Ontario land transfer tax rates (Ministry of Finance)</caption>
            <thead>
                <tr><th>Slice of the price</th><th>Rate</th></tr>
            </thead>
            <tbody>
                <tr><td>Up to and including $55,000</td><td>0.5%</td></tr>
                <tr><td>$55,000 to $250,000</td><td>1.0%</td></tr>
                <tr><td>$250,000 to $400,000</td><td>1.5%</td></tr>
                <tr><td>$400,000 and above</td><td>2.0%</td></tr>
                <tr><td>Above $2,000,000, one or two single-family residences only</td><td>2.5%</td></tr>
            </tbody>
        </table>
    </div>
    <p>The ministry's own example is a $400,000 transfer: $275 on the first slice, $1,950 on the second and $2,250 on the third, for $4,475. That is the number to remember, because it is also the tax on the first $400,000 of every more expensive home.</p>

    <h2 id="base">What is the tax charged on?</h2>
    <p>On the value of the consideration, which is more than the sticker price. The <a href="${CALC}">ministry's page</a> says it includes the purchase price, liabilities you assume, benefits conferred, soft costs and the cost of upgrades on a new home. HST you pay on a new home is not part of it, so land transfer tax is not charged on HST.</p>
    <ul>
        <li><strong>Resale homes:</strong> usually the price on the agreement, plus any mortgage you take over.</li>
        <li><strong>New homes:</strong> the price plus soft costs and upgrades, with HST excluded.</li>
        <li><strong>A vacant lot with a construction contract:</strong> the cost of the lot plus the cost of construction.</li>
        <li><strong>Foreign currency:</strong> converted to Canadian dollars on the date the agreement of purchase and sale becomes binding.</li>
    </ul>
    <p>The tax is payable when the transfer is registered, which your lawyer handles on closing day. It is separate from your <a href="/blog/mortgage-stress-test-canada/">mortgage qualification</a>, so keep it in cash.</p>

    <h2 id="toronto">How does Toronto's municipal land transfer tax work?</h2>
    <p>Toronto charges its own tax, in addition to the provincial one, on every purchase inside the city. The City of Toronto's <a href="${TOR_RATES}">rates page</a> says it has applied since February 1, 2008. For homes with one or two single-family residences, the city's rates match the province's up to $2,000,000 and then climb.</p>
    <div class="table-wrapper">
        <table>
            <caption>Toronto municipal land transfer tax, one or two single-family residences (rates as of April 1, 2026)</caption>
            <thead>
                <tr><th>Slice of the price</th><th>Rate</th></tr>
            </thead>
            <tbody>
                <tr><td>Up to $55,000</td><td>0.5%</td></tr>
                <tr><td>$55,000 to $250,000</td><td>1.0%</td></tr>
                <tr><td>$250,000 to $400,000</td><td>1.5%</td></tr>
                <tr><td>$400,000 to $2,000,000</td><td>2.0%</td></tr>
                <tr><td>$2,000,000 to $3,000,000</td><td>2.5%</td></tr>
                <tr><td>$3,000,000 to $4,000,000</td><td>4.4%</td></tr>
                <tr><td>$4,000,000 to $5,000,000</td><td>5.45%</td></tr>
                <tr><td>$5,000,000 to $10,000,000</td><td>6.5%</td></tr>
                <tr><td>$10,000,000 to $20,000,000</td><td>7.55%</td></tr>
                <tr><td>Over $20,000,000</td><td>8.6%</td></tr>
            </tbody>
        </table>
    </div>
    <p>City Council passed the graduated rates for high-value homes on December 17, 2025, and they took effect on April 1, 2026. Other property, such as multi-residential buildings, keeps the older structure with 2% above $400,000. The effect is small for most buyers and large at the top: on a $3,500,000 home the old structure gave $66,475 and the new one gives $83,475, or $17,000 more (our arithmetic from the two rate lists).</p>

    <h2 id="table">How much land transfer tax will you pay at different prices?</h2>
    <p>For a home inside Toronto, roughly twice the provincial amount until the price passes $2,000,000, less any first-time buyer refund. The table applies the published rates to six illustration prices.</p>
    <p class="did-you-know" data-info-gain><strong>What this page adds:</strong> a table that runs the Ontario brackets, the Toronto brackets (including the April 2026 high-value rates) and both first-time buyer refunds side by side at six prices, so the all-in cost of a Toronto purchase with and without the refunds is visible in one row.</p>
    <div class="table-wrapper">
        <table>
            <caption>Land transfer tax at six illustration prices (our arithmetic from the published rates)</caption>
            <thead>
                <tr><th>Price (illustration)</th><th>Ontario tax</th><th>Ontario tax after first-time refund</th><th>Toronto tax</th><th>Toronto tax after first-time rebate</th><th>Toronto total, no refunds</th><th>Toronto total, first-time buyer</th></tr>
            </thead>
            <tbody>
                <tr><td>$400,000</td><td>$4,475</td><td>$475</td><td>$4,475</td><td>$0</td><td>$8,950</td><td>$475</td></tr>
                <tr class="highlight-row"><td>$600,000</td><td>$8,475</td><td>$4,475</td><td>$8,475</td><td>$4,000</td><td>$16,950</td><td>$8,475</td></tr>
                <tr><td>$800,000</td><td>$12,475</td><td>$8,475</td><td>$12,475</td><td>$8,000</td><td>$24,950</td><td>$16,475</td></tr>
                <tr><td>$1,000,000</td><td>$16,475</td><td>$12,475</td><td>$16,475</td><td>$12,000</td><td>$32,950</td><td>$24,475</td></tr>
                <tr><td>$1,500,000</td><td>$26,475</td><td>$22,475</td><td>$26,475</td><td>$22,000</td><td>$52,950</td><td>$44,475</td></tr>
                <tr><td>$3,500,000</td><td>$73,975</td><td>$69,975</td><td>$83,475</td><td>$79,000</td><td>$157,450</td><td>$148,975</td></tr>
            </tbody>
        </table>
    </div>
    <p>Outside Toronto, only the first two money columns apply. Two patterns stand out. A $600,000 purchase in Toronto carries $16,950 of tax before refunds, which is more than many buyers expect to find at closing. And once a price passes about $400,000, the refunds stop growing, so the refund is worth less and less as a share of the tax.</p>

    <div class="example-box">
        <div class="example-title">Illustration: a first-time buyer at $800,000 in Toronto</div>
        <div class="example-calculation">
            <div class="line"><span>Ontario land transfer tax</span><span>$12,475</span></div>
            <div class="line"><span>Less provincial first-time refund (maximum)</span><span>−$4,000</span></div>
            <div class="line"><span>Toronto municipal land transfer tax</span><span>$12,475</span></div>
            <div class="line"><span>Less Toronto first-time rebate (maximum)</span><span>−$4,475</span></div>
            <div class="line total"><span>Land transfer tax due</span><span>$16,475</span></div>
        </div>
        <p>The home price is an illustration. Without the two refunds the same purchase costs $24,950.</p>
    </div>

    <h2 id="refund">Who qualifies for the first-time buyer refund?</h2>
    <p>A buyer who is at least 18, is a Canadian citizen or permanent resident, has never owned a home or an interest in one anywhere in the world and will live in the home. The Ministry of Finance's <a href="${FTB}">refund page</a> sets out the full list.</p>
    <ul>
        <li><strong>Amount:</strong> up to $4,000, which means no provincial tax on the first $368,000 for an eligible home. Our arithmetic from the brackets gives $3,995 of tax at $368,000.</li>
        <li><strong>Move in:</strong> you must occupy the home as your principal residence within nine months of the transfer.</li>
        <li><strong>Spouses:</strong> if you have a spouse, the spouse cannot have owned a home anywhere in the world while they were your spouse. If they did, neither of you gets the refund.</li>
        <li><strong>Mixed buyers:</strong> if one buyer does not qualify, the refund is proportionate to the share held by the buyers who do. A parent who is not a first-time buyer holding 50% leaves the child with half of the maximum.</li>
        <li><strong>Gifts and inheritances count:</strong> the page says the way you acquired a home, whether purchase, gift or inheritance, is not relevant to whether you owned one before.</li>
        <li><strong>No second chance:</strong> you cannot re-qualify, even if you sold years ago. That differs from the federal <a href="/blog/home-buyers-plan-hbp-guide/">Home Buyers' Plan</a>.</li>
        <li><strong>Timing:</strong> claim it at registration through your lawyer, or apply to the ministry within 18 months of the transfer.</li>
    </ul>
    <p>Toronto's <a href="${TOR_REBATE}">rebate page</a> has the same definition of a first-time purchaser, a rebate of up to $4,475 and a separate application to the city if it was not claimed at registration. The rebate covers newly built and resale homes, not commercial, industrial or multi-residential property.</p>
    <p>Ontario also says false statements in a refund application can be prosecuted, with a maximum fine of $4,000 on conviction. A bill tabled on October 29, 2026 (Bill 143) proposes raising it to $10,000, but at first reading it was not law as of November 25, 2026. The <a href="${ANNEX}">fall statement annex</a> lists it with no change to the rates.</p>

    <h2 id="extras">What else sits on top of land transfer tax in Ontario?</h2>
    <p>Three other costs matter most. The non-resident rate and the new-home HST rules change the total sharply, and Toronto charges a small processing fee.</p>
    <ul>
        <li><strong>Non-Resident Speculation Tax:</strong> 25% on residential property anywhere in Ontario bought by foreign nationals, foreign corporations or taxable trustees, in addition to land transfer tax, effective since October 25, 2022.</li>
        <li><strong>Toronto's non-resident tax:</strong> 10% of the price for foreign buyers of certain residential property, since January 1, 2025, in addition to the municipal tax.</li>
        <li><strong>HST on new homes:</strong> applies to newly built and substantially renovated homes, not resales. Buyers of new homes may receive a rebate of up to $24,000 of the provincial 8% portion; questions about it go to the CRA.</li>
        <li><strong>Toronto administration fee:</strong> $102.56 plus HST per municipal tax transaction.</li>
    </ul>
    <p>For the full list of closing-day costs and the other provinces, see the <a href="/blog/land-transfer-tax-closing-costs-canada/">national guide to land transfer tax and closing costs</a>. BC and Quebec work very differently, as the <a href="/blog/property-transfer-tax-bc/">BC property transfer tax guide</a> and the <a href="/blog/welcome-tax-quebec/">Quebec welcome tax guide</a> show, and buyers saving in an FHSA should read the <a href="/blog/fhsa-home-purchase-sequencing-canada/">FHSA purchase sequencing guide</a> to plan the cash.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <h3>How do you calculate Ontario land transfer tax?</h3>
    <p>Apply each rate to its slice of the price and add the results. On $400,000 that is $275, $1,950 and $2,250, for $4,475.</p>
    <h3>Do I pay land transfer tax twice in Toronto?</h3>
    <p>Yes, in effect. The province and the City of Toronto each charge their own tax on the same purchase, and the city's tax is in addition to the provincial one.</p>
    <h3>Is there a land transfer tax refund for first-time buyers?</h3>
    <p>Yes. Up to $4,000 from Ontario and, inside Toronto, up to $4,475 more from the city, both for eligible first-time buyers who move in within nine months.</p>
    <h3>When is land transfer tax due?</h3>
    <p>When the transfer is registered, normally on closing day. If a transfer is not registered within 30 days of closing, a return and the payment are due to the ministry within 30 days after closing.</p>
    <h3>Is land transfer tax charged on HST?</h3>
    <p>No. When HST applies to the purchase price, the value of the consideration does not include the HST paid.</p>
    <h3>Can I get a refund if I overpaid?</h3>
    <p>Yes, in most cases within four years of paying. First-time buyer refunds must be claimed within 18 months of the transfer.</p>
    <h3>Does the 2.5% rate apply to every expensive home?</h3>
    <p>No. It applies to the part above $2,000,000 when the land contains one or two single-family residences.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="${CALC}">Ontario Ministry of Finance: Calculating land transfer tax</a>, reviewed November 25, 2026</li>
        <li><a href="${FTB}">Ontario Ministry of Finance: Land transfer tax refunds for first-time homebuyers</a>, reviewed November 25, 2026</li>
        <li><a href="${LTT}">Ontario Ministry of Finance: Land transfer tax</a>, reviewed November 25, 2026</li>
        <li><a href="${TOR_RATES}">City of Toronto: Municipal land transfer tax rates and fees</a>, reviewed November 25, 2026</li>
        <li><a href="${TOR_REBATE}">City of Toronto: Municipal land transfer tax rebate opportunities</a>, reviewed November 25, 2026</li>
        <li><a href="${ANNEX}">Ontario 2026 Fall Statement, Annex</a>, reviewed November 25, 2026</li>
        <li><a href="${BILL}">Legislative Assembly of Ontario: Bill 143 (first reading October 29, 2026)</a>, reviewed November 25, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/land-transfer-tax-closing-costs-canada/">Land transfer tax and closing costs across Canada</a></li>
        <li><a href="/blog/first-time-home-buyer-guide-canada/">First-time home buyer guide</a></li>
        <li><a href="/blog/fhsa-home-purchase-sequencing-canada/">FHSA and home purchase sequencing</a></li>
        <li><a href="/blog/home-buyers-plan-hbp-guide/">Home Buyers' Plan guide</a></li>
        <li><a href="/blog/first-time-home-buyers-gst-rebate/">First-time home buyers' GST rebate</a></li>
    </ul>

    ${batchFooter(D, 'Real Estate', disclaimer)}

</div>`;

export const landTransferTaxOntarioPost = batchPost({
  date: D,
  category: 'Real Estate',
  categorySlug: 'real-estate',
  subcategory: 'closing-costs-transfer-tax',
  slug: 'land-transfer-tax-ontario',
  title: 'Ontario Land Transfer Tax: Rates, Toronto Tax and Refunds',
  excerpt:
    'Ontario land transfer tax rates, Toronto\'s municipal tax (including the April 2026 high-value rates), both first-time buyer refunds and what each costs at six prices.',
  content,
});
