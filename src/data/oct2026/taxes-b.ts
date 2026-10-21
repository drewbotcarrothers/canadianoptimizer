import { octPost } from './types';

const footer = `<div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about Canadian income tax as of October 19, 2026. It is not tax, legal, or investment advice, and it is not a filing position. Deadlines, withholding rates, and the prescribed interest rate change. Figures are tied to CRA, ESDC, TMX, Revenu Québec, or Department of Finance pages reviewed on October 19, 2026, or are labelled as arithmetic on stated assumptions. Confirm the form and consult a tax professional for your file.</p>
        <div class="footer-note">Published: October 4, 2026 | Updated: October 19, 2026 | Category: Taxes | Author: Andrew</div>
    </div>`;

export const oct2026TaxPostsB = [
  {
    ...octPost(
    'Taxes',
    'taxes',
    'year-end-tax-checklist',
    'Year-End Tax Moves for 2026: The December 31 Checklist',
    '2026 year-end tax checklist for Canada: what really ends Dec 31 (FHSA, gifts, RESP grant, Dec 30 TSX loss sales) and why the RRSP deadline is March 1, 2027.',
    `<div class="container">

    <div class="hook">
        December 31 is a real deadline for some moves and a fake one for the RRSP deduction. The people who already fill a TFSA every January do not need another reminder to contribute. They need the short list of things that <span class="highlight">actually die at midnight</span> on the last day of 2026.
    </div>

    <p>For 2026, the year-end moves that really end on December 31 are First Home Savings Account (FHSA) contributions, charitable gifts, Registered Education Savings Plan (RESP) contributions for this year's grant, tax-loss sales that settle in 2026, and your own RRSP if you turn 71. <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/important-dates-rrsp-rrif-rdsp.html">CRA's 60-day rule</a> puts the regular 2026 RRSP deadline at Monday, March 1, 2027.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>An FHSA contribution has to be in the account during the calendar year to be an FHSA deduction for that year. CRA's contribution period is January 1 to December 31. There is no 60-day spill into March. Annual room is $8,000; unused room carries forward up to $8,000, so a later year can allow up to $16,000.</li>
            <li>A Tax-Free Savings Account (TFSA) withdrawal in December does not restore room until January 1 of the next year. Putting the money back in the same December creates an excess if you had no other room.</li>
            <li>A charitable gift has to be made in the year. A public-security donation has to be completed, not merely instructed, in the year.</li>
            <li>On the Toronto Stock Exchange (TSX), Wednesday, December 30, 2026 is the last trade date that settles in 2026. A December 31 trade settles January 4, 2027 (TMX settlement schedule). The 30-day superficial-loss window still applies.</li>
            <li>An RESP contribution of $2,500 made in 2026 earns the full $500 basic Canada Education Savings Grant (CESG) for 2026.</li>
            <li>A Registered Retirement Savings Plan (RRSP) contribution for the 2026 deduction can still be made in the first 60 days of 2027, which ends Monday, March 1, 2027. December 31 is the wrong countdown for that one item.</li>
        </ul>
    </div>

    <nav aria-label="On this page">
        <strong>On this page</strong>
        <ul>
            <li><a href="#deadlines">Which deadlines are actually December 31?</a></li>
            <li><a href="#nine-moves">What should you do before December 31, 2026? Nine moves in order</a></li>
            <li><a href="#tfsa-withdrawal">What happens if you withdraw from a TFSA in December and put it back?</a></li>
            <li><a href="#capital-loss">What is the last day to sell for a 2026 capital loss?</a></li>
            <li><a href="#which-moves">Which year-end moves matter for your situation?</a></li>
            <li><a href="#faq">Frequently asked questions</a></li>
            <li><a href="#sources">Sources</a></li>
            <li><a href="#related">Related reading</a></li>
        </ul>
    </nav>

    <p>The year-round map is the <a href="/blog/tax-planning-calendar/">tax planning calendar</a>. This page is the December cut. It assumes the TFSA is already a habit, which is the <a href="/blog/tfsa-contribution-optimization/">January contribution guide</a>.</p>

    <p>If the TFSA is not full, that is the first dollar, and it is not a December trick. More tax guides are in the <a href="/category/taxes/">Taxes hub</a>.</p>

    <h2 id="deadlines">Which deadlines are actually December 31?</h2>

    <p>FHSA contributions, charitable gifts, an RESP contribution for this year's grant, and your own RRSP if you turn 71 in 2026. A regular RRSP contribution does not. It can wait until Monday, March 1, 2027. A TSX tax-loss sale has to be traded by Wednesday, December 30, 2026 if the loss is supposed to settle in 2026.</p>

    <div class="table-wrapper">
        <table>
            <caption>2026 year-end timing, from CRA, ESDC and TMX pages reviewed October 19, 2026</caption>
            <thead>
                <tr>
                    <th>Move</th>
                    <th>The date that matters</th>
                    <th>What people get wrong</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>FHSA contribution you want to deduct for 2026</td>
                    <td>In the account by December 31, 2026</td>
                    <td>Treating it like an RRSP, which has a 60-day window into the next year</td>
                </tr>
                <tr>
                    <td>TFSA withdrawal you want back as 2027 room</td>
                    <td>The withdrawal has to occur in 2026. Room returns January 1, 2027, plus the 2027 dollar limit once CRA announces it</td>
                    <td>Recontributing in December and creating an excess. See the <a href="/blog/tfsa-overcontribution-penalty/">penalty page</a></td>
                </tr>
                <tr>
                    <td>Charitable donation for the 2026 credit</td>
                    <td>Gift made in 2026</td>
                    <td>A pledge, or a security still sitting at the broker on January 2</td>
                </tr>
                <tr class="highlight-row">
                    <td>Tax-loss sale for a 2026 capital loss</td>
                    <td>Settlement in 2026: on the TSX, trade by Wednesday, December 30, 2026</td>
                    <td>Trading on December 31, which settles January 4, 2027. US-listed securities: confirm with your broker</td>
                </tr>
                <tr>
                    <td>Medical expenses</td>
                    <td>Any 12-month period ending in 2026, not a December 31 cliff. The claim is the amount above the lesser of 3% of net income or a dollar cap ($2,834 for 2025, per <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-33099-33199-eligible-medical-expenses-you-claim-on-your-tax-return.html">CRA's line 33099 page</a>; check the 2026 figure when filing). It's often better claimed by the lower-income spouse.</td>
                    <td>Waiting for December when an earlier 12-month window already clears the threshold. The credit is the <a href="/blog/medical-expense-tax-credit-canada/">medical expense guide</a></td>
                </tr>
                <tr>
                    <td>RESP contribution for the 2026 grant</td>
                    <td>Contribution made in 2026</td>
                    <td>Assuming the grant room is lost: unused room carries forward, but the grant is capped at $1,000 a year</td>
                </tr>
                <tr>
                    <td>Your own RRSP if you turn 71 in 2026</td>
                    <td>December 31, 2026</td>
                    <td>Using the 60-day window, which does not apply to your own RRSP after the year you turn 71</td>
                </tr>
                <tr>
                    <td>Interest on a prescribed-rate spousal loan for 2026</td>
                    <td>Paid by January 30, 2027 (30 days after year-end)</td>
                    <td>Paying late, which breaks the attribution exception</td>
                </tr>
                <tr>
                    <td>Final 2026 tax instalment (if CRA asks you for instalments)</td>
                    <td>Tuesday, December 15, 2026</td>
                    <td>Treating instalments as optional when a reminder was issued</td>
                </tr>
                <tr>
                    <td>RRSP deduction for 2026</td>
                    <td>First 60 days of 2027, to Monday, March 1, 2027</td>
                    <td>Rushing a December transfer that could wait, or missing the real deadline in March because December felt final</td>
                </tr>
                <tr>
                    <td>Registered Retirement Income Fund (RRIF) minimum for 2026</td>
                    <td>The carrier has to pay the minimum in the calendar year</td>
                    <td>Assuming a December 30 click still settles as a 2026 payment. Ask the carrier. The factors are the <a href="/blog/rrif-minimum-withdrawal/">RRIF minimum table</a></td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3>The year-end calendar, December 2026 to March 2027</h3>

    <div class="timeline">
        <div class="timeline-item">
            <div class="timeline-year">December 15, 2026</div>
            <p>Final 2026 instalment for most individuals CRA asks to pay instalments. Farmers and fishers pay one instalment by December 31.</p>
        </div>
        <div class="timeline-item">
            <div class="timeline-year">December 24, 2026</div>
            <p>The TSX closes at 1:00 PM.</p>
        </div>
        <div class="timeline-item">
            <div class="timeline-year">December 25 and December 28, 2026</div>
            <p>The TSX is closed.</p>
        </div>
        <div class="timeline-item">
            <div class="timeline-year">December 30, 2026</div>
            <p>Last TSX trade date that settles in 2026.</p>
        </div>
        <div class="timeline-item">
            <div class="timeline-year">December 31, 2026</div>
            <p>FHSA contributions, charitable gifts, an RESP contribution for this year's grant, your own RRSP if you turn 71, and TFSA withdrawals you want back as 2027 room.</p>
        </div>
        <div class="timeline-item">
            <div class="timeline-year">January 1, 2027</div>
            <p>A 2026 TFSA withdrawal returns as room. The 2027 dollar limit is added only once CRA announces it.</p>
        </div>
        <div class="timeline-item">
            <div class="timeline-year">January 30, 2027</div>
            <p>Prescribed-rate loan interest for 2026 has to be paid.</p>
        </div>
        <div class="timeline-item">
            <div class="timeline-year">March 1, 2027</div>
            <p>RRSP deadline for a 2026 deduction. The first 60 days of 2027 end on this Monday.</p>
        </div>
    </div>

    <p>The <a href="https://www.tsx.com/en/trading/calendars-and-trading-hours/calendar">TMX holiday calendar</a> closes the TSX at 1:00 PM on December 24 and all day on December 25 and 28. On the <a href="https://tsx.com/en/resource/3407/">TMX 2026 settlement schedule</a>, December 30 is the last TSX trade that settles in 2026, and a December 31 trade settles January 4, 2027.</p>

    <p><a href="https://www.canada.ca/en/revenue-agency/services/payments/payments-cra/individual-payments/income-tax-instalments/due-dates.html">CRA</a> puts the final instalment for most people on December 15, 2026, and one instalment on December 31 for farmers and fishers. December 31 still closes FHSA contributions, gifts, the RESP grant contribution, and your own RRSP at 71. January 1, 2027 restores 2026 TFSA withdrawal room. January 30, 2027 is the prescribed-rate interest deadline, and Monday, March 1, 2027 is the regular RRSP deadline.</p>

    <p>Those dates are the filter. The order to act on them is the nine moves below.</p>

    <h2 id="nine-moves">What should you do before December 31, 2026? Nine moves in order</h2>

    <p>Do these in order, and stop when the account does not apply to you. The dates that cannot slip are the FHSA, the RESP grant contribution, a gift, a TSX loss that must settle in 2026, and your own RRSP if you turn 71. A regular RRSP contribution can wait until March.</p>

    <ol>
        <li><strong>Stop a same-year TFSA round trip.</strong> If you need cash, withdraw. If you also want to contribute, check room first. A December withdrawal does not fund a December contribution.</li>
        <li><strong>Fund the FHSA by December 31 if 2026 is the deduction year you want.</strong> CRA says contributions may be deducted in the year they are made or a later year, and that you cannot use a 2026 contribution on a 2025 return. The mirror image is the planning point: a contribution on January 2, 2027 is a 2027 event. Annual room in the year you open is $8,000, and the lifetime deduction cap CRA states is $40,000. Unused participation room carries forward, capped at $8,000, so a year can allow up to $16,000 (<a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account/contributing-your-fhsa.html">CRA's example</a>: open in 2026, contribute nothing, and 2027 room is $16,000). A contribution above your room is taxed at 1% a month. The account is the <a href="/blog/fhsa-guide/">FHSA guide</a>.</li>
        <li><strong>Make the RESP contribution in 2026 if this year's grant room is unused.</strong> The basic CESG is 20% of annual personal contributions, up to $500 per child a year ($1,000 if there is unused grant room from earlier years), with a $7,200 lifetime limit, per the <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/registered-education-savings-plans-resps/canada-education-savings-programs-cesp/canada-education-savings-grant-cesg.html">CRA/ESDC grant page</a>. $2,500 in 2026 gets the full $500 for 2026. Grant room you miss carries forward, but catching up is limited to $1,000 of grant a year. The grant stops after the calendar year the child turns 17.</li>
        <li><strong>Harvest a loss only if settlement will land in 2026 and the substitute is not identical.</strong> The denial rule is the <a href="/blog/superficial-loss-rule-canada/">superficial loss rule</a>: you or an affiliated person acquire the same property in the 30 days before or after the sale and still hold it at the end of that window. A TFSA or RRSP rebuy counts as your acquisition. If the loss is denied, it is usually added to the cost base of the repurchased property, so it is deferred, not lost. The calendar version is <a href="/blog/tax-loss-harvesting-calendar-canada/">tax-loss harvesting</a>. Turn off the dividend reinvestment plan (DRIP) before you sell. Write down the superficial-loss dates before the family gathering. A spouse's automatic purchase, a joint DRIP, and a January TFSA contribution into the same ticker are how December losses disappear. One shared note with the ticker and the first safe date is the whole control.</li>
        <li><strong>Donate appreciated securities in kind if the gift was going to happen anyway.</strong> The donation credit is the <a href="/blog/charitable-donation-tax-credit-canada/">charitable donation guide</a>. The tax point of an in-kind gift of publicly listed securities is that the capital gain can be nil while the credit uses the fair market value, on the conditions in the Income Tax Act. Complete <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-34900-donations-gifts/capital-gains-realized-on-gifts-certain-capital-property.html">Form <span class="form-ref">T1170</span></a> for listed securities. <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-34900-donations-gifts/how-much-claim.html">Gift credits</a> you do not use this year can be carried forward for up to 5 years, and the claim is generally limited to 75% of net income. Get the transfer completed in 2026. A December 31 instruction that the broker completes in January is a 2027 gift.</li>
        <li><strong>Pick the medical 12-month window on purpose.</strong> CRA lets you claim eligible expenses for any 12-month period ending in the tax year, once the expenses clear the threshold on the return. The claim is the amount above the lesser of 3% of net income or a dollar cap ($2,834 for 2025, per <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-33099-33199-eligible-medical-expenses-you-claim-on-your-tax-return.html">CRA's line 33099 page</a>; check the 2026 figure when filing). It's often better claimed by the lower-income spouse. December 31 is not magic. A window that ends in June can be the one that clears it. Do not delay a pair of glasses into a worse window for the sake of a round date.</li>
        <li><strong>Pay the interest on a prescribed-rate loan by January 30, and set the transfer in December so it cannot slip.</strong> The rate for a new loan made from October 1 to December 31, 2026 is 3 percent, from <a href="https://www.canada.ca/en/revenue-agency/services/tax/prescribed-interest-rates/2026-q4.html">CRA's fourth-quarter page</a>. The <a href="https://laws-lois.justice.gc.ca/eng/acts/i-3.3/section-74.5.html">Income Tax Act</a> requires each year's interest to be paid within 30 days after year-end, so January 30, 2027 for 2026 interest. The deadline and the paperwork are the <a href="/blog/prescribed-rate-spousal-loans/">spousal loan guide</a>. One late year can attribute the income for that year and later years.</li>
        <li><strong>Take the RRIF minimum the carrier requires for 2026.</strong> The minimum is taxable. It is not optional once the plan has a minimum. If you want extra income in 2026 for a bracket you have already modelled, request it early enough that the carrier pays it in 2026. If you do not, do not manufacture a withdrawal to "use a bracket" without reading the <a href="/blog/oas-gis-clawback-canada/">Old Age Security (OAS) recovery tax</a>.</li>
        <li><strong>Do not prepay the RRSP out of panic.</strong> The 2026 deduction can be supported by a contribution in the first 60 days of 2027, and you designate the year. The <a href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html">2026 RRSP dollar limit is $33,810</a> (or 18% of 2025 earned income, if lower). Contribute in December only if the cash and the room are ready and you want the deduction on the 2026 return for a reason you can say out loud. The <a href="/blog/rrsp-playbook/">RRSP playbook</a> is that reason.</li>
    </ol>

    <div class="chart-container">
        <h3>2026 annual dollar limits behind the December moves</h3>
        <div class="bar-chart">
            <div class="bar-item">
                <div class="bar-label">RRSP</div>
                <div class="bar-wrapper"><div class="bar" style="width: 100%;"><span>$33,810</span></div></div>
            </div>
            <div class="bar-item">
                <div class="bar-label">FHSA</div>
                <div class="bar-wrapper"><div class="bar" style="width: 24%;"><span>$8,000</span></div></div>
            </div>
            <div class="bar-item">
                <div class="bar-label">TFSA</div>
                <div class="bar-wrapper"><div class="bar" style="width: 21%;"><span>$7,000</span></div></div>
            </div>
            <div class="bar-item">
                <div class="bar-label">RESP</div>
                <div class="bar-wrapper"><div class="bar" style="width: 7%;"><span>$2,500</span></div></div>
            </div>
        </div>
        <p>For 2026, the RRSP dollar limit is $33,810, the FHSA allows $8,000 of new room, the TFSA limit is $7,000, and $2,500 into an RESP earns the full $500 basic grant. Sources: <a href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html">CRA limits table</a>, <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account/contributing-your-fhsa.html">CRA FHSA pages</a>, <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/registered-education-savings-plans-resps/canada-education-savings-programs-cesp/canada-education-savings-grant-cesg.html">CRA/ESDC CESG page</a>, reviewed October 19, 2026.</p>
    </div>

    <ul class="checklist">
        <li>FHSA money is in the account in 2026, not still in transit on January 2.</li>
        <li>The RESP contribution for 2026 is in if this year's grant room is unused.</li>
        <li>The broker has confirmed, in writing, that the loss trade settles in 2026.</li>
        <li>The DRIP is off before that sale.</li>
        <li>The in-kind gift has left the account.</li>
        <li>Prescribed-rate interest will arrive by January 30, 2027.</li>
        <li>The RRIF minimum will be paid in 2026.</li>
        <li>Your own RRSP contribution is in if you turn 71 in 2026.</li>
    </ul>

    <p>The move people botch with a dollar, rather than a date, is the December TFSA withdrawal.</p>

    <h2 id="tfsa-withdrawal">What happens if you withdraw from a TFSA in December and put it back?</h2>

    <p>The withdrawn amount comes back as room on January 1, 2027, not in December. Putting the same dollars back in December is an excess if you had no other room. On an illustration of $7,000, one month of the 1% tax is $70.</p>

    <div class="example-box">
        <strong>Illustration: $7,000 out on December 15 and back on December 20</strong>
        <div class="example-calculation">
            <div class="line"><span>Withdrawal on December 15</span><span>$7,000</span></div>
            <div class="line"><span>Contribution on December 20</span><span>$7,000</span></div>
            <div class="line"><span>Excess for the rest of December</span><span>$7,000</span></div>
            <div class="line total"><span>One month at 1%</span><span>$70</span></div>
        </div>
        <p>Assume the person had used all available room, including the 2026 dollar limit of $7,000, and has no unused room left. They withdraw $7,000 on December 15. CRA's rule is that the withdrawn amount becomes room on January 1 of the next year, not on December 16. They contribute $7,000 again on December 20.</p>
        <p>That contribution is an excess of $7,000 for the rest of December. <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/owing-tax/excess.html">CRA's excess-TFSA page</a> states the tax as 1% of the highest excess in each month, charged while the excess stays in. One month on $7,000 is $70. The larger cost is the habit: the same pattern in a larger account, or a contribution that sits into January before the new room arrives, is still an excess until the dates line up.</p>
        <p>This is arithmetic on CRA's timing rule and that monthly tax. It is not your notice. If the withdrawal was to fund a January contribution, wait until January.</p>
    </div>

    <p>The useful December withdrawal is the one you needed for spending, or the one that moves an asset you do not want inside the TFSA, with the room deliberately parked until next year. It is not a tax-loss sale. Losses inside a TFSA are not your capital losses. Selling inside the TFSA to "harvest" does nothing on the T1 and can only shrink the account.</p>

    <p>If the cash was meant for a loss sale in a taxable account, the next question is which day that sale still counts for 2026.</p>

    <h2 id="capital-loss">What is the last day to sell for a 2026 capital loss?</h2>

    <p>For TSX-listed securities, Wednesday, December 30, 2026. Canada moved to one-day (T+1) settlement on May 27, 2024 (<a href="https://www.osc.ca/en/news-events/news/canadian-securities-regulators-announce-move-t1-settlement-cycle">Canadian Securities Administrators</a>), and <a href="https://tsx.com/en/resource/3407/">TMX's 2026 schedule</a> shows a December 31 trade settles Monday, January 4, 2027.</p>

    <p>CRA treats the settlement date as the date of disposition (<a href="https://taxinterpretations.com/cra/severed-letters/2012-0468931c6">CRA technical interpretation 2012-0468931C6</a>). The TSX closes at 1:00 PM on December 24 and is closed December 25 and 28. For US-listed securities, mutual funds or anything that does not settle T+1, ask your broker for the settlement date in writing.</p>

    <p>Then count 30 calendar days forward and 30 calendar days back before you, your spouse, or an account you control buys the same security. The denial also needs someone to still hold that property at the end of the window. A rebuy inside a TFSA or an RRSP counts as your acquisition.</p>

    <div class="example-box">
        <strong>Example: a sale that settles on December 31, 2026</strong>
        <p>If a sale settles December 31, 2026, the 30 calendar days after it run to January 30, 2027. Don't let you, your spouse or your RRSP/TFSA rebuy the same security in that window, or in the 30 days before the sale.</p>
    </div>

    <div class="example-box">
        <strong>Example: message to your broker</strong>
        <p>I plan to sell [security] in my non-registered account on [date] for a 2026 capital loss. Please confirm the trade will settle in 2026 and send the settlement date. Please also turn off the DRIP on [security] before the sale.</p>
    </div>

    <div class="warning-box">
        <strong>Watch out:</strong>
        <p>A loss only offsets capital gains. A 2026 capital loss reduces 2026 capital gains first. It does not reduce salary. If you have no gains in 2026 and no gains to carry the loss against, the December trade is a portfolio decision, not a tax refund.</p>
        <p>A net capital loss can be carried back three years on <span class="form-ref">T1A</span> or forward indefinitely. The inclusion rate in force is one-half (a proposed increase to two-thirds was <a href="https://www.pm.gc.ca/en/news/news-releases/2025/03/21/prime-minister-mark-carney-cancels-proposed-capital-gains-tax-increase">cancelled on March 21, 2025</a>), which is the <a href="/blog/capital-gains-tax-canada/">capital gains guide</a>.</p>
    </div>

    <p>The date is the same for a TSX-listed stock. Which line on the list is yours depends on the account you actually hold.</p>

    <h2 id="which-moves">Which year-end moves matter for your situation?</h2>

    <p>It depends on the account you hold. An employee with a full TFSA and no taxable account can ignore the harvesting section. Their December list is the FHSA if a first home is real, the donation if they give, the medical window if they had a large year, and the RRSP only if the bracket justifies it.</p>

    <div class="table-wrapper">
        <table>
            <caption>Example decision guide, not advice</caption>
            <thead>
                <tr>
                    <th>Situation</th>
                    <th>The move that matters</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Employee with a full TFSA</td>
                    <td>FHSA if a first home is real, donations, medical window, RRSP only if the bracket justifies it</td>
                </tr>
                <tr>
                    <td>Investor with a taxable account</td>
                    <td>tax-loss sale by Dec 30 (TSX), superficial-loss dates, donate winners in kind</td>
                </tr>
                <tr>
                    <td>Parent with an RESP</td>
                    <td>$2,500 per child in 2026 for the $500 grant</td>
                </tr>
                <tr>
                    <td>Turning 71 in 2026</td>
                    <td>last own-RRSP contribution and the RRIF/annuity choice by Dec 31, see <a href="/blog/rrif-minimum-withdrawal/">RRIF minimum withdrawals</a></td>
                </tr>
                <tr>
                    <td>Retiree with a RRIF</td>
                    <td>minimum paid in 2026, OAS recovery tax before extra withdrawals</td>
                </tr>
                <tr>
                    <td>Incorporated owner</td>
                    <td>salary vs dividends on the corporate year-end</td>
                </tr>
            </tbody>
        </table>
    </div>

    <p>An incorporated owner has a different December. Salary versus dividend is a compensation decision with a corporate year-end that may not be December 31. That decision is <a href="/blog/salary-vs-dividends-incorporated-canada/">salary versus dividends</a>, not a personal TFSA trick.</p>

    <p>A retiree with a RRIF should look at the minimum, the OAS recovery threshold, and pension splitting before they request an extra December payment. A parent saving in an RESP should know that the Canada Education Savings Grant follows contributions in the calendar year. The RESP figures, including the $2,500 that earns the $500 basic grant, are move 3 above.</p>

    <p>Provincial credits for Quebec residents are claimed with Revenu Québec, not on a Form 428.</p>

    <p>If a December move involves a corporation, a large gift of securities or a spousal loan, have a tax professional look at your own file.</p>

    <h2 id="faq">Frequently asked questions</h2>

    <h3>Is December 31 the RRSP deadline?</h3>
    <p>No. A contribution in the first 60 days of 2027 can be deducted on the 2026 return, up to your available room, and that window ends on Monday, March 1, 2027. December 31 of the year you turn 71 is a different deadline, because that is the last day to contribute to your own RRSP.</p>
    <p>The ordinary working-age deadline is the 60-day rule. The 2026 RRSP dollar limit is $33,810, or 18% of 2025 earned income if that is lower.</p>

    <h3>Can I withdraw from my TFSA in December and recontribute in December?</h3>
    <p>Only if you still have unused room from before that withdrawal. The amount you withdraw becomes new room on January 1 of the following year. A same-month recontribution with no other room is an excess.</p>
    <p>The tax is 1% of the highest excess in each month. On the illustration above, one month on $7,000 is $70.</p>

    <h3>What is the last day to sell for a 2026 tax loss?</h3>
    <p>For TSX-listed securities on the normal one-day settlement cycle, Wednesday, December 30, 2026. A trade on December 31 settles January 4, 2027, so its loss lands in 2027. Confirm US-listed or other securities with your broker, and apply the 30-day superficial-loss window around the sale.</p>

    <h3>Do FHSA contributions have a grace period into March?</h3>
    <p>No. CRA says the FHSA contribution period is the calendar year. A contribution made in 2027 is not a 2026 deduction.</p>
    <p>You can choose to deduct a 2026 contribution in 2026 or a later year. You cannot pull a 2027 contribution backward.</p>

    <h3>Should I trigger a capital gain in December to "use a low bracket"?</h3>
    <p>Only if you were going to sell and the bracket this year is genuinely lower than the bracket you expect in the year you would otherwise sell. A gain you manufacture to fill a bracket is still a gain, included at one-half, and it uses cost base you do not get back. Most households should not invent dispositions in the last week of December.</p>

    <h3>Does a year-end bonus change any of this?</h3>
    <p>A bonus paid in 2026 is 2026 employment income, whenever you feel you earned it. If it lands in December, the RRSP deduction and the FHSA deduction are the tools that can still move 2026 taxable income, subject to room and to the FHSA calendar-year rule. The withholding on the bonus is not the final tax. The return is.</p>

    <h3>Is December 31 the deadline for the RESP grant?</h3>
    <p>Yes, for that year's grant. The Canada Education Savings Grant is paid on contributions made in the calendar year. The basic grant is 20% of the contribution, up to $500 a year per child.</p>
    <p>Unused grant room carries forward. Catching up is limited to $1,000 of grant a year.</p>

    <h3>When is the last 2026 tax instalment due?</h3>
    <p>December 15, 2026, for most individuals CRA asks to pay instalments. Farmers and fishers pay one instalment, and it is due December 31.</p>
    <p>If no reminder was issued, do not invent an instalment because the date appears on this page. The due date applies when CRA has asked you to pay.</p>

    <h2 id="sources">Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account/tax-deductions-fhsa-contributions.html">CRA: FHSA deductions and the January 1 to December 31 contribution period</a>, reviewed October 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/contributing/calculate-room.html">CRA: TFSA room, including the January 1 return of withdrawals</a>, reviewed October 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/prescribed-interest-rates/2026-q4.html">CRA: prescribed interest rates, fourth quarter 2026</a>, reviewed October 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-20805-fhsa-deduction.html">CRA: line 20805, you cannot deduct a 2026 FHSA contribution on a 2025 return</a>, reviewed October 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account/contributing-your-fhsa.html">CRA: Participating in your FHSAs</a>, reviewed October 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/important-dates-rrsp-rrif-rdsp.html">CRA: Important dates for RRSPs, FHSAs and more</a>, reviewed October 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html">CRA: MP, DB, RRSP, DPSP, ALDA, TFSA limits</a>, reviewed October 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/owing-tax/excess.html">CRA: If you owe tax on excess TFSA amounts</a>, reviewed October 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/capital-losses-deductions.html">CRA: Capital losses, including superficial loss</a>, reviewed October 19, 2026</li>
        <li><a href="https://tsx.com/en/resource/3407/">TMX: 2026 settlement schedule</a>, reviewed October 19, 2026</li>
        <li><a href="https://www.tsx.com/en/trading/calendars-and-trading-hours/calendar">TMX: 2026 market holidays</a>, reviewed October 19, 2026</li>
        <li><a href="https://www.osc.ca/en/news-events/news/canadian-securities-regulators-announce-move-t1-settlement-cycle">Canadian Securities Administrators: move to a T+1 settlement cycle, via the OSC</a>, reviewed October 19, 2026</li>
        <li><a href="https://taxinterpretations.com/cra/severed-letters/2012-0468931c6">CRA technical interpretation 2012-0468931C6, settlement date</a>, reviewed October 19, 2026</li>
        <li><a href="https://www.pm.gc.ca/en/news/news-releases/2025/03/21/prime-minister-mark-carney-cancels-proposed-capital-gains-tax-increase">Prime Minister of Canada: capital gains inclusion rate increase cancelled, March 21, 2025</a>, reviewed October 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-34900-donations-gifts/how-much-claim.html">CRA: Donations, how much you can claim</a>, reviewed October 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-34900-donations-gifts/capital-gains-realized-on-gifts-certain-capital-property.html">CRA: Capital gains realized on gifts of certain capital property</a>, reviewed October 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-33099-33199-eligible-medical-expenses-you-claim-on-your-tax-return.html">CRA: Lines 33099 and 33199 medical expenses</a>, reviewed October 19, 2026</li>
        <li><a href="https://laws-lois.justice.gc.ca/eng/acts/i-3.3/section-74.5.html">Income Tax Act, section 74.5</a>, reviewed October 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/registered-education-savings-plans-resps/canada-education-savings-programs-cesp/canada-education-savings-grant-cesg.html">CRA: Canada Education Savings Grant</a>, reviewed October 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/payments/payments-cra/individual-payments/income-tax-instalments/due-dates.html">CRA: Instalment payment due dates</a>, reviewed October 19, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/rrsp-options-when-you-turn-71/options-your-rrsps.html">CRA: Options for your own RRSPs at 71</a>, reviewed October 19, 2026</li>
    </ul>

    <h2 id="related">Related reading</h2>
    <ul>
        <li><a href="/blog/tax-loss-harvesting-calendar-canada/">Which trade date puts a capital loss in the year you want</a></li>
        <li><a href="/blog/superficial-loss-rule-canada/">When a 30-day rebuy denies the loss you just realized</a></li>
        <li><a href="/blog/fhsa-guide/">Whether an FHSA contribution is worth making before December 31</a></li>
        <li><a href="/blog/charitable-donation-tax-credit-canada/">How a gift of securities becomes a donation credit</a></li>
        <li><a href="/blog/rrif-minimum-withdrawal/">What minimum a RRIF has to pay in the year</a></li>
        <li><a href="/blog/quarterly-tax-instalments/">Whether the December 15 instalment applies to you</a></li>
        <li><a href="/category/taxes/">The rest of the tax guides this checklist only points at</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>December is a filter. The return is the system.</strong></p>
        <p>The 2026 tax guide is the filing companion for the moves on this list, $49 CAD.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
    ),
    updated: '2026-10-19',
    youtubeId: 'uauASJQGZA4',
    youtubeTitle: 'Year-End Tax Deadlines in Canada 2026: What Really Ends Dec 31',
    youtubeUploadDate: '2026-10-21T02:20:45-04:00',
    youtubeDuration: 'PT6M58S',
  },
];
