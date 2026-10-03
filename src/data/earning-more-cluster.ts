type EarningPost = {
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
};

const meta = {
  category: 'Earning More',
  categorySlug: 'earning-more',
  author: 'Andrew',
  date: '2026-10-03',
  updated: '2026-10-03',
} as const;

function earningPost(
  slug: string,
  title: string,
  excerpt: string,
  content: string
): EarningPost {
  return {
    ...meta,
    title,
    slug,
    excerpt,
    image: `/images/blog/${slug}.png`,
    content,
  };
}

const published = 'October 3, 2026';

const footer = `<div class="article-footer">
        <p><strong>Disclaimer:</strong> This is general education about Canadian employment income, self-employment, and payroll as of October 2026. It is not tax, legal, or employment advice, and it is not a filing position. Brackets, personal amounts, GST/HST rates, and contribution ceilings change. Dollar examples are arithmetic on figures taken from CRA, Revenu Québec, or the Department of Finance pages cited below. They are not your paycheque and not your notice of assessment. Confirm the current form, your province of residence on December 31, and your CRA account before you file or move money.</p>
        <div class="footer-note">Published: ${published} | Category: Earning More | Author: Andrew</div>
    </div>`;

export const earningMoreClusterPosts: EarningPost[] = [
  earningPost(
    'tax-aware-income-guide',
    'Tax-Aware Income Guide: Salary, Bonus, Equity, and Side Income',
    'In 2026 a raise, a bonus, a contract, and a dividend are four different tax objects. The federal rate on the first $58,523 of taxable income is 14%. The next dollar is not taxed at your whole income.',
    `<div class="container">

    <div class="hook">
        Income in Canada is taxed by <span class="highlight">what it is</span>, not by the headline on the offer. Salary, a bonus, a retiring allowance, self-employment, and a dividend from your own company are different lines, different slips, and often a different year of RRSP room. In 2026 the federal rate on taxable income up to $58,523 is 14%, and 20.5% only on the slice from there to $117,045.
    </div>

    <p>This is the hub for earning more without pretending the cheque is the raise. Take-home by province, on a basic-personal-amount worksheet, is <a href="/blog/salary-after-tax-by-province-canada/">salary after tax by province</a>. A bonus that looks over-withheld is <a href="/blog/bonus-tax-canada/">bonus tax</a>. A lump sum when the job ends is <a href="/blog/severance-pay-tax-canada/">severance and retiring allowances</a>. A contract that is not a T4 is <a href="/blog/side-hustle-taxes-canada/">side-hustle tax</a>, and the status fight underneath it is <a href="/blog/employee-vs-contractor-canada/">employee versus contractor</a>. App driving has its own GST rule: <a href="/blog/rideshare-delivery-driver-taxes-canada/">rideshare and delivery</a>. A US payer, while you live here, is <a href="/blog/remote-work-us-company-from-canada/">working remotely for a US company</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Federal tax in 2026 is 14% up to $58,523, 20.5% to $117,045, 26% to $181,440, 29% to $258,482, and 33% above that. Each rate applies only to its slice.</li>
            <li>The 2026 RRSP dollar limit is $33,810. The eligible part of a pre-1996 retiring allowance can move to your own RRSP without using that room.</li>
            <li>Most small suppliers register for GST/HST after $30,000 of taxable supplies. A self-employed rideshare driver registers from the first fare.</li>
            <li>Employee CPP in 2026 is 5.95% up to the $74,600 ceiling, plus 4% between $74,600 and $85,000. A self-employed person pays both shares.</li>
            <li>A label on a contract does not decide employee versus contractor. CRA looks at control, tools, risk, and the chance of profit.</li>
        </ul>
    </div>

    <h2>Which slip does this dollar land on?</h2>

    <p>Write the legal form before you write the rate. The brackets that turn a salary into tax are <a href="/blog/federal-tax-brackets/">federal</a> and <a href="/blog/provincial-tax-rates/">provincial</a>. The interactive version of the basic-personal-amount math is the <a href="/blog/canada-income-tax-calculator/">2026 income tax calculator</a>. It is not a paycheque. CPP, EI, and the Ontario health premium are outside it.</p>

    <table>
        <caption>How a new dollar is taxed, as of October 2026. Rates below are the character of the income, not a combined provincial quote.</caption>
        <thead>
            <tr>
                <th>What you received</th>
                <th>Usual slip</th>
                <th>What to read next</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Salary or hourly pay</td>
                <td>T4. Tax, CPP, and EI are withheld.</td>
                <td><a href="/blog/salary-after-tax-by-province-canada/">Province table</a> and <a href="/blog/raise-promotion-negotiation-math-canada/">raise math</a></td>
            </tr>
            <tr>
                <td>Bonus or irregular amount</td>
                <td>T4, in the year you receive it. CPP and EI still apply.</td>
                <td><a href="/blog/bonus-tax-canada/">Why the withholding looks high</a></td>
            </tr>
            <tr>
                <td>Retiring allowance (severance, some damages, unused sick leave)</td>
                <td>Often a T4A. No CPP and no EI on a retiring allowance.</td>
                <td><a href="/blog/severance-pay-tax-canada/">Withholding bands and the pre-1996 RRSP transfer</a></td>
            </tr>
            <tr>
                <td>RSUs or employee stock options</td>
                <td>Usually employment income, with a separate capital-gain question if you hold the shares after.</td>
                <td><a href="/blog/rsu-stock-options-tax-canada/">Equity compensation</a></td>
            </tr>
            <tr>
                <td>Self-employment, freelance, gig</td>
                <td>T2125 on the T1. You remit CPP on both shares. GST/HST is a second system.</td>
                <td><a href="/blog/side-hustle-taxes-canada/">Side hustles</a> and <a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">pricing a consulting rate</a></td>
            </tr>
            <tr>
                <td>Salary versus dividends from your corporation</td>
                <td>T4, T5, or both. Dividends do not create RRSP room.</td>
                <td><a href="/blog/salary-vs-dividends-incorporated-canada/">Salary versus dividends</a> and <a href="/blog/should-you-incorporate/">when incorporation pays</a></td>
            </tr>
        </tbody>
    </table>

    <p>Table as of October 2026. It is a map of slips, not a ranking of which form "saves tax."</p>

    <h2>Why does the same gross pay a different amount in each province?</h2>

    <p>You pay federal tax wherever you live, and provincial or territorial tax based on where you reside on December 31. Quebec also reduces basic federal tax by the 16.5% abatement in CRA's 2026 payroll formulas, then charges its own tax. A move is a December 31 fact, not the province on the job posting. The housing and tax gap of an actual move is <a href="/blog/geographic-arbitrage-canada/">geographic arbitrage</a>. The salary worksheet, with the assumptions written on it, is the province article.</p>

    <h2>What does a side income do to benefits?</h2>

    <p>Net self-employment income is income. It can raise the tax bill, create or use RRSP room in a later year, and change income-tested benefits. Clawbacks are not a reason to hide the income. They are a reason to know the stacking before you scale the hustle. The benefit map is <a href="/blog/side-income-benefits-tax-clawbacks-canada/">side income and clawbacks</a>. Instalments, when last year's tax was high enough that CRA asks for them, are <a href="/blog/quarterly-tax-instalments/">quarterly instalments</a>.</p>

    <div class="warning-box">
        <strong>A platform payout is not "already taxed" because an app took a fee:</strong>
        <p>Uber, DoorDash, Etsy, and the rest may withhold their commission. That commission is not Canadian income tax. Part XX of the Income Tax Act requires many platform operators to report seller activity to CRA. You still report the income. The rideshare exception on GST/HST is in the driver article. Ordinary side income uses the $30,000 small-supplier tests.</p>
    </div>

    <h2>Where do equity, a holdco, and a career switch sit?</h2>

    <p>A vesting RSU is usually employment income in the year it lands, even if you cannot sell every share that day. Read the equity guide before you budget the vest. A holding company does not make salary disappear. It changes which taxpayer holds the investment. The structure is <a href="/blog/holding-company-income-streams-canada/">holding-company income</a>. A multi-year switch, tuition against lost wages, is <a href="/blog/career-switch-after-tax-lifetime-earnings-canada/">career-switch math</a>. None of those pages replace the bracket on this year's T4.</p>

    <div class="tip-box">
        <strong>RRSP room follows earned income. It does not follow a dividend.</strong>
        <p>The 2026 RRSP dollar limit is $33,810. Your own room is also capped by a percentage of the prior year's earned income, and by a pension adjustment if a plan exists. Confirm the percentage and the room in your CRA account. The account mechanics are the <a href="/blog/rrsp-playbook/">RRSP playbook</a> and the <a href="/blog/contribution-limits/">limits table</a>. A bonus you route into an RRSP only helps if the contribution is deductible. A pre-1996 retiring-allowance transfer is the exception that does not need room. That exception is the severance article, not a trick for a 2026 bonus.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>Does a raise get taxed entirely at the next bracket?</h3>
    <p>No. Canada taxes slices. In 2026, taxable income up to $58,523 is in the 14% federal band. Only the dollars above $58,523, and only up to $117,045, are in the 20.5% band. Your province adds its own slices. The salary article shows the basic-personal-amount result. The calculator is the same method with your number typed in.</p>

    <h3>Should side income go in a corporation first?</h3>
    <p>Not because an app paid you. Incorporation has a cost, a separate tax return, and a salary-versus-dividend decision. The existing guides on incorporation and on salary versus dividends are the test. A sole proprietor files a T2125. Start there until the dollars justify a second taxpayer.</p>

    <h3>Is a bonus taxed at a special high rate?</h3>
    <p>The paycheque often withholds as if the bonus were stacked on your annual pay. That withholding is not a special bonus tax. When you file, the bonus is employment income in the year you received it. If too much was withheld, the return is where it comes back. The method is the bonus article.</p>

    <h3>Do I register for GST/HST at the first dollar?</h3>
    <p>Most businesses do not. The small-supplier threshold is $30,000 of worldwide taxable supplies, in one calendar quarter or across four consecutive calendar quarters, counting associates. Self-employed taxi and commercial rideshare drivers are the clear exception: they register even under that line. Delivery work is not that exception.</p>

    <h3>What if the payer is in the United States?</h3>
    <p>Living in Canada and working from Canada usually means Canadian tax on that income, whether the payer is American. The open questions are employee versus contractor, who remits CPP, and whether US tax was also withheld. Those are the remote-work article. Do not assume a US W-2 replaced a Canadian return.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html">CRA: tax rates and income brackets</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html">CRA: RRSP dollar limit, YMPE, and YAMPE</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/when-register-charge.html">CRA: when to register for GST/HST</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/payroll/t4127-payroll-deductions-formulas/t4127-jan/t4127-jan-payroll-deductions-formulas-computer-programs.html">CRA: T4127 payroll formulas, 122nd edition, January 2026</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The slip decides the plan.</strong></p>
        <p>Brackets, credits, and the order of RRSP, TFSA, and FHSA room are the other half of a raise. The 2026 tax guide is that half.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),

  earningPost(
    'side-hustle-taxes-canada',
    'Side Hustle Taxes in Canada: T2125, GST/HST Registration, and Platform Reporting',
    'A side hustle is business income. Most people register for GST/HST only after $30,000 of taxable supplies. You still report the income below that line, on Form T2125.',
    `<div class="container">

    <div class="hook">
        Side-hustle income is taxable whether or not a platform issued a slip. Report business income on <span class="highlight">Form T2125</span>. Register for GST/HST when taxable supplies cross $30,000 in a single calendar quarter, or across four consecutive calendar quarters. Under that line you are generally a small supplier and registration is optional. Commercial rideshare is the exception, covered in the <a href="/blog/rideshare-delivery-driver-taxes-canada/">driver article</a>.
    </div>

    <p>The map this sits on is the <a href="/blog/tax-aware-income-guide/">tax-aware income guide</a>. Whether the payer is allowed to call you a contractor is <a href="/blog/employee-vs-contractor-canada/">employee versus contractor</a>. Pricing the work after CPP is <a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">the consulting-rate page</a>. The longer self-employed return is the <a href="/blog/self-employed-tax-guide/">self-employed tax guide</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Business and professional income goes on Form T2125. A short-term rental is often rental income, not a T2125, unless you are also providing services.</li>
            <li>The $30,000 small-supplier threshold counts worldwide taxable supplies of you and your associates. It excludes goodwill, financial services, and sales of capital property.</li>
            <li>Cross it inside one calendar quarter and you charge GST/HST on the supply that put you over, and you register within 29 days.</li>
            <li>Cross it over four quarters, but not inside one quarter, and you generally stop being a small supplier at the end of the following month.</li>
            <li>Part XX requires many platform operators to report seller information to CRA. Their report does not replace your return.</li>
        </ul>
    </div>

    <h2>Where does the income go on the return?</h2>

    <p>CRA's sharing-economy page treats commercial ridesharing and many service gigs as self-employment. You report that income, and the expenses that belong to it, on Form T2125, Statement of Business or Professional Activities. If the business is incorporated, the corporation files a T2. A sole prop does not get a corporate return just because the app has a company name.</p>

    <p>Accommodation sharing is the split to get right. CRA says rental income from a short-term rental is generally reported as rental income. If you also provide services, that service portion is self-employment and goes on the T2125. Do not put the whole booking on a T2125 because the payout arrived through an app, and do not leave the service portion off because the rest was rent.</p>

    <h2>When do you have to register for GST/HST?</h2>

    <p>CRA's registration page, reviewed for this article in October 2026, uses $30,000 as the small-supplier threshold for most businesses. You are a small supplier if you do not go over $30,000 in any single calendar quarter and you do not go over $30,000 across the last four consecutive calendar quarters. Calendar quarters are January to March, April to June, July to September, and October to December. The total includes associates who were associated at the start of the quarter. It is worldwide taxable supplies, before expenses. Zero-rated supplies count toward the threshold even though the tax rate on them is zero. Goodwill, financial services, and sales of capital property are left out.</p>

    <table>
        <caption>Small-supplier tests for most businesses, as of October 2026. Rideshare drivers do not use this table.</caption>
        <thead>
            <tr>
                <th>What happened</th>
                <th>Status</th>
                <th>What CRA says to do</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Taxable supplies stay at or under $30,000 in every quarter and across four consecutive quarters</td>
                <td>Small supplier</td>
                <td>Registration is not required. You may register voluntarily. You do not charge GST/HST unless you register.</td>
            </tr>
            <tr>
                <td>You go over $30,000 inside one calendar quarter</td>
                <td>No longer a small supplier on that supply</td>
                <td>Charge GST/HST on the supply that put you over. Effective date is no later than that day. Register within 29 days.</td>
            </tr>
            <tr>
                <td>You go over $30,000 across four (or fewer) consecutive quarters, but not inside one quarter</td>
                <td>Small supplier until the end of the next month</td>
                <td>Effective registration is no later than the first supply after you stop being a small supplier. Register within 29 days of that date.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of October 2026. Source: CRA, "When to register for and start charging the GST/HST." Public service bodies use $50,000, not $30,000. A hobby that never had a reasonable expectation of profit is a different question from a small supplier. Do not use the threshold as a reason to skip reporting income.</p>

    <div class="example-box">
        <strong>Illustration, not a ruling: four quiet quarters</strong>
        <p>Suppose taxable supplies are $8,000 in each of four consecutive calendar quarters. No quarter exceeds $30,000. The four-quarter total is $32,000, so the four-quarter test is the one that matters. You remain a small supplier through the month after the quarter in which you crossed, and you start charging on supplies after that, unless a single later quarter blows through $30,000 on its own. Count associates. A spouse's business that is associated with yours is not a separate $30,000.</p>
    </div>

    <h2>What do platform operators report?</h2>

    <p>Part XX of the Income Tax Act is Canada's version of the OECD model rules for digital platforms. A reporting platform operator collects identification and activity information about reportable sellers and files it with CRA. The return for a calendar year is due by January 31 of the next year. The operator is also supposed to give you a copy of what it reported. CRA's page for people who only buy on platforms says the rules do not apply to buyers.</p>

    <p>If you sell or provide a relevant activity, your job under those rules is to give the operator the information it asks for. Your job under the Income Tax Act is still to report the income. An excluded-seller category exists. This article does not quote a dollar cutoff for that exclusion, because the figure belongs on CRA's "who is affected" page for the year you file, not in a paraphrase. Assume you are reportable until you have read that page against your own facts.</p>

    <h2>What else is owed below the GST line?</h2>

    <p>Income tax does not wait for GST registration. Net business income is included on the T1. You also pay Canada Pension Plan contributions on self-employment. For 2026, CRA's contribution table sets the employee-and-employer rate at 5.95% and the self-employed maximum at $8,460.90, on pensionable earnings up to the $74,600 YMPE after the $3,500 basic exemption. A second additional contribution applies between the YMPE and the $85,000 YAMPE. CRA lists the 2026 self-employed maximum for that second piece at $832. Employment insurance is not automatic for a self-employed person. Special benefits are an opt-in. This page does not quote that premium.</p>

    <p>Expenses on the T2125 have to be incurred to earn the income, and mixed costs get split. A mileage log is a log, not a round number in April. Home-office claims for a self-employed person are not the employee T2200 rules. The <a href="/blog/tax-deductions-employees/">employee deduction guide</a> is the wrong form if you are not an employee.</p>

    <div class="warning-box">
        <strong>GST you collect is not your revenue:</strong>
        <p>Once you are registered, GST/HST you charge is CRA's, minus input tax credits on business expenses that themselves carried GST/HST. Spending the tax you collected is how small accounts get into trouble. The rate depends on the place of supply. As of CRA's rate table reviewed in October 2026, HST is 13% in Ontario, 14% in Nova Scotia (from April 1, 2025), and 15% in New Brunswick, Newfoundland and Labrador, and Prince Edward Island. Elsewhere the GST rate is 5%, and provincial sales tax may be a separate system. Quebec's GST is 5%. QST is Revenu Québec's tax, not HST.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>Do I file a T2125 if I made only a small amount?</h3>
    <p>Yes, if it is business income. The $30,000 figure is a GST/HST registration test. It is not an income-tax exemption. Report the gross and the expenses. A loss is still reported. CRA's platform rules do not create a second, quieter set of books.</p>

    <h3>Does the platform's report mean I can skip the return?</h3>
    <p>No. Part XX tells CRA what the operator paid or credited. Your return is where you report income and claim expenses. If the operator's copy and your books disagree, keep the records that explain the gap: refunds, fees the platform kept, and sales that were not on that app.</p>

    <h3>Can I register for GST/HST before I hit $30,000?</h3>
    <p>Yes. CRA allows voluntary registration if you make taxable supplies in Canada. You then charge the tax and you can claim input tax credits. Voluntary registration is a choice, usually when your customers are businesses that can recover the tax, or when your own expenses carry a lot of GST/HST. It is a poor choice if your customers are consumers who will not pay 13% more.</p>

    <h3>Are associates included?</h3>
    <p>Yes. The threshold adds taxable supplies of persons associated with you at the beginning of the quarter. Two businesses you control do not get two $30,000 lines. CRA's small-supplier memorandum is the association test. Do not split a shop across family members to stay under the line.</p>

    <h3>What if I also drive for a rideshare app?</h3>
    <p>Self-employed commercial rideshare drivers register for GST/HST from the first fare, even under $30,000. If you also do delivery, and the combined taxable sales are still under $30,000, CRA's 2024 tax tip says you collect on the rideshare fares and you may choose whether to extend registration to the delivery work. Over $30,000 combined, you collect on both. The driver article is the detail.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/when-register-charge.html">CRA: when to register for and start charging the GST/HST</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4022/general-information-gst-hst-registrants.html">CRA: RC4022, general information for GST/HST registrants</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/platform-economy/sharing-economy.html">CRA: sharing economy</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/reporting-rules-digital-platforms.html">CRA: reporting rules for digital platforms (Part XX)</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/cpp-contribution-rates-maximums-exemptions.html">CRA: CPP rates and maximums</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>T2125 is a tax return, not a side project.</strong></p>
        <p>Instalments, home-office splits, and the GST account are easier before April. The 2026 tax guide is the filing map.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),

  earningPost(
    'salary-after-tax-by-province-canada',
    'Salary After Tax by Province: $50k to $250k Take-Home Pay',
    'At $100,000 of taxable income in 2026, basic-personal-amount income tax is about $20,771 in Ontario and $21,347 in Alberta. That is not the paycheque. CPP and EI come off too.',
    `<div class="container">

    <div class="hook">
        Provincial tax, not the federal bracket, is why the same salary cashes differently across Canada. On a 2026 worksheet that taxes the salary as taxable income and subtracts only the basic personal amount, <span class="highlight">$100,000</span> produces about $20,771 of income tax in Ontario and about $21,347 in Alberta. Employee CPP and EI then take about another $5,770 outside Quebec. This is not a pay stub.
    </div>

    <p>The hub is the <a href="/blog/tax-aware-income-guide/">tax-aware income guide</a>. Type a different number into the <a href="/blog/canada-income-tax-calculator/">2026 income tax calculator</a>. The bracket lists are <a href="/blog/federal-tax-brackets/">federal</a> and <a href="/blog/provincial-tax-rates/">provincial</a>. A move, as opposed to a table, is <a href="/blog/geographic-arbitrage-canada/">geographic arbitrage</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Federal tax in 2026 is 14% to $58,523, then 20.5%, 26%, 29%, and 33% above $258,482. Provinces add their own brackets.</li>
            <li>The dollars below use the basic personal amount, Ontario surtax, the Quebec abatement, and Manitoba's clawback of its basic amount. They skip the Canada employment amount, so a real T1 is a bit lower.</li>
            <li>Employee CPP outside Quebec is 5.95% up to the $74,600 YMPE, after a $3,500 exemption, plus 4% from $74,600 to $85,000. EI is 1.63% up to $68,900.</li>
            <li>Quebec uses QPP at 6.30%, a lower EI rate of 1.30%, and QPIP at 0.430% up to $103,000 of insurable earnings. Federal tax is after the 16.5% abatement.</li>
            <li>Two sources disagree on Manitoba's thresholds and on whether Prince Edward Island has a 20% band above $200,000. The table follows CRA's T4127 formulas and says so.</li>
        </ul>
    </div>

    <h2>What is in the table, and what is left out?</h2>

    <p>Each salary is treated as taxable income. There is no RRSP deduction, no spouse, no age amount, and no Canada employment amount. T4127 lists that federal employment amount at $1,501 for 2026. Claiming it would cut federal tax by 14% of $1,501. The table leaves it out so the method matches the calculator, which also leaves it out.</p>

    <p>Ontario includes the surtax in T4127: 20% of basic Ontario tax above $5,818, plus 36% of basic Ontario tax above $7,446. Quebec federal tax is reduced by the 16.5% abatement, and Quebec tax uses Revenu Québec's 2026 brackets (14% to $54,345, 19% to $108,680, 24% to $132,245, 25.75% above) and the $18,952 basic amount from Québec's 2026 parameters. At $50,000, that arithmetic lands on $8,268 of combined tax, which is the figure on Revenu Québec's 2026 estimation table.</p>

    <p>British Columbia's personal-rates page lists 5.60% on the first $50,363. T4127's January 2026 withholding table still prints 5.06% on that band. This table uses 5.60% for tax on the return, and 5.60% as the credit rate on British Columbia's $13,216 basic amount. A paycheque can still be withheld at 5.06% until the payroll table catches up. Do not treat a stub as the T1.</p>

    <table>
        <caption>Income tax on salary treated as taxable income, tax year 2026, basic personal amount only, rounded to the nearest dollar. As of October 2026. Not a paycheque.</caption>
        <thead>
            <tr>
                <th>Province or territory</th>
                <th>$50,000</th>
                <th>$75,000</th>
                <th>$100,000</th>
                <th>$150,000</th>
                <th>$200,000</th>
                <th>$250,000</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Alberta</td><td>$6,875</td><td>$13,722</td><td>$21,347</td><td>$38,410</td><td>$58,085</td><td>$79,264</td></tr>
            <tr><td>British Columbia</td><td>$6,757</td><td>$13,245</td><td>$20,295</td><td>$38,433</td><td>$59,596</td><td>$82,643</td></tr>
            <tr><td>Manitoba</td><td>$8,451</td><td>$16,209</td><td>$24,522</td><td>$45,285</td><td>$67,596</td><td>$91,370</td></tr>
            <tr><td>New Brunswick</td><td>$8,112</td><td>$16,076</td><td>$24,701</td><td>$44,670</td><td>$66,497</td><td>$90,894</td></tr>
            <tr><td>Newfoundland and Labrador</td><td>$8,382</td><td>$16,578</td><td>$25,466</td><td>$45,429</td><td>$67,750</td><td>$91,831</td></tr>
            <tr><td>Nova Scotia</td><td>$9,214</td><td>$17,746</td><td>$27,060</td><td>$47,872</td><td>$71,735</td><td>$96,882</td></tr>
            <tr><td>Northwest Territories</td><td>$6,573</td><td>$13,213</td><td>$20,488</td><td>$38,434</td><td>$58,657</td><td>$80,330</td></tr>
            <tr><td>Nunavut</td><td>$5,910</td><td>$12,057</td><td>$18,932</td><td>$35,263</td><td>$53,838</td><td>$74,236</td></tr>
            <tr><td>Ontario</td><td>$6,566</td><td>$13,265</td><td>$20,771</td><td>$40,876</td><td>$63,972</td><td>$88,572</td></tr>
            <tr><td>Prince Edward Island</td><td>$8,660</td><td>$16,886</td><td>$26,161</td><td>$47,066</td><td>$70,178</td><td>$94,325</td></tr>
            <tr><td>Quebec</td><td>$8,268</td><td>$16,618</td><td>$25,647</td><td>$47,596</td><td>$71,837</td><td>$96,943</td></tr>
            <tr><td>Saskatchewan</td><td>$7,807</td><td>$15,412</td><td>$23,662</td><td>$41,975</td><td>$62,720</td><td>$84,618</td></tr>
            <tr><td>Yukon</td><td>$6,844</td><td>$13,443</td><td>$20,818</td><td>$38,007</td><td>$57,446</td><td>$78,561</td></tr>
        </tbody>
    </table>

    <p>Table as of October 2026. Federal basic amount is $16,452, phasing down to $14,829 between $181,440 and $258,482 of income. Provincial basic amounts used here are the T4127 Table 8.2 figures: Alberta $22,769, British Columbia $13,216, Manitoba $15,780 (reduced above $200,000 by the T4127 formula, to zero at $400,000), New Brunswick $13,664, Newfoundland and Labrador $11,188, Nova Scotia $11,932, Northwest Territories $18,198, Nunavut $19,659, Ontario $12,989, Prince Edward Island $15,000, Saskatchewan $20,381. Yukon's basic amount mirrors the federal amount. The credit rate is the province's lowest bracket rate, except British Columbia at 5.60%.</p>

    <div class="warning-box">
        <strong>Three places this table can disagree with another CRA page:</strong>
        <p>Manitoba: T4127 says the basic amount and the brackets are not indexed, and it prints thresholds of $47,000 and $100,000. A retrieval of CRA's personal-rates page in October 2026 showed $47,564 and $101,200. This table uses $47,000 and $100,000. Newfoundland and Labrador: T4127 lists a basic amount of $11,188. The calculator on this site has used $15,000. This table uses $11,188. Prince Edward Island: T4127, with a May 2026 update, puts 19% on income above $142,520 and does not show a further band. A personal-rates retrieval also showed 20% above $200,000. This table does not apply 20%. Confirm the PEI line before you rely on $200,000 or $250,000.</p>
    </div>

    <h2>What do CPP and EI take off the same salary?</h2>

    <p>The tax table is not take-home pay. Employee payroll deductions, from T4127's 2026 contribution tables, are the same at a given salary for every province except Quebec. The basic CPP exemption is $3,500. Nothing in this block is the employer share.</p>

    <table>
        <caption>Employee payroll deductions on salary, 2026, rounded to the nearest dollar. Quebec is QPP, Quebec EI, and QPIP. Everyone else is CPP, CPP2, and EI.</caption>
        <thead>
            <tr>
                <th>Salary</th>
                <th>CPP and EI, outside Quebec</th>
                <th>QPP, EI, and QPIP, Quebec</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>$50,000</td>
                <td>$3,582</td>
                <td>$3,795</td>
            </tr>
            <tr>
                <td>$75,000</td>
                <td>$5,370</td>
                <td>$5,714</td>
            </tr>
            <tr>
                <td>$100,000</td>
                <td>$5,770</td>
                <td>$6,221</td>
            </tr>
            <tr>
                <td>$150,000 and $250,000</td>
                <td>$5,770</td>
                <td>$6,234</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of October 2026. Outside Quebec the $100,000 line is the $4,230.45 CPP maximum, plus $416 of CPP2, plus the $1,123.07 EI maximum. Quebec's $100,000 line uses the $4,479.30 QPP employee maximum, $416 of the second additional contribution, the $895.70 Quebec EI maximum, and QPIP at 0.430% of $100,000. At $150,000 and above, QPIP hits its $442.90 maximum because insurable earnings cap at $103,000. Rounding to the nearest dollar can put a row off by $1.</p>

    <div class="example-box">
        <strong>Illustration: Ontario, $100,000 salary</strong>
        <p>Income tax on the worksheet is $20,771. Employee CPP and EI are about $5,770. Salary minus those two is about $73,460. That figure still ignores the Ontario health premium, the Ontario tax reduction, and the Canada employment amount. It is the right order of magnitude for a single person with only the basic amount. It is the wrong number to argue with a pay stub that has a pension adjustment, a taxable benefit, or a mid-year start.</p>
    </div>

    <h2>Why is the marginal rate not the tax divided by the salary?</h2>

    <p>At $100,000 of taxable income the next federal dollar is in the 20.5% band, because $100,000 sits between $58,523 and $117,045. In Ontario the next provincial dollar is in the 9.15% band, between $53,891 and $107,785. Added, that is 29.65% before any Ontario surtax on the tax itself. The tax in the table divided by $100,000 is lower, because the first slices were taxed at 14% and 5.05%, and the basic amounts wiped tax out on a bottom slice. Use the marginal rate for a raise or an RRSP deduction. Use the table for the bill on the whole salary. A bonus is the <a href="/blog/bonus-tax-canada/">withholding problem</a>, not a new bracket.</p>

    <h2>Frequently asked questions</h2>

    <h3>Why doesn't this match my pay stub?</h3>
    <p>The stub withholds tax from tables that use your TD1 claim code, the pay period, and sometimes a bonus method. It also withholds CPP and EI. This page computes tax once, on the whole salary, with only the basic personal amount. A person who started in June, pays union dues, or has a taxable benefit will not hit these cells. The calculator is the same simplified method.</p>

    <h3>Which figure should I use for Manitoba or Prince Edward Island?</h3>
    <p>Use the table as T4127 arithmetic, then open CRA's current-year rates page before you file. Manitoba's indexed-looking thresholds ($47,564 and $101,200) showed up on one retrieval and not in T4127. Prince Edward Island's 20% band above $200,000 showed up on one retrieval and not in T4127. If those pages have been revised since October 2026, the page wins.</p>

    <h3>Does Quebec really pay less federal tax?</h3>
    <p>Basic federal tax is reduced by 16.5% for Quebec residents. That is the abatement in T4127. Quebec then charges its own tax, plus QPP, QPIP, and a lower EI rate. The combined result is in the Quebec row. Do not subtract 16.5% yourself and also use a non-Quebec federal column.</p>

    <h3>Where is the Ontario health premium?</h3>
    <p>Not in this table. It is a separate Ontario charge based on taxable income, and this worksheet does not apply it. Do not add a guessed premium. Look up the current Ontario health premium brackets on the provincial form before you treat the Ontario "left over" figure as cash.</p>

    <h3>Will an RRSP change the table?</h3>
    <p>A deductible RRSP contribution lowers taxable income. The table assumes zero. The 2026 dollar limit is $33,810, and your room can be lower. Run the lower taxable income through the calculator. Room rules are the <a href="/blog/contribution-limits/">limits guide</a>.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/payroll/t4127-payroll-deductions-formulas/t4127-jan/t4127-jan-payroll-deductions-formulas-computer-programs.html">CRA: T4127, 122nd edition, effective January 1, 2026</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html">CRA: federal and provincial rates index</a></li>
        <li><a href="https://www.revenuquebec.ca/fr/citoyens/declaration-de-revenus/produire-votre-declaration-de-revenus/taux-dimposition/">Revenu Québec: 2026 income tax rates</a></li>
        <li><a href="https://www.finances.gouv.qc.ca/Budget_et_mise_a_jour/maj/documents/AUTFR_RegimeImpot2026.pdf">Québec finance: 2026 personal income tax parameters</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/cpp-contribution-rates-maximums-exemptions.html">CRA: CPP contribution rates and maximums</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The table is a worksheet. The return has credits.</strong></p>
        <p>Employment amount, medical expenses, and donations move the bill. The 2026 tax guide is the credit list this table refused to invent.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),

  earningPost(
    'rideshare-delivery-driver-taxes-canada',
    'Uber, DoorDash, and Instacart Driver Taxes in Canada',
    'Self-employed rideshare drivers register for GST/HST from the first fare. Delivery drivers use the $30,000 small-supplier test. Both still report income on Form T2125.',
    `<div class="container">

    <div class="hook">
        A self-employed Uber, Lyft, or other commercial rideshare driver in Canada <span class="highlight">registers for GST/HST from the first fare</span>, even under $30,000. A delivery-only driver for DoorDash, Skip, or Instacart uses the ordinary small-supplier test and registers when taxable supplies pass $30,000. Either way, the profit is business income on Form T2125. The app's service fee is not income tax.
    </div>

    <p>This spoke hangs off the <a href="/blog/tax-aware-income-guide/">tax-aware income guide</a>. The $30,000 tests, in full, are <a href="/blog/side-hustle-taxes-canada/">side-hustle taxes</a>. If the platform calls you a contractor and sets your hours like an employer, read <a href="/blog/employee-vs-contractor-canada/">employee versus contractor</a> before you file a T2125. Benefit clawbacks from the extra income are <a href="/blog/side-income-benefits-tax-clawbacks-canada/">side income and clawbacks</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Since July 1, 2017, self-employed commercial rideshare drivers register, charge, report, and remit GST/HST regardless of the small-supplier threshold.</li>
            <li>Delivery services stay on the $30,000 test. Combined rideshare-plus-delivery sales under $30,000: collect on the rides, and you may choose to extend registration to delivery.</li>
            <li>GST/HST on a taxi or rideshare fare is usually included in the fare. You back the tax out. You do not add it on top of a fare that already contains it.</li>
            <li>Place of supply sets the rate: 13% HST in Ontario, 14% in Nova Scotia, 15% in New Brunswick, Newfoundland and Labrador, and Prince Edward Island, and 5% GST in the other provinces and territories.</li>
            <li>Self-employed CPP in 2026 maxes at $8,460.90, plus up to $832 of the second additional contribution. EI is not withheld for you.</li>
        </ul>
    </div>

    <h2>Do you register before you have earned $30,000?</h2>

    <p>CRA's registration page treats a self-employed driver who supplies taxable commercial ride-sharing as a taxi business. You register even if you are a small supplier. The effective date is the day you start supplying taxable passenger transportation. CRA's information sheet GI-196 says that rule has applied since July 1, 2017. If you own the car, lease it for a flat fee, or lease it for a percentage of fares, CRA's page says you are usually self-employed. An employee of a taxi company is a different relationship. If you are unsure, ask for a ruling on Form CPT1.</p>

    <p>Delivery is not that deeming rule. CRA's revised tax tip on ridesharing and delivery says a delivery driver registers when sales exceed the small-supplier threshold. Input tax credits are available to registrants on GST/HST paid for the delivery business. The ordinary tests, including the 29-day registration window, are the side-hustle article.</p>

    <table>
        <caption>GST/HST registration, rideshare versus delivery, as of October 2026. Income tax is owed in both columns from the first dollar of profit.</caption>
        <thead>
            <tr>
                <th>Work</th>
                <th>GST/HST registration</th>
                <th>Income tax</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Commercial rideshare only</td>
                <td>Mandatory from the first fare, even under $30,000</td>
                <td>Form T2125</td>
            </tr>
            <tr>
                <td>Delivery only</td>
                <td>When taxable supplies cross $30,000, on the usual small-supplier tests</td>
                <td>Form T2125</td>
            </tr>
            <tr>
                <td>Both, and combined taxable sales are still under $30,000</td>
                <td>Collect on rideshare. You may extend registration to the other activity.</td>
                <td>Form T2125 for the business income</td>
            </tr>
            <tr>
                <td>Both, and combined taxable sales exceed $30,000</td>
                <td>Collect on rideshare and on the other taxable sales</td>
                <td>Form T2125</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of October 2026. Source: CRA tax tip on ridesharing and delivery services, and CRA's taxi and ride-sharing page. "Combined" means your taxable sales, not one app's dashboard.</p>

    <h2>Which rate is inside the fare?</h2>

    <p>For a passenger transportation service supplied by a taxi operator or a commercial rideshare driver, CRA says the GST/HST is usually already included in the fare. You calculate the tax included in the amount you received. You do not add 13% on top of a fare the rider already paid as an all-in price. Delivery charges follow the place-of-supply rules once you are registered. The rate is the province where the supply is made.</p>

    <table>
        <caption>GST/HST rates by place of supply, as of October 2026. Provincial sales tax, where it exists, is a separate tax.</caption>
        <thead>
            <tr>
                <th>Place of supply</th>
                <th>GST/HST</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Ontario</td><td>13% HST</td></tr>
            <tr><td>Nova Scotia</td><td>14% HST (from April 1, 2025)</td></tr>
            <tr><td>New Brunswick, Newfoundland and Labrador, Prince Edward Island</td><td>15% HST</td></tr>
            <tr><td>Alberta, British Columbia, Manitoba, Northwest Territories, Nunavut, Quebec, Saskatchewan, Yukon</td><td>5% GST</td></tr>
        </tbody>
    </table>

    <p>Table as of October 2026. Source: CRA, GST/HST calculator and rates, and the place-of-supply overview. Quebec charges QST on top of the 5% GST under its own rules. British Columbia, Manitoba, and Saskatchewan have provincial sales taxes that are not HST. If you drive across a border, the place of supply is not "wherever I started the car."</p>

    <div class="example-box">
        <strong>Illustration: tax included in an Ontario fare</strong>
        <p>A rider pays $33.90 all-in for a trip in Ontario, and that amount includes 13% HST. The tax-included fraction is 13/113. Tax in the fare is $33.90 × 13/113 = $3.90. The revenue before tax is $30.00. You remit the $3.90, minus allowable input tax credits, on the GST/HST return. You report the $30, not the $33.90, as the fare on the income side, and you still deal with the platform's fee as an expense or as a reduction, using the statement the app actually gives you. This is arithmetic, not your weekly deposit.</p>
    </div>

    <h2>What can you deduct, and what must you track?</h2>

    <p>CRA expects a log if you use a vehicle for business. Kilometres for paid trips, kilometres for the whole year, and the costs that belong to the car: fuel, insurance, maintenance, and the business portion of parking. A per-kilometre allowance rate is published for employees and for certain automobile allowances. This article does not quote that rate, because a self-employed driver usually claims actual expenses times the business portion, and the allowance rate is the wrong shortcut unless you have confirmed it applies to you. Keep the log during the year. Reconstructing it in April is how claims get reduced.</p>

    <p>Phone plans, hot bags, and a portion of data can be expenses to the extent they earn the income. A meal you eat because you were in the car is not automatically a business meal. The platform's commission is a cost. GST/HST you are required to remit is not a cost you get to keep.</p>

    <div class="warning-box">
        <strong>Part XX does not file your T2125:</strong>
        <p>Platform operators report seller activity to CRA. You still report gross fares, fees, and expenses. If two apps each send a statement, your books are the sum, minus anything counted twice. The reporting rules are summarized in the side-hustle article.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>I only drove on weekends. Do I still register?</h3>
    <p>If the weekend work was taxable commercial rideshare and you were self-employed, yes. CRA's threshold exception is about the kind of supply, not the number of hours. Delivery-only weekend work stays on the $30,000 test.</p>

    <h3>The app already added tax. Do I add it again?</h3>
    <p>No. If the fare includes GST/HST, you extract the included tax. Adding the rate on top would tax the rider twice and overstate your revenue. Use the app's tax summary if it shows included tax, and reconcile it to the fares. You remain responsible for what is remitted.</p>

    <h3>Can I use a quick method?</h3>
    <p>CRA says a taxi or rideshare driver calculates net tax by the regular method or the quick method. The quick method uses a set remittance rate and limits input tax credits. This page does not quote those rates. Read the current quick-method page for your reporting period before you elect it. An election is not the default.</p>

    <h3>Do I pay EI?</h3>
    <p>Not as an employee deduction. A self-employed driver is not in the regular EI program. You can apply for special benefits coverage. This page does not quote that premium. CPP is not optional: both the worker share and the employer share are yours, up to the 2026 maximums above.</p>

    <h3>What if I am actually an employee?</h3>
    <p>Then you should have a T4, and the company withholds. A contract that says "independent contractor" does not settle it. The factors are the employee-versus-contractor article. Either party can request a CPP/EI ruling on Form CPT1.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/when-register-charge.html">CRA: when to register, including taxi and ride-sharing</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/gi-196/gst-hst-commercial-ride-sharing-services.html">CRA: GI-196, commercial ride-sharing</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/news/newsroom/tax-tips/tax-tips-2024/revised-tax-obligations-for-commercial-ridesharing-and-delivery-services.html">CRA: tax tip, ridesharing and delivery</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-specific-situations/taxi-ride-sharing-drivers.html">CRA: taxi operators and commercial ride-sharing drivers</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-which-rate/calculator.html">CRA: GST/HST rates by province</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The fare includes tax you may not get to keep.</strong></p>
        <p>T2125 expenses and GST returns are the unglamorous half of app income. The 2026 tax guide is that half.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),

  earningPost(
    'bonus-tax-canada',
    'Bonus Tax in Canada: Why Your Bonus Looks Over-Taxed',
    'A bonus is employment income. CRA has employers withhold tax by comparing annual tax with the bonus to annual tax without it. The extra withholding is not a special bonus rate, and the return settles the difference.',
    `<div class="container">

    <div class="hook">
        A bonus is not taxed under a special bonus bracket. It is <span class="highlight">employment income in the year you receive it</span>. CRA tells employers to withhold by taking the tax on your annual pay including the bonus and subtracting the tax on your annual pay without that bonus. The cheque looks over-taxed because the withholding assumes the bonus sits on top of a full year of salary. Your return uses your actual income.
    </div>

    <p>The hub is the <a href="/blog/tax-aware-income-guide/">tax-aware income guide</a>. What the salary alone costs, before the bonus, is <a href="/blog/salary-after-tax-by-province-canada/">salary after tax by province</a>. Room to put part of a bonus into an RRSP is the <a href="/blog/rrsp-playbook/">RRSP playbook</a> and the <a href="/blog/contribution-limits/">limits table</a>. A lump sum that is really severance is <a href="/blog/severance-pay-tax-canada/">a retiring allowance</a>, and the withholding rules are different.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>CRA's payroll page says to report the bonus on the T4 in the year it is received, and to withhold income tax using the bonus method.</li>
            <li>CPP and EI apply to a bonus. They do not apply to a retiring allowance.</li>
            <li>T4127's 2026 formulas describe the tax as annual tax with the payment, minus annual tax without it. If that annual taxable-income result is $5,000 or less, the formula says withhold 15% federally, or 10% in Quebec.</li>
            <li>That 15% line is not "every bonus under $5,000." It is a test on the annual figure in the formula.</li>
            <li>An RRSP deduction reduces tax on the return only if you have room and you contribute. It does not automatically change the stub.</li>
        </ul>
    </div>

    <h2>Why does the percentage on the stub look higher than your average rate?</h2>

    <p>Payroll does not spread a bonus back over the year and tax it at your average rate. The bonus method, in the 122nd edition of T4127, effective January 1, 2026, taxes the bonus as the difference between two annual tax figures. One includes the bonus. One does not. The difference is withheld from the bonus. If your salary already fills the lower brackets, that difference is calculated at the brackets the extra dollars fall into. Your average rate on the whole year is lower. Both numbers can be right. They are answering different questions.</p>

    <p>CRA's plain-language page says the same thing in one sentence: calculate using the bonus or irregular-payments method, withhold CPP using that method, withhold EI, and report the payment on the T4 for the year received. A qualifying retroactive lump-sum payment can be eligible for a special calculation when the employee files. A normal annual bonus is not that special calculation.</p>

    <div class="example-box">
        <strong>Illustration, not a pay stub: Ontario salary of $90,000 and a $10,000 bonus</strong>
        <p>Using only the basic personal amount and the 2026 brackets, income tax on $90,000 is lower than income tax on $100,000 by about $3,058. That gap is 30.6% of the $10,000. It is an illustration of the difference method, on the same worksheet as the <a href="/blog/salary-after-tax-by-province-canada/">province table</a>. A real employer also withholds CPP and EI if those ceilings are not already maxed, and uses the TD1 claim code and the T4127 factors, not this worksheet. If the stub shows a different dollar, the stub is following the payroll formula. The T1 is where the year gets reconciled.</p>
    </div>

    <h2>When does the flat 15% withholding apply?</h2>

    <p>T4127 says that if the annual taxable-income result in the bonus formula is $5,000 or less, deduct 15% tax from the bonus, or 10% in Quebec. Read that as a test on the formula's annual figure, not as a rule that every bonus of $5,000 or less is taxed at 15% forever. Someone who earns a normal salary will not be in that $5,000 annual-income case. Their bonus is withheld with the difference method. Quebec's 10% in that sentence is the federal instruction inside the payroll formula. Revenu Québec has its own provincial withholding.</p>

    <h2>Can you point the bonus at an RRSP?</h2>

    <p>On the return, a deductible RRSP contribution reduces taxable income. The 2026 RRSP dollar limit is $33,810. Your personal room is on your CRA account and is also limited by a percentage of last year's earned income and by any pension adjustment. A bonus paid in 2026 is earned income for a later year's room. It does not create room on the morning it is paid.</p>

    <p>Whether the employer withholds less because the bonus is transferred directly to an RRSP depends on the employer's payroll practice and on whether you can actually deduct the contribution. Do not assume a verbal "send it to my RRSP" changes the T4. If the transfer is not direct, you receive the cash net of withholding and you contribute yourself. Any extra withholding comes back when you file, if the deduction is allowed. The contribution has to land in time: during the year, or in the first 60 days of the next year, for a deduction on this year's return. Confirm the deadline on the CRA page for the year. This article is not that calendar.</p>

    <div class="tip-box">
        <strong>A bonus and a raise do different things to next year's room:</strong>
        <p>Both are employment income. Both can become part of the earned-income base that creates next year's RRSP room, up to the dollar limit. A raise also raises every future stub. A bonus might not repeat. Negotiate them separately. The comparison of staying versus leaving is <a href="/blog/raise-promotion-negotiation-math-canada/">raise math</a>. Equity that arrives in the same year is <a href="/blog/rsu-stock-options-tax-canada/">RSU and stock-option tax</a>, and it can stack into the same brackets as the bonus.</p>
    </div>

    <h2>What should you check before you spend the deposit?</h2>

    <ul>
        <li><strong>Is it a bonus or a retiring allowance?</strong> Loss of employment is the severance article. CPP and EI treatment flips.</li>
        <li><strong>Have you already maxed CPP and EI?</strong> A bonus late in the year may have little CPP left to withhold. A bonus in January might withhold both.</li>
        <li><strong>What province will you reside in on December 31?</strong> Withholding may use the province of employment. Tax on the return uses residence. They can differ. The salary table is residence.</li>
        <li><strong>Will the bonus push income across a benefit clawback?</strong> That is not extra withholding. It is <a href="/blog/side-income-benefits-tax-clawbacks-canada/">benefits stacking</a>.</li>
    </ul>

    <h2>Frequently asked questions</h2>

    <h3>Is my bonus taxed at 30% or 40%?</h3>
    <p>Only the slice that falls in a bracket with that combined rate, and only after federal and provincial rates are added for your province. Withholding can look like a flat high percentage because it is computed on the margin. It is not a separate bonus tax. File the return. If withholding exceeded the tax on your actual income, the difference is a refund, not a gift.</p>

    <h3>Does the bonus go on a T4A?</h3>
    <p>CRA's page on bonuses says to report it as employment income on the T4 in the year received. A retiring allowance is often the payment that shows up on a T4A. If your slip does not match what the payment was, ask the payroll department before you invent a line on the return.</p>

    <h3>Will I pay CPP twice?</h3>
    <p>CPP is owed on pensionable earnings up to the year's ceilings, across employers in combination. The 2026 YMPE is $74,600 and the YAMPE is $85,000. A bonus counts. If two employers both withhold the maximum, the excess employee contribution is reconciled on the return. Do not ignore it.</p>

    <h3>Can I refuse the bonus and take salary instead?</h3>
    <p>You can negotiate the mix before it is paid. Once it is paid as a bonus, it is received. Splitting it into salary over a later year is a different contract, not a recharacterization you do on the T1. The tax outcome of a higher salary is the province table, run at the new number.</p>

    <h3>What if the bonus is paid in January for last year's work?</h3>
    <p>CRA says the T4 year is the year you receive it. A January payment is next year's income, even if the work was done in December. That also means it lands in next year's brackets, which may be an advantage or not, depending on what else you will earn. It is not a choice you make by the label on the memo.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/calculating-deductions/determining-tax-treatment/bonuses-retroactive-pay-increases-irregular-amounts.html">CRA: bonuses, retroactive pay, and irregular amounts</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/payroll/t4127-payroll-deductions-formulas/t4127-jan/t4127-jan-payroll-deductions-formulas-computer-programs.html">CRA: T4127 bonus formulas, 2026 edition</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/special-payments/special-payments-chart.html">CRA: special payments chart</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html">CRA: 2026 RRSP dollar limit</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The stub is withholding. The return is the tax.</strong></p>
        <p>Brackets and RRSP room decide whether the bonus was expensive. The 2026 tax guide is that reconciliation.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),

  earningPost(
    'severance-pay-tax-canada',
    'Severance Pay Taxes in Canada: Lump Sums, Withholding, and RRSP Room',
    'A retiring allowance paid directly to you is withheld at 10%, 20%, or 30% based on the year's total, not at your marginal rate. The eligible pre-1996 portion can transfer to your own RRSP without using contribution room.',
    `<div class="container">

    <div class="hook">
        Severance that meets the definition of a retiring allowance is included in income. If it is paid to you in cash, CRA's lump-sum rates withhold <span class="highlight">10% on amounts up to $5,000, 20% on $5,001 to $15,000, and 30% above $15,000</span>, using the total retiring allowances for the year. That withholding is not the final tax. Years of service before 1996 can support a transfer to your own RRSP that does not use contribution room.
    </div>

    <p>The hub is the <a href="/blog/tax-aware-income-guide/">tax-aware income guide</a>. A payment that is still wages, or a bonus for work you did, is <a href="/blog/bonus-tax-canada/">bonus tax</a>, and CPP and EI apply. Employment insurance after a job ends is <a href="/blog/employment-insurance-benefits-canada/">the EI guide</a>. RRSP room for the non-eligible portion is the <a href="/blog/contribution-limits/">limits table</a> and the <a href="/blog/rrsp-playbook/">RRSP playbook</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>A retiring allowance includes amounts for loss of office or employment, unused sick leave, and certain damages. CRA's special-payments chart says it is not subject to CPP or EI. Income tax is withheld.</li>
            <li>The 10/20/30 rates are withholding. Quebec's federal portion of those rates is 5%, 10%, and 15%. Provincial Quebec withholding is Revenu Québec's.</li>
            <li>The eligible transfer is $2,000 for each year or part-year of service before 1996, plus $1,500 for each year or part-year before 1989 in which employer pension or DPSP contributions were not vested.</li>
            <li>That eligible transfer goes to your own RRSP, RPP, SPP, or PRPP. It does not go to a spousal RRSP. It does not use regular RRSP room.</li>
            <li>Service in 1996 and later does not earn the $2,000. Amounts above the eligible limit need ordinary RRSP room if you want them inside an RRSP.</li>
        </ul>
    </div>

    <h2>What counts as a retiring allowance?</h2>

    <p>CRA describes a retiring allowance as an amount paid on or after retirement from an office or employment in recognition of long service, or as damages for loss of office or employment. Unused sick-leave credits are included. A payment can be part retiring allowance and part something else. CRA's payroll page says that if a lump sum includes wages in lieu of termination notice and damages, the portions follow their own character, and if there is no breakdown the full amount is generally a retiring allowance. Ask for the breakdown before you assume the whole cheque can move to an RRSP.</p>

    <p>The special-payments chart lists retiring allowances, also called severance, as no for CPP, no for EI, and yes for tax. A salary continuance that is still employment income is not automatically in this bucket. If the payment is wages, the bonus article and a T4 are the closer fit, and EI may be affected differently. This page does not quote EI entitlement rules.</p>

    <h2>How much tax is withheld if you take the cash?</h2>

    <p>CRA's page on payments of retiring allowances tells the employer to withhold on the portion paid directly to the employee, not on the portion transferred directly to an RPP or RRSP. For a resident of Canada the rates on the year's retiring allowances are 10% at $5,000 or less, 20% from $5,001 to $15,000, and 30% at $15,001 or more. In Quebec those percentages are the federal portion only, at 5%, 10%, and 15%, and the employer still has provincial withholding. Instalments of a retiring allowance are added together for the year to pick the rate. A non-resident is generally subject to 25% Part XIII tax unless a treaty reduces it. This article does not quote treaty reductions.</p>

    <div class="example-box">
        <strong>Illustration: $40,000 paid in cash, outside Quebec</strong>
        <p>The year's retiring allowance is over $15,000, so the withholding rate on the direct payment is 30%. Withholding is $12,000. That is not the tax you owe. If you have little other income, 30% can be more than the brackets will charge, and you get some back when you file. If you also have a large salary in the same year, 30% can be less than your marginal rate, and you will owe more. The salary worksheet is <a href="/blog/salary-after-tax-by-province-canada/">the province table</a>. Add the retiring allowance to your other taxable income. Do not stop at the withholding.</p>
    </div>

    <h2>What can move to an RRSP without using room?</h2>

    <p>The eligible part is set out on CRA's transfer page and in Income Tax Folio S2-F1-C2. It is $2,000 for each year or part-year before 1996 with the employer, or a related employer, plus an additional $1,500 for each year or part-year before 1989 of that employment in which no employer pension or DPSP contribution vested in you. Part-years count. The folio says the transfer is made in the year you receive the allowance or in the first 60 days of the next year, and it cannot exceed the retiring allowance included in your income.</p>

    <p>You can transfer that eligible part to your own RPP, SPP, RRSP, or PRPP. You cannot transfer the eligible part to a spouse's or common-law partner's RRSP. CRA is explicit that the $2,000-per-year transfer is not available for 1996 and later years of service. Someone hired in 2005 has no eligible portion from that job. Someone with service in 1990 through 1995 has a limited one. Legal wording in a severance letter does not create pre-1996 years.</p>

    <table>
        <caption>Retiring allowance and RRSPs, as of October 2026. "Room" means your ordinary RRSP deduction limit.</caption>
        <thead>
            <tr>
                <th>Portion</th>
                <th>Where it can go</th>
                <th>Uses RRSP room?</th>
                <th>Withholding if transferred directly</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Eligible: the $2,000 / $1,500 formula for years before 1996</td>
                <td>Your own RRSP, RPP, SPP, or PRPP. Not a spousal RRSP.</td>
                <td>No</td>
                <td>No income tax withheld on the direct transfer</td>
            </tr>
            <tr>
                <td>Non-eligible: 1996 and later service, or amounts above the formula</td>
                <td>Your RRSP or a spousal RRSP, if you can deduct it</td>
                <td>Yes</td>
                <td>Employer can skip withholding if they have reasonable grounds you can deduct the contribution</td>
            </tr>
            <tr>
                <td>Cash in your account</td>
                <td>You can still contribute later, inside the deadlines</td>
                <td>Eligible portion: no. The rest: yes.</td>
                <td>Withholding already happened on the cash. The deduction is claimed on the return.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of October 2026. Sources: CRA, transferring the eligible part of a retiring allowance, and CRA, transfer of a retiring allowance. The 2026 RRSP dollar limit of $33,810 caps ordinary room. It does not cap the eligible transfer.</p>

    <div class="warning-box">
        <strong>Report the full allowance, then deduct the transfer:</strong>
        <p>CRA says to include the full retiring allowance in income. The transferred amount is the deduction, reported on Schedule 7. A direct transfer is not "tax-free money that never appears." If you omit the income and also miss the deduction, the assessment is a mess. Keep the T4 or T4A and the RRSP receipt.</p>
    </div>

    <h2>What should you decide before you sign?</h2>

    <ul>
        <li><strong>Get the years of service in writing,</strong> including part-years, and whether any pre-1989 pension amounts vested. The eligible formula is useless without the dates.</li>
        <li><strong>Separate pay in lieu, bonuses, and damages</strong> if the employer will break them out. They are not all retiring allowances.</li>
        <li><strong>Decide the direct transfer before the deposit.</strong> Withholding applies to cash. A later RRSP contribution gets the deduction, but the cash was already reduced.</li>
        <li><strong>Check ordinary room</strong> before you promise to shelter the non-eligible balance. The dollar limit is not your room.</li>
        <li><strong>Ask what happens to benefits and to EI.</strong> This page does not calculate EI. A continuation of salary can interact with EI differently than a lump sum. Read the EI guide and the record of employment.</li>
    </ul>

    <h2>Frequently asked questions</h2>

    <h3>Is all severance taxed at 30%?</h3>
    <p>Thirty percent is the withholding rate when the year's retiring allowances paid to you exceed $15,000, outside the Quebec federal scale. It is not a flat tax. Your return taxes the amount at whatever brackets your total income falls into, in your province of residence on December 31. You may owe more or get some back.</p>

    <h3>I started work in 2010. Can I roll the severance into an RRSP with no room?</h3>
    <p>Not under the eligible-transfer formula. That formula stops at years before 1996. You can contribute to an RRSP up to your ordinary deduction limit, including a direct transfer of the non-eligible portion if the employer will do it and you can deduct it. No pre-1996 service means no $2,000-per-year addition.</p>

    <h3>Can my spouse's RRSP receive the eligible part?</h3>
    <p>No. CRA says the eligible part goes to your own plan. A spousal contribution is possible only for amounts that fit inside your ordinary RRSP deduction limit, which is the non-eligible path.</p>

    <h3>Do I pay CPP and EI on the severance?</h3>
    <p>Not on a retiring allowance, according to CRA's special-payments chart. If part of the package is wages or a bonus, that part is different. Look at the slips. A T4 box for employment income and a T4A for a retiring allowance are telling you they are not the same payment.</p>

    <h3>What if I am a non-resident when it is paid?</h3>
    <p>CRA generally applies 25% Part XIII withholding, and a tax treaty may reduce it. This page does not list treaty rates. If you left Canada in the same year, residency and departure tax are separate questions. Get advice before you rely on the resident 10/20/30 scale.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/calculating-deductions/determining-tax-treatment/retiring-allowances.html">CRA: payments of retiring allowances</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/transferring/transferring-eligible-part-a-retiring-allowance.html">CRA: transferring the eligible part</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/technical-information/income-tax/income-tax-folios-index/series-2-employers-employees/series-2-employers-employees-folio-1-specific-plans-offered-employers-employees/income-tax-folio-s2-f1-c2-retiring-allowances.html">CRA: Income Tax Folio S2-F1-C2, Retiring Allowances</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/special-payments/special-payments-chart.html">CRA: special payments chart</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html">CRA: 2026 RRSP dollar limit</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>Withholding is a deposit. The eligible years are a formula.</strong></p>
        <p>Room, slips, and the year of payment decide the bill. The 2026 tax guide walks the return side.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),

  earningPost(
    'remote-work-us-company-from-canada',
    'Working Remotely for a US Company From Canada: Employee, Contractor, or EOR',
    'A Canadian resident working in Canada reports that income in Canada. The open choices are employee, self-employed contractor, or an employer of record. The contract's country does not pick the return.',
    `<div class="container">

    <div class="hook">
        If you live in Canada and do the work in Canada, Canada taxes that income whether the company is in the United States. The structure decides the slip. An <span class="highlight">employee</span> belongs on a T4. A <span class="highlight">contractor</span> files Form T2125 and watches the $30,000 GST/HST line. An employer of record is still employment: a Canadian entity is the employer on paper. None of the three is "paid in USD, so no Canadian tax."
    </div>

    <p>The hub is the <a href="/blog/tax-aware-income-guide/">tax-aware income guide</a>. The status test, if the US company wants a contractor but manages you like staff, is <a href="/blog/employee-vs-contractor-canada/">employee versus contractor</a>. GST/HST and T2125 are <a href="/blog/side-hustle-taxes-canada/">side-hustle taxes</a>. What a Canadian salary leaves after tax is <a href="/blog/salary-after-tax-by-province-canada/">the province table</a>. Incorporating the contract is <a href="/blog/should-you-incorporate/">a separate decision</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Residency is about your ties to Canada, not the address on the US offer. A factual resident reports worldwide income.</li>
            <li>The Canada-US social security agreement generally avoids paying both CPP and US Social Security on the same work. Work done in Canada is the usual CPP case. A certificate of coverage is for detachments, up to 60 months under that agreement.</li>
            <li>Self-employed coverage under the agreement follows the country of residence. A contractor living in Canada should expect CPP, both shares.</li>
            <li>US tax withheld at source may be creditable on the Canadian return. This page does not quote a treaty article rate.</li>
            <li>An employer of record can put you on a Canadian T4. What that firm charges the US company is not a figure this page has.</li>
        </ul>
    </div>

    <h2>Which structure are you actually in?</h2>

    <table>
        <caption>Three ways a US company pays someone who works in Canada, as of October 2026. Fees for an employer of record are not listed, because they are a private contract.</caption>
        <thead>
            <tr>
                <th></th>
                <th>Employee of the US company</th>
                <th>Self-employed contractor</th>
                <th>Employee of a Canadian employer of record</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Slip</td>
                <td>T4 if they run Canadian payroll. A US Form W-2 does not replace it.</td>
                <td>No T4. Income on Form T2125.</td>
                <td>T4 from the Canadian employer of record</td>
            </tr>
            <tr>
                <td>Income tax</td>
                <td>Employment income, taxed in your province of residence on December 31</td>
                <td>Business income, same residence rule</td>
                <td>Employment income</td>
            </tr>
            <tr>
                <td>CPP</td>
                <td>Work performed in Canada is generally pensionable here unless a certificate of coverage says otherwise</td>
                <td>You pay both shares. 2026 self-employed maximum $8,460.90, plus up to $832 of the second additional contribution.</td>
                <td>The Canadian employer withholds the employee share and remits both shares</td>
            </tr>
            <tr>
                <td>EI</td>
                <td>Only if the employment is insurable in Canada</td>
                <td>Not automatic. Special benefits are optional. No premium is quoted here.</td>
                <td>Employee EI if the job is insurable</td>
            </tr>
            <tr>
                <td>GST/HST</td>
                <td>Not charged on employment income</td>
                <td>$30,000 small-supplier tests, unless the work is rideshare</td>
                <td>Not charged by you. You are an employee.</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of October 2026. It is a classification aid. A contract that says "contractor" while the company sets your hours, tools, and rate can still be employment. CRA will look at the facts. Form CPT1 is the ruling if you and the payer disagree.</p>

    <h2>Where is the work pensionable?</h2>

    <p>The Canada-US social security agreement, in force since August 1, 1984, is designed to stop people paying into both CPP and US Social Security for the same work. CRA's current certificate-of-coverage page says a detachment to the United States can be covered by a certificate for up to 60 months. That tool is for an employer sending someone abroad temporarily, expecting them to return. It is a poor description of a person hired in Canada to work from their kitchen for a company that has no Canadian payroll.</p>

    <p>CRA also says that, under most of these agreements, a self-employed person who works in one or both countries is subject to the legislation of the country where they reside, and should ask for a certificate of coverage so contributions are not doubled. Living in Canada and invoicing a US client points at CPP. It does not point at opting out because the invoice is in US dollars.</p>

    <div class="warning-box">
        <strong>A US payer that withholds nothing has not paid your CPP:</strong>
        <p>If you are an employee and the US company does not remit CPP, the contributions can still be owing on Canadian pensionable employment. If you are self-employed, both shares are on your return. The 2026 employee maximum outside Quebec is $4,230.45, and the self-employed maximum is $8,460.90, before the second additional contribution. Quebec uses QPP. Do not wait for a US Form W-2 to mention CPP. It will not.</p>
    </div>

    <h2>What about US tax that was already withheld?</h2>

    <p>Some US employers withhold US federal tax, and sometimes state tax, because their payroll system assumes the worker is in the United States. You may also have to file a US return for that income. Canada, if you are resident here, still wants the income. The usual relief is a foreign tax credit for US tax you could not avoid, not a second full tax on the same dollar. This page does not quote the treaty article, the credit limit, or any state. The Canadian form is the foreign tax credit. Keep the US slips. If both countries treat you as a resident, or the work is done partly in each country, get a cross-border advisor. A blog table will not split a hybrid year.</p>

    <p>The US company may ask you to complete an IRS form so they know whether to withhold. Which form is valid depends on whether you are an employee or a contractor and on the type of income. Do not sign a form because a template called it standard. Read the form's own instructions against your status.</p>

    <h2>How do you record US dollars?</h2>

    <p>Canadian returns are in Canadian dollars. Convert each amount with a method you can defend: the rate on the day you received it, or a method CRA accepts for that kind of income and that you use consistently. This page does not quote a Bank of Canada rate and it does not recommend a transfer service. Write the rate down when the deposit hits. Reconstructing a year of USD invoices from a December average is how T2125 numbers drift away from the bank account.</p>

    <div class="tip-box">
        <strong>Province of residence is a December 31 test:</strong>
        <p>A US company does not put you in a US state for Canadian provincial tax. You pay the province or territory where you reside at year-end, plus federal tax. Quebec files its own return. The salary table is the employment-income picture if you are a T4 employee with no other deductions. A contractor's taxable income is profit, not the invoice total.</p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>Can I stay a US employee and ignore CRA?</h3>
    <p>Not if you are resident in Canada and performing the work here. The US payroll department's habit is not the Canadian residency test. Report the income. Then deal with whatever US tax was withheld, as a credit if it qualifies, not as a substitute return.</p>

    <h3>Is an employer of record just a contractor with extra steps?</h3>
    <p>No. Done properly, the employer of record is your employer. You get a T4, Canadian withholdings, and employment standards from that relationship. You do not charge GST/HST. You also do not deduct business expenses the way a proprietor does. The price the US company pays the employer of record is their cost. It is not your gross income.</p>

    <h3>Should I incorporate to bill the US client?</h3>
    <p>Only after you know you are actually a contractor and the profit is large enough to justify a second taxpayer. A corporation that you use like an employment contract can be attacked as a personal-services business. The incorporation guide and the salary-versus-dividend guide are the Canadian half. They do not remove US withholding questions.</p>

    <h3>Do I charge GST/HST to a US client?</h3>
    <p>Employment income is not a GST supply. A contractor's services may be taxable, zero-rated, or outside the small-supplier threshold depending on the place-of-supply rules and the $30,000 tests. Do not assume "US client" means zero. Read the zero-rating rules for exported services against where the work is consumed. The side-hustle article has the registration threshold. It does not have your place-of-supply answer.</p>

    <h3>What if I spend three months in the United States?</h3>
    <p>Then the facts change: where the work was done, which country's social security applies, and possibly residency. A certificate of coverage is the tool when an employer detaches you. A tourist stamp is not a ruling. Track days and duties before you assume the kitchen-table column still fits.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/ic84-6/united-states-social-security-agreement.html">CRA: Canada-United States social security agreement</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/canada-pension-plan-cpp-employment-insurance-ei-rulings/international-social-security-agreements-canada-pension-plan/certificate-coverage/who-apply-a-certificate-coverage.html">CRA: who can apply for a certificate of coverage</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/canada-pension-plan-cpp-employment-insurance-ei-rulings/cpp-ei-explained/canada-pension-plan-employment-insurance-explained-13.html">CRA: international social security agreements and CPP</a></li>
        <li><a href="https://www.canada.ca/en/services/benefits/publicpensions/cpp/cpp-international/united-states.html">Canada: social security agreement with the United States, benefits</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/cpp-contribution-rates-maximums-exemptions.html">CRA: 2026 CPP maximums</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>USD in the bank is still a Canadian filing.</strong></p>
        <p>Status, CPP, and the foreign tax credit are the parts a US offer letter skips. The 2026 tax guide is the Canadian side of that letter.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),

  earningPost(
    'employee-vs-contractor-canada',
    'Employee vs Contractor in Canada: CRA Tests and Why It Matters',
    'CRA decides employee versus self-employed from the working relationship, not the contract title. The factors are control, tools, subcontracting, financial risk, investment, and the chance of profit.',
    `<div class="container">

    <div class="hook">
        Calling someone a contractor does not make them one. CRA looks at the <span class="highlight">facts of the relationship</span>. Outside Quebec the factors in guide RC4110 include control, who provides tools, whether the worker can subcontract or hire helpers, financial risk, responsibility for investment and management, and the chance of profit. In Quebec the Civil Code applies, and the steps are different. If you are unsure, either party can request a CPP/EI ruling.
    </div>

    <p>The hub is the <a href="/blog/tax-aware-income-guide/">tax-aware income guide</a>. The GST/HST and T2125 consequences of actually being self-employed are <a href="/blog/side-hustle-taxes-canada/">side-hustle taxes</a>. App-based driving is <a href="/blog/rideshare-delivery-driver-taxes-canada/">rideshare and delivery</a>. A US company using the word contractor from abroad is <a href="/blog/remote-work-us-company-from-canada/">remote work for a US company</a>. What to charge if you truly are self-employed is <a href="/blog/consulting-rate-after-cpp-ei-tax-canada/">the consulting rate</a>.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>Workers and payers can organize their affairs, but the label has to match the working relationship. Intention is a fact. It is not the only fact.</li>
            <li>An employee works under direction, is part of the payer's business, and normally does not chance a profit or a loss. A self-employed worker carries on their own business.</li>
            <li>The province where the contract was formed matters. Quebec uses the Civil Code. The other provinces and territories use common law.</li>
            <li>The tax consequences are a T4 versus a T2125, who pays CPP, whether EI applies, and whether GST/HST registration is in play.</li>
            <li>Form CPT1 is the request for a CPP/EI ruling. Ask before you file a year on the wrong form, not after an audit has started, if you can.</li>
        </ul>
    </div>

    <h2>What does CRA actually weigh?</h2>

    <p>Guide RC4110 tells you to consider the whole relationship. No single factor settles it. Control is whether the payer can direct what work is done, and how, when, and where. Tools and equipment look at who owns them and who bears replacement, repair, and insurance. A significant investment points toward a business. The right to subcontract or hire assistants points the same way, because it changes the worker's chance of profit and risk of loss. Opportunity for profit means the worker can negotiate price, take more than one payer, and have expenses that can exceed revenue.</p>

    <p>CRA's employment-status page puts the same idea in shorter form. An employee under a contract of service does not normally have the chance to make a profit or suffer a loss, and is integrated into the payer's business. A self-employed worker under a contract for services agrees to provide a service and is free to choose how to carry it out.</p>

    <table>
        <caption>RC4110 factors, as of October 2026. A written contract is relevant. It does not outrank the factors.</caption>
        <thead>
            <tr>
                <th>Factor</th>
                <th>Leans employee</th>
                <th>Leans self-employed</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Control</td>
                <td>Payer directs what, how, when, and where</td>
                <td>Worker decides how the work is carried out</td>
            </tr>
            <tr>
                <td>Tools and equipment</td>
                <td>Payer supplies the significant tools</td>
                <td>Worker owns them and bears repair, replacement, and insurance</td>
            </tr>
            <tr>
                <td>Subcontracting and helpers</td>
                <td>Worker must do the work personally</td>
                <td>Worker can hire or subcontract</td>
            </tr>
            <tr>
                <td>Financial risk</td>
                <td>Worker is paid regardless of the payer's profit</td>
                <td>Worker can incur a loss</td>
            </tr>
            <tr>
                <td>Investment and management</td>
                <td>No meaningful investment, no business decisions</td>
                <td>Worker invests and makes decisions that move profit</td>
            </tr>
            <tr>
                <td>Chance of profit</td>
                <td>A wage or a set rate with no upside the worker controls</td>
                <td>Worker sets price, serves more than one payer, and manages expenses</td>
            </tr>
        </tbody>
    </table>

    <p>Table as of October 2026. Source: CRA guide RC4110 and CRA's employment-status page. It is a summary of factors, not a scorecard. Three factors one way and three the other is why rulings exist.</p>

    <h2>Why does Quebec get a different test?</h2>

    <p>CRA says the factors depend on the province or territory where the parties formed the contract, unless the contract says otherwise. The contract is generally formed where the offer is accepted. Outside Quebec, CRA uses a two-step approach based on common law. In Quebec, it uses a three-step approach based on the Civil Code of Québec, articles dealing with a contract of employment and a contract of enterprise or for services. A remote worker in Montreal and a payer in Toronto do not get to pick the test they like. Figure out where the contract was formed, then use that province's test.</p>

    <h2>What changes if you are on the wrong side?</h2>

    <p>Employees receive a T4. The employer withholds income tax, the employee share of CPP, and EI, and remits the employer shares. The employee's deductions are the narrow list on an employment-expenses form, usually with a signed T2200. Self-employed workers report on Form T2125, deduct business expenses, charge GST/HST once they are registrants, and pay both CPP shares. For 2026 the self-employed CPP maximum is $8,460.90, and the second additional contribution maxes at $832. Regular EI premiums are not part of that invoice. Incorporating a relationship that is really employment can create a personal-services business. That problem is the <a href="/blog/should-you-incorporate/">incorporation guide</a>, not a loophole.</p>

    <div class="example-box">
        <strong>Illustration: same $120,000, two structures</strong>
        <p>An employee in Ontario with a $120,000 salary uses the salary worksheet and employee CPP and EI. A contractor who invoices $120,000 and has $20,000 of real expenses has $100,000 of business income, pays both CPP shares on pensionable earnings, and may have to register for GST/HST if taxable supplies cross $30,000. The contractor does not "keep the employer's CPP." The contractor pays it. Comparing the invoice to a salary without subtracting both CPP shares and the missing benefits is how people underprice a contract. The rate page is the consulting-rate article. The tax on $100,000 of taxable income is the province table, only after expenses.</p>
    </div>

    <div class="warning-box">
        <strong>Benefits are part of the test and part of the price:</strong>
        <p>An employee may have a pension, employer EI, and insured benefits. A contractor usually does not. Dropping those and also paying both CPP shares can erase a higher hourly rate. Price the contract after that gap. Do not discover it at filing time.</p>
    </div>

    <h2>How do you get a ruling?</h2>

    <p>CRA's status page says that if a worker or a payer is unsure, either can ask for a CPP/EI ruling. The form is CPT1, Request for a CPP/EI Ruling – Employee or Self-Employed? The ruling is about CPP and EI status. It is the right tool when a company issues a contractor agreement and then sets the schedule. It is also the right tool when a worker wants deductions that only exist on a T2125 and the payer has been treating them as staff. File the request with the facts, not with the label you prefer.</p>

    <h2>Frequently asked questions</h2>

    <h3>If both sides sign "independent contractor," is that enough?</h3>
    <p>No. CRA says the status you choose has to reflect the working relationship. The written contract is one fact. Control, tools, risk, and profit are the rest. A clause that says "this is not employment" does not bind CRA.</p>

    <h3>I have five clients. Am I automatically a business?</h3>
    <p>Several payers are evidence that you can offer services to more than one person, which RC4110 treats as part of the chance of profit. It is not a switch that ignores control. One client who directs your day can still be your employer. Five clients who each take an invoice, while you set the method, look more like a business.</p>

    <h3>Does the ruling cover GST/HST as well?</h3>
    <p>A CPP/EI ruling decides employment status for those contributions. GST/HST registration follows whether you are making taxable supplies as a business. An employee does not charge GST/HST on wages. A self-employed person uses the small-supplier tests, with the rideshare exception. Status first, then the tax account.</p>

    <h3>Can I deduct my laptop if I am an employee?</h3>
    <p>Usually not, unless the employment-expense rules and a T2200 allow it. Self-employed workers deduct the business portion of tools they use to earn income. Wanting the deduction is not a reason to file as self-employed. Get the status right, then use the form that matches it.</p>

    <h3>What if we have already filed a year the wrong way?</h3>
    <p>Fix it. A ruling or a voluntary disclosure conversation with a tax advisor is cheaper than a later CPP assessment that adds the employer share, penalties, and the GST you never charged. This page is not the process for amending a return. It is the reason to stop adding another year on top.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4110/employee-self-employed.html">CRA: guide RC4110, Employee or Self-employed</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/canada-pension-plan-cpp-employment-insurance-ei-rulings/employee-self-employed.html">CRA: employment status, employee or self-employed</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/canada-pension-plan-cpp-employment-insurance-ei-rulings/employee-self-employed/determine-employment-status.html">CRA: determine the employment status</a></li>
        <li><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/cpp-contribution-rates-maximums-exemptions.html">CRA: 2026 CPP rates and maximums</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>The contract title is the least important line on the contract.</strong></p>
        <p>CPP, EI, and which form you file follow the facts. The 2026 tax guide is the filing half once you know which facts you have.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    ${footer}

</div>`
  ),
];
