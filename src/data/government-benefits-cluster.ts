import type { PostVideoFields } from '../lib/post-video';
type BenefitsPost = {
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
  category: 'Government Benefits',
  categorySlug: 'government-benefits',
  author: 'Andrew',
  date: '2026-09-27',
  updated: '2026-09-27',
} as const;

function benefitsPost(
  slug: string,
  title: string,
  excerpt: string,
  content: string
): BenefitsPost {
  return {
    ...meta,
    title,
    slug,
    excerpt,
    image: `/images/blog/${slug}.png`,
    content,
  };
}

const defaultBenefitsDisclaimer =
  'This is general education about Canadian government benefits as of September 2026. It is not tax, legal, or benefits advice, and it is not a determination of what you will be paid. Amounts, income thresholds, co-payments, and payment dates change, and they depend on your return, your residence, and the notice CRA or Service Canada actually issues. Figures below are tied to Canada.ca, CRA, ESDC, or Department of Finance pages reviewed in September 2026. Dollar examples marked as illustrations are arithmetic on those figures, not a quote of your file. Confirm My Account, My Service Canada Account, and the current notice before you spend a payment you have not received.';

const footer = (
  published: string,
  updated?: string,
  disclaimer: string = defaultBenefitsDisclaimer
) => `<div class="article-footer">
        <p><strong>Disclaimer:</strong> ${disclaimer}</p>
        <div class="footer-note">Published: ${published}${updated ? ` | Updated: ${updated}` : ''} | Category: Government Benefits | Author: Andrew</div>
    </div>`;

const published = 'September 27, 2026';

