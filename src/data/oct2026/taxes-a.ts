import { articleFooter, octPost } from './types';

const taxDisclaimer =
  'This is general education about Canadian income tax as of October 29, 2026. It is not tax, legal, or investment advice, and it is not a filing position. Limits, brackets, credits, and proposed measures change. Confirmed figures are tied to CRA, the Department of Finance, ESDC, or Revenu Québec pages reviewed on October 29, 2026. Items described as proposals are not law until enacted. Dollar examples are illustrations of arithmetic on those sources, or on stated assumptions, not your assessment. Confirm the current page and consult a tax professional for your file.';

const footer = articleFooter('Taxes', taxDisclaimer);

export const oct2026TaxPostsA = [
  {
  ...octPost(
    'Taxes',
    'taxes',
    'canada-tax-money-changes',
    "Canada's 2027 Tax and Money Changes: TFSA, RRSP, Brackets, CPP, and Budget 2026",
    'CRA has confirmed the 2027 RRSP limit ($35,390), YMPE ($76,700) and YAMPE ($87,400). The 2027 TFSA limit and brackets are not announced, and Budget 2026 lands November 5.',
    `<div class="container">

    <div class="hook">
        Three 2027 numbers are now on the CRA table. The RRSP dollar limit is <span class="highlight">$35,390</span>, the year's maximum pensionable earnings (YMPE) is $76,700, and the second CPP ceiling (YAMPE) is $87,400. The 2027 TFSA dollar limit and the 2027 tax brackets are still not on any CRA page. Budget 2026 is set for November 5, 2026. If a headline gives you a TFSA figure for 2027, it is a projection until CRA posts it.
    </div>

    <div class="callout">
        <strong>Key takeaways, as of October 29, 2026:</strong>
        <ul>
            <li>CRA's limits table shows a 2027 RRSP dollar limit of $35,390. The 2026 RRSP dollar limit stays $33,810. The 2026 money-purchase limit is $35,390, which is why the next year's RRSP limit is already known.</li>
            <li>The 2026 TFSA dollar limit is $7,000, announced by CRA on December 1, 2025. There is no 2027 TFSA row.</li>
            <li>On October 28, 2026, CRA announced the 2027 YMPE of $76,700 and YAMPE of $87,400 (2026: $74,600 and $85,000), plus a 2028 RRSP dollar limit of $36,390. In 2026, base CPP employee contributions max at $4,230.45 and CPP2 (4 percent between the two ceilings) maxes at $416.</li>
            <li>Parliament has legislated a cut to the base CPP rate for 2027, from 4.95 percent to 4.75 percent each for employees and employers (Bill C-30, the Spring Economic Update 2026 Implementation Act). CRA has not yet posted its 2027 payroll maximums.</li>
            <li>Federal and provincial brackets for 2027 have not been released. CRA's usual indexation notice comes in November. Until it does, the 2026 brackets are the law you can plan on.</li>
            <li>The Spring Economic Update of April 28, 2026 proposed a longer Home Buyers' Plan grace period and Disability Tax Credit certification changes. Those are proposals. Finance Canada announced on October 20, 2026 that Budget 2026 will be tabled on November 5, 2026.</li>
        </ul>
    </div>

    <p>This is a change log, not the standing reference. The <a href="/blog/contribution-limits/">contribution limits</a> page is the 2026 table you use to contribute. The <a href="/blog/federal-tax-brackets/">federal brackets</a> and <a href="/blog/provincial-tax-rates/">provincial rates</a> are the 2026 law. Come back here when CRA posts indexation, and again when Budget 2026 is tabled. Do not treat a bank's "expected TFSA limit" as room.</p>

    <h2>What is already confirmed for 2027?</h2>

    <p>Registered-plan limits are set on a lag. The RRSP dollar limit for a year is tied to the money-purchase limit of the year before. CRA's page "MP, DB, RRSP, DPSP, ALDA, TFSA limits, YMPE and the YAMPE" now prints a full 2027 row and a 2028 RRSP figure. Two "What's new" notes are behind it. The October 30, 2025 note set the 2027 RRSP limit at $35,390. The October 28, 2026 note set the 2027 money-purchase limit at $36,390, the 2027 defined-benefit limit at $4,043.33, the 2027 DPSP limit at $18,195, the 2027 YMPE at $76,700, the 2027 YAMPE at $87,400, and the 2028 RRSP limit at $36,390.</p>

    <table>
        <caption>Dollar limits on CRA's table, reviewed October 29, 2026</caption>
        <thead>
            <tr>
                <th>Item</th>
                <th>2026</th>
                <th>2027</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>RRSP dollar limit</td>
                <td>$33,810</td>
                <td>$35,390</td>
                <td>Confirmed. 2028 limit also set: $36,390</td>
            </tr>
            <tr>
                <td>Money-purchase limit</td>
                <td>$35,390</td>
                <td>$36,390</td>
                <td>Confirmed October 28, 2026</td>
            </tr>
            <tr>
                <td>Defined-benefit limit</td>
                <td>$3,932.22</td>
                <td>$4,043.33</td>
                <td>Confirmed October 28, 2026</td>
            </tr>
            <tr>
                <td>DPSP limit</td>
                <td>$17,695</td>
                <td>$18,195</td>
                <td>Confirmed October 28, 2026</td>
            </tr>
            <tr>
                <td>YMPE (first CPP ceiling)</td>
                <td>$74,600</td>
                <td>$76,700</td>
                <td>Confirmed October 28, 2026</td>
            </tr>
            <tr>
                <td>YAMPE (second CPP ceiling)</td>
                <td>$85,000</td>
                <td>$87,400</td>
                <td>Confirmed October 28, 2026</td>
            </tr>
            <tr>
                <td>TFSA dollar limit</td>
                <td>$7,000</td>
                <td>Not announced</td>
                <td>CRA's latest TFSA note is dated December 1, 2025</td>
            </tr>
            <tr>
                <td>ALDA dollar limit</td>
                <td>$180,000</td>
                <td>Not announced</td>
                <td>2026 figure only</td>
            </tr>
        </tbody>
    </table>

    <p>Your personal RRSP room is not the dollar limit. It is 18 percent of the previous year's earned income, up to that dollar limit, plus unused room, minus pension adjustments. A person who did not earn enough in 2026 to support a $35,390 contribution in 2027 does not get $35,390 of new room. The notice of assessment is the number. The dollar limit is only the ceiling.</p>

    <p>FHSA participation room is a different statute. In the year you open a first FHSA, CRA says participation room is $8,000. The lifetime deduction cap CRA describes is $40,000. Transfers from an RRSP use that lifetime cap and are not deductible again. Nothing in the CRA pages reviewed on October 29, 2026 announces a 2027 FHSA increase. Treat $8,000 and $40,000 as the standing rules until a page says otherwise. The account guide is the <a href="/blog/fhsa-guide/">FHSA guide</a>.</p>

    <h2>What is still not a number?</h2>

    <p>The TFSA dollar limit is indexed to inflation and rounded to the nearest $500. CRA says that in the "before you contribute" page, and the same page lists 2024, 2025, and 2026 at $7,000. Rounding to $500 is why the limit can sit still for several years and then jump. A forecast that the 2027 limit will be $7,500 is a guess about the inflation factor and the rounding. CRA had not published that factor or a 2027 TFSA limit on October 29, 2026, even though Statistics Canada's September CPI is out. This article will not print the projection as a limit. When the November indexation release lands, the limit will be a sentence on canada.ca, the way the December 1, 2025 sentence set 2026 at $7,000.</p>

    <p>The same release is what normally sets the 2027 federal brackets and the basic personal amount. For 2026, the brackets this site's calculator uses, sourced to CRA, are 14 percent to $58,523, 20.5 percent to $117,045, 26 percent to $181,440, 29 percent to $258,482, and 33 percent above that. The 2026 basic personal amount is $16,452, phasing down to $14,829 between $181,440 and $258,482. Those are 2026 figures. They are not a preview of 2027. Provincial brackets are provincial statutes. They are also not republished here as 2027 law.</p>

    <div class="warning-box">
        <strong>Do not contribute 2027 TFSA room in January on a rumour:</strong>
        <p>New TFSA room arrives on January 1 only in the amount the government has set. A contribution above your room is an excess. The tax on excess TFSA amounts is the subject of the <a href="/blog/tfsa-overcontribution-penalty/">overcontribution penalty</a> page. If CRA has not announced the 2027 dollar limit, the safe January deposit is unused room you can already document, not a round number from a headline.</p>
    </div>

    <h2>What did the April 2026 update propose?</h2>

    <p>The Department of Finance tabled the Spring Economic Update on April 28, 2026. The tax annex is explicit that it describes proposed measures. Two of them matter to household planning. Neither one, on the text reviewed, is a bracket change.</p>

    <p>Home Buyers' Plan. The annex restates the current rules and then the proposal. You can withdraw up to $60,000 from an RRSP, and a joint buyer can withdraw up to $60,000 from their own RRSP. Repayment runs over at most 15 years. Budget 2024 temporarily moved the start of repayment from the second year after the first withdrawal to the fifth year, for first withdrawals from January 1, 2022 through December 31, 2025. The Spring Economic Update proposes to extend that five-year grace to first withdrawals up to the end of 2028. If that proposal is enacted as written, a first withdrawal in 2026, 2027, or 2028 would start its 15-year repayment in the fifth year after the withdrawal year. Until it is enacted, the grace period you can rely on is the one already in the statute for withdrawals that already qualified. The working guide is the <a href="/blog/home-buyers-plan-hbp-guide/">Home Buyers' Plan guide</a>. Do not skip a repayment year because a proposal said you could.</p>

    <p>Disability Tax Credit. For 2026 the annex states the credit amount is $10,341, which provides a federal tax reduction of up to $1,448. That is 14 percent of $10,341, rounded. The proposal does not change the disability criteria. It changes the certification paperwork for a listed set of long-lasting conditions, for certifications issued for 2026 and later years: the practitioner certifies the condition, and CRA keeps the authority to ask for more. A second proposal expands which practitioners may certify which impairments, and adds podiatrists for walking impairments within their scope, for certifications issued after 2026 for 2027 and later years. A third lets provincial public guardians and trustees, and in defined cases federal Indigenous services departments, certify a certificate of incapacity for an adult in their care, for 2026 and later certifications. The <a href="/blog/disability-tax-credit-canada-guide/">Disability Tax Credit guide</a> is the standing page. If you are filing on a proposal that is not yet on the form, you are early.</p>

    <p>Two other personal measures in the same annex are easy to miss. The employee-ownership-trust capital-gains exemption, currently scheduled through the end of 2026 and capped at $10 million of qualifying gains, is proposed to be made permanent. The labour-mobility deduction for eligible tradespeople is proposed to rise from a $4,000 annual cap to $10,000 in 2026, with indexation after that, and the distance test is proposed to move from 150 kilometres to 120. Both are proposals in the annex, with a stated application to 2026 and later years for the trades deduction. Read the enacted bill before you claim the higher cap.</p>

    <h2>What has Budget 2026 not said?</h2>

    <p>On July 6, 2026 the Minister of Finance announced pre-budget consultations, which ran to September 8, 2026. On October 20, 2026, Finance Canada announced that Budget 2026 will be tabled on November 5, 2026. A fall budget can move brackets, credits, the capital-gains inclusion rate, housing rebates, or nothing you use. Until the budget document and, where required, a bill exist, there is nothing to implement. The inclusion rate in force for 2026 remains one-half. That history is the <a href="/blog/capital-gains-tax-canada/">capital gains guide</a>. A budget speech is not an inclusion rate.</p>

    <div class="tip-box">
        <strong>Confirmed versus proposed, on one card:</strong>
        <p>Put the RRSP ceiling of $35,390, the YMPE of $76,700 and the YAMPE of $87,400 in the confirmed column for 2027. Put the TFSA and the brackets in the blank column. Put the Home Buyers' Plan grace extension and the Disability Tax Credit certification changes in the proposal column, with the April 28, 2026 annex as the source. When a CRA or Finance page moves an item, move the card. Do not move it because a newsletter did.</p>
    </div>

    <h2>I ran the numbers on the RRSP ceiling</h2>

    <p>The arithmetic is the ceiling, not a recommendation to contribute. The 2027 dollar limit is $1,580 above the 2026 dollar limit of $33,810. Someone whose 2026 earned income supports the full new room, and who is in a high bracket, feels that extra room as a deduction. Someone who will withdraw the same dollar in a similar bracket later has mostly deferred tax, not erased it. The account choice is still the <a href="/blog/rrsp-vs-tfsa-vs-fhsa/">RRSP versus TFSA versus FHSA</a> comparison, and the contribution mechanics are the <a href="/blog/rrsp-playbook/">RRSP playbook</a>.</p>

    <div class="example-box">
        <strong>Illustration: the extra $1,580 of ceiling, not a full return</strong>
        <p>Assume, and this is an assumption, that a person already expects to deduct the full 2026 dollar limit and will also have the earned income to use the full 2027 dollar limit. The only new planning fact is $1,580 of additional ceiling. At a combined marginal rate of about 43 percent, which is in the range of the Ontario marginal rate this site's 2026 calculator shows around $120,000 of taxable income, the deduction on that extra ceiling is about $680 of tax in the year of the contribution. At about 30 percent, closer to a middle Ontario bracket on the same calculator, it is about $474. The investment inside the RRSP is still taxable on the way out. The $680 is not a grant. It is a shift in when tax is paid, and it is only available if the earned-income test and the pension adjustment leave the room. No CPP, no Ontario health premium, and no other credits are in that sketch. The same lag already sets the next step: CRA's October 28, 2026 note puts the 2028 RRSP dollar limit at $36,390, another $1,000 of ceiling.</p>
    </div>

    <h2>What changes for CPP on a 2027 paycheque?</h2>

    <p>CPP amounts for a pension that starts in 2027 are not published as a maximum retirement cheque on the pages reviewed. What is published is the 2026 contribution machine. CRA's payroll table sets 2026 maximum pensionable earnings at $74,600, the basic exemption at $3,500, and the employee and employer rate at 5.95 percent. Maximum employee base CPP is $4,230.45. Self-employed base CPP is $8,460.90. Above the YMPE, CPP2 applies up to the YAMPE of $85,000 at 4 percent for an employee and the employer, and 8 percent if you are self-employed. CRA's CPP2 table caps the employee amount at $416 and the self-employed amount at $832. The gap from $74,600 to $85,000 is $10,400, and 4 percent of $10,400 is $416. That is the whole second tier for 2026.</p>

    <p>For 2027, CRA has now set the ceilings: YMPE $76,700 and YAMPE $87,400. The band between them is $10,700, and 4 percent of $10,700 is $428, so the employee CPP2 maximum on that arithmetic rises from $416 to $428 ($856 self-employed). The base rate is moving the other way. Bill C-30, the Spring Economic Update 2026 Implementation Act, amends the Canada Pension Plan to cut the base rate from 4.95 percent to 4.75 percent each for employees and employers (9.9 to 9.5 percent self-employed) for 2027 and later years, and the Chief Actuary's 33rd report confirms the 9.5 percent rate is sufficient. The first additional CPP rate of 1 percent is unchanged, so the combined employee rate on the first tier would be 5.75 percent instead of 5.95 percent. CRA's payroll table did not yet show a 2027 row on October 29, 2026. Use that table, not this paragraph, for payroll.</p>

    <p>The pension those contributions support is a different page. ESDC's figure for a maximum retirement pension at 65, for a benefit beginning in January 2026, is $1,507.65 a month. The average at 65, dated April 2026 on the same Canada.ca amount page, is $877.01. Starting before 65 cuts the pension by 0.6 percent a month. None of those payment figures is a 2027 or a 2036 promise. The personal estimate is My Service Canada Account. The longer version is <a href="/blog/how-much-cpp-will-i-get/">how much CPP you will get</a>.</p>

    <h2>What to do before January 1</h2>

    <ol>
        <li>Read your notice of assessment for RRSP room. The $35,390 ceiling is not your room.</li>
        <li>For a TFSA deposit in the first week of January, use room you can tie to CRA's record plus your own 2026 transactions. Do not add a 2027 limit that CRA has not announced.</li>
        <li>If you are in a Home Buyers' Plan repayment year, follow the schedule on your current paperwork. The five-year extension past 2025 is a proposal.</li>
        <li>If a Disability Tax Credit application is in progress, use the form CRA is actually issuing. Certification relief that is still a proposal is not a reason to file a blank medical section.</li>
        <li>Put a reminder on the week CRA usually posts indexation. Update the TFSA and bracket numbers from that page, not from this one, if this one is older.</li>
        <li>Ignore any "Budget 2026 will raise the inclusion rate" line until Finance publishes the budget and, if needed, Parliament passes it. The <a href="/blog/cra-deadlines/">CRA deadlines</a> page is the filing calendar. A budget is not a deadline.</li>
    </ol>

    <h2>Frequently asked questions</h2>

    <h3>Is the 2027 TFSA limit $7,500?</h3>
    <p>Not on any CRA page reviewed on October 29, 2026. The announced limit is $7,000 for 2026. The dollar limit is indexed and rounded to the nearest $500, which is why commentators project a jump. A projection is not contribution room. Wait for the CRA announcement.</p>

    <h3>Why is the 2027 RRSP limit already published?</h3>
    <p>The RRSP dollar limit follows the prior year's money-purchase limit. CRA announced the 2026 money-purchase limit of $35,390 and, with it, the 2027 RRSP dollar limit of $35,390. Your own room still depends on 2026 earned income, unused room, and any pension adjustment.</p>

    <h3>Did the Spring Economic Update change the Home Buyers' Plan repayment?</h3>
    <p>It proposed to. The annex would extend the temporary five-year grace period to first withdrawals through the end of 2028. Budget 2024's version covered first withdrawals through the end of 2025. A proposal is not a cancelled repayment. Use the schedule that matches the law in force for your withdrawal year.</p>

    <h3>When is Budget 2026?</h3>
    <p>November 5, 2026. Finance Canada announced the date on October 20, 2026. Pre-budget consultations closed September 8, 2026. There is no measure in this article that depends on the untabled budget.</p>

    <h3>What is the 2027 YMPE?</h3>
    <p>$76,700, announced by CRA on October 28, 2026, up from $74,600. The 2027 YAMPE is $87,400, up from $85,000. CPP2 at 4 percent applies to earnings between the two.</p>

    <h3>Will federal tax brackets rise for 2027?</h3>
    <p>They are indexed, and CRA announces the factor. As of October 29, 2026 that factor for 2027 was not in the pages reviewed. Plan contributions and payroll on the 2026 brackets until the indexation release replaces them. The <a href="/blog/canada-income-tax-calculator/">income tax calculator</a> is built on those 2026 brackets.</p>

    <h3>Does a higher RRSP limit change the TFSA versus RRSP decision?</h3>
    <p>Only at the margin, and only if you have the earned income. A larger deduction is more valuable in a higher bracket and less valuable if the withdrawal will be taxed at a similar rate. Room you will not use is not a strategy. Fill the account that matches the bracket and the timeline you already wrote down.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html">CRA: MP, DB, RRSP, DPSP, ALDA, TFSA limits, YMPE and YAMPE</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/whats-new.html">CRA: what's new for savings and pension plans, including the October 30, 2025 limits note and the December 1, 2025 TFSA note</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/contributing/before.html">CRA: before you contribute to a TFSA</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/cpp-contribution-rates-maximums-exemptions.html">CRA: CPP contribution rates, maximums, and exemptions</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/calculating-deductions/making-deductions/second-additional-cpp-contribution-rates-maximums.html">CRA: CPP2 rates and maximums</a></li>
        <li><a href="https://budget.canada.ca/update-miseajour/2026/report-rapport/tm-mf-en.html">Department of Finance: Spring Economic Update 2026, tax measures</a></li>
        <li><a href="https://www.canada.ca/en/department-finance/news/2026/07/government-of-canada-launches-consultations-ahead-of-budget-2026.html">Department of Finance: Budget 2026 consultations, July 6, 2026</a></li>
        <li><a href="https://www.canada.ca/en/department-finance/news/2026/10/government-of-canada-to-release-budget-2026-on-november-5-2026.html">Department of Finance: Budget 2026 to be released November 5, 2026 (October 20, 2026)</a></li>
        <li><a href="https://www.osfi-bsif.gc.ca/en/oca/actuarial-reports/33rd-actuarial-report-supplementing-revised-32nd-actuarial-report-canada-pension-plan">Office of the Chief Actuary: 33rd CPP Actuarial Report (Bill C-30 rate change)</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/amount.html">ESDC: how much CPP you could receive</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/when-start.html">ESDC: when to start CPP, including the 0.6 percent monthly reduction</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The limit is the easy line. The return is the rest.</strong></p>
        <p>Brackets, deductions, and the order of RRSP, TFSA, and FHSA contributions are the 2026 tax guide, $49 CAD.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),
  updated: '2026-10-29',
  },
];
