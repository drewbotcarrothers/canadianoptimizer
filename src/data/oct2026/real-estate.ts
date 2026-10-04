import { articleFooter, octPost } from './types';

const disclaimer =
  'This is general education about Canadian housing rebates, mortgages, and interest deductibility as of October 4, 2026. It is not tax, legal, or lending advice, and it is not a rebate ruling. Rebate figures are tied to CRA pages and GST/HST Notice 346 reviewed on October 4, 2026. Dollar examples that are not CRA’s own example are labelled as illustrations. Confirm Guide RC4028, the agreement date, and your lender’s terms before you rely on a number.';

const footer = articleFooter('Real Estate', disclaimer);

export const oct2026RealEstatePosts = [
  octPost(
    'Real Estate',
    'real-estate',
    'first-time-home-buyers-gst-rebate',
    "The First-Time Home Buyers' GST/HST Rebate (Up to $50,000) and Ontario's Extra Rebate",
    'The federal first-time buyers’ GST/HST rebate can return up to $50,000 on a new home. Ontario’s enhanced rebate is a separate, dated top-up.',
    `<div class="container">

    <div class="hook">
        A resale house and a new house can carry the same sticker. Only one of them can send you a GST/HST rebate of up to <span class="highlight">$50,000</span>. The rebate is not a discount the listing agent applies to a century bungalow. It is a claim on tax that was charged on a new or substantially renovated home, and Ontario has stacked a second, time-limited rebate on the provincial slice.
    </div>

    <div class="callout">
        <strong>Key takeaways, from CRA pages reviewed October 4, 2026:</strong>
        <ul>
            <li>The first-time home buyers' GST/HST rebate can recover up to 100 percent of the GST, or the federal part of the HST, up to $50,000. CRA says that full rebate applies at a value at or below $1 million. Between $1 million and $1.5 million the maximum is gradually reduced. At or above $1.5 million there is no rebate.</li>
            <li>CRA's own example: a new home valued at $1.25 million is the midpoint and is eligible for 50 percent of the $50,000 maximum, which is $25,000, when the other conditions are met.</li>
            <li>For a purchase from a builder, the agreement has to be on or after March 20, 2025 and before 2031. Construction has to begin before 2031 and be substantially completed before 2036, and ownership has to transfer before 2036. Owner-built homes use a construction-start window of the same dates. Royal Assent was March 12, 2026. The usual filing window is two years from ownership or possession, depending on the application type.</li>
            <li>Ontario's first-time buyers' rebate, noted on CRA's FTHB overview, can rebate up to $80,000 of the provincial part of the HST and follows the federal eligibility conditions.</li>
            <li>Ontario's enhanced new housing rebate is a different program. Notice 346 (August 2026) ties builder agreements and owner-built starts to April 1, 2026 through March 31, 2027. Combined with the existing Ontario new housing rebate, relief on the 8 percent provincial part can reach $80,000. It is not limited to first-time buyers.</li>
        </ul>
    </div>

    <p>The purchase sequence around accounts and down payments is the <a href="/blog/first-time-home-buyer-guide-canada/">first-time home buyer guide</a>. The older GST/HST new housing rebate, the one that was already on the books, is discussed in <a href="/blog/first-home-buyer-grants-beyond-fhsa-canada/">grants beyond the FHSA</a>. This page is the 2025–2031 federal rebate and the Ontario window that sits on top of it. The FHSA and the Home Buyers' Plan are cash for the down payment. They are not this rebate. Sequence them in <a href="/blog/fhsa-home-purchase-sequencing-canada/">FHSA purchase sequencing</a> and the <a href="/blog/home-buyers-plan-hbp-guide/">Home Buyers' Plan guide</a>.</p>

    <h2>Who is the rebate actually for?</h2>

    <p>CRA's "who can apply" page is the test, and it is longer than a headline. For a house bought from a builder, the conditions in the page reviewed include: you meet the existing new-housing-rebate tests, or you would meet them if the maximum consideration were $1.5 million instead of $450,000; the agreement with the builder is dated on or after March 20, 2025 and before 2031; construction or substantial renovation begins before 2031 and is substantially completed before 2036; ownership transfers before 2036; you are buying it as your primary place of residence; and you are the first individual to occupy it as a residence after substantial completion. Owner-built homes shift the March 20, 2025 date onto the start of construction, still before 2031, with substantial completion before 2036. Guide RC4028 adds that you have not already received this rebate.</p>

    <p>Do not paste the Home Buyers' Plan definition of "first-time" onto this form and assume the sentences match. Read the GST page. A person who owned a home, or whose spouse did, can fail one program and pass the other. Substantial renovation has its own CRA meaning, generally a renovation that removes or replaces at least 90 percent of the building other than the structural shell. A kitchen and a bathroom are not a substantial renovation because the invoice was large.</p>

    <div class="warning-box">
        <strong>Resale is usually the wrong building:</strong>
        <p>A used residential complex is generally an exempt supply. No GST/HST is charged, so there is no GST/HST to rebate. The $50,000 figure does not come off the price of a resale condo. If a builder is selling a new unit, tax is in the deal, and the rebate is a claim against that tax. If you are not sure which contract you signed, the lawyer's statement of adjustments is the document, not the listing photo.</p>
    </div>

    <h2>I ran the numbers on CRA's midpoint</h2>

    <p>CRA's "what is the rebate" page does the midpoint for you. A new home valued at $1.25 million sits halfway between $1 million and $1.5 million. The page says the buyer is eligible for 50 percent of the $50,000 maximum, which is $25,000, when the other conditions are met. This article does not invent a formula past that example. Guide RC4028 is the line-by-line calculation, including whether the value is the builder's consideration or a fair-market-value test for an owner-built house. Use the guide's worksheet. Do not scale $50,000 by a ratio you built in a note app and hand it to a builder.</p>

    <table>
        <caption>Federal FTHB GST/HST rebate, as CRA describes the value bands</caption>
        <thead>
            <tr>
                <th>Value CRA describes</th>
                <th>Federal rebate</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>At or below $1 million</td>
                <td>Up to 100 percent of the GST or the federal part of the HST, maximum $50,000</td>
            </tr>
            <tr>
                <td>$1.25 million, CRA's worked midpoint</td>
                <td>$25,000, which is half of the $50,000 maximum, if the other conditions are met</td>
            </tr>
            <tr>
                <td>Between $1 million and $1.5 million</td>
                <td>Maximum gradually reduced. Do not interpolate past the example without RC4028</td>
            </tr>
            <tr>
                <td>At or above $1.5 million</td>
                <td>No FTHB GST/HST rebate</td>
            </tr>
        </tbody>
    </table>

    <p>Five percent of $1,000,000 is $50,000. That is why the cap and the "$1 million" band meet. It is not a promise that every contract priced at $1,000,000 produces a $50,000 cheque. Assignment deals, rebates the builder already credited, and the existing new housing rebate, which this rebate tops up when both apply, all change the form. CRA says where both the existing new housing rebate and the FTHB rebate apply, the FTHB rebate acts as a top-up. You do not add two marketing numbers and call it $50,000 plus the old rebate without the worksheet.</p>

    <div class="example-box">
        <strong>Illustration: same $900,000 headline, two different tax lives</strong>
        <p>These are not listings. They are a teaching contrast. Case A is a resale condo at $900,000 with no GST/HST on the purchase because the supply is exempt. The federal rebate is zero. Case B is a new condo from a builder, agreement dated after March 20, 2025 and before 2031, valued under $1 million, buyer qualifies, and GST or the federal part of the HST was charged. The federal rebate can be up to 100 percent of that federal tax, capped at $50,000. The cash due on closing still includes everything in the <a href="/blog/land-transfer-tax-closing-costs-canada/">closing cost guide</a>, and the mortgage math is unchanged by a rebate the builder has not yet credited. If the builder credits the rebate at closing, the funds you need are lower. If the builder does not, you pay the tax and file. CMHC insurance, if the down payment requires it, is a separate premium. It is the <a href="/blog/cmhc-mortgage-insurance-canada/">mortgage insurance guide</a>, not a housing rebate.</p>
    </div>

    <h2>Ontario is two programs, and they do not stack without a cap</h2>

    <p>CRA's FTHB overview says the Ontario first-time home buyers' rebate provides up to $80,000 of the provincial part of the HST and follows the federal FTHB eligibility conditions. That is the first-time program. Notice 346, GST/HST Notice, August 2026, describes a second program: the Ontario enhanced new housing rebate. Together with the existing Ontario new housing rebate, it can relieve up to $80,000 of the 8 percent provincial part of the HST on a new or substantially renovated home valued up to $1,850,000, for use as the buyer's or a relation's primary place of residence. Builder agreements entered into on or after April 1, 2026 and on or before March 31, 2027 can qualify, with further dates: construction begun by December 31, 2028, substantially completed by December 31, 2031, consideration under $1,850,000, and tax payable by December 31, 2032. Owner-built homes look at a construction start inside April 1, 2026 to March 31, 2027, substantial completion before 2030, and fair market value under $1,850,000. An agreement signed before April 1, 2026 that is later varied is deemed, for this rebate, to have been entered into before April 1, 2026. You do not amend your way in.</p>

    <table>
        <caption>Ontario enhanced new housing rebate amounts, Notice 346</caption>
        <thead>
            <tr>
                <th>New home value</th>
                <th>What Notice 346 says</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Up to $1 million</td>
                <td>Full rebate: 100 percent of the 8 percent provincial part, maximum $80,000, together with the existing Ontario new housing rebate</td>
            </tr>
            <tr>
                <td>Above $1 million up to $1.5 million</td>
                <td>Flat rebate of $80,000</td>
            </tr>
            <tr>
                <td>Above $1.5 million and below $1.85 million</td>
                <td>Partial rebate of the 8 percent provincial part</td>
            </tr>
            <tr>
                <td>$1.85 million and above</td>
                <td>No enhanced rebate. The Ontario new housing rebate of up to $24,000 can still be the one that remains</td>
            </tr>
        </tbody>
    </table>

    <p>If you qualify for both the enhanced rebate and the Ontario first-time buyers' rebate on the 8 percent, Notice 346 says you can claim either or both, and the total of all rebates of that 8 percent cannot exceed the lesser of $80,000 and the provincial HST payable. The two Ontario programs do not become $160,000.</p>

    <p>The Ontario new home affordability payment is provincial, not a CRA rebate. Notice 346 says it provides up to $50,000, equivalent to up to 100 percent of the 5 percent federal part, for someone who is also entitled to the enhanced rebate. It is reduced by the federal part of any new housing rebate or FTHB GST/HST rebate the person is entitled to. A first-time buyer who can claim the full federal rebate has to claim that first. Whatever federal tax is left, if any, is what the affordability payment can still cover. A buyer who is not a first-time buyer can be in the enhanced rebate and in the affordability payment without the federal FTHB rebate eating the payment. Consent on the GST190 or GST191 lets CRA share details with Ontario. ServiceOntario's number on the notice is 1-800-267-8097. There is no separate CRA form just for the payment.</p>

    <h2>How the claim actually gets filed</h2>

    <ol>
        <li>Read the agreement date out loud. March 20, 2025 and April 1, 2026 are different gates for different rebates.</li>
        <li>Ask the builder, in writing, which rebates they will credit on the statement of adjustments. A credit you already received is not a second application.</li>
        <li>If the builder credits the federal and Ontario rebates, the builder files GST190 and, in Ontario, RC7190-ON with the GST/HST return. Electronic filing for the enhanced rebate was not available on the CRA page reviewed. The builder cannot deduct the Ontario affordability payment on the GST/HST return. Ontario pays that.</li>
        <li>If the builder does not credit a rebate you are entitled to, you file. CRA's application page says you generally have two years from ownership or possession, depending on the application type. A purchase that closed before Royal Assent on March 12, 2026 can be the subject of a later FTHB application inside that two-year limit.</li>
        <li>Owner-builders use GST191 and, in Ontario, RC7191-ON. The dates are construction dates, not the day you bought the lot.</li>
        <li>Keep the occupancy document. "First occupant" and "primary place of residence" are facts with evidence, not moods.</li>
    </ol>

    <h2>Frequently asked questions</h2>

    <h3>Does the $50,000 come off a resale purchase?</h3>
    <p>No. The rebate recovers GST or the federal part of the HST on a new or substantially renovated home. A resale that is an exempt supply did not charge that tax. There is nothing to rebate.</p>

    <h3>Is a $1.25 million new home worth $25,000 back?</h3>
    <p>That is CRA's midpoint example, and only when the other conditions are met. It is 50 percent of the $50,000 maximum. It is not an automatic credit on every contract that says $1.25 million. Use RC4028 for the actual base.</p>

    <h3>Can I get Ontario's enhanced rebate and the first-time provincial rebate?</h3>
    <p>Notice 346 says you can claim either or both if you qualify for both, and that every rebate of the 8 percent provincial part together cannot exceed the lesser of $80,000 and the provincial HST. The enhanced window is agreements or construction starts from April 1, 2026 through March 31, 2027, plus the completion dates in the notice.</p>

    <h3>Does the Ontario affordability payment double the federal $50,000?</h3>
    <p>No. It is reduced by the federal new-housing rebate and the federal FTHB rebate you are entitled to. A first-time buyer who receives the full federal rebate may have little or nothing left in the affordability payment. The payment is for the federal tax the other rebates did not already return.</p>

    <h3>How long do I have to apply?</h3>
    <p>CRA's builder-purchase instructions say you generally have up to two years from ownership or possession, depending on the application type. Builder-credited rebates are filed by the builder with the return. Do not wait out the two years if the builder was supposed to credit you and did not. Ask while the file is still warm.</p>

    <h3>Does this replace the FHSA or the Home Buyers' Plan?</h3>
    <p>No. Those are withdrawals and contributions inside registered accounts. This is a sales-tax rebate on new housing. A buyer can use more than one, if each program's own test is met. None of them relaxes the mortgage stress test.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/gst-hst-rebates/first-time-home-buyers-gst-hst-rebate.html">CRA: first-time home buyers' GST/HST rebate overview, including the Ontario first-time rebate of up to $80,000</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/gst-hst-rebates/first-time-home-buyers-gst-hst-rebate/what-rebate.html">CRA: what the rebate is, including the $1.25 million example</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/gst-hst-rebates/first-time-home-buyers-gst-hst-rebate/who-can-apply.html">CRA: who can apply</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/gst-hst-rebates/first-time-home-buyers-gst-hst-rebate/how-apply/home-purchased-from-builder.html">CRA: applying when you bought from a builder, including Royal Assent on March 12, 2026 and the two-year limit</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/notice346/ontario-enhanced-new-housing-rebate.html">CRA GST/HST Notice 346: Ontario enhanced new housing rebate, August 2026</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4028/gst-hst-new-housing-rebate.html">CRA Guide RC4028: GST/HST new housing rebate</a></li>
    </ul>

    ${footer}

</div>`
  ),
  octPost(
    'Real Estate',
    'real-estate',
    'cash-damming-canada',
    'Cash Damming in Canada: Steps, Tracing, and the Smith Manoeuvre Difference',
    'Cash damming sends rental or business cash to the home mortgage and borrows for the expenses. CRA has not approved the nickname.',
    `<div class="container">

    <div class="hook">
        Cash damming does not make the interest on your house deductible. It moves the expenses you were already going to pay, the ones that earn rent or business income, onto a line of credit, and it sends the rent or the revenue at the <span class="highlight">non-deductible mortgage</span>. The deduction you gain is the interest on that new borrowing. The deduction you do not gain is the interest on the house you live in.
    </div>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Paragraph 20(1)(c) and Income Tax Folio S3-F6-C1 are the test: interest on money borrowed for the purpose of earning income from a business or property can be deductible. Interest on money borrowed to buy the home you live in is not.</li>
            <li>Cash damming borrows to pay current expenses of the rental or the business, and uses the gross receipts to pay down personal debt. The Smith Manoeuvre borrows to buy investments and readvances as you pay the residence mortgage. They are different uses of a line. Mixing them in one tranche is how the tracing fails.</li>
            <li>CRA has not issued a product approval called "cash damming." The folio is a direct-use and purpose test. A clean sub-account is the evidence. A commingled chequing account is a reconstruction project.</li>
            <li>The interest rate on the line can be higher than the mortgage you are paying down. Part of the "saving" is a rate swap. Price it before you feel clever.</li>
            <li>If you sell the rental or stop the business, the purpose ends. So does the deduction, unless you reborrow into another current income-earning use and can still trace it.</li>
        </ul>
    </div>

    <p>The single-row version of this idea lives inside <a href="/blog/heloc-strategies-cra-clean-canada/">HELOC strategies</a>. The investment loop is <a href="/blog/smith-maneuver-canada-steps-risks/">the Smith Manoeuvre</a>. Whether the credit limit grows when you pay principal is <a href="/blog/readvanceable-mortgage-canada/">the readvanceable mortgage</a>. Cash damming can run on a plain secured line. It does not need the limit to regenerate, until the line is full. A readvanceable product is what keeps room appearing after that.</p>

    <h2>What are you actually rotating?</h2>

    <table>
        <caption>Two leverage structures people book under one nickname</caption>
        <thead>
            <tr>
                <th></th>
                <th>Cash damming</th>
                <th>Smith Manoeuvre</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>What the borrowed dollar pays</td>
                <td>Current expenses of a rental or a business you already operate: interest, tax, insurance, repairs, or business inputs</td>
                <td>A non-registered portfolio with a reasonable expectation of income</td>
            </tr>
            <tr>
                <td>Where the income goes</td>
                <td>Against the residence mortgage, or other non-deductible debt</td>
                <td>The portfolio stays invested. The residence mortgage is paid on its normal schedule, and principal paid frees credit</td>
            </tr>
            <tr>
                <td>What becomes deductible</td>
                <td>Interest on the line, to the extent the borrowed money traces to those income-earning expenses</td>
                <td>Interest on the investment loan, if the use test holds all year</td>
            </tr>
            <tr>
                <td>What stays non-deductible</td>
                <td>Interest on the residence mortgage</td>
                <td>Interest on the residence mortgage</td>
            </tr>
            <tr>
                <td>What has to be true first</td>
                <td>You have rental or business expenses you would have paid anyway, and gross receipts you can redirect</td>
                <td>You can qualify for the credit, tolerate the leverage, and keep a dedicated investment account</td>
            </tr>
        </tbody>
    </table>

    <p>A sole proprietor's version is the same rotation with a different deposit. Business revenue that would have paid rent, supplies, or a subcontractor's invoice is sent to the residence mortgage instead, and the line pays those business costs. The folio does not care that the income is on a T2125 rather than a T776. It cares that the borrowed dollar paid an expense incurred to earn income, and that you can show the path. A corporation is a worse casual fit. The company is a separate taxpayer. Having the company pay the owner's mortgage, or having the owner borrow personally against a corporate expense, is a shareholder-benefit problem wearing a cash-dam label. Keep the pattern inside one taxpayer unless a tax advisor has drawn the intercompany piece. The personal rental is the case this article's numbers use.</p>

    <p>A rental's own mortgage interest, property tax, insurance, and repairs are already deductible against rental income on the T776 when they were incurred to earn rent. Cash damming does not invent that deduction. It changes which debt sits under expenses you were paying from the rent. Over time, non-deductible principal falls and deductible principal rises. Net worth rises only if the tax saving and the principal you retired beat the extra interest and the risk of a second loan. The deduction list for the property itself is <a href="/blog/rental-property-tax-deductions-canada/">rental property tax deductions</a>. A sole proprietor running the same pattern against business expenses is in the same folio, with a different statement. The filing side of self-employment is the <a href="/blog/self-employed-tax-guide/">self-employed tax guide</a>.</p>

    <h2>The steps</h2>

    <ol>
        <li><strong>Separate the debts before the first transfer.</strong> Ask the lender for a segment or a sub-account with its own statement. The residence mortgage stays the residence mortgage. The line pays rental or business expenses and nothing else. Groceries, a TFSA contribution, and a kitchen renovation do not touch it.</li>
        <li><strong>List the expenses that qualify before you borrow them.</strong> They are the expenses you could have deducted if you had paid them from the rent. A personal bill you route through the rental "because the line is open" fails the purpose test and contaminates the trace.</li>
        <li><strong>Deposit the rent or the revenue to an account that pays the residence mortgage.</strong> Do not run it through the line. The whole point is that the income dollar retires non-deductible principal, and the borrowed dollar pays the deductible expense.</li>
        <li><strong>Pay each expense from the line, with a memo you could show an auditor.</strong> Transfer records, invoices, and the annual interest statement are the file. A one-page note written the week you start, stating the purpose, beats a memory.</li>
        <li><strong>Claim interest only on the clean balance.</strong> If any personal dollar entered the tranche, you do not estimate a percentage from a feeling. You reconstruct, or you stop claiming until the balance is clean again. Folio S3-F6-C1 is the document your accountant will actually open.</li>
        <li><strong>When the rental is sold or the business stops, stop.</strong> Repay the line or move the borrowed money into another current use that still earns income, and document the move. A line that once paid a furnace and now pays a car is a personal loan with a rental story attached.</li>
    </ol>

    <h2>I ran the numbers on a five-year rotation</h2>

    <p>The dollars are a teaching picture, the same shape as the illustration already on the HELOC page, extended so the interest is visible. They are not your rent and not a rate quote. Gross rent is $3,000 a month, $36,000 a year, and all of it is sent to the residence mortgage. Expenses you would have paid from that rent, other than the residence mortgage, are $1,400 a month, $16,800 a year, and those are drawn from the line on January 1 of each year so the arithmetic is easy to audit. The line is interest-only at an assumed 6 percent. The residence mortgage rate is an assumed 4 percent. Neither rate is a lender's offer. The <a href="/blog/mortgage-prepayment-calculator/">prepayment calculator</a> is where a real contract rate and a real amortization belong. This table ignores the contractual payment schedule. It only asks what the extra principal and the new interest look like if you hold the assumptions still.</p>

    <table>
        <caption>Illustration: $16,800 drawn each January 1, line at 6 percent, interest-only</caption>
        <thead>
            <tr>
                <th>Year</th>
                <th>Line balance after the draw</th>
                <th>Interest on the line at 6 percent</th>
                <th>Extra principal sent to the residence mortgage that year</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>$16,800</td>
                <td>$1,008</td>
                <td>$36,000</td>
            </tr>
            <tr>
                <td>2</td>
                <td>$33,600</td>
                <td>$2,016</td>
                <td>$36,000</td>
            </tr>
            <tr>
                <td>3</td>
                <td>$50,400</td>
                <td>$3,024</td>
                <td>$36,000</td>
            </tr>
            <tr>
                <td>4</td>
                <td>$67,200</td>
                <td>$4,032</td>
                <td>$36,000</td>
            </tr>
            <tr>
                <td>5</td>
                <td>$84,000</td>
                <td>$5,040</td>
                <td>$36,000</td>
            </tr>
        </tbody>
    </table>

    <p>Interest paid on the line over five years is $15,120. If every dollar of that interest is deductible and the marginal rate is an assumed 43 percent, the tax reduction is about $6,502 and the after-tax cost of the line interest is about $8,618. You still paid the interest. The other side of the trade is principal gone from the residence mortgage: $180,000 over five years. At an assumed 4 percent, a balance that is lower by the full cumulative prepayment would avoid about $7,200 of residence interest in year 5 alone. That sentence is a ceiling on the illustration, not an amortization. Early in the five years the balance is only lower by one year's prepayment, so the interest avoided is smaller, and a real mortgage payment also rewrites principal and interest every month. Price your own contract. Do not borrow because $7,200 appeared in a table.</p>

    <div class="example-box">
        <strong>Where the Smith Manoeuvre would have spent the same credit</strong>
        <p>Take the $16,800 of new line in year 1 and buy dividend-paying investments in a non-registered account instead of paying the rental's insurance and repairs. That is no longer cash damming. The rental expenses are still paid from the rent, the residence mortgage does not receive the $36,000, and you now have market risk on top of the interest. Both structures can be deductible. They are deductible for different uses. Running both through one HELOC statement, with a TFSA contribution in the middle, is how a supportable file becomes a percentage you cannot defend. Pick one use per tranche.</p>
    </div>

    <h2>The tracing mistakes that undo the year</h2>

    <ul>
        <li><strong>One card for everything.</strong> The line that pays the rental's property tax and also the family's groceries is a mixed-use debt. The folio does not let you claim "most of it."</li>
        <li><strong>Borrowing to contribute to an RRSP, TFSA, or FHSA.</strong> The income inside those accounts is not taxed in your hands. The purpose test fails even when the contribution is a good idea on its own.</li>
        <li><strong>Paying the rental expense from the rent, then borrowing the same amount to spend.</strong> That is a personal draw with extra steps. The borrowed money has to be the money that pays the expense.</li>
        <li><strong>A joint line and one spouse's rental.</strong> The person who claims the interest should be the person who owes it and who owns the income. Attribution and beneficial ownership are not cured by a nickname. Get advice before the first transfer if both names are on the credit.</li>
        <li><strong>Capital cost versus current expense.</strong> A repair can be current. A renovation that improves the property can be capital. Capital cost allowance is a different claim from interest. Do not run a new roof through the "expense" column because the line paid the contractor.</li>
    </ul>

    <h2>Frequently asked questions</h2>

    <h3>Does CRA allow cash damming?</h3>
    <p>CRA does not approve strategies by marketing name. Folio S3-F6-C1 and paragraph 20(1)(c) allow interest to be deducted when the borrowed money is used to earn income from a business or property, subject to the limits in the Act. A cash-dam file that meets that use test is a deduction. A file that does not is a personal line with a story. There is no advance ruling hiding in the nickname.</p>

    <h3>Do I need a readvanceable mortgage?</h3>
    <p>Not on day one. You need a line that can fund the expenses, kept separate from personal spending. You need a readvanceable limit when the ordinary line is full and you still want new room as you pay the residence mortgage down. The product terms, including any 65 percent revolving cap your lender applies, are in the commitment. They are not in this article.</p>

    <h3>Is this better than just paying the rental expenses from the rent?</h3>
    <p>Only if the after-tax cost of the new interest is smaller than the residence interest you avoid, and you can carry the extra debt through a vacancy. A vacant month still accrues line interest. The rent you redirected is gone. Run the vacant case before you automate the transfers.</p>

    <h3>Can I cash-dam a room I rent in my own house?</h3>
    <p>Only the expenses that are actually incurred to earn that income, allocated on a basis you can explain. You cannot move the entire residence mortgage into the deductible column because a bedroom has a tenant. Mixed-use houses are an allocation problem. They are not a loophole.</p>

    <h3>What happens to the line when I sell the rental?</h3>
    <p>The purpose of that borrowing ended unless you reinvest the borrowed money in another income-earning use and can trace it. Repaying the line from the sale proceeds is the clean version. Leaving it outstanding and spending the proceeds is how deductible interest becomes personal interest in the year of the sale.</p>

    <h3>Should the tax refund go against the mortgage?</h3>
    <p>If you want the rotation to accelerate, yes. A refund you spend does not undo the deduction you already claimed. It just fails to create the next dollar of principal reduction. Write the choice down so a spring deposit does not become a vacation by accident.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/technical-information/income-tax/income-tax-folios-index/series-3-property-investments-savings-plans/series-3-property-investments-savings-plan-folio-6-interest/income-tax-folio-s3-f6-c1-interest-deductibility.html">CRA Income Tax Folio S3-F6-C1, Interest Deductibility</a></li>
        <li><a href="https://laws-lois.justice.gc.ca/eng/acts/I-3.3/section-20.html">Justice Laws: Income Tax Act, section 20, including paragraph 20(1)(c)</a></li>
    </ul>

    ${footer}

</div>`
  ),
];