export const governmentBenefitsClusterPosts: BenefitsPost[] = [
  benefitsPost(
    'canada-government-benefits-guide',
    'Canadian Government Benefits Guide (2026): Every Major Program and Who Qualifies',
    'As of September 2026, filing the return unlocks the Canada Child Benefit, the Groceries and Essentials Benefit, and the Canada Disability Benefit. CPP, OAS, and dental coverage still need an application.',
    `<div class="container">

    <div class="hook">
        As of September 2026, most federal benefit cash starts with a filed return, and a few programs still need their own application. The <span class="highlight">Canada Child Benefit pays up to $8,157 a year</span> per child under 6 for July 2026 to June 2027. The Canada Groceries and Essentials Benefit pays up to $679 if you are single. CPP, Old Age Security, and the Canadian Dental Care Plan do not arrive just because you filed.
    </div>

    <p>This is the hub for the government-benefits cluster. The month-by-month calendar is <a href="/blog/canada-benefit-payment-dates/">2026 benefit payment dates</a>. The order of income tests, once more than one cheque is live, is the existing <a href="/blog/government-benefits-stacking-map-canada/">stacking map</a>. This page names the programs and the September 2026 figures. It does not replace the notice in your CRA account.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>For July 2026 to June 2027, the Canada Child Benefit maximum is $8,157 per child under 6 and $6,883 per child aged 6 to 17, with no reduction when adjusted family net income is under $38,237.</li>
            <li>The GST/HST credit was renamed the Canada Groceries and Essentials Benefit in July 2026. CRA says the calculation is the same structure, with a 25% increase that remains for five years, through 2031.</li>
            <li>A CPP retirement pension beginning in January 2026 maxes at $1,507.65 a month at age 65. The average for new beneficiaries is $877.01. Your estimate is in My Service Canada Account.</li>
            <li>For July to September 2026, full OAS is $751.97 a month from 65 to 74 and $827.17 from 75. Deferral adds 0.6% a month, up to 36% at 70.</li>
            <li>The Canada Disability Benefit maximum for July 2026 to June 2027 is $204.20 a month, and only with an approved Disability Tax Credit. The Canadian Dental Care Plan requires adjusted family net income under $90,000 and no private dental coverage.</li>
        </ul>
    </div>

    <h2>Which programs pay you for filing, and which need an application?</h2>

    <p>File a return even when you owe nothing. CRA uses that return for the Canada Child Benefit, the child disability benefit inside it, and the Groceries and Essentials Benefit. Service Canada uses it for the Canada Disability Benefit. The dental plan also requires the prior-year return and a notice of assessment, and then a separate application. CPP and OAS are Service Canada pensions. You apply, unless Service Canada has already enrolled you for OAS and sent the letter.</p>

    <table>
        <caption>Major federal benefits, who they are for, and the figure to remember, as of September 2026</caption>
        <thead>
            <tr>
                <th>Program</th>
                <th>Who it is for</th>
                <th>What you do</th>
                <th>Figure reviewed in September 2026</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Canada Child Benefit</td>
                <td>A resident who is primarily responsible for a child under 18.</td>
                <td>Apply once, then file every year. The <a href="/blog/canada-child-benefit-optimization-canada/">CCB optimization guide</a> is the July reset.</td>
                <td>Up to $8,157 under age 6, or $6,883 from 6 to 17, for July 2026 to June 2027. Full amounts if adjusted family net income is under $38,237.</td>
            </tr>
            <tr>
                <td>Child disability benefit</td>
                <td>The same family, for a child under 18 with an approved Disability Tax Credit. CRA abbreviates this child amount as CDB. It is not the Canada Disability Benefit.</td>
                <td>The T2201 approval is the gate. The amount is added to the CCB payment. The credit itself is the <a href="/blog/disability-tax-credit-canada-guide/">Disability Tax Credit guide</a>.</td>
                <td>Up to $3,480 a year ($290 a month) per eligible child for the same payment period. It starts to fall once adjusted family net income is over $82,847.</td>
            </tr>
            <tr>
                <td>Canada Groceries and Essentials Benefit</td>
                <td>Low- and modest-income residents, generally 19 or older.</td>
                <td>File. Newcomers in their first year use Form RC151. Amounts are the <a href="/blog/gst-hst-credit-groceries-essentials-benefit/">Groceries and Essentials Benefit guide</a>.</td>
                <td>For July 2026 to June 2027, up to $679 single, $890 for a couple, and $234 per child under 19. Quarterly. Not taxable.</td>
            </tr>
            <tr>
                <td>Canadian Dental Care Plan</td>
                <td>A tax resident with adjusted family net income under $90,000 and no access to private dental coverage.</td>
                <td>Apply. Applications for the benefit year July 1, 2026 to June 30, 2027 are open. Details are the <a href="/blog/canadian-dental-care-plan-eligibility/">dental plan guide</a>.</td>
                <td>No co-payment under $70,000 of adjusted family net income. A 40% co-payment from $70,000 to $79,999. A 60% co-payment from $80,000 to $89,999. Those shares are of the plan's fees, not of every dentist's bill.</td>
            </tr>
            <tr>
                <td>CPP retirement pension</td>
                <td>Anyone with at least one valid CPP contribution. Quebec contributors use the QPP.</td>
                <td>Apply, from 60 to 70. The estimate is <a href="/blog/how-much-cpp-will-i-get/">how much CPP will I get</a>. The start-date collision with other cheques is <a href="/blog/cpp-timing-benefits-stacking-canada/">CPP timing</a>, and the retirement version is <a href="/blog/cpp-when-to-take-canada/">when to take CPP</a>.</td>
                <td>Maximum at 65 for a pension beginning in January 2026: $1,507.65 a month. Average for new beneficiaries: $877.01. Later start months can have a higher maximum because of the enhancement.</td>
            </tr>
            <tr>
                <td>Old Age Security</td>
                <td>Age 65, legal status, and enough years in Canada after 18. Ten years if you live in Canada. Forty years for a full pension.</td>
                <td>Apply, or wait for an automatic-enrolment letter if you qualify for one. Rules and the age-75 increase are <a href="/blog/oas-eligibility-deferral-canada/">OAS eligibility and deferral</a>.</td>
                <td>July to September 2026: $751.97 a month at 65 to 74, $827.17 at 75 and over, for a full pension. Deferral to 70 reaches $1,022.68 on that same quarter's age-65 maximum.</td>
            </tr>
            <tr>
                <td>Guaranteed Income Supplement and the Allowances</td>
                <td>Low-income people who receive OAS, plus some spouses and survivors aged 60 to 64.</td>
                <td>File, and apply where Service Canada requires it. Household income tests are <a href="/blog/oas-gis-income-stacking-canada/">OAS and GIS income stacking</a>. The retirement write-up is <a href="/blog/oas-gis-clawback-canada/">OAS clawback and GIS</a>.</td>
                <td>July to September 2026: GIS up to $1,123.17 a month for a single OAS pensioner, with an income cut-off of $22,800 on that table. A couple who both receive OAS: up to $676.09 each, cut-off $30,096.</td>
            </tr>
            <tr>
                <td>Canada Disability Benefit</td>
                <td>Working-age residents, 18 to 64, with an approved Disability Tax Credit.</td>
                <td>Apply to Service Canada, and keep filing. The interaction with the credit is the <a href="/blog/canada-disability-benefit-guide/">Canada Disability Benefit guide</a>.</td>
                <td>Maximum $204.20 a month for July 2026 to June 2027, from 2025 income. Not taxable. A $150 supplement toward Disability Tax Credit certification costs is scheduled from fall 2026.</td>
            </tr>
            <tr>
                <td>Employment Insurance</td>
                <td>People with insurable hours who lost work, or who qualify for a special benefit.</td>
                <td>Apply to Service Canada. Quebec parental benefits are the QPIP, not EI. The split is <a href="/blog/employment-insurance-benefits-canada/">EI benefits</a>.</td>
                <td>Weekly maximums are republished with the premium year. This page does not copy a weekly rate. Read the current Service Canada page before you budget one.</td>
            </tr>
            <tr>
                <td>Canada Carbon Rebate for individuals</td>
                <td>It was for residents of provinces where the federal fuel charge applied.</td>
                <td>Nothing quarterly remains to apply for. What ended, and what did not replace it, is <a href="/blog/canada-carbon-rebate-ended/">the carbon rebate has ended</a>.</td>
                <td>The federal fuel charge stopped effective April 1, 2025. The final quarterly payment was April 2025. There is no 2026 payment date.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. Provincial income assistance, drug plans, and housing rebates use different statutes. The way to read those tests is <a href="/blog/provincial-benefits-programs-canada/">provincial benefits</a>. Housing pipes that are not a monthly benefit — the Home Buyers' Plan, the new-housing rebate, land-transfer relief — are <a href="/blog/first-home-buyer-grants-beyond-fhsa-canada/">beyond the FHSA</a>.</p>

    <h2>How do the income tests differ?</h2>

    <p>A dollar is not the same dollar to every program. Adjusted family net income, for the child benefit and the dental plan, starts from line 23600 of both spouses and then adjusts for the universal child care benefit and RDSP income. OAS recovery looks at one person's net world income. GIS looks at a household and exempts a slice of employment earnings. The Canada Disability Benefit exempts a working-income amount and then reduces the benefit by 20 cents on the dollar, or 10 cents each when both partners are beneficiaries. CPP itself is taxable income on several of those tests.</p>

    <table>
        <caption>What each test reads, as of September 2026</caption>
        <thead>
            <tr>
                <th>Test</th>
                <th>Whose income</th>
                <th>Which year</th>
                <th>The threshold in force for this article</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Canada Child Benefit</td>
                <td>Adjusted family net income</td>
                <td>2025 return, for payments from July 2026 to June 2027</td>
                <td>No reduction under $38,237. A second bend at $82,847.</td>
            </tr>
            <tr>
                <td>Groceries and Essentials Benefit</td>
                <td>Adjusted family net income</td>
                <td>Same July-to-June pattern. July and October 2026 use the 2025 return.</td>
                <td>Phase-out begins above $46,432. The CRA chart drops 5 cents per dollar above that line.</td>
            </tr>
            <tr>
                <td>OAS recovery tax</td>
                <td>The pensioner's own net world income</td>
                <td>2025 income, recovered from July 2026 to June 2027</td>
                <td>15% of income above $93,454. The upper end of that range is $152,062 at ages 65 to 74 and $157,923 at 75 and over.</td>
            </tr>
            <tr>
                <td>Canadian Dental Care Plan</td>
                <td>Adjusted family net income</td>
                <td>The prior return, assessed before you apply</td>
                <td>Ineligible at $90,000 and above. Co-payment steps at $70,000 and $80,000.</td>
            </tr>
        </tbody>
    </table>

    <div class="example-box">
        <strong>Illustration: one family, two federal benefits, July 2026 to June 2027</strong>
        <p>Nora and Sam have adjusted family net income of $50,000 and two children, one under 6 and one aged 9. They live in a province and they have filed. On the child benefit, the maximums add to $8,157 plus $6,883, which is $15,040. Income above $38,237 is $11,763. For two children the first-band reduction is 13.5%, and 13.5% of $11,763 is $1,588.01. The illustrated annual CCB is $15,040 minus $1,588.01, or $13,451.99, about $1,121 a month. On the Groceries and Essentials Benefit, CRA's payments chart lists $1,179.60 a year for a couple with two children at $50,000. That is the chart's number, not a second guess. A December bonus in 2026 does not change either cheque until the next July. The <a href="/blog/canada-child-benefit-optimization-canada/">CCB guide</a> is that lag. This illustration ignores provincial supplements that can ride inside the deposit, and it ignores the child disability benefit because neither child is assumed to have a Disability Tax Credit.</p>
    </div>

    <h2>What should you read next?</h2>

    <p>Use the spoke that matches the cheque, then come back to the <a href="/blog/government-benefits-stacking-map-canada/">stacking map</a> if two tests are live at once. Payment days for the rest of 2026 are the <a href="/blog/canada-benefit-payment-dates/">calendar</a>. Seniors who are choosing a start month should read <a href="/blog/how-much-cpp-will-i-get/">the CPP estimate</a> and <a href="/blog/oas-eligibility-deferral-canada/">OAS deferral</a> before they read a breakeven article. A Disability Tax Credit that never gets filed blocks both the child disability benefit and the Canada Disability Benefit. A private dental plan, even one you declined, blocks the federal dental plan.</p>

    <h2>Frequently asked questions</h2>

    <h3>Do I have to apply for every benefit?</h3>
    <p>No. The Canada Child Benefit needs an application the first time a child is in your care, and then a return each year. The Groceries and Essentials Benefit is automatic once you file, unless you are a newcomer using Form RC151. CPP needs an application. OAS needs one unless Service Canada enrolls you. The dental plan and the Canada Disability Benefit need applications even after the return is assessed.</p>

    <h3>Are these payments taxable?</h3>
    <p>CRA's child-benefit guide calls the Canada Child Benefit a non-taxable amount. The Groceries and Essentials Benefit page says those payments are not taxable. The Canada Disability Benefit payments page says the benefit is non-taxable. CPP retirement payments are taxable. OAS is included in the income that the recovery tax reads. Do not treat one rule as the rule for the cheque beside it.</p>

    <h3>Why does my deposit not match the maximum?</h3>
    <p>Maximums are the top of a formula, not the typical payment. Income above the threshold reduces the child benefit and the groceries benefit. A partial OAS pension is years of residence divided by 40. CPP is your record, and the average new retirement pension is $877.01 against a January 2026 maximum of $1,507.65. Provincial amounts can also make a deposit larger than the federal line.</p>

    <h3>What happened to the GST/HST credit and the carbon rebate?</h3>
    <p>The GST/HST credit was renamed the Canada Groceries and Essentials Benefit in July 2026. January and April 2026 were still paid under the old name. The Canada Carbon Rebate for individuals stopped after the April 2025 payment, when the federal fuel charge ended. It was not renamed into the groceries benefit. The closed page and the April 2025 amounts are the <a href="/blog/canada-carbon-rebate-ended/">carbon rebate article</a>.</p>

    <h3>I live in Quebec. Which of these are federal?</h3>
    <p>OAS, the Canada Child Benefit, the Groceries and Essentials Benefit, the dental plan, and the Canada Disability Benefit are federal. The retirement pension for Quebec workers is the QPP, administered by Retraite Québec, not CPP. Parental benefits are the Quebec Parental Insurance Plan. Use the Quebec estimate. Do not paste a CPP illustration onto a QPP record.</p>

    <h3>Where do provincial credits show up?</h3>
    <p>Several provincial sales-tax and income supplements are calculated by CRA and paid with the Groceries and Essentials Benefit. Ontario's sales tax credit is the exception in that guide: it is part of the Ontario Trillium Benefit and is issued separately. The federal calendar is not the provincial statute. Start with <a href="/blog/provincial-benefits-programs-canada/">provincial benefits</a> when the program is not on this table.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4114/canada-child-benefit.html">CRA, Canada Child Benefit guide (T4114), July 2026 to June 2027 amounts</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit/how-much.html">CRA, how much you can get, Canada Child Benefit</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-groceries-essentials-benefit.html">CRA, Canada Groceries and Essentials Benefit</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/payment-amounts.html">ESDC, Canada Pension Plan monthly payment amounts</a></li>
        <li><a href="https://www.canada.ca/en/employment-social-development/programs/pensions/pension/statistics/2026-quarterly-july-september.html">ESDC, OAS and GIS amounts, July to September 2026</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/dental/dental-care-plan/qualify.html">Canada.ca, Canadian Dental Care Plan, do you qualify</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/disability/canada-disability-benefit/amount.html">Canada.ca, Canada Disability Benefit, how much you could receive</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The benefit year is built from the return.</strong></p>
        <p>File it, then read the notice. The 2026 tax guide is the filing companion for the lines these programs read.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),
  {
    ...benefitsPost(
    'canada-benefit-payment-dates',
    'Canada Benefit Payment Dates 2026: CPP, OAS, CCB and the Groceries Benefit (GST Credit)',
    'Next Canada benefit payment dates: CCB Nov 20 and Dec 11, CPP and OAS Nov 26 and Dec 22, groceries benefit (GST credit) Jan 5, 2027. Checked Oct 25, 2026.',
    `<div class="container">

    <div class="hook">
        Canada's next federal benefit payment dates are already set. The Canada Child Benefit pays November 20, then <span class="highlight">December 11, nine days earlier than its usual 20th</span>, and CPP and Old Age Security pay November 26 and December 22. The next Groceries and Essentials Benefit, the renamed GST/HST credit, is January 5, 2027.
    </div>

    <p>As of October 25, 2026, Canada.ca and the Canada Revenue Agency (CRA) list the next dates: Canada Child Benefit (CCB) November 20 and December 11, Canada Pension Plan (CPP) and Old Age Security (OAS) November 26 and December 22, Canada Disability Benefit (CDB) November 19 and December 17, and Canada Groceries and Essentials Benefit (CGEB) January 5, 2027.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The next Canada Child Benefit is November 20, 2026, then December 11, nine days earlier than the usual 20th. CPP and OAS share the same dates, including October 28, November 26, and December 22.</li>
            <li>CPP and OAS use one 2026 calendar. CPP covers retirement, disability, children's, and survivor benefits. OAS covers the pension, the Guaranteed Income Supplement (GIS), the Allowance, and the Allowance for the Survivor.</li>
            <li>The next Canada Groceries and Essentials Benefit, the renamed GST/HST credit, is January 5, 2027, then April 5, 2027.</li>
            <li>A small amount is often one lump sum: CCB under $20 a month (under $240 for the year) with the July payment, CGEB under $50 a quarter as the whole year in July, CDB of $240 or less for the July-to-June year on the next scheduled date, and an Ontario Trillium Benefit (OTB) of $500 or less in the first payment month, usually July.</li>
            <li>The Canada Carbon Rebate is closed. The last quarterly payments were January 15 and April 22, 2025. There is no 2026 date.</li>
        </ul>
    </div>

    <nav class="toc" aria-label="On this page">
        <strong>On this page</strong>
        <ul>
            <li><a href="#next-dates">What are the next benefit payment dates in Canada?</a></li>
            <li><a href="#december-early">Why are December benefit payments early?</a></li>
            <li><a href="#cpp-oas">When do CPP and OAS pay in 2026?</a></li>
            <li><a href="#ccb-groceries">When do the Canada Child Benefit and the groceries benefit pay?</a></li>
            <li><a href="#cdb">When does the Canada Disability Benefit pay?</a></li>
            <li><a href="#easy-to-mix-up">Which other CRA dates are easy to mix up?</a></li>
            <li><a href="#money-not-there">What if the money is not there on the date?</a></li>
            <li><a href="#ontario-household">What dates does an Ontario household see?</a></li>
            <li><a href="#before-each-payment">Before each payment date</a></li>
            <li><a href="#frequently-asked-questions">Frequently asked questions</a></li>
        </ul>
    </nav>

    <p>This page sits in the <a href="/category/government-benefits/">government benefits</a> category. It is a calendar, not a calculator. Amounts live on the <a href="/blog/canada-government-benefits-guide/">government benefits guide</a>. Why a child benefit changes in July, rather than on payday, is the <a href="/blog/canada-child-benefit-optimization-canada/">CCB guide</a>. If a date below is a statutory holiday in a later year, CRA's own rule is to pay on the business day before. Use the dated list for 2026, not a remembered "the 20th."</p>

    <h2 id="next-dates">What are the next benefit payment dates in Canada?</h2>

    <p>Two October dates are still ahead of October 25 and are on the full-year tables below: CPP and OAS on <strong>October 28</strong>, and the veteran disability pension on <strong>October 29</strong>. The table here is the run from November 10, 2026 through the January 5, 2027 groceries benefit. Canada.ca issues a payment on the listed day. It can still take a few days to appear, and a cheque takes longer than direct deposit.</p>

    <div class="table-wrapper">
        <table>
            <caption>Benefit payment dates still ahead after October 25, 2026</caption>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Payment</th>
                    <th>Who pays</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tuesday, November 10, 2026</td>
                    <td>Ontario Trillium Benefit</td>
                    <td>CRA</td>
                </tr>
                <tr>
                    <td>Thursday, November 19, 2026</td>
                    <td>Canada Disability Benefit</td>
                    <td>Service Canada</td>
                </tr>
                <tr>
                    <td>Friday, November 20, 2026</td>
                    <td>Canada Child Benefit</td>
                    <td>CRA</td>
                </tr>
                <tr>
                    <td>Wednesday, November 25, 2026</td>
                    <td>Newfoundland and Labrador disability benefit</td>
                    <td>CRA</td>
                </tr>
                <tr>
                    <td>Thursday, November 26, 2026</td>
                    <td>CPP, plus OAS and GIS</td>
                    <td>Service Canada</td>
                </tr>
                <tr>
                    <td>Friday, November 27, 2026</td>
                    <td>Alberta child and family benefit</td>
                    <td>CRA</td>
                </tr>
                <tr>
                    <td>Friday, November 27, 2026</td>
                    <td>Veteran disability pension</td>
                    <td>Veterans Affairs Canada</td>
                </tr>
                <tr>
                    <td>Thursday, December 10, 2026</td>
                    <td>Ontario Trillium Benefit</td>
                    <td>CRA</td>
                </tr>
                <tr class="highlight-row">
                    <td>Friday, December 11, 2026</td>
                    <td>Canada Child Benefit</td>
                    <td>CRA</td>
                </tr>
                <tr>
                    <td>Thursday, December 17, 2026</td>
                    <td>Canada Disability Benefit</td>
                    <td>Service Canada</td>
                </tr>
                <tr class="highlight-row">
                    <td>Tuesday, December 22, 2026</td>
                    <td>CPP, plus OAS and GIS</td>
                    <td>Service Canada</td>
                </tr>
                <tr>
                    <td>Wednesday, December 23, 2026</td>
                    <td>Veteran disability pension</td>
                    <td>Veterans Affairs Canada</td>
                </tr>
                <tr>
                    <td>Thursday, December 24, 2026</td>
                    <td>Newfoundland and Labrador disability benefit</td>
                    <td>CRA</td>
                </tr>
                <tr class="highlight-row">
                    <td>Tuesday, January 5, 2027</td>
                    <td>Canada Groceries and Essentials Benefit</td>
                    <td>CRA</td>
                </tr>
            </tbody>
        </table>
    </div>

    <p>December's Canada Child Benefit and CPP and OAS dates are earlier than usual. The next section is why that changes the gap before January.</p>

    <h2 id="december-early">Why are December benefit payments early?</h2>

    <p>December's Canada Child Benefit is <strong>December 11, 2026</strong>, not the 20th. November's was November 20. December's CPP and OAS date is <strong>December 22, 2026</strong>. November's was November 26. Both December dates sit earlier in the month than the November ones.</p>

    <p>Guide <span class="form-ref">T4114</span> says CRA generally pays the child benefit on the 20th. If the 20th is a Saturday, a Sunday, or a federal statutory holiday, CRA pays on the last business day before. <strong>December 20, 2026 is a Sunday.</strong> The published December 11 date is earlier than that weekend rule alone would give. CRA has not published a reason for the extra days. Do not fill the gap with a guess.</p>

    <div class="did-you-know">
        <strong>Did you know:</strong>
        <p>December 20, 2026 is a Sunday, and the Canada Child Benefit date CRA published for that month is December 11, 2026. That is earlier than the weekend rule alone.</p>
    </div>

    <p>A household should budget for a longer gap from these December deposits to the January payment. The December 11 child benefit is not a deposit you can treat as if January still arrives on the 20th of the same pattern. Spending it on that assumption is how the month after Christmas runs short.</p>

    <p>CRA's 20th rule points to Wednesday, January 20, 2027, but the 2027 list was not published as of October 25, 2026. January 20 is an expectation from the rule, not a posted Canada Child Benefit date. The groceries benefit is different: guide <span class="form-ref">RC4210</span> already lists <strong>January 5, 2027</strong>. That date is published. The child-benefit date for January is not.</p>

    <p>The full CPP and OAS list is the shared calendar those December dates come from. The child benefit does not use it.</p>

    <h2 id="cpp-oas">When do CPP and OAS pay in 2026?</h2>

    <p>Service Canada pays CPP and OAS on the same dates. Someone who receives both should expect both on that day, as two deposits or one combined deposit, depending on how the bank posts them. GIS is paid with OAS. The same dates cover the OAS pension, the Allowance, and the Allowance for the Survivor. CPP on this calendar includes the retirement pension, the disability benefit, children's benefits, and survivor benefits.</p>

    <p><strong>October 28, 2026</strong> is still this month's CPP and OAS date. After that, both programs share <strong>November 26</strong> and <strong>December 22</strong>, and they share every other date on this list.</p>

    <div class="table-wrapper">
        <table>
            <caption>CPP and Old Age Security payment dates, 2026</caption>
            <thead>
                <tr>
                    <th>Month</th>
                    <th>CPP and OAS</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>January</td><td>January 28, 2026</td></tr>
                <tr><td>February</td><td>February 25, 2026</td></tr>
                <tr><td>March</td><td>March 27, 2026</td></tr>
                <tr><td>April</td><td>April 28, 2026</td></tr>
                <tr><td>May</td><td>May 27, 2026</td></tr>
                <tr><td>June</td><td>June 26, 2026</td></tr>
                <tr><td>July</td><td>July 29, 2026</td></tr>
                <tr><td>August</td><td>August 27, 2026</td></tr>
                <tr><td>September</td><td>September 25, 2026</td></tr>
                <tr><td>October</td><td>October 28, 2026</td></tr>
                <tr class="highlight-row"><td>November</td><td>November 26, 2026</td></tr>
                <tr class="highlight-row"><td>December</td><td>December 22, 2026</td></tr>
            </tbody>
        </table>
    </div>

    <p>Table as of October 25, 2026, from the <a href="https://www.canada.ca/en/services/benefits/calendar.html">Canada.ca benefits calendar</a>. Quebec workers contribute to the Quebec Pension Plan, not the CPP. The dates above are the Canada.ca CPP and OAS calendar. They are not a Quebec Pension Plan schedule, and this page does not print one. The child benefit and the groceries benefit use a different list.</p>

    <h2 id="ccb-groceries">When do the Canada Child Benefit and the groceries benefit pay?</h2>

    <p>These are CRA benefits. The Canada Child Benefit is monthly. The groceries benefit is quarterly. January to June 2026 child-benefit payments were based on the 2024 return. July to December 2026 payments are based on the 2025 return. January 5 and April 2, 2026 were still GST/HST credit payments, from the 2024 return. July 3 and October 5, 2026 are Canada Groceries and Essentials Benefit payments, from the 2025 return. Amounts and the rename are the <a href="/blog/gst-hst-credit-groceries-essentials-benefit/">Groceries and Essentials Benefit guide</a>.</p>

    <p>The next Canada Child Benefit dates are <strong>November 20 and December 11, 2026</strong>, and the next Groceries and Essentials Benefit is <strong>January 5, 2027</strong>.</p>

    <div class="table-wrapper">
        <table>
            <caption>Canada Child Benefit and GST/HST credit or Groceries and Essentials Benefit, 2026</caption>
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Canada Child Benefit</th>
                    <th>GST/HST credit, then Groceries and Essentials Benefit</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>January</td><td>January 20, 2026</td><td>January 5, 2026, GST/HST credit, 2024 return</td></tr>
                <tr><td>February</td><td>February 20, 2026</td><td>None</td></tr>
                <tr><td>March</td><td>March 20, 2026</td><td>None</td></tr>
                <tr><td>April</td><td>April 20, 2026</td><td>April 2, 2026, GST/HST credit, 2024 return</td></tr>
                <tr><td>May</td><td>May 20, 2026</td><td>None</td></tr>
                <tr><td>June</td><td>June 19, 2026</td><td>None. A one-time GST/HST credit top-up was issued June 5, 2026, separate from the quarterly date.</td></tr>
                <tr><td>July</td><td>July 20, 2026</td><td>July 3, 2026, Groceries and Essentials Benefit, 2025 return</td></tr>
                <tr><td>August</td><td>August 20, 2026</td><td>None</td></tr>
                <tr><td>September</td><td>September 18, 2026</td><td>None</td></tr>
                <tr><td>October</td><td>October 20, 2026</td><td>October 5, 2026, Groceries and Essentials Benefit, 2025 return</td></tr>
                <tr class="highlight-row"><td>November</td><td>November 20, 2026</td><td>None</td></tr>
                <tr class="highlight-row"><td>December</td><td>December 11, 2026</td><td>None. The next quarterly date is January 5, 2027.</td></tr>
            </tbody>
        </table>
    </div>

    <p>Table as of October 25, 2026. The child-benefit dates are CRA's published list, including June 19, September 18, and December 11. Guide <a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4114/canada-child-benefit.html">T4114</a> is the 20th rule. The <a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit/payment-dates.html">CCB payment-dates page</a> is the monthly list. If the monthly child benefit is under $20, CRA pays the July 2026 to June 2027 period as one amount on July 20, 2026 or later. That page states the same rule as an annual total under $240, paid with July.</p>

    <p>Guide <a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4210/canada-groceries-essentials-benefit.html">RC4210</a> pays the Groceries and Essentials Benefit on the 5th of July and October 2026 and of January and April 2027. If the 5th is a Saturday, a Sunday, or a federal statutory holiday, the payment moves to the last business day before. July 5, 2026 was a Sunday, so that quarter was <strong>July 3</strong>. <strong>January 5, 2027 is a Tuesday</strong> and <strong>April 5, 2027 is a Monday</strong>, so both stay on the 5th. If a quarter would be under $50, CRA pays the entire annual amount in July.</p>

    <p>File the 2025 return after July and the new groceries amount waits for the assessment. Missed amounts are paid retroactively in the next scheduled payment. They are not dropped. Some provincial amounts ride in the same deposit: New Brunswick, Newfoundland and Labrador, Nova Scotia, Prince Edward Island, and Saskatchewan. The Ontario sales tax credit does not. It is part of the Ontario Trillium Benefit.</p>

    <p>Starting November 2026, the Prince Edward Island sales tax credit is renamed the Prince Edward Island essentials benefit, with a new <strong>$175 minimum payment</strong> for residents who qualify. The one-time GST/HST credit top-up was issued June 5, 2026, separate from the quarterly dates. It is not a fifth quarter. The Canada Disability Benefit is a different cheque, on a Thursday, not on the 20th and not on the 5th.</p>

    <h2 id="cdb">When does the Canada Disability Benefit pay?</h2>

    <p>Service Canada pays the Canada Disability Benefit on the third Thursday. The first payment is in the month after approval. Payments are non-taxable. To stay eligible, the Disability Tax Credit has to remain approved and a return has to be filed by <strong>April 30</strong> each year. Eligibility rules and the $204.20 maximum are in the <a href="/blog/canada-disability-benefit-guide/">Canada Disability Benefit guide</a>.</p>

    <p>The next Canada Disability Benefit dates are <strong>November 19 and December 17, 2026</strong>.</p>

    <div class="table-wrapper">
        <table>
            <caption>Canada Disability Benefit payment dates, 2026</caption>
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>January</td><td>January 15, 2026</td></tr>
                <tr><td>February</td><td>February 19, 2026</td></tr>
                <tr><td>March</td><td>March 19, 2026</td></tr>
                <tr><td>April</td><td>April 16, 2026</td></tr>
                <tr><td>May</td><td>May 21, 2026</td></tr>
                <tr><td>June</td><td>June 18, 2026</td></tr>
                <tr><td>July</td><td>July 16, 2026</td></tr>
                <tr><td>August</td><td>August 20, 2026</td></tr>
                <tr><td>September</td><td>September 17, 2026</td></tr>
                <tr><td>October</td><td>October 15, 2026</td></tr>
                <tr class="highlight-row"><td>November</td><td>November 19, 2026</td></tr>
                <tr class="highlight-row"><td>December</td><td>December 17, 2026</td></tr>
            </tbody>
        </table>
    </div>

    <p>Table as of October 25, 2026, from the <a href="https://www.canada.ca/en/services/benefits/disability/canada-disability-benefit/payments.html">Canada.ca Canada Disability Benefit payments page</a> and the benefits calendar. If the yearly amount for July through the following June is $240 or less, which is $20 a month or less, Service Canada pays one lump sum on the next scheduled date instead of monthly payments. A few other dates land in the same weeks and get mistaken for this one.</p>

    <h2 id="easy-to-mix-up">Which other CRA dates are easy to mix up?</h2>

    <p>The Advanced Canada workers benefit has three 2026 dates: <strong>January 12, July 10, and October 9</strong>. All three are already past as of October 25, 2026. This page does not quote a dollar amount for that advance. CRA pays it. It is not the child benefit and it is not the groceries benefit.</p>

    <p>The Ontario Trillium Benefit bundles the Ontario energy and property tax credit, the Northern Ontario energy credit, and the Ontario sales tax credit. From July 2026 it is based on the 2025 return. CRA pays it on the 10th, or on the last working day before if the 10th is a weekend or a statutory holiday. The next dates are <strong>November 10 and December 10, 2026</strong>.</p>

    <div class="table-wrapper">
        <table>
            <caption>Ontario Trillium Benefit payment dates, 2026</caption>
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>January</td><td>January 9, 2026</td></tr>
                <tr><td>February</td><td>February 10, 2026</td></tr>
                <tr><td>March</td><td>March 10, 2026</td></tr>
                <tr><td>April</td><td>April 10, 2026</td></tr>
                <tr><td>May</td><td>May 8, 2026</td></tr>
                <tr><td>June</td><td>June 10, 2026</td></tr>
                <tr><td>July</td><td>July 10, 2026</td></tr>
                <tr><td>August</td><td>August 10, 2026</td></tr>
                <tr><td>September</td><td>September 10, 2026</td></tr>
                <tr><td>October</td><td>October 9, 2026</td></tr>
                <tr class="highlight-row"><td>November</td><td>November 10, 2026</td></tr>
                <tr class="highlight-row"><td>December</td><td>December 10, 2026</td></tr>
            </tbody>
        </table>
    </div>

    <p>Table as of October 25, 2026, from <a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs/province-ontario.html">CRA's Ontario programs page</a>. If the annual Ontario Trillium Benefit is $500 or less, it is one payment in the first payment month, usually July. If it is over $500 and you chose to wait, it is one payment on <strong>June 10, 2027</strong>. The Ontario child benefit is not on this table. It is paid inside the Canada Child Benefit deposit.</p>

    <p>Three other dates are easy to drop onto the wrong line. The Alberta child and family benefit is quarterly. The Newfoundland and Labrador disability benefit is a CRA payment, not the federal Canada Disability Benefit. The veteran disability pension is Veterans Affairs Canada, from the Canada.ca calendar, and it shares November 27 with the Alberta benefit.</p>

    <div class="table-wrapper">
        <table>
            <caption>Other 2026 dates that sit near the federal calendar, as of October 25, 2026</caption>
            <thead>
                <tr>
                    <th>Program</th>
                    <th>Who pays</th>
                    <th>Still ahead after October 25, 2026</th>
                    <th>Full 2026 list</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Advanced Canada workers benefit</td>
                    <td>CRA</td>
                    <td>None. The 2026 dates have passed.</td>
                    <td>January 12, July 10, and October 9</td>
                </tr>
                <tr>
                    <td>Alberta child and family benefit</td>
                    <td>CRA</td>
                    <td>November 27</td>
                    <td>February 27, May 27, August 27, and November 27</td>
                </tr>
                <tr>
                    <td>Newfoundland and Labrador disability benefit</td>
                    <td>CRA</td>
                    <td>November 25 and December 24</td>
                    <td>January 23, February 25, March 25, April 24, May 25, June 25, July 24, August 25, September 25, October 23, November 25, and December 24</td>
                </tr>
                <tr>
                    <td>Veteran disability pension</td>
                    <td>Veterans Affairs Canada</td>
                    <td>November 27 and December 23</td>
                    <td>January 30, February 26, March 30, April 29, May 28, June 29, July 30, August 28, September 28, October 29, November 27, and December 23</td>
                </tr>
            </tbody>
        </table>
    </div>

    <p>Table as of October 25, 2026. The Newfoundland and Labrador dates are CRA's. The veteran dates are the Canada.ca benefits calendar. November 19 and December 17 are the federal Canada Disability Benefit. November 25 and December 24 are the provincial disability benefit. They are not substitutes for each other.</p>

    <p>The Canada Carbon Rebate is closed. The last quarterly payments were <strong>January 15, 2025</strong> and <strong>April 22, 2025</strong>. There is no 2026 date. A missing deposit is not a delayed carbon payment. What ended is <a href="/blog/canada-carbon-rebate-ended/">the carbon rebate article</a>. If a date on this page arrives and the deposit does not, the wait depends on which agency pays.</p>

    <h2 id="money-not-there">What if the money is not there on the date?</h2>

    <p>The calendar date is the day the payment is issued. Canada.ca says it may take a few days to arrive, and a cheque takes longer than direct deposit. Work through the steps in order. Calling on the morning of the date is too early.</p>

    <ol>
        <li>Check the account that pays that benefit. CRA's account shows the Canada Child Benefit, the Groceries and Essentials Benefit, the Ontario Trillium Benefit, the Advanced Canada workers benefit, the Alberta child and family benefit, and the Newfoundland and Labrador disability benefit. My Service Canada Account is the place for CPP, OAS, GIS, and the Canada Disability Benefit.</li>
        <li>Check that direct deposit and the mailing address are current. Change CPP, OAS, and the Canada Disability Benefit with Service Canada. Change the Canada Child Benefit, the Groceries and Essentials Benefit, the Ontario Trillium Benefit, the Advanced Canada workers benefit, the Alberta child and family benefit, and the Newfoundland and Labrador disability benefit with CRA. A change at one agency does not update the other.</li>
        <li>Wait. CRA says <strong>5 business days</strong> for the Canada Child Benefit, and <strong>10 business days</strong> for the Groceries and Essentials Benefit and the Ontario Trillium Benefit. Canada.ca says to wait <strong>5 to 10 business days</strong> before contacting the program. A deposit that is a day or two late can still be in transit.</li>
        <li>Then call <strong>1-800-387-1193</strong> for a CRA benefit. Have the benefit name and the published date ready. This page does not list a Service Canada or Veterans Affairs phone number. For those programs, use the account in step 1 and the 5-to-10-business-day wait on Canada.ca.</li>
    </ol>

    <div class="table-wrapper">
        <table>
            <caption>Where to look when a 2026 benefit deposit is missing</caption>
            <thead>
                <tr>
                    <th>Missing payment</th>
                    <th>Where to look</th>
                    <th>Who changes the deposit</th>
                    <th>How long to wait</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Canada Child Benefit</td>
                    <td>CRA account</td>
                    <td>CRA</td>
                    <td>5 business days, then 1-800-387-1193</td>
                </tr>
                <tr>
                    <td>Groceries and Essentials Benefit, or Ontario Trillium Benefit</td>
                    <td>CRA account</td>
                    <td>CRA</td>
                    <td>10 business days, then 1-800-387-1193</td>
                </tr>
                <tr>
                    <td>CPP, OAS, GIS, or Canada Disability Benefit</td>
                    <td>My Service Canada Account</td>
                    <td>Service Canada</td>
                    <td>5 to 10 business days</td>
                </tr>
                <tr>
                    <td>Veteran disability pension</td>
                    <td>Veterans Affairs Canada</td>
                    <td>Veterans Affairs Canada</td>
                    <td>5 to 10 business days</td>
                </tr>
            </tbody>
        </table>
    </div>

    <p>The finding is which login matches the cheque. A CRA benefit will not show as missing inside My Service Canada Account, and a CPP deposit will not show as missing inside the CRA account.</p>

    <div class="warning-box">
        <strong>Watch out:</strong>
        <ul>
            <li>Expecting a Canada Carbon Rebate in 2026. The last quarterly payments were January 15 and April 22, 2025.</li>
            <li>Expecting the Ontario sales tax credit inside the Groceries and Essentials Benefit deposit. It is in the Ontario Trillium Benefit.</li>
            <li>Not filing a return. That stops the July reset. The Canada Disability Benefit also needs a return filed by April 30.</li>
            <li>Spending the December deposit as if the January child benefit comes on the 20th. The 2027 child-benefit list was not published as of October 25, 2026.</li>
            <li>Assuming a small benefit stopped when it was paid as a July lump sum. Under $20 a month for the child benefit, under $50 a quarter for the groceries benefit, and $240 or less for the July-to-June disability benefit are lump-sum rules, not cancellations.</li>
        </ul>
    </div>

    <div class="example-box">
        <strong>Script: what to say when you call CRA</strong>
        <p>I am calling about the [Canada Child Benefit, Groceries and Essentials Benefit, or Ontario Trillium Benefit] dated [the published date]. It is not in the account CRA has on file. I have waited the business days listed for that benefit. My name is [your name].</p>
    </div>

    <p>An Ontario household that receives four of these programs can put the same rules on one list of dates, with no dollars attached.</p>

    <h2 id="ontario-household">What dates does an Ontario household see?</h2>

    <p>The illustration below is dates only. It is not an assessment, and it is not a forecast of a dollar amount. The notices in the CRA account and in My Service Canada Account are the amounts.</p>

    <div class="example-box">
        <strong>Illustration:</strong>
        <p>An Ontario household receives the Canada Child Benefit, the Canada Groceries and Essentials Benefit, Old Age Security, and the Ontario Trillium Benefit.</p>
        <ul>
            <li>November 10, 2026 — Ontario Trillium Benefit</li>
            <li>November 20, 2026 — Canada Child Benefit</li>
            <li>November 26, 2026 — Old Age Security</li>
            <li>December 10, 2026 — Ontario Trillium Benefit</li>
            <li>December 11, 2026 — Canada Child Benefit</li>
            <li>December 22, 2026 — Old Age Security</li>
            <li>January 5, 2027 — Canada Groceries and Essentials Benefit</li>
        </ul>
        <p>October 5, 2026 was the last groceries payment of 2026, so it is not on this forward list. The next one is January 5, 2027. December 11 is the early child-benefit date. Nothing in this box is a dollar figure.</p>
    </div>

    <div class="tip-box">
        <strong>Pro tip:</strong>
        <p>CRA can email a payment reminder about one week before a payment. Turn that on in the CRA account, and still read the date here. December 2026 does not follow the usual 20th.</p>
    </div>

    <p>The checks below are the ones to finish before those dates, not after a deposit is already missing.</p>

    <h2 id="before-each-payment">Before each payment date</h2>

    <p>Four checks cover the problems that show up as a missing deposit and are actually a file that was never updated.</p>

    <ul class="checklist">
        <li>Sign up for CRA payment reminders. CRA can email a reminder about one week before each payment. The switch is in the CRA account.</li>
        <li>Confirm direct deposit with both CRA and Service Canada. CPP, OAS, and the Canada Disability Benefit are Service Canada. The child benefit, the groceries benefit, the Ontario Trillium Benefit, and the other CRA benefits on this page are CRA.</li>
        <li>File the 2025 return if it is not filed yet. July to December 2026 child-benefit payments, and the July and October 2026 groceries payments, read that return.</li>
        <li>Report a marital status change by the end of the following month.</li>
    </ul>

    <p>When the return itself is the problem, a CPA, a CFP, or a tax lawyer can work that file with you. This article is not that review, and it is not a benefits ruling. Confirm the current Canada.ca or CRA page before you spend a payment you have not received.</p>

    <h2 id="frequently-asked-questions">Frequently asked questions</h2>

    <h3>Are CPP and OAS always paid on the same day?</h3>
    <p>On the 2026 Canada.ca calendar, yes. Every CPP date is also the OAS date, from January 28 through December 22, 2026. GIS is paid with OAS. CPP retirement, disability, children's, and survivor benefits use the CPP dates. The Canada Child Benefit does not. It is a CRA payment with its own list, and the next two are November 20 and December 11, 2026.</p>

    <h3>Why was my January payment called the GST/HST credit and my July payment called something else?</h3>
    <p>CRA replaced the GST/HST credit with the Canada Groceries and Essentials Benefit in July 2026. January 5 and April 2, 2026 were the last two quarters under the GST/HST credit name, from the 2024 return. July 3 and October 5, 2026 are the new benefit, from the 2025 return. The next payment is January 5, 2027.</p>

    <h3>I get a small amount. Why did it all arrive in July?</h3>
    <p>CRA and Service Canada do not run a tiny payment on the usual rhythm. A Canada Child Benefit under $20 a month, under $240 for the year, is paid once, on July 20, 2026 or later. A Groceries and Essentials Benefit under $50 a quarter is the whole annual amount in July. A Canada Disability Benefit of $240 or less for the July-to-June year, $20 a month or less, is one lump sum on the next scheduled date. An Ontario Trillium Benefit of $500 or less is one payment in the first payment month, usually July.</p>

    <h3>Does a late tax return delay the July reset?</h3>
    <p>Yes. Canada Child Benefit payments from July to December 2026 are based on the 2025 return. The Groceries and Essentials Benefit payments in July and October 2026 use that return too. File after July and the new groceries amount waits for the assessment. Missed amounts are paid retroactively in the next scheduled payment. The Canada Disability Benefit stays on schedule only if the Disability Tax Credit remains approved and a return is filed by April 30.</p>

    <h3>Are weekend dates already adjusted in the 2026 tables?</h3>
    <p>Yes. The 2026 lists above are the dates Canada.ca and CRA published. You do not subtract another day. The child benefit is generally the 20th, and the last business day before when the 20th is a Saturday, a Sunday, or a federal statutory holiday. June 19, September 18, and December 11, 2026 are already the published dates. December 20, 2026 is a Sunday, and December 11 is earlier than that weekend rule alone. July 5, 2026 was a Sunday, so the groceries benefit was July 3. The 2027 child-benefit list was not published as of October 25, 2026.</p>

    <h3>Where is the carbon rebate date for 2026?</h3>
    <p>There is no Canada Carbon Rebate date in 2026. The program is closed. The last quarterly payments were January 15, 2025 and April 22, 2025.</p>

    <h3>When is the next CCB payment?</h3>
    <p>The next Canada Child Benefit payment after October 25, 2026 is November 20, 2026, then December 11, 2026. Both dates are on CRA's 2026 payment list. CRA's 20th rule points to Wednesday, January 20, 2027, but that 2027 list was not published as of October 25, 2026.</p>

    <h3>When is the next GST/HST credit (groceries benefit) payment?</h3>
    <p>The next Canada Groceries and Essentials Benefit, the renamed GST/HST credit, is January 5, 2027, a Tuesday. Guide RC4210 lists the following date as April 5, 2027, a Monday. October 5, 2026 was the last 2026 payment of this benefit. A one-time top-up was issued on June 5, 2026, and it was separate from those quarterly dates.</p>

    <h2 id="sources">Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/services/benefits/calendar.html">Canada.ca, benefits payment dates calendar</a>, reviewed October 25, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/benefit-payment-dates.html">CRA, payment dates for benefits and credits</a>, reviewed October 25, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit/payment-dates.html">CRA, Canada Child Benefit payment dates</a>, reviewed October 25, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4114/canada-child-benefit.html">CRA, Canada Child Benefit guide (T4114)</a>, reviewed October 25, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-groceries-essentials-benefit/payment-dates.html">CRA, Canada Groceries and Essentials Benefit payment dates</a>, reviewed October 25, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4210/canada-groceries-essentials-benefit.html">CRA, guide RC4210, Canada Groceries and Essentials Benefit</a>, reviewed October 25, 2026</li>
        <li><a href="https://www.canada.ca/en/services/benefits/disability/canada-disability-benefit/payments.html">Canada.ca, Canada Disability Benefit payments</a>, reviewed October 25, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs/province-ontario.html">CRA, Ontario benefit programs, including the Ontario Trillium Benefit</a>, reviewed October 25, 2026</li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/gst-hst-credit/one-time-top-up.html">CRA, one-time GST/HST credit top-up</a>, reviewed October 25, 2026</li>
    </ul>

    <h2 id="related-reading">Related reading</h2>
    <ul>
        <li><a href="/category/government-benefits/">Government benefits hub: which program pays, and which article to open next</a></li>
        <li><a href="/blog/canada-government-benefits-guide/">Canadian government benefits guide: the programs and who qualifies</a></li>
        <li><a href="/blog/gst-hst-credit-groceries-essentials-benefit/">Groceries and Essentials Benefit: amounts and eligibility, formerly the GST/HST credit</a></li>
        <li><a href="/blog/canada-child-benefit-optimization-canada/">Canada Child Benefit: why the amount changes in July, not on payday</a></li>
        <li><a href="/blog/how-much-cpp-will-i-get/">How much CPP you will get: the estimate, not the payment date</a></li>
        <li><a href="/blog/oas-eligibility-deferral-canada/">OAS eligibility and deferral: when the pension starts</a></li>
        <li><a href="/blog/canada-disability-benefit-guide/">Canada Disability Benefit: eligibility and the maximum</a></li>
        <li><a href="/blog/canada-carbon-rebate-ended/">Canada Carbon Rebate: why there is no 2026 payment date</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>A date without a filed return is a date you miss.</strong></p>
        <p>The July reset reads the 2025 return. The 2026 tax guide is the filing side of this calendar.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published, 'October 25, 2026', 'This is general education about Canadian government benefit payment dates. It is not tax, legal, or benefits advice, and it is not a determination of what you will be paid. The dates below are from Canada.ca, CRA and Service Canada pages reviewed October 25, 2026. Payment dates change, and they depend on your return, your residence, and the notice CRA or Service Canada actually issues. The household example is an illustration of dates only, not a quote of your file. Confirm My Account, My Service Canada Account, and the current notice before you spend a payment you have not received.')}

