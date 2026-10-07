import type { PostVideoFields } from '../lib/post-video';
import { oct2026RealEstatePosts } from './oct2026/real-estate';

type EstatePost = {
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  author: string;
  date: string;
  updated: string;
  excerpt: string;
  image: string;
  content: string;
} & PostVideoFields;

const meta = {
  category: 'Real Estate',
  categorySlug: 'real-estate',
  author: 'Andrew',
  date: '2026-09-27',
  updated: '2026-09-27',
} as const;

function estatePost(
  slug: string,
  title: string,
  excerpt: string,
  content: string
): EstatePost {
  return {
    ...meta,
    title,
    slug,
    excerpt,
    image: `/images/blog/${slug}.png`,
    content,
  };
}

const footer = (published: string) => `<div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about Canadian mortgages, default insurance, and housing accounts as of September 2026. It is not a mortgage offer, a rate quote, or tax, credit, or legal advice. Contract rates, posted rates, penalties, premiums, and program limits change, and they depend on the commitment and on your CRA file. Official figures below are tied to OSFI, CMHC, the Bank of Canada, CRA, the Department of Finance, FCAC, or a named lender page reviewed in September 2026. Dollar payments that use an assumed contract rate are labelled as illustrations. Confirm the commitment, your lender's penalty calculator, and your CRA account before you sign, switch, break a term, or withdraw.</p>
        <div class="footer-note">Published: ${published} | Category: Real Estate | Author: Andrew</div>
    </div>`;

const published = 'September 27, 2026';