</div>`
    ),
    updated: '2026-10-25',
  },
  {
    ...benefitsPost(
    'gst-hst-credit-groceries-essentials-benefit',
    'Canada Groceries and Essentials Benefit (Formerly the GST/HST Credit): Amounts and Eligibility',
    'In Canada, the Groceries and Essentials Benefit (renamed GST/HST credit) is up to $679 single, $890 a couple, and $234 per child. Next payment: January 5, 2027.',
    `<div class="container">

    <div class="hook">
        The Canada Groceries and Essentials Benefit is Canada's renamed GST/HST credit, and for July 2026 to June 2027 the maximum is <span class="highlight">$679 if you are single, $890 if you are married or common-law, and $234 for each child under 19</span>. The next payment is January 5, 2027.
    </div>

    <p>The figure people expect is the maximum, and a very low income does not pay it. Adjusted family net income (AFNI) is the income CRA uses for the Canada Groceries and Essentials Benefit. The payments chart takes AFNI from line 23600, net income. Under $11,564 of AFNI, a single person in Canada with no children gets $445 for July 2026 to June 2027, not $679. That is the phase-in. It is not a missing payment.</p>

    <p>This page sits in the <a href="/category/government-benefits/">government benefits</a> category and under the <a href="/blog/canada-government-benefits-guide/">government benefits guide</a>. The 2026 dates, including the two quarters still paid as a GST/HST credit, are the <a href="/blog/canada-benefit-payment-dates/">payment calendar</a>. This benefit is not the carbon rebate. That program ended after the April 2025 payment. The distinction is <a href="/blog/canada-carbon-rebate-ended/">what the carbon rebate ending means</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The Canada Groceries and Essentials Benefit replaced the GST/HST credit in July 2026. Eligibility, the calculation, and the quarterly structure are the same. Payments are tax-free. A 25% increase lasts five years, from 2026 to 2031. You are considered when you file.</li>
            <li>For July 2026 to June 2027 the maximum is $679 single, $890 for a couple, and $234 per child. A single person with no children and AFNI under $11,564 gets $445, not $679.</li>
            <li>The component table for the 2025 base year is $445 for you, $445 for a spouse, $234 per child, $445 for the first child of a single parent, and an extra $234 for a single person without children. Phase-in is $11,564. Phase-out starts above $46,432, at 5 cents per dollar.</li>
            <li>The next payment is January 5, 2027, then April 5, 2027. July 3 and October 5, 2026 were this benefit. January 5 and April 2, 2026 were still the GST/HST credit.</li>
            <li>A one-time top-up was issued on June 5, 2026. You needed a filed 2024 return and entitlement to the January 2026 payment.</li>
        </ul>
    </div>

    <h2>Who qualifies for the Groceries and Essentials Benefit in Canada?</h2>

    <p>For the 2026-27 payment period, you qualify for the Canada Groceries and Essentials Benefit when you are a resident of Canada for income tax purposes at the end of the month before the payment and at the beginning of the payment month, and you are at least 19 in the month before it. Under 19, you qualify only if you have or had a spouse or common-law partner, or you are or were a parent living with your child. You do not apply each year, because CRA considers you when you file.</p>

    <p>You generally do not qualify for that quarter if you are not a tax resident, if you are exempt as a diplomat or a diplomat's family member, or if you are confined to a prison or similar institution for at least 90 consecutive days. A person who has died is not eligible for a payment after death. The estate can keep a payment only when the recipient was alive on the first day of the month CRA issued it. You also cannot get an amount for a spouse or a child who fails those tests at the start of the payment month.</p>

    <p>Newcomers who want the benefit in the year they become residents send Form RC151. You and a spouse each need a social insurance number in the ordinary case. Shared custody can split the child amount in half, the same idea as the <a href="/blog/canada-child-benefit-optimization-canada/">Canada Child Benefit</a>. One payment per family: the spouse whose return is assessed first usually receives it, and the amount does not change based on which name is on the deposit. Where this payment sits next to other income tests is the <a href="/blog/government-benefits-stacking-map-canada/">stacking map</a>.</p>

    <h2>How much is the Groceries and Essentials Benefit for July 2026 to June 2027?</h2>

    <p>For July 2026 to June 2027, the Canada Groceries and Essentials Benefit in Canada pays up to $679 if you are single, $890 if you are married or common-law, and $234 for each child under 19. The payments are quarterly and tax-free, and a 25% increase stays in place for five years, from 2026 to 2031. Use the 2025 base-year table below, not a homemade markup of last year's notice.</p>

    <p>A single person's $679 maximum is the $445 base plus the $234 supplement. A couple's $890 is $445 plus $445. Each child is $234, except the first child in a single-parent family, where the component table uses $445. The $234 supplement's phase-in is for a single individual without children. The payments chart, further down, is the amount at a given income.</p>

    <table>
        <caption>Canada Groceries and Essentials Benefit components, 2025 base year (July 2026 to June 2027). Checked October 15, 2026.</caption>
        <thead>
            <tr>
                <th>Piece</th>
                <th>Annual amount</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Eligible individual</td><td>$445</td></tr>
            <tr><td>Eligible spouse or common-law partner</td><td>$445</td></tr>
            <tr><td>Each eligible child under 19</td><td>$234</td></tr>
            <tr><td>First eligible child in a single-parent family</td><td>$445</td></tr>
            <tr><td>Additional amount for a single individual</td><td>$234</td></tr>
            <tr><td>Phase-in threshold for that additional amount, single without children</td><td>$11,564</td></tr>
            <tr><td>Phase-out threshold</td><td>$46,432</td></tr>
        </tbody>
    </table>

    <p>From CRA's payment-amounts page, checked October 15, 2026. The prior benefit year, July 2025 to June 2026, used $349, $349, $184, $349, and $184, with a phase-out at $45,521. The new dollars are higher than a pure indexation of those old dollars.</p>

    <h2>Why does a low-income single person get $445 instead of $679?</h2>

    <p>For July 2026 to June 2027, a single person in Canada with no children and adjusted family net income under $11,564 gets $445 from the Canada Groceries and Essentials Benefit, not $679. The extra $234 single supplement phases in above $11,564. A payment of $445 at a very low income is the chart, not an error.</p>

    <div class="example-box">
        <strong>Illustration: how the $234 single supplement phases in</strong>
        <p>The supplement phases in at 2 cents per dollar of adjusted net income above $11,564. At $14,000, the income above that line is $2,436. Two percent of $2,436 is $48.72, and $445 plus $48.72 is $493.72, which is the chart cell. The $234 supplement is fully included when those 2 cents equal $234, which is $11,700 above $11,564, or about $23,264 of adjusted net income. From there through $45,000, the single, no-children column lists the $679 maximum. This illustration is arithmetic on CRA's chart. It is not a second official table.</p>
    </div>

    <table>
        <caption>CRA payments chart excerpt, single individual, July 2026 to June 2027</caption>
        <thead>
            <tr>
                <th>Adjusted family net income</th>
                <th>No children</th>
                <th>1 child</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Under $11,564</td><td>$445.00</td><td>$1,124.00</td></tr>
            <tr><td>$14,000</td><td>$493.72</td><td>$1,124.00</td></tr>
            <tr><td>$15,000</td><td>$513.72</td><td>$1,124.00</td></tr>
            <tr><td>$20,000</td><td>$613.72</td><td>$1,124.00</td></tr>
            <tr><td>$25,000 to $45,000</td><td>$679.00</td><td>$1,124.00</td></tr>
            <tr><td>$50,000</td><td>$500.60</td><td>$945.60</td></tr>
            <tr><td>$55,000</td><td>$250.60</td><td>$695.60</td></tr>
            <tr><td>$60,000</td><td>$0.60</td><td>$445.60</td></tr>
            <tr><td>$65,000</td><td>$0.00</td><td>$195.60</td></tr>
            <tr><td>$70,000</td><td>—</td><td>$0.00</td></tr>
        </tbody>
    </table>

    <p>Excerpt from CRA's payments chart for July 2026 to June 2027, checked October 15, 2026. The one-child column is $1,124.00 up to $45,000, so the lower rows repeat that amount. The no-children column in this excerpt ends at $65,000, where the chart lists $0.00. A dash is not a zero. The yearly entitlement is paid in four issuances: July 2026, October 2026, January 2027, and April 2027. Amounts are a guideline.</p>

    <h2>How does the Groceries and Essentials Benefit phase out above $46,432?</h2>

    <p>For July 2026 to June 2027, the Canada Groceries and Essentials Benefit in Canada pays a couple the maximum when adjusted family net income is under $46,432, then reduces the benefit by 5 cents per dollar above that line. At $48,000 a couple with no children is listed at $811.60, which is $78.40 below the $890 maximum: $48,000 is $1,568 over $46,432, and $1,568 times 5 cents is $78.40. Amounts are a guideline, and the same 5-cent step matches the chart's $50,000 row.</p>

    <table>
        <caption>CRA payments chart, married or common-law, July 2026 to June 2027. Checked October 15, 2026.</caption>
        <thead>
            <tr>
                <th>Adjusted family net income</th>
                <th>No children</th>
                <th>1 child</th>
                <th>2 children</th>
                <th>3 children</th>
                <th>4 or more</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Under $46,432</td><td>$890.00</td><td>$1,124.00</td><td>$1,358.00</td><td>$1,592.00</td><td>$1,826.00</td></tr>
            <tr><td>$48,000</td><td>$811.60</td><td>$1,045.60</td><td>$1,279.60</td><td>$1,513.60</td><td>$1,747.60</td></tr>
            <tr><td>$50,000</td><td>$711.60</td><td>$945.60</td><td>$1,179.60</td><td>$1,413.60</td><td>$1,647.60</td></tr>
            <tr><td>$55,000</td><td>$461.60</td><td>$695.60</td><td>$929.60</td><td>$1,163.60</td><td>$1,397.60</td></tr>
            <tr><td>$60,000</td><td>$211.60</td><td>$445.60</td><td>$679.60</td><td>$913.60</td><td>$1,147.60</td></tr>
            <tr><td>$65,000</td><td>$0.00</td><td>$195.60</td><td>$429.60</td><td>$663.60</td><td>$897.60</td></tr>
            <tr><td>$70,000</td><td>$0.00</td><td>$0.00</td><td>$179.60</td><td>$413.60</td><td>$647.60</td></tr>
        </tbody>
    </table>

    <p>Excerpt from CRA's payments chart, checked October 15, 2026. Amounts are a guideline, and family size and marital status have to stay current. Further rows on that page reach zero at $75,000 for three children and at $85,000 for four or more. Illustration, not a second official table: if the 5-cent rate continues in a straight line, the income where a maximum hits zero is the threshold plus the maximum divided by 0.05. For a couple with no children that is $46,432 plus $17,800, or $64,232. For a couple with two children it is $46,432 plus $27,160, or $73,592. For a single person at the $679 maximum it is $46,432 plus $13,580, or $60,012. The single chart above lists $0.60 at $60,000 and $0.00 at $65,000, which sits on that same line.</p>

    <div class="example-box">
        <strong>Illustration: a couple with two children and $50,000 of adjusted family net income</strong>
        <p>On the Canada Groceries and Essentials Benefit chart for July 2026 to June 2027, the maximum for a couple in Canada with two children is $1,358. Income above $46,432 is $3,568. Five cents on each of those dollars is $178.40. Subtracting that from $1,358 leaves $1,179.60, which is the chart's $50,000 cell for two children. Paid in four quarters, $1,179.60 is $294.90 a quarter. If a quarter is under $50, CRA pays the whole year in July instead. This illustration is the federal benefit only. A provincial amount administered with it can make the deposit larger. Ontario's sales tax credit is not in that deposit. CRA pays it inside the Ontario Trillium Benefit. For an estimate on your own file, use CRA's <a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/child-family-benefits-calculator.html">Child and family benefits calculator</a>.</p>
    </div>

    <h2>When is the next Groceries and Essentials Benefit payment?</h2>

    <p>The next Canada Groceries and Essentials Benefit payment in Canada is January 5, 2027, then April 5, 2027. CRA pays on the 5th day of July and October 2026 and of January and April 2027, or on the last business day before when the 5th is a Saturday, Sunday, or federal statutory holiday. January 5, 2027 is a Tuesday and April 5, 2027 is a Monday, so neither of those two dates moves.</p>

    <p>CRA's benefit payment dates page lists this benefit on July 3, 2026 and October 5, 2026. The same page lists the GST/HST credit on January 5, 2026 and April 2, 2026. The yearly amount on the chart is a guideline, paid in four issuances: July 2026, October 2026, January 2027, and April 2027. If the payment does not arrive, wait 10 working days before calling 1-800-387-1193. If the benefit is under $50 a quarter, CRA pays it all in July.</p>

    <h2>What was the June 5, 2026 top-up?</h2>

    <p>CRA issued a one-time GST/HST credit top-up on June 5, 2026, before the Canada Groceries and Essentials Benefit rename in July 2026. You needed a filed 2024 return and entitlement to the January 2026 payment. If you have not filed the 2024 return, file it, and CRA sends a retroactive payment if you are entitled.</p>

    <p>The top-up may have been applied to a CRA debt. It did not include provincial or territorial amounts. There is no form for it now. If it did not arrive, look in My Account, not for a new application.</p>

    <p>CRA's maximums for that June 5, 2026 top-up depend on family type in January 2026 and 2024 adjusted family net income.</p>

    <table>
        <caption>Maximum one-time GST/HST credit top-up issued June 5, 2026</caption>
        <thead>
            <tr>
                <th>Family</th>
                <th>No children</th>
                <th>1 child</th>
                <th>2 children</th>
                <th>3 children</th>
                <th>4 or more</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Single</td><td>$267</td><td>$441</td><td>$533</td><td>$625</td><td>$717</td></tr>
            <tr><td>Married or common-law</td><td>$349</td><td>$441</td><td>$533</td><td>$625</td><td>$717</td></tr>
        </tbody>
    </table>

    <p>From CRA's one-time top-up page, checked October 15, 2026. CRA says the top-up generally provided a 50% increase to the annual GST/HST credit for July 2025 to June 2026, and that it was generally twice the January 2026 payment. A family change during the year can make it something other than exactly half the year's total.</p>

    <p>The Department of Finance's June 5, 2026 release described the top-up as $3.1 billion for the 12 million people then receiving the GST credit, including about 2.7 million in Quebec, and the ongoing increase as $8.6 billion over 2026-27 to 2030-31, including 500,000 additional people. Finance's $25,000 example is a single senior with $25,000 in net income: a one-time top-up of $267, plus a longer-term increase of $136 for 2026-27, a total increase of $402, and $950 in total for 2026-27 including the top-up. The same release says a single person will receive up to $950 this year and about $700 a year for the next four years, and a family of four up to $1,890 this year and about $1,400 a year for the next four years. A couple with two children and $40,000 of net income: a top-up of $533 plus a $272 increase, a total increase of $805, and $1,890 in total. Those are Finance's examples. The notice in My Account is the payment.</p>

    <h2>Which provincial credits are paid with the Groceries and Essentials Benefit?</h2>

    <p>For 2026-27, CRA combines some provincial and territorial credits with the Canada Groceries and Essentials Benefit in Canada. Ontario's sales tax credit is the exception: CRA pays it inside the Ontario Trillium Benefit, not in this deposit. You do not apply to the province for the credits in the table, and the wider map is <a href="/blog/provincial-benefits-programs-canada/">provincial benefits</a>.</p>

    <p>The figures below are the maximums in the 2026-27 guide. They phase out on their own income lines. This table is not every provincial program.</p>

    <table>
        <caption>Provincial amounts CRA administers with the Groceries and Essentials Benefit, from the 2026-27 guide</caption>
        <thead>
            <tr>
                <th>Program</th>
                <th>Maximum CRA listed</th>
                <th>Where it starts to fall</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>New Brunswick HST credit</td><td>$300 per adult, $100 per child under 19, or $300 for the first child in a single-parent family</td><td>Reduced by 2% of adjusted family net income over $35,000</td></tr>
            <tr><td>Newfoundland and Labrador income supplement</td><td>$520 single, $589 with a spouse, plus $231 per child under 19. A disability amount can be added if you also have the Disability Tax Credit.</td><td>Calculated from family situation and income. Confirm the notice.</td></tr>
            <tr><td>Newfoundland and Labrador seniors' benefit</td><td>$1,882 if you are 65 at any time in 2026, or a couple with at least one senior, and adjusted family net income is $30,409 or less</td><td>Partial between $30,409 and $46,549</td></tr>
            <tr><td>Nova Scotia affordable living tax credit</td><td>$255 for an individual or a couple, plus $60 per child under 19</td><td>Reduced by 5% of adjusted family net income over $30,000</td></tr>
            <tr><td>Prince Edward Island sales tax credit</td><td>$310 for an individual, plus $55 for a spouse, common-law partner, or eligible dependant</td><td>Renamed the Prince Edward Island essentials benefit starting in November 2026, with a new $175 minimum for residents who qualify</td></tr>
            <tr><td>Saskatchewan low-income tax credit</td><td>$460 per adult or eligible dependant, $181 per child under 19 up to two children, up to $1,282 per family</td><td>Reduction starts above $39,345. Partial credit can continue to $81,668.</td></tr>
            <tr><td>Ontario sales tax credit</td><td>$378 for each adult and each child under 19</td><td>Paid through the Ontario Trillium Benefit, not inside this deposit. Single, no children: reduced by 4% of adjusted net income over $29,047. A single parent, or a couple: 4% over $36,309.</td></tr>
        </tbody>
    </table>

    <p>From CRA guide RC4210 for the 2026-27 payment period. Alberta, British Columbia, Manitoba, Northwest Territories, Nunavut, and Yukon are not given a companion credit in the section reviewed. Absence from this table is not a statement that the province has no other benefit.</p>

    <h2>What are the common mistakes with the Groceries and Essentials Benefit?</h2>

    <p>Four mistakes show up on the Canada Groceries and Essentials Benefit for 2026-27 in Canada: skipping the return because income is zero, reporting a marriage or common-law change late, treating $679 as the payment at every low income, and looking for the Ontario sales tax credit inside this deposit.</p>

    <p>File a return even when you have no income. CRA considers you for this benefit when you file. With no return, the test never runs.</p>

    <p>Tell CRA about a marriage or common-law partnership by the end of the month after the month it changed. Two single payments become one family amount. Do not report a separation until you have been apart for 90 days because of a breakdown. An involuntary separation, such as work or illness, is not a breakdown.</p>

    <div class="example-box">
        <strong>Example from CRA: Kurt and Julie</strong>
        <p>Kurt is single with $20,000 of income. He marries Julie, who has $30,000, in August 2026, and he tells CRA in September. From the October 2026 issuance, the Canada Groceries and Essentials Benefit is based on their combined adjusted family net income of $50,000. This is CRA's example of the timing. It is not a quote of a payment amount.</p>
    </div>

    <p>Do not assume $679 when income is under the phase-in. For July 2026 to June 2027, a single person with no children and AFNI under $11,564 gets $445.</p>

    <p>Do not expect the Ontario sales tax credit in this deposit. CRA pays that credit through the Ontario Trillium Benefit.</p>

    <h2>Frequently asked questions</h2>

    <h3>When is the next payment?</h3>
    <p>The next Canada Groceries and Essentials Benefit payment in Canada is January 5, 2027, then April 5, 2027. CRA pays on the 5th of July, October, January, and April. If the 5th is a Saturday, Sunday, or federal statutory holiday, the payment is the last business day before. January 5, 2027 is a Tuesday and April 5, 2027 is a Monday, so those two dates do not move. If the payment does not arrive, wait 10 working days before calling 1-800-387-1193. If a quarter is under $50, CRA pays the whole year in July.</p>

    <h3>Why am I getting less than $679 as a single person?</h3>
    <p>For July 2026 to June 2027, $679 is the maximum for a single person in Canada with no children, not the amount at the lowest incomes. Under $11,564 of adjusted family net income, the Canada Groceries and Essentials Benefit chart lists $445.00. The extra $234 single supplement phases in at 2 cents per dollar above $11,564. Illustration: at $14,000, $445 plus 2% of $2,436 is $493.72, which matches the chart. The $679 maximum starts at about $23,264 of adjusted net income and runs through $45,000 on that chart. A payment of $445 is the phase-in, not an error.</p>

    <h3>Can an RRSP contribution increase my Groceries and Essentials Benefit?</h3>
    <p>It can in the phase-out zone, and this is an example, not a promise. Adjusted family net income for the Canada Groceries and Essentials Benefit uses line 23600 net income, and an RRSP deduction lowers line 23600. Example: on the July 2026 to June 2027 chart, a couple in Canada with no children at $50,000 of adjusted family net income gets $711.60. At $48,000 the chart shows $811.60, a $100 difference. In that phase-out zone, each $1 less of net income lines up with 5 cents of benefit. Under the phase-out line the chart amount is already at the maximum for that family, so a lower line 23600 does not increase it. A single person still in the phase-in, under about $23,264, can see a smaller supplement if income falls, because that supplement rises with income up to the maximum.</p>

    <h3>Is the Groceries and Essentials Benefit a new program with a new application?</h3>
    <p>The name and the July 2026 increase are new. The eligibility, the quarterly structure, and the calculation method are the GST/HST credit's, which CRA says explicitly. If you were receiving the credit and your situation did not change, CRA says you are likely eligible for the Canada Groceries and Essentials Benefit. You still have to file. A newcomer uses Form RC151 for the year residency starts.</p>

    <h3>Do I report it on my tax return?</h3>
    <p>No. CRA says the Canada Groceries and Essentials Benefit payments are not taxable and that you do not report them as income. Related provincial amounts in the same 2026-27 guide are also described as non-taxable. The benefit can still be used to repay a tax debt. CRA says it will keep future benefit payments and refunds until an overpayment is repaid, and it can apply the benefit to amounts owing.</p>

    <h3>I turned 19 in January. Which payment is my first?</h3>
    <p>You have to be 19 in the month before a Canada Groceries and Essentials Benefit payment. CRA's 2026-27 guide uses Alex, who turns 19 on January 5, 2027. If Alex files a 2025 return, the first possible payment is April 2027, not January 2027, because Alex is not 19 before January 1. File the 2025 return even with no income, or the automatic test never runs.</p>

    <h3>We got married after we each received the July payment. Who keeps it?</h3>
    <p>Tell CRA by the end of the month after the month your status changed. Only one Canada Groceries and Essentials Benefit payment per family is allowed each quarter. If you both kept receiving a single-person amount after the marriage, one of you repays the payments that should have been a family amount. Do not report a separation until you have been apart for 90 days because of a breakdown. An involuntary separation, such as work or illness, is not a breakdown.</p>

    <h3>Why is my quarterly payment different from my neighbour's at the same income?</h3>
    <p>Marital status, the number and ages of children, and shared custody change the Canada Groceries and Essentials Benefit for July 2026 to June 2027. A child who turns 19 is dropped at the next quarter. Provincial supplements differ by province. A quarter under $50 is not paid as a quarter at all. Compare the annual entitlement on the notice, not the deposit on a single Friday.</p>

    <h3>Did this benefit replace the carbon rebate?</h3>
    <p>No. The Canada Groceries and Essentials Benefit is the GST/HST credit, renamed in July 2026 and increased. The Canada Carbon Rebate for individuals ended with the April 2025 payment when the federal fuel charge stopped. Read <a href="/blog/canada-carbon-rebate-ended/">the closed rebate</a> before you treat a missing carbon deposit as a missing groceries payment.</p>

    <h2>Sources</h2>
    <p>Checked October 15, 2026.</p>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-groceries-essentials-benefit.html">CRA, Canada Groceries and Essentials Benefit overview, including the July 2026 rename and the 25% increase</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-groceries-essentials-benefit/how-much/payment-amounts.html">CRA, payment amounts and component table</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-groceries-essentials-benefit/how-much/payments-chart.html">CRA, payments chart, July 2026 to June 2027</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4210/canada-groceries-essentials-benefit.html">CRA guide RC4210, Canada Groceries and Essentials Benefit, 2026-27</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/benefit-payment-dates.html">CRA, benefit payment dates</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/gst-hst-credit/one-time-top-up.html">CRA, one-time GST/HST credit top-up issued June 5, 2026</a></li>
        <li><a href="https://www.canada.ca/en/department-finance/news/2026/06/canadians-to-begin-receiving-enhanced-canada-groceries-and-essentials-benefit-starting-today.html">Department of Finance, June 5, 2026 release on the top-up and the increase</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/child-family-benefits-calculator.html">CRA, Child and family benefits calculator</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The notice is the calculation. The return is the input.</strong></p>
        <p>If the 2025 return is still open, the benefit is still waiting. The 2026 tax guide is the filing side.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
    ),
    updated: '2026-10-15',
    youtubeId: 'kTCzBkfvRC4',
    youtubeTitle: 'GST Credit Renamed: How Much the Groceries Benefit Pays in 2026',
    youtubeUploadDate: '2026-10-16T04:24:05-04:00',
    youtubeDuration: 'PT6M40S',
  },
  benefitsPost(
    'canadian-dental-care-plan-eligibility',
    'Canadian Dental Care Plan: Eligibility, Income Tiers, and How to Apply',
    'The Canadian Dental Care Plan requires adjusted family net income under $90,000 and no private dental coverage. Co-payments are 0%, 40%, or 60% of plan fees, depending on income.',
    `<div class="container">

    <div class="hook">
        You can get Canadian Dental Care Plan coverage for the benefit year July 1, 2026 to June 30, 2027 only if your adjusted family net income is under <span class="highlight">$90,000</span> and you do not have access to private dental insurance. Under $70,000, the plan pays 100% of its own fees. From $70,000 to $79,999 you pay 40% of those fees. From $80,000 to $89,999 you pay 60%. A dentist's bill above the plan fee is still yours.
    </div>

    <p>Applications for that benefit year are open. This page is the eligibility spoke under the <a href="/blog/canada-government-benefits-guide/">government benefits guide</a>. It is not a provincial social-assistance dental program, which can sit alongside or instead of this plan and is part of <a href="/blog/provincial-benefits-programs-canada/">provincial benefits</a>. It is also not the Disability Tax Credit. A diagnosis does not decide this file. Income and private coverage do. The credit, for a different test, is the <a href="/blog/disability-tax-credit-canada-guide/">Disability Tax Credit guide</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Four tests: no private dental coverage, a filed return for you and your spouse, adjusted family net income under $90,000, and Canadian tax residency.</li>
            <li>Declining an employer, pension, student, or association plan still counts as access. The retired exception is narrow: you opted out of pension dental coverage before December 11, 2023, and you cannot opt back in.</li>
            <li>The co-payment is a share of the plan's established fee. If the clinic charges more, you pay the gap on top of any co-payment, including when your co-payment is zero.</li>
            <li>Apply in My Service Canada Account, on Canada.ca, or by phone at 1-833-537-4342. Sun Life mails the welcome package after the government finds you eligible.</li>
            <li>The renewal window for existing members closed June 1, 2026. If you missed it, Canada.ca says to re-apply, and coverage can have a gap.</li>
        </ul>
    </div>

    <h2>What are the four eligibility tests?</h2>

    <p>Canada.ca says you must meet all four. You do not have access to private dental insurance through your employer or a family member's employer, including a health and wellness account; through a pension, including a government employer pension; through a professional or student organization; or through a policy you, a family member, or a group bought from an insurer. The block applies even if you would have paid a premium, even if you decided not to take the coverage, and even if you never used it. Whether a private health or dental plan is worth buying once that test fails, including Quebec's drug-insurance rule, is <a href="/blog/private-health-dental-insurance-canada/">private health and dental insurance</a>.</p>

    <p>You and your spouse or common-law partner, if you have one, have filed a Canadian return so family income can be assessed for the previous year. To apply for 2026-27 you need that return assessed and a notice of assessment in hand. Your adjusted family net income is under $90,000. Canada.ca defines that income as both spouses' line 23600, minus the universal child care benefit and RDSP income on lines 11700 and 12500, plus UCCB and RDSP amounts repaid on lines 21300 and 23200. You are a Canadian resident for tax purposes. You attest, on the application and again at renewal, that you do not have private dental coverage.</p>

    <h2>How do the income tiers split the bill?</h2>

    <p>The plan reimburses a percentage of eligible services at the fees it has established. Your co-payment is the percentage of those fees the plan does not pay. You pay it to the clinic. You can also owe an amount the plan never priced, or the difference when the clinic's fee is higher than the plan fee.</p>

    <table>
        <caption>Canadian Dental Care Plan co-payment by adjusted family net income</caption>
        <thead>
            <tr>
                <th>Adjusted family net income</th>
                <th>What the plan covers</th>
                <th>What you pay toward the plan fee</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Under $70,000</td>
                <td>100% of eligible services at the established fees</td>
                <td>0% of the plan fee. A higher clinic fee can still be yours.</td>
            </tr>
            <tr>
                <td>$70,000 to $79,999</td>
                <td>60% of eligible services at the established fees</td>
                <td>40% of the plan fee, plus any amount above that fee.</td>
            </tr>
            <tr>
                <td>$80,000 to $89,999</td>
                <td>40% of eligible services at the established fees</td>
                <td>60% of the plan fee, plus any amount above that fee.</td>
            </tr>
            <tr>
                <td>$90,000 and above</td>
                <td>Not eligible</td>
                <td>The plan is not the payer. Private coverage, a provincial program, or the medical expense credit are different routes.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026, from Canada.ca's coverage page. The tiers are family income, so a spouse's line 23600 can move you from no co-payment to 40% without your own pay changing. A medical expense tax credit on what you still pay is a tax question, covered in spirit by <a href="/blog/missed-tax-credits/">missed credits</a>. It is not a second dental plan.</p>

    <div class="example-box">
        <strong>Illustration from Canada.ca's co-payment factsheet, not a 2026 fee schedule</strong>
        <p>The factsheet's 40% example is Hakeem and Anita, with adjusted family net income of $76,000. The clinic charges $145 for two units of scaling. The plan's established fee in the example is $134. Hakeem's co-payment is 40% of $134, which is $53.60. The plan pays the clinic $80.40. He also owes the $11 gap between $145 and $134. His total is $64.60. The factsheet's 60% example, at $82,000 of family income, uses the same $145 and $134 and lands at $91.40 out of pocket. A household under $70,000 would owe the $11 gap and no co-payment, on those same sample fees. Fees differ by procedure, province, and year. Ask the clinic what the plan fee is, and what the clinic charges, before the appointment. The <a href="/blog/healthcare-costs-retirement/">retirement health-cost guide</a> is the longer bill, once dental is only one line of it.</p>
    </div>

    <h2>How do you apply, and what happens after?</h2>

    <p>Canada.ca says applications for July 1, 2026 to June 30, 2027 are open. For each applicant, and for a spouse if you have one, you need a social insurance number when one exists, date of birth, full name, home and mailing address, and any government social-program dental coverage. Children need a SIN if one is available.</p>

    <p>In My Service Canada Account, open the Canadian Dental Care Plan section and choose the apply action. If you cannot use that account, apply on Canada.ca and choose digital communications if you want email instead of waiting for paper. If you cannot use either, call Service Canada at 1-833-537-4342. TTY is 1-833-677-6262. Someone applying for another person has to show legal authority. Canada.ca tells them to mail originals or certified copies, or to bring them to a Service Canada office.</p>

    <p>After you apply, check status online or by phone with the number from the application, the letter, or the membership card, plus the social insurance number. When the government finds you eligible, it shares your information with Sun Life. Sun Life mails a welcome package. You do not have to wait for that package to book care if you can give the clinic your member ID, identification, the coverage start date, and your co-payment level. Do not book before the start date. Care before that date is not covered. Confirm the clinic will bill Sun Life directly and that coverage is active. If you pay the full bill yourself, Sun Life does not reimburse you for services the plan would have paid the clinic.</p>

    <div class="warning-box">
        <strong>Renewal for the prior year has closed:</strong>
        <p>My Service Canada Account's dental page says renewals have been closed since June 2, 2026. The main dental page says that if you had 2025-26 coverage and did not renew by June 1, 2026, you re-apply, and you may have a gap. A co-payment level can change at renewal because income changed. Treatment is paid at the level and the fees in effect on the day of the service, which can differ from an estimate. Read the current renew or re-apply page before you assume a card in a drawer is still active.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>I opted out of my employer's dental plan. Am I eligible?</h3>
    <p>Access counts, not enrolment. Canada.ca says employer, pension, student, association, and privately purchased coverage block the plan even when you decline it, pay a premium, or never claim. The stated exception is a retiree who opted out of pension dental coverage before December 11, 2023 and who cannot opt back in under the pension's rules. Everyone else who can take a plan is treated as having access.</p>

    <h3>Does "100% coverage" mean the visit is free?</h3>
    <p>It means the plan pays 100% of its established fee for a covered service. If the clinic charges more, or if you agree to something the plan does not cover, you pay that portion directly. The factsheet's scaling example has an $11 gap even before any co-payment. Ask for both numbers before you sit down.</p>

    <h3>Whose income is the $90,000 test?</h3>
    <p>Adjusted family net income, not your paycheque alone. A spouse's line 23600 is added. The universal child care benefit and RDSP income are removed, and repayments of those amounts are added back. A raise that lands in this calendar year shows up on next year's assessed return, which is the return a future benefit year will read. The current application uses the previous year.</p>

    <h3>Can I claim the dentist's bill and use this plan?</h3>
    <p>You can only claim, as a medical expense, amounts you actually paid and that were not reimbursed. The plan's share is not your expense. Your co-payment and any balance above the plan fee can be. The credit is non-refundable and has its own threshold. This page will not invent a combined savings number. The credit list is <a href="/blog/missed-tax-credits/">missed credits</a>.</p>

    <h3>I had coverage last year and missed renewal. What now?</h3>
    <p>Canada.ca says the renewal period closed June 1, 2026, and that you re-apply for 2026-27 if you missed it. It also says there may be a gap. Do not book on the old card until a new start date is in a letter. The phone line and My Service Canada Account both show whether an application is open.</p>

    <h3>Is this the same as a provincial dental program for kids or seniors?</h3>
    <p>No. The application asks you to list dental coverage you already have through a government social program. Provincial programs have their own age, income, and residency rules. Some care may be billed to the provincial program first. The federal plan's page is the one that tells the clinic how coordination works. Start with the provincial program you already use, then read <a href="/blog/provincial-benefits-programs-canada/">how provincial tests differ</a>.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/services/benefits/dental/dental-care-plan/qualify.html">Canada.ca, Canadian Dental Care Plan, do you qualify</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/dental/dental-care-plan/coverage.html">Canada.ca, what is covered, including the co-payment table</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/dental/dental-care-plan/coverage/examples-copayments-additional-charges.html">Canada.ca, co-payment and additional-charge examples</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/dental/dental-care-plan/apply.html">Canada.ca, how to apply for the 2026-27 benefit year</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html">Canada.ca, Canadian Dental Care Plan overview, including the closed renewal window</a></li>
        <li><a href="https://www.canada.ca/en/employment-social-development/services/my-account/cdcp.html">Canada.ca, Canadian Dental Care Plan in My Service Canada Account</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/dental/dental-care-plan/after-apply.html">Canada.ca, after you apply, including the Sun Life welcome package</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The plan reads the assessed return, then the attestation.</strong></p>
        <p>File first. The 2026 tax guide is the return this application is waiting on.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),
  benefitsPost(
    'how-much-cpp-will-i-get',
    'How Much CPP Will I Get? Estimating Your Pension With My Service Canada',
    'CPP starting in January 2026 pays at most $1,507.65 a month at age 65. New beneficiaries average $877.01. Use your Service Canada estimate.',
    `<div class="container">

    <div class="hook">
        The maximum CPP retirement pension at age 65, for a benefit beginning in January 2026, is <span class="highlight">$1,507.65 a month</span>. The average for new beneficiaries is $877.01. Neither number is your pension. The estimate that uses your contributions is in My Service Canada Account, under Canada Pension Plan, "View my benefit estimates." Starting at 60 cuts that estimate by 0.6% a month. Waiting until 70 raises it by 0.7% a month.
    </div>

    <p>This page is how the dollar is built. It sits under the <a href="/blog/canada-government-benefits-guide/">government benefits guide</a>. When to start, once you have the dollar, is <a href="/blog/cpp-when-to-take-canada/">when to take CPP</a>. What that larger or smaller cheque does to GIS, OAS recovery, and a survivor benefit is <a href="/blog/cpp-timing-benefits-stacking-canada/">CPP timing in a stack</a>. Quebec workers use the QPP and Retraite Québec. Do not paste this estimate onto a Quebec record.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Sign in to My Service Canada Account and open "View my benefit estimates." The statement of contributions is the earnings record behind that estimate. Correct it before you rely on it.</li>
            <li>Before 65, the pension falls by 0.6% for each month, 7.2% a year, and 36% at 60. After 65 it rises by 0.7% a month, 8.4% a year, and 42% at 70.</li>
            <li>ESDC says maximums in its 2026 table are for benefits beginning in January 2026, and that maximums increase every month because of the CPP enhancement. A September start is not locked to $1,507.65.</li>
            <li>In 2026 the year's maximum pensionable earnings are $74,600. The basic exemption is $3,500. The employee and employer rate on the base is 5.95%, and the maximum contribution is $4,230.45 each.</li>
            <li>CPP2, the second ceiling, applies from $74,600 to $85,000 at 4%. The 2026 maximum CPP2 contribution is $416 for an employee and $416 for the employer.</li>
        </ul>
    </div>

    <h2>Where do you see your own number?</h2>

    <p>ESDC's instructions are short. Register or sign in to My Service Canada Account. Go to the Canada Pension Plan section. Choose "View my benefit estimates." The same account can show "View my contributions," which is the detailed record of pensionable earnings. You can ask for a paper statement of contributions if you want one mailed. The estimate already reflects the record Service Canada holds, including the dropout of low-earning months and the child-rearing provision if that provision is on the file. If a year of earnings is missing, the estimate is missing it too. Fix the record before you treat the estimate as a plan.</p>

    <p>There is a second, rougher benchmark on the public page, and it is useful only as a scale. People who contributed at the maximum for enough years can approach the maximum. Most people will not. The gap between $877.01 and $1,507.65 is the point of opening the account. An average is not a forecast of your cheque, and it is not a reason to delay or to start.</p>

    <h2>What do the age adjustments do to that estimate?</h2>

    <p>The percentages apply to your calculated pension, not to the national maximum, unless your calculated pension is the maximum. Nothing increases the pension for waiting past 70. You cannot start before 60.</p>

    <table>
        <caption>CPP retirement adjustment for the start age</caption>
        <thead>
            <tr>
                <th>Start age</th>
                <th>Adjustment from the age-65 pension</th>
                <th>What ESDC publishes</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>60</td><td>36% lower. Sixty months times 0.6%.</td><td>The reduction is permanent.</td></tr>
            <tr><td>65</td><td>None</td><td>The reference age for the published maximum and the published average.</td></tr>
            <tr><td>70</td><td>42% higher. Sixty months times 0.7%.</td><td>The increase is permanent. Waiting past 70 adds nothing further.</td></tr>
        </tbody>
    </table>

    <p>Table as of September 2026, from ESDC's "when to start" page. A month that is not a birthday uses the same monthly rate. Fourteen months after 65 is 14 times 0.7%, which is 9.8%.</p>

    <div class="example-box">
        <strong>Illustration: an estimate of $900 at 65, which is not a published average</strong>
        <p>Suppose My Service Canada Account says $900 a month at 65. That $900 is a teaching number, chosen because it sits near the $877.01 average and far from the maximum. It is not your file. At 60 the pension is 64% of $900, or $576. At 70 it is 142% of $900, or $1,278. The gap between those two illustrated cheques is $702 a month. The percentages are the law of the adjustment. The $900 is not. If the age-65 pension were instead the January 2026 maximum of $1,507.65, the same percentages produce $964.90 at 60 and $2,140.86 at 70. Use that pair only as arithmetic. ESDC says maximums rise every month for benefits that begin after January 2026, because of the enhancement, so a start later in 2026 is a different maximum. Read the estimate for the month you will actually start. Then decide whether the larger cheque helps or hurts the rest of the file, which is the <a href="/blog/oas-eligibility-deferral-canada/">OAS deferral guide</a> and the <a href="/blog/oas-gis-clawback-canada/">OAS clawback guide</a>.</p>
    </div>

    <h2>What are you contributing in 2026, and why is that not this year's pension?</h2>

    <p>Contributions in 2026 build a future pension. They do not set the cheque of someone who retires this year, except through the post-retirement benefit if they have already started CPP and keep working. The base and the second ceiling are different rates.</p>

    <table>
        <caption>CPP contribution ceilings for 2026</caption>
        <thead>
            <tr>
                <th>Piece</th>
                <th>2026 figure</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Year's maximum pensionable earnings</td><td>$74,600</td></tr>
            <tr><td>Basic exemption</td><td>$3,500</td></tr>
            <tr><td>Maximum contributory earnings</td><td>$71,100</td></tr>
            <tr><td>Employee and employer rate</td><td>5.95% each</td></tr>
            <tr><td>Maximum employee and employer contribution</td><td>$4,230.45 each</td></tr>
            <tr><td>Maximum self-employed contribution on this base</td><td>$8,460.90</td></tr>
            <tr><td>Year's additional maximum pensionable earnings (CPP2)</td><td>$85,000</td></tr>
            <tr><td>Earnings subject to CPP2</td><td>$10,400, the gap from $74,600 to $85,000</td></tr>
            <tr><td>CPP2 rate</td><td>4% employee and 4% employer. Self-employed, 8%.</td></tr>
            <tr><td>Maximum CPP2 contribution</td><td>$416 employee, $416 employer, $832 self-employed</td></tr>
        </tbody>
    </table>

    <p>Table as of September 2026, from CRA's CPP and CPP2 payroll pages. An employee who hits both ceilings pays $4,230.45 plus $416, which is $4,646.45. A self-employed person who hits both pays $8,460.90 plus $832, which is $9,292.90. Those sums are arithmetic on the two published maximums. Self-employed contributions are based on net business income, not on investment income. The base CPP rate of 11.9% combined, and the enhancement that began in 2019, are why a younger contributor's eventual maximum can exceed the maximum of someone who spent most of a career under the old rate. The estimate, not this table, is how that shows up for you.</p>

    <p>If you have already started CPP and you keep working between 65 and 70, further contributions can create a post-retirement benefit. ESDC's 2026 table lists that benefit, at age 65, at an average of $25.76 for new beneficiaries and a maximum of $54.69. It is a small additional amount. It is not a reason to start the retirement pension early. The opt-out from contributions at 65 to 70 is Form CPT30, which the <a href="/blog/cpp-timing-benefits-stacking-canada/">stacking article</a> already walks through. After 70, contributions stop.</p>

    <h2>What will the estimate not tell you by itself?</h2>

    <p>A survivor pension and your own retirement pension are combined. They do not both pay in full. ESDC's 2026 table lists a combined survivor and retirement pension at 65 with an average of $1,103.97 for new beneficiaries and a maximum of $1,531.56. Adding your estimate to a survivor statement overstates the household. The death benefit is a one-time payment with a maximum of $2,500 in that table. CPP disability is a different test and a different maximum, $1,741.20 in the same table, and approval for it is not approval for the Disability Tax Credit.</p>

    <p>The estimate is also silent on tax and on income-tested benefits. CPP is taxable. You can ask for withholding. If you do not, the tax shows up on the return. A larger CPP can reduce GIS or push OAS into recovery. Run those tests with the estimate in hand, not with the $1,507.65 maximum, unless the estimate actually says you are at the maximum. The retirement income picture that sits above the pension is <a href="/blog/how-much-money-retire-canada/">how much you need to retire</a>.</p>

    <h2>Frequently asked questions</h2>

    <h3>Is the average CPP really only $877?</h3>
    <p>ESDC lists $877.01 as the average retirement pension at 65 for new beneficiaries. The payment-amounts page dates that average to April 2026. The CPP retirement page also shows $877.01 for July to September 2026. It is an average of new pensions, not of every pension in pay, and not a target. Your statement is the relevant figure. People with many years near the earnings ceiling land closer to the maximum. People with years out of the workforce, or with earnings under the ceiling, land lower, subject to the dropout rules.</p>

    <h3>Why might my September 2026 maximum differ from $1,507.65?</h3>
    <p>ESDC says the maximums in the 2026 table are for benefits beginning in January 2026, and that maximum CPP amounts increase every month because of the enhancement. Quote $1,507.65 as the January 2026 age-65 maximum. For any other start month, use the estimate. Do not inflate the January figure by a homemade monthly percentage.</p>

    <h3>Do the child-rearing years get added automatically?</h3>
    <p>The child-rearing provision can drop months spent caring for a child under seven out of the contributory period. The estimate is only as good as the provision on the file. If you took those years and the estimate looks like the years were simply low earnings, ask Service Canada whether the provision was applied before you pick a start month. The public statement of contributions is the place to see the earnings, year by year.</p>

    <h3>I am self-employed. Do I pay both halves, and does that double my pension?</h3>
    <p>You pay both the employee and employer amounts, up to $8,460.90 on the 2026 base and $832 of CPP2 if you are over the first ceiling. The pension is still based on pensionable earnings, not on the dollars of contribution as a separate multiplier. Paying both halves is how a self-employed person funds the same earnings record an employee and an employer would have funded together. Investment income is not pensionable.</p>

    <h3>Can I get a number without an account?</h3>
    <p>You can request a paper statement of contributions, and the statement includes an estimate if you or your family could receive a benefit now. There is no trustworthy public calculator that knows your earnings. A blog that multiplies the maximum by your age is guessing. The account is free. The alternative is a phone call to Service Canada with the same record.</p>

    <h3>Does this replace the decision of when to start?</h3>
    <p>It supplies the input. A 42% increase on a $400 pension is a different life from a 42% increase on $1,500. Health, other income, and GIS change the answer after the math. Read <a href="/blog/cpp-when-to-take-canada/">when to take CPP</a> for the timing frame, and <a href="/blog/cpp-timing-benefits-stacking-canada/">the stacking piece</a> before you delay into a supplement you were counting on.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/payment-amounts.html">ESDC, CPP monthly payment amounts, including the January 2026 maximums</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/amount.html">ESDC, how much you could receive, and the My Service Canada estimate</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/when-start.html">ESDC, when to start, 0.6% and 0.7% adjustments</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/statement-contributions.html">ESDC, statement of contributions</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/cpp-contribution-rates-maximums-exemptions.html">CRA, CPP rates, maximums, and exemptions for 2026</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/calculating-deductions/making-deductions/second-additional-cpp-contribution-rates-maximums.html">CRA, CPP2 rates and maximums for 2026</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The estimate is a record. The return is where the taxable pension will land.</strong></p>
        <p>Once you have the dollar, the 2026 tax guide is how it interacts with the rest of the file.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),
  benefitsPost(
    'oas-eligibility-deferral-canada',
    'OAS Eligibility, Deferral, and the Age-75 Increase',
    'For July to September 2026, full OAS is $751.97 a month from 65 to 74 and $827.17 from 75. Deferral adds 0.6% a month, up to 36% at 70, which is $1,022.68 on that quarter maximum.',
    `<div class="container">

    <div class="hook">
        For July to September 2026, a full Old Age Security pension is <span class="highlight">$751.97 a month from ages 65 to 74 and $827.17 from 75</span>, which is a 10% increase. You can start at 65 or defer to 70. Each month of deferral adds 0.6%, and 60 months adds 36%. On that same quarter's maximum, age 70 is $1,022.68. You need 10 years in Canada after age 18 to be paid while living here, and 40 years for the full amount.
    </div>

    <p>This is the basics spoke under the <a href="/blog/canada-government-benefits-guide/">government benefits guide</a>. The recovery tax and the household GIS test are already written up as <a href="/blog/oas-gis-clawback-canada/">OAS clawback and GIS</a> and as <a href="/blog/oas-gis-income-stacking-canada/">income stacking</a>. Those pages are the strategy. This page is the pension you are strategizing about. The CPP estimate that often starts in the same year is <a href="/blog/how-much-cpp-will-i-get/">how much CPP will I get</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Eligibility is age 65, legal status when the application is approved, and residence after age 18. Ten years if you live in Canada. Twenty years if you live outside Canada and want a partial pension paid abroad.</li>
            <li>A full pension is 40 years after age 18. Fewer years pay 1/40 of the full amount per year. Once payments start, later years of residence do not increase a partial pension.</li>
            <li>Deferral is 0.6% a month from 65 to 70. ESDC's July to September 2026 table puts the full pension at $806.11 at 66, $860.25 at 67, $914.40 at 68, $968.54 at 69, and $1,022.68 at 70.</li>
            <li>The 10% age-75 increase has applied since July 2022, in the month after you turn 75. The July to September 2026 maximums already show it: $827.17 is 10% more than $751.97.</li>
            <li>For the recovery period July 2026 to June 2027, the threshold is $93,454 of 2025 net world income. You repay 15% of the income above that line.</li>
        </ul>
    </div>

    <h2>Who qualifies, and who gets the full amount?</h2>

    <p>ESDC's program toolkit lists three conditions. You are 65 or older. You are a Canadian citizen or a legal resident when the application is approved. You have lived in Canada for at least 10 years since age 18 if you are applying while living here. If you live outside Canada when you apply, the residence floor for a partial pension is 20 years after age 18. A full pension is generally 40 years in Canada after age 18. There are older transitional rules, including for some people who were over 18 and held a Canadian immigration visa before July 1, 1977. If that might be you, the toolkit is the place to read it. This page will not paraphrase a transitional rule into a yes.</p>

    <p>A partial pension is the number of years after age 18, divided by 40, times the full pension. ESDC's example: 20 years is 20 divided by 40, or half. Once you start, additional residence does not raise the fraction. That is a reason some people defer, and it is also a reason not to start "just to get something" in a year you could still add residence before 70. Deferral past 70 does not raise the pension further, and you can delay the start past 70 only in the sense that the amount has already stopped growing.</p>

    <p>Service Canada may enroll you automatically if you are 64, you live in Canada, and you have enough CPP or QPP participation, or you have been filing taxes. The letter tells you. If the letter does not come, you apply. Automatic enrolment is not a substitute for checking the start month you want. If you want to defer, you have to say so. Retroactive payment is limited to 11 months from the application, and a period you deliberately deferred is not paid retroactively.</p>

    <h2>What is the deferral worth in the current quarter?</h2>

    <p>ESDC publishes the dollar result of the 0.6% rule on the July to September 2026 maximum. These amounts assume a full pension. A partial pension is increased by the same percentage, from a smaller base.</p>

    <table>
        <caption>Full OAS pension if you defer, July to September 2026 maximums</caption>
        <thead>
            <tr>
                <th>Age you start</th>
                <th>Increase</th>
                <th>Maximum monthly amount</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>65</td><td>None</td><td>$751.97</td></tr>
            <tr><td>66</td><td>12 months times 0.6%, which is 7.2%</td><td>$806.11</td></tr>
            <tr><td>67</td><td>24 months times 0.6%, which is 14.4%</td><td>$860.25</td></tr>
            <tr><td>68</td><td>36 months times 0.6%, which is 21.6%</td><td>$914.40</td></tr>
            <tr><td>69</td><td>48 months times 0.6%, which is 28.8%</td><td>$968.54</td></tr>
            <tr><td>70</td><td>60 months times 0.6%, which is 36%</td><td>$1,022.68</td></tr>
        </tbody>
    </table>

    <p>Table as of September 2026, copied from ESDC's "when to start your OAS pension" page. OAS is adjusted quarterly. The next quarter will not be these dollars. GIS is not available during a deferral, and a spouse is not eligible for the Allowance during that deferral. ESDC says there is no advantage to waiting if you are eligible for GIS, or if you are already over 70. The payment dates for a pension that has started are the <a href="/blog/canada-benefit-payment-dates/">2026 calendar</a>.</p>

    <div class="example-box">
        <strong>Illustration: 20 years of residence, using the July to September 2026 full maximum</strong>
        <p>Twenty years after age 18 is half of 40. Half of $751.97 is $375.99 a month at 65. Deferring that partial pension for 60 months applies the 36% increase to the partial amount: $375.99 times 1.36 is $511.35. That product is arithmetic on the published fraction and the published deferral rate. It is not a second ESDC table. Later birthdays do not add residence years once the pension has started. The 10% increase at 75, described next, applies to the pension in pay. ESDC describes it as an increase to the OAS pension the month after age 75. Applied to this illustration's $511.35, 10% is $51.14, for an illustrated $562.49. Your letter is the number that counts.</p>
    </div>

    <h2>What is the age-75 increase?</h2>

    <p>Since July 2022, the OAS pension rises by 10% in the month after you turn 75. Pensioners who were already 75 in July 2022 received it then. It is automatic. You do not apply. The July to September 2026 quarterly table shows the result for a full pension that was not deferred: $751.97 before 75, and $827.17 at 75 and over. Multiplying $751.97 by 1.10 gives $827.17. The same quarterly page shows GIS beside those pensions, because many people receive both. A single person receiving OAS can receive GIS of up to $1,123.17 a month, with an income cut-off of $22,800 on that table. A couple who both receive OAS can receive GIS of up to $676.09 each, with a cut-off of $30,096. The Allowance maximum on that table is $1,428.06, cut-off $42,144. The Allowance for the Survivor is $1,702.34, cut-off $30,696. ESDC's footnote says those cut-offs do not include the first $5,000 of employment income, or 50% of employment or self-employment income between $5,000 and $15,000. Who is inside each GIS column is the <a href="/blog/oas-gis-income-stacking-canada/">stacking article</a>, not a second copy of the rate sheet.</p>

    <h2>When does the recovery tax start in the current benefit year?</h2>

    <p>If net world income is over the threshold, part or all of OAS is repaid as a recovery tax. CRA's recovery-tax page sets the July 2026 to June 2027 period off 2025 income, with a minimum threshold of $93,454. The repayment is 15% of income above the threshold. The upper threshold for that period, where a full pension is fully recovered, is $152,062 from ages 65 to 74 and $157,923 at 75 and over. The following recovery period, July 2027 to June 2028, uses 2026 income and a minimum threshold of $95,323. CRA says the upper ends of that next period, $155,109 and $161,088, are estimates from January through September of the current tax year and become final from October through December.</p>

    <div class="example-box">
        <strong>Illustration: 15% of the income above $93,454</strong>
        <p>CRA's recovery-tax page uses a repayment of $981.90 as its figure for the July 2026 to June 2027 period. At 15%, $981.90 is the tax on $6,546 of income above the threshold, because $6,546 times 0.15 is $981.90. Income of $100,000 is $6,546 above $93,454. The repayment is then spread across the monthly OAS payments in that recovery year. It is not a second income tax. You still pay ordinary tax on taxable income, and OAS is in that income. The strategies for keeping income under the line, including which spouse's withdrawal counts, stay in <a href="/blog/oas-gis-clawback-canada/">the clawback guide</a>. Non-residents file the Old Age Security Return of Income. CRA says that if the return is missing, OAS can stop in July.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>Do I need 40 years in Canada to get anything?</h3>
    <p>No. Forty years after age 18 is the full pension. If you live in Canada, 10 years after age 18 can qualify you for a partial pension of one-fortieth per year. If you live abroad, the floor is 20 years. Some people qualify under older transitional rules with a different history. Read the ESDC toolkit before you assume a short residence record pays nothing, and before you assume it pays the maximum.</p>

    <h3>Should I defer if I might receive GIS?</h3>
    <p>ESDC says there is no advantage to waiting if you are eligible for GIS. During a deferral you are not eligible for GIS, and your spouse is not eligible for the Allowance. A larger OAS at 70 can also reduce GIS later, because OAS counts in that test. The deferral table is the wrong tool for a household that will be on the supplement. Run the current GIS table.</p>

    <h3>Does the 10% at 75 stack on a pension I deferred?</h3>
    <p>ESDC describes a 10% increase to the OAS pension the month after you turn 75, and it has applied since July 2022. The published $827.17 is the increase on the non-deferred full pension for this quarter. A deferred pension is a larger base. This page illustrates 10% on a partial deferred amount and labels it as arithmetic. The award letter after your 75th birthday is the authority, because residence and the exact deferral months change the base before the 10% is applied.</p>

    <h3>I immigrated at 50. Can I wait and earn a larger fraction?</h3>
    <p>Years of residence after 18 and before you start are what the fraction counts. Starting at 65 freezes the fraction. If you will still be in Canada, and you are not giving up GIS you need, deferral both raises the pension by 0.6% a month and preserves the chance to add residence years before the start. You cannot get past 40 years of credit, and you cannot grow the deferral percentage past age 70.</p>

    <h3>Is OAS the same as CPP?</h3>
    <p>No. CPP is contributions. OAS is residence and age, paid from general revenue. You can take one and defer the other. A full OAS pension does not require a job. A CPP pension does not require 40 years in Canada. The contribution side is <a href="/blog/how-much-cpp-will-i-get/">the CPP estimate</a>. Planning the two start months together is <a href="/blog/cpp-timing-benefits-stacking-canada/">CPP timing</a>.</p>

    <h3>How often do these dollar amounts change?</h3>
    <p>OAS and GIS amounts are adjusted quarterly. The recovery thresholds are set by tax year and then applied to a July-to-June recovery period. Anything in this article dated July to September 2026 expires as a payment amount at the end of September 2026. The 0.6% deferral rate and the 10% age-75 increase are structural. The $751.97 is not. Check the quarterly table before you budget a year from a single screenshot.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/when-start.html">ESDC, when to start OAS, including the July to September 2026 deferral table</a></li>
        <li><a href="https://www.canada.ca/en/employment-social-development/programs/pensions/pension/statistics/2026-quarterly-july-september.html">ESDC, maximum OAS and GIS amounts, July to September 2026</a></li>
        <li><a href="https://www.canada.ca/en/employment-social-development/programs/old-age-security/reports/oas-toolkit.html">ESDC, Old Age Security program toolkit, eligibility and the age-75 increase</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/recovery-tax.html">CRA, OAS recovery tax thresholds, including July 2026 to June 2027</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/calendar.html">Canada.ca, OAS payment dates</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The quarterly amount is public. The recovery tax is your return.</strong></p>
        <p>Know the threshold before the July payment changes. The 2026 tax guide is that half of the file.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),
  benefitsPost(
    'canada-disability-benefit-guide',
    'Canada Disability Benefit: Who Qualifies and How It Interacts With the DTC',
    'For July 2026 to June 2027 the Canada Disability Benefit maximum is $204.20 a month. You must be 18 to 64, approved for the Disability Tax Credit, and have filed the 2025 return.',
    `<div class="container">

    <div class="hook">
        For July 2026 to June 2027, the Canada Disability Benefit maximum is <span class="highlight">$204.20 a month</span>. You must be 18 to 64, approved for the Disability Tax Credit, a resident, and have filed a 2025 return. The benefit is not taxable. It is not automatic: you apply to Service Canada. The credit is the gate. Without a valid T2201 approval, there is no benefit to calculate.
    </div>

    <p>This spoke is under the <a href="/blog/canada-government-benefits-guide/">government benefits guide</a>. The credit itself, including why files are refused, is the <a href="/blog/disability-tax-credit-canada-guide/">Disability Tax Credit guide</a>. CPP disability is a different statute and a different test, covered beside the pension in <a href="/blog/cpp-timing-benefits-stacking-canada/">CPP timing</a> and beside private insurance in the <a href="/blog/disability-insurance-canada-guide/">disability insurance guide</a>. Do not treat one approval as the others.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>The first month of eligibility was June 2025. Payments began in July 2025. Back payments can cover up to 24 months from the application, and not before June 2025.</li>
            <li>The July 2026 to June 2027 maximum is $204.20 a month, from 2025 adjusted family net income. Twelve times $204.20 is $2,450.40. That product is arithmetic, not a second published annual figure.</li>
            <li>Working income of up to $10,210 is exempt if you are single, and up to $14,294 of combined working income if you have a spouse, for that same period.</li>
            <li>The reduction is 20 cents per dollar of income above the threshold if you are single or the only beneficiary in a couple, and 10 cents each if your partner is also a beneficiary.</li>
            <li>The amount page's worked examples, and the official estimator, were still using July 2025 to June 2026 data when reviewed in September 2026. Do not budget the new year from those examples.</li>
        </ul>
    </div>

    <h2>Who qualifies?</h2>

    <p>Service Canada administers the benefit. Canada.ca and the regulations summary line up on the tests. You are between 18 and 64. You have been approved for the Disability Tax Credit. You filed a return for the previous tax year. For payments from July 2026 to June 2027, that is the 2025 return, and your spouse or common-law partner must have filed too. You are a resident of Canada for income-tax purposes. You are a Canadian citizen, a permanent resident, a protected person, a temporary resident who has lived in Canada for the past 18 months, or a person registered or entitled to be registered under the Indian Act.</p>

    <p>Applications are open. You are paid the month after approval, on the third Thursday. The 2026 dates, including October 15, November 19, and December 17, are the <a href="/blog/canada-benefit-payment-dates/">payment calendar</a>. If the yearly amount for the July-to-June period is $240 or less, you get one lump sum instead of monthly payments. Service Canada reviews the file every year. You do not reapply, but you have to keep the credit and keep filing. The program page tells current clients to file by April 30 so the 2026-27 review does not interrupt payments. A letter in June confirms whether payments continue and at what amount.</p>

    <h2>How does the Disability Tax Credit open the door?</h2>

    <p>The credit is Form T2201. A doctor or other accepted practitioner certifies a severe and prolonged impairment. CRA approves or refuses. The Canada Disability Benefit does not run its own medical test. It asks whether that approval exists. People who receive CPP disability, Quebec disability, workers' compensation, or private long-term disability are not thereby approved for the credit. CRA says those programs have other purposes. The practical sequence is the certificate first, then the benefit application, not the other way around.</p>

    <p>CRA also uses "CDB" for a different payment: the child disability benefit, which is added to the Canada Child Benefit for a child under 18 who has the credit. For July 2026 to June 2027 that child amount is up to $3,480 a year, or $290 a month, and it starts to fall when adjusted family net income is over $82,847. A working-age adult's Canada Disability Benefit and a child's supplement inside the Canada Child Benefit can both exist in one extended family. They are not the same deposit, and a letter that says CDB can mean either. Read the sender. The child amount is CRA. The working-age benefit is Service Canada.</p>

    <h2>How much is it, and why do the examples look stale?</h2>

    <p>Canada.ca's amount page, reviewed in September 2026, splits the periods cleanly and then warns you about the examples.</p>

    <table>
        <caption>Canada Disability Benefit figures published for the two payment periods</caption>
        <thead>
            <tr>
                <th>Item</th>
                <th>July 2025 to June 2026</th>
                <th>July 2026 to June 2027</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Maximum</td>
                <td>$200 a month, which the regulations summary states as $2,400 for the year</td>
                <td>$204.20 a month. The amount page states the monthly figure. It does not restate an annual maximum.</td>
            </tr>
            <tr>
                <td>Working-income exemption, single</td>
                <td>Up to $10,000</td>
                <td>Up to $10,210</td>
            </tr>
            <tr>
                <td>Working-income exemption, couple</td>
                <td>Up to $14,000 combined</td>
                <td>Up to $14,294 combined</td>
            </tr>
            <tr>
                <td>Income threshold used in the examples</td>
                <td>$23,000 single, or with a spousal filing waiver. $32,500 with a spouse or partner.</td>
                <td>Not stated as a new dollar on the examples. The regulations summary says thresholds are adjusted each July for the Consumer Price Index. The examples had not been moved to the new period.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of September 2026. The amount page says a note in plain words: amounts in the examples, and amounts from the estimator, are calculated using July 2025 to June 2026 data. Use the estimator as a first-period illustration. Use the June letter, or a fresh read of the amount page, for July 2026 to June 2027. The $150 supplemental payment is separate. It is fixed, it is not indexed, and it is meant to offset the cost of getting the Disability Tax Credit. Canada.ca says it starts in fall 2026, that you do not apply, and that someone who received a benefit payment before September 2026 can still be eligible for the supplement even if payments have since stopped. It can be paid for each approved certificate that qualifies you for a monthly payment.</p>

    <div class="example-box">
        <strong>Illustration using the first-period formula the examples still show</strong>
        <p>The amount page's single-person steps are: start with adjusted family net income, subtract working income up to $10,000, subtract $23,000, multiply the remainder by 20%, subtract that from $2,400, and divide by 12. Take a single person with $25,000 of adjusted family net income and no working income. The amount over $23,000 is $2,000. Twenty percent is $400. The annual benefit on that formula is $2,000, or $166.67 a month. That illustration is the July 2025 to June 2026 arithmetic. It is not the July 2026 to June 2027 maximum, which is $204.20 a month before any reduction. If both partners are beneficiaries, each benefit falls by 10 cents, not 20, above the couple threshold. Provincial disability programs such as ODSP or AISH can treat this income differently from the federal test. That interaction is <a href="/blog/provincial-benefits-programs-canada/">provincial benefits</a>, and it is not safe to assume the new federal amount is invisible to them.</p>
    </div>

    <h2>What should you do before you apply?</h2>

    <p>Confirm the credit is approved, not merely that a form was mailed. File the 2025 return, and your spouse's. Then apply. If the credit is in progress, the benefit cannot get ahead of it. The $150 supplement is a reason to finish a legitimate certificate. It is not a reason to pay a promoter a large contingency fee for a form you can file yourself. The credit guide covers the certification standard. A private disability policy is a contract with its own definition of disability, and it may offset other income. Read the booklet before you assume the federal $204.20 stacks on top of a monthly LTD cheque in full.</p>

    <h2>Frequently asked questions</h2>

    <h3>Is the Disability Tax Credit enough on its own?</h3>
    <p>It is necessary and it is not sufficient. You also have to be 18 to 64, resident, in one of the listed immigration or Indigenous status categories, and have filed the prior-year return. A child with the credit can generate the child disability benefit inside the Canada Child Benefit. That child payment is not this benefit. An adult who has the credit and who is 65 or older is outside the age window.</p>

    <h3>Will the payment arrive without an application?</h3>
    <p>No. Service Canada says you apply, and that the first payment is the third Thursday of the month after approval. Back pay can reach back as far as 24 months from the application and no earlier than June 2025. Waiting to apply gives away months the program will not restore before that floor. Filing the return is also required, every year, or the annual review can stop the payment.</p>

    <h3>Why is the estimator showing $200 a month when the page says $204.20?</h3>
    <p>Because Canada.ca says the estimator and the worked examples are still on July 2025 to June 2026 data, when the maximum was $200 a month. The indexed maximum for the new period is $204.20. Working-income exemptions moved to $10,210 and $14,294. The income thresholds are supposed to move with prices each July. The examples still subtract $23,000 and $32,500. Treat a printout from the estimator as the old period until the page says otherwise.</p>

    <h3>Is the benefit taxable, and does it reduce other income-tested benefits?</h3>
    <p>The payments page says the Canada Disability Benefit is non-taxable. That does not tell you how a province, or a private insurer, will count it. GIS, the Canada Child Benefit, and the Groceries and Essentials Benefit use their own income definitions. This page will not invent an offset. Read the other program's current guide, and read <a href="/blog/government-benefits-stacking-map-canada/">the stacking map</a>, before you spend the new amount twice.</p>

    <h3>What is the $150 payment?</h3>
    <p>It is a supplemental lump sum toward the cost of Disability Tax Credit certification or re-certification. It is $150, it is not increased for inflation, and you do not apply separately. Canada.ca places the start in fall 2026. People who were paid the benefit before September 2026 can qualify even if they are no longer in pay. It is per approved certificate that gave rise to a monthly entitlement, not a general annual bonus.</p>

    <h3>I was refused CPP disability. Can I still get this?</h3>
    <p>Yes, if CRA has approved the credit and you meet the age, residence, and filing tests. CPP disability asks whether you can work regularly at any job. The credit asks whether a severe and prolonged impairment markedly restricts daily living, or would without therapy. People fail one and pass the other in both directions. The insurance contract is a third test. Bring the credit approval to the Canada Disability Benefit application. Bring the work history to CPP.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/services/benefits/disability/canada-disability-benefit.html">Canada.ca, Canada Disability Benefit, including the June 2025 start and the filing warning</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/disability/canada-disability-benefit/amount.html">Canada.ca, how much you could receive, including the estimator warning</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/disability/canada-disability-benefit/payments.html">Canada.ca, payment rules and the third-Thursday schedule</a></li>
        <li><a href="https://www.canada.ca/en/employment-social-development/programs/disability-benefit/summary-regulations.html">ESDC, summary of the Canada Disability Benefit Regulations</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4114/canada-child-benefit.html">CRA, T4114, the child disability benefit inside the Canada Child Benefit</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/tax-credits-deductions-persons-disabilities/disability-tax-credit.html">CRA, Disability Tax Credit</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The credit is a tax form. The benefit is a payment that cannot start without it.</strong></p>
        <p>Get the T2201 right, then file. The 2026 tax guide is the return both agencies read.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),
  benefitsPost(
    'canada-carbon-rebate-ended',
    'The Canada Carbon Rebate Has Ended: What Changed and What Replaced It',
    'The federal fuel charge stopped effective April 1, 2025. The last quarterly Canada Carbon Rebate for individuals was the April 2025 payment. No household rebate replaced it.',
    `<div class="container">

    <div class="hook">
        The Canada Carbon Rebate for individuals has ended. On March 15, 2025, the Government of Canada stopped the federal fuel charge, effective April 1, 2025. The final quarterly rebate was the April 2025 payment, starting April 22. <span class="highlight">There is no 2026 carbon-rebate date, and no household payment replaced it.</span> A late-filed 2021, 2022, 2023, or 2024 return can still produce the payment for that base year after assessment.
    </div>

    <p>People still search the old deposit because it used to arrive with other CRA credits. It is not the Canada Groceries and Essentials Benefit, which replaced the GST/HST credit in July 2026 and is a different statute. That benefit is <a href="/blog/gst-hst-credit-groceries-essentials-benefit/">amounts and eligibility</a>. This page sits under the <a href="/blog/canada-government-benefits-guide/">government benefits guide</a>. The calendar that no longer has a carbon line is <a href="/blog/canada-benefit-payment-dates/">2026 payment dates</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>CRA's page is titled as closed. It says there will be no further quarterly payments after the April 2025 payment.</li>
            <li>The April 2025 base amounts were set by province. A family of four received $298 in Newfoundland and Labrador and $456 in Alberta, before any rural supplement.</li>
            <li>A 20% rural supplement applied on top of the base, except in Prince Edward Island, where the rural supplement was already inside the basic amount.</li>
            <li>The rebate was tax-free. The bank description may still say Canada Carbon Rebate, or the older Climate Action Incentive, depending on the institution.</li>
            <li>The Canada Carbon Rebate for Small Businesses has a final payment for the 2024-25 fuel-charge year. Legislation passed on March 26, 2026 made that business rebate non-taxable for all fuel-charge years.</li>
        </ul>
    </div>

    <h2>What exactly stopped?</h2>

    <p>The Department of Finance said the consumer carbon price was removed effective April 1, 2025. CRA says that on March 15, 2025 the government stopped the federal fuel charge and the Canada Carbon Rebate for individuals. The rebate had been the way proceeds of that fuel charge were returned to residents of provinces where the federal charge applied. It was formerly the climate action incentive payment. It had a basic amount and a supplement for small and rural communities. With the charge gone, the proceeds to return on a quarterly cycle are gone too.</p>

    <p>Nothing on the CRA page or the Finance announcement names a successor household credit. If a 2026 deposit is missing, it is not a delayed carbon payment. The benefits that still pay on a schedule are the <a href="/blog/canada-child-benefit-optimization-canada/">Canada Child Benefit</a>, the Groceries and Essentials Benefit, CPP, OAS, and the Canada Disability Benefit. Mixing those up is how people phone CRA about the wrong program.</p>

    <h2>What did the final payment pay, by province?</h2>

    <p>Finance published the April 2025 amounts specified by the Minister of Finance. These are base amounts, before the rural top-up. The table does not list British Columbia or Quebec. Those provinces were outside the federal fuel-charge system this rebate was returning. This page does not describe a provincial carbon price those provinces may still run. It only says they are absent from the federal April 2025 table.</p>

    <table>
        <caption>April 2025 Canada Carbon Rebate base amounts, from the Department of Finance</caption>
        <thead>
            <tr>
                <th>Province</th>
                <th>First adult</th>
                <th>Second adult</th>
                <th>Each child</th>
                <th>Family of four</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Newfoundland and Labrador</td><td>$149</td><td>$74.50</td><td>$37.25</td><td>$298</td></tr>
            <tr><td>Prince Edward Island</td><td>$110</td><td>$55</td><td>$27.50</td><td>$220</td></tr>
            <tr><td>Nova Scotia</td><td>$110</td><td>$55</td><td>$27.50</td><td>$220</td></tr>
            <tr><td>New Brunswick</td><td>$165</td><td>$82.50</td><td>$41.25</td><td>$330</td></tr>
            <tr><td>Ontario</td><td>$151</td><td>$75.50</td><td>$37.75</td><td>$302</td></tr>
            <tr><td>Manitoba</td><td>$150</td><td>$75</td><td>$37.50</td><td>$300</td></tr>
            <tr><td>Saskatchewan</td><td>$206</td><td>$103</td><td>$51.50</td><td>$412</td></tr>
            <tr><td>Alberta</td><td>$228</td><td>$114</td><td>$57</td><td>$456</td></tr>
        </tbody>
    </table>

    <p>Table as of the March 2025 Finance announcement, which remains the specification of the final payment. Finance said a family of four would receive up to $456 under the base rebate, which is the Alberta row. The rural supplement is 20% of the base for residents of small and rural communities. On the Alberta family-of-four base, 20% is $91.20, and the illustrated total is $547.20. That last product is arithmetic on Finance's base and Finance's 20% rate. Prince Edward Island residents did not claim a separate rural box, because the supplement was already in the basic amount. The rural box, where it existed, was a tick on page 2 of the return.</p>

    <div class="example-box">
        <strong>Illustration: an Ontario family of four, base amount only</strong>
        <p>Finance's row is $151 for the first adult, $75.50 for the second, and $37.75 for each of two children. Added, that is $302, which is the family-of-four cell. A rural 20% supplement on $302 is $60.40, for an illustrated $362.40. The person who filed first received the household amount, including the children, if the couple had a spouse or common-law partner. Direct deposit followed the tax refund. A cheque was the fallback. This was the closing payment, not a quarterly amount to multiply by four for 2026.</p>
    </div>

    <h2>Who can still receive a payment after April 2025?</h2>

    <p>CRA's payment-timing page is explicit. If you were eligible for April 2025 and you filed the 2024 return electronically after April 2, 2025, you receive the final payment once that return is assessed. If you were eligible for an earlier base year and you still have not filed 2024, 2023, 2022, or 2021, you receive the payment for the applicable base year once that return is assessed. Residents did not apply. They filed. The rural supplement for New Brunswick's 2022 base year is claimed on the 2023 return, and a retroactive payment can still be issued for that base year. There is no new quarter hiding behind a late filing. There is only the year you were eligible for and have not yet been assessed on.</p>

    <p>If you were registered for direct deposit, the payment shows up under a description the bank controls. CRA says to look for Canada Carbon Rebate, and that some institutions still show Climate Action Incentive. Wording varies. A missing label is not proof the program restarted.</p>

    <h2>What about the small-business rebate?</h2>

    <p>The Canada Carbon Rebate for Small Businesses is a refundable credit for eligible Canadian-controlled private corporations, returning a portion of fuel-charge proceeds from 2019-20 through 2024-25. You do not apply. CRA says the return of proceeds for the 2024-25 fuel-charge year is the final payment, because the fuel charge ceased. On March 26, 2026, legislation passed that makes the small-business rebate non-taxable for all fuel-charge years. That is a tax-status change for amounts already in the corporate system. It is not a new consumer credit, and it is not paid to an individual who is not claiming it through an eligible corporation. The corporate page is the place to see whether an amendment is required. This article will not invent a corporate dollar amount.</p>

    <h2>What should you stop waiting for?</h2>

    <p>Stop waiting for a quarterly carbon deposit in 2026. File an old return if a past year was never assessed and you lived in a listed province. Do not confuse the June 5, 2026 GST/HST credit top-up, or the July 2026 groceries benefit, with a revived rebate. Those payments have their own names in My Account. Provincial energy and sales-tax credits, including the Ontario Trillium Benefit, also continued on their own calendars. They are not a carbon replacement either. The map of what still pays, and from which return, is the <a href="/blog/government-benefits-stacking-map-canada/">stacking map</a> plus the <a href="/blog/provincial-benefits-programs-canada/">provincial programs guide</a>.</p>

    <h2>Frequently asked questions</h2>

    <h3>Did a new benefit replace the carbon rebate?</h3>
    <p>Not on the pages that closed it. Finance removed the consumer fuel charge. CRA closed the individual rebate after April 2025. The Canada Groceries and Essentials Benefit is the renamed and increased GST/HST credit. It is aimed at low and modest incomes, it uses adjusted family net income, and it is paid in every province under the same federal rules. It is not calculated from the old carbon table, and it is not limited to the eight provinces in that table.</p>

    <h3>I did not file 2024 yet. Can I still get the April 2025 payment?</h3>
    <p>CRA says yes, if you were eligible, once the 2024 return is assessed. The same is true for an unfiled 2023, 2022, or 2021 return and the base year that return supports. File. There is no separate carbon application. Direct deposit, if it is set up for the refund, is how the catch-up arrives. This does not create a 2026 quarter.</p>

    <h3>Why was my amount different from my sibling's in another province?</h3>
    <p>The April 2025 base amounts were provincial, because the federal fuel charge and its proceeds differed by province. Alberta's family-of-four base was $456. Ontario's was $302. Prince Edward Island's $220 already included the rural supplement. A rural tick added 20% elsewhere. A couple's payment went to the spouse who filed first. Comparing net deposits without those facts is not a comparison.</p>

    <h3>I live in British Columbia or Quebec. Why is there no row?</h3>
    <p>Finance's April 2025 table lists Newfoundland and Labrador, Prince Edward Island, Nova Scotia, New Brunswick, Ontario, Manitoba, Saskatchewan, and Alberta. British Columbia and Quebec are not on it. The federal rebate returned proceeds of the federal fuel charge, and those two provinces were not in that system. This page does not state what, if anything, those provinces pay under their own carbon rules. Read the provincial page for that question.</p>

    <h3>Is the small-business credit the same cheque?</h3>
    <p>No. It is a corporate refundable credit for eligible Canadian-controlled private corporations. The final fuel-charge year is 2024-25. Legislation passed on March 26, 2026 made it non-taxable for every fuel-charge year. An unincorporated household does not receive it. A corporation that already included it in income should read CRA's tax-treatment page before amending.</p>

    <h3>Will the rebate come back if the carbon price comes back?</h3>
    <p>This page will not predict legislation. As of September 2026, CRA's individual page is closed, the quarterly schedule has no 2026 date, and Finance's announcement of the removal stands as the reason. If a future government reopened a consumer price and a rebate, the payment would be a new specification. Until that page exists, a budget rumour is not a deposit.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-carbon-rebate.html">CRA, closed page, Canada Carbon Rebate for individuals</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-carbon-rebate/when-expect-payments.html">CRA, payment timing, including late filers</a></li>
        <li><a href="https://www.canada.ca/en/department-finance/news/2025/03/removing-the-consumer-carbon-price-effective-april-1-2025.html">Department of Finance, removal of the consumer carbon price and the April 2025 amounts</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-carbon-rebate/how-get-payments.html">CRA, payments for years not yet filed</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/corporations/business-tax-credits/canada-carbon-rebate-small-businesses.html">CRA, Canada Carbon Rebate for Small Businesses, including the March 26, 2026 tax-status change</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/calendar.html">Canada.ca benefits calendar, where the rebate is marked closed</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>A closed rebate is a filing question only if an old year is still open.</strong></p>
        <p>Assess the missing return. Leave 2026 off the carbon list. The 2026 tax guide is the return, not a new credit.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer(published)}

</div>`
  ),
];