export const realEstateClusterPosts: EstatePost[] = [
  estatePost(
    'canadian-mortgage-guide',
    'The Canadian Mortgage Guide: Rates, Terms, Renewal, and Prepayment',
    'Four mortgage numbers: the contract rate, qualification at contract plus 2% or 5.25%, the penalty if you leave, and a 65% revolving cap.',
    `<div class="container">

    <div class="hook">
        A Canadian mortgage in September 2026 comes down to four numbers you can look up. You pay the <span class="highlight">contract rate</span>. You qualify at the greater of that rate plus 2 percentage points or 5.25%. You pay a penalty, often the larger of three months' interest and an interest-rate differential, if you leave a closed term early. Any revolving slice of a combined plan is capped at 65% of value.
    </div>

    <p>This is the hub for the real-estate mortgage cluster. The renewal rules are the <a href="/blog/mortgage-renewal-strategy-canada/">2026 renewal guide</a>. Fixed versus variable is a <a href="/blog/fixed-vs-variable-mortgage-canada/">decision framework</a>, not a forecast. The qualifying-rate arithmetic is the <a href="/blog/mortgage-stress-test-canada/">stress test explainer</a>. Breaking a term is the <a href="/blog/mortgage-prepayment-penalty-ird-canada/">IRD penalty guide</a>. First purchases, the Home Buyers' Plan, and readvanceable plans each have their own page, linked below. The leveraged version of a readvanceable plan is the existing <a href="/blog/smith-maneuver-canada-steps-risks/">Smith Manoeuvre guide</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>As of September 2, 2026, the Bank of Canada overnight target is 2.25%. On September 23, 2026, the chartered-bank prime series was 4.45% and the posted 5-year conventional mortgage rate was 6.09%.</li>
            <li>The rate in a commitment is a discount off a posted rate. This page does not quote that discounted rate. It changes by lender and by the day.</li>
            <li>OSFI's minimum qualifying rate for uninsured mortgages is the greater of the contract rate plus 2% or a 5.25% floor. CMHC uses the same qualifying rate for insured debt-service ratios.</li>
            <li>Term is how long the rate contract lasts. Amortization is how long the math takes to reach zero if you never change the payment. They are different clocks.</li>
            <li>Interest on the mortgage that bought the home you live in is not deductible. Paying it down is a guaranteed after-tax return equal to the contract rate. That comparison is the <a href="/blog/mortgage-prepayment-vs-investing-canada/">prepayment versus investing guide</a>.</li>
        </ul>
    </div>

    <h2>What do the official rates actually say in September 2026?</h2>

    <p>Three official series set the backdrop. None of them is the rate your lender will type into a commitment.</p>

    <table>
        <caption>Official Canadian rate benchmarks, as of September 2026</caption>
        <thead>
            <tr>
                <th>Series</th>
                <th>Reading</th>
                <th>What it is</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Bank of Canada overnight target</td>
                <td>2.25% on September 2, 2026. Bank Rate 2.50%. Deposit rate 2.20%.</td>
                <td>The policy rate. The next announcement is October 28, 2026. The Bank said it is prepared to adjust policy as inflation and growth data arrive.</td>
            </tr>
            <tr>
                <td>Chartered-bank prime</td>
                <td>4.45% on September 23, 2026</td>
                <td>The Bank of Canada's prime series. Each institution sets its own prime from its funding cost. A variable mortgage is usually that lender's prime plus or minus a spread written in the contract.</td>
            </tr>
            <tr>
                <td>Posted 5-year conventional mortgage</td>
                <td>6.09% on September 23, 2026</td>
                <td>The chartered-bank administered 5-year conventional rate. It is the sticker price that penalty math often starts from. Borrowers typically receive a discount. The size of that discount is lender-specific.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. Sources: Bank of Canada policy announcement of September 2, 2026, and the Bank's Valet series V80691311 (prime) and V80691335 (5-year conventional) for September 23, 2026.</p>

    <h2>How do term, amortization, and insurance fit together?</h2>

    <table>
        <caption>The mortgage decisions that are easy to mix up</caption>
        <thead>
            <tr>
                <th>Decision</th>
                <th>What it controls</th>
                <th>Where to go deeper</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Fixed or variable</td>
                <td>Whether the rate is locked for the term, or moves with the lender's prime.</td>
                <td><a href="/blog/fixed-vs-variable-mortgage-canada/">Fixed versus variable</a></td>
            </tr>
            <tr>
                <td>Term length</td>
                <td>When you next renegotiate, and how large a penalty can be if you leave early.</td>
                <td><a href="/blog/mortgage-prepayment-penalty-ird-canada/">IRD versus three months' interest</a></td>
            </tr>
            <tr>
                <td>Amortization</td>
                <td>The payment size. A longer amortization lowers the payment and raises total interest. Insured mortgages are 25 years unless you qualify for CMHC Home Start's 30-year option.</td>
                <td><a href="/blog/first-time-home-buyer-guide-canada/">First-time buyer guide</a></td>
            </tr>
            <tr>
                <td>Insured or uninsured</td>
                <td>A loan-to-value above 80% on a purchase generally needs default insurance. The price cap for insured homeowner loans is under $1.5 million.</td>
                <td><a href="/blog/mortgage-stress-test-canada/">Stress test</a></td>
            </tr>
            <tr>
                <td>Renew, switch, or refinance</td>
                <td>A straight switch can avoid OSFI's prescribed qualifying rate. Adding money or years, or moving a readvanceable plan, is a different application.</td>
                <td><a href="/blog/mortgage-renewal-strategy-canada/">Renewal in 2026</a></td>
            </tr>
            <tr>
                <td>Readvanceable plan</td>
                <td>A revolving limit that can grow as principal falls, inside OSFI's 65% loan-to-value cap.</td>
                <td><a href="/blog/readvanceable-mortgage-canada/">Readvanceable mortgages</a></td>
            </tr>
        </tbody>
    </table>

    <h2>What does one percentage point do to the payment?</h2>

    <p>Canadian fixed residential mortgages compound semi-annually. The monthly rate in the examples below is (1 + annual rate / 2) raised to the power of 1/6, minus 1. The payment is that monthly rate applied to a standard amortizing loan. The 4.50% contract rate is an assumption so the arithmetic is visible. It is an illustration, not a rate on offer in September 2026.</p>

    <div class="example-box">
        <strong>Illustration: $500,000, 25-year amortization, constant rate</strong>
        <p>At an assumed 4.50% contract rate, the payment is $2,767 a month. At 5.50%, one point higher, it is $3,052, about $285 more. The stress-test rate on a 4.50% contract is 6.50%, because 4.50% plus 2 points beats the 5.25% floor. The qualifying payment is $3,349, about $582 above the contract payment. You do not pay the qualifying payment. The lender uses it to decide whether the file fits. The full qualifying-rate rules, including CMHC's 39% gross debt-service and 44% total debt-service maxima, are the <a href="/blog/mortgage-stress-test-canada/">stress test page</a>.</p>
    </div>

    <h2>Where does the mortgage stop and the tax plan start?</h2>

    <p>A closed mortgage lets you prepay a stated amount each year without a penalty. Using that privilege, versus investing the same dollars, is the <a href="/blog/mortgage-prepayment-vs-tfsa-rrsp-canada/">prepayment versus TFSA and RRSP comparison</a>. Closing costs, including land transfer tax, are cash on top of the down payment: the <a href="/blog/land-transfer-tax-closing-costs-canada/">closing cost guide</a>. If the property will be a rental, the interest may be deductible and the principal residence exemption may not: start with <a href="/blog/primary-residence-vs-rental-property-canada/">primary residence versus rental</a>. Life insurance sold at the signing table is a different product from a personal term policy sized to the household; the needs test is the <a href="/blog/life-insurance-need-analysis-canada/">life insurance need analysis</a>. The side-by-side is <a href="/blog/mortgage-life-insurance-vs-term-life-canada/">mortgage life insurance versus term life</a>.</p>

    <h2>Where does each spoke go deeper?</h2>

    <ul>
        <li><a href="/blog/mortgage-renewal-strategy-canada/">Mortgage renewal in 2026</a> — straight switches, the $3,000 cost allowance, and what still gets stress-tested.</li>
        <li><a href="/blog/fixed-vs-variable-mortgage-canada/">Fixed versus variable</a> — payment certainty against the penalty you pay if you break the term.</li>
        <li><a href="/blog/mortgage-stress-test-canada/">Minimum qualifying rate</a> — buffer, floor, and who is exempt at renewal.</li>
        <li><a href="/blog/mortgage-prepayment-penalty-ird-canada/">Prepayment penalties</a> — FCAC's worked example, then the discount that makes IRD larger.</li>
        <li><a href="/blog/first-time-home-buyer-guide-canada/">First-time home buyer guide</a> — FHSA, HBP, the home buyers' amount, and CMHC.</li>
        <li><a href="/blog/home-buyers-plan-hbp-guide/">Home Buyers' Plan</a> — the $60,000 limit and the 2031 repayment start for a 2026 withdrawal.</li>
        <li><a href="/blog/readvanceable-mortgage-canada/">Readvanceable mortgages</a> — the 65% cap and the lender pages that describe the product.</li>
        <li><a href="/blog/rent-vs-buy-canada/">Rent versus buy calculator</a> — ending wealth on the down payment, the rate, and the costs you type.</li>
        <li><a href="/blog/rent-vs-buy-decision-canada/">Rent versus buy decision guide</a> — which assumptions to refuse to leave on the defaults, then run the calculator.</li>
        <li><a href="/blog/cmhc-mortgage-insurance-canada/">CMHC mortgage insurance</a> — the premium schedule, the 30-year surcharge, and when 20 percent down is the cheaper path.</li>
        <li><a href="/blog/rental-property-tax-deductions-canada/">Rental property tax deductions</a> — current expenses, CCA, and recapture on Form T776.</li>
        <li><a href="/blog/mortgage-prepayment-calculator/">Mortgage prepayment calculator</a> — the semi-annual payment, and the interest a lump sum saves.</li>
    </ul>

    <h2>Frequently asked questions</h2>

    <h3>What mortgage rate should I use for planning in September 2026?</h3>
    <p>Use the rate in a written commitment, not a headline. The official backdrop, as of September 2026, is a 2.25% overnight target, a 4.45% chartered-bank prime series, and a 6.09% posted 5-year conventional rate. The contract rate is a discount from a posted rate. Ask two lenders for the rate, the term, the prepayment privilege, and the penalty formula before you compare a single number.</p>

    <h3>Is the stress test the rate I pay?</h3>
    <p>No. You pay the contract rate. OSFI's minimum qualifying rate is the greater of the contract rate plus 2 percentage points or 5.25%. Lenders run debt-service ratios at that higher rate. On an illustrative 4.50% contract, qualification uses 6.50%. The payment you actually make is the contract payment, until the rate resets.</p>

    <h3>What is the difference between the term and the amortization?</h3>
    <p>The term is the length of the rate contract, often one to five years. The amortization is the number of years the payment is calculated to pay the balance to zero, often 25, or 30 if an insured first-time buyer or new-build buyer uses CMHC Home Start. At the end of the term you still owe the remaining balance, and you renew, switch, or repay it.</p>

    <h3>Can I deduct mortgage interest on my home?</h3>
    <p>Interest on money borrowed to buy the home you live in is not deductible. Interest on money borrowed to earn income from a business or property can be, if the current use of the funds passes the test in paragraph 20(1)(c) and Folio S3-F6-C1. A readvance used for a kitchen, a car, or a TFSA fails that test. The tracing rules are the HELOC guide, and the loop that tries to convert the mortgage is the Smith Manoeuvre guide.</p>

    <h3>Do I need default insurance if I have 20% down?</h3>
    <p>A purchase with a loan-to-value of 80% or less is generally uninsured, and you are not required to buy high-ratio default insurance. Some lenders still use portfolio insurance behind the scenes. That is their arrangement, and it can change how a later switch works. High-ratio loans, above 80% loan-to-value, need insurance, and the insured price cap is under $1.5 million.</p>

    <h3>When should I start a renewal?</h3>
    <p>Start while you still have time to get a written offer from your current lender and from at least one other federally regulated lender. Read whether the mortgage is insured, whether it sits inside a collateral or readvanceable plan, and whether you need to borrow more. Those three facts decide whether OSFI's straight-switch treatment can apply. The checklist is the renewal guide.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.bankofcanada.ca/2026/09/fad-press-release-2026-09-02/">Bank of Canada, September 2, 2026 rate announcement</a></li>
        <li><a href="https://www.bankofcanada.ca/valet/observations/V80691335,V80691311/json?recent=4">Bank of Canada Valet: prime (V80691311) and 5-year conventional mortgage (V80691335)</a></li>
        <li><a href="https://www.osfi-bsif.gc.ca/en/supervision/financial-institutions/banks/minimum-qualifying-rate-uninsured-mortgages">OSFI: minimum qualifying rate for uninsured mortgages</a></li>
        <li><a href="https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/mortgage-loan-insurance/mortgage-loan-insurance-homeownership-programs/purchase">CMHC Purchase</a></li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/mortgages/reduce-prepayment-penalties.html">FCAC: prepayment penalties</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The rate lasts one term. The tax character of the debt can last the whole amortization.</strong></p>
        <p>Interest on a home you live in is not deductible. Interest on money borrowed to invest can be. The filing side of that distinction is the 2026 tax guide.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),

  estatePost(
    'mortgage-renewal-strategy-canada',
    'Mortgage Renewal in 2026: Straight Switches, the Stress Test, and Negotiating Your Rate',
    'In 2026, OSFI does not prescribe the stress test when an uninsured stand-alone mortgage switches lenders at renewal with no added balance or amortization. Refinances and readvanceable plans still qualify.',
    `<div class="container">

    <div class="hook">
        At renewal in 2026, OSFI does not expect federally regulated lenders to apply the prescribed minimum qualifying rate when an <span class="highlight">uninsured stand-alone mortgage</span> switches from one federally regulated lender to another, with no increase in the loan amount or the remaining amortization. Adding balance, stretching the amortization, or moving a readvanceable plan is a different application, and the stress test comes back.
    </div>

    <p>The qualifying-rate formula itself, the greater of the contract rate plus 2 percentage points or 5.25%, is the <a href="/blog/mortgage-stress-test-canada/">stress test explainer</a>. How to compare a fixed offer with a variable offer is the <a href="/blog/fixed-vs-variable-mortgage-canada/">fixed versus variable framework</a>. The cost of leaving before maturity is the <a href="/blog/mortgage-prepayment-penalty-ird-canada/">IRD penalty guide</a>. All three sit under the <a href="/blog/canadian-mortgage-guide/">Canadian mortgage guide</a>. A renewal is also the moment people start a <a href="/blog/smith-maneuver-canada-steps-risks/">Smith Manoeuvre</a>, which needs a readvanceable plan and a fresh underwrite.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>OSFI's straight-switch letter is dated November 21, 2024, and the regulator's minimum-qualifying-rate page still described the same exemption in September 2026.</li>
            <li>The exemption is narrow: stand-alone, uninsured, amortizing, not readvanceable, federally regulated lender to federally regulated lender, no longer amortization, and no equity take-out.</li>
            <li>The unpaid balance may be increased by up to $3,000 to cover penalties or fees. That is the letter's allowance for costs. It is not a renovation budget.</li>
            <li>The new lender still underwrites you. OSFI stopped prescribing the qualifying rate for this case. It did not order the lender to approve the file.</li>
            <li>Insured switches, credit-union switches, and any refinance follow their own rules. Do not assume the OSFI letter covers them.</li>
        </ul>
    </div>

    <h2>What counts as a straight switch?</h2>

    <table>
        <caption>Uninsured straight switch versus the applications that are still stress-tested, as of September 2026</caption>
        <thead>
            <tr>
                <th>You want to</th>
                <th>OSFI's prescribed qualifying rate</th>
                <th>What to confirm</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Move an uninsured stand-alone mortgage to another federally regulated lender at renewal. Same balance, aside from up to $3,000 of costs. Same or shorter remaining amortization.</td>
                <td>OSFI does not prescribe the minimum qualifying rate.</td>
                <td>The new lender still checks income, credit, and the property, and may use its own stressed rate.</td>
            </tr>
            <tr>
                <td>Borrow more than the $3,000 cost allowance, or lengthen the amortization.</td>
                <td>This is a refinance. The prescribed qualifying rate applies at a federally regulated lender.</td>
                <td>A penalty can apply if you are not yet at maturity. Price it with the IRD guide before you chase a lower rate.</td>
            </tr>
            <tr>
                <td>Switch a combined loan plan or a readvanceable mortgage.</td>
                <td>The November 2024 letter excludes these. Footnote 1 limits the exemption to stand-alone mortgages outside combined plans, amortizing and not readvanceable.</td>
                <td>The <a href="/blog/readvanceable-mortgage-canada/">readvanceable guide</a> is why a collateral charge is hard to assign.</td>
            </tr>
            <tr>
                <td>Move to or from a provincially regulated credit union, or from a mortgage finance company.</td>
                <td>The letter is aimed at federally regulated institutions. Treat the exemption as unavailable until the new lender says otherwise in writing.</td>
                <td>A credit union can still be the right lender. It is a different rule set.</td>
            </tr>
            <tr>
                <td>Switch an insured mortgage.</td>
                <td>Insured qualification is set by the insurer and the Department of Finance, not by OSFI's uninsured letter.</td>
                <td>Ask the new lender and the insurer whether they will re-qualify you at the minimum qualifying rate.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. Source: OSFI's November 21, 2024 letter on uninsured straight switches, and OSFI's minimum qualifying rate page.</p>

    <h2>How do you negotiate the renewal?</h2>

    <ol>
        <li><strong>Read the renewal letter for an automatic renewal.</strong> A lender can roll a closed term into a new term at a rate you did not shop. The date on the letter is the deadline, not a suggestion.</li>
        <li><strong>Write down three facts.</strong> Insured or uninsured. Stand-alone or a collateral charge. Balance and remaining amortization. Those facts decide which row of the table you are in.</li>
        <li><strong>Get the current lender's offer in writing, then one other federally regulated offer.</strong> Compare rate, term, prepayment privilege, and the penalty method. A cheaper rate with a harsh interest-rate differential is a bet that you will stay the whole term. The <a href="/blog/mortgage-prepayment-penalty-ird-canada/">penalty guide</a> shows why the discount off the posted rate matters.</li>
        <li><strong>Ask the new lender, in writing, whether they will apply the prescribed qualifying rate.</strong> On a qualifying straight switch, OSFI does not require it. The lender can still decline, or still stress the payment under its own policy.</li>
        <li><strong>If you need cash out, stop calling it a renewal.</strong> Price the penalty, the new stress test, and the closing costs. Land transfer tax is not charged again on a plain switch of the same property, but a refinance still has legal fees. The cost map is the <a href="/blog/land-transfer-tax-closing-costs-canada/">closing cost guide</a>.</li>
        <li><strong>Decide what the payment is for.</strong> A lower payment that you spend is a longer amortization in disguise. A lower payment that you send as a prepayment is the <a href="/blog/mortgage-prepayment-vs-investing-canada/">prepayment versus investing</a> choice. The interest and months that extra payment saves are the <a href="/blog/mortgage-prepayment-calculator/">mortgage prepayment calculator</a>.</li>
    </ol>

    <div class="example-box">
        <strong>Illustration: the $3,000 line</strong>
        <p>An uninsured borrower owes $420,000 at maturity. A new federally regulated lender will cover a $2,400 discharge and assignment cost by adding it to the balance. The new balance is $422,400. That increase is inside the letter's $3,000 allowance for transaction costs, and equity take-out is still not allowed. The same borrower who wants $25,000 for a kitchen has left the straight switch. The file is a refinance. At a federally regulated lender it is underwritten at the minimum qualifying rate, and the kitchen interest is not deductible. If the kitchen can wait, renew first and price the renovation against cash or against a separate decision.</p>
    </div>

    <div class="warning-box">
        <strong>A blended rate can hide the remaining penalty:</strong>
        <p>Some lenders offer to blend the old rate and the new rate instead of charging the interest-rate differential in cash. You still pay the penalty. It is inside the rate. Ask for the penalty in dollars, then decide whether blending or paying it and switching is cheaper over the new term.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>Do I still have to pass the stress test to switch lenders in 2026?</h3>
    <p>On a narrow set of files, OSFI no longer prescribes it. The mortgage has to be uninsured, stand-alone, not a readvanceable combined plan, and moving from one federally regulated lender to another, without a longer amortization and without borrowing more than $3,000 for costs. Everyone else should expect a qualifying-rate test. Even on a straight switch, the new lender underwrites the file and can say no.</p>

    <h3>Does the straight-switch rule apply to insured mortgages?</h3>
    <p>OSFI's letter is about uninsured mortgages. Insured mortgages are qualified under rules set for insurers and the Department of Finance. Ask the insurer and the new lender whether a switch at renewal will be re-tested at the greater of the contract rate plus 2% or 5.25%. Do not copy the uninsured exemption across.</p>

    <h3>Can I roll closing costs into the new mortgage?</h3>
    <p>The straight-switch letter allows the unpaid balance to rise by up to $3,000 for related costs such as penalties or fees. Anything beyond that, including a renovation or a debt consolidation, is equity take-out. Equity take-out is outside the exemption and is underwritten as a new loan.</p>

    <h3>What if my mortgage is with a credit union?</h3>
    <p>OSFI supervises federally regulated institutions. A switch that starts or ends at a provincially regulated credit union is outside the letter as written. You may still get a better rate. Budget for a full application, including the qualifying rate, until the lender confirms otherwise.</p>

    <h3>Should I break the mortgage before maturity to catch a lower rate?</h3>
    <p>Only after you have the penalty in dollars from the lender's calculator. On a closed fixed term the charge is usually the higher of three months' interest and an interest-rate differential, and the differential can be several times the interest you think you will save. Run the IRD guide's method, then compare it with the payment difference over the months you have left.</p>

    <h3>Will renewing into a readvanceable mortgage start the Smith Manoeuvre?</h3>
    <p>A renewal into a combined plan is a new product, usually a new registration, and it is outside the straight-switch exemption. The revolving limit still has to respect OSFI's 65% loan-to-value cap. Interest is deductible only on the portion whose current use is earning income. Read the readvanceable guide and the Smith Manoeuvre guide before you convert a plain mortgage into a credit line.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.osfi-bsif.gc.ca/en/guidance/guidance-library/osfi-exempts-uninsured-mortgage-straight-switches-prescribed-mqr-implements-portfolio-lti-limits">OSFI letter, November 21, 2024: uninsured straight switches</a></li>
        <li><a href="https://www.osfi-bsif.gc.ca/en/supervision/financial-institutions/banks/minimum-qualifying-rate-uninsured-mortgages">OSFI: minimum qualifying rate</a></li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/rights-responsibilities/rights-mortgages/rights-prepayments.html">FCAC: mortgage prepayment rights</a></li>
        <li><a href="https://www.bankofcanada.ca/2026/09/fad-press-release-2026-09-02/">Bank of Canada, September 2, 2026</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>A renewal sets the rate. It does not set the tax.</strong></p>
        <p>If the renewed debt stays on the home you live in, the interest stays non-deductible. The 2026 tax guide is the filing side of any plan that borrows to invest instead.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),

  estatePost(
    'fixed-vs-variable-mortgage-canada',
    'Fixed vs Variable Mortgage in 2026: A Decision Framework',
    'Pick a fixed rate in 2026 when the payment must stay put and you expect to finish the term. Pick a variable rate when you can absorb a prime move and may need the smaller break fee. Overnight rate: 2.25%.',
    `<div class="container">

    <div class="hook">
        Choose a fixed rate in 2026 when the payment has to stay the same for the whole term and you expect to finish that term. Choose a variable rate when you can absorb a move in your lender's prime and you may need to break the mortgage, because the break fee on a closed variable is often three months' interest. As of September 2, 2026, the Bank of Canada overnight target is <span class="highlight">2.25%</span>. This page does not quote a discounted contract rate.
    </div>

    <p>Both choices are underwritten at the same qualifying rate, explained in the <a href="/blog/mortgage-stress-test-canada/">stress test guide</a>. The penalty difference is the whole point of the <a href="/blog/mortgage-prepayment-penalty-ird-canada/">IRD guide</a>. Renewal timing, including when a switch avoids the prescribed qualifying rate, is the <a href="/blog/mortgage-renewal-strategy-canada/">2026 renewal guide</a>. The hub is the <a href="/blog/canadian-mortgage-guide/">Canadian mortgage guide</a>.</p>

    <div class="callout">
        <strong>Choose fixed if</strong> a higher payment next year would hit spending you cannot cut, or you are unlikely to sell, refinance, or port the mortgage before the term ends.
        <p><strong>Choose variable if</strong> the household can carry a higher payment, you have a real chance of breaking the term, and you have confirmed in the commitment that the penalty is three months' interest. A variable rate is a contract with prime. It is not a prediction that the Bank of Canada will cut.</p>
    </div>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>On September 23, 2026, the Bank of Canada chartered-bank prime series was 4.45%, and the posted 5-year conventional mortgage rate was 6.09%.</li>
            <li>A variable contract is usually that lender's prime plus or minus a spread. The spread is in the commitment. It is not a number this page will invent.</li>
            <li>The posted 6.09% is a sticker price. The discount between that sticker and a fixed contract is what makes an interest-rate differential large if posted rates fall and you break the term.</li>
            <li>On an illustrative $500,000 loan amortized over 25 years, moving the rate from 4.50% to 5.50% raises the payment by about $285 a month. The 4.50% figure is an assumption, not an offer.</li>
            <li>The Bank's next policy announcement is October 28, 2026. Its September statement said upside inflation risks had increased and that it is prepared to adjust the policy rate.</li>
        </ul>
    </div>

    <h2>How do the two contracts differ?</h2>

    <table>
        <caption>Fixed versus variable, as of September 2026. Penalty terms are typical and must be confirmed in the commitment.</caption>
        <thead>
            <tr>
                <th></th>
                <th>Fixed</th>
                <th>Variable</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>What moves</td>
                <td>The rate is set for the term.</td>
                <td>The rate moves when that lender's prime moves. Prime itself moves with funding costs, which follow the overnight target.</td>
            </tr>
            <tr>
                <td>Payment</td>
                <td>Principal and interest stay on the schedule you signed, if the payment was calculated at the contract rate.</td>
                <td>Some contracts change the payment when prime changes. Others keep the payment and let the amortization drift. Read which one you are signing.</td>
            </tr>
            <tr>
                <td>Qualifying rate</td>
                <td>Greater of contract plus 2% or 5.25%, for a new uninsured loan at a federally regulated lender, and for CMHC-insured debt-service ratios.</td>
                <td>Same qualifying-rate rule. A lower contract rate qualifies at a lower stress rate, until the 5.25% floor binds.</td>
            </tr>
            <tr>
                <td>Penalty to break a closed term</td>
                <td>Usually the higher of three months' interest and an interest-rate differential. The differential uses the lender's posted rates and your original discount.</td>
                <td>Often three months' interest. TD's public explanation of its own closed variable, for example, describes a three-month interest charge. Your lender may differ.</td>
            </tr>
            <tr>
                <td>Posted-rate reference</td>
                <td>The chartered-bank 5-year posted rate was 6.09% on September 23, 2026. Your discount off a posted rate is the input that inflates IRD.</td>
                <td>The prime series was 4.45% the same day. The contract spread around prime is the number to negotiate.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. Sources: Bank of Canada September 2 announcement and September 23 Valet readings; OSFI minimum qualifying rate; TD's public description of its fixed versus variable prepayment charge; FCAC's prepayment-penalty page.</p>

    <h2>What does one point on prime do to a household?</h2>

    <div class="example-box">
        <strong>Illustration: $500,000, 25 years, semi-annual compounding. Rates are assumed.</strong>
        <p>At 4.50%, the payment is $2,767 a month. At 5.50%, it is $3,052, about $285 more, or about $3,420 a year. At 3.50%, it is $2,496, about $271 less than the 4.50% payment. A variable borrower who cannot cut $285 a month, or lengthen the amortization inside the contract, is a fixed-rate borrower who has not admitted it. The qualifying payment at 6.50% on this loan is $3,349. That is the stress-test figure, and it is not the bill.</p>
        <p>The monthly rate used here is (1 + annual rate / 2) to the power of 1/6, minus 1, which is the Canadian semi-annual convention. Over a year, a one-point gap of $285 a month is $3,420. A penalty of $12,000, which is FCAC's own IRD illustration on a smaller loan, takes more than three years of that gap to earn back. Price the penalty before you treat a one-point discount as found money. The method is the <a href="/blog/mortgage-prepayment-penalty-ird-canada/">penalty guide</a>.</p>
    </div>

    <h2>Which risks are you actually taking?</h2>

    <p>A fixed rate transfers payment risk to the lender for the term, and hands you penalty risk if you leave while your contract rate is above the lender's comparison rate. A variable rate keeps payment risk with you, and usually keeps the exit cheaper. Households that sell on a job transfer, who may separate, or who expect a large prepayment from a bonus, are often paying for an option they will exercise. The option is the three-month penalty. Households that will stay put and who budget to the dollar are paying for a payment that does not change. Match the contract to the move you might actually make.</p>

    <p>The Bank of Canada held the overnight target at 2.25% on September 2, 2026, the seventh consecutive hold at that level after the October 2025 cut, and said inflation had been around 3% largely because of gasoline. That is context for the direction of prime. It is not a mortgage rate, and it is not a reason to take a contract you cannot carry if the next move is up. The October 28, 2026 announcement is the next scheduled decision. If a lower payment shows up, sending it back to the mortgage is the <a href="/blog/mortgage-prepayment-vs-investing-canada/">prepayment versus investing guide</a>. Using a variable readvance to invest is a second decision, the <a href="/blog/smith-maneuver-canada-steps-risks/">Smith Manoeuvre</a>, and it belongs on top of a payment you can already carry.</p>

    <p>If you are splitting a balance, some combined plans let you put part of the loan in a fixed term and part in a variable term. Scotiabank's STEP page describes dividing a mortgage into portions with their own terms. That is a structure, not a free hedge. Each portion still has its own penalty. The product limits are the <a href="/blog/readvanceable-mortgage-canada/">readvanceable guide</a>. Money you will not need for the house belongs in the comparison with investing: <a href="/blog/mortgage-prepayment-vs-tfsa-rrsp-canada/">prepayment versus TFSA and RRSP</a>.</p>

    <h2>Frequently asked questions</h2>

    <h3>Is variable always cheaper than fixed in Canada?</h3>
    <p>No. A variable rate wins only on the path prime actually takes, after the spread in your contract. In September 2026 the overnight target is 2.25% and the Bank has said it may adjust. A fixed rate buys a payment. Compare the two written offers, including the penalty, over the term you will actually keep.</p>

    <h3>What is a typical variable mortgage penalty?</h3>
    <p>On many closed variable contracts it is three months' interest on the amount you prepay. TD describes its own closed variable that way. Fixed closed contracts usually charge the higher of three months' interest and an interest-rate differential. The commitment controls. Ask for the formula before you sign, and use the lender's calculator before you break it.</p>

    <h3>Does the stress test treat fixed and variable the same way?</h3>
    <p>The formula is the same: the greater of the contract rate plus 2 percentage points or 5.25%. A lower contract rate produces a lower qualifying rate, until the floor. It does not produce a free pass. CMHC also calculates insured gross and total debt-service ratios at that qualifying rate.</p>

    <h3>Should I use the 6.09% posted rate as my fixed rate?</h3>
    <p>That 6.09% is the chartered-bank posted 5-year conventional rate on September 23, 2026. It is the sticker used in older qualifying rules and in many penalty formulas. The rate you are offered is a discount from a posted rate. Get the discounted rate, the size of the discount, and the posted rate the lender will use in an IRD, in writing.</p>

    <h3>Can I convert a variable mortgage to a fixed mortgage later?</h3>
    <p>Many lenders allow a conversion to a fixed term they are offering that day, sometimes without an interest-rate differential. The fixed rate you convert into is the rate then on offer, not the rate you wish you had locked. Confirm whether the conversion itself has a fee and whether the new term restarts the penalty clock.</p>

    <h3>How does this choice interact with a renewal?</h3>
    <p>At maturity you can usually move to either contract without a break fee, because the term is over. Before maturity, switching the type means breaking the old term. If the mortgage is an uninsured stand-alone loan and you are not borrowing more, the 2026 renewal guide explains when OSFI's prescribed qualifying rate does not apply. The penalty can still apply if you are early.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.bankofcanada.ca/2026/09/fad-press-release-2026-09-02/">Bank of Canada, September 2, 2026</a></li>
        <li><a href="https://www.bankofcanada.ca/valet/observations/V80691335,V80691311/json?recent=4">Bank of Canada Valet, September 23, 2026 readings</a></li>
        <li><a href="https://www.osfi-bsif.gc.ca/en/supervision/financial-institutions/banks/minimum-qualifying-rate-uninsured-mortgages">OSFI minimum qualifying rate</a></li>
        <li><a href="https://stories.td.com/ca/en/article/td-explains-what-is-an-ird">TD: how it describes IRD and three months' interest</a></li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/mortgages/reduce-prepayment-penalties.html">FCAC: prepayment penalties</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The contract is a few years. The tax on the interest is the life of the loan.</strong></p>
        <p>Personal mortgage interest is not deductible. If you were comparing the payment with an investment return, do it after tax. The 2026 tax guide is that half of the worksheet.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),

  estatePost(
    'mortgage-stress-test-canada',
    'The Mortgage Stress Test Explained (Minimum Qualifying Rate)',
    'As of September 2026, you qualify at the greater of your contract rate plus 2 percentage points or 5.25%. The floor matters only under 3.25%.',
    `<div class="container">

    <div class="hook">
        As of September 2026, Canada's mortgage stress test uses one qualifying rate: the <span class="highlight">greater of the contract rate plus 2 percentage points, or 5.25%</span>. OSFI sets that minimum for uninsured mortgages at federally regulated lenders. CMHC uses the same rate when it calculates insured debt-service ratios. The 5.25% floor is the binding number only when the contract rate is below 3.25%.
    </div>

    <p>Who can skip the prescribed rate at renewal is the <a href="/blog/mortgage-renewal-strategy-canada/">2026 renewal guide</a>. How the contract rate itself is chosen is the <a href="/blog/fixed-vs-variable-mortgage-canada/">fixed versus variable framework</a>. Both pages hang off the <a href="/blog/canadian-mortgage-guide/">Canadian mortgage guide</a>. First-time buyers meet the test again inside CMHC's premiums and the 30-year Home Start option, covered in the <a href="/blog/first-time-home-buyer-guide-canada/">first-time buyer guide</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Buffer: 2 percentage points over the contract rate. Floor: 5.25%. You qualify at whichever is higher. OSFI reviews the calibration at least annually. Its public page still showed these settings in September 2026.</li>
            <li>You pay the contract rate. The qualifying rate is a test, not a price.</li>
            <li>For the loans it insures, CMHC caps gross debt service at 39% and total debt service at 44%, both calculated at the qualifying rate. At least one borrower needs a credit score of 600, with room for alternative credit histories.</li>
            <li>Uninsured straight switches at renewal are the main exception to the prescribed rate, and the exception is narrow. See the renewal guide.</li>
            <li>On an illustrative $500,000 loan at a 4.50% contract rate, the qualifying rate is 6.50% and the qualifying payment is about $582 a month higher than the payment you would actually make.</li>
        </ul>
    </div>

    <h2>How do you calculate the qualifying rate?</h2>

    <table>
        <caption>Minimum qualifying rate, as of September 2026</caption>
        <thead>
            <tr>
                <th>Contract rate</th>
                <th>Contract plus 2 points</th>
                <th>Floor</th>
                <th>Qualifying rate</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>3.00% (illustration)</td>
                <td>5.00%</td>
                <td>5.25%</td>
                <td>5.25%. The floor wins.</td>
            </tr>
            <tr>
                <td>3.25%</td>
                <td>5.25%</td>
                <td>5.25%</td>
                <td>5.25%. The two tests tie.</td>
            </tr>
            <tr>
                <td>4.50% (illustration)</td>
                <td>6.50%</td>
                <td>5.25%</td>
                <td>6.50%. The buffer wins.</td>
            </tr>
            <tr>
                <td>6.09% posted 5-year, September 23, 2026</td>
                <td>8.09%</td>
                <td>5.25%</td>
                <td>8.09%, if someone actually contracted at the posted rate. Most people contract at a discount, and the test uses the discounted contract rate.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. The 3.00% and 4.50% rows are arithmetic, not offers. The 6.09% row is the Bank of Canada chartered-bank posted 5-year conventional rate on September 23, 2026. Rule source: OSFI's minimum qualifying rate page, and CMHC Purchase, which requires debt-service ratios at the greater of the contract rate plus 2% or 5.25%.</p>

    <h2>What does the test do to a $500,000 loan?</h2>

    <div class="example-box">
        <strong>Illustration: $500,000, 25-year amortization, semi-annual compounding</strong>
        <p>Assume a contract rate of 4.50%. The qualifying rate is 6.50%. The contract payment is $2,767 a month. The qualifying payment is $3,349 a month. The $582 gap is the test. Add an illustration of housing costs around that qualifying payment: $3,349 times 12 is $40,188, plus $4,000 of property tax and $1,200 of heat, which is $45,388 a year. CMHC's 39% gross debt-service cap would require about $116,400 of gross income to carry those housing costs alone ($45,388 divided by 0.39). A $500 monthly car payment adds $6,000 a year. Total debt service of $51,388 divided by CMHC's 44% cap is about $116,800 of income. In this sketch the car barely changes the income test. A larger non-housing payment would. Uninsured lenders set their own ratio caps under Guideline B-20. The 39% and 44% figures are CMHC's insured maxima, not a universal uninsured rule.</p>
    </div>

    <p>The monthly rate in the payment is (1 + annual rate / 2) to the power of 1/6, minus 1. Property tax and heat in the sketch are round assumptions so the ratio is visible. Your lender will use the tax bill and its own heating convention.</p>

    <h2>Who has to pass it, and who does not?</h2>

    <ul>
        <li><strong>New uninsured mortgages</strong> at federally regulated lenders. OSFI expects the minimum qualifying rate under Guideline B-20.</li>
        <li><strong>Insured mortgages.</strong> The Department of Finance aligned the insured qualifying rate with the same greater-of formula in 2021. CMHC's current Purchase and Home Start pages still calculate gross and total debt service at that rate. The Canada Gazette consolidation of the insurable-loan rules records the same formula.</li>
        <li><strong>Refinances</strong> that increase the amount or the amortization. The renewal guide explains why these are outside the straight-switch exemption.</li>
        <li><strong>Uninsured straight switches</strong> from one federally regulated lender to another, with no increase in balance beyond $3,000 of costs and no increase in remaining amortization, on a stand-alone mortgage that is not a readvanceable combined plan. OSFI does not prescribe the qualifying rate. The lender still underwrites.</li>
    </ul>

    <p>OSFI also applies loan-to-income limits to a lender's uninsured portfolio. Those limits are not a personal cap you can calculate from a webpage, and they do not replace the qualifying rate on a new origination. If a lender says the file does not fit its portfolio, that is a business limit on top of the stress test.</p>

    <p>A lower contract rate makes the test easier, until the floor. Shopping the rate therefore changes how much house the same income can carry. It does not remove the test. The <a href="/blog/fixed-vs-variable-mortgage-canada/">fixed versus variable page</a> is about which contract you want after you know you qualify. Cash you might use to raise the down payment, and shrink the loan, includes the <a href="/blog/fhsa-home-purchase-sequencing-canada/">FHSA sequencing plan</a> and the <a href="/blog/home-buyers-plan-hbp-guide/">Home Buyers' Plan</a>. The contribution ceilings on those accounts are the <a href="/blog/contribution-limits/">2026 limits table</a>. Cash you still need at the lawyer, including land transfer tax, is the <a href="/blog/land-transfer-tax-closing-costs-canada/">closing cost guide</a>.</p>

    <h2>Frequently asked questions</h2>

    <h3>What is the mortgage stress test rate in 2026?</h3>
    <p>The greater of your contract rate plus 2 percentage points, or 5.25%. OSFI's page stated that calibration for uninsured mortgages in September 2026. CMHC uses the same rate for insured gross and total debt-service ratios. You pay the contract rate, not the qualifying rate.</p>

    <h3>When does the 5.25% floor matter?</h3>
    <p>When the contract rate is below 3.25%. At 3.25%, contract plus 2 equals the floor. Above that, the buffer is the test. A contract at 4.50% qualifies at 6.50%. The floor is still OSFI's backstop if contract rates fall, and the regulator reviews it at least annually.</p>

    <h3>Are gross debt service and total debt service the same for every lender?</h3>
    <p>CMHC's insured maxima are 39% gross and 44% total, calculated at the qualifying rate, with a minimum credit score of 600 for at least one borrower. Uninsured lenders follow Guideline B-20 and their own residential mortgage policy. They can be tighter than 39 and 44. Ask which ratios and which heating and tax figures the lender used.</p>

    <h3>Does the stress test apply when I renew with the same lender?</h3>
    <p>A plain renewal with the same lender, with no new money and no longer amortization, is not a new origination. The straight-switch exemption is about moving to a different federally regulated lender. If you add balance or years, expect a new qualifying-rate test. The renewal guide has the rows.</p>

    <h3>Does a bigger down payment avoid the stress test?</h3>
    <p>A down payment of 20% or more avoids high-ratio default insurance. It does not avoid the uninsured qualifying rate at a federally regulated lender. The test applies to most new uninsured mortgages. What changes is the loan size, the insurance premium, and whether the file is under OSFI's rule or an insurer's rule. Both currently use the same qualifying-rate formula.</p>

    <h3>Can two borrowers with the same income qualify for different amounts?</h3>
    <p>Yes. The qualifying rate depends on the contract rate each person is offered. Property tax, heat, condo fees, and other debts change the ratios. Credit score matters for insurance eligibility. One file can fail CMHC's 39% gross test and another can pass on the same salary because the property tax bill is different.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.osfi-bsif.gc.ca/en/supervision/financial-institutions/banks/minimum-qualifying-rate-uninsured-mortgages">OSFI: minimum qualifying rate for uninsured mortgages</a></li>
        <li><a href="https://www.osfi-bsif.gc.ca/en/guidance/guidance-library/osfi-exempts-uninsured-mortgage-straight-switches-prescribed-mqr-implements-portfolio-lti-limits">OSFI letter on straight switches and loan-to-income limits</a></li>
        <li><a href="https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/mortgage-loan-insurance/mortgage-loan-insurance-homeownership-programs/purchase">CMHC Purchase: debt-service ratios and premiums</a></li>
        <li><a href="https://gazette.gc.ca/rp-pr/p2/2025/2025-03-12/html/sor-dors55-eng.html">Canada Gazette: insurable housing loan regulations</a></li>
        <li><a href="https://www.bankofcanada.ca/valet/observations/V80691335/json?recent=1">Bank of Canada 5-year conventional posted rate</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Qualification is a lender's test. Deductibility is CRA's test.</strong></p>
        <p>Passing the stress test does not make mortgage interest deductible. The 2026 tax guide covers the return. The mortgage guide covers the loan.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),

  estatePost(
    'mortgage-prepayment-penalty-ird-canada',
    'Mortgage Prepayment Penalties: IRD vs Three Months\' Interest',
    'FCAC\'s own example, on a $200,000 balance at 6% with 36 months left, is a $3,000 three-month charge and a $12,000 interest-rate differential. The penalty is the higher figure. Your discount can make it larger.',
    `<div class="container">

    <div class="hook">
        On a closed fixed-rate mortgage, the prepayment charge is usually the <span class="highlight">higher of three months' interest and an interest-rate differential</span>. In FCAC's own example, a $200,000 balance at 6% with 36 months left produces a $3,000 three-month charge and a $12,000 differential, so the penalty is $12,000. A discount off the posted rate can make a real penalty larger than that simple gap.
    </div>

    <p>Whether you should pay the penalty to catch a lower rate is a renewal question: the <a href="/blog/mortgage-renewal-strategy-canada/">2026 renewal guide</a>. The reason fixed terms carry this risk, and many variable terms do not, is the <a href="/blog/fixed-vs-variable-mortgage-canada/">fixed versus variable framework</a>. Both sit under the <a href="/blog/canadian-mortgage-guide/">Canadian mortgage guide</a>. Using your annual penalty-free privilege instead of breaking the mortgage is the <a href="/blog/mortgage-prepayment-vs-investing-canada/">prepayment versus investing guide</a>. What an allowed prepayment saves in interest and months, on the balance and rate you type, is the <a href="/blog/mortgage-prepayment-calculator/">mortgage prepayment calculator</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>FCAC says the charge is usually the higher of three months' interest on what you still owe, and the interest-rate differential. Lenders differ. Federally regulated lenders must describe the method, and they post a calculator.</li>
            <li>Three months' interest in the FCAC example is balance times contract rate times 3/12.</li>
            <li>A plain differential compares your contract rate with the lender's current rate for the time left. A big-bank differential often compares your contract rate with the current posted rate minus the discount you were originally given.</li>
            <li>On September 23, 2026, the posted 5-year conventional rate in the Bank of Canada series was 6.09%. That sticker is why a discount exists. This page does not quote your discount or your break fee.</li>
            <li>Closed variable contracts are often three months' interest only. TD describes its own variable that way. Confirm yours.</li>
        </ul>
    </div>

    <h2>How does FCAC's example work?</h2>

    <table>
        <caption>FCAC's published prepayment illustration. These are FCAC's inputs, not September 2026 market rates.</caption>
        <thead>
            <tr>
                <th>Input</th>
                <th>FCAC's figure</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Balance</td>
                <td>$200,000</td>
            </tr>
            <tr>
                <td>Contract rate</td>
                <td>6%</td>
            </tr>
            <tr>
                <td>Time left</td>
                <td>36 months of a 5-year term</td>
            </tr>
            <tr>
                <td>Lender's current posted rate for a 36-month term</td>
                <td>4%</td>
            </tr>
            <tr>
                <td>Three months' interest</td>
                <td>$200,000 × 6% × 3/12 = $3,000</td>
            </tr>
            <tr>
                <td>Interest-rate differential</td>
                <td>$200,000 × (6% − 4%) × 3 years = $12,000</td>
            </tr>
            <tr>
                <td>Penalty</td>
                <td>$12,000, the higher of the two, plus any administration fee the contract adds</td>
            </tr>
        </tbody>
    </table>

    <p>Source: FCAC, "Mortgage fees: Prepayment penalties," as reviewed September 2026. FCAC tells you to use your lender's calculator because the method varies.</p>

    <h2>Why does the discount make the penalty larger?</h2>

    <p>Many bank contracts do not compare your contract rate with the rate a new borrower would actually pay. They compare it with a posted rate, then subtract the discount you received when you signed. If posted rates fall, you can owe a differential even though today's discounted rates look close to your contract rate.</p>

    <div class="example-box">
        <strong>Illustration of the discount method. Every rate in this box is assumed.</strong>
        <p>Contract rate 5%. Original posted rate 7%, so the original discount was 2 percentage points. Three years remain. Assume the lender's current posted rate for a 3-year term is 5%. The comparison rate is 5% minus the 2-point discount, which is 3%. The differential is 5% minus 3%, which is 2 percentage points. On a $300,000 balance the simple differential is $300,000 × 0.02 × 3 = $18,000. Three months' interest is $300,000 × 0.05 × 3/12 = $3,750. The penalty in this illustration is $18,000.</p>
        <p>Change the current posted rate and the penalty changes. The lender may also exclude the slice you are allowed to prepay for free, and it may use a day count that is not "years times balance." The chartered-bank posted 5-year rate of 6.09% on September 23, 2026 is evidence that a posted sticker sits well above many contracts. It is not the 7% or the 5% in this illustration, and it is not your penalty. Run the calculator on the lender's site. FCAC says federally regulated institutions have to provide one.</p>
    </div>

    <div class="warning-box">
        <strong>A term longer than five years has a statutory exit:</strong>
        <p>If the term is longer than five years, ask whether you can prepay after five years with a penalty capped at three months' interest. That right sits in the Interest Act for mortgages on real property, and the contract should not waive it away for an individual borrower. Confirm it against the statute and the mortgage before you treat a 10-year term as a 10-year lock.</p>
    </div>

    <h2>When is the penalty worth paying?</h2>

    <p>Divide the penalty by the monthly payment you would save. That is the number of months the new rate has to stay in force before the break-even, ignoring tax because personal mortgage interest is not deductible. A $12,000 penalty that saves $285 a month, the one-point gap on the illustrative $500,000 loan in the <a href="/blog/fixed-vs-variable-mortgage-canada/">fixed versus variable guide</a>, takes about 42 months to earn back. If the remaining term is shorter than that, paying the penalty to refinance loses even before legal fees.</p>

    <p>At maturity the penalty is usually zero, which is why the renewal guide tells you to shop then. Before maturity, a blended rate from your current lender often folds the differential into the new rate. Ask for both numbers: the cash penalty, and the blended rate with the penalty priced out. The <a href="/blog/mortgage-prepayment-vs-tfsa-rrsp-canada/">TFSA and RRSP comparison</a> is the alternative use of a lump sum you were going to use as a penalty-free prepayment. Debt you could clear at a higher interest rate is the <a href="/blog/debt-payoff-vs-investing-canada/">debt payoff guide</a>.</p>

    <h2>Frequently asked questions</h2>

    <h3>Is the penalty always the interest-rate differential?</h3>
    <p>It is the higher of the two charges in the usual fixed-rate formula, and three months' interest wins when it is larger. That happens when your contract rate is close to, or below, the lender's comparison rate. Variable closed mortgages often skip the differential and charge three months' interest. The commitment is the authority. FCAC's $12,000 figure is an example of the differential winning.</p>

    <h3>Why is my bank's penalty bigger than an online calculator?</h3>
    <p>Online calculators often use a simple gap between two rates. Bank contracts often subtract your original discount from today's posted rate, which widens the gap. They also choose which posted term matches the time you have left. Use the calculator on your own lender's site, and ask which posted rate and which discount went into it.</p>

    <h3>Can I avoid the penalty with my prepayment privilege?</h3>
    <p>You can usually prepay a stated percent of the original balance, or increase the payment, once a year without a charge. The penalty applies to the amount above that privilege. If you are breaking the mortgage anyway, ask the lender to apply the privilege first so the differential is calculated on a smaller balance. The privilege does not erase a full discharge.</p>

    <h3>Does the penalty change if I sell the house?</h3>
    <p>A sale before the end of a closed term is a prepayment. The same charge usually applies, unless the mortgage is portable and the new lender lets you move it to the next house. Porting has conditions, including a new application and a deadline. Read the portability clause before you waive conditions on a sale.</p>

    <h3>Are insured mortgages charged a smaller penalty?</h3>
    <p>Some insured contracts limit the charge. Many do not. The insurer is not the one who writes your penalty clause. The lender does. Ask for the clause, and do not assume a high-ratio mortgage is three months' interest unless the contract says so.</p>

    <h3>Is the penalty tax deductible?</h3>
    <p>A penalty on the mortgage for the home you live in is personal, in the same way the interest is personal. A penalty on a loan whose current use is earning rental or investment income can be treated differently. That is a tracing question for the year you pay it. The HELOC and rental pages on this site are the neighbouring guides, and they are not a ruling on your file.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/mortgages/reduce-prepayment-penalties.html">FCAC: mortgage prepayment penalties, including the $200,000 example</a></li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/rights-responsibilities/rights-mortgages/rights-prepayments.html">FCAC: prepayment rights</a></li>
        <li><a href="https://stories.td.com/ca/en/article/td-explains-what-is-an-ird">TD's description of its IRD and three-month charge</a></li>
        <li><a href="https://laws-lois.justice.gc.ca/eng/acts/i-15/FullText.html">Interest Act, section 10 (prepayment after five years)</a></li>
        <li><a href="https://www.bankofcanada.ca/valet/observations/V80691335/json?recent=1">Bank of Canada posted 5-year conventional rate</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>A penalty is a cash cost. The interest behind it may or may not be deductible.</strong></p>
        <p>Personal mortgage interest is not a carrying charge. Investment-loan interest can be. The 2026 tax guide is where that line gets filed.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),

  estatePost(
    'first-time-home-buyer-guide-canada',
    'First-Time Home Buyer Guide Canada (2026): FHSA, HBP, Rebates, and Order of Operations',
    'In 2026 the first-home stack is an FHSA at $8,000 a year and $40,000 lifetime, an HBP withdrawal up to $60,000, a $10,000 home buyers\' amount worth $1,400 at the 14% federal rate, and CMHC insurance under a $1.5 million cap.',
    `<div class="container">

    <div class="hook">
        In 2026 a first purchase is an order of operations, not a single rebate. The FHSA adds <span class="highlight">$8,000 of room a year, up to $40,000 over a lifetime</span>. The Home Buyers' Plan lets you withdraw up to $60,000 from an RRSP. The federal home buyers' amount is a claim of up to $10,000, worth $1,400 at the 14% lowest federal rate for 2026. If the down payment is under 20%, CMHC insurance applies and the price has to be under $1.5 million.
    </div>

    <p>The cheque-by-cheque timing of the FHSA is the existing <a href="/blog/fhsa-home-purchase-sequencing-canada/">FHSA sequencing guide</a>. The repayment math on the RRSP withdrawal is the <a href="/blog/home-buyers-plan-hbp-guide/">Home Buyers' Plan guide</a>. How the lender turns your income into a maximum loan is the <a href="/blog/mortgage-stress-test-canada/">stress test</a>. The hub for the rate, the term, and the penalty is the <a href="/blog/canadian-mortgage-guide/">Canadian mortgage guide</a>. Provincial land transfer rebates live in the <a href="/blog/land-transfer-tax-closing-costs-canada/">closing cost guide</a>, and other cash programs are the <a href="/blog/first-home-buyer-grants-beyond-fhsa-canada/">grants beyond the FHSA</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Open the FHSA when you are eligible. Room starts the year you open. It does not backdate. Unused room carries forward, and the carry-forward used in CRA's formula is capped at $8,000, so a later year tops out at $16,000. The lifetime limit is $40,000.</li>
            <li>"First-time buyer" is a different legal test for the FHSA, the HBP, line 31270, and CMHC Home Start. Passing one does not prove the others.</li>
            <li>For a 2026 purchase, line 31270 is a claim of up to $10,000. At the 14% lowest federal rate, a full claim is $1,400. CRA's older tip still says up to $1,500, which is the 15% arithmetic.</li>
            <li>Minimum insured down payment is 5% of the first $500,000 and 10% of the rest, on a home priced under $1.5 million. CMHC's own $760,000 example needs $51,000 down, not 5%.</li>
            <li>A 30-year insured amortization is CMHC Home Start: a first-time buyer or a new build, loan-to-value above 80%. The premium is 0.20 percentage points higher than the 25-year schedule in the matching band.</li>
        </ul>
    </div>

    <h2>Which first-time test applies to which program?</h2>

    <table>
        <caption>First-time buyer programs, as of September 2026. Confirm the test that matches the program you are using.</caption>
        <thead>
            <tr>
                <th>Program</th>
                <th>What you get</th>
                <th>The test to read before you rely on it</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>FHSA</td>
                <td>$8,000 participation room in the year you open, then $8,000 a year, lifetime $40,000. Contributions are generally deductible. A qualifying withdrawal is tax-free.</td>
                <td>Opening and withdrawing use related tests that are not identical. The sequencing guide and the <a href="/blog/fhsa-guide/">FHSA guide</a> split them.</td>
            </tr>
            <tr>
                <td>Home Buyers' Plan</td>
                <td>Up to $60,000 per person from an RRSP, with no tax withheld if the withdrawal qualifies. A 2026 first withdrawal starts repayment in 2031.</td>
                <td>CRA's participation conditions, including a written agreement and occupancy within a year. Details are the HBP guide.</td>
            </tr>
            <tr>
                <td>Home buyers' amount, line 31270</td>
                <td>Claim up to $10,000. At 14% for 2026, the federal credit is $1,400. You can split the $10,000 with a spouse. The combined claim cannot exceed $10,000.</td>
                <td>CRA: you did not live in a home you or your spouse owned in the year of purchase or the four preceding years. A disability exception exists.</td>
            </tr>
            <tr>
                <td>CMHC Home Start, 30-year amortization</td>
                <td>Insured amortization up to 30 years, at a higher premium, for a high-ratio loan.</td>
                <td>At least one borrower is a first-time buyer under CMHC's definition, or the home is newly built and not previously occupied. Price under $1.5 million. Loan-to-value above 80%.</td>
            </tr>
            <tr>
                <td>Land transfer rebates</td>
                <td>Provincial and, in Toronto, municipal. Amounts differ.</td>
                <td>The <a href="/blog/land-transfer-tax-closing-costs-canada/">closing cost guide</a>. Do not import another province's rebate.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. Sources: CRA FHSA pages, CRA Home Buyers' Plan page, CRA line 31270, CRA's 2026 federal rates, Finance's report on the 14% rate and non-refundable credits, and CMHC Home Start.</p>

    <h2>What order should the money move in?</h2>

    <ol>
        <li><strong>Confirm each first-time test on its own.</strong> A person who owned a home years ago can fail one program and pass another. Spouses are often tested together. Read both names against each program.</li>
        <li><strong>Open the FHSA as soon as you are eligible</strong>, even with a small deposit, so the annual room starts. The sequencing guide is the calendar. Room that never started cannot be contributed in the month you waive conditions.</li>
        <li><strong>Season any RRSP contribution you plan to withdraw.</strong> Amounts contributed shortly before a Home Buyers' Plan withdrawal can lose their deduction. The HBP guide covers the 89-day problem and Form T1036. Do the contribution before you are against the closing date.</li>
        <li><strong>Price the minimum down payment with the tiered formula</strong> once the price is over $500,000. Then add closing costs in cash. If the FHSA exactly equals the down payment, you are short by the land transfer tax and the lawyer.</li>
        <li><strong>Get a qualifying-rate approval before you offer.</strong> The stress test uses the greater of the contract rate plus 2 points or 5.25%. An insured file also has to fit 39% gross and 44% total debt service at that rate.</li>
        <li><strong>Claim line 31270 on the return for the year you buy.</strong> A September 2026 purchase is a 2026 claim. The credit rate for 2026 follows the 14% lowest bracket.</li>
    </ol>

    <h2>What does CMHC actually charge?</h2>

    <p>CMHC's own comparison, on its Purchase page, uses a $760,000 home. Twenty percent down is $152,000. The insured minimum is 5% of $500,000 plus 10% of $260,000, which is $51,000. Insurance is what turns $152,000 of cash into $51,000 of cash, in exchange for a premium added to the mortgage and for the qualifying-rate test.</p>

    <div class="example-box">
        <strong>Illustration: a $600,000 home, traditional down payment, contract rate assumed at 4.50%</strong>
        <p>Minimum down payment: 5% of $500,000 plus 10% of $100,000 = $35,000. Base loan: $565,000. Loan-to-value is about 94.2%, so the premium is in the top band. On CMHC's 25-year Purchase schedule that band is 4.00%, which is $22,600, and the insured balance is $587,600. At an assumed 4.50% contract rate, compounded semi-annually, the 25-year payment is about $3,252 a month.</p>
        <p>If a first-time buyer uses Home Start's 30-year amortization, the matching premium on CMHC's Home Start schedule is 4.20%, which is $23,730, and the balance is $588,730. The payment at the same assumed 4.50% is about $2,968 a month, roughly $284 less. Total interest over the full amortization, if that 4.50% never changed, is about $92,000 higher on the 30-year loan. The rate will change at renewal. The illustration is the trade: a lower payment now, a higher premium, and more interest if you keep the longer schedule. Premiums are CMHC's published schedules. The 4.50% rate is an assumption.</p>
    </div>

    <p>Standard Purchase premiums run from 0.60% at 65% loan-to-value up to 4.00% above 90%, and 4.50% in that top band if the down payment is non-traditional. Home Start's high-ratio schedule is 3.00%, 3.30%, and 4.20%, plus 4.70% for a non-traditional down payment in the top band. A non-traditional down payment includes borrowed money. A gift from a relative is on CMHC's traditional list. New-build buyers should also read CRA's GST/HST new housing rebate page for the year they close. Rebate thresholds move, and this guide does not quote a GST figure it has not pinned to the purchase year.</p>

    <p>The down payment can be FHSA money, HBP money, or both, for the same home. CRA says so on the Home Buyers' Plan page. What you should not do is borrow from a line of credit to contribute to the FHSA or the RRSP and then assume the story is still simple. The clean account order is the sequencing guide. The contribution ceilings for the year are the <a href="/blog/contribution-limits/">2026 limits table</a>.</p>

    <h2>Frequently asked questions</h2>

    <h3>Can I use the FHSA and the Home Buyers' Plan on the same house?</h3>
    <p>Yes. CRA's Home Buyers' Plan page says you can make an HBP withdrawal and a qualifying FHSA withdrawal for the same home if you meet the conditions of each one at the time you withdraw. They are separate tests, separate forms, and separate clocks. The HBP has to be repaid. A qualifying FHSA withdrawal does not.</p>

    <h3>How much is the federal home buyers' amount worth in 2026?</h3>
    <p>You claim up to $10,000 on line 31270. Non-refundable credits use the lowest federal rate. For 2026 that rate is 14%, so a full claim is $1,400. Spouses can split the $10,000. The total claim stays $10,000. CRA's older "up to $1,500" wording is the credit at 15%. Confirm the 2026 return instructions, including any top-up credit, when you file.</p>

    <h3>Is the minimum down payment 5%?</h3>
    <p>Five percent applies to the first $500,000 of an insured purchase. The portion between $500,000 and $1.5 million needs 10% down. CMHC's $760,000 example is $51,000 down, which is more than 5%. Homes at or above $1.5 million are outside high-ratio insurance, so the practical down payment is at least 20%.</p>

    <h3>Should a first-time buyer take the 30-year amortization?</h3>
    <p>Home Start offers it on a high-ratio loan if at least one borrower is a first-time buyer or the home is a new build. The premium in the top band rises from 4.00% to 4.20%. On the $600,000 illustration, the payment falls by about $284 a month at a constant 4.50%, and lifetime interest rises by about $92,000 if the rate never changes. Take the longer amortization if you need the payment to qualify or to stay solvent. Shorten it with prepayments if the cash shows up later.</p>

    <h3>Do provincial rebates stack on top of the federal credit?</h3>
    <p>Land transfer rebates are provincial, and Toronto has its own municipal tax. They are cash at closing, or a reduction of cash at closing. The federal home buyers' amount is a credit on the tax return. They answer different bills. Use the closing cost guide for the province where the house is, and do not assume Ontario's rebate exists in another province.</p>

    <h3>What if only one spouse is a first-time buyer?</h3>
    <p>Several of these tests look at whether you or your spouse lived in a home either of you owned. One partner's ownership can disqualify the other. CMHC Home Start can be available if at least one borrower meets its first-time definition, which is its own wording. Run each name through each program before you promise a parent the down payment is sorted.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account.html">CRA: First Home Savings Account</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan.html">CRA: Home Buyers' Plan</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31270-home-buyers-amount.html">CRA: line 31270, home buyers' amount</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/tax-rates-brackets/current-year.html">CRA: 2026 federal income tax rates</a></li>
        <li><a href="https://www.canada.ca/en/department-finance/services/publications/report-impact-reducing-lowest-marginal-personal-income-tax-rate-non-refundable-tax-credits.html">Finance: 14% rate and non-refundable credits</a></li>
        <li><a href="https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/mortgage-loan-insurance/mortgage-loan-insurance-homeownership-programs/purchase">CMHC Purchase</a> and <a href="https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/mortgage-loan-insurance/mortgage-loan-insurance-homeownership-programs/home-start">CMHC Home Start</a></li>
        <li><a href="https://www.canada.ca/en/department-finance/news/2024/09/delivering-the-boldest-mortgage-reforms-in-decades.html">Department of Finance: insured price cap and 30-year amortization</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The rebates are small next to a missed FHSA year or a bad mortgage penalty.</strong></p>
        <p>The accounts and the credit are tax. The 2026 tax guide is the filing companion to this purchase order.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),

  estatePost(
    'home-buyers-plan-hbp-guide',
    'The Home Buyers\' Plan (HBP): Withdrawal Limit, Repayment, and FHSA Stacking',
    'The Home Buyers\' Plan limit is $60,000 per person. CRA says a first withdrawal in 2026 starts the 15-year repayment in 2031, so a full withdrawal is $4,000 a year. You can also withdraw from an FHSA for the same home.',
    `<div class="container">

    <div class="hook">
        As of September 2026, the Home Buyers' Plan withdrawal limit is <span class="highlight">$60,000 per person</span>. CRA says a first withdrawal in 2026 starts its 15-year repayment in 2031, so a full $60,000 withdrawal requires $4,000 a year. You can also make a qualifying FHSA withdrawal for the same home. A repayment you skip is added to your income.
    </div>

    <p>Where the withdrawal sits in the order of cheques is the <a href="/blog/fhsa-home-purchase-sequencing-canada/">FHSA sequencing guide</a>. The rest of the first-purchase stack, including CMHC and line 31270, is the <a href="/blog/first-time-home-buyer-guide-canada/">first-time home buyer guide</a>. The loan those dollars become is underwritten in the <a href="/blog/mortgage-stress-test-canada/">stress test</a> and priced in the <a href="/blog/canadian-mortgage-guide/">Canadian mortgage guide</a>. RRSP room you are about to spend is also the <a href="/blog/rrsp-playbook/">RRSP playbook</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Limit: $60,000 per person, in each participation period. Two eligible spouses can withdraw $60,000 each, $120,000 combined, from their own RRSPs.</li>
            <li>CRA's page says the temporary repayment relief was extended to a first withdrawal between January 1, 2026 and December 31, 2028. Repayment starts in the fifth year after the withdrawal year. A 2026 withdrawal starts in 2031.</li>
            <li>The annual minimum is the balance divided by 15. On $60,000, that is $4,000. You designate the repayment on Schedule 7. You do not get a second RRSP deduction for a dollar you designate as a repayment.</li>
            <li>The home has to be bought or built before October 1 of the year after the first withdrawal. You must intend to occupy it as a principal residence within one year. The form is T1036, filed with the RRSP issuer before the money moves.</li>
            <li>Contributions made in the 89 days before the withdrawal can lose their RRSP deduction to the extent of the withdrawal. Contribute earlier than the closing scramble.</li>
        </ul>
    </div>

    <h2>What are the conditions?</h2>

    <table>
        <caption>Home Buyers' Plan rules, as of September 2026, from CRA's plan and participation pages</caption>
        <thead>
            <tr>
                <th>Rule</th>
                <th>What CRA requires</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Ceiling</td>
                <td>$60,000 in total from your RRSPs during a participation period. Withdrawals have to come from RRSPs, using Form T1036 for each withdrawal.</td>
            </tr>
            <tr>
                <td>Same home as an FHSA</td>
                <td>Allowed, if you meet the HBP conditions and the FHSA qualifying-withdrawal conditions at the time of each withdrawal.</td>
            </tr>
            <tr>
                <td>Written agreement and deadline</td>
                <td>You need an agreement to buy or build a qualifying home in Canada. You must acquire or build it before October 1 of the year after the year of the first withdrawal.</td>
            </tr>
            <tr>
                <td>Occupancy</td>
                <td>You must intend to occupy the home as your principal residence within one year after buying or building it. A specified disabled person is a separate path, with that person as the intended occupant.</td>
            </tr>
            <tr>
                <td>Residency</td>
                <td>You must be a resident of Canada. Confirm the residency timing on CRA's participation page in the year you withdraw.</td>
            </tr>
            <tr>
                <td>Repayment start</td>
                <td>For a first withdrawal in 2026, 2027, or 2028, the 15-year period starts in the fifth year. CRA's example: a 2026 withdrawal is first repaid in 2031.</td>
            </tr>
            <tr>
                <td>Missed repayment</td>
                <td>The shortfall is included in income for that year. You do not get the RRSP room back by failing to repay.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. Source: CRA, "The Home Buyers' Plan," and CRA, "How to participate in the Home Buyers' Plan."</p>

    <h2>What does repayment cost?</h2>

    <div class="example-box">
        <strong>Worked repayment: two people, one house, a 2026 withdrawal</strong>
        <p>Priya withdraws $60,000. Sam withdraws $40,000. They are each a participant. Priya's annual minimum, once repayment starts, is $60,000 divided by 15, which is $4,000. Sam's is $40,000 divided by 15, which is $2,666.67. CRA's page puts the first repayment year for a 2026 first withdrawal in 2031, so the 2031 return is the first year they designate a repayment on Schedule 7. Over 15 years Priya designates $60,000 and Sam designates $40,000. Designating more than the minimum in one year reduces later required payments. It does not create a new deduction.</p>
        <p>If Priya designates nothing in 2031, $4,000 is added to her 2031 income and taxed at her marginal rate. The HBP balance falls by that $4,000 anyway. She has paid tax on money she could have put back into the RRSP. That is the expensive way to skip a year. The contribution room she uses to repay is room she cannot also deduct. The <a href="/blog/contribution-limits/">limits table</a> is why the repayment and a new deductible contribution are two different uses of the same dollar.</p>
    </div>

    <h2>How do you stack the FHSA without breaking either plan?</h2>

    <p>A qualifying FHSA withdrawal is tax-free and is not repaid. An HBP withdrawal is tax-free at the time only because you agree to repay it. Using both for the same down payment is explicitly allowed. The mistake is treating them as interchangeable.</p>

    <ul>
        <li><strong>Cash into the FHSA</strong> if you want a deduction and a withdrawal you do not repay. Lifetime room is $40,000. Annual room is $8,000, with a capped carry-forward. The <a href="/blog/fhsa-guide/">FHSA guide</a> is the room formula.</li>
        <li><strong>Leave the RRSP alone</strong> if the investments are for retirement and you can fund the down payment from the FHSA and taxable cash. A withdrawn dollar stops compounding inside the RRSP until you repay it, and the repayment earns no second deduction.</li>
        <li><strong>Transfer from the RRSP to the FHSA</strong> only when you have decided you would rather not repay an HBP. A transfer uses FHSA room, does not create a new deduction, and does not restore RRSP room. The sequencing guide already walks that choice.</li>
        <li><strong>Do not contribute to the RRSP and withdraw it the same week.</strong> Contributions in the 89 days before an HBP withdrawal are not deductible to the extent of the withdrawal. The issuer will still process a T1036. The deduction is the piece you lose later.</li>
    </ul>

    <p>The mortgage that sits on top of this down payment still has to pass the qualifying rate. A larger down payment can move you under 80% loan-to-value and off high-ratio insurance. It does not, by itself, remove OSFI's uninsured stress test. Price that in the <a href="/blog/mortgage-stress-test-canada/">stress test guide</a> before you empty the RRSP to chase a slightly smaller loan. Closing costs are still extra cash: the <a href="/blog/land-transfer-tax-closing-costs-canada/">land transfer guide</a>.</p>

    <h2>Frequently asked questions</h2>

    <h3>What is the Home Buyers' Plan limit in 2026?</h3>
    <p>CRA's page says the withdrawal limit is $60,000. That is per person, from that person's RRSPs, for a participation period. A spouse who also qualifies can withdraw up to $60,000 from their own RRSP. You cannot withdraw $120,000 from one person's plan by calling it a household limit.</p>

    <h3>When do I start repaying a 2026 withdrawal?</h3>
    <p>CRA says the repayment relief was extended to first withdrawals from January 1, 2026 through December 31, 2028. The 15-year period starts in the fifth year after the withdrawal year. CRA's example is explicit: a first withdrawal in 2026 has a first repayment year of 2031. Designate the repayment on your 2031 return.</p>

    <h3>What happens if I miss a repayment?</h3>
    <p>The unpaid minimum is included in your income for that year. You pay tax on it at your marginal rate. The HBP balance is reduced as if you had repaid it, and you do not get new RRSP room from the inclusion. Repaying is usually cheaper than taking the income inclusion, unless you have no contributions to designate and the tax cost is one you have planned for.</p>

    <h3>Can I use the Home Buyers' Plan and an FHSA together?</h3>
    <p>Yes, for the same qualifying home, if each withdrawal meets its own conditions. The FHSA withdrawal is requested from the FHSA issuer. The HBP withdrawal needs Form T1036 at the RRSP issuer before the money comes out. You cannot withdraw first and label it later.</p>

    <h3>How long do RRSP contributions have to sit before I withdraw them?</h3>
    <p>Contributions made during the 89 days before the HBP withdrawal are not deductible to the extent you withdraw them under the plan. Leave more than 89 days between the contribution and the T1036 withdrawal if you want the deduction. Confirm the day count on the T1036 instructions in the year you sign them.</p>

    <h3>What if the purchase falls through?</h3>
    <p>You generally have until October 1 of the year after the withdrawal year to buy or build the home. If you will not, CRA has a cancellation process (Form RC471) with its own deadline. A withdrawal that stops being eligible becomes an ordinary RRSP inclusion. Do not wait for the notice of assessment to discover that. Read the cancellation rules as soon as the deal dies.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan.html">CRA: The Home Buyers' Plan</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan/participate-home-buyers-plan.html">CRA: How to participate in the Home Buyers' Plan</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account.html">CRA: First Home Savings Account</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t1036.html">CRA Form T1036</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The withdrawal is tax-free only because the repayment is a promise.</strong></p>
        <p>Schedule 7 is where that promise is kept or broken. The 2026 tax guide is the filing side of an HBP, an FHSA, and the home buyers' amount.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),

  estatePost(
    'readvanceable-mortgage-canada',
    'Readvanceable Mortgages in Canada: How They Work and Which Lenders Offer Them',
    'A readvanceable mortgage lets a revolving limit rise as you pay principal. OSFI caps that revolving slice at 65% of value. Anything between 65% and 80% has to amortize and must not readvance. Confirm the contract before you rely on a brand name.',
    `<div class="container">

    <div class="hook">
        A readvanceable mortgage is an amortizing loan plus a revolving line whose limit can rise as you pay principal. OSFI expects the revolving slice to stay at or below <span class="highlight">65% of the home's value</span>. Any lending between 65% and 80% has to amortize, and it is not supposed to become re-borrowable credit. The brand name does not guarantee the limit moves on its own. The commitment does.
    </div>

    <p>The loop that re-borrows principal to invest is the <a href="/blog/smith-maneuver-canada-steps-risks/">Smith Manoeuvre guide</a>. Whether the interest is deductible is the <a href="/blog/heloc-strategies-cra-clean-canada/">HELOC strategies guide</a>, and it depends on what the dollars buy. Switching this kind of plan at renewal is outside OSFI's straight-switch exemption, which the <a href="/blog/mortgage-renewal-strategy-canada/">2026 renewal guide</a> spells out. The rate decision on the amortizing slice is the <a href="/blog/fixed-vs-variable-mortgage-canada/">fixed versus variable framework</a>, under the <a href="/blog/canadian-mortgage-guide/">Canadian mortgage guide</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Combined loan plans are capped by two OSFI numbers: 65% loan-to-value for the non-amortizing revolving portion, and 80% for the whole plan on a conventional uninsured loan.</li>
            <li>Principal paid on the slice above 65% is supposed to reduce the overall limit until the whole plan sits at 65%. Only then does further principal become credit you can draw again, and only if your contract readvances.</li>
            <li>As of September 2026, lender pages that describe this structure include Scotiabank's STEP, TD's Home Equity FlexLine, and Manulife One. Other banks market their own plans. Ask whether principal paid increases the revolving limit without a new application.</li>
            <li>These plans are usually a collateral charge. OSFI's straight-switch letter excludes combined plans that are readvanceable. Budget for a discharge if you want to leave.</li>
            <li>Borrowing the readvance to buy a kitchen, a car, a TFSA, an RRSP, or an FHSA does not make the interest deductible.</li>
        </ul>
    </div>

    <h2>How does the 65% line work?</h2>

    <table>
        <caption>OSFI's combined-loan limits, as described in Guideline B-20 and the 2023 clarification. Still the framework lenders were implementing.</caption>
        <thead>
            <tr>
                <th>Slice of value</th>
                <th>What OSFI expects</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Up to 65% loan-to-value</td>
                <td>Can be a non-amortizing revolving HELOC. This is the portion that can readvance if the contract says so.</td>
            </tr>
            <tr>
                <td>From 65% to 80%</td>
                <td>Amortizing, and not readvanceable. Principal payments on this slice reduce the overall authorized limit until the whole plan is down to 65%.</td>
            </tr>
            <tr>
                <td>Above 80%</td>
                <td>Outside a conventional uninsured plan. A purchase above 80% loan-to-value generally needs default insurance, and a HELOC is not how you insure that top slice.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. Sources: OSFI's clarification on innovative real-estate secured lending under Guideline B-20, and OSFI's June 2022 description of combined loan plans. Lenders can be tighter than these caps.</p>

    <div class="example-box">
        <strong>Illustration: an $800,000 home, 20% equity, assumed contract rate 4.50%</strong>
        <p>Eighty percent of $800,000 is $640,000. Sixty-five percent is $520,000. The $120,000 between those two lines is the slice that has to amortize and must not readvance. At an assumed 4.50% rate, compounded semi-annually, a $640,000 balance on a 25-year schedule has a payment of about $3,542. In the first month, interest is about $2,378 and principal is about $1,164.</p>
        <p>That $1,164 of principal does not automatically become spendable credit while the plan is still above 65% loan-to-value. OSFI expects principal on the portion above 65% to shrink the overall limit. The first $120,000 of principal is the part that retires the non-readvanceable slice. After the whole facility is at 65% of value, later principal can become revolving room if, and only if, the contract is readvanceable. Scotiabank's STEP page describes a related mechanic in the bank's own words: a global limit up to 80% of value, including up to 65% for line-of-credit products, with a limit above 65% that declines toward 65%. Confirm which mechanic your commitment uses. The 4.50% rate is an assumption, not a STEP rate or a TD rate.</p>
    </div>

    <h2>Which lender pages describe the product?</h2>

    <p>Rates and spreads are omitted on purpose. They change without notice, and a blog column of "prime plus 0.50" would be stale the week a lender revises it. The question that matters for a Smith Manoeuvre, or for any plan that assumes credit comes back, is whether the revolving limit increases when principal is paid, without a new application.</p>

    <table>
        <caption>Lender pages reviewed in September 2026. This is a description of what each page says, not a ranking and not a rate sheet.</caption>
        <thead>
            <tr>
                <th>Lender page</th>
                <th>Product</th>
                <th>What the page says</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Scotiabank</td>
                <td>Scotia Total Equity Plan (STEP)</td>
                <td>One plan that can hold mortgages and lines of credit. Global limit up to 80% of the home's value, including up to 65% for line-of-credit products. A limit above 65% declines toward 65%. As you pay the mortgage down, borrowing power can increase. You can split mortgage portions across terms.</td>
            </tr>
            <tr>
                <td>TD</td>
                <td>TD Home Equity FlexLine</td>
                <td>A revolving portion plus optional term portions. With 20% or more down, TD says you can buy with the FlexLine, and as you pay it down, credit becomes available up to the credit limit. Borrowing up to 80% of value uses a term portion. The revolving portion is interest-only at a minimum, at a variable rate based on TD's prime.</td>
            </tr>
            <tr>
                <td>Manulife Bank</td>
                <td>Manulife One</td>
                <td>Manulife describes it as one account that combines the mortgage with chequing, so deposits reduce the borrowed balance. That is a different shape from a mortgage sub-account sitting beside a separate HELOC. Ask how the limit treats principal, and what the monthly account fee is.</td>
            </tr>
        </tbody>
    </table>

    <p>RBC, BMO, CIBC, and National Bank also market home-equity plans under their own names. A page that says "apply to increase your limit" is a HELOC beside a mortgage. A page that says the limit rises as you pay principal is the readvanceable feature. Get that sentence from the commitment, not from a comparison table. Product names and mechanics change. The pages above were the ones reviewed in September 2026.</p>

    <h2>What else changes when the mortgage is a collateral charge?</h2>

    <p>The charge registered on title often covers the whole plan limit, which can be more than the amount you have drawn. Leaving for another lender is usually a discharge and a new registration, with legal fees, not a simple assignment. OSFI's November 21, 2024 straight-switch letter says the stress-test exemption applies to stand-alone uninsured mortgages outside combined loan plans, that are amortizing and not readvanceable. A readvanceable plan fails that footnote. At renewal, expect a full application if you want to move it, and read the <a href="/blog/mortgage-renewal-strategy-canada/">renewal guide</a> before you trade a plain mortgage for a plan you may not be able to switch cheaply.</p>

    <p>The tax rule does not care which bank's logo is on the statement. Paragraph 20(1)(c) follows the current use of the borrowed money. A readvance that buys dividend-paying investments in a non-registered account is the fact pattern the <a href="/blog/smith-maneuver-canada-steps-risks/">Smith Manoeuvre guide</a> is about. A readvance that contributes to a TFSA, an RRSP, or an FHSA fails the purpose test even when the contribution itself is sensible. A readvance that pays the kitchen is a kitchen. Keep the investment tranche in its own account. The <a href="/blog/heloc-strategies-cra-clean-canada/">HELOC guide</a> is the paper trail. An emergency fund that depends on the line staying open is a different risk, covered in <a href="/blog/emergency-fund-heloc-investments-canada/">emergency fund, HELOC, and investments</a>.</p>

    <h2>Frequently asked questions</h2>

    <h3>What is a readvanceable mortgage?</h3>
    <p>It is a combined plan: an amortizing mortgage and a revolving line, usually under one collateral charge, where available credit can increase as you pay principal. OSFI calls these combined loan plans. The revolving portion is capped at 65% of value. The slice from 65% to 80% amortizes and is not supposed to readvance. If your contract requires a new application to raise the limit, you have a HELOC beside a mortgage, which is a useful product and a different one.</p>

    <h3>Which Canadian lenders offer one?</h3>
    <p>As of September 2026, Scotiabank's STEP, TD's Home Equity FlexLine, and Manulife One each have a public page describing a combined mortgage and revolving facility. Other banks publish their own home-equity plans. This guide does not rank them and does not quote spreads. Ask one question: when I pay principal, does the revolving limit rise without a new application, and does any of that rise stop above 65% loan-to-value?</p>

    <h3>Can I get a readvanceable mortgage with less than 20% down?</h3>
    <p>The revolving cap is 65% of value, and the whole conventional plan tops out at 80%. A high-ratio insured mortgage, above 80% loan-to-value, is a different product. You generally need equity before a HELOC exists. Buying with a small down payment and expecting an immediate readvanceable limit is the wrong sequence. Pay the insured mortgage down, then ask.</p>

    <h3>Does a readvanceable mortgage avoid the stress test at renewal?</h3>
    <p>No. OSFI's straight-switch exemption excludes combined loan plans that are readvanceable. Moving one to another federally regulated lender is underwritten as its own application. Staying with the same lender for a plain renewal of the term portion is a different conversation. Adding a HELOC you do not already have is new credit.</p>

    <h3>Is HELOC interest tax deductible?</h3>
    <p>Only when the money was borrowed to earn income from a business or property, and that use continues. CRA's Folio S3-F6-C1 is the document. The home you live in does not qualify. A registered account does not qualify, because the income is not taxed in your hands. Split the limit into a dedicated investment tranche if you are running a Smith Manoeuvre, and do not pay groceries from that tranche.</p>

    <h3>What happens if the home's value falls?</h3>
    <p>The limit is a percentage of value. A lender can re-appraise and cut undrawn credit, or freeze the line, if value falls or if your file changes. A plan that assumes every principal dollar comes back as credit is assuming the collateral and the lender's policy stay put. Keep a cash reserve that does not depend on the line. The emergency-fund guide is that reserve.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.osfi-bsif.gc.ca/en/guidance/guidance-library/clarification-treatment-innovative-real-estate-secured-lending-products-under-guideline-b-20">OSFI: clarification on combined loan plans under Guideline B-20</a></li>
        <li><a href="https://www.osfi-bsif.gc.ca/en/news/osfi-takes-focused-action-reduce-systemic-banking-system-risk">OSFI: 65% loan-to-value limit on combined plans</a></li>
        <li><a href="https://www.osfi-bsif.gc.ca/en/guidance/guidance-library/osfi-exempts-uninsured-mortgage-straight-switches-prescribed-mqr-implements-portfolio-lti-limits">OSFI straight-switch letter, footnote on readvanceable plans</a></li>
        <li><a href="https://www.scotiabank.com/ca/en/personal/mortgages/scotia-total-equity-plan-step.html">Scotiabank: Scotia Total Equity Plan (STEP)</a></li>
        <li><a href="https://www.td.com/ca/en/personal-banking/products/mortgages/td-home-equity-flexline">TD Home Equity FlexLine</a></li>
        <li><a href="https://advisor.manulife.ca/advisors/banking/mortgages/manulife-one.html">Manulife One</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/technical-information/income-tax/income-tax-folios-index/series-3-property-investments-savings-plans/series-3-property-investments-savings-plan-folio-6-interest/income-tax-folio-s3-f6-c1-interest-deductibility.html">CRA Folio S3-F6-C1, Interest Deductibility</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The product frees credit. The deduction depends on what you do with it.</strong></p>
        <p>A readvance spent on the house you live in is still personal interest. The 2026 tax guide is the filing side of a borrow-to-invest plan.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),
  {
    ...estatePost(
      'cmhc-mortgage-insurance-canada',
      'CMHC Mortgage Insurance: Premiums, the 30-Year Amortization Rule, and When It\'s Worth It',
      'CMHC\'s homeowner premium runs from 0.60% to 4.00% of the loan by loan-to-value. A 30-year amortization adds 0.20 of a point. The premium protects the lender.',
      `<div class="container">

    <div class="hook">
        CMHC mortgage loan insurance is a premium you pay so a lender will lend more than 80 percent of the home's value. On CMHC's homeowner schedule, reviewed in October 2026, the premium is <span class="highlight">0.60% to 4.00%</span> of the loan, and <span class="highlight">4.50%</span> in the top band if the down payment is non-traditional. An amortization longer than 25 years adds a 0.20% surcharge. The insurance protects the lender if you default. It does not pay your family.
    </div>

    <p>The loan around this premium is the <a href="/blog/canadian-mortgage-guide/">Canadian mortgage guide</a>. Where the premium sits in a first purchase, next to the FHSA and the Home Buyers' Plan, is the <a href="/blog/first-time-home-buyer-guide-canada/">first-time home buyer guide</a>. The qualifying rate on the insured file is the <a href="/blog/mortgage-stress-test-canada/">stress test</a>. The calculator that leaves this premium out on purpose is <a href="/blog/rent-vs-buy-canada/">rent versus buy</a>. Life insurance sold at the same table is a different product: <a href="/blog/mortgage-life-insurance-vs-term-life-canada/">mortgage life versus term life</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Homeowner premiums, owner-occupied, 1 to 4 units: 0.60% up to 65% loan-to-value, then 1.70%, 2.40%, 2.80%, 3.10%, and 4.00% above 90%. Non-traditional down payment in that top band is 4.50%.</li>
            <li>Home Start, the 30-year product for a first-time buyer or a new build, with loan-to-value above 80%: 3.00%, 3.30%, and 4.20%, or 4.70% with a non-traditional down payment. That is the standard band plus 0.20 of a point.</li>
            <li>The purchase price or lending value must be below $1,500,000. For a 1- or 2-unit homeowner loan, minimum equity is 5% of the first $500,000 and 10% of the rest. At least one borrower needs a credit score of 600, with room for an alternative history.</li>
            <li>Gross debt service is capped at 39% and total debt service at 44%, both at the greater of the contract rate plus 2 percentage points or 5.25%.</li>
            <li>Ontario, Quebec, and Saskatchewan charge provincial sales tax on the premium. CMHC says that tax cannot be added to the loan. This page does not quote the provincial tax rate.</li>
        </ul>
    </div>

    <h2>What does CMHC actually charge?</h2>

    <table>
        <caption>CMHC homeowner premium on the total loan, owner-occupied, 1 to 4 units, as of October 2026</caption>
        <thead>
            <tr>
                <th>Loan-to-value</th>
                <th>Standard schedule</th>
                <th>Home Start schedule</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Up to and including 65%</td>
                <td>0.60%</td>
                <td>Not on the Home Start table. Home Start is for high-ratio loans, above 80%.</td>
            </tr>
            <tr>
                <td>65.01% to 75%</td>
                <td>1.70%</td>
                <td>Not on the Home Start table.</td>
            </tr>
            <tr>
                <td>75.01% to 80%</td>
                <td>2.40%</td>
                <td>Not on the Home Start table.</td>
            </tr>
            <tr>
                <td>80.01% to 85%</td>
                <td>2.80%</td>
                <td>3.00%</td>
            </tr>
            <tr>
                <td>85.01% to 90%</td>
                <td>3.10%</td>
                <td>3.30%</td>
            </tr>
            <tr>
                <td>90.01% to 95%</td>
                <td>4.00%</td>
                <td>4.20%</td>
            </tr>
            <tr>
                <td>90.01% to 95%, non-traditional down payment</td>
                <td>4.50%</td>
                <td>4.70%</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of October 2026. Standard column: CMHC's premium page for homeowner loans. Home Start column: CMHC's Home Start premium table. CMHC's premium page also says an amortization beyond 25 years is subject to a 0.20% surcharge. The Home Start column is that surcharge, already added, for the bands Home Start publishes. Portability premiums, which apply to an increase in the loan rather than to the whole balance, are a second column on the standard page and are higher. Read them before you port. They are not reprinted here because a port is a different transaction from a purchase.</p>

    <p>A small rental, non-owner-occupied, 2 to 4 units, uses a different schedule on the same page: 1.45% up to 65% loan-to-value, 2.00% from 65.01% to 75%, and 2.90% from 75.01% to 80%. There is no 95% band on that rental table. A rental is not Home Start. The tax file on a rental is <a href="/blog/rental-property-tax-deductions-canada/">rental deductions</a>, and the premium is a cost of borrowing, not a deduction you invent on the T776 without reading the guide.</p>

    <h2>Who can use the 30-year amortization?</h2>

    <p>CMHC Home Start is mortgage loan insurance for borrowers who are first-time homebuyers or who are buying a newly built home. At least one borrower must meet CMHC's first-time definition, or the property must be newly built and not previously occupied as a residence. The home must be owner-occupied, including by a spouse, common-law partner, or a child, on a rent-free basis in the wording CMHC uses. The product is for high-ratio loans, above 80% loan-to-value. Maximum amortization is 30 years. Maximum purchase price or lending value is below $1,500,000.</p>

    <p>CMHC's first-time definition, in the Home Start footnote, is a person who at closing has never purchased a home in Canada, or has not occupied a home in Canada as a principal residence that they or their current spouse or common-law partner owned, in the current calendar year or the four preceding calendar years, or who has been separated for at least 90 days because of a breakdown and began living apart in that same window. That test is not the FHSA test and not the Home Buyers' Plan test. Passing one does not prove the others. The first-time buyer guide separates them.</p>

    <div class="example-box">
        <strong>Illustration: the minimum down payment is not 5 percent of the price</strong>
        <p>CMHC's minimum equity for a 1- or 2-unit homeowner loan is 5% of the first $500,000 of lending value and 10% of the remainder. On a $600,000 price that is $25,000 plus $10,000, or $35,000 down. The base loan is $565,000. Loan-to-value is $565,000 divided by $600,000, about 94.2%, so the premium is in the top band. On the standard schedule that is 4.00%, or $22,600. On Home Start, if you qualify, it is 4.20%, or $23,730. The premium may be added to the loan. This page does not turn either premium into a monthly payment, because the payment needs a contract rate, and a contract rate is not a CMHC figure. The $600,000 is arithmetic on CMHC's own equity rule, not a listing and not a quote.</p>
    </div>

    <h2>When is the premium worth paying?</h2>

    <p>It is worth paying when the alternative is waiting years for 20 percent down in a market where the price, the rent, and your life will not wait, and you can carry the insured payment at the qualifying rate. It is a poor trade when you are close to 20 percent and the premium, plus the provincial sales tax that cannot be rolled into the loan, is larger than the rent and the moving costs of waiting a few more months. Run that comparison in dollars you have, not in a national "CMHC is worth it" slogan. The <a href="/blog/rent-vs-buy-decision-canada/">rent versus buy decision guide</a> is the assumption list. The calculator does not add this premium. Add it yourself if the down payment is under 20 percent.</p>

    <div class="warning-box">
        <strong>Traditional is not "any down payment you can name":</strong>
        <p>CMHC lists savings, the sale of a property, and a non-repayable gift from a relative as traditional sources. Non-traditional sources include unsecured personal loans and unsecured lines of credit. They are available only in the 90.01% to 95% band, on 1- or 2-unit properties, for borrowers with a strong credit history, and they cost 4.50% or 4.70%, not 4.00% or 4.20%. Borrowing the down payment from a line of credit and calling it savings is how a file lands in the expensive row.</p>
    </div>

    <h2>What else is on the premium, besides the percentage?</h2>

    <ul>
        <li><strong>Provincial sales tax.</strong> CMHC says Ontario, Quebec, and Saskatchewan currently apply it to the premium, and that the tax cannot be added to the loan amount. Budget the tax in cash. This page does not print the provincial percentage.</li>
        <li><strong>Portability credit.</strong> CMHC's example: a new insurance request 6 months after the original closing can credit 100% of the premium previously paid, 12 months can credit 50%, and 24 months can credit 25%. A blended amortization is subject to a 0.60% surcharge on the increase, not on the whole loan. Confirm the credit on the new application.</li>
        <li><strong>Eco products.</strong> CMHC offers a 25% partial premium refund when you buy or build an energy-efficient home or make energy-efficient improvements. "Partial" is CMHC's word. Read the eco rules before you count the refund as cash at closing.</li>
        <li><strong>The qualifying rate.</strong> Home Start calculates gross and total debt service at the greater of the contract rate plus 2% or 5.25%, with caps of 39% and 44%. You pay the contract rate. The lender uses the higher rate to decide if the file fits.</li>
    </ul>

    <h2>Frequently asked questions</h2>

    <h3>Does CMHC insurance protect me if I lose my job?</h3>
    <p>No. It protects the lender against default. Your household protection is a separate decision: an emergency fund, and disability or life insurance sized to people, not to the mortgage balance. Mortgage life insurance is optional and is not this premium. FCAC's mortgage-life page is linked from the mortgage-life comparison.</p>

    <h3>Can I avoid the premium with 20 percent down?</h3>
    <p>A loan at 80% loan-to-value or below is not in the high-ratio bands that require this insurance for the purchase. The standard schedule still publishes premiums at 65%, 75%, and 80%, because lenders sometimes insure lower-ratio loans, including portfolio insurance you do not shop for. A 20% down payment avoids the high-ratio requirement. It does not promise that the lender's file is uninsured behind the scenes. Ask.</p>

    <h3>Is the 30-year amortization automatically cheaper?</h3>
    <p>The payment is lower because the same loan is spread over more months, and the premium rate is 0.20 of a point higher. Total interest is higher if you keep the longer schedule and the rate does not fall. This page will not print a payment at an assumed rate and call it CMHC's. Take 30 years if you need the payment to qualify or to stay solvent. Shorten it with prepayments if the cash arrives. The prepayment guide is the privilege. The penalty guide is what it costs to break the term instead.</p>

    <h3>What if the home costs $1.5 million or more?</h3>
    <p>CMHC's Home Start and Purchase pages cap the purchase price or lending value below $1,500,000 for the homeowner loan. At or above that cap you are outside high-ratio insurance. The practical down payment is at least 20%. The stress test for an uninsured loan at a federally regulated lender is still the qualifying rate. The price cap is not a tax rule.</p>

    <h3>Does a gift from my parents count as traditional?</h3>
    <p>CMHC lists a non-repayable financial gift from a relative as a traditional source. A loan from a parent is not that sentence. The lender will ask for a gift letter. If the money has to be repaid, you are in the non-traditional row, and only if the rest of that row's conditions are met.</p>

    <h3>Can I add the premium to the mortgage?</h3>
    <p>CMHC says the application premium is a one-time charge which may be added to the insured loan. The provincial sales tax on that premium cannot. Interest then accrues on the premium you rolled in, at whatever contract rate you sign. Rolling it in is a cash-flow choice. It is not a discount.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/mortgage-loan-insurance/mortgage-loan-insurance-homeownership-programs/premium-information-for-homeowner-and-small-rental-loans">CMHC: premium schedules, surcharge, sales tax, portability credits</a></li>
        <li><a href="https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/mortgage-loan-insurance/mortgage-loan-insurance-homeownership-programs/home-start">CMHC Home Start: eligibility, 30-year amortization, premiums</a></li>
        <li><a href="https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/mortgage-loan-insurance/mortgage-loan-insurance-homeownership-programs/purchase">CMHC Purchase</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The premium is a closing cost. The interest is the term.</strong></p>
        <p>Default insurance is not mortgage life insurance, and it is not a deduction on the home you live in. The 2026 tax guide is the filing side of a purchase.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    <div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about CMHC mortgage loan insurance as of October 2026. It is not a mortgage offer, a premium quote, or lending, tax, or insurance advice. Schedules, the price cap, and sales tax change. The $600,000 example is arithmetic on CMHC's published equity rule and premium bands, not a payment and not a house. Confirm the commitment and the premium on the lender's disclosure before you waive a condition.</p>
        <div class="footer-note">Published: October 3, 2026 | Category: Real Estate | Author: Andrew</div>
    </div>

</div>`
    ),
    author: 'Andrew',
    date: '2026-10-03',
    updated: '2026-10-03',
  },
  {
    ...estatePost(
      'rent-vs-buy-decision-canada',
      'Rent vs Buy in Canada: The Decision Guide Behind the Calculator',
      'Rent versus buy is an ending-wealth test. The calculator runs the dollars. This page is the list of assumptions that flip the sign, and the costs the tool leaves out.',
      `<div class="container">

    <div class="hook">
        Rent versus buy in Canada is not a monthly-payment contest. It is whether the home's equity, after selling costs and the mortgage that remains, beats the portfolio a renter could have built with the down payment and the cash the owner had to spend. The <span class="highlight">calculator</span> does that arithmetic on numbers you type. This page is the list of assumptions that flip the result, and the costs the tool refuses to invent.
    </div>

    <p>Run the dollars at <a href="/blog/rent-vs-buy-canada/">rent versus buy</a>. Do not treat this guide as a second calculator. The mortgage contract around a purchase is the <a href="/blog/canadian-mortgage-guide/">Canadian mortgage guide</a>. Cash due on top of the down payment is the <a href="/blog/land-transfer-tax-closing-costs-canada/">closing cost guide</a>. A down payment under 20 percent usually adds a premium the calculator does not: the <a href="/blog/cmhc-mortgage-insurance-canada/">CMHC guide</a>. If the "buy" case is a rental, stop. Interest may be deductible and the principal residence exemption may not. That file is <a href="/blog/primary-residence-vs-rental-property-canada/">primary residence versus rental</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The existing calculator compares ending wealth. It does not look up your city's rent, tax, or this month's discounted mortgage rate. Two of its labelled illustrations finish on opposite sides of zero. The assumptions did that. This page does not reprint those outputs.</li>
            <li>The inputs that move the sign are the years you will stay, appreciation, selling costs, the after-tax return on the renter's portfolio, and whether a CMHC premium belongs on the loan.</li>
            <li>A lower monthly payment is not a reason to buy. Principal is savings. Property tax, maintenance, and insurance are not. The renter keeps the down payment invested.</li>
            <li>A principal residence is often sheltered when you sell. A non-registered portfolio is not. If the renter's money would sit in a TFSA, type the pre-tax return you believe. If it would not, type an after-tax return. The tool will not compute the tax.</li>
            <li>No national "buying wins" figure belongs on this page. There isn't a sourced one that survives a change of city, stay, and rate.</li>
        </ul>
    </div>

    <h2>Which question is the calculator answering?</h2>

    <p>The tool's own description is ending wealth. On the owner side that is the home, minus selling costs, minus the mortgage left. On the renter side it is the portfolio that started as the down payment plus buying costs, then grew or shrank by the monthly gap between owning and renting. A comparison of this month's rent with this month's mortgage payment ignores the principal, the down payment, and the cheque to the lawyer. People who "save" by buying are often just moving cash into a wall. That can be the right life. It is not, by itself, a higher net worth.</p>

    <div class="tip-box">
        <strong>Use the calculator for the dollars. Use this page to decide which dollars you are willing to type.</strong>
        <p>Open <a href="/blog/rent-vs-buy-canada/">the calculator</a> after you have written down a price, a down payment, a contract rate from a written commitment or a rate you are explicitly assuming, a stay you will actually live, and a selling cost you have checked with a listing conversation. If you cannot write the stay, you do not have a result. You have the loaded example.</p>
    </div>

    <h2>Which assumptions flip the sign?</h2>

    <table>
        <caption>What to interrogate before you trust a rent-versus-buy result, as of October 2026</caption>
        <thead>
            <tr>
                <th>Assumption</th>
                <th>Why it moves ending wealth</th>
                <th>What this page will not do</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Years you will stay</td>
                <td>Selling costs land at the end. A short stay makes them dominate a home that has not appreciated for long.</td>
                <td>Publish a minimum stay that "always" wins. Run your own years in the tool.</td>
            </tr>
            <tr>
                <td>Appreciation</td>
                <td>The mortgage does not shrink when the price does. A decline hurts the owner more than the percentage, because of leverage.</td>
                <td>Print a Canadian average house-price increase and call it your house. Type zero, and a negative, before you treat the first run as a decision.</td>
            </tr>
            <tr>
                <td>Selling costs</td>
                <td>Commission and legal fees come off the ending value. They vary by city and by how you sell.</td>
                <td>Treat a round 5 percent as a law. It is a modelling default on the calculator page, labelled as such.</td>
            </tr>
            <tr>
                <td>Return on the difference</td>
                <td>The renter's portfolio compounds. A TFSA can take a pre-tax return. A taxable account cannot.</td>
                <td>Assume a balanced fund's long-run average. If you would leave the down payment in savings, type the savings rate.</td>
            </tr>
            <tr>
                <td>CMHC and closing costs</td>
                <td>Under 20 percent down, the premium is borrowed and added to the mortgage. Land transfer tax is cash on top, and it is provincial.</td>
                <td>Add the premium inside the calculator. It is not in the tool. Add it to the loan, or to buying costs, yourself. The schedule is the CMHC guide.</td>
            </tr>
            <tr>
                <td>Maintenance and special assessments</td>
                <td>A smooth percent of value hides a roof, a special assessment, or a condo fee the rent already includes.</td>
                <td>Call 1 percent a building standard. Put the irregular bill into the maintenance input or into the rent you are comparing against.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of October 2026. It describes the calculator's structure and CMHC's published role when the down payment is under 20 percent. It is not a market study. FCAC's mortgage pages are the consumer frame for the loan itself. They do not contain a rent-versus-buy winner.</p>

    <h2>What should you leave out of the victory lap?</h2>

    <p>The principal residence exemption often shelters a gain on the home you live in. The renter's non-registered portfolio does not get that shelter. If you ignore tax, you bias the comparison toward renting whenever the portfolio's return is typed pre-tax. If you ignore the exemption, you bias it toward buying by pretending the owner pays tax on the sale. Write down which one you are doing. The exemption's traps, including a change of use, are not calculated here. They are the principal-residence pages on this site and on CRA.</p>

    <p>Mobility is not in the tool. A job that might move you in three years is a short stay, which you can type. A school, a parent you are caring for, or a lease that ends in a city with no vacancy is a reason to buy or to rent that the wealth number will not capture. Write that reason beside the result. A negative wealth gap can still be the right house. The frame's job is to stop you from calling it an investment win.</p>

    <div class="warning-box">
        <strong>Do not reuse the calculator for a rental property:</strong>
        <p>The tool does not deduct interest and does not charge capital gains. A rental can deduct interest when the money was borrowed to earn rental income, and it can face capital gains and CCA recapture on a sale. Those rules are the <a href="/blog/rental-property-tax-deductions-canada/">rental deductions guide</a>. Running a principal-residence calculator on a duplex and calling the output a cap rate is the wrong file.</p>
    </div>

    <h2>A sequence that keeps the two pages distinct</h2>

    <ol>
        <li>Write the stay, the city, and whether anyone will need to move for work. If the stay is a hope, say so.</li>
        <li>Price the down payment you will actually have, including whether it is under 20 percent. If it is, open the CMHC schedule before you open the calculator.</li>
        <li>Look up land transfer tax for the province and the city. Put that dollar in buying costs. The closing-cost guide is the map. Do not reuse a placeholder.</li>
        <li>Get a contract rate in writing, or label the rate you type as an assumption. The mortgage guide's 4.50 percent illustrations are assumptions. They are not an offer.</li>
        <li>Type the renter's return after the tax the account would actually pay. TFSA room is the <a href="/blog/tfsa-contribution-optimization/">TFSA contribution guide</a>.</li>
        <li>Run the calculator. Then change appreciation to zero and cut the stay in half. If the decision only works on the first run, you do not have a decision.</li>
    </ol>

    <h2>Frequently asked questions</h2>

    <h3>Why isn't the calculator on this page?</h3>
    <p>It already lives at rent versus buy, with its own inputs and its own labelled illustrations. Putting a second copy here would split the tool and invite two different "answers." This page tells you what to type and what the tool omits. Then you use that page.</p>

    <h3>Is a lower mortgage payment than the rent a reason to buy?</h3>
    <p>No. The owner's cash includes principal, which builds equity, and also tax, maintenance, insurance, and the down payment, which the payment comparison skips. The calculator exists because that shortcut fails in both directions. Sometimes the owner still finishes ahead. The payment is not how you find out.</p>

    <h3>Should I use the national average appreciation?</h3>
    <p>Only if you are willing to bet the down payment that your house, in your years, matches a national series. This page does not publish that series. Appreciation is an input. Run a number you can defend, and a number you would hate.</p>

    <h3>Where do CMHC premiums go?</h3>
    <p>Into the loan, if you roll the premium in, which raises the balance the calculator should start with. The provincial sales tax on the premium, in Ontario, Quebec, and Saskatchewan, cannot be added to the loan on CMHC's page. That tax is cash, so it belongs with buying costs. The calculator does not do this for you.</p>

    <h3>What return should the renter type?</h3>
    <p>The after-tax return you would actually earn on that down payment for the years you would rent. A TFSA can take the pre-tax return. A taxable account should take a lower number. A savings account should take the savings rate. Five percent is not a requirement. It is not even an input this page is willing to bless.</p>

    <h3>Does buying hedge inflation?</h3>
    <p>A fixed-rate mortgage payment does not rise with rent during the term. Property tax, insurance, and maintenance can still rise. The rent input in the calculator has its own growth rate, which you type. Inflation is not a reason to skip the selling-cost line. At the end of the term the rate resets. The renewal guide is that date.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="/blog/rent-vs-buy-canada/">Rent versus buy calculator</a> — the ending-wealth arithmetic this guide refuses to duplicate.</li>
        <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/mortgages.html">FCAC: mortgages</a></li>
        <li><a href="https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/mortgage-loan-insurance/mortgage-loan-insurance-homeownership-programs/premium-information-for-homeowner-and-small-rental-loans">CMHC: when a premium exists, and that provincial sales tax is not added to the loan</a></li>
        <li><a href="/blog/land-transfer-tax-closing-costs-canada/">Land transfer tax and closing costs</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The sign on the comparison is only as good as the stay and the tax.</strong></p>
        <p>Interest on the home you live in is not deductible. The filing side of a move or a sale is the 2026 tax guide.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    <div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about how to use a rent-versus-buy comparison in Canada as of October 2026. It is not a mortgage offer, a rent quote, or housing, tax, or investment advice. It does not publish a market result. Contract rates, rents, property tax, and commissions vary. Run the calculator with your own inputs and confirm the commitment before you offer or sign a lease.</p>
        <div class="footer-note">Published: October 3, 2026 | Category: Real Estate | Author: Andrew</div>
    </div>

</div>`
    ),
    author: 'Andrew',
    date: '2026-10-03',
    updated: '2026-10-03',
  },
  {
    ...estatePost(
      'rental-property-tax-deductions-canada',
      'Rental Property Tax Deductions in Canada: Expenses, CCA, and Recapture',
      'Current rental expenses are deductible. A building is capital cost allowance, usually Class 1 at 4%, and CCA cannot create or increase a rental loss. Selling can recapture it.',
      `<div class="container">

    <div class="hook">
        You can deduct reasonable expenses you incur to earn rental income in Canada. CRA splits them in two. <span class="highlight">Current expenses</span>, such as insurance, interest, repairs, and property tax, come off the year's rent. <span class="highlight">Capital expenses</span>, including the building, are written off over time as capital cost allowance. Most buildings acquired after 1987 are Class 1 at 4%. You cannot use CCA to create or increase a rental loss.
    </div>

    <p>The mortgage on a rental is still a mortgage. The hub is the <a href="/blog/canadian-mortgage-guide/">Canadian mortgage guide</a>. Default insurance, if a small rental is insured, is the <a href="/blog/cmhc-mortgage-insurance-canada/">CMHC guide</a>, which publishes a separate small-rental premium table. Whether the property should have been a home you live in is <a href="/blog/primary-residence-vs-rental-property-canada/">primary residence versus rental</a>. A sale, including recapture, connects to the <a href="/blog/capital-gains-tax-canada/">capital gains guide</a>. The form is T776. The guide is T4036.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>CRA's deductible list includes advertising, insurance, interest and bank charges, office expenses, professional fees, management fees, repairs and maintenance, salaries, property taxes, travel, utilities, motor vehicle expenses, and other rental expenses.</li>
            <li>Interest on money borrowed to buy or improve the rental is deductible. Interest on funds you took out for personal use is not. A mortgage penalty or a fee to reduce the rate is prorated over the remaining term, not deducted in full.</li>
            <li>Legal fees to buy the property are not a current expense. CRA's example splits them between land and building and adds them to cost.</li>
            <li>Class 1 is 4% for most buildings acquired after 1987. Land is not depreciable. In the year of acquisition the half-year rule usually applies. CCA cannot create or increase a rental loss.</li>
            <li>Recapture happens when sale proceeds exceed the undepreciated capital cost of the class plus additions. It goes on line 9947 of the T776. It is income, not a capital gain. A capital gain can exist on top of it.</li>
        </ul>
    </div>

    <h2>Which expenses are current?</h2>

    <p>CRA's rental-expenses page says you can deduct any reasonable expense you incur to earn rental income. Current or operating expenses are recurring and short-term. The example CRA uses is repairs that keep the property in the same condition it was in when you acquired it. You deduct those in the year you incur them. Capital expenses provide a benefit that lasts for years. Buying or improving the property is the example. You do not deduct the full amount in the year. You deduct CCA instead.</p>

    <table>
        <caption>Where a common landlord cost goes on the T776, as of October 2026</caption>
        <thead>
            <tr>
                <th>Cost</th>
                <th>Current or capital</th>
                <th>The constraint CRA prints</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Insurance, repairs, utilities, management fees, advertising</td>
                <td>Current, if they earn rental income</td>
                <td>Reasonable, and incurred to earn rent. A personal portion of a mixed property is not deductible.</td>
            </tr>
            <tr>
                <td>Interest on money borrowed to buy or improve the rental</td>
                <td>Current, as interest</td>
                <td>Personal use of refinanced funds is not deductible against the rental. CRA's example is a landlord who uses new mortgage money personally.</td>
            </tr>
            <tr>
                <td>Fee or penalty to pay out or reduce the mortgage rate</td>
                <td>Prepaid, not all at once</td>
                <td>Prorate over the remaining original term. CRA's example is a five-year term and a fee paid in year three, deducted over the years left.</td>
            </tr>
            <tr>
                <td>Property taxes</td>
                <td>Current, for the period the property was available for rent</td>
                <td>Vacant land has a further limit: interest and property taxes cannot create or increase a rental loss. CRA says they can be added to the cost of the land.</td>
            </tr>
            <tr>
                <td>Legal fees to buy</td>
                <td>Capital, split between land and building</td>
                <td>Not deducted from gross rent. CRA's example: a $200,000 property, $50,000 land and $150,000 building, $10,000 of legal fees. $2,500 goes to land, $7,500 to the building.</td>
            </tr>
            <tr>
                <td>A new roof, an addition, a lasting improvement</td>
                <td>Capital</td>
                <td>Repairs that restore the old condition are current. Improvements that make it better than it was are capital. The line is factual. A paint job and a new storey are not the same invoice.</td>
            </tr>
            <tr>
                <td>Landscaping</td>
                <td>Current, in the year paid</td>
                <td>CRA says you deduct landscaping only in the year you paid it, even if you use the accrual method.</td>
            </tr>
            <tr>
                <td>Condominium fees for upkeep and current common expenses</td>
                <td>Current</td>
                <td>CRA points at the portion that is upkeep, repairs, maintenance, and other current expenses. A special assessment that is a capital improvement to the building is not automatically that line.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of October 2026. Sources: CRA's "rental expenses you can deduct" page and Guide T4036 as returned in the rental-income chapter. Line numbers on the T776, including 8710 for interest and 8960 for repairs, are the ones CRA prints on that expenses page. Confirm the year's form. A renamed line is still the same test.</p>

    <h2>What is capital cost allowance on a rental?</h2>

    <p>CRA says you cannot deduct the purchase price of a building, furniture, or equipment in the year you buy it. You deduct CCA over time. Land is not depreciable. Only the building goes in the class. CRA's class list for rentals includes Class 1 at 4%. CRA's T4002 chapter says Class 1 includes most buildings acquired after 1987, unless they belong in another class. The half-year rule, in that same chapter, generally lets you claim CCA on one-half of the net additions in the year you acquire the property.</p>

    <p>The same T4002 chapter says that under proposed changes, a new purpose-built residential rental may be eligible for an accelerated rate of 10% if it becomes available for use before 2036 and construction, or a substantial renovation from commercial use, began after April 15, 2024 and before 2031. "Proposed" is CRA's word on that page. Do not file 10% because a summary said the incentive exists. Read the T776 instructions for the year you are filing. A building that misses the test stays at 4%.</p>

    <div class="warning-box">
        <strong>CCA cannot create or increase a rental loss:</strong>
        <p>CRA's page on how much CCA you can claim says you calculate net income or loss from all your rental properties before you claim CCA. If the properties together are already in a loss, you cannot claim CCA to make the loss bigger. Salvador's example on that page is a net loss of $500, and he cannot claim CCA on the buildings or the appliances. Current expenses can still produce a loss. CCA is the deduction that stops at zero rental income. Recapture, if you have it, is included when you do that netting.</p>
    </div>

    <div class="example-box">
        <strong>Illustration: legal fees, using CRA's split</strong>
        <p>The building is $150,000 of a $200,000 purchase and the land is $50,000. Legal fees are $10,000. Three-quarters of the fee, $7,500, joins the building. One-quarter, $2,500, joins the land and is never depreciated. Class 1 at 4% applies to the building pool, not to $157,500 in year one if the half-year rule applies. Half of the building addition would be the first-year base, before the 4%. This paragraph is the sequence, not a filled-in T776. Soft costs during construction follow a different rule. CRA points at them separately. Do not dump a construction-period property tax bill into repairs without reading that section.</p>
    </div>

    <h2>What is recapture when you sell?</h2>

    <p>CRA's line 9947 page says a recapture of CCA can happen if the proceeds from the sale of depreciable rental property are more than the undepreciated capital cost of the class at the start of the period plus the capital cost of additions during the period. If the UCC after additions and dispositions is negative, that negative amount is the recapture, and you enter it on line 9947. A co-owner enters their share. You cannot claim CCA in the class when that column is negative.</p>

    <p>Recapture is income. It is the CCA you deducted in earlier years, coming back because the building did not decline the way the deductions assumed. A capital gain is a different amount: proceeds above the capital cost, after selling costs. You can owe both. Legal fees on the sale reduce proceeds for the capital gain and also affect the recapture calculation. T4036 says the legal fees on a sale are deducted from proceeds when you calculate the gain or loss, and that the same deduction matters for recapture and for a terminal loss. The capital gains guide is the inclusion rate. The principal residence exemption does not shelter a building you have been depreciating as a rental, except to the extent a real designation applies. Do not assume it does. The primary-residence page is the designation.</p>

    <div class="tip-box">
        <strong>Skipping CCA is allowed:</strong>
        <p>The claim is a maximum, not a requirement. Landlords who expect to sell into a high-income year sometimes claim less, or nothing, so there is less to recapture later. That is a timing choice. It is not a way to turn the building into a current expense. If you claim nothing, you also give up the deduction in the years the property was cash-flow positive. Write the choice down. A preparer can model it. This page will not.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>Can I deduct the full mortgage payment?</h3>
    <p>No. The interest can be deductible when the borrowed money was used to earn rental income. The principal is not an expense. It is a repayment of the loan. A blended payment has to be split. The lender's annual statement is the split. Personal use of a refinance is not interest against the rental, even if the mortgage is registered on the rental.</p>

    <h3>Is a new appliance a repair?</h3>
    <p>Replacing a broken part so the property stays in the condition you bought it in is the current-expense idea. A new appliance is usually capital, in a class with its own rate, and CRA says you can claim CCA on appliances as well as on the building, still subject to the rental-loss limit. Read the class list before you put a fridge in Class 1.</p>

    <h3>What if I live in one unit and rent the other?</h3>
    <p>You deduct the rental portion. Personal occupancy is not a rental expense. The split has to be reasonable, often by area, and it affects both expenses and CCA. Designating the whole building as a principal residence while you claim full CCA on it is the contradiction the primary-residence page is about. Keep the square footage and the leases.</p>

    <h3>Can rental losses offset my salary?</h3>
    <p>A net rental loss, after current expenses that are allowed, is generally applied against other income. CCA cannot be used to create or enlarge that loss. Vacant-land interest and property taxes have their own stop. A loss that exists only because the rent is below market to a relative is a facts problem, not a strategy. CRA's reasonableness test is the sentence to read before you file one.</p>

    <h3>Do I have to claim the 10% purpose-built rate?</h3>
    <p>Only if the building meets the test on the current form, and only to the extent the change you are relying on is actually in force for that year. CRA's T4002 page described the 10% rate as a proposed change, with a construction window after April 15, 2024 and before 2031, available for use before 2036. If your building is an ordinary house acquired years ago, it is not that incentive. Class 1 at 4% is the default this page will stand behind.</p>

    <h3>Where does recapture go if I sell at a loss?</h3>
    <p>If the proceeds do not exceed the UCC of the class, you do not have recapture. You may have a terminal loss if nothing remains in the class, which is a deduction, not an inclusion. A sale below your original cost can still recapture CCA if the proceeds are above the UCC you have left after years of claims. Run column 7 of Area A. Do not guess from the listing price.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/rental-income/completing-form-t776-statement-real-estate-rentals/rental-expenses-you-deduct.html">CRA: rental expenses you can deduct</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/rental-income/capital-cost-allowance-rental-property/much-capital-cost-allowance-you-claim.html">CRA: how much CCA you can claim, including the rental-loss limit</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/rental-income/capital-cost-allowance-rental-property/rental-classes-depreciable-property.html">CRA: rental classes of depreciable property</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4002/t4002-6.html">CRA T4002 chapter 4: Class 1 at 4%, half-year rule, proposed 10% purpose-built rate</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/rental-income/completing-form-t776-statement-real-estate-rentals/line-9947-recaptured-capital-cost-allowance.html/1000">CRA: line 9947, recaptured CCA</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4036/rental-income.html">CRA Guide T4036, Rental Income</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The deduction is the T776. The sale is the recapture.</strong></p>
        <p>Interest, CCA, and the capital gain are three different lines. The 2026 tax guide is the filing companion.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    <div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about Canadian rental expenses as of October 2026. It is not tax or legal advice. Current versus capital is factual. CCA rates and the purpose-built incentive can change. The legal-fee split uses CRA's published example. Confirm Guide T4036 and Form T776 for the year you file, and ask a tax preparer before you claim CCA or report a sale.</p>
        <div class="footer-note">Published: October 3, 2026 | Category: Real Estate | Author: Andrew</div>
    </div>

</div>`
    ),
    author: 'Andrew',
    date: '2026-10-03',
    updated: '2026-10-03',
  },
  ...oct2026RealEstatePosts,
];
